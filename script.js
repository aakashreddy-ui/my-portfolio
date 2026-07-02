class AakashPortfolio {
  constructor() {
    this.init();
  }

  init() {
    this.preloader = document.getElementById('preloader');
    this.navbar = document.getElementById('navbar');
    this.mobileMenu = document.getElementById('mobileMenu');
    this.navLinks = document.getElementById('navLinks');
    
    setTimeout(() => this.hidePreloader(), 2500);
    
    if (typeof particlesJS === 'function') {
      this.initParticles();
    }
    
    this.initInteractions();
    this.createMouseFollower();
    this.animate();
  }

  hidePreloader() {
    this.preloader.style.opacity = '0';
    this.preloader.style.pointerEvents = 'none';
    document.body.style.overflow = 'auto';
    document.body.classList.add('loaded');
  }

  initParticles() {
    particlesJS('particles-js', {
      particles: {
        number: { value: 80 },
        color: { value: ['#00f5ff','#ff00ff','#00ff88'] },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: { 
          enable: true, 
          distance: 150, 
          color: '#00f5ff', 
          opacity: 0.3, 
          width: 1 
        },
        move: { enable: true, speed: 2, direction: 'none', random: true }
      },
      interactivity: { 
        detect_on: 'canvas',
        events: { 
          onhover: { enable: true, mode: 'repulse' },
          onclick: { enable: false },
          resize: true
        },
        modes: {
          repulse: { distance: 100, duration: 0.4 }
        }
      },
      retina_detect: true
    });
  }

  createMouseFollower() {
    const follower = document.createElement('div');
    follower.className = 'mouse-follower';
    document.body.appendChild(follower);

    let mouseX = 0, mouseY = 0;
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      follower.style.left = mouseX + 'px';
      follower.style.top = mouseY + 'px';
    });

    // AakashReddy interactive elements
    document.querySelectorAll('.btn, .project-card, .skill-tags span, .contact-item, .quick-btn').forEach(el => {
      el.onmouseenter = () => follower.style.transform = 'scale(4) rotate(90deg)';
      el.onmouseleave = () => follower.style.transform = 'scale(1) rotate(0deg)';
    });
  }

  initInteractions() {
    // Mobile menu toggle
    if (this.mobileMenu) {
      this.mobileMenu.onclick = () => {
        this.mobileMenu.classList.toggle('active');
        this.navLinks.classList.toggle('active');
      };
    }

    // Smooth scrolling for AakashReddy portfolio
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.onclick = e => {
        e.preventDefault();
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        if (this.mobileMenu && this.navLinks) {
          this.mobileMenu.classList.remove('active');
          this.navLinks.classList.remove('active');
        }
      };
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        this.navbar.style.background = 'rgba(12,15,35,0.98)';
        this.navbar.style.backdropFilter = 'blur(50px)';
      } else {
        this.navbar.style.background = 'rgba(12,15,35,0.95)';
        this.navbar.style.backdropFilter = 'blur(40px)';
      }
    });

    // AakashReddy WhatsApp number copy feature
    const whatsappNumber = document.getElementById('whatsapp-number');
    if (whatsappNumber) {
      whatsappNumber.onclick = () => {
        navigator.clipboard.writeText(whatsappNumber.textContent);
        const original = whatsappNumber.textContent;
        whatsappNumber.textContent = '✅ Copied!';
        whatsappNumber.style.color = '#00ff88';
        setTimeout(() => {
          whatsappNumber.textContent = original;
          whatsappNumber.style.color = '';
        }, 2000);
      };
    }

    // Button hover sounds (optional enhancement)
    document.querySelectorAll('.btn').forEach(btn => {
      btn.onmouseenter = () => {
        btn.style.transform = 'scale(1.05)';
      };
      btn.onmouseleave = () => {
        btn.style.transform = 'scale(1)';
      };
    });
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    
    // Floating animation for AakashReddy cards
    document.querySelectorAll('.project-card, .skill-category, .highlight-item').forEach((el, i) => {
      const time = performance.now() * 0.001 + i;
      const floatY = Math.sin(time * 0.7) * 5;
      const floatX = Math.cos(time * 0.5 + i) * 3;
      el.style.transform = `translate(${floatX}px, ${floatY}px)`;
    });

    // Neon glow pulse for AakashReddy portfolio
    document.querySelectorAll('.section-title, .hero-badge').forEach((el, i) => {
      const time = performance.now() * 0.002;
      const glow = Math.sin(time + i) * 0.3 + 0.7;
      el.style.filter = `drop-shadow(0 0 20px rgba(0,245,255,${glow}))`;
    });

    // Profile card rotation
    const profileCard = document.querySelector('.profile-card');
    if (profileCard) {
      const time = performance.now() * 0.0005;
      profileCard.style.transform = `rotateY(${Math.sin(time) * 5}deg) translateY(${Math.sin(time * 2) * 10}px)`;
    }
  }
}

// Initialize AakashReddy Portfolio when DOM loaded
document.addEventListener('DOMContentLoaded', () => {
  new AakashPortfolio();
});
