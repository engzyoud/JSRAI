const { useState, useEffect } = React;
const { jsPDF } = window.jspdf;

const translations = {
  ar: {
    title: "أداة تقييم السلامة الإنشائية - الأردن",
    tagline: "تقييم أولي للسلامة الإنشائية (غير بديل للفحص الهندسي)",
    bismillah: "بسم الله الرحمن الرحيم",
    nav: {
      home: "الرئيسية",
      about: "عن الأداة",
      method: "كيف تعمل",
      assessment: "التقييم",
      result: "النتيجة",
    },
    home: {
      h2: "تقييم سريع واحترافي لسلامة المبنى",
      p: "هذه الأداة تقدّم تقييمًا أوليًا بناءً على معايير ACI 318 و ASCE 7. الأداة لا تغني عن الفحص الموقعي أو التقرير الهندسي الرسمي.",
      start: "ابدأ التقييم",
      how: "كيف تعمل الأداة؟",
      note: "النتيجة مؤشر أولي فقط. لأي شكّ أو خطر محتمل، الرجاء مراجعة مهندس مختص."
    },
    about: {
      h2: "عن الأداة",
      p1: "هذه الأداة موجهة للعامة وللمهندسين، وتهدف إلى رفع الوعي وتقديم مؤشر خطر أولي.",
      p2: "الأداة مبنية على 30 سؤالًا دقيقة تغطي العمر، النظام الإنشائي، الانتظام، الديمومة، الشقوق، ومؤشرات الزلازل.",
      p3: "كل سؤال له سبب علمي واضح، وتفسير مبسط تحت السؤال لتسهيل الفهم."
    },
    method: {
      h2: "كيف تعمل الأداة؟",
      steps: [
        {
          title: "جمع المعلومات",
          desc: "تجيب على 30 سؤالًا مختارة بعناية. كل إجابة لها وزن علمي."
        },
        {
          title: "حساب النقاط",
          desc: "تجمع النقاط بناءً على الإجابات. النقاط تعكس مؤشرات الخطر."
        },
        {
          title: "تصنيف النتيجة",
          desc: "يتم تصنيف النتيجة إلى 3 مستويات: آمن، يحتاج مراجعة، خطر."
        },
        {
          title: "توصيات عملية",
          desc: "تظهر توصيات واضحة ومبسطة دون تخويف، مع توجيه لخطوة التالية."
        }
      ],
      note: "الأداة تقييم أولي فقط ولا تغني عن الفحص الموقعي أو التقرير الهندسي."
    },
    assessment: {
      h2: "التقييم (30 سؤال)",
      progress: "التقدم",
      next: "التالي",
      prev: "السابق",
      finish: "عرض النتيجة"
    },
    result: {
      h2: "النتيجة النهائية",
      safe: "🟢 آمن حاليًا",
      review: "🟡 يحتاج مراجعة هندسية",
      danger: "🔴 خطر مرتفع / إجراء فوري",
      desc_safe: "المبنى يبدو ضمن نطاق آمن وفقًا للإجابات. مع ذلك، إذا لاحظت شقوق جديدة أو تغيرات، قم بفحص هندسي.",
      desc_review: "يوجد مؤشرات قد تحتاج فحصًا هندسيًا قريبًا. يفضل مراجعة مكتب هندسي لتقييم ميداني وتحديد الإجراءات.",
      desc_danger: "هناك مؤشرات قوية لوجود خطر محتمل. يجب مراجعة مهندس مختص فورًا وعدم الإقامة في حالة وجود شقوق كبيرة أو تشققات واسعة.",
      rec_title: "التوصيات العملية (بدون تخويف)",
      rec_safe: [
        "تابع الحالة كل 6 أشهر (خصوصًا بعد أمطار أو زلازل صغيرة).",
        "راقب أي شقوق جديدة أو اتساع في الشقوق الحالية.",
        "إذا ظهرت علامات جديدة، قم بمراجعة مهندس مختص."
      ],
      rec_review: [
        "حدد موعد فحص ميداني مع مكتب هندسي خلال 2-4 أسابيع.",
        "قم بتوثيق الشقوق (صور + قياسات) لتسهل التقييم.",
        "راجع سلامة الأعمدة والجدران الحاملة من الداخل والخارج."
      ],
      rec_danger: [
        "توقف عن استخدام المبنى في أقرب وقت ممكن إذا كانت الشقوق كبيرة أو هناك ميل واضح.",
        "اتصل بمهندس مختص فورًا لتقييم شامل وتحديد الإجراءات.",
        "لا تقم بأي تعديلات أو فتحات قبل التقييم الهندسي."
      ],
      note: "هذا التقرير مبدئي ولا يغني عن الفحص الموقعي أو التقرير الهندسي الرسمي.",
      download: "تحميل التقرير PDF",
      restart: "إعادة التقييم"
    },
    footer: {
      dev: "Developed by Eng Suhaib Alzyoud",
      privacy: "سياسة الخصوصية",
      disclaimer: "إخلاء المسؤولية"
    }
  },

  en: {
    title: "Structural Safety Assessment Tool - Jordan",
    tagline: "Preliminary assessment (not a substitute for engineering inspection)",
    bismillah: "In the name of Allah, the Most Merciful, the Most Compassionate",
    nav: {
      home: "Home",
      about: "About",
      method: "How It Works",
      assessment: "Assessment",
      result: "Result",
    },
    home: {
      h2: "Quick & Professional Building Safety Assessment",
      p: "This tool provides a preliminary assessment based on ACI 318 and ASCE 7. It does not replace site inspection or official engineering reports.",
      start: "Start Assessment",
      how: "How it works",
      note: "The result is an initial indicator only. If you suspect danger, consult a qualified engineer."
    },
    about: {
      h2: "About the Tool",
      p1: "Designed for the public and engineers, this tool aims to raise awareness and provide an initial risk indicator.",
      p2: "It is built on 30 precise questions covering age, structural system, regularity, durability, cracks, and seismic indicators.",
      p3: "Each question has a clear scientific basis and a simple explanation to ease understanding."
    },
    method: {
      h2: "How It Works",
      steps: [
        {
          title: "Data Collection",
          desc: "You answer 30 carefully selected questions. Each answer has a scientific weight."
        },
        {
          title: "Score Calculation",
          desc: "Points are summed based on answers. Scores reflect risk indicators."
        },
        {
          title: "Result Classification",
          desc: "The result is classified into 3 levels: Safe, Review, Danger."
        },
        {
          title: "Practical Recommendations",
          desc: "Clear and simple recommendations appear without fear, guiding the next step."
        }
      ],
      note: "This tool is preliminary and does not replace site inspection or official engineering reports."
    },
    assessment: {
      h2: "Assessment (30 Questions)",
      progress: "Progress",
      next: "Next",
      prev: "Previous",
      finish: "Show Result"
    },
    result: {
      h2: "Final Result",
      safe: "🟢 Safe for now",
      review: "🟡 Needs engineering review",
      danger: "🔴 High risk / Immediate action",
      desc_safe: "The building appears within a safe range based on the answers. However, if you notice new cracks or changes, consult an engineer.",
      desc_review: "There are indicators that require a field inspection soon. It is recommended to consult an engineering office for a site assessment and recommendations.",
      desc_danger: "There are strong indicators of potential danger. Consult a qualified engineer immediately and avoid staying in the building if major cracks exist.",
      rec_title: "Practical Recommendations (non-alarming)",
      rec_safe: [
        "Monitor the building every 6 months (especially after rain or minor earthquakes).",
        "Watch for new cracks or widening of existing cracks.",
        "If new signs appear, consult a qualified engineer."
      ],
      rec_review: [
        "Schedule a field inspection with an engineering office within 2-4 weeks.",
        "Document cracks (photos + measurements) to assist assessment.",
        "Review the safety of columns and load-bearing walls."
      ],
      rec_danger: [
        "Stop using the building if major cracks or noticeable tilting exist.",
        "Contact a qualified engineer immediately for a full assessment and actions.",
        "Do not make modifications or openings before engineering evaluation."
      ],
      note: "This report is preliminary and does not replace site inspection or official engineering reports.",
      download: "Download PDF Report",
      restart: "Restart Assessment"
    },
    footer: {
      dev: "Developed by Eng Suhaib Alzyoud",
      privacy: "Privacy Policy",
      disclaimer: "Disclaimer"
    }
  }
};

const questions = [
  // 30 questions (Arabic + English)
  {
    id: 1,
    key: "age",
    q_ar: "عمر المبنى تقريبًا؟",
    q_en: "Approximate building age?",
    options: [
      { value: "under_10", label_ar: "أقل من 10 سنوات", label_en: "Under 10 years", score: 0 },
      { value: "10_30", label_ar: "بين 10 و 30 سنة", label_en: "10–30 years", score: 1 },
      { value: "over_30", label_ar: "أكثر من 30 سنة", label_en: "Over 30 years", score: 2 }
    ],
    explanation_ar: "العمر يؤثر على تآكل الحديد، جودة الخرسانة، وتدهور العناصر الإنشائية.",
    explanation_en: "Age affects steel corrosion, concrete quality, and structural deterioration."
  },
  {
    id: 2,
    key: "structural_system",
    q_ar: "ما هو النظام الإنشائي للمبنى؟",
    q_en: "What is the structural system?",
    options: [
      { value: "rc_frame", label_ar: "إطار خرسانة مسلحة (شائع ومناسب للزلازل)", label_en: "RC frame (common and seismic-appropriate)", score: 0 },
      { value: "shear_wall", label_ar: "جدران قص (مناسب جدًا للزلازل)", label_en: "Shear walls (very good for seismic)", score: 0 },
      { value: "mixed", label_ar: "مختلط (إطار + جدران قص)", label_en: "Mixed (frame + shear walls)", score: 0 },
      { value: "masonry", label_ar: "إنشاءات طوب/حجر (أقل مقاومة للزلازل)", label_en: "Masonry (less seismic-resistant)", score: 2 }
    ],
    explanation_ar: "الأنظمة الطوبية أقل قدرة على مقاومة الزلازل مقارنة بالإطارات والجدران القص.",
    explanation_en: "Masonry systems are less capable of resisting earthquakes compared to frames and shear walls."
  },
  {
    id: 3,
    key: "regularity",
    q_ar: "هل المبنى منتظم في الارتفاع والشكل (بدون تغييرات كبيرة في الطوابق)؟",
    q_en: "Is the building regular in height and shape (no major irregularities)?",
    options: [
      { value: "yes", label_ar: "نعم، منتظم", label_en: "Yes, regular", score: 0 },
      { value: "minor", label_ar: "تغييرات بسيطة", label_en: "Minor irregularities", score: 1 },
      { value: "major", label_ar: "تغييرات كبيرة (مثلاً طابق أقل/أعلى أو انقطاع في الهيكل)", label_en: "Major irregularities", score: 2 }
    ],
    explanation_ar: "الانتظام يقلل تركيز القوى أثناء الزلزال ويزيد من استقرار المبنى.",
    explanation_en: "Regularity reduces force concentration during earthquakes and improves stability."
  },
  {
    id: 4,
    key: "soft_story",
    q_ar: "هل يوجد طابق أرضي مفتوح (مواقف/محلات) بدون جدران حاملة كافية؟",
    q_en: "Is there an open ground floor (parking/shops) with insufficient load-bearing walls?",
    options: [
      { value: "no", label_ar: "لا", label_en: "No", score: 0 },
      { value: "some", label_ar: "بعض الجدران لكن غير كافية", label_en: "Some walls but not enough", score: 1 },
      { value: "yes", label_ar: "نعم، طابق مفتوح واضح", label_en: "Yes, clear open floor", score: 2 }
    ],
    explanation_ar: "الطابق المفتوح يزيد من خطر الانهيار الجانبي بسبب ضعف نقل القوى.",
    explanation_en: "Open ground floors increase lateral collapse risk due to weak force transfer."
  },
  {
    id: 5,
    key: "cracks",
    q_ar: "هل توجد شقوق واضحة في الأعمدة أو الجدران الحاملة؟",
    q_en: "Are there visible cracks in columns or load-bearing walls?",
    options: [
      { value: "none", label_ar: "لا توجد شقوق واضحة", label_en: "No visible cracks", score: 0 },
      { value: "hairline", label_ar: "شقوق سطحية رفيعة", label_en: "Hairline cracks", score: 1 },
      { value: "wide", label_ar: "شقوق واسعة أو متسعة", label_en: "Wide or expanding cracks", score: 2 }
    ],
    explanation_ar: "الشروخ الواسعة قد تشير إلى إجهاد زائد أو تدهور في العناصر الحاملة.",
    explanation_en: "Wide cracks may indicate excessive stress or deterioration in load-bearing elements."
  },
  {
    id: 6,
    key: "water_damage",
    q_ar: "هل توجد علامات تسرب مياه أو رطوبة في الأعمدة/الجدران؟",
    q_en: "Are there signs of water leakage or moisture in columns/walls?",
    options: [
      { value: "no", label_ar: "لا", label_en: "No", score: 0 },
      { value: "minor", label_ar: "رطوبة بسيطة", label_en: "Minor moisture", score: 1 },
      { value: "major", label_ar: "تسرب واضح أو تآكل", label_en: "Clear leakage or corrosion", score: 2 }
    ],
    explanation_ar: "الرطوبة تؤدي إلى تآكل الحديد وتقليل قوة الخرسانة مع الزمن.",
    explanation_en: "Moisture causes steel corrosion and reduces concrete strength over time."
  },
  {
    id: 7,
    key: "corrosion",
    q_ar: "هل يوجد تآكل ظاهر في حديد التسليح (في الأعمدة/الجدران)؟",
    q_en: "Is there visible corrosion in reinforcement steel?",
    options: [
      { value: "no", label_ar: "لا", label_en: "No", score: 0 },
      { value: "minor", label_ar: "تآكل بسيط", label_en: "Minor corrosion", score: 1 },
      { value: "major", label_ar: "تآكل واضح مع تقشير الخرسانة", label_en: "Major corrosion with spalling", score: 2 }
    ],
    explanation_ar: "تآكل الحديد يقلل قدرة التحمل ويزيد احتمال الفشل في الأعمدة.",
    explanation_en: "Steel corrosion reduces load capacity and increases failure risk in columns."
  },
  {
    id: 8,
    key: "spalling",
    q_ar: "هل يوجد تقشير في الخرسانة (سقوط أجزاء من السطح) في الأعمدة أو الكمرات؟",
    q_en: "Is there concrete spalling (surface pieces falling) in columns or beams?",
    options: [
      { value: "no", label_ar: "لا", label_en: "No", score: 0 },
      { value: "minor", label_ar: "تقشير بسيط", label_en: "Minor spalling", score: 1 },
      { value: "major", label_ar: "تقشير كبير أو مكشوف حديد", label_en: "Major spalling or exposed steel", score: 2 }
    ],
    explanation_ar: "التقشير قد يعني تآكل الحديد أو ضعف في الخرسانة، ويقلل قوة العنصر.",
    explanation_en: "Spalling may indicate steel corrosion or weak concrete, reducing element strength."
  },
  {
    id: 9,
    key: "beam_depth",
    q_ar: "هل الكمرات تبدو نحيفة جدًا مقارنة بفتحها (عمق صغير جدًا)؟",
    q_en: "Are beams very shallow compared to their span (small depth)?",
    options: [
      { value: "no", label_ar: "لا، تبدو مناسبة", label_en: "No, suitable depth", score: 0 },
      { value: "borderline", label_ar: "قريبة من الحد الأدنى", label_en: "Near minimum depth", score: 1 },
      { value: "yes", label_ar: "نحيفة جدًا (قد تؤثر على القص والانحناء)", label_en: "Very shallow (may affect shear/bending)", score: 2 }
    ],
    explanation_ar: "الكمرات النحيفة تزيد احتمال الانحناء المفرط والقص.",
    explanation_en: "Shallow beams increase risk of excessive bending and shear failure."
  },
  {
    id: 10,
    key: "column_size",
    q_ar: "هل الأعمدة تبدو صغيرة جدًا مقارنة بارتفاع المبنى؟",
    q_en: "Are columns very small compared to building height?",
    options: [
      { value: "no", label_ar: "لا، تبدو مناسبة", label_en: "No, suitable size", score: 0 },
      { value: "borderline", label_ar: "قريبة من الحد الأدنى", label_en: "Near minimum size", score: 1 },
      { value: "yes", label_ar: "صغيرة جدًا (قد تؤدي إلى قص/انهيار)", label_en: "Very small (risk of shear/collapse)", score: 2 }
    ],
    explanation_ar: "الأعمدة الصغيرة قد لا تتحمل القوى الجانبية أو الحمل العمودي بشكل كافٍ.",
    explanation_en: "Small columns may not resist lateral or vertical loads sufficiently."
  },
  {
    id: 11,
    key: "rebar_spacing",
    q_ar: "هل توجد فراغات كبيرة بين حديد التسليح (خصوصًا في الكمرات والأعمدة)؟",
    q_en: "Are there large spacing gaps between reinforcement bars?",
    options: [
      { value: "no", label_ar: "لا", label_en: "No", score: 0 },
      { value: "moderate", label_ar: "مسافات متوسطة", label_en: "Moderate spacing", score: 1 },
      { value: "large", label_ar: "مسافات كبيرة (قد تقلل التماسك)", label_en: "Large spacing (reduced confinement)", score: 2 }
    ],
    explanation_ar: "التباعد الكبير يقلل التماسك ويزيد احتمال الكسر المفاجئ.",
    explanation_en: "Large spacing reduces confinement and increases sudden failure risk."
  },
  {
    id: 12,
    key: "beam_stirrups",
    q_ar: "هل يبدو أن الكمرات تحتوي على حديد شد (هوكات) بشكل مناسب؟",
    q_en: "Do beams appear to have adequate stirrups (hoops)?",
    options: [
      { value: "yes", label_ar: "نعم، يبدو مناسبًا", label_en: "Yes, adequate", score: 0 },
      { value: "not_clear", label_ar: "غير واضح", label_en: "Not clear", score: 1 },
      { value: "no", label_ar: "لا، يبدو ناقصًا", label_en: "No, insufficient", score: 2 }
    ],
    explanation_ar: "الهوكات تمنع قص الكمرات وتزيد من تحملها أثناء الزلازل.",
    explanation_en: "Stirrups prevent shear failure and increase beam capacity during earthquakes."
  },
  {
    id: 13,
    key: "column_hooks",
    q_ar: "هل يبدو أن أعمدة المبنى تحتوي على حديد تشد/هوكات حول الحديد الرئيسي؟",
    q_en: "Do columns appear to have proper hooks/hoops around main reinforcement?",
    options: [
      { value: "yes", label_ar: "نعم", label_en: "Yes", score: 0 },
      { value: "not_clear", label_ar: "غير واضح", label_en: "Not clear", score: 1 },
      { value: "no", label_ar: "لا", label_en: "No", score: 2 }
    ],
    explanation_ar: "الهوكات تحسن مقاومة الأعمدة للقص وتمنع الانهيار المفاجئ.",
    explanation_en: "Hoops improve column shear resistance and prevent sudden collapse."
  },
  {
    id: 14,
    key: "beam_crack_pattern",
    q_ar: "هل توجد شقوق أفقية في الكمرات أو قرب الأعمدة؟",
    q_en: "Are there horizontal cracks in beams or near columns?",
    options: [
      { value: "no", label_ar: "لا", label_en: "No", score: 0 },
      { value: "minor", label_ar: "شقوق سطحية", label_en: "Minor cracks", score: 1 },
      { value: "major", label_ar: "شقوق كبيرة أو ممتدة", label_en: "Major or extended cracks", score: 2 }
    ],
    explanation_ar: "شقوق أفقية قد تشير إلى إجهاد انحناء أو قص زائد في الكمرات.",
    explanation_en: "Horizontal cracks may indicate bending or shear stress in beams."
  },
  {
    id: 15,
    key: "foundation_signs",
    q_ar: "هل توجد علامات هبوط أو ميل في المبنى أو الأرض حوله؟",
    q_en: "Are there signs of settlement or tilt in the building or ground?",
    options: [
      { value: "no", label_ar: "لا", label_en: "No", score: 0 },
      { value: "minor", label_ar: "هبوط بسيط", label_en: "Minor settlement", score: 1 },
      { value: "major", label_ar: "ميل واضح أو هبوط كبير", label_en: "Clear tilt or major settlement", score: 2 }
    ],
    explanation_ar: "الهبوط يؤثر على توزيع الأحمال وقد يسبب شقوقًا كبيرة أو ميل.",
    explanation_en: "Settlement affects load distribution and may cause major cracks or tilt."
  },
  {
    id: 16,
    key: "overloads",
    q_ar: "هل يوجد إضافة ثقيلة أو تعديل كبير على المبنى (سطح ثقيل، خزان مياه كبير، تمديدات غير مدروسة)؟",
    q_en: "Is there heavy addition or major modification (heavy roof, large water tank, unplanned extensions)?",
    options: [
      { value: "no", label_ar: "لا", label_en: "No", score: 0 },
      { value: "minor", label_ar: "تعديلات بسيطة", label_en: "Minor modifications", score: 1 },
      { value: "major", label_ar: "تعديل كبير أو وزن إضافي كبير", label_en: "Major modification or heavy added load", score: 2 }
    ],
    explanation_ar: "الوزن الإضافي قد يزيد الأحمال على الأعمدة والكمرات بشكل يفوق التصميم.",
    explanation_en: "Added weight may increase loads beyond design capacity."
  },
  {
    id: 17,
    key: "roof_type",
    q_ar: "ما نوع السقف؟",
    q_en: "What is the roof type?",
    options: [
      { value: "slab", label_ar: "بلاطة خرسانية (مناسب)", label_en: "Concrete slab (suitable)", score: 0 },
      { value: "light", label_ar: "سقف خفيف (مثلاً معدني/خشبي)", label_en: "Light roof (metal/wood)", score: 1 },
      { value: "heavy", label_ar: "سقف ثقيل (خرسانة إضافية/أحمال كبيرة)", label_en: "Heavy roof (extra concrete/heavy load)", score: 2 }
    ],
    explanation_ar: "السقف الثقيل يزيد من الأحمال الزلزالية ويزيد من احتمال الانهيار.",
    explanation_en: "Heavy roof increases seismic loads and collapse risk."
  },
  {
    id: 18,
    key: "lateral_resistance",
    q_ar: "هل توجد جدران أو عناصر واضحة لمقاومة القوى الجانبية (مثل جدران قص)؟",
    q_en: "Are there clear elements resisting lateral forces (e.g., shear walls)?",
    options: [
      { value: "yes", label_ar: "نعم", label_en: "Yes", score: 0 },
      { value: "partial", label_ar: "جزئيًا", label_en: "Partially", score: 1 },
      { value: "no", label_ar: "لا", label_en: "No", score: 2 }
    ],
    explanation_ar: "نظام مقاومة جانبية قوي يقلل حركة المبنى أثناء الزلازل.",
    explanation_en: "Strong lateral resistance reduces building motion during earthquakes."
  },
  {
    id: 19,
    key: "maintenance",
    q_ar: "هل المبنى يُصان بانتظام (دهان، تنظيف شقوق، إصلاح تسربات)؟",
    q_en: "Is the building regularly maintained (paint, crack repair, leak fix)?",
    options: [
      { value: "yes", label_ar: "نعم", label_en: "Yes", score: 0 },
      { value: "sometimes", label_ar: "أحيانًا", label_en: "Sometimes", score: 1 },
      { value: "no", label_ar: "لا", label_en: "No", score: 2 }
    ],
    explanation_ar: "الصيانة تقلل تدهور العناصر وتمنع تآكل الحديد والتشققات.",
    explanation_en: "Maintenance reduces deterioration, corrosion, and cracking."
  },
  {
    id: 20,
    key: "previous_repairs",
    q_ar: "هل تم إجراء إصلاحات سابقة (ترميم شقوق/تدعيم)؟",
    q_en: "Were previous repairs done (crack repair/strengthening)?",
    options: [
      { value: "no", label_ar: "لا", label_en: "No", score: 0 },
      { value: "minor", label_ar: "إصلاحات بسيطة", label_en: "Minor repairs", score: 1 },
      { value: "major", label_ar: "إصلاحات كبيرة أو غير موثوقة", label_en: "Major or questionable repairs", score: 2 }
    ],
    explanation_ar: "الإصلاحات غير الصحيحة قد تعطي إحساسًا بالأمان لكنها لا تعالج السبب الحقيقي.",
    explanation_en: "Incorrect repairs may create false safety without fixing the root cause."
  },
  {
    id: 21,
    key: "column_alignment",
    q_ar: "هل الأعمدة مستقيمة ومنتظمة (بدون ميل أو انحراف واضح)؟",
    q_en: "Are columns straight and aligned (no visible tilt)?",
    options: [
      { value: "yes", label_ar: "نعم", label_en: "Yes", score: 0 },
      { value: "minor", label_ar: "انحراف بسيط", label_en: "Minor tilt", score: 1 },
      { value: "yes", label_en: "Major tilt", label_ar: "ميل واضح", score: 2 }
    ],
    explanation_ar: "ميل الأعمدة قد يدل على هبوط أو ضعف في القاعدة ويزيد خطر الانهيار.",
    explanation_en: "Column tilt may indicate settlement or foundation weakness and increases collapse risk."
  },
  {
    id: 22,
    key: "wall_cracks",
    q_ar: "هل توجد شقوق كبيرة في الجدران غير الحاملة (داخلية/خارجية)؟",
    q_en: "Are there major cracks in non-load-bearing walls (interior/exterior)?",
    options: [
      { value: "no", label_ar: "لا", label_en: "No", score: 0 },
      { value: "minor", label_ar: "شقوق سطحية", label_en: "Minor cracks", score: 1 },
      { value: "major", label_ar: "شقوق واسعة أو مستمرة", label_en: "Wide or continuous cracks", score: 2 }
    ],
    explanation_ar: "شقوق الجدران غير الحاملة قد تكون مؤشرًا لتغيرات في الهيكل العام.",
    explanation_en: "Cracks in non-load-bearing walls may indicate overall structural changes."
  },
  {
    id: 23,
    key: "stairs_damage",
    q_ar: "هل توجد تشققات أو تهدُّم في السلالم أو الكوريدور؟",
    q_en: "Are there cracks or damage in stairs or corridors?",
    options: [
      { value: "no", label_ar: "لا", label_en: "No", score: 0 },
      { value: "minor", label_ar: "تشقق بسيط", label_en: "Minor crack", score: 1 },
      { value: "major", label_ar: "تدهور واضح أو سقوط أجزاء", label_en: "Major damage or falling pieces", score: 2 }
    ],
    explanation_ar: "تدهور السلالم قد يدل على ضعف في البلاطات أو الكمرات.",
    explanation_en: "Stair damage may indicate weakness in slabs or beams."
  },
  {
    id: 24,
    key: "earthquake_history",
    q_ar: "هل تعرض المبنى لهزات زلزالية قوية سابقًا؟",
    q_en: "Has the building experienced strong earthquakes before?",
    options: [
      { value: "no", label_ar: "لا", label_en: "No", score: 0 },
      { value: "minor", label_ar: "هزات خفيفة", label_en: "Minor shakes", score: 1 },
      { value: "strong", label_ar: "هزات قوية أو أضرار سابقة", label_en: "Strong shakes or previous damage", score: 2 }
    ],
    explanation_ar: "الزلزال السابق قد يترك أضرارًا داخلية غير مرئية تزيد من الضعف.",
    explanation_en: "Previous earthquakes may leave hidden damage increasing vulnerability."
  },
  {
    id: 25,
    key: "soil_type",
    q_ar: "هل الأرض تحت المبنى رملية/ضعيفة أو قريبة من مجرى مياه؟",
    q_en: "Is the soil under the building sandy/weak or near a water channel?",
    options: [
      { value: "no", label_ar: "لا", label_en: "No", score: 0 },
      { value: "possible", label_ar: "ممكن (قريبة من مياه أو تربة متوسطة)", label_en: "Possible (near water/medium soil)", score: 1 },
      { value: "yes", label_ar: "نعم (تربة ضعيفة أو قرب مجرى)", label_en: "Yes (weak soil or near channel)", score: 2 }
    ],
    explanation_ar: "التربة الضعيفة تزيد احتمال الهبوط وتقلل استقرار المبنى أثناء الزلزال.",
    explanation_en: "Weak soil increases settlement risk and reduces stability during earthquakes."
  },
  {
    id: 26,
    key: "stairs_riser",
    q_ar: "هل ارتفاع الدرج/الدرج العلوي غير متساوٍ أو يوجد ميل واضح؟",
    q_en: "Are stair risers uneven or noticeably tilted?",
    options: [
      { value: "no", label_ar: "لا", label_en: "No", score: 0 },
      { value: "minor", label_ar: "فرق بسيط", label_en: "Minor difference", score: 1 },
      { value: "major", label_ar: "غير متساوٍ بشكل واضح", label_en: "Clearly uneven", score: 2 }
    ],
    explanation_ar: "عدم انتظام الدرج قد يشير إلى هبوط أو تشوه في البلاطة.",
    explanation_en: "Uneven stairs may indicate slab settlement or deformation."
  },
  {
    id: 27,
    key: "masonry_infill",
    q_ar: "هل الجدران الداخلية (الطوب/البلوك) غير متصلة بشكل جيد بالإطار؟",
    q_en: "Are internal masonry walls poorly connected to the frame?",
    options: [
      { value: "no", label_ar: "لا", label_en: "No", score: 0 },
      { value: "some", label_ar: "بعض الأماكن", label_en: "Some areas", score: 1 },
      { value: "yes", label_ar: "نعم، غير متصلة بشكل جيد", label_en: "Yes, poorly connected", score: 2 }
    ],
    explanation_ar: "الجدران غير المرتبطة قد تتحرك بشكل مستقل وتزيد من إجهاد الإطار.",
    explanation_en: "Unconnected walls may move independently and increase frame stress."
  },
  {
    id: 28,
    key: "roof_cracks",
    q_ar: "هل توجد شقوق في سقف المبنى أو بلاطة السطح؟",
    q_en: "Are there cracks in the roof or roof slab?",
    options: [
      { value: "no", label_ar: "لا", label_en: "No", score: 0 },
      { value: "minor", label_ar: "شقوق سطحية", label_en: "Minor cracks", score: 1 },
      { value: "major", label_ar: "شقوق واسعة أو تدهور واضح", label_en: "Wide cracks or major damage", score: 2 }
    ],
    explanation_ar: "شقوق السقف قد تشير إلى تحميل زائد أو ضعف في البلاطة.",
    explanation_en: "Roof cracks may indicate overloading or slab weakness."
  },
  {
    id: 29,
    key: "column_shear",
    q_ar: "هل توجد شقوق مائلة في الأعمدة (تشير إلى قص)؟",
    q_en: "Are there diagonal cracks in columns (shear signs)?",
    options: [
      { value: "no", label_ar: "لا", label_en: "No", score: 0 },
      { value: "minor", label_ar: "شقوق بسيطة", label_en: "Minor cracks", score: 1 },
      { value: "major", label_ar: "شقوق مائلة واسعة", label_en: "Wide diagonal cracks", score: 2 }
    ],
    explanation_ar: "الشروخ المائلة قد تشير إلى قص في الأعمدة، وهذا خطير إذا كان واسعًا.",
    explanation_en: "Diagonal cracks may indicate column shear, which is dangerous if wide."
  },
  {
    id: 30,
    key: "occupancy",
    q_ar: "هل المبنى مستخدم بشكل يومي بكثافة (سكن/مكتب/محل)؟",
    q_en: "Is the building heavily used daily (residential/office/shop)?",
    options: [
      { value: "low", label_ar: "استخدام خفيف", label_en: "Low usage", score: 0 },
      { value: "medium", label_ar: "استخدام متوسط", label_en: "Medium usage", score: 1 },
      { value: "high", label_ar: "استخدام كثيف (عدد كبير من السكان/العمل)", label_en: "High usage", score: 2 }
    ],
    explanation_ar: "الاستخدام الكثيف يعني أن أي مشكلة ستؤثر على عدد أكبر من الأشخاص.",
    explanation_en: "High usage means any issue affects more people."
  }
];

function App() {
  const [lang, setLang] = useState("ar");
  const t = translations[lang];

  const [page, setPage] = useState("home");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState(() => {
    const saved = localStorage.getItem("jsrai_answers");
    return saved ? JSON.parse(saved) : {};
  });

  const [result, setResult] = useState(null);

  useEffect(() => {
    localStorage.setItem("jsrai_answers", JSON.stringify(answers));
  }, [answers]);

  const total = questions.length;
  const progress = Math.round(((current + 1) / total) * 100);

  const setAnswer = (key, value) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
  };

  const computeResult = () => {
    let score = 0;
    for (let q of questions) {
      const ans = answers[q.key];
      const opt = q.options.find(o => o.value === ans);
      if (opt) score += opt.score;
    }

    let level = "safe";
    if (score >= 35) level = "danger";
    else if (score >= 18) level = "review";

    setResult({ score, level });
    setPage("result");
  };

  const reset = () => {
    setAnswers({});
    setCurrent(0);
    setResult(null);
    localStorage.removeItem("jsrai_answers");
    setPage("assessment");
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(t.result.h2, 105, 20, null, null, "center");
    doc.setFontSize(12);
    doc.text(`النقاط: ${result.score}`, 20, 35);
    doc.text(`النتيجة: ${t.result[result.level]}`, 20, 45);

    doc.setFontSize(11);
    doc.text("التوصيات:", 20, 60);
    const recs = t.result[`rec_${result.level}`];
    let y = 70;
    recs.forEach(r => {
      doc.text(`- ${r}`, 22, y);
      y += 8;
    });

    doc.setFontSize(10);
    doc.text("ملاحظة: هذا التقرير مبدئي ولا يغني عن الفحص الموقعي.", 20, y + 12);

    doc.save("JSRAI_Report.pdf");
  };

  const renderHome = () => (
    <div className="container">
      <div className="hero">
        <h2>{t.home.h2}</h2>
        <p>{t.home.p}</p>
        <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
          <button className="btn" onClick={() => { setPage("assessment"); }}>
            {t.home.start}
          </button>
          <button className="btn btn-secondary" onClick={() => setPage("method")}>
            {t.home.how}
          </button>
        </div>
        <p className="small" style={{ marginTop: 12 }}>{t.home.note}</p>
      </div>

      <div className="grid">
        <div className="card">
          <div className="section-title">
            <h3>{t.about.h2}</h3>
            <span>ACI 318 + ASCE 7</span>
          </div>
          <p className="small">{t.about.p1}</p>
          <p className="small" style={{ marginTop: 10 }}>{t.about.p2}</p>
          <p className="small" style={{ marginTop: 10 }}>{t.about.p3}</p>
        </div>

        <div className="card">
          <div className="section-title">
            <h3>{t.method.h2}</h3>
            <span>مبسط</span>
          </div>
          {t.method.steps.map((s, idx) => (
            <div key={idx} className="note" style={{ marginTop: idx === 0 ? 0 : 10 }}>
              <strong>{s.title}</strong>
              <p style={{ margin: "6px 0 0" }}>{s.desc}</p>
            </div>
          ))}
          <p className="small" style={{ marginTop: 12 }}>{t.method.note}</p>
        </div>
      </div>

      <div className="footer">
        <span>{t.footer.dev}</span>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a href="privacy.html">{t.footer.privacy}</a>
          <a href="disclaimer.html">{t.footer.disclaimer}</a>
        </div>
      </div>
    </div>
  );

  const renderAbout = () => (
    <div className="container">
      <div className="card">
        <div className="section-title">
          <h3>{t.about.h2}</h3>
          <span>احترافي</span>
        </div>
        <p className="small">{t.about.p1}</p>
        <p className="small" style={{ marginTop: 10 }}>{t.about.p2}</p>
        <p className="small" style={{ marginTop: 10 }}>{t.about.p3}</p>
        <div className="note" style={{ marginTop: 12 }}>
          <strong>ملاحظة مهمة:</strong>
          <p style={{ margin: "6px 0 0" }}>
            هذه الأداة تقييم أولي فقط ولا تغني عن الفحص الموقعي أو التقرير الهندسي الرسمي.
          </p>
        </div>
      </div>
      <div className="footer">
        <span>{t.footer.dev}</span>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a href="privacy.html">{t.footer.privacy}</a>
          <a href="disclaimer.html">{t.footer.disclaimer}</a>
        </div>
      </div>
    </div>
  );

  const renderMethod = () => (
    <div className="container">
      <div className="card">
        <div className="section-title">
          <h3>{t.method.h2}</h3>
          <span>تفصيلي</span>
        </div>
        {t.method.steps.map((s, idx) => (
          <div key={idx} className="note" style={{ marginTop: idx === 0 ? 0 : 10 }}>
            <strong>{s.title}</strong>
            <p style={{ margin: "6px 0 0" }}>{s.desc}</p>
          </div>
        ))}
        <div className="note" style={{ marginTop: 12 }}>
          <strong>الأساس العلمي:</strong>
          <p style={{ margin: "6px 0 0" }}>
            كل سؤال مبني على معايير ACI 318 و ASCE 7، مع تفسير مبسط لتسهيل الفهم للعامة.
          </p>
        </div>
        <div className="note" style={{ marginTop: 12 }}>
          <strong>كيف تُستخدم الأداة؟</strong>
          <p style={{ margin: "6px 0 0" }}>
            أجب على الأسئلة بصدق، ثم ستظهر النتيجة مع توصيات واضحة. في حال وجود أي شك، يجب مراجعة مهندس مختص.
          </p>
        </div>
      </div>
      <div className="footer">
        <span>{t.footer.dev}</span>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a href="privacy.html">{t.footer.privacy}</a>
          <a href="disclaimer.html">{t.footer.disclaimer}</a>
        </div>
      </div>
    </div>
  );

  const renderAssessment = () => {
    const q = questions[current];
    const selected = answers[q.key];

    return (
      <div className="container">
        <div className="card">
          <div className="section-title">
            <h3>{t.assessment.h2}</h3>
            <span>{t.assessment.progress}: {progress}%</span>
          </div>

          <div className="progress-wrap">
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>

          <div className="question">
            <h4>{lang === "ar" ? q.q_ar : q.q_en}</h4>
            <p>{lang === "ar" ? q.explanation_ar : q.explanation_en}</p>

            <div className="options">
              {q.options.map((opt) => (
                <div
                  key={opt.value}
                  className={`option ${selected === opt.value ? "active" : ""}`}
                  onClick={() => setAnswer(q.key, opt.value)}
                >
                  <span className="label">{lang === "ar" ? opt.label_ar : opt.label_en}</span>
                  <span className="score">{opt.score === 0 ? "0" : opt.score}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="nav-buttons">
            <button
              className="btn btn-secondary"
              onClick={() => setCurrent((c) => Math.max(0, c - 1))}
              disabled={current === 0}
              style={{ opacity: current === 0 ? 0.5 : 1 }}
            >
              {t.assessment.prev}
            </button>

            {current < total - 1 ? (
              <button
                className="btn"
                onClick={() => setCurrent((c) => Math.min(total - 1, c + 1))}
                disabled={!selected}
                style={{ opacity: !selected ? 0.6 : 1 }}
              >
                {t.assessment.next}
              </button>
            ) : (
              <button
                className="btn"
                onClick={computeResult}
                disabled={!selected}
                style={{ opacity: !selected ? 0.6 : 1 }}
              >
                {t.assessment.finish}
              </button>
            )}
          </div>

          <div className="note">
            <strong>ملاحظة:</strong>
            <p style={{ margin: "6px 0 0" }}>
              أجب بأفضل تقدير ممكن. الأداة تعطي مؤشر أولي فقط ولا تغني عن الفحص الهندسي.
            </p>
          </div>
        </div>

        <div className="footer">
          <span>{t.footer.dev}</span>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="privacy.html">{t.footer.privacy}</a>
            <a href="disclaimer.html">{t.footer.disclaimer}</a>
          </div>
        </div>
      </div>
    );
  };

  const renderResult = () => {
    if (!result) return null;

    const badgeClass =
      result.level === "safe" ? "badge-ok" :
      result.level === "review" ? "badge-warn" : "badge-danger";

    const desc =
      result.level === "safe" ? t.result.desc_safe :
      result.level === "review" ? t.result.desc_review :
      t.result.desc_danger;

    const recs = t.result[`rec_${result.level}`];

    return (
      <div className="container">
        <div className="card">
          <div className="section-title">
            <h3>{t.result.h2}</h3>
            <span>النقاط: {result.score}</span>
          </div>

          <div className={`result-badge ${badgeClass}`}>
            {t.result[result.level]}
          </div>

          <div className="result">
            <h3>التفسير:</h3>
            <p>{desc}</p>
          </div>

          <div className="result">
            <h3>{t.result.rec_title}</h3>
            <ul>
              {recs.map((r, idx) => <li key={idx}>{r}</li>)}
            </ul>
          </div>

          <div className="note">
            <strong>تنبيه مهم:</strong>
            <p style={{ margin: "6px 0 0" }}>
              {t.result.note}
            </p>
          </div>

          <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <button className="btn" onClick={downloadPDF}>
              {t.result.download}
            </button>
            <button className="btn btn-secondary" onClick={reset}>
              {t.result.restart}
            </button>
          </div>
        </div>

        <div className="footer">
          <span>{t.footer.dev}</span>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="privacy.html">{t.footer.privacy}</a>
            <a href="disclaimer.html">{t.footer.disclaimer}</a>
          </div>
        </div>
      </div>
    );
  };

  const renderPage = () => {
    if (page === "home") return renderHome();
    if (page === "about") return renderAbout();
    if (page === "method") return renderMethod();
    if (page === "assessment") return renderAssessment();
    if (page === "result") return renderResult();
    return renderHome();
  };

  return (
    <div>
      <div className="bg-geometry"></div>

      <div className="container">
        <div className="header">
          <div className="brand">
            <div className="logo"></div>
            <div>
              <h1>{t.title}</h1>
              <p>{t.tagline}</p>
            </div>
          </div>

          <div className="nav">
            <button className={page === "home" ? "active" : ""} onClick={() => setPage("home")}>{t.nav.home}</button>
            <button className={page === "about" ? "active" : ""} onClick={() => setPage("about")}>{t.nav.about}</button>
            <button className={page === "method" ? "active" : ""} onClick={() => setPage("method")}>{t.nav.method}</button>
            <button className={page === "assessment" ? "active" : ""} onClick={() => setPage("assessment")}>{t.nav.assessment}</button>
            <button className={page === "result" ? "active" : ""} onClick={() => setPage("result")}>{t.nav.result}</button>
          </div>

          <div className="lang">
            <button className={lang === "ar" ? "active" : ""} onClick={() => setLang("ar")}>العربية</button>
            <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>English</button>
          </div>
        </div>

        <div className="hero" style={{ marginTop: 14 }}>
          <h2 style={{ marginBottom: 8 }}>{t.bismillah}</h2>
          <p>{lang === "ar" ? "أداة تقييم أولي للسلامة الإنشائية. الأداة ليست تقريرًا هندسيًا رسميًا." : "A preliminary structural safety assessment tool. Not an official engineering report."}</p>
        </div>
      </div>

      {renderPage()}
    </div>
  );
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
