import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { scrollToSection } from '../utils/scroll';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionNav = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate(`/#${targetId}`);
    } else {
      scrollToSection(targetId);
    }
  };

  return (
    <footer className="footer py-12 px-6 md:px-12 bg-white/90 dark:bg-[#060913]/95 backdrop-blur-md border-t border-slate-200/60 dark:border-white/[0.08] relative z-10">
      <div className="container max-w-7xl mx-auto">
        <div className="footer-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-3.5 max-md:items-center max-md:text-center">
            <a
              href="/#home"
              onClick={(e) => handleSectionNav(e, 'home')}
              className="flex items-center gap-2.5 no-underline"
            >
              <img src="/images/onlyLogo.png" alt="BIO Soluciones Tecnológicas" className="w-8 h-8 object-contain" />
              <span className="text-lg font-extrabold tracking-tight bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                BIO
              </span>
            </a>
            <p className="text-xs sm:text-sm text-gray/85 dark:text-slate-400 max-w-sm m-0 leading-relaxed">
              {t('footer_desc')}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-3 max-md:items-center max-md:text-center">
            <h4 className="text-xs font-bold uppercase tracking-wider text-dark dark:text-white mb-1">
              {t('footer_links')}
            </h4>
            <ul className="flex flex-col gap-2 list-none p-0 m-0 text-sm font-medium">
              <li><a href="/#home" onClick={(e) => handleSectionNav(e, 'home')} className="text-gray/85 hover:text-primary dark:text-slate-400 dark:hover:text-white no-underline transition-colors">{t('nav_home')}</a></li>
              <li><a href="/#about" onClick={(e) => handleSectionNav(e, 'about')} className="text-gray/85 hover:text-primary dark:text-slate-400 dark:hover:text-white no-underline transition-colors">{t('nav_about')}</a></li>
              <li><a href="/#portfolio" onClick={(e) => handleSectionNav(e, 'portfolio')} className="text-gray/85 hover:text-primary dark:text-slate-400 dark:hover:text-white no-underline transition-colors">{t('nav_portfolio')}</a></li>
              <li><a href="/#faq" onClick={(e) => handleSectionNav(e, 'faq')} className="text-gray/85 hover:text-primary dark:text-slate-400 dark:hover:text-white no-underline transition-colors">{t('nav_faq')}</a></li>
              <li><a href="/#contact" onClick={(e) => handleSectionNav(e, 'contact')} className="text-gray/85 hover:text-primary dark:text-slate-400 dark:hover:text-white no-underline transition-colors">{t('nav_contact')}</a></li>
            </ul>
          </div>

          {/* Services & Premium SaaS */}
          <div className="flex flex-col gap-3 max-md:items-center max-md:text-center">
            <h4 className="text-xs font-bold uppercase tracking-wider text-dark dark:text-white mb-1">
              {t('footer_services')}
            </h4>
            <ul className="flex flex-col gap-2 list-none p-0 m-0 text-sm font-medium">
              <li>
                <a href="/#products" onClick={(e) => handleSectionNav(e, 'products')} className="text-gray/85 hover:text-primary dark:text-slate-400 dark:hover:text-white no-underline transition-colors inline-flex items-center gap-1.5">
                  <span>BIOSHOP ERP &amp; SIFEN</span>
                  <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-600 dark:text-amber-300">
                    {t('apps_section_premium')}
                  </span>
                </a>
              </li>
              <li><a href="/#services" onClick={(e) => handleSectionNav(e, 'services')} className="text-gray/85 hover:text-primary dark:text-slate-400 dark:hover:text-white no-underline transition-colors">{t('services_sys_title')}</a></li>
              <li><a href="/#services" onClick={(e) => handleSectionNav(e, 'services')} className="text-gray/85 hover:text-primary dark:text-slate-400 dark:hover:text-white no-underline transition-colors">{t('services_web_title')}</a></li>
              <li><a href="/#services" onClick={(e) => handleSectionNav(e, 'services')} className="text-gray/85 hover:text-primary dark:text-slate-400 dark:hover:text-white no-underline transition-colors">{t('services_sup_title')}</a></li>
            </ul>
          </div>

          {/* Free Apps */}
          <div className="flex flex-col gap-3 max-md:items-center max-md:text-center">
            <h4 className="text-xs font-bold uppercase tracking-wider text-dark dark:text-white mb-1">
              {t('nav_tools')} ({t('apps_section_free')})
            </h4>
            <ul className="flex flex-col gap-2 list-none p-0 m-0 text-sm font-medium">
              <li>
                <a href="https://datosruc.bio.com.py/" target="_blank" rel="noopener noreferrer" className="text-gray/85 hover:text-primary dark:text-slate-400 dark:hover:text-white no-underline transition-colors inline-flex items-center gap-1.5">
                  <i className="fas fa-id-card text-xs text-primary" /> Datos RUC Py
                </a>
              </li>
              <li>
                <a href="https://calcularbtu.bio.com.py/" target="_blank" rel="noopener noreferrer" className="text-gray/85 hover:text-primary dark:text-slate-400 dark:hover:text-white no-underline transition-colors inline-flex items-center gap-1.5">
                  <i className="fas fa-snowflake text-xs text-secondary" /> Calcular BTU
                </a>
              </li>
              <li>
                <a href="https://qr.bio.com.py/" target="_blank" rel="noopener noreferrer" className="text-gray/85 hover:text-primary dark:text-slate-400 dark:hover:text-white no-underline transition-colors inline-flex items-center gap-1.5">
                  <i className="fas fa-qrcode text-xs text-emerald-500" /> QR &amp; Links
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom border-t border-slate-200/60 dark:border-white/[0.06] pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-xs text-gray dark:text-slate-400 m-0">
            &copy; {currentYear} {t('footer_rights')}
          </p>
          <div className="flex gap-4 text-xs">
            <Link to="/privacidad" onClick={() => window.scrollTo(0, 0)} className="text-gray/85 hover:text-primary dark:text-slate-400 dark:hover:text-white no-underline transition-colors">
              Política de Privacidad
            </Link>
            <Link to="/terminos" onClick={() => window.scrollTo(0, 0)} className="text-gray/85 hover:text-primary dark:text-slate-400 dark:hover:text-white no-underline transition-colors">
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
