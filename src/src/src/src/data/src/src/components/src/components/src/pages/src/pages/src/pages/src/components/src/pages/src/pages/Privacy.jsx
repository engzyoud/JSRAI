import React from "react";

export default function Privacy({ t }) {
  return (
    <div className="card">
      <h1>{t.privacyTitle}</h1>
      <p>
        This tool does not collect personal data. All answers stay on your device. No storage, no tracking.
      </p>
    </div>
  );
}
