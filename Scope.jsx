import React from 'react'
import { useLang } from '../context/LangContext'

export default function Scope() {
  const { t, isRTL } = useLang()
  
  return (
    <div className="container" style={{padding:'60px 0'}}>
      <div className="card" style={{padding:'60px', maxWidth:'900px', margin:'0 auto'}}>
        
        <h1 style={{fontSize:'3rem', marginBottom:'16px', textAlign: isRTL ? 'right' : 'left'}}>{t.scope.title}</h1>
        <p style={{fontSize:'1.15rem', color:'var(--muted)', marginBottom:'48px', textAlign: isRTL ? 'right' : 'left'}}>
          {t.scope.intro}
        </p>
        
        {/* Applicable Cases */}
        <section style={{marginBottom:'48px', textAlign: isRTL ? 'right' : 'left'}}>
          <h2 style={{fontSize:'2rem', marginBottom:'20px', color:'var(--accent2)'}}>{t.scope.applicable}</h2>
          <p style={{fontSize:'1.1rem', marginBottom:'20px'}}>{t.scope.applicableText}</p>
          <ul style={{fontSize:'1.05rem', lineHeight:'1.9', paddingRight: isRTL ? '24px' : '0', paddingLeft: isRTL ? '0' : '24px'}}>
            {t.scope.applicableList.map((item, idx) => (
              <li key={idx} style={{marginBottom:'12px'}}>{item}</li>
            ))}
          </ul>
        </section>
        
        {/* Not Applicable Cases */}
        <section style={{marginBottom:'48px', textAlign: isRTL ? 'right' : 'left'}}>
          <h2 style={{fontSize:'2rem', marginBottom:'20px', color:'var(--danger)'}}>{t.scope.notApplicable}</h2>
          <p style={{fontSize:'1.1rem', marginBottom:'20px'}}>{t.scope.notApplicableText}</p>
          <ul style={{fontSize:'1.05rem', lineHeight:'1.9', paddingRight: isRTL ? '24px' : '0', paddingLeft: isRTL ? '0' : '24px'}}>
            {t.scope.notApplicableList.map((item, idx) => (
              <li key={idx} style={{marginBottom:'12px'}}>{item}</li>
            ))}
          </ul>
        </section>
        
        {/* Requirements */}
        <section style={{marginBottom:'48px', textAlign: isRTL ? 'right' : 'left'}}>
          <h2 style={{fontSize:'2rem', marginBottom:'20px'}}>{t.scope.requirements}</h2>
          <p style={{fontSize:'1.1rem', marginBottom:'20px'}}>{t.scope.requirementsText}</p>
          <ul style={{fontSize:'1.05rem', lineHeight:'1.9', paddingRight: isRTL ? '24px' : '0', paddingLeft: isRTL ? '0' : '24px'}}>
            {t.scope.requirementsList.map((item, idx) => (
              <li key={idx} style={{marginBottom:'12px'}}>{item}</li>
            ))}
          </ul>
        </section>
        
        {/* Disclaimer */}
        <section style={{backgroundColor:'rgba(239,68,68,0.1)', padding:'32px', borderRadius:'16px', border:'1px solid rgba(239,68,68,0.3)', textAlign: isRTL ? 'right' : 'left'}}>
          <h2 style={{fontSize:'1.8rem', marginBottom:'20px', color:'var(--danger)'}}>{t.scope.disclaimer}</h2>
          <p style={{fontSize:'1.05rem', marginBottom:'16px'}}>{t.scope.disclaimerText}</p>
          <ul style={{fontSize:'1rem', lineHeight:'1.8', paddingRight: isRTL ? '24px' : '0', paddingLeft: isRTL ? '0' : '24px'}}>
            {t.scope.disclaimerList.map((item, idx) => (
              <li key={idx} style={{marginBottom:'10px'}}>{item}</li>
            ))}
          </ul>
        </section>
        
      </div>
    </div>
  )
}
