import React from "react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <div className="max-w-6xl mx-auto">
      <div className="rounded-3xl border border-white/10 p-6 bg-white/5">
        <h2 className="text-3xl font-bold mb-3">{t("aboutTitle")}</h2>
        <p className="text-lg opacity-80">{t("aboutText")}</p>
      </div>
    </div>
  );
}
