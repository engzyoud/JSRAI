import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { useTool } from "../context/ToolContext";

const questions = [
  {
    id: "q1",
    ar: "نوع المبنى (الاستخدام الحالي)",
    en: "Building Type (Current Use)",
    options: [
      { value: 3, ar: "سكني", en: "Residential" },
      { value: 4, ar: "تجاري", en: "Commercial" },
      { value: 5, ar: "صناعي", en: "Industrial" },
      { value: 4, ar: "مختلط", en: "Mixed-use" },
      { value: 2, ar: "آخر", en: "Other" },
    ],
  },
  {
    id: "q2",
    ar: "عدد الطوابق",
    en: "Number of Floors",
    options: [
      { value: 2, ar: "1–3", en: "1–3" },
      { value: 3, ar: "4–7", en: "4–7" },
      { value: 4, ar: "8–12", en: "8–12" },
      { value: 5, ar: "13–20", en: "13–20" },
      { value: 5, ar: "أكثر من 20", en: ">20" },
    ],
  },
  {
    id: "q3",
    ar: "سنة البناء التقريبية",
    en: "Approximate Construction Year",
    options: [
      { value: 5, ar: "قبل 1980", en: "Before 1980" },
      { value: 4, ar: "1980–2000", en: "1980–2000" },
      { value: 3, ar: "2001–2010", en: "2001–2010" },
      { value: 2, ar: "2011–2020", en: "2011–2020" },
      { value: 1, ar: "بعد 2020", en: "After 2020" },
    ],
  },
  {
    id: "q4",
    ar: "هل تم تغيير استخدام المبنى؟",
    en: "Has the building usage changed?",
    options: [
      { value: 1, ar: "لا", en: "No" },
      { value: 3, ar: "نعم (تغيير بسيط)", en: "Yes (minor change)" },
      { value: 5, ar: "نعم (تغيير كبير)", en: "Yes (major change)" },
      { value: 4, ar: "غير متأكد", en: "Not sure" },
    ],
  },
  {
    id: "q5",
    ar: "هل تم إضافة طوابق أو توسعة بعد البناء؟",
    en: "Any additional floors or extensions?",
    options: [
      { value: 1, ar: "لا", en: "No" },
      { value: 3, ar: "إضافة صغيرة", en: "Minor addition" },
      { value: 5, ar: "إضافة كبيرة", en: "Major addition" },
      { value: 4, ar: "غير متأكد", en: "Not sure" },
    ],
  },
  {
    id: "q6",
    ar: "نوع الهيكل الإنشائي",
    en: "Structural System Type",
    options: [
      { value: 2, ar: "خرسانة مسلحة", en: "RC" },
      { value: 3, ar: "فولاذ", en: "Steel" },
      { value: 4, ar: "طوب/حجر", en: "Masonry" },
      { value: 4, ar: "مختلط", en: "Mixed" },
    ],
  },
  {
    id: "q7",
    ar: "هل توجد شروخ واضحة في الجدران/الأعمدة؟",
    en: "Visible cracks in walls/columns?",
    options: [
      { value: 1, ar: "لا", en: "No" },
      { value: 3, ar: "شروخ صغيرة", en: "Minor cracks" },
      { value: 5, ar: "شروخ كبيرة", en: "Major cracks" },
      { value: 4, ar: "غير متأكد", en: "Not sure" },
    ],
  },
  {
    id: "q8",
    ar: "هل يوجد ميلان في المبنى؟",
    en: "Visible tilt/leaning?",
    options: [
      { value: 1, ar: "لا", en: "No" },
      { value: 4, ar: "ميلان بسيط", en: "Minor tilt" },
      { value: 5, ar: "ميلان واضح", en: "Major tilt" },
      { value: 3, ar: "غير متأكد", en: "Not sure" },
    ],
  },
  {
    id: "q9",
    ar: "هل يوجد تآكل أو صدأ في الحديد الظاهر؟",
    en: "Visible corrosion in exposed steel?",
    options: [
      { value: 1, ar: "لا", en: "No" },
      { value: 3, ar: "قليل", en: "Minor corrosion" },
      { value: 5, ar: "واضح", en: "Major corrosion" },
      { value: 4, ar: "غير متأكد", en: "Not sure" },
    ],
  },
  {
    id: "q10",
    ar: "هل تم إزالة أو تغيير أعمدة/جدران حاملة؟",
    en: "Any removal/changes in columns or load-bearing walls?",
    options: [
      { value: 1, ar: "لا", en: "No" },
      { value: 4, ar: "تغيير بسيط", en: "Minor change" },
      { value: 5, ar: "تغيير كبير", en: "Major change" },
      { value: 3, ar: "غير متأكد", en: "Not sure" },
    ],
  },
  {
    id: "q11",
    ar: "هل توجد ترميمات أو إصلاحات في الأساسات؟",
    en: "Any foundation repairs?",
    options: [
      { value: 1, ar: "لا", en: "No" },
      { value: 3, ar: "إصلاح بسيط", en: "Minor repair" },
      { value: 5, ar: "إصلاح كبير", en: "Major repair" },
      { value: 4, ar: "غير متأكد", en: "Not sure" },
    ],
  },
  {
    id: "q12",
    ar: "هل توجد تسربات مياه أو رطوبة قوية؟",
    en: "Water leakage or severe moisture?",
    options: [
      { value: 1, ar: "لا", en: "No" },
      { value: 3, ar: "بسيط", en: "Minor" },
      { value: 5, ar: "شديد", en: "Severe" },
      { value: 4, ar: "غير متأكد", en: "Not sure" },
    ],
  },
  {
    id: "q13",
    ar: "هل يوجد تفتت أو سقوط في الخرسانة؟",
    en: "Concrete spalling or falling?",
    options: [
      { value: 1, ar: "لا", en: "No" },
      { value: 3, ar: "بسيط", en: "Minor" },
      { value: 5, ar: "شديد", en: "Severe" },
      { value: 4, ar: "غير متأكد", en: "Not sure" },
    ],
  },
  {
    id: "q14",
    ar: "هل توجد مشاكل في السقف (انحناء أو هبوط)؟",
    en: "Roof sagging or deflection?",
    options: [
      { value: 1, ar: "لا", en: "No" },
      { value: 3, ar: "بسيط", en: "Minor" },
      { value: 5, ar: "واضح", en: "Major" },
      { value: 4, ar: "غير متأكد", en: "Not sure" },
    ],
  },
  {
    id: "q15",
    ar: "هل يوجد اهتزاز قوي أثناء الزلازل الصغيرة؟",
    en: "Strong vibration during small earthquakes?",
    options: [
      { value: 1, ar: "لا", en: "No" },
      { value: 3, ar: "قليل", en: "Minor" },
      { value: 5, ar: "قوي", en: "Strong" },
      { value: 4, ar: "غير متأكد", en: "Not sure" },
    ],
  },
  {
    id: "q16",
    ar: "هل المبنى في منطقة تربة ناعمة؟",
    en: "Is the building on soft soil?",
    options: [
      { value: 1, ar: "لا", en: "No" },
      { value: 3, ar: "تربة متوسطة", en: "Medium soil" },
      { value: 5, ar: "تربة رخوة", en: "Soft soil" },
      { value: 4, ar: "غير متأكد", en: "Not sure" },
    ],
  },
  {
    id: "q17",
    ar: "هل يوجد تباين في ارتفاع الأعمدة أو عدم انتظام؟",
    en: "Irregular column heights or uneven levels?",
    options: [
      { value: 1, ar: "لا", en: "No" },
      { value: 3, ar: "بسيط", en: "Minor" },
      { value: 5, ar: "واضح", en: "Major" },
      { value: 4, ar: "غير متأكد", en: "Not sure" },
    ],
  },
  {
    id: "q18",
    ar: "هل توجد أعمدة رقيقة أو جدران حاملة ضعيفة؟",
    en: "Thin columns or weak load-bearing walls?",
    options: [
      { value: 1, ar: "لا", en: "No" },
      { value: 3, ar: "بعض الأعمدة", en: "Some columns" },
      { value: 5, ar: "أغلبها", en: "Most of them" },
      { value: 4, ar: "غير متأكد", en: "Not sure" },
    ],
  },
  {
    id: "q19",
    ar: "هل توجد فتحات كبيرة في الجدران الحاملة؟",
    en: "Large openings in load-bearing walls?",
    options: [
      { value: 1, ar: "لا", en: "No" },
      { value: 3, ar: "قليل", en: "Few" },
      { value: 5, ar: "كثير", en: "Many" },
      { value: 4, ar: "غير متأكد", en: "Not sure" },
    ],
  },
  {
    id: "q20",
    ar: "هل يوجد “Soft Story” (طابق ضعيف)؟",
    en: "Soft Story presence?",
    options: [
      { value: 1, ar: "لا", en: "No" },
      { value: 3, ar: "ممكن", en: "Possible" },
      { value: 5, ar: "نعم", en: "Yes" },
      { value: 4, ar: "غير متأكد", en: "Not sure" },
    ],
  },
  {
    id: "q21",
    ar: "هل تم تنفيذ المبنى وفق كود حديث؟",
    en: "Built according to modern codes?",
    options: [
      { value: 1, ar: "نعم", en: "Yes (modern code)" },
      { value: 5, ar: "لا (كود قديم)", en: "No (old code)" },
      { value: 4, ar: "غير متأكد", en: "Not sure" },
    ],
  },
  {
    id: "q22",
    ar: "هل يوجد ضعف في الوصلات بين العناصر؟",
    en: "Poor connections between elements?",
    options: [
      { value: 1, ar: "لا", en: "No" },
      { value: 3, ar: "قليل", en: "Minor" },
      { value: 5, ar: "كثير", en: "Major" },
      { value: 4, ar: "غير متأكد", en: "Not sure" },
    ],
  },
  {
    id: "q23",
    ar: "هل يوجد تشوه في الأعمدة؟",
    en: "Column bending or deformation?",
    options: [
      { value: 1, ar: "لا", en: "No" },
      { value: 3, ar: "بسيط", en: "Minor" },
      { value: 5, ar: "واضح", en: "Major" },
      { value: 4, ar: "غير متأكد", en: "Not sure" },
    ],
  },
  {
    id: "q24",
    ar: "هل يوجد ميل في الأرض حول المبنى؟",
    en: "Ground tilt around the building?",
    options: [
      { value: 1, ar: "لا", en: "No" },
      { value: 3, ar: "بسيط", en: "Minor" },
      { value: 5, ar: "واضح", en: "Major" },
      { value: 4, ar: "غير متأكد", en: "Not sure" },
    ],
  },
  {
    id: "q25",
    ar: "هل يوجد أخطاء في البناء مثل عدم تساوي البلاطات؟",
    en: "Construction defects (uneven slabs)?",
    options: [
      { value: 1, ar: "لا", en: "No" },
      { value: 3, ar: "قليل", en: "Minor" },
      { value: 5, ar: "كثير", en: "Major" },
      { value: 4, ar: "غير متأكد", en: "Not sure" },
    ],
  },
  {
    id: "q26",
    ar: "هل يوجد أضرار نتيجة زلزال سابق؟",
    en: "Damage from previous earthquake?",
    options: [
      { value: 1, ar: "لا", en: "No" },
      { value: 3, ar: "بسيط", en: "Minor" },
      { value: 5, ar: "واضح", en: "Major" },
      { value: 4, ar: "غير متأكد", en: "Not sure" },
    ],
  },
  {
    id: "q27",
    ar: "هل يوجد تحميل زائد على الأسطح؟",
    en: "Overload on roof/floors?",
    options: [
      { value: 1, ar: "لا", en: "No" },
      { value: 3, ar: "قليل", en: "Minor" },
      { value: 5, ar: "كبير", en: "Major" },
      { value: 4, ar: "غير متأكد", en: "Not sure" },
    ],
  },
  {
    id: "q28",
    ar: "هل يوجد تآكل في المونة/الطوب؟",
    en: "Mortar/brick deterioration?",
    options: [
      { value: 1, ar: "لا", en: "No" },
      { value: 3, ar: "قليل", en: "Minor" },
      { value: 5, ar: "كثير", en: "Major" },
      { value: 4, ar: "غير متأكد", en: "Not sure" },
    ],
  },
  {
    id: "q29",
    ar: "هل توجد تشققات في الجدران الخارجية؟",
    en: "Cracks in external walls?",
    options: [
      { value: 1, ar: "لا", en: "No" },
      { value: 3, ar: "بسيط", en: "Minor" },
      { value: 5, ar: "واضح", en: "Major" },
      { value: 4, ar: "غير متأكد", en: "Not sure" },
    ],
  },
  {
    id: "q30",
    ar: "هل يوجد عناصر خارجية مكشوفة؟",
    en: "Exposed columns or unprotected elements?",
    options: [
      { value: 1, ar: "لا", en: "No" },
      { value: 3, ar: "بعض العناصر", en: "Some elements" },
      { value: 5, ar: "أغلبها", en: "Most elements" },
      { value: 4, ar: "غير متأكد", en: "Not sure" },
    ],
  },
  {
    id: "q31",
    ar: "هل توجد تشققات في البلاطات؟",
    en: "Cracks in slabs?",
    options: [
      { value: 1, ar: "لا", en: "No" },
      { value: 3, ar: "بسيط", en: "Minor" },
      { value: 5, ar: "واضح", en: "Major" },
      { value: 4, ar: "غير متأكد", en: "Not sure" },
    ],
  },
  {
    id: "q32",
    ar: "هل توجد إضافات ثقيلة على الواجهات؟",
    en: "Heavy facade additions?",
    options: [
      { value: 1, ar: "لا", en: "No" },
      { value: 3, ar: "قليل", en: "Minor" },
      { value: 5, ar: "كثير", en: "Major" },
      { value: 4, ar: "غير متأكد", en: "Not sure" },
    ],
  },
  {
    id: "q33",
    ar: "هل يوجد مياه جوفية عالية أو سيول؟",
    en: "High groundwater or flooding risk?",
    options: [
      { value: 1, ar: "لا", en: "No" },
      { value: 3, ar: "ممكن", en: "Possible" },
      { value: 5, ar: "نعم", en: "Yes" },
      { value: 4, ar: "غير متأكد", en: "Not sure" },
    ],
  },
  {
    id: "q34",
    ar: "هل المبنى قريب من طريق سريع/حفريات؟",
    en: "Close to highway or excavation?",
    options: [
      { value: 1, ar: "لا", en: "No" },
      { value: 3, ar: "قريب (ليس خطير)", en: "Close (not severe)" },
      { value: 5, ar: "قريب جدًا", en: "Very close" },
      { value: 4, ar: "غير متأكد", en: "Not sure" },
    ],
  },
  {
    id: "q35",
    ar: "هل النظام الإنشائي غير متجانس؟",
    en: "Inconsistent structural system?",
    options: [
      { value: 1, ar: "لا", en: "No" },
      { value: 3, ar: "بعض الأجزاء", en: "Some parts" },
      { value: 5, ar: "أغلب المبنى", en: "Most of building" },
      { value: 4, ar: "غير متأكد", en: "Not sure" },
    ],
  },
];

export default function Tool() {
  const { lang } = useLanguage();
  const { answers, setAnswers, setResult } = useTool();
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  const perPage = 5;
  const pages = Math.ceil(questions.length / perPage);

  const currentQuestions = questions.slice(page * perPage, (page + 1) * perPage);

  const handleAnswer = (id, value) => {
    setAnswers({ ...answers, [id]: value });
  };

  const nextPage = () => {
    if (page < pages - 1) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 0) setPage(page - 1);
  };

  const submit = () => {
    let total = 0;
    questions.forEach((q) => {
      total += answers[q.id] || 0;
    });

    let risk = "low";
    if (total >= 80) risk = "high";
    else if (total >= 45) risk = "medium";

    // smarter recommendation
    let recommendation = "";
    if (risk === "low") recommendation = lang === "ar"
      ? "المبنى يبدو سليماً بشكل عام. يُنصح بفحص دوري بسيط للتأكد."
      : "Building appears generally safe. A basic periodic inspection is recommended.";
    if (risk === "medium") recommendation = lang === "ar"
      ? "يوجد مؤشرات تحتاج فحص إنشائي. يفضل التواصل مع مهندس إنشائي لتقييم ميداني."
      : "Indicators suggest professional inspection is needed. Contact a structural engineer for field assessment.";
    if (risk === "high") recommendation = lang === "ar"
      ? "خطر مرتفع. يُنصح بإيقاف الاستخدام وإجراء فحص إنشائي عاجل."
      : "High risk detected. Immediate professional inspection is recommended.";

    setResult({ total, risk, recommendation, date: new Date().toISOString() });
    navigate("/result");
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/5 rounded-2xl p-8 shadow-lg"
      >
        <h2 className="text-3xl font-bold mb-3">
          {lang === "ar" ? "التقييم" : "Assessment"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-black/30 rounded-xl">
            <h3 className="font-semibold mb-2">
              {lang === "ar" ? "تعليمات" : "Instructions"}
            </h3>
            <p className="text-white/80">
              {lang === "ar"
                ? "أجب عن الأسئلة بدقة. النتيجة مبدئية فقط."
                : "Answer the questions accurately. Result is preliminary only."}
            </p>
          </div>

          <div className="p-6 bg-black/30 rounded-xl">
            <h3 className="font-semibold mb-2">
              {lang === "ar" ? "الصفحة" : "Page"}
            </h3>
            <p className="text-white/80">
              {lang === "ar" ? `${page + 1} من ${pages}` : `${page + 1} of ${pages}`}
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-6">
          {currentQuestions.map((q) => (
            <div key={q.id} className="bg-black/30 p-6 rounded-xl">
              <h4 className="font-semibold mb-3">{lang === "ar" ? q.ar : q.en}</h4>
              <div className="flex flex-wrap gap-3">
                {q.options.map((opt) => (
                  <button
                    key={opt.en}
                    className={`px-4 py-2 rounded-lg border ${
                      answers[q.id] === opt.value
                        ? "bg-blue-500 text-black border-blue-500"
                        : "border-white/30"
                    }`}
                    onClick={() => handleAnswer(q.id, opt.value)}
                  >
                    {lang === "ar" ? opt.ar : opt.en}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex gap-4">
          <button onClick={prevPage} className="btn-secondary">
            {lang === "ar" ? "السابق" : "Previous"}
          </button>
          {page < pages - 1 ? (
            <button onClick={nextPage} className="btn-primary">
              {lang === "ar" ? "التالي" : "Next"}
            </button>
          ) : (
            <button onClick={submit} className="btn-primary">
              {lang === "ar" ? "احسب النتيجة" : "Calculate Result"}
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
  }
