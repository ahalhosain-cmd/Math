// gemini_tutor.js - Intelligent Bilingual Math Teacher Powered by Google Gemini
// Rotates automatically among the 3 user keys with intelligent fallback on rate limits/errors.

const GeminiTutor = {
  keys: [
    'AQ.Ab8RN6KNwVJlIEeDQa21ay2cQrL-ICGjBUkXspal9bmDzUYHEA',
    'AQ.Ab8RN6KtsbtZ9wJnVnDR7d2h4XOLSv4GWgIUkxdZwsKzoJA3qA',
    'AQ.Ab8RN6JGINGL-MgrZtpLiaWP_OUfiQeb7i5UxMP5O9IOIEBI8A'
  ],
  currentKeyIdx: 0,
  modelName: 'models/gemini-flash-latest',

  getActiveKey() {
    return this.keys[this.currentKeyIdx];
  },

  rotateKey() {
    this.currentKeyIdx = (this.currentKeyIdx + 1) % this.keys.length;
    console.log(`[GeminiTutor] Rotated to Key #${this.currentKeyIdx + 1}`);
    return this.getActiveKey();
  },

  async callGemini(contents, systemPrompt = null) {
    let attempts = 0;
    const maxAttempts = this.keys.length;
    let lastError = null;

    while (attempts < maxAttempts) {
      const activeKey = this.getActiveKey();
      const url = `https://generativelanguage.googleapis.com/v1beta/${this.modelName}:generateContent?key=${activeKey}`;
      
      const payload = {
        contents: contents,
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 2048,
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
          // Rotate key for next query to balance usage across the 3 keys
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
          console.warn(`[GeminiTutor] Key #${this.currentKeyIdx + 1} failed with status ${response.status}:`, errData);
          lastError = (errData.error && errData.error.message) ? errData.error.message : `HTTP ${response.status}`;
          // Rotate to next key and try again
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

    const systemPrompt = `أنتِ "مس إيما" (Miss Emma)، معلمة رياضيات ذكية وودودة ومحبوبة جداً لأطفال الصف الثالث الابتدائي (Primary 3) بمدارس اللغات والمدارس الرسمية التجريبية في مصر.
اسم الطفل الذي تشرحين له هو "${childName}".
الطفل لغته الأم هي اللغة العربية، ولكنه يدرس منهج الماث ويمتحن باللغة الإنجليزية.

🎯 هدفك التعليمي الأساسي:
شرح فكرة المسألة باللغة العربية الواضحة والدافئة والمحببة للأطفال، مع تسليط الضوء على كل المصطلحات الرياضية الإنجليزية (Math Vocabulary) وشرح معناها الرياضي بالعربي، ليتعلم الطفل المصطلح الإنجليزي ويفهم طريقة الحل بدون أي تعقيد.

📋 التزمي دائماً بهذا الهيكل الأنيق والواضح في الشرح:

🌟 **فكرة المسألة ببساطة:**
(شرح مرح ومبسط باللغة العربية يوضح للطفل ماذا يحدث في السؤال بلغة لطيفة وبسيطة تناسب عمر 8-9 سنوات).

🔤 **مصطلحات الماث في السؤال (Key Math Words):**
(حددي أهم المصطلحات والكلمات الإنجليزية الرياضية الموجودة في السؤال، واكتبي كل مصطلح بالإنجليزية بخط بارز **Term** ثم اشرحي معناه بالعربي ودوره في الحل. مثلاً:
• **Share equally**: يعني نوزع بالتساوي، وده معناه عملية قسمة (**Division**).
• **Remainder**: يعني الباقي اللي مش بنقدر نوزعه.
• **Commutative Property**: يعني خاصية الإبدال، تبديل الأماكن لا يغير الناتج.
• **Difference**: يعني الفرق بين العددين، وبنحسبه بالطرح **Subtraction**).

💡 **إزاي تفكر وتحلها (خطوات الحل):**
(خطوات تفكير إرشادية وتوجيهية خطوة بخطوة باللغة العربية توجه الطفل للعملية الحسابية الصحيحة: هل نجمع، نطرح، نضرب، أم نقسم؟ ولماذا؟ مع ترك ناتج الحساب النهائي له).

🚀 **تحدي المس إيما:**
(جملة تشجيعية دافئة تدعو الطفل لحساب الناتج الآن واختيار الإجابة الصحيحة بنفسه).

⚠️ قواعد تربوية صارمة:
1. ممنوع نهائياً إعطاء الناتج النهائي أو ذكر رقم الإجابة الصحيحة أو الخيار الصحيح! (الهدف أن يحسب الطفل بنفسه).
2. لغة الشرح والحديث الرئيسية هي اللغة العربية، مع إبراز المصطلحات الإنجليزية بين علامتي نجوم **English Term** لشرحها.
3. تجنبي تماماً استخدام أي أكواد LaTeX معقدة (مثل \\text{} أو $$)، واستخدمي الرموز البسيطة (×, ÷, +, -, =).
4. استخدمي إيموجي تشجيعية لطيفة لتجعل الشرح مبهجاً وودوداً.`;

    const userPrompt = `السؤال المعروض أمام الطفل ${childName}:
• السؤال بالإنجليزي: "${q.question}"
• الترجمة العربية للسؤال: "${q.questionAr || ''}"
• الخيارات المتاحة: ${q.options ? q.options.join(', ') : 'إكمال ناتج'}
• الفكرة الرياضية للمسألة: "${q.explanation || ''}"
${glossaryHelp}

يا مس إيما، اشرحي لـ ${childName} المسألة بالعربي بأسلوبك المنظم والدافئ، ووضحي له كل المصطلحات الإنجليزية ومعناها الرياضي، ووجهيه إزاي يحل بدون كشف الإجابة النهائية!`;

    const contents = [{ role: 'user', parts: [{ text: userPrompt }] }];
    return await this.callGemini(contents, systemPrompt);
  },

  async explainWithFoodOrToys(q, childName = 'Champion') {
    const systemPrompt = `أنتِ "مس إيما" (Miss Emma)، معلمة الماث للصف الثالث الابتدائي.
اسم الطفل هو "${childName}".
مهمتك: تبسيط نفس المسألة الرياضية بقصة تخيلية مرحة وممتعة من واقع الأكلات المحببة للأطفال (مثل قطع البيتزا 🍕، الكوكيز 🍪، الكشري 🥣، التفاح 🍎) أو ألعابهم (مكعبات الليجو 🧱، كرات القدم ⚽).

قواعد الشرح:
1. الشرح باللغة العربية البسيطة والممتعة جداً.
2. إبراز المصطلحات الإنجليزية الخاصة بالمسألة وشرحها وسط القصة بخط بارز **English Term**.
3. ممنوع نهائياً ذكر الناتج النهائي أو الإجابة الصحيحة!
4. القصة تكون قصيرة ومبهجة وتنتهي بتشجيع الطفل على حساب الناتج بنفسه.`;

    const userPrompt = `المسألة الرياضية: "${q.question}".
(ترجمتها العربية: "${q.questionAr || ''}")
احكي لـ ${childName} قصة قصيرة مرحة بالأكل أو اللعب لشرح الفكرة بالعربي مع إبراز المصطلحات الإنجليزية، بدون كشف الناتج النهائي!`;

    const contents = [{ role: 'user', parts: [{ text: userPrompt }] }];
    return await this.callGemini(contents, systemPrompt);
  },

  async chatWithTutor(q, conversationHistory, newQuestion, childName = 'Champion') {
    const systemPrompt = `أنتِ "مس إيما" (Miss Emma)، معلمة الرياضيات الذكية والودودة للصف الثالث الابتدائي بمدارس اللغات في مصر.
أنتِ تتحدثين الآن مباشرة مع الطفل "${childName}".
السؤال الرياضي المعروض أمامه هو:
"${q.question}" (بالعربي: "${q.questionAr || ''}")

قواعد الرد على استفسار الطفل:
1. الرد باللغة العربية الواضحة والودودة والمشجعة.
2. إذا كان السؤال عن معنى كلمات أو مصطلحات، أو ورد أي مصطلح رياضي في كلامك، اذكريه بالإنجليزية بخط بارز **English Term** مع شرح معناه بالعربي ببساطة.
3. وجهي تفكير الطفل خطوة بخطوة باللغة العربية، دون إعطائه الناتج النهائي أو حل المسألة أبداً.
4. الرد يكون مختصراً وواضحاً ومناسباً لعمر 8 إلى 9 سنوات.`;

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
