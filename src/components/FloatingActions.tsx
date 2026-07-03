import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const FloatingActions: React.FC = () => {
  const { t } = useLanguage();
  const [scrolledPastThreshold, setScrolledPastThreshold] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setScrolledPastThreshold(scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Floating Call & WhatsApp Buttons */}
      <div 
        className={`fixed right-5 md:right-8 flex flex-col gap-2.5 md:gap-3 z-[998] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolledPastThreshold ? 'bottom-[84px] md:bottom-[100px]' : 'bottom-6 md:bottom-8'
        }`}
      >
        {/* Phone Button */}
        <a 
          href="tel:+595986355113" 
          className="float-btn relative w-[46px] h-[46px] md:w-[50px] md:h-[50px] rounded-full flex items-center justify-center text-white text-xl md:text-2xl shadow-lg bg-linear-to-br from-primary to-accent shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 hover:scale-108 transition-all duration-300 group"
          aria-label="Llamar por teléfono"
        >
          <i className="fas fa-phone"></i>
          <span className="tooltip absolute right-16 bg-white/75 dark:bg-gray-900/75 border border-gray-200/40 dark:border-gray-800/40 text-dark dark:text-white py-1.5 px-3.5 rounded-full text-xs font-bold whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:right-14 transition-all duration-300 shadow-md backdrop-blur-md max-md:hidden">
            {t('float_call')}
          </span>
        </a>

        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/595986355113" 
          target="_blank" 
          rel="noreferrer" 
          className="float-btn relative w-[46px] h-[46px] md:w-[50px] md:h-[50px] rounded-full flex items-center justify-center text-white text-xl md:text-2xl shadow-lg bg-linear-to-br from-emerald-500 to-teal-600 shadow-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-1 hover:scale-108 transition-all duration-300 group"
          aria-label="Escribir por WhatsApp"
        >
          <i className="fab fa-whatsapp"></i>
          <span className="tooltip absolute right-16 bg-white/75 dark:bg-gray-900/75 border border-gray-200/40 dark:border-gray-800/40 text-dark dark:text-white py-1.5 px-3.5 rounded-full text-xs font-bold whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:right-14 transition-all duration-300 shadow-md backdrop-blur-md max-md:hidden">
            {t('float_wa')}
          </span>
        </a>
      </div>

      {/* Return to Top Button */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-6 right-5 md:bottom-8 md:right-8 w-[46px] h-[46px] md:w-12 md:h-12 rounded-full border flex items-center justify-center text-base shadow-lg cursor-pointer transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] z-[999] bg-white/70 dark:bg-gray-800/70 border-gray-200/40 dark:border-gray-700/40 text-dark dark:text-white backdrop-blur-md hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-1 hover:shadow-primary/20 ${
          scrolledPastThreshold 
            ? 'opacity-100 visible translate-y-0 scale-100' 
            : 'opacity-0 invisible translate-y-4 scale-75 pointer-events-none'
        }`}
        aria-label="Volver arriba"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </>
  );
};
