import './input.css';
import gsap from 'gsap';
if (typeof window.gsap === 'undefined') {
  window.gsap = gsap;
}
import { ImmersiveFooter, initImmersiveFooter } from './components/ImmersiveFooter.js';
import { initHeading } from './components/Heading.js';

// Make GSAP available globally for components that use window.gsap


console.log('Script loaded');

// Wait for DOM to be ready
function initializeApp() {
  console.log('Initializing app...');
  
  // Initialize heading component
  try {
    initHeading();
  } catch (error) {
    console.warn('Error initializing heading:', error);
  }

  // Replace Webflow divs with Immersive Footer component
  // Add a div with class "webflow-immersive-footer" in Webflow
  let footerContainers = document.querySelectorAll('.webflow-immersive-footer');
  
  if (footerContainers.length === 0) {
    console.warn('No .webflow-immersive-footer elements found. Appending footer to body as fallback.');
    // Fallback: append to body if container not found
    const fallbackContainer = document.createElement('div');
    fallbackContainer.className = 'webflow-immersive-footer';
    document.body.appendChild(fallbackContainer);
    footerContainers = [fallbackContainer];
  }

  footerContainers.forEach(el => {
    try {
      el.innerHTML = ImmersiveFooter();
      // Add body class for styles
      document.body.classList.add('immersive-footer');
      // Initialize the footer functionality
      initImmersiveFooter();
      console.log('Immersive footer initialized successfully');
      
      // Double-check footer is visible after initialization
      setTimeout(() => {
        const footer = document.getElementById('footer');
        if (footer) {
          footer.style.visibility = 'visible';
          footer.style.opacity = '1';
          console.log('Footer visibility confirmed');
        } else {
          console.error('Footer element not found after initialization');
        }
      }, 100);
    } catch (error) {
      console.error('Error initializing immersive footer:', error);
      // Make footer visible even if initialization fails
      const footer = document.getElementById('footer');
      if (footer) {
        footer.style.visibility = 'visible';
        footer.style.opacity = '1';
      }
    }
  });

  // Load Lucide icons if not already loaded
  if (typeof window.lucide === 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/lucide@latest';
    script.onload = () => {
      if (window.lucide) {
        window.lucide.createIcons();
      }
    };
    document.head.appendChild(script);
  }
}

// Try multiple initialization strategies for Webflow compatibility
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  // DOM is already ready
  initializeApp();
}

// Fallback: try again after a short delay (in case Webflow loads content dynamically)
setTimeout(() => {
  const footer = document.getElementById('footer');
  if (footer && footer.style.visibility === 'hidden') {
    console.log('Fallback: Making footer visible');
    footer.style.visibility = 'visible';
    footer.style.opacity = '1';
  }
}, 1000);

