import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useLang } from '../context/LangContext'

export default function Home() {
  const { t } = useLang()
  const nav = useNavigate()

  return (
    <div className="hero">
      <div className="heroGrid">
        <div className="heroCard card">
          <h1>{t.hero.title}</h1>
          <p>{t.hero.subtitle}</p>
          <div className="heroActions">
            <button className="btn btnPrimary" onClick={() => nav('/assessment')}>
              {t.hero.start}
            </button>
            <button className="btn btnGhost" onClick={() => nav('/how')}>
              {t.nav.how}
            </button>
          </div>

          <div style={{ marginTop: 22 }}>
            <div className="grid3">
              <div className="card kpi">
                <h3>{t.sections.quick}</h3>
                <p>30 سؤال سريع مع شرح مبسط تحت كل سؤال.</p>
                <span className="badge">مبدئي</span>
              </div>
              <div className="card kpi">
                <h3>{t.sections.detailed}</h3>
                <p>نتيجة تفصيلية مع تفسير لكل نقطة وتأثيرها.</p>
                <span className="badge">موثوق</span>
              </div>
              <div className="card kpi">
                <h3>{t.sections.reliable}</h3>
                <p>مبني على كود ACI وممارسات التصميم.</p>
                <span className="badge">احترافي</span>
              </div>
            </div>
          </div>
        </div>

        <div className="heroSide card2">
          <h3>{t.bismillah}</h3>
          <p style={{ marginTop: 10 }}>
            {t.hero.subtitle}
          </p>
          <div style={{ marginTop: 14 }}>
            <div className="smallNote">
              <strong>ملاحظة مهمة:</strong> هذه أداة مبدئية ولا تغني عن فحص مهندس.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
