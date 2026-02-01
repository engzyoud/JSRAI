import React from 'react'
import { useLang } from '../context/LangContext'

export default function About() {

  const { lang } = useLang()

  return (
    <div>

      <div className="pageHeader">
        <div>

          <h2>
            {lang === 'ar'
              ? 'عن الأداة'
              : 'About the Tool'}
          </h2>

          <p>
            {lang === 'ar'
              ? 'أداة تقييم سلامة المنشأ هي أداة فحص إنشائي مبدئي تساعد على إعطاء مؤشر أولي عن مستوى السلامة الهيكلية للمبنى.'
              : 'The Structural Safety Assessment Tool provides a preliminary indicator of building structural safety.'}
          </p>

        </div>
      </div>

      {/* Main Card */}

      <div className="card">
        <div className="cardBody">

          <p style={{ lineHeight: 1.9 }}>

            {lang === 'ar'
              ? `تعتمد الأداة على مجموعة أسئلة ميدانية وإنشائية تم اختيارها بعناية بحيث يمكن للمستخدم ملاحظتها أو معرفتها دون الحاجة لقراءة مخططات تصميمية معقدة. الهدف هو تمكين المهندسين وأصحاب المباني من إجراء تقييم أولي سريع قبل اللجوء إلى الفحص التفصيلي.`
              : `The tool uses carefully selected field and structural questions that can be observed without complex design drawings. The goal is to enable a fast preliminary assessment before detailed engineering inspection.`}

          </p>

          <p style={{ lineHeight: 1.9, marginTop: 12 }}>

            {lang === 'ar'
              ? `التقييم الناتج لا يعتبر بديلاً عن الدراسة الإنشائية أو التحليل العددي أو الفحص الموقعي بواسطة مهندس مختص، لكنه يساعد على كشف مؤشرات ضعف محتملة تستوجب المتابعة.`
              : `The result does not replace structural analysis or professional inspection, but helps flag potential weakness indicators that require follow-up.`}

          </p>

        </div>
      </div>

      {/* Progressive Collapse Section */}

      <div className="card" style={{ marginTop: 18 }}>
        <div className="cardBody">

          <h3>
            {lang === 'ar'
              ? 'علاقة الفحص بخطر الانهيار المتسلسل'
              : 'Relation to Progressive Collapse Risk'}
          </h3>

          <p style={{ lineHeight: 1.9 }}>

            {lang === 'ar'
              ? `بعض مؤشرات الضعف الإنشائي قد تزيد من احتمال حدوث انهيار متسلسل في حال فشل عنصر واحد حرج. لذلك تم تضمين أسئلة تتعلق باستمرارية العناصر الحاملة، حالة الأعمدة، الشقوق، الهبوط، والتعديلات غير المدروسة.`
              : `Certain weakness indicators may increase the probability of progressive collapse if a critical element fails. Therefore, questions include load-bearing continuity, column condition, cracking, settlement, and uncontrolled modifications.`}

          </p>

        </div>
      </div>

    </div>
  )
}
