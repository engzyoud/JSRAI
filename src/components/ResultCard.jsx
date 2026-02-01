import React from 'react'

export default function ResultCard({ title, children }) {
  return (
    <section className="resultCard">
      <div className="card resultCardBox">
        <div className="cardBody">
          <div className="resultCardHeader">
            <h3>{title}</h3>
            <div className="resultCardLine"></div>
          </div>

          <div className="resultCardContent">
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}
