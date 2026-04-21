// BIO Soluciones Tecnológicas - Custom JavaScript

document.addEventListener('DOMContentLoaded', function() {
  
  // ===== TYPEWRITER EFFECT =====
  const textToType = 'tecnología';
  const typewriterEl = document.getElementById('typewriter');
  let charIndex = 0;
  
  function typeWriter() {
    if (charIndex < textToType.length) {
      typewriterEl.textContent += textToType.charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, 100);
    }
  }
  
  setTimeout(typeWriter, 1000);
  
  // ===== PARTICLES SYSTEM =====
  const particlesContainer = document.getElementById('particles');
  if (particlesContainer) {
    const canvas = document.createElement('canvas');
    particlesContainer.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    
    let particles = [];
    const particleCount = 50;
    
    function resizeCanvas() {
      canvas.width = particlesContainer.offsetWidth;
      canvas.height = particlesContainer.offsetHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    class Particle {
      constructor() {
        this.reset();
      }
      
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
      
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(30, 64, 175, ${this.opacity})`;
        ctx.fill();
      }
    }
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animateParticles);
    }
    
    animateParticles();
  }
  
  // ===== NUMBER COUNTER ANIMATION =====
  function animateCounters() {
    const counters = document.querySelectorAll('.stat-number[data-target]');
    
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;
      
      const updateCounter = () => {
        current += step;
        if (current < target) {
          counter.textContent = Math.floor(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      };
      
      updateCounter();
    });
  }
  
  // Trigger counter animation when hero is visible
  const heroStats = document.querySelector('.hero-stats');
  if (heroStats) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(heroStats);
  }
  
  // ===== AOS ANIMATION HANDLER =====
  function initAOS() {
    const aosElements = document.querySelectorAll('[data-aos]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    aosElements.forEach(el => observer.observe(el));
  }
  
  initAOS();
  
  // ===== PARALLAX EFFECT =====
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  
  function updateParallax() {
    const scrolled = window.scrollY;
    
    parallaxElements.forEach(el => {
      const speed = parseFloat(el.getAttribute('data-parallax')) || 0.1;
      const yPos = scrolled * speed;
      el.style.transform = `translateY(${yPos}px)`;
    });
  }
  
  window.addEventListener('scroll', function() {
    requestAnimationFrame(updateParallax);
  });
  
  // Also add parallax to floating shapes
  const shapes = document.querySelectorAll('.shape');
  window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    shapes.forEach((shape, index) => {
      const speed = 0.05 + (index * 0.02);
      shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });
  
  // Initialize parallax positions
  updateParallax();
  
  // ===== FORM HANDLING =====
  const form = document.getElementById('contactForm');
  const msgDiv = document.getElementById('contactMsg');
  
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(form);
      
      fetch('https://api.bio.com.py/contact/contact.php', {
        method: 'POST',
        body: formData,
        credentials: 'include'
      })
      .then(res => {
        if (!res.ok) throw new Error("Error HTTP " + res.status);
        return res.text();
      })
      .then(data => {
        msgDiv.innerHTML = data;
        if (data.includes('success_page')) {
          form.reset();
        }
      })
      .catch(err => {
        msgDiv.innerHTML = '<div class="error_message">Error de conexión: ' + err.message + '</div>';
      });
    });
  }
  
  // ===== MOBILE MENU TOGGLE =====
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  }
  
  // ===== DROPDOWN MENU =====
  const dropdown = document.getElementById('appsDropdown');
  if (dropdown) {
    const dropdownButton = dropdown.querySelector('[data-dropdown-button]');
    dropdownButton.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      dropdown.classList.toggle('active');
    });
  }
  
  document.addEventListener('click', function(e) {
    if (dropdown && !dropdown.contains(e.target)) {
      dropdown.classList.remove('active');
    }
  });
  
  // Close mobile menu when clicking a link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
      }
    });
  });
  
  // ===== SCROLL TO TOP BUTTON =====
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });
  
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  
  // ===== DARK MODE TOGGLE =====
  const darkModeToggle = document.getElementById('darkModeToggle');
  const htmlElement = document.documentElement;
  
  // Check for saved preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
    updateDarkModeIcon(savedTheme);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    htmlElement.setAttribute('data-theme', 'dark');
    updateDarkModeIcon('dark');
  }
  
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', function() {
      const currentTheme = htmlElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      htmlElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateDarkModeIcon(newTheme);
    });
  }
  
  function updateDarkModeIcon(theme) {
    if (!darkModeToggle) return;
    const icon = darkModeToggle.querySelector('i');
    if (theme === 'dark') {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  }
  
  // ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const headerHeight = document.querySelector('.header').offsetHeight;
          const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
          
          window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
      }
    });
  });
  
  // ===== ESCAPE KEY CLOSES MENUS =====
  window.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      const dropdown = document.getElementById('appsDropdown');
      const menuToggle = document.getElementById('menuToggle');
      const navLinks = document.getElementById('navLinks');
      
      if (dropdown) dropdown.classList.remove('active');
      if (menuToggle) menuToggle.classList.remove('active');
      if (navLinks) navLinks.classList.remove('active');
    }
  });
});
