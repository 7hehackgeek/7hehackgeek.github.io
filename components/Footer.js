import Link from 'next/link'

export default function Footer() {
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
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Lakhe Wale Jewellers</h3>
            <p>Crafting timeless elegance with authentic designs and premium quality.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')}>
                  About
                </a>
              </li>
              <li>
                <a href="#collections" onClick={(e) => handleSmoothScroll(e, 'collections')}>
                  Collections
                </a>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Location</h4>
            <p>Jhansi Rani Chowk<br />Jagraon, Punjab</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Lakhe Wale Jewellers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

