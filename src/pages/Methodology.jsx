import React from 'react'

export default function Methodology() {
  return (
    <div>

      <div className="pageHeader">
        <div>

          <h2>Engineering Methodology</h2>

          <p>
            The assessment engine is based on structural screening principles
            derived from reinforced concrete safety evaluation practice and
            ACI-based behavior models.
          </p>

          <p>
            Instead of using design inputs, the tool uses observable field
            indicators that correlate with structural risk patterns.
          </p>

        </div>
      </div>

      <div className="card">
        <div className="cardBody">

          <h3>Core Evaluation Logic</h3>

          <ul style={{ lineHeight: 1.9 }}>

            <li>
              Each question represents a structural risk indicator verified in
              field assessment practice.
            </li>

            <li>
              Answers are weighted based on failure sensitivity and structural consequence.
            </li>

            <li>
              The model aggregates indicators into risk indices.
            </li>

            <li>
              Output is classified into engineering safety bands — not percentages only.
            </li>

          </ul>

        </div>
      </div>

      <div className="card" style={{ marginTop: 18 }}>
        <div className="cardBody">

          <h3>Structural Risk Indicators Produced</h3>

          <ul style={{ lineHeight: 1.9 }}>

            <li>
              PCVI — Progressive Collapse Vulnerability Index
            </li>

            <li>
              SVI — Seismic Vulnerability Index
            </li>

            <li>
              Load Path Disruption Risk
            </li>

            <li>
              Local Failure Probability (Punching / Shear / Flexure)
            </li>

          </ul>

        </div>
      </div>

      <div className="card" style={{ marginTop: 18 }}>
        <div className="cardBody">

          <h3>Expected Failure Mode Classification</h3>

          <ul style={{ lineHeight: 1.9 }}>

            <li>Shear-controlled failure risk</li>
            <li>Flexural distress risk</li>
            <li>Punching failure risk</li>
            <li>Soft-story vulnerability</li>
            <li>Progressive collapse sensitivity</li>

          </ul>

        </div>
      </div>

      <div className="card" style={{ marginTop: 18 }}>
        <div className="cardBody">

          <h3>Important Engineering Note</h3>

          <p style={{ lineHeight: 1.8 }}>
            This tool performs a preliminary structural screening only.
            It does not replace structural analysis, code design checks,
            laboratory testing, or professional engineering inspection.
          </p>

        </div>
      </div>

    </div>
  )
}