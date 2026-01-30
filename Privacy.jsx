import React from 'react'
import { useLang } from '../context/LangContext'

export default function Privacy() {
  const { lang } = useLang()
  const isAr = (lang || 'ar') === 'ar'

  return (
    <section className="privacy">
      <div className="pageHeader">
        <div>
          <h2>{isAr ? 'سياسة الخصوصية وإخلاء المسؤولية' : 'Privacy Policy & Disclaimer'}</h2>

          <p>
            {isAr
              ? 'تلتزم أداة JSRAI بحماية خصوصية المستخدمين واحترام سرية البيانات المدخلة، وتوضيح حدود الاستخدام والمسؤولية بشكل مهني وشفاف.'
              : 'JSRAI is committed to protecting user privacy and clarifying usage limitations and responsibility in a transparent and professional manner.'}
          </p>
        </div>
      </div>

      <div className="card">
        <div className="cardBody">
          <h3>{isAr ? 'سياسة الخصوصية' : 'Privacy Policy'}</h3>

          <ul style={{ marginTop: 10, lineHeight: 1.9, color: 'var(--muted)' }}>
            <li>
              {isAr
                ? 'لا يتم تخزين أي بيانات شخصية أو معلومات تعريفية عن المستخدم.'
                : 'No personal or identifiable user data is collected or stored.'}
            </li>
            <li>
              {isAr
                ? 'جميع البيانات المدخلة تُستخدم فقط لغرض إجراء التقييم المبدئي داخل التطبيق.'
                : 'All entered data is used solely for performing the preliminary assessment within the application.'}
            </li>
            <li>
              {isAr
                ? 'لا يتم مشاركة أي بيانات مع أي طرف ثالث.'
                : 'No data is shared with any third parties.'}
            </li>
            <li>
              {isAr
                ? 'يتم تخزين الإجابات محليًا على جهاز المستخدم فقط لتحسين تجربة الاستخدام.'
                : 'Answers may be stored locally on the user’s device only to enhance user experience.'}
            </li>
          </ul>
        </div>
      </div>

      <div className="card">
        <div className="cardBody">
          <h3>{isAr ? 'إخلاء المسؤولية' : 'Disclaimer'}</h3>

          <p style={{ lineHeight: 1.9, color: 'var(--muted)' }}>
            {isAr
              ? 'تُعد أداة JSRAI أداة تقييم هندسي مبدئي فقط، وتهدف إلى تقديم قراءة أولية لمستوى السلامة الإنشائية اعتمادًا على إجابات المستخدم. ولا يمكن اعتبار النتائج الصادرة عنها بديلاً عن الكشف الهندسي الموقعي، أو الاختبارات المخبرية، أو التحليل الإنشائي التفصيلي.'
              : 'JSRAI is a preliminary engineering assessment tool intended to provide an initial insight into structural safety based on user inputs. The results do not replace on-site inspections, laboratory testing, or detailed structural analysis.'}
          </p>

          <p style={{ marginTop: 10, lineHeight: 1.9, color: 'var(--muted)' }}>
            {isAr
              ? 'يُنصح دائمًا بالرجوع إلى مهندس إنشائي مختص قبل اتخاذ أي قرارات فنية أو تنفيذية. ولا تتحمل الجهة المطورة للأداة أي مسؤولية قانونية أو فنية عن القرارات المتخذة اعتمادًا على نتائج هذا التقييم المبدئي.'
              : 'Users are strongly advised to consult a qualified structural engineer before making any technical or construction-related decisions. The developers of this tool bear no legal or technical responsibility for actions taken based on its outputs.'}
          </p>
        </div>
      </div>
    </section>
  )
}
