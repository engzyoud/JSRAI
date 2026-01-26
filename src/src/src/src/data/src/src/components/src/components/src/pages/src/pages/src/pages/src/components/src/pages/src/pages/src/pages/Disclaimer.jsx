import React from "react";

export default function Disclaimer({ t }) {
  return (
    <div className="card">
      <h1>{t.disclaimerTitle}</h1>
      <p>
        This assessment is preliminary only. It does not replace an official structural inspection or engineering report.
      </p>
    </div>
  );
}
