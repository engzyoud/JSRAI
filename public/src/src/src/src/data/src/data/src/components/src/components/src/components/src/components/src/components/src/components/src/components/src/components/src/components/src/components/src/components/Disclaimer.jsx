import React from "react";

export default function Disclaimer({ t }) {
  return (
    <div className="card">
      <h3>{t.disclaimerTitle}</h3>
      <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>{t.disclaimerText}</p>
    </div>
  );
}
