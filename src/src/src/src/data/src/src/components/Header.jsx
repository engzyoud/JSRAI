import React from "react";
import { Link } from "react-router-dom";

export default function Header({ lang, setLang, t }) {
  return (
    <div className="header container">
      <div>
        <Link to="/">
          <h2>{t.appTitle}</h2>
        </Link>
      </div>

      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <Link to="/methodology">{t.methodologyTitle}</Link>
        <Link to="/quiz">{t.quizTitle}</Link>
        <Link to="/privacy">{t.privacyTitle}</Link>
        <Link to="/disclaimer">{t.disclaimerTitle}</Link>

        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="btn"
          style={{ padding: "8px 10px" }}
        >
          <option value="en">English</option>
          <option value="ar">العربية</option>
        </select>
      </div>
    </div>
  );
}
