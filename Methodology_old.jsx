import React from 'react'
import { useLang } from '../context/LangContext'

export default function Methodology() {
  const { t } = useLang()
  return (
    <div>
      <div className="pageHeader">
        <div>
          <h2>{t.methodology.title}</h2>
          <p>{t.methodology.p1}</p>
          <p>{t.methodology.p2}</p>
          <p>{t.methodology.p3}</p>
        </div>
      </div>

      <div className="card">
        <div className="cardBody">
          <h3>المنطق</h3>
          <ul style={{ marginTop: 10, color: 'var(--muted)', lineHeight: 1.8 }}>
            {t.methodology.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
