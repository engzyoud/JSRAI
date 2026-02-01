import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useLang } from '../context/LangContext'

export default function Home() {
  const { t, lang } = useLang()
  const nav = useNavigate()

  return (
    <div>

      <div style={{ textAlign: 'center', marginBottom: 30 }}>
        <div
          style={{
            fontSize: 28,
            fontWeight: 900,
            background: 'linear-gradient(90deg,#22c55e,#38bdf8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          بسم الله الرحمن الرحيم
        </div>
      </div>

      <div className="hero">
        <div className="heroGrid">

          <div className="heroCard card">

            <h1>{t.hero.title}</h1>

            <div style={{ fontSize: 13, opacity: 0.7 }}>
              Developed by Eng Suhaib Alzyoud
            </div>

            <p>{t.hero.subtitle}</p>

            <button
              className="btn btnPrimary"
              onClick={() => nav('/assessment')}
            >
              {t.hero.start}
            </button>

          </div>

          <div className="heroSide card2">

            <h3>
              {lang === 'ar'
                ? 'أهمية الفحص الإنشائي المبدئي'
                : 'Importance of Preliminary Structural Check'}
            </h3>

            <p>
              {lang === 'ar'
                ? 'الفحص المبدئي يساعد على اكتشاف مؤشرات ضعف إنشائي قبل تطورها إلى مشاكل خطرة.'
                : 'Preliminary structural check helps detect weakness indicators early.'}
            </p>

          </div>

        </div>
      </div>

      <div className="card" style={{ marginTop: 20 }}>
        <h3>
          {lang === 'ar'
            ? 'مخاطر الانهيار المتسلسل'
            : 'Progressive Collapse Risk'}
        </h3>

        <p>
          {lang === 'ar'
            ? 'فشل عنصر إنشائي واحد قد يؤدي إلى سلسلة انهيارات متتابعة.'
            : 'Failure of one structural element can trigger chain collapse.'}
        </p>
      </div>

    </div>
  )
}
