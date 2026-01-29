import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import QuestionCard from '../components/QuestionCard'
import { questions } from '../data/questions'

export default function Assessment() {
  const { t, lang } = useLang()
  const nav = useNavigate()

  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState(() => {
    const saved = localStorage.getItem('jsrai_answers')
    return saved ? JSON.parse(saved) : {}
  })

  useEffect(() => {
    localStorage.setItem('jsrai_answers', JSON.stringify(answers))
  }, [answers])

  const current = questions[index]
  const total = questions.length

  const stepLabel = `${t.step} ${index + 1} ${t.of} ${total}`

  const onAnswer = (val) => {
    setAnswers((prev) => ({ ...prev, [current.id]: val }))
  }

  const canNext = useMemo(() => {
    return index < total - 1
  }, [index, total])

  const canPrev = index > 0

  const goNext = () => {
    if (canNext) setIndex((i) => i + 1)
  }
  const goPrev = () => {
    if (canPrev) setIndex((i) => i - 1)
  }

  const onSubmit = () => {
    nav('/result', { state: { answers } })
  }

  return (
    <div>
      <div className="pageHeader">
        <div>
          <h2>{t.assessment.title}</h2>
          <p>{t.assessment.intro}</p>
          {/* Reminder Box */}
          <div style={{
            marginTop:'24px',
            padding:'16px 20px',
            background:'rgba(234,179,8,0.12)',
            borderRadius:'12px',
            border:'1px solid rgba(234,179,8,0.3)',
            fontSize:'1rem',
            lineHeight:'1.7'
          }}>
            <strong>💡 {t.assessment.reminder}</strong>
          </div>
        </div>
        <div className="stepper" aria-label="Stepper">
          <span className="step active">{stepLabel}</span>
        </div>
      </div>

      <div className="card">
        <div className="cardBody">
          <QuestionCard
            q={{
              id: current.id,
              text: lang === 'ar' ? current.text_ar : current.text_en,
              ex: lang === 'ar' ? current.ex_ar : current.ex_en,
              reference: lang === 'ar' ? current.reference_ar : current.reference_en,
            }}
            answer={answers[current.id]}
            onChange={onAnswer}
          />

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 12 }}>
            <button className="btn btnGhost" onClick={goPrev} disabled={!canPrev}>
              {t.assessment.btnPrev}
            </button>
            {canNext ? (
              <button className="btn btnPrimary" onClick={goNext}>
                {t.assessment.btnNext}
              </button>
            ) : (
              <button className="btn btnPrimary" onClick={onSubmit}>
                {t.assessment.btnSubmit}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
