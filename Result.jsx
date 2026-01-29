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
  const scoreText = `${result.pct}%`

  const levelLabel = t.scoreLabels[result.level] || t.scoreLabels.low

  const detailItems = result.details
    .filter((d) => d.value !== 'no') // highlight yes/unsure
    .slice(0, 12)

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
          <p>
            <strong>{t.result.level}</strong> {levelLabel}
          </p>
          <p>
            <strong>{t.result.score}</strong> {scoreText}
          </p>
          <p style={{ marginTop: 12 }}>
            هذه النتيجة مبنية على إجاباتك ووزن الأسئلة. كل نقطة “نعم” أو “غير متأكد” تزيد من درجة الخطورة.
          </p>
          <div style={{ marginTop: 14, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <button className="btn btnGhost" onClick={() => nav('/assessment')}>
              {t.result.back}
            </button>
          </div>
        </div>

        <div className="card resultBox">
          <h3>{t.result.recommendationsTitle}</h3>
          <p>{t.result.rec1}</p>
          <p>{t.result.rec2}</p>
          <p>{t.result.rec3}</p>
        </div>
      </div>

      <div style={{ marginTop: 18 }}>
        <ResultCard title={t.result.details}>
          {detailItems.length === 0 ? (
            <p style={{ color: 'var(--muted)' }}>لا توجد نقاط عالية أو غير مؤكدة في الإجابات.</p>
          ) : (
            detailItems.map((d) => {
              const q = questions.find((x) => x.id === d.id)
              const text = lang === 'ar' ? q.text_ar : q.text_en
              const val = d.value === 'yes' ? t.yes : d.value === 'unsure' ? t.unsure : t.no
              return (
                <div key={d.id} className="detailItem">
                  <strong>
                    {d.id}. {text}
                  </strong>
                  <div style={{ color: 'var(--muted)' }}>
                    <div>الإجابة: {val}</div>
                    <div style={{ marginTop: 6 }}>{d.note}</div>
                  </div>
                </div>
              )
            })
          )}
        </ResultCard>
      </div>
    </div>
  )
}
