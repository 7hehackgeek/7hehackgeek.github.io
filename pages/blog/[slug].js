import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import BlogNavbar from '../../components/BlogNavbar'
import Footer from '../../components/Footer'
import translations from '../../lib/translations'
import { getBlogPost } from '../../lib/blogPosts'

export default function BlogPost() {
  const router = useRouter()
  const { slug } = router.query
  const [language, setLanguage] = useState('en')
  const [post, setPost] = useState(null)
  
  const t = translations[language] || translations.en

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('blogLanguage') || 'en'
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    if (slug) {
      const postData = getBlogPost(slug)
      setPost(postData)
    }
  }, [slug])

  if (!post) {
    return <div>Loading...</div>
  }

  const titleKey = `post${post.contentKeys[0].replace('post', '').replace('Intro', '')}Title`
  const titleKeyNum = post.contentKeys[0].match(/\d+/)?.[0] || '1'
  const actualTitleKey = `post${titleKeyNum}Title`

  const renderContent = () => {
    if (slug === 'why-jewellery-gets-black') {
      return (
        <div className="blog-post-content">
          <p className="blog-intro">{t.post1Intro}</p>
          <div className="blog-details">
            <h4>{t.post1SilverTitle}</h4>
            <p>{t.post1SilverText}</p>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: t.post1Humidity }}></li>
              <li dangerouslySetInnerHTML={{ __html: t.post1Pollution }}></li>
              <li dangerouslySetInnerHTML={{ __html: t.post1Chemicals }}></li>
              <li dangerouslySetInnerHTML={{ __html: t.post1Storage }}></li>
            </ul>
            <h4>{t.post1GoldTitle}</h4>
            <p>{t.post1GoldText}</p>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: t.post1Alloy }}></li>
              <li dangerouslySetInnerHTML={{ __html: t.post1Reactions }}></li>
              <li dangerouslySetInnerHTML={{ __html: t.post1Oxidation }}></li>
            </ul>
            <h4>{t.post1PreventionTitle}</h4>
            <ul>
              <li>{t.post1Tip1}</li>
              <li>{t.post1Tip2}</li>
              <li>{t.post1Tip3}</li>
              <li>{t.post1Tip4}</li>
            </ul>
          </div>
        </div>
      )
    } else if (slug === 'why-22k-instead-of-24k') {
      return (
        <div className="blog-post-content">
          <p className="blog-intro">{t.post2Intro}</p>
          <div className="blog-details">
            <h4>{t.post2KaratTitle}</h4>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: t.post2K24 }}></li>
              <li dangerouslySetInnerHTML={{ __html: t.post2K22 }}></li>
              <li dangerouslySetInnerHTML={{ __html: t.post2K18 }}></li>
              <li dangerouslySetInnerHTML={{ __html: t.post2K14 }}></li>
            </ul>
            <h4>{t.post2WhyTitle}</h4>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: t.post2Durability }}></li>
              <li dangerouslySetInnerHTML={{ __html: t.post2Wearability }}></li>
              <li dangerouslySetInnerHTML={{ __html: t.post2Design }}></li>
              <li dangerouslySetInnerHTML={{ __html: t.post2Value }}></li>
              <li dangerouslySetInnerHTML={{ __html: t.post2Cultural }}></li>
            </ul>
            <h4>{t.post2WhenTitle}</h4>
            <p>{t.post2WhenText}</p>
          </div>
        </div>
      )
    } else if (slug === 'why-diamond-jewellery-14k-18k') {
      return (
        <div className="blog-post-content">
          <p className="blog-intro">{t.post3Intro}</p>
          <div className="blog-details">
            <h4>{t.post3ScienceTitle}</h4>
            <p>{t.post3ScienceText}</p>
            <h4>{t.post3WhyTitle}</h4>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: t.post3Secure }}></li>
              <li dangerouslySetInnerHTML={{ __html: t.post3Durability }}></li>
              <li dangerouslySetInnerHTML={{ __html: t.post3Versatility }}></li>
              <li dangerouslySetInnerHTML={{ __html: t.post3Scratch }}></li>
              <li>
                <span>{t.post3ColorTitle}</span>
                <ul>
                  <li dangerouslySetInnerHTML={{ __html: t.post3Yellow }}></li>
                  <li dangerouslySetInnerHTML={{ __html: t.post3White }}></li>
                  <li dangerouslySetInnerHTML={{ __html: t.post3Rose }}></li>
                </ul>
              </li>
            </ul>
            <h4>{t.post3CompareTitle}</h4>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: t.post3K14 }}></li>
              <li dangerouslySetInnerHTML={{ __html: t.post3K18 }}></li>
            </ul>
            <h4>{t.post3WhyNotTitle}</h4>
            <p>{t.post3WhyNotText}</p>
          </div>
        </div>
      )
    }
  }

  return (
    <>
      <Head>
        <title>{t[actualTitleKey]} - Lakhe Wale Jewellers</title>
        <meta name="description" content={t[post.contentKeys[0]]} />
      </Head>
      <BlogNavbar onLanguageChange={setLanguage} />
      
      <section className="blog-post" style={{ paddingTop: '120px' }}>
        <div className="container">
          <div className="blog-post-header">
            <Link href="/blog" style={{ color: 'var(--primary-gold)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block', fontWeight: 500 }}>
              {t.backToBlog}
            </Link>
            <div className="blog-post-image">
              <img
                src={post.image}
                alt={post.alt}
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
              />
            </div>
            <h1 className="blog-post-title">{t[actualTitleKey]}</h1>
            <div className="blog-meta">
              <span className="blog-date">{t.date}</span>
            </div>
          </div>
          {renderContent()}
          <div className="blog-post-navigation">
            <Link href="/blog" className="blog-nav-link">
              {t.backToAllPosts}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

