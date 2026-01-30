export function computeResult(answers) {
  let score = 0
  let details = []

  for (const [idStr, value] of Object.entries(answers)) {
    const id = Number(idStr)
    const w = questionWeight(id)
    const qLabel = questionLabel(id)

    if (value === 'yes') {
      score += w * 2
      details.push({ id, value, note: qLabel.noteYes })
    } else if (value === 'no') {
      score += w * 0
      details.push({ id, value, note: qLabel.noteNo })
    } else {
      score += w * 1
      details.push({ id, value, note: qLabel.noteUnsure })
    }
  }

  const maxScore = Object.keys(answers).length * 2 * 5
  const pct = maxScore ? Math.round((score / maxScore) * 100) : 0

  const classification = classifyPerformance(pct)
  const recommendations = buildRecommendations(classification.key)

  return {
    score,
    pct,
    ...classification,
    recommendations,
    details,
  }
}

function classifyPerformance(pct) {
  if (pct <= 25) {
    return {
      key: 'good',
      label: 'أداء إنشائي مقبول مبدئيًا',
      color: 'green',
      description:
        'تشير نتائج التقييم المبدئي إلى أن الأداء الإنشائي العام للمنشأ يقع ضمن نطاق مقبول مبدئيًا. ومع ذلك، يُنصح دائمًا بالمراقبة الدورية وإجراء الفحوصات اللازمة ضمن برامج الصيانة الوقائية.'
    }
  }

  if (pct <= 50) {
    return {
      key: 'review',
      label: 'أداء إنشائي يحتاج تقييم تفصيلي',
      color: 'yellow',
      description:
        'تشير النتائج إلى وجود مؤشرات تستدعي إجراء تقييم هندسي تفصيلي للتحقق من مستوى السلامة الإنشائية، وتحديد مدى الحاجة إلى إجراءات تصحيحية أو تدعيمية.'
    }
  }

  if (pct <= 70) {
    return {
      key: 'weak',
      label: 'أداء إنشائي غير كافٍ مبدئيًا',
      color: 'orange',
      description:
        'تشير نتائج التقييم المبدئي إلى وجود عدد من المؤشرات التي قد تؤثر على كفاءة الأداء الإنشائي. يُوصى بإجراء فحص هندسي شامل وتحليل إنشائي تفصيلي لتحديد الإجراءات التصحيحية المناسبة.'
    }
  }

  return {
    key: 'urgent',
    label: 'توصية قوية بإجراء تقييم هندسي عاجل',
    color: 'red',
    description:
      'تشير النتائج إلى وجود مؤشرات تستدعي إجراء تقييم هندسي عاجل يشمل الكشف الموقعي والاختبارات غير الإتلافية والتحليل الإنشائي، بهدف التحقق من مستوى السلامة وتحديد الإجراءات الهندسية المناسبة.'
  }
}

function buildRecommendations(level) {
  const base = [
    'إجراء كشف موقعي بواسطة مهندس إنشائي مختص.',
    'مراجعة المخططات الإنشائية الأصلية (إن وُجدت).',
    'تنفيذ اختبارات غير إتلافية لتقدير مقاومة الخرسانة عند الحاجة.',
    'مراقبة التشققات والتغيرات الإنشائية بشكل دوري.'
  ]

  if (level === 'good') {
    return [
      ...base,
      'الاستمرار ببرنامج صيانة دورية ومتابعة أي تغيّر مستقبلي.'
    ]
  }

  if (level === 'review') {
    return [
      ...base,
      'إجراء تحليل إنشائي تفصيلي في حال تأكيد المؤشرات.'
    ]
  }

  if (level === 'weak') {
    return [
      ...base,
      'إجراء تحليل إنشائي تفصيلي باستخدام نمذجة هندسية متقدمة.',
      'تقييم الحاجة إلى أعمال تقوية أو تدعيم إنشائي.'
    ]
  }

  return [
    ...base,
    'إجراء تقييم هندسي عاجل وشامل.',
    'دراسة خيارات التدعيم الإنشائي المناسبة وفق نتائج التحليل.'
  ]
}

function questionWeight(id) {
  const critical = new Set([1,3,5,7,8,10,11,13,22,26,28,30])
  const high = new Set([2,4,6,9,12,14,15,16,17,18,20,21,23,24,25,27,29])

  if (critical.has(id)) return 5
  if (high.has(id)) return 3
  return 2
}

function questionLabel(id) {
  return {
    noteYes: 'لا توجد مؤشرات سلبية واضحة في هذا الجانب.',
    noteNo: 'قد يشير هذا العامل إلى ضعف محتمل يتطلب تقييمًا هندسيًا.',
    noteUnsure: 'يوصى بالتحقق من هذه النقطة عبر الفحص أو الوثائق الهندسية.'
  }
}
