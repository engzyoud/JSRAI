import React from 'react'
import { useLang } from '../context/LangContext'

export default function Limitations() {
  const { t, isRTL } = useLang()
  
  return (
    <div className="container" style={{padding:'60px 0'}}>
      <div className="card" style={{padding:'60px', maxWidth:'900px', margin:'0 auto'}}>
        
        <h1 style={{fontSize:'3rem', marginBottom:'16px', textAlign: isRTL ? 'right' : 'left'}}>{t.limitations.title}</h1>
        <p style={{fontSize:'1.15rem', color:'var(--muted)', marginBottom:'48px', textAlign: isRTL ? 'right' : 'left'}}>
          {t.limitations.intro}
        </p>
        
        {/* Technical Limitations */}
        <section style={{marginBottom:'40px', textAlign: isRTL ? 'right' : 'left'}}>
          <h2 style={{fontSize:'2rem', marginBottom:'20px'}}>{t.limitations.technical}</h2>
          <ul style={{fontSize:'1.05rem', lineHeight:'1.9', paddingRight: isRTL ? '24px' : '0', paddingLeft: isRTL ? '0' : '24px'}}>
            {t.limitations.technicalList.map((item, idx) => (
              <li key={idx} style={{marginBottom:'12px'}}>{item}</li>
            ))}
          </ul>
        </section>
        
        {/* Professional Limitations */}
        <section style={{marginBottom:'40px', textAlign: isRTL ? 'right' : 'left'}}>
          <h2 style={{fontSize:'2rem', marginBottom:'20px'}}>{t.limitations.professional}</h2>
          <ul style={{fontSize:'1.05rem', lineHeight:'1.9', paddingRight: isRTL ? '24px' : '0', paddingLeft: isRTL ? '0' : '24px'}}>
            {t.limitations.professionalList.map((item, idx) => (
              <li key={idx} style={{marginBottom:'12px'}}>{item}</li>
            ))}
          </ul>
        </section>
        
        {/* Contextual Limitations */}
        <section style={{marginBottom:'40px', textAlign: isRTL ? 'right' : 'left'}}>
          <h2 style={{fontSize:'2rem', marginBottom:'20px'}}>{t.limitations.contextual}</h2>
          <ul style={{fontSize:'1.05rem', lineHeight:'1.9', paddingRight: isRTL ? '24px' : '0', paddingLeft: isRTL ? '0' : '24px'}}>
            {t.limitations.contextualList.map((item, idx) => (
              <li key={idx} style={{marginBottom:'12px'}}>{item}</li>
            ))}
          </ul>
        </section>
        
        {/* When to Seek Help */}
        <section style={{backgroundColor:'rgba(234,179,8,0.1)', padding:'32px', borderRadius:'16px', border:'1px solid rgba(234,179,8,0.3)', textAlign: isRTL ? 'right' : 'left'}}>
          <h2 style={{fontSize:'2rem', marginBottom:'20px', color:'#EAB308'}}>{t.limitations.whenToSeek}</h2>
          <p style={{fontSize:'1.1rem', marginBottom:'20px'}}>{t.limitations.seekHelpText}</p>
          <ul style={{fontSize:'1.05rem', lineHeight:'1.8', paddingRight: isRTL ? '24px' : '0', paddingLeft: isRTL ? '0' : '24px'}}>
            {t.limitations.seekHelpList.map((item, idx) => (
              <li key={idx} style={{marginBottom:'12px', fontWeight:'500'}}>{item}</li>
            ))}
          </ul>
        </section>
        
      </div>
    </div>
  )
}
