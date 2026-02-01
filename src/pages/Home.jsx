import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useLang } from '../context/LangContext'

export default function Home() {
  const { t, lang } = useLang()
  const nav = useNavigate()

  return (
    <div>

      {/* Bismillah top center — not translated */}
      <div style={{ textAlign: 'center', marginBottom: 30 }}>
        <div
          style={{
            fontSize: 28,
            fontWeight: 900,
            letterSpacing: 1,
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

          {/* Main Card */}
          <div className="heroCard card">

            <h1>{t.hero.title}</h1>

            <div
              style={{
                marginTop: 6,
                fontSize: 13,
                opacity: 0.7,
                fontWeight: 600
              }}
            >
              Developed by Eng Suhaib Alzyoud
            </div>

            <p>{t.hero.subtitle}</p>

            <div className="heroActions">
              <button
                className="btn btnPrimary"
                onClick={() => nav('/assessment')}
              >
                {t.hero.start}
              </button>
            </div>

          </div>

          {/* Importance Card */}
          <div className="heroSide card2">

            <h3>
              {lang === 'ar'
                ? 'أهمية الفحص الإنشائي المبدئي'
                : 'Importance of Preliminary Structural Check'}
            </h3>

            <p>
              {lang === 'ar'
                ? 'الكشف المبدئي يساعد على اكتشاف مؤشرات ضعف محتملة قبل تطورها إلى مشاكل إنشائية خطرة. هذه الأداة تعطي قراءة أولية مبنية على مبادئ الكود والملاحظة الميدانية.'
                : 'A preliminary structural check helps detect early weakness indicators before they develop into serious structural issues.'}
            </p>

            <div className="smallNote" style={{ marginTop: 10 }}>
              {lang === 'ar'
                ? 'النتيجة
