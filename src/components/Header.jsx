import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/assessment', label: 'Start Inspection' },
    { to: '/how', label: 'How it works' },
    { to: '/method', label: 'Methodology' },
    { to: '/about', label: 'About Tool' },
    { to: '/privacy', label: 'Privacy' },
    { to: '/disclaimer', label: 'Disclaimer' },
  ]

  return (
    <header className="header">

      <div className="container headerInner">

        {/* Brand */}

        <div className="brand">
          <div className="name">JSRAI</div>
        </div>

        {/* Nav */}

        <nav className="nav">

          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {item.label}
            </NavLink>
          ))}

        </nav>

      </div>

    </header>
  )
}