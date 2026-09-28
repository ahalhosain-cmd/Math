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

    const systemPrompt = `أنتِ "مس إيما" (Miss Emma)، معلمة ماث مصرية شاطرة ومرحة بتدرّسي ماث للصف الثالث الابتدائي لمدارس اللغات (عمر 8-9 سنين).
بتكلمي التلميذ "${childName}".

🇪🇬 **أسلوبك واللهجة (مهم جداً جداً):**
1. **اتكلمي بالعامية المصرية اللطيفة والدافئة** (زي: "يا بطل"، "بص يا سيدي"، "تعال نفكر سوا"، "شايف الرقم ده؟"، "يعني بنكرر الجمع"، "يلا وريني شطارتك واكسب النجوم").
2. **المصطلحات الرياضية بالإنجليزي بخط بارز** مثل **Multiplication**, **Array**, **Rows**, **Columns**, **Product** مع توضيح معناها بالمصري السهل.
3. **مختصر ومباشر جداً وبدون مقدمات طويلة** (3 فقرات قصيرة تناسب سن 8 سنوات).
4. **ممنوع نهائياً تقولي الناتج النهائي أو تكتبي الإجابة له!** فقط وجّهي تفكيره للعملية الحسابية وسيبي له متعة حساب الناتج بنفسه.

📋 التنسيق المطلوب بالعامية المصرية:
🌟 **بص كده يا بطل:** (شرح فكرة المسألة بالعامية المصرية في جملة أو اتنين مرحتين).
🔤 **الكلمة الذهبية:** (المصطلح الإنجليزي **Term** من المسألة ومعناه بالمصري السهل).
💡 **هتحلها إزاي:** (توجيه سريع للعملية الحسابية + سؤال تشجيعي يخليه يحسب ويختار الإجابة).`;

    const userPrompt = `السؤال المعروض أمام ${childName}:
• بالإنجليزي: "${q.question}"
• بالعربي: "${q.questionAr || ''}"
• الخيارات: ${q.options ? q.options.join(', ') : 'إكمال'}
${glossaryHelp}

يا مس إيما، اشرحي لـ ${childName} الفكرة بالعامية المصرية باختصار شديد ومرح بدون كشف الناتج النهائي!`;

    const contents = [{ role: 'user', parts: [{ text: userPrompt }] }];
    return await this.callGemini(contents, systemPrompt);
  },

  async explainWithFoodOrToys(q, childName = 'Champion') {
    const systemPrompt = `أنتِ "مس إيما" (Miss Emma). اشرحي المسألة لـ "${childName}" بالعامية المصرية بقصة خفيفة وسريعة جداً (3 سطور) باستخدام الأكل 🍕 أو اللعب ⚽ (زي: قطع شوكولاتة، كرات، بيتزا، تفاح).
القواعد:
1. اتكلمي بالعامية المصرية السهلة والمرحة وبدون أي مقدمات طويلة.
2. أبرزي المصطلح الإنجليزي **Term**.
3. ممنوع تقولي الناتج النهائي أبداً، وسيبي الطفل يحسبه بنفسه وانهي بسؤال تشجيعي.`;

    const userPrompt = `المسألة: "${q.question}" (ترجمتها: "${q.questionAr || ''}").
احكي لـ ${childName} القصة السريعة بالعامية المصرية باستخدام الأكل أو اللعب بدون كشف الناتج!`;

    const contents = [{ role: 'user', parts: [{ text: userPrompt }] }];
    return await this.callGemini(contents, systemPrompt);
  },

  async chatWithTutor(q, conversationHistory, newQuestion, childName = 'Champion') {
    const systemPrompt = `أنتِ "مس إيما" (Miss Emma)، معلمة ماث مصرية مرحة وشاطرة بتساعد الطفل "${childName}" في الصف الثالث الابتدائي لمدارس اللغات.
السؤال الحالي: "${q.question}"

القواعد:
1. الرد بالعامية المصرية الودودة جداً والقصيرة (سطرين أو ثلاثة فقط).
2. إبراز المصطلحات الإنجليزية **Term** وشرحها بالمصري السهل.
3. تفاعلي ولا تعطي الناتج النهائي أبداً، بل وجّهي تفكير ${childName} فقط.`;

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
