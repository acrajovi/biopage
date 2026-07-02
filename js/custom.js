// Safe localStorage wrapper for file:// protocol support
const safeStorage = {
  getItem(key) {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  },
  setItem(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      // Ignore
    }
  }
};

document.addEventListener('DOMContentLoaded', function() {
  
  // ===== TYPEWRITER EFFECT =====
  const savedLang = safeStorage.getItem('lang') || 'es';
  const typeWords = { es: 'tecnología', en: 'technology', pt: 'tecnologia' };
  let textToType = typeWords[savedLang] || typeWords['es'];
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
  
  // ===== UNIFIED SCROLL SYSTEM (PASSIVE & GPU ACCELERATED) =====
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  const floatingActions = document.querySelector('.floating-actions');
  const header = document.querySelector('.header');
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  const shapes = document.querySelectorAll('.shape');
  
  let lastScrollY = window.scrollY;
  let ticking = false;
  
  function handleScroll() {
    // 1. Header shrink on scroll
    if (header) {
      if (lastScrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
    
    // 2. Scroll to top button visibility (threshold: 80px for early mobile display)
    const threshold = 80;
    if (lastScrollY > threshold) {
      if (scrollTopBtn) scrollTopBtn.classList.add('visible');
      if (floatingActions) floatingActions.classList.add('shift-up');
    } else {
      if (scrollTopBtn) scrollTopBtn.classList.remove('visible');
      if (floatingActions) floatingActions.classList.remove('shift-up');
    }
    
    // 3. Parallax elements (GPU hardware-accelerated via translate3d)
    parallaxElements.forEach(el => {
      const speed = parseFloat(el.getAttribute('data-parallax')) || 0.1;
      const yPos = lastScrollY * speed;
      el.style.transform = `translate3d(0, ${yPos}px, 0)`;
    });
    
    // 4. Parallax floating shapes (GPU hardware-accelerated)
    shapes.forEach((shape, index) => {
      const speed = 0.05 + (index * 0.02);
      shape.style.transform = `translate3d(0, ${lastScrollY * speed}px, 0)`;
    });
    
    ticking = false;
  }
  
  window.addEventListener('scroll', function() {
    lastScrollY = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
    if (!ticking) {
      window.requestAnimationFrame(handleScroll);
      ticking = true;
    }
  }, { passive: true });
  
  // Initialize on load
  handleScroll();
  
  // ===== FORM HANDLING (FORMSUBMIT) =====
  const form = document.getElementById('contactForm');
  const msgDiv = document.getElementById('contactMsg');
  
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(form);
      msgDiv.innerHTML = '<div style="text-align: center; color: var(--gray);">Enviando mensaje...</div>';
      
      fetch('https://formsubmit.co/ajax/acrajovi@gmail.com', {
        method: 'POST',
        body: formData
      })
      .then(function(res) {
        if (!res.ok) {
          throw new Error('Error HTTP ' + res.status);
        }
        return res.json();
      })
      .then(function(data) {
        if (data.success === 'true' || data.success === true) {
          msgDiv.innerHTML = '<div class="success_message" style="color: #0d9488; padding: 16px; background: rgba(13, 148, 136, 0.1); border-radius: var(--radius); text-align: center; border: 1px solid rgba(13, 148, 136, 0.2); font-weight: 500;">¡Mensaje enviado con éxito! Te responderemos a la brevedad.</div>';
          form.reset();
        } else {
          throw new Error(data.message || 'Error al enviar');
        }
      })
      .catch(function(err) {
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
  document.querySelectorAll('#navLinks a').forEach(link => {
    link.addEventListener('click', function() {
      // Don't close menu if it's a dropdown toggle
      if (this.hasAttribute('data-dropdown-button')) {
        return;
      }
      
      if (window.innerWidth <= 768) {
        if (menuToggle) menuToggle.classList.remove('active');
        if (navLinks) navLinks.classList.remove('active');
      }
    });
  });
  
  // ===== SCROLL TO TOP CLICK =====
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', function() {
      window.scrollTo(0, 0);
    });
  }
  
  // ===== DARK MODE TOGGLE =====
  const darkModeToggle = document.getElementById('darkModeToggle');
  const htmlElement = document.documentElement;
  
  // Check for saved preference
  const savedTheme = safeStorage.getItem('theme');
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
      safeStorage.setItem('theme', newTheme);
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
          
          window.scrollTo(0, targetPosition);
        }
      }
    });
  });
  
  // ===== ESCAPE KEY CLOSES MENUS =====
  window.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      const dropdown = document.getElementById('appsDropdown');
      const langDropdown = document.getElementById('langDropdown');
      const menuToggle = document.getElementById('menuToggle');
      const navLinks = document.getElementById('navLinks');
      
      if (dropdown) dropdown.classList.remove('active');
      if (langDropdown) langDropdown.classList.remove('active');
      if (menuToggle) menuToggle.classList.remove('active');
      if (navLinks) navLinks.classList.remove('active');
    }
  });

  // ===== INTERACTIVE CURSOR GLOW =====
  const cursorGlow = document.getElementById('cursor-glow');
  if (cursorGlow && window.matchMedia('(pointer: fine)').matches) {
    document.addEventListener('mousemove', function(e) {
      cursorGlow.style.opacity = '1';
      cursorGlow.style.transform = 'translate3d(' + e.clientX + 'px, ' + e.clientY + 'px, 0) translate3d(-50%, -50%, 0)';
    });
    
    document.addEventListener('mouseleave', function() {
      cursorGlow.style.opacity = '0';
    });
  }

  // ===== DYNAMIC COPYRIGHT YEAR =====
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ===== PORTFOLIO FILTER LOGIC =====
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardFilter = card.getAttribute('data-filter');
        if (filterValue === 'all' || filterValue === cardFilter) {
          card.style.display = 'flex';
          setTimeout(function() {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(function() {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // ===== FAQ ACCORDION LOGIC =====
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const item = header.parentElement;
      const content = item.querySelector('.accordion-content');
      
      document.querySelectorAll('.accordion-item').forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.accordion-content').style.maxHeight = null;
        }
      });

      item.classList.toggle('active');
      if (item.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = null;
      }
    });
  });

  // (Header shrink is handled in the unified scroll handler)

  // ===== INTERNATIONALIZATION (i18n) =====
  function setLanguage(lang) {
    if (typeof translations === 'undefined' || !translations[lang]) return;
    
    // Update texts
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    // Update typewriter word instantly
    textToType = typeWords[lang] || typeWords['es'];
    if (typewriterEl && charIndex >= textToType.length) {
      typewriterEl.textContent = textToType;
    } else if (typewriterEl) {
       // if still typing, we let it finish or reset, but usually it's finished by the time user switches
       typewriterEl.textContent = textToType;
       charIndex = textToType.length; 
    }

    // Update current lang display in navbar
    const currentLangDisplay = document.getElementById('currentLangDisplay');
    if (currentLangDisplay) {
      const flags = { es: '🇵🇾', en: '🇺🇸', pt: '🇧🇷' };
      const flag = flags[lang] || '🇵🇾';
      currentLangDisplay.textContent = `${flag} ${lang.toUpperCase()}`;
    }
    
    // Save preference
    safeStorage.setItem('lang', lang);
  }

  // Language Dropdown Setup
  const langDropdown = document.getElementById('langDropdown');
  if (langDropdown) {
    const langButton = langDropdown.querySelector('[data-dropdown-button]');
    if (langButton) {
      langButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        langDropdown.classList.toggle('active');
      });
    }
    
    document.querySelectorAll('.lang-select').forEach(item => {
      item.addEventListener('click', function(e) {
        e.preventDefault();
        const selectedLang = this.getAttribute('data-lang');
        setLanguage(selectedLang);
        langDropdown.classList.remove('active');
      });
    });
  }

  // Close lang dropdown on outside click
  document.addEventListener('click', function(e) {
    if (langDropdown && !langDropdown.contains(e.target)) {
      langDropdown.classList.remove('active');
    }
  });

  // Initialize Language on Load
  setLanguage(savedLang);

});
