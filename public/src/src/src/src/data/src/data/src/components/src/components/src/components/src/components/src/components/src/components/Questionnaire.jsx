import React from "react";
import { questions } from "../data/questions";

export default function Questionnaire({ t, lang, setResult }) {
  const [index, setIndex] = React.useState(0);
  const [answers, setAnswers] = React.useState({});

  const q = questions[index];
  const progress = Math.round(((index + 1) / questions.length) * 100);

  const selectOption = (value) => {
    setAnswers({ ...answers, [q.id]: value });
  };

  const calculate = () => {
    let score = 0;
    let max = 0;
    questions.forEach((qq) => {
      max += qq.weight * 3;
      score += (answers[qq.id] ?? 0) * qq.weight;
    });
    const ratio = score / max;
    let risk = "good";
    if (ratio >= 0.55) risk = "bad";
    else if (ratio >= 0.25) risk = "warn";

    setResult({
      score,
      max,
      ratio,
      risk,
      answers
    });
  };

  return (
    <div className="card">
      <div className="sectionTitle">
        <h3>{t.qTitle}</h3>
        <p>{t.qSub}</p>
      </div>

      <div className="progress">
        <div style={{ width: `${progress}%` }} />
      </div>

      <div className="questionCard">
        <h4>{q.title[lang]}</h4>
        <p>{q.text[lang]}</p>
        <p style={{ color: "var(--muted)", fontSize: "12px" }}>{q.basis[lang]}</p>

        <div className="options">
          {q.options.map((opt, idx) => (
            <button
              key={idx}
              className={`optionBtn ${answers[q.id] === opt.value ? "active" : ""}`}
              onClick={() => selectOption(opt.value)}
            >
              {opt.label[lang]}
            </button>
          ))}
        </div>
        {answers[q.id] !== undefined && (
          <p style={{ marginTop: "10px", color: "var(--muted)", fontSize: "12px" }}>
            {q.options.find((o) => o.value === answers[q.id])?.explanation[lang]}
          </p>
        )}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
        <button className="btn" onClick={() => setIndex(Math.max(0, index - 1))} disabled={index === 0}>
          {t.back}
        </button>
        {index < questions.length - 1 ? (
          <button className="btn" onClick={() => setIndex(Math.min(questions.length - 1, index + 1))}>
            {t.next}
          </button>
        ) : (
          <button className="btn" onClick={calculate}>
            {t.submit}
          </button>
        )}
      </div>
    </div>
  );
            }
