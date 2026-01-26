import React from "react";
import PdfReport from "./PdfReport";

export default function Result({ t, lang, result, setPage }) {
  if (!result) return null;

  const badgeClass =
    result.risk === "good" ? "badge good" : result.risk === "warn" ? "badge warn" : "badge bad";

  const riskLabel =
    result.risk === "good" ? t.riskGreen : result.risk === "warn" ? t.riskYellow : t.riskRed;

  const recommendations =
    result.risk === "good"
      ? lang === "ar"
        ? [
            "المبنى يبدو آمنًا وفقًا للتقييم الأولي. يُنصح بالمراقبة الدورية.",
            "لا توجد إجراءات فورية مطلوبة."
          ]
        : ["Building appears safe based on preliminary assessment.", "Periodic monitoring is recommended."]
      : result.risk === "warn"
      ? lang === "ar"
        ? [
            "يوجد بعض المخاطر التي تحتاج مراجعة هندسية خلال 6–12 شهر.",
            "تجنب أي تعديلات أو تحميل إضافي قبل التقييم."
          ]
        : ["Some risk factors detected. Engineering review recommended within 6–12 months.", "Avoid modifications or additional loads before review."]
      : lang === "ar"
      ? [
          "الخطر مرتفع. يُنصح بإجراء تقييم إنشائي ميداني عاجل من مهندس مرخص.",
          "تجنب أي استخدام إضافي أو تعديلات في المبنى."
        ]
      : ["High risk. Urgent on-site structural assessment by a licensed engineer is recommended.", "Avoid additional use or modifications until verified."];

  return (
    <div className="card resultCard">
      <div className="resultTitle">
        <h3>{t.resultTitle}</h3>
        <span className={badgeClass}>{riskLabel}</span>
      </div>

      <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>{t.resultText}</p>

      <div className="sectionTitle">
        <h3>{t.summary}</h3>
      </div>
      <ul style={{ color: "var(--muted)", lineHeight: 1.6 }}>
        <li>
          {lang === "ar"
            ? `النقاط: ${result.score} من ${result.max}`
            : `Score: ${result.score} of ${result.max}`}
        </li>
        <li>
          {lang === "ar"
            ? `مؤشر الخطر: ${(result.ratio * 100).toFixed(0)}%`
            : `Risk indicator: ${(result.ratio * 100).toFixed(0)}%`}
        </li>
      </ul>

      <div className="sectionTitle">
        <h3>{t.recommendations}</h3>
      </div>
      <ul style={{ color: "var(--muted)", lineHeight: 1.6 }}>
        {recommendations.map((r, idx) => (
          <li key={idx}>{r}</li>
        ))}
      </ul>

      <PdfReport t={t} lang={lang} result={result} />
      <div style={{ marginTop: "12px" }}>
        <button className="btn" onClick={() => setPage("questionnaire")}>
          {t.start}
        </button>
      </div>
    </div>
  );
}
