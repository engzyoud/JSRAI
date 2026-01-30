import React from 'react'
import { useLang } from '../context/LangContext'

export default function Disclaimer() {
  const { lang } = useLang()
  const isAr = (lang || 'ar') === 'ar'

  return (
    <section className="disclaimer">
      <div className="pageHeader">
        <div>
          <h2>{isAr ? 'إخلاء المسؤولية' : 'Disclaimer'}</h2>
          <p>
            {isAr
              ? 'يرجى قراءة إخلاء المسؤولية بعناية قبل استخدام الأداة.'
              : 'Please read this disclaimer carefully before using the tool.'}
          </p>
        </div>
      </div>

      <div className="card">
        <div className="cardBody">
          <p style={{ lineHeight: 1.9, color: 'var(--muted)' }}>
            {isAr
              ? 'أداة JSRAI هي أداة تقييم هندسي مبدئي فقط، وتهدف إلى تقديم مؤشر أولي عن مستوى السلامة الإنشائية للمنشآت الخرسانية اعتمادًا على إجابات المستخدم.'
              : 'JSRAI is a preliminary engineering assessment tool intended to provide an initial indication of structural safety based on user inputs.'}
          </p>

          <p style={{ marginTop: 12, lineHeight: 1.9, color: 'var(--muted)' }}>
            {isAr
              ? 'لا تُعد النتائج الصادرة عن الأداة بديلاً عن الفحص الموقعي، أو التحليل الإنشائي التفصيلي، أو الاختبارات المخبرية، ويجب دائمًا الرجوع إلى مهندس إنشائي مختص قبل اتخاذ أي قرار فني.'
              : 'The results do not replace on-site inspection, detailed structural analysis, or laboratory testing. Consultation with a qualified structural engineer is always required.'}
          </p>

          <p style={{ marginTop: 12, lineHeight: 1.9, color: 'var(--muted)' }}>
            {isAr
              ? 'لا تتحمل الجهة المطورة للأداة أي مسؤولية قانونية أو فنية عن أي قرارات يتم اتخاذها اعتمادًا على نتائج هذا التقييم المبدئي.'
              : 'The developers of this tool assume no legal or technical responsibility for decisions made based on this preliminary assessment.'}
          </p>
        </div>
      </div>
    </section>
  )
}
