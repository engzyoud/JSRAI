import React from "react";

export default function QuestionCard({ q, index, value, onChange }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-4">
      <div className="font-bold mb-2">
        {index + 1}. {q.title}
      </div>
      <div className="text-sm opacity-80 mb-3">{q.desc}</div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {q.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => onChange(index, i)}
            className={`p-3 rounded-xl text-left border transition ${
              value === i
                ? "bg-white/10 border-white/30"
                : "hover:bg-white/5 border-white/10"
            }`}
          >
            <div className="font-semibold">{opt.label}</div>
            <div className="text-xs opacity-80 mt-1">{opt.note}</div>
          </button>
        ))}
      </div>

      <div className="text-xs opacity-60 mt-3">
        <strong>الأساس العلمي:</strong> {q.basis}
      </div>
    </div>
  );
}
