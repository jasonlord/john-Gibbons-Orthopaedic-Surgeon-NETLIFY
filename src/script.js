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
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded fired');
  
  // Initialize heading component
  initHeading();

  // Replace Webflow divs with Immersive Footer component
  // Add a div with class "webflow-immersive-footer" in Webflow
  document.querySelectorAll('.webflow-immersive-footer').forEach(el => {
    el.innerHTML = ImmersiveFooter();
    // Initialize the footer functionality
    initImmersiveFooter();
    // Add body class for styles
    document.body.classList.add('immersive-footer');
  });

  // Load Lucide icons if not already loaded
  if (typeof window.lucide === 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/lucide@latest';
    document.head.appendChild(script);
  }
});

