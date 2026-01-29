import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useLang } from '../context/LangContext'

export default function Header() {
  const { t, lang, setLang } = useLang()
  const loc = useLocation()

  const navItems = [
    { to: '/', label: t.nav.home },
    { to: '/how', label: t.nav.how },
    { to: '/method', label: t.nav.method },
    { to: '/assessment', label: t.nav.assessment },
    { to: '/about', label: t.nav.about },
    { to: '/scope', label: t.nav.scope },
    { to: '/limitations', label: t.nav.limitations },
  ]

  return (
    <>
      {/* Bismillah Banner */}
      <div style={{
        textAlign: 'center',
        padding: '16px 0',
        background: 'linear-gradient(135deg, rgba(124,58,237,0.15), rgba(34,197,94,0.12))',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        fontFamily: 'Georgia, serif',
        fontSize: '1.35rem',
        fontWeight: '500',
        letterSpacing: '0.5px',
        color: 'var(--text)'
      }}>
        {t.bismillah}
      </div>
      
      <header className="header">
        <div className="container headerInner">
          <div className="brand">
            <div className="name">{t.appName}</div>
            <div className="tag" style={{fontSize: '0.82rem', marginTop: '4px'}}>{t.jsraiFullName}</div>
          </div>

          <nav className="nav" aria-label="Primary">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {item.label}
              </NavLink>
            ))}
            <div className="langSwitch" aria-label="Language switcher">
              <span>{t.languageLabel}:</span>
              <select value={lang} onChange={(e) => setLang(e.target.value)}>
                <option value="ar">AR</option>
                <option value="en">EN</option>
              </select>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
