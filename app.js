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

  { q_ar:"هل يوجد فجوات/فتحات كبيرة (مثل مداخل سيارات واسعة) في الطابق الأرضي؟", q_en:"Any large openings (e.g., wide parking entrance) at ground floor?", options:[
    {ar:"نعم", en:"Yes", v:5},
    {ar:"لا", en:"No", v:1}
  ]},

  { q_ar:"هل يوجد تغير في توزيع الأعمدة (مثل أعمدة قليلة في طابق/أعمدة غير متساوية)؟", q_en:"Any irregular column distribution?", options:[
    {ar:"نعم", en:"Yes", v:4},
    {ar:"لا", en:"No", v:1}
  ]},

  { q_ar:"هل يوجد قصور/ترهل في الأعمدة أو تشققات طولية؟", q_en:"Any column bending/long cracks?", options:[
    {ar:"نعم", en:"Yes", v:5},
    {ar:"لا", en:"No", v:1}
  ]},

  { q_ar:"هل توجد تشققات عرضية في الكمرات/الأعمدة؟", q_en:"Any transverse cracks in beams/columns?", options:[
    {ar:"نعم", en:"Yes", v:5},
    {ar:"لا", en:"No", v:1}
  ]},

  { q_ar:"هل يوجد ميلان واضح في المبنى؟", q_en:"Any visible building tilt?", options:[
    {ar:"نعم", en:"Yes", v:5},
    {ar:"لا", en:"No", v:1}
  ]},

  { q_ar:"هل يوجد انحراف في الأسقف أو الأرضيات (مما يشير إلى هبوط)؟", q_en:"Any sagging floors/ceilings?", options:[
    {ar:"نعم", en:"Yes", v:5},
    {ar:"لا", en:"No", v:1}
  ]},

  { q_ar:"هل يوجد تشققات في الجدران الداخلية بشكل متكرر؟", q_en:"Repeated cracks in interior walls?", options:[
    {ar:"نعم", en:"Yes", v:4},
    {ar:"لا", en:"No", v:1}
  ]},

  { q_ar:"هل يوجد تشققات في الجدران الخارجية بشكل واسع؟", q_en:"Wide cracks in exterior walls?", options:[
    {ar:"نعم", en:"Yes", v:5},
    {ar:"لا", en:"No", v:1}
  ]},

  { q_ar:"هل تم بناء المبنى قبل 1990؟", q_en:"Built before 1990?", options:[
    {ar:"نعم", en:"Yes", v:4},
    {ar:"لا", en:"No", v:1}
  ]},

  { q_ar:"هل تم إجراء تعديلات إنشائية (إزالة حوائط/أعمدة)؟", q_en:"Any structural modifications?", options:[
    {ar:"نعم", en:"Yes", v:5},
    {ar:"لا", en:"No", v:1}
  ]},

  { q_ar:"هل تم إضافة طابق إضافي بعد البناء؟", q_en:"Any added floors after construction?", options:[
    {ar:"نعم", en:"Yes", v:5},
    {ar:"لا", en:"No", v:1}
  ]},

  { q_ar:"هل يوجد نظام قص غير متوازن (مثل جدران قص فقط على جانب واحد)؟", q_en:"Unbalanced shear system?", options:[
    {ar:"نعم", en:"Yes", v:4},
    {ar:"لا", en:"No", v:1}
  ]},

  { q_ar:"هل يوجد هبوط في أساسات المبنى أو تشققات في القواعد؟", q_en:"Foundation settlement/cracks?", options:[
    {ar:"نعم", en:"Yes", v:5},
    {ar:"لا", en:"No", v:1}
  ]},

  { q_ar:"هل يوجد تسرب مياه حول المبنى (مما يؤثر على التربة)؟", q_en:"Water leakage around foundation?", options:[
    {ar:"نعم", en:"Yes", v:4},
    {ar:"لا", en:"No", v:1}
  ]},

  { q_ar:"هل يوجد صدأ واضح في حديد التسليح؟", q_en:"Visible rebar corrosion?", options:[
    {ar:"نعم", en:"Yes", v:5},
    {ar:"لا", en:"No", v:1}
  ]},

  { q_ar:"هل يوجد تساقط أو تقشر في الخرسانة؟", q_en:"Concrete spalling?", options:[
    {ar:"نعم", en:"Yes", v:4},
    {ar:"لا", en:"No", v:1}
  ]},

  { q_ar:"هل توجد تشققات في البلاطات/الأرضيات بشكل متكرر؟", q_en:"Repeated floor slab cracks?", options:[
    {ar:"نعم", en:"Yes", v:4},
    {ar:"لا", en:"No", v:1}
  ]},

  { q_ar:"هل توجد مناطق بها اهتزاز واضح عند الحركة؟", q_en:"Visible vibration when moving?", options:[
    {ar:"نعم", en:"Yes", v:4},
    {ar:"لا", en:"No", v:1}
  ]},

  { q_ar:"هل توجد علامات انزلاق أو انهيار جزئي في الجدران؟", q_en:"Signs of wall sliding/partial collapse?", options:[
    {ar:"نعم", en:"Yes", v:5},
    {ar:"لا", en:"No", v:1}
  ]},

  { q_ar:"هل يوجد استخدام غير صحيح للحوائط الحاملة (إزالة/تعديل بدون حساب)؟", q_en:"Improper load-bearing wall modification?", options:[
    {ar:"نعم", en:"Yes", v:5},
    {ar:"لا", en:"No", v:1}
  ]},

  { q_ar:"هل تم تنفيذ المبنى بمواد غير مطابقة للمواصفات؟", q_en:"Materials not according to specs?", options:[
    {ar:"نعم", en:"Yes", v:5},
    {ar:"لا", en:"No", v:1}
  ]},

  { q_ar:"هل يوجد انحراف واضح في الأعمدة (ميلان)؟", q_en:"Column leaning?", options:[
    {ar:"نعم", en:"Yes", v:5},
    {ar:"لا", en:"No", v:1}
  ]},

  { q_ar:"هل تم وجود تصادم سابق مع زلزال قوي؟", q_en:"Experienced strong earthquake before?", options:[
    {ar:"نعم", en:"Yes", v:4},
    {ar:"لا", en:"No", v:1}
  ]},

  { q_ar:"هل توجد شروخ في الكمرات عند أماكن الدعم؟", q_en:"Cracks at beam supports?", options:[
    {ar:"نعم", en:"Yes", v:5},
    {ar:"لا", en:"No", v:1}
  ]},

  { q_ar:"هل توجد شروخ في الأعمدة عند التقاطعات؟", q_en:"Cracks at column joints?", options:[
    {ar:"نعم", en:"Yes", v:5},
    {ar:"لا", en:"No", v:1}
  ]},

  { q_ar:"هل يوجد نظام مقاومة قص مناسب (جدران قص/إطارات مقاومة)؟", q_en:"Adequate lateral load system?", options:[
    {ar:"نعم", en:"Yes", v:1},
    {ar:"لا", en:"No", v:5}
  ]},

  { q_ar:"هل توجد شروخ في السقف أو البلاطة بسبب تحميل زائد؟", q_en:"Cracks due to overload?", options:[
    {ar:"نعم", en:"Yes", v:4},
    {ar:"لا", en:"No", v:1}
  ]},

  { q_ar:"هل تم تنفيذ أساسات غير مناسبة للتربة؟", q_en:"Inadequate foundation for soil?", options:[
    {ar:"نعم", en:"Yes", v:5},
    {ar:"لا", en:"No", v:1}
  ]},

  { q_ar:"هل توجد علامات رطوبة داخل الجدران بشكل مستمر؟", q_en:"Persistent wall dampness?", options:[
    {ar:"نعم", en:"Yes", v:4},
    {ar:"لا", en:"No", v:1}
  ]},
];

let answers = [];

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
  answers = [];
  currentQuestionIndex = 0;
  showPage("assessment");
}

function renderQuestion(){
  const area = document.getElementById("question-area");
  area.innerHTML = "";

  const q = questions[currentQuestionIndex];

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

  if(answers[currentQuestionIndex] !== undefined){
    select.value = answers[currentQuestionIndex];
  }

  select.onchange = () => {
    answers[currentQuestionIndex] = parseInt(select.value);
  };

  div.appendChild(select);
  area.appendChild(div);

  updateProgress();
}

function updateProgress(){
  const percent = ((currentQuestionIndex + 1) / questions.length) * 100;
  document.getElementById("progressBar").style.width = `${percent}%`;
  document.getElementById("progressText").innerText = lang === "ar"
    ? `السؤال ${currentQuestionIndex + 1} من ${questions.length}`
    : `Question ${currentQuestionIndex + 1} of ${questions.length}`;
}

function nextQuestion(){
  if(currentQuestionIndex < questions.length - 1){
    currentQuestionIndex++;
    renderQuestion();
  } else {
    showPage("results");
  }
}

function prevQuestion(){
  if(currentQuestionIndex > 0){
    currentQuestionIndex--;
    renderQuestion();
  }
}

function calculateScore(){
  return answers.reduce((a,b)=>a+b,0);
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
