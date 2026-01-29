import React from 'react'
import { useLang } from '../context/LangContext'

export default function Privacy() {
  const { t } = useLang()
  return (
    <div>
      <div className="pageHeader">
        <div>
          <h2>{t.privacy.title}</h2>
          <p>{t.privacy.p}</p>
        </div>
      </div>
    </div>
  )
}
