import React from 'react'
import { useLang } from '../context/LangContext'

export default function Methodology() {

  const { lang } = useLang()

  return (
    <div>

      <div className="pageHeader">
        <h2>
          {lang === 'ar'
            ? 'المنهجية'
            : 'Methodology'}
        </h2>

        <p>
          {lang === 'ar'
            ? 'تعتمد الأداة على مؤشرات ضعف إنشائي يمكن ملاحظتها ميدانياً دون الرجوع للمخططات.'
            : 'The tool relies on observable structural weakness indicators.'}
        </p>
      </div>

      <div className="card">
        <div className="cardBody">

          <ul style={{ lineHeight: 1.9 }}>

            <li>
              {lang === 'ar'
                ? 'مؤشرات الشقوق والهبوط'
                : 'Cracking and settlement indicators'}
            </li>

            <li>
              {lang === 'ar'
                ? 'حالة العناصر الحاملة'
                : 'Load-bearing elements condition'}
            </li>

            <li>
              {lang === 'ar'
                ? 'انتظام توزيع الأحمال'
                : 'Load distribution regularity'}
            </li>

            <li>
              {lang === 'ar'
                ? 'تعديلات أو إزالة عناصر'
                : 'Structural modifications'}
            </li>

            <li>
              {lang === 'ar'
                ? 'مؤشرات طابق ضعيف'
                : 'Soft story indicators'}
            </li>

          </ul>

        </div>
      </div>

    </div>
  )
}
