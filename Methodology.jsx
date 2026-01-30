import React from 'react'
import { useLang } from '../context/LangContext'

export default function Methodology() {
  const { t, lang } = useLang()
  const isAr = (lang || 'ar') === 'ar'

  return (
    <section className="methodology">
      <div className="pageHeader">
        <div>
          <h2>
            {isAr ? 'المنهجية الهندسية المعتمدة' : 'Engineering Methodology'}
          </h2>
          <p>
            {isAr
              ? 'تعتمد أداة JSRAI على منهجية تقييم هندسي مبدئي تهدف إلى تحليل مستوى السلامة الإنشائية للمنشآت الخرسانية المسلحة، من خلال دمج مجموعة من المؤشرات الميدانية والمعايير المستندة إلى الأكواد العالمية والمحلية.'
              : 'JSRAI adopts a preliminary engineering assessment methodology to evaluate the structural safety of reinforced concrete structures, integrating field indicators with international and local code-based criteria.'}
          </p>
          <p>
            {isAr
              ? 'تم تطوير هذه المنهجية بالاستناد إلى متطلبات كود ACI 318، ومبادئ التصميم الزلزالي المعتمدة في الأردن، مع مراعاة الظروف البيئية والتنفيذية المحلية.'
              : 'This methodology is developed based on ACI 318 requirements and Jordanian seismic design principles, considering local environmental and construction conditions.'}
          </p>
          <p>
            {isAr
              ? 'الهدف الأساسي هو تقديم تقييم أولي يساعد المهندس أو صاحب القرار على تحديد مستوى الخطورة والحاجة إلى الفحص التفصيلي أو التدعيم، دون أن يُغني ذلك عن الدراسات الهندسية المتخصصة.'
              : 'The main objective is to provide an initial screening that supports engineers and decision-makers in identifying risk levels and the need for detailed inspection or retrofit, without replacing specialized engineering studies.'}
          </p>
        </div>
      </div>

      <div className="card">
        <div className="cardBody">
          <h3>{isAr ? 'أسس التقييم الهندسي' : 'Assessment Principles'}</h3>

          <ul style={{ marginTop: 10, color: 'var(--muted)', lineHeight: 1.9 }}>
            <li>
              {isAr
                ? 'تقييم الخصائص الميكانيكية التقريبية للخرسانة المسلحة ومقارنتها بمتطلبات كود ACI 318.'
                : 'Evaluating approximate mechanical properties of reinforced concrete and comparing them to ACI 318 requirements.'}
            </li>

            <li>
              {isAr
                ? 'تحليل المؤشرات الظاهرة مثل التشققات، التدهور السطحي، والتغيرات الهندسية، وربطها بمستوى السلامة الإنشائية.'
                : 'Analyzing visible indicators such as cracking, surface deterioration, and geometric irregularities and linking them to structural safety levels.'}
            </li>

            <li>
              {isAr
                ? 'تقدير ظروف التحميل الحالية ومقارنتها بفرضيات التصميم الأصلية.'
                : 'Estimating current loading conditions and comparing them to original design assumptions.'}
            </li>

            <li>
              {isAr
                ? 'أخذ الاعتبارات الزلزالية الخاصة بالأردن بالحسبان، وتقييم مدى تأثر المنشأ بالهزات الأرضية المتوقعة.'
                : 'Considering Jordanian seismic effects and evaluating the potential structural response to expected earthquakes.'}
            </li>

            <li>
              {isAr
                ? 'دمج جميع المؤشرات ضمن نموذج تقييم مرجّح لإنتاج مؤشر سلامة مبدئي وتوصيات هندسية واضحة.'
                : 'Integrating all indicators within a weighted assessment model to generate a preliminary safety index and clear engineering recommendations.'}
            </li>
          </ul>
        </div>
      </div>

      <div className="card">
        <div className="cardBody">
          <h3>{isAr ? 'حدود المنهجية' : 'Methodology Limitations'}</h3>

          <p style={{ color: 'var(--muted)', lineHeight: 1.9 }}>
            {isAr
              ? 'تُعد هذه المنهجية أداة تقييم مبدئي فقط، ولا يمكن اعتبار نتائجها بديلاً عن الفحص الهندسي الموقعي، أو الاختبارات المخبرية، أو التحليل الإنشائي التفصيلي. تُستخدم النتائج كدعم لاتخاذ القرار الأولي وتوجيه الجهود الهندسية في الاتجاه الصحيح.'
              : 'This methodology represents a preliminary assessment tool only and cannot replace on-site engineering inspections, laboratory testing, or detailed structural analysis. The outputs are intended to support early-stage decision-making.'}
          </p>
        </div>
      </div>
    </section>
  )
}
