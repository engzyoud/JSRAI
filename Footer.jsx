import React from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../context/LangContext'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer className="footer">
      <div className="container card2" style={{ padding: '22px' }}>
        <div className="footerTop">
          <div>
            <div style={{ fontWeight: 900 }}>{t.appName}</div>
            <div className="smallNote">{t.bismillah}</div>
            <div className="smallNote">{t.about.developed}</div>
          </div>
          <div className="footerLinks">
            <Link to="/privacy">{t.footer.privacy}</Link>
            <Link to="/disclaimer">{t.footer.disclaimer}</Link>
          </div>
        </div>
        <div className="smallNote" style={{ marginTop: 14 }}>
          {t.footer.rights}
        </div>
      </div>
    </footer>
  )
}
