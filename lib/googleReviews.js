// Google Reviews Configuration
// Replace these values with your actual Google Business information

export const GOOGLE_REVIEWS_CONFIG = {
  // Option 1: Using Google Places API (requires API key)
  // Get your Place ID from: https://developers.google.com/maps/documentation/places/web-service/place-id
  // Get API key from: https://console.cloud.google.com/google/maps-apis
  PLACE_ID: '', // e.g., 'ChIJN1t_tDeuEmsRUsoyG83frY4'
  API_KEY: '', // Your Google Places API key
  
  // Option 2: Using Google My Business API (requires OAuth)
  // This requires server-side implementation
  
  // Option 3: Manual reviews (fallback)
  // You can manually add reviews here if API is not available
  MANUAL_REVIEWS: [
    {
      author: 'Customer Review',
      rating: 5,
      text: 'Excellent service and beautiful jewellery collection! Highly recommended.',
      time: Date.now(),
    },
  ],
}

// Fetch reviews from Google Places API
export async function fetchGoogleReviews() {
  const { PLACE_ID, API_KEY, MANUAL_REVIEWS } = GOOGLE_REVIEWS_CONFIG

  // If no API credentials, return manual reviews
  if (!PLACE_ID || !API_KEY) {
    console.warn('Google Places API not configured. Using manual reviews.')
    return MANUAL_REVIEWS.filter(review => review.rating >= 4)
  }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,reviews&key=${API_KEY}`
    )

    if (!response.ok) {
      throw new Error('Failed to fetch reviews')
    }

    const data = await response.json()

    if (data.status === 'OK' && data.result && data.result.reviews) {
      // Filter reviews with 4+ stars
      const filteredReviews = data.result.reviews
        .filter(review => review.rating >= 4)
        .map(review => ({
          author: review.author_name,
          rating: review.rating,
          text: review.text,
          time: review.time,
          profilePhoto: review.profile_photo_url || null,
        }))

      return filteredReviews.length > 0 ? filteredReviews : MANUAL_REVIEWS.filter(r => r.rating >= 4)
    } else {
      throw new Error(data.error_message || 'Failed to fetch reviews')
    }
  } catch (error) {
    console.error('Error fetching Google reviews:', error)
    // Return manual reviews as fallback
    return MANUAL_REVIEWS.filter(review => review.rating >= 4)
  }
}


