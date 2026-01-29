import React from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../context/LangContext'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer className="footer">
      <div className="container card2" style={{ padding: '32px' }}>
        <div className="footerTop">
          <div>
            <div style={{ fontWeight: 900, fontSize: '1.1rem', marginBottom: '8px' }}>{t.appName}</div>
            <div className="smallNote" style={{ marginBottom: '4px' }}>{t.jsraiFullName}</div>
            <div className="smallNote">Jordan Structural Risk Assessment Index</div>
          </div>
          <div className="footerLinks">
            <Link to="/about">{t.footer.about}</Link>
            <Link to="/privacy">{t.footer.privacy}</Link>
          </div>
        </div>
        <div style={{ 
          marginTop: 24, 
          paddingTop: 20, 
          borderTop: '1px solid rgba(255,255,255,0.08)',
          textAlign: 'center',
          fontSize: '1.05rem',
          fontWeight: '600',
          letterSpacing: '0.5px',
          color: 'var(--accent2)'
        }}>
          {t.footer.developedBy}
        </div>
        <div className="smallNote" style={{ marginTop: 12, textAlign: 'center' }}>
          {t.footer.year} {t.footer.allRightsReserved}
        </div>
      </div>
    </footer>
  )
}
