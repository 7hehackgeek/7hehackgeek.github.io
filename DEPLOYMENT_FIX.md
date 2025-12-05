# GitHub Pages Deployment Fix

## What Was Fixed

The GitHub Actions workflow has been updated to use the newer, more reliable GitHub Pages deployment method with proper permissions.

## Important: Repository Settings

For the new deployment method to work, you need to configure your repository:

1. Go to your repository: `https://github.com/7hehackgeek/7hehackgeek.github.io/settings/pages`
2. Under **Source**, select: **"GitHub Actions"** (not "Deploy from a branch")
3. Save the changes

## What Changed

### Updated Workflow Features:
- ✅ Added required permissions (`contents: read`, `pages: write`, `id-token: write`)
- ✅ Updated to latest action versions (`@v4` for checkout and node setup)
- ✅ Using `npm ci` instead of `npm install` for more reliable builds
- ✅ Using official GitHub Pages deployment actions
- ✅ Properly handling CNAME file (checks if it exists)
- ✅ Creating `.nojekyll` file to disable Jekyll processing

## If Deployment Still Fails

### Option 1: Check GitHub Actions Logs
1. Go to: `https://github.com/7hehackgeek/7hehackgeek.github.io/actions`
2. Click on the latest workflow run
3. Check for any error messages

### Option 2: Alternative Workflow (If New Method Doesn't Work)
If the new method doesn't work, you can use the older `peaceiris/actions-gh-pages` method:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Copy CNAME and .nojekyll
        run: |
          if [ -f CNAME ]; then
            cp CNAME out/
          fi
          echo "" > out/.nojekyll
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
          cname: lakhewale.com
```

### Option 3: Manual Deployment
If automated deployment continues to fail:

```bash
# Build the site
npm run build

# Copy necessary files
cp CNAME out/
echo "" > out/.nojekyll

# Commit and push (if using gh-pages branch)
cd out
git init
git add .
git commit -m "Deploy to GitHub Pages"
git branch -M main
git remote add origin https://github.com/7hehackgeek/7hehackgeek.github.io.git
git push -f origin main
```

## Common Issues

1. **"Permission denied" errors**: Make sure repository settings allow GitHub Actions
2. **"Build failed"**: Check Node.js version compatibility (using 18)
3. **"404 on pages"**: Ensure `.nojekyll` file is in the `out/` directory
4. **"Custom domain not working"**: Verify CNAME file is copied to `out/` directory

## Testing Locally

Before pushing, test the build locally:

```bash
npm ci
npm run build
ls -la out/  # Should see .nojekyll and CNAME
```


