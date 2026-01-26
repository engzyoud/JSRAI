import React from "react";

export default function Methodology({ t, references }) {
  return (
    <div className="card">
      <div className="sectionTitle">
        <h3>{t.methodologyTitle}</h3>
      </div>
      <p>{t.methodologyText}</p>

      <div className="sectionTitle">
        <h3>{t.references}</h3>
      </div>
      <ul>
        {references.map((ref, idx) => (
          <li key={idx} style={{ color: "var(--muted)", marginBottom: "6px" }}>
            {ref}
          </li>
        ))}
      </ul>
    </div>
  );
}
