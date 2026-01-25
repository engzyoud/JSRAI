import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { useTool } from "../context/ToolContext";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function Result() {
  const { lang } = useLanguage();
  const { result } = useTool();
  const navigate = useNavigate();

  if (!result) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="bg-white/5 rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold">
            {lang === "ar" ? "لا توجد نتيجة" : "No Result"}
          </h2>
          <p className="text-white/80 mt-3">
            {lang === "ar" ? "رجاءً ابدأ التقييم أولاً." : "Please start the assessment first."}
          </p>
          <button onClick={() => navigate("/tool")} className="btn-primary mt-6">
            {lang === "ar" ? "ابدأ الآن" : "Start Now"}
          </button>
        </div>
      </div>
    );
  }

  const riskText = {
    ar: { low: "منخفض", medium: "متوسط", high: "مرتفع" },
    en: { low: "Low", medium: "Medium", high: "High" },
  };

  const downloadPDF = async () => {
    const element = document.getElementById("pdfReport");
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("Structural_Deformation_AI_Report.pdf");
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <motion.div
        id="pdfReport"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/5 rounded-2xl p-8 shadow-lg"
      >
        <h2 className="text-3xl font-bold mb-3">
          {lang === "ar" ? "النتيجة" : "Result"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-black/30 rounded-xl">
            <h3 className="font-semibold mb-2">
              {lang === "ar" ? "درجة المخاطر" : "Risk Score"}
            </h3>
            <p className="text-white/80">
              {lang === "ar" ? "المجموع" : "Total"}: {result.total}
            </p>
            <p className="text-white/80">
              {lang === "ar" ? "التقييم" : "Assessment"}: {riskText[lang][result.risk]}
            </p>
          </div>

          <div className="p-6 bg-black/30 rounded-xl">
            <h3 className="font-semibold mb-2">
              {lang === "ar" ? "التوصية" : "Recommendation"}
            </h3>
            <p className="text-white/80">{result.recommendation}</p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold mb-2">{lang === "ar" ? "ملاحظات" : "Notes"}</h3>
          <p className="text-white/80">
            {lang === "ar"
              ? "هذه نتيجة مبدئية ولا تغني عن الفحص الإنشائي الرسمي. الأداة تعتمد على ACI 318 و ASCE 7."
              : "This is a preliminary result and does not replace professional structural inspection. Tool is based on ACI 318 and ASCE 7."}
          </p>
        </div>

        <div className="mt-8 flex gap-4">
          <button onClick={downloadPDF} className="btn-primary">
            {lang === "ar" ? "تحميل تقرير PDF" : "Download PDF Report"}
          </button>
          <button onClick={() => navigate("/tool")} className="btn-secondary">
            {lang === "ar" ? "إعادة التقييم" : "Re-Assess"}
          </button>
        </div>
      </motion.div>
    </div>
  );
              }
