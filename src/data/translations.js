export const translations = {
  ar: {
    appName: 'JSRAI — Structural Rapid Inspection Tool',
    bismillah: 'بسم الله الرحمن الرحيم',

    nav: {
      home: 'الرئيسية',
      how: 'كيف يعمل الفحص',
      method: 'المنهجية',
      assessment: 'ابدأ الفحص',
      about: 'عن الأداة',
    },

    hero: {
      title: 'فحص إنشائي مبدئي سريع للمباني',
      subtitle:
        'أداة فحص أولي تعتمد على مؤشرات هندسية ظاهرة تساعد في تقدير مستوى الخطورة الإنشائية ونمط الفشل المحتمل.',
      start: 'ابدأ الفحص',
    },

    how: {
      title: 'كيف يعمل الفحص؟',
      p1: 'هذا فحص إنشائي مبدئي يعتمد على الملاحظة والتحقق من مؤشرات ضعف ظاهرة.',
      p2: 'الأسئلة مبنية على أنماط فشل معروفة في العناصر الخرسانية.',
      p3: 'النتيجة مؤشر هندسي أولي لدعم قرار الفحص التفصيلي.',

      stepsTitle: 'مراحل الفحص:',
      steps: [
        'فحص بصري للعناصر الإنشائية الرئيسية.',
        'تحديد وجود شقوق أو هبوط أو تشوه.',
        'تقييم مؤشرات القص والثقب والطابق الضعيف.',
        'تقدير نمط الفشل المحتمل.',
        'الحصول على توصيات تدعيم أو متابعة فحص.',
      ],
    },

    methodology: {
      title: 'المنهجية',
      p1: 'يعتمد الفحص على مؤشرات ضعف إنشائي معروفة.',
      p2: 'الأسئلة موزعة حسب مناطق الخطورة.',
      p3: 'النتيجة ليست بديلاً عن فحص هندسي تفصيلي.',

      bullets: [
        'مؤشرات قص وثقب وانحناء.',
        'مؤشرات طابق ضعيف وعدم انتظام.',
        'مؤشرات انهيار متدرج.',
        'تحليل نمط الفشل المتوقع.',
      ],
    },

    assessment: {
      title: 'الفحص الإنشائي',
      intro:
        'أجب بناءً على الملاحظة أو المعرفة المتاحة. الشرح تحت كل سؤال يوضح المقصود.',
      btnNext: 'التالي',
      btnPrev: 'السابق',
      btnSubmit: 'احسب النتيجة',
    },

    result: {
      title: 'نتيجة الفحص المبدئي',
      disclaimer:
        'هذه نتيجة فحص أولي ولا تغني عن فحص مهندس إنشائي أو تحليل تفصيلي.',

      level: 'مستوى الخطورة:',
      score: 'المؤشر:',
      summary: 'الملخص الهندسي:',
      details: 'تفاصيل المؤشرات المؤثرة:',

      recommendationsTitle: 'التوصيات الهندسية الأولية:',

      rec1:
        'في حال وجود مؤشرات قص أو ثقب أو طابق ضعيف — يوصى بفحص إنشائي تفصيلي.',
      rec2:
        'قد يتطلب الأمر تدعيم موضعي للأعمدة أو البلاطات أو مناطق الفتحات.',
      rec3:
        'لا تعتمد على هذه النتيجة وحدها لاتخاذ قرار سلامة نهائي.',

      back: 'العودة للفحص',
      pdf: 'تصدير تقرير PDF',
    },

    about: {
      title: 'عن الأداة',
      p1:
        'أداة فحص إنشائي سريع مبنية على مؤشرات ضعف معروفة في الهندسة الإنشائية.',
      p2:
        'تستخدم كمرحلة أولى قبل الفحص التفصيلي أو الاختبارات الميدانية.',
      developed: 'تم التطوير بواسطة Eng Suhaib Alzyoud',
    },

    footer: {
      rights: '© JSRAI — Structural Rapid Inspection',
      privacy: 'سياسة الخصوصية',
      disclaimer: 'إخلاء المسؤولية',
    },

    privacy: {
      title: 'سياسة الخصوصية',
      p: 'لا يتم حفظ أي بيانات — كل النتائج محلية على جهازك.',
    },

    disclaimer: {
      title: 'إخلاء المسؤولية',
      p: 'هذا فحص مبدئي وليس تقرير سلامة رسمي.',
    },

    languageLabel: 'اللغة',

    yes: 'نعم',
    no: 'لا',
    unsure: 'غير متأكد',

    step: 'السؤال',
    of: 'من',

    scoreLabels: {
      low: 'منخفض',
      mid: 'متوسط',
      high: 'مرتفع',
    },
  },

  en: {
    appName: 'JSRAI — Structural Rapid Inspection Tool',

    // IMPORTANT — do NOT translate
    bismillah: 'بسم الله الرحمن الرحيم',

    nav: {
      home: 'Home',
      how: 'How it works',
      method: 'Methodology',
      assessment: 'Start Inspection',
      about: 'About',
    },

    hero: {
      title: 'Rapid Structural Inspection Tool',
      subtitle:
        'A preliminary structural check based on visible engineering risk indicators.',
      start: 'Start Inspection',
    },

    how: {
      title: 'How inspection works',
      p1: 'This is a preliminary structural check.',
      p2: 'Questions reflect known failure mechanisms.',
      p3: 'Result is an engineering indicator only.',

      stepsTitle: 'Inspection stages:',
      steps: [
        'Visual check of structural elements.',
        'Observe cracks, deflection, distress.',
        'Check shear and punching indicators.',
        'Detect weak story behavior.',
        'Get engineering risk summary.',
      ],
    },

    methodology: {
      title: 'Methodology',
      p1: 'Based on known structural risk patterns.',
      p2: 'Questions grouped by risk zones.',
      p3: 'Not a substitute for full engineering review.',

      bullets: [
        'Shear and punching indicators',
        'Weak story indicators',
        'Irregularity indicators',
        'Failure mode prediction',
      ],
    },

    assessment: {
      title: 'Inspection',
      intro:
        'Answer based on observation or available information.',
      btnNext: 'Next',
      btnPrev: 'Previous',
      btnSubmit: 'Calculate',
    },

    result: {
      title: 'Preliminary Inspection Result',
      disclaimer:
        'Preliminary engineering indicator only.',

      level: 'Risk level:',
      score: 'Index:',
      summary: 'Engineering summary:',
      details: 'Key indicators:',

      recommendationsTitle: 'Preliminary engineering actions:',

      rec1:
        'Detailed structural review recommended if shear/punching indicators exist.',
      rec2:
        'Local strengthening may be required.',
      rec3:
        'Do not rely solely on this tool.',

      back: 'Back',
      pdf: 'Export PDF',
    },

    about: {
      title: 'About',
      p1:
        'Rapid structural inspection tool based on engineering indicators.',
      p2:
        'Used as a first-stage screening.',
      developed: 'Developed by Eng Suhaib Alzyoud',
    },

    footer: {
      rights: '© JSRAI',
      privacy: 'Privacy',
      disclaimer: 'Disclaimer',
    },

    privacy: {
      title: 'Privacy',
      p: 'No data stored.',
    },

    disclaimer: {
      title: 'Disclaimer',
      p: 'Preliminary only.',
    },

    languageLabel: 'Language',

    yes: 'Yes',
    no: 'No',
    unsure: 'Unsure',

    step: 'Step',
    of: 'of',

    scoreLabels: {
      low: 'Low',
      mid: 'Medium',
      high: 'High',
    },
  },
}