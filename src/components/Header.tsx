import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import type { SupportedLanguages } from '../context/translations';
import { scrollToSection } from '../utils/scroll';

interface HeaderProps {
  scrolled: boolean;
}

export const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [appsDropdownOpen, setAppsDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

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
    } catch {
      // storage disabled
    }
  }, [theme]);

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
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setAppsDropdownOpen(false);
        setLangDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const navigateToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setAppsDropdownOpen(false);

    if (location.pathname !== '/') {
      navigate(`/#${targetId}`);
    } else {
      scrollToSection(targetId);
    }
  };

  const getLangFlag = (lang: SupportedLanguages) => {
    if (lang === 'es') return '🇵🇾';
    if (lang === 'en') return '🇺🇸';
    return '🇧🇷';
  };

  const freeApps = [
    {
      name: 'Datos RUC Py',
      desc: t('apps_ruc_desc'),
      href: 'https://datosruc.bio.com.py/',
      icon: 'fa-id-card',
    },
    {
      name: 'Calcular BTU',
      desc: t('apps_btu_desc'),
      href: 'https://calcularbtu.bio.com.py/',
      icon: 'fa-temperature-low',
    },
    {
      name: 'QR & Links',
      desc: t('apps_qr_desc'),
      href: 'https://qr.bio.com.py/',
      icon: 'fa-qrcode',
    },
  ];

  const navLinkClass =
    'nav-link block py-2.5 px-3.5 md:py-2 md:px-3 text-sm font-semibold rounded-xl text-dark/90 dark:text-slate-200 hover:text-primary dark:hover:text-white hover:bg-primary/8 dark:hover:bg-white/[0.06] transition-colors no-underline whitespace-nowrap';

  return (
    <header
      className={`header fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        scrolled
          ? 'py-2.5 bg-white/85 dark:bg-[#060913]/85 shadow-sm backdrop-blur-xl border-b border-slate-200/60 dark:border-white/[0.07]'
          : 'py-4 bg-transparent'
      }`}
    >
      <nav className="nav max-w-7xl mx-auto px-5 md:px-8" aria-label="Navegación principal">
        <div className="nav-container flex items-center justify-between gap-4">
          <a
            href="#home"
            onClick={(e) => navigateToSection(e, 'home')}
            className="logo flex items-center gap-2.5 no-underline shrink-0"
          >
            <img src="/images/onlyLogo.png" alt="BIO Soluciones Tecnológicas" className="w-8 h-8 object-contain" />
            <span className="text-lg font-extrabold tracking-tight bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              BIO
            </span>
          </a>

          <button
            type="button"
            className="menu-toggle flex md:hidden flex-col justify-between w-6 h-4.5 bg-transparent border-none cursor-pointer z-[101]"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className={`w-full h-[2px] bg-dark dark:bg-white rounded-sm transition-all duration-300 origin-left ${mobileMenuOpen ? 'rotate-45 translate-y-[-1px]' : ''}`} />
            <span className={`w-full h-[2px] bg-dark dark:bg-white rounded-sm transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-[2px] bg-dark dark:bg-white rounded-sm transition-all duration-300 origin-left ${mobileMenuOpen ? '-rotate-45 translate-y-[1px]' : ''}`} />
          </button>

          <ul
            className={`nav-links items-center gap-1 list-none m-0 p-0 transition-all duration-300 md:static md:flex ${
              mobileMenuOpen
                ? 'flex fixed top-[64px] left-4 right-4 p-4 flex-col items-stretch bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-2xl border border-slate-200/70 dark:border-white/[0.08] rounded-2xl max-h-[calc(100vh-84px)] overflow-y-auto'
                : 'hidden'
            }`}
          >
            <li className="w-full md:w-auto">
              <a href="#home" onClick={(e) => navigateToSection(e, 'home')} className={navLinkClass}>
                {t('nav_home')}
              </a>
            </li>
            <li className="w-full md:w-auto">
              <a href="#about" onClick={(e) => navigateToSection(e, 'about')} className={navLinkClass}>
                {t('nav_about')}
              </a>
            </li>
            <li className="w-full md:w-auto">
              <a href="#services" onClick={(e) => navigateToSection(e, 'services')} className={navLinkClass}>
                {t('nav_services')}
              </a>
            </li>
            <li className="w-full md:w-auto">
              <a href="#portfolio" onClick={(e) => navigateToSection(e, 'portfolio')} className={navLinkClass}>
                {t('nav_portfolio')}
              </a>
            </li>

            {/* Grouped Apps Dropdown (Premium BIOSHOP first, then Free tools) */}
            <li ref={appsRef} className="dropdown relative w-full md:w-auto">
              <button
                type="button"
                aria-expanded={appsDropdownOpen}
                onClick={() => setAppsDropdownOpen((prev) => !prev)}
                className={`${navLinkClass} w-full flex items-center justify-between gap-1.5 border-none bg-transparent cursor-pointer`}
              >
                <span>{t('nav_apps')}</span>
                <i className={`fas fa-chevron-down text-[10px] transition-transform duration-200 ${appsDropdownOpen ? 'rotate-180 text-primary' : 'opacity-70'}`} />
              </button>

              <div
                className={`w-full md:w-72 md:absolute md:top-full md:right-0 mt-1.5 p-2.5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl md:shadow-2xl border border-slate-200/70 dark:border-white/[0.08] rounded-2xl transition-all duration-200 ${
                  appsDropdownOpen ? 'block animate-[fadeIn_0.18s_ease-out]' : 'hidden'
                }`}
              >
                {/* Premium Division */}
                <div className="px-2.5 pt-1 pb-1.5 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                    {t('apps_section_premium')}
                  </span>
                  <span className="h-px flex-grow ml-2 bg-amber-500/20" />
                </div>

                <a
                  href="#products"
                  onClick={(e) => navigateToSection(e, 'products')}
                  className="flex items-center justify-between gap-3 p-2.5 rounded-xl bg-linear-to-r from-primary/8 to-accent/8 hover:from-primary/14 hover:to-accent/14 border border-primary/20 dark:border-primary/25 transition-all no-underline group"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center text-xs shrink-0 shadow-xs">
                      <i className="fas fa-cubes" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-bold text-dark dark:text-white group-hover:text-primary transition-colors">
                        BIOSHOP
                      </div>
                      <div className="text-[11px] text-gray/80 dark:text-slate-400 truncate">
                        {t('apps_bioshop_desc')}
                      </div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30 shrink-0">
                    {t('apps_section_premium')}
                  </span>
                </a>

                {/* Free Division */}
                <div className="px-2.5 pt-3 pb-1.5 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                    {t('apps_section_free')}
                  </span>
                  <span className="h-px flex-grow ml-2 bg-emerald-500/20" />
                </div>

                <div className="space-y-1">
                  {freeApps.map((app) => (
                    <a
                      key={app.name}
                      href={app.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        setAppsDropdownOpen(false);
                        setMobileMenuOpen(false);
                      }}
                      className="flex items-center justify-between gap-2.5 p-2 rounded-xl hover:bg-slate-100/80 dark:hover:bg-white/[0.06] transition-colors no-underline group"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 text-primary dark:text-secondary flex items-center justify-center text-xs shrink-0 group-hover:scale-105 transition-transform">
                          <i className={`fas ${app.icon}`} />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-dark dark:text-slate-100 group-hover:text-primary transition-colors">
                            {app.name}
                          </div>
                          <div className="text-[11px] text-gray/75 dark:text-slate-400 truncate">
                            {app.desc}
                          </div>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-emerald-500/12 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25 shrink-0">
                        {t('apps_section_free')}
                      </span>
                    </a>
                  ))}
                </div>

                <div className="mt-2 pt-2 border-t border-slate-200/70 dark:border-white/[0.06]">
                  <a
                    href="#tools"
                    onClick={(e) => navigateToSection(e, 'tools')}
                    className="flex items-center justify-center gap-1.5 py-1.5 text-xs font-semibold text-primary hover:text-primary-dark dark:text-indigo-400 no-underline transition-colors"
                  >
                    <span>{t('apps_view_all')}</span>
                    <i className="fas fa-arrow-right text-[10px]" />
                  </a>
                </div>
              </div>
            </li>

            <li className="w-full md:w-auto">
              <a href="#contact" onClick={(e) => navigateToSection(e, 'contact')} className={navLinkClass}>
                {t('nav_contact')}
              </a>
            </li>

            <li className="hidden md:block h-5 w-px bg-slate-200/80 dark:bg-white/[0.1] mx-1" aria-hidden="true" />

            {/* Language & Theme Controls */}
            <li ref={langRef} className="dropdown relative w-full md:w-auto">
              <button
                type="button"
                aria-expanded={langDropdownOpen}
                onClick={() => setLangDropdownOpen((prev) => !prev)}
                className={`${navLinkClass} w-full flex items-center justify-between gap-1.5 border-none bg-transparent cursor-pointer`}
              >
                <span className="flex items-center gap-1.5 text-xs font-bold">
                  {getLangFlag(language)} {language.toUpperCase()}
                </span>
                <i className={`fas fa-chevron-down text-[10px] transition-transform duration-200 ${langDropdownOpen ? 'rotate-180' : 'opacity-70'}`} />
              </button>
              <ul
                className={`dropdown-menu w-full md:absolute md:top-full md:right-0 md:w-40 mt-1.5 p-1.5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl md:shadow-xl border border-slate-200/70 dark:border-white/[0.08] rounded-xl list-none ${
                  langDropdownOpen ? 'block' : 'hidden'
                }`}
              >
                {(['es', 'en', 'pt'] as SupportedLanguages[]).map((langOption) => (
                  <li key={langOption}>
                    <button
                      type="button"
                      onClick={() => {
                        setLanguage(langOption);
                        setLangDropdownOpen(false);
                        setMobileMenuOpen(false);
                      }}
                      className="w-full flex items-center gap-2 p-2 text-xs font-semibold rounded-lg text-dark dark:text-slate-200 hover:bg-primary/10 text-left cursor-pointer border-none bg-transparent"
                    >
                      <span>{getLangFlag(langOption)}</span>
                      <span>
                        {langOption === 'es' ? 'Español' : langOption === 'en' ? 'English' : 'Português'}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </li>

            <li className="w-full md:w-auto flex justify-center md:block pt-2 md:pt-0">
              <button
                type="button"
                onClick={toggleTheme}
                className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-100/90 dark:bg-white/[0.06] hover:bg-primary/10 dark:hover:bg-white/[0.12] text-dark dark:text-slate-200 border border-slate-200/60 dark:border-white/[0.08] cursor-pointer transition-colors"
                aria-label="Toggle theme"
              >
                <i className={`fas ${theme === 'dark' ? 'fa-sun text-amber-400' : 'fa-moon text-primary'} text-sm`} />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
