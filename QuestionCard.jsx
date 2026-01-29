import React from 'react'
import { useLang } from '../context/LangContext'

export default function QuestionCard({ q, answer, onChange }) {
  const { t, isRTL } = useLang()

  const getClass = (val) => {
    if (answer !== val) return 'optionBtn'
    if (val === 'yes') return 'optionBtn active'
    if (val === 'unsure') return 'optionBtn warn active'
    return 'optionBtn danger active'
  }

  return (
    <div className="question" style={{textAlign: isRTL ? 'right' : 'left'}}>
      <div className="questionNum">{q.id}</div>
      <div className="questionText">
        <h4 style={{fontSize:'1.25rem', marginBottom:'12px', lineHeight:'1.6'}}>{q.text}</h4>
        <p style={{fontSize:'1.05rem', marginBottom:'16px', lineHeight:'1.7', color:'var(--muted)'}}>{q.ex}</p>
        
        {/* Reference Link */}
        {q.reference && (
          <div style={{
            marginBottom:'20px',
            padding:'12px 16px',
            background:'rgba(124,58,237,0.08)',
            borderRadius:'10px',
            border:'1px solid rgba(124,58,237,0.2)',
            fontSize:'0.95rem',
            color:'var(--accent)'
          }}>
            <strong>{t.assessment.reference}:</strong> {q.reference}
          </div>
        )}
        
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
