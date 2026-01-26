import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "../data/questions";
import ProgressBar from "../components/ProgressBar";

export default function Quiz({ t }) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const q = questions[index];

  const selectOption = (value) => {
    setAnswers({ ...answers, [q.key]: value });
  };

  const next = () => {
    if (index < questions.length - 1) setIndex(index + 1);
    else navigate("/result", { state: { answers } });
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const progress = ((index + 1) / questions.length) * 100;

  return (
    <div className="card">
      <h1>{t.quizTitle}</h1>
      <ProgressBar value={progress} />

      <div className="question">
        <div className="question-title">{t[q.key]}</div>
        <div className="question-desc">{t[q.key + "Desc"]}</div>

        <div className="options">
          {q.options.map((opt, i) => (
            <button
              key={i}
              className={"option-btn " + (answers[q.key] === opt.value ? "active" : "")}
              onClick={() => selectOption(opt.value)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 20 }}>
        <button className="btn" onClick={prev} disabled={index === 0}>
          {t.prevBtn}
        </button>
        <button className="btn" onClick={next}>
          {index === questions.length - 1 ? t.finishBtn : t.nextBtn}
        </button>
      </div>
    </div>
  );
}
