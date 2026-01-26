import React from "react";

export default function ProgressBar({ value, max }) {
  const percent = Math.round((value / max) * 100);
  return (
    <div className="w-full bg-white/10 rounded-xl h-3 overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-green-400 via-yellow-300 to-red-500"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}
