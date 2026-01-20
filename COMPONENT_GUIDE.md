# Component-Based Workflow Guide

## 📁 Project Structure

```
your-project/
├── index.html              # Preview page (local dev only)
├── src/
│   ├── script.js          # Main script (runs in Webflow) - KEEPS ALL EXISTING FUNCTIONALITY
│   ├── preview.js         # Preview script (local dev only)
│   ├── input.css          # Tailwind CSS with @theme
│   └── components/
│       ├── Test.js        # Example component
│       └── index.js       # Exports all components
├── dist/                  # Built files (auto-generated)
│   ├── script.js
│   └── style.css
├── vite.config.js         # Vite configuration (dual mode)
└── package.json           # Dependencies & scripts
```

## 🚀 Quick Start

### 1. Preview Locally
```bash
npm run dev
```
Opens browser at `http://localhost:5173` with hot reload

### 2. Build for Production
```bash
npm run build
```
Creates optimized files in `dist/`

### 3. Deploy to Netlify
```bash
npm run deploy
```

## 📝 Creating a New Component

### Step 1: Create Component File
Create `src/components/Hero.js`:

```javascript
export const Hero = ({ title, subtitle }) => {
  return /* html */ `
    <div class="bg-primary text-white p-18 rounded-lg shadow-custom-lg">
      <h1 class="text-5xl font-bold mb-6">${title}</h1>
      <p class="text-xl opacity-90">${subtitle}</p>
    </div>
  `;
};
```

### Step 2: Export It
Add to `src/components/index.js`:

```javascript
export { TestComponent, TestWithoutComment } from './Test.js';
export { Hero } from './Hero.js'; // Add this line
```

### Step 3: Use in Webflow
Add to `src/script.js`:

```javascript
import { Hero } from './components/index.js';

document.addEventListener('DOMContentLoaded', () => {
  // Replace Webflow divs with your component
  document.querySelectorAll('.webflow-hero').forEach(el => {
    el.innerHTML = Hero({
      title: 'Welcome to Our Site',
      subtitle: 'Your subtitle here'
    });
  });
});
```

### Step 4: Preview Locally
Add to `src/preview.js`:

```javascript
import { Hero } from './components/index.js';

document.getElementById('preview').innerHTML = Hero({
  title: 'My Hero Component',
  subtitle: 'Testing locally'
});
```

## 🎨 Using Tailwind Theme

Your theme is defined in `src/input.css` using `@theme`:

- Colors: `bg-primary`, `text-primary`, `bg-secondary`, etc.
- Spacing: `p-18`, `m-22`, `gap-26`
- Shadows: `shadow-custom`, `shadow-custom-lg`

## ✅ Existing Functionality Preserved

Your `script.js` still includes:
- ✅ jQuery availability check
- ✅ GSAP availability check
- ✅ GSAP animation on `.heading-style-h1`
- ✅ Lodash array reversal functionality
- ✅ All existing console logs

## 🔄 Workflow

1. **Develop**: Create/edit components in `src/components/`
2. **Preview**: Run `npm run dev` to see changes live
3. **Use**: Import components in `src/script.js` to replace Webflow divs
4. **Build**: Run `npm run build` to create production files
5. **Deploy**: Run `npm run deploy` to upload to Netlify
6. **Webflow**: Add CDN links in Webflow Custom Code

## 📦 Component Tips

- Use `/* html */` before template strings for syntax highlighting
- Use `${variable}` to insert dynamic values
- Components accept parameters: `({ title, subtitle })`
- Import from `./components/index.js`

## 🎯 Example Usage

```javascript
// In script.js
import { TestComponent } from './components/index.js';

document.querySelectorAll('.webflow-test').forEach(el => {
  el.innerHTML = TestComponent({
    title: 'Custom Title',
    subtitle: 'Custom Subtitle'
  });
});
```
