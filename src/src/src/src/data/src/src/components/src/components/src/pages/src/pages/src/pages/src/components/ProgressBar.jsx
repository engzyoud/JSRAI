import React from "react";

export default function ProgressBar({ value }) {
  return (
    <div className="progress" style={{ marginTop: 12 }}>
      <div style={{ width: `${value}%` }} />
    </div>
  );
}
