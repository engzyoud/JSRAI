import React from "react";

export default function CaseStudies({ t, lang }) {
  const cases = [
    {
      title: lang === "ar" ? "حالة 1: مبنى حديث" : "Case 1: Modern Building",
      desc:
        lang === "ar"
          ? "مبنى عمره 8 سنوات، نظام منتظم، لا شقوق. النتيجة: آمن."
          : "Building age 8 years, regular system, no cracks. Result: Safe."
    },
    {
      title: lang === "ar" ? "حالة 2: مبنى قديم" : "Case 2: Older Building",
      desc:
        lang === "ar"
          ? "مبنى عمره 35 سنة مع شقوق بسيطة. النتيجة: يحتاج مراجعة."
          : "Building age 35 years with minor cracks. Result: Needs review."
    },
    {
      title: lang === "ar" ? "حالة 3: مبنى غير منتظم" : "Case 3: Irregular Building",
      desc:
        lang === "ar"
          ? "مبنى به دور أرضي مفتوح مع تدهور. النتيجة: خطر مرتفع."
          : "Soft-story building with deterioration. Result: High risk."
    }
  ];

  return (
    <div className="card">
      <div className="sectionTitle">
        <h3>{t.caseStudiesTitle}</h3>
      </div>
      <p>{t.caseStudiesText}</p>
      <div className="grid">
        {cases.map((c, idx) => (
          <div className="card" key={idx}>
            <h4>{c.title}</h4>
            <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
