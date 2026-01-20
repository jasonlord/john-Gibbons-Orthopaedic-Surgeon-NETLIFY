import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Immersive Footer Reveal Component
 * Creates a full-page footer that reveals as you scroll, with animated border radius
 */
export const ImmersiveFooter = () => {
  return /* html */ `
    <!-- Main Content Layer -->
    <div id="main-content-wrap">
    <main id="main-content" class="min-h-screen flex flex-col bg-white">
      
      <!-- Navigation -->
      <nav class="w-full px-8 py-6 flex items-center justify-between border-b border-zinc-100 fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300" id="navbar">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 bg-zinc-950 text-white rounded-lg flex items-center justify-center">
            <i data-lucide="command" class="w-4 h-4"></i>
          </div>
          <span class="text-sm font-semibold tracking-tight text-zinc-950">STUDIO</span>
        </div>
        <div class="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-500">
          <a href="#" class="hover:text-zinc-950 transition-colors">Work</a>
          <a href="#" class="hover:text-zinc-950 transition-colors">Expertise</a>
          <a href="#" class="hover:text-zinc-950 transition-colors">Agency</a>
          <a href="#" class="hover:text-zinc-950 transition-colors">Careers</a>
        </div>
        <button class="text-xs font-semibold bg-zinc-950 text-white px-5 py-2.5 rounded-full hover:bg-zinc-800 transition-all hover:scale-105 active:scale-95">
          Start Project
        </button>
      </nav>

      <!-- Spacer for fixed nav -->
      <div class="h-24"></div>

      <!-- Hero -->
      <section class="w-full max-w-[90rem] mx-auto px-6 pt-20 pb-32 flex flex-col justify-center min-h-[80vh]">
        <div class="flex flex-col gap-8 max-w-5xl">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-50 border border-zinc-200 w-fit">
            <span class="flex h-2 w-2 relative">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span class="text-xs font-medium text-zinc-600 uppercase tracking-wide">New Interaction System</span>
          </div>
          <h1 id = "main-anim" class="text-7xl md:text-9xl font-medium tracking-tighter text-zinc-950 leading-[0.9]">
            Digital<br/>
            <span class="text-zinc-300">Resonance.</span>
          </h1>
          <p class="text-xl md:text-2xl text-zinc-500 font-normal leading-relaxed max-w-2xl mt-4">
            We architect digital environments where brand aesthetics meet high-performance engineering.
          </p>
          <div class="flex items-center gap-6 mt-8">
            <button class="h-14 px-8 rounded-full bg-zinc-950 text-white font-medium text-sm flex items-center gap-2 hover:bg-zinc-800 transition-all">
              Explore Work <i data-lucide="arrow-down-right" class="w-4 h-4"></i>
            </button>
            <button class="h-14 px-8 rounded-full border border-zinc-200 text-zinc-900 font-medium text-sm hover:bg-zinc-50 transition-colors">
              Showreel (01:40)
            </button>
          </div>
        </div>
      </section>

      <!-- Selected Work Grid -->
      <section class="w-full max-w-[90rem] mx-auto px-6 py-32 border-t border-zinc-100">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 class="text-4xl font-medium tracking-tight mb-2">Selected Projects</h2>
            <p class="text-zinc-500">Curated work from 2023-2024</p>
          </div>
          <a href="#" class="text-sm font-medium border-b border-zinc-200 pb-1 hover:border-zinc-900 transition-colors">View Archive</a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          <!-- Item 1 -->
          <div class="group cursor-pointer">
            <div class="w-full aspect-[16/10] bg-zinc-100 rounded-lg overflow-hidden relative mb-6">
              <div class="absolute inset-0 bg-zinc-200/50 group-hover:bg-zinc-200 transition-all duration-700 ease-out"></div>
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100">
                <span class="px-6 py-3 bg-white/90 backdrop-blur rounded-full text-sm font-medium shadow-xl">View Case Study</span>
              </div>
            </div>
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-xl font-medium tracking-tight mb-1">Chronicle Labs</h3>
                <span class="text-xs text-zinc-500 font-medium uppercase tracking-wider border border-zinc-200 px-2 py-1 rounded">Web3</span>
              </div>
              <i data-lucide="arrow-up-right" class="w-5 h-5 text-zinc-400 group-hover:text-zinc-900 transition-colors"></i>
            </div>
          </div>

          <!-- Item 2 -->
          <div class="group cursor-pointer md:mt-24">
            <div class="w-full aspect-[16/10] bg-zinc-100 rounded-lg overflow-hidden relative mb-6">
              <div class="absolute inset-0 bg-zinc-200/50 group-hover:bg-zinc-200 transition-all duration-700 ease-out"></div>
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100">
                <span class="px-6 py-3 bg-white/90 backdrop-blur rounded-full text-sm font-medium shadow-xl">View Case Study</span>
              </div>
            </div>
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-xl font-medium tracking-tight mb-1">Linear Mobile</h3>
                <span class="text-xs text-zinc-500 font-medium uppercase tracking-wider border border-zinc-200 px-2 py-1 rounded">Product</span>
              </div>
              <i data-lucide="arrow-up-right" class="w-5 h-5 text-zinc-400 group-hover:text-zinc-900 transition-colors"></i>
            </div>
          </div>

          <!-- Item 3 -->
          <div class="group cursor-pointer">
            <div class="w-full aspect-[16/10] bg-zinc-100 rounded-lg overflow-hidden relative mb-6">
              <div class="absolute inset-0 bg-zinc-200/50 group-hover:bg-zinc-200 transition-all duration-700 ease-out"></div>
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100">
                <span class="px-6 py-3 bg-white/90 backdrop-blur rounded-full text-sm font-medium shadow-xl">View Case Study</span>
              </div>
            </div>
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-xl font-medium tracking-tight mb-1">Raycast AI</h3>
                <span class="text-xs text-zinc-500 font-medium uppercase tracking-wider border border-zinc-200 px-2 py-1 rounded">Intelligence</span>
              </div>
              <i data-lucide="arrow-up-right" class="w-5 h-5 text-zinc-400 group-hover:text-zinc-900 transition-colors"></i>
            </div>
          </div>

          <!-- Item 4 -->
          <div class="group cursor-pointer md:mt-24">
            <div class="w-full aspect-[16/10] bg-zinc-100 rounded-lg overflow-hidden relative mb-6">
              <div class="absolute inset-0 bg-zinc-200/50 group-hover:bg-zinc-200 transition-all duration-700 ease-out"></div>
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100">
                <span class="px-6 py-3 bg-white/90 backdrop-blur rounded-full text-sm font-medium shadow-xl">View Case Study</span>
              </div>
            </div>
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-xl font-medium tracking-tight mb-1">Vercel Ship</h3>
                <span class="text-xs text-zinc-500 font-medium uppercase tracking-wider border border-zinc-200 px-2 py-1 rounded">Event</span>
              </div>
              <i data-lucide="arrow-up-right" class="w-5 h-5 text-zinc-400 group-hover:text-zinc-900 transition-colors"></i>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section within Main Content -->
      <section class="w-full px-6 py-32 flex flex-col items-center justify-center bg-zinc-50">
        <h2 class="text-3xl md:text-5xl font-medium tracking-tight text-center mb-8 max-w-2xl">
          Ready to elevate your <br/>digital presence?
        </h2>
        <button class="px-8 py-4 bg-zinc-950 text-white rounded-full font-medium hover:bg-black transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-zinc-200">
          Schedule Discovery
        </button>
        
        <div class="mt-24 w-full h-[100px] flex items-center justify-center opacity-50">
          <p class="text-sm text-zinc-400 font-medium animate-bounce">Scroll to reveal</p>
        </div>
      </section>

      <!-- Bottom white filler to hold the shape -->
      <div class="bg-white h-24 w-full"></div>

    </main>
    </div>

    <!-- 100vh Fixed Footer -->
    <footer id="footer" class="bg-zinc-950 text-white flex flex-col">
      <div class="flex-1 w-full max-w-[90rem] mx-auto px-6 py-12 flex flex-col justify-between h-full">
        
        <!-- Top Footer -->
        <div class="flex justify-between items-start pt-12">
          <div class="flex gap-2 items-center">
            <div class="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-zinc-950">
              <i data-lucide="command" class="w-5 h-5"></i>
            </div>
          </div>
          
          <div class="hidden md:flex gap-16 text-sm font-medium text-zinc-400">
            <div class="flex flex-col gap-4">
              <span class="text-white">Socials</span>
              <a href="#" class="hover:text-white transition-colors">Twitter</a>
              <a href="#" class="hover:text-white transition-colors">Instagram</a>
              <a href="#" class="hover:text-white transition-colors">LinkedIn</a>
            </div>
            <div class="flex flex-col gap-4">
              <span class="text-white">Legal</span>
              <a href="#" class="hover:text-white transition-colors">Privacy</a>
              <a href="#" class="hover:text-white transition-colors">Terms</a>
              <a href="#" class="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>

        <!-- Middle Giant Text -->
        <div class="flex-1 flex flex-col justify-center items-center py-12">
          <h2 class="text-[14vw] md:text-[13vw] leading-[0.8] font-semibold tracking-tighter text-center select-none text-zinc-100 mix-blend-difference">
            LET'S<br/>TALK
          </h2>
          <a href="mailto:hello@studio.com" class="mt-8 text-xl md:text-3xl text-zinc-500 hover:text-white transition-colors font-light tracking-tight border-b border-zinc-800 pb-1 hover:border-white">
            hello@studio.com
          </a>
        </div>

        <!-- Bottom Footer -->
        <div class="flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600 font-medium uppercase tracking-wider pb-6">
          <span>Based in San Francisco</span>
          <span class="mt-2 md:mt-0">© 2024 Studio Inc.</span>
          <span class="mt-2 md:mt-0">Local Time: <span id="time">00:00</span></span>
        </div>
      </div>
    </footer>
  `;
};

/**
 * Initialize the immersive footer functionality
 * Call this after inserting the HTML into the DOM
 */
export const initImmersiveFooter = () => {
  // Load Lucide icons if available
  const initLucideIcons = () => {
    if (typeof window.lucide !== 'undefined') {
      try {
        window.lucide.createIcons();
      } catch (error) {
        console.warn('Error creating Lucide icons:', error);
      }
    }
  };
  
  // Try immediately
  initLucideIcons();
  
  // Also try after a short delay in case Lucide loads asynchronously
  setTimeout(initLucideIcons, 500);

  // Animate all h1 elements to scale to 2 with yoyo
  function initGSAPAnimations() {
    
      gsap.to("#main-anim", {
        scale: 1.2,
        transformOrigin: "left center", // Change anchor point to left bottom
        duration: 4,
        ease: 'bounce.inOut',
        yoyo: true,
        repeat: -1 // Infinite repeat
      });
    
  }

  // Update Time
  function updateTime() {
    const timeEl = document.getElementById('time');
    if (timeEl) {
      const now = new Date();
      timeEl.textContent = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    }
  }
  
  const timeInterval = setInterval(updateTime, 1000);
  updateTime();
  
  // Initialize GSAP animations
  initGSAPAnimations();

  // Scroll Logic using GSAP ScrollTrigger
  const mainContent = document.getElementById('main-content');
  const mainContentWrap = document.getElementById('main-content-wrap');
  const footer = document.getElementById('footer');
  const navbar = document.getElementById('navbar');

  if (!mainContent || !footer || !navbar) {
    console.warn('Immersive footer elements not found', {
      mainContent: !!mainContent,
      footer: !!footer,
      navbar: !!navbar
    });
    // Still try to make footer visible even if other elements are missing
    if (footer) {
      footer.style.visibility = 'visible';
      footer.style.opacity = '1';
    }
    return () => clearInterval(timeInterval);
  }

  // Config
  const MAX_RADIUS = 60; // 60px rounded corners
  const STRAIGHTEN_THRESHOLD = 300; // The last 300px of scroll

  // Make footer visible (redundant now but kept for safety)
  footer.style.visibility = 'visible';
  footer.style.opacity = '1';

  // Set marginBottom of mainContent to create space for footer
  mainContent.style.marginBottom = `${window.innerHeight}px`;

  // Wait for layout to settle, then create ScrollTriggers
  setTimeout(() => {
    // Set initial border radius
    mainContent.style.borderBottomLeftRadius = `${MAX_RADIUS}px`;
    mainContent.style.borderBottomRightRadius = `${MAX_RADIUS}px`;
    if (mainContentWrap) {
      mainContentWrap.style.borderBottomLeftRadius = `${MAX_RADIUS}px`;
      mainContentWrap.style.borderBottomRightRadius = `${MAX_RADIUS}px`;
    }

    // Animate border radius - matches original scroll-based logic exactly
    // Original: scrollBottom = docHeight - winHeight - scrollTop
    // Animate when scrollBottom <= STRAIGHTEN_THRESHOLD (last 300px)
    // Use ScrollTrigger with document scroll position calculations
    ScrollTrigger.create({
      trigger: document.body,
      start: () => {
        const docHeight = document.documentElement.scrollHeight;
        const winHeight = window.innerHeight;
        return `${docHeight - winHeight - STRAIGHTEN_THRESHOLD} top`;
      },
      end: () => {
        const docHeight = document.documentElement.scrollHeight;
        const winHeight = window.innerHeight;
        return `${docHeight - winHeight} top`;
      },
      scrub: 0.5, // Smooth animation tied to scroll
      onUpdate: (self) => {
        const progress = self.progress; // 0 to 1
        // Animate from MAX_RADIUS (progress=0) to 0 (progress=1)
        const newRadius = MAX_RADIUS * (1 - progress);
        mainContent.style.borderBottomLeftRadius = `${newRadius}px`;
        mainContent.style.borderBottomRightRadius = `${newRadius}px`;
        if (mainContentWrap) {
          mainContentWrap.style.borderBottomLeftRadius = `${newRadius}px`;
          mainContentWrap.style.borderBottomRightRadius = `${newRadius}px`;
        }
      }
    });

    // Animate navbar fade out as footer appears
    ScrollTrigger.create({
      trigger: mainContent,
      start: `bottom-${window.innerHeight} bottom`,
      end: 'bottom bottom',
      scrub: true,
      onUpdate: (self) => {
        const opacity = Math.max(0, 1 - self.progress);
        navbar.style.opacity = opacity;
        navbar.style.pointerEvents = opacity < 0.1 ? 'none' : 'auto';
      }
    });

    // Refresh ScrollTrigger to ensure calculations are correct
    ScrollTrigger.refresh();
  }, 100);

  // Fade the glow out as the bottom of the main content reaches the top of the viewport
  // (scrubbed so it smoothly disappears)
  if (mainContentWrap) {
    gsap.to(mainContentWrap, {
      '--glow-alpha': 0,
      ease: 'none',
      scrollTrigger: {
        trigger: mainContentWrap,
        start: 'bottom 95%',
        end: 'bottom top',
        scrub: true
      }
    });
  }

  // Handle resize
  const resizeHandler = () => {
    mainContent.style.marginBottom = `${window.innerHeight}px`;
    ScrollTrigger.refresh();
  };

  window.addEventListener('resize', resizeHandler);

  // Return cleanup function
  return () => {
    clearInterval(timeInterval);
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    window.removeEventListener('resize', resizeHandler);
  };
};
