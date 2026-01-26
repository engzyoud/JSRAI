import React from "react";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header({ t, setPage, page }) {
  return (
    <header className="header">
      <div className="brand">
        <div className="logo">
          <svg viewBox="0 0 24 24">
            <path
              fill="white"
              d="M12 2L2 7v10l10 5 10-5V7l-10-5zm0 2.5l7 3.2v7.6L12 19l-7-3.7V7.7L12 4.5zm0 3.3L7.2 8.9v6.2L12 16.5l4.8-1.4V8.9L12 7.8z"
            />
          </svg>
        </div>
        <div>
          <h1>{t.siteTitle}</h1>
          <p>{t.tagline}</p>
        </div>
      </div>

      <nav className="nav">
        {[
          { key: "home", label: t.home },
          { key: "methodology", label: t.methodology },
          { key: "questionnaire", label: t.questionnaire },
          { key: "caseStudies", label: t.caseStudies },
          { key: "privacy", label: t.privacy },
          { key: "disclaimer", label: t.disclaimer }
        ].map((item) => (
          <a
            key={item.key}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setPage(item.key);
            }}
            style={{ opacity: page === item.key ? 1 : 0.8 }}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <LanguageSwitcher t={t} />
    </header>
  );
}
