import React from 'react'
import { useLang } from '../context/LangContext'

export default function About() {
  const { t, isRTL } = useLang()
  
  return (
    <div className="container" style={{padding:'60px 0'}}>
      <div className="card" style={{padding:'60px', maxWidth:'900px', margin:'0 auto'}}>
        
        <h1 style={{fontSize:'3rem', marginBottom:'16px', textAlign: isRTL ? 'right' : 'left'}}>{t.about.title}</h1>
        
        <section style={{marginBottom:'48px', textAlign: isRTL ? 'right' : 'left'}}>
          <h2 style={{fontSize:'2rem', marginBottom:'20px', color:'var(--accent)'}}>{t.about.overview}</h2>
          <p style={{fontSize:'1.1rem', lineHeight:'1.9'}}>{t.about.overviewText}</p>
        </section>
        
        <section style={{marginBottom:'48px', textAlign: isRTL ? 'right' : 'left'}}>
          <h2 style={{fontSize:'2rem', marginBottom:'20px'}}>{t.about.purpose}</h2>
          <p style={{fontSize:'1.1rem', marginBottom:'20px'}}>{t.about.purposeText}</p>
          <ul style={{fontSize:'1.05rem', lineHeight:'1.9', paddingRight: isRTL ? '24px' : '0', paddingLeft: isRTL ? '0' : '24px'}}>
            {t.about.purposeList.map((item, idx) => (
              <li key={idx} style={{marginBottom:'12px'}}>{item}</li>
            ))}
          </ul>
        </section>
        
        <section style={{marginBottom:'48px', textAlign: isRTL ? 'right' : 'left'}}>
          <h2 style={{fontSize:'2rem', marginBottom:'20px'}}>{t.about.target}</h2>
          <p style={{fontSize:'1.1rem', marginBottom:'20px'}}>{t.about.targetText}</p>
          <ul style={{fontSize:'1.05rem', lineHeight:'1.9', paddingRight: isRTL ? '24px' : '0', paddingLeft: isRTL ? '0' : '24px'}}>
            {t.about.targetList.map((item, idx) => (
              <li key={idx} style={{marginBottom:'12px'}}>{item}</li>
            ))}
          </ul>
        </section>
        
        <section style={{marginBottom:'48px', textAlign: isRTL ? 'right' : 'left'}}>
          <h2 style={{fontSize:'2rem', marginBottom:'20px', color:'var(--accent2)'}}>{t.about.methodology}</h2>
          <p style={{fontSize:'1.1rem', marginBottom:'20px'}}>{t.about.methodologyText}</p>
          <ul style={{fontSize:'1.05rem', lineHeight:'1.9', paddingRight: isRTL ? '24px' : '0', paddingLeft: isRTL ? '0' : '24px'}}>
            {t.about.methodologyList.map((item, idx) => (
              <li key={idx} style={{marginBottom:'12px', fontWeight:'500'}}>{item}</li>
            ))}
          </ul>
        </section>
        
        <section style={{marginBottom:'48px', textAlign: isRTL ? 'right' : 'left'}}>
          <h2 style={{fontSize:'2rem', marginBottom:'20px'}}>{t.about.features}</h2>
          <ul style={{fontSize:'1.05rem', lineHeight:'1.9', paddingRight: isRTL ? '24px' : '0', paddingLeft: isRTL ? '0' : '24px'}}>
            {t.about.featuresList.map((item, idx) => (
              <li key={idx} style={{marginBottom:'12px'}}>{item}</li>
            ))}
          </ul>
        </section>
        
        <section style={{
          backgroundColor:'rgba(239,68,68,0.1)', 
          padding:'32px', 
          borderRadius:'16px', 
          border:'1px solid rgba(239,68,68,0.3)',
          textAlign: isRTL ? 'right' : 'left'
        }}>
          <h2 style={{fontSize:'1.8rem', marginBottom:'20px', color:'var(--danger)'}}>{t.about.important}</h2>
          <ul style={{fontSize:'1.05rem', lineHeight:'1.8', paddingRight: isRTL ? '24px' : '0', paddingLeft: isRTL ? '0' : '24px'}}>
            {t.about.importantList.map((item, idx) => (
              <li key={idx} style={{marginBottom:'10px', fontWeight:'500'}}>{item}</li>
            ))}
          </ul>
        </section>
        
        <div style={{
          marginTop: '48px',
          padding: '24px',
          textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(124,58,237,0.12), rgba(34,197,94,0.08))',
          borderRadius: '16px',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div style={{fontSize:'0.95rem', color:'var(--muted)', marginBottom:'8px'}}>{t.about.developed}</div>
          <div style={{fontSize:'1.4rem', fontWeight:'700', color:'var(--accent2)'}}>{t.about.developer}</div>
        </div>
        
      </div>
    </div>
  )
}
