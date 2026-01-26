const e = React.createElement;

const LANG = {
  ar: {
    title: "أداة تقييم السلامة الإنشائية",
    subtitle: "تقييم أولي لحالة المبنى - الأردن",
    switch: "English",
    start: "ابدأ التقييم",
    reset: "إعادة التقييم",
    download: "تنزيل التقرير PDF",
    section: "الأسئلة",
    resultTitle: "النتيجة النهائية",
    safe: "آمن حاليًا",
    review: "يحتاج مراجعة هندسية",
    danger: "خطر مرتفع",
    note: "هذه أداة تقييم أولي ولا تغني عن الفحص الموقعي أو تقرير هندسي رسمي.",
    privacy: "سياسة الخصوصية",
    disclaimer: "إخلاء المسؤولية",
    footer: "Developed by Eng. (Your Name) — لا يغني عن فحص هندسي رسمي",
    q: "السؤال",
    explain: "لماذا هذا السؤال؟",
    impact: "كيف يؤثر على الخطر؟",
    placeholder: "اختر إجابة"
  },
  en: {
    title: "Structural Safety Assessment Tool",
    subtitle: "Preliminary building safety assessment - Jordan",
    switch: "عربي",
    start: "Start Assessment",
    reset: "Reset",
    download: "Download PDF Report",
    section: "Questions",
    resultTitle: "Final Result",
    safe: "Safe for now",
    review: "Needs engineering review",
    danger: "High risk",
    note: "This is a preliminary tool and does not replace an on-site inspection or official engineering report.",
    privacy: "Privacy Policy",
    disclaimer: "Disclaimer",
    footer: "Developed by Eng. (Your Name) — Not an official engineering report",
    q: "Question",
    explain: "Why this question?",
    impact: "Impact on risk",
    placeholder: "Choose an answer"
  }
};

const QUESTIONS = [
  {
    id: "age",
    points: { low: 0, mid: 2, high: 4 },
    options: [
      { value: "low", label: { ar: "أقل من 30 سنة", en: "Less than 30 years" } },
      { value: "mid", label: { ar: "30 - 60 سنة", en: "30 - 60 years" } },
      { value: "high", label: { ar: "أكثر من 60 سنة", en: "More than 60 years" } }
    ],
    q: { ar: "عمر المبنى", en: "Building age" },
    explain: {
      ar: "المباني القديمة غالبًا بنيت وفق معايير أقل صرامة أو قد تكون تعرضت لتدهور.",
      en: "Older buildings may have been built under less strict codes or may have deteriorated."
    },
    impact: {
      ar: "يزيد العمر من احتمال تدهور الخرسانة والحديد، ويزيد مخاطر الزلازل.",
      en: "Age increases likelihood of concrete/steel deterioration and seismic risk."
    }
  },
  {
    id: "structuralSystem",
    points: { low: 0, mid: 2, high: 4 },
    options: [
      { value: "rcFrame", label: { ar: "إطار خرساني (RC Frame)", en: "RC Frame" } },
      { value: "shearWall", label: { ar: "جدران قص (Shear Walls)", en: "Shear Walls" } },
      { value: "masonry", label: { ar: "حمل طوبي/مباني غير منتظمة", en: "Masonry/Irregular" } }
    ],
    q: { ar: "نظام التحمل الإنشائي", en: "Structural system" },
    explain: {
      ar: "أنظمة الجدران القصية غالبًا أكثر مقاومة للزلازل من الطوب أو الأنظمة غير المنتظمة.",
      en: "Shear wall systems are generally more seismic-resistant than masonry/irregular systems."
    },
    impact: {
      ar: "النظام غير المنتظم يزيد احتمالية حدوث تشوهات كبيرة أثناء الزلزال.",
      en: "Irregular systems increase the chance of large deformations during earthquakes."
    }
  },
  {
    id: "irregularity",
    points: { low: 0, mid: 2, high: 4 },
    options: [
      { value: "regular", label: { ar: "منتظم (شكل هندسي واضح)", en: "Regular" } },
      { value: "minor", label: { ar: "لا انتظام بسيط", en: "Minor irregularity" } },
      { value: "major", label: { ar: "لا انتظام كبير (فواصل، انحرافات)", en: "Major irregularity" } }
    ],
    q: { ar: "الانتظام الإنشائي", en: "Structural regularity" },
    explain: {
      ar: "الانتظام يقلل من تركيز الإجهادات ويزيد من كفاءة توزيع الأحمال.",
      en: "Regularity reduces stress concentration and improves load distribution."
    },
    impact: {
      ar: "اللا انتظام يزيد احتمال حدوث انهيار محلي أو تذبذب قوي أثناء الزلزال.",
      en: "Irregularity increases risk of local collapse or strong vibration during earthquakes."
    }
  },
  {
    id: "softStory",
    points: { low: 0, mid: 3, high: 5 },
    options: [
      { value: "no", label: { ar: "لا يوجد طابق لين", en: "No soft story" } },
      { value: "possible", label: { ar: "محتمل (فتحات كبيرة/محلات)", en: "Possible (large openings)" } },
      { value: "yes", label: { ar: "نعم يوجد طابق لين", en: "Yes, soft story exists" } }
    ],
    q: { ar: "وجود طابق لين (Soft Story)", en: "Soft story presence" },
    explain: {
      ar: "الطابق اللين هو طابق ذو صلابة منخفضة نسبيًا مقارنة بالأعلى (مثلاً محلات كبيرة).",
      en: "Soft story is a level with significantly lower stiffness (e.g., large shop openings)."
    },
    impact: {
      ar: "يزيد احتمال انهيار الطابق السفلي خلال الزلزال.",
      en: "Increases risk of collapse of lower story during earthquake."
    }
  },
  {
    id: "shearCracks",
    points: { low: 0, mid: 3, high: 5 },
    options: [
      { value: "none", label: { ar: "لا توجد شقوق خطيرة", en: "No serious cracks" } },
      { value: "some", label: { ar: "شقوق صغيرة/سطحية", en: "Small/surface cracks" } },
      { value: "severe", label: { ar: "شقوق واسعة/متصلة أو انحرافات", en: "Severe cracks / distortions" } }
    ],
    q: { ar: "وجود شقوق/تدهور واضح", en: "Cracks / visible deterioration" },
    explain: {
      ar: "شقوق القص أو التصدعات الكبيرة تدل على إجهادات عالية أو ضعف في التسليح.",
      en: "Shear cracks or large cracks indicate high stress or weak reinforcement."
    },
    impact: {
      ar: "تزيد من احتمال فقدان القدرة التحملية في الأعمدة أو الكمرات.",
      en: "Increases risk of losing load capacity in columns/beams."
    }
  },
  {
    id: "columnSpacing",
    points: { low: 0, mid: 2, high: 4 },
    options: [
      { value: "good", label: { ar: "توزيع أعمدة جيد (مسافات منتظمة)", en: "Good column distribution" } },
      { value: "uneven", label: { ar: "توزيع غير منتظم", en: "Uneven distribution" } },
      { value: "sparse", label: { ar: "أعمدة قليلة/مسافات كبيرة", en: "Sparse columns" } }
    ],
    q: { ar: "توزيع الأعمدة", en: "Column distribution" },
    explain: {
      ar: "توزيع الأعمدة يؤثر على قدرة المبنى على مقاومة الأحمال الأفقية.",
      en: "Column distribution affects the building's ability to resist lateral loads."
    },
    impact: {
      ar: "التوزيع السيء يزيد من تركيز الأحمال ويزيد احتمالية الانهيار.",
      en: "Poor distribution increases load concentration and collapse risk."
    }
  },
  {
    id: "beamDepth",
    points: { low: 0, mid: 1, high: 3 },
    options: [
      { value: "adequate", label: { ar: "عمق كمرات مناسب", en: "Adequate beam depth" } },
      { value: "low", label: { ar: "عمق قليل نسبيًا", en: "Low depth" } },
      { value: "veryLow", label: { ar: "عمق صغير جدًا", en: "Very low depth" } }
    ],
    q: { ar: "عمق الكمرات (Beam Depth)", en: "Beam depth" },
    explain: {
      ar: "الكمرات العميقة عادةً أفضل في مقاومة الانحناء والقص.",
      en: "Deeper beams usually resist bending and shear better."
    },
    impact: {
      ar: "العمق القليل يزيد احتمال فشل القص أو الانحناء.",
      en: "Low depth increases risk of shear or bending failure."
    }
  },
  {
    id: "rebarExposure",
    points: { low: 0, mid: 2, high: 4 },
    options: [
      { value: "no", label: { ar: "لا يوجد تعرض حديد", en: "No exposed rebar" } },
      { value: "minor", label: { ar: "تعرض بسيط", en: "Minor exposure" } },
      { value: "severe", label: { ar: "تعرض واضح/صدأ شديد", en: "Severe exposure / rust" } }
    ],
    q: { ar: "تعرض الحديد/الصدأ", en: "Rebar exposure / corrosion" },
    explain: {
      ar: "تعرض الحديد للصدأ يقلل من مقاومته ويزيد خطر التآكل.",
      en: "Corrosion reduces steel strength and increases deterioration."
    },
    impact: {
      ar: "يقلل قدرة العناصر الخرسانية على التحمل ويزيد خطر الفشل.",
      en: "Reduces element capacity and increases failure risk."
    }
  },
  {
    id: "foundation",
    points: { low: 0, mid: 2, high: 4 },
    options: [
      { value: "good", label: { ar: "أساس قوي ومناسب", en: "Good foundation" } },
      { value: "unknown", label: { ar: "غير معروف/مشتبه", en: "Unknown / suspected issues" } },
      { value: "poor", label: { ar: "أساس ضعيف/تصدعات", en: "Poor foundation / cracks" } }
    ],
    q: { ar: "حالة الأساس", en: "Foundation condition" },
    explain: {
      ar: "الأساس هو نقطة انتقال الأحمال إلى الأرض، وأي تدهور يؤثر على المبنى ككل.",
      en: "Foundation transfers loads to soil; deterioration affects the whole building."
    },
    impact: {
      ar: "تدهور الأساس يزيد خطر هبوط أو انحناء أو انهيار.",
      en: "Foundation issues increase settlement or collapse risk."
    }
  },
  {
    id: "waterDamage",
    points: { low: 0, mid: 2, high: 4 },
    options: [
      { value: "none", label: { ar: "لا يوجد تسربات", en: "No water damage" } },
      { value: "some", label: { ar: "تسربات بسيطة", en: "Minor leaks" } },
      { value: "severe", label: { ar: "تسربات كبيرة/تآكل", en: "Severe leaks / damage" } }
    ],
    q: { ar: "تسربات/رطوبة", en: "Water leaks / moisture" },
    explain: {
      ar: "الماء يضعف الخرسانة ويسبب تآكل الحديد مع الوقت.",
      en: "Water weakens concrete and corrodes steel over time."
    },
    impact: {
      ar: "يزيد تدهور العناصر ويقلل قدرة التحمل.",
      en: "Increases deterioration and reduces load capacity."
    }
  },
  {
    id: "floorDiaphragm",
    points: { low: 0, mid: 2, high: 4 },
    options: [
      { value: "rigid", label: { ar: "أرضية/سقف صلب (Diaphragm)", en: "Rigid floor/roof" } },
      { value: "semi", label: { ar: "نصف صلب", en: "Semi-rigid" } },
      { value: "flexible", label: { ar: "مرن جدًا", en: "Flexible" } }
    ],
    q: { ar: "صلابة السقف/الأرضية (Diaphragm)", en: "Floor/roof diaphragm stiffness" },
    explain: {
      ar: "السقف الصلب يوزع الأحمال الجانبية بشكل أفضل على الأعمدة والجدران.",
      en: "Rigid diaphragm distributes lateral loads better."
    },
    impact: {
      ar: "السقف المرن يزيد تركيز الأحمال ويزيد احتمال الانهيار.",
      en: "Flexible diaphragm increases load concentration and collapse risk."
    }
  },
  {
    id: "retrofitting",
    points: { low: 0, mid: 1, high: 3 },
    options: [
      { value: "none", label: { ar: "لا يوجد تدعيم", en: "No retrofitting" } },
      { value: "partial", label: { ar: "تدعيم جزئي", en: "Partial retrofitting" } },
      { value: "full", label: { ar: "تدعيم كامل/معتمد", en: "Full retrofitting" } }
    ],
    q: { ar: "هل تم تدعيم المبنى؟", en: "Has the building been retrofitted?" },
    explain: {
      ar: "التدعيم يقلل المخاطر إذا تم وفق معايير هندسية صحيحة.",
      en: "Retrofitting reduces risk if done according to engineering standards."
    },
    impact: {
      ar: "التدعيم الكامل يقلل المخاطر بشكل كبير.",
      en: "Full retrofitting significantly reduces risk."
    }
  },
  {
    id: "storyCount",
    points: { low: 0, mid: 1, high: 2 },
    options: [
      { value: "low", label: { ar: "1-3 طوابق", en: "1-3 stories" } },
      { value: "mid", label: { ar: "4-7 طوابق", en: "4-7 stories" } },
      { value: "high", label: { ar: "8+ طوابق", en: "8+ stories" } }
    ],
    q: { ar: "عدد الطوابق", en: "Number of stories" },
    explain: {
      ar: "كلما زاد عدد الطوابق زادت الأحمال الأفقية والقص.",
      en: "More stories increase lateral loads and shear demands."
    },
    impact: {
      ar: "يزيد احتمال حدوث إجهادات أعلى في الأعمدة والجدران.",
      en: "Increases stress on columns and walls."
    }
  },
  {
    id: "infills",
    points: { low: 0, mid: 1, high: 3 },
    options: [
      { value: "consistent", label: { ar: "إغلاقات متسقة (Infills)", en: "Consistent infills" } },
      { value: "mixed", label: { ar: "إغلاقات مختلطة", en: "Mixed infills" } },
      { value: "none", label: { ar: "لا يوجد/غير متسق", en: "None/inconsistent" } }
    ],
    q: { ar: "إغلاقات الجدران (Infills)", en: "Wall infills" },
    explain: {
      ar: "الإغلاقات غير المتسقة تسبب اختلافات في الصلابة بين الطوابق.",
      en: "Inconsistent infills create stiffness irregularities."
    },
    impact: {
      ar: "يزيد عدم الانتظام ويؤثر على توزيع الأحمال.",
      en: "Increases irregularity and affects load distribution."
    }
  },
  {
    id: "beamColumnJoints",
    points: { low: 0, mid: 2, high: 4 },
    options: [
      { value: "good", label: { ar: "وصلات جيدة/ممتازة", en: "Good joints" } },
      { value: "weak", label: { ar: "وصلات ضعيفة/مشتبه", en: "Weak/suspected joints" } },
      { value: "poor", label: { ar: "وصلات سيئة/تآكل", en: "Poor joints" } }
    ],
    q: { ar: "حالة وصلات الكمرات بالأعمدة", en: "Beam-column joint condition" },
    explain: {
      ar: "الوصلة هي نقطة انتقال القوى، وأي ضعف فيها قد يسبب فشلًا سريعًا.",
      en: "Joint is a load transfer point; weakness can cause sudden failure."
    },
    impact: {
      ar: "ضعف الوصلات يزيد خطر انهيار الهيكل.",
      en: "Weak joints increase collapse risk."
    }
  },
  {
    id: "roofType",
    points: { low: 0, mid: 1, high: 2 },
    options: [
      { value: "slab", label: { ar: "سقف بلاطة خرسانية", en: "Concrete slab roof" } },
      { value: "light", label: { ar: "سقف خفيف (معدن/خشب)", en: "Light roof (metal/wood)" } },
      { value: "heavy", label: { ar: "سقف ثقيل (حجر/طابوق)", en: "Heavy roof (stone/brick)" } }
    ],
    q: { ar: "نوع السقف", en: "Roof type" },
    explain: {
      ar: "الأسقف الثقيلة تزيد الأحمال على الأعمدة والجدران أثناء الزلزال.",
      en: "Heavy roofs increase loads on columns/walls during earthquakes."
    },
    impact: {
      ar: "يزيد احتمال انهيار بسبب وزن أعلى وتذبذب أكبر.",
      en: "Increases collapse risk due to higher mass and vibration."
    }
  },
  {
    id: "parkingBasement",
    points: { low: 0, mid: 2, high: 4 },
    options: [
      { value: "no", label: { ar: "لا يوجد قبو/موقف", en: "No basement/parking" } },
      { value: "small", label: { ar: "قبو صغير", en: "Small basement" } },
      { value: "large", label: { ar: "قبو كبير/مواقف واسعة", en: "Large basement/parking" } }
    ],
    q: { ar: "وجود قبو/موقف", en: "Basement/parking presence" },
    explain: {
      ar: "الأقبية الكبيرة قد تكون طوابق لينة أو تحتاج تدعيم إضافي.",
      en: "Large basements can be soft stories or need extra reinforcement."
    },
    impact: {
      ar: "يزيد خطر الانهيار في الطابق السفلي.",
      en: "Increases risk of collapse in lower story."
    }
  },
  {
    id: "overload",
    points: { low: 0, mid: 2, high: 4 },
    options: [
      { value: "no", label: { ar: "لا يوجد تحميل زائد", en: "No overload" } },
      { value: "some", label: { ar: "تحميل زائد بسيط", en: "Minor overload" } },
      { value: "high", label: { ar: "تحميل زائد كبير", en: "High overload" } }
    ],
    q: { ar: "وجود تحميل زائد (إضافات/تغير استخدام)", en: "Overload (additions/change of use)" },
    explain: {
      ar: "إضافة طوابق أو تغيير الاستخدام يزيد الأحمال على الهيكل.",
      en: "Adding floors or changing use increases structural loads."
    },
    impact: {
      ar: "يزيد إجهاد الأعمدة والكمرات ويقلل عامل الأمان.",
      en: "Increases stress and reduces safety margin."
    }
  },
  {
    id: "beamCrackType",
    points: { low: 0, mid: 2, high: 4 },
    options: [
      { value: "none", label: { ar: "لا توجد شقوق في الكمرات", en: "No beam cracks" } },
      { value: "hairline", label: { ar: "شقوق دقيقة", en: "Hairline cracks" } },
      { value: "wide", label: { ar: "شقوق واسعة/أفقية", en: "Wide/horizontal cracks" } }
    ],
    q: { ar: "شقوق الكمرات", en: "Beam cracks" },
    explain: {
      ar: "شقوق أفقية أو واسعة قد تشير إلى قص/انحناء مفرط أو ضعف تسليح.",
      en: "Wide/horizontal cracks may indicate shear/bending failure or weak reinforcement."
    },
    impact: {
      ar: "تزيد خطر فشل القص أو الانحناء في الكمرات.",
      en: "Increases risk of shear or bending failure."
    }
  },
  {
    id: "columnCrackType",
    points: { low: 0, mid: 2, high: 4 },
    options: [
      { value: "none", label: { ar: "لا توجد شقوق في الأعمدة", en: "No column cracks" } },
      { value: "vertical", label: { ar: "شقوق رأسية صغيرة", en: "Small vertical cracks" } },
      { value: "shear", label: { ar: "شقوق قص/مائلة واسعة", en: "Wide shear/diagonal cracks" } }
    ],
    q: { ar: "شقوق الأعمدة", en: "Column cracks" },
    explain: {
      ar: "شقوق القص في الأعمدة هي من أخطر علامات الفشل.",
      en: "Shear cracks in columns are a serious failure sign."
    },
    impact: {
      ar: "تزيد احتمال انهيار الأعمدة أثناء الزلزال.",
      en: "Increases risk of column collapse."
    }
  },
  {
    id: "dampness",
    points: { low: 0, mid: 1, high: 3 },
    options: [
      { value: "none", label: { ar: "لا يوجد رطوبة", en: "No dampness" } },
      { value: "some", label: { ar: "رطوبة بسيطة", en: "Minor dampness" } },
      { value: "high", label: { ar: "رطوبة قوية/تسربات مستمرة", en: "Strong dampness / leaks" } }
    ],
    q: { ar: "الرطوبة داخل المبنى", en: "Indoor dampness" },
    explain: {
      ar: "الرطوبة تؤثر على الخرسانة وتزيد تآكل الحديد.",
      en: "Dampness affects concrete and increases steel corrosion."
    },
    impact: {
      ar: "تقلل مقاومة العناصر وتزيد مخاطر التدهور.",
      en: "Reduces element capacity and increases deterioration."
    }
  },
  {
    id: "earthquakeHistory",
    points: { low: 0, mid: 2, high: 4 },
    options: [
      { value: "none", label: { ar: "لم يتعرض لهزات قوية", en: "No strong shaking history" } },
      { value: "minor", label: { ar: "هزات خفيفة", en: "Minor shaking" } },
      { value: "major", label: { ar: "هزات قوية/تأثير واضح", en: "Strong shaking / visible impact" } }
    ],
    q: { ar: "تاريخ المبنى مع الزلازل", en: "Earthquake history" },
    explain: {
      ar: "التعرض لهزات قوية قد يسبب تدهورًا غير مرئي في العناصر.",
      en: "Strong shaking can cause hidden deterioration."
    },
    impact: {
      ar: "يزيد احتمال وجود تلف داخلي وخطر انهيار.",
      en: "Increases risk of hidden damage and collapse."
    }
  },
  {
    id: "occupancy",
    points: { low: 0, mid: 1, high: 2 },
    options: [
      { value: "residential", label: { ar: "سكني", en: "Residential" } },
      { value: "mixed", label: { ar: "مختلط (سكني + تجاري)", en: "Mixed (residential+commercial)" } },
      { value: "commercial", label: { ar: "تجاري/مؤسسات", en: "Commercial/Institutional" } }
    ],
    q: { ar: "نوع الاستخدام", en: "Occupancy type" },
    explain: {
      ar: "الاستخدام التجاري قد يزيد التحميل ويقلل مرونة التعديل.",
      en: "Commercial use may increase load and reduce flexibility."
    },
    impact: {
      ar: "يزيد احتمال التحميل الزائد وارتفاع المخاطر.",
      en: "Increases overload risk and hazards."
    }
  },
  {
    id: "maintenance",
    points: { low: 0, mid: 1, high: 3 },
    options: [
      { value: "good", label: { ar: "صيانة جيدة", en: "Good maintenance" } },
      { value: "poor", label: { ar: "صيانة ضعيفة", en: "Poor maintenance" } },
      { value: "none", label: { ar: "لا توجد صيانة", en: "No maintenance" } }
    ],
    q: { ar: "حالة الصيانة", en: "Maintenance condition" },
    explain: {
      ar: "الصيانة تقلل من التدهور وتطيل عمر المبنى.",
      en: "Maintenance reduces deterioration and extends building life."
    },
    impact: {
      ar: "الصيانة الضعيفة تزيد خطر التدهور السريع.",
      en: "Poor maintenance increases rapid deterioration risk."
    }
  },
  {
    id: "columnsSize",
    points: { low: 0, mid: 2, high: 4 },
    options: [
      { value: "adequate", label: { ar: "أعمدة بأبعاد مناسبة", en: "Adequate column size" } },
      { value: "small", label: { ar: "أعمدة صغيرة نسبيًا", en: "Relatively small columns" } },
      { value: "verySmall", label: { ar: "أعمدة صغيرة جدًا", en: "Very small columns" } }
    ],
    q: { ar: "أبعاد الأعمدة", en: "Column dimensions" },
    explain: {
      ar: "الأعمدة الصغيرة قد لا تتحمل القص والانحناء المطلوب في الزلازل.",
      en: "Small columns may not resist required shear/bending in earthquakes."
    },
    impact: {
      ar: "يزيد خطر فشل الأعمدة وانهيار الهيكل.",
      en: "Increases column failure and collapse risk."
    }
  },
  {
    id: "slope",
    points: { low: 0, mid: 2, high: 4 },
    options: [
      { value: "flat", label: { ar: "أرض مستوية", en: "Flat ground" } },
      { value: "slight", label: { ar: "انحدار بسيط", en: "Slight slope" } },
      { value: "steep", label: { ar: "انحدار شديد", en: "Steep slope" } }
    ],
    q: { ar: "نوع الأرض/الانحدار", en: "Ground type / slope" },
    explain: {
      ar: "الانحدار الشديد قد يسبب انزلاق أرضي أو ضعف في الأساس.",
      en: "Steep slopes can cause landslides or foundation issues."
    },
    impact: {
      ar: "يزيد خطر هبوط الأساس أو انزلاق التربة.",
      en: "Increases foundation settlement or soil slip risk."
    }
  },
  {
    id: "constructionQuality",
    points: { low: 0, mid: 2, high: 4 },
    options: [
      { value: "good", label: { ar: "جودة بناء جيدة", en: "Good construction quality" } },
      { value: "average", label: { ar: "جودة متوسطة", en: "Average quality" } },
      { value: "poor", label: { ar: "جودة ضعيفة", en: "Poor quality" } }
    ],
    q: { ar: "جودة التنفيذ", en: "Construction quality" },
    explain: {
      ar: "التنفيذ الجيد يضمن تماسك العناصر وتسليح صحيح.",
      en: "Good execution ensures proper reinforcement and element integrity."
    },
    impact: {
      ar: "الجودة الضعيفة تزيد احتمالية عيوب إنشائية وخطر انهيار.",
      en: "Poor quality increases construction defects and collapse risk."
    }
  },
  {
    id: "doorsWindows",
    points: { low: 0, mid: 1, high: 2 },
    options: [
      { value: "balanced", label: { ar: "فتحات متوازنة", en: "Balanced openings" } },
      { value: "large", label: { ar: "فتحات كبيرة/محلات", en: "Large openings/shops" } },
      { value: "many", label: { ar: "فتحات كثيرة غير متوازنة", en: "Many unbalanced openings" } }
    ],
    q: { ar: "حجم/توزيع الفتحات", en: "Openings size/distribution" },
    explain: {
      ar: "الفتحات الكبيرة تقلل من صلابة الجدران وتزيد عدم الانتظام.",
      en: "Large openings reduce wall stiffness and increase irregularity."
    },
    impact: {
      ar: "يزيد خطر الانهيار في الطوابق التي بها فتحات كبيرة.",
      en: "Increases collapse risk in floors with large openings."
    }
  },
  {
    id: "staircase",
    points: { low: 0, mid: 1, high: 2 },
    options: [
      { value: "good", label: { ar: "سلم متصل ومتين", en: "Solid connected staircase" } },
      { value: "weak", label: { ar: "سلم ضعيف/غير متصل جيدًا", en: "Weak/unconnected staircase" } },
      { value: "none", label: { ar: "لا يوجد سلم مناسب", en: "No proper staircase" } }
    ],
    q: { ar: "حالة السلم/المخارج", en: "Staircase / exits condition" },
    explain: {
      ar: "السلم جزء مهم للإنقاذ ويعكس جودة التنفيذ.",
      en: "Stairs are essential for evacuation and reflect construction quality."
    },
    impact: {
      ar: "السلم الضعيف يزيد خطر الإصابة وصعوبة الإخلاء.",
      en: "Weak stairs increase injury risk and evacuation difficulty."
    }
  },
  {
    id: "storageOnRoof",
    points: { low: 0, mid: 2, high: 4 },
    options: [
      { value: "none", label: { ar: "لا يوجد تحميل على السطح", en: "No roof storage" } },
      { value: "some", label: { ar: "تخزين خفيف", en: "Light storage" } },
      { value: "heavy", label: { ar: "تخزين ثقيل/ماء/أشياء كبيرة", en: "Heavy storage" } }
    ],
    q: { ar: "تحميل على السطح", en: "Roof storage / load" },
    explain: {
      ar: "التحميل الثقيل يزيد الكتلة ويزيد تأثير الزلزال.",
      en: "Heavy roof load increases mass and seismic impact."
    },
    impact: {
      ar: "يزيد الاهتزاز ويقلل السلامة أثناء الزلزال.",
      en: "Increases vibration and reduces safety."
    }
  }
];

// scoring
function calculateScore(answers) {
  let total = 0;
  for (const q of QUESTIONS) {
    const val = answers[q.id];
    if (!val) continue;
    total += q.points[val] ?? 0;
  }
  return total;
}

function getResult(score) {
  if (score <= 20) return { level: "good", label: LANG[lang].safe };
  if (score <= 45) return { level: "warn", label: LANG[lang].review };
  return { level: "bad", label: LANG[lang].danger };
}

function getRecommendations(level) {
  if (level === "good") {
    return {
      ar: "المبنى يبدو آمنًا مبدئيًا. استمر في الصيانة الدورية وراقب الشقوق أو التغيرات.",
      en: "The building appears safe for now. Continue regular maintenance and monitor cracks or changes."
    };
  }
  if (level === "warn") {
    return {
      ar: "يوجد مؤشرات تستدعي مراجعة هندسية. يفضل فحص ميداني وتقييم مفصل من مكتب هندسي.",
      en: "There are indicators that require an engineering review. A field inspection and detailed evaluation are recommended."
    };
  }
  return {
    ar: "المبنى في خطر مرتفع. يجب التوقف عن الاستخدام وتقييم عاجل من مهندس مختص وتدعيم فوري إذا لزم.",
    en: "The building is at high risk. Stop use and get urgent assessment by a qualified engineer and retrofit if needed."
  };
}

let lang = "ar";

function App() {
  const [state, setState] = React.useState(() => {
    const saved = localStorage.getItem("jsrai_state");
    return saved ? JSON.parse(saved) : { answers: {}, showResult: false };
  });

  React.useEffect(() => {
    localStorage.setItem("jsrai_state", JSON.stringify(state));
  }, [state]);

  const t = LANG[lang];

  const score = calculateScore(state.answers);
  const result = getResult(score);
  const rec = getRecommendations(result.level);

  function setAnswer(qId, value) {
    setState(prev => ({
      ...prev,
      answers: { ...prev.answers, [qId]: value }
    }));
  }

  function reset() {
    setState({ answers: {}, showResult: false });
  }

  function downloadPDF() {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text(lang === "ar" ? "تقرير تقييم السلامة الإنشائية" : "Structural Safety Report", 14, 20);
    doc.setFontSize(12);
    doc.text(lang === "ar" ? "ملخص" : "Summary", 14, 34);
    doc.text(
      lang === "ar"
        ? `النتيجة: ${result.label}`
        : `Result: ${result.label}`,
      14,
      42
    );
    doc.text(
      lang === "ar"
        ? `الدرجة: ${score}`
        : `Score: ${score}`,
      14,
      50
    );
    doc.text(lang === "ar" ? "توصيات:" : "Recommendations:", 14, 62);
    doc.setFontSize(11);
    doc.text(doc.splitTextToSize(rec[lang], 180), 14, 70);

    doc.setFontSize(10);
    doc.text(
      lang === "ar"
        ? "هذا التقرير لا يعد تقريرًا هندسيًا رسميًا ولا يغني عن الفحص الموقعي."
        : "This report is not an official engineering report and does not replace an on-site inspection.",
      14,
      260
    );

    doc.save("JSRAI_Report.pdf");
  }

  return e("div", { className: "container" }, [
    e("div", { className: "header", key: "header" }, [
      e("div", { className: "brand" }, [
        e("h1", { key: "h1" }, t.title),
        e("p", { key: "p" }, t.subtitle)
      ]),
      e("div", { className: "langs" }, [
        e(
          "button",
          {
            key: "langBtn",
            className: "btn",
            onClick: () => {
              lang = lang === "ar" ? "en" : "ar";
              setState(prev => ({ ...prev })); // force rerender
            }
          },
          t.switch
        )
      ])
    ]),

    e("div", { className: "card", key: "intro" }, [
      e("div", { className: "topBar", key: "topBar" }, [
        e("div", { key: "note" }, [
          e("h2", { key: "h2" }, t.section),
          e("p", { className: "smallNote", key: "noteText" }, t.note)
        ]),
        e("div", { key: "actions" }, [
          e(
            "button",
            {
              key: "start",
              className: "btn btnPrimary",
              onClick: () => setState(prev => ({ ...prev, showResult: true }))
            },
            t.start
          ),
          e(
            "button",
            {
              key: "reset",
              className: "btn",
              onClick: reset
            },
            t.reset
          )
        ])
      ])
    ]),

    e("div", { key: "questions" }, [
      ...QUESTIONS.map((q, idx) => {
        const selected = state.answers[q.id];
        return e("div", { className: "card question", key: q.id }, [
          e("div", { className: "qTitle", key: "title" }, [
            e("h3", { key: "h3" }, `${idx + 1}. ${q.q[lang]}`),
            e("span", { key: "span" }, t.q)
          ]),
          e("div", { className: "qExplain", key: "exp" }, [
            e("div", { key: "why" }, `${t.explain}: ${q.explain[lang]}`),
            e("div", { key: "impact" }, `${t.impact}: ${q.impact[lang]}`)
          ]),
          e("div", { className: "options", key: "opts" }, [
            ...q.options.map(opt =>
              e(
                "label",
                { className: "radio", key: opt.value },
                [
                  e("input", {
                    type: "radio",
                    name: q.id,
                    value: opt.value,
                    checked: selected === opt.value,
                    onChange: () => setAnswer(q.id, opt.value)
                  }),
                  e("span", null, opt.label[lang])
                ]
              )
            )
          ])
        ]);
      })
    ]),

    state.showResult &&
      e("div", { className: "card result", key: "result" }, [
        e("div", { className: "resultHeader", key: "header" }, [
          e("h2", { key: "title" }, t.resultTitle),
          e(
            "span",
            {
              key: "badge",
              className: `badge ${result.level}`
            },
            result.label
          )
        ]),

        e("div", { className: "resultBox", key: "box1" }, [
          e("h3", { key: "r1" }, lang === "ar" ? "الدرجة" : "Score"),
          e("p", { key: "p1" }, `${score}`)
        ]),

        e("div", { className: "resultBox", key: "box2" }, [
          e("h3", { key: "r2" }, lang === "ar" ? "تفسير مختصر" : "Summary"),
          e("p", { key: "p2" }, rec[lang])
        ]),

        e("div", { className: "resultBox", key: "box3" }, [
          e("h3", { key: "r3" }, lang === "ar" ? "التوصيات" : "Recommendations"),
          e(
            "p",
            { key: "p3" },
            lang === "ar"
              ? "1) راجع مكتب هندسي معتمد للفحص الميداني.\n2) إذا كانت النتيجة عالية، توقف عن الاستخدام حتى يتم التقييم.\n3) قم بتوثيق الشقوق والصور وشاركها مع المهندس."
              : "1) Consult a certified engineering office for field inspection.\n2) If high risk, stop using the building until evaluation.\n3) Document cracks/photos and share with the engineer."
          )
        ]),

        e("div", { key: "actions2", style: { display: "flex", gap: "10px", flexWrap: "wrap" } }, [
          e(
            "button",
            { key: "pdf", className: "btn btnPrimary", onClick: downloadPDF },
            t.download
          ),
          e(
            "button",
            {
              key: "reset2",
              className: "btn",
              onClick: reset
            },
            t.reset
          )
        ])
      ]),

    e("div", { className: "footer", key: "footer" }, [
      e("p", { key: "p" }, t.footer),
      e("div", { key: "links" }, [
        e("a", { key: "privacy", href: "privacy.html" }, t.privacy),
        " • ",
        e("a", { key: "disclaimer", href: "disclaimer.html" }, t.disclaimer)
      ])
    ])
  ]);
}

// jsPDF via CDN
const script = document.createElement("script");
script.src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
script.onload = () => {
  window.jsPDF = window.jspdf.jsPDF;
  ReactDOM.render(e(App), document.getElementById("root"));
};
document.head.appendChild(script);
