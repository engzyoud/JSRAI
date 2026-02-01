import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { computeResult } from '../data/resultLogic'
import { questions } from '../data/questions'

export default function Result() {

  const nav = useNavigate()
  const loc = useLocation()

  const answers =
    loc.state?.answers ||
    JSON.parse(localStorage.getItem('jsrai_answers') || '{}')

  const result = computeResult(answers)

  const printReport = () => {
    window.print()
  }

  const levelColor =
    result.level === 'safe'
      ? 'low'
      : result.level === 'review'
      ? 'mid'
      : 'high'

  return (
    <div>

      <div className="pageHeader">
        <div>
          <h2>Structural Screening Result</h2>

          <p>
            This is a preliminary engineering screening result
            based on observable field indicators only.
          </p>
        </div>
      </div>

      {/* Main Result Box */}

      <div className="card resultBox">

        <h3>Safety Classification</h3>

        <div className={`badgeLevel ${levelColor}`}>

          {result.level === 'safe' && 'Structurally Acceptable'}
          {result.level === 'review' && 'Engineering Review Recommended'}
          {result.level === 'risk' && 'Structural Risk Detected'}

        </div>

        <p style={{ marginTop: 16, lineHeight: 1.8 }}>
          {result.summary}
        </p>

      </div>

      {/* Engineering Indicators */}

      <div className="resultGrid" style={{ marginTop: 18 }}>

        <div className="card resultBox">
          <h3>Engineering Indicators</h3>

          <p><strong>PCVI:</strong> {result.pcvi}</p>
          <p><strong>SVI:</strong> {result.svi}</p>
          <p><strong>Expected Failure Mode:</strong> {result.failureMode}</p>

        </div>

        <div className="card resultBox">
          <h3>Engineering Recommendations</h3>

          {result.recommendations.map((r, i) => (
            <p key={i}>• {r}</p>
          ))}

        </div>

      </div>

      {/* Detail Factors */}

      <div style={{ marginTop: 18 }}>

        <div className="card">
          <div className="cardBody">

            <h3>Key Risk Factors Detected</h3>

            {result.details.slice(0, 12).map((d) => {

              const q = questions.find(x => x.id === d.id)

              return (
                <div key={d.id} className="detailItem">
                  <strong>{q?.text_ar || q?.text_en}</strong>
                  <div>{d.note}</div>
                </div>
              )
            })}

          </div>
        </div>

      </div>

      {/* Actions */}

      <div style={{ marginTop: 18, display: 'flex', gap: 12 }}>

        <button className="btn btnGhost" onClick={() => nav('/assessment')}>
          Back to Inspection
        </button>

        <button className="btn btnPrimary" onClick={printReport}>
          Print PDF Report
        </button>

      </div>

      {/* Disclaimer */}

      <div className="smallNote" style={{ marginTop: 20 }}>
        This report is preliminary and does not replace
        structural analysis, code verification,
        or professional engineering inspection.
      </div>

    </div>
  )
}