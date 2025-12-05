# Google Reviews Ticker Setup Guide

This guide will help you set up the Google Reviews ticker to fetch and display your actual Google reviews (4+ stars only).

## Option 1: Using Google Places API (Recommended)

### Step 1: Get Your Google Place ID

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your business: "Lakhe Wale Jewellers Jagraon"
3. Click on your business listing
4. Look at the URL - it will contain something like `place_id=ChIJ...`
5. Copy the Place ID (the long string after `place_id=`)

Alternatively:
- Go to [Google Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
- Search for your business and copy the Place ID

### Step 2: Get Google Places API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Places API**:
   - Go to "APIs & Services" > "Library"
   - Search for "Places API"
   - Click "Enable"
4. Create an API Key:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy your API key
5. **Important**: Restrict your API key:
   - Click on the API key to edit it
   - Under "API restrictions", select "Restrict key"
   - Choose "Places API" only
   - Under "Application restrictions", you can restrict by HTTP referrer (your website domain)

### Step 3: Configure the Reviews

1. Open `lib/googleReviews.js`
2. Replace the empty strings with your credentials:

```javascript
export const GOOGLE_REVIEWS_CONFIG = {
  PLACE_ID: 'YOUR_PLACE_ID_HERE', // e.g., 'ChIJN1t_tDeuEmsRUsoyG83frY4'
  API_KEY: 'YOUR_API_KEY_HERE',    // Your Google Places API key
  // ...
}
```

### Step 4: For Static Site Deployment (GitHub Pages)

Since this is a static site, you have two options:

#### Option A: Use Environment Variables (Build Time)

1. Create a `.env.local` file in the root directory:
```
NEXT_PUBLIC_GOOGLE_PLACE_ID=your_place_id_here
NEXT_PUBLIC_GOOGLE_PLACES_API_KEY=your_api_key_here
```

2. Update `lib/googleReviews.js` to use environment variables:
```javascript
export const GOOGLE_REVIEWS_CONFIG = {
  PLACE_ID: process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID || '',
  API_KEY: process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY || '',
  // ...
}
```

**Note**: For GitHub Pages, add these as GitHub Secrets and update your workflow to use them.

#### Option B: Manual Configuration (Recommended for Static Sites)

1. Edit `lib/googleReviews.js` directly with your credentials
2. The API key will be visible in the client-side code (this is acceptable for Places API with restrictions)

### Step 5: Test Locally

1. Run `npm run dev`
2. Check the browser console for any errors
3. Verify reviews are loading correctly

## Option 2: Manual Reviews (Fallback)

If you don't want to use the API, you can manually add reviews:

1. Open `lib/googleReviews.js`
2. Add your reviews to the `MANUAL_REVIEWS` array:

```javascript
MANUAL_REVIEWS: [
  {
    author: 'Customer Name',
    rating: 5,
    text: 'Your review text here...',
    time: Date.now(),
  },
  {
    author: 'Another Customer',
    rating: 5,
    text: 'Another review text...',
    time: Date.now(),
  },
  // Add more reviews...
],
```

## Troubleshooting

### Reviews Not Showing

1. **Check browser console** for errors
2. **Verify Place ID** is correct
3. **Check API key** is valid and has Places API enabled
4. **Ensure reviews exist** on your Google Business Profile
5. **Check API quotas** in Google Cloud Console

### CORS Errors

If you see CORS errors, you may need to:
- Use a proxy server
- Or use the manual reviews option

### API Key Restrictions

Make sure your API key restrictions allow requests from:
- Your domain (for production)
- `localhost` (for development)

## Security Notes

⚠️ **Important**: 
- API keys in client-side code are visible to users
- Always restrict your API key by:
  - Limiting to specific APIs (Places API only)
  - Restricting by HTTP referrer (your website domain)
  - Setting up usage quotas in Google Cloud Console

## Support

If you need help:
1. Check [Google Places API Documentation](https://developers.google.com/maps/documentation/places/web-service)
2. Verify your Google Business Profile has reviews
3. Test your Place ID and API key using the [Places API Explorer](https://developers.google.com/maps/documentation/places/web-service/place-details)


