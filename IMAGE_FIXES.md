# Image Fixes Applied

## Issues Fixed

1. **External Images (Unsplash)**: Changed from Next.js `Image` component to regular `img` tags for external URLs
   - Reason: Next.js Image component with static export can have issues with external URLs
   - Files updated:
     - `pages/index.js` - All collection and about section images
     - `pages/blog/index.js` - Blog listing images
     - `pages/blog/[slug].js` - Individual blog post images

2. **Local Logo**: Kept Next.js `Image` component for local logo
   - Path: `/Assets/logo.svg` (in `public/Assets/logo.svg`)
   - This should work correctly with `unoptimized: true` in next.config.js

3. **Next.js Configuration**: Updated `next.config.js`
   - Added `remotePatterns` for Unsplash (though using img tags now)
   - Kept `unoptimized: true` for static export compatibility

## Image Locations

### Local Images (in public folder):
- Logo: `public/Assets/logo.svg` → Accessed as `/Assets/logo.svg`

### External Images (Unsplash):
- About section: Traditional Indian Gold Jewellery
- Collections: Gold, Diamond, Traditional Sets, Custom Designs
- Blog posts: Various jewellery images

## Testing

To verify images are loading:

1. Run development server:
```bash
npm run dev
```

2. Check browser console for any image loading errors

3. Verify:
   - Logo appears in navbar
   - All collection images load
   - About section image loads
   - Blog images load

## If Images Still Don't Show

1. **Check browser console** for 404 errors or CORS issues
2. **Verify Unsplash URLs** are accessible (they should be)
3. **For local images**: Ensure files are in `public/Assets/` directory
4. **After build**: Check `out/Assets/` directory contains logo.svg

## Replacing with Your Own Images

To use your own images instead of Unsplash:

1. Add images to `public/Assets/images/` folder
2. Update image src paths in:
   - `pages/index.js`
   - `pages/blog/index.js`
   - `lib/blogPosts.js`

Example:
```jsx
// Change from:
src="https://images.unsplash.com/..."

// To:
src="/Assets/images/your-image.jpg"
```


