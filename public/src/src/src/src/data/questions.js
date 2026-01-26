export const questions = [
  {
    id: "q1",
    type: "single",
    weight: 2,
    title: {
      en: "Building age",
      ar: "عمر المبنى"
    },
    text: {
      en: "Is the building older than 30 years?",
      ar: "هل عمر المبنى أكثر من 30 سنة؟"
    },
    basis: {
      en: "Older buildings may have outdated design codes and material degradation, increasing risk.",
      ar: "المباني القديمة قد تكون مصممة وفق معايير قديمة وتعرضت لتآكل المواد، مما يزيد المخاطر."
    },
    options: [
      { value: 0, label: { en: "No", ar: "لا" }, explanation: { en: "Recent design and materials reduce risk.", ar: "التصميم والمواد الحديثة تقلل المخاطر." } },
      { value: 2, label: { en: "Yes", ar: "نعم" }, explanation: { en: "Higher risk due to age and code differences.", ar: "خطر أعلى بسبب العمر واختلاف الكود." } }
    ]
  },
  {
    id: "q2",
    type: "single",
    weight: 3,
    title: { en: "Structural system", ar: "النظام الإنشائي" },
    text: { en: "Is the building a soft-story (open ground floor) or irregular structure?", ar: "هل المبنى له دور أرضي مفتوح أو نظام غير منتظم؟" },
    basis: {
      en: "Irregular or soft-story buildings are more vulnerable to seismic forces (ASCE 7).",
      ar: "المباني غير المنتظمة أو ذات الطابق الأرضي المفتوح أكثر عرضة للقوى الزلزالية (ASCE 7)."
    },
    options: [
      { value: 0, label: { en: "Regular system", ar: "نظام منتظم" }, explanation: { en: "Better load distribution and seismic response.", ar: "توزيع أحمال أفضل واستجابة زلزالية أفضل." } },
      { value: 3, label: { en: "Irregular / soft-story", ar: "غير منتظم / أرضي مفتوح" }, explanation: { en: "Higher vulnerability to seismic damage.", ar: "عرضة أكبر للضرر الزلزالي." } }
    ]
  },
  {
    id: "q3",
    type: "single",
    weight: 2,
    title: { en: "Visible cracks", ar: "شقوق واضحة" },
    text: { en: "Are there major cracks on columns, beams, or walls?", ar: "هل توجد شقوق كبيرة في الأعمدة أو الكمرات أو الجدران؟" },
    basis: {
      en: "Major cracks indicate structural distress and possible strength reduction.",
      ar: "الشقق الكبيرة تشير إلى إجهاد إنشائي وقدرة تحمل منخفضة."
    },
    options: [
      { value: 0, label: { en: "No", ar: "لا" }, explanation: { en: "No visible structural distress.", ar: "لا يوجد إجهاد إنشائي ظاهر." } },
      { value: 2, label: { en: "Yes", ar: "نعم" }, explanation: { en: "Potential structural damage; needs engineering review.", ar: "احتمال ضرر إنشائي؛ يحتاج مراجعة هندسية." } }
    ]
  },
  {
    id: "q4",
    type: "single",
    weight: 2,
    title: { en: "Deterioration signs", ar: "علامات تدهور" },
    text: { en: "Is there corrosion, exposed rebar, or concrete spalling?", ar: "هل يوجد تآكل أو ظهور حديد أو تساقط خرسانة؟" },
    basis: {
      en: "Deterioration reduces capacity and increases vulnerability (ACI 318).",
      ar: "التدهور يقلل القدرة ويزيد الضعف (ACI 318)."
    },
    options: [
      { value: 0, label: { en: "No", ar: "لا" }, explanation: { en: "No signs of deterioration.", ar: "لا توجد علامات تدهور." } },
      { value: 2, label: { en: "Yes", ar: "نعم" }, explanation: { en: "Reduced structural capacity; risk increases.", ar: "قدرة إنشائية منخفضة؛ يزيد الخطر." } }
    ]
  },
  {
    id: "q5",
    type: "single",
    weight: 2,
    title: { en: "Recent renovations", ar: "تعديلات حديثة" },
    text: { en: "Were there major structural modifications without engineering oversight?", ar: "هل تمت تعديلات إنشائية كبيرة بدون إشراف هندسي؟" },
    basis: {
      en: "Unsupervised modifications can alter load paths and reduce safety.",
      ar: "التعديلات بدون إشراف قد تغير مسارات الأحمال وتقلل السلامة."
    },
    options: [
      { value: 0, label: { en: "No", ar: "لا" }, explanation: { en: "Original design remains intact.", ar: "التصميم الأصلي سليم." } },
      { value: 2, label: { en: "Yes", ar: "نعم" }, explanation: { en: "Potential risk due to altered load distribution.", ar: "خطر محتمل بسبب تغيير توزيع الأحمال." } }
    ]
  }
];
