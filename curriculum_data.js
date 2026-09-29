// curriculum_data.js - Official Egyptian Ministry 2027 Mathematics Curriculum (Primary 3 - Term 1)
// Verified 100% Alignment with Official MOETE-JICA Textbook (10 Chapters, 37 Lessons, 121 Pages)

const CURRICULUM_DATA = [
  {
    "id": "ch1",
    "number": 1,
    "title": "Rules of Multiplication",
    "titleAr": "قواعد الضرب",
    "icon": "✖️",
    "color": "#4F46E5",
    "description": "Properties of multiplication, multiplying by 10 and 0, and finding missing factors.",
    "lessons": [
      {
        "id": "ch1_l1",
        "lessonNumber": 1,
        "bookPage": 8,
        "title": "Lesson 1: Properties of Multiplication (Part 1)",
        "titleAr": "الدرس 1: خواص الضرب (الجزء 1)",
        "rule": "When you add 1 to the multiplier, the product increases by the multiplicand. Switching the order of factors gives the same product (Commutative Property: a × b = b × a).",
        "conceptSummary": "If 7 × 2 = 14, then 7 × 3 = 14 + 7 = 21. Also, 7 × 3 = 3 × 7 = 21.",
        "hintAr": "عند زيادة المضروب فيه بمقدار 1، يزيد الناتج بمقدار المضروب نفسه. وتبديل ترتيب العوامل يعطي نفس الناتج (خاصية الإبدال: a × b = b × a).",
        "tiers": {
          "t1": [
            {
              "id": "ch1_l1_q1",
              "visual": {
                "type": "pattern",
                "items": [
                  "5 × 6 = 30",
                  "5 × 7 = 35",
                  "5 × 8 = ?"
                ]
              },
              "format": "choose",
              "type": "tier1_concept",
              "question": "Complete the rule: 5 × 8 is ___ more than 5 × 7.",
              "questionAr": "أكمل القاعدة: حاصل 5 × 8 يزيد بمقدار ___ عن 5 × 7.",
              "options": [
                "5",
                "8",
                "1",
                "7"
              ],
              "answer": "5",
              "explanation": "When multiplier increases by 1, product increases by the multiplicand (5).",
              "hint": "Recall: Increase by multiplicand (5).",
              "hintAr": "تذكر: يزيد الناتج بمقدار المضروب (5)."
            }
          ],
          "t2": [
            {
              "id": "ch1_l1_q2",
              "visual": {
                "type": "array",
                "rows": 3,
                "cols": 6,
                "emoji": "⭐"
              },
              "format": "complete",
              "type": "calc",
              "question": "Fill in the blank using the Commutative Property: 6 × 3 = 3 × ___",
              "questionAr": "أكمل باستخدام خاصية الإبدال: 6 × 3 = 3 × ___",
              "options": [
                "6",
                "3",
                "18",
                "9"
              ],
              "answer": "6",
              "explanation": "Commutative Property states you can switch factor order: 6 × 3 = 3 × 6.",
              "hint": "a × b = b × a.",
              "hintAr": "خاصية الإبدال: تبديل العوامل لا يغير الناتج (6)."
            }
          ],
          "t3": [
            {
              "id": "ch1_l1_q3",
              "format": "choose",
              "type": "word_problem",
              "question": "Fill in the blank: 4 × 5 = 4 × 6 - ___",
              "questionAr": "أكمل الفراغ: 4 × 5 = 4 × 6 - ___",
              "options": [
                "4",
                "5",
                "6",
                "1"
              ],
              "answer": "4",
              "explanation": "Taking away 1 from multiplier decreases product by the multiplicand (4).",
              "hint": "Decrease by multiplicand.",
              "hintAr": "طرح 1 من المضروب فيه ينقص الناتج بمقدار 4."
            }
          ]
        }
      },
      {
        "id": "ch1_l2",
        "lessonNumber": 2,
        "bookPage": 10,
        "title": "Lesson 2: Properties of Multiplication (Part 2)",
        "titleAr": "الدرس 2: خواص الضرب (الجزء 2)",
        "rule": "You can break up the multiplicand or multiplier: 7 × 9 = (4 × 9) + (3 × 9).",
        "conceptSummary": "Breaking up numbers makes tough facts easy.",
        "hintAr": "يمكنك تجزئة المضروب أو المضروب فيه لتسهيل الضرب: 7 × 9 = (4 × 9) + (3 × 9).",
        "tiers": {
          "t1": [
            {
              "id": "ch1_l2_q1",
              "visual": {
                "type": "split_array",
                "rows": 9,
                "cols1": 4,
                "cols2": 3,
                "emoji": "🍎"
              },
              "format": "choose",
              "type": "tier1_concept",
              "question": "To calculate 7 × 9, we break up 7 into 4 and 3. What is (4 × 9) + (3 × 9)?",
              "questionAr": "لحساب 7 × 9 فككنا 7 إلى 4 و 3. ما ناتج (4 × 9) + (3 × 9)؟",
              "options": [
                "36 + 27 = 63",
                "36 + 18 = 54",
                "40 + 23 = 63",
                "28 + 35 = 63"
              ],
              "answer": "36 + 27 = 63",
              "explanation": "4 × 9 = 36 and 3 × 9 = 27. 36 + 27 = 63.",
              "hint": "4 × 9 = 36, 3 × 9 = 27.",
              "hintAr": "4 × 9 = 36، و 3 × 9 = 27، والناتج = 63."
            }
          ],
          "t2": [
            {
              "id": "ch1_l2_q2",
              "visual": {
                "type": "split_array",
                "rows": 6,
                "cols1": 5,
                "cols2": 3,
                "emoji": "⭐"
              },
              "format": "complete",
              "type": "calc",
              "question": "Complete: 8 × 6 = (5 × 6) + (___ × 6)",
              "questionAr": "أكمل: 8 × 6 = (5 × 6) + (___ × 6)",
              "options": [
                "3",
                "2",
                "4",
                "8"
              ],
              "answer": "3",
              "explanation": "8 = 5 + 3. So 8 × 6 = (5 × 6) + (3 × 6).",
              "hint": "5 + ? = 8.",
              "hintAr": "8 تتفكك إلى 5 + 3."
            }
          ],
          "t3": [
            {
              "id": "ch1_l2_q3",
              "visual": {
                "type": "split_array",
                "rows": 9,
                "cols1": 3,
                "cols2": 2,
                "emoji": "🍪"
              },
              "format": "choose",
              "type": "word_problem",
              "question": "Is 9 × 5 equal to (9 × 3) + (9 × 2)?",
              "questionAr": "هل 9 × 5 تساوي (9 × 3) + (9 × 2)؟",
              "options": [
                "Yes, because 3 + 2 = 5 and 27 + 18 = 45",
                "No, second number cannot be split",
                "No, answer is 50",
                "Only for even numbers"
              ],
              "answer": "Yes, because 3 + 2 = 5 and 27 + 18 = 45",
              "explanation": "Breaking up multiplier gives same result: 27 + 18 = 45.",
              "hint": "27 + 18 = 45.",
              "hintAr": "نعم، لأن 3 + 2 = 5 و 27 + 18 = 45."
            }
          ]
        }
      },
      {
        "id": "ch1_l3",
        "lessonNumber": 3,
        "bookPage": 12,
        "title": "Lesson 3: Multiplying by 10 and 0 (Part 1)",
        "titleAr": "الدرس 3: الضرب في 10 و 0 (الجزء 1)",
        "rule": "Multiplying by 10 adds a zero (7 × 10 = 70). Any number multiplied by 0 is 0 (15 × 0 = 0).",
        "conceptSummary": "Any number × 0 = 0; number × 10 appends 0.",
        "hintAr": "الضرب في 10 يضع صفراً في الآحاد. وأي عدد مضروب في صفر يساوي صفراً دائماً.",
        "tiers": {
          "t1": [
            {
              "id": "ch1_l3_q1",
              "visual": {
                "type": "pattern",
                "items": [
                  "10 × 1 = 10",
                  "10 × 2 = 20",
                  "... 10 × 7 = ?"
                ]
              },
              "format": "choose",
              "type": "tier1_concept",
              "question": "What is 7 × 10?",
              "questionAr": "ما حاصل ضرب 7 × 10؟",
              "options": [
                "70",
                "17",
                "700",
                "7"
              ],
              "answer": "70",
              "explanation": "7 × 10 = 70.",
              "hint": "7 tens = 70.",
              "hintAr": "7 عشرات = 70."
            }
          ],
          "t2": [
            {
              "id": "ch1_l3_q2",
              "visual": {
                "type": "pattern",
                "items": [
                  "1 × 0 = 0",
                  "5 × 0 = 0",
                  "15 × 0 = ?"
                ]
              },
              "format": "complete",
              "type": "calc",
              "question": "Calculate: 15 × 0 = ___",
              "questionAr": "احسب: 15 × 0 = ___",
              "options": [
                "0",
                "15",
                "1",
                "150"
              ],
              "answer": "0",
              "explanation": "Any number multiplied by 0 equals 0.",
              "hint": "Zero property of multiplication.",
              "hintAr": "أي عدد في صفر يساوي صفراً."
            }
          ],
          "t3": [
            {
              "id": "ch1_l3_q3",
              "visual": {
                "type": "equal_groups",
                "groups": 4,
                "items": 10,
                "emoji": "✏️"
              },
              "format": "choose",
              "type": "word_problem",
              "question": "One box has 10 pencils. If you buy 4 boxes, how many pencils will you have in total?",
              "questionAr": "علبة بها 10 أقلام. إذا اشتريت 4 علب، فكم قلماً معك بالإجمالي؟",
              "options": [
                "40 pencils (4 × 10 = 40)",
                "14 pencils",
                "400 pencils",
                "24 pencils"
              ],
              "answer": "40 pencils (4 × 10 = 40)",
              "explanation": "4 boxes × 10 pencils = 40 pencils.",
              "hint": "4 × 10 = 40.",
              "hintAr": "4 علب × 10 أقلام = 40 قلماً."
            }
          ]
        }
      },
      {
        "id": "ch1_l4",
        "lessonNumber": 4,
        "bookPage": 14,
        "title": "Lesson 4: Multiplying by 10 and 0 (Part 2)",
        "titleAr": "الدرس 4: الضرب في 10 و 0 (الجزء 2)",
        "rule": "Total Score = (Score per throw) × (Count). Throws landing in 0-point area contribute 0 points.",
        "conceptSummary": "Target games scoring: multiply points by count and sum.",
        "hintAr": "النقاط الإجمالية = مجموع نقاط الرميات. الرمية في منطقة 0 نقطة ناتجها صفر.",
        "tiers": {
          "t1": [
            {
              "id": "ch1_l4_q1",
              "format": "choose",
              "type": "tier1_concept",
              "question": "Sara threw 5 balls into the 0-point area. What is her score for these throws?",
              "questionAr": "رمت سارة 5 كرات في منطقة 0 نقطة. كم نقاطها من هذه الرميات؟",
              "options": [
                "0 points (0 × 5 = 0)",
                "5 points",
                "50 points",
                "1 point"
              ],
              "answer": "0 points (0 × 5 = 0)",
              "explanation": "0 × 5 = 0 points.",
              "hint": "0 times any count is 0.",
              "hintAr": "0 × 5 = 0 نقطة."
            }
          ],
          "t2": [
            {
              "id": "ch1_l4_q2",
              "format": "complete",
              "type": "calc",
              "question": "Hassan got: 4 balls in 10-point area, 2 in 3-point area, and 3 in 0-point area. What is his total score?",
              "questionAr": "أحرز حسن: 4 كرات في 10 نقاط، وكرتين في 3 نقاط، و3 كرات في 0 نقطة. ما مجموعه؟",
              "options": [
                "46",
                "49",
                "40",
                "52"
              ],
              "answer": "46",
              "explanation": "(4 × 10) + (2 × 3) + (3 × 0) = 40 + 6 + 0 = 46.",
              "hint": "40 + 6 + 0 = 46.",
              "hintAr": "40 + 6 + 0 = 46 نقطة."
            }
          ],
          "t3": [
            {
              "id": "ch1_l4_q3",
              "format": "choose",
              "type": "word_problem",
              "question": "Gamal needs 50 points. He already scored 30 points. How many 5-point throws does he need to reach 50?",
              "questionAr": "يحتاج جمال 50 نقطة. أحرز 30 نقطة. كم رمية ذات 5 نقاط يحتاجها للوصول إلى 50؟",
              "options": [
                "4 throws (4 × 5 = 20)",
                "2 throws",
                "5 throws",
                "10 throws"
              ],
              "answer": "4 throws (4 × 5 = 20)",
              "explanation": "50 - 30 = 20 points needed. 20 ÷ 5 = 4 throws.",
              "hint": "20 ÷ 5 = 4.",
              "hintAr": "المتبقي 20 نقطة (50 - 30 = 20)، و 20 ÷ 5 = 4 رميات."
            }
          ]
        }
      },
      {
        "id": "ch1_l5",
        "lessonNumber": 5,
        "bookPage": 16,
        "title": "Lesson 5: Find the Missing Numbers",
        "titleAr": "الدرس 5: إيجاد الأعداد الناقصة",
        "rule": "To find missing factor, use the times table for the known factor: 3 × [ ] = 12 means 3 × 4 = 12.",
        "conceptSummary": "Use times tables or division to find missing numbers.",
        "hintAr": "لمعرفة العدد الناقص، نستخدم حقائق الضرب أو القسمة: 3 × [ ] = 12 تعني 3 × 4 = 12.",
        "tiers": {
          "t1": [
            {
              "id": "ch1_l5_q1",
              "visual": {
                "type": "pattern",
                "items": [
                  "3 × 1 = 3",
                  "3 × 2 = 6",
                  "3 × 3 = 9",
                  "3 × [ ? ] = 12"
                ]
              },
              "format": "choose",
              "type": "tier1_concept",
              "question": "Write the missing number in the box: 3 × ___ = 12",
              "questionAr": "اكتب العدد الناقص في المربع: 3 × ___ = 12",
              "options": [
                "4",
                "3",
                "5",
                "6"
              ],
              "answer": "4",
              "explanation": "In 3 times table: 3 × 4 = 12.",
              "hint": "3 × 4 = 12.",
              "hintAr": "3 × 4 = 12."
            }
          ],
          "t2": [
            {
              "id": "ch1_l5_q2",
              "visual": {
                "type": "pattern",
                "items": [
                  "5 × 7 = 35",
                  "[ ? ] × 7 = 42",
                  "7 × 7 = 49"
                ]
              },
              "format": "complete",
              "type": "calc",
              "question": "Find the missing factor: ___ × 7 = 42",
              "questionAr": "أوجد العامل الناقص: ___ × 7 = 42",
              "options": [
                "6",
                "7",
                "8",
                "5"
              ],
              "answer": "6",
              "explanation": "6 × 7 = 42.",
              "hint": "6 × 7 = 42.",
              "hintAr": "6 × 7 = 42."
            }
          ],
          "t3": [
            {
              "id": "ch1_l5_q3",
              "format": "choose",
              "type": "word_problem",
              "question": "To find the missing number in ___ × 8 = 56, which calculation can you use?",
              "questionAr": "لإيجاد العدد الناقص في ___ × 8 = 56، أي عملية حسابية تستخدم؟",
              "options": [
                "56 ÷ 8 = 7",
                "56 - 8 = 48",
                "56 + 8 = 64",
                "56 × 8"
              ],
              "answer": "56 ÷ 8 = 7",
              "explanation": "Division is inverse of multiplication: 56 ÷ 8 = 7, so 7 × 8 = 56.",
              "hint": "Division undoes multiplication.",
              "hintAr": "القسمة عكس الضرب: 56 ÷ 8 = 7."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "ch2",
    "number": 2,
    "title": "Time and Duration",
    "titleAr": "الوقت والفترة الزمنية",
    "icon": "⏰",
    "color": "#0EA5E9",
    "description": "Finding time before and after, elapsed time bridging across hours, and seconds.",
    "lessons": [
      {
        "id": "ch2_l1",
        "lessonNumber": 1,
        "bookPage": 20,
        "title": "Lesson 1: Finding Time Before and After (Part 1)",
        "titleAr": "الدرس 1: معرفة الوقت قبل وبعد (الجزء 1)",
        "rule": "Count forward on a clock or number line for 'minutes after'. Count backward for 'minutes before'.",
        "conceptSummary": "25 minutes after 8:45 = 9:10. 30 minutes before 6:20 = 5:50.",
        "hintAr": "للعد بعد: نعد للأمام على الساعة. وللعد قبل: نرجع بالدقائق للخلف.",
        "tiers": {
          "t1": [
            {
              "id": "ch2_l1_q1",
              "visual": {
                "type": "clock",
                "hour": 8,
                "minute": 45
              },
              "format": "choose",
              "type": "tier1_concept",
              "question": "What time will it be 25 minutes after 8:45?",
              "questionAr": "كم ستكون الساعة بعد 25 دقيقة من 8:45؟",
              "options": [
                "9:10",
                "9:05",
                "8:70",
                "9:15"
              ],
              "answer": "9:10",
              "explanation": "8:45 + 15 min = 9:00, plus 10 min = 9:10.",
              "hint": "15 min to 9:00, then 10 min more.",
              "hintAr": "15 دقيقة للوصول إلى 9:00 ثم 10 دقائق = 9:10."
            }
          ],
          "t2": [
            {
              "id": "ch2_l1_q2",
              "visual": {
                "type": "clock",
                "hour": 6,
                "minute": 20
              },
              "format": "complete",
              "type": "calc",
              "question": "What time was it 30 minutes before 6:20?",
              "questionAr": "كم كانت الساعة قبل 30 دقيقة من 6:20؟",
              "options": [
                "5:50",
                "5:40",
                "6:50",
                "5:30"
              ],
              "answer": "5:50",
              "explanation": "Go back 20 min to 6:00, then 10 min back into previous hour = 5:50.",
              "hint": "Subtract 20 min to 6:00, then 10 min more.",
              "hintAr": "ارجع 20 دقيقة إلى 6:00 ثم 10 دقائق = 5:50."
            }
          ],
          "t3": [
            {
              "id": "ch2_l1_q3",
              "visual": {
                "type": "clock",
                "hour": 3,
                "minute": 10
              },
              "format": "choose",
              "type": "word_problem",
              "question": "What time will it be 55 minutes after 3:10?",
              "questionAr": "كم ستكون الساعة بعد 55 دقيقة من 3:10؟",
              "options": [
                "4:05",
                "3:65",
                "4:15",
                "4:00"
              ],
              "answer": "4:05",
              "explanation": "3:10 + 50 min = 4:00, plus 5 min = 4:05.",
              "hint": "60 minutes makes 1 hour.",
              "hintAr": "60 دقيقة تكون ساعة كاملة: 3:10 + 50 د = 4:00، ثم 5 د = 4:05."
            }
          ]
        }
      },
      {
        "id": "ch2_l2",
        "lessonNumber": 2,
        "bookPage": 22,
        "title": "Lesson 2: Finding Time Before and After (Part 2)",
        "titleAr": "الدرس 2: حساب الفترة الزمنية المنقضية",
        "rule": "1 hour = 60 minutes. To find elapsed time, split into 'until next hour' and 'after next hour'.",
        "conceptSummary": "2:40 to 3:50 is 20 min to 3:00 + 50 min after = 70 min = 1 hr 10 min.",
        "hintAr": "الساعة = 60 دقيقة. لحساب الفترة: نجمع حتى رأس الساعة التالية + الدقائق بعدها.",
        "tiers": {
          "t1": [
            {
              "id": "ch2_l2_q1",
              "format": "choose",
              "type": "tier1_concept",
              "question": "Convert into minutes: 1 hour 20 minutes = ___ minutes",
              "questionAr": "حول إلى دقائق: ساعة و 20 دقيقة = ___ دقيقة",
              "options": [
                "80 minutes",
                "120 minutes",
                "70 minutes",
                "85 minutes"
              ],
              "answer": "80 minutes",
              "explanation": "60 + 20 = 80 minutes.",
              "hint": "1 hr = 60 min.",
              "hintAr": "60 + 20 = 80 دقيقة."
            }
          ],
          "t2": [
            {
              "id": "ch2_l2_q2",
              "visual": {
                "type": "dual_clock",
                "startHour": 4,
                "startMin": 50,
                "endHour": 5,
                "endMin": 20
              },
              "format": "complete",
              "type": "calc",
              "question": "Find the elapsed time from 4:50 PM to 5:20 PM (in minutes):",
              "questionAr": "احسب الفترة الزمنية من 4:50 مساءً إلى 5:20 مساءً (بالدقائق):",
              "options": [
                "30 minutes",
                "40 minutes",
                "20 minutes",
                "1 hour"
              ],
              "answer": "30 minutes",
              "explanation": "10 min to 5:00 + 20 min after = 30 minutes.",
              "hint": "Split at 5:00.",
              "hintAr": "10 دقائق حتى 5:00 + 20 دقيقة بعد 5:00 = 30 دقيقة."
            }
          ],
          "t3": [
            {
              "id": "ch2_l2_q3",
              "visual": {
                "type": "dual_clock",
                "startHour": 8,
                "startMin": 40,
                "endHour": 9,
                "endMin": 45
              },
              "format": "choose",
              "type": "word_problem",
              "question": "A class started at 8:40 AM and ended at 9:45 AM. How long was it in hours and minutes?",
              "questionAr": "بدأت الحصة 8:40 صباحاً وانتهت 9:45 صباحاً. كم كانت مدتها بالساعات والدقائق؟",
              "options": [
                "1 hour 5 minutes",
                "1 hour 15 minutes",
                "55 minutes",
                "1 hour 25 minutes"
              ],
              "answer": "1 hour 5 minutes",
              "explanation": "20 min to 9:00 + 45 min after = 65 min = 1 hour 5 minutes.",
              "hint": "65 min = 1 hr 5 min.",
              "hintAr": "65 دقيقة = ساعة و 5 دقائق."
            }
          ]
        }
      },
      {
        "id": "ch2_l3",
        "lessonNumber": 3,
        "bookPage": 26,
        "title": "Lesson 3: Shorter Time Units (Seconds)",
        "titleAr": "الدرس 3: وحدات الوقت الأقصر (الثواني)",
        "rule": "1 minute = 60 seconds. A second is used to measure short events with a stopwatch.",
        "conceptSummary": "1 min 5 s = 65 s. 90 seconds = 1 min 30 s.",
        "hintAr": "الدقيقة = 60 ثانية. وتستخدم الثواني لقياس الأوقات القصيرة.",
        "tiers": {
          "t1": [
            {
              "id": "ch2_l3_q1",
              "format": "choose",
              "type": "tier1_concept",
              "question": "How many seconds are in 1 minute and 5 seconds?",
              "questionAr": "كم ثانية في دقيقة و 5 ثوانٍ؟",
              "options": [
                "65 seconds",
                "15 seconds",
                "105 seconds",
                "55 seconds"
              ],
              "answer": "65 seconds",
              "explanation": "60 + 5 = 65 seconds.",
              "hint": "1 min = 60 s.",
              "hintAr": "60 + 5 = 65 ثانية."
            }
          ],
          "t2": [
            {
              "id": "ch2_l3_q2",
              "format": "complete",
              "type": "calc",
              "question": "Convert 90 seconds into minutes and seconds:",
              "questionAr": "حول 90 ثانية إلى دقائق وثوانٍ:",
              "options": [
                "1 minute 30 seconds",
                "1 minute 40 seconds",
                "2 minutes",
                "1 minute 10 seconds"
              ],
              "answer": "1 minute 30 seconds",
              "explanation": "90 = 60 + 30 = 1 min 30 s.",
              "hint": "Take out 60 seconds for 1 min.",
              "hintAr": "60 ثانية تساوي دقيقة، ويتبقى 30 ثانية."
            }
          ],
          "t3": [
            {
              "id": "ch2_l3_q3",
              "format": "choose",
              "type": "word_problem",
              "question": "Mazen ran 100 m in 75 s. Samy ran it in 1 min 20 s. Who was faster and by how much?",
              "questionAr": "جرى مازن 100 م في 75 ثانية، وسامي في دقيقة و 20 ثانية. من كان أسرع وبكم؟",
              "options": [
                "Mazen by 5 seconds (75 s vs 80 s)",
                "Samy by 5 seconds",
                "Mazen by 15 seconds",
                "They tied"
              ],
              "answer": "Mazen by 5 seconds (75 s vs 80 s)",
              "explanation": "Samy = 80 s, Mazen = 75 s. Mazen is faster by 80 - 75 = 5 seconds.",
              "hint": "Convert Samy's time to seconds first.",
              "hintAr": "زمن سامي 80 ثانية، ومازن 75 ثانية (مازن أسرع بفارق 5 ثوانٍ)."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "ch3",
    "number": 3,
    "title": "Division",
    "titleAr": "القسمة",
    "icon": "➗",
    "color": "#10B981",
    "description": "Concept of division, equal sharing vs grouping, word problem scenarios, and multiplicative comparison.",
    "lessons": [
      {
        "id": "ch3_l1",
        "lessonNumber": 1,
        "bookPage": 32,
        "title": "Lesson 1: Introduction to Division",
        "titleAr": "الدرس 1: مفهوم القسمة",
        "rule": "Division means splitting into equal groups: In 12 ÷ 3 = 4, 12 is Dividend, 3 is Divisor, 4 is Quotient.",
        "conceptSummary": "15 ÷ 5 = 3 because 5 × 3 = 15.",
        "hintAr": "القسمة تعني التوزيع بالتساوي: 12 (المقسوم) ÷ 3 (المقسوم عليه) = 4 (خارج القسمة).",
        "tiers": {
          "t1": [
            {
              "id": "ch3_l1_q1",
              "visual": {
                "type": "equal_groups",
                "groups": 5,
                "items": 3,
                "emoji": "🍎"
              },
              "format": "choose",
              "type": "tier1_concept",
              "question": "What is 15 ÷ 5?",
              "questionAr": "ما ناتج 15 ÷ 5؟",
              "options": [
                "3",
                "5",
                "4",
                "2"
              ],
              "answer": "3",
              "explanation": "5 × 3 = 15, so 15 ÷ 5 = 3.",
              "hint": "5 × ? = 15.",
              "hintAr": "5 × 3 = 15."
            }
          ],
          "t2": [
            {
              "id": "ch3_l1_q2",
              "format": "complete",
              "type": "calc",
              "question": "In 18 ÷ 3 = 6, what is the number 3 called?",
              "questionAr": "في 18 ÷ 3 = 6، ماذا يُسمى العدد 3؟",
              "options": [
                "Divisor (المقسوم عليه)",
                "Dividend (المقسوم)",
                "Quotient (خارج القسمة)",
                "Sum (المجموع)"
              ],
              "answer": "Divisor (المقسوم عليه)",
              "explanation": "The number you divide by is the Divisor.",
              "hint": "The number after the division sign.",
              "hintAr": "العدد بعد علامة القسمة هو المقسوم عليه."
            }
          ],
          "t3": [
            {
              "id": "ch3_l1_q3",
              "format": "choose",
              "type": "word_problem",
              "question": "Calculate: 36 ÷ 4 = ___",
              "questionAr": "احسب: 36 ÷ 4 = ___",
              "options": [
                "9",
                "8",
                "7",
                "6"
              ],
              "answer": "9",
              "explanation": "4 × 9 = 36, so 36 ÷ 4 = 9.",
              "hint": "4 × ? = 36.",
              "hintAr": "4 × 9 = 36."
            }
          ]
        }
      },
      {
        "id": "ch3_l2",
        "lessonNumber": 2,
        "bookPage": 34,
        "title": "Lesson 2: Sharing and Division",
        "titleAr": "الدرس 2: التوزيع والمشاركة بالتساوي",
        "rule": "Equal sharing: Number per person = Total ÷ Count of people. Include units with answers!",
        "conceptSummary": "12 strawberries among 3 people = 4 strawberries each. 24 candies at 4 each = 6 people.",
        "hintAr": "التوزيع بالتساوي = العدد الكلي ÷ عدد الأفراد. ودائماً نكتب التمييز (قطعة، طالب...).",
        "tiers": {
          "t1": [
            {
              "id": "ch3_l2_q1",
              "visual": {
                "type": "equal_groups",
                "groups": 3,
                "items": 4,
                "emoji": "🍓"
              },
              "format": "choose",
              "type": "tier1_concept",
              "question": "If you share 12 strawberries equally among 3 people, how many will each get?",
              "questionAr": "إذا وزعت 12 فراولة بالتساوي على 3 أصدقاء، فكم نصيب كل منهم؟",
              "options": [
                "4 strawberries",
                "3 strawberries",
                "5 strawberries",
                "6 strawberries"
              ],
              "answer": "4 strawberries",
              "explanation": "12 ÷ 3 = 4 strawberries each.",
              "hint": "12 ÷ 3 = 4.",
              "hintAr": "12 ÷ 3 = 4 فراولات."
            }
          ],
          "t2": [
            {
              "id": "ch3_l2_q2",
              "visual": {
                "type": "equal_groups",
                "groups": 6,
                "items": 4,
                "emoji": "🍬"
              },
              "format": "complete",
              "type": "calc",
              "question": "There are 24 candies. If each person gets 4 candies, how many people can share?",
              "questionAr": "هناك 24 قطعة حلوى، إذا أخذ كل طفل 4 قطع، فكم طفلاً يشارك؟",
              "options": [
                "6 people",
                "5 people",
                "7 people",
                "8 people"
              ],
              "answer": "6 people",
              "explanation": "24 ÷ 4 = 6 people.",
              "hint": "24 ÷ 4 = 6.",
              "hintAr": "24 ÷ 4 = 6 أطفال."
            }
          ],
          "t3": [
            {
              "id": "ch3_l2_q3",
              "format": "choose",
              "type": "word_problem",
              "question": "If you cut a 45 cm tape into 5 equal pieces, how long is each piece in cm?",
              "questionAr": "إذا قطعت شريطاً طوله 45 سم إلى 5 قطع متساوية، فما طول كل قطعة؟",
              "options": [
                "9 cm",
                "8 cm",
                "7 cm",
                "10 cm"
              ],
              "answer": "9 cm",
              "explanation": "45 ÷ 5 = 9 cm.",
              "hint": "45 ÷ 5 = 9.",
              "hintAr": "45 ÷ 5 = 9 سم."
            }
          ]
        }
      },
      {
        "id": "ch3_l3",
        "lessonNumber": 3,
        "bookPage": 36,
        "title": "Lesson 3: Scenarios for Division",
        "titleAr": "الدرس 3: مواقف وعائلات حقائق القسمة",
        "rule": "Distinguish division from multiplication and addition based on problem context.",
        "conceptSummary": "Sharing 8 candies among 4 is 8 ÷ 4. 8 children on bus + 4 more is 8 + 4.",
        "hintAr": "ميز المواقف الحسابية: التوزيع بالتساوي يعني قسمة، والإضافة تعني جمعاً.",
        "tiers": {
          "t1": [
            {
              "id": "ch3_l3_q1",
              "visual": {
                "type": "equal_groups",
                "groups": 4,
                "items": 2,
                "emoji": "🍪"
              },
              "format": "choose",
              "type": "tier1_concept",
              "question": "Which problem uses the mathematical sentence 8 ÷ 4?",
              "questionAr": "أي مسألة يعبر عنها بجملة القسمة 8 ÷ 4؟",
              "options": [
                "Divide 8 cookies equally among 4 people",
                "8 people on the bus and 4 got on",
                "Buy 4 bouquets with 8 flowers each",
                "8 cookies and someone ate 4"
              ],
              "answer": "Divide 8 cookies equally among 4 people",
              "explanation": "Equal sharing of 8 into 4 parts is 8 ÷ 4.",
              "hint": "Look for equal sharing.",
              "hintAr": "ابحث عن التوزيع بالتساوي."
            }
          ],
          "t2": [
            {
              "id": "ch3_l3_q2",
              "format": "complete",
              "type": "calc",
              "question": "Which scenario matches 9 ÷ 3?",
              "questionAr": "أي موقف يناسب العملية 9 ÷ 3؟",
              "options": [
                "Distribute 9 water bottles giving 3 bottles per person",
                "9 children playing and 3 more came",
                "3 boxes with 9 puddings each",
                "9 students and 3 went home"
              ],
              "answer": "Distribute 9 water bottles giving 3 bottles per person",
              "explanation": "Dividing 9 by 3 per person is 9 ÷ 3.",
              "hint": "Equal groups of 3.",
              "hintAr": "توزيع 9 زجاجات بإعطاء 3 لكل فرد."
            }
          ],
          "t3": [
            {
              "id": "ch3_l3_q3",
              "visual": {
                "type": "fact_family_triangle",
                "top": 24,
                "left": 6,
                "right": 4
              },
              "format": "choose",
              "type": "word_problem",
              "question": "Which equation DOES NOT belong to the fact family {4, 6, 24}?",
              "questionAr": "أي معادلة لا تنتمي لعائلة الحقائق {4، 6، 24}؟",
              "options": [
                "24 - 4 = 20",
                "24 ÷ 4 = 6",
                "6 × 4 = 24",
                "24 ÷ 6 = 4"
              ],
              "answer": "24 - 4 = 20",
              "explanation": "Fact family uses multiplication and division operations.",
              "hint": "Fact families connect × and ÷.",
              "hintAr": "عائلات الحقائق تربط بين الضرب والقسمة فقط."
            }
          ]
        }
      },
      {
        "id": "ch3_l4",
        "lessonNumber": 4,
        "bookPage": 40,
        "title": "Lesson 4: Division to Compare",
        "titleAr": "الدرس 4: القسمة للمقارنة (كم مثلاً)",
        "rule": "Times as many = Larger Amount ÷ Base Amount.",
        "conceptSummary": "27 blocks vs 9 blocks: 27 ÷ 9 = 3 times as many.",
        "hintAr": "لمعرفة كم ضعفاً أو كم مرة، نقسم العدد الكبير على العدد الصغير: 27 ÷ 9 = 3 مرات.",
        "tiers": {
          "t1": [
            {
              "id": "ch3_l4_q1",
              "format": "choose",
              "type": "tier1_concept",
              "question": "Hassan has 9 blocks. Maryam has 27 blocks. How many times as many blocks does Maryam have?",
              "questionAr": "مع حسن 9 مكعبات ومع مريم 27 مكعباً. كم ضعفاً لمكعبات حسن تملك مريم؟",
              "options": [
                "3 times (27 ÷ 9 = 3)",
                "18 times",
                "4 times",
                "2 times"
              ],
              "answer": "3 times (27 ÷ 9 = 3)",
              "explanation": "27 ÷ 9 = 3 times.",
              "hint": "Divide 27 by 9.",
              "hintAr": "27 ÷ 9 = 3 مرات."
            }
          ],
          "t2": [
            {
              "id": "ch3_l4_q2",
              "format": "complete",
              "type": "calc",
              "question": "A red ribbon is 6 m and a white ribbon is 42 m. How many times as long is the white ribbon?",
              "questionAr": "شريط أحمر 6 م وشريط أبيض 42 م. كم مرة يساوي طول الشريط الأبيض الشريط الأحمر؟",
              "options": [
                "7 times (42 ÷ 6 = 7)",
                "6 times",
                "8 times",
                "36 times"
              ],
              "answer": "7 times (42 ÷ 6 = 7)",
              "explanation": "42 ÷ 6 = 7 times as long.",
              "hint": "Divide 42 by 6.",
              "hintAr": "42 ÷ 6 = 7 مرات."
            }
          ],
          "t3": [
            {
              "id": "ch3_l4_q3",
              "format": "choose",
              "type": "word_problem",
              "question": "Sara has 30 sheets, her brother has 5. Adam says 'Sara has 25 times as many.' What was Adam's error?",
              "questionAr": "مع سارة 30 ورقة ومع أخيها 5. قال آدم: 'مع سارة 25 ضعفاً.' ما خطأه؟",
              "options": [
                "He subtracted (30 - 5 = 25) instead of dividing (30 ÷ 5 = 6)",
                "He should have multiplied 30 × 5",
                "Calculation mistake",
                "No mistake"
              ],
              "answer": "He subtracted (30 - 5 = 25) instead of dividing (30 ÷ 5 = 6)",
              "explanation": "'How many times as many' requires division, not subtraction.",
              "hint": "'Times as many' means divide.",
              "hintAr": "كان ينبغي القسمة بدلاً من الطرح (30 ÷ 5 = 6 أضعاف)."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "ch4",
    "number": 4,
    "title": "Addition and Subtraction",
    "titleAr": "الجمع والطرح",
    "icon": "➕",
    "color": "#F59E0B",
    "description": "Vertical addition and subtraction of 3- and 4-digit numbers, regrouping, borrowing across zeros, and word problems.",
    "lessons": [
      {
        "id": "ch4_l1",
        "lessonNumber": 1,
        "bookPage": 44,
        "title": "Lesson 1: Adding 3- and 4-Digit Numbers",
        "titleAr": "الدرس 1: جمع أعداد من 3 و 4 أرقام",
        "rule": "Vertical Addition: Align digits by place value. Add from ones column. If sum is 10 or more, carry over 1 to next place.",
        "conceptSummary": "132 + 416 = 548. 294 + 545 = 839 (carrying 1 to hundreds).",
        "hintAr": "رتب الخانات رأسياً واجمع بدءاً من خانة الآحاد، ونحمل 1 إذا زاد المجموع عن 9.",
        "tiers": {
          "t1": [
            {
              "id": "ch4_l1_q1",
              "visual": {
                "type": "pattern",
                "items": [
                  "  1 3 2",
                  "+ 4 1 6",
                  "-------",
                  "  [ ? ]"
                ]
              },
              "format": "choose",
              "type": "tier1_concept",
              "question": "Calculate: 132 + 416 = ___",
              "questionAr": "احسب: 132 + 416 = ___",
              "options": [
                "548",
                "538",
                "558",
                "648"
              ],
              "answer": "548",
              "explanation": "2+6=8, 3+1=4, 1+4=5 -> 548.",
              "hint": "Add column by column.",
              "hintAr": "2+6=8، 3+1=4، 1+4=5."
            }
          ],
          "t2": [
            {
              "id": "ch4_l1_q2",
              "visual": {
                "type": "pattern",
                "items": [
                  "    1",
                  "  2 9 4",
                  "+ 5 4 5",
                  "-------",
                  "  [ ? ]"
                ]
              },
              "format": "complete",
              "type": "calc",
              "question": "Calculate: 294 + 545 = ___",
              "questionAr": "احسب: 294 + 545 = ___",
              "options": [
                "839",
                "849",
                "739",
                "838"
              ],
              "answer": "839",
              "explanation": "4+5=9, 9+4=13 (carry 1), 1+2+5=8 -> 839.",
              "hint": "Carry 1 to hundreds.",
              "hintAr": "9+4=13 (نكتب 3 ونحمل 1 فوق المئات: 1+2+5=8)."
            }
          ],
          "t3": [
            {
              "id": "ch4_l1_q3",
              "visual": {
                "type": "pattern",
                "items": [
                  "  6,1 4 9",
                  "+ 2,8 5 4",
                  "---------",
                  "  [  ?  ]"
                ]
              },
              "format": "choose",
              "type": "word_problem",
              "question": "Calculate: 6,149 + 2,854 = ___",
              "questionAr": "احسب: 6,149 + 2,854 = ___",
              "options": [
                "9,003",
                "8,993",
                "9,013",
                "8,903"
              ],
              "answer": "9,003",
              "explanation": "9+4=13, 1+4+5=10, 1+1+8=10, 1+6+2=9 -> 9,003.",
              "hint": "Carry over across each place.",
              "hintAr": "إعادة التجميع للآحاد والعشرات: 9,003."
            }
          ]
        }
      },
      {
        "id": "ch4_l2",
        "lessonNumber": 2,
        "bookPage": 46,
        "title": "Lesson 2: Subtracting 3- and 4-Digit Numbers (Part 1)",
        "titleAr": "الدرس 2: طرح أعداد من 3 و 4 أرقام (الجزء 1)",
        "rule": "Vertical Subtraction: Align place values. Borrow 1 from next column when top digit is smaller than bottom digit.",
        "conceptSummary": "874 - 531 = 343. 654 - 125 = 529 (borrow 1 from tens).",
        "hintAr": "الطرح الرأسي: نستلف 1 من الخانة المجاورة إذا كان الرقم بالأعلى أصغر.",
        "tiers": {
          "t1": [
            {
              "id": "ch4_l2_q1",
              "visual": {
                "type": "pattern",
                "items": [
                  "  8 7 4",
                  "- 5 3 1",
                  "-------",
                  "  [ ? ]"
                ]
              },
              "format": "choose",
              "type": "tier1_concept",
              "question": "Calculate: 874 - 531 = ___",
              "questionAr": "احسب: 874 - 531 = ___",
              "options": [
                "343",
                "341",
                "353",
                "243"
              ],
              "answer": "343",
              "explanation": "4-1=3, 7-3=4, 8-5=3 -> 343.",
              "hint": "Subtract ones, tens, hundreds.",
              "hintAr": "4-1=3، 7-3=4، 8-5=3."
            }
          ],
          "t2": [
            {
              "id": "ch4_l2_q2",
              "visual": {
                "type": "pattern",
                "items": [
                  "  6 5 4",
                  "- 1 2 5",
                  "-------",
                  "  [ ? ]"
                ]
              },
              "format": "complete",
              "type": "calc",
              "question": "Calculate: 654 - 125 = ___",
              "questionAr": "احسب: 654 - 125 = ___",
              "options": [
                "529",
                "539",
                "519",
                "528"
              ],
              "answer": "529",
              "explanation": "14 - 5 = 9, 4 - 2 = 2, 6 - 1 = 5 -> 529.",
              "hint": "Borrow 1 to make 14.",
              "hintAr": "14 - 5 = 9، ثم 4 - 2 = 2، ثم 6 - 1 = 5 -> 529."
            }
          ],
          "t3": [
            {
              "id": "ch4_l2_q3",
              "visual": {
                "type": "pattern",
                "items": [
                  "  9 3 7",
                  "- 7 8 4",
                  "-------",
                  "  [ ? ]"
                ]
              },
              "format": "choose",
              "type": "word_problem",
              "question": "Calculate: 937 - 784 = ___",
              "questionAr": "احسب: 937 - 784 = ___",
              "options": [
                "153",
                "253",
                "143",
                "163"
              ],
              "answer": "153",
              "explanation": "7-4=3, 13-8=5, 8-7=1 -> 153.",
              "hint": "13 tens - 8 tens = 5 tens.",
              "hintAr": "13 - 8 = 5، و 8 - 7 = 1 -> 153."
            }
          ]
        }
      },
      {
        "id": "ch4_l3",
        "lessonNumber": 3,
        "bookPage": 48,
        "title": "Lesson 3: Subtracting 3- and 4-Digit Numbers (Part 2)",
        "titleAr": "الدرس 3: الطرح عبر الأصفار",
        "rule": "Borrowing across zeros: borrow from the first non-zero place value to the left. The zero becomes 9.",
        "conceptSummary": "503 - 185 = 318. 1,000 - 217 = 783.",
        "hintAr": "الاستلاف عبر الأصفار: نستلف من أول خانة غير صفرية، والصفر يتحول إلى 9 والآحاد إلى 10 أو أكثر.",
        "tiers": {
          "t1": [
            {
              "id": "ch4_l3_q1",
              "visual": {
                "type": "pattern",
                "items": [
                  "  5 0 3",
                  "- 1 8 5",
                  "-------",
                  "  [ ? ]"
                ]
              },
              "format": "choose",
              "type": "tier1_concept",
              "question": "Calculate: 503 - 185 = ___",
              "questionAr": "احسب: 503 - 185 = ___",
              "options": [
                "318",
                "418",
                "328",
                "312"
              ],
              "answer": "318",
              "explanation": "13-5=8, 9-8=1, 4-1=3 -> 318.",
              "hint": "The zero in tens becomes 9.",
              "hintAr": "الصفر في العشرات يصبح 9: 13-5=8، 9-8=1، 4-1=3."
            }
          ],
          "t2": [
            {
              "id": "ch4_l3_q2",
              "visual": {
                "type": "pattern",
                "items": [
                  "  1 0 0 0",
                  "-   2 1 7",
                  "---------",
                  "  [  ?  ]"
                ]
              },
              "format": "complete",
              "type": "calc",
              "question": "Calculate: 1,000 - 217 = ___",
              "questionAr": "احسب: 1,000 - 217 = ___",
              "options": [
                "783",
                "793",
                "883",
                "787"
              ],
              "answer": "783",
              "explanation": "10-7=3, 9-1=8, 9-2=7 -> 783.",
              "hint": "1,000 = 9 hundreds + 9 tens + 10 ones.",
              "hintAr": "10-7=3، 9-1=8، 9-2=7 -> 783."
            }
          ],
          "t3": [
            {
              "id": "ch4_l3_q3",
              "visual": {
                "type": "pattern",
                "items": [
                  "  1,0 0 5",
                  "-   3 9 4",
                  "---------",
                  "  [  ?  ]"
                ]
              },
              "format": "choose",
              "type": "word_problem",
              "question": "Calculate: 1,005 - 394 = ___",
              "questionAr": "احسب: 1,005 - 394 = ___",
              "options": [
                "611",
                "711",
                "601",
                "701"
              ],
              "answer": "611",
              "explanation": "5-4=1, 10-9=1, 9-3=6 -> 611.",
              "hint": "Check: 611 + 394 = 1,005.",
              "hintAr": "611 + 394 = 1,005."
            }
          ]
        }
      },
      {
        "id": "ch4_l4",
        "lessonNumber": 4,
        "bookPage": 50,
        "title": "Lesson 4: Word Problems for Addition & Subtraction",
        "titleAr": "الدرس 4: مسائل كلامية على الجمع والطرح",
        "rule": "Total / increase = Addition. How many more / difference / change = Subtraction. Always state units!",
        "conceptSummary": "Total cost: 246 + 485 = 731 EGP. Difference: 825 - 415 = 410 EGP.",
        "hintAr": "المجموع والإجمالي يعني جمعاً، وفارق الزيادة والباقي يعني طرحاً. ولا تنس كتابة التمييز (جنيهاً، متراً...).",
        "tiers": {
          "t1": [
            {
              "id": "ch4_l4_q1",
              "format": "choose",
              "type": "tier1_concept",
              "question": "You buy shoes for 246 EGP and a bag for 485 EGP. What is the total cost?",
              "questionAr": "اشتريت حذاءً بـ 246 جنيهاً وحقيبة بـ 485 جنيهاً. ما التكلفة الكلية؟",
              "options": [
                "731 EGP",
                "721 EGP",
                "741 EGP",
                "631 EGP"
              ],
              "answer": "731 EGP",
              "explanation": "246 + 485 = 731 EGP.",
              "hint": "Total means add.",
              "hintAr": "246 + 485 = 731 جنيهاً."
            }
          ],
          "t2": [
            {
              "id": "ch4_l4_q2",
              "format": "complete",
              "type": "calc",
              "question": "A stationery set costs 415 EGP and a soccer ball costs 825 EGP. How much more expensive is the soccer ball?",
              "questionAr": "طقم أدوات بـ 415 جنيهاً وكرة قدم بـ 825 جنيهاً. كم يزيد ثمن الكرة عن طقم الأدوات؟",
              "options": [
                "410 EGP (825 - 415)",
                "400 EGP",
                "420 EGP",
                "1,240 EGP"
              ],
              "answer": "410 EGP (825 - 415)",
              "explanation": "825 - 415 = 410 EGP.",
              "hint": "Subtract 415 from 825.",
              "hintAr": "825 - 415 = 410 جنيهاً."
            }
          ],
          "t3": [
            {
              "id": "ch4_l4_q3",
              "format": "choose",
              "type": "word_problem",
              "question": "You bought a meal for 124 EGP and paid with a 200 EGP note. How much change do you receive?",
              "questionAr": "اشتريت وجبة بـ 124 جنيهاً ودفعت ورقة 200 جنيه. كم الباقي لك؟",
              "options": [
                "76 EGP",
                "86 EGP",
                "66 EGP",
                "74 EGP"
              ],
              "answer": "76 EGP",
              "explanation": "200 - 124 = 76 EGP.",
              "hint": "200 - 124 = 76.",
              "hintAr": "200 - 124 = 76 جنيهاً."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "ch5",
    "number": 5,
    "title": "Length",
    "titleAr": "الأطوال والمسافات",
    "icon": "📏",
    "color": "#8B5CF6",
    "description": "Longer units of length (Kilometer & Meter), converting units, and comparing Route vs Distance.",
    "lessons": [
      {
        "id": "ch5_l1",
        "lessonNumber": 1,
        "bookPage": 54,
        "title": "Lesson 1: Longer Units of Length",
        "titleAr": "الدرس 1: وحدات الطول الأطول (الكيلومتر)",
        "rule": "1 Kilometer (km) = 1,000 meters (m). Measuring tape measures long lengths.",
        "conceptSummary": "2 km = 2,000 m. 1 km 370 m = 1,370 m. 1,080 m = 1 km 80 m.",
        "hintAr": "1 كم = 1,000 متر (2 كم = 2,000 م، و 1 كم و 370 م = 1,370 م).",
        "tiers": {
          "t1": [
            {
              "id": "ch5_l1_q1",
              "visual": {
                "type": "pattern",
                "items": [
                  "1 km = 1,000 m",
                  "2 km = ?",
                  "3 km = 3,000 m"
                ]
              },
              "format": "choose",
              "type": "tier1_concept",
              "question": "How many meters are in 2 kilometers? (2 km = ___ m)",
              "questionAr": "كم متراً في 2 كيلومتر؟ (2 كم = ___ م)",
              "options": [
                "2,000 m",
                "200 m",
                "20 m",
                "20,000 m"
              ],
              "answer": "2,000 m",
              "explanation": "2 × 1,000 = 2,000 m.",
              "hint": "1 km = 1,000 m.",
              "hintAr": "2 × 1,000 = 2,000 متر."
            }
          ],
          "t2": [
            {
              "id": "ch5_l1_q2",
              "visual": {
                "type": "pattern",
                "items": [
                  "1 km 370 m",
                  "➔",
                  "1,000 m + 370 m",
                  "=",
                  "?"
                ]
              },
              "format": "complete",
              "type": "calc",
              "question": "Convert into meters: 1 km 370 m = ___ m",
              "questionAr": "حول إلى أمتار: 1 كم و 370 م = ___ م",
              "options": [
                "1,370 m",
                "1,037 m",
                "371 m",
                "1,307 m"
              ],
              "answer": "1,370 m",
              "explanation": "1,000 + 370 = 1,370 m.",
              "hint": "1 km = 1,000 m.",
              "hintAr": "1,000 + 370 = 1,370 متراً."
            }
          ],
          "t3": [
            {
              "id": "ch5_l1_q3",
              "format": "choose",
              "type": "word_problem",
              "question": "Write 1,080 m in kilometers and meters:",
              "questionAr": "اكتب 1,080 م بالكيلومتر والمتر:",
              "options": [
                "1 km 80 m",
                "1 km 800 m",
                "10 km 80 m",
                "1 km 8 m"
              ],
              "answer": "1 km 80 m",
              "explanation": "1,080 m = 1 km and 80 m (hundreds digit is 0).",
              "hint": "Hundreds digit is 0, so 80 m.",
              "hintAr": "1 كم و 80 متراً."
            }
          ]
        }
      },
      {
        "id": "ch5_l2",
        "lessonNumber": 2,
        "bookPage": 56,
        "title": "Lesson 2: Distance and Route",
        "titleAr": "الدرس 2: المسافة والطريق",
        "rule": "Route is the walking path length. Distance is the straight-line length. Units: mm < cm < m < km.",
        "conceptSummary": "Route along winding streets is longer than straight-line distance.",
        "hintAr": "الطريق هو طول المسار الفعلي، والمسافة هي الخط المستقيم. والترتيب: ملم < سم < م < كم.",
        "tiers": {
          "t1": [
            {
              "id": "ch5_l2_q1",
              "visual": {
                "type": "pattern",
                "items": [
                  "mm",
                  "<",
                  "cm",
                  "<",
                  "m",
                  "<",
                  "km"
                ]
              },
              "format": "choose",
              "type": "tier1_concept",
              "question": "Which is the correct order of length units from smallest to largest?",
              "questionAr": "ما الترتيب الصحيح لوحدات الطول من الأصغر إلى الأكبر؟",
              "options": [
                "mm, cm, m, km",
                "cm, mm, m, km",
                "km, m, cm, mm",
                "m, cm, mm, km"
              ],
              "answer": "mm, cm, m, km",
              "explanation": "mm < cm < m < km.",
              "hint": "Millimeters are smallest.",
              "hintAr": "المليمتر هو الأصغر والكيلومتر هو الأكبر."
            }
          ],
          "t2": [
            {
              "id": "ch5_l2_q2",
              "format": "complete",
              "type": "calc",
              "question": "Route is 1 km 400 m and straight-line distance is 900 m. What is the difference in meters?",
              "questionAr": "طول الطريق 1 كم و 400 م والمسافة المستقيمة 900 م. ما الفرق بينهما بالأمتار؟",
              "options": [
                "500 m (1,400 - 900)",
                "400 m",
                "600 m",
                "2,300 m"
              ],
              "answer": "500 m (1,400 - 900)",
              "explanation": "1,400 - 900 = 500 m.",
              "hint": "1 km 400 m = 1,400 m.",
              "hintAr": "1,400 - 900 = 500 متر."
            }
          ],
          "t3": [
            {
              "id": "ch5_l2_q3",
              "format": "choose",
              "type": "word_problem",
              "question": "Which unit is best to measure the route walked on a one-hour field trip?",
              "questionAr": "ما الوحدة الأنسب لقياس طول مسار رحلة مشياً لمدة ساعة؟",
              "options": [
                "Kilometers (km)",
                "Millimeters (mm)",
                "Centimeters (cm)",
                "Grams (g)"
              ],
              "answer": "Kilometers (km)",
              "explanation": "Long outdoor walking distances are measured in kilometers (km).",
              "hint": "Outdoor travel distances.",
              "hintAr": "المسافات الطويلة تقاس بالكيلومتر."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "ch6",
    "number": 6,
    "title": "Organizing Data",
    "titleAr": "تنظيم البيانات والرسوم البيانية",
    "icon": "📊",
    "color": "#EC4899",
    "description": "Tally marks and frequency tables, reading and drawing bar graphs, and two-way tables.",
    "lessons": [
      {
        "id": "ch6_l1",
        "lessonNumber": 1,
        "bookPage": 62,
        "title": "Lesson 1: Using Tally Marks and Tables",
        "titleAr": "الدرس 1: استخدام العلامات التكرارية والجداول",
        "rule": "Tally marks group data in bunches of 5 (卌 = 5) for quick and easy counting.",
        "conceptSummary": "卌 ||| = 5 + 3 = 8. 卌 卌 = 10.",
        "hintAr": "العلامات التكرارية تجمع في حزم خماسية (卌 = 5) لتسهيل العد السريع.",
        "tiers": {
          "t1": [
            {
              "id": "ch6_l1_q1",
              "visual": {
                "type": "pattern",
                "items": [
                  "卌 (5)",
                  "+",
                  "卌 (5)",
                  "+",
                  "||| (3)",
                  "=",
                  "?"
                ]
              },
              "format": "choose",
              "type": "tier1_concept",
              "question": "What number is represented by these tally marks: 卌 卌 ||| ?",
              "questionAr": "ما العدد الذي تمثله هذه العلامات التكرارية: 卌 卌 ||| ؟",
              "options": [
                "13",
                "12",
                "15",
                "8"
              ],
              "answer": "13",
              "explanation": "5 + 5 + 3 = 13.",
              "hint": "Each bundle with a slash is 5.",
              "hintAr": "5 + 5 + 3 = 13."
            }
          ],
          "t2": [
            {
              "id": "ch6_l1_q2",
              "format": "complete",
              "type": "calc",
              "question": "Bananas had 卌 卌 (10) and Oranges had 卌 | (6). How many MORE chose Bananas?",
              "questionAr": "الموز 卌 卌 (10) والبرتقال 卌 | (6). كم يزيد عدد من اختاروا الموز؟",
              "options": [
                "4 students (10 - 6)",
                "5 students",
                "3 students",
                "16 students"
              ],
              "answer": "4 students (10 - 6)",
              "explanation": "10 - 6 = 4 students.",
              "hint": "Subtract 6 from 10.",
              "hintAr": "10 - 6 = 4 طلاب."
            }
          ],
          "t3": [
            {
              "id": "ch6_l1_q3",
              "format": "choose",
              "type": "word_problem",
              "question": "A survey counted 14 cars, 6 buses, and 8 bicycles (Total = 28). How many full bundles of 5 can you make?",
              "questionAr": "حصر مروري: 14 سيارة، 6 حافلات، 8 دراجات (المجموع 28). كم حزمة خماسية كاملة (卌) يمكن تكوينها؟",
              "options": [
                "5 full bundles (with 3 remaining)",
                "4 bundles",
                "6 bundles",
                "28 bundles"
              ],
              "answer": "5 full bundles (with 3 remaining)",
              "explanation": "28 ÷ 5 = 5 bundles (25) with 3 remainder.",
              "hint": "Divide 28 by 5.",
              "hintAr": "28 ÷ 5 = 5 حزم كاملة ويتبقى 3."
            }
          ]
        }
      },
      {
        "id": "ch6_l2",
        "lessonNumber": 2,
        "bookPage": 64,
        "title": "Lesson 2: Reading Bar Graphs",
        "titleAr": "الدرس 2: قراءة الرسوم البيانية بالأعمدة",
        "rule": "Read the bar heights using the scale on the vertical axis (e.g. scale of 2, 5, or 10).",
        "conceptSummary": "Compare bars to find which category is greatest, least, or differences.",
        "hintAr": "اقرأ طول العمود بمحاذاته مع مقياس الرسم على المحور الرأسي.",
        "tiers": {
          "t1": [
            {
              "id": "ch6_l2_q1",
              "visual": {
                "type": "bar_graph",
                "title": "Colors",
                "scale": 2,
                "maxVal": 12,
                "data": [
                  {
                    "label": "Red",
                    "val": 8
                  },
                  {
                    "label": "Blue",
                    "val": 10
                  },
                  {
                    "label": "Green",
                    "val": 6
                  }
                ],
                "showValues": false
              },
              "format": "choose",
              "type": "tier1_concept",
              "question": "In this bar graph with scale of 2, what is the value of 'Blue'?",
              "questionAr": "في هذا الرسم البياني بمقياس 2، ما قيمة عمود اللون الأزرق؟",
              "options": [
                "10",
                "8",
                "12",
                "5"
              ],
              "answer": "10",
              "explanation": "The Blue bar reaches the 10 line on the vertical axis.",
              "hint": "Trace top of bar to vertical axis.",
              "hintAr": "حاذِ قمة العمود الأزرق مع خط 10."
            }
          ],
          "t2": [
            {
              "id": "ch6_l2_q2",
              "visual": {
                "type": "bar_graph",
                "title": "Books Borrowed",
                "scale": 5,
                "maxVal": 30,
                "data": [
                  {
                    "label": "Grade 1",
                    "val": 15
                  },
                  {
                    "label": "Grade 3",
                    "val": 25
                  }
                ],
                "showValues": true
              },
              "format": "complete",
              "type": "calc",
              "question": "Grade 3 borrowed 25 books and Grade 1 borrowed 15 books. How many more books did Grade 3 borrow?",
              "questionAr": "استعار الصف الثالث 25 كتاباً، والصف الأول 15 كتاباً. كم يزيد ما استعاره الصف الثالث؟",
              "options": [
                "10 books (25 - 15 = 10)",
                "15 books",
                "5 books",
                "40 books"
              ],
              "answer": "10 books (25 - 15 = 10)",
              "explanation": "25 - 15 = 10 books.",
              "hint": "Subtract 15 from 25.",
              "hintAr": "25 - 15 = 10 كتب."
            }
          ],
          "t3": [
            {
              "id": "ch6_l2_q3",
              "visual": {
                "type": "bar_graph",
                "title": "Activities",
                "scale": 2,
                "maxVal": 10,
                "data": [
                  {
                    "label": "Art",
                    "val": 7
                  }
                ],
                "showValues": false
              },
              "format": "choose",
              "type": "word_problem",
              "question": "On a scale of 2, the 'Art' bar stops halfway between 6 and 8. What is its value?",
              "questionAr": "في مقياس عد بـ 2، ينتهي عمود 'الرسم' في المنتصف بين 6 و 8. ما قيمته؟",
              "options": [
                "7",
                "6.5",
                "8",
                "9"
              ],
              "answer": "7",
              "explanation": "Halfway between 6 and 8 on scale of 2 is 7.",
              "hint": "Number between 6 and 8.",
              "hintAr": "العدد بين 6 و 8 هو 7."
            }
          ]
        }
      },
      {
        "id": "ch6_l3",
        "lessonNumber": 3,
        "bookPage": 66,
        "title": "Lesson 3: Drawing Bar Graphs",
        "titleAr": "الدرس 3: رسم الأعمدة البيانية",
        "rule": "Steps to draw a bar graph: title, axis labels, choose scale starting at 0, draw bars.",
        "conceptSummary": "The lowest mark on the scale must always be 0 with equal intervals.",
        "hintAr": "خطوات الرسم: العنوان، أسماء المحاور، اختيار مقياس يبدأ من 0 وبمسافات متساوية.",
        "tiers": {
          "t1": [
            {
              "id": "ch6_l3_q1",
              "format": "choose",
              "type": "tier1_concept",
              "question": "What number MUST the vertical scale of a bar graph start with at the bottom?",
              "questionAr": "ما العدد الذي يجب أن يبدأ به المقياس الرأسي في الأسفل؟",
              "options": [
                "0",
                "1",
                "The smallest data number",
                "Any number"
              ],
              "answer": "0",
              "explanation": "The lowest scale mark must always be 0.",
              "hint": "Starts at zero.",
              "hintAr": "يبدأ التدريج من الصفر (0)."
            }
          ],
          "t2": [
            {
              "id": "ch6_l3_q2",
              "visual": {
                "type": "bar_graph",
                "title": "Desserts",
                "scale": 2,
                "maxVal": 12,
                "data": [
                  {
                    "label": "Cookie",
                    "val": 10
                  }
                ],
                "showValues": false
              },
              "format": "complete",
              "type": "calc",
              "question": "If the highest data value is 10, which scale is most appropriate for a 10-line grid?",
              "questionAr": "إذا كانت أعلى قيمة 10، فما المقياس الأنسب لشبكة من 10 خطوط؟",
              "options": [
                "Scale of 1 (or scale of 2)",
                "Scale of 100",
                "Scale of 50",
                "Scale of 20"
              ],
              "answer": "Scale of 1 (or scale of 2)",
              "explanation": "Scale of 1 or 2 fits 10 easily and clearly.",
              "hint": "Fits 10 comfortably.",
              "hintAr": "مقياس 1 أو 2 يناسب تمثيل العدد 10 بوضوح."
            }
          ],
          "t3": [
            {
              "id": "ch6_l3_q3",
              "format": "choose",
              "type": "word_problem",
              "question": "Smarty wrote the scale: 0, 2, 5, 8, 10. Why is this incorrect?",
              "questionAr": "كتب سمارتي المقياس: 0، 2، 5، 8، 10. لماذا هذا خطأ؟",
              "options": [
                "The intervals between marks are not equal",
                "It starts at 0",
                "Numbers are too small",
                "No error"
              ],
              "answer": "The intervals between marks are not equal",
              "explanation": "A scale must increase by constant steps (e.g. 2, 4, 6, 8...).",
              "hint": "Check difference between numbers: 2-0=2, but 5-2=3!",
              "hintAr": "المسافات والخطوات غير متساوية، والمقياس يجب أن يزيد بمقدار ثابت."
            }
          ]
        }
      },
      {
        "id": "ch6_l4",
        "lessonNumber": 4,
        "bookPage": 70,
        "title": "Lesson 4: Organized Tables (for two facts)",
        "titleAr": "الدرس 4: الجداول المزدوجة",
        "rule": "Two-way tables categorize data by two facts. Sum rows horizontally and columns vertically.",
        "conceptSummary": "Total across = category total; total down = class total.",
        "hintAr": "الجداول المزدوجة تصنف البيانات من خلال حقيقتين وتجمع أفقياً ورأسياً.",
        "tiers": {
          "t1": [
            {
              "id": "ch6_l4_q1",
              "format": "choose",
              "type": "tier1_concept",
              "question": "In a table: Class 1 has 12 football players and Class 2 has 15. What is the total?",
              "questionAr": "في جدول: فصل 1 به 12 وفصل 2 به 15 لاعب كرة قدم. ما المجموع؟",
              "options": [
                "27 players (12 + 15)",
                "25 players",
                "28 players",
                "3 players"
              ],
              "answer": "27 players (12 + 15)",
              "explanation": "12 + 15 = 27 players.",
              "hint": "Add across the row.",
              "hintAr": "12 + 15 = 27 لاعباً."
            }
          ],
          "t2": [
            {
              "id": "ch6_l4_q2",
              "format": "complete",
              "type": "calc",
              "question": "Injured students: Grade 1 = 18, Grade 2 = 22, Grade 3 = 20. What is the grand total?",
              "questionAr": "التلاميذ المصابون: صف أول = 18، صف ثاني = 22، صف ثالث = 20. ما المجموع الكلي؟",
              "options": [
                "60 students",
                "50 students",
                "62 students",
                "58 students"
              ],
              "answer": "60 students",
              "explanation": "18 + 22 + 20 = 60 students.",
              "hint": "18 + 22 = 40, + 20 = 60.",
              "hintAr": "18 + 22 + 20 = 60 تلميذاً."
            }
          ],
          "t3": [
            {
              "id": "ch6_l4_q3",
              "format": "choose",
              "type": "word_problem",
              "question": "Total of Class 1 and Class 2 is 50 students. If Class 1 has 28 students, how many are in Class 2?",
              "questionAr": "مجموع طلاب فصل 1 وفصل 2 هو 50. إذا كان فصل 1 به 28، فكم طالباً في فصل 2؟",
              "options": [
                "22 students (50 - 28)",
                "28 students",
                "32 students",
                "24 students"
              ],
              "answer": "22 students (50 - 28)",
              "explanation": "50 - 28 = 22 students.",
              "hint": "Subtract 28 from 50.",
              "hintAr": "50 - 28 = 22 طالباً."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "ch7",
    "number": 7,
    "title": "Mental Math",
    "titleAr": "الحساب الذهني",
    "icon": "🧠",
    "color": "#14B8A6",
    "description": "Mental addition and subtraction strategies by starting from the highest place value.",
    "lessons": [
      {
        "id": "ch7_l1",
        "lessonNumber": 1,
        "bookPage": 76,
        "title": "Lesson 1: Mental Math for Addition",
        "titleAr": "الدرس 1: الحساب الذهني للجمع",
        "rule": "For mental addition, add the highest place value first: 33 + 46 -> 33 + 40 = 73, then 73 + 6 = 79.",
        "conceptSummary": "Add tens first, then add ones in your head.",
        "hintAr": "في الجمع الذهني: نجمع العشرات أولاً ثم الآحاد.",
        "tiers": {
          "t1": [
            {
              "id": "ch7_l1_q1",
              "format": "choose",
              "type": "tier1_concept",
              "question": "Calculate using mental math: 13 + 20 = ___",
              "questionAr": "احسب ذهنياً: 13 + 20 = ___",
              "options": [
                "33",
                "23",
                "30",
                "35"
              ],
              "answer": "33",
              "explanation": "13 + 20 = 33.",
              "hint": "1 ten + 2 tens = 3 tens.",
              "hintAr": "13 + 20 = 33."
            }
          ],
          "t2": [
            {
              "id": "ch7_l1_q2",
              "format": "complete",
              "type": "calc",
              "question": "Calculate mentally: 34 + 32 = ___",
              "questionAr": "احسب ذهنياً: 34 + 32 = ___",
              "options": [
                "66",
                "64",
                "68",
                "76"
              ],
              "answer": "66",
              "explanation": "34 + 30 = 64, 64 + 2 = 66.",
              "hint": "Add 30 then add 2.",
              "hintAr": "34 + 30 = 64، ثم 64 + 2 = 66."
            }
          ],
          "t3": [
            {
              "id": "ch7_l1_q3",
              "format": "choose",
              "type": "word_problem",
              "question": "Calculate mentally using 'make a ten': 87 + 8 = ___",
              "questionAr": "احسب ذهنياً باستراتيجية تكوين العشرة: 87 + 8 = ___",
              "options": [
                "95 (87 + 3 = 90, 90 + 5 = 95)",
                "94",
                "96",
                "97"
              ],
              "answer": "95 (87 + 3 = 90, 90 + 5 = 95)",
              "explanation": "87 + 3 = 90, 90 + 5 = 95.",
              "hint": "87 needs 3 to make 90.",
              "hintAr": "87 + 3 = 90، ويتبقى 5 = 95."
            }
          ]
        }
      },
      {
        "id": "ch7_l2",
        "lessonNumber": 2,
        "bookPage": 78,
        "title": "Lesson 2: Mental Math for Subtraction",
        "titleAr": "الدرس 2: الحساب الذهني للطرح",
        "rule": "For mental subtraction, subtract the highest place value first: 62 - 39 -> 62 - 30 = 32, then 32 - 9 = 23.",
        "conceptSummary": "Subtract tens first, then subtract ones.",
        "hintAr": "في الطرح الذهني: نطرح العشرات أولاً ثم نطرح الآحاد.",
        "tiers": {
          "t1": [
            {
              "id": "ch7_l2_q1",
              "format": "choose",
              "type": "tier1_concept",
              "question": "Calculate using mental math: 83 - 20 = ___",
              "questionAr": "احسب ذهنياً: 83 - 20 = ___",
              "options": [
                "63",
                "53",
                "73",
                "60"
              ],
              "answer": "63",
              "explanation": "83 - 20 = 63.",
              "hint": "8 tens - 2 tens = 6 tens.",
              "hintAr": "83 - 20 = 63."
            }
          ],
          "t2": [
            {
              "id": "ch7_l2_q2",
              "format": "complete",
              "type": "calc",
              "question": "Calculate mentally: 62 - 39 = ___",
              "questionAr": "احسب ذهنياً: 62 - 39 = ___",
              "options": [
                "23",
                "25",
                "33",
                "21"
              ],
              "answer": "23",
              "explanation": "62 - 30 = 32, 32 - 9 = 23.",
              "hint": "Subtract 30 then 9.",
              "hintAr": "62 - 30 = 32، ثم 32 - 9 = 23."
            }
          ],
          "t3": [
            {
              "id": "ch7_l2_q3",
              "format": "choose",
              "type": "word_problem",
              "question": "Calculate mentally: 100 - 42 = ___",
              "questionAr": "احسب ذهنياً: 100 - 42 = ___",
              "options": [
                "58",
                "68",
                "48",
                "52"
              ],
              "answer": "58",
              "explanation": "100 - 40 = 60, 60 - 2 = 58.",
              "hint": "Subtract 40 then 2.",
              "hintAr": "100 - 40 = 60، ثم 60 - 2 = 58."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "ch8",
    "number": 8,
    "title": "Division with Remainders",
    "titleAr": "القسمة مع وجود باقٍ",
    "icon": "🍰",
    "color": "#F97316",
    "description": "Division with a remainder, checking answers (Divisor × Quotient + Remainder = Dividend), and interpreting remainders in real situations.",
    "lessons": [
      {
        "id": "ch8_l1",
        "lessonNumber": 1,
        "bookPage": 82,
        "title": "Lesson 1: Division with a Remainder",
        "titleAr": "الدرس 1: مفهوم القسمة مع وجود باقٍ",
        "rule": "Leftover items form the Remainder: 17 ÷ 3 = 5 remainder 2. The remainder is always less than the divisor.",
        "conceptSummary": "Find the largest multiple of divisor ≤ dividend: 3 × 5 = 15, remainder = 17 - 15 = 2.",
        "hintAr": "الباقي هو ما يتبقى بعد التوزيع بالتساوي، ويجب أن يكون دائماً أقل من المقسوم عليه.",
        "tiers": {
          "t1": [
            {
              "id": "ch8_l1_q1",
              "format": "choose",
              "type": "tier1_concept",
              "question": "What is 17 ÷ 3?",
              "questionAr": "ما ناتج 17 ÷ 3؟",
              "options": [
                "5 remainder 2",
                "5 remainder 1",
                "6 remainder 1",
                "4 remainder 5"
              ],
              "answer": "5 remainder 2",
              "explanation": "3 × 5 = 15. 17 - 15 = 2. Answer: 5 remainder 2.",
              "hint": "Largest multiple of 3 ≤ 17 is 15.",
              "hintAr": "3 × 5 = 15، والباقي 17 - 15 = 2."
            }
          ],
          "t2": [
            {
              "id": "ch8_l1_q2",
              "format": "complete",
              "type": "calc",
              "question": "Calculate: 29 ÷ 4 = ___",
              "questionAr": "احسب: 29 ÷ 4 = ___",
              "options": [
                "7 remainder 1",
                "6 remainder 5",
                "7 remainder 2",
                "8 remainder 1"
              ],
              "answer": "7 remainder 1",
              "explanation": "4 × 7 = 28. 29 - 28 = 1. Answer: 7 remainder 1.",
              "hint": "4 × 7 = 28.",
              "hintAr": "4 × 7 = 28، والباقي 1."
            }
          ],
          "t3": [
            {
              "id": "ch8_l1_q3",
              "visual": {
                "type": "pattern",
                "items": [
                  "50 ÷ 6",
                  "6 × 8 = 48",
                  "50 - 48 = ?"
                ]
              },
              "format": "choose",
              "type": "word_problem",
              "question": "What is the remainder when 50 is divided by 6?",
              "questionAr": "ما هو باقي قسمة العدد 50 على 6؟",
              "options": [
                "2 (6 × 8 = 48, 50 - 48 = 2)",
                "4",
                "1",
                "3"
              ],
              "answer": "2 (6 × 8 = 48, 50 - 48 = 2)",
              "explanation": "6 × 8 = 48. Remainder is 50 - 48 = 2.",
              "hint": "6 × 8 = 48.",
              "hintAr": "6 × 8 = 48، إذن الباقي 2."
            }
          ]
        }
      },
      {
        "id": "ch8_l2",
        "lessonNumber": 2,
        "bookPage": 84,
        "title": "Lesson 2: Checking the Answer",
        "titleAr": "الدرس 2: التحقق من صحة القسمة",
        "rule": "Checking Rules: 1. Remainder < Divisor (always). 2. Divisor × Quotient + Remainder = Dividend.",
        "conceptSummary": "For 14 ÷ 4, answer 2 remainder 6 is invalid because remainder 6 > divisor 4! Correct is 3 R 2.",
        "hintAr": "للتحقق: 1. الباقي أصغر من المقسوم عليه دائماً. 2. (المقسوم عليه × خارج القسمة) + الباقي = المقسوم.",
        "tiers": {
          "t1": [
            {
              "id": "ch8_l2_q1",
              "format": "choose",
              "type": "tier1_concept",
              "question": "To check if 15 ÷ 4 = 3 remainder 3 is correct, which formula do you use?",
              "questionAr": "للتحقق من صحة 15 ÷ 4 = 3 والباقي 3، أي علاقة تستخدم؟",
              "options": [
                "(4 × 3) + 3 = 12 + 3 = 15 ✔",
                "4 + 3 + 3 = 10",
                "15 - 4 - 3 = 8",
                "4 × 3 × 3 = 36"
              ],
              "answer": "(4 × 3) + 3 = 12 + 3 = 15 ✔",
              "explanation": "Divisor × Quotient + Remainder = 4 × 3 + 3 = 15.",
              "hint": "Multiply divisor by quotient, add remainder.",
              "hintAr": "(4 × 3) + 3 = 15."
            }
          ],
          "t2": [
            {
              "id": "ch8_l2_q2",
              "format": "complete",
              "type": "calc",
              "question": "A student wrote: 14 ÷ 4 = 2 remainder 6. Why is this incorrect?",
              "questionAr": "كتب طالب: 14 ÷ 4 = 2 والباقي 6. لماذا هذا خطأ؟",
              "options": [
                "The remainder (6) is larger than the divisor (4)",
                "14 cannot be divided",
                "2 × 4 is not 8",
                "Quotient must be odd"
              ],
              "answer": "The remainder (6) is larger than the divisor (4)",
              "explanation": "The remainder must be strictly smaller than the divisor.",
              "hint": "Can you take another 4 from 6? Yes!",
              "hintAr": "الباقي 6 أكبر من المقسوم عليه 4، وهذا غير جائز."
            }
          ],
          "t3": [
            {
              "id": "ch8_l2_q3",
              "visual": {
                "type": "pattern",
                "items": [
                  "? ÷ 7 = 5 R 4",
                  "➔",
                  "(7 × 5) + 4",
                  "=",
                  "?"
                ]
              },
              "format": "choose",
              "type": "word_problem",
              "question": "When a mystery number is divided by 7, the quotient is 5 and remainder is 4. What is the number?",
              "questionAr": "عدد إذا قُسم على 7، كان الناتج 5 والباقي 4. فما هو العدد؟",
              "options": [
                "39 (7 × 5 + 4)",
                "35",
                "41",
                "33"
              ],
              "answer": "39 (7 × 5 + 4)",
              "explanation": "(7 × 5) + 4 = 35 + 4 = 39.",
              "hint": "7 × 5 + 4.",
              "hintAr": "(7 × 5) + 4 = 39."
            }
          ]
        }
      },
      {
        "id": "ch8_l3",
        "lessonNumber": 3,
        "bookPage": 86,
        "title": "Lesson 3: Using Division with a Remainder (Part 1)",
        "titleAr": "الدرس 3: تطبيقات وتحديد تمييز الناتج والباقي",
        "rule": "Both quotient and remainder have units in real-world problems. State both clearly.",
        "conceptSummary": "37 candies among 5 people: 7 candies each, and 2 candies left over.",
        "hintAr": "في المسائل الحياتية يجب تحديد تمييز الناتج والباقي بوضوح (قطعة، ورقة...).",
        "tiers": {
          "t1": [
            {
              "id": "ch8_l3_q1",
              "format": "choose",
              "type": "tier1_concept",
              "question": "Share 37 candies equally among 5 people. What is each person's share and what is left over?",
              "questionAr": "وزع 37 قطعة حلوى بالتساوي على 5 أفراد. ما نصيب كل فرد وما المتبقي؟",
              "options": [
                "7 candies each, 2 candies left over",
                "7 candies each, 1 candy left over",
                "6 candies each, 7 left over",
                "8 candies each, 0 left over"
              ],
              "answer": "7 candies each, 2 candies left over",
              "explanation": "37 ÷ 5 = 7 remainder 2 candies.",
              "hint": "5 × 7 = 35, 37 - 35 = 2.",
              "hintAr": "7 قطع لكل فرد ويتبقى قطعتان."
            }
          ],
          "t2": [
            {
              "id": "ch8_l3_q2",
              "format": "complete",
              "type": "calc",
              "question": "25 sheets of paper are shared among 7 people. How many sheets does each get and how many are left over?",
              "questionAr": "وزع 25 ورقة رسم على 7 طلاب. كم ورقة لكل طالب وكم ورقة تتبقى؟",
              "options": [
                "3 sheets each, 4 left over",
                "4 sheets each, 3 left over",
                "3 sheets each, 1 left over",
                "2 sheets each, 11 left over"
              ],
              "answer": "3 sheets each, 4 left over",
              "explanation": "25 ÷ 7 = 3 remainder 4 sheets.",
              "hint": "7 × 3 = 21, 25 - 21 = 4.",
              "hintAr": "3 ورقات لكل طالب ويتبقى 4 ورقات."
            }
          ],
          "t3": [
            {
              "id": "ch8_l3_q3",
              "format": "choose",
              "type": "word_problem",
              "question": "56 sheets of colored paper are shared equally among 6 children. What is the mathematical sentence?",
              "questionAr": "تم توزيع 56 ورقة ألوان على 6 أطفال بالتساوي. ما الجملة الرياضية؟",
              "options": [
                "56 ÷ 6 = 9 remainder 2",
                "56 ÷ 6 = 8 remainder 8",
                "56 ÷ 6 = 9 remainder 0",
                "56 ÷ 6 = 10 remainder 4"
              ],
              "answer": "56 ÷ 6 = 9 remainder 2",
              "explanation": "6 × 9 = 54, 56 - 54 = 2.",
              "hint": "6 × 9 = 54.",
              "hintAr": "56 ÷ 6 = 9 والباقي 2."
            }
          ]
        }
      },
      {
        "id": "ch8_l4",
        "lessonNumber": 4,
        "bookPage": 88,
        "title": "Lesson 4: Using Division with a Remainder (Part 2)",
        "titleAr": "الدرس 4: تفسير الباقي في الحياة اليومية",
        "rule": "Interpret the remainder: Add 1 to quotient if all must be accommodated (e.g. buses, benches). Ignore remainder if only full sets count.",
        "conceptSummary": "43 children, 5 per bench -> 8 benches fit 40, need 1 more bench for remaining 3 -> 9 benches!",
        "hintAr": "نضيف 1 لخارج القسمة لاستيعاب الباقين (مقاعد، رحلات)، ونهمل الباقي إذا طلب باقات أو أطقم كاملة فقط.",
        "tiers": {
          "t1": [
            {
              "id": "ch8_l4_q1",
              "format": "choose",
              "type": "tier1_concept",
              "question": "There are 43 children. One bench seats 5 children. How many benches are needed for ALL children?",
              "questionAr": "هناك 43 تلميذاً، والمقعد يسع 5 تلاميذ. كم مقعداً نحتاج لجلوس جميع التلاميذ؟",
              "options": [
                "9 benches (8 + 1 = 9)",
                "8 benches",
                "7 benches",
                "10 benches"
              ],
              "answer": "9 benches (8 + 1 = 9)",
              "explanation": "43 ÷ 5 = 8 remainder 3. The 3 remaining children need another bench, so 8 + 1 = 9 benches.",
              "hint": "Can children be left without a seat?",
              "hintAr": "43 ÷ 5 = 8 ويتبقى 3 تلاميذ يحتاجون مقعداً إضافياً (8 + 1 = 9 مقاعد)."
            }
          ],
          "t2": [
            {
              "id": "ch8_l4_q2",
              "format": "complete",
              "type": "calc",
              "question": "You have 29 books. If you carry 8 books per trip, how many trips will it take to carry ALL books?",
              "questionAr": "معك 29 كتاباً، وتنقل 8 كتب في كل مشوار. كم مشواراً يلزم لنقل كل الكتب؟",
              "options": [
                "4 trips (3 + 1 = 4)",
                "3 trips",
                "5 trips",
                "2 trips"
              ],
              "answer": "4 trips (3 + 1 = 4)",
              "explanation": "29 ÷ 8 = 3 remainder 5. 3 trips carry 24 books; a 4th trip carries the remaining 5.",
              "hint": "All books must be moved.",
              "hintAr": "29 ÷ 8 = 3 ويتبقى 5 كتب يلزم لها مشوار رابع (4 مشاوير)."
            }
          ],
          "t3": [
            {
              "id": "ch8_l4_q3",
              "format": "choose",
              "type": "word_problem",
              "question": "A florist has 38 roses and puts 6 roses in each bouquet. How many COMPLETE bouquets can she make?",
              "questionAr": "مع بائعة ورد 38 وردة، تضع 6 في كل باقة. كم باقة كاملة تستطيع تكوينها؟",
              "options": [
                "6 bouquets (ignore remainder 2)",
                "7 bouquets",
                "5 bouquets",
                "8 bouquets"
              ],
              "answer": "6 bouquets (ignore remainder 2)",
              "explanation": "38 ÷ 6 = 6 remainder 2. She can only make 6 complete bouquets.",
              "hint": "Only full bouquets count.",
              "hintAr": "38 ÷ 6 = 6 ونهمل الوردتين المتبقيتين لأنه طلب باقات كاملة (6 باقات)."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "ch9",
    "number": 9,
    "title": "Numbers Bigger than 10,000",
    "titleAr": "الأعداد الأكبر من 10,000",
    "icon": "🔢",
    "color": "#6366F1",
    "description": "Numbers up to 100,000 and 999,999, place values, number lines, comparing big numbers, and multiplying/dividing by 10.",
    "lessons": [
      {
        "id": "ch9_l1",
        "lessonNumber": 1,
        "bookPage": 92,
        "title": "Lesson 1: How to Write Big Numbers",
        "titleAr": "الدرس 1: قراءة وكتابة الأعداد الكبيرة",
        "rule": "Ten 1,000s = 10,000. Ten 10,000s = 100,000 (hundred thousand). Digits are grouped in threes from the right.",
        "conceptSummary": "309,820 is Three hundred nine thousand, eight hundred twenty.",
        "hintAr": "عشرة آلاف (10,000) تتكون من عشرة 1,000. ومائة ألف (100,000) تتكون من عشرة 10,000.",
        "tiers": {
          "t1": [
            {
              "id": "ch9_l1_q1",
              "visual": {
                "type": "pattern",
                "items": [
                  "? × 10,000",
                  "=",
                  "100,000"
                ]
              },
              "format": "choose",
              "type": "tier1_concept",
              "question": "How many 10,000s make 100,000?",
              "questionAr": "كم 10,000 نحتاج لتكوين 100,000؟",
              "options": [
                "10",
                "100",
                "1,000",
                "5"
              ],
              "answer": "10",
              "explanation": "Ten 10,000s make 100,000.",
              "hint": "10 × 10,000 = 100,000.",
              "hintAr": "10 حزم من عشرة آلاف تعطي مائة ألف."
            }
          ],
          "t2": [
            {
              "id": "ch9_l1_q2",
              "format": "complete",
              "type": "calc",
              "question": "Write in standard form: 'Three hundred nine thousand, eight hundred twenty':",
              "questionAr": "اكتب بالصيغة الرمزية القياسية: 'ثلاثمائة وتسعة آلاف وثمانمائة وعشرون':",
              "options": [
                "309,820",
                "390,820",
                "39,820",
                "3,090,820"
              ],
              "answer": "309,820",
              "explanation": "Three hundred nine thousand = 309,000 + 820 = 309,820.",
              "hint": "Thousands period is 309.",
              "hintAr": "309 في الآلاف و 820 في الوحدات: 309,820."
            }
          ],
          "t3": [
            {
              "id": "ch9_l1_q3",
              "visual": {
                "type": "place_value",
                "num": 426703,
                "target": 2
              },
              "format": "choose",
              "type": "word_problem",
              "question": "In 426,703, what is the place value and value of digit 2?",
              "questionAr": "في العدد 426,703، ما هي القيمة المكانية وقيمة الرقم 2؟",
              "options": [
                "Ten Thousands, Value: 20,000",
                "Thousands, Value: 2,000",
                "Hundred Thousands, Value: 200,000",
                "Hundreds, Value: 200"
              ],
              "answer": "Ten Thousands, Value: 20,000",
              "explanation": "Digit 2 is in Ten Thousands place (2 × 10,000 = 20,000).",
              "hint": "5th digit from the right.",
              "hintAr": "عشرات ألوف وقيمته 20,000."
            }
          ]
        }
      },
      {
        "id": "ch9_l2",
        "lessonNumber": 2,
        "bookPage": 96,
        "title": "Lesson 2: The Structure of Big Numbers",
        "titleAr": "الدرس 2: بنية الأعداد وخط الأعداد",
        "rule": "On a number line, numbers increase to the right. 40,000 + 30,000 = 70,000.",
        "conceptSummary": "Think of large multiples by their digit count: 4 + 3 = 7 ten thousands = 70,000.",
        "hintAr": "نجمع الألوف بسهولة بجمع أرقامها: 40,000 + 30,000 = 70,000.",
        "tiers": {
          "t1": [
            {
              "id": "ch9_l2_q1",
              "format": "choose",
              "type": "tier1_concept",
              "question": "On a number line stepping by 10,000, what number follows 40,000?",
              "questionAr": "على خط أعداد بمقدار 10,000، ما العدد الذي يلي 40,000؟",
              "options": [
                "50,000",
                "41,000",
                "60,000",
                "40,100"
              ],
              "answer": "50,000",
              "explanation": "40,000 + 10,000 = 50,000.",
              "hint": "Add 10,000.",
              "hintAr": "40,000 + 10,000 = 50,000."
            }
          ],
          "t2": [
            {
              "id": "ch9_l2_q2",
              "visual": {
                "type": "pattern",
                "items": [
                  "40,000",
                  "+",
                  "30,000",
                  "=",
                  "?"
                ]
              },
              "format": "complete",
              "type": "calc",
              "question": "Calculate: 40,000 + 30,000 = ___",
              "questionAr": "احسب: 40,000 + 30,000 = ___",
              "options": [
                "70,000",
                "7,000",
                "700,000",
                "80,000"
              ],
              "answer": "70,000",
              "explanation": "4 ten thousands + 3 ten thousands = 70,000.",
              "hint": "4 + 3 = 7 with four zeros.",
              "hintAr": "4 + 3 = 7 وبجانبها أربعة أصفار: 70,000."
            }
          ],
          "t3": [
            {
              "id": "ch9_l2_q3",
              "visual": {
                "type": "pattern",
                "items": [
                  "100,000",
                  "-",
                  "30,000",
                  "=",
                  "?"
                ]
              },
              "format": "choose",
              "type": "word_problem",
              "question": "Calculate: 100,000 - 30,000 = ___",
              "questionAr": "احسب: 100,000 - 30,000 = ___",
              "options": [
                "70,000",
                "80,000",
                "60,000",
                "7,000"
              ],
              "answer": "70,000",
              "explanation": "100,000 - 30,000 = 70,000.",
              "hint": "10 ten thousands - 3 ten thousands = 7 ten thousands.",
              "hintAr": "100,000 - 30,000 = 70,000."
            }
          ]
        }
      },
      {
        "id": "ch9_l3",
        "lessonNumber": 3,
        "bookPage": 100,
        "title": "Lesson 3: Comparing Big Numbers",
        "titleAr": "الدرس 3: مقارنة الأعداد الكبيرة",
        "rule": "Compare digit count first, then compare digits from left to right using >, <, =.",
        "conceptSummary": "542,000 > 538,000 because 4 ten thousands > 3 ten thousands.",
        "hintAr": "نعد أرقام العددين أولاً، ثم نقارن من اليسار إلى اليمين.",
        "tiers": {
          "t1": [
            {
              "id": "ch9_l3_q1",
              "visual": {
                "type": "place_value_compare",
                "num1": 542000,
                "num2": 538000,
                "highlightPlace": "Ten Thousands"
              },
              "format": "choose",
              "type": "tier1_concept",
              "question": "Compare: 542,000 ___ 538,000",
              "questionAr": "قارن: 542,000 ___ 538,000",
              "options": [
                ">",
                "<",
                "=",
                "+"
              ],
              "answer": ">",
              "explanation": "In ten thousands place: 4 > 3, so 542,000 > 538,000.",
              "hint": "Compare 4 and 3.",
              "hintAr": "4 في عشرات الآلاف أكبر من 3 (542,000 > 538,000)."
            }
          ],
          "t2": [
            {
              "id": "ch9_l3_q2",
              "visual": {
                "type": "place_value_compare",
                "num1": 98500,
                "num2": 102000,
                "highlightPlace": "Number of digits"
              },
              "format": "complete",
              "type": "calc",
              "question": "Compare: 98,500 ___ 102,000 (enter < or > or =):",
              "questionAr": "قارن: 98,500 ___ 102,000 (اكتب < أو > أو =):",
              "options": [
                "<",
                ">",
                "=",
                "None"
              ],
              "answer": "<",
              "explanation": "5 digits is always smaller than 6 digits: 98,500 < 102,000.",
              "hint": "Count the digits.",
              "hintAr": "5 أرقام أصغر من 6 أرقام (98,500 < 102,000)."
            }
          ],
          "t3": [
            {
              "id": "ch9_l3_q3",
              "format": "choose",
              "type": "word_problem",
              "question": "Compare: 60,000 + 4,000 ___ 64,000",
              "questionAr": "قارن: 60,000 + 4,000 ___ 64,000",
              "options": [
                "=",
                ">",
                "<",
                "+"
              ],
              "answer": "=",
              "explanation": "60,000 + 4,000 = 64,000, which equals 64,000.",
              "hint": "Add left side first.",
              "hintAr": "الطرف الأيسر = 64,000، إذن الطرفان متساويان (=)."
            }
          ]
        }
      },
      {
        "id": "ch9_l4",
        "lessonNumber": 4,
        "bookPage": 102,
        "title": "Lesson 4: Numbers Multiplied & Divided by 10",
        "titleAr": "الدرس 4: ضرب وقسمة الأعداد على 10 و 100",
        "rule": "Multiplying by 10 adds one zero to the right. Multiplying by 100 adds two zeros. Dividing by 10 drops one zero.",
        "conceptSummary": "350 × 10 = 3,500. 40,000 ÷ 10 = 4,000. 52 × 100 = 5,200.",
        "hintAr": "الضرب في 10 يضع صفراً، والضرب في 100 يضع صفرين، والقسمة على 10 تحذف صفراً.",
        "tiers": {
          "t1": [
            {
              "id": "ch9_l4_q1",
              "format": "choose",
              "type": "tier1_concept",
              "question": "What is 350 × 10?",
              "questionAr": "ما حاصل 350 × 10؟",
              "options": [
                "3,500",
                "350",
                "35,000",
                "3,050"
              ],
              "answer": "3,500",
              "explanation": "350 × 10 = 3,500.",
              "hint": "Add one zero to 350.",
              "hintAr": "نضع صفراً مع 350 ليصبح 3,500."
            }
          ],
          "t2": [
            {
              "id": "ch9_l4_q2",
              "format": "complete",
              "type": "calc",
              "question": "What is 40,000 ÷ 10?",
              "questionAr": "ما حاصل 40,000 ÷ 10؟",
              "options": [
                "4,000",
                "400",
                "40,000",
                "400,000"
              ],
              "answer": "4,000",
              "explanation": "40,000 ÷ 10 = 4,000.",
              "hint": "Drop one zero.",
              "hintAr": "نحذف صفراً من 40,000 ليصبح 4,000."
            }
          ],
          "t3": [
            {
              "id": "ch9_l4_q3",
              "format": "choose",
              "type": "word_problem",
              "question": "What is 52 × 100?",
              "questionAr": "ما حاصل 52 × 100؟",
              "options": [
                "5,200",
                "520",
                "52,000",
                "502"
              ],
              "answer": "5,200",
              "explanation": "52 × 100 = 5,200.",
              "hint": "Add two zeros to 52.",
              "hintAr": "نضع صفرين مع 52 ليصبح 5,200."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "ch10",
    "number": 10,
    "title": "Vertical Multiplication (Part 1)",
    "titleAr": "الضرب الرأسي",
    "icon": "📝",
    "color": "#059669",
    "description": "Multiplying tens and hundreds, vertical multiplication of 2-digit and 3-digit numbers by 1-digit, associative property, and word problems.",
    "lessons": [
      {
        "id": "ch10_l1",
        "lessonNumber": 1,
        "bookPage": 106,
        "title": "Lesson 1: Multiplying by Tens and Hundreds",
        "titleAr": "الدرس 1: الضرب في العشرات والمئات",
        "rule": "When multiplicand is multiplied by 10 or 100, the product is multiplied by 10 or 100: 20 × 4 = 80. 300 × 5 = 1,500.",
        "conceptSummary": "Multiply the non-zero digits first, then append the matching number of zeros.",
        "hintAr": "نضرب الأرقام الأساسية أولاً ثم نضع الأصفار: 20 × 4 = 80، و 300 × 5 = 1,500.",
        "tiers": {
          "t1": [
            {
              "id": "ch10_l1_q1",
              "format": "choose",
              "type": "tier1_concept",
              "question": "Calculate: 20 × 4 = ___",
              "questionAr": "احسب: 20 × 4 = ___",
              "options": [
                "80",
                "8",
                "800",
                "24"
              ],
              "answer": "80",
              "explanation": "2 × 4 = 8, so 20 × 4 = 80.",
              "hint": "2 × 4 = 8, add zero.",
              "hintAr": "2 × 4 = 8 ونضع الصفر = 80."
            }
          ],
          "t2": [
            {
              "id": "ch10_l1_q2",
              "format": "complete",
              "type": "calc",
              "question": "Calculate: 300 × 5 = ___",
              "questionAr": "احسب: 300 × 5 = ___",
              "options": [
                "1,500",
                "150",
                "15,000",
                "305"
              ],
              "answer": "1,500",
              "explanation": "3 × 5 = 15, so 300 × 5 = 1,500.",
              "hint": "3 × 5 = 15, append two zeros.",
              "hintAr": "3 × 5 = 15 ونضع الصفرين = 1,500."
            }
          ],
          "t3": [
            {
              "id": "ch10_l1_q3",
              "format": "choose",
              "type": "word_problem",
              "question": "Calculate: 60 × 7 = ___",
              "questionAr": "احسب: 60 × 7 = ___",
              "options": [
                "420",
                "42",
                "4,200",
                "490"
              ],
              "answer": "420",
              "explanation": "6 × 7 = 42, so 60 × 7 = 420.",
              "hint": "6 × 7 = 42, append 0.",
              "hintAr": "6 × 7 = 42 ونضع الصفر = 420."
            }
          ]
        }
      },
      {
        "id": "ch10_l2",
        "lessonNumber": 2,
        "bookPage": 108,
        "title": "Lesson 2: Vertical Multiplication (2-digit × 1-digit)",
        "titleAr": "الدرس 2: الضرب الرأسي (عدد من رقمين في رقم)",
        "rule": "Vertical Multiplication: 1. Align digits vertically. 2. Multiply ones first, carry over if needed. 3. Multiply tens and add carried number.",
        "conceptSummary": "26 × 3: 3 × 6 = 18 (carry 1). 3 × 2 = 6 + 1 = 7 -> 78.",
        "hintAr": "نضرب الآحاد أولاً ونحمل الفائض، ثم نضرب العشرات ونجمع المحمول: 26 × 3 = 78.",
        "tiers": {
          "t1": [
            {
              "id": "ch10_l2_q1",
              "format": "choose",
              "type": "tier1_concept",
              "question": "Calculate using vertical method: 26 × 3 = ___",
              "questionAr": "احسب بالطريقة الرأسية: 26 × 3 = ___",
              "options": [
                "78",
                "68",
                "88",
                "72"
              ],
              "answer": "78",
              "explanation": "3 × 6 = 18 (write 8, carry 1). 3 × 2 = 6 + 1 = 7 -> 78.",
              "hint": "3 × 6 = 18, 3 × 2 + 1 = 7.",
              "hintAr": "3 × 6 = 18، 3 × 2 + 1 = 7 -> 78."
            }
          ],
          "t2": [
            {
              "id": "ch10_l2_q2",
              "format": "complete",
              "type": "calc",
              "question": "Calculate: 48 × 4 = ___",
              "questionAr": "احسب: 48 × 4 = ___",
              "options": [
                "192",
                "182",
                "162",
                "196"
              ],
              "answer": "192",
              "explanation": "4 × 8 = 32 (carry 3). 4 × 4 = 16 + 3 = 19 -> 192.",
              "hint": "4 × 8 = 32, 4 × 4 + 3 = 19.",
              "hintAr": "4 × 8 = 32، و 4 × 4 + 3 = 19 -> 192."
            }
          ],
          "t3": [
            {
              "id": "ch10_l2_q3",
              "format": "choose",
              "type": "word_problem",
              "question": "Calculate: 76 × 8 = ___",
              "questionAr": "احسب: 76 × 8 = ___",
              "options": [
                "608",
                "598",
                "618",
                "568"
              ],
              "answer": "608",
              "explanation": "8 × 6 = 48 (carry 4). 8 × 7 = 56 + 4 = 60 -> 608.",
              "hint": "8 × 6 = 48, 8 × 7 + 4 = 60.",
              "hintAr": "8 × 6 = 48، و 8 × 7 + 4 = 60 -> 608."
            }
          ]
        }
      },
      {
        "id": "ch10_l3",
        "lessonNumber": 3,
        "bookPage": 110,
        "title": "Lesson 3: Vertical Multiplication (3-digit × 1-digit)",
        "titleAr": "الدرس 3: الضرب الرأسي (عدد من 3 أرقام في رقم)",
        "rule": "Multiply ones, then tens, then hundreds in order, adding carried numbers at each step.",
        "conceptSummary": "213 × 3 = 639. 276 × 6 = 1,656.",
        "hintAr": "نضرب بالتتابع في الآحاد ثم العشرات ثم المئات ونجمع الأرقام المحمولة.",
        "tiers": {
          "t1": [
            {
              "id": "ch10_l3_q1",
              "format": "choose",
              "type": "tier1_concept",
              "question": "Calculate: 213 × 3 = ___",
              "questionAr": "احسب: 213 × 3 = ___",
              "options": [
                "639",
                "629",
                "649",
                "539"
              ],
              "answer": "639",
              "explanation": "3 × 3 = 9, 3 × 1 = 3, 3 × 2 = 6 -> 639.",
              "hint": "Multiply 3 by each digit.",
              "hintAr": "3 × 3 = 9، 3 × 1 = 3، 3 × 2 = 6 -> 639."
            }
          ],
          "t2": [
            {
              "id": "ch10_l3_q2",
              "format": "complete",
              "type": "calc",
              "question": "Calculate: 276 × 6 = ___",
              "questionAr": "احسب: 276 × 6 = ___",
              "options": [
                "1,656",
                "1,556",
                "1,646",
                "1,756"
              ],
              "answer": "1,656",
              "explanation": "6 × 6 = 36, 6 × 7 + 3 = 45, 6 × 2 + 4 = 16 -> 1,656.",
              "hint": "Carry over carefully.",
              "hintAr": "6 × 6 = 36، 6 × 7 + 3 = 45، 6 × 2 + 4 = 16 -> 1,656."
            }
          ],
          "t3": [
            {
              "id": "ch10_l3_q3",
              "format": "choose",
              "type": "word_problem",
              "question": "Calculate: 405 × 6 = ___",
              "questionAr": "احسب: 405 × 6 = ___",
              "options": [
                "2,430",
                "2,400",
                "2,435",
                "2,030"
              ],
              "answer": "2,430",
              "explanation": "6 × 5 = 30 (carry 3). 6 × 0 + 3 = 3. 6 × 4 = 24 -> 2,430.",
              "hint": "6 × 0 = 0, add carried 3.",
              "hintAr": "6 × 5 = 30، 6 × 0 + 3 = 3، 6 × 4 = 24 -> 2,430."
            }
          ]
        }
      },
      {
        "id": "ch10_l4",
        "lessonNumber": 4,
        "bookPage": 112,
        "title": "Lesson 4: Rules of Multiplication (Clever ways)",
        "titleAr": "الدرس 4: خاصية الدمج واستراتيجيات ذكية في الضرب",
        "rule": "Associative Property: (a × b) × c = a × (b × c). Look for pairs that make 10 or 100 (e.g. 25 × 4 = 100).",
        "conceptSummary": "25 × 7 × 4 = (25 × 4) × 7 = 100 × 7 = 700.",
        "hintAr": "خاصية الدمج: ابحث عن أزواج الأعداد التي تعطي 10 أو 100 (مثل 25 × 4 = 100).",
        "tiers": {
          "t1": [
            {
              "id": "ch10_l4_q1",
              "visual": {
                "type": "pattern",
                "items": [
                  "(40 × 2) × 3",
                  "➔",
                  "80 × 3",
                  "=",
                  "?"
                ]
              },
              "format": "choose",
              "type": "tier1_concept",
              "question": "Calculate using clever ways: 40 × 2 × 3 = ___",
              "questionAr": "احسب بطريقة ذكية: 40 × 2 × 3 = ___",
              "options": [
                "240",
                "120",
                "280",
                "200"
              ],
              "answer": "240",
              "explanation": "(40 × 2) = 80, 80 × 3 = 240.",
              "hint": "40 × 6 = 240.",
              "hintAr": "40 × 6 = 240."
            }
          ],
          "t2": [
            {
              "id": "ch10_l4_q2",
              "visual": {
                "type": "pattern",
                "items": [
                  "25 × 7 × 4",
                  "➔",
                  "(25 × 4) × 7",
                  "➔",
                  "100 × 7 = ?"
                ]
              },
              "format": "complete",
              "type": "calc",
              "question": "Which clever grouping makes calculating 25 × 7 × 4 easiest?",
              "questionAr": "أي تجميع ذكي يجعل حساب 25 × 7 × 4 أسهل؟",
              "options": [
                "(25 × 4) × 7 = 100 × 7 = 700",
                "(25 × 7) × 4 = 175 × 4",
                "25 + 7 + 4 = 36",
                "(7 × 4) × 25 = 28 × 25"
              ],
              "answer": "(25 × 4) × 7 = 100 × 7 = 700",
              "explanation": "25 × 4 = 100, then 100 × 7 = 700.",
              "hint": "25 × 4 = 100.",
              "hintAr": "ضرب 25 × 4 يعطي 100، و 100 × 7 = 700."
            }
          ],
          "t3": [
            {
              "id": "ch10_l4_q3",
              "visual": {
                "type": "pattern",
                "items": [
                  "5 × 19 × 2",
                  "➔",
                  "(5 × 2) × 19",
                  "➔",
                  "10 × 19 = ?"
                ]
              },
              "format": "choose",
              "type": "word_problem",
              "question": "Calculate mentally using the associative property: 5 × 19 × 2 = ___",
              "questionAr": "احسب ذهنياً بخاصية الدمج: 5 × 19 × 2 = ___",
              "options": [
                "190",
                "180",
                "195",
                "200"
              ],
              "answer": "190",
              "explanation": "5 × 2 = 10, then 10 × 19 = 190.",
              "hint": "5 × 2 = 10 first.",
              "hintAr": "5 × 2 = 10، ثم 10 × 19 = 190."
            }
          ]
        }
      },
      {
        "id": "ch10_l5",
        "lessonNumber": 5,
        "bookPage": 114,
        "title": "Lesson 5: Using Multiplication in Word Problems",
        "titleAr": "الدرس 5: مسائل حياتية متعددة الخطوات على الضرب",
        "rule": "Write a clear mathematical sentence and include units with the final answer.",
        "conceptSummary": "5 buses with 43 passengers each: 5 × 43 = 215 people. Multi-step: (138 × 3) × 2 = 828 EGP.",
        "hintAr": "اكتب جملة رياضية واضحة وحدد التمييز (راكباً، جنيهاً...).",
        "tiers": {
          "t1": [
            {
              "id": "ch10_l5_q1",
              "format": "choose",
              "type": "tier1_concept",
              "question": "There are 5 buses. If 43 people ride in each bus, how many people ride in total?",
              "questionAr": "هناك 5 حافلات، يركب في كل منها 43 راكباً. كم إجمالي عدد الركاب؟",
              "options": [
                "215 people (5 × 43)",
                "205 people",
                "225 people",
                "48 people"
              ],
              "answer": "215 people (5 × 43)",
              "explanation": "5 × 43 = 215 people.",
              "hint": "5 × 40 = 200, 5 × 3 = 15.",
              "hintAr": "5 × 43 = 215 راكباً."
            }
          ],
          "t2": [
            {
              "id": "ch10_l5_q2",
              "format": "complete",
              "type": "calc",
              "question": "You make 6 bundles of flowers with 37 flowers in each. How many flowers in total?",
              "questionAr": "كونت 6 باقات في كل منها 37 زهرة. كم عدد الأزهار الكلي؟",
              "options": [
                "222 flowers (6 × 37)",
                "212 flowers",
                "232 flowers",
                "43 flowers"
              ],
              "answer": "222 flowers (6 × 37)",
              "explanation": "6 × 37 = 222 flowers.",
              "hint": "6 × 37.",
              "hintAr": "6 × 37 = 222 زهرة."
            }
          ],
          "t3": [
            {
              "id": "ch10_l5_q3",
              "format": "choose",
              "type": "word_problem",
              "question": "A cake costs 138 EGP. There are 3 cakes in one box. If you buy 2 boxes, how much do you pay?",
              "questionAr": "ثمن الكعكة 138 جنيهاً، والعلبة بها 3 كعكات. إذا اشتريت علبتين، كم تدفع؟",
              "options": [
                "828 EGP (138 × 6)",
                "414 EGP",
                "818 EGP",
                "838 EGP"
              ],
              "answer": "828 EGP (138 × 6)",
              "explanation": "3 × 2 = 6 cakes. 138 × 6 = 828 EGP.",
              "hint": "6 cakes at 138 EGP each.",
              "hintAr": "6 كعكات بسعر 138 جنيهاً = 828 جنيهاً."
            }
          ]
        }
      }
    ]
  }
];

if (typeof window !== 'undefined') {
  window.CURRICULUM_P3 = CURRICULUM_DATA;
  window.CURRICULUM_DATA = CURRICULUM_DATA;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CURRICULUM_DATA, CURRICULUM_P3: CURRICULUM_DATA };
}