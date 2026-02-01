import React from 'react'
import { NavLink } from 'react-router-dom'
import { useLang } from '../context/LangContext'

export default function Header() {
  const { t, lang, setLang } = useLang()

  const navItems = [
    { to: '/', label: t.nav.home },
    { to: '/assessment', label: t.nav.assessment },
    { to: '/how', label: t.nav.how },
    { to: '/method', label: t.nav.method },
    { to: '/about', label: t.nav.about },
    { to: '/privacy', label: t.footer.privacy },
    { to: '/disclaimer', label: t.footer.disclaimer },
  ]

  return (
    <header className="header">
      <div className="container headerInner">
        <div className="brandWrap" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
          <div className="appName">{t.appName}</div>
          <div className="bismillahTitle">{t.bismillah}</div>
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
  )
}
