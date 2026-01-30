import React from 'react'
import { NavLink } from 'react-router-dom'
import { useLang } from '../context/LangContext'

export default function Header() {
  const { t, lang, setLang } = useLang()

  const navItems = [
    { to: '/', label: t.nav.home },
    { to: '/how', label: t.nav.how },
    { to: '/method', label: t.nav.method },
    { to: '/assessment', label: t.nav.assessment },
    { to: '/about', label: t.nav.about },
  ]

  return (
    <header className="header heroHeader">
      <div className="heroOverlay"></div>

      <div className="container headerInner heroContent">

        <div className="brand heroBrand">
          <div className="bismillah">{t.bismillah}</div>

          <h1 className="name">
            أداة تقييم سلامة المنشآت <span>(JSRAI)</span>
          </h1>

          <p className="tagline">
            Jordan Structural Risk Assessment Intelligence <br />
            أداة هندسية لتقييم السلامة الإنشائية للمباني وفق كود
            <strong> ACI 318</strong> ومع الأخذ بعين الاعتبار
            <strong> التأثيرات الزلزالية المعتمدة في الأردن</strong>
          </p>
        </div>

        <nav className="nav heroNav" aria-label="Primary">
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
