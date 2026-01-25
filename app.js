const pages = ["home","assessment","results","policy"];
let currentPage = "home";
let currentQuestionIndex = 0;
let lang = "ar";

const questions = [
  { q_ar:"نوع المبنى؟", q_en:"Building type?", options:[
    {ar:"سكني", en:"Residential", v:1},
    {ar:"تجاري", en:"Commercial", v:2},
    {ar:"صناعي", en:"Industrial", v:3},
    {ar:"مختلط", en:"Mixed-use", v:2},
    {ar:"آخر", en:"Other", v:2}
  ]},
  { q_ar:"عدد الطوابق؟", q_en:"Number of floors?", options:[
    {ar:"1–3", en:"1–3", v:1},
    {ar:"4–7", en:"4–7", v:2},
    {ar:"8–12", en:"8–12", v:3},
    {ar:"13–20", en:"13–20", v:4},
    {ar:"أكثر من 20", en:">20", v:5}
  ]},
  { q_ar:"هل المبنى في منطقة زلزالية مرتفعة؟", q_en:"Is the building in high seismic zone?", options:[
    {ar:"نعم", en:"Yes", v:5},
    {ar:"لا", en:"No", v:1}
  ]},
  { q_ar:"نوع التربة (حسب الخريطة التقريبية)؟", q_en:"Soil type (approx. map)?", options:[
    {ar:"صخور/صخرية", en:"Rock/Bedrock", v:1},
    {ar:"تربة صلبة", en:"Stiff soil", v:2},
    {ar:"تربة متوسطة", en:"Medium soil", v:3},
    {ar:"تربة رخوة", en:"Soft soil", v:4},
    {ar:"تربة طينية/مياه عالية", en:"Clay/High water table", v:5}
  ]},
  { q_ar:"هل يوجد تغيير كبير في ارتفاع الطوابق؟", q_en:"Any sudden floor height changes?", options:[
    {ar:"نعم", en:"Yes", v:4},
    {ar:"لا", en:"No", v:1}
  ]},
  { q_ar:"هل يوجد فجوات كبيرة في الطابق الأرضي (مثل مداخل سيارات واسعة)؟", q_en:"Any large openings at ground floor (e.g., wide parking entrance)?", options:[
    {ar:"نعم", en:"Yes", v:5},
    {ar:"لا", en:"No", v:1}
  ]},
  { q_ar:"هل يوجد توزيع غير متوازن للأعمدة؟", q_en:"Any irregular column distribution?", options:[
    {ar:"نعم", en:"Yes", v:4},
    {ar:"لا", en:"No", v:1}
  ]},
  { q_ar:"هل توجد تشققات طولية في الأعمدة؟", q_en:"Any longitudinal cracks in columns?", options:[
    {ar:"نعم", en:"Yes", v:5},
    {ar:"لا", en:"No", v:1}
  ]},
  { q_ar:"هل توجد تشققات عرضية في الكمرات؟", q_en:"Any transverse cracks in beams?", options:[
    {ar:"نعم", en:"Yes", v:5},
    {ar:"لا", en:"No", v:1}
  ]},
  { q_ar:"هل يوجد ميلان واضح في المبنى؟", q_en:"Any visible building tilt?", options:[
    {ar:"نعم", en:"Yes", v:5},
    {ar:"لا", en:"No", v:1}
  ]},
  { q_ar:"هل يوجد هبوط في الأرضيات أو الأسقف؟", q_en:"Any sagging floors/ceilings?", options:[
    {ar:"نعم", en:"Yes", v:5},
    {ar:"لا", en:"No", v:1}
  ]},
  { q_ar:"هل توجد شروخ متكررة في الجدران الداخلية؟", q_en:"Repeated cracks in interior walls?", options:[
    {ar:"نعم", en:"Yes", v:4},
    {ar:"لا", en:"No", v:1}
  ]},
  { q_ar:"هل توجد شروخ واسعة في الجدران الخارجية؟", q_en:"Wide cracks in exterior walls?", options:[
    {ar:"نعم", en:"Yes", v:5},
    {ar:"لا", en:"No", v:1}
  ]},
  { q_ar:"هل المبنى قبل 1990؟", q_en:"Built before 1990?", options:[
    {ar:"نعم", en:"Yes", v:4},
    {ar:"لا", en:"No", v:1}
  ]},
  { q_ar:"هل تم تعديل إنشائي (إزالة/تغيير حوائط أو أعمدة)؟", q_en:"Any structural modification (walls/columns removed)?", options:[
    {ar:"نعم", en:"Yes", v:5},
    {ar:"لا", en:"No", v:1}
  ]},
  { q_ar:"هل تم إضافة طابق بعد البناء؟", q_en:"Any added floors after construction?", options:[
    {ar:"نعم", en:"Yes", v:5},
    {ar:"لا", en:"No", v:1}
  ]},
  { q_ar:"هل يوجد نظام مقاومة قص غير متوازن؟", q_en:"Unbalanced lateral load system?", options:[
    {ar:"نعم", en:"Yes", v:4},
    {ar:"لا", en:"No", v:1}
  ]},
  { q_ar:"هل يوجد هبوط في الأساسات؟", q_en:"Foundation settlement?", options:[
    {ar:"نعم", en:"Yes", v:5},
    {ar:"لا", en:"No", v:1}
  ]},
  { q_ar:"هل يوجد تسرب مياه حول المبنى؟", q_en:"Water leakage around building?", options:[
    {ar:"نعم", en:"Yes", v:4},
    {ar:"لا", en:"No", v:1}
  ]},
  { q_ar:"هل يوجد صدأ في حديد التسليح؟", q_en:"Visible rebar corrosion?", options:[
    {ar:"نعم", en:"Yes", v:5},
    {ar:"لا", en:"No", v:1}
  ]},
  { q_ar:"هل يوجد تقشر في الخرسانة؟", q_en:"Concrete spalling?", options:[
    {ar:"نعم", en:"Yes", v:4},
    {ar:"لا", en:"No", v:1}
  ]},
  { q_ar:"هل توجد شروخ في البلاطات؟", q_en:"Cracks in slabs?", options:[
    {ar:"نعم", en:"Yes", v:4},
    {ar:"لا", en:"No", v:1}
  ]},
  { q_ar:"هل يوجد اهتزاز واضح عند الحركة؟", q_en:"Visible vibration when moving?", options:[
    {ar:"نعم", en:"Yes", v:4},
    {ar:"لا", en:"No", v:1}
  ]},
  { q_ar:"هل توجد علامات انزلاق في الجدران؟", q_en:"Signs of wall sliding?", options:[
    {ar:"نعم", en:"Yes", v:5},
    {ar:"لا", en:"No", v:1}
  ]},
  { q_ar:"هل تم تعديل حوائط حاملة بدون حساب؟", q_en:"Load-bearing walls modified without calculation?", options:[
    {ar:"نعم", en:"Yes", v:5},
    {ar:"لا", en:"No", v:1}
  ]},
  { q_ar:"هل تم استخدام مواد غير مطابقة للمواصفات؟", q_en:"Materials not up to specs?", options:[
    {ar:"نعم", en:"Yes", v:5},
    {ar:"لا", en:"No", v:1}
  ]},
  { q_ar:"هل يوجد ميلان في الأعمدة؟", q_en:"Column leaning?", options:[
    {ar:"نعم", en:"Yes", v:5},
    {ar:"لا", en:"No", v:1}
  ]},
  { q_ar:"هل تعرض المبنى لزلزال قوي سابقاً؟", q_en:"Experienced strong earthquake before?", options:[
    {ar:"نعم", en:"Yes", v:4},
    {ar:"لا", en:"No", v:1}
  ]},
  { q_ar:"هل توجد شروخ عند دعم الكمرات؟", q_en:"Cracks at beam supports?", options:[
    {ar:"نعم", en:"Yes", v:5},
    {ar:"لا", en:"No", v:1}
  ]},
  { q_ar:"هل توجد شروخ عند تقاطعات الأعمدة؟", q_en:"Cracks at column joints?", options:[
    {ar:"نعم", en:"Yes", v:5},
    {ar:"لا", en:"No", v:1}
  ]},
  { q_ar:"هل يوجد نظام مقاومة قص مناسب؟", q_en:"Adequate lateral load system?", options:[
    {ar:"نعم", en:"Yes", v:1},
    {ar:"لا", en:"No", v:5}
  ]},
  { q_ar:"هل توجد شروخ بسبب حمل زائد؟", q_en:"Cracks due to overload?", options:[
    {ar:"نعم", en:"Yes", v:4},
    {ar:"لا", en:"No", v:1}
  ]},
  { q_ar:"هل الأساسات غير مناسبة للتربة؟", q_en:"Inadequate foundation for soil?", options:[
    {ar:"نعم", en:"Yes", v:5},
    {ar:"لا", en:"No", v:1}
  ]},
  { q_ar:"هل توجد رطوبة داخل الجدران باستمرار؟", q_en:"Persistent wall dampness?", options:[
    {ar:"نعم", en:"Yes", v:4},
    {ar:"لا", en:"No", v:1}
  ]}
];

let answers = JSON.parse(localStorage.getItem("answers")) || [];
let currentQuestionIndexStored = parseInt(localStorage.getItem("currentQuestionIndex")) || 0;

if(answers.length === 0) {
  answers = Array(questions.length).fill(null);
}

function showPage(id){
  pages.forEach(p => {
    document.getElementById(p).classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
  currentPage = id;

  if(id === "assessment") renderQuestion();
  if(id === "results") renderResults();
}

function setLang(l){
  lang = l;
  document.querySelectorAll("[data-ar]").forEach(el => {
    el.innerText = l === "ar" ? el.dataset.ar : el.dataset.en;
  });
  document.querySelectorAll(".lang-btn").forEach(b => b.classList.remove("active"));
  document.querySelector(`.lang-btn[onclick="setLang('${l}')"]`).classList.add("active");
  if(currentPage === "assessment") renderQuestion();
  if(currentPage === "results") renderResults();
}

function startAssessment(){
  answers = Array(questions.length).fill(null);
  currentQuestionIndexStored = 0;
  localStorage.setItem("answers", JSON.stringify(answers));
  localStorage.setItem("currentQuestionIndex", currentQuestionIndexStored);
  showPage("assessment");
}

function renderQuestion(){
  const area = document.getElementById("question-area");
  area.innerHTML = "";

  const q = questions[currentQuestionIndexStored];

  const div = document.createElement("div");
  div.classList.add("question");

  const label = document.createElement("label");
  label.innerHTML = lang === "ar" ? q.q_ar : q.q_en;
  div.appendChild(label);

  const select = document.createElement("select");
  q.options.forEach(opt => {
    const option = document.createElement("option");
    option.value = opt.v;
    option.text = lang === "ar" ? opt.ar : opt.en;
    select.appendChild(option);
  });

  if(answers[currentQuestionIndexStored] !== null){
    select.value = answers[currentQuestionIndexStored];
  } else {
    select.value = q.options[0].v;
    answers[currentQuestionIndexStored] = q.options[0].v;
  }

  select.onchange = () => {
    answers[currentQuestionIndexStored] = parseInt(select.value);
    localStorage.setItem("answers", JSON.stringify(answers));
  };

  div.appendChild(select);
  area.appendChild(div);

  updateProgress();
}

function updateProgress(){
  const percent = ((currentQuestionIndexStored + 1) / questions.length) * 100;
  document.getElementById("progressBar").style.width = `${percent}%`;
  document.getElementById("progressText").innerText = lang === "ar"
    ? `السؤال ${currentQuestionIndexStored + 1} من ${questions.length}`
    : `Question ${currentQuestionIndexStored + 1} of ${questions.length}`;
}

function nextQuestion(){
  if(currentQuestionIndexStored < questions.length - 1){
    currentQuestionIndexStored++;
    localStorage.setItem("currentQuestionIndex", currentQuestionIndexStored);
    renderQuestion();
  } else {
    showPage("results");
  }
}

function prevQuestion(){
  if(currentQuestionIndexStored > 0){
    currentQuestionIndexStored--;
    localStorage.setItem("currentQuestionIndex", currentQuestionIndexStored);
    renderQuestion();
  }
}

function calculateScore(){
  return answers.reduce((a,b)=>a+(b||0),0);
}

function renderResults(){
  const area = document.getElementById("results-area");
  area.innerHTML = "";

  const score = calculateScore();
  const maxScore = questions.length * 5;
  const percent = Math.round((score / maxScore) * 100);

  let level = "Low Risk";
  let level_ar = "مخاطر منخفضة";
  let rec = "No immediate structural concerns detected. Monitor and inspect periodically.";
  let rec_ar = "لا توجد مخاطر إنشائية فورية واضحة. راقب وفحص بشكل دوري.";

  if(percent >= 70){
    level = "High Risk";
    level_ar = "مخاطر عالية";
    rec = "Immediate professional structural inspection required. Possible collapse indicators detected. Refer to ACI 318 & ASCE 7 for detailed evaluation.";
    rec_ar = "يتطلب فحص إنشائي مهني فوري. تم الكشف عن مؤشرات انهيار محتملة. الرجاء الرجوع إلى ACI 318 و ASCE 7 للتقييم التفصيلي.";
  } else if(percent >= 45){
    level = "Moderate Risk";
    level_ar = "مخاطر متوسطة";
    rec = "Structural review recommended. Some warning signs detected. Consider detailed analysis & strengthening if needed.";
    rec_ar = "يوصى بمراجعة إنشائية. تم اكتشاف بعض العلامات التحذيرية. قد يتطلب التحليل التفصيلي والتدعيم إذا لزم الأمر.";
  }

  const html = `
    <div class="result-box">
      <h3>${lang === "ar" ? "ملخص التقييم" : "Assessment Summary"}</h3>
      <p><strong>${lang === "ar" ? "مستوى المخاطر" : "Risk Level"}:</strong> ${lang === "ar" ? level_ar : level}</p>
      <p><strong>${lang === "ar" ? "الدرجة" : "Score"}:</strong> ${score} / ${maxScore} (${percent}%)</p>
      <p><strong>${lang === "ar" ? "التوصية" : "Recommendation"}:</strong> ${lang === "ar" ? rec_ar : rec}</p>
      <p><strong>${lang === "ar" ? "المراجع" : "References"}:</strong> ACI 318, ASCE 7</p>
    </div>
  `;

  area.innerHTML = html;
}

async function downloadPDF(){
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("Structural Deformation AI", 20, 20);

  doc.setFontSize(12);
  doc.text("Preliminary Building Collapse Risk Assessment", 20, 30);

  const score = calculateScore();
  const maxScore = questions.length * 5;
  const percent = Math.round((score / maxScore) * 100);

  let level = "Low Risk";
  if(percent >= 70) level = "High Risk";
  else if(percent >= 45) level = "Moderate Risk";

  doc.setFontSize(14);
  doc.text(`Risk Level: ${level}`, 20, 50);
  doc.setFontSize(12);
  doc.text(`Score: ${score} / ${maxScore} (${percent}%)`, 20, 60);

  doc.text("Recommendation:", 20, 80);
  doc.setFontSize(10);
  doc.text(level === "High Risk"
    ? "Immediate professional inspection required. Indicators of possible collapse detected."
    : level === "Moderate Risk"
      ? "Structural review recommended. Some warning signs detected."
      : "No immediate structural concerns detected. Monitor and inspect periodically.",
    20, 90, { maxWidth: 170 });

  doc.text("References: ACI 318, ASCE 7", 20, 120);

  doc.save("Structural_Deformation_AI_Report.pdf");
    }
