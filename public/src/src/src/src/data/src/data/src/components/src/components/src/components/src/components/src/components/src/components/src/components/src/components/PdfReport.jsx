import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function PdfReport({ t, lang, result }) {
  const downloadPdf = async () => {
    const doc = new jsPDF("p", "pt", "a4");
    const element = document.getElementById("pdf-content");

    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const imgProps = doc.getImageProperties(imgData);
    const pdfWidth = doc.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    doc.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    doc.save(`Structural_Safety_Report_${new Date().getTime()}.pdf`);
  };

  const riskLabel =
    result.risk === "good" ? t.riskGreen : result.risk === "warn" ? t.riskYellow : t.riskRed;

  return (
    <div style={{ marginTop: "18px" }}>
      <div id="pdf-content" style={{ display: "none" }}>
        <div style={{ padding: 30, background: "#070a12", color: "#e9eefb", fontFamily: "Arial" }}>
          <h1>{t.pdfTitle}</h1>
          <p style={{ color: "#9bb1d6" }}>{t.pdfSubtitle}</p>
          <hr style={{ borderColor: "#1b2a4a" }} />

          <h2>{t.resultTitle}</h2>
          <p>{riskLabel}</p>
          <p>
            {lang === "ar"
              ? `النقاط: ${result.score} من ${result.max}`
              : `Score: ${result.score} of ${result.max}`}
          </p>
          <p>
            {lang === "ar"
              ? `مؤشر الخطر: ${(result.ratio * 100).toFixed(0)}%`
              : `Risk indicator: ${(result.ratio * 100).toFixed(0)}%`}
          </p>

          <hr style={{ borderColor: "#1b2a4a" }} />
          <h2>{t.recommendations}</h2>
          <ul>
            {result.risk === "good" ? (
              <li>{lang === "ar" ? "المبنى يبدو آمنًا وفقًا للتقييم الأولي." : "Building appears safe based on preliminary assessment."}</li>
            ) : result.risk === "warn" ? (
              <li>{lang === "ar" ? "يوجد بعض المخاطر التي تحتاج مراجعة هندسية." : "Some risk factors detected. Engineering review recommended."}</li>
            ) : (
              <li>{lang === "ar" ? "الخطر مرتفع. يجب تقييم ميداني عاجل." : "High risk. Urgent on-site structural assessment recommended."}</li>
            )}
          </ul>

          <hr style={{ borderColor: "#1b2a4a" }} />
          <h2>{t.disclaimerTitle}</h2>
          <p style={{ color: "#9bb1d6" }}>{t.disclaimerText}</p>
        </div>
      </div>

      <button className="btn" onClick={downloadPdf}>
        {t.savePdf}
      </button>
    </div>
  );
}
