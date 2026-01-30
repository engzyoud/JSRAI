import React from 'react'
import { useLang } from '../context/LangContext'

export default function QuestionCard({ q, answer, onChange }) {
  const { t, lang } = useLang()
  const isAr = (lang || 'ar') === 'ar'

  const getClass = (val) => {
    if (answer !== val) return 'optionBtn'
    if (val === 'yes') return 'optionBtn success active'
    if (val === 'unsure') return 'optionBtn warn active'
    return 'optionBtn danger active'
  }

  return (
    <div className="questionCard">
      <div className="questionHeader">
        <div className="questionNum">{q.id}</div>
        <div className="questionTitle">
          <h4>{q.text}</h4>
        </div>
      </div>

      <div className="questionBody">
        <p className="questionExplain">{q.ex}</p>

        <div className="options" role="group" aria-label="Answers">
          <button className={getClass('yes')} onClick={() => onChange('yes')}>
            {t.yes}
          </button>

          <button className={getClass('unsure')} onClick={() => onChange('unsure')}>
            {t.unsure}
          </button>

          <button className={getClass('no')} onClick={() => onChange('no')}>
            {t.no}
          </button>
        </div>

        <div className="questionRef">
          <span>{isAr ? 'شرح هندسي:' : 'Engineering reference:'}</span>
          <a
            href="https://www.concrete.org/store/productdetail.aspx?ItemID=318U19"
            target="_blank"
            rel="noopener noreferrer"
          >
            {isAr ? 'الرجوع إلى كود ACI 318' : 'Refer to ACI 318 Code'}
          </a>
        </div>
      </div>
    </div>
  )
}
