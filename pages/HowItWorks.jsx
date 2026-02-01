import React from 'react'
import { useLang } from '../context/LangContext'

export default function HowItWorks() {
  const { t, lang } = useLang()
  const isAr = (lang || 'ar') === 'ar'

  return (
    <section className="howItWorks">
      <div className="pageHeader">
        <div>
          <h2>
            {isAr ? 'كيف تعمل الأداة؟' : 'How Does the Tool Work?'}
          </h2>

          <p>
            {isAr
              ? 'تعتمد أداة JSRAI على نموذج تقييم هندسي مبدئي يهدف إلى تحليل مستوى السلامة الإنشائية للمنشآت من خلال جمع البيانات الأساسية، وتحليل المؤشرات الظاهرة، وربطها بالمتطلبات الكودية المعتمدة.'
              : 'JSRAI is based on a preliminary engineering assessment model designed to analyze the structural safety of buildings by collecting key data, evaluating visible indicators, and correlating them with applicable code requirements.'}
          </p>

          <p>
            {isAr
              ? 'تم تطوير هذا النموذج بالاستناد إلى مبادئ كود ACI 318 ومفاهيم الأداء الزلزالي، مع مراعاة الخصوصية الزلزالية والبيئية للأردن.'
              : 'The model is developed based on ACI 318 principles and seismic performance concepts, while accounting for Jordan’s local seismic and environmental conditions.'}
          </p>

          <p>
            {isAr
              ? 'النتيجة النهائية تمثل تقييمًا مبدئيًا يساعد في اتخاذ القرار الأولي بشأن الحاجة إلى الفحص التفصيلي أو التدعيم الإنشائي.'
              : 'The final output represents a preliminary screening that supports early decisions regarding the need for detailed inspection or structural retrofitting.'}
          </p>
        </div>
      </div>

      <div className="card">
        <div className="cardBody">
          <h3>{isAr ? 'خطوات التقييم الهندسي' : 'Engineering Assessment Steps'}</h3>

          <ul style={{ marginTop: 12, color: 'var(--muted)', lineHeight: 1.9 }}>
            <li>
              {isAr
                ? 'إدخال البيانات الأساسية عن المنشأ، مثل العمر التقريبي، نوع النظام الإنشائي، وعدد الطوابق.'
                : 'Entering basic information about the structure, such as approximate age, structural system type, and number of floors.'}
            </li>

            <li>
              {isAr
                ? 'تقييم الخصائص التقريبية للخرسانة المسلحة ومقارنتها بالحدود الدنيا الواردة في كود ACI 318.'
                : 'Evaluating approximate reinforced concrete properties and comparing them with minimum ACI 318 requirements.'}
            </li>

            <li>
              {isAr
                ? 'تحليل المؤشرات الميدانية الظاهرة مثل التشققات، التدهور، والتغيرات الهندسية.'
                : 'Analyzing visible field indicators such as cracking, deterioration, and geometric irregularities.'}
            </li>

            <li>
              {isAr
                ? 'تقدير ظروف التحميل الحالية ومقارنتها بفرضيات التصميم الأصلية.'
                : 'Estimating current loading conditions and comparing them to original design assumptions.'}
            </li>

            <li>
              {isAr
                ? 'تطبيق الاعتبارات الزلزالية الخاصة بالأردن لتقدير مستوى الخطورة الزلزالية المحتملة.'
                : 'Applying Jordanian seismic considerations to estimate potential seismic risk levels.'}
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
          <h3>{isAr ? 'مخرجات الأداة' : 'Tool Outputs'}</h3>

          <p style={{ color: 'var(--muted)', lineHeight: 1.9 }}>
            {isAr
              ? 'تُقدّم الأداة في نهايتها مؤشر سلامة مبدئي، وملخصًا هندسيًا يوضّح أهم العوامل المؤثرة في النتيجة، إلى جانب توصيات عامة حول الحاجة إلى الفحص التفصيلي أو التدعيم الإنشائي. وتُعد هذه المخرجات دليلًا استرشاديًا لدعم اتخاذ القرار، ولا تُغني عن الدراسات الهندسية المتخصصة.'
              : 'The tool outputs a preliminary safety index, an engineering summary explaining the main factors influencing the result, and general recommendations regarding detailed inspection or retrofitting needs. These outputs are advisory and do not replace specialized engineering studies.'}
          </p>
        </div>
      </div>
    </section>
  )
}
