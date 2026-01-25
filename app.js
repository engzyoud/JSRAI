// ============================
// Structural Collapse AI (SCAI)
// ============================

// Global variables
let lang = localStorage.getItem("scai_lang") || "en";
const questions = [
  {
    id: 1,
    en: "Building type & use (residential, commercial, industrial)?",
    ar: "نوع المبنى واستخدامه (سكني، تجاري، صناعي)؟",
    weight: 3
  },
  {
    id: 2,
    en: "Number of floors and height (low-rise vs high-rise)?",
    ar: "عدد الطوابق والارتفاع (منخفض أم عالي)؟",
    weight: 4
  },
  {
    id: 3,
    en: "Age of the building (years)?",
    ar: "عمر المبنى (بالسنوات)؟",
    weight: 4
  },
  {
    id: 4,
    en: "Any visible major cracks in columns or beams?",
    ar: "هل يوجد تشققات واضحة في الأعمدة أو الكمرات؟",
    weight: 5
  },
  {
    id: 5,
    en: "Any signs of foundation settlement or uneven floors?",
    ar: "هل توجد علامات هبوط في الأساسات أو أرضيات غير مستوية؟",
    weight: 5
  },
  {
    id: 6,
    en: "Quality of concrete (based on visible condition or documentation)?",
    ar: "جودة الخرسانة (حسب الملاحظة أو الوثائق)؟",
    weight: 4
  },
  {
    id: 7,
    en: "Condition of reinforcement (rust, exposure, corrosion signs)?",
    ar: "حالة التسليح (صدأ، تعرض، علامات تآكل)؟",
    weight: 5
  },
  {
    id: 8,
    en: "Were any structural modifications made (walls removed, added openings)?",
    ar: "هل تم إجراء تعديلات إنشائية (إزالة جدران، فتحات جديدة)؟",
    weight: 4
  },
  {
    id: 9,
    en: "Was the building designed for seismic loads (based on documents or location)?",
    ar: "هل تم تصميم المبنى لتحمل الزلازل (حسب الوثائق أو الموقع)؟",
    weight: 5
  },
  {
    id: 10,
    en: "Soil condition (soft soil, rocky, or unknown)?",
    ar: "حالة التربة (طين/رمل ناعم، صخر، أو غير معروف)؟",
    weight: 4
  },
  {
    id: 11,
    en: "Any signs of water leakage or dampness in structural elements?",
    ar: "هل توجد تسريبات مياه أو رطوبة في العناصر الإنشائية؟",
    weight: 3
  },
  {
    id: 12,
    en: "Are beams and columns properly connected (no separation signs)?",
    ar: "هل الكمرات والأعمدة متصلة بشكل صحيح (لا يوجد انفصال)؟",
    weight: 5
  },
  {
    id: 13,
    en: "Is there a drop panel or shear reinforcement around columns?",
    ar: "هل يوجد drop panel أو تقوية قص حول الأعمدة؟",
    weight: 3
  },
  {
    id: 14,
    en: "Has the building been exposed to strong events (earthquake, flood, fire)?",
    ar: "هل تعرض المبنى لأحداث قوية (زلزال، فيضان، حريق)؟",
    weight: 5
  },
  {
    id: 15,
    en: "Is the structural system regular (symmetry, uniformity, no soft story)?",
    ar: "هل النظام الإنشائي منتظم (تناظر، لا يوجد طابق لين)؟",
    weight: 5
  },
  {
    id: 16,
    en: "Are the columns and beams visibly deformed or bent?",
    ar: "هل الأعمدة والكمرات مشوهة أو منحنية بشكل واضح؟",
    weight: 5
  },
  {
    id: 17,
    en: "Is the building load within expected use (no extra heavy equipment)?",
    ar: "هل الأحمال ضمن الاستخدام المتوقع (لا يوجد معدات ثقيلة إضافية)؟",
    weight: 4
  },
  {
    id: 18,
    en: "Any signs of previous reinforcement or retrofitting?",
    ar: "هل يوجد تقوية أو تدعيم سابق؟",
    weight: 3
  },
  {
    id: 19,
    en: "Are the structural drawings available and consistent with the current building?",
    ar: "هل توجد رسومات إنشائية وهل هي مطابقة للمبنى الحالي؟",
    weight: 4
  },
  {
    id: 20,
    en: "Is the building located in a high seismic risk zone (based on approximate maps)?",
    ar: "هل يقع المبنى في منطقة زلزال عالية الخطورة (حسب الخرائط التقريبية)؟",
    weight: 5
  }
];

// Language function
function setLang(l) {
  lang = l;
  localStorage.setItem("scai_lang", l);

  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.getAttribute("data-" + l);
  });

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.remove("active");
  });
  document.querySelector(`[onclick="setLang('${l}')"]`).classList.add("active");

  // Direction
  if (l === "ar") document.body.dir = "rtl";
  else document.body.dir = "ltr";

  // Load questions if on assessment page
  if (document.getElementById("questions")) renderQuestions();
}

// Render questions
function renderQuestions() {
  const qDiv = document.getElementById("questions");
  if (!qDiv) return;

  qDiv.innerHTML = "";

  questions.forEach(q => {
    const card = document.createElement("div");
    card.className = "question-card";

    const title = document.createElement("div");
    title.className = "question-title";
    title.textContent = lang === "ar" ? q.ar : q.en;

    const sub = document.createElement("div");
    sub.className = "question-sub";
    sub.textContent = lang === "ar" ? "اختر تقييم 1–5" : "Choose rating 1–5";

    const rating = document.createElement("div");
    rating.className = "rating";

    for (let i = 1; i <= 5; i++) {
      const input = document.createElement("input");
      input.type = "radio";
      input.name = `q${q.id}`;
      input.id = `q${q.id}_${i}`;
      input.value = i;

      const label = document.createElement("label");
      label.htmlFor = `q${q.id}_${i}`;
      label.textContent = i;

      rating.appendChild(input);
      rating.appendChild(label);
    }

    card.appendChild(title);
    card.appendChild(sub);
    card.appendChild(rating);
    qDiv.appendChild(card);
  });
}

// Calculation logic
function calculateResult() {
  let totalWeight = 0;
  let scoreSum = 0;

  questions.forEach(q => {
    const value = document.querySelector(`input[name="q${q.id}"]:checked`);
    if (!value) return;
    const val = parseInt(value.value);

    totalWeight += q.weight;
    scoreSum += val * q.weight;
  });

  if (totalWeight === 0) {
    alert(lang === "ar" ? "يرجى الإجابة على الأسئلة أولاً" : "Please answer the questions first");
    return;
  }

  const maxScore = totalWeight * 5;
  const scorePercent = Math.round((scoreSum / maxScore) * 100);

  // Risk classification
  let riskLevel, recommendation, why;

  if (scorePercent >= 80) {
    riskLevel = lang === "ar" ? "سليم" : "Safe";
    recommendation = lang === "ar" ? "لا حاجة لتدخل فوري. فحص دوري فقط." : "No immediate action needed. Regular inspection recommended.";
    why = lang === "ar" ? "المدخلات تشير إلى حالة جيدة وامتثال للكود." : "Inputs indicate good condition and code compliance.";
  } else if (scorePercent >= 60) {
    riskLevel = lang === "ar" ? "يحتاج فحص مهندس" : "Needs Inspection";
    recommendation = lang === "ar" ? "يُنصح بفحص هندسي لتأكيد الحالة." : "Engineering inspection recommended to confirm status.";
    why = lang === "ar" ? "بعض المؤشرات تحتاج مراجعة (تشققات/تعديلات/تربة)." : "Some indicators require review (cracks/modifications/soil).";
  } else if (scorePercent >= 40) {
    riskLevel = lang === "ar" ? "يحتاج تدعيم" : "Needs Strengthening";
    recommendation = lang === "ar" ? "يوصى بتقوية/تدعيم أو مراجعة تصميم." : "Strengthening or redesign review is recommended.";
    why = lang === "ar" ? "مؤشرات خطورة متوسطة مثل تشققات أو تعديلات أو تربة غير مستقرة." : "Moderate risk indicators like cracks, modifications, or unstable soil.";
  } else {
    riskLevel = lang === "ar" ? "خطر عالي" : "High Risk";
    recommendation = lang === "ar" ? "ضرورة فحص ميداني عاجل وإجراءات حماية." : "Urgent field inspection and safety measures required.";
    why = lang === "ar" ? "مؤشرات خطرة مثل تشققات كبيرة، تآكل، أو تعديلات غير مناسبة." : "High-risk indicators like major cracks, corrosion, or improper modifications.";
  }

  // Save result in localStorage for results page
  const result = {
    score: scorePercent,
    riskLevel,
    recommendation,
    why,
    timestamp: new Date().toLocaleString()
  };
  localStorage.setItem("scai_result", JSON.stringify(result));

  // Redirect to results
  window.location.href = "results.html";
}

// Reset
function resetAssessment() {
  questions.forEach(q => {
    document.querySelectorAll(`input[name="q${q.id}"]`).forEach(inp => inp.checked = false);
  });
}

// Load results
function loadResults() {
  const res = localStorage.getItem("scai_result");
  if (!res) return;

  const result = JSON.parse(res);
  document.getElementById("scoreValue").textContent = result.score + "%";
  document.getElementById("riskLevel").textContent = result.riskLevel;
  document.getElementById("recommendation").textContent = result.recommendation;
  document.getElementById("why").textContent = result.why;
}

// PDF generation
function generatePDF() {
  const res = localStorage.getItem("scai_result");
  if (!res) return alert(lang === "ar" ? "لا توجد نتيجة" : "No result found");

  const result = JSON.parse(res);

  const doc = new jsPDF();
  doc.setFontSize(18);
  doc.text("SCAI - Structural Collapse AI", 14, 20);
  doc.setFontSize(12);
  doc.text(`Score: ${result.score}%`, 14, 35);
  doc.text(`Risk Level: ${result.riskLevel}`, 14, 45);
  doc.text(`Recommendation: ${result.recommendation}`, 14, 55);
  doc.text(`Why: ${result.why}`, 14, 65);
  doc.text(`Timestamp: ${result.timestamp}`, 14, 75);
  doc.save("SCAI_Report.pdf");
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  setLang(lang);

  if (document.getElementById("questions")) {
    renderQuestions();
    document.getElementById("calcBtn").addEventListener("click", calculateResult);
    document.getElementById("resetBtn").addEventListener("click", resetAssessment);
  }

  if (document.getElementById("scoreValue")) {
    loadResults();
    document.getElementById("downloadPdf").addEventListener("click", generatePDF);
  }
});
