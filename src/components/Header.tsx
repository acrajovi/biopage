import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import type { SupportedLanguages } from '../context/translations';

interface HeaderProps {
  scrolled: boolean;
}

export const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [appsDropdownOpen, setAppsDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark' || saved === 'light') return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });

  const appsRef = useRef<HTMLLIElement>(null);
  const langRef = useRef<HTMLLIElement>(null);

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
      root.classList.add('dark');
    } else {
      root.removeAttribute('data-theme');
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('theme', theme);
    } catch {}
  }, [theme]);

  // Click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (appsRef.current && !appsRef.current.contains(target)) {
        setAppsDropdownOpen(false);
      }
      if (langRef.current && !langRef.current.contains(target)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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

  const getLangFlag = (lang: SupportedLanguages) => {
    if (lang === 'es') return '🇵🇾';
    if (lang === 'en') return '🇺🇸';
    return '🇧🇷';
  };

  return (
    <header className={`header fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
      scrolled 
        ? 'py-3 bg-white/80 dark:bg-gray-900/80 shadow-md backdrop-blur-md border-b border-gray-200/20 dark:border-gray-800/20' 
        : 'py-5 bg-transparent'
    }`}>
      <nav className="nav max-w-7xl mx-auto px-6 md:px-8">
        <div className="nav-container flex items-center justify-between">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="logo flex items-center gap-3 no-underline">
            <img src="/images/onlyLogo.png" alt="BIO" className="logo-img w-9 h-9 object-contain" />
            <span className="logo-text text-xl font-extrabold tracking-tight bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">BIO</span>
          </a>
          
          <button 
            className="menu-toggle flex md:hidden flex-col justify-between w-6 h-4.5 bg-transparent border-none cursor-pointer z-[101]"
            onClick={() => setMobileMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            <span className={`w-full h-[2px] bg-dark dark:bg-white rounded-sm transition-all duration-300 origin-left ${mobileMenuOpen ? 'rotate-45 translate-y-[-1px]' : ''}`}></span>
            <span className={`w-full h-[2px] bg-dark dark:bg-white rounded-sm transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-[2px] bg-dark dark:bg-white rounded-sm transition-all duration-300 origin-left ${mobileMenuOpen ? '-rotate-45 translate-y-[1px]' : ''}`}></span>
          </button>

          <ul className={`nav-links flex items-center gap-1 md:gap-2 list-none m-0 p-0 transition-all duration-300 md:static ${
            mobileMenuOpen 
              ? 'fixed top-[70px] left-6 right-6 p-6 flex-col bg-white dark:bg-gray-900 shadow-xl border border-gray-200/50 dark:border-gray-800/50 rounded-xl max-h-[calc(100vh-100px)] overflow-y-auto translate-y-0 opacity-100 visible' 
              : 'max-md:fixed max-md:top-[70px] max-md:left-6 max-md:right-6 max-md:p-6 max-md:flex-col max-md:bg-white max-md:dark:bg-gray-900 max-md:shadow-xl max-md:border max-md:border-gray-200/50 max-md:dark:border-gray-800/50 max-md:rounded-xl max-md:translate-y-[-150%] max-md:opacity-0 max-md:visibility-hidden max-md:pointer-events-none'
          }`}>
            <li className="w-full md:w-auto"><a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="nav-link block py-3 px-4 md:py-2 md:px-3 text-sm font-semibold rounded-lg text-dark dark:text-white hover:bg-primary/8 dark:hover:bg-primary/10 transition-colors no-underline">{t('nav_home')}</a></li>
            <li className="w-full md:w-auto"><a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="nav-link block py-3 px-4 md:py-2 md:px-3 text-sm font-semibold rounded-lg text-dark dark:text-white hover:bg-primary/8 dark:hover:bg-primary/10 transition-colors no-underline">{t('nav_about')}</a></li>
            <li className="w-full md:w-auto"><a href="#process" onClick={(e) => handleNavClick(e, 'process')} className="nav-link block py-3 px-4 md:py-2 md:px-3 text-sm font-semibold rounded-lg text-dark dark:text-white hover:bg-primary/8 dark:hover:bg-primary/10 transition-colors no-underline">{t('nav_process')}</a></li>
            <li className="w-full md:w-auto"><a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="nav-link block py-3 px-4 md:py-2 md:px-3 text-sm font-semibold rounded-lg text-dark dark:text-white hover:bg-primary/8 dark:hover:bg-primary/10 transition-colors no-underline">{t('nav_services')}</a></li>
            <li className="w-full md:w-auto"><a href="#portfolio" onClick={(e) => handleNavClick(e, 'portfolio')} className="nav-link block py-3 px-4 md:py-2 md:px-3 text-sm font-semibold rounded-lg text-dark dark:text-white hover:bg-primary/8 dark:hover:bg-primary/10 transition-colors no-underline">{t('nav_portfolio')}</a></li>
            <li className="w-full md:w-auto"><a href="#products" onClick={(e) => handleNavClick(e, 'products')} className="nav-link block py-3 px-4 md:py-2 md:px-3 text-sm font-semibold rounded-lg text-dark dark:text-white hover:bg-primary/8 dark:hover:bg-primary/10 transition-colors no-underline">{t('nav_products')}</a></li>
            
            {/* Apps Dropdown */}
            <li ref={appsRef} className="dropdown relative w-full md:w-auto">
              <a 
                href="javascript:void(0)" 
                onClick={() => setAppsDropdownOpen(prev => !prev)}
                className="nav-link flex items-center justify-between py-3 px-4 md:py-2 md:px-3 text-sm font-semibold rounded-lg text-dark dark:text-white hover:bg-primary/8 dark:hover:bg-primary/10 transition-colors no-underline"
              >
                <span>{t('nav_apps')}</span>
                <i className={`fas fa-chevron-down ml-1 text-xs transition-transform duration-300 ${appsDropdownOpen ? 'rotate-180' : ''}`}></i>
              </a>
              <ul className={`dropdown-menu w-full md:absolute md:top-full md:left-0 md:w-48 mt-1 p-2 bg-white dark:bg-gray-800 md:shadow-lg border border-gray-200/50 dark:border-gray-700/50 rounded-xl list-none ${
                appsDropdownOpen ? 'block' : 'hidden'
              }`}>
                <li>
                  <a href="https://datosruc.bio.com.py/" target="_blank" rel="noreferrer" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 p-2.5 text-sm font-medium rounded-lg text-dark dark:text-white hover:bg-primary/8 dark:hover:bg-primary/10 no-underline transition-colors">
                    <i className="fas fa-database text-primary"></i> Datos RUC Py
                  </a>
                </li>
                <li>
                  <a href="https://calcularbtu.bio.com.py/" target="_blank" rel="noreferrer" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 p-2.5 text-sm font-medium rounded-lg text-dark dark:text-white hover:bg-primary/8 dark:hover:bg-primary/10 no-underline transition-colors">
                    <i className="fas fa-temperature-low text-primary"></i> Calcular BTU
                  </a>
                </li>
              </ul>
            </li>

            <li className="w-full md:w-auto"><a href="#faq" onClick={(e) => handleNavClick(e, 'faq')} className="nav-link block py-3 px-4 md:py-2 md:px-3 text-sm font-semibold rounded-lg text-dark dark:text-white hover:bg-primary/8 dark:hover:bg-primary/10 transition-colors no-underline">{t('nav_faq')}</a></li>
            <li className="w-full md:w-auto"><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="nav-link block py-3 px-4 md:py-2 md:px-3 text-sm font-semibold rounded-lg text-dark dark:text-white hover:bg-primary/8 dark:hover:bg-primary/10 transition-colors no-underline">{t('nav_contact')}</a></li>
            
            {/* Lang Dropdown */}
            <li ref={langRef} className="dropdown lang-dropdown relative w-full md:w-auto">
              <a 
                href="javascript:void(0)" 
                onClick={() => setLangDropdownOpen(prev => !prev)}
                className="nav-link flex items-center justify-between py-3 px-4 md:py-2 md:px-3 text-sm font-semibold rounded-lg text-dark dark:text-white hover:bg-primary/8 dark:hover:bg-primary/10 transition-colors no-underline"
              >
                <span className="flex items-center gap-1.5">{getLangFlag(language)} {language.toUpperCase()}</span>
                <i className={`fas fa-chevron-down ml-1 text-xs transition-transform duration-300 ${langDropdownOpen ? 'rotate-180' : ''}`}></i>
              </a>
              <ul className={`dropdown-menu w-full md:absolute md:top-full md:right-0 md:w-40 mt-1 p-2 bg-white dark:bg-gray-800 md:shadow-lg border border-gray-200/50 dark:border-gray-700/50 rounded-xl list-none ${
                langDropdownOpen ? 'block' : 'hidden'
              }`}>
                <li>
                  <button onClick={() => { setLanguage('es'); setLangDropdownOpen(false); setMobileMenuOpen(false); }} className="w-full flex items-center gap-2 p-2.5 text-sm font-medium rounded-lg text-dark dark:text-white hover:bg-primary/8 dark:hover:bg-primary/10 text-left cursor-pointer border-none bg-transparent">
                    🇵🇾 Español
                  </button>
                </li>
                <li>
                  <button onClick={() => { setLanguage('en'); setLangDropdownOpen(false); setMobileMenuOpen(false); }} className="w-full flex items-center gap-2 p-2.5 text-sm font-medium rounded-lg text-dark dark:text-white hover:bg-primary/8 dark:hover:bg-primary/10 text-left cursor-pointer border-none bg-transparent">
                    🇺🇸 English
                  </button>
                </li>
                <li>
                  <button onClick={() => { setLanguage('pt'); setLangDropdownOpen(false); setMobileMenuOpen(false); }} className="w-full flex items-center gap-2 p-2.5 text-sm font-medium rounded-lg text-dark dark:text-white hover:bg-primary/8 dark:hover:bg-primary/10 text-left cursor-pointer border-none bg-transparent">
                    🇧🇷 Português
                  </button>
                </li>
              </ul>
            </li>

            {/* Dark Mode Toggle */}
            <li className="w-full md:w-auto flex justify-center md:block pt-3 md:pt-0">
              <button 
                onClick={toggleTheme}
                className="dark-mode-toggle w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-primary/10 dark:hover:bg-primary/15 text-dark dark:text-white border-none cursor-pointer transition-colors"
                aria-label="Toggle theme"
              >
                <i className={`fas ${theme === 'dark' ? 'fa-sun text-yellow-400' : 'fa-moon text-primary'}`}></i>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
