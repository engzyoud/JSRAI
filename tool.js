// wizard logic
let step = 0;
const stepsCount = 7;
const questionsPerStep = 5;

const answers = {};

function renderStep() {
  const start = step * questionsPerStep;
  const end = start + questionsPerStep;
  const currentQuestions = questions.slice(start, end);

  document.getElementById("stepCounter").innerText = `الخطوة ${step + 1} / ${stepsCount}`;
  document.getElementById("progress").style.width = `${((step + 1) / stepsCount) * 100}%`;

  const wizardBody = document.getElementById("wizardBody");
  wizardBody.innerHTML = "";

  currentQuestions.forEach((q, idx) => {
    const card = document.createElement("div");
    card.className = "question-card";

    const title = document.createElement("h3");
    title.innerText = `${start + idx + 1}. ${q.q}`;
    card.appendChild(title);

    const desc = document.createElement("p");
    desc.innerText = q.desc;
    card.appendChild(desc);

    const options = document.createElement("div");
    options.className = "options";

    q.options.forEach((opt, i) => {
      const optDiv = document.createElement("label");
      optDiv.className = "option";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = q.id;
      input.value = i;

      if (answers[q.id] !== undefined && answers[q.id] === i) {
        input.checked = true;
      }

      input.addEventListener("change", () => {
        answers[q.id] = i;
      });

      optDiv.appendChild(input);
      optDiv.appendChild(document.createTextNode(opt.text));
      options.appendChild(optDiv);
    });

    card.appendChild(options);
    wizardBody.appendChild(card);
  });
}

function validateStep() {
  const start = step * questionsPerStep;
  const end = start + questionsPerStep;
  const currentQuestions = questions.slice(start, end);

  for (const q of currentQuestions) {
    if (answers[q.id] === undefined) return false;
  }
  return true;
}

function computeResult() {
  let totalScore = 0;
  let maxScore = 0;

  questions.forEach(q => {
    const selectedIndex = answers[q.id];
    const selected = q.options[selectedIndex];
    totalScore += selected.score;
    maxScore += Math.max(...q.options.map(o => o.score));
  });

  const riskPercentage = Math.round((totalScore / maxScore) * 100);

  let riskLevel = "";
  let riskColor = "";
  let riskDesc = "";

  if (riskPercentage <= 25) {
    riskLevel = "منخفض";
    riskColor = "#39d98a";
    riskDesc = "المبنى يبدو آمنًا بشكل مبدئي، لكن هذا لا يغني عن الفحص الميداني.";
  } else if (riskPercentage <= 55) {
    riskLevel = "متوسط";
    riskColor = "#f1c40f";
    riskDesc = "يوجد بعض نقاط الضعف. يُنصح بفحص إنشائي ميداني وتدعيم حسب الحاجة.";
  } else {
    riskLevel = "عالي";
    riskColor = "#e74c3c";
    riskDesc = "المبنى قد يكون عرضة لخطر الانهيار المتسلسل. يلزم فحص إنشائي فوري وتقييم كامل.";
  }

  return { totalScore, maxScore, riskPercentage, riskLevel, riskColor, riskDesc };
}

function showResult() {
  const result = computeResult();

  document.getElementById("wizard").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");

  const summary = document.getElementById("resultSummary");
  summary.innerHTML = `
    <div style="font-weight:700; font-size:18px; color:${result.riskColor};">
      مستوى الخطر: ${result.riskLevel} (${result.riskPercentage}%)
    </div>
    <div style="margin-top:8px;">
      المجموع: ${result.totalScore} / ${result.maxScore}
    </div>
  `;

  const details = document.getElementById("resultDetails");
  details.innerHTML = `
    <h3>التقرير التفصيلي</h3>
    <p>${result.riskDesc}</p>
    <p><b>ملاحظات مهمة:</b> هذه الأداة مبنية على مبادئ ACI 318 و ASCE 7 كإرشادات عامة فقط. لا تغني عن الفحص الميداني.</p>
    <h4>التوصيات:</h4>
    <ul>
      <li>إذا كانت النتيجة <b>متوسط</b>: فحص إنشائي ميداني + مراجعة المخططات + تقييم الزلازل.</li>
      <li>إذا كانت النتيجة <b>عالي</b>: فحص إنشائي فوري + تحليل تفصيلي + تدعيم الهيكل.</li>
      <li>إذا كانت النتيجة <b>منخفض</b>: متابعة الصيانة الدورية والتأكد من عدم وجود تغييرات في الهيكل.</li>
    </ul>
  `;
}

document.getElementById("backBtn").addEventListener("click", () => {
  if (step > 0) step--;
  renderStep();
});

document.getElementById("nextBtn").addEventListener("click", () => {
  if (!validateStep()) {
    alert("يرجى الإجابة على جميع الأسئلة في هذه الخطوة.");
    return;
  }
  if (step < stepsCount - 1) {
    step++;
    renderStep();
  } else {
    showResult();
  }
});

document.getElementById("restartBtn").addEventListener("click", () => {
  location.reload();
});

// PDF logic
document.getElementById("printBtn").addEventListener("click", async () => {
  const { jsPDF } = window.jspdf;

  const doc = new jsPDF({
    orientation: "portrait",
    unit: "pt",
    format: "a4"
  });

  const resultEl = document.getElementById("result");
  const canvas = await html2canvas(resultEl, { scale: 2 });

  const imgData = canvas.toDataURL("image/png");
  const imgProps = doc.getImageProperties(imgData);
  const pdfWidth = doc.internal.pageSize.getWidth();
  const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

  doc.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
  doc.save("Structural_Collapse_Report.pdf");
});

renderStep();
