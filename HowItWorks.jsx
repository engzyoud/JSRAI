import React from 'react'
import { useLang } from '../context/LangContext'

export default function HowItWorks() {
  const { t } = useLang()
  return (
    <div>
      <div className="pageHeader">
        <div>
          <h2>{t.how.title}</h2>
          <p>{t.how.p1}</p>
          <p>{t.how.p2}</p>
          <p>{t.how.p3}</p>
        </div>
      </div>

      <div className="card">
        <div className="cardBody">
          <h3>{t.how.stepsTitle}</h3>
          <ul style={{ marginTop: 10, color: 'var(--muted)', lineHeight: 1.8 }}>
            {t.how.steps.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
