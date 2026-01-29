import React from 'react'
import { useLang } from '../context/LangContext'

export default function Privacy() {
  const { t, isRTL } = useLang()
  
  return (
    <div className="container" style={{padding:'60px 0'}}>
      <div className="card" style={{padding:'60px', maxWidth:'900px', margin:'0 auto'}}>
        
        <h1 style={{fontSize:'3rem', marginBottom:'16px', textAlign: isRTL ? 'right' : 'left'}}>{t.privacy.title}</h1>
        <p style={{fontSize:'1.15rem', color:'var(--muted)', marginBottom:'48px', textAlign: isRTL ? 'right' : 'left'}}>
          {t.privacy.intro}
        </p>
        
        {/* Data Collection */}
        <section style={{marginBottom:'40px', textAlign: isRTL ? 'right' : 'left'}}>
          <h2 style={{fontSize:'2rem', marginBottom:'20px', color:'var(--accent2)'}}>{t.privacy.dataCollection}</h2>
          <p style={{fontSize:'1.1rem', lineHeight:'1.9'}}>{t.privacy.dataCollectionText}</p>
        </section>
        
        {/* Local Processing */}
        <section style={{marginBottom:'40px', textAlign: isRTL ? 'right' : 'left'}}>
          <h2 style={{fontSize:'2rem', marginBottom:'20px'}}>{t.privacy.localProcessing}</h2>
          <p style={{fontSize:'1.1rem', lineHeight:'1.9'}}>{t.privacy.localProcessingText}</p>
        </section>
        
        {/* Cookies */}
        <section style={{marginBottom:'40px', textAlign: isRTL ? 'right' : 'left'}}>
          <h2 style={{fontSize:'2rem', marginBottom:'20px'}}>{t.privacy.cookies}</h2>
          <p style={{fontSize:'1.1rem', lineHeight:'1.9'}}>{t.privacy.cookiesText}</p>
        </section>
        
        {/* Analytics */}
        <section style={{marginBottom:'56px', textAlign: isRTL ? 'right' : 'left'}}>
          <h2 style={{fontSize:'2rem', marginBottom:'20px'}}>{t.privacy.analytics}</h2>
          <p style={{fontSize:'1.1rem', lineHeight:'1.9'}}>{t.privacy.analyticsText}</p>
        </section>
        
        {/* DISCLAIMER SECTION */}
        <div style={{
          marginTop: '60px',
          paddingTop: '60px',
          borderTop: '2px solid rgba(255,255,255,0.1)'
        }}>
          <h1 style={{fontSize:'2.8rem', marginBottom:'16px', textAlign: isRTL ? 'right' : 'left', color:'var(--danger)'}}>
            {t.privacy.disclaimer_section}
          </h1>
          
          <section style={{marginBottom:'40px', textAlign: isRTL ? 'right' : 'left'}}>
            <h2 style={{fontSize:'2rem', marginBottom:'20px'}}>{t.privacy.disclaimerTitle}</h2>
            <p style={{fontSize:'1.1rem', marginBottom:'28px', lineHeight:'1.9'}}>{t.privacy.disclaimerIntro}</p>
            
            <div style={{display:'grid', gap:'24px'}}>
              {t.privacy.disclaimerPoints.map((point, idx) => (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, rgba(239,68,68,0.08), rgba(234,179,8,0.05))',
                  padding: '24px',
                  borderRadius: '14px',
                  border: '1px solid rgba(239,68,68,0.2)'
                }}>
                  <h3 style={{fontSize:'1.3rem', marginBottom:'12px', color:'var(--danger)', fontWeight:'700'}}>
                    {point.title}
                  </h3>
                  <p style={{fontSize:'1.05rem', lineHeight:'1.8'}}>{point.text}</p>
                </div>
              ))}
            </div>
          </section>
          
          {/* Recommendations */}
          <section style={{
            backgroundColor:'rgba(34,197,94,0.08)', 
            padding:'32px', 
            borderRadius:'16px', 
            border:'1px solid rgba(34,197,94,0.2)',
            textAlign: isRTL ? 'right' : 'left'
          }}>
            <h2 style={{fontSize:'2rem', marginBottom:'20px', color:'var(--accent2)'}}>{t.privacy.recommendations}</h2>
            <p style={{fontSize:'1.05rem', marginBottom:'16px'}}>{t.privacy.recommendationsText}</p>
            <ul style={{fontSize:'1.05rem', lineHeight:'1.8', paddingRight: isRTL ? '24px' : '0', paddingLeft: isRTL ? '0' : '24px'}}>
              {t.privacy.recommendationsList.map((item, idx) => (
                <li key={idx} style={{marginBottom:'10px'}}>{item}</li>
              ))}
            </ul>
          </section>
          
          {/* Contact */}
          <section style={{marginTop:'40px', textAlign: isRTL ? 'right' : 'left'}}>
            <h2 style={{fontSize:'1.8rem', marginBottom:'16px'}}>{t.privacy.contact}</h2>
            <p style={{fontSize:'1.05rem', lineHeight:'1.8'}}>{t.privacy.contactText}</p>
          </section>
        </div>
        
      </div>
    </div>
  )
}
