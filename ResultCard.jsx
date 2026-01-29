import React from 'react'
import { useLang } from '../context/LangContext'

export default function ResultCard({ title, children }) {
  return (
    <div className="card" style={{ marginBottom: 14 }}>
      <div className="cardBody">
        <h3 style={{ margin: 0 }}>{title}</h3>
        <div style={{ marginTop: 10 }}>{children}</div>
      </div>
    </div>
  )
}
