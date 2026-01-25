const quizForm = document.getElementById("quizForm");
const calculateBtn = document.getElementById("calculateBtn");
const resultBox = document.getElementById("resultBox");
const scoreText = document.getElementById("scoreText");
const riskText = document.getElementById("riskText");
const recommendationText = document.getElementById("recommendationText");
const reasonText = document.getElementById("reasonText");
const downloadPdfBtn = document.getElementById("downloadPdfBtn");

function buildQuestions(){
  questions.forEach(q => {
    const div = document.createElement("div");
    div.classList.add("question");

    div.innerHTML = `
      <h3>${q.id}. ${q.en}</h3>
      <p>${q.ar}</p>
      <img src="${q.img}" alt="question image" class="q-img">
      <div class="options">
        ${[1,2,3,4,5].map(n => `
          <label>
            <input type="radio" name="q${q.id}" value="${n}">
            <span>${n}</span>
          </label>
        `).join('')}
      </div>
    `;

    quizForm.appendChild(div);
  });
}

function calculateScore(){
  let totalWeight = 0;
  let scoreSum = 0;
  let missing = [];

  questions.forEach(q => {
    totalWeight += q.weight;
    const value = document.querySelector(`input[name="q${q.id}"]:checked`);
    if(!value) missing.push(q.id);
    else scoreSum += parseInt(value.value) * q.weight;
  });

  if(missing.length){
    alert("Please answer all questions.");
    return;
  }

  const maxScore = totalWeight * 5;
  const scorePercent = Math.round((scoreSum / maxScore) * 100);

  let riskLevel = "";
  let recommendation = "";
  let reasons = [];

  if(scorePercent >= 80){
    riskLevel = "Safe / سليم";
    recommendation = "No immediate action required. Routine inspection recommended.";
    reasons.push("Good structural condition indicators.");
    reasons.push("No major cracks or deformation.");
  } else if(scorePercent >= 60){
    riskLevel = "Needs Inspection / يحتاج فحص مهندس";
    recommendation = "A licensed engineer should inspect the building for potential issues.";
    reasons.push("Some signs of weakness or risk factors.");
    reasons.push("Structural review is recommended based on ACI & ASCE.");
  } else if(scorePercent >= 40){
    riskLevel = "Needs Strengthening / يحتاج تدعيم";
    recommendation = "Structural strengthening is recommended to reduce collapse risk.";
    reasons.push("Several critical indicators show weakness.");
    reasons.push("Consider reinforcement and structural retrofitting.");
  } else {
    riskLevel = "High Risk / خطر عالي";
    recommendation = "Immediate structural inspection and evacuation may be required.";
    reasons.push("High risk of structural failure or collapse.");
    reasons.push("Immediate action required per ACI & ASCE guidelines.");
  }

  scoreText.innerHTML = `<strong>Score:</strong> ${scorePercent}%`;
  riskText.innerHTML = `<strong>Risk Level:</strong> ${riskLevel}`;
  recommendationText.innerHTML = `<strong>Recommendation:</strong> ${recommendation}`;
  reasonText.innerHTML = `<strong>Why:</strong><br>• ${reasons.join("<br>• ")}`;

  resultBox.classList.remove("hidden");
}

calculateBtn.addEventListener("click", calculateScore);

buildQuestions();
