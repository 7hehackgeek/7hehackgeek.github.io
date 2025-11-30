import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import BlogNavbar from '../../components/BlogNavbar'
import Footer from '../../components/Footer'
import translations from '../../lib/translations'

export default function Blog() {
  const [language, setLanguage] = useState('en')
  const t = translations[language] || translations.en

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('blogLanguage') || 'en'
      setLanguage(savedLanguage)
    }
  }, [])

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage)
  }

  const blogPosts = [
    {
      slug: 'why-jewellery-gets-black',
      titleKey: 'post1Title',
      introKey: 'post1Intro',
      image: 'https://images.unsplash.com/photo-1603561596112-0a13211e0262?w=600&h=400&fit=crop&q=80',
      alt: 'Tarnished Gold and Silver Jewellery'
    },
    {
      slug: 'why-22k-instead-of-24k',
      titleKey: 'post2Title',
      introKey: 'post2Intro',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop&q=80',
      alt: '22K Gold Jewellery'
    },
    {
      slug: 'why-diamond-jewellery-14k-18k',
      titleKey: 'post3Title',
      introKey: 'post3Intro',
      image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&h=400&fit=crop&q=80',
      alt: 'Diamond Jewellery in Gold Settings'
    }
  ]

  return (
    <>
      <Head>
        <title>Blog - Lakhe Wale Jewellers</title>
        <meta name="description" content="Expert insights about jewellery care, craftsmanship, and maintenance from Lakhe Wale Jewellers." />
      </Head>
      <BlogNavbar onLanguageChange={handleLanguageChange} />
      
      <section className="blog" style={{ paddingTop: '120px' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t.blogTitle}</h2>
            <div className="title-underline"></div>
            <p className="section-subtitle">{t.blogSubtitle}</p>
          </div>
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.slug} className="blog-card">
                <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="blog-image">
                    <Image
                      src={post.image}
                      alt={post.alt}
                      className="blog-img"
                      width={600}
                      height={400}
                    />
                    <div className="blog-overlay"></div>
                  </div>
                  <div className="blog-content">
                    <h3>{t[post.titleKey]}</h3>
                    <div className="blog-meta">
                      <span className="blog-date">{t.date}</span>
                    </div>
                    <p>{t[post.introKey]}</p>
                    <div style={{ marginTop: '1rem' }}>
                      <span style={{ color: 'var(--primary-gold)', fontWeight: 600 }}>
                        {t.readMore}
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

