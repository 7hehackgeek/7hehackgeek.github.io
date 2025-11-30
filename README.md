# Lakhe Wale Jewellers - Next.js Website

A modern Next.js website for Lakhe Wale Jewellers, featuring multi-language support (English, Hindi, Punjabi) for blog content.

## Features

- ✅ Next.js 14 with React 18
- ✅ Static export for GitHub Pages
- ✅ Multi-language blog support (English, Hindi, Punjabi)
- ✅ Responsive design
- ✅ SEO optimized
- ✅ Smooth scrolling navigation
- ✅ Blog with language switcher

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

### Build static site:
```bash
npm run build
```

This will create an `out` directory with all static files ready for deployment.

## Deployment to GitHub Pages

### Option 1: Automated (Recommended)

1. Build the site:
```bash
npm run build
```

2. Copy CNAME and .nojekyll to out directory:
```bash
cp CNAME out/
touch out/.nojekyll
```

3. Commit and push the `out` directory to the `gh-pages` branch:
```bash
git add out/
git commit -m "Deploy to GitHub Pages"
git subtree push --prefix out origin gh-pages
```

### Option 2: Manual

1. Build the site:
```bash
npm run build
```

2. Copy `CNAME` and create `.nojekyll` in the `out` directory

3. Push the `out` directory contents to your repository's `gh-pages` branch

### Option 3: GitHub Actions (Advanced)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - run: cp CNAME out/
      - run: touch out/.nojekyll
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

## Project Structure

```
├── components/          # React components
│   ├── Navbar.js
│   ├── BlogNavbar.js
│   ├── Footer.js
│   └── LanguageSwitcher.js
├── pages/              # Next.js pages
│   ├── _app.js         # App wrapper
│   ├── index.js        # Home page
│   └── blog/
│       ├── index.js    # Blog listing
│       └── [slug].js   # Dynamic blog posts
├── lib/                # Utilities and data
│   ├── translations.js # Multi-language translations
│   └── blogPosts.js    # Blog post metadata
├── hooks/              # React hooks
│   └── useScrollAnimation.js
├── styles/            # CSS files
│   └── globals.css
├── public/            # Static assets
│   └── Assets/
└── out/               # Build output (generated)
```

## Configuration

- `next.config.js` - Next.js configuration for static export
- `package.json` - Dependencies and scripts
- `CNAME` - Custom domain configuration for GitHub Pages

## Notes

- The site uses static export, so all pages are pre-rendered at build time
- Language preferences are stored in localStorage
- Images are currently using Unsplash URLs - replace with your own images in `public/Assets/images/`
- The blog translations support English, Hindi, and Punjabi

## License

© 2024 Lakhe Wale Jewellers. All rights reserved.

