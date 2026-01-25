// ===========================
// SCAI - Structural Collapse AI
// ===========================

// ====== LANGUAGE ======
let currentLang = localStorage.getItem("scai_lang") || "en";

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("scai_lang", lang);
  document.querySelectorAll("[data-lang]").forEach((el) => {
    const key = el.getAttribute("data-lang");
    el.innerText = translations[lang][key] || el.innerText;
  });

  document.body.dir = lang === "ar" ? "rtl" : "ltr";
  document.body.style.textAlign = lang === "ar" ? "right" : "left";

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  document.querySelectorAll(`.lang-btn`).forEach((btn) => {
    if (btn.innerText.toLowerCase() === lang) btn.classList.add("active");
  });
}

const translations = {
  en: {
    start: "Start Assessment",
    privacy: "Privacy & Disclaimer",
    assessment: "Assessment",
    results: "Results",
    home: "Home",
    calculate: "Calculate Result",
    reset: "Reset",
    download: "Download PDF",
    rerun: "Re-run Assessment",
  },
  ar: {
    start: "ابدأ التقييم",
    privacy: "الخصوصية والإخلاء",
    assessment: "التقييم",
    results: "النتائج",
    home: "الرئيسية",
    calculate: "احسب النتيجة",
    reset: "إعادة التعيين",
    download: "تحميل PDF",
    rerun: "إعادة التقييم",
  },
};

// ====== QUESTIONS ======
const questions = [
  {
    id: "building_type",
    section: "general",
    en: "Building type",
    ar: "نوع المبنى",
    desc_en: "Choose the type of building.",
    desc_ar: "اختر نوع المبنى.",
    options: [
      { value: 5, en: "Residential", ar: "سكني" },
      { value: 4, en: "Commercial", ar: "تجاري" },
      { value: 3, en: "Industrial", ar: "صناعي" },
      { value: 2, en: "Mixed-use", ar: "مختلط" },
      { value: 1, en: "Other", ar: "آخر" },
    ],
  },
  {
    id: "floors",
    section: "general",
    en: "Number of floors",
    ar: "عدد الطوابق",
    desc_en: "Choose the number of floors.",
    desc_ar: "اختر عدد الطوابق.",
    options: [
      { value: 5, en: "1-2 floors", ar: "1-2 طوابق" },
      { value: 4, en: "3-5 floors", ar: "3-5 طوابق" },
      { value: 3, en: "6-10 floors", ar: "6-10 طوابق" },
      { value: 2, en: "11-15 floors", ar: "11-15 طوابق" },
      { value: 1, en: "More than 15", ar: "أكثر من 15" },
    ],
  },
  {
    id: "age",
    section: "general",
    en: "Building age",
    ar: "عمر المبنى",
    desc_en: "Choose the building age.",
    desc_ar: "اختر عمر المبنى.",
    options: [
      { value: 5, en: "Less than 5 years", ar: "أقل من 5 سنوات" },
      { value: 4, en: "5-15 years", ar: "5-15 سنة" },
      { value: 3, en: "15-30 years", ar: "15-30 سنة" },
      { value: 2, en: "30-50 years", ar: "30-50 سنة" },
      { value: 1, en: "More than 50 years", ar: "أكثر من 50 سنة" },
    ],
  },
  {
    id: "structure_type",
    section: "structure",
    en: "Structural system",
    ar: "نوع النظام الإنشائي",
    desc_en: "Choose the main structural system.",
    desc_ar: "اختر النظام الإنشائي الرئيسي.",
    options: [
      { value: 5, en: "Reinforced concrete frame", ar: "إطار خرسانة مسلحة" },
      { value: 4, en: "Shear walls", ar: "جدران قص" },
      { value: 3, en: "Steel frame", ar: "إطار فولاذي" },
      { value: 2, en: "Masonry", ar: "إنشاءات طوبية" },
      { value: 1, en: "Mixed/Unknown", ar: "مختلط/غير معروف" },
    ],
  },
  {
    id: "seismic_design",
    section: "structure",
    en: "Seismic design compliance",
    ar: "الالتزام بتصميم زلزالي",
    desc_en: "Is the building designed for earthquakes according to modern codes?",
    desc_ar: "هل تم تصميم المبنى للزلازل وفق كود حديث؟",
    options: [
      { value: 5, en: "Yes, modern seismic design", ar: "نعم، تصميم زلزالي حديث" },
      { value: 4, en: "Partially (some seismic elements)", ar: "جزئياً" },
      { value: 3, en: "Not sure", ar: "غير متأكد" },
      { value: 2, en: "No seismic design", ar: "لا يوجد تصميم زلزالي" },
      { value: 1, en: "Unknown/No documents", ar: "غير معروف/بدون مخططات" },
    ],
  },
  {
    id: "foundation_type",
    section: "foundation",
    en: "Foundation type",
    ar: "نوع الأساسات",
    desc_en: "Choose the foundation type.",
    desc_ar: "اختر نوع الأساسات.",
    options: [
      { value: 5, en: "Deep foundations (piles)", ar: "أساسات عميقة (أعمدة)" },
      { value: 4, en: "Raft foundation", ar: "أساس ساندويش" },
      { value: 3, en: "Strip footing", ar: "أساسات شريطية" },
      { value: 2, en: "Isolated footings", ar: "أعمدة منفصلة" },
      { value: 1, en: "Unknown", ar: "غير معروف" },
    ],
  },
  {
    id: "soil_condition",
    section: "foundation",
    en: "Soil condition",
    ar: "حالة التربة",
    desc_en: "Choose the soil type (based on local map or survey).",
    desc_ar: "اختر نوع التربة (حسب الخريطة أو المسح).",
    options: [
      { value: 5, en: "Rock / Very stiff soil", ar: "صخر/تربة شديدة الصلابة" },
      { value: 4, en: "Stiff soil", ar: "تربة صلبة" },
      { value: 3, en: "Medium soil", ar: "تربة متوسطة" },
      { value: 2, en: "Soft soil", ar: "تربة ناعمة" },
      { value: 1, en: "Very soft / uncertain", ar: "ناعمة جدًا/غير مؤكدة" },
    ],
  },
  {
    id: "load_changes",
    section: "load",
    en: "Major load changes",
    ar: "تغييرات أحمال كبيرة",
    desc_en: "Were there major structural changes (extra floors, heavy equipment, etc.)?",
    desc_ar: "هل تمت تغييرات إنشائية كبيرة (طوابق إضافية، معدات ثقيلة...)؟",
    options: [
      { value: 5, en: "No major changes", ar: "لا تغييرات كبيرة" },
      { value: 4, en: "Minor changes (non-structural)", ar: "تغييرات بسيطة غير إنشائية" },
      { value: 3, en: "Some structural changes", ar: "بعض التغييرات الإنشائية" },
      { value: 2, en: "Major changes with unknown design", ar: "تغييرات كبيرة بدون تصميم" },
      { value: 1, en: "Unknown/No records", ar: "غير معروف/بدون سجلات" },
    ],
  },
  {
    id: "column_condition",
    section: "structure",
    en: "Column condition",
    ar: "حالة الأعمدة",
    desc_en: "Check if there are cracks, spalling, or exposed rebar.",
    desc_ar: "هل يوجد تشققات أو تساقط خرسانة أو حديد مكشوف؟",
    options: [
      { value: 5, en: "No visible damage", ar: "لا يوجد تلف ظاهر" },
      { value: 4, en: "Minor cracks", ar: "تشققات بسيطة" },
      { value: 3, en: "Moderate cracks / minor spalling", ar: "تشققات متوسطة/تساقط بسيط" },
      { value: 2, en: "Severe cracks / exposed rebar", ar: "تشققات شديدة/حديد مكشوف" },
      { value: 1, en: "Structural failure signs", ar: "علامات فشل إنشائي" },
    ],
  },
  {
    id: "beam_condition",
    section: "structure",
    en: "Beam condition",
    ar: "حالة الكمرات",
    desc_en: "Check for deflection, cracks, or corrosion.",
    desc_ar: "تحقق من انحناء، تشققات أو تآكل.",
    options: [
      { value: 5, en: "No issues", ar: "لا يوجد مشاكل" },
      { value: 4, en: "Minor cracks", ar: "تشققات بسيطة" },
      { value: 3, en: "Moderate cracks/deflection", ar: "تشققات/انحناء متوسط" },
      { value: 2, en: "Severe cracks/major deflection", ar: "تشققات شديدة/انحناء كبير" },
      { value: 1, en: "Failure signs", ar: "علامات فشل" },
    ],
  },
  {
    id: "slab_condition",
    section: "structure",
    en: "Slab condition",
    ar: "حالة البلاطة",
    desc_en: "Check for major cracks, sagging, or water leakage.",
    desc_ar: "تحقق من تشققات كبيرة، هبوط أو تسرب مياه.",
    options: [
      { value: 5, en: "No issues", ar: "لا يوجد مشاكل" },
      { value: 4, en: "Minor cracks", ar: "تشققات بسيطة" },
      { value: 3, en: "Moderate cracks", ar: "تشققات متوسطة" },
      { value: 2, en: "Major cracks/sagging", ar: "تشققات كبيرة/هبوط" },
      { value: 1, en: "Severe damage", ar: "تلف شديد" },
    ],
  },
  {
    id: "shear_wall_presence",
    section: "structure",
    en: "Shear walls presence",
    ar: "وجود جدران قص",
    desc_en: "Does the building have shear walls or braced frames?",
    desc_ar: "هل يوجد جدران قص أو إطارات داعمة؟",
    options: [
      { value: 5, en: "Yes, well distributed", ar: "نعم، موزعة جيدًا" },
      { value: 4, en: "Yes, but limited", ar: "نعم، لكن قليلة" },
      { value: 3, en: "Partial or weak", ar: "جزئية أو ضعيفة" },
      { value: 2, en: "No shear walls", ar: "لا يوجد جدران قص" },
      { value: 1, en: "Unknown", ar: "غير معروف" },
    ],
  },
  {
    id: "foundation_cracks",
    section: "foundation",
    en: "Foundation cracks or settlement",
    ar: "تشققات/هبوط في الأساسات",
    desc_en: "Are there cracks or uneven settlement in the foundation?",
    desc_ar: "هل يوجد تشققات أو هبوط غير متساوٍ في الأساسات؟",
    options: [
      { value: 5, en: "No cracks/settlement", ar: "لا يوجد" },
      { value: 4, en: "Minor cracks", ar: "تشققات بسيطة" },
      { value: 3, en: "Moderate cracks/settlement", ar: "تشققات/هبوط متوسط" },
      { value: 2, en: "Severe cracks/settlement", ar: "تشققات/هبوط شديد" },
      { value: 1, en: "Structural instability", ar: "عدم استقرار إنشائي" },
    ],
  },
  {
    id: "water_leakage",
    section: "foundation",
    en: "Water leakage or dampness",
    ar: "تسرب مياه أو رطوبة",
    desc_en: "Is there visible water leakage or moisture in the basement/foundation?",
    desc_ar: "هل يوجد تسرب مياه أو رطوبة في القبو/الأساسات؟",
    options: [
      { value: 5, en: "No moisture", ar: "لا يوجد رطوبة" },
      { value: 4, en: "Minor moisture", ar: "رطوبة بسيطة" },
      { value: 3, en: "Moderate moisture", ar: "رطوبة متوسطة" },
      { value: 2, en: "Severe moisture", ar: "رطوبة شديدة" },
      { value: 1, en: "Active water infiltration", ar: "تسرب مياه نشط" },
    ],
  },
  {
    id: "corrosion",
    section: "structure",
    en: "Rebar corrosion",
    ar: "تآكل الحديد",
    desc_en: "Is there visible corrosion on reinforcement bars?",
    desc_ar: "هل يوجد تآكل ظاهر في حديد التسليح؟",
    options: [
      { value: 5, en: "No corrosion", ar: "لا يوجد تآكل" },
      { value: 4, en: "Minor corrosion", ar: "تآكل بسيط" },
      { value: 3, en: "Moderate corrosion", ar: "تآكل متوسط" },
      { value: 2, en: "Severe corrosion", ar: "تآكل شديد" },
      { value: 1, en: "Exposed & severe", ar: "مكشوف وشديد" },
    ],
  },
  {
    id: "concrete_quality",
    section: "structure",
    en: "Concrete quality",
    ar: "جودة الخرسانة",
    desc_en: "Is the concrete strong and well-cured?",
    desc_ar: "هل الخرسانة قوية ومُعالجة بشكل جيد؟",
    options: [
      { value: 5, en: "High quality", ar: "جودة عالية" },
      { value: 4, en: "Good quality", ar: "جودة جيدة" },
      { value: 3, en: "Average quality", ar: "جودة متوسطة" },
      { value: 2, en: "Weak concrete", ar: "خرسانة ضعيفة" },
      { value: 1, en: "Poor/unknown", ar: "سيئة/غير معروف" },
    ],
  },
  {
    id: "connection_quality",
    section: "structure",
    en: "Connection quality",
    ar: "جودة الوصلات",
    desc_en: "Are beam-column connections strong and well-designed?",
    desc_ar: "هل وصلات الكمرات بالأعمدة قوية ومصممة جيدًا؟",
    options: [
      { value: 5, en: "Strong connections", ar: "وصلات قوية" },
      { value: 4, en: "Good connections", ar: "وصلات جيدة" },
      { value: 3, en: "Average connections", ar: "وصلات متوسطة" },
      { value: 2, en: "Weak connections", ar: "وصلات ضعيفة" },
      { value: 1, en: "Poor/unknown", ar: "سيئة/غير معروف" },
    ],
  },
  {
    id: "maintenance",
    section: "maintenance",
    en: "Maintenance history",
    ar: "تاريخ الصيانة",
    desc_en: "Is the building regularly maintained?",
    desc_ar: "هل يتم صيانة المبنى بشكل دوري؟",
    options: [
      { value: 5, en: "Regular maintenance", ar: "صيانة دورية" },
      { value: 4, en: "Occasional maintenance", ar: "صيانة أحيانًا" },
      { value: 3, en: "Rare maintenance", ar: "نادراً" },
      { value: 2, en: "No maintenance", ar: "لا توجد صيانة" },
      { value: 1, en: "Unknown", ar: "غير معروف" },
    ],
  },
  {
    id: "fire_damage",
    section: "maintenance",
    en: "Fire damage history",
    ar: "تاريخ حريق",
    desc_en: "Has the building been affected by fire previously?",
    desc_ar: "هل تعرض المبنى لحريق سابقًا؟",
    options: [
      { value: 5, en: "No fire damage", ar: "لا يوجد" },
      { value: 4, en: "Minor fire damage", ar: "أضرار بسيطة" },
      { value: 3, en: "Moderate fire damage", ar: "أضرار متوسطة" },
      { value: 2, en: "Severe fire damage", ar: "أضرار شديدة" },
      { value: 1, en: "Unknown", ar: "غير معروف" },
    ],
  },
  {
    id: "vibration",
    section: "load",
    en: "Vibration or shaking",
    ar: "اهتزازات أو اهتزازات قوية",
    desc_en: "Does the building experience strong vibrations (near traffic, machinery)?",
    desc_ar: "هل يوجد اهتزازات قوية (قرب طريق سريع أو معدات)؟",
    options: [
      { value: 5, en: "No vibration", ar: "لا يوجد" },
      { value: 4, en: "Minor vibration", ar: "اهتزاز بسيط" },
      { value: 3, en: "Moderate vibration", ar: "اهتزاز متوسط" },
      { value: 2, en: "Strong vibration", ar: "اهتزاز قوي" },
      { value: 1, en: "Severe vibration", ar: "اهتزاز شديد" },
    ],
  },
  {
    id: "neighboring_damage",
    section: "load",
    en: "Neighboring building damage",
    ar: "تأثر المباني المجاورة",
    desc_en: "Are nearby buildings showing damage or settlement?",
    desc_ar: "هل المباني المجاورة تظهر تشققات أو هبوط؟",
    options: [
      { value: 5, en: "No nearby damage", ar: "لا يوجد" },
      { value: 4, en: "Minor nearby issues", ar: "مشاكل بسيطة" },
      { value: 3, en: "Moderate nearby damage", ar: "أضرار متوسطة" },
      { value: 2, en: "Severe nearby damage", ar: "أضرار شديدة" },
      { value: 1, en: "Unknown", ar: "غير معروف" },
    ],
  },
  {
    id: "water_table",
    section: "foundation",
    en: "Water table / flooding risk",
    ar: "مستوى المياه الجوفية / خطر فيضان",
    desc_en: "Is the building in a flood-prone area or high water table?",
    desc_ar: "هل المبنى في منطقة معرضة للفيضانات أو مستوى مياه مرتفع؟",
    options: [
      { value: 5, en: "Low risk", ar: "خطر منخفض" },
      { value: 4, en: "Minor risk", ar: "خطر بسيط" },
      { value: 3, en: "Moderate risk", ar: "خطر متوسط" },
      { value: 2, en: "High risk", ar: "خطر عالي" },
      { value: 1, en: "Very high risk", ar: "خطر شديد" },
    ],
  },
  {
    id: "retrofit",
    section: "retrofit",
    en: "Seismic retrofit or strengthening",
    ar: "تدعيم زلزالي سابق",
    desc_en: "Has the building been retrofitted or strengthened for earthquakes?",
    desc_ar: "هل تم تدعيم المبنى للزلازل؟",
    options: [
      { value: 5, en: "Yes, professionally done", ar: "نعم، بشكل احترافي" },
      { value: 4, en: "Yes, minor retrofit", ar: "نعم، تدعيم بسيط" },
      { value: 3, en: "Partial retrofit", ar: "تدعيم جزئي" },
      { value: 2, en: "No retrofit", ar: "لا يوجد" },
      { value: 1, en: "Unknown", ar: "غير معروف" },
    ],
  },
  {
    id: "damage_after_quake",
    section: "seismic",
    en: "Damage after earthquake",
    ar: "أضرار بعد زلزال",
    desc_en: "Has the building shown damage after any earthquake?",
    desc_ar: "هل ظهر تلف بعد أي زلزال؟",
    options: [
      { value: 5, en: "No damage", ar: "لا يوجد" },
      { value: 4, en: "Minor damage", ar: "أضرار بسيطة" },
      { value: 3, en: "Moderate damage", ar: "أضرار متوسطة" },
      { value: 2, en: "Severe damage", ar: "أضرار شديدة" },
      { value: 1, en: "Unknown", ar: "غير معروف" },
    ],
  },
  {
    id: "seismic_zone",
    section: "seismic",
    en: "Seismic zone (Jordan)",
    ar: "منطقة زلزالية (الأردن)",
    desc_en: "Based on the seismic map, choose the zone.",
    desc_ar: "حسب خريطة الزلازل، اختر المنطقة.",
    options: [
      { value: 5, en: "Low seismic zone", ar: "منطقة زلزالية منخفضة" },
      { value: 4, en: "Moderate zone", ar: "منطقة متوسطة" },
      { value: 3, en: "High zone", ar: "منطقة عالية" },
      { value: 2, en: "Very high zone", ar: "منطقة عالية جدًا" },
      { value: 1, en: "Unknown", ar: "غير معروف" },
    ],
  },
  {
    id: "access_for_inspection",
    section: "general",
    en: "Accessibility for inspection",
    ar: "سهولة الفحص",
    desc_en: "Is the building accessible for inspection (no locked areas)?",
    desc_ar: "هل المبنى سهل الفحص (بدون مناطق مغلقة)؟",
    options: [
      { value: 5, en: "Fully accessible", ar: "متاح بالكامل" },
      { value: 4, en: "Mostly accessible", ar: "متاح بشكل كبير" },
      { value: 3, en: "Partially accessible", ar: "متاح جزئيًا" },
      { value: 2, en: "Hard to access", ar: "صعب الوصول" },
      { value: 1, en: "Not accessible", ar: "غير متاح" },
    ],
  },
  {
    id: "occupancy",
    section: "general",
    en: "Occupancy type",
    ar: "نوع الاستخدام",
    desc_en: "Is the building heavily occupied or critical (school, hospital)?",
    desc_ar: "هل المبنى مستخدم بشكل كثيف أو حيوي (مدرسة، مستشفى)؟",
    options: [
      { value: 5, en: "Low occupancy", ar: "استخدام منخفض" },
      { value: 4, en: "Moderate occupancy", ar: "استخدام متوسط" },
      { value: 3, en: "High occupancy", ar: "استخدام عالي" },
      { value: 2, en: "Critical occupancy", ar: "استخدام حيوي" },
      { value: 1, en: "Unknown", ar: "غير معروف" },
    ],
  },
];

// ====== WEIGHTS (for realistic result) ======
const weights = {
  general: 1,
  structure: 2,
  foundation: 2,
  load: 1,
  maintenance: 1,
  retrofit: 1,
  seismic: 2,
};

// ====== RENDER QUESTIONS ======
function renderQuestions() {
  const container = document.getElementById("questions");
  if (!container) return;

  container.innerHTML = "";

  questions.forEach((q, index) => {
    const card = document.createElement("div");
    card.classList.add("question-card");

    const title = document.createElement("div");
    title.classList.add("question-title");
    title.innerText = `${index + 1}. ${q[currentLang]}`;

    const desc = document.createElement("div");
    desc.classList.add("question-desc");
    desc.innerText = currentLang === "ar" ? q.desc_ar : q.desc_en;

    const options = document.createElement("div");
    options.classList.add("options");

    q.options.forEach((opt, i) => {
      const option = document.createElement("label");
      option.classList.add("option");

      const input = document.createElement("input");
      input.type = "radio";
      input.name = q.id;
      input.value = opt.value;

      const label = document.createElement("span");
      label.classList.add("option-label");
      label.innerText = currentLang === "ar" ? opt.ar : opt.en;

      option.appendChild(input);
      option.appendChild(label);
      options.appendChild(option);
    });

    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(options);
    container.appendChild(card);
  });
}

// ====== CALCULATION ======
function calculateResult() {
  let totalScore = 0;
  let totalWeight = 0;
  let sectionScores = {};

  // Initialize sections
  Object.keys(weights).forEach((s) => {
    sectionScores[s] = { score: 0, count: 0 };
  });

  for (const q of questions) {
    const selected = document.querySelector(`input[name="${q.id}"]:checked`);
    if (!selected) {
      alert("Please answer all questions.");
      return;
    }

    const value = parseInt(selected.value);
    const section = q.section;
    sectionScores[section].score += value;
    sectionScores[section].count += 1;
  }

  // Calculate weighted score
  for (const section in sectionScores) {
    const sec = sectionScores[section];
    if (sec.count === 0) continue;

    const avg = sec.score / sec.count; // average in 1-5
    const normalized = (avg - 1) / 4; // 0-1
    const weight = weights[section] || 1;

    totalScore += normalized * weight;
    totalWeight += weight;
  }

  const finalScore = Math.round((totalScore / totalWeight) * 100);

  // Build result object
  const result = {
    score: finalScore,
    sections: {},
    recommendations: [],
  };

  for (const section in sectionScores) {
    const sec = sectionScores[section];
    if (sec.count === 0) continue;

    const avg = sec.score / sec.count;
    const normalized = (avg - 1) / 4;
    const secScore = Math.round(normalized * 100);

    result.sections[section] = secScore;

    // recommendations by section
    if (secScore >= 80) {
      result.recommendations.push({
        section,
        text_en: "Section appears stable. Regular monitoring is recommended.",
        text_ar: "القسم يبدو مستقرًا. يُنصح بالمراقبة الدورية.",
      });
    } else if (secScore >= 60) {
      result.recommendations.push({
        section,
        text_en: "Section shows minor issues. A professional inspection is recommended.",
        text_ar: "القسم يظهر مشاكل بسيطة. يُنصح بفحص مهني.",
      });
    } else if (secScore >= 40) {
      result.recommendations.push({
        section,
        text_en: "Section has moderate issues. Detailed structural assessment is required.",
        text_ar: "القسم يحتوي على مشاكل متوسطة. يلزم تقييم إنشائي تفصيلي.",
      });
    } else {
      result.recommendations.push({
        section,
        text_en: "Section has severe issues. Immediate structural evaluation and reinforcement needed.",
        text_ar: "القسم يحتوي على مشاكل خطيرة. يلزم تقييم فوري وتدعيم.",
      });
    }
  }

  // Risk level
  let level = "";
  let levelTextEn = "";
  let levelTextAr = "";

  if (finalScore >= 80) {
    level = "Low Risk";
    levelTextEn = "Building is generally safe, but professional verification is recommended.";
    levelTextAr = "المبنى آمن بشكل عام، لكن يوصى بالتحقق المهني.";
  } else if (finalScore >= 60) {
    level = "Moderate Risk";
    levelTextEn = "Building shows some vulnerabilities. Professional inspection is advised.";
    levelTextAr = "المبنى يظهر بعض الضعف. يوصى بفحص مهني.";
  } else if (finalScore >= 40) {
    level = "High Risk";
    levelTextEn = "Building has significant issues. Structural evaluation and possible reinforcement required.";
    levelTextAr = "المبنى يحتوي على مشاكل كبيرة. يلزم تقييم إنشائي وتدعيم محتمل.";
  } else {
    level = "Critical Risk";
    levelTextEn = "Building is at high risk of progressive collapse. Immediate professional action required.";
    levelTextAr = "المبنى في خطر شديد من الانهيار المتسلسل. يلزم تدخل فوري.";
  }

  // Save result
  localStorage.setItem("scai_result", JSON.stringify(result));
  localStorage.setItem("scai_level", level);
  localStorage.setItem("scai_level_en", levelTextEn);
  localStorage.setItem("scai_level_ar", levelTextAr);

  // Redirect to results
  window.location.href = "results.html";
}

// ====== RESULTS PAGE ======
function renderResults() {
  const card = document.getElementById("resultCard");
  if (!card) return;

  const result = JSON.parse(localStorage.getItem("scai_result"));
  const level = localStorage.getItem("scai_level");
  const levelTextEn = localStorage.getItem("scai_level_en");
  const levelTextAr = localStorage.getItem("scai_level_ar");

  if (!result) {
    card.innerHTML = `<div class="result-text">No result found. Please complete the assessment first.</div>`;
    return;
  }

  card.innerHTML = `
    <div class="result-title">${currentLang === "ar" ? "النتيجة النهائية" : "Final Result"}</div>
    <div class="result-text">
      <strong>${currentLang === "ar" ? "التقييم العام" : "Overall Score"}:</strong> ${result.score}/100<br/>
      <strong>${currentLang === "ar" ? "مستوى الخطر" : "Risk Level"}:</strong> ${currentLang === "ar" ? levelTextAr : levelTextEn}
    </div>
    <div class="result-section">
      <h3>${currentLang === "ar" ? "الدرجات الفرعية" : "Section Scores"}</h3>
      ${Object.keys(result.sections)
        .map(
          (s) => `
          <div class="result-text">
            <strong>${formatSection(s, currentLang)}</strong>: ${result.sections[s]}/100
          </div>
        `
        )
        .join("")}
    </div>
    <div class="result-section">
      <h3>${currentLang === "ar" ? "التوصيات" : "Recommendations"}</h3>
      ${result.recommendations
        .map(
          (r) => `
          <div class="result-text">
            <strong>${formatSection(r.section, currentLang)}:</strong> ${currentLang === "ar" ? r.text_ar : r.text_en}
          </div>
        `
        )
        .join("")}
    </div>
  `;
}

// ====== PDF ======
function downloadPdf() {
  const result = JSON.parse(localStorage.getItem("scai_result"));
  if (!result) {
    alert("No result found.");
    return;
  }

  const level = localStorage.getItem("scai_level");
  const levelTextEn = localStorage.getItem("scai_level_en");
  const levelTextAr = localStorage.getItem("scai_level_ar");

  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("SCAI - Structural Collapse AI", 14, 20);

  doc.setFontSize(12);
  doc.text(`Author: Eng Suhaib Al_Zyoud`, 14, 30);
  doc.text(`Date: ${new Date().toLocaleDateString()}`, 14, 36);

  doc.setFontSize(14);
  doc.text(currentLang === "ar" ? "النتيجة النهائية" : "Final Result", 14, 48);
  doc.setFontSize(12);
  doc.text(`Score: ${result.score}/100`, 14, 56);
  doc.text(`Risk Level: ${currentLang === "ar" ? levelTextAr : levelTextEn}`, 14, 62);

  doc.setFontSize(14);
  doc.text(currentLang === "ar" ? "الدرجات الفرعية" : "Section Scores", 14, 74);

  let y = 82;
  for (const s of Object.keys(result.sections)) {
    doc.setFontSize(12);
    doc.text(`${formatSection(s, currentLang)}: ${result.sections[s]}/100`, 14, y);
    y += 8;
  }

  doc.setFontSize(14);
  doc.text(currentLang === "ar" ? "التوصيات" : "Recommendations", 14, y + 6);
  y += 14;

  result.recommendations.forEach((r) => {
    doc.setFontSize(12);
    doc.text(`${formatSection(r.section, currentLang)}: ${currentLang === "ar" ? r.text_ar : r.text_en}`, 14, y);
    y += 8;
    if (y > 270) {
      doc.addPage();
      y = 20;
    }
  });

  doc.save("SCAI_Report.pdf");
}

// ====== HELPERS ======
function formatSection(section, lang) {
  const map = {
    general: lang === "ar" ? "عام" : "General",
    structure: lang === "ar" ? "الهيكل" : "Structure",
    foundation: lang === "ar" ? "الأساسات" : "Foundation",
    load: lang === "ar" ? "الأحمال" : "Load",
    maintenance: lang === "ar" ? "الصيانة" : "Maintenance",
    retrofit: lang === "ar" ? "التدعيم" : "Retrofit",
    seismic: lang === "ar" ? "الزلازل" : "Seismic",
  };
  return map[section] || section;
}

// ====== INIT ======
document.addEventListener("DOMContentLoaded", () => {
  setLang(currentLang);

  if (document.getElementById("questions")) {
    renderQuestions();
  }

  if (document.getElementById("calcBtn")) {
    document.getElementById("calcBtn").addEventListener("click", calculateResult);
  }

  if (document.getElementById("resetBtn")) {
    document.getElementById("resetBtn").addEventListener("click", () => {
      localStorage.removeItem("scai_result");
      window.location.reload();
    });
  }

  if (document.getElementById("resultCard")) {
    renderResults();
  }

  if (document.getElementById("downloadPdf")) {
    document.getElementById("downloadPdf").addEventListener("click", downloadPdf);
  }
});
