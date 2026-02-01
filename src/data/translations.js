export const translations = {

ar: {

appName: 'JSRAI — أداة الفحص الإنشائي المبدئي',

bismillah: 'بسم الله الرحمن الرحيم',

nav: {
  home: 'الرئيسية',
  how: 'كيف تعمل الأداة',
  method: 'المنهجية',
  assessment: 'ابدأ الفحص',
  about: 'عن الأداة',
  privacy: 'الخصوصية',
  disclaimer: 'إخلاء مسؤولية'
},

hero: {
  title: 'فحص إنشائي مبدئي لسلامة المباني',
  subtitle: 'أداة تحليل أولي تعتمد على مؤشرات ميدانية وهندسية لتقدير مستوى الأمان الإنشائي — لا تغني عن الكشف الهندسي.',
  start: 'ابدأ الفحص'
},

how: {
  title: 'كيف تعمل الأداة',
  p1: 'تعتمد الأداة على أسئلة ميدانية يمكن ملاحظتها بدون الرجوع لمخططات.',
  p2: 'التحليل مبني على مبادئ الكود والممارسات الإنشائية.',
  p3: 'الناتج مؤشر هندسي أولي وليس تقرير اعتماد.',
  stepsTitle: 'خطوات الفحص:',
  steps: [
    'إدخال معلومات عامة عن المبنى',
    'الإجابة على أسئلة ميدانية واضحة',
    'تحليل المؤشرات الخطرة',
    'استخراج توصية هندسية مبدئية'
  ]
},

methodology: {
  title: 'المنهجية الهندسية',
  p1: 'التحليل يعتمد على مؤشرات ضعف إنشائي يمكن ملاحظتها بصرياً.',
  p2: 'الأسئلة موزعة على عناصر التحمل الرئيسية.',
  p3: 'كل مؤشر مرتبط بنمط فشل محتمل.',
  bullets: [
    'مؤشرات قص',
    'مؤشرات انحناء',
    'مؤشرات ثقب',
    'مؤشرات طابق ضعيف',
    'مؤشرات انهيار متسلسل'
  ]
},

assessment: {
  title: 'ابدأ الفحص',
  intro: 'أجب على الأسئلة بناءً على الملاحظة المباشرة لحالة المبنى.',
  btnNext: 'التالي',
  btnPrev: 'السابق',
  btnSubmit: 'احسب النتيجة'
},

result: {
  title: 'نتيجة الفحص الإنشائي',
  disclaimer: 'هذا تحليل مبدئي مبني على مؤشرات مرئية — لا يغني عن كشف مهندس إنشائي.',

  summary: 'الملخص الهندسي',
  level: 'مستوى الأمان',
  score: 'مؤشر الخطورة',

  pcvi: 'مؤشر خطورة الانهيار المتسلسل PCVI',
  svi: 'مؤشر الضعف الزلزالي SVI',
  failure: 'نمط الفشل المتوقع',

  details: 'تفاصيل المؤشرات المؤثرة',

  recommendationsTitle: 'التوصيات الهندسية المبدئية',

  safe: 'المبنى ضمن مؤشرات أمان مبدئي — لا تظهر علامات ضعف حرجة',
  monitor: 'المبنى يحتاج مراقبة هندسية دورية',
  strengthen: 'المبنى يحتاج دراسة تدعيم إنشائي',

  print: 'طباعة تقرير PDF',
  back: 'عودة للفحص'
},

about: {
  title: 'عن الأداة',
  p1: 'أداة فحص إنشائي مبدئي مبنية على مؤشرات ميدانية مفهومة.',
  p2: 'تستخدم للمساعدة في اتخاذ قرار أولي قبل الفحص التفصيلي.'
},

privacy: {
  title: 'سياسة الخصوصية',
  p: 'لا يتم حفظ أو إرسال أي بيانات. جميع الإجابات تبقى على جهازك.'
},

disclaimer: {
  title: 'إخلاء مسؤولية',
  p: 'هذه الأداة تقدم تقدير مبدئي فقط ولا تعتبر تقرير هندسي رسمي.'
},

yes: 'نعم',
no: 'لا',
unsure: 'غير متأكد',

step: 'سؤال',
of: 'من',

scoreLabels: {
  low: 'آمن مبدئياً',
  mid: 'يحتاج متابعة',
  high: 'يحتاج تدعيم'
}

},



/* ========================= ENGLISH ========================= */



en: {

appName: 'JSRAI — Preliminary Structural Check Tool',

bismillah: 'بسم الله الرحمن الرحيم',

nav: {
  home: 'Home',
  how: 'How it Works',
  method: 'Methodology',
  assessment: 'Start Check',
  about: 'About',
  privacy: 'Privacy',
  disclaimer: 'Disclaimer'
},

hero: {
  title: 'Preliminary Structural Safety Check',
  subtitle: 'Field-based engineering indicators to estimate structural safety level.',
  start: 'Start Check'
},

how: {
  title: 'How the Tool Works',
  p1: 'Questions are based on visible field indicators.',
  p2: 'Analysis follows engineering practice.',
  p3: 'Result is a preliminary indicator only.',
  stepsTitle: 'Steps:',
  steps: [
    'Enter building info',
    'Answer field questions',
    'Risk indicators analyzed',
    'Preliminary recommendation generated'
  ]
},

methodology: {
  title: 'Engineering Methodology',
  p1: 'Based on observable structural weakness indicators.',
  p2: 'Questions grouped by load-bearing behavior.',
  p3: 'Each indicator maps to a failure mode.',
  bullets: [
    'Shear indicators',
    'Flexure indicators',
    'Punching indicators',
    'Soft story indicators',
    'Progressive collapse indicators'
  ]
},

assessment: {
  title: 'Start Check',
  intro: 'Answer based on direct observation.',
  btnNext: 'Next',
  btnPrev: 'Previous',
  btnSubmit: 'Compute Result'
},

result: {
  title: 'Structural Check Result',
  disclaimer: 'Preliminary indicator — not an engineering certificate.',

  summary: 'Engineering Summary',
  level: 'Safety Level',
  score: 'Risk Index',

  pcvi: 'Progressive Collapse Index',
  svi: 'Seismic Vulnerability Index',
  failure: 'Expected Failure Mode',

  details: 'Key Indicators',

  recommendationsTitle: 'Preliminary Engineering Recommendations',

  safe: 'No critical weakness indicators observed',
  monitor: 'Engineering monitoring recommended',
  strengthen: 'Structural strengthening study recommended',

  print: 'Print PDF',
  back: 'Back'
},

about: {
  title: 'About Tool',
  p1: 'Preliminary structural indicator tool.',
  p2: 'Helps early engineering decision making.'
},

privacy: {
  title: 'Privacy',
  p: 'No data stored or transmitted.'
},

disclaimer: {
  title: 'Disclaimer',
  p: 'Preliminary tool only.'
},

yes: 'Yes',
no: 'No',
unsure: 'Unsure',

step: 'Question',
of: 'of',

scoreLabels: {
  low: 'Preliminarily Safe',
  mid: 'Needs Monitoring',
  high: 'Needs Strengthening'
}

}

}
