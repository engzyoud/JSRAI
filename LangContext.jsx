import React, { createContext, useContext, useMemo, useState } from 'react'
import { translations } from '../data/translations'

const LangContext = createContext()

export function LangProvider({ children }) {
  const [lang, setLang] = useState('ar')

  const value = useMemo(() => {
    const t = translations[lang] || translations.ar
    return { lang, setLang, t }
  }, [lang])

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}
