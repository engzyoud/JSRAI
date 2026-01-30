import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLang } from '../context/LangContext'

export default function Layout() {
  const { lang } = useLang()
  const isAr = (lang || 'ar') === 'ar'

  return (
    <div className={`appLayout ${isAr ? 'rtl' : 'ltr'}`}>
      <div className="bgPattern" />

      <Header />

      <main className="page">
        <div className="container">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  )
}
