import { useState, useEffect } from 'react'

export default function LanguageSwitcher({ onLanguageChange }) {
  const [currentLanguage, setCurrentLanguage] = useState('en')

  useEffect(() => {
    // Load saved language preference
    const savedLanguage = typeof window !== 'undefined' 
      ? localStorage.getItem('blogLanguage') || 'en'
      : 'en'
    setCurrentLanguage(savedLanguage)
    if (onLanguageChange) {
      onLanguageChange(savedLanguage)
    }
  }, [onLanguageChange])

  const handleLanguageChange = (e) => {
    const newLanguage = e.target.value
    setCurrentLanguage(newLanguage)
    if (typeof window !== 'undefined') {
      localStorage.setItem('blogLanguage', newLanguage)
    }
    if (onLanguageChange) {
      onLanguageChange(newLanguage)
    }
  }

  return (
    <div className="language-switcher">
      <select 
        id="languageSelector" 
        value={currentLanguage}
        onChange={handleLanguageChange}
      >
        <option value="en">English</option>
        <option value="hi">हिंदी</option>
        <option value="pa">ਪੰਜਾਬੀ</option>
      </select>
    </div>
  )
}

