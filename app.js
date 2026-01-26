const startBtn = document.getElementById("startBtn");
const calcBtn = document.getElementById("calcBtn");
const pdfBtn = document.getElementById("pdfBtn");
const resultText = document.getElementById("resultText");

startBtn.addEventListener("click", () => {
  document.getElementById("tool").scrollIntoView({ behavior: "smooth" });
});

calcBtn.addEventListener("click", () => {
  const vu = parseFloat(document.getElementById("vu").value);
  const fc = parseFloat(document.getElementById("fc").value);
  const b = parseFloat(document.getElementById("b").value);
  const d = parseFloat(document.getElementById("d").value);
  const vc = parseFloat(document.getElementById("vc").value);

  if (!vu || !fc || !b || !d || !vc) {
    resultText.textContent = "Please fill all fields correctly.";
    return;
  }

  const vu
