import React, { createContext, useContext, useMemo, useState, useEffect } from 'react'
import { translations } from '../data/translations'

const LangContext = createContext()

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('jsrai_lang') || 'ar'
  })

  useEffect(() => {
    localStorage.setItem('jsrai_lang', lang)
    document.documentElement.setAttribute('lang', lang)
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr')
  }, [lang])

  const value = useMemo(() => {
    const t = translations[lang] || translations.ar
    return { lang, setLang, t }
  }, [lang])

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}
