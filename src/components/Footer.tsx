import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
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
    <footer className="footer py-12 px-6 md:px-12 bg-white dark:bg-gray-900 border-t border-gray-200/50 dark:border-gray-800/50 relative z-10">
      <div className="container max-w-7xl mx-auto">
        <div className="footer-content grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="footer-brand flex flex-col gap-4 max-md:items-center max-md:text-center">
            <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="logo flex items-center gap-3 no-underline">
              <img src="/images/onlyLogo.png" alt="BIO" className="logo-img w-9 h-9 object-contain" />
              <span className="logo-text text-xl font-extrabold tracking-tight bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">BIO</span>
            </a>
            <p className="text-sm text-gray/80 dark:text-gray/90 max-w-sm m-0">
              {t('footer_desc')}
            </p>
          </div>

          {/* Links */}
          <div className="footer-links flex flex-col gap-4 max-md:items-center max-md:text-center">
            <h4 className="text-sm font-bold uppercase tracking-wider text-dark dark:text-white mb-2">{t('footer_links')}</h4>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0 text-sm font-medium">
              <li><a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="text-gray/80 hover:text-primary dark:text-gray/90 dark:hover:text-primary no-underline transition-colors">Inicio</a></li>
              <li><a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="text-gray/80 hover:text-primary dark:text-gray/90 dark:hover:text-primary no-underline transition-colors">Nosotros</a></li>
              <li><a href="#process" onClick={(e) => handleLinkClick(e, 'process')} className="text-gray/80 hover:text-primary dark:text-gray/90 dark:hover:text-primary no-underline transition-colors">Proceso</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="text-gray/80 hover:text-primary dark:text-gray/90 dark:hover:text-primary no-underline transition-colors">Servicios</a></li>
              <li><a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="text-gray/80 hover:text-primary dark:text-gray/90 dark:hover:text-primary no-underline transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-links flex flex-col gap-4 max-md:items-center max-md:text-center">
            <h4 className="text-sm font-bold uppercase tracking-wider text-dark dark:text-white mb-2">{t('footer_services')}</h4>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0 text-sm font-medium">
              <li><a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="text-gray/80 hover:text-primary dark:text-gray/90 dark:hover:text-primary no-underline transition-colors">Sistemas de Gestión</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="text-gray/80 hover:text-primary dark:text-gray/90 dark:hover:text-primary no-underline transition-colors">Páginas Web</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="text-gray/80 hover:text-primary dark:text-gray/90 dark:hover:text-primary no-underline transition-colors">Apps Móviles</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="text-gray/80 hover:text-primary dark:text-gray/90 dark:hover:text-primary no-underline transition-colors">Soporte Técnico</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom border-t border-gray-200/40 dark:border-gray-800/40 pt-6 text-center">
          <p className="text-xs text-gray dark:text-gray/90 m-0 leading-relaxed">
            &copy; {currentYear} {t('footer_rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};
