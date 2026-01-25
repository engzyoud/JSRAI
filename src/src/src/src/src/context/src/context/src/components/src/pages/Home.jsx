import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function Home() {
  const { lang } = useLanguage();

  const text = {
    ar: {
      title: "أداة تقييم انهيار المباني باستخدام الذكاء الصناعي",
      desc: "أداة تقييم مبدئية تساعد على تحديد خطر انهيار المبنى بشكل سريع واحترافي، مستندة إلى ACI 318 و ASCE 7.",
      start: "ابدأ التقييم",
      learn: "المزيد عن الأداة",
      important: "مهم",
      importantDesc: "هذه الأداة لا تغني عن الفحص الإنشائي الرسمي.",
    },
    en: {
      title: "AI-Based Building Collapse Assessment Tool",
      desc: "A preliminary assessment tool to identify building collapse risk quickly and professionally, based on ACI 318 and ASCE 7.",
      start: "Start Assessment",
      learn: "Learn More",
      important: "Important",
      importantDesc: "This tool does NOT replace professional structural inspection.",
    },
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/5 rounded-2xl p-8 shadow-lg"
      >
        <h1 className="text-4xl font-bold mb-3">{text[lang].title}</h1>
        <p className="text-white/80 mb-6">{text[lang].desc}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-black/30 rounded-xl">
            <h3 className="font-semibold mb-2">{lang === "ar" ? "ما تقوم به" : "What it does"}</h3>
            <p className="text-white/80">
              {lang === "ar"
                ? "تقييم المخاطر وفق أسئلة منظمة مبنية على كود ACI و ASCE."
                : "Risk assessment using structured questions based on ACI & ASCE standards."}
            </p>
          </div>

          <div className="p-6 bg-black/30 rounded-xl">
            <h3 className="font-semibold mb-2">
              {text[lang].important}
            </h3>
            <p className="text-white/80">{text[lang].importantDesc}</p>
          </div>
        </div>

        <div className="mt-8 flex gap-4">
          <Link to="/tool" className="btn-primary">
            {text[lang].start}
          </Link>
          <Link to="/about" className="btn-secondary">
            {text[lang].learn}
          </Link>
        </div>

        <div className="mt-8 text-sm text-white/60">
          © 2026 Eng. Suhaib Al_Zyoud. All rights reserved.
        </div>
      </motion.div>
    </div>
  );
}
