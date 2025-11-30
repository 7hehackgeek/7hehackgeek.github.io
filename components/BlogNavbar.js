import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LanguageSwitcher from './LanguageSwitcher'

export default function BlogNavbar({ onLanguageChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo">
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
              <Image 
                src="/Assets/logo.svg" 
                alt="Lakhe Wale Jewellers Logo" 
                className="logo-img"
                width={50}
                height={50}
              />
              <div className="logo-text-wrapper">
                <span className="logo-text">Lakhe Wale</span>
                <span className="logo-subtitle">Jewellers</span>
              </div>
            </Link>
          </div>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="navMenu">
            <li>
              <Link href="/#home" className="nav-link" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/#about" className="nav-link" onClick={handleLinkClick}>
                About
              </Link>
            </li>
            <li>
              <Link href="/#collections" className="nav-link" onClick={handleLinkClick}>
                Collections
              </Link>
            </li>
            <li>
              <Link href="/blog" className="nav-link" onClick={handleLinkClick}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="nav-link" onClick={handleLinkClick}>
                Contact
              </Link>
            </li>
            <li>
              <LanguageSwitcher onLanguageChange={onLanguageChange} />
            </li>
          </ul>
          <div 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  )
}

