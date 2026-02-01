import React from 'react'

export default function QuestionCard({ q, answer, onChange }) {

  const getClass = (val) => {
    if (answer !== val) return 'optionBtn'
    if (val === 'yes') return 'optionBtn active'
    if (val === 'unsure') return 'optionBtn warn active'
    return 'optionBtn danger active'
  }

  return (
    <div className="question">

      <div className="questionNum">
        {q.id}
      </div>

      <div className="questionText">

        <h4>{q.text}</h4>

        {/* Extended explanation */}

        <p style={{ marginTop: 8, lineHeight: 1.7 }}>
          {q.ex}
        </p>

        <div className="smallNote" style={{ marginTop: 6 }}>
          Answer based on what you can actually observe or reliably confirm —
          not assumptions.
        </div>

        {/* Options */}

        <div className="options" role="group">

          <button
            className={getClass('yes')}
            onClick={() => onChange('yes')}
          >
            Yes
          </button>

          <button
            className={getClass('unsure')}
            onClick={() => onChange('unsure')}
          >
            Not Sure
          </button>

          <button
            className={getClass('no')}
            onClick={() => onChange('no')}
          >
            No
          </button>

        </div>

      </div>

    </div>
  )
}