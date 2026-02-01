export const questions = [

/* =========================
   A — BASIC BUILDING INFO
========================= */

{
  id: 1,
  text_ar: "هل عمر المبنى أكثر من 20 سنة؟",
  text_en: "Is the building older than 20 years?",
  ex_ar: "المباني القديمة قد تحتاج مراجعة خاصة حسب الكودات الحديثة.",
  ex_en: "Older buildings may not meet modern code requirements.",
},

{
  id: 2,
  text_ar: "هل عدد الطوابق أكثر من 4 طوابق؟",
  text_en: "Does the building have more than 4 floors?",
  ex_ar: "كلما زاد الارتفاع زادت حساسية المبنى للأحمال والزلازل.",
  ex_en: "Taller buildings are more sensitive to loads and earthquakes.",
},

{
  id: 3,
  text_ar: "هل تم إضافة طابق أو توسعة بعد البناء الأصلي؟",
  text_en: "Was an extra floor or extension added after original construction?",
  ex_ar: "الإضافات قد تغيّر مسار الأحمال.",
  ex_en: "Extensions may change load paths.",
},

{
  id: 4,
  text_ar: "هل تم إزالة جدران أو أعمدة أثناء تعديل داخلي؟",
  text_en: "Were walls or columns removed during renovations?",
  ex_ar: "إزالة عناصر إنشائية قد تضعف النظام.",
  ex_en: "Removing structural elements weakens the system.",
},

{
  id: 5,
  text_ar: "هل استخدام المبنى الحالي مختلف عن الاستخدام الأصلي؟",
  text_en: "Is the building use different from the original design?",
  ex_ar: "مثلاً تحويل سكني إلى تجاري.",
  ex_en: "Example: residential converted to commercial.",
},

/* =========================
   B — VISIBLE DAMAGE
========================= */

{
  id: 6,
  text_ar: "هل توجد شقوق واضحة في الأعمدة؟",
  text_en: "Are there visible cracks in columns?",
  ex_ar: "خصوصاً الشقوق العميقة أو المستمرة.",
  ex_en: "Especially deep or continuous cracks.",
},

{
  id: 7,
  text_ar: "هل توجد شقوق في الجسور (الكمرات)؟",
  text_en: "Are there cracks in beams?",
  ex_ar: "خاصة قرب الأعمدة أو منتصف البحر.",
  ex_en: "Especially near supports or mid-span.",
},

{
  id: 8,
  text_ar: "هل توجد شقوق كبيرة في السقف؟",
  text_en: "Are there major slab cracks?",
  ex_ar: "شقوق طويلة أو متسعة.",
  ex_en: "Long or wide cracks.",
},

{
  id: 9,
  text_ar: "هل يوجد تقشر أو تساقط في الخرسانة؟",
  text_en: "Is there concrete spalling or surface loss?",
  ex_ar: "ظهور فراغات أو سقوط أجزاء.",
  ex_en: "Concrete pieces falling off.",
},

{
  id: 10,
  text_ar: "هل يظهر حديد التسليح في أي عنصر؟",
  text_en: "Is reinforcement steel exposed anywhere?",
  ex_ar: "ظهور الحديد مؤشر خطر.",
  ex_en: "Exposed steel is a warning sign.",
},

/* =========================
   C — DEFORMATION
========================= */

{
  id: 11,
  text_ar: "هل يوجد هبوط أو ميلان ملحوظ في أرضية؟",
  text_en: "Is there noticeable floor settlement or slope?",
  ex_ar: "عدم استواء الأرضية.",
  ex_en: "Uneven floors.",
},

{
  id: 12,
  text_ar: "هل الأبواب أو النوافذ لا تُغلق بسهولة؟",
  text_en: "Do doors/windows no longer close properly?",
  ex_ar: "قد يدل على حركة إنشائية.",
  ex_en: "May indicate structural movement.",
},

{
  id: 13,
  text_ar: "هل يوجد ميلان مرئي في أعمدة أو جدران؟",
  text_en: "Is there visible column or wall leaning?",
  ex_ar: "حتى لو كان بسيط.",
  ex_en: "Even slight leaning matters.",
},

/* =========================
   D — LOAD & USE
========================= */

{
  id: 14,
  text_ar: "هل توجد خزانات مياه كبيرة على السطح؟",
  text_en: "Are there heavy water tanks on the roof?",
  ex_ar: "الأحمال المركزة مهمة.",
  ex_en: "Concentrated loads matter.",
},

{
  id: 15,
  text_ar: "هل توجد معدات ثقيلة أو أرشيف كثيف داخل المبنى؟",
  text_en: "Are heavy machines or dense storage present?",
  ex_ar: "الأحمال التشغيلية الزائدة خطرة.",
  ex_en: "High live loads are critical.",
},

{
  id: 16,
  text_ar: "هل تم تخزين مواد ثقيلة فوق السقف؟",
  text_en: "Are heavy materials stored on slabs?",
  ex_ar: "مثل بلاط أو حديد.",
  ex_en: "Like tiles or steel.",
},

/* =========================
   E — WATER & CORROSION
========================= */

{
  id: 17,
  text_ar: "هل يوجد تسرب مياه في السقف أو الأعمدة؟",
  text_en: "Are there water leaks in slabs or columns?",
  ex_ar: "الماء يسرّع التآكل.",
  ex_en: "Water accelerates corrosion.",
},

{
  id: 18,
  text_ar: "هل توجد رطوبة مستمرة في عناصر إنشائية؟",
  text_en: "Is there constant moisture in structural parts?",
  ex_ar: "خصوصاً الأقبية.",
  ex_en: "Especially basements.",
},

{
  id: 19,
  text_ar: "هل يوجد صدأ ظاهر على الحديد؟",
  text_en: "Is there visible rust on steel bars?",
  ex_ar: "مؤشر تآكل.",
  ex_en: "Corrosion indicator.",
},

/* =========================
   F — STRUCTURAL SYSTEM
========================= */

{
  id: 20,
  text_ar: "هل يوجد طابق مفتوح بالكامل بدون جدران (Soft story)؟",
  text_en: "Is there an open soft story floor?",
  ex_ar: "مثل طابق مواقف مفتوح.",
  ex_en: "Example: open parking floor.",
},

{
  id: 21,
  text_ar: "هل توزيع الجدران غير منتظم بين الطوابق؟",
  text_en: "Are walls irregular between floors?",
  ex_ar: "عدم انتظام رأسي.",
  ex_en: "Vertical irregularity.",
},

{
  id: 22,
  text_ar: "هل توجد فتحات كبيرة قريبة من الأعمدة؟",
  text_en: "Are there large openings near columns?",
  ex_ar: "فتحات مصاعد أو درج.",
  ex_en: "Elevator/stair openings.",
},

/* =========================
   G — EARTHQUAKE / LATERAL
========================= */

{
  id: 23,
  text_ar: "هل يقع المبنى في منطقة زلزالية؟",
  text_en: "Is the building in a seismic zone?",
  ex_ar: "حسب موقع المدينة.",
  ex_en: "Based on location.",
},

{
  id: 24,
  text_ar: "هل يوجد تشققات بعد هزة أرضية سابقة؟",
  text_en: "Did cracks appear after a past earthquake?",
  ex_ar: "حتى لو كانت خفيفة.",
  ex_en: "Even minor quakes.",
},

/* =========================
   H — FOUNDATION
========================= */

{
  id: 25,
  text_ar: "هل توجد شقوق في جدران القبو؟",
  text_en: "Are there cracks in basement walls?",
  ex_ar: "قد تدل على ضغط تربة.",
  ex_en: "May indicate soil pressure.",
},

{
  id: 26,
  text_ar: "هل يوجد هبوط غير متساوي في المبنى؟",
  text_en: "Is there differential settlement?",
  ex_ar: "جانب يهبط أكثر من آخر.",
  ex_en: "One side lower than another.",
},

/* =========================
   I — PROGRESSIVE COLLAPSE
========================= */

{
  id: 27,
  text_ar: "هل يوجد أعمدة قليلة تحمل مساحة كبيرة؟",
  text_en: "Do few columns support large areas?",
  ex_ar: "نظام غير موزع.",
  ex_en: "Low redundancy system.",
},

{
  id: 28,
  text_ar: "هل توجد عناصر حرجة لا يوجد لها بديل إنشائي؟",
  text_en: "Are there critical elements with no redundancy?",
  ex_ar: "فشل عنصر = فشل كبير.",
  ex_en: "Single-point failure risk.",
},

{
  id: 29,
  text_ar: "هل يوجد أجزاء من السقف تعتمد على عنصر واحد فقط؟",
  text_en: "Do slab areas rely on a single support?",
  ex_ar: "خطر انهيار متدرج.",
  ex_en: "Progressive collapse risk.",
},

/* =========================
   J — EXECUTION QUALITY
========================= */

{
  id: 30,
  text_ar: "هل تظهر تعشيشات خرسانية؟",
  text_en: "Are there honeycomb concrete areas?",
  ex_ar: "فراغات داخل الخرسانة.",
  ex_en: "Concrete voids.",
},

{
  id: 31,
  text_ar: "هل توجد مناطق صب غير متجانسة؟",
  text_en: "Are there poor concrete finish zones?",
  ex_ar: "اختلافات واضحة.",
  ex_en: "Uneven finish.",
},

/* =========================
   K — ADDITIONAL SAFETY
========================= */

{
  id: 32,
  text_ar: "هل توجد أحمال إضافية حديثة لم تُدرس؟",
  text_en: "Were new loads added without study?",
  ex_ar: "معدات — خزانات — تخزين.",
  ex_en: "Equipment/storage.",
},

{
  id: 33,
  text_ar: "هل توجد اهتزازات غير معتادة أثناء الاستخدام؟",
  text_en: "Are there unusual vibrations?",
  ex_ar: "اهتزاز أرضية.",
  ex_en: "Floor vibration.",
},

{
  id: 34,
  text_ar: "هل يوجد صوت تشقق متكرر؟",
  text_en: "Are there repeated cracking sounds?",
  ex_ar: "أصوات من العناصر.",
  ex_en: "Structural noises.",
},

{
  id: 35,
  text_ar: "هل توجد مناطق ضعف معروفة بالمخططات؟",
  text_en: "Do drawings show known weak zones?",
  ex_ar: "حسب مخططات قديمة.",
  ex_en: "From drawings.",
},

{
  id: 36,
  text_ar: "هل تم تنفيذ تدعيم سابق؟",
  text_en: "Was strengthening previously done?",
  ex_ar: "يدل على مشكلة سابقة.",
  ex_en: "Indicates past issue.",
},

{
  id: 37,
  text_ar: "هل يوجد تباعد كبير بين الأعمدة؟",
  text_en: "Are column spans unusually large?",
  ex_ar: "بحور كبيرة.",
  ex_en: "Large spans.",
},

{
  id: 38,
  text_ar: "هل توجد جدران قص كافية؟",
  text_en: "Are shear walls present?",
  ex_ar: "مقاومة جانبية.",
  ex_en: "Lateral resistance.",
},

{
  id: 39,
  text_ar: "هل توجد تشققات حول فتحات المصعد؟",
  text_en: "Are there cracks near elevator cores?",
  ex_ar: "منطقة حرجة.",
  ex_en: "Critical zone.",
},

{
  id: 40,
  text_ar: "هل يوجد تاريخ مشاكل إنشائية؟",
  text_en: "Is there a history of structural issues?",
  ex_ar: "إصلاحات سابقة.",
  ex_en: "Past repairs.",
},

{
  id: 41,
  text_ar: "هل يوجد تحميل زائد على الشرفات؟",
  text_en: "Are balconies overloaded?",
  ex_ar: "تخزين كثيف.",
  ex_en: "Heavy storage.",
},

{
  id: 42,
  text_ar: "هل توجد شقوق عند التقاء الجسر مع العمود؟",
  text_en: "Are there cracks at beam-column joints?",
  ex_ar: "منطقة حساسة.",
  ex_en: "Critical joint.",
},

{
  id: 43,
  text_ar: "هل يوجد اختلاف كبير بين طابق وآخر بالتصميم؟",
  text_en: "Is there floor-to-floor structural irregularity?",
  ex_ar: "عدم انتظام.",
  ex_en: "Irregularity.",
},

{
  id: 44,
  text_ar: "هل يوجد ضعف ظاهر في الطابق الأرضي؟",
  text_en: "Is ground floor visibly weaker?",
  ex_ar: "أعمدة أقل.",
  ex_en: "Fewer columns.",
},

{
  id: 45,
  text_ar: "هل يوجد تآكل في مناطق خارجية؟",
  text_en: "Is there exterior structural corrosion?",
  ex_ar: "تعرض للطقس.",
  ex_en: "Weather exposure.",
},

{
  id: 46,
  text_ar: "هل تم تغيير مخطط الأحمال؟",
  text_en: "Was load layout changed?",
  ex_ar: "تقسيمات.",
  ex_en: "Layout changes.",
},

{
  id: 47,
  text_ar: "هل يوجد فتحات كبيرة جديدة في السقف؟",
  text_en: "Were new slab openings made?",
  ex_ar: "بدون تدعيم.",
  ex_en: "Without strengthening.",
},

{
  id: 48,
  text_ar: "هل توجد مناطق بلاطات رقيقة جداً؟",
  text_en: "Are there very thin slab zones?",
  ex_ar: "سمك قليل.",
  ex_en: "Thin slab.",
},

{
  id: 49,
  text_ar: "هل توجد أعمدة قصيرة ظاهرة؟",
  text_en: "Are there short columns?",
  ex_ar: "تأثير قص عالي.",
  ex_en: "High shear risk.",
},

{
  id: 50,
  text_ar: "هل تشعر بعدم أمان إنشائي عند استخدام المبنى؟",
  text_en: "Do you feel structural safety concern?",
  ex_ar: "انطباع مستخدم مهم.",
  ex_en: "User perception matters.",
},

]
