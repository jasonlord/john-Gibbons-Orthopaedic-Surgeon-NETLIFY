# Tailwind CDN + Custom Theme Setup

This project uses **Tailwind CDN** for all utilities and a **custom CSS file** for theme customization.

## Setup in Webflow

### Step 1: Add Tailwind CDN
In **Site Settings → Custom Code → Head Code**, add:

```html
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          primary: '#3B82F6',
          secondary: '#8B5CF6',
          accent: '#10B981',
          'brand-blue': '#1E40AF',
          'brand-purple': '#7C3AED',
        },
        spacing: {
          '18': '4.5rem',  /* 72px */
          '22': '5.5rem',  /* 88px */
          '26': '6.5rem',  /* 104px */
        },
        boxShadow: {
          'custom': '0 10px 40px rgba(0, 0, 0, 0.1)',
          'custom-lg': '0 20px 60px rgba(0, 0, 0, 0.15)',
        }
      }
    }
  }
</script>
```

### Step 2: Add Your Custom CSS
In **Site Settings → Custom Code → Head Code** (after Tailwind CDN), add:

```html
<link rel="stylesheet" href="https://your-site.netlify.app/style.css?v=1">
```

**Important:** The CSS file must load AFTER the Tailwind CDN script.

## Usage

### Standard Tailwind Classes
All Tailwind utilities work as normal:
- `bg-blue-500`, `text-white`, `p-4`, `flex`, `rounded-lg`, etc.

### Custom Theme Classes
Your custom colors are available as Tailwind classes:
- `bg-primary`, `text-primary`, `border-primary`
- `bg-secondary`, `text-secondary`
- `bg-accent`, `text-accent`
- `bg-brand-blue`, `bg-brand-purple`

### Custom Utilities
Additional custom utilities from `style.css`:
- `shadow-custom`, `shadow-custom-lg`
- `p-18`, `m-18` (custom spacing)

## Customizing Your Theme

Edit `src/input.css` to change:
- Colors (update the `colors` object in Tailwind config)
- Spacing (update the `spacing` object)
- Shadows (update the `boxShadow` object)
- Add new custom utilities

Then rebuild and redeploy:
```bash
npm run build
git add .
git commit -m "Update theme"
git push
```

## Benefits of This Approach

✅ **Small CSS file** - Only 0.79 kB (vs 253 kB with full bundling)  
✅ **All Tailwind utilities** - Available via CDN  
✅ **Custom theming** - Your brand colors and utilities  
✅ **Fast loading** - CDN is cached globally  
✅ **Easy updates** - Just update your CSS file

## File Sizes

- **Tailwind CDN**: ~0 KB (loaded from CDN, cached)
- **Your CSS**: 0.79 kB (0.31 kB gzipped)
- **Total**: Much smaller than bundling everything!
