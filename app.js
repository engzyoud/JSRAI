const pages = ["home","assessment","results","policy"];
let currentPage = "home";
let currentQuestionIndex = 0;

const questions = [
  // 35 أسئلة هنا (مبنية على ACI/ASCE)
  {
    q_ar:"نوع المبنى؟",
    q_en:"Building type?",
    options:[
      {ar:"سكني", en:"Residential", value:1},
      {ar:"تجاري", en:"Commercial", value:2},
      {ar:"صناعي", en:"Industrial", value:3},
      {ar:"مختلط", en:"Mixed-use", value:2},
      {ar:"آخر", en:"Other", value:2}
    ]
  },
  {
    q_ar:"عدد الطوابق؟",
    q_en:"Number of floors?",
    options:[
      {ar:"1–3", en:"1–3", value:1},
      {ar:"4–7", en:"4–7", value:2},
      {ar:"8–12", en:"8–12", value:3},
      {ar:"13–20", en:"13–20", value:4},
      {ar:"أكثر من 20", en:">20", value:5}
    ]
  },
  // ... أضف باقي الأسئلة هنا بنفس الشكل
];

let answers = [];

function showPage(id){
  pages.forEach(p=>{
    document.getElementById(p).classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
  currentPage = id;

  if(id === "assessment") renderQuestion();
  if(id === "results") renderResults();
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
  label.innerHTML = `${q.q_ar} <br> <span style="opacity:0.8">${q.q_en}</span>`;
  div.appendChild(label);

  const select = document.createElement("select");
  q.options.forEach(opt=>{
    const option = document.createElement("option");
    option.value = opt.value;
    option.text = `${opt.ar} / ${opt.en}`;
    select.appendChild(option);
  });

  // load previous answer
  if(answers[currentQuestionIndex] !== undefined){
    select.value = answers[currentQuestionIndex];
  }

  select.onchange = () => {
    answers[currentQuestionIndex] = parseInt(select.value);
  };

  div.appendChild(select);
  area.appendChild(div);
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
  let level = "Low Risk";
  if(score > 80) level = "High Risk";
  else if(score > 55) level = "Moderate Risk";

  area.innerHTML = `
    <p><strong>Risk Level:</strong> ${level}</p>
    <p><strong>Score:</strong> ${score} / ${questions.length*5}</p>
    <p><strong>Recommendation:</strong> Based on the information provided, this tool is a preliminary assessment and does not replace professional inspection.</p>
  `;
}

function downloadPDF(){
  alert("PDF feature is not implemented in this demo.");
}
