import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="w-full border-t border-white/10 mt-10">
      <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
        <div className="opacity-80">{t("footer")}</div>
        <div className="opacity-60 text-xs">
          © {new Date().getFullYear()} • JSRAI
        </div>
      </div>
    </footer>
  );
}
