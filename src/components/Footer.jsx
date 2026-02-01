import React from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../context/LangContext'

export default function Footer() {

  const { t, lang } = useLang()

  return (
    <footer className="footer">

      <div className="container card2" style={{ padding: 22 }}>

        <div className="footerTop">

          <div>
            <div style={{ fontWeight: 900 }}>
              {t.appName}
            </div>

            <div className="smallNote">
              {lang === 'ar'
                ? 'أداة فحص إنشائي مبدئي'
                : 'Preliminary Structural Check Tool'}
            </div>
          </div>

          <div className="footerLinks">
            <Link to="/privacy">{t.nav.privacy}</Link>
            <Link to="/disclaimer">{t.nav.disclaimer}</Link>
          </div>

        </div>

        <div className="smallNote" style={{ marginTop: 14 }}>
          © JSRAI — Preliminary Engineering Indicator
        </div>

      </div>

    </footer>
  )
}
