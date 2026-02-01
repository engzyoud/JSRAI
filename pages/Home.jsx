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

          <div className="grid3">
            <div className="card kpi">
              <h3>{t.sections.quick}</h3>
              <p>{t.hero.kpi1}</p>
              <span className="badge">{t.hero.tag1}</span>
            </div>

            <div className="card kpi">
              <h3>{t.sections.detailed}</h3>
              <p>{t.hero.kpi2}</p>
              <span className="badge">{t.hero.tag2}</span>
            </div>

            <div className="card kpi">
              <h3>{t.sections.reliable}</h3>
              <p>{t.hero.kpi3}</p>
              <span className="badge">{t.hero.tag3}</span>
            </div>
          </div>
        </div>

        <div className="card2" style={{ padding: 22 }}>
          <h3 style={{ margin: 0 }}>{t.hero.sideTitle}</h3>
          <p style={{ marginTop: 10, color: 'var(--muted)', lineHeight: 1.75 }}>
            {t.hero.sideP}
          </p>
          <div className="smallNote" style={{ marginTop: 12 }}>
            {t.hero.sideNote}
          </div>
        </div>
      </div>
    </div>
  )
}
