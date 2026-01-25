import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { lang } = useLanguage();

  const text = {
    ar: {
      title: "عن الأداة",
      desc1: "هذه الأداة مخصصة للتقييم المبدئي لخطر انهيار المباني في الأردن، باستخدام معايير ACI 318 و ASCE 7.",
      desc2: "الأداة تساعد على تحديد المباني التي تحتاج فحص إنشائي رسمي بسرعة وبدقة.",
    },
    en: {
      title: "About the Tool",
      desc1: "This tool is designed for preliminary assessment of building collapse risk in Jordan, using ACI 318 and ASCE 7 standards.",
      desc2: "It helps identify buildings that require professional structural inspection quickly and accurately.",
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
        <p className="text-white/80 mb-4">{text[lang].desc1}</p>
        <p className="text-white/80">{text[lang].desc2}</p>
      </motion.div>
    </div>
  );
}
