import React from "react";

export default function Footer({ t }) {
  return (
    <div className="card container" style={{ textAlign: "center" }}>
      {t.footer}
    </div>
  );
}
