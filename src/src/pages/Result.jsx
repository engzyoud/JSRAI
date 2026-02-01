import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import ResultCard from '../components/ResultCard'
import { computeResult } from '../data/resultLogic'
import { questions } from '../data/questions'

export default function Result() {
  const { t, lang } = useLang()
  const nav = useNavigate()
  const loc = useLocation()
  const answers = loc.state?.answers || JSON.parse(localStorage.getItem('jsrai_answers') || '{}')

  const result = computeResult(answers)

  const levelLabel = t.scoreLabels[result.level] || t.scoreLabels.low
  const badgeClass = result.level === 'high' ? 'high' : result.level === 'mid' ? 'mid' : 'low'

  const detailItems = result.details
    .filter((d) => d.value !== 'yes')
    .slice(0, 12)

  const rec = result.recommendations

  return (
    <div>
      <div className="pageHeader">
        <div>
          <h2>{t.result.title}</h2>
          <p>{t.result.disclaimer}</p>
        </div>
      </div>

      <div className="resultGrid">
        <div className="card resultBox">
          <h3>{t.result.summary}</h3>

          <div style={{ marginTop: 10 }}>
            <span className={`badgeLevel ${badgeClass}`}>
              {t.result.level} {levelLabel}
            </span>
          </div>

          <p style={{ marginTop: 12, color: 'var(--muted)' }}>
            {t.result.summaryText}
          </p>

          <div style={{ marginTop: 14, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <button className="btn btnGhost" onClick={() => nav('/assessment')}>
              {t.result.back}
            </button>
          </div>
        </div>

        <div className="card resultBox">
          <h3>{t.result.recommendationsTitle}</h3>
          <p><strong>{rec.title}</strong></p>
          <ul style={{ marginTop: 10, color: 'var(--muted)', lineHeight: 1.9 }}>
            {rec.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
          <p style={{ marginTop: 10, color: 'var(--muted)', lineHeight: 1.8 }}>
            <strong>{t.result.strengtheningTitle}</strong> {rec.strengthening}
          </p>
        </div>
      </div>

      <div style={{ marginTop: 18 }}>
        <ResultCard title={t.result.details}>
          {detailItems.length === 0 ? (
            <p style={{ color: 'var(--muted)' }}>{t.result.noIssues}</p>
          ) : (
            detailItems.map((d) => {
              const q = questions.find((x) => x.id === d.id)
              const text = lang === 'ar' ? q.text_ar : q.text_en
              const val = d.value === 'no' ? t.no : t.unsure
              return (
                <div key={d.id} className="detailItem">
                  <strong>
                    {d.id}. {text}
                  </strong>
                  <div style={{ color: 'var(--muted)' }}>
                    <div>{t.result.answerLabel}: {val}</div>
                    <div style={{ marginTop: 6 }}>{d.note}</div>
                  </div>
                </div>
              )
            })
          )}
          <div className="smallNote" style={{ marginTop: 12 }}>
            {t.result.finalNote}
          </div>
        </ResultCard>
      </div>
    </div>
  )
}
