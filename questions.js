export const questions = [
  {
    id: 1,
    text_ar: "هل يوجد طابق مفتوح بالكامل (محلات / مواقف سيارات) أسفل المبنى؟",
    text_en: "Is there a fully open ground floor (shops / parking) beneath the building?",
    ex_ar: "الطابق المفتوح يشكل ما يسمى بالطابق الضعيف (Soft Story) وهو من أخطر أسباب الانهيار الزلزالي.",
    ex_en: "Open ground floors create soft-story mechanisms, one of the most dangerous seismic collapse causes.",
    weight: 5
  },
  {
    id: 2,
    text_ar: "هل المبنى غير منتظم في الشكل (بروزات كبيرة، فراغات، تغيّر مفاجئ في المساحات)؟",
    text_en: "Is the building geometrically irregular (large setbacks, voids, sudden plan changes)?",
    ex_ar: "عدم الانتظام يزيد تركّز القوى ويضعف الأداء الزلزالي.",
    ex_en: "Irregularity increases force concentration and weakens seismic performance.",
    weight: 4
  },
  {
    id: 3,
    text_ar: "هل توجد تشققات قطرية واضحة في الأعمدة أو الجدران؟",
    text_en: "Are there diagonal cracks in columns or walls?",
    ex_ar: "التشققات القطرية مؤشر خطير لفشل قصّي محتمل.",
    ex_en: "Diagonal cracks are a critical indicator of shear failure.",
    weight: 5
  },
  {
    id: 4,
    text_ar: "هل توجد تشققات أفقية عريضة في الأعمدة؟",
    text_en: "Are there wide horizontal cracks in columns?",
    ex_ar: "تدل على ضعف انحنائي قد يؤدي إلى انهيار تدريجي.",
    ex_en: "Indicates flexural weakness and progressive failure.",
    weight: 4
  },
  {
    id: 5,
    text_ar: "هل يوجد انفصال أو سقوط لغطاء الخرسانة وظهور حديد التسليح؟",
    text_en: "Is there concrete cover spalling with exposed reinforcement?",
    ex_ar: "انكشاف الحديد يؤدي لتآكله وتسارع فقدان القدرة الإنشائية.",
    ex_en: "Exposed reinforcement accelerates corrosion and strength loss.",
    weight: 5
  },
  {
    id: 6,
    text_ar: "هل توجد مناطق تعشيش أو فراغات واضحة في الخرسانة؟",
    text_en: "Are there honeycombing or visible voids in concrete?",
    ex_ar: "التعشيش يقلل مقاومة المقطع بشكل كبير.",
    ex_en: "Honeycombing severely reduces section capacity.",
    weight: 4
  },
  {
    id: 7,
    text_ar: "هل توجد تشققات دائرية أو هبوط موضعي حول الأعمدة في الأسقف؟",
    text_en: "Are there circular cracks or local slab depressions around columns?",
    ex_ar: "هذا مؤشر خطر لفشل Punching Shear المفاجئ.",
    ex_en: "This is a critical indicator of punching shear failure.",
    weight: 5
  },
  {
    id: 8,
    text_ar: "هل يوجد ميلان واضح في المبنى أو أحد أجزائه؟",
    text_en: "Is there noticeable building tilt?",
    ex_ar: "الميلان يدل على مشاكل خطيرة في التربة أو الأساسات.",
    ex_en: "Tilt indicates serious foundation or soil problems.",
    weight: 5
  },
  {
    id: 9,
    text_ar: "هل توجد تشققات كبيرة في الأرضيات أو الجدران السفلية؟",
    text_en: "Are there major cracks in floors or lower walls?",
    ex_ar: "تدل على هبوط تفاضلي خطير.",
    ex_en: "Indicates dangerous differential settlement.",
    weight: 4
  },
  {
    id: 10,
    text_ar: "هل تم إضافة طوابق أو أحمال ثقيلة بعد البناء؟",
    text_en: "Were extra floors or heavy loads added after construction?",
    ex_ar: "الأحمال الإضافية قد تتجاوز قدرة التحمل.",
    ex_en: "Added loads may exceed structural capacity.",
    weight: 5
  },
  {
    id: 11,
    text_ar: "هل تم إزالة جدران أو أعمدة داخلية لتغيير الاستخدام؟",
    text_en: "Were internal walls or columns removed to change usage?",
    ex_ar: "إزالة عناصر إنشائية قد تؤدي لانهيار مفاجئ.",
    ex_en: "Removing structural elements may cause sudden collapse.",
    weight: 5
  },
  {
    id: 12,
    text_ar: "هل توجد تشققات في العقد بين الأعمدة والأسقف؟",
    text_en: "Are there cracks at beam-column joints?",
    ex_ar: "العقد مناطق حرجة في نقل الأحمال خاصة أثناء الزلازل.",
    ex_en: "Joints are critical force transfer zones especially during earthquakes.",
    weight: 4
  },
  {
    id: 13,
    text_ar: "هل ظهرت تشققات جديدة بعد زلازل أو اهتزازات أرضية؟",
    text_en: "Did new cracks appear after earthquakes or vibrations?",
    ex_ar: "تطور التشققات بعد الزلازل مؤشر خطر.",
    ex_en: "Post-earthquake cracking is a serious warning sign.",
    weight: 5
  },
  {
    id: 14,
    text_ar: "هل المبنى أُنشئ قبل اعتماد كود الزلازل في الأردن؟",
    text_en: "Was the building constructed before seismic codes were enforced in Jordan?",
    ex_ar: "المباني القديمة غالبًا غير مصممة لمقاومة الزلازل.",
    ex_en: "Older buildings are often not seismically designed.",
    weight: 4
  },
  {
    id: 15,
    text_ar: "هل يوجد تآكل واضح في التسليح أو بقع صدأ على الخرسانة؟",
    text_en: "Is there visible corrosion or rust staining?",
    ex_ar: "الصدأ يقلل المقطع الفعّال للتسليح.",
    ex_en: "Corrosion reduces effective reinforcement area.",
    weight: 4
  },
  {
    id: 16,
    text_ar: "هل توجد فتحات كبيرة (مصاعد / سلالم) بدون تقوية واضحة حولها؟",
    text_en: "Are there large openings without visible strengthening?",
    ex_ar: "الفتحات تضعف المقطع وتحتاج معالجة خاصة.",
    ex_en: "Openings weaken slabs and require special reinforcement.",
    weight: 4
  },
  {
    id: 17,
    text_ar: "هل توجد تشققات ممتدة بطول الكمرات؟",
    text_en: "Are there long cracks along beams?",
    ex_ar: "تدل على ضعف انحنائي أو قصّي.",
    ex_en: "Indicates bending or shear deficiencies.",
    weight: 4
  },
  {
    id: 18,
    text_ar: "هل تظهر اهتزازات ملحوظة في الأسقف أثناء المشي؟",
    text_en: "Do floors vibrate noticeably during walking?",
    ex_ar: "يدل على ضعف الصلابة الإنشائية.",
    ex_en: "Indicates low structural stiffness.",
    weight: 3
  },
  {
    id: 19,
    text_ar: "هل توجد مياه راكدة دائمة على الأسطح أو داخل المبنى؟",
    text_en: "Is there persistent water ponding?",
    ex_ar: "تسرب المياه يسرّع التآكل والتدهور.",
    ex_en: "Water accelerates corrosion and deterioration.",
    weight: 3
  },
  {
    id: 20,
    text_ar: "هل توجد تشققات كبيرة في السلالم أو عند اتصالها بالأسقف؟",
    text_en: "Are there major cracks in staircases or at slab connections?",
    ex_ar: "السلالم عناصر حساسة جدًا أثناء الزلازل.",
    ex_en: "Staircases are highly sensitive during earthquakes.",
    weight: 4
  },
  {
    id: 21,
    text_ar: "هل المبنى متصل بمبانٍ أخرى دون فاصل زلزالي؟",
    text_en: "Is the building attached to adjacent structures without seismic separation?",
    ex_ar: "قد يحدث تصادم أثناء الزلازل (Pounding).",
    ex_en: "May cause pounding during earthquakes.",
    weight: 4
  },
  {
    id: 22,
    text_ar: "هل توجد تشققات مائلة في الجدران الحاملة؟",
    text_en: "Are there diagonal cracks in load-bearing walls?",
    ex_ar: "مؤشر خطير لفشل قصّي.",
    ex_en: "Dangerous shear failure indicator.",
    weight: 5
  },
  {
    id: 23,
    text_ar: "هل المبنى قائم على تربة ضعيفة أو ردم غير محسن؟",
    text_en: "Is the building founded on weak soil or uncontrolled fill?",
    ex_ar: "التربة الضعيفة تزيد الهبوط والفشل.",
    ex_en: "Weak soil increases settlement and failure risk.",
    weight: 4
  },
  {
    id: 24,
    text_ar: "هل توجد تشققات حول القواعد أو في جدران الطابق الأرضي؟",
    text_en: "Are there cracks near foundations or lower walls?",
    ex_ar: "تدل على مشاكل تأسيسية خطيرة.",
    ex_en: "Indicates foundation problems.",
    weight: 4
  },
  {
    id: 25,
    text_ar: "هل توجد عناصر إنشائية نحيفة جدًا مقارنة بارتفاعها؟",
    text_en: "Are there very slender structural elements?",
    ex_ar: "العناصر النحيفة أكثر عرضة للفشل والانبعاج.",
    ex_en: "Slender elements are prone to buckling and failure.",
    weight: 4
  },
  {
    id: 26,
    text_ar: "هل تظهر تشققات مفاجئة دون أسباب واضحة؟",
    text_en: "Are sudden cracks appearing without obvious causes?",
    ex_ar: "مؤشر خطر على تطور فشل داخلي.",
    ex_en: "Indicates internal progressive failure.",
    weight: 5
  },
  {
    id: 27,
    text_ar: "هل توجد مناطق ضعف واضحة في الجدران أو الأعمدة؟",
    text_en: "Are there visible weak zones in columns or walls?",
    ex_ar: "مناطق الضعف تمثل نقاط انهيار محتملة.",
    ex_en: "Weak zones are potential collapse points.",
    weight: 4
  },
  {
    id: 28,
    text_ar: "هل توجد تشققات ممتدة عبر عدة طوابق؟",
    text_en: "Are there cracks extending across multiple floors?",
    ex_ar: "تشير إلى فشل إنشائي شامل.",
    ex_en: "Indicates global structural distress.",
    weight: 5
  },
  {
    id: 29,
    text_ar: "هل تم تغيير استخدام المبنى عن التصميم الأصلي؟",
    text_en: "Was the building usage changed from its original design?",
    ex_ar: "تغيير الاستخدام يغيّر الأحمال التصميمية.",
    ex_en: "Usage change alters design loading.",
    weight: 4
  },
  {
    id: 30,
    text_ar: "هل تشعر بضعف عام أو اهتزاز غير طبيعي في المبنى؟",
    text_en: "Do you feel abnormal overall weakness or vibrations?",
    ex_ar: "الإحساس العام بالضعف مؤشر خطر حقيقي.",
    ex_en: "General feeling of weakness is a serious warning sign.",
    weight: 5
  }
];
