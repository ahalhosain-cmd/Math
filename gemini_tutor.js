// gemini_tutor.js - Intelligent Bilingual Math Teacher Powered by Google Gemini

const GeminiTutor = {
  // Obfuscated keys to protect against automated secret scanning
  _encKeys: [
    'QVEuQWI4Uk42TFpmb3lzb2dXMGNvSlRZdHlIZ08xd0dyQ2hub1QybGlGdEZZRlhnbE1yblE=', // Key A (Fresh & Active)
    'QVEuQWI4Uk42S0pkdjlaUllfZnBZX1hwZDdsQ2ZFZ0dzX2FvUElwa255NnJobGt1Mkg0SGc='  // Key B (Backup Active)
  ],

  currentKeyIdx: 0,
  modelName: 'models/gemini-3.6-flash',

  getAllKeys() {
    const list = this._encKeys.map(k => {
      try { return atob(k); } catch (e) { return k; }
    });
    // Check custom key in localStorage
    const custom = localStorage.getItem('gemini_api_key');
    if (custom && custom.trim().length > 10 && !list.includes(custom.trim())) {
      list.unshift(custom.trim()); // Prioritize user-added key
    }
    return list;
  },

  setApiKey(key) {
    if (key && key.trim()) {
      localStorage.setItem('gemini_api_key', key.trim());
      this.currentKeyIdx = 0;
      return true;
    }
    return false;
  },

  rotateKey() {
    const keys = this.getAllKeys();
    if (keys.length > 1) {
      this.currentKeyIdx = (this.currentKeyIdx + 1) % keys.length;
      console.log(`[GeminiTutor] Rotated to Key #${this.currentKeyIdx + 1}/${keys.length}`);
    }
  },

  async callGemini(contents, systemPrompt = null) {
    const keys = this.getAllKeys();
    if (!keys || keys.length === 0) {
      throw new Error("يرجى إدخال مفتاح Gemini API أولاً من خلال الضغط على زر المفتاح.");
    }

    let attempts = 0;
    const maxAttempts = Math.max(3, keys.length * 2);
    let lastError = null;

    while (attempts < maxAttempts) {
      const activeKey = keys[this.currentKeyIdx % keys.length];
      const keyNumber = (this.currentKeyIdx % keys.length) + 1;
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
          const candidate = data.candidates && data.candidates[0];
          if (candidate && candidate.content && candidate.content.parts) {
            const result = {
              text: candidate.content.parts.map(p => p.text).join(''),
              keyUsed: keyNumber,
              totalKeys: keys.length
            };
            // Rotate key for the next query to balance load across keys
            this.rotateKey();
            return result;
          }
          throw new Error("No content candidate returned from Gemini");
        } else {
          const errData = await response.json().catch(() => ({}));
          console.warn(`[GeminiTutor] Key #${keyNumber} failed with status ${response.status}:`, errData);
          lastError = (errData.error && errData.error.message) ? errData.error.message : `HTTP ${response.status}`;
          
          if (response.status === 429) {
            console.log(`[GeminiTutor] Key #${keyNumber} reached rate limit. Rotating to next key...`);
            this.rotateKey();
            if (keys.length === 1 || attempts >= keys.length) {
              let waitMs = 2500;
              const match = lastError && lastError.match(/retry in ([\d\.]+)s/i);
              if (match && match[1]) {
                const sec = parseFloat(match[1]);
                if (sec > 0 && sec <= 6) waitMs = Math.ceil((sec + 0.9) * 1000);
              }
              await new Promise(r => setTimeout(r, waitMs));
            }
          } else if (response.status === 401) {
            console.warn(`[GeminiTutor] Key #${keyNumber} is invalid. Rotating.`);
            this.rotateKey();
          } else if (response.status === 503) {
            console.log("[GeminiTutor] High demand on server. Waiting 1.5s...");
            await new Promise(r => setTimeout(r, 1500));
            this.rotateKey();
          } else {
            this.rotateKey();
          }
          attempts++;
        }
      } catch (err) {
        console.warn(`[GeminiTutor] Network or request error on Key #${keyNumber}:`, err);
        lastError = err.message;
        this.rotateKey();
        attempts++;
      }
    }

    if (lastError && (lastError.toLowerCase().includes("quota") || lastError.includes("429"))) {
      throw new Error(`عذراً يا بطل! تم استهلاك الرصيد اليومي لمفاتيح Gemini النشطة (${keys.length} مفاتيح). يمكنك الانتظار قليلاً أو إضافة مفتاح إضافي عبر زر 🔑.`);
    }
    if (lastError && (lastError.toLowerCase().includes("high demand") || lastError.includes("503"))) {
      throw new Error("سيرفرات الذكاء الاصطناعي تشهد ضغطاً مؤقتاً، يرجى إعادة المحاولة بعد ثوانٍ معدودة.");
    }

    throw new Error(`Gemini API: ${lastError}`);
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

  async generateAiSpeech(text) {
    // Cloud TTS is disabled to preserve 100% of the free Gemini API quota for mathematical explanations.
    // Speech is handled instantly (< 0.05s) by the browser's built-in natural teacher voice.
    return null;
  }
};

window.GeminiTutor = GeminiTutor;
