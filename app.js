const { useState } = React;

const QUESTIONS = [
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
  },
  {
    id: 6,
    title: "هل تم تنفيذ المبنى وفق معايير حديثة (بعد 2010)؟",
    type: "select",
    options: [
      { value: "yes", label: "نعم", score: 0 },
      { value: "no", label: "لا", score: 1 }
    ],
    explanation: "التصميم الحديث عادة يتضمن اشتراطات زلزالية أفضل وفق ASCE 7."
  },
  {
    id: 7,
    title: "هل توجد شروخ جديدة خلال آخر 6 أشهر؟",
    type: "select",
    options: [
      { value: "no", label: "لا", score: 0 },
      { value: "yes", label: "نعم", score: 2 }
    ],
    explanation: "الشروخ الجديدة قد تشير لحركة أرضية أو تدهور في الهيكل."
  },
  {
    id: 8,
    title: "هل يوجد تآكل أو صدأ واضح في حديد التسليح؟",
    type: "select",
    options: [
      { value: "no", label: "لا", score: 0 },
      { value: "yes", label: "نعم", score: 2 }
    ],
    explanation: "الصدأ يقلل من مقاومة الحديد ويزيد احتمال فشل القطاعات."
  },
  {
    id: 9,
    title: "هل توجد زوايا/أعمدة مكسورة أو مهشمة؟",
    type: "select",
    options: [
      { value: "no", label: "لا", score: 0 },
      { value: "yes", label: "نعم", score: 3 }
    ],
    explanation: "الانهيار الجزئي في الأعمدة مؤشر خطير يتطلب فحصًا فوريًا."
  },
  {
    id: 10,
    title: "هل المبنى يحتوي على إضافة (زيادة طوابق) بعد البناء الأساسي؟",
    type: "select",
    options: [
      { value: "no", label: "لا", score: 0 },
      { value: "yes", label: "نعم", score: 2 }
    ],
    explanation: "الإضافات تزيد الأحمال على الأعمدة والأساسات، وقد لا تكون محسوبة."
  },
  {
    id: 11,
    title: "هل يوجد تباين واضح في ارتفاع الأعمدة/الأدوار؟",
    type: "select",
    options: [
      { value: "no", label: "لا", score: 0 },
      { value: "yes", label: "نعم", score: 2 }
    ],
    explanation: "التباين قد يشير لضعف في التوزيع الإنشائي وزيادة المخاطر الزلزالية."
  },
  {
    id: 12,
    title: "هل توجد فتحات كبيرة (مثل أبواب/محلات) في الطابق الأرضي؟",
    type: "select",
    options: [
      { value: "no", label: "لا", score: 0 },
      { value: "yes", label: "نعم", score: 2 }
    ],
    explanation: "الفتحات الكبيرة تقلل من صلابة الطابق وتزيد احتمال الـ Soft Story."
  },
  {
    id: 13,
    title: "هل يوجد نزول في الأرض حول المبنى أو مياه جوفية قريبة؟",
    type: "select",
    options: [
      { value: "no", label: "لا", score: 0 },
      { value: "yes", label: "نعم", score: 2 }
    ],
    explanation: "المياه الجوفية قد تؤدي لهبوط أو تآكل في الأساسات."
  },
  {
    id: 14,
    title: "هل يوجد تآكل في الجدران/الخرسانة (تساقط طبقات)؟",
    type: "select",
    options: [
      { value: "no", label: "لا", score: 0 },
      { value: "yes", label: "نعم", score: 2 }
    ],
    explanation: "تآكل الخرسانة يقلل من قدرة القطاع على تحمل الأحمال."
  },
  {
    id: 15,
    title: "هل تم إضافة فتحات/تعديلات داخلية كبيرة (حفر جدران حاملة)؟",
    type: "select",
    options: [
      { value: "no", label: "لا", score: 0 },
      { value: "yes", label: "نعم", score: 2 }
    ],
    explanation: "تعديل الجدران الحاملة يؤثر على توزيع الأحمال ويزيد خطر الانهيار."
  },
  {
    id: 16,
    title: "هل توجد معدات ثقيلة أو حمولة كبيرة على سطح المبنى؟",
    type: "select",
    options: [
      { value: "no", label: "لا", score: 0 },
      { value: "yes", label: "نعم", score: 1 }
    ],
    explanation: "الأحمال الزائدة على السطح تزيد من القوى الزلزالية على الهيكل."
  },
  {
    id: 17,
    title: "هل يوجد ميل واضح في المبنى (انحراف/ميلان)؟",
    type: "select",
    options: [
      { value: "no", label: "لا", score: 0 },
      { value: "yes", label: "نعم", score: 3 }
    ],
    explanation: "الميلان مؤشر قوي على هبوط أو فشل إنشائي ويحتاج فحص فوري."
  },
  {
    id: 18,
    title: "هل يوجد تقوس في الأعمدة أو العوارض؟",
    type: "select",
    options: [
      { value: "no", label: "لا", score: 0 },
      { value: "yes", label: "نعم", score: 2 }
    ],
    explanation: "التقوس يدل على حمل زائد أو ضعف في التسليح."
  },
  {
    id: 19,
    title: "هل المبنى يقع في منطقة قريبة من صدع زلزالي معروف؟",
    type: "select",
    options: [
      { value: "no", label: "لا", score: 0 },
      { value: "yes", label: "نعم", score: 2 }
    ],
    explanation: "القرب من الصدوع يزيد قوة الزلازل المتوقعة وفق ASCE 7."
  },
  {
    id: 20,
    title: "هل المبنى يحتوي على جدران قص (Shear Walls) أو نظام مقاوم جيد؟",
    type: "select",
    options: [
      { value: "yes", label: "نعم", score: 0 },
      { value: "no", label: "لا", score: 2 }
    ],
    explanation: "وجود جدران القص يزيد صلابة المبنى ويقلل مخاطر الانهيار."
  },
  {
    id: 21,
    title: "هل يوجد تصدعات حول فتحات الأبواب والنوافذ بشكل واضح؟",
    type: "select",
    options: [
      { value: "no", label: "لا", score: 0 },
      { value: "yes", label: "نعم", score: 1 }
    ],
    explanation: "تصدعات الفتحات مؤشر على تشوهات في الإطار الإنشائي."
  },
  {
    id: 22,
    title: "هل تم صيانة المبنى بشكل دوري (إصلاح شقوق/إعادة تسليح)؟",
    type: "select",
    options: [
      { value: "yes", label: "نعم", score: 0 },
      { value: "no", label: "لا", score: 1 }
    ],
    explanation: "الصيانة الدورية تقلل التدهور وتزيد عمر المبنى."
  },
  {
    id: 23,
    title: "هل المبنى يحتوي على طابق ميزانين أو طوابق غير منتظمة؟",
    type: "select",
    options: [
      { value: "no", label: "لا", score: 0 },
      { value: "yes", label: "نعم", score: 2 }
    ],
    explanation: "الطوابق غير المنتظمة تزيد من عدم انتظام توزيع القوى."
  },
  {
    id: 24,
    title: "هل يوجد اهتزاز واضح أثناء المرور أو نشاطات قريبة؟",
    type: "select",
    options: [
      { value: "no", label: "لا", score: 0 },
      { value: "yes", label: "نعم", score: 1 }
    ],
    explanation: "الاهتزاز قد يدل على ضعف في الأساسات أو النظام الإنشائي."
  },
  {
    id: 25,
    title: "هل يوجد مبنى مجاور مائل أو متضرر بشكل واضح؟",
    type: "select",
    options: [
      { value: "no", label: "لا", score: 0 },
      { value: "yes", label: "نعم", score: 2 }
    ],
    explanation: "تأثير المباني المجاورة قد يؤثر على الاستقرار العام في حالة حدوث زلزال."
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
    for (const q of QUESTIONS) {
      const ans = answers[q.id];
      const option = q.options.find((o) => o.value === ans);
      total += option ? option.score : 0;
    }

    let status, message, recommendations;

    if (total <= 5) {
      status = "green";
      message = lang === "ar" ? "آمن حاليًا" : "Safe for now";
      recommendations = lang === "ar"
        ? "المبنى يبدو آمنًا بناءً على الإجابات الحالية. راقب أي شقوق جديدة وراجع مهندس إذا حصلت تغييرات."
        : "Building seems safe based on current answers. Monitor for new cracks and consult an engineer if changes occur.";
    } else if (total <= 12) {
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
        <div className="nav">
          <a href="privacy.html">{lang === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}</a>
          <a href="disclaimer.html">{lang === "ar" ? "إخلاء المسؤولية" : "Disclaimer"}</a>
        </div>
      </header>

      <div className="card">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2>{lang === "ar" ? "الأسئلة" : "Questions"}</h2>
          <select value={lang} onChange={(e) => setLang(e.target.value)}>
            <option value="ar">العربية</option>
            <option value="en">English</option>
          </select>
        </div>

        {QUESTIONS.map((q) => (
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
