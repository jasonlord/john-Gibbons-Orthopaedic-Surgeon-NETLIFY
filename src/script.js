import './input.css';
import gsap from 'gsap';
if (typeof window.gsap === 'undefined') {
  window.gsap = gsap;
}
import { ImmersiveFooter, initImmersiveFooter } from './components/ImmersiveFooter.js';

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  // Replace Webflow divs with Immersive Footer component
  // Add a div with class "webflow-immersive-footer" in Webflow
  document.querySelectorAll('.webflow-immersive-footer').forEach(el => {
    el.innerHTML = ImmersiveFooter();
    document.body.classList.add('immersive-footer');
    document.documentElement.classList.add('immersive-footer');
    initImmersiveFooter();
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
});

