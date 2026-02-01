import React from 'react'
import { useLang } from '../context/LangContext'

export default function Disclaimer() {
  const { t } = useLang()
  return (
    <div>
      <div className="pageHeader">
        <div>
          <h2>{t.disclaimer.title}</h2>
          <p>{t.disclaimer.p}</p>
        </div>
      </div>
    </div>
  )
}
