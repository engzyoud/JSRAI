import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuestionCard from "../components/QuestionCard";
import ProgressBar from "../components/ProgressBar";
import { useTranslation } from "react-i18next";

const questions = [
  {
    title: "عمر المبنى",
    desc: "كم عمر المبنى تقريبًا؟",
    basis: "المباني القديمة قد لا تتوافق مع معايير الزلازل الحديثة (ASCE 7).",
    options: [
      { label: "أقل من 10 سنوات", note: "أحدث معايير" },
      { label: "10-30 سنة", note: "مقبول لكن يحتاج مراجعة" },
      { label: "أكثر من 30 سنة", note: "احتمال ضعف في المقاومة" }
    ]
  },
  {
    title: "نوع النظام الإنشائي",
    desc: "ما هو نظام المبنى؟ (خرسانة/حديد/أعمدة+حوائط)؟",
    basis: "ACI 318 يحدد متطلبات لكل نظام إنشائي.",
    options: [
      { label: "نظام أعمدة وجسور (Moment Frames)", note: "أفضل في الزلازل" },
      { label: "نظام قص/حوائط مقاومة", note: "مقبول إذا كان منتظم" },
      { label: "نظام غير منتظم أو غير موثّق", note: "زيادة خطر" }
    ]
  },
  {
    title: "انتظام المبنى في الخطة",
    desc: "هل المبنى منتظم في الخطة (بدون انحرافات كبيرة)؟",
    basis: "الانتظام يقلل من تركز القوى الزلزالية (ASCE 7).",
    options: [
      { label: "منتظم جدًا", note: "مناسب" },
      { label: "انتظام متوسط", note: "يتطلب مراجعة" },
      { label: "غير منتظم/عناصر بارزة", note: "خطر أعلى" }
    ]
  },
  {
    title: "انتظام المبنى في الارتفاع",
    desc: "هل هناك اختلاف كبير في ارتفاع الأدوار؟",
    basis: "التغيرات الكبيرة تسبب تركيز قص وعزوم (ASCE 7).",
    options: [
      { label: "متساوي تقريبًا", note: "مستقر" },
      { label: "فرق متوسط", note: "يتطلب مراقبة" },
      { label: "فرق كبير/سلالم/فتحات", note: "خطر" }
    ]
  },
  {
    title: "وجود خرسانة متشققة",
    desc: "هل توجد شقوق أفقية أو رأسية في الأعمدة أو الجدران؟",
    basis: "الشروخ قد تشير لتدهور مقاومة القص والانضغاط (ACI 318).",
    options: [
      { label: "لا توجد شقوق", note: "جيد" },
      { label: "شقوق سطحية بسيطة", note: "مراقبة" },
      { label: "شقوق كبيرة أو متزايدة", note: "مراجعة فورية" }
    ]
  },
  {
    title: "حالة التسليح",
    desc: "هل يوجد صدأ واضح في الحديد أو تسليح مكشوف؟",
    basis: "الصدأ يقلل المقطع الفعال ويزيد التآكل (ACI 318).",
    options: [
      { label: "لا يوجد", note: "جيد" },
      { label: "بعض الصدأ السطحي", note: "مراقبة" },
      { label: "صدأ واضح/تسليح مكشوف", note: "خطر" }
    ]
  },
  {
    title: "وجود مياه/تسربات",
    desc: "هل يوجد تسربات مياه في السقف أو الأعمدة؟",
    basis: "المياه تسبب تدهور الخرسانة والحديد (ACI 318).",
    options: [
      { label: "لا يوجد", note: "جيد" },
      { label: "تسرب بسيط", note: "مراقبة" },
      { label: "تسرب واضح ومستمر", note: "خطر" }
    ]
  },
  {
    title: "حالة القواعد والأساسات",
    desc: "هل توجد هبوط أو شروخ في الأساسات؟",
    basis: "أساسات غير مستقرة تؤدي لفشل عام (ASCE 7).",
    options: [
      { label: "لا توجد مشاكل", note: "جيد" },
      { label: "هبوط بسيط", note: "مراجعة" },
      { label: "هبوط واضح/شقوق كبيرة", note: "خطر" }
    ]
  },
  {
    title: "وجود صبغ/تكسير في البلاطات",
    desc: "هل توجد شقوق أو تكسير في البلاطات؟",
    basis: "شقوق البلاطات قد تشير لتحميل زائد أو ضعف تسليح (ACI 318).",
    options: [
      { label: "لا يوجد", note: "جيد" },
      { label: "شقوق بسيطة", note: "مراقبة" },
      { label: "شقوق كبيرة أو متزايدة", note: "مراجعة" }
    ]
  },
  {
    title: "وجود فتحات كبيرة في الجدران الحاملة",
    desc: "هل توجد فتحات كبيرة في الجدران الحاملة (مثل أبواب/نوافذ)؟",
    basis: "الفتحات تقلل قدرة الجدار على مقاومة القص (ASCE 7).",
    options: [
      { label: "لا توجد", note: "جيد" },
      { label: "فتحات متوسطة", note: "مراجعة" },
      { label: "فتحات كبيرة أو كثيرة", note: "خطر" }
    ]
  },
  {
    title: "وجود Drop Panel أو كمرات سميكة",
    desc: "هل يوجد Drop Panel أو كمرات سميكة حول الأعمدة؟",
    basis: "Drop Panels تزيد مقاومة القص في البلاطات (ACI 318).",
    options: [
      { label: "نعم ومصممة بشكل صحيح", note: "جيد" },
      { label: "نعم لكن غير واضحة التفاصيل", note: "مراجعة" },
      { label: "لا يوجد أو غير مناسبة", note: "مخاطر قص" }
    ]
  },
  {
    title: "وجود أعمدة غير منتظمة الشكل",
    desc: "هل توجد أعمدة ذات مقاطع غير منتظمة أو رفيعة جدًا؟",
    basis: "الأعمدة الرفيعة أو غير المنتظمة تزيد خطر الانهيار (ACI 318).",
    options: [
      { label: "لا", note: "جيد" },
      { label: "بعض الأعمدة", note: "مراجعة" },
      { label: "كثير/غير مناسبة", note: "خطر" }
    ]
  },
  {
    title: "وجود جدران قص غير متصلة",
    desc: "هل الجدران القص غير متصلة بشكل صحيح بالأعمدة؟",
    basis: "الاتصال الجيد يقلل انزلاق الجدران في الزلازل (ASCE 7).",
    options: [
      { label: "متصلة جيدًا", note: "جيد" },
      { label: "اتصال متوسط", note: "مراجعة" },
      { label: "غير متصلة/ضعيفة", note: "خطر" }
    ]
  },
  {
    title: "الارتفاع النسبي للأدوار",
    desc: "هل يوجد دور أرضي مرتفع جدًا أو منخفض جدًا مقارنة بالأدوار الأخرى؟",
    basis: "الأدوار غير المتساوية تسبب تركز قص وعزوم (ASCE 7).",
    options: [
      { label: "متساوية تقريبًا", note: "جيد" },
      { label: "فرق متوسط", note: "مراجعة" },
      { label: "فرق كبير", note: "خطر" }
    ]
  },
  {
    title: "وجود أعمدة أو جدران ناقصة (Soft Story)",
    desc: "هل يوجد دور أرضي بدون جدران/أعمدة كافية؟",
    basis: "Soft Story يزيد خطر الانهيار في الزلازل (ASCE 7).",
    options: [
      { label: "لا", note: "جيد" },
      { label: "جزئي", note: "مراجعة" },
      { label: "نعم واضح", note: "خطر" }
    ]
  },
  {
    title: "الزلازل السابقة وتأثيرها",
    desc: "هل تعرض المبنى لزلزال سابق وتسبب بأضرار؟",
    basis: "الزلزال يضعف العناصر ويزيد خطر التدهور (ACI 318).",
    options: [
      { label: "لا", note: "جيد" },
      { label: "أضرار بسيطة", note: "مراجعة" },
      { label: "أضرار واضحة", note: "خطر" }
    ]
  },
  {
    title: "حالة الجسور/الإنحناءات في البلاطات",
    desc: "هل يوجد انحناء واضح في البلاطات؟",
    basis: "انحناء البلاطات قد يدل على تحميل زائد أو ضعف تسليح (ACI 318).",
    options: [
      { label: "لا", note: "جيد" },
      { label: "انحناء بسيط", note: "مراقبة" },
      { label: "انحناء واضح", note: "مراجعة" }
    ]
  },
  {
    title: "حالة الكمرات (Beams)",
    desc: "هل توجد شقوق أو تهدلات في الكمرات؟",
    basis: "الكمرات هي عنصر رئيسي لمقاومة العزوم والقص (ACI 318).",
    options: [
      { label: "لا", note: "جيد" },
      { label: "شقوق سطحية", note: "مراجعة" },
      { label: "شقوق كبيرة/تدهور", note: "خطر" }
    ]
  },
  {
    title: "وجود تمديدات أو ثقوب في الكمرات",
    desc: "هل تم عمل ثقوب أو تمديدات في الكمرات؟",
    basis: "الثقوب تقلل المقطع وتزيد خطر القص (ACI 318).",
    options: [
      { label: "لا", note: "جيد" },
      { label: "ثقوب صغيرة", note: "مراجعة" },
      { label: "ثقوب كبيرة/متعددة", note: "خطر" }
    ]
  },
  {
    title: "حالة الجدران الحاملة",
    desc: "هل الجدران الحاملة متشققة أو مائلة؟",
    basis: "الجدران الحاملة مسؤولة عن نقل الأحمال الرأسية والقص (ASCE 7).",
    options: [
      { label: "لا", note: "جيد" },
      { label: "شقوق بسيطة", note: "مراجعة" },
      { label: "شقوق كبيرة/ميل", note: "خطر" }
    ]
  },
  {
    title: "وجود إضافات على المبنى",
    desc: "هل تم إضافة طوابق أو تغييرات كبيرة بعد البناء؟",
    basis: "الإضافات تزيد الأحمال وتغير توزيع القوى (ACI 318).",
    options: [
      { label: "لا", note: "جيد" },
      { label: "إضافة بسيطة", note: "مراجعة" },
      { label: "إضافة كبيرة", note: "خطر" }
    ]
  },
  {
    title: "التحميل الزائد على الأسطح",
    desc: "هل يوجد تحميل ثقيل على السطح (خزانات/معدات)؟",
    basis: "التحميل الزائد يزيد العزوم والقوى على العناصر (ACI 318).",
    options: [
      { label: "لا", note: "جيد" },
      { label: "تحميل متوسط", note: "مراجعة" },
      { label: "تحميل كبير", note: "خطر" }
    ]
  },
  {
    title: "التحكم في القص (Shear) في الأعمدة",
    desc: "هل الأعمدة تبدو قوية في القص (بدون شقوق قطرية)؟",
    basis: "قص الأعمدة من أهم أسباب الانهيار في الزلازل (ACI 318).",
    options: [
      { label: "نعم", note: "جيد" },
      { label: "بعض الشقوق", note: "مراجعة" },
      { label: "شقوق قطرية واضحة", note: "خطر" }
    ]
  },
  {
    title: "وجود دعامات/زوايا دعم إضافية",
    desc: "هل يوجد دعامات أو تدعيمات إضافية؟",
    basis: "التدعيم يقلل خطر الانهيار ويزيد الصلابة (ACI 318).",
    options: [
      { label: "نعم بشكل مناسب", note: "جيد" },
      { label: "جزئي", note: "مراجعة" },
      { label: "لا", note: "لا يوجد تدعيم" }
    ]
  },
  {
    title: "حالة العزل والخرسانة السطحية",
    desc: "هل الخرسانة السطحية متساقطة أو متآكلة؟",
    basis: "تآكل الخرسانة يقلل المقطع الفعال ويزيد الخطر (ACI 318).",
    options: [
      { label: "لا", note: "جيد" },
      { label: "تآكل بسيط", note: "مراجعة" },
      { label: "تآكل واضح", note: "خطر" }
    ]
  },
  {
    title: "وجود اهتزازات أو صرير في المبنى",
    desc: "هل تشعر باهتزازات أو أصوات غير طبيعية؟",
    basis: "الاهتزازات قد تشير لضعف في العناصر أو مشاكل ديناميكية (ASCE 7).",
    options: [
      { label: "لا", note: "جيد" },
      { label: "أحيانًا", note: "مراجعة" },
      { label: "نعم بشكل واضح", note: "خطر" }
    ]
  },
  {
    title: "وجود أعمدة غير مكتملة أو تعديل في التسليح",
    desc: "هل تم تعديل التسليح أو ترك أعمدة غير مكتملة؟",
    basis: "التعديل غير الصحيح يقلل مقاومة الأعمدة (ACI 318).",
    options: [
      { label: "لا", note: "جيد" },
      { label: "تعديل بسيط", note: "مراجعة" },
      { label: "تعديل كبير/غير مناسب", note: "خطر" }
    ]
  }
];

export default function Assessment() {
  const { t } = useTranslation();
  const nav = useNavigate();
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [current, setCurrent] = useState(0);

  const handleChange = (index, value) => {
    const newAns = [...answers];
    newAns[index] = value;
    setAnswers(newAns);
  };

  const totalPoints = answers.reduce((sum, val) => sum + (val ?? 0), 0);
  const maxPoints = questions.length * 2;

  const handleNext = () => {
    if (current < questions.length - 1) setCurrent(current + 1);
  };

  const handlePrev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const handleSubmit = () => {
    if (answers.some((a) => a === null)) {
      alert("يرجى الإجابة على جميع الأسئلة قبل المتابعة.");
      return;
    }
    localStorage.setItem("jsrai_result", JSON.stringify({ totalPoints, maxPoints, answers }));
    nav("/result");
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="rounded-3xl border border-white/10 p-6 bg-white/5">
        <h2 className="text-3xl font-bold mb-2">{t("assessmentTitle")}</h2>
        <p className="opacity-80 mb-4">{t("assessmentSubtitle")}</p>

        <ProgressBar value={totalPoints} max={maxPoints} />

        <div className="mt-4">
          <QuestionCard
            q={questions[current]}
            index={current}
            value={answers[current]}
            onChange={handleChange}
          />
        </div>

        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            disabled={current === 0}
            className="px-4 py-2 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 transition disabled:opacity-50"
          >
            {t("prevBtn")}
          </button>
          {current < questions.length - 1 ? (
            <button
              onClick={handleNext}
              className="px-4 py-2 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 transition"
            >
              {t("nextBtn")}
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-4 py-2 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 transition"
            >
              {t("submitBtn")}
            </button>
          )}
        </div>
      </div>
    </div>
  );
       }
