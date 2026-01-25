import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const location = useLocation();
  const { lang, setLang } = useLanguage();

  const active = (path) => location.pathname === path;

  return (
    <nav className="w-full py-4 px-6 bg-black/40 backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tight">
          Structural Deformation AI
        </Link>

        <div className="flex gap-4 items-center">
          <Link className={`nav ${active("/") && "active"}`} to="/">
            {lang === "ar" ? "الرئيسية" : "Home"}
          </Link>
          <Link className={`nav ${active("/tool") && "active"}`} to="/tool">
            {lang === "ar" ? "التقييم" : "Tool"}
          </Link>
          <Link className={`nav ${active("/result") && "active"}`} to="/result">
            {lang === "ar" ? "النتيجة" : "Result"}
          </Link>
          <Link className={`nav ${active("/about") && "active"}`} to="/about">
            {lang === "ar" ? "عن الأداة" : "About"}
          </Link>
          <Link className={`nav ${active("/privacy") && "active"}`} to="/privacy">
            {lang === "ar" ? "الخصوصية" : "Policy"}
          </Link>

          <button
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            className="border border-white/30 px-3 py-1 rounded-lg"
          >
            {lang === "ar" ? "EN" : "AR"}
          </button>
        </div>
      </div>
    </nav>
  );
}
