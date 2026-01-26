import React from "react";

export default function Privacy({ t }) {
  return (
    <div className="card">
      <h3>{t.privacyTitle}</h3>
      <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>{t.privacyText}</p>
    </div>
  );
}
