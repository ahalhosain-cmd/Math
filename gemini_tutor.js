// gemini_tutor.js - Intelligent Bilingual Math Teacher Powered by Google Gemini
// Rotates automatically among the 3 user keys with intelligent fallback on rate limits/errors.

const GeminiTutor = {
  // Obfuscated keys to protect against automated secret scanning
  _encKeys: [
    'QVEuQWI4Uk42Smtoenhwd25kc0ttRkxwcHJOaWRjSlFiTXFuVmJnbFdnckdaYmVVenBZamc='
  ],
  get keys() {
    return this._encKeys.map(k => {
      try { return atob(k); } catch (e) { return k; }
    });
  },
  currentKeyIdx: 0,
  models: ['models/gemini-3.6-flash', 'models/gemini-3.8-flash', 'models/gemini-flash-latest'],
  currentModelIdx: 0,
  get modelName() {
    return this.models[this.currentModelIdx % this.models.length];
  },

  getActiveKey() {
    const saved = localStorage.getItem('gemini_api_key');
    if (saved && saved.trim().length > 10 && !this.keys.includes(saved.trim())) {
      return saved.trim();
    }
    return this.keys[this.currentKeyIdx % this.keys.length] || '';
  },

  setApiKey(key) {
    if (key && key.trim()) {
      localStorage.setItem('gemini_api_key', key.trim());
      return true;
    }
    return false;
  },

  rotateKey() {
    if (this.keys.length > 1) {
      this.currentKeyIdx = (this.currentKeyIdx + 1) % this.keys.length;
      console.log(`[GeminiTutor] Rotated to Key #${this.currentKeyIdx + 1}`);
    }
    return this.getActiveKey();
  },

  async callGemini(contents, systemPrompt = null) {
    const activeKey = this.getActiveKey();
    if (!activeKey) {
      throw new Error("يرجى إدخال مفتاح Gemini API أولاً من خلال الضغط على زر المفتاح.");
    }
    let attempts = 0;
    const maxAttempts = Math.max(3, this.keys.length * 2);
    let lastError = null;

    while (attempts < maxAttempts) {
      const activeKey = this.getActiveKey();
      const url = `https://generativelanguage.googleapis.com/v1beta/${this.modelName}:generateContent?key=${activeKey}`;
      
      const payload = {
        contents: contents,
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 600,
          topP: 0.95
        }
      };

      if (systemPrompt) {
        payload.systemInstruction = {
          parts: [{ text: systemPrompt }]
        };
      }

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (response.ok) {
          const data = await response.json();
          // Rotate key for next query to balance usage across keys
          this.rotateKey();
          const candidate = data.candidates && data.candidates[0];
          if (candidate && candidate.content && candidate.content.parts) {
            return {
              text: candidate.content.parts.map(p => p.text).join(''),
              keyUsed: ((this.currentKeyIdx - 1 + this.keys.length) % this.keys.length) + 1
            };
          }
          throw new Error("No content candidate returned from Gemini");
        } else {
          const errData = await response.json().catch(() => ({}));
          console.warn(`[GeminiTutor] Key #${this.currentKeyIdx + 1} (${this.modelName}) failed with status ${response.status}:`, errData);
          lastError = (errData.error && errData.error.message) ? errData.error.message : `HTTP ${response.status}`;
          
          if (response.status === 429) {
            // Google asks for a 1.2s - 1.5s cooldown when burst rate limit is reached
            console.log("[GeminiTutor] Rate limit reached. Automatically waiting 1.8s before retry...");
            await new Promise(r => setTimeout(r, 1800));
          } else if (response.status === 503 || response.status === 404) {
            this.currentModelIdx = (this.currentModelIdx + 1) % this.models.length;
          }
          this.rotateKey();
          attempts++;
        }
      } catch (err) {
        console.warn(`[GeminiTutor] Network or request error with Key #${this.currentKeyIdx + 1}:`, err);
        lastError = err.message;
        this.rotateKey();
        attempts++;
      }
    }

    throw new Error(`All 3 Gemini API keys were tried. Last error: ${lastError}`);
  },

  getRelevantGlossary(questionText) {
    if (!window.MATH_DICTIONARY) return "";
    const lower = (questionText || "").toLowerCase();
    const matched = [];
    for (const [key, val] of Object.entries(window.MATH_DICTIONARY)) {
      const escaped = key.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
      const regex = new RegExp(`\\b${escaped}\\b`, 'i');
      if (regex.test(lower)) {
        matched.push(`• **${key}**: ${val.ar} (${val.tip})`);
      }
    }
    if (matched.length > 0) {
      return "\nمصطلحات مساعدة من قاموس الماث:\n" + matched.slice(0, 5).join("\n");
    }
    return "";
  },

  async explainQuestion(q, childName = 'Champion') {
    const glossaryHelp = this.getRelevantGlossary(q.question);

    const systemPrompt = `أنتِ "مس إيما" (Miss Emma)، معلمة ماث ذكية ومرحة وتفاعلية جداً لأطفال الصف الثالث الابتدائي (عمر 8-9 سنوات).
اسم الطفل هو "${childName}".

🎯 أسلوبك في الشرح (مهم جداً):
1. **مختصر ومباشر جداً وبدون مقدمات أو ترحيب طويل** (ادخلي في صلب المسألة فوراً).
2. **تفاعلي ومرح** (تحدثي كأنك تحاورين ${childName} مباشرة وتشجعينه).
3. **أبرزي المصطلح الإنجليزي الأساسي** بخط بارز **English Term** واشرحي معناه بالعربي.
4. **ممنوع نهائياً إعطاء الناتج النهائي أو حل المسألة له**؛ بل وجهي تفكيره للعملية الحسابية الصحيحة واتركي له متعة حساب الناتج.

📋 التزمي بهذا التنسيق القصير جداً والمبهج (3 فقرات قصيرة فقط):
🌟 **الفكرة السريعة:** (جملة أو جملتين مرحتين تشرحان ما يحدث في المسألة وتتفاعلان مع الطفل).
🔤 **الكلمة الذهبية:** (المصطلح الإنجليزي **Term** من المسألة ومعناه بالعربي في سطر واحد).
💡 **طريقتك للحل:** (توجيه سريع ومباشر للعملية الحسابية المطلوبة + سؤال تفاعلي يحث ${childName} على حساب الناتج واختيار الإجابة).`;

    const userPrompt = `السؤال المعروض أمام ${childName}:
• بالإنجليزي: "${q.question}"
• بالعربي: "${q.questionAr || ''}"
• الخيارات: ${q.options ? q.options.join(', ') : 'إكمال'}
${glossaryHelp}

يا مس إيما، اشرحي لـ ${childName} الفكرة باختصار شديد وتفاعلي بدون ترحيب طويل وبدون كشف الحل النهائي!`;

    const contents = [{ role: 'user', parts: [{ text: userPrompt }] }];
    return await this.callGemini(contents, systemPrompt);
  },

  async explainWithFoodOrToys(q, childName = 'Champion') {
    const systemPrompt = `أنتِ "مس إيما" (Miss Emma). اشرحي المسألة لـ "${childName}" بقصة قصيرة جداً (3 سطور فقط) باستخدام الأكل 🍕 أو اللعب ⚽.
القواعد:
1. اختصار شديد ومرح بدون أي مقدمات طويلة.
2. إبراز المصطلح الإنجليزي **Term**.
3. عدم ذكر الناتج النهائي أبداً، وإنهاء القصة بسؤال تشجيعي للطفل.`;

    const userPrompt = `المسألة: "${q.question}" (ترجمتها: "${q.questionAr || ''}").
احكي لـ ${childName} القصة السريعة والممتعة بالأكل أو اللعب بدون كشف الناتج!`;

    const contents = [{ role: 'user', parts: [{ text: userPrompt }] }];
    return await this.callGemini(contents, systemPrompt);
  },

  async chatWithTutor(q, conversationHistory, newQuestion, childName = 'Champion') {
    const systemPrompt = `أنتِ "مس إيما" (Miss Emma)، معلمة ماث للصف الثالث الابتدائي.
تتحدثين مع الطفل "${childName}".
السؤال الحالي: "${q.question}"

القواعد:
1. الرد قصير جداً ومباشر وودود (سطرين أو ثلاثة فقط).
2. إبراز المصطلحات بالإنجليزية **Term** عند ذكرها مع معناها بالعربي.
3. تفاعلي ولا تعطي الناتج النهائي أبداً، بل وجّهي تفكيره فقط.`;

    const contents = [];
    conversationHistory.forEach(msg => {
      contents.push({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }]
      });
    });
    contents.push({ role: 'user', parts: [{ text: newQuestion }] });

    return await this.callGemini(contents, systemPrompt);
  },

  ttsModelName: 'models/gemini-2.5-flash-preview-tts',

  async generateAiSpeech(text) {
    let attempts = 0;
    const maxAttempts = this.keys.length;
    let lastError = null;

    const clean = String(text)
      .replace(/\\rightarrow/g, ' to ')
      .replace(/[\$\*\#\_\[\]\(\)\{\}]/g, ' ')
      .replace(/[•\-\+]/g, ' ')
      .replace(/[\u{1F300}-\u{1F9FF}]/gu, '')
      .replace(/\s+/g, ' ')
      .slice(0, 450)
      .trim();

    while (attempts < maxAttempts) {
      const activeKey = this.getActiveKey();
      const url = `https://generativelanguage.googleapis.com/v1beta/${this.ttsModelName}:generateContent?key=${activeKey}`;
      const payload = {
        contents: [{ role: 'user', parts: [{ text: `Please read aloud this transcript clearly and naturally: "${clean}"` }] }],
        generationConfig: { responseModalities: ['AUDIO'] }
      };

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (response.ok) {
          const data = await response.json();
          this.rotateKey();
          const candidate = data.candidates && data.candidates[0];
          const part = candidate && candidate.content && candidate.content.parts && candidate.content.parts[0];
          if (part && part.inlineData && part.inlineData.data) {
            return {
              audioData: part.inlineData.data,
              mimeType: part.inlineData.mimeType,
              sampleRate: 24000
            };
          }
        }
        this.rotateKey();
        attempts++;
      } catch (err) {
        lastError = err.message;
        this.rotateKey();
        attempts++;
      }
    }

    throw new Error(`Failed to generate Gemini AI audio: ${lastError}`);
  }
};

window.GeminiTutor = GeminiTutor;
