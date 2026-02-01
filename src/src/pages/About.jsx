import React from 'react'
import { useLang } from '../context/LangContext'

export default function About() {
  const { lang } = useLang()
  const isAr = (lang || 'ar') === 'ar'

  return (
    <section className="about">
      <div className="pageHeader">
        <div>
          <h2>{isAr ? 'عن الأداة' : 'About the Tool'}</h2>

          <p>
            {isAr
              ? 'JSRAI هي أداة تقييم هندسي مبدئي تهدف إلى تحليل مستوى السلامة الإنشائية للمنشآت الخرسانية المسلحة، من خلال مجموعة من المؤشرات الميدانية والأسئلة الفنية المبنية على أسس هندسية معتمدة.'
              : 'JSRAI is a preliminary engineering assessment tool designed to evaluate the structural safety of reinforced concrete buildings using a set of field-based indicators and engineering-based questions.'}
          </p>

          <p>
            {isAr
              ? 'تم تطوير هذه الأداة بالاعتماد على متطلبات كود ACI 318، ومفاهيم الأداء الزلزالي، مع مراعاة الخصوصية الزلزالية والبيئية في الأردن، بهدف تقديم تقييم أولي يدعم اتخاذ القرار الهندسي الصحيح.'
              : 'The tool is developed based on ACI 318 requirements and seismic performance concepts, considering Jordan’s local seismic and environmental conditions, to support sound engineering decision-making.'}
          </p>
        </div>
      </div>

      <div className="card">
        <div className="cardBody">
          <h3>{isAr ? 'ماذا تعني JSRAI؟' : 'What does JSRAI stand for?'}</h3>

          <p style={{ marginTop: 10 }}>
            <strong>JSRAI</strong> —{' '}
            {isAr
              ? 'Jordan Structural Risk Assessment Intelligence'
              : 'Jordan Structural Risk Assessment Intelligence'}
          </p>

          <p>
            {isAr
              ? 'وهي منظومة تقييم ذكية تهدف إلى تقديم قراءة مبدئية لمستوى الأداء الإنشائي للمنشآت في الأردن، مع التركيز على الجوانب الأكثر تأثيرًا على السلامة الهيكلية.'
              : 'It represents an intelligent assessment framework aimed at providing a preliminary insight into structural performance of buildings in Jordan, focusing on the most critical safety-related aspects.'}
          </p>
        </div>
      </div>

      <div className="card">
        <div className="cardBody">
          <h3>{isAr ? 'أهداف الأداة' : 'Tool Objectives'}</h3>

          <ul style={{ marginTop: 10, lineHeight: 1.9, color: 'var(--muted)' }}>
            <li>
              {isAr
                ? 'توفير أداة سهلة الاستخدام لإجراء تقييم هندسي مبدئي سريع.'
                : 'Providing an easy-to-use tool for rapid preliminary engineering assessment.'}
            </li>
            <li>
              {isAr
                ? 'تحديد المؤشرات التي تستدعي إجراء فحص تفصيلي أو تحليل إنشائي.'
                : 'Identifying indicators that require detailed inspection or structural analysis.'}
            </li>
            <li>
              {isAr
                ? 'رفع مستوى الوعي الهندسي لدى المستخدمين حول سلامة المنشآت.'
                : 'Raising engineering awareness among users regarding structural safety.'}
            </li>
            <li>
              {isAr
                ? 'دعم اتخاذ القرار الهندسي المبني على معايير علمية واضحة.'
                : 'Supporting engineering decision-making based on clear scientific criteria.'}
            </li>
          </ul>
        </div>
      </div>

      <div className="card">
        <div className="cardBody">
          <h3>{isAr ? 'حدود الاستخدام' : 'Usage Limitations'}</h3>

          <p className="smallNote">
            {isAr
              ? 'هذه الأداة مخصصة للتقييم الهندسي المبدئي فقط، ولا تُعد بديلاً عن الكشف الموقعي، أو الفحوصات المخبرية، أو التحليل الإنشائي التفصيلي. ويجب دائمًا الرجوع إلى مهندس إنشائي مختص قبل اتخاذ أي قرارات فنية.'
              : 'This tool is intended for preliminary assessment only and does not replace on-site inspection, laboratory testing, or detailed structural analysis. Consultation with a licensed structural engineer is always recommended.'}
          </p>
        </div>
      </div>
    </section>
  )
}
