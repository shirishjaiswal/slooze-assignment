'use client'
import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext({
  locale: 'en',
  toggleLanguage: (locale: string) => {},
})

import { ReactNode } from 'react'

export const LanguageProvider = ({ children }: { children: ReactNode }) => {

    const [lang, setLang] = useState('en')

    const toggleLanguage = (locale: string) => {
        setLang((prevLang) => {
            const newLang = prevLang === 'en' ? 'es' : 'en'
            return newLang
        })
    }

  return (
    <LanguageContext.Provider value={{ locale: lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
