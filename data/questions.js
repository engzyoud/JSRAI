export const questions = [

/* DESIGN & DOCUMENTATION */

{
id:1,
text_ar:"هل يوجد تصميم إنشائي معتمد ومخططات تسليح تفصيلية لجميع العناصر الحاملة؟",
text_en:"Are approved structural design and detailed reinforcement drawings available for load-bearing elements?",
ex_ar:"المقصود وجود مخططات كمرات وبلاطات وأعمدة وقواعد مع تفاصيل تسليح، وليس رسومات معمارية فقط.",
ex_en:"Look for structural reinforcement drawings, not only architectural plans.",
weight:2
},

{
id:2,
text_ar:"هل تم إعداد التصميم وفق كود إنشائي معترف به (ACI أو ما يعادله)؟",
text_en:"Was the structural design prepared according to a recognized code (ACI or equivalent)?",
ex_ar:"التصميم الكودي يضمن حدود أمان دنيا للتسليح والقص والانحناء.",
text_en:"Code-based design ensures minimum safety limits.",
weight:2
},

{
id:3,
text_ar:"هل تم تدقيق التصميم أو مراجعته إنشائياً من جهة ثانية أو مهندس آخر؟",
text_en:"Was the structural design independently reviewed or checked?",
ex_ar:"المراجعة تقلل أخطاء الحساب أو التفاصيل.",
weight:2
},

/* CONCRETE QUALITY */

{
id:4,
text_ar:"هل توجد فحوصات مقاومة خرسانة فعلية (مكعبات/أسطوانات) من المشروع نفسه؟",
text_en:"Are there actual concrete strength test reports from the project?",
ex_ar:"تقارير المختبر تعطي مؤشر مباشر على مقاومة الخرسانة المنفذة.",
weight:2
},

{
id:5,
text_ar:"هل تم ضبط الماء المضاف للخلطة ومنع إضافة ماء عشوائي بالموقع؟",
text_en:"Was site water addition controlled and prevented?",
ex_ar:"زيادة الماء تضعف المقاومة وتزيد التشققات.",
weight:2
},

{
id:6,
text_ar:"هل تم تنفيذ دمك جيد ومنع التعشيش والفراغات داخل العناصر؟",
text_en:"Was proper vibration used to avoid honeycombing and voids?",
ex_ar:"التعشيش يقلل مقاومة الضغط والقص.",
weight:3
},

{
id:7,
text_ar:"هل تمت المعالجة (Curing) لمدة كافية بعد الصب؟",
text_en:"Was proper curing applied after casting?",
ex_ar:"المعالجة تؤثر مباشرة على المقاومة والمتانة.",
weight:2
},

/* REINFORCEMENT EXECUTION */

{
id:8,
text_ar:"هل تم تنفيذ الغطاء الخرساني (Cover) ضمن حدود مناسبة؟",
text_en:"Is reinforcement cover adequate?",
ex_ar:"الغطاء غير الكافي يسرع التآكل.",
weight:2
},

{
id:9,
text_ar:"هل ترتيب التسليح يمنع التزاحم الشديد ويضمن صب جيد؟",
text_en:"Is reinforcement spacing sufficient to allow proper casting?",
ex_ar:"تزاحم الحديد يسبب فراغات وتعشيش.",
weight:2
},

{
id:10,
text_ar:"هل أطوال التثبيت والرباط للتسليح كافية عند النهايات؟",
text_en:"Are bar development and anchorage lengths adequate?",
ex_ar:"طول تثبيت غير كافٍ يقلل نقل القوى.",
weight:3
},

/* SLABS & BEAMS */

{
id:11,
text_ar:"هل تم التحقق من مقاومة القص في الكمرات؟",
text_en:"Was beam shear capacity checked?",
ex_ar:"القص سبب رئيسي للفشل المفاجئ.",
weight:3
},

{
id:12,
text_ar:"هل تم التحقق من الانحناء والتشقق ضمن حدود الخدمة؟",
text_en:"Were flexure and crack limits checked?",
ex_ar:"الانحناء المفرط مؤشر ضعف.",
weight:2
},

{
id:13,
text_ar:"هل يوجد تسليح علوي كافٍ فوق المسندات؟",
text_en:"Is top reinforcement sufficient over supports?",
ex_ar:"التسليح العلوي ضروري للعزوم السالبة.",
weight:2
},

/* PUNCHING SHEAR */

{
id:14,
text_ar:"هل تم التحقق من القص الثاقب حول الأعمدة في البلاطات؟",
text_en:"Was punching shear around columns checked?",
ex_ar:"أحد أخطر أنماط الفشل في الفلات سلاب.",
weight:3
},

{
id:15,
text_ar:"هل توجد زيادة سماكة أو تسليح قص حول الأعمدة عند الحاجة؟",
text_en:"Are slab thickening or shear reinforcement provided near columns if needed?",
ex_ar:"drop panels أو shear studs تقلل الخطر.",
weight:3
},

/* JOINTS & CONTINUITY */

{
id:16,
text_ar:"هل تفاصيل العقد (beam-column joints) واضحة ومسلحة جيداً؟",
text_en:"Are beam-column joints properly detailed and reinforced?",
ex_ar:"العقد نقطة حرجة في نقل القوى.",
weight:3
},

{
id:17,
text_ar:"هل يوجد استمرارية تسليح بين العناصر (continuity)؟",
text_en:"Is reinforcement continuity maintained between members?",
ex_ar:"الانقطاع يزيد ضعف موضعي.",
weight:3
},

/* SEISMIC */

{
id:18,
text_ar:"هل تم أخذ الأحمال الزلزالية في التصميم؟",
text_en:"Were seismic loads considered?",
ex_ar:"حتى المناطق متوسطة الزلازل تحتاج تفاصيل ربط.",
weight:3
},

{
id:19,
text_ar:"هل تفاصيل الربط والتطويق في الأعمدة مناسبة؟",
text_en:"Are column ties/confinement adequate?",
ex_ar:"التطويق يزيد المطيلية.",
weight:3
},

/* EXECUTION & SITE */

{
id:20,
text_ar:"هل يوجد إشراف إنشائي أثناء التنفيذ؟",
text_en:"Was structural supervision present?",
ex_ar:"الإشراف يقلل أخطاء التنفيذ.",
weight:2
},

{
id:21,
text_ar:"هل تمت مراجعة أي تعديل موقعي إنشائياً؟",
text_en:"Were site changes structurally reviewed?",
weight:2
},

/* LOAD PATH & ROBUSTNESS */

{
id:22,
text_ar:"هل مسارات نقل الأحمال واضحة وغير معتمدة على عنصر واحد؟",
text_en:"Are load paths clear and not dependent on a single element?",
weight:3
},

{
id:23,
text_ar:"هل يوجد ربط محيطي وربط داخلي بين العناصر؟",
text_en:"Are perimeter and internal ties present?",
weight:3
},

{
id:24,
text_ar:"هل النظام الإنشائي منتظم نسبياً بدون لاانتظام شديد؟",
text_en:"Is the structural system reasonably regular?",
weight:2
},

/* PROGRESSIVE COLLAPSE */

{
id:25,
text_ar:"هل تم أخذ خطر الانهيار المتسلسل بالحسبان في التصميم أو التفاصيل؟",
text_en:"Was progressive collapse risk considered?",
ex_ar:"وجود ربط واستمرارية ومسارات بديلة يقلل خطر الانهيار المتسلسل.",
weight:3
},

/* FIELD INDICATORS */

{
id:26,
text_ar:"هل توجد تشققات قص مائلة قرب الأعمدة أو المسندات؟",
text_en:"Are there diagonal shear cracks near supports?",
weight:3
},

{
id:27,
text_ar:"هل يوجد هبوط أو ترخيم ملحوظ في البلاطات؟",
text_en:"Is noticeable slab sagging observed?",
weight:3
},

{
id:28,
text_ar:"هل يوجد صدأ ظاهر أو تساقط غطاء خرساني؟",
text_en:"Is there visible corrosion or cover spalling?",
weight:3
},

{
id:29,
text_ar:"هل توجد فتحات كبيرة غير مدروسة في البلاطات؟",
text_en:"Are there large unengineered slab openings?",
weight:3
},

/* SERVICE & DURABILITY */

{
id:30,
text_ar:"هل تصريف المياه من الأسطح جيد؟",
text_en:"Is roof drainage adequate?",
weight:2
},

{
id:31,
text_ar:"هل العزل المائي للأسقف فعال؟",
text_en:"Is waterproofing effective?",
weight:2
},

{
id:32,
text_ar:"هل البيئة المحيطة عدوانية (رطوبة/أملاح) بدون حماية كافية؟",
text_en:"Is exposure aggressive without protection?",
weight:2
},

/* FOUNDATIONS */

{
id:33,
text_ar:"هل يوجد هبوط تفاضلي ظاهر؟",
text_en:"Is differential settlement observed?",
weight:3
},

{
id:34,
text_ar:"هل تم تنفيذ القواعد وفق المخططات؟",
text_en:"Were foundations built per drawings?",
weight:3
},

/* MODIFICATIONS */

{
id:35,
text_ar:"هل أضيفت أحمال جديدة بعد التنفيذ؟",
text_en:"Were new loads added after construction?",
weight:3
},

{
id:36,
text_ar:"هل تمت إزالة جدران أو عناصر بدون مراجعة إنشائية؟",
text_en:"Were walls removed without structural review?",
weight:3
},

/* MATERIAL & DETAILING */

{
id:37,
text_ar:"هل نوع الحديد المستخدم مطابق للمواصفات؟",
text_en:"Is rebar grade compliant?",
weight:2
},

{
id:38,
text_ar:"هل أطوال الوصلات (laps) كافية؟",
text_en:"Are lap splice lengths adequate?",
weight:3
},

{
id:39,
text_ar:"هل تم تجنب وصلات التسليح في مناطق عزم عالي؟",
text_en:"Are splices avoided in high moment zones?",
weight:3
},

{
id:40,
text_ar:"هل يوجد نظام ربط أفقي يربط الإطارات أو الجدران ببعض؟",
text_en:"Are horizontal ties linking frames/walls provided?",
weight:3
}

]
