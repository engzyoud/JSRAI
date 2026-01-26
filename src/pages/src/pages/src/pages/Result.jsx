import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import jsPDF from "jspdf";

export default function Result() {
  const { t, i18n } = useTranslation();
  const [result, setResult] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("jsrai_result");
    if (data) setResult(JSON.parse(data));
  }, []);

  if (!result) {
    return (
      <div className="max-w-6xl mx-auto">
        <div className="rounded-3xl border border-white/10 p-6 bg-white/5">
          <h2 className="text-3xl font-bold mb-3">{t("resultTitle")}</h2>
          <p className="opacity-80">لا توجد نتائج محفوظة. يرجى إجراء التقييم أولًا.</p>
        </div>
      </div>
    );
  }

  const percent = Math.round((result.totalPoints / result.maxPoints) * 100);

  let status = t("resultSafe");
  let explanation = "المبنى يبدو آمنًا بشكل مبدئي بناءً على الإجابات.";
  let recommendation = "لا يوجد خطر واضح، لكن يفضل مراجعة هندسية دورية.";

  if (percent >= 60 && percent < 80) {
    status = t("resultReview");
    explanation = "يوجد مؤشرات تحتاج مراجعة هندسية، خصوصًا في نقاط التدهور أو الانتظام.";
    recommendation =
      "راجع مكتب هندسي مختص لتقييم العناصر التي تم تحديدها، واطلب فحص موقعي للإنشاءات.";
  } else if (percent >= 80) {
    status = t("resultDanger");
    explanation = "هناك خطر مرتفع. يوصى بإجراء فحص هندسي عاجل قبل السكن أو الاستعمال.";
    recommendation =
      "اتخذ إجراءات فورية: إخلاء مؤقت إذا لزم الأمر، واستعن بمكتب هندسي لتقييم شامل وتدعيم.";
  }

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(16);
    doc.text(t("appTitle"), 10, 20);

    doc.setFontSize(12);
    doc.text(`${t("resultTitle")}: ${status}`, 10, 35);
    doc.text(`${t("resultExplanation")}: ${explanation}`, 10, 45);
    doc.text(`${t("resultRecommendation")}: ${recommendation}`, 10, 55);

    doc.setFontSize(10);
    doc.text(t("resultNote"), 10, 80);

    doc.save("JSRAI-report.pdf");
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="rounded-3xl border border-white/10 p-6 bg-white/5">
        <h2 className="text-3xl font-bold mb-3">{t("resultTitle")}</h2>

        <div className="p-4 rounded-2xl border border-white/10 bg-white/5 mb-4">
          <div className="font-bold text-xl mb-2">{status}</div>
          <div className="opacity-80 mb-2">
            {t("resultExplanation")}: {explanation}
          </div>
          <div className="opacity-80">
            {t("resultRecommendation")}: {recommendation}
          </div>
        </div>

        <button
          onClick={generatePDF}
          className="px-6 py-3 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 transition"
        >
          {t("pdfBtn")}
        </button>

        <div className="mt-4 text-xs opacity-60">{t("resultNote")}</div>
      </div>
    </div>
  );
          }
