// ----------------------
// QUESTIONS DATA (ACI + ASCE)
// ----------------------
const questions = [
  { id: 1, icon: "1", img: "Load Path", ar: "هل يوجد مسار تحميل مباشر (Load path) من السقف إلى الأساسات؟", en: "Is there a direct load path from roof to foundations?", weight: 5 },
  { id: 2, icon: "2", img: "Redundancy", ar: "هل توجد تكرارات في العناصر الإنشائية (Redundancy)؟", en: "Is structural redundancy present?", weight: 5 },
  { id: 3, icon: "3", img: "Column Shear", ar: "هل الأعمدة الأساسية تحتوي على تقوية كافية (Shear/Confinement)؟", en: "Do main columns have sufficient shear/confinement?", weight: 5 },
  { id: 4, icon: "4", img: "Connections", ar: "هل توجد وصلات أعمدة/كمرات متوافقة مع ACI 318؟", en: "Are column-beam connections compliant with ACI 318?", weight: 5 },
  { id: 5, icon: "5", img: "Drop Panels", ar: "هل توجد مناطق Drop Panel أو Flat slab بدون تقوية كافية؟", en: "Are there drop panels/flat slabs without sufficient reinforcement?", weight: 5 },
  { id: 6, icon: "6", img: "Expansion Joints", ar: "هل توجد فواصل إنشائية (Expansion joints) بشكل صحيح؟", en: "Are expansion joints properly designed?", weight: 4 },
  { id: 7, icon: "7", img: "Soft Story", ar: "هل توجد أعمدة أو جدران حاملة غير متوازنة (Soft story)؟", en: "Are there soft-story or weak-story conditions?", weight: 5 },
  { id: 8, icon: "8", img: "Seismic Design", ar: "هل تم تصميم المبنى ضد زلازل حسب ACI 318 و ASCE 7؟", en: "Is seismic design according to ACI 318 & ASCE 7?", weight: 5 },
  { id: 9, icon: "9", img: "Lateral System", ar: "هل يوجد نظام مقاومة جانبية كافٍ (Shear walls/Braced frames)؟", en: "Is there sufficient lateral resistance system?", weight: 5 },
  { id: 10, icon: "10", img: "Joints", ar: "هل تم فحص المفاصل (Joints) حسب ACI 352؟", en: "Are joints checked according to ACI 352?", weight: 4 },
  { id: 11, icon: "11", img: "Understrength", ar: "هل توجد أعمدة ضعيفة مقارنة بالأحمال (Understrength columns)؟", en: "Are there understrength columns?", weight: 5 },
  { id: 12, icon: "12", img: "Shear Check", ar: "هل تم التأكد من قوة القص في الكمرات والأعمدة؟", en: "Is shear strength verified in beams/columns?", weight: 4 },
  { id: 13, icon: "13", img: "Openings", ar: "هل توجد فتحات كبيرة في البلاطات بدون تدعيم؟", en: "Are large slab openings properly reinforced?", weight: 4 },
  { id: 14, icon: "14", img: "Concentrated Loads", ar: "هل توجد أحمال ثقيلة مركزة بدون توزيع مناسب؟", en: "Are heavy concentrated loads properly distributed?", weight: 4 },
  { id: 15, icon: "15", img: "Bracing", ar: "هل تم تصميم الدعائم (Bracing) في المناطق الحرجة؟", en: "Are bracing provided in critical zones?", weight: 4 },
  { id: 16, icon: "16", img: "Wall Connection", ar: "هل توجد جدران حاملة غير متصلة بشكل جيد مع الهيكل؟", en: "Are load-bearing walls properly connected to structure?", weight: 4 },
  { id: 17, icon: "17", img: "Corrosion", ar: "هل توجد تسليحات غير مناسبة أو تآكل في الحديد؟", en: "Is there inadequate reinforcement or corrosion?", weight: 4 },
  { id: 18, icon: "18", img: "Moderate Quake", ar: "هل تم تصميم المبنى لمقاومة زلازل متوسطة؟", en: "Is building designed for moderate earthquakes?", weight: 5 },
  { id: 19, icon: "19", img: "Unbraced", ar: "هل توجد أجزاء من الهيكل بدون دعم جانبي (Unbraced sections)؟", en: "Are there unbraced structural parts?", weight: 4 },
  { id: 20, icon: "20", img: "Alternate Path", ar: "هل يوجد نظام حماية ضد انهيار متسلسل (Alternate load path)؟", en: "Is there an alternate load path system?", weight: 5 }
];

let answers = Array(questions.length).fill(null);
let lang = "ar";

// DOM
const questionsContainer = document.getElementById("questions-container");
const btnEn = document.getElementById("btn-en");
const btnAr = document.getElementById("btn-ar");
const progressFill = document.getElementById("progress-fill");
const progressText = document.getElementById("progress-text");

// render questions
function renderQuestions() {
  questionsContainer.innerHTML = "";
  questions.forEach(q => {
    const card = document.createElement("div");
    card.className = "question-card";
    card.innerHTML = `
      <div class="q-top">
        <div class="q-icon">${q.icon}</div>
        <div class="q-text">
          <div class="q-text-ar">${q.ar}</div>
          <div class="q-text-en" style="display:none;">${q.en}</div>
        </div>
      </div>
      <div class="q-img">${q.img}</div>
      <div class="q-options">
        <button data-id="${q.id}" data-val="yes" class="opt-btn">نعم / Yes</button>
        <button data-id="${q.id}" data-val="no" class="opt-btn">لا / No</button>
      </div>
    `;
    questionsContainer.appendChild(card);
  });
  updateLanguage();
  updateProgress();
}

// language switch
function updateLanguage() {
  document.querySelectorAll("[data-ar]").forEach(el => {
    if (lang === "ar") el.innerText = el.getAttribute("data-ar");
    else el.innerText = el.getAttribute("data-en");
  });

  document.querySelectorAll(".q-text-ar").forEach(el => el.style.display = lang === "ar" ? "" : "none");
  document.querySelectorAll(".q-text-en").forEach(el => el.style.display = lang === "en" ? "" : "none");

  document.querySelectorAll(".opt-btn").forEach(btn => {
    btn.innerText = lang === "ar" ? (btn.dataset.val === "yes" ? "نعم" : "لا") : (btn.dataset.val === "yes" ? "Yes" : "No");
  });
}

btnEn.addEventListener("click", () => { lang = "en"; btnEn.classList.add("active"); btnAr.classList.remove("active"); updateLanguage(); });
btnAr.addEventListener("click", () => { lang = "ar"; btnAr.classList.add("active"); btnEn.classList.remove("active"); updateLanguage(); });

// answer selection
questionsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("opt-btn")) {
    const id = parseInt(e.target.dataset.id);
    const val = e.target.dataset.val;
    answers[id - 1] = val === "yes" ? 1 : 0;

    e.target.parentElement.querySelectorAll("button").forEach(btn => btn.classList.remove("active"));
    e.target.classList.add("active");
    updateProgress();
  }
});

function updateProgress() {
  const answered = answers.filter(a => a !== null).length;
  progressFill.style.width = `${(answered / questions.length) * 100}%`;
  progressText.innerText = `${answered} / ${questions.length}`;
}

// EVALUATION
function evaluate() {
  let score = 0;
  questions.forEach((q, idx) => {
    if (answers[idx] === 1) score += q.weight;
  });

  const maxScore = questions.reduce((sum, q) => sum + q.weight, 0);
  const percent = (score / maxScore) * 100;

  let risk = "", summary = "", recs = [];

  if (percent >= 80) {
    risk = lang === "ar" ? "خطر عالي" : "High Risk";
    summary = lang === "ar"
      ? "المبنى يظهر عليه علامات خطر كبير للانهيار المتسلسل. يوصى بفحص هندسي ميداني عاجل."
      : "The building shows high signs of progressive collapse risk. Immediate field inspection is recommended.";
    recs = [
      lang === "ar" ? "إجراء فحص ميداني كامل بواسطة مهندس إنشائي." : "Conduct full field inspection by a structural engineer.",
      lang === "ar" ? "تقييم الأعمدة والكمرات والموصلات حسب ACI 318 و ASCE 7." : "Evaluate columns/beams/connections per ACI 318 & ASCE 7.",
      lang === "ar" ? "إضافة تدعيم (Bracing/Shear walls) إذا لزم." : "Add reinforcement (Bracing/Shear walls) if needed."
    ];
  } else if (percent >= 50) {
    risk = lang === "ar" ? "بحاجة لتدعيم" : "Needs Reinforcement";
    summary = lang === "ar"
      ? "المبنى قد يحتاج لتدعيم في مناطق محددة لتقليل خطر الانهيار المتسلسل."
      : "The building may need reinforcement in specific areas to reduce progressive collapse risk.";
    recs = [
      lang === "ar" ? "تحسين مسار التحميل (Load path) في العناصر الحرجة." : "Improve load path in critical elements.",
      lang === "ar" ? "مراجعة وصلات الأعمدة والكمرات وفق ACI 318." : "Review column-beam connections per ACI 318.",
      lang === "ar" ? "إجراء تقييم إضافي للاحمال الزلزالية حسب ASCE 7." : "Perform additional seismic load assessment per ASCE 7."
    ];
  } else {
    risk = lang === "ar" ? "آمن نسبيًا" : "Relatively Safe";
    summary = lang === "ar"
      ? "لا توجد مؤشرات قوية لخطر الانهيار المتسلسل، لكن لا يغني عن الفحص الهندسي الحقيقي."
      : "No strong indicators of progressive collapse risk, but not a substitute for real engineering inspection.";
    recs = [
      lang === "ar" ? "مراجعة التصميم والتوثيق حسب ACI 318 و ASCE 7." : "Review design and documentation per ACI 318 & ASCE 7.",
      lang === "ar" ? "الاستمرار بالمراقبة الدورية والصيانة." : "Continue periodic monitoring and maintenance."
    ];
  }

  document.getElementById("score").innerText = score;
  document.getElementById("risk").innerText = risk;
  document.getElementById("summary").innerText = summary;

  const recList = document.getElementById("recommendations");
  recList.innerHTML = "";
  recs.forEach(r => {
    const li = document.createElement("li");
    li.innerText = r;
    recList.appendChild(li);
  });
}

// reset
document.getElementById("reset-btn").addEventListener("click", () => {
  answers = Array(questions.length).fill(null);
  document.querySelectorAll(".opt-btn").forEach(btn => btn.classList.remove("active"));
  document.getElementById("score").innerText = 0;
  document.getElementById("risk").innerText = "-";
  document.getElementById("summary").innerText = "";
  document.getElementById("recommendations").innerHTML = "";
  updateProgress();
});

// PDF download
document.getElementById("download-btn").addEventListener("click", () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFontSize(16);
  doc.text("JRSI - Progressive Collapse Report", 20, 20);

  doc.setFontSize(12);
  doc.text(`Owner: ENG SUHAIB AL_ZYOUD`, 20, 30);
  doc.text(`Reference: ACI 318 / ACI 352 / ASCE 7`, 20, 38);

  doc.text(`Score: ${document.getElementById("score").innerText}`, 20, 50);
  doc.text(`Risk: ${document.getElementById("risk").innerText}`, 20, 58);
  doc.text(`Summary: ${document.getElementById("summary").innerText}`, 20, 66);

  const recs = Array.from(document.querySelectorAll("#recommendations li")).map(li => li.innerText);
  doc.text("Recommendations:", 20, 80);
  recs.forEach((r, idx) => {
    doc.text(`- ${r}`, 20, 90 + idx * 8);
  });

  doc.save("JRSI_Report.pdf");
});

// start button scroll
document.getElementById("start-btn").addEventListener("click", () => {
  document.getElementById("questions").scrollIntoView({ behavior: "smooth" });
});

// ----------------------
// Leaflet Map (Jordan)
// ----------------------
const map = L.map('mapid').setView([31.9, 35.9], 7);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// sample earthquake markers (for demo)
const quakes = [
  { lat: 32.0, lon: 36.0, mag: 5.5 },
  { lat: 31.5, lon: 35.8, mag: 4.2 },
  { lat: 31.9, lon: 35.4, mag: 3.2 }
];

quakes.forEach(q => {
  const color = q.mag >= 5 ? '#ff4d4d' : q.mag >= 4 ? '#f59e0b' : '#5bc0de';
  L.circle([q.lat, q.lon], {
    color,
    fillColor: color,
    fillOpacity: 0.7,
    radius: q.mag * 8000
  }).addTo(map).bindPopup(`Magnitude: ${q.mag}`);
});

renderQuestions();
