import { useState, useEffect } from 'react'
import { fetchGoogleReviews } from '../lib/googleReviews'

export default function GoogleReviewsTicker() {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    loadReviews()
  }, [])

  const loadReviews = async () => {
    try {
      const fetchedReviews = await fetchGoogleReviews()
      if (fetchedReviews && fetchedReviews.length > 0) {
        setReviews(fetchedReviews)
      } else {
        setError('No reviews available')
      }
    } catch (err) {
      console.error('Error loading reviews:', err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  // Duplicate reviews for seamless loop
  const displayReviews = [...reviews, ...reviews]

  if (loading) {
    return (
      <section className="reviews-ticker">
        <div className="ticker-container">
          <div className="ticker-label">Customer Reviews</div>
          <div className="ticker-content">
            <div className="ticker-item">Loading reviews...</div>
          </div>
        </div>
      </section>
    )
  }

  if (error && reviews.length === 0) {
    return null // Don't show ticker if there's an error and no fallback reviews
  }

  return (
    <section className="reviews-ticker">
      <div className="ticker-container">
        <div className="ticker-label">
          <span>⭐</span> Customer Reviews
        </div>
        <div className="ticker-wrapper">
          <div className="ticker-content">
            {displayReviews.map((review, index) => (
              <div key={`${review.time}-${index}`} className="ticker-item">
                <div className="review-stars">
                  {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                </div>
                <div className="review-text">"{review.text}"</div>
                <div className="review-author">— {review.author}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

