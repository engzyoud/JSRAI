const { useState } = React;

const questions = [
  {
    id: 1,
    title: "عمر المبنى",
    type: "select",
    options: [
      { value: "0-10", label: "0 - 10 سنوات", score: 0 },
      { value: "10-30", label: "10 - 30 سنة", score: 1 },
      { value: "30+", label: "أكثر من 30 سنة", score: 2 }
    ],
    explanation: "العمر الأكبر يزيد احتمالية التدهور والقصور في التصميم وفقاً لمعايير ACI/ASCE."
  },
  {
    id: 2,
    title: "نظام الإنشاء (خرسانة/حديد/أعمال تقليدية)",
    type: "select",
    options: [
      { value: "concrete", label: "خرسانة مسلحة", score: 0 },
      { value: "steel", label: "هيكل فولاذي", score: 0 },
      { value: "masonry", label: "أعمال تقليدية/طوب", score: 2 }
    ],
    explanation: "الأنظمة غير المرنة (مثل الطوب) تكون أكثر حساسية للزلازل."
  },
  {
    id: 3,
    title: "وجود شقوق واسعة أو نزول في الأساسات",
    type: "select",
    options: [
      { value: "no", label: "لا", score: 0 },
      { value: "small", label: "شقوق صغيرة (مراقبة)", score: 1 },
      { value: "large", label: "شقوق واسعة/هبوط واضح", score: 3 }
    ],
    explanation: "الشروخ الواسعة قد تشير لتدهور الإنشائي أو هبوط في الأساسات، مما يزيد المخاطر."
  },
  {
    id: 4,
    title: "هل المبنى غير منتظم (وجود شرفات كبيرة/قصور في توزيع الأعمدة)؟",
    type: "select",
    options: [
      { value: "no", label: "لا", score: 0 },
      { value: "yes", label: "نعم", score: 2 }
    ],
    explanation: "اللاانتظام يزيد من احتمالية حدوث لحظات كبيرة وانهيار غير متوقع في الزلازل."
  },
  {
    id: 5,
    title: "هل يوجد “Soft Story” (طابق أرضي مفتوح بدون جدران حاملة)؟",
    type: "select",
    options: [
      { value: "no", label: "لا", score: 0 },
      { value: "yes", label: "نعم", score: 3 }
    ],
    explanation: "الـ Soft Story يزيد احتمال انهيار المبنى أثناء الزلزال."
  }
];

function App() {
  const [lang, setLang] = useState("ar");
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const setAnswer = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const calculate = () => {
    let total = 0;
    for (const q of questions) {
      const ans = answers[q.id];
      const option = q.options.find((o) => o.value === ans);
      total += option ? option.score : 0;
    }

    let status, message, recommendations;
    if (total <= 2) {
      status = "green";
      message = lang === "ar" ? "آمن حاليًا" : "Safe for now";
      recommendations = lang === "ar"
        ? "المبنى يبدو آمنًا بناءً على الإجابات الحالية. راقب أي شقوق جديدة وراجع مهندس إذا حصلت تغييرات."
        : "Building seems safe based on current answers. Monitor for new cracks and consult an engineer if changes occur.";
    } else if (total <= 5) {
      status = "yellow";
      message = lang === "ar" ? "يحتاج مراجعة هندسية" : "Needs engineering review";
      recommendations = lang === "ar"
        ? "يوجد مؤشرات قد تستدعي فحصًا هندسيًا. راجع مكتب هندسي للتقييم الميداني."
        : "There are indicators that require an engineering field inspection.";
    } else {
      status = "red";
      message = lang === "ar" ? "خطر مرتفع" : "High risk";
      recommendations = lang === "ar"
        ? "يوجد خطر مرتفع. تجنب الإقامة في المبنى واتصل بمهندس مختص فورًا."
        : "High risk. Avoid occupancy and contact a qualified engineer immediately.";
    }

    setResult({ total, status, message, recommendations });
  };

  const reset = () => {
    setAnswers({});
    setResult(null);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>{lang === "ar" ? "أداة تقييم السلامة الإنشائية" : "Structural Safety Assessment Tool"}</h1>
        <p>
          {lang === "ar"
            ? "تقييم أولي للسلامة الإنشائية للمباني في الأردن. لا يغني عن فحص موقعي."
            : "Preliminary assessment for building safety in Jordan. Not a substitute for field inspection."}
        </p>
      </header>

      <div className="card">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2>{lang === "ar" ? "الأسئلة" : "Questions"}</h2>
          <select value={lang} onChange={(e) => setLang(e.target.value)}>
            <option value="ar">العربية</option>
            <option value="en">English</option>
          </select>
        </div>

        {questions.map((q) => (
          <div className="question" key={q.id}>
            <label>{lang === "ar" ? q.title : q.title}</label>
            <select value={answers[q.id] || ""} onChange={(e) => setAnswer(q.id, e.target.value)}>
              <option value="">{lang === "ar" ? "اختر" : "Select"}</option>
              {q.options.map((o) => (
                <option key={o.value} value={o.value}>
                  {lang === "ar" ? o.label : o.label}
                </option>
              ))}
            </select>
            <small>{lang === "ar" ? q.explanation : q.explanation}</small>
          </div>
        ))}

        <button className="btn btn-primary" onClick={calculate}>
          {lang === "ar" ? "احسب" : "Calculate"}
        </button>
        <button className="btn btn-secondary" onClick={reset}>
          {lang === "ar" ? "إعادة" : "Reset"}
        </button>

        {result && (
          <div className={`result ${result.status}`}>
            <h3>{result.message}</h3>
            <p>{lang === "ar" ? `المجموع: ${result.total}` : `Score: ${result.total}`}</p>
            <p>{result.recommendations}</p>
          </div>
        )}
      </div>

      <footer className="footer">
        {lang === "ar"
          ? "Developed by Eng. [اسمك] — أداة تقييم أولي فقط."
          : "Developed by Eng. [Your Name] — Preliminary assessment tool only."}
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
