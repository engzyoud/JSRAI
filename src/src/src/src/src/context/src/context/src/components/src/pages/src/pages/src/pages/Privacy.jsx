import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function Privacy() {
  const { lang } = useLanguage();

  const text = {
    ar: {
      title: "الخصوصية وإخلاء المسؤولية",
      p1: "هذه الأداة للتقييم المبدئي فقط ولا تغني عن الفحص الإنشائي الرسمي.",
      p2: "المطور غير مسؤول عن أي قرارات تتخذ بناءً على النتائج. الأداة تعتمد على ACI 318 و ASCE 7.",
      p3: "البيانات المستخدمة تُحفظ محليًا داخل المتصفح ولا تُرسل لأي خادم.",
    },
    en: {
      title: "Privacy & Disclaimer",
      p1: "This tool is for preliminary assessment only and does not replace professional structural inspection.",
      p2: "The developer is not responsible for any decisions made based on the results. The tool is based on ACI 318 and ASCE 7.",
      p3: "Data is stored locally in the browser and not sent to any server.",
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
        <h2 className="text-3xl font-bold mb-3">{text[lang].title}</h2>
        <p className="text-white/80 mb-4">{text[lang].p1}</p>
        <p className="text-white/80 mb-4">{text[lang].p2}</p>
        <p className="text-white/80">{text[lang].p3}</p>
      </motion.div>
    </div>
  );
}
