import React from "react";

export default function Methodology({ t }) {
  return (
    <div className="card">
      <h1>{t.methodologyTitle}</h1>
      <p>{t.methodologyDesc}</p>

      <div className="card" style={{ marginTop: 20 }}>
        <h3>{t.mapNoteTitle}</h3>
        <p>{t.mapNoteDesc}</p>
        <img src="/jordan-map.svg" alt="Jordan Map" style={{ width: "100%", borderRadius: 12 }} />
      </div>
    </div>
  );
}
