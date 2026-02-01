import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {

  const nav = useNavigate()

  return (
    <div className="hero">

      <div className="heroGrid">

        {/* Main Hero */}

        <div className="heroCard card">

          {/* Bismillah */}

          <h2 style={{
            textAlign: 'center',
            fontSize: 28,
            fontWeight: 900,
            marginBottom: 18
          }}>
            بسم الله الرحمن الرحيم
          </h2>

          {/* Tool Title */}

          <h1 style={{ textAlign: 'center' }}>
            JSRAI Structural Safety Screening
          </h1>

          <p style={{
            textAlign: 'center',
            marginTop: 10,
            fontWeight: 600,
            opacity: 0.9
          }}>
            Developed by Eng Suhaib Alzyoud
          </p>

          <p style={{
            textAlign: 'center',
            marginTop: 18,
            lineHeight: 1.8
          }}>
            A professional structural field-screening tool used to estimate
            building safety condition based on observable engineering indicators.
            The assessment focuses on real structural risk signals — not design equations.
          </p>

          {/* Start Button */}

          <div className="heroActions" style={{ justifyContent: 'center' }}>
            <button
              className="btn btnPrimary"
              onClick={() => nav('/assessment')}
            >
              ابدأ الفحص
            </button>
          </div>

        </div>

        {/* Importance Section */}

        <div className="heroSide card2">

          <h3>لماذا الفحص الإنشائي مهم؟</h3>

          <p>
            العديد من حالات الفشل الإنشائي لا تبدأ بانهيار مباشر،
            بل بتدهور موضعي في عنصر واحد ينتقل لاحقًا لبقية العناصر.
          </p>

          <p>
            هذا النمط يُعرف هندسيًا باسم:
            <strong> Progressive Collapse</strong>
            أو الانهيار المتسلسل.
          </p>

          <p>
            الفحص المبدئي المبكر يساعد على اكتشاف مؤشرات الضعف
            قبل تطورها إلى فشل إنشائي حقيقي.
          </p>

          <p>
            الأداة تركز على مؤشرات ميدانية قابلة للملاحظة
            يمكن استخدامها لتقدير مستوى الأمان الأولي.
          </p>

        </div>

      </div>

    </div>
  )
}