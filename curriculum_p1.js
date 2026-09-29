// curriculum_p1.js - Official Egyptian Ministry Primary 1 (Term 1) Mathematics Curriculum
// Tailored for 6-Year-Old Children with Concrete-Pictorial-Abstract (CPA) Pedagogy
// 9 Chapters, Official Textbook Alignment (Book Pages 6-98)

const CURRICULUM_P1 = [
  {
    "id": "p1_ch1",
    "number": 1,
    "title": "Numbers up to 10",
    "titleAr": "الأعداد حتى 10",
    "icon": "🔢",
    "color": "#3B82F6",
    "description": "Counting, reading, writing numbers 0 to 10, using ten-frames, and number bonds.",
    "lessons": [
      {
        "id": "p1_ch1_l1",
        "lessonNumber": 1,
        "bookPage": 6,
        "title": "Lesson 1: How Many? (Count up to 5)",
        "titleAr": "الدرس 1: كم العدد؟ (العد حتى 5)",
        "rule": "Count each object once: 1, 2, 3, 4, 5.",
        "hintAr": "عُد كل شكل مرة واحدة بصوتك: 1، 2، 3، 4، 5.",
        "tiers": {
          "t1": [
            {
              "id": "p1_ch1_l1_q1",
              "visual": {
                "type": "cute_counters",
                "count": 3,
                "emoji": "🍎",
                "maxPerRow": 5
              },
              "format": "choose",
              "type": "p1_count",
              "question": "How many apples are there? 🍎",
              "questionAr": "كم عدد التفاحات؟ 🍎",
              "options": [
                "3",
                "2",
                "4",
                "5"
              ],
              "answer": "3",
              "explanation": "Count them: 1, 2, 3! There are 3 sweet apples.",
              "hintAr": "عُدهم معايا: 1، 2، 3! يبقى 3 تفاحات."
            }
          ],
          "t2": [
            {
              "id": "p1_ch1_l1_q2",
              "visual": {
                "type": "ten_frame",
                "count": 4,
                "total": 10,
                "color": "#2563EB"
              },
              "format": "choose",
              "type": "p1_ten_frame",
              "question": "How many blue dots in the Ten-Frame? 🔵",
              "questionAr": "كم نقطة زرقاء داخل إطار العشر خانات؟ 🔵",
              "options": [
                "4",
                "3",
                "5",
                "2"
              ],
              "answer": "4",
              "explanation": "There are 4 filled blue dots in the frame.",
              "hintAr": "عد الدوائر الزرقاء في المربعات: 1، 2، 3، 4!"
            }
          ],
          "t3": [
            {
              "id": "p1_ch1_l1_q3",
              "visual": {
                "type": "cute_counters",
                "count": 5,
                "emoji": "🐱",
                "maxPerRow": 5
              },
              "format": "choose",
              "type": "p1_story",
              "question": "Brainy the Cat sees kittens playing! How many kittens? 🐱",
              "questionAr": "القط برايني يرى قططاً صغيرة تلعب! كم عدد القطط؟ 🐱",
              "options": [
                "5",
                "4",
                "3",
                "6"
              ],
              "answer": "5",
              "explanation": "1, 2, 3, 4, 5 kittens! High five! 🖐️",
              "hintAr": "عُد القطط اللطيفة: 1، 2، 3، 4، 5 قطط شقية!"
            }
          ]
        }
      },
      {
        "id": "p1_ch1_l2",
        "lessonNumber": 2,
        "bookPage": 18,
        "title": "Lesson 2: Let's Count 6 to 10!",
        "titleAr": "الدرس 2: هيا نعد من 6 إلى 10!",
        "rule": "Keep counting beyond 5: 6, 7, 8, 9, 10.",
        "hintAr": "بعد الـ 5 يأتي: 6، 7، 8، 9، 10!",
        "tiers": {
          "t1": [
            {
              "id": "p1_ch1_l2_q1",
              "visual": {
                "type": "cute_counters",
                "count": 7,
                "emoji": "🎈",
                "maxPerRow": 5
              },
              "format": "choose",
              "type": "p1_count",
              "question": "How many colorful balloons? 🎈",
              "questionAr": "كم عدد البالونات الملونة؟ 🎈",
              "options": [
                "7",
                "6",
                "8",
                "5"
              ],
              "answer": "7",
              "explanation": "5 in top row + 2 in bottom row = 7 balloons!",
              "hintAr": "5 في السطر الأول واثنان في السطر الثاني = 7 بالونات."
            }
          ],
          "t2": [
            {
              "id": "p1_ch1_l2_q2",
              "visual": {
                "type": "ten_frame",
                "count": 8,
                "total": 10,
                "color": "#EC4899"
              },
              "format": "choose",
              "type": "p1_ten_frame",
              "question": "Count the pink dots in the Ten-Frame:",
              "questionAr": "عُد النقاط الوردية في إطار العشر خانات:",
              "options": [
                "8",
                "7",
                "9",
                "6"
              ],
              "answer": "8",
              "explanation": "5 on top row + 3 on bottom row = 8 dots!",
              "hintAr": "صف كامل (5) وتحته 3 = 8 نقاط."
            }
          ],
          "t3": [
            {
              "id": "p1_ch1_l2_q3",
              "visual": {
                "type": "cute_counters",
                "count": 10,
                "emoji": "🌟",
                "maxPerRow": 5
              },
              "format": "choose",
              "type": "p1_story",
              "question": "Smarty the Dog counts shining stars! How many stars? 🌟",
              "questionAr": "الكلب سمارتي يعد النجوم اللامعة! كم نجمة في السماء؟ 🌟",
              "options": [
                "10",
                "9",
                "8",
                "7"
              ],
              "answer": "10",
              "explanation": "A full set of 10 shiny stars! 🌟 You are a superstar!",
              "hintAr": "10 نجوم كاملة تلمع في السماء! أنت نجم رائع."
            }
          ]
        }
      },
      {
        "id": "p1_ch1_l3",
        "lessonNumber": 3,
        "bookPage": 23,
        "title": "Lesson 3: What Makes 5, 8, & 10? (Number Bonds)",
        "titleAr": "الدرس 3: مكونات الأعداد 5، 8، و 10",
        "rule": "Numbers are made of two smaller parts. E.g., 5 is 3 and 2.",
        "hintAr": "كل عدد يتكون من جزأين صغيرين، مثل 5 تتكون من 3 و 2.",
        "tiers": {
          "t1": [
            {
              "id": "p1_ch1_l3_q1",
              "visual": {
                "type": "number_bond",
                "whole": 5,
                "part1": 3,
                "part2": 2,
                "missing": "part2"
              },
              "format": "choose",
              "type": "p1_bond",
              "question": "What number is missing? 3 and ___ make 5.",
              "questionAr": "ما هو العدد الناقص؟ 3 مع ___ يُعطي 5.",
              "options": [
                "2",
                "1",
                "3",
                "4"
              ],
              "answer": "2",
              "explanation": "3 + 2 = 5! So the missing part is 2.",
              "hintAr": "لو معاك 3 تفاحات، محتاج كام عشان يبقوا 5؟ محتاج 2!"
            }
          ],
          "t2": [
            {
              "id": "p1_ch1_l3_q2",
              "visual": {
                "type": "number_bond",
                "whole": 8,
                "part1": 4,
                "part2": 4,
                "missing": "part2"
              },
              "format": "choose",
              "type": "p1_bond",
              "question": "What number makes 8 with 4? 4 + ___ = 8.",
              "questionAr": "ما هو العدد الذي يكمل 4 ليصبح 8؟ 4 + ___ = 8.",
              "options": [
                "4",
                "3",
                "5",
                "2"
              ],
              "answer": "4",
              "explanation": "4 and 4 make 8! Double 4 is 8.",
              "hintAr": "4 و 4 يعطينا 8! نصف الـ 8 هو 4."
            }
          ],
          "t3": [
            {
              "id": "p1_ch1_l3_q3",
              "visual": {
                "type": "number_bond",
                "whole": 10,
                "part1": 7,
                "part2": 3,
                "missing": "part2"
              },
              "format": "choose",
              "type": "p1_bond",
              "question": "Friends of 10: 7 and ___ make 10!",
              "questionAr": "أصدقاء الـ 10: 7 مع ___ يُعطي 10!",
              "options": [
                "3",
                "2",
                "4",
                "5"
              ],
              "answer": "3",
              "explanation": "7 + 3 = 10! 7 and 3 are best friends of 10.",
              "hintAr": "7 في عقلك وكمل على أصابعك لحد 10: بعد الـ 7 -> 8, 9, 10 (3 أصابع)!"
            }
          ]
        }
      },
      {
        "id": "p1_ch1_l4",
        "lessonNumber": 4,
        "bookPage": 31,
        "title": "Lesson 4: The Number Zero (0)",
        "titleAr": "الدرس 4: العدد صفر (0)",
        "rule": "Zero (0) means nothing or an empty set.",
        "hintAr": "الصفر (0) يعني لا يوجد شيء، السلة فارغة تماماً!",
        "tiers": {
          "t1": [
            {
              "id": "p1_ch1_l4_q1",
              "visual": {
                "type": "ten_frame",
                "count": 0,
                "total": 10,
                "color": "#94A3B8"
              },
              "format": "choose",
              "type": "p1_zero",
              "question": "How many dots are in this empty Ten-Frame?",
              "questionAr": "كم نقطة داخل هذا الإطار الفارغ؟",
              "options": [
                "0",
                "1",
                "10",
                "2"
              ],
              "answer": "0",
              "explanation": "The frame is completely empty, which means 0!",
              "hintAr": "الإطار فاضي تماماً، يعني صفر (0)!"
            }
          ],
          "t2": [
            {
              "id": "p1_ch1_l4_q2",
              "visual": {
                "type": "cute_counters",
                "count": 1,
                "emoji": "🍬",
                "maxPerRow": 5
              },
              "format": "choose",
              "type": "p1_zero",
              "question": "You eat 1 candy from 1 candy. How many are left? 🍬",
              "questionAr": "كان معك قطعة حلوى واحدة وأكلتها! كم قطعة متبقية؟ 🍬",
              "options": [
                "0",
                "1",
                "2",
                "3"
              ],
              "answer": "0",
              "explanation": "1 - 1 = 0! No candies left in your hand.",
              "hintAr": "1 أكلناها، يتبقى صفر (0) حلوى."
            }
          ],
          "t3": [
            {
              "id": "p1_ch1_l4_q3",
              "visual": {
                "type": "number_bond",
                "whole": 6,
                "part1": 6,
                "part2": 0,
                "missing": "part2"
              },
              "format": "choose",
              "type": "p1_zero",
              "question": "Complete: 6 + ___ = 6.",
              "questionAr": "أكمل: 6 + ___ = 6.",
              "options": [
                "0",
                "1",
                "6",
                "2"
              ],
              "answer": "0",
              "explanation": "Adding 0 to any number leaves it unchanged: 6 + 0 = 6.",
              "hintAr": "أي عدد نجمعه مع الصفر يفضل زي ما هو: 6 + 0 = 6."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "p1_ch2",
    "number": 2,
    "title": "What's the Position?",
    "titleAr": "الموقع والاتجاهات",
    "icon": "📍",
    "color": "#10B981",
    "description": "Understanding Top, Bottom, Up, Down, Left, Right, In Front, Behind, and Ordinal numbers.",
    "lessons": [
      {
        "id": "p1_ch2_l1",
        "lessonNumber": 1,
        "bookPage": 32,
        "title": "Lesson 1: Top and Bottom (فوق وتحت)",
        "titleAr": "الدرس 1: فوق وتحت (Top and Bottom)",
        "rule": "Top is above, Bottom is below.",
        "hintAr": "Top يعني فوق في الأعلى، Bottom يعني تحت في الأسفل.",
        "tiers": {
          "t1": [
            {
              "id": "p1_ch2_l1_q1",
              "visual": {
                "type": "spatial_scene",
                "position": "top",
                "targetEmoji": "🐱",
                "baseEmoji": "📦"
              },
              "format": "choose",
              "type": "p1_position",
              "question": "Where is the cat 🐱? Top or Bottom?",
              "questionAr": "أين القطة 🐱؟ فوق (Top) أم تحت (Bottom)؟",
              "options": [
                "Top (فوق)",
                "Bottom (تحت)"
              ],
              "answer": "Top (فوق)",
              "explanation": "The cute cat is sitting on TOP of the box! 🐱📦",
              "hintAr": "القطة فوق الصندوق في الأعلى (Top)."
            }
          ],
          "t2": [
            {
              "id": "p1_ch2_l1_q2",
              "visual": {
                "type": "spatial_scene",
                "position": "bottom",
                "targetEmoji": "⚽",
                "baseEmoji": "🪑"
              },
              "format": "choose",
              "type": "p1_position",
              "question": "Where is the ball ⚽ relative to the chair?",
              "questionAr": "أين الكرة ⚽ بالنسبة للكرسي؟",
              "options": [
                "Bottom (تحت)",
                "Top (فوق)"
              ],
              "answer": "Bottom (تحت)",
              "explanation": "The ball is at the BOTTOM (under) the chair. ⚽🪑",
              "hintAr": "الكرة تحت الكرسي في الأسفل (Bottom)."
            }
          ],
          "t3": [
            {
              "id": "p1_ch2_l1_q3",
              "visual": {
                "type": "spatial_scene",
                "position": "top",
                "targetEmoji": "🍎",
                "baseEmoji": "🌳"
              },
              "format": "choose",
              "type": "p1_position",
              "question": "Genius the Chick sees an apple 🍎 on the tree. Is it at the top or bottom?",
              "questionAr": "الكتكوت جينيوس يرى تفاحة 🍎 على الشجرة. هل هي في الأعلى (Top) أم الأسفل (Bottom)؟",
              "options": [
                "Top (في الأعلى)",
                "Bottom (في الأسفل)"
              ],
              "answer": "Top (في الأعلى)",
              "explanation": "The red apple is at the TOP of the tree branch! 🍎🌳",
              "hintAr": "التفاحة فوق على غصن الشجرة (Top)."
            }
          ]
        }
      },
      {
        "id": "p1_ch2_l2",
        "lessonNumber": 2,
        "bookPage": 34,
        "title": "Lesson 2: In Front, Behind, Left, Right",
        "titleAr": "الدرس 2: أمام، خلف، يمين، ويسار",
        "rule": "Identify directions: In front (ahead), Behind (back), Left, and Right.",
        "hintAr": "In front يعني أمام، Behind يعني خلف، Right يعني يمين، Left يعني يسار.",
        "tiers": {
          "t1": [
            {
              "id": "p1_ch2_l2_q1",
              "visual": {
                "type": "spatial_scene",
                "position": "left",
                "targetEmoji": "🐶",
                "baseEmoji": "🏠"
              },
              "format": "choose",
              "type": "p1_position",
              "question": "Smarty the Dog is to the ___ of the doghouse. (Left or Right?)",
              "questionAr": "الكلب سمارتي 🐶 يقف على ___ البيت. (Left أم Right؟)",
              "options": [
                "Left (يسار)",
                "Right (يمين)"
              ],
              "answer": "Left (يسار)",
              "explanation": "Smarty is on the LEFT side of the house! 🐶🏠",
              "hintAr": "انظر للشاشة، الكلب يقف في جهة اليسار (Left)."
            }
          ],
          "t2": [
            {
              "id": "p1_ch2_l2_q2",
              "visual": {
                "type": "spatial_scene",
                "position": "right",
                "targetEmoji": "🚗",
                "baseEmoji": "🚦"
              },
              "format": "choose",
              "type": "p1_position",
              "question": "The car 🚗 is to the ___ of the traffic light.",
              "questionAr": "السيارة 🚗 تقف على ___ إشارة المرور.",
              "options": [
                "Right (يمين)",
                "Left (يسار)"
              ],
              "answer": "Right (يمين)",
              "explanation": "The car is on the RIGHT side! 🚦🚗",
              "hintAr": "السيارة على جهة اليمين (Right)."
            }
          ],
          "t3": [
            {
              "id": "p1_ch2_l2_q3",
              "visual": {
                "type": "cute_counters",
                "count": 3,
                "emoji": "🦆",
                "maxPerRow": 5
              },
              "format": "choose",
              "type": "p1_ordinal",
              "question": "Three ducks in a line: 🦆 🦆 🦆. Which duck is in front?",
              "questionAr": "ثلاث بطات في طابور: 🦆 🦆 🦆. أي بطة تقف في الأمام؟",
              "options": [
                "The 1st duck (الأولى)",
                "The last duck (الأخيرة)"
              ],
              "answer": "The 1st duck (الأولى)",
              "explanation": "The 1st duck (First) leads the line in front!",
              "hintAr": "البطة رقم 1 (First) هي التي تقف في المقدمة (In front)!"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "p1_ch3",
    "number": 3,
    "title": "Addition",
    "titleAr": "الجمع (Addition)",
    "icon": "➕",
    "color": "#F59E0B",
    "description": "Combining sets, visual addition stories, and finding sums up to 10.",
    "lessons": [
      {
        "id": "p1_ch3_l1",
        "lessonNumber": 1,
        "bookPage": 36,
        "title": "Lesson 1: Adding Numbers up to 5",
        "titleAr": "الدرس 1: الجمع حتى 5",
        "rule": "Addition means putting groups together (+).",
        "hintAr": "الجمع (+) يعني نضم المجموعتين معاً ونعدهم كلهم.",
        "tiers": {
          "t1": [
            {
              "id": "p1_ch3_l1_q1",
              "visual": {
                "type": "cute_counters",
                "count": 4,
                "emoji": "🍓",
                "maxPerRow": 5
              },
              "format": "choose",
              "type": "p1_add",
              "question": "2 strawberries + 2 strawberries = ___? 🍓",
              "questionAr": "2 فراولة + 2 فراولة = ___؟ 🍓",
              "options": [
                "4",
                "3",
                "5",
                "2"
              ],
              "answer": "4",
              "explanation": "2 + 2 = 4 sweet strawberries!",
              "hintAr": "عدهم كلهم: 1، 2، 3، 4 فراولات!"
            }
          ],
          "t2": [
            {
              "id": "p1_ch3_l1_q2",
              "visual": {
                "type": "number_bond",
                "whole": 5,
                "part1": 3,
                "part2": 2,
                "missing": "whole"
              },
              "format": "choose",
              "type": "p1_add",
              "question": "What is 3 + 2? (Find the whole):",
              "questionAr": "كم حاصل 3 + 2؟ (العدد الكلي):",
              "options": [
                "5",
                "4",
                "6",
                "3"
              ],
              "answer": "5",
              "explanation": "3 + 2 = 5! You got it right! ⭐",
              "hintAr": "3 في عقلك و 2 على إيدك: بعد الـ 3 -> 4, 5!"
            }
          ],
          "t3": [
            {
              "id": "p1_ch3_l1_q3",
              "visual": {
                "type": "cute_counters",
                "count": 5,
                "emoji": "🌸",
                "maxPerRow": 5
              },
              "format": "choose",
              "type": "p1_story",
              "question": "Mom has 4 flowers 🌸. You give her 1 more flower. How many now?",
              "questionAr": "ماما معها 4 زهور 🌸. وأنت أعطيتها زهرة إضافية واحدة. كم زهرة معها الآن؟",
              "options": [
                "5",
                "4",
                "6",
                "3"
              ],
              "answer": "5",
              "explanation": "4 + 1 = 5 beautiful flowers for Mom!",
              "hintAr": "4 وزدنا عليهم 1 = 5 زهور جميلة!"
            }
          ]
        }
      },
      {
        "id": "p1_ch3_l2",
        "lessonNumber": 2,
        "bookPage": 41,
        "title": "Lesson 2: Addition Stories up to 10",
        "titleAr": "الدرس 2: قصص الجمع حتى 10",
        "rule": "Counting on to add larger numbers up to 10.",
        "hintAr": "ضع الرقم الأكبر في عقلك، وعُد للأمام بالرقم الثاني.",
        "tiers": {
          "t1": [
            {
              "id": "p1_ch3_l2_q1",
              "visual": {
                "type": "ten_frame",
                "count": 7,
                "total": 10,
                "color": "#F59E0B"
              },
              "format": "choose",
              "type": "p1_add",
              "question": "5 dots + 2 dots = ___ dots in total?",
              "questionAr": "5 نقاط + 2 نقطة = ___ نقطة في المجموع؟",
              "options": [
                "7",
                "6",
                "8",
                "9"
              ],
              "answer": "7",
              "explanation": "5 + 2 = 7 dots in the Ten-Frame!",
              "hintAr": "صف كامل (5) ونقطتين (2) = 7!"
            }
          ],
          "t2": [
            {
              "id": "p1_ch3_l2_q2",
              "visual": {
                "type": "cute_counters",
                "count": 9,
                "emoji": "🐠",
                "maxPerRow": 5
              },
              "format": "choose",
              "type": "p1_add",
              "question": "6 fish + 3 fish = ___ swimming fish? 🐠",
              "questionAr": "6 سمكات + 3 سمكات = ___ سمكة تسبح؟ 🐠",
              "options": [
                "9",
                "8",
                "10",
                "7"
              ],
              "answer": "9",
              "explanation": "6 + 3 = 9 fish swimming happily!",
              "hintAr": "6 في عقلك و 3 على إيدك: 7, 8, 9!"
            }
          ],
          "t3": [
            {
              "id": "p1_ch3_l2_q3",
              "visual": {
                "type": "ten_frame",
                "count": 10,
                "total": 10,
                "color": "#10B981"
              },
              "format": "choose",
              "type": "p1_story",
              "question": "Genius has 6 cookies 🍪. Smarty gives him 4 cookies. How many now?",
              "questionAr": "جينيوس معه 6 بسكوتات 🍪. وسمارتي أعطاه 4 بسكوتات. كم أصبح معه؟",
              "options": [
                "10",
                "9",
                "8",
                "11"
              ],
              "answer": "10",
              "explanation": "6 + 4 = 10 delicious cookies! 🍪 Ten-Frame is full!",
              "hintAr": "6 + 4 = 10 بسكوتات كاملة ولذيذة!"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "p1_ch4",
    "number": 4,
    "title": "Subtraction",
    "titleAr": "الطرح (Subtraction)",
    "icon": "➖",
    "color": "#EF4444",
    "description": "Taking away objects, visual subtraction stories, and finding remaining quantities within 10.",
    "lessons": [
      {
        "id": "p1_ch4_l1",
        "lessonNumber": 1,
        "bookPage": 44,
        "title": "Lesson 1: Subtracting within 5",
        "titleAr": "الدرس 1: الطرح حتى 5",
        "rule": "Subtraction means taking away (-). Count what is left.",
        "hintAr": "الطرح (-) يعني نحذف أو ننقص، ونعد الباقي.",
        "tiers": {
          "t1": [
            {
              "id": "p1_ch4_l1_q1",
              "visual": {
                "type": "cute_counters",
                "count": 3,
                "emoji": "🍎",
                "maxPerRow": 5
              },
              "format": "choose",
              "type": "p1_sub",
              "question": "You have 5 apples. You eat 2. How many are left? 5 - 2 = ___",
              "questionAr": "معك 5 تفاحات. أكلت منها 2. كم يتبقى؟ 5 - 2 = ___",
              "options": [
                "3",
                "2",
                "4",
                "1"
              ],
              "answer": "3",
              "explanation": "5 - 2 = 3 apples left! 🍎🍎🍎",
              "hintAr": "طلع 5 على إيدك وخبي صباعين: يتبقى 3!"
            }
          ],
          "t2": [
            {
              "id": "p1_ch4_l1_q2",
              "visual": {
                "type": "cute_counters",
                "count": 2,
                "emoji": "🎈",
                "maxPerRow": 5
              },
              "format": "choose",
              "type": "p1_sub",
              "question": "There were 4 balloons 🎈. 2 popped! How many are left? 4 - 2 = ___",
              "questionAr": "كان هناك 4 بالونات 🎈. طرقعت اثنتان! كم بالونة باقية؟ 4 - 2 = ___",
              "options": [
                "2",
                "1",
                "3",
                "0"
              ],
              "answer": "2",
              "explanation": "4 - 2 = 2 flying balloons! 🎈🎈",
              "hintAr": "4 وننقص منها 2 = يتبقى 2!"
            }
          ],
          "t3": [
            {
              "id": "p1_ch4_l1_q3",
              "visual": {
                "type": "cute_counters",
                "count": 1,
                "emoji": "🍦",
                "maxPerRow": 5
              },
              "format": "choose",
              "type": "p1_story",
              "question": "Brainy has 3 ice creams 🍦. He gives 2 to his friends. How many for Brainy?",
              "questionAr": "القط برايني معه 3 آيس كريم 🍦. أعطى 2 لأصدقائه. كم آيس كريم معه الآن؟",
              "options": [
                "1",
                "2",
                "0",
                "3"
              ],
              "answer": "1",
              "explanation": "3 - 2 = 1 yummy ice cream left for Brainy!",
              "hintAr": "3 وأعطينا أصحابنا 2، يتبقى 1 فقط لبرايني!"
            }
          ]
        }
      },
      {
        "id": "p1_ch4_l2",
        "lessonNumber": 2,
        "bookPage": 50,
        "title": "Lesson 2: Subtraction within 10",
        "titleAr": "الدرس 2: الطرح حتى 10",
        "rule": "Subtracting from numbers up to 10.",
        "hintAr": "نعد تنازلياً أو نحذف من الـ 10 لمعرفة الباقي.",
        "tiers": {
          "t1": [
            {
              "id": "p1_ch4_l2_q1",
              "visual": {
                "type": "ten_frame",
                "count": 6,
                "total": 10,
                "color": "#EF4444"
              },
              "format": "choose",
              "type": "p1_sub",
              "question": "10 dots in the frame. We take away 4 dots. How many left? 10 - 4 = ___",
              "questionAr": "10 نقاط في الإطار. حذفنا منها 4 نقاط. كم يتبقى؟ 10 - 4 = ___",
              "options": [
                "6",
                "5",
                "7",
                "4"
              ],
              "answer": "6",
              "explanation": "10 - 4 = 6 dots left in the frame!",
              "hintAr": "أصابع اليدين 10، نزل 4 أصابع: يتبقى 6!"
            }
          ],
          "t2": [
            {
              "id": "p1_ch4_l2_q2",
              "visual": {
                "type": "cute_counters",
                "count": 5,
                "emoji": "🦆",
                "maxPerRow": 5
              },
              "format": "choose",
              "type": "p1_sub",
              "question": "8 ducks in the pond. 3 fly away! How many left? 8 - 3 = ___",
              "questionAr": "8 بطات في البحيرة. طارت 3 بطات! كم بطة باقية؟ 8 - 3 = ___",
              "options": [
                "5",
                "6",
                "4",
                "3"
              ],
              "answer": "5",
              "explanation": "8 - 3 = 5 ducks swimming peacefully!",
              "hintAr": "8 وننقص منها 3 = 5 بطات!"
            }
          ],
          "t3": [
            {
              "id": "p1_ch4_l2_q3",
              "visual": {
                "type": "number_bond",
                "whole": 9,
                "part1": 5,
                "part2": 4,
                "missing": "part2"
              },
              "format": "choose",
              "type": "p1_sub",
              "question": "Find the difference: 9 - 5 = ___",
              "questionAr": "احسب ناتج الطرح: 9 - 5 = ___",
              "options": [
                "4",
                "3",
                "5",
                "6"
              ],
              "answer": "4",
              "explanation": "9 - 5 = 4! Excellent job superstar! 🌟",
              "hintAr": "عد من بعد الـ 5 لحد الـ 9: 6, 7, 8, 9 (4 أصابع)!"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "p1_ch5",
    "number": 5,
    "title": "Comparing Lengths",
    "titleAr": "مقارنة الأطوال (Comparing Lengths)",
    "icon": "📏",
    "color": "#8B5CF6",
    "description": "Understanding Longer than, Shorter than, and measuring lengths using grid units.",
    "lessons": [
      {
        "id": "p1_ch5_l1",
        "lessonNumber": 1,
        "bookPage": 54,
        "title": "Lesson 1: Longer Than & Shorter Than",
        "titleAr": "الدرس 1: أطول من وأقصر من",
        "rule": "Compare two items from the same starting baseline.",
        "hintAr": "نضع الشيئين على نفس خط البداية لنرى أيهما أطول (Longer) وأيهما أقصر (Shorter).",
        "tiers": {
          "t1": [
            {
              "id": "p1_ch5_l1_q1",
              "visual": {
                "type": "length_comp",
                "item1Emoji": "✏️",
                "len1": 6,
                "item2Emoji": "🖍️",
                "len2": 3
              },
              "format": "choose",
              "type": "p1_length",
              "question": "Which item is LONGER (أطول)?",
              "questionAr": "أي الأغراض أطول (Longer)؟",
              "options": [
                "The pencil ✏️ (القلم الرصاص)",
                "The crayon 🖍️ (قلم التلوين)"
              ],
              "answer": "The pencil ✏️ (القلم الرصاص)",
              "explanation": "The pencil is 6 units, which is longer than the crayon (3 units)!",
              "hintAr": "القلم الرصاص ✏️ ممتد لمسافة أطول (6 مربعات)."
            }
          ],
          "t2": [
            {
              "id": "p1_ch5_l1_q2",
              "visual": {
                "type": "length_comp",
                "item1Emoji": "🚂",
                "len1": 7,
                "item2Emoji": "🚗",
                "len2": 3
              },
              "format": "choose",
              "type": "p1_length",
              "question": "Which vehicle is SHORTER (أقصر)?",
              "questionAr": "أي المركبات أقصر (Shorter)؟",
              "options": [
                "The car 🚗 (السيارة)",
                "The train 🚂 (القطار)"
              ],
              "answer": "The car 🚗 (السيارة)",
              "explanation": "The car is only 3 units, so it is shorter than the train!",
              "hintAr": "السيارة 🚗 أقصر في الطول من القطار 🚂."
            }
          ],
          "t3": [
            {
              "id": "p1_ch5_l1_q3",
              "visual": {
                "type": "length_comp",
                "item1Emoji": "📏",
                "len1": 8,
                "item2Emoji": "✏️",
                "len2": 5
              },
              "format": "choose",
              "type": "p1_length",
              "question": "How many units longer is the ruler 📏 (8 units) than the pencil ✏️ (5 units)?",
              "questionAr": "بكم وحدة تزيد المسطرة 📏 (8 وحدات) عن القلم ✏️ (5 وحدات)؟",
              "options": [
                "3 units",
                "2 units",
                "4 units",
                "1 unit"
              ],
              "answer": "3 units",
              "explanation": "8 - 5 = 3 units longer! Super math genius! 🧠",
              "hintAr": "8 ناقص 5 = 3 مربعات فرق!"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "p1_ch6",
    "number": 6,
    "title": "Representing Data",
    "titleAr": "تمثيل البيانات (Representing Data)",
    "icon": "📊",
    "color": "#EC4899",
    "description": "Sorting by shape and color, reading picture graphs, and comparing counts.",
    "lessons": [
      {
        "id": "p1_ch6_l1",
        "lessonNumber": 1,
        "bookPage": 60,
        "title": "Lesson 1: Sorting and Picture Graphs",
        "titleAr": "الدرس 1: التصنيف ومخطط الصور",
        "rule": "Group items that look the same and count them.",
        "hintAr": "نجمع الأشكال المتشابهة معاً ونعد كل نوع.",
        "tiers": {
          "t1": [
            {
              "id": "p1_ch6_l1_q1",
              "visual": {
                "type": "cute_counters",
                "count": 4,
                "emoji": "⭐",
                "maxPerRow": 5
              },
              "format": "choose",
              "type": "p1_data",
              "question": "Count the stars ⭐ in the graph:",
              "questionAr": "عُد النجوم ⭐ في المخطط:",
              "options": [
                "4",
                "3",
                "5",
                "2"
              ],
              "answer": "4",
              "explanation": "There are 4 stars in this group!",
              "hintAr": "1، 2، 3، 4 نجوم!"
            }
          ],
          "t2": [
            {
              "id": "p1_ch6_l1_q2",
              "visual": {
                "type": "cute_counters",
                "count": 6,
                "emoji": "🍎",
                "maxPerRow": 5
              },
              "format": "choose",
              "type": "p1_data",
              "question": "In the fruit basket: 6 apples 🍎 and 3 bananas 🍌. Which fruit has MORE?",
              "questionAr": "في سلة الفواكه: 6 تفاحات 🍎 و 3 موزات 🍌. أي الفواكه أكثر (More)؟",
              "options": [
                "Apples 🍎 (التفاح)",
                "Bananas 🍌 (الموز)"
              ],
              "answer": "Apples 🍎 (التفاح)",
              "explanation": "6 is greater than 3, so there are MORE apples! 🍎",
              "hintAr": "الـ 6 أكبر من الـ 3، يبقى التفاح أكثر!"
            }
          ],
          "t3": [
            {
              "id": "p1_ch6_l1_q3",
              "visual": {
                "type": "cute_counters",
                "count": 5,
                "emoji": "🚗",
                "maxPerRow": 5
              },
              "format": "choose",
              "type": "p1_data",
              "question": "Smarty counted 5 red cars 🚗 and 2 blue cars 🚙. How many cars in TOTAL?",
              "questionAr": "سمارتي عد 5 سيارات حمراء 🚗 وسياراتين زرقاوتين 🚙. كم مجموع كل السيارات؟",
              "options": [
                "7",
                "6",
                "8",
                "5"
              ],
              "answer": "7",
              "explanation": "5 + 2 = 7 total cars! 🚗🚙",
              "hintAr": "5 + 2 = 7 سيارات في المجموع!"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "p1_ch7",
    "number": 7,
    "title": "Numbers Greater than 10",
    "titleAr": "الأعداد الأكبر من 10 (11 إلى 20)",
    "icon": "🔟",
    "color": "#6366F1",
    "description": "Understanding teen numbers (11 to 20), bundles of 10, and counting up to 100.",
    "lessons": [
      {
        "id": "p1_ch7_l1",
        "lessonNumber": 1,
        "bookPage": 72,
        "title": "Lesson 1: Numbers 11 to 20 (Ten and Some More)",
        "titleAr": "الدرس 1: الأعداد من 11 إلى 20",
        "rule": "10 plus a number makes a teen number: 10 + 3 = 13.",
        "hintAr": "عشرة كاملة ونزود عليها: 10 + 3 = 13 (ثلاثة عشر).",
        "tiers": {
          "t1": [
            {
              "id": "p1_ch7_l1_q1",
              "visual": {
                "type": "number_bond",
                "whole": 14,
                "part1": 10,
                "part2": 4,
                "missing": "whole"
              },
              "format": "choose",
              "type": "p1_teen",
              "question": "What is 10 + 4?",
              "questionAr": "كم حاصل 10 + 4؟",
              "options": [
                "14",
                "13",
                "15",
                "12"
              ],
              "answer": "14",
              "explanation": "10 and 4 make 14 (fourteen)! 🌟",
              "hintAr": "10 + 4 = 14 (أربعة عشر)!"
            }
          ],
          "t2": [
            {
              "id": "p1_ch7_l1_q2",
              "visual": {
                "type": "number_bond",
                "whole": 17,
                "part1": 10,
                "part2": 7,
                "missing": "part2"
              },
              "format": "choose",
              "type": "p1_teen",
              "question": "17 is 10 and ___?",
              "questionAr": "العدد 17 يتكون من 10 و ___؟",
              "options": [
                "7",
                "6",
                "8",
                "5"
              ],
              "answer": "7",
              "explanation": "17 = 10 + 7! The ones digit is 7.",
              "hintAr": "17 = عشرة و 7 آحاد!"
            }
          ],
          "t3": [
            {
              "id": "p1_ch7_l1_q3",
              "visual": {
                "type": "cute_counters",
                "count": 10,
                "emoji": "🍬",
                "maxPerRow": 5
              },
              "format": "choose",
              "type": "p1_teen",
              "question": "You have a jar of 10 candies and 5 loose candies. How many in total?",
              "questionAr": "معك برطمان به 10 قطع حلوى، و 5 قطع حلوى خارج البرطمان. كم المجموع؟",
              "options": [
                "15",
                "14",
                "16",
                "12"
              ],
              "answer": "15",
              "explanation": "10 + 5 = 15 sweet candies! 🍬",
              "hintAr": "10 + 5 = 15 حلوى لذيذة!"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "p1_ch8",
    "number": 8,
    "title": "Reading the Clock",
    "titleAr": "قراءة الساعة (Reading the Clock)",
    "icon": "⏰",
    "color": "#0EA5E9",
    "description": "Reading the analog clock by the hour (o'clock) with colored hands.",
    "lessons": [
      {
        "id": "p1_ch8_l1",
        "lessonNumber": 1,
        "bookPage": 86,
        "title": "Lesson 1: Telling Time to the Hour (O'Clock)",
        "titleAr": "الدرس 1: الساعة بالضبط (O'Clock)",
        "rule": "When long minute hand points to 12, look at short hour hand for the hour.",
        "hintAr": "لما العقرب الطويل الأزرق يشير لـ 12، نقرأ الرقم اللي عليه العقرب القصير الأحمر (بالضبط / O'Clock).",
        "tiers": {
          "t1": [
            {
              "id": "p1_ch8_l1_q1",
              "visual": {
                "type": "clock",
                "hour": 3,
                "minute": 0
              },
              "format": "choose",
              "type": "p1_clock",
              "question": "What time is it on the clock? ⏰",
              "questionAr": "كم الساعة الآن على هذه الساعة؟ ⏰",
              "options": [
                "3 o'clock (الساعة 3 بالضبط)",
                "12 o'clock",
                "2 o'clock",
                "4 o'clock"
              ],
              "answer": "3 o'clock (الساعة 3 بالضبط)",
              "explanation": "Short red hand is at 3, long blue hand is at 12: It is 3 o'clock!",
              "hintAr": "العقرب القصير الأحمر يشير للـ 3، إذن الساعة 3 بالضبط!"
            }
          ],
          "t2": [
            {
              "id": "p1_ch8_l1_q2",
              "visual": {
                "type": "clock",
                "hour": 7,
                "minute": 0
              },
              "format": "choose",
              "type": "p1_clock",
              "question": "Short hand points to 7, long hand points to 12. What time is it?",
              "questionAr": "العقرب القصير يشير إلى 7، والعقرب الطويل يشير إلى 12. كم الساعة؟",
              "options": [
                "7 o'clock (الساعة 7)",
                "6 o'clock",
                "8 o'clock",
                "12 o'clock"
              ],
              "answer": "7 o'clock (الساعة 7)",
              "explanation": "It is 7:00 (7 o'clock)!",
              "hintAr": "الساعة 7:00 بالضبط!"
            }
          ],
          "t3": [
            {
              "id": "p1_ch8_l1_q3",
              "visual": {
                "type": "clock",
                "hour": 9,
                "minute": 0
              },
              "format": "choose",
              "type": "p1_clock",
              "question": "Brainy goes to sleep at 9 o'clock 🌙. Where does the short hand point?",
              "questionAr": "برايني ينام في تمام الساعة 9 🌙. إلى أي رقم يشير العقرب القصير؟",
              "options": [
                "At 9 (إلى الرقم 9)",
                "At 12",
                "At 6",
                "At 3"
              ],
              "answer": "At 9 (إلى الرقم 9)",
              "explanation": "At 9 o'clock, the short hour hand points directly at 9!",
              "hintAr": "في الساعة 9، العقرب القصير يشير للرقم 9!"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "p1_ch9",
    "number": 9,
    "title": "Operations with 3 Numbers",
    "titleAr": "العمليات الحسابية مع 3 أعداد",
    "icon": "🎲",
    "color": "#14B8A6",
    "description": "Adding and subtracting with three simple numbers step-by-step.",
    "lessons": [
      {
        "id": "p1_ch9_l1",
        "lessonNumber": 1,
        "bookPage": 88,
        "title": "Lesson 1: Adding 3 Small Numbers",
        "titleAr": "الدرس 1: جمع 3 أرقام صغيرة",
        "rule": "Add the first two numbers, then add the third: (a + b) + c.",
        "hintAr": "اجمع أول رقمين مع بعض، والناتج اجمع عليه الرقم الثالث.",
        "tiers": {
          "t1": [
            {
              "id": "p1_ch9_l1_q1",
              "visual": {
                "type": "cute_counters",
                "count": 6,
                "emoji": "🍎",
                "maxPerRow": 5
              },
              "format": "choose",
              "type": "p1_three_nums",
              "question": "Calculate: 2 + 1 + 3 = ___ 🍎",
              "questionAr": "احسب: 2 + 1 + 3 = ___ 🍎",
              "options": [
                "6",
                "5",
                "7",
                "4"
              ],
              "answer": "6",
              "explanation": "First 2 + 1 = 3. Then 3 + 3 = 6! Super smart!",
              "hintAr": "أولاً: 2 + 1 = 3. ثم نجمع: 3 + 3 = 6 تفاحات!"
            }
          ],
          "t2": [
            {
              "id": "p1_ch9_l1_q2",
              "visual": {
                "type": "cute_counters",
                "count": 8,
                "emoji": "🌟",
                "maxPerRow": 5
              },
              "format": "choose",
              "type": "p1_three_nums",
              "question": "What is 4 + 2 + 2?",
              "questionAr": "كم حاصل 4 + 2 + 2؟",
              "options": [
                "8",
                "7",
                "9",
                "6"
              ],
              "answer": "8",
              "explanation": "4 + 2 = 6, and 6 + 2 = 8 stars! 🌟",
              "hintAr": "4 + 2 = 6، ونزود كمان 2 = 8!"
            }
          ],
          "t3": [
            {
              "id": "p1_ch9_l1_q3",
              "visual": {
                "type": "cute_counters",
                "count": 10,
                "emoji": "🎈",
                "maxPerRow": 5
              },
              "format": "choose",
              "type": "p1_story",
              "question": "Genius has 3 balloons, Smarty has 3, and Brainy has 4. How many balloons together? 🎈",
              "questionAr": "جينيوس معه 3 بالونات، وسمارتي معه 3، وبرايني معه 4. كم بالونة معهم جميعاً؟ 🎈",
              "options": [
                "10",
                "9",
                "8",
                "11"
              ],
              "answer": "10",
              "explanation": "3 + 3 = 6, and 6 + 4 = 10 balloons! 🎈 Party time!",
              "hintAr": "3 + 3 = 6، و 6 + 4 = 10 بالونات كاملة!"
            }
          ]
        }
      }
    ]
  }
];

window.CURRICULUM_P1 = CURRICULUM_P1;
