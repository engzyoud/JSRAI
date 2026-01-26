const { useState } = React;

const questions = [
  {
    id: 1,
    title: {
      ar: "عمر المبنى",
      en: "Building Age"
    },
    type: "select",
    options: [
      { value: "0-10", label: { ar: "0 - 10 سنوات", en: "0 - 10 years" }, score: 0 },
      { value: "10-30", label: { ar: "10 - 30 سنة", en: "10 - 30 years" }, score: 1 },
      { value: "30+", label: { ar: "أكثر من 30 سنة", en: "More than 30 years" }, score: 2 }
    ],
    explanation: {
      ar: "العمر الأكبر يزيد احتمالية التدهور والقصور في التصميم وفقاً لمعايير ACI/ASCE.",
      en: "Older buildings may have deterioration or outdated design per ACI/ASCE standards."
    }
  },
  {
    id: 2,
    title: {
      ar: "نظام الإنشاء (خرسانة/حديد/أعمال تقليدية)",
      en: "Structural System (Concrete/Steel/Masonry)"
    },
    type: "select",
    options: [
      { value: "concrete", label: { ar: "خرسانة مسلحة", en: "Reinforced Concrete" }, score: 0 },
      { value: "steel", label: { ar: "هيكل فولاذي", en: "Steel Frame" }, score: 0 },
      { value: "masonry", label: { ar: "أعمال تقليدية/طوب", en: "Masonry/Traditional" }, score: 2 }
    ],
    explanation: {
      ar: "الأنظمة غير المرنة (مثل الطوب) تكون أكثر حساسية للزلازل.",
      en: "Less ductile systems (like masonry) are more vulnerable in earthquakes."
    }
  },
  {
    id: 3,
    title: {
      ar: "وجود شقوق واسعة أو نزول في الأساسات",
      en: "Wide cracks or foundation settlement"
    },
    type: "select",
    options: [
      { value: "no", label: { ar: "لا", en: "No" }, score: 0 },
      { value: "small", label: { ar: "شقوق صغيرة (مراقبة)", en: "Small cracks (monitor)" }, score: 1 },
      { value: "large", label: { ar: "شقوق واسعة/هبوط واضح", en: "Large cracks/settlement" }, score: 3 }
    ],
    explanation: {
      ar: "الشروخ الواسعة قد تشير لتدهور إنشائي أو هبوط في الأساسات.",
      en: "Large cracks may indicate structural deterioration or foundation settlement."
    }
  },
  {
    id: 4,
    title: {
      ar: "هل المبنى غير منتظم (وجود شرفات كبيرة/توزيع غير متساوٍ للأعمدة)؟",
      en: "Is the building irregular (large balconies/uneven column layout)?"
    },
    type: "select",
    options: [
      { value: "no", label: { ar: "لا", en: "No" }, score: 0 },
      { value: "yes", label: { ar: "نعم", en: "Yes" }, score: 2 }
    ],
    explanation: {
      ar: "اللاانتظام يزيد من احتمالية حدوث لحظات كبيرة وانهيار غير متوقع.",
      en: "Irregularity increases risk of unexpected high moments and collapse."
    }
  },
  {
    id: 5,
    title: {
      ar: "هل يوجد طابق أرضي مفتوح (Soft Story)؟",
      en: "Is there a Soft Story (open ground floor)?"
    },
    type: "select",
    options: [
      { value: "no", label: { ar: "لا", en: "No" }, score: 0 },
      { value: "yes", label: { ar: "نعم", en: "Yes" }, score: 3 }
    ],
    explanation: {
      ar: "الـ Soft Story يزيد احتمال انهيار المبنى أثناء الزلزال.",
      en: "Soft story increases collapse risk during earthquakes."
    }
  },
  {
    id: 6,
    title: {
      ar: "هل يوجد تآكل في الحديد أو صدأ واضح؟",
      en: "Is there corrosion or rust on reinforcement?"
    },
    type: "select",
    options: [
      { value: "no", label: { ar: "لا", en: "No" }, score: 0 },
      { value: "yes", label: { ar: "نعم", en: "Yes" }, score: 2 }
    ],
    explanation: {
      ar: "الصدأ يقلل قدرة الحديد على التحمل ويضعف الالتصاق مع الخرسانة.",
      en: "Corrosion reduces reinforcement strength and bond with concrete."
    }
  },
  {
    id: 7,
    title: {
      ar: "هل يوجد تجاويف أو تساقط في الخرسانة (Spalling)؟",
      en: "Is there concrete spalling or delamination?"
    },
    type: "select",
    options: [
      { value: "no", label: { ar: "لا", en: "No" }, score: 0 },
      { value: "yes", label: { ar: "نعم", en: "Yes" }, score: 2 }
    ],
    explanation: {
      ar: "تساقط الخرسانة قد يعني ضعف الغطاء الخرساني وتدهور مقاومة القص.",
      en: "Spalling indicates cover loss and reduced shear capacity."
    }
  },
  {
    id: 8,
    title: {
      ar: "هل يوجد انحراف واضح في الجدران أو الأعمدة؟",
      en: "Is there noticeable leaning of walls/columns?"
    },
    type: "select",
    options: [
      { value: "no", label: { ar: "لا", en: "No" }, score: 0 },
      { value: "yes", label: { ar: "نعم", en: "Yes" }, score: 3 }
    ],
    explanation: {
      ar: "الانحراف قد يشير لتدهور في العناصر الحاملة أو هبوط في الأساسات.",
      en: "Leaning may indicate structural failure or foundation settlement."
    }
  },
  {
    id: 9,
    title: {
      ar: "هل يوجد جدران حاملة غير مكتملة أو تم تعديلها؟",
      en: "Are there modified or removed load-bearing walls?"
    },
    type: "select",
    options: [
      { value: "no", label: { ar: "لا", en: "No" }, score: 0 },
      { value: "yes", label: { ar: "نعم", en: "Yes" }, score: 2 }
    ],
    explanation: {
      ar: "تعديل الجدران الحاملة يغير توزيع الأحمال وقد يسبب فشل إنشائي.",
      en: "Modifying load-bearing walls changes load paths and may cause failure."
    }
  },
  {
    id: 10,
    title: {
      ar: "هل يوجد شدة (Diaphragm) غير مكتملة أو تسريبات في السقف؟",
      en: "Is the roof diaphragm incomplete or leaking?"
    },
    type: "select",
    options: [
      { value: "no", label: { ar: "لا", en: "No" }, score: 0 },
      { value: "yes", label: { ar: "نعم", en: "Yes" }, score: 1 }
    ],
    explanation: {
      ar: "الديابغرام ينقل القوى الزلزالية إلى العناصر الرأسية، وأي ضعف فيه يزيد المخاطر.",
      en: "Diaphragm transfers seismic forces; weakness increases risk."
    }
  },
  {
    id: 11,
    title: {
      ar: "هل يوجد ارتفاعات غير متساوية بين الطوابق (مثل سقف مرتفع في طابق واحد)؟",
      en: "Are floor heights irregular?"
    },
    type: "select",
    options: [
      { value: "no", label: { ar: "لا", en: "No" }, score: 0 },
      { value: "yes", label: { ar: "نعم", en: "Yes" }, score: 1 }
    ],
    explanation: {
      ar: "عدم انتظام الارتفاعات يزيد لحظات القص ويؤثر على توزيع القوى.",
      en: "Irregular heights increase shear moments and force distribution issues."
    }
  },
  {
    id: 12,
    title: {
      ar: "هل المبنى يحتوي على أعمدة أو جدران قصيرة (Short Columns)؟",
      en: "Are there short columns?"
    },
    type: "select",
    options: [
      { value: "no", label: { ar: "لا", en: "No" }, score: 0 },
      { value: "yes", label: { ar: "نعم", en: "Yes" }, score: 2 }
    ],
    explanation: {
      ar: "الأعمدة القصيرة تتعرض لقص أكبر في الزلازل وقد تفشل بشكل مفاجئ.",
      en: "Short columns experience higher shear in earthquakes and may fail suddenly."
    }
  },
  {
    id: 13,
    title: {
      ar: "هل يوجد تقوس أو تشوه في الكمرات؟",
      en: "Is there beam sagging or deformation?"
    },
    type: "select",
    options: [
      { value: "no", label: { ar: "لا", en: "No" }, score: 0 },
      { value: "yes", label: { ar: "نعم", en: "Yes" }, score: 2 }
    ],
    explanation: {
      ar: "تشوه الكمرات قد يدل على إجهاد زائد أو ضعف في التسليح.",
      en: "Beam deformation indicates overload or insufficient reinforcement."
    }
  },
  {
    id: 14,
    title: {
      ar: "هل يوجد تسرب مائي أو رطوبة قوية في الأساسات أو الجدران؟",
      en: "Is there severe water leakage or moisture?"
    },
    type: "select",
    options: [
      { value: "no", label: { ar: "لا", en: "No" }, score: 0 },
      { value: "yes", label: { ar: "نعم", en: "Yes" }, score: 1 }
    ],
    explanation: {
      ar: "الرطوبة تؤدي لتدهور الخرسانة والحديد وتقليل مقاومتها.",
      en: "Moisture deteriorates concrete and reinforcement strength."
    }
  },
  {
    id: 15,
    title: {
      ar: "هل يوجد طابق إضافي غير مرخص أو إضافة علوية؟",
      en: "Is there an unlicensed additional floor?"
    },
    type: "select",
    options: [
      { value: "no", label: { ar: "لا", en: "No" }, score: 0 },
      { value: "yes", label: { ar: "نعم", en: "Yes" }, score: 2 }
    ],
    explanation: {
      ar: "الإضافات تزيد الأحمال على الأعمدة والأساسات دون تصميم مناسب.",
      en: "Additions increase loads without proper structural design."
    }
  },
  {
    id: 16,
    title: {
      ar: "هل يوجد اهتزاز أو صوت غير طبيعي أثناء مرور السيارات أو الرياح؟",
      en: "Is there unusual vibration/noise during wind/traffic?"
    },
    type: "select",
    options: [
      { value: "no", label: { ar: "لا", en: "No" }, score: 0 },
      { value: "yes", label: { ar: "نعم", en: "Yes" }, score: 1 }
    ],
    explanation: {
      ar: "الاهتزاز قد يشير لضعف في الاتصالات بين العناصر أو ضعف في القواعد.",
      en: "Vibration may indicate weak connections or foundation issues."
    }
  },
  {
    id: 17,
    title: {
      ar: "هل تم تعديل فتحات كبيرة في الجدران الحاملة؟",
      en: "Were large openings made in load-bearing walls?"
    },
    type: "select",
    options: [
      { value: "no", label: { ar: "لا", en: "No" }, score: 0 },
      { value: "yes", label: { ar: "نعم", en: "Yes" }, score: 2 }
    ],
    explanation: {
      ar: "الفتحات الكبيرة تقلل من قدرة الجدران على تحمل القوى الجانبية.",
      en: "Large openings reduce lateral load capacity."
    }
  },
  {
    id: 18,
    title: {
      ar: "هل يوجد خرسانة ضعيفة أو تساقط في الجدران؟",
      en: "Is there weak concrete or wall spalling?"
    },
    type: "select",
    options: [
      { value: "no", label: { ar: "لا", en: "No" }, score: 0 },
      { value: "yes", label: { ar: "نعم", en: "Yes" }, score: 2 }
    ],
    explanation: {
      ar: "الخرسانة الضعيفة تقلل من مقاومة الانضغاط والقص.",
      en: "Weak concrete reduces compression and shear resistance."
    }
  },
  {
    id: 19,
    title: {
      ar: "هل يوجد أي أعمال بناء جديدة مجاورة تؤثر على الأساسات؟",
      en: "Is there new adjacent construction affecting foundations?"
    },
    type: "select",
    options: [
      { value: "no", label: { ar: "لا", en: "No" }, score: 0 },
      { value: "yes", label: { ar: "نعم", en: "Yes" }, score: 1 }
    ],
    explanation: {
      ar: "الأعمال المجاورة قد تسبب هزات أو هبوط في التربة.",
      en: "Adjacent construction may cause vibrations or soil settlement."
    }
  },
  {
    id: 20,
    title: {
      ar: "هل يوجد نظام إنشائي غير موثق أو بدون مخططات؟",
      en: "Is the structural system undocumented or without drawings?"
    },
    type: "select",
    options: [
      { value: "no", label: { ar: "لا", en: "No" }, score: 0 },
      { value: "yes", label: { ar: "نعم", en: "Yes" }, score: 1 }
    ],
    explanation: {
      ar: "غياب المخططات يزيد من صعوبة تقييم السلامة بشكل دقيق.",
      en: "Lack of drawings makes safety assessment difficult."
    }
  },
  {
    id: 21,
    title: {
      ar: "هل يوجد سحب في الأسقف أو كمرات غير مستوية؟",
      en: "Are there sagging slabs or uneven beams?"
    },
    type: "select",
    options: [
      { value: "no", label: { ar: "لا", en: "No" }, score: 0 },
      { value: "yes", label: { ar: "نعم", en: "Yes" }, score: 2 }
    ],
    explanation: {
      ar: "الانحناء قد يدل على تحميل زائد أو ضعف في التسليح.",
      en: "Sagging indicates overload or insufficient reinforcement."
    }
  },
  {
    id: 22,
    title: {
      ar: "هل يوجد تشققات رأسية في الأعمدة (Diagonal cracks)؟",
      en: "Are there diagonal cracks in columns?"
    },
    type: "select",
    options: [
      { value: "no", label: { ar: "لا", en: "No" }, score: 0 },
      { value: "yes", label: { ar: "نعم", en: "Yes" }, score: 3 }
    ],
    explanation: {
      ar: "التشققات القطرية قد تشير لقص شديد أو فشل إنشائي.",
      en: "Diagonal cracks may indicate shear failure or severe stress."
    }
  },
  {
    id: 23,
    title: {
      ar: "هل يوجد تباين كبير في ارتفاعات الأعمدة (مثل عمود أقصر بكثير)؟",
      en: "Are there large variations in column heights?"
    },
    type: "select",
    options: [
      { value: "no", label: { ar: "لا", en: "No" }, score: 0 },
      { value: "yes", label: { ar: "نعم", en: "Yes" }, score: 2 }
    ],
    explanation: {
      ar: "التباين في الارتفاعات يسبب تركيز قص في الأعمدة القصيرة.",
      en: "Height variation causes shear concentration in short columns."
    }
  },
  {
    id: 24,
    title: {
      ar: "هل يوجد شدة حديد ضعيفة أو هوك غير كافٍ حول الأعمدة؟",
      en: "Is stirrup/hoop reinforcement insufficient?"
    },
    type: "select",
    options: [
      { value: "no", label: { ar: "لا", en: "No" }, score: 0 },
      { value: "yes", label: { ar: "نعم", en: "Yes" }, score: 2 }
    ],
    explanation: {
      ar: "الشدات غير الكافية تزيد خطر فشل القص في الأعمدة (ACI 318).",
      en: "Insufficient stirrups increase shear failure risk (ACI 318)."
    }
  },
  {
    id: 25,
    title: {
      ar: "هل تم تنفيذ المبنى بدون إشراف هندسي أو بدون ختم/مراجعة؟",
      en: "Was the building constructed without engineering supervision?"
    },
    type: "select",
    options: [
      { value: "no", label: { ar: "لا", en: "No" }, score: 0 },
      { value: "yes", label: { ar: "نعم", en: "Yes" }, score: 2 }
    ],
    explanation: {
      ar: "الإنشاء بدون إشراف يزيد احتمال وجود أخطاء تنفيذية كبيرة.",
      en: "Construction without supervision increases risk of major execution errors."
    }
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
    if (total <= 4) {
      status = "green";
      message = lang === "ar" ? "🟢 آمن حاليًا" : "🟢 Safe for now";
      recommendations = lang === "ar"
        ? "المبنى يبدو آمنًا بناءً على الإجابات الحالية. راقب أي شقوق جديدة وراجع مهندس إذا حصلت تغييرات."
        : "Building seems safe based on current answers. Monitor for new cracks and consult an engineer if changes occur.";
    } else if (total <= 10) {
      status = "yellow";
      message = lang === "ar" ? "🟡 يحتاج مراجعة هندسية" : "🟡 Needs engineering review";
      recommendations = lang === "ar"
        ? "يوجد مؤشرات قد تستدعي فحصًا هندسيًا. راجع مكتب هندسي للتقييم الميداني."
        : "There are indicators that require an engineering field inspection.";
    } else {
      status = "red";
      message = lang === "ar" ? "🔴 خطر مرتفع" : "🔴 High risk";
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

  return React.createElement(
    "div",
    { className: "container" },
    React.createElement(
      "header",
      { className: "header" },
      React.createElement("h1", null, lang === "ar" ? "أداة تقييم السلامة الإنشائية" : "Structural Safety Assessment Tool"),
      React.createElement(
        "p",
        null,
        lang === "ar"
          ? "تقييم أولي للسلامة الإنشائية للمباني في الأردن. لا يغني عن فحص موقعي."
          : "Preliminary assessment for building safety in Jordan. Not a substitute for field inspection."
      )
    ),

    React.createElement(
      "div",
      { className: "card" },
      React.createElement(
        "div",
        { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } },
        React.createElement("h2", null, lang === "ar" ? "الأسئلة" : "Questions"),
        React.createElement(
          "select",
          { value: lang, onChange: (e) => setLang(e.target.value) },
          React.createElement("option", { value: "ar" }, "العربية"),
          React.createElement("option", { value: "en" }, "English")
        )
      ),

      questions.map((q) =>
        React.createElement(
          "div",
          { className: "question", key: q.id },
          React.createElement("label", null, lang === "ar" ? q.title.ar : q.title.en),
          React.createElement(
            "select",
            { value: answers[q.id] || "", onChange: (e) => setAnswer(q.id, e.target.value) },
            React.createElement("option", { value: "" }, lang === "ar" ? "اختر" : "Select"),
            q.options.map((o) =>
              React.createElement("option", { key: o.value, value: o.value }, lang === "ar" ? o.label.ar : o.label.en)
            )
          ),
          React.createElement("small", null, lang === "ar" ? q.explanation.ar : q.explanation.en)
        )
      ),

      React.createElement(
        "button",
        { className: "btn btn-primary", onClick: calculate },
        lang === "ar" ? "احسب" : "Calculate"
      ),
      React.createElement(
        "button",
        { className: "btn btn-secondary", onClick: reset },
        lang === "ar" ? "إعادة" : "Reset"
      ),

      result &&
        React.createElement(
          "div",
          { className: `result ${result.status}` },
          React.createElement("h3", null, result.message),
          React.createElement("p", null, lang === "ar" ? `المجموع: ${result.total}` : `Score: ${result.total}`),
          React.createElement("p", null, result.recommendations)
        )
    ),

    React.createElement(
      "footer",
      { className: "footer" },
      lang === "ar"
        ? "Developed by Eng. [اسمك] — أداة تقييم أولي فقط."
        : "Developed by Eng. [Your Name] — Preliminary assessment tool only."
    )
  );
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
