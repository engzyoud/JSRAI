import React from "react";
import { useLang } from "../context/LangContext";

export default function About() {
  const { t } = useLang();

  return (
    <div className="page">
      <div className="pageHeader">
        <div>
          <h2>{t.about.title}</h2>
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>
        </div>
      </div>

      <div className="card">
        <div className="cardBody">
          <h3>{t.about.scopeTitle}</h3>
          <p>{t.about.scopeText}</p>

          <h3>{t.about.methodologyTitle}</h3>
          <p>{t.about.methodologyText}</p>

          <p className="smallNote">{t.about.disclaimer}</p>
        </div>
      </div>
    </div>
  );
}
