import React from 'react'

export default function HowItWorks() {
  return (
    <div>

      <div className="pageHeader">
        <div>
          <h2>How the Inspection Works</h2>

          <p>
            This tool performs a structured field-style structural screening.
            It does not ask you about design equations — it asks about what you
            can actually observe or confirm about the building.
          </p>

          <p>
            The questions are based on practical structural risk indicators
            used in engineering assessment practice and ACI-based concepts,
            but translated into observable site conditions.
          </p>

          <p>
            The goal is to estimate structural safety condition — not replace
            engineering analysis or laboratory testing.
          </p>

        </div>
      </div>

      <div className="card">
        <div className="cardBody">

          <h3>Inspection Flow</h3>

          <ul style={{ marginTop: 12, lineHeight: 1.9 }}>

            <li>
              You answer field-observable questions about the building condition.
            </li>

            <li>
              Questions focus on cracks, deflection, column condition,
              load changes, construction quality indicators, and seismic vulnerability.
            </li>

            <li>
              Each answer affects structural risk indicators used by the model.
            </li>

            <li>
              The system calculates structural vulnerability indices
              and expected failure patterns.
            </li>

            <li>
              You receive a technical summary and engineering recommendations.
            </li>

          </ul>

        </div>
      </div>

    </div>
  )
}