import _ from 'lodash';

/**
 * Heading Component
 * Replaces elements with class "heading-style-h1" with reversed array content
 * and applies GSAP animation if available
 */
export const initHeading = () => {
  console.log('initHeading');
  // Existing lodash functionality
  const x = [1, 2, 3, 4, 5];
  // Use lodash to reverse the array 'x'
  const reversedX = _.reverse([...x]);

  // Replace the text content of all elements with class "heading-style-h1" with the reversed array as string
  document.querySelectorAll('.heading-style-h1').forEach(el => {
    el.textContent = reversedX.join(', ');
  });

  // Existing GSAP animation functionality
  if (typeof window.gsap !== 'undefined') {
    const headingElements = document.querySelectorAll('.heading-style-h1');
    if (headingElements.length > 0) {
      gsap.to('.heading-style-h1', { x: 10, duration: 2, ease: 'power2.inOut' });
    }
  }
};
