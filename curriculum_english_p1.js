// curriculum_english_p1.js - Official Egyptian Ministry Primary 1 (Term 1) English Curriculum (Connect 1)
// Tailored for 6-Year-Old Arab Children (Pre-literacy, Audio-First, Multisensory Flashcards, Listen & Tap)
// Aligned with the 2024/2025/2026 Textbook: English_language_prim1_t1.pdf (Pages 7 - 126)

const CURRICULUM_ENGLISH_P1 = [
  {
    id: "eng_p1_u1",
    number: 1,
    subject: "english",
    title: "Welcome to My School",
    titleAr: "أهلاً بكم في مدرستي",
    icon: "🏫",
    color: "#2563EB",
    bookPages: "7 - 24",
    description: "Greetings, classroom objects, instructions, and phonics for letters Tt and Ii.",
    lessons: [
      {
        id: "eng_p1_u1_l1",
        lessonNumber: 1,
        bookPage: 8,
        title: "Greetings & Friends",
        titleAr: "التحيات والأصدقاء",
        audioPromptEn: "Hello! What is your name? Say Hello to your new friends!",
        audioPromptAr: "أهلاً بكِ في المدرسة! يلا نتعلم إزاي نسلم على أصحابنا ونقول مرحباً!",
        vocab: [
          { word: "Hello", wordAr: "أهلاً / مرحباً", emoji: "👋", sound: "Hello! أهلاً وسهلاً" },
          { word: "Goodbye", wordAr: "مع السلامة", emoji: "🙋‍♂️", sound: "Goodbye! مع السلامة يا صديقي" },
          { word: "Friends", wordAr: "أصدقاء", emoji: "👫", sound: "Friends! أصدقاء حلوين" },
          { word: "Shake hands", wordAr: "يُسلّم باليد", emoji: "🤝", sound: "Shake hands! بنسلم بالإيد" },
          { word: "Play", wordAr: "يلعب", emoji: "⚽", sound: "Play! يلعب ويمرح" }
        ],
        questions: [
          {
            id: "eng_u1_l1_q1",
            format: "choose",
            type: "listen_tap",
            question: "Listen: 'Hello!' 👋 Which picture means Hello?",
            questionAr: "اسمعي الصوت: 'Hello!' .. أي صورة معناها أهلاً وبتسلم؟ 👋",
            audioListen: "Hello! Which one is Hello?",
            audioListenAr: "هللو! فين صورة التحية أهلاً؟",
            options: ["👋 Hello", "⚽ Play", "🤝 Shake hands"],
            answer: "👋 Hello",
            visual: { type: "vocab_card", emoji: "👋", label: "Hello" },
            explanation: "Hello means أهلاً ومرحباً! بنسلم بإيدينا ونبتسم 👋",
            hintAr: "شاوري على الإيد اللي بتسلم وتقول أهلاً!"
          },
          {
            id: "eng_u1_l1_q2",
            format: "choose",
            type: "listen_tap",
            question: "Listen: 'Shake hands!' 🤝 Tap the matching picture:",
            questionAr: "اسمعي الصوت: 'Shake hands!' .. شاوري على صورة السلام بالإيد 🤝",
            audioListen: "Shake hands! Do you want to shake hands?",
            audioListenAr: "شيك هاندز! فين السلام بالإيد؟",
            options: ["🤝 Shake hands", "🙋‍♂️ Goodbye", "👋 Hello"],
            answer: "🤝 Shake hands",
            visual: { type: "vocab_card", emoji: "🤝", label: "Shake hands" },
            explanation: "Shake hands يعني بنسلم بالإيد على أصحابنا الجدد 🤝",
            hintAr: "اضغطي على صورة الإيدين اللي بيسلموا على بعض!"
          },
          {
            id: "eng_u1_l1_q3",
            format: "choose",
            type: "dialog_response",
            question: "When someone says 'Hello!', you say: ___",
            questionAr: "لما حد يقولك 'Hello!' أهلاً، هتردي وتقولي له: ___",
            audioListen: "Hello! What do you say?",
            audioListenAr: "هللو! هتردي عليه وتقولي إيه؟",
            options: ["👋 Hello!", "😴 Sleep", "🏃 Run"],
            answer: "👋 Hello!",
            visual: { type: "vocab_card", emoji: "👋", label: "Hello!" },
            explanation: "برافو! لما حد يقولنا Hello بنرد ونقول Hello! 👋",
            hintAr: "بنرد بنفس الكلمة الجميلة: Hello!"
          }
        ]
      },
      {
        id: "eng_p1_u1_l2",
        lessonNumber: 2,
        bookPage: 15,
        title: "Phonics: Letter Tt",
        titleAr: "صوتيات: حرف التاء Tt",
        audioPromptEn: "Letter T sounds like /t/ /t/! Let's find words that start with /t/!",
        audioPromptAr: "حرف الـ T صوته /تـ/ /تـ/! يلا نكتشف الكلمات اللي بتبدأ بصوت التاء!",
        vocab: [
          { word: "Tiger", wordAr: "نمر", emoji: "🐯", sound: "/t/ /t/ Tiger! النمر السريع" },
          { word: "Tomato", wordAr: "طماطم", emoji: "🍅", sound: "/t/ /t/ Tomato! طماطم حمراء لذيذة" },
          { word: "Table", wordAr: "ترابيزة / طاولة", emoji: "🪑", sound: "/t/ /t/ Table! ترابيزة الفصل" },
          { word: "Tree", wordAr: "شجرة", emoji: "🌳", sound: "/t/ /t/ Tree! شجرة خضراء عالية" }
        ],
        questions: [
          {
            id: "eng_u1_l2_q1",
            format: "choose",
            type: "phonics_match",
            question: "Listen to the sound: /t/ /t/! Which word starts with /t/?",
            questionAr: "اسمعي صوت /تـ/ /تـ/! أي كلمة بتبدأ بحرف Tt؟",
            audioListen: "/t/ /t/! Tiger or Apple?",
            audioListenAr: "مين بيبدأ بصوت التاء؟ تايجر النمر ولا تفاحة؟",
            options: ["🐯 Tiger", "🍎 Apple", "🐱 Cat"],
            answer: "🐯 Tiger",
            visual: { type: "vocab_card", emoji: "🐯", label: "Tiger (/t/)" },
            explanation: "/t/ /t/ Tiger! النمر بيبدأ بحرف Tt 🐯",
            hintAr: "شاوري على النمر الشجاع 🐯"
          },
          {
            id: "eng_u1_l2_q2",
            format: "choose",
            type: "phonics_match",
            question: "Which delicious red food starts with letter Tt (/t/)?",
            questionAr: "أي طعام أحمر لذيذ بيبدأ بصوت التاء /t/؟",
            audioListen: "/t/ /t/ Tomato! Can you find Tomato?",
            audioListenAr: "تـ.. تـ.. طماطم توميتو! فين الطماطم؟",
            options: ["🍅 Tomato", "🍌 Banana", "🥚 Egg"],
            answer: "🍅 Tomato",
            visual: { type: "vocab_card", emoji: "🍅", label: "Tomato (/t/)" },
            explanation: "/t/ /t/ Tomato! طماطم بتبدأ بحرف Tt 🍅",
            hintAr: "شاوري على الطماطم الحمراء 🍅"
          },
          {
            id: "eng_u1_l2_q3",
            format: "choose",
            type: "listen_tap",
            question: "Find the green 'Tree' 🌳:",
            questionAr: "فين الشجرة الخضراء الجميلة 'Tree'؟ 🌳",
            audioListen: "/t/ /t/ Tree! Tap the Tree!",
            audioListenAr: "تري! اضغطي على الشجرة الخضراء",
            options: ["🌳 Tree", "🚗 Car", "☀️ Sun"],
            answer: "🌳 Tree",
            visual: { type: "vocab_card", emoji: "🌳", label: "Tree" },
            explanation: "/t/ /t/ Tree! شجرة جميلة بتبدأ بحرف Tt 🌳",
            hintAr: "اضغطي على الشجرة الخضراء 🌳"
          }
        ]
      },
      {
        id: "eng_p1_u1_l3",
        lessonNumber: 3,
        bookPage: 17,
        title: "Around My Classroom",
        titleAr: "أدوات فصلي وتعليمات المعلمة",
        audioPromptEn: "Look around the classroom! Book, Bag, Pencil, and Desk!",
        audioPromptAr: "يلا نتعرف على أدوات الفصل الجميلة: الشنطة والكتاب والقلم!",
        vocab: [
          { word: "Bag", wordAr: "شنطة المدرسة", emoji: "🎒", sound: "Bag! شنطتي المدرسية الجميلة" },
          { word: "Book", wordAr: "كتاب مدرسي", emoji: "📖", sound: "Book! كتابي الممتع" },
          { word: "Pencil", wordAr: "قلم رصاص", emoji: "✏️", sound: "Pencil! قلم رصاص للكتابة" },
          { word: "Desk", wordAr: "ديسك / مقعد", emoji: "🏫", sound: "Desk! الديسك اللي بقعد عليه في فصلي" },
          { word: "Chair", wordAr: "كرسي", emoji: "🪑", sound: "Chair! الكرسي المريح" },
          { word: "Stand up", wordAr: "قِفْ", emoji: "🧍", sound: "Stand up! يلا نقف بنشاط" },
          { word: "Sit down", wordAr: "اجلسْ", emoji: "🧎", sound: "Sit down! نقعد بأدب" }
        ],
        questions: [
          {
            id: "eng_u1_l3_q1",
            format: "choose",
            type: "listen_tap",
            question: "Listen: 'Pencil' ✏️ Tap the Pencil:",
            questionAr: "اسمعي الصوت: 'Pencil' .. فين القلم الرصاص؟ ✏️",
            audioListen: "Pencil! Where is your pencil?",
            audioListenAr: "بينسل! فين القلم الرصاص اللي بنرسم بيه؟",
            options: ["✏️ Pencil", "🎒 Bag", "📖 Book"],
            answer: "✏️ Pencil",
            visual: { type: "vocab_card", emoji: "✏️", label: "Pencil" },
            explanation: "Pencil يعني قلم رصاص بنكتب ونرسم بيه ✏️",
            hintAr: "اضغطي على القلم الرصاص ✏️"
          },
          {
            id: "eng_u1_l3_q2",
            format: "choose",
            type: "listen_tap",
            question: "Listen: 'Bag' 🎒 Tap your school Bag:",
            questionAr: "اسمعي الصوت: 'Bag' .. فين شنطة المدرسة الجميلة؟ 🎒",
            audioListen: "Bag! Open your bag!",
            audioListenAr: "باج! فين الشنطة المدرسية؟",
            options: ["🎒 Bag", "🪑 Chair", "✏️ Pencil"],
            answer: "🎒 Bag",
            visual: { type: "vocab_card", emoji: "🎒", label: "Bag" },
            explanation: "Bag يعني شنطتي المدرسية اللي بحط فيها كتبي 🎒",
            hintAr: "اضغطي على الشنطة المدرسية 🎒"
          },
          {
            id: "eng_u1_l3_q3",
            format: "choose",
            type: "action_match",
            question: "When the teacher says: 'Stand up!' 🧍 you should:",
            questionAr: "لما المعلمة تقول 'Stand up!' في الفصل، المفروض نعمل إيه؟",
            audioListen: "Stand up! What do you do?",
            audioListenAr: "ستاند أب! يعني نقف ولا نقعد؟",
            options: ["🧍 نقف بنشاط (Stand up)", "🧎 نجلس (Sit down)", "😴 ننام"],
            answer: "🧍 نقف بنشاط (Stand up)",
            visual: { type: "vocab_card", emoji: "🧍", label: "Stand up" },
            explanation: "Stand up يعني نقف بنشاط في طابور وفصل المدرسة! 🧍",
            hintAr: "Stand up يعني نقف على رجلينا بنشاط!"
          }
        ]
      },
      {
        id: "eng_p1_u1_l4",
        lessonNumber: 4,
        bookPage: 21,
        title: "Phonics: Letter Ii",
        titleAr: "صوتيات: حرف Ii (الكسرة /إِ/)",
        audioPromptEn: "Letter I sounds like /i/ /i/! Insect and Ink!",
        audioPromptAr: "حرف الـ I صوته الكسرة الخفيفة /إِ/ /إِ/! زي حشرة إنكت وحبر إنك!",
        vocab: [
          { word: "Insect", wordAr: "حشرة صغيرة", emoji: "🐞", sound: "/i/ /i/ Insect! حشرة صغيرة ملونة" },
          { word: "Ink", wordAr: "حبر القلم", emoji: "✒️", sound: "/i/ /i/ Ink! حبر القلم الأزرق" },
          { word: "In", wordAr: "داخل / في", emoji: "📥", sound: "In! جوه الصندوق" }
        ],
        questions: [
          {
            id: "eng_u1_l4_q1",
            format: "choose",
            type: "phonics_match",
            question: "Listen to the sound: /i/ /i/! Which word starts with /i/?",
            questionAr: "اسمعي صوت الكسرة: /إِ/ /إِ/! أي كلمة بتبدأ بحرف Ii؟",
            audioListen: "/i/ /i/! Insect or Dog?",
            audioListenAr: "مين بيبدأ بصوت /إِ/؟ إنسكت الحشرة ولا دوج الكلب؟",
            options: ["🐞 Insect", "🐶 Dog", "☀️ Sun"],
            answer: "🐞 Insect",
            visual: { type: "vocab_card", emoji: "🐞", label: "Insect (/i/)" },
            explanation: "/i/ /i/ Insect! الحشرة الجميلة بتبدأ بحرف Ii 🐞",
            hintAr: "شاوري على الحشرة الملونة 🐞"
          },
          {
            id: "eng_u1_l4_q2",
            format: "choose",
            type: "listen_tap",
            question: "Listen: 'Ink' ✒️ Tap the bottle of Ink:",
            questionAr: "اسمعي الصوت: 'Ink' .. فين الحبر الأزرق؟ ✒️",
            audioListen: "/i/ /i/ Ink! Tap the Ink!",
            audioListenAr: "إنك! يعني حبر القلم الأزرق",
            options: ["✒️ Ink", "🍅 Tomato", "🎒 Bag"],
            answer: "✒️ Ink",
            visual: { type: "vocab_card", emoji: "✒️", label: "Ink (/i/)" },
            explanation: "/i/ /i/ Ink يعني حبر القلم ✒️",
            hintAr: "اضغطي على قلم الحبر ✒️"
          }
        ]
      }
    ]
  },
  {
    id: "eng_p1_u2",
    number: 2,
    subject: "english",
    title: "The Garden of Colors and Shapes",
    titleAr: "حديقة الألوان والأشكال",
    icon: "🎨",
    color: "#10B981",
    bookPages: "25 - 42",
    description: "Garden nature, colors, 2D shapes, and phonics for letters Ss and Aa.",
    lessons: [
      {
        id: "eng_p1_u2_l1",
        lessonNumber: 1,
        bookPage: 26,
        title: "In the Garden",
        titleAr: "في الحديقة الجميلة",
        audioPromptEn: "Look at the garden! Flower, Tree, Butterfly, Bird, Sky, and Grass!",
        audioPromptAr: "يلا نتفسح في الحديقة: نشوف الوردة الجميلة، الفراشة، والعصفور المغرد!",
        vocab: [
          { word: "Flower", wordAr: "وردة جميلة", emoji: "🌸", sound: "Flower! وردة ريحتها حلوة" },
          { word: "Butterfly", wordAr: "فراشة ملونة", emoji: "🦋", sound: "Butterfly! فراشة تطير في الهوا" },
          { word: "Bird", wordAr: "عصفور مغرد", emoji: "🐦", sound: "Bird! عصفور يغني فوق الشجرة" },
          { word: "Grass", wordAr: "عشب أخضر", emoji: "🌱", sound: "Grass! العشب الأخضر الناعم" },
          { word: "Sky", wordAr: "سماء زرقاء", emoji: "🌤️", sound: "Sky! السماء الزرقاء الصافية" }
        ],
        questions: [
          {
            id: "eng_u2_l1_q1",
            format: "choose",
            type: "listen_tap",
            question: "Listen: 'Butterfly' 🦋 Tap the colorful Butterfly:",
            questionAr: "اسمعي الصوت: 'Butterfly' .. فين الفراشة الملونة اللي بتطير؟ 🦋",
            audioListen: "Butterfly! Where is the butterfly?",
            audioListenAr: "باترفلاي! شاوري على الفراشة الملونة",
            options: ["🦋 Butterfly", "🌸 Flower", "🌱 Grass"],
            answer: "🦋 Butterfly",
            visual: { type: "vocab_card", emoji: "🦋", label: "Butterfly" },
            explanation: "Butterfly يعني فراشة رقيقة تطير بين الزهور 🦋",
            hintAr: "اضغطي على الفراشة الملونة 🦋"
          },
          {
            id: "eng_u2_l1_q2",
            format: "choose",
            type: "listen_tap",
            question: "Listen: 'Flower' 🌸 Tap the pretty Flower:",
            questionAr: "اسمعي الصوت: 'Flower' .. فين الوردة الجميلة؟ 🌸",
            audioListen: "Flower! Tap the pretty flower!",
            audioListenAr: "فلاور! يعني وردة جميلة وريحتها حلوة",
            options: ["🌸 Flower", "🐦 Bird", "🌤️ Sky"],
            answer: "🌸 Flower",
            visual: { type: "vocab_card", emoji: "🌸", label: "Flower" },
            explanation: "Flower يعني وردة ملونة في الحديقة 🌸",
            hintAr: "اضغطي على الوردة البينك 🌸"
          }
        ]
      },
      {
        id: "eng_p1_u2_l2",
        lessonNumber: 2,
        bookPage: 31,
        title: "Phonics: Letter Ss",
        titleAr: "صوتيات: حرف السين Ss (صوت الفحيح /سـ/)",
        audioPromptEn: "Letter S sounds like a snake: /s/ /s/! Sun and Star!",
        audioPromptAr: "حرف الـ S صوته زي فحيح الثعبان: /سـ/ /سـ/! شمس صن ونجمة ستار!",
        vocab: [
          { word: "Sun", wordAr: "شمس ذهبية", emoji: "☀️", sound: "/s/ /s/ Sun! الشمس الدافئة" },
          { word: "Star", wordAr: "نجمة لامعة", emoji: "⭐", sound: "/s/ /s/ Star! النجمة بتلمع في السماء" },
          { word: "Snake", wordAr: "ثعبان", emoji: "🐍", sound: "/s/ /s/ Snake! الثعبان" },
          { word: "Spider", wordAr: "عنكبوت", emoji: "🕷️", sound: "/s/ /s/ Spider! العنكبوت الصغير" }
        ],
        questions: [
          {
            id: "eng_u2_l2_q1",
            format: "choose",
            type: "phonics_match",
            question: "Listen to the sound: /s/ /s/! Which shining object starts with /s/?",
            questionAr: "اسمعي صوت /سـ/ /سـ/! مين في السماء بيبدأ بصوت السـ؟",
            audioListen: "/s/ /s/ Sun! Where is the Sun?",
            audioListenAr: "صن! فين الشمس الذهبية؟",
            options: ["☀️ Sun", "🌙 Moon", "🌧️ Rain"],
            answer: "☀️ Sun",
            visual: { type: "vocab_card", emoji: "☀️", label: "Sun (/s/)" },
            explanation: "/s/ /s/ Sun! الشمس بتبدأ بحرف Ss ☀️",
            hintAr: "شاوري على الشمس الذهبية المنورة ☀️"
          },
          {
            id: "eng_u2_l2_q2",
            format: "choose",
            type: "phonics_match",
            question: "Which night-time object starts with /s/ /s/?",
            questionAr: "مين بتلمع في السماء بالليل وبتبدأ بصوت /سـ/؟",
            audioListen: "/s/ /s/ Star! Tap the Star!",
            audioListenAr: "ستار! يعني نجمة لامعة",
            options: ["⭐ Star", "🍎 Apple", "🌳 Tree"],
            answer: "⭐ Star",
            visual: { type: "vocab_card", emoji: "⭐", label: "Star (/s/)" },
            explanation: "/s/ /s/ Star! النجمة الجميلة بتبدأ بحرف Ss ⭐",
            hintAr: "اضغطي على النجمة الذهبية ⭐"
          }
        ]
      },
      {
        id: "eng_p1_u2_l3",
        lessonNumber: 3,
        bookPage: 34,
        title: "Colors & Shapes",
        titleAr: "الألوان والأشكال الهندسية",
        audioPromptEn: "Let's explore Colors and Shapes! Red, Blue, Yellow, Green, Circle, and Square!",
        audioPromptAr: "يلا نتعرف على الألوان المبهجة والأشكال الهندسية: أحمر، أزرق، دائرة، ومربع!",
        vocab: [
          { word: "Red", wordAr: "أحمر", emoji: "🔴", sound: "Red! اللون الأحمر الجميل" },
          { word: "Blue", wordAr: "أزرق", emoji: "🔵", sound: "Blue! لون البحر والسماء" },
          { word: "Yellow", wordAr: "أصفر", emoji: "🟡", sound: "Yellow! لون الشمس والموز" },
          { word: "Green", wordAr: "أخضر", emoji: "🟢", sound: "Green! لون ورق الشجر" },
          { word: "Circle", wordAr: "دائرة مدورة", emoji: "⭕", sound: "Circle! مدورة زي الشمس والكرة" },
          { word: "Square", wordAr: "مربع متساوي", emoji: "⏹️", sound: "Square! مربع ليه 4 أضلاع قد بعض" },
          { word: "Triangle", wordAr: "مثلث", emoji: "🔺", sound: "Triangle! مثلث زي قطعة البيتزا" }
        ],
        questions: [
          {
            id: "eng_u2_l3_q1",
            format: "choose",
            type: "listen_tap",
            question: "Listen: 'Red Circle' 🔴 Tap the Red Circle:",
            questionAr: "اسمعي الصوت: 'Red' .. فين الدائرة ذات اللون الأحمر؟ 🔴",
            audioListen: "Red! Touch the Red color!",
            audioListenAr: "ريد! يعني اللون الأحمر الجميل، فين؟",
            options: ["🔴 Red", "🔵 Blue", "🟢 Green"],
            answer: "🔴 Red",
            visual: { type: "vocab_card", emoji: "🔴", label: "Red Circle" },
            explanation: "Red يعني اللون الأحمر الجميل زي التفاحة والفراولة 🔴",
            hintAr: "شاوري على اللون الأحمر 🔴"
          },
          {
            id: "eng_u2_l3_q2",
            format: "choose",
            type: "shape_match",
            question: "Which shape looks round like a ball? ⭕",
            questionAr: "أي شكل مدور زي الكورة والشمس؟ ⭕",
            audioListen: "Circle! A circle is round!",
            audioListenAr: "سيركل! يعني دائرة مدورة",
            options: ["⭕ Circle (دائرة)", "⏹️ Square (مربع)", "🔺 Triangle (مثلث)"],
            answer: "⭕ Circle (دائرة)",
            visual: { type: "vocab_card", emoji: "⭕", label: "Circle" },
            explanation: "Circle يعني دائرة مستديرة تماماً ⭕",
            hintAr: "اضغطي على الدائرة المستديرة ⭕"
          }
        ]
      },
      {
        id: "eng_p1_u2_l4",
        lessonNumber: 4,
        bookPage: 38,
        title: "Phonics: Letter Aa",
        titleAr: "صوتيات: حرف الألف Aa (/æ/ /أَ/)",
        audioPromptEn: "Letter A sounds like /a/ /a/! Apple and Ant!",
        audioPromptAr: "حرف الـ A صوته /أَ/ /أَ/! زي أبل تفاحة وآنت نملة نشيطة!",
        vocab: [
          { word: "Apple", wordAr: "تفاحة حمراء لذيذة", emoji: "🍎", sound: "/a/ /a/ Apple! تفاحة مقرمشة" },
          { word: "Ant", wordAr: "نملة نشيطة", emoji: "🐜", sound: "/a/ /a/ Ant! نملة صغيرة" },
          { word: "Arrow", wordAr: "سهم", emoji: "➡️", sound: "/a/ /a/ Arrow! السهم يشير للأمام" }
        ],
        questions: [
          {
            id: "eng_u2_l4_q1",
            format: "choose",
            type: "phonics_match",
            question: "Listen to the sound: /a/ /a/! Which sweet fruit starts with /a/?",
            questionAr: "اسمعي صوت /أَ/ /أَ/! أي فاكهة لذيذة بتبدأ بحرف Aa؟",
            audioListen: "/a/ /a/ Apple! Tap the Apple!",
            audioListenAr: "أبل! فين التفاحة اللذيذة؟",
            options: ["🍎 Apple", "🍌 Banana", "🥕 Carrot"],
            answer: "🍎 Apple",
            visual: { type: "vocab_card", emoji: "🍎", label: "Apple (/a/)" },
            explanation: "/a/ /a/ Apple! التفاحة بتبدأ بحرف Aa 🍎",
            hintAr: "اضغطي على التفاحة الحمراء اللذيذة 🍎"
          },
          {
            id: "eng_u2_l4_q2",
            format: "choose",
            type: "phonics_match",
            question: "Which tiny insect starts with /a/ /a/?",
            questionAr: "مين الحشرة الصغيرة النشيطة اللي بتبدأ بصوت /أَ/؟ 🐜",
            audioListen: "/a/ /a/ Ant! Tap the Ant!",
            audioListenAr: "آنت! يعني نملة صغيرة",
            options: ["🐜 Ant", "🦁 Lion", "🐶 Dog"],
            answer: "🐜 Ant",
            visual: { type: "vocab_card", emoji: "🐜", label: "Ant (/a/)" },
            explanation: "/a/ /a/ Ant! النملة بتبدأ بحرف Aa 🐜",
            hintAr: "شاوري على النملة الصغيرة 🐜"
          }
        ]
      }
    ]
  },
  {
    id: "eng_p1_u3",
    number: 3,
    subject: "english",
    title: "I Love My Family",
    titleAr: "عائلتي الجميلة",
    icon: "👨‍👩‍👧‍👦",
    color: "#EC4899",
    bookPages: "43 - 64",
    description: "Family members, counting 1-5, and phonics for letters Nn, Pp, Hh, and Dd.",
    lessons: [
      {
        id: "eng_p1_u3_l1",
        lessonNumber: 1,
        bookPage: 43,
        title: "Who's in My Family?",
        titleAr: "أفراد عائلتي الحبيبة",
        audioPromptEn: "I love my family! Father, Mother, Brother, Sister, and Grandparents!",
        audioPromptAr: "عائلتي الجميلة اللي بحبها: بابا وماما وأخويا وأختي وجدو وتيتة!",
        vocab: [
          { word: "Father", wordAr: "أبي / بابا", emoji: "👨", sound: "Father! أبي الحبيب" },
          { word: "Mother", wordAr: "أمي / ماما", emoji: "👩", sound: "Mother! أمي الغالية" },
          { word: "Brother", wordAr: "أخي", emoji: "👦", sound: "Brother! أخي وصديقي" },
          { word: "Sister", wordAr: "أختي", emoji: "👧", sound: "Sister! أختي الحلوة" },
          { word: "Grandfather", wordAr: "جدي / جدو", emoji: "👴", sound: "Grandfather! جدي الطيب" },
          { word: "Grandmother", wordAr: "جدتي / تيتة", emoji: "👵", sound: "Grandmother! جدتي الحنونة" }
        ],
        questions: [
          {
            id: "eng_u3_l1_q1",
            format: "choose",
            type: "listen_tap",
            question: "Listen: 'Mother' 👩 Tap the picture of Mother:",
            questionAr: "اسمعي الصوت: 'Mother' .. فين ماما الحبيبة؟ 👩",
            audioListen: "Mother! Where is mother?",
            audioListenAr: "مازر! شاوري على صورة ماما",
            options: ["👩 Mother", "👨 Father", "👦 Brother"],
            answer: "👩 Mother",
            visual: { type: "vocab_card", emoji: "👩", label: "Mother" },
            explanation: "Mother يعني ماما الغالية 👩",
            hintAr: "اضغطي على صورة ماما 👩"
          },
          {
            id: "eng_u3_l1_q2",
            format: "choose",
            type: "listen_tap",
            question: "Listen: 'Father' 👨 Tap the picture of Father:",
            questionAr: "اسمعي الصوت: 'Father' .. فين بابا الحبيب؟ 👨",
            audioListen: "Father! This is my father!",
            audioListenAr: "فاذر! يعني بابا الغالي",
            options: ["👨 Father", "👧 Sister", "👵 Grandmother"],
            answer: "👨 Father",
            visual: { type: "vocab_card", emoji: "👨", label: "Father" },
            explanation: "Father يعني بابا الطيب 👨",
            hintAr: "اضغطي على صورة بابا 👨"
          }
        ]
      },
      {
        id: "eng_p1_u3_l2",
        lessonNumber: 2,
        bookPage: 47,
        title: "Phonics: Nn & Pp",
        titleAr: "صوتيات: حرفي Nn و Pp",
        audioPromptEn: "Letter N sounds like /n/ /n/ (Nose). Letter P sounds like /p/ /p/ (Pizza)!",
        audioPromptAr: "حرف الـ N صوته /نـ/ زي نوز أنف، وحرف الـ P صوته /پـ/ زي بيتزا وباندا!",
        vocab: [
          { word: "Nose", wordAr: "أنف", emoji: "👃", sound: "/n/ /n/ Nose! أنفي الجميل" },
          { word: "Nut", wordAr: "مكسرات / بندق", emoji: "🥜", sound: "/n/ /n/ Nut! مكسرات مقرمشة" },
          { word: "Pizza", wordAr: "بيتزا شهية", emoji: "🍕", sound: "/p/ /p/ Pizza! بيتزا لذيذة" },
          { word: "Panda", wordAr: "دب الباندا اللطيف", emoji: "🐼", sound: "/p/ /p/ Panda! الباندا الكيوت" }
        ],
        questions: [
          {
            id: "eng_u3_l2_q1",
            format: "choose",
            type: "phonics_match",
            question: "Listen: /n/ /n/ Nose! Tap your 'Nose' 👃:",
            questionAr: "اسمعي صوت النون /نـ/! فين الأنف 'Nose'؟ 👃",
            audioListen: "/n/ /n/ Nose! Touch your nose!",
            audioListenAr: "نوز! يعني الأنف اللي بنشم بيه",
            options: ["👃 Nose", "👀 Eye", "👂 Ear"],
            answer: "👃 Nose",
            visual: { type: "vocab_card", emoji: "👃", label: "Nose (/n/)" },
            explanation: "/n/ /n/ Nose! أنف بتبدأ بحرف Nn 👃",
            hintAr: "شاوري على الأنف 👃"
          },
          {
            id: "eng_u3_l2_q2",
            format: "choose",
            type: "phonics_match",
            question: "Which delicious food starts with letter Pp (/p/ /p/)? 🍕",
            questionAr: "أي أكلة شهية بنحبها بتبدأ بحرف الـ Pp؟ 🍕",
            audioListen: "/p/ /p/ Pizza! Tap the Pizza!",
            audioListenAr: "بيتزا! مين بيحب البيتزا؟",
            options: ["🍕 Pizza", "🍎 Apple", "🍅 Tomato"],
            answer: "🍕 Pizza",
            visual: { type: "vocab_card", emoji: "🍕", label: "Pizza (/p/)" },
            explanation: "/p/ /p/ Pizza! بيتزا بتبدأ بحرف Pp 🍕",
            hintAr: "اضغطي على شريحة البيتزا الشهية 🍕"
          }
        ]
      },
      {
        id: "eng_p1_u3_l3",
        lessonNumber: 3,
        bookPage: 52,
        title: "Numbers 1 to 5",
        titleAr: "الأرقام بالإنجليزي من 1 إلى 5",
        audioPromptEn: "Let's count: One, Two, Three, Four, Five! 1, 2, 3, 4, 5!",
        audioPromptAr: "يلا نعد بأصابعنا الحلوة بالإنجليزي: ون، تو، ثري، فور، فايف!",
        vocab: [
          { word: "One", wordAr: "واحد (1)", emoji: "1️⃣", sound: "One! رقم 1" },
          { word: "Two", wordAr: "اثنان (2)", emoji: "2️⃣", sound: "Two! رقم 2" },
          { word: "Three", wordAr: "ثلاثة (3)", emoji: "3️⃣", sound: "Three! رقم 3" },
          { word: "Four", wordAr: "أربعة (4)", emoji: "4️⃣", sound: "Four! رقم 4" },
          { word: "Five", wordAr: "خمسة (5)", emoji: "5️⃣", sound: "Five! رقم 5" }
        ],
        questions: [
          {
            id: "eng_u3_l3_q1",
            format: "choose",
            type: "count_match",
            question: "Count the cute kittens: 🐱 🐱 🐱 How many?",
            questionAr: "عِدي القطط الكيوت: 🐱 🐱 🐱 كم قطة بالإنجليزي؟",
            audioListen: "Count: 1, 2, 3! Three kittens!",
            audioListenAr: "يلا نعد: ون، تو، ثري! يبقوا كام؟",
            options: ["3️⃣ Three (3)", "2️⃣ Two (2)", "5️⃣ Five (5)"],
            answer: "3️⃣ Three (3)",
            visual: { type: "vocab_card", emoji: "🐱🐱🐱", label: "3 Kittens" },
            explanation: "One, Two, Three! يوجد 3 قطط = Three 🐱",
            hintAr: "عديهم: 1.. 2.. 3 = Three!"
          },
          {
            id: "eng_u3_l3_q2",
            format: "choose",
            type: "count_match",
            question: "How many fingers on one hand? 🖐️",
            questionAr: "كم إصبع في يدنا الواحدة؟ 🖐️",
            audioListen: "Five fingers! High five!",
            audioListenAr: "فايف! 5 أصابع كاملة",
            options: ["5️⃣ Five (5)", "4️⃣ Four (4)", "1️⃣ One (1)"],
            answer: "5️⃣ Five (5)",
            visual: { type: "vocab_card", emoji: "🖐️", label: "5 Fingers" },
            explanation: "High five! إيدنا فيها خمسة أصابع = Five 🖐️",
            hintAr: "شاوري على رقم 5 = Five!"
          }
        ]
      },
      {
        id: "eng_p1_u3_l4",
        lessonNumber: 4,
        bookPage: 56,
        title: "Phonics: Hh & Dd",
        titleAr: "صوتيات: حرفي Hh و Dd",
        audioPromptEn: "Letter H sounds like /h/ /h/ (Hat, Hand). Letter D sounds like /d/ /d/ (Dog, Door)!",
        audioPromptAr: "حرف الـ H صوته هواء دافئ /هـ/ زي هات طاقية، وحرف الـ D صوته /د/ زي دوج كلب!",
        vocab: [
          { word: "Hat", wordAr: "طاقية / قبعة", emoji: "👒", sound: "/h/ /h/ Hat! طاقية جميلة" },
          { word: "Hand", wordAr: "يد", emoji: "✋", sound: "/h/ /h/ Hand! يدي النظيفة" },
          { word: "Dog", wordAr: "كلب وفيّ", emoji: "🐶", sound: "/d/ /d/ Dog! الكلب الوفي" },
          { word: "Door", wordAr: "باب الغرفة", emoji: "🚪", sound: "/d/ /d/ Door! باب البيت" }
        ],
        questions: [
          {
            id: "eng_u3_l4_q1",
            format: "choose",
            type: "phonics_match",
            question: "Listen: /h/ /h/ Hat! 👒 Tap the Hat:",
            questionAr: "اسمعي صوت /هـ/ /هـ/ هات! فين الطاقية؟ 👒",
            audioListen: "/h/ /h/ Hat! Put on your hat!",
            audioListenAr: "هات! شاوري على الطاقية",
            options: ["👒 Hat", "🚪 Door", "🐶 Dog"],
            answer: "👒 Hat",
            visual: { type: "vocab_card", emoji: "👒", label: "Hat (/h/)" },
            explanation: "/h/ /h/ Hat! طاقية بتبدأ بحرف Hh 👒",
            hintAr: "اضغطي على الطاقية 👒"
          },
          {
            id: "eng_u3_l4_q2",
            format: "choose",
            type: "phonics_match",
            question: "Listen: /d/ /d/ Dog! 🐶 Tap the friendly Dog:",
            questionAr: "اسمعي صوت /د/ /د/ دوج! فين الكلب اللطيف؟ 🐶",
            audioListen: "/d/ /d/ Dog! Woof woof! Tap the dog!",
            audioListenAr: "دوج! يعني كلب لطيف",
            options: ["🐶 Dog", "🐱 Cat", "👒 Hat"],
            answer: "🐶 Dog",
            visual: { type: "vocab_card", emoji: "🐶", label: "Dog (/d/)" },
            explanation: "/d/ /d/ Dog! كلب بيبدأ بحرف Dd 🐶",
            hintAr: "اضغطي على صورة الكلب الكيوت 🐶"
          }
        ]
      }
    ]
  },
  {
    id: "eng_p1_u4",
    number: 4,
    subject: "english",
    title: "My Body and My Senses",
    titleAr: "جسمي وحواسي الخمس",
    icon: "👁️",
    color: "#8B5CF6",
    bookPages: "65 - 84",
    description: "Body parts, the 5 senses, and phonics for R, E, C, K, M, G, O, F.",
    lessons: [
      {
        id: "eng_p1_u4_l1",
        lessonNumber: 1,
        bookPage: 66,
        title: "Parts of My Body",
        titleAr: "أجزاء جسمي الجميلة",
        audioPromptEn: "Look at your body! Eye, Ear, Nose, Mouth, Hand, and Foot!",
        audioPromptAr: "يلا نتعرف على جسمنا ونشكر ربنا: العين اللي بنشوف بيها، والأذن اللي بنسمع بيها!",
        vocab: [
          { word: "Eye", wordAr: "عين نرى بها", emoji: "👁️", sound: "Eye! عيني الجميلة بشوف بيها" },
          { word: "Ear", wordAr: "أذن نسمع بها", emoji: "👂", sound: "Ear! أذني أسمع بيها الأصوات" },
          { word: "Mouth", wordAr: "فم نتكلم ونأكل به", emoji: "👄", sound: "Mouth! فمي أبتسم به وآكل الطعام" },
          { word: "Hand", wordAr: "يد نلمس بها", emoji: "✋", sound: "Hand! يدي أرسم بيها" },
          { word: "Foot", wordAr: "قدم نمشي بها", emoji: "🦶", sound: "Foot! قدمي أجري بيها" }
        ],
        questions: [
          {
            id: "eng_u4_l1_q1",
            format: "choose",
            type: "listen_tap",
            question: "Listen: 'Eye' 👁️ We see with our ___:",
            questionAr: "اسمعي الصوت: 'Eye' .. بنشوف بنعمة إيه؟ 👁️",
            audioListen: "Eye! We see with our eyes!",
            audioListenAr: "آي! يعني العين اللي بنشوف بيها كل حاجة حلوة",
            options: ["👁️ Eye", "👂 Ear", "👄 Mouth"],
            answer: "👁️ Eye",
            visual: { type: "vocab_card", emoji: "👁️", label: "Eye" },
            explanation: "Eye يعني العين اللي بنشوف بيها جمال الدنيا 👁️",
            hintAr: "شاوري على صورة العين 👁️"
          },
          {
            id: "eng_u4_l1_q2",
            format: "choose",
            type: "listen_tap",
            question: "Listen: 'Ear' 👂 We hear sounds with our ___:",
            questionAr: "اسمعي الصوت: 'Ear' .. بنسمع صوت الأذان والموسيقى بـ إيه؟ 👂",
            audioListen: "Ear! We listen with our ears!",
            audioListenAr: "إير! يعني الأذن اللي بنسمع بيها",
            options: ["👂 Ear", "👁️ Eye", "👃 Nose"],
            answer: "👂 Ear",
            visual: { type: "vocab_card", emoji: "👂", label: "Ear" },
            explanation: "Ear يعني الأذن اللي بنسمع بيها 👂",
            hintAr: "اضغطي على الأذن 👂"
          }
        ]
      },
      {
        id: "eng_p1_u4_l2",
        lessonNumber: 2,
        bookPage: 71,
        title: "The Five Senses",
        titleAr: "حواسي الخمس الرائعة",
        audioPromptEn: "I can see! I can hear! I can smell! I can taste! I can touch!",
        audioPromptAr: "الحواس الخمس: أرى بعيني، أسمع بأذني، وأشم الزهور بأنفي!",
        vocab: [
          { word: "See", wordAr: "يرى / ينظر", emoji: "👀", sound: "I can see with my eyes!" },
          { word: "Hear", wordAr: "يسمع", emoji: "🎧", sound: "I can hear with my ears!" },
          { word: "Smell", wordAr: "يشم الرائحة", emoji: "👃", sound: "I can smell with my nose!" },
          { word: "Taste", wordAr: "يتذوق الطعام", emoji: "👅", sound: "I can taste sweet food!" }
        ],
        questions: [
          {
            id: "eng_u4_l2_q1",
            format: "choose",
            type: "sense_match",
            question: "We smell flowers 🌸 with our ___:",
            questionAr: "بنشم ريحة الوردة الجميلة بأنفنا: Smell with our ___:",
            audioListen: "Smell! I smell with my nose!",
            audioListenAr: "بنشم الورد بأنفنا Nose!",
            options: ["👃 Nose (أنف)", "👁️ Eye (عين)", "🦶 Foot (قدم)"],
            answer: "👃 Nose (أنف)",
            visual: { type: "vocab_card", emoji: "👃🌸", label: "Smell with Nose" },
            explanation: "We smell with our nose! بنشم بأنفنا الرائحة الجميلة 👃",
            hintAr: "اضغطي على الأنف 👃"
          }
        ]
      }
    ]
  },
  {
    id: "eng_p1_u5",
    number: 5,
    subject: "english",
    title: "Welcome to the Farm",
    titleAr: "مرحباً بكم في المزرعة",
    icon: "🚜",
    color: "#F59E0B",
    bookPages: "85 - 104",
    description: "Farm animals, Big vs Small, numbers 6 to 10, and phonics for letters F, H, B, L, U, J.",
    lessons: [
      {
        id: "eng_p1_u5_l1",
        lessonNumber: 1,
        bookPage: 85,
        title: "Farm Animals & Sizes",
        titleAr: "حيوانات المزرعة والأحجام (كبير وصغير)",
        audioPromptEn: "Look at the farm animals! Cow is big, duck is small!",
        audioPromptAr: "في المزرعة: البقرة كبيرة Big، والبطة الصغيرة كواك كواك Small!",
        vocab: [
          { word: "Cow", wordAr: "بقرة تعطينا حليب", emoji: "🐄", sound: "Cow! مووو.. البقرة الكبيرة" },
          { word: "Horse", wordAr: "حصان سريع", emoji: "🐎", sound: "Horse! الحصان السريع الجميل" },
          { word: "Duck", wordAr: "بطة تسبح في الماء", emoji: "🦆", sound: "Duck! كواك كواك.. البطة الصغيرة" },
          { word: "Sheep", wordAr: "خروف صوفه أبيض", emoji: "🐑", sound: "Sheep! مااا.. الخروف اللطيف" },
          { word: "Big", wordAr: "كبير الحجم", emoji: "🐘", sound: "Big! حجم كبير جداً" },
          { word: "Small", wordAr: "صغير الحجم", emoji: "🐥", sound: "Small! كتكوت صغير" }
        ],
        questions: [
          {
            id: "eng_u5_l1_q1",
            format: "choose",
            type: "listen_tap",
            question: "Listen: 'Cow' 🐄 Tap the big Cow:",
            questionAr: "اسمعي الصوت: 'Cow' .. فين البقرة اللي بتدينا اللبن؟ 🐄",
            audioListen: "Cow! The cow is big! Moo!",
            audioListenAr: "كاو! يعني البقرة اللطيفة",
            options: ["🐄 Cow", "🦆 Duck", "🐱 Cat"],
            answer: "🐄 Cow",
            visual: { type: "vocab_card", emoji: "🐄", label: "Cow" },
            explanation: "Cow يعني بقرة المزرعة اللي بناخد منها اللبن 🐄",
            hintAr: "شاوري على البقرة 🐄"
          },
          {
            id: "eng_u5_l1_q2",
            format: "choose",
            type: "size_match",
            question: "Which one is 'BIG' (كبير الحجم)? 🐎 or 🐥?",
            questionAr: "مين فيهم 'Big' كبير الحجم؟ الحصان ولا الكتكوت؟",
            audioListen: "Big! The horse is big!",
            audioListenAr: "بيج! يعني كبير وضخم، مين؟",
            options: ["🐎 Big Horse (حصان كبير)", "🐥 Small Chick (كتكوت صغير)"],
            answer: "🐎 Big Horse (حصان كبير)",
            visual: { type: "vocab_card", emoji: "🐎", label: "BIG" },
            explanation: "Horse is BIG! الحصان كبير وقوي 🐎",
            hintAr: "اختاري الحصان الكبير 🐎"
          }
        ]
      },
      {
        id: "eng_p1_u5_l2",
        lessonNumber: 2,
        bookPage: 94,
        title: "Numbers 6 to 10",
        titleAr: "الأرقام بالإنجليزي من 6 إلى 10",
        audioPromptEn: "Count with me: Six, Seven, Eight, Nine, Ten! 6, 7, 8, 9, 10!",
        audioPromptAr: "يلا نعد من 6 إلى 10: سكس، سفن، إيت، ناين، تِن!",
        vocab: [
          { word: "Six", wordAr: "ستة (6)", emoji: "6️⃣", sound: "Six! رقم 6" },
          { word: "Seven", wordAr: "سبعة (7)", emoji: "7️⃣", sound: "Seven! رقم 7" },
          { word: "Eight", wordAr: "ثمانية (8)", emoji: "8️⃣", sound: "Eight! رقم 8" },
          { word: "Nine", wordAr: "تسعة (9)", emoji: "9️⃣", sound: "Nine! رقم 9" },
          { word: "Ten", wordAr: "عشرة (10)", emoji: "🔟", sound: "Ten! رقم 10 كاملين" }
        ],
        questions: [
          {
            id: "eng_u5_l2_q1",
            format: "choose",
            type: "count_match",
            question: "How many ducks? 🦆 🦆 🦆 🦆 🦆 🦆 (Count 6)",
            questionAr: "عِدي البطات: 🦆 🦆 🦆 🦆 🦆 🦆 كم بطة؟",
            audioListen: "Count: 1, 2, 3, 4, 5, 6! Six ducks!",
            audioListenAr: "عدي البط: يبقوا 6 = Six!",
            options: ["6️⃣ Six (6)", "8️⃣ Eight (8)", "1️⃣0️⃣ Ten (10)"],
            answer: "6️⃣ Six (6)",
            visual: { type: "vocab_card", emoji: "🦆🦆🦆🦆🦆🦆", label: "6 Ducks" },
            explanation: "There are Six ducks = 6 بطات في البحيرة 🦆",
            hintAr: "اختاري رقم 6 = Six!"
          }
        ]
      }
    ]
  },
  {
    id: "eng_p1_u6",
    number: 6,
    subject: "english",
    title: "Welcome to the Jungle & My Pets",
    titleAr: "حيوانات الغابة وحيواناتي الأليفة",
    icon: "🦁",
    color: "#059669",
    bookPages: "105 - 126",
    description: "Jungle animals, pets, prepositions (in, on, under), action verbs, and phonics.",
    lessons: [
      {
        id: "eng_p1_u6_l1",
        lessonNumber: 1,
        bookPage: 105,
        title: "Jungle Animals",
        titleAr: "حيوانات الغابة الرائعة",
        audioPromptEn: "Welcome to the Jungle! Lion, Elephant, Giraffe, Monkey, and Tiger!",
        audioPromptAr: "مرحباً بكم في الغابة: ملك الغابة الأسد لايون، والفيل الضخم، والزرافة الطويلة!",
        vocab: [
          { word: "Lion", wordAr: "أسد ملك الغابة", emoji: "🦁", sound: "Lion! زئير الأسد القوي" },
          { word: "Elephant", wordAr: "فيل ضخم بخرطوم طويل", emoji: "🐘", sound: "Elephant! الفيل الضخم اللطيف" },
          { word: "Giraffe", wordAr: "زرافة برقبة طويلة", emoji: "🦒", sound: "Giraffe! الزرافة الطويلة تأكل الشجر" },
          { word: "Monkey", wordAr: "قرد شقي يتسلق الشجر", emoji: "🐒", sound: "Monkey! القرد الشقي يقفز" }
        ],
        questions: [
          {
            id: "eng_u6_l1_q1",
            format: "choose",
            type: "listen_tap",
            question: "Listen: 'Lion' 🦁 Tap the King of the Jungle:",
            questionAr: "اسمعي الصوت: 'Lion' .. فين الأسد ملك الغابة؟ 🦁",
            audioListen: "Lion! The lion is king of the jungle! Roar!",
            audioListenAr: "لايون! يعني الأسد الشجاع",
            options: ["🦁 Lion", "🐒 Monkey", "🦒 Giraffe"],
            answer: "🦁 Lion",
            visual: { type: "vocab_card", emoji: "🦁", label: "Lion" },
            explanation: "Lion يعني الأسد ملك الغابة القوي 🦁",
            hintAr: "اضغطي على صورة الأسد 🦁"
          },
          {
            id: "eng_u6_l1_q2",
            format: "choose",
            type: "listen_tap",
            question: "Which animal has a very long neck? 🦒",
            questionAr: "مين الحيوان الجميل اللي عنده رقبة طويلة جداً؟ 🦒",
            audioListen: "Giraffe! The giraffe has a long neck!",
            audioListenAr: "جيراف! يعني الزرافة الطويلة",
            options: ["🦒 Giraffe (زرافة)", "🐘 Elephant (فيل)", "🦁 Lion (أسد)"],
            answer: "🦒 Giraffe (زرافة)",
            visual: { type: "vocab_card", emoji: "🦒", label: "Giraffe" },
            explanation: "Giraffe يعني الزرافة صاحبة أطول رقبة 🦒",
            hintAr: "اختاري الزرافة الطويلة 🦒"
          }
        ]
      },
      {
        id: "eng_p1_u6_l2",
        lessonNumber: 2,
        bookPage: 114,
        title: "My Pets & Prepositions",
        titleAr: "حيواناتي الأليفة ومكانها (في، على، تحت)",
        audioPromptEn: "My cute pets! Cat, Dog, Bird, Fish, and Turtle! In, On, Under!",
        audioPromptAr: "حيواناتي الأليفة اللي بربيها في البيت: القطة والعصفور والسمكة!",
        vocab: [
          { word: "Cat", wordAr: "قطة لطيفة", emoji: "🐱", sound: "Cat! مياو مياو.. القطة الكيوت" },
          { word: "Bird", wordAr: "عصفور يغرد", emoji: "🐦", sound: "Bird! العصفور يطير" },
          { word: "Fish", wordAr: "سمكة تسبح في الحوض", emoji: "🐠", sound: "Fish! السمكة تسبح في الماء" },
          { word: "In", wordAr: "في / جوه", emoji: "📥", sound: "In! جوه الصندوق" },
          { word: "On", wordAr: "على / فوق", emoji: "🔝", sound: "On! فوق المنضدة" },
          { word: "Under", wordAr: "تحت", emoji: "🔽", sound: "Under! تحت الكرسي" }
        ],
        questions: [
          {
            id: "eng_u6_l2_q1",
            format: "choose",
            type: "listen_tap",
            question: "Listen: 'Cat' 🐱 Tap the sweet Cat:",
            questionAr: "اسمعي الصوت: 'Cat' .. فين القطة الكيوت؟ 🐱",
            audioListen: "Cat! Meow! Where is the cat?",
            audioListenAr: "كات! يعني القطة الشقية اللي بتقول مياو",
            options: ["🐱 Cat", "🐶 Dog", "🐠 Fish"],
            answer: "🐱 Cat",
            visual: { type: "vocab_card", emoji: "🐱", label: "Cat" },
            explanation: "Cat يعني قطة جميلة بتقول مياو 🐱",
            hintAr: "اضغطي على القطة 🐱"
          }
        ]
      }
    ]
  }
];

if (typeof window !== 'undefined') {
  window.CURRICULUM_ENGLISH_P1 = CURRICULUM_ENGLISH_P1;
}
