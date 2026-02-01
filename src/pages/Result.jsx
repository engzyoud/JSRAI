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

  /* =========================
     Engineering Indicators
  ========================== */

  const pcvi = Math.min(100, Math.round(result.pct * 1.1))
  const svi  = Math.min(100, Math.round(result.pct * 0.9))

  let failureMode = lang === 'ar'
    ? 'انحناء'
    : 'Flexure'

  if (pcvi > 70) failureMode = lang === 'ar' ? 'قص محتمل' : 'Shear'
  if (pcvi > 85) failureMode = lang === 'ar' ? 'ثقب حول الأعمدة' : 'Punching'
  if (svi  > 75) failureMode = lang === 'ar' ? 'طابق ضعيف' : 'Soft Story'

  /* =========================
     Recommendation Logic
  ========================== */

  let recommendationText = ''

  if (result.level === 'low') {
    recommendationText = t.result.safe
  }

  if (result.level === 'mid') {
    recommendationText =
      lang === 'ar'
        ? 'يوصى بإجراء كشف هندسي تفصيلي ومراقبة العناصر الحاملة، خاصة مناطق الشقوق والهبوط.'
        : 'Engineering inspection and monitoring recommended.'
  }

  if (result.level === 'high') {
    recommendationText =
      lang === 'ar'
        ? 'يوصى بدراسة تدعيم إنشائي. التدعيم قد يشمل: كمرات، أعمدة، مناطق اتصال، أو بلاطات.'
        : 'Structural strengthening study recommended.'
  }

  /* =========================
     PDF Print
  ========================== */

  const printReport = () => window.print()

  /* ========================= */

  const detailItems = result.details.slice(0, 15)

  return (
    <div>

      <div className="pageHeader">
        <div>
          <h2>{t.result.title}</h2>
          <p>{t.result.disclaimer}</p>
        </div>
      </div>

      {/* ===== SUMMARY BOX ===== */}

      <div className="resultGrid">

        <div className="card resultBox">
          <h3>{t.result.summary}</h3>

          <div className={`badgeLevel ${result.level}`}>
            {t.scoreLabels[result.level]}
          </div>

          <p><strong>{t.result.score}:</strong> {result.pct}</p>

          <p><strong>{t.result.pcvi}:</strong> {pcvi}</p>
          <p><strong>{t.result.svi}:</strong> {svi}</p>
          <p><strong>{t.result.failure}:</strong> {failureMode}</p>

          <button className="btn btnPrimary" onClick={printReport}>
            {t.result.print}
          </button>

        </div>

        {/* ===== RECOMMENDATIONS ===== */}

        <div className="card resultBox">
          <h3>{t.result.recommendationsTitle}</h3>
          <p>{recommendationText}</p>

          {result.level !== 'low' && (
            <p>
              {lang === 'ar'
                ? 'يجب أن يتم التدعيم أو الفحص بواسطة مهندس إنشائي مختص.'
                : 'Evaluation must be done by structural engineer.'}
            </p>
          )}

        </div>

      </div>

      {/* ===== DETAILS ===== */}

      <div style={{ marginTop: 18 }}>
        <ResultCard title={t.result.details}>

          {detailItems.map((d) => {

            const q = questions.find(x => x.id === d.id)
            const text = lang === 'ar' ? q.text_ar : q.text_en

            return (
              <div key={d.id} className="detailItem">
                <strong>{d.id}. {text}</strong>
                <div>{d.note}</div>
              </div>
            )
          })}

        </ResultCard>
      </div>

      <button className="btn btnGhost" onClick={() => nav('/assessment')}>
        {t.result.back}
      </button>

    </div>
  )
}
