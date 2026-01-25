const questions = [
  { en: "Continuous Load Path", ar: "هل يوجد مسار تحميل مستمر؟", ref: "ACI 318 §21.1" },
  { en: "Redundancy (Alternate Load Paths)", ar: "هل يوجد مسارات تحميل بديلة؟", ref: "ACI 318 §21.2" },
  { en: "Key Columns", ar: "هل توجد أعمدة أساسية بدون بدائل؟", ref: "ACI 318 §21.4" },
  { en: "Strong Column – Weak Beam", ar: "هل الأعمدة أقوى من الحزم؟", ref: "ACI 318 §21.6" },
  { en: "Shear Walls / Braced Frames", ar: "هل يوجد نظام مقاومة قص قوي؟", ref: "ACI 318 §21.8" },
  { en: "Weak Story / Soft Story", ar: "هل يوجد طابق ضعيف؟", ref: "ACI 318 §21.9" },
  { en: "Large Openings", ar: "هل يوجد فتحات كبيرة؟", ref: "ACI 318 §21.10" },
  { en: "Irregularity", ar: "هل يوجد عدم انتظام كبير؟", ref: "ACI 318 §21.10" },
  { en: "Column Tie Reinforcement", ar: "هل يوجد تسليح ربط كافي؟", ref: "ACI 318 §21.12" },
  { en: "Beam-Column Joints", ar: "هل وصلات الحزم قوية؟", ref: "ACI 318 §21.13" },
  { en: "Seismic Design", ar: "هل التصميم زلزالي حديث؟", ref: "ACI 318 §21.14" },
  { en: "Ductility", ar: "هل التصميم يسمح باللدونة؟", ref: "ACI 318 §21.15" },
  { en: "Progressive Collapse Analysis", ar: "هل تم تحليل الانهيار المتسلسل؟", ref: "ACI 318 §21.16" },
  { en: "Load Path at Discontinuities", ar: "هل تم معالجة نقاط الانقطاع؟", ref: "ACI 318 §21.17" },
  { en: "Foundation & Soil", ar: "هل الأساس والتربة مصممين بشكل صحيح؟", ref: "ACI 318 §21.18" },
  { en: "Column Shortening / P-Delta", ar: "هل تم اعتبار P-Delta؟", ref: "ACI 318 §21.19" },
  { en: "Construction Quality", ar: "هل التنفيذ والفحص جيد؟", ref: "ACI 318 §21.20" },
  { en: "Structural Modifications", ar: "هل يوجد تعديلات بدون مراجعة؟", ref: "ACI 318 §21.21" },
  { en: "Maintenance", ar: "هل يوجد صيانة دورية؟", ref: "ACI 318 §21.22" },
  { en: "Emergency Plan", ar: "هل يوجد خطة إخلاء؟", ref: "ACI 318 §21.23" },
];

let lang = "ar";

const checklist = document.getElementById("checklist");
const scoreEl = document.getElementById("score");
const riskEl = document.getElementById("risk");
const confidenceEl = document.getElementById("confidence");
const reportEl = document.getElementById("report");

function renderChecklist(){
  checklist.innerHTML = "";
  questions.forEach((q, idx) => {
    const item = document.createElement("div");
    item.classList.add("check-item");
    item.innerHTML = `
      <div>
        <span>${lang === "ar" ? q.ar : q.en}</span>
        <div><small>${q.ref}</small></div>
      </div>
      <select id="q${idx}" class="select">
        <option value="yes">${lang === "ar" ? "نعم" : "Yes"}</option>
        <option value="no">${lang === "ar" ? "لا" : "No"}</option>
      </select>
    `;
    checklist.appendChild(item);
  });
}

function calculate(){
  let score = 0;
  questions.forEach((_, idx) => {
    const val = document.getElementById(`q${idx}`).value;
    if(val === "yes") score += 1;
  });

  const risk = score <= 7 ? "Low" : score <= 14 ? "Moderate" : "High";
  const riskAr = score <= 7 ? "منخفض" : score <= 14 ? "متوسط" : "عالي";

  const confidence = Math.round((score / questions.length) * 100);

  scoreEl.innerText = score;
  riskEl.innerText = lang === "ar" ? riskAr : risk;
  confidenceEl.innerText = `${confidence}%`;

  return { score, risk, confidence };
}

function generateReport(){
  const { score, risk, confidence } = calculate();

  const report = `
    JRSI – Jordan Structural Risk Index
    Powered by ENG SUHAIB AL_ZYOUD

    Score: ${score}/20
    Risk Level: ${risk}
    AI Confidence: ${confidence}%

    Notes:
    - Refer to ACI 318 §21 for progressive collapse requirements.
    - Use this tool for preliminary assessment only.
  `;

  reportEl.innerText = report;

  // Generate PDF
  const { jsPDF } = window.jspdf;
  html2canvas(reportEl).then(canvas => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: "a4"
    });
    pdf.addImage(imgData, "PNG", 20, 20, 555, 0);
    pdf.save("JRSI_Report.pdf");
  });
}

document.getElementById("generateReport").addEventListener("click", generateReport);
document.getElementById("resetBtn").addEventListener("click", () => {
  questions.forEach((_, idx) => {
    document.getElementById(`q${idx}`).value = "yes";
  });
  calculate();
});

document.getElementById("themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

document.getElementById("langBtn").addEventListener("click", () => {
  lang = lang === "ar" ? "en" : "ar";
  document.getElementById("langBtn").innerText = lang === "ar" ? "EN" : "AR";
  renderChecklist();
  calculate();
});

renderChecklist();
calculate();
