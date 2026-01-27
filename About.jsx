import React from 'react'
import { useLang } from '../context/LangContext'

export default function About() {
  const { t } = useLang()
  return (
    <div>
      <div className="pageHeader">
        <div>
          <h2>{t.about.title}</h2>
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
        </div>
      </div>

      <div className="card">
        <div className="cardBody">
          <h3>{t.about.developed}</h3>
          <p className="smallNote">
            هذه الأداة مبدئية ومخصصة للتقييم السريع فقط. لا تغني عن فحص مهندس أو اختبار مختبري.
          </p>
        </div>
      </div>
    </div>
  )
}
