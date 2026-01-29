import React from 'react'
import { useLang } from '../context/LangContext'

export default function HowItWorks() {
  const { t, isRTL } = useLang()
  
  return (
    <div className="container" style={{padding:'60px 0'}}>
      <div className="pageHeader" style={{textAlign: isRTL ? 'right' : 'left'}}>
        <h1 style={{fontSize:'3rem'}}>{t.how.title}</h1>
        <p style={{fontSize:'1.2rem', maxWidth:'800px'}}>{t.how.intro}</p>
      </div>

      <div className="card" style={{padding:'48px', marginBottom:'32px'}}>
        <div style={{textAlign: isRTL ? 'right' : 'left'}}>
          <h2 style={{fontSize:'2.2rem', marginBottom:'20px', color:'var(--accent)'}}>{t.how.whatIsJSRAI}</h2>
          <p style={{fontSize:'1.1rem', marginBottom:'24px', lineHeight:'1.8'}}>{t.how.jsraiExplanation}</p>
          <ul style={{fontSize:'1.05rem', lineHeight:'1.9', paddingRight: isRTL ? '28px' : '0', paddingLeft: isRTL ? '0' : '28px'}}>
            {t.how.jsraiFeatures.map((feature, idx) => (
              <li key={idx} style={{marginBottom:'12px'}}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card" style={{padding:'48px', marginBottom:'32px'}}>
        <div style={{textAlign: isRTL ? 'right' : 'left'}}>
          <h2 style={{fontSize:'2.2rem', marginBottom:'20px', color:'var(--accent2)'}}>{t.how.purpose}</h2>
          <p style={{fontSize:'1.1rem', marginBottom:'24px', lineHeight:'1.8'}}>{t.how.purposeText}</p>
          <ul style={{fontSize:'1.05rem', lineHeight:'1.9', paddingRight: isRTL ? '28px' : '0', paddingLeft: isRTL ? '0' : '28px'}}>
            {t.how.purposePoints.map((point, idx) => (
              <li key={idx} style={{marginBottom:'12px'}}>{point}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card" style={{padding:'48px', marginBottom:'32px'}}>
        <div style={{textAlign: isRTL ? 'right' : 'left'}}>
          <h2 style={{fontSize:'2.2rem', marginBottom:'20px'}}>{t.how.howItWorks}</h2>
          <p style={{fontSize:'1.1rem', marginBottom:'24px', lineHeight:'1.8'}}>{t.how.workingText}</p>
          <ul style={{fontSize:'1.05rem', lineHeight:'1.9', paddingRight: isRTL ? '28px' : '0', paddingLeft: isRTL ? '0' : '28px'}}>
            {t.how.workingPoints.map((point, idx) => (
              <li key={idx} style={{marginBottom:'12px'}}>{point}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card" style={{
        padding:'48px', 
        background: 'linear-gradient(135deg, rgba(239,68,68,0.12), rgba(234,179,8,0.08))',
        border: '2px solid rgba(239,68,68,0.3)'
      }}>
        <div style={{textAlign: isRTL ? 'right' : 'left'}}>
          <h2 style={{fontSize:'2rem', marginBottom:'20px', color:'var(--danger)'}}>{t.how.importantNote}</h2>
          <p style={{fontSize:'1.1rem', marginBottom:'20px', lineHeight:'1.8'}}>{t.how.noteText}</p>
          <ul style={{fontSize:'1.05rem', lineHeight:'1.8', paddingRight: isRTL ? '28px' : '0', paddingLeft: isRTL ? '0' : '28px'}}>
            {t.how.notePoints.map((point, idx) => (
              <li key={idx} style={{marginBottom:'10px', fontWeight:'500'}}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
