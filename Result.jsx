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
  const answers =
    loc.state?.answers ||
    JSON.parse(localStorage.getItem('jsrai_answers') || '{}')

  const result = computeResult(answers)

  const detailItems = result.details
    .filter((d) => d.value !== 'no')
    .slice(0, 12)

  return (
    <section className="resultPage">
      <div className="pageHeader">
        <div>
          <h2>{t.result.title}</h2>
          <p>{t.result.disclaimer}</p>
        </div>
      </div>

      <div className="resultGrid">
        {/* Summary */}
        <div className={`card resultBox result-${result.color}`}>
          <h3>{t.result.summary}</h3>

          <div className="resultStatus">
            <span className="resultLabel">{result.label}</span>
            <span className="resultScore">{result.pct}%</span>
          </div>

          <p className="resultDesc">{result.description}</p>

          <div className="resultActions">
            <button className="btn btnGhost" onClick={() => nav('/assessment')}>
              {t.result.back}
            </button>
          </div>
        </div>

        {/* Recommendations */}
        <div className="card resultBox">
          <h3>{t.result.recommendationsTitle}</h3>
          <ul className="recList">
            {result.recommendations.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Influencing Factors */}
      <div style={{ marginTop: 22 }}>
        <ResultCard title={t.result.details}>
          {detailItems.length === 0 ? (
            <p style={{ color: 'var(--muted)' }}>
              لا توجد مؤشرات سلبية واضحة بناءً على إجاباتك.
            </p>
          ) : (
            detailItems.map((d) => {
              const q = questions.find((x) => x.id === d.id)
              const text = lang === 'ar' ? q.text_ar : q.text_en
              const val =
                d.value === 'yes'
                  ? t.yes
                  : d.value === 'unsure'
                  ? t.unsure
                  : t.no

              return (
                <div key={d.id} className="detailItem">
                  <strong>
                    {d.id}. {text}
                  </strong>
                  <div className="detailMeta">
                    <div>
                      <span className="detailTag">الإجابة:</span> {val}
                    </div>
                    <div className="detailNote">{d.note}</div>
                  </div>
                </div>
              )
            })
          )}
        </ResultCard>
      </div>
    </section>
  )
}
