import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  const nav = [
    { to: "/", label: t("navHome") },
    { to: "/about", label: t("navAbout") },
    { to: "/how", label: t("navHow") },
    { to: "/method", label: t("navMethod") },
    { to: "/assess", label: t("navAssess") }
  ];

  return (
    <header className="w-full bg-[#0b1020]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="flex flex-col">
          <div className="text-sm opacity-80">{t("bismillah")}</div>
          <div className="text-2xl font-bold">{t("appTitle")}</div>
        </div>

        <nav className="flex gap-3">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`px-3 py-2 rounded-xl transition ${
                location.pathname === item.to
                  ? "bg-white/10 border border-white/20"
                  : "hover:bg-white/5"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex gap-2">
          <button
            onClick={() => changeLang("ar")}
            className={`px-3 py-2 rounded-xl transition ${
              i18n.language === "ar" ? "bg-white/10 border border-white/20" : "hover:bg-white/5"
            }`}
          >
            {t("langAr")}
          </button>
          <button
            onClick={() => changeLang("en")}
            className={`px-3 py-2 rounded-xl transition ${
              i18n.language === "en" ? "bg-white/10 border border-white/20" : "hover:bg-white/5"
            }`}
          >
            {t("langEn")}
          </button>
        </div>
      </div>
    </header>
  );
}
