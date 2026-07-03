import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Hero: React.FC = () => {
  const { language, t } = useLanguage();
  const [typedText, setTypedText] = useState('');
  const [yearsCount, setYearsCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Typewriter effect
  useEffect(() => {
    const typeWords: Record<string, string> = { es: 'tecnología', en: 'technology', pt: 'tecnologia' };
    const word = typeWords[language] || typeWords.es;
    setTypedText('');
    
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(word.substring(0, index + 1));
      index++;
      if (index >= word.length) {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [language]);

  // Statistics counters
  useEffect(() => {
    let yearStart = 0;
    let projStart = 0;
    
    const yearInterval = setInterval(() => {
      if (yearStart < 5) {
        yearStart++;
        setYearsCount(yearStart);
      } else {
        clearInterval(yearInterval);
      }
    }, 150);

    const projInterval = setInterval(() => {
      if (projStart < 50) {
        projStart += 2;
        if (projStart > 50) projStart = 50;
        setProjectsCount(projStart);
      } else {
        clearInterval(projInterval);
      }
    }, 40);

    return () => {
      clearInterval(yearInterval);
      clearInterval(projInterval);
    };
  }, []);

  // Particle Canvas Background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particles array
    const particlesArray: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
    }> = [];

    const numberOfParticles = 50;
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const particleColor = isDark ? 'rgba(99, 102, 241, 0.15)' : 'rgba(99, 102, 241, 0.08)';

    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 4 + 1,
        speedX: Math.random() * 0.4 - 0.2,
        speedY: Math.random() * 0.4 - 0.2,
        color: particleColor
      });
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, width, height);
      
      particlesArray.forEach(p => {
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around screen edges
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
      });

      // Connect close particles with lines
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const opacity = (1 - distance / 120) * (isDark ? 0.08 : 0.04);
            ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    drawParticles();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const header = document.querySelector('.header') as HTMLElement;
      const headerHeight = header ? header.offsetHeight : 70;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="hero relative min-h-screen flex items-center justify-center pt-36 pb-24 px-6 text-center overflow-hidden" id="home">
      {/* Background Particles Canvas */}
      <canvas ref={canvasRef} id="particles" className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none" />

      <div className="hero-content relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Badge */}
        <div className="hero-badge inline-block py-2 px-5 rounded-full text-sm font-semibold border border-primary/20 bg-white/40 dark:bg-gray-800/40 backdrop-blur-md shadow-sm mb-6 text-primary">
          {t('hero_badge')}
        </div>

        {/* Title */}
        <h1 className="hero-title text-4xl md:text-6xl font-extrabold tracking-tight leading-tight max-w-3xl mb-6">
          <span>{t('hero_title')} </span>
          <span className="highlight block md:inline">{typedText}</span>
          <span className="cursor inline-block font-light text-primary animate-pulse">|</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle text-lg md:text-xl text-gray/80 dark:text-gray/90 max-w-2xl mb-8">
          {t('hero_subtitle')}
        </p>

        {/* Location Info */}
        <p className="hero-location text-base font-semibold mb-12 flex items-center gap-1.5 text-dark-medium dark:text-white">
          <span>{t('hero_location')}</span>
          <span className="flag">🇵🇾</span>
          <span className="cursor inline-block font-light text-primary animate-pulse">|</span>
        </p>

        {/* CTA Buttons */}
        <div className="hero-cta flex flex-wrap gap-4 justify-center w-full max-w-md mb-14">
          <a 
            href="#contact" 
            onClick={(e) => handleScrollToSection(e, 'contact')} 
            className="btn btn-primary flex-1 py-3.5 px-8 rounded-xl font-bold bg-primary hover:bg-primary-dark text-white shadow-lg hover:shadow-xl transition-all text-center no-underline"
          >
            {t('btn_quote')}
          </a>
          <a 
            href="#services" 
            onClick={(e) => handleScrollToSection(e, 'services')} 
            className="btn btn-secondary flex-1 py-3.5 px-8 rounded-xl font-bold border border-primary/20 hover:border-primary/50 text-dark dark:text-white bg-white/40 dark:bg-gray-800/40 backdrop-blur-md transition-all text-center no-underline"
          >
            {t('btn_services')}
          </a>
        </div>

        {/* Stats */}
        <div className="hero-stats flex flex-wrap gap-12 justify-center items-center">
          <div className="stat flex flex-col items-center">
            <span className="stat-number text-4xl md:text-5xl font-extrabold text-primary leading-none mb-1">{yearsCount}<span className="text-primary">+</span></span>
            <span className="stat-label text-xs font-semibold uppercase tracking-wider text-gray">{t('stat_years')}</span>
          </div>
          <div className="stat flex flex-col items-center">
            <span className="stat-number text-4xl md:text-5xl font-extrabold text-primary leading-none mb-1">{projectsCount}<span className="text-primary">+</span></span>
            <span className="stat-label text-xs font-semibold uppercase tracking-wider text-gray">{t('stat_projects')}</span>
          </div>
          <div className="stat flex flex-col items-center">
            <span className="stat-number text-4xl md:text-5xl font-extrabold text-primary leading-none mb-1">24/7</span>
            <span className="stat-label text-xs font-semibold uppercase tracking-wider text-gray">{t('stat_support')}</span>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator mouse */}
      <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center max-md:hidden opacity-70">
        <div className="mouse w-6 h-10 border-2 border-gray rounded-full flex justify-center p-1.5">
          <div className="wheel w-1 h-2 bg-primary rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};
