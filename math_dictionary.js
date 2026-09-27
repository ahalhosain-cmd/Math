// math_dictionary.js - Child-friendly English-Arabic Math Dictionary with Emojis

const MATH_DICTIONARY = {
  // General Math & Operations
  "pattern": { ar: "نمط متكرر أو متزايد", emoji: "🔄", tip: "قاعدة تتبعها الأرقام أو الأشكال" },
  "patterns": { ar: "أنماط متكررة", emoji: "🔄", tip: "أشكال أو أعداد تسير وفق قاعدة" },
  "rule": { ar: "القاعدة الرياضية", emoji: "📜", tip: "المقدار الثابت للزيادة أو النقصان" },
  "add": { ar: "اجمع (+)", emoji: "➕", tip: "ضم الأشياء معاً" },
  "added": { ar: "تمت إضافته (+)", emoji: "➕", tip: "زدنا عليه" },
  "addition": { ar: "عملية الجمع", emoji: "➕", tip: "إيجاد المجموع الكلي" },
  "subtract": { ar: "اطرح (-)", emoji: "➖", tip: "خذ جزءاً من الكل" },
  "subtraction": { ar: "عملية الطرح", emoji: "➖", tip: "إيجاد الباقي أو الفرق" },
  "difference": { ar: "الفرق بين العددين", emoji: "➖", tip: "اطرح الصغير من الكبير" },
  "sum": { ar: "المجموع الكلي", emoji: "➕", tip: "ناتج جمع الأعداد" },
  "total": { ar: "الإجمالي / الكل", emoji: "🧺", tip: "كل الأشياء معاً" },
  "altogether": { ar: "معاً / في الإجمالي", emoji: "🤝", tip: "اجمع كل المجموعات" },
  "in all": { ar: "في المجموع كله", emoji: "📦", tip: "اجمع كل العناصر" },
  "left": { ar: "المتبقي / الباقي", emoji: "⏳", tip: "ما بقي بعد الطرح" },
  "remaining": { ar: "المتبقي", emoji: "⏳", tip: "اطرح لمعرفة الباقي" },

  // Multiplication & Division
  "multiply": { ar: "اضرب (×)", emoji: "✖️", tip: "كرر الجمع عدة مرات" },
  "multiplication": { ar: "عملية الضرب", emoji: "✖️", tip: "جمع متكرر لمجموعات متساوية" },
  "divide": { ar: "اقسم (÷)", emoji: "➗", tip: "وزع بالتساوي" },
  "division": { ar: "عملية القسمة", emoji: "➗", tip: "توزيع كمية بالتساوي" },
  "each": { ar: "كل واحد / في كل", emoji: "👉", tip: "العدد في المجموعة الواحدة" },
  "every": { ar: "كل", emoji: "👉", tip: "في كل مجموعة" },
  "equally": { ar: "بالتساوي تماماً", emoji: "⚖️", tip: "بدون أن يزيد أحد عن الآخر" },
  "share": { ar: "شارك / وزّع", emoji: "🤲", tip: "قسمة بالتساوي" },
  "shared": { ar: "تم توزيعه بالتساوي", emoji: "🤲", tip: "عملية قسمة" },
  "array": { ar: "مصفوفة منظمة", emoji: "🧱", tip: "أشكال مرتبة في صفوف وأعمدة" },
  "arrays": { ar: "مصفوفات", emoji: "🧱", tip: "صفوف وأعمدة متساوية" },
  "rows": { ar: "صفوف أفقية (بالعرض)", emoji: "➡️", tip: "الخطوط الأفقية من اليسار لليمين" },
  "row": { ar: "صف أفقي", emoji: "➡️", tip: "خط أفقي بالعرض" },
  "columns": { ar: "أعمدة رأسية (بالطول)", emoji: "⬇️", tip: "الخطوط الرأسية من فوق لتحت" },
  "column": { ar: "عمود رأسي", emoji: "⬇️", tip: "خط رأسي بالطول" },
  "factors": { ar: "عوامل العدد", emoji: "🧩", tip: "الأعداد التي نضربها في بعضها" },
  "factor": { ar: "عامل من عوامل العدد", emoji: "🧩", tip: "العدد المضروب" },
  "product": { ar: "ناتج عملية الضرب", emoji: "🎯", tip: "النتيجة النهائية للضرب" },
  "multiples": { ar: "مضاعفات العدد", emoji: "📈", tip: "القفز بالعدد (مثل جدول الضرب)" },
  "multiple": { ar: "مضاعف للعدد", emoji: "📈", tip: "ناتج ضرب العدد في أي رقم" },
  "commutative": { ar: "خاصية الإبدال", emoji: "🔀", tip: "تبديل الأماكن لا يغير الناتج (3×4 = 4×3)" },
  "distributive": { ar: "خاصية التوزيع", emoji: "🎁", tip: "توزيع الضرب على الجمع داخل الأقواس" },
  "fact family": { ar: "عائلة الحقائق الرياضية", emoji: "👨‍👩‍👦", tip: "3 أرقام تربطها 4 معادلات ضرب وقسمة" },

  // Numbers & Place Value
  "digit": { ar: "رقم واحد", emoji: "1️⃣", tip: "مثل 0، 1، 2... حتى 9" },
  "digits": { ar: "أرقام", emoji: "🔢", tip: "الأرقام المكونة للعدد" },
  "value": { ar: "قيمة الرقم بالأصفار", emoji: "💰", tip: "كم يساوي الرقم ومعه أصفاره" },
  "place value": { ar: "القيمة المكانية (اسم الخانة)", emoji: "🏷️", tip: "مثل: آحاد، عشرات، مئات، ألوف" },
  "ones": { ar: "خانة الآحاد", emoji: "1️⃣", tip: "أول خانة من اليمين" },
  "tens": { ar: "خانة العشرات", emoji: "🔟", tip: "الخانة الثانية بقيمة 10" },
  "hundreds": { ar: "خانة المئات", emoji: "💯", tip: "الخانة الثالثة بقيمة 100" },
  "thousands": { ar: "خانة الآلاف (1,000)", emoji: "⭐", tip: "الخانة الرابعة بقيمة ألف" },
  "ten thousands": { ar: "عشرات الألوف (10,000)", emoji: "🌟", tip: "مكونة من 5 أرقام" },
  "hundred thousands": { ar: "مئات الألوف (100,000)", emoji: "👑", tip: "مكونة من 6 أرقام" },
  "standard form": { ar: "الصيغة القياسية (بالأرقام)", emoji: "🔢", tip: "كتابة العدد عادي مثل: 45,210" },
  "word form": { ar: "الصيغة اللفظية (بالكلمات)", emoji: "📝", tip: "كتابة العدد بالحروف الإنجليزية" },
  "expanded form": { ar: "الصيغة الممتدة (تفكيك الأصفار)", emoji: "➕", tip: "تفكيك كل رقم بقيمته وبينهما زائد" },
  "compare": { ar: "قارن بين العددين", emoji: "⚖️", tip: "استخدم > أو < أو =" },
  "greater than": { ar: "أكبر من (>)", emoji: "🦈", tip: "الرمز يفتح فمه للعدد الأكبر" },
  "less than": { ar: "أصغر من (<)", emoji: "🤏", tip: "العدد الأصغر" },
  "equal": { ar: "يساوي (=)", emoji: "🟰", tip: "الطرفان متطابقان تماماً" },
  "order": { ar: "رتّب الأعداد", emoji: "📶", tip: "تصاعدياً أو تنازلياً" },
  "least": { ar: "الأصغر قيمة", emoji: "🌱", tip: "أقل عدد في المجموعة" },
  "greatest": { ar: "الأكبر قيمة", emoji: "🌳", tip: "أعلى وأكبر عدد" },

  // Shapes & Geometry
  "polygon": { ar: "مضلع هندسي", emoji: "📐", tip: "شكل مغلق ثنائي الأبعاد أضلاعه خطوط مستقيمة" },
  "polygons": { ar: "مضلعات هندسية", emoji: "📐", tip: "أشكال مغلقة بخطوط مستقيمة فقط" },
  "quadrilateral": { ar: "شكل رباعي الأضلاع", emoji: "🔷", tip: "له 4 أضلاع مستقيمة و 4 رؤوس" },
  "quadrilaterals": { ar: "أشكال رباعية", emoji: "🔷", tip: "أشكال لها 4 أضلاع و 4 زوايا" },
  "square": { ar: "مربع", emoji: "🟥", tip: "4 أضلاع متساوية و 4 زوايا قائمة" },
  "rectangle": { ar: "مستطيل", emoji: "▭", tip: "كل ضلعين متقابلين متساويان و 4 زوايا قائمة" },
  "rhombus": { ar: "مُعيّن", emoji: "🔶", tip: "4 أضلاع متساوية في الطول" },
  "parallelogram": { ar: "متوازي أضلاع", emoji: "▰", tip: "زوجان من الأضلاع المتقابلة المتوازية" },
  "trapezoid": { ar: "شبه منحرف", emoji: "⏢", tip: "فيه زوج واحد فقط من الأضلاع المتوازية" },
  "triangle": { ar: "مثلث", emoji: "🔺", tip: "شكل له 3 أضلاع و 3 رؤوس" },
  "sides": { ar: "الأضلاع", emoji: "📏", tip: "الخطوط المستقيمة التي تبني الشكل" },
  "side": { ar: "ضلع واحد", emoji: "📏", tip: "خط مستقيم من حدود الشكل" },
  "vertices": { ar: "الرؤوس (الزوايا)", emoji: "📍", tip: "نقاط التقاء الأضلاع" },
  "vertex": { ar: "رأس واحد (نقطة)", emoji: "📍", tip: "نقطة زاوية في الشكل" },
  "parallel": { ar: "متوازيان (لا يلتقيان أبداً)", emoji: "🛤️", tip: "مثل خطوط شريط القطار" },

  // Measurement & Units
  "length": { ar: "الطول", emoji: "📏", tip: "قياس مسافة الشيء من البداية للنهاية" },
  "ruler": { ar: "المسطرة", emoji: "📏", tip: "أداة قياس نبدأ فيها دائماً من 0" },
  "centimeter": { ar: "سنتيمتر (cm)", emoji: "📏", tip: "وحدة قياس متوسطة (القلم والكتاب)" },
  "centimeters": { ar: "سنتيمترات (cm)", emoji: "📏", tip: "كل 1 متر = 100 سم" },
  "meter": { ar: "متر (m)", emoji: "🚪", tip: "وحدة قياس الأشياء الكبيرة (الباب والغرفة)" },
  "meters": { ar: "أمتار (m)", emoji: "🚪", tip: "المتر الواحد = 100 سنتيمتر" },
  "millimeter": { ar: "مليمتر (mm)", emoji: "🐜", tip: "وحدة قياس الأشياء الدقيقة جداً (النملة وسن القلم)" },
  "millimeters": { ar: "مليمترات (mm)", emoji: "🐜", tip: "كل 1 سم = 10 مليمتر" },
  "perimeter": { ar: "المحيط (السور الخارجي)", emoji: "🟨", tip: "مجموع أطوال كل الأضلاع الخارجية" },
  "area": { ar: "المساحة (المربعات الداخلية)", emoji: "🟩", tip: "المكان الداخلي (الطول × العرض)" },
  "capacity": { ar: "السعة (حجم السوائل)", emoji: "🧪", tip: "كمية السائل التي يستوعبها الوعاء" },
  "liter": { ar: "لتر (L)", emoji: "🧃", tip: "للسوائل الكبيرة (زجاجة ماء = 1 لتر)" },
  "liters": { ar: "لترات (L)", emoji: "🧃", tip: "1 لتر = 1,000 ملليلتر" },
  "milliliter": { ar: "ملليلتر (mL)", emoji: "🥄", tip: "للسوائل الصغيرة (ملعقة دواء = 5 مل)" },
  "milliliters": { ar: "ملليلترات (mL)", emoji: "🥄", tip: "وحدة قياس السوائل الدقيقة" },

  // Time & Graphs
  "clock": { ar: "الساعة", emoji: "⏰", tip: "لقراءة وتحديد الوقت" },
  "hour": { ar: "ساعة (العقرب القصير)", emoji: "⌛", tip: "60 دقيقة كاملة" },
  "hours": { ar: "ساعات", emoji: "⌛", tip: "الساعة الواحدة = 60 دقيقة" },
  "minute": { ar: "دقيقة (العقرب الطويل)", emoji: "⏱️", tip: "اضرب رقم العقرب في 5" },
  "minutes": { ar: "دقائق", emoji: "⏱️", tip: "بين كل رقم ورقم على الساعة 5 دقائق" },
  "elapsed time": { ar: "الوقت المنقضي (المستغرق)", emoji: "⏱️", tip: "وقت النهاية - وقت البداية" },
  "bar graph": { ar: "رسم بياني بالأعمدة", emoji: "📊", tip: "مقارنة البيانات بأطوال الأعمدة" },
  "line plot": { ar: "مخطط تمثيل بالنقاط", emoji: "📈", tip: "تمثيل الأعداد بعلامات X على خط الأعداد" },
  "scale": { ar: "مقياس الرسم", emoji: "📏", tip: "القفزات بين الخطوط (مثل 2، 5، 10)" },
  "key": { ar: "مفتاح الرسم", emoji: "🔑", tip: "يخبرك بقيمة كل علامة X أو صورة" }
};

// Helper: Normalize word to find in dictionary
function lookupMathWord(rawWord) {
  if (!rawWord) return null;
  const clean = rawWord.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim();
  if (MATH_DICTIONARY[clean]) return { ...MATH_DICTIONARY[clean], word: clean };

  // Try singular
  if (clean.endsWith('s') && MATH_DICTIONARY[clean.slice(0, -1)]) {
    return { ...MATH_DICTIONARY[clean.slice(0, -1)], word: clean.slice(0, -1) };
  }
  return null;
}

window.MATH_DICTIONARY = MATH_DICTIONARY;
window.lookupMathWord = lookupMathWord;
