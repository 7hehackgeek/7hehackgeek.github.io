import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
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

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
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
              <a href="#home" className="nav-link" onClick={(e) => handleSmoothScroll(e, 'home')}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link" onClick={(e) => handleSmoothScroll(e, 'about')}>
                About
              </a>
            </li>
            <li>
              <a href="#collections" className="nav-link" onClick={(e) => handleSmoothScroll(e, 'collections')}>
                Collections
              </a>
            </li>
            <li>
              <Link href="/blog" className="nav-link" onClick={handleLinkClick}>
                Blog
              </Link>
            </li>
            <li>
              <a href="#contact" className="nav-link" onClick={(e) => handleSmoothScroll(e, 'contact')}>
                Contact
              </a>
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

