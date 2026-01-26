import React from "react";

export default function Footer({ t }) {
  return (
    <footer className="footer">
      <div>{t.designedBy}</div>
      <div>
        <a href="#" onClick={(e) => e.preventDefault()}>
          {t.references}
        </a>
        {" · "}
        <span>{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
