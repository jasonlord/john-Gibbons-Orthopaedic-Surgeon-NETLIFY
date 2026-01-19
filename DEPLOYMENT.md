# Netlify Deployment Guide

This guide walks you through deploying your JavaScript file to Netlify CDN.

## Current Setup

Your project is configured with:
- **`netlify.toml`** - Tells Netlify to serve files from the `dist/` folder
- **`dist/script.js`** - Your JavaScript file that will be served as CDN

## Deployment Options

### Option 1: Git-Based Deployment (Recommended - Automatic)

This is the easiest and most common way. Every time you push to Git, Netlify automatically deploys.

#### Step 1: Create a Git Repository

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Make your first commit
git commit -m "Initial commit"
```

#### Step 2: Push to GitHub/GitLab/Bitbucket

1. Create a new repository on GitHub (or GitLab/Bitbucket)
2. Connect and push:

```bash
git remote add origin https://github.com/yourusername/your-repo-name.git
git branch -M main
git push -u origin main
```

#### Step 3: Connect to Netlify

1. Go to [Netlify Dashboard](https://app.netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose your Git provider (GitHub/GitLab/Bitbucket)
4. Select your repository
5. **Configure build settings:**
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click **"Deploy site"**

#### Step 4: Get Your CDN URL

After deployment, Netlify will give you a URL like:
- `https://random-name-12345.netlify.app`

Your JavaScript file will be available at:
- `https://random-name-12345.netlify.app/script.js`

#### Step 5: Custom Domain (Optional)

1. In Netlify dashboard, go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `cdn.yourdomain.com`)
4. Follow DNS setup instructions

---

### Option 2: Manual Deployment (No Git Required)

If you don't want to use Git, you can deploy directly.

#### Step 1: Install Netlify CLI

```bash
npm install -g netlify-cli
```

#### Step 2: Login to Netlify

```bash
netlify login
```

This opens your browser to authenticate.

#### Step 3: Initialize Site

```bash
netlify init
```

Follow the prompts:
- **Create & configure a new site** (choose this)
- **Team:** Select your team
- **Site name:** Enter a name (or leave blank for random)
- **Publish directory:** Enter `dist`
- **Build command:** Enter `npm run build`

#### Step 4: Deploy

```bash
netlify deploy --prod
```

Your site will be deployed and you'll get a URL!

---

## How It Works

### The `netlify.toml` File

```toml
[build]
  publish = "dist"  # Netlify serves files from this folder
```

This tells Netlify:
- **Build command:** `npm run build` - Builds your source files
- **Publish from `dist/`** - This folder becomes your website root

### File Structure

```
your-project/
├── dist/
│   └── script.js          ← This is what Netlify serves
├── netlify.toml           ← Netlify configuration
└── package.json
```

When you deploy:
- Netlify takes everything in `dist/`
- Makes it available at your site URL
- `dist/script.js` → `https://your-site.netlify.app/script.js`

---

## Updating Your Script

### With Git (Automatic):

1. Edit `src/script.js`
2. Build: `npm run build`
3. Commit and push:
   ```bash
   git add .
   git commit -m "Update script"
   git push
   ```
4. Netlify automatically builds and deploys (usually takes 30-60 seconds)

### Manual Deployment:

1. Edit `src/script.js`
2. Build: `npm run build`
3. Deploy:
   ```bash
   netlify deploy --prod
   ```

---

## Using in Webflow

After deployment, add this to your Webflow page:

**Custom Code → Footer Code:**
```html
<script src="https://your-site.netlify.app/script.js?v=1"></script>
```

**For cache busting:** Change `v=1` to `v=2`, `v=3`, etc. when you update the script.

---

## Troubleshooting

### "Site not found" or 404
- Make sure `dist/script.js` exists (run `npm run build` first)
- Check that `netlify.toml` has `publish = "dist"`
- Verify the file is committed to Git (if using Git deployment)

### Updates not showing
- Clear browser cache
- Update the `?v=` parameter in Webflow
- Check Netlify dashboard for deployment status

### CORS errors
- The `netlify.toml` already includes CORS headers
- Make sure your Webflow domain matches (or change `Access-Control-Allow-Origin` to your domain)

---

## Quick Reference

**Deploy command:**
```bash
netlify deploy --prod
```

**Check deployment status:**
```bash
netlify status
```

**View site:**
```bash
netlify open
```

**View logs:**
```bash
netlify logs
```
