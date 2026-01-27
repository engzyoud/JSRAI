import React from 'react'
import { useLang } from '../context/LangContext'

export default function QuestionCard({ q, answer, onChange }) {
  const { t } = useLang()

  const getClass = (val) => {
    if (answer !== val) return 'optionBtn'
    if (val === 'yes') return 'optionBtn active'
    if (val === 'unsure') return 'optionBtn warn active'
    return 'optionBtn danger active'
  }

  return (
    <div className="question">
      <div className="questionNum">{q.id}</div>
      <div className="questionText">
        <h4>{q.text}</h4>
        <p>{q.ex}</p>
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
      </div>
    </div>
  )
}
