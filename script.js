const LANG = {
  ar: {
    title: "تنبؤ انهيار المبنى باستخدام الذكاء الاصطناعي",
    subtitle: "أداة مساعدة مبنية على قواعد ACI و ASCE لتقييم خطر الانهيار المتسلسل. هذه الأداة لا تغني عن الفحص الإنشائي الميداني ولا تتحمل مسؤولية أي قرار بناءً على نتائجها.",
    start: "ابدأ التقييم",
    privacy: "سياسة الخصوصية & إخلاء المسؤولية",
    back: "رجوع",
    next: "التالي",
    resultTitle: "نتيجة التقييم",
    print: "طباعة PDF",
    restart: "إعادة التقييم",
    step: "الخطوة",
    of: "من",
    needsInspection: "يحتاج فحص ميداني",
    needsStrengthening: "يحتاج تدعيم",
    safe: "سليم (لا يوجد خطر كبير)",
    privacyTitle: "سياسة الخصوصية & إخلاء المسؤولية",
    privacyBack: "رجوع",
    privacyText: `
      <h3>1. الخصوصية</h3>
      <p>هذه الأداة لا تجمع بيانات شخصية. أي بيانات تُدخل في التقييم تُحفظ مؤقتًا داخل جهاز المستخدم فقط.</p>
      <h3>2. إخلاء المسؤولية</h3>
      <p>الأداة <b>للمساعدة فقط</b> ولا تغني عن الفحص الإنشائي الميداني. لا يتحمل صاحب الأداة أي مسؤولية عن أي قرار أو ضرر ناتج عن استخدام النتائج.</p>
      <h3>3. الاستناد للكود</h3>
      <p>تم بناء منطق التقييم بناءً على مبادئ ACI 318 و ASCE 7، كإرشادات عامة فقط.</p>
    `,
  },
  en: {
    title: "Structural Collapse Prediction using AI",
    subtitle: "A support tool based on ACI and ASCE principles for assessing progressive collapse risk. This tool does not replace field structural inspection and the author is not responsible for decisions based on results.",
    start: "Start Assessment",
    privacy: "Privacy Policy & Disclaimer",
    back: "Back",
    next: "Next",
    resultTitle: "Assessment Result",
    print: "Print PDF",
    restart: "Restart",
    step: "Step",
    of: "of",
    needsInspection: "Needs Field Inspection",
    needsStrengthening: "Needs Strengthening",
    safe: "Safe (No major risk detected)",
    privacyTitle: "Privacy Policy & Disclaimer",
    privacyBack: "Back",
    privacyText: `
      <h3>1. Privacy</h3>
      <p>This tool does not collect personal data. All inputs remain locally on the user's device.</p>
      <h3>2. Disclaimer</h3>
      <p>This tool is <b>for assistance only</b> and does not replace a field structural inspection. The author is not responsible for any decisions or damages.</p>
      <h3>3. Code Reference</h3>
      <p>Assessment logic is based on ACI 318 and ASCE 7 principles as general guidance.</p>
    `,
  }
};

let currentLang = "ar";
let currentStep = 0;

const questions = [
  {
    id: "buildingType",
    ar: {
      q: "نوع المبنى",
      desc: "اختر نوع المبنى لتحديد نمط التحميل والتصميم.",
      options: [
        { text: "سكني", score: 1 },
        { text: "تجاري", score: 2 },
        { text: "صناعي", score: 2 },
        { text: "مختلط", score: 3 },
      ]
    },
    en: {
      q: "Building Type",
      desc: "Choose the building type to determine load pattern.",
      options: [
        { text: "Residential", score: 1 },
        { text: "Commercial", score: 2 },
        { text: "Industrial", score: 2 },
        { text: "Mixed", score: 3 },
      ]
    }
  },
  {
    id: "storyCount",
    ar: {
      q: "عدد الطوابق",
      desc: "عدد الطوابق يؤثر على خطر الانهيار المتسلسل.",
      options: [
        { text: "1-3", score: 1 },
        { text: "4-7", score: 2 },
        { text: "8-12", score: 3 },
        { text: "أكثر من 12", score: 4 },
      ]
    },
    en: {
      q: "Number of Stories",
      desc: "Higher stories increase progressive collapse risk.",
      options: [
        { text: "1-3", score: 1 },
        { text: "4-7", score: 2 },
        { text: "8-12", score: 3 },
        { text: "More than 12", score: 4 },
      ]
    }
  },
  {
    id: "structureType",
    ar: {
      q: "نوع الهيكل الإنشائي",
      desc: "اختر نوع الهيكل (خرسانة/حديد/مختلط).",
      options: [
        { text: "خرسانة مسلحة", score: 1 },
        { text: "هيكل فولاذي", score: 2 },
        { text: "مختلط", score: 2 },
        { text: "طوب/حجر", score: 4 },
      ]
    },
    en: {
      q: "Structural System",
      desc: "Choose the structural system (RC/Steel/Mixed).",
      options: [
        { text: "Reinforced Concrete", score: 1 },
        { text: "Steel Frame", score: 2 },
        { text: "Mixed", score: 2 },
        { text: "Masonry", score: 4 },
      ]
    }
  },
  {
    id: "seismicDesign",
    ar: {
      q: "هل تم تصميم المبنى لمقاومة الزلازل؟",
      desc: "التصميم الزلزالي يقلل خطر الانهيار المتسلسل.",
      options: [
        { text: "نعم (وفق كود زلزال)", score: 1 },
        { text: "جزئي", score: 2 },
        { text: "لا", score: 4 },
      ]
    },
    en: {
      q: "Seismic Design",
      desc: "Seismic design reduces progressive collapse risk.",
      options: [
        { text: "Yes (Code-based)", score: 1 },
        { text: "Partial", score: 2 },
        { text: "No", score: 4 },
      ]
    }
  },
  {
    id: "beamColumnContinuity",
    ar: {
      q: "استمرارية الأعمدة والكمرات (Ductility)",
      desc: "الاستمرارية تقلل احتمالية انهيار عنصر واحد يسبب انهيار كامل.",
      options: [
        { text: "ممتازة (تفاصيل قوية)", score: 1 },
        { text: "متوسطة", score: 2 },
        { text: "ضعيفة/غير واضحة", score: 4 },
      ]
    },
    en: {
      q: "Beam-Column Continuity",
      desc: "Continuity reduces progressive collapse risk.",
      options: [
        { text: "Excellent (strong detailing)", score: 1 },
        { text: "Moderate", score: 2 },
        { text: "Weak/Unknown", score: 4 },
      ]
    }
  },
  // ... Add 30 more questions similarly
];

const totalSteps = 5;
const questionsPerStep = Math.ceil(35 / totalSteps);
const answers = {};

const intro = document.getElementById("intro");
const wizard = document.getElementById("wizard");
const result = document.getElementById("result");
const privacy = document.getElementById("privacy");

const startBtn = document.getElementById("startBtn");
const privacyBtn = document.getElementById("privacyBtn");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
const wizardBody = document.getElementById("wizardBody");
const stepCounter = document.getElementById("stepCounter");
const progress = document.getElementById("progress");

const resultTitle = document.getElementById("resultTitle");
const resultSummary = document.getElementById("resultSummary");
const resultDetails = document.getElementById("resultDetails");

const printBtn = document.getElementById("printBtn");
const restartBtn = document.getElementById("restartBtn");

const privacyBackBtn = document.getElementById("privacyBackBtn");

const langAR = document.getElementById("langAR");
const langEN = document.getElementById("langEN");

function setLang(lang) {
  currentLang = lang;
  document.getElementById("title").innerText = LANG[lang].title;
  document.getElementById("subtitle").innerText = LANG[lang].subtitle;
  startBtn.innerText = LANG[lang].start;
  privacyBtn.innerText = LANG[lang].privacy;
  backBtn.innerText = LANG[lang].back;
  nextBtn.innerText = LANG[lang].next;
  resultTitle.innerText = LANG[lang].resultTitle;
  printBtn.innerText = LANG[lang].print;
  restartBtn.innerText = LANG[lang].restart;
  privacyBackBtn.innerText = LANG[lang].privacyBack;

  langAR.classList.toggle("active", lang === "ar");
  langEN.classList.toggle("active", lang === "en");
}

function showSection(section) {
  intro.classList.add("hidden");
  wizard.classList.add("hidden");
  result.classList.add("hidden");
  privacy.classList.add("hidden");
  section.classList.remove("hidden");
}

function renderStep() {
  wizardBody.innerHTML = "";
  const startIndex = currentStep * questionsPerStep;
  const endIndex = Math.min(startIndex + questionsPerStep, 35);

  for (let i = startIndex; i < endIndex; i++) {
    const q = questions[i];
    const card = document.createElement("div");
    card.className = "question-card";

    card.innerHTML = `
      <h3>${q[currentLang].q}</h3>
      <p>${q[currentLang].desc}</p>
      <div class="options" id="options-${q.id}"></div>
    `;
    wizardBody.appendChild(card);

    const optionsContainer = document.getElementById(`options-${q.id}`);
    q[currentLang].options.forEach((opt, idx) => {
      const option = document.createElement("div");
      option.className = "option";
      option.innerHTML = `
        <input type="radio" name="${q.id}" value="${opt.score}" id="${q.id}-${idx}">
        <label for="${q.id}-${idx}"><span>${opt.text}</span></label>
      `;
      option.addEventListener("click", () => {
        answers[q.id] = opt.score;
      });
      optionsContainer.appendChild(option);
    });
  }

  stepCounter.innerText = `${LANG[currentLang].step} ${currentStep + 1} ${LANG[currentLang].of} ${totalSteps}`;
  progress.style.width = `${((currentStep + 1) / totalSteps) * 100}%`;
}

function calculateResult() {
  let total = 0;
  Object.values(answers).forEach(v => total += v);

  const riskScore = total / 35;
  let status, summary, details;

  if (riskScore <= 1.5) {
    status = LANG[currentLang].safe;
    summary = `✔ ${status}`;
    details = `
      <p>التقييم يشير إلى أن المبنى في حالة جيدة بشكل عام.</p>
      <p>توصية: إجراء فحص دوري وفق ACI 318 و ASCE 7 فقط.</p>
      <p><b>ملاحظة:</b> هذا التقييم لا يغني عن الفحص الميداني.</p>
    `;
  } else if (riskScore <= 2.5) {
    status = LANG[currentLang].needsInspection;
    summary = `⚠ ${status}`;
    details = `
      <p>التقييم يشير إلى وجود عوامل قد تزيد خطر الانهيار المتسلسل.</p>
      <p>توصية: فحص إنشائي ميداني لتقييم التفاصيل (تفاصيل وصلات، استمرارية الأعمدة، والتصميم الزلزالي).</p>
      <p>الاستناد: ACI 318 + ASCE 7.</p>
    `;
  } else {
    status = LANG[currentLang].needsStrengthening;
    summary = `⛔ ${status}`;
    details = `
      <p>التقييم يشير إلى خطر مرتفع للانهيار المتسلسل.</p>
      <p>توصية: إجراء تحليل تفصيلي وتدعيم العناصر الضعيفة (زيادة حديد، تحسين وصلات، تدعيم الأعمدة/الكمرات).</p>
      <p>الاستناد: ACI 318 + ASCE 7.</p>
    `;
  }

  resultSummary.innerHTML = summary;
  resultDetails.innerHTML = details;
}

function printPDF() {
  const { jsPDF } = window.jspdf;
  html2canvas(result).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgProps= pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('StructuralCollapseAI_Report.pdf');
  });
}

startBtn.addEventListener("click", () => {
  showSection(wizard);
  currentStep = 0;
  renderStep();
});

privacyBtn.addEventListener("click", () => {
  showSection(privacy);
  privacy.querySelector(".privacy-content").innerHTML = LANG[currentLang].privacyText;
});

privacyBackBtn.addEventListener("click", () => showSection(intro));

backBtn.addEventListener("click", () => {
  if (currentStep === 0) {
    showSection(intro);
    return;
  }
  currentStep--;
  renderStep();
});

nextBtn.addEventListener("click", () => {
  if (currentStep < totalSteps - 1) {
    currentStep++;
    renderStep();
  } else {
    calculateResult();
    showSection(result);
  }
});

restartBtn.addEventListener("click", () => {
  Object.keys(answers).forEach(k => delete answers[k]);
  showSection(intro);
});

printBtn.addEventListener("click", printPDF);

langAR.addEventListener("click", () => setLang("ar"));
langEN.addEventListener("click", () => setLang("en"));

setLang("ar");
