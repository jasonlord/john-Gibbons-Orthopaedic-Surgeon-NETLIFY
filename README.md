# Netlify CDN for Webflow

Setup to deploy a JavaScript file to Netlify CDN for use in Webflow, with Vite bundling support for npm packages.

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Install npm packages (optional):**
   ```bash
   npm install gsap lodash jquery
   ```

3. **Edit your JavaScript:**
   - Edit `src/script.js`
   - Import packages: `import { gsap } from 'gsap';`

4. **Build:**
   ```bash
   npm run build
   ```
   This bundles everything into `dist/script.js`

5. **Deploy to Netlify:**
   - Push to GitHub/GitLab
   - Connect repo to [Netlify](https://app.netlify.com)
   - Build command: `npm run build`
   - Publish directory: `dist`

6. **Use in Webflow:**
   Add to your Webflow page's **Custom Code** → **Footer Code**:
   ```html
   <script src="https://your-site.netlify.app/script.js?v=1"></script>
   ```
   Change the `v=1` to `v=2`, `v=3`, etc. when you update to bust cache.

## Handling Libraries Already Loaded in Webflow

**What Webflow includes by default:**
- ✅ **jQuery 3.5.1** - Included by default (available as `$` or `jQuery`)
- ⚙️ **GSAP** - Available if enabled in Site Settings > Integrations (free as of 2025)
- ❌ **lodash** - NOT included by default

**Option 1: Use Webflow's Libraries (Recommended)**

jQuery is already marked as external in `vite.config.js` since it's included by default.

In `src/script.js`, use it as a global variable (no import):
```javascript
(function() {
  // jQuery is available globally (included by default)
  $(document).ready(function() {
    $('body').addClass('loaded');
  });
  
  // GSAP if enabled in Webflow settings
  // gsap.to('.element', { x: 100, duration: 1 });
})();
```

To use GSAP (if enabled in Webflow):
1. Uncomment `'gsap'` in `vite.config.js` external array
2. Use `gsap` as a global variable in your code

**Option 2: Bundle from npm (Use if NOT loaded in Webflow)**

1. Install: `npm install gsap`
2. Import in `src/script.js`:
```javascript
import { gsap } from 'gsap'; // Will be bundled
```

**Which to choose?**
- **External (global)**: Smaller file, uses Webflow's version (good if already loaded from CDN)
- **Bundle (import)**: Self-contained, no dependencies (good if not loaded in Webflow)

## Example Usage

```javascript
// src/script.js
import { gsap } from 'gsap';
import _ from 'lodash';

(function() {
  // Use GSAP
  gsap.to('.element', { x: 100, duration: 1 });
  
  // Use lodash
  const doubled = _.map([1, 2, 3], n => n * 2);
})();
```

## Workflow

- Edit `src/script.js`
- Run `npm run build` (or Netlify does it automatically)
- Push to Git
- Netlify auto-deploys
- Use the URL in Webflow with a version query param for cache busting
