# GitHub Pages 404 Troubleshooting Guide

## Current Structure
```
/
├── index.html (✅ Root)
├── styles.css
├── script.js
├── Assets/
│   └── logo.svg
├── .nojekyll (✅ Present)
├── CNAME (points to www.lakhewale.com)
└── blog/
    ├── blog.html
    ├── blog-why-jewellery-gets-black.html
    ├── blog-why-22k-instead-of-24k.html
    └── blog-why-diamond-jewellery-14k-18k.html
```

## Common 404 Causes & Solutions

### 1. **Custom Domain DNS Configuration**
Since you have a CNAME file pointing to `www.lakhewale.com`, verify:
- DNS records are configured correctly
- CNAME record points to `7hehackgeek.github.io`
- Wait 24-48 hours for DNS propagation

**Test URLs:**
- `https://7hehackgeek.github.io` (should work immediately)
- `https://www.lakhewale.com` (requires DNS setup)

### 2. **GitHub Pages Settings**
1. Go to: https://github.com/7hehackgeek/7hehackgeek.github.io/settings/pages
2. Verify:
   - Source: `Deploy from a branch`
   - Branch: `main` / `(root)`
   - Custom domain: `www.lakhewale.com` (if using)

### 3. **Wait for Deployment**
After pushing changes, wait 1-5 minutes for GitHub Pages to rebuild.

### 4. **Clear Browser Cache**
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Try incognito/private window

### 5. **Verify File Paths**
All links should be:
- From root: `blog/blog.html`
- From blog folder: `../index.html` or `blog-why-*.html`

## Quick Test Commands

```bash
# Check if files are tracked
git ls-files | grep -E "index.html|blog/"

# Verify .nojekyll exists
git ls-files .nojekyll

# Check recent commits
git log --oneline -5
```

## If Still 404ing

1. **Check GitHub Actions**: Go to repository → Actions tab
2. **Check Pages Build**: Settings → Pages → Check build status
3. **Try direct URL**: `https://7hehackgeek.github.io/blog/blog.html`
4. **Remove CNAME temporarily** to test if custom domain is the issue





