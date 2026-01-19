console.log('John GIbbons Script loaded!');

if (typeof window.$ !== 'undefined') {
  console.log('jQuery is available');
} else {
  console.log('jQuery is not available');
}

if (typeof window.gsap !== 'undefined') {
  console.log('GSAP is available'); } else {
  console.log('GSAP is not available');
}



gsap.to('.heading-style-h1', { x: 10, duration: 2, ease: 'power2.inOut' });