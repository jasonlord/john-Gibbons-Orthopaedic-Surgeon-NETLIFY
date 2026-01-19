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


import _ from 'lodash';

const x = [1, 2, 3, 4, 5];
// Use lodash to reverse the array 'x'
const reversedX = _.reverse([...x]);

// Replace the text content of all elements with class "heading-style-h1" with the reversed array as string
document.querySelectorAll('.heading-style-h1').forEach(el => {
  el.textContent = reversedX.join(', ');
});
