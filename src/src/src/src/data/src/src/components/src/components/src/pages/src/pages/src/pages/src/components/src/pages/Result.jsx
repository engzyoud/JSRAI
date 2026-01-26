import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { questions } from "../data/questions";

export default function Result({ t }) {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state?.answers) {
    return (
      <div className="card">
        <h1>{t.resultTitle}</h1>
        <p>Start assessment first.</p>
        <button className="btn" onClick={() => navigate("/quiz")}>
          {t.startBtn}
        </button>
      </div>
    );
  }

  const answers = state.answers;
  let score = 0;
  let maxScore = 0;

  questions.forEach((q) => {
    maxScore += q.weight * 2;
    score += (answers[q.key] ?? 0) * q.weight;
  });

  const percentage = (score / maxScore) * 100;

  let status = t.safe;
  let rec = t.recSafe;

  if (percentage >= 60) {
    status = t.danger;
    rec = t.recDanger;
  } else if (percentage >= 35) {
    status = t.review;
    rec = t.recReview;
  }

  return (
    <div className="card">
      <h1>{t.resultTitle}</h1>
      <h2>{status}</h2>
      <p>Score: {Math.round(percentage)}%</p>
      <div className="card">
        <h3>Explanation</h3>
        <p>
          The score is based on seismic vulnerability indicators from ACI 318 and ASCE 7. Higher score means higher risk.
        </p>
      </div>
      <div className="card">
        <h3>Recommendation</h3>
        <p>{rec}</p>
      </div>

      <button className="btn" onClick={() => navigate("/quiz")}>
        {t.restartBtn}
      </button>
    </div>
  );
}
