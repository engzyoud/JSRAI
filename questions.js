const questions = [
  {
    id: 1,
    en: "How many floors does the building have?",
    ar: "كم عدد الطوابق في المبنى؟",
    img: "https://images.unsplash.com/photo-1560185127-6d1c16f4f0c0",
    weight: 2
  },
  {
    id: 2,
    en: "What is the building age?",
    ar: "ما عمر المبنى؟",
    img: "https://images.unsplash.com/photo-1505843416981-1c2a3e8d0b1d",
    weight: 2
  },
  {
    id: 3,
    en: "Concrete quality (visual inspection)?",
    ar: "جودة الخرسانة (فحص بصري)؟",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    weight: 3
  },
  {
    id: 4,
    en: "Visible reinforcement condition?",
    ar: "حالة الحديد الظاهرة؟",
    img: "https://images.unsplash.com/photo-1523301343968-6c8d4a1c7c8a",
    weight: 3
  },
  {
    id: 5,
    en: "Are there cracks in columns or beams?",
    ar: "هل توجد تشققات في الأعمدة أو الكمرات؟",
    img: "https://images.unsplash.com/photo-1562157877-0d4f3b9c2a69",
    weight: 4
  },
  {
    id: 6,
    en: "Any recent settlement or tilting?",
    ar: "هل يوجد هبوط أو ميلان حديث؟",
    img: "https://images.unsplash.com/photo-1483721310020-03333e577078",
    weight: 4
  },
  {
    id: 7,
    en: "Is the building near a fault line or earthquake zone?",
    ar: "هل المبنى قريب من منطقة زلزال/صدع؟",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    weight: 5
  },
  {
    id: 8,
    en: "Are structural drawings available?",
    ar: "هل توجد مخططات إنشائية؟",
    img: "https://images.unsplash.com/photo-1520975928817-1c0b8e6d1e6d",
    weight: 2
  },
  {
    id: 9,
    en: "Is the soil type weak or soft?",
    ar: "هل نوع التربة ضعيف أو طري؟",
    img: "https://images.unsplash.com/photo-1557694729-6f1e3a9c6f5b",
    weight: 5
  },
  {
    id: 10,
    en: "Any water leakage affecting the structure?",
    ar: "هل يوجد تسرب مياه يؤثر على الهيكل؟",
    img: "https://images.unsplash.com/photo-1528045659664-6f2d6a2d4b2b",
    weight: 4
  },
  {
    id: 11,
    en: "Are beams or slabs excessively deflected?",
    ar: "هل توجد انحناءات كبيرة في الكمرات أو البلاطات؟",
    img: "https://images.unsplash.com/photo-1505843416981-1c2a3e8d0b1d",
    weight: 4
  },
  {
    id: 12,
    en: "Is the structural system regular (no soft story)?",
    ar: "هل النظام الإنشائي منتظم (بدون طوابق لينة)؟",
    img: "https://images.unsplash.com/photo-1505843416981-1c2a3e8d0b1d",
    weight: 5
  },
  {
    id: 13,
    en: "Foundation visible damage or cracks?",
    ar: "هل الأساسات متضررة أو متشققة؟",
    img: "https://images.unsplash.com/photo-1534440963412-3d4b5f3a7e5b",
    weight: 5
  },
  {
    id: 14,
    en: "Heavy renovation or added loads?",
    ar: "هل يوجد ترميم ثقيل أو أوزان إضافية؟",
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    weight: 4
  },
  {
    id: 15,
    en: "Corrosion in columns or beams?",
    ar: "هل يوجد تآكل في الأعمدة أو الكمرات؟",
    img: "https://images.unsplash.com/photo-1505843416981-1c2a3e8d0b1d",
    weight: 4
  },
  {
    id: 16,
    en: "Signs of past structural failure?",
    ar: "هل توجد علامات فشل إنشائي سابق؟",
    img: "https://images.unsplash.com/photo-1483721310020-03333e577078",
    weight: 5
  },
  {
    id: 17,
    en: "Building used beyond design purpose?",
    ar: "هل يستخدم المبنى بما يتجاوز الغرض المصمم له؟",
    img: "https://images.unsplash.com/photo-1520975928817-1c0b8e6d1e6d",
    weight: 3
  },
  {
    id: 18,
    en: "Heavy vibrations or noises?",
    ar: "هل توجد اهتزازات أو أصوات قوية؟",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    weight: 3
  },
  {
    id: 19,
    en: "Is the building located in a flood area?",
    ar: "هل المبنى في منطقة فيضانات؟",
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    weight: 4
  },
  {
    id: 20,
    en: "Is there proper maintenance of structural elements?",
    ar: "هل يوجد صيانة دورية للعناصر الإنشائية؟",
    img: "https://images.unsplash.com/photo-1523301343968-6c8d4a1c7c8a",
    weight: 3
  }
];
