import { defineConfig } from 'vite';
// Tailwind CDN will be used instead, so we don't need the plugin for utilities
// But we can still use it to process theme CSS if needed
// import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    // tailwindcss(), // Commented out - using CDN instead
  ],
  build: {
    lib: {
      entry: 'src/script.js',
      name: 'MyScript',
      fileName: () => 'script.js',
      formats: ['iife'] // Immediately Invoked Function Expression (works in browser)
    },
    outDir: 'dist',
    rollupOptions: {
      output: {
        // Output single file
        inlineDynamicImports: true,
        // Map external module names to their global variable names
        globals: {
          'jquery': 'jQuery',  // When you import 'jquery', use global 'jQuery' (which also has $)
          'gsap': 'gsap'       // When you import 'gsap', use global 'gsap'
          // 'lodash': '_'     // Commented out - lodash will be bundled from node_modules
        }
      },
      // Mark dependencies as external if they're already loaded in Webflow (from CDN)
      // These will be used as global variables (gsap, jQuery, _)
      // If NOT in this list, they'll be bundled from node_modules
      external: [
        'jquery',    // jQuery 3.5.1 is included by default in Webflow (use as global: jQuery or $)
        'gsap',      // GSAP available if enabled in Webflow site settings (use as global: gsap)
        // 'lodash'     // Uncomment if lodash is loaded in Webflow (use as global: _)
      ]
    }
  }
});


