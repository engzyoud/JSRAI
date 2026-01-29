export function computeResult(answers) {
  // answers: { [id]: 'yes'|'no'|'unsure' }
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

  const maxScore = Object.keys(answers).length * 2 * 3
  const pct = maxScore ? Math.round((score / maxScore) * 100) : 0

  let level = 'low'
  if (pct >= 65) level = 'high'
  else if (pct >= 35) level = 'mid'

  return { score, pct, level, details }
}

function questionWeight(id) {
  // match weights from questions data
  const high = new Set([5,6,15,16,17,18,19,21,22,28,29,30])
  const med = new Set([1,2,3,4,7,8,9,10,11,12,13,14,20,23,24,25,26,27])
  if (high.has(id)) return 3
  if (med.has(id)) return 2
  return 1
}

function questionLabel(id) {
  // concise notes
  const notes = {
    1: { noteYes: 'تم استخدام كود/معيار: جيد. مع ذلك يجب التحقق من الحسابات.', noteNo: 'عدم استخدام كود يزيد خطر التصميم.', noteUnsure: 'يجب مراجعة هل التصميم مطابق لكود.' },
    2: { noteYes: 'وجود فحوصات يعزز الثقة في الخرسانة.', noteNo: 'عدم وجود فحوصات يعني عدم التأكد من مقاومة الخرسانة.', noteUnsure: 'يفضل إجراء اختبار مقاومة قبل الاستخدام.' },
    3: { noteYes: 'نسبة ماء مناسبة تعطي مقاومة أفضل.', noteNo: 'نسبة ماء عالية تقلل المقاومة.', noteUnsure: 'تحقق من خلطة الخرسانة أو تقرير المختبر.' },
    4: { noteYes: 'تغطية مناسبة تقلل تآكل التسليح.', noteNo: 'تغطية غير كافية تزيد خطر التآكل.', noteUnsure: 'تحقق من قياسات الغطاء في الموقع.' },
    5: { noteYes: 'تدعيم القص موجود: يقلل خطر الانهيار المفاجئ.', noteNo: 'قص غير مدعّم قد يؤدي لانهيار.', noteUnsure: 'راجع تصميم القص عند الأعمدة.' },
    6: { noteYes: 'وجود Drop panel يساعد مقاومة القص.', noteNo: 'غياب Drop panel قد يرفع إجهاد القص.', noteUnsure: 'تحقق من وجود سماكة حول الأعمدة.' },
    7: { noteYes: 'Shear friction محسوب: جيد.', noteNo: 'إهمال shear friction قد يسبب انزلاق.', noteUnsure: 'راجع فواصل البناء ووصلات الكمرات.' },
    8: { noteYes: 'أحمال محسوبة بشكل صحيح.', noteNo: 'تقدير خاطئ للأحمال يضعف التصميم.', noteUnsure: 'راجع توزيع الأحمال وتقديرها.' },
    9: { noteYes: 'تم مراعاة الزلازل: جيد.', noteNo: 'عدم مراعاة الزلازل يزيد المخاطر.', noteUnsure: 'تحقق من كود الزلازل في منطقتك.' },
    10: { noteYes: 'مقطع مناسب: جيد.', noteNo: 'مقطع غير مناسب قد يسبب فشل قص/انحناء.', noteUnsure: 'راجع أبعاد المقطع والتسليح.' },
    11: { noteYes: 'التسليح الحد الأدنى موجود: جيد.', noteNo: 'نقص التسليح يؤدي لتشقق وانهيار مبكر.', noteUnsure: 'تحقق من الحد الأدنى في الكود.' },
    12: { noteYes: 'استمرارية التسليح جيدة.', noteNo: 'انقطاع التسليح يضعف انتقال القوى.', noteUnsure: 'راجع تفاصيل المفاصل والcontinuity.' },
    13: { noteYes: 'طول تثبيت كافٍ.', noteNo: 'تثبيت غير كافٍ يقلل نقل الإجهاد.', noteUnsure: 'تحقق من Development length.' },
    14: { noteYes: 'تم التحكم في الانحناء/الانفعال.', noteNo: 'انحناء كبير يسبب تشققات.', noteUnsure: 'راجع deflection criteria.' },
    15: { noteYes: 'تقوية مناطق التشقق موجودة.', noteNo: 'غياب تقوية قد يسبب تشققات واضحة.', noteUnsure: 'أضف تقوية إذا ظهرت تشققات.' },
    16: { noteYes: 'تم حساب punching shear.', noteNo: 'عدم حسابه خطر في البلاطات المسطحة.', noteUnsure: 'راجع حول الأعمدة وفتحات المصعد.' },
    17: { noteYes: 'تم حساب تأثير الشورينج.', noteNo: 'إزالة الدعامات مبكرًا قد يسبب هبوط.', noteUnsure: 'تأكد من جدول إزالة الدعامات.' },
    18: { noteYes: 'وصلات الكمرات صحيحة.', noteNo: 'وصلات ضعيفة قد تفشل في الزلازل.', noteUnsure: 'راجع تفاصيل joints.' },
    19: { noteYes: 'توزيع الهوكات كافٍ.', noteNo: 'هوكات غير كافية تقلل مقاومة القص.', noteUnsure: 'راجع ترتيب الهوكات حول الأعمدة.' },
    20: { noteYes: 'تم حساب shrinkage/temperature.', noteNo: 'تشققات بسبب الانكماش قد تحدث.', noteUnsure: 'راجع خطوط التحكم في التشقق.' },
    21: { noteYes: 'خرسانة مناسبة للبيئة.', noteNo: 'بيئة قاسية تحتاج خرسانة أعلى مقاومة.', noteUnsure: 'راجع exposure class والغطاء.' },
    22: { noteYes: 'تسليح مرتب بدون تشابك.', noteNo: 'تشابك سيء يقلل جودة الصب.', noteUnsure: 'راجع ترتيب القضبان ومسافات التغطية.' },
    23: { noteYes: 'صب وتدك جيد.', noteNo: 'فراغات تقلل المقاومة.', noteUnsure: 'راجع جودة الصب والتدك.' },
    24: { noteYes: 'تم التحكم في الماء/الإضافات.', noteNo: 'تعديل الخلطة قد يغير خصائص الخرسانة.', noteUnsure: 'راجع تقرير الخلطة وتغييرات الموقع.' },
    25: { noteYes: 'تصريف المياه مؤمن.', noteNo: 'مياه راكدة تزيد تآكل التسليح.', noteUnsure: 'تأكد من انحدار السطح والصرف.' },
    26: { noteYes: 'الرسومات مطابقة للموقع.', noteNo: 'تغييرات دون تحديث التصميم تسبب أخطاء.', noteUnsure: 'راجع التغييرات مع المهندس.' },
    27: { noteYes: 'يوجد إشراف إنشائي.', noteNo: 'غياب الإشراف يزيد الأخطاء.', noteUnsure: 'احصل على إشراف إنشائي خلال التنفيذ.' },
    28: { noteYes: 'تم تقوية حول الفتحات.', noteNo: 'الفتحات تحتاج تقوية خاصة.', noteUnsure: 'راجع تسليح حول الفتحات.' },
    29: { noteYes: 'تم تقييم الأحمال الزائدة.', noteNo: 'زيادة أحمال بدون تقييم قد تسبب فشل.', noteUnsure: 'راجع أي تعديل في الأحمال.' },
    30: { noteYes: 'تم تخطيط التعديلات المستقبلية.', noteNo: 'تعديلات مستقبلية قد ترفع الأحمال.', noteUnsure: 'ضع خطة لتقييم أي تغيير مستقبلي.' },
  }
  return notes[id] || { noteYes: '', noteNo: '', noteUnsure: '' }
}
