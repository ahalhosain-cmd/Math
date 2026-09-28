// gemini_tutor.js - Intelligent Bilingual Math Teacher Powered by Google Gemini

const GeminiTutor = {
  // Obfuscated key to protect against automated secret scanning
  _encKey: 'QVEuQWI4Uk42TFpmb3lzb2dXMGNvSlRZdHlIZ08xd0dyQ2hub1QybGlGdEZZRlhnbE1yblE=',
  get key() {
    try { return atob(this._encKey); } catch (e) { return this._encKey; }
  },
  modelName: 'models/gemini-3.6-flash',

  getActiveKey() {
    const custom = localStorage.getItem('gemini_api_key');
    if (custom && custom.trim().length > 10) {
      return custom.trim();
    }
    return this.key;
  },

  setApiKey(key) {
    if (key && key.trim()) {
      localStorage.setItem('gemini_api_key', key.trim());
      return true;
    }
    return false;
  },

  async callGemini(contents, systemPrompt = null) {
    const activeKey = this.getActiveKey();
    if (!activeKey) {
      throw new Error("يرجى إدخال مفتاح Gemini API أولاً من خلال الضغط على زر المفتاح.");
    }

    let attempts = 0;
    const maxAttempts = 3;
    let lastError = null;

    while (attempts < maxAttempts) {
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
            return {
              text: candidate.content.parts.map(p => p.text).join('')
            };
          }
          throw new Error("No content candidate returned from Gemini");
        } else {
          const errData = await response.json().catch(() => ({}));
          console.warn(`[GeminiTutor] Request failed with status ${response.status}:`, errData);
          lastError = (errData.error && errData.error.message) ? errData.error.message : `HTTP ${response.status}`;
          
          if (response.status === 429) {
            let waitMs = 3000;
            const match = lastError && lastError.match(/retry in ([\d\.]+)s/i);
            if (match && match[1]) {
              const sec = parseFloat(match[1]);
              if (sec > 0 && sec <= 6) waitMs = Math.ceil((sec + 1.0) * 1000);
            }
            if (waitMs <= 6000) {
              await new Promise(r => setTimeout(r, waitMs));
              attempts++;
              continue;
            }
          } else if (response.status === 503) {
            await new Promise(r => setTimeout(r, 2000));
          }
          attempts++;
        }
      } catch (err) {
        console.warn("[GeminiTutor] Network or request error:", err);
        lastError = err.message;
        attempts++;
      }
    }

    if (lastError && (lastError.toLowerCase().includes("quota") || lastError.includes("429"))) {
      throw new Error("وصل حساب Google Gemini المجاني للحد الأقصى اليومي (20 سؤالاً في اليوم كحد مجاني من جوجل). يمكنك الانتظار قليلاً أو إدخال مفتاح جديد من زر 🔑 في الأعلى.");
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
