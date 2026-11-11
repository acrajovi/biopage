import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { scrollToSection } from '../utils/scroll';

export const Hero: React.FC = () => {
  const { language, t } = useLanguage();
  const [typedText, setTypedText] = useState('');
  const [yearsCount, setYearsCount] = useState(5);
  const [projectsCount, setProjectsCount] = useState(50);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const typeWords: Record<string, string> = { es: 'tecnología', en: 'technology', pt: 'tecnologia' };
    const word = typeWords[language] || typeWords.es;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTypedText(word);
      return;
    }

    setTypedText('');
    let index = 0;
    const interval = setInterval(() => {
      index++;
      setTypedText(word.slice(0, index));
      if (index >= word.length) {
        clearInterval(interval);
      }
    }, 95);

    return () => clearInterval(interval);
  }, [language]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let rafId = 0;
    const start = performance.now();
    const duration = 900;

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setYearsCount(Math.max(1, Math.round(eased * 5)));
      setProjectsCount(Math.max(1, Math.round(eased * 50)));
      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId = 0;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize, { passive: true });

    const count = width < 768 ? 18 : 34;
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.2 + 1,
      speedX: (Math.random() - 0.5) * 0.35,
      speedY: (Math.random() - 0.5) * 0.35,
    }));

    const maxDistSq = 135 * 135;

    const draw = () => {
      if (!document.hidden) {
        ctx.clearRect(0, 0, width, height);
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        ctx.fillStyle = isDark ? 'rgba(129, 140, 248, 0.28)' : 'rgba(99, 102, 241, 0.14)';

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.x += p.speedX;
          p.y += p.speedY;
          if (p.x < 0) p.x = width;
          else if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          else if (p.y > height) p.y = 0;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();

          for (let j = i + 1; j < particles.length; j++) {
            const q = particles[j];
            const dx = p.x - q.x;
            const dy = p.y - q.y;
            const distSq = dx * dx + dy * dy;

            if (distSq < maxDistSq) {
              const alpha = (1 - distSq / maxDistSq) * (isDark ? 0.12 : 0.06);
              ctx.strokeStyle = `rgba(99, 102, 241, ${alpha.toFixed(3)})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(q.x, q.y);
              ctx.stroke();
            }
          }
        }
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleActionClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    scrollToSection(targetId);
  };

  return (
    <section
      className="hero relative min-h-[88vh] sm:min-h-[92vh] flex items-center justify-center pt-24 sm:pt-28 pb-16 sm:pb-20 px-4 sm:px-6 text-center overflow-hidden"
      id="home"
    >
      <canvas ref={canvasRef} id="particles" className="absolute inset-0 w-full h-full -z-10 pointer-events-none" />

      <div className="hero-content relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 py-1.5 px-3.5 sm:px-4 rounded-full text-[11px] sm:text-xs font-semibold border border-slate-200/80 dark:border-white/[0.1] bg-white/75 dark:bg-slate-900/60 backdrop-blur-md shadow-xs mb-5 sm:mb-6 text-slate-700 dark:text-slate-200 max-w-full">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <span className="truncate">{t('hero_status')}</span>
        </div>

        {/* Title */}
        <h1 className="hero-title text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.14] max-w-3xl mb-4 sm:mb-5 text-dark dark:text-white">
          <span>{t('hero_title')} </span>
          <span className="inline-block sm:inline">
            <span className="highlight">{typedText || '\u00A0'}</span>
            <span className="inline-block font-light text-primary animate-pulse ml-0.5">|</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle text-sm sm:text-lg md:text-xl text-gray/85 dark:text-slate-300 max-w-2xl mb-7 sm:mb-8 leading-relaxed px-1">
          {t('hero_subtitle')}
        </p>

        {/* CTA Buttons */}
        <div className="hero-cta flex flex-col sm:flex-row gap-3 w-full max-w-sm sm:max-w-md mb-9 sm:mb-12">
          <a
            href="#contact"
            onClick={(e) => handleActionClick(e, 'contact')}
            className="w-full sm:flex-1 py-3 sm:py-3.5 px-6 rounded-xl font-bold bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all text-center no-underline text-sm sm:text-base"
          >
            {t('btn_quote')}
          </a>
          <a
            href="#portfolio"
            onClick={(e) => handleActionClick(e, 'portfolio')}
            className="w-full sm:flex-1 py-3 sm:py-3.5 px-6 rounded-xl font-bold border border-slate-200 dark:border-white/[0.12] hover:border-primary/50 text-dark dark:text-white bg-white/75 dark:bg-slate-900/60 backdrop-blur-md hover:-translate-y-0.5 transition-all text-center no-underline text-sm sm:text-base"
          >
            {t('nav_portfolio')}
          </a>
        </div>

        {/* Clean Metrics Bar */}
        <div className="w-full max-w-sm sm:max-w-lg grid grid-cols-3 gap-2 sm:gap-8 px-3 sm:px-7 py-3.5 sm:py-4 rounded-2xl glass shadow-xs">
          <div className="flex flex-col items-center min-w-0">
            <span className="text-xl sm:text-3xl font-extrabold text-primary leading-none mb-1">
              {yearsCount}+
            </span>
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-gray dark:text-slate-400 truncate max-w-full">
              {t('stat_years')}
            </span>
          </div>
          <div className="flex flex-col items-center border-x border-slate-200/70 dark:border-white/[0.08] px-2 sm:px-6 min-w-0">
            <span className="text-xl sm:text-3xl font-extrabold text-primary leading-none mb-1">
              {projectsCount}+
            </span>
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-gray dark:text-slate-400 truncate max-w-full">
              {t('stat_projects')}
            </span>
          </div>
          <div className="flex flex-col items-center min-w-0">
            <span className="text-xl sm:text-3xl font-extrabold text-primary leading-none mb-1">
              24/7
            </span>
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-gray dark:text-slate-400 truncate max-w-full">
              {t('stat_support')}
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator mouse */}
      <div className="scroll-indicator absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center max-md:hidden opacity-60">
        <div className="w-5 h-8 border-2 border-slate-400 dark:border-slate-500 rounded-full flex justify-center p-1">
          <div className="w-1 h-1.5 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};
