import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Home() {
  useEffect(() => {
    // Smooth scroll handler
    const handleSmoothScroll = (e) => {
      const href = e.currentTarget.getAttribute('href')
      if (href && href.startsWith('#')) {
        e.preventDefault()
        const targetId = href.substring(1)
        const element = document.getElementById(targetId)
        if (element) {
          const offsetTop = element.offsetTop - 80
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          })
        }
      }
    }

    // Add smooth scroll to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]')
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll)
    })

    return () => {
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll)
      })
    }
  }, [])

  return (
    <>
      <Head>
        <title>Lakhe Wale Jewellers - Premium Jewellery in Jagraon</title>
        <meta name="description" content="Lakhe Wale Jewellers - Your trusted jewellery destination at Jhansi Rani Chowk, Jagraon. Premium gold, diamond, and traditional jewellery collections." />
      </Head>
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-line">Lakhe Wale</span>
              <span className="title-line">Jewellers</span>
            </h1>
            <p className="hero-subtitle">Crafting Timeless Elegance Since Generations</p>
            <p className="hero-description">Discover our exquisite collection of premium gold, diamond, and traditional jewellery</p>
            <a href="#collections" className="cta-button">Explore Collections</a>
          </div>
        </div>
        <div className="scroll-indicator">
          <span></span>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About Us</h2>
            <div className="title-underline"></div>
          </div>
          <div className="about-content">
            <div className="about-text">
              <h3>Your Trusted Jewellery Partner</h3>
              <p>Lakhe Wale Jewellers has been serving the community of Jagraon with exceptional craftsmanship and authentic designs for generations. Located at the heart of Jhansi Rani Chowk, we take pride in offering the finest collection of gold, diamond, and traditional jewellery.</p>
              <p>Our commitment to quality, transparency, and customer satisfaction has made us a trusted name in the jewellery industry. Every piece we create is a testament to our dedication to excellence and timeless beauty.</p>
              <div className="features">
                <div className="feature-item">
                  <div className="feature-icon"></div>
                  <h4>Authentic Designs</h4>
                  <p>Traditional and modern designs</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon"></div>
                  <h4>Premium Quality</h4>
                  <p>Certified gold and diamonds</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon"></div>
                  <h4>Trusted Legacy</h4>
                  <p>Generations of expertise</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <Image
                  src="https://images.unsplash.com/photo-1611591437281-8bf2e22b4b6e?w=800&h=600&fit=crop&q=80"
                  alt="Traditional Indian Gold Jewellery"
                  className="about-img"
                  width={800}
                  height={600}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section id="collections" className="collections">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Collections</h2>
            <div className="title-underline"></div>
            <p className="section-subtitle">Explore our exquisite range of jewellery</p>
          </div>
          <div className="collections-grid">
            <div className="collection-card">
              <div className="card-image">
                <Image
                  src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop&q=80"
                  alt="Gold Jewellery Collection"
                  className="collection-img"
                  width={600}
                  height={400}
                />
                <div className="card-overlay"></div>
              </div>
              <div className="card-content">
                <h3>Gold Jewellery</h3>
                <p>Traditional and contemporary gold designs crafted with precision</p>
              </div>
            </div>
            <div className="collection-card">
              <div className="card-image">
                <Image
                  src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&h=400&fit=crop&q=80"
                  alt="Diamond Jewellery Collection"
                  className="collection-img"
                  width={600}
                  height={400}
                />
                <div className="card-overlay"></div>
              </div>
              <div className="card-content">
                <h3>Diamond Collection</h3>
                <p>Stunning diamond pieces for special occasions</p>
              </div>
            </div>
            <div className="collection-card">
              <div className="card-image">
                <Image
                  src="https://images.unsplash.com/photo-1611591437281-8bf2e22b4b6e?w=600&h=400&fit=crop&q=80"
                  alt="Traditional Indian Jewellery Sets"
                  className="collection-img"
                  width={600}
                  height={400}
                />
                <div className="card-overlay"></div>
              </div>
              <div className="card-content">
                <h3>Traditional Sets</h3>
                <p>Authentic traditional jewellery sets</p>
              </div>
            </div>
            <div className="collection-card">
              <div className="card-image">
                <Image
                  src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=400&fit=crop&q=80"
                  alt="Custom Jewellery Designs"
                  className="collection-img"
                  width={600}
                  height={400}
                />
                <div className="card-overlay"></div>
              </div>
              <div className="card-content">
                <h3>Custom Designs</h3>
                <p>Bespoke jewellery crafted to your preferences</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Visit Us</h2>
            <div className="title-underline"></div>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <div className="info-card">
                <div className="info-icon"></div>
                <h3>Location</h3>
                <p>Jhansi Rani Chowk<br />Jagraon, Punjab</p>
              </div>
              <div className="info-card">
                <div className="info-icon"></div>
                <h3>Business Hours</h3>
                <p>Monday - Saturday<br />10:00 AM - 8:00 PM</p>
              </div>
              <div className="info-card">
                <div className="info-icon"></div>
                <h3>Contact</h3>
                <p>
                  <a href="tel:+919888834000" style={{ color: 'var(--primary-gold)', textDecoration: 'none', fontWeight: 600, fontSize: '1.1rem' }}>
                    +91 98888 34000
                  </a>
                  <br />
                  <span style={{ fontSize: '0.9rem', color: '#666' }}>Call us for inquiries</span>
                </p>
              </div>
            </div>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d856.8095876674912!2d75.47571149999999!3d30.795949499999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39109d838fbad377%3A0xa5c4c8dbac3483a3!2sLakhe%20Wale%20Jewellers%20Babu%20Ram%20Jagan%20Nath!5e0!3m2!1sen!2sin!4v1764433005579!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '15px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lakhe Wale Jewellers Location"
              ></iframe>
              <div className="map-overlay">
                <a href="https://share.google/rfrkse5nVBEbjS7oi" target="_blank" rel="noopener noreferrer" className="map-link">
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

