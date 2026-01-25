const questions = [
  {
    id: "buildingType",
    q: "نوع المبنى / Building Type",
    desc: "اختر نوع المبنى (Residential/Commercial/Industrial).",
    options: [
      { text: "سكني / Residential", score: 1 },
      { text: "تجاري / Commercial", score: 2 },
      { text: "صناعي / Industrial", score: 2 },
      { text: "مختلط / Mixed", score: 3 },
    ]
  },
  {
    id: "stories",
    q: "عدد الطوابق / Number of Stories",
    desc: "عدد الطوابق يؤثر على خطر الانهيار المتسلسل.",
    options: [
      { text: "1-3", score: 1 },
      { text: "4-7", score: 2 },
      { text: "8-12", score: 3 },
      { text: "أكثر من 12 / >12", score: 4 },
    ]
  },
  {
    id: "constructionYear",
    q: "سنة البناء التقريبية / Construction Year",
    desc: "اختيار السنة يساعد على تقدير مدى اعتماد الكود الزلزالي.",
    options: [
      { text: "قبل 1980 / <1980", score: 4 },
      { text: "1980-2000", score: 3 },
      { text: "2001-2010", score: 2 },
      { text: "بعد 2010 / >2010", score: 1 },
    ]
  },
  {
    id: "structureMaterial",
    q: "نوع الهيكل / Structural Material",
    desc: "اختر نوع الهيكل الإنشائي.",
    options: [
      { text: "خرسانة مسلحة / RC", score: 1 },
      { text: "هيكل فولاذي / Steel", score: 2 },
      { text: "مختلط / Mixed", score: 2 },
      { text: "طوب/حجر / Masonry", score: 4 },
    ]
  },
  {
    id: "seismicDesign",
    q: "هل تم تصميم المبنى لمقاومة الزلازل؟ / Seismic Design",
    desc: "التصميم الزلزالي يقلل خطر الانهيار المتسلسل.",
    options: [
      { text: "نعم وفق كود زلزال / Yes (Code)", score: 1 },
      { text: "جزئي / Partial", score: 2 },
      { text: "لا / No", score: 4 },
    ]
  },

  {
    id: "beamColumnContinuity",
    q: "استمرارية الأعمدة والكمرات / Beam-Column Continuity",
    desc: "استمرارية جيدة تعني توزيع أحمال أفضل وتقليل الانهيار.",
    options: [
      { text: "ممتازة (تفاصيل قوية)", score: 1 },
      { text: "متوسطة", score: 2 },
      { text: "ضعيفة/غير واضحة", score: 4 },
    ]
  },
  {
    id: "shearWall",
    q: "وجود جدران قص / Shear Walls",
    desc: "وجود جدران قص يقلل الحركة الزلزالية وخطر الانهيار.",
    options: [
      { text: "نعم بكميات كافية", score: 1 },
      { text: "نعم لكن قليلة", score: 2 },
      { text: "لا", score: 4 },
    ]
  },
  {
    id: "columnSpacing",
    q: "مسافات الأعمدة / Column Spacing",
    desc: "المسافات الكبيرة تزيد خطر الانهيار في حال فقدان عمود.",
    options: [
      { text: "< 5m", score: 1 },
      { text: "5-7m", score: 2 },
      { text: ">7m", score: 3 },
    ]
  },
  {
    id: "floorSystem",
    q: "نوع نظام الأرضيات / Floor System",
    desc: "نوع الأرضيات يؤثر على توزيع الأحمال وسلوك الانهيار.",
    options: [
      { text: "سقف بلاطة / Slab", score: 1 },
      { text: "سقف كمرات + بلاطة / Beam-Slab", score: 2 },
      { text: "سقف بلاطة مسبقة الإجهاد / Pre-stressed", score: 2 },
      { text: "آخر", score: 3 },
    ]
  },
  {
    id: "beamDepth",
    q: "عمق الكمرات / Beam Depth",
    desc: "الكمرات العميقة عادةً أكثر مقاومة للانحناء والقص.",
    options: [
      { text: "أقل من 0.4m", score: 3 },
      { text: "0.4 - 0.7m", score: 2 },
      { text: "أكثر من 0.7m", score: 1 },
    ]
  },
  {
    id: "columnStrength",
    q: "قوة الأعمدة (حسب المخططات) / Column Strength",
    desc: "هل الأعمدة موضحة بقوة كافية في المخططات؟",
    options: [
      { text: "نعم (حسب المخططات)", score: 1 },
      { text: "غير واضحة", score: 2 },
      { text: "لا", score: 4 },
    ]
  },
  {
    id: "foundationType",
    q: "نوع الأساسات / Foundation Type",
    desc: "نوع الأساسات يؤثر على استقرار المبنى.",
    options: [
      { text: "سقف أساس / Raft", score: 1 },
      { text: "أعمدة + كمرات أساس / Pile/Raft", score: 1 },
      { text: "قواعد منفصلة / Isolated Footings", score: 2 },
      { text: "قواعد شريطية / Strip Footings", score: 2 },
    ]
  },
  {
    id: "soilType",
    q: "نوع التربة (تقريبي) / Soil Type",
    desc: "اعتمد على خريطة التربة التقريبية.",
    options: [
      { text: "صخر/تربة صلبة / Rock", score: 1 },
      { text: "تربة متماسكة جيدة / Good Soil", score: 2 },
      { text: "تربة ضعيفة/طينية / Weak Soil", score: 4 },
    ]
  },

  {
    id: "massIrregularity",
    q: "عدم انتظام الكتلة / Mass Irregularity",
    desc: "هل يوجد عدم انتظام في توزيع الكتلة (تغيرات كبيرة في الطوابق)؟",
    options: [
      { text: "لا / No", score: 1 },
      { text: "نعم لكن بسيط / Minor", score: 2 },
      { text: "نعم كبير / Significant", score: 4 },
    ]
  },
  {
    id: "stiffnessIrregularity",
    q: "عدم انتظام الصلابة / Stiffness Irregularity",
    desc: "هل يوجد اختلاف كبير في صلابة الطوابق؟",
    options: [
      { text: "لا / No", score: 1 },
      { text: "نعم لكن بسيط / Minor", score: 2 },
      { text: "نعم كبير / Significant", score: 4 },
    ]
  },
  {
    id: "softStory",
    q: "وجود طابق لين / Soft Story",
    desc: "هل يوجد طابق أرضي أقل صلابة (محلات/مواقف)؟",
    options: [
      { text: "لا / No", score: 1 },
      { text: "نعم لكن بسيط / Minor", score: 2 },
      { text: "نعم واضح / Significant", score: 4 },
    ]
  },
  {
    id: "shortColumn",
    q: "وجود أعمدة قصيرة / Short Columns",
    desc: "الأعمدة القصيرة تزيد خطر الانهيار بسبب قص عالي.",
    options: [
      { text: "لا / No", score: 1 },
      { text: "نعم لكن قليل / Few", score: 2 },
      { text: "نعم كثير / Many", score: 4 },
    ]
  },
  {
    id: "driftControl",
    q: "هل يوجد تحكم في الانحراف (Drift)؟ / Drift Control",
    desc: "التحكم في الانحراف يقلل من احتمال انهيار.",
    options: [
      { text: "نعم (كود/تفاصيل واضحة)", score: 1 },
      { text: "جزئي", score: 2 },
      { text: "لا", score: 4 },
    ]
  },

  {
    id: "beamRebar",
    q: "تسليح الكمرات (حسب المخططات) / Beam Reinforcement",
    desc: "هل التسليح مطابق للمعايير؟",
    options: [
      { text: "نعم (متطابق)", score: 1 },
      { text: "غير واضح", score: 2 },
      { text: "لا", score: 4 },
    ]
  },
  {
    id: "columnRebar",
    q: "تسليح الأعمدة (حسب المخططات) / Column Reinforcement",
    desc: "هل التسليح مطابق للمعايير؟",
    options: [
      { text: "نعم (متطابق)", score: 1 },
      { text: "غير واضح", score: 2 },
      { text: "لا", score: 4 },
    ]
  },
  {
    id: "jointDetail",
    q: "تفاصيل الوصلات (Beam-Column Joint) / Joint Detail",
    desc: "تفاصيل الوصلات مهمة لتجنب الانهيار المتسلسل.",
    options: [
      { text: "تفاصيل قوية (ACI/ASCE)", score: 1 },
      { text: "متوسطة", score: 2 },
      { text: "ضعيفة/غير واضحة", score: 4 },
    ]
  },
  {
    id: "columnSpacing2",
    q: "توزيع الأعمدة (هل يوجد مناطق فارغة كبيرة؟) / Column Distribution",
    desc: "توزيع الأعمدة غير المتوازن يزيد خطر الانهيار.",
    options: [
      { text: "متوازن", score: 1 },
      { text: "غير متوازن جزئياً", score: 2 },
      { text: "غير متوازن بشكل كبير", score: 4 },
    ]
  },
  {
    id: "criticalColumn",
    q: "هل يوجد عمود حرج (مهم جداً)؟ / Critical Column",
    desc: "وجود عمود حرج يزيد من خطر الانهيار المتسلسل إذا فشل.",
    options: [
      { text: "لا", score: 1 },
      { text: "نعم لكن توجد بدائل", score: 2 },
      { text: "نعم وبدون بدائل", score: 4 },
    ]
  },

  {
    id: "storyHeight",
    q: "ارتفاع الطوابق / Story Height",
    desc: "ارتفاع الطوابق الكبير يزيد من مرونة المبنى وخطر الانهيار.",
    options: [
      { text: "≤ 3m", score: 1 },
      { text: "3-4m", score: 2 },
      { text: ">4m", score: 3 },
    ]
  },
  {
    id: "planRegularity",
    q: "انتظام المخطط (Plan Regularity) / Plan Regularity",
    desc: "المخطط غير المنتظم يزيد خطر الانهيار.",
    options: [
      { text: "منتظم", score: 1 },
      { text: "غير منتظم بسيط", score: 2 },
      { text: "غير منتظم كبير", score: 4 },
    ]
  },
  {
    id: "eccentricity",
    q: "وجود إزاحة مركز الكتلة/الصلابة / Eccentricity",
    desc: "إزاحة كبيرة تزيد من الدوران والقص.",
    options: [
      { text: "لا", score: 1 },
      { text: "نعم بسيط", score: 2 },
      { text: "نعم كبير", score: 4 },
    ]
  },
  {
    id: "nonStructural",
    q: "وجود عناصر غير إنشائية ثقيلة / Heavy Non-Structural",
    desc: "عناصر ثقيلة تزيد الحمل وتؤثر على الانهيار.",
    options: [
      { text: "لا", score: 1 },
      { text: "نعم لكن قليلة", score: 2 },
      { text: "نعم كثيرة", score: 4 },
    ]
  },
  {
    id: "alterations",
    q: "هل تم تعديل المبنى (هدم/إضافة)؟ / Alterations",
    desc: "التعديلات غير المدروسة تزيد الخطر.",
    options: [
      { text: "لا", score: 1 },
      { text: "نعم لكن بإشراف هندسي", score: 2 },
      { text: "نعم بدون إشراف", score: 4 },
    ]
  },

  {
    id: "fireResistance",
    q: "مقاومة الحريق (Fire Resistance) / Fire Resistance",
    desc: "مقاومة الحريق تؤثر على قدرة المبنى على تحمل الحوادث.",
    options: [
      { text: "نعم (معايير)", score: 1 },
      { text: "جزئي", score: 2 },
      { text: "لا", score: 4 },
    ]
  },
  {
    id: "maintenance",
    q: "حالة الصيانة / Maintenance",
    desc: "التآكل والصدأ والتشققات تزيد خطر الانهيار.",
    options: [
      { text: "ممتازة", score: 1 },
      { text: "متوسطة", score: 2 },
      { text: "سيئة", score: 4 },
    ]
  },
  {
    id: "cracks",
    q: "وجود تشققات كبيرة / Large Cracks",
    desc: "تشققات كبيرة قد تشير إلى مشكلة إنشائية.",
    options: [
      { text: "لا", score: 1 },
      { text: "نعم لكن سطحية", score: 2 },
      { text: "نعم عميقة/خطرة", score: 4 },
    ]
  },
  {
    id: "waterLeak",
    q: "تسرب مياه/رطوبة / Water Leakage",
    desc: "الرطوبة تضعف الخرسانة والحديد.",
    options: [
      { text: "لا", score: 1 },
      { text: "نعم لكن محدود", score: 2 },
      { text: "نعم بشكل كبير", score: 4 },
    ]
  },
  {
    id: "seismicZone",
    q: "منطقة الزلزال (الأردن) / Seismic Zone",
    desc: "اختر المنطقة التقريبية على خريطة الزلازل.",
    options: [
      { text: "منطقة منخفضة (مثلاً شمال/وسط)", score: 1 },
      { text: "منطقة متوسطة", score: 2 },
      { text: "منطقة عالية (مثلاً جنوب/شرق)", score: 4 },
    ]
  },
  {
    id: "foundationSettlement",
    q: "هبوط الأساسات / Foundation Settlement",
    desc: "الهبوط غير المتوازن يزيد خطر الانهيار.",
    options: [
      { text: "لا", score: 1 },
      { text: "نعم لكن بسيط", score: 2 },
      { text: "نعم كبير", score: 4 },
    ]
  },
  {
    id: "adjacentConstruction",
    q: "أعمال إنشائية مجاورة (تأثير) / Adjacent Construction",
    desc: "أعمال مجاورة قد تؤثر على استقرار المبنى.",
    options: [
      { text: "لا", score: 1 },
      { text: "نعم لكن بسيط", score: 2 },
      { text: "نعم كبير", score: 4 },
    ]
  },
  {
    id: "redundancy",
    q: "التكرار/التعويض (Redundancy) / Structural Redundancy",
    desc: "وجود بدائل في التحميل يقلل الانهيار المتسلسل.",
    options: [
      { text: "نعم قوي", score: 1 },
      { text: "متوسط", score: 2 },
      { text: "ضعيف", score: 4 },
    ]
  }
];
