import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  const nav = useNavigate();

  return (
    <div className="max-w-6xl mx-auto">
      <div className="rounded-3xl border border-white/10 p-6 bg-gradient-to-b from-white/5 to-white/2">
        <h1 className="text-4xl font-bold mb-3">{t("homeTitle")}</h1>
        <p className="text-lg opacity-80 mb-6">{t("homeSubtitle")}</p>
        <button
          onClick={() => nav("/assess")}
          className="px-6 py-3 rounded-2xl bg-white/10 border border-white/20 hover:bg-white/15 transition"
        >
          {t("homeStart")}
        </button>
      </div>
    </div>
  );
}
