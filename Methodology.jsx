import React from 'react'
import { useLang } from '../context/LangContext'

export default function Methodology() {
  const { t, isRTL } = useLang()
  
  return (
    <div className="container" style={{padding:'60px 0'}}>
      <div className="card" style={{padding:'60px', maxWidth:'950px', margin:'0 auto'}}>
        
        <h1 style={{fontSize:'3rem', marginBottom:'16px', textAlign: isRTL ? 'right' : 'left'}}>{t.methodology.title}</h1>
        <p style={{fontSize:'1.15rem', color:'var(--muted)', marginBottom:'48px', textAlign: isRTL ? 'right' : 'left'}}>
          {t.methodology.intro}
        </p>
        
        {/* Scientific Basis */}
        <section style={{marginBottom:'48px', textAlign: isRTL ? 'right' : 'left'}}>
          <h2 style={{fontSize:'2.2rem', marginBottom:'20px', color:'var(--accent)'}}>{t.methodology.basisTitle}</h2>
          <p style={{fontSize:'1.1rem', marginBottom:'20px'}}>{t.methodology.basisText}</p>
          <ul style={{fontSize:'1.05rem', lineHeight:'1.9', paddingRight: isRTL ? '24px' : '0', paddingLeft: isRTL ? '0' : '24px'}}>
            {t.methodology.basisPoints.map((item, idx) => (
              <li key={idx} style={{marginBottom:'12px', fontWeight:'500'}}>{item}</li>
            ))}
          </ul>
        </section>
        
        {/* Assessment Criteria */}
        <section style={{marginBottom:'48px', textAlign: isRTL ? 'right' : 'left'}}>
          <h2 style={{fontSize:'2.2rem', marginBottom:'20px', color:'var(--accent2)'}}>{t.methodology.assessmentCriteria}</h2>
          <p style={{fontSize:'1.1rem', marginBottom:'28px'}}>{t.methodology.criteriaText}</p>
          <div style={{display:'grid', gap:'20px'}}>
            {t.methodology.criteria.map((criterion, idx) => (
              <div key={idx} style={{
                background: 'linear-gradient(135deg, rgba(124,58,237,0.08), rgba(34,197,94,0.05))',
                padding: '24px',
                borderRadius: '14px',
                border: '1px solid rgba(255,255,255,0.08)'
              }}>
                <h3 style={{fontSize:'1.4rem', marginBottom:'12px', color:'var(--accent)'}}>{criterion.title}</h3>
                <p style={{fontSize:'1.05rem', lineHeight:'1.8', color:'var(--muted)'}}>{criterion.desc}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Scoring System */}
        <section style={{marginBottom:'48px', textAlign: isRTL ? 'right' : 'left'}}>
          <h2 style={{fontSize:'2.2rem', marginBottom:'20px'}}>{t.methodology.scoringSystem}</h2>
          <p style={{fontSize:'1.1rem', marginBottom:'20px'}}>{t.methodology.scoringText}</p>
          <ul style={{fontSize:'1.05rem', lineHeight:'1.9', paddingRight: isRTL ? '24px' : '0', paddingLeft: isRTL ? '0' : '24px'}}>
            {t.methodology.scoringPoints.map((item, idx) => (
              <li key={idx} style={{marginBottom:'12px'}}>{item}</li>
            ))}
          </ul>
        </section>
        
        {/* Risk Levels */}
        <section style={{marginBottom:'48px', textAlign: isRTL ? 'right' : 'left'}}>
          <h2 style={{fontSize:'2.2rem', marginBottom:'20px'}}>{t.methodology.riskLevels}</h2>
          <p style={{fontSize:'1.1rem', marginBottom:'28px'}}>{t.methodology.levelsText}</p>
          <div style={{display:'grid', gap:'20px'}}>
            {t.methodology.levels.map((level, idx) => {
              const colors = [
                {bg: 'rgba(34,197,94,0.1)', border: 'rgba(34,197,94,0.3)', text: '#22C55E'},
                {bg: 'rgba(234,179,8,0.1)', border: 'rgba(234,179,8,0.3)', text: '#EAB308'},
                {bg: 'rgba(239,68,68,0.1)', border: 'rgba(239,68,68,0.3)', text: '#EF4444'}
              ]
              return (
                <div key={idx} style={{
                  background: colors[idx].bg,
                  padding: '24px',
                  borderRadius: '14px',
                  border: `2px solid ${colors[idx].border}`
                }}>
                  <h3 style={{fontSize:'1.4rem', marginBottom:'12px', color: colors[idx].text, fontWeight:'700'}}>
                    {level.name}
                  </h3>
                  <p style={{fontSize:'1.05rem', lineHeight:'1.8'}}>{level.desc}</p>
                </div>
              )
            })}
          </div>
        </section>
        
        {/* Limitations */}
        <section style={{
          backgroundColor:'rgba(124,58,237,0.08)', 
          padding:'32px', 
          borderRadius:'16px', 
          border:'1px solid rgba(124,58,237,0.2)',
          textAlign: isRTL ? 'right' : 'left'
        }}>
          <h2 style={{fontSize:'2rem', marginBottom:'20px', color:'var(--accent)'}}>{t.methodology.limitations}</h2>
          <p style={{fontSize:'1.05rem', marginBottom:'16px'}}>{t.methodology.limitationsText}</p>
          <ul style={{fontSize:'1rem', lineHeight:'1.8', paddingRight: isRTL ? '24px' : '0', paddingLeft: isRTL ? '0' : '24px'}}>
            {t.methodology.limitationsPoints.map((item, idx) => (
              <li key={idx} style={{marginBottom:'10px'}}>{item}</li>
            ))}
          </ul>
        </section>
        
      </div>
    </div>
  )
}
