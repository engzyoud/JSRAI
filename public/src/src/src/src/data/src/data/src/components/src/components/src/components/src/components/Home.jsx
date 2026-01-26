import React from "react";

export default function Home({ t, setPage }) {
  return (
    <div className="hero">
      <div className="card">
        <h2>{t.siteTitle}</h2>
        <p>{t.tagline}</p>
        <button className="btn" onClick={() => setPage("questionnaire")}>
          {t.start}
        </button>
      </div>

      <div className="card">
        <div className="sectionTitle">
          <h3>{t.methodology}</h3>
          <p>{t.verified}</p>
        </div>
        <p>{t.methodologyText}</p>
        <div className="sectionTitle">
          <h3>{t.mapTitle}</h3>
          <p>{t.mapNote}</p>
        </div>
        <img src="/jordan-map.svg" alt="Jordan Map" style={{ width: "100%", borderRadius: "18px" }} />
      </div>
    </div>
  );
}
