import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Portfolio: React.FC = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'system'>('all');

  const projects = [
    {
      id: 'bioshop',
      title: 'BIOSHOP ERP',
      category: 'system',
      image: '/images/work/1.png',
      badge: 'port_sys_badge',
      desc: 'port_p1_desc',
      tech: ['SaaS', 'ERP & SIFEN', 'Plan Mensual'],
      link: '#products',
      external: false
    },
    {
      id: 'bioshop-catalog',
      title: 'BIOSHOP Catálogo',
      category: 'web',
      image: '/images/work/bioshop-catalog.png',
      badge: 'port_web_badge',
      desc: 'port_p4_desc',
      tech: ['E-Commerce', 'Tienda Virtual', 'SaaS Sync'],
      link: 'https://bioshop-demo.bio.com.py/catalog',
      external: true
    },
    {
      id: 'ruc',
      title: 'Datos RUC Py',
      category: 'web',
      image: '/images/work/3.jpg',
      badge: 'port_web_badge',
      desc: 'port_p2_desc',
      tech: ['PWA', 'API REST', 'JavaScript'],
      link: 'https://datosruc.bio.com.py/',
      external: true
    },
    {
      id: 'btu',
      title: 'Calcular BTU',
      category: 'web',
      image: '/images/work/2.png',
      badge: 'port_web_badge',
      desc: 'port_p3_desc',
      tech: ['PWA', 'Web App', 'Climatización'],
      link: 'https://calcularbtu.bio.com.py/',
      external: true
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const getProjectLinkKey = (id: string): 'port_p1_link' | 'port_p2_link' | 'port_p3_link' | 'port_p4_link' => {
    switch (id) {
      case 'bioshop': return 'port_p1_link';
      case 'bioshop-catalog': return 'port_p4_link';
      case 'ruc': return 'port_p2_link';
      case 'btu': return 'port_p3_link';
      default: return 'port_p1_link';
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string, external: boolean) => {
    if (!external) {
      e.preventDefault();
      const element = document.querySelector(link);
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
    }
  };

  return (
    <section className="portfolio py-24 px-6 md:px-12 relative border-b border-gray-200/20 dark:border-gray-800/20" id="portfolio">
      <div className="container max-w-7xl mx-auto">
        <div className="section-header text-center mb-16 max-w-3xl mx-auto">
          <span className="section-tag inline-block py-1.5 px-4 rounded-full text-xs font-bold border border-primary/20 bg-primary/10 text-primary uppercase tracking-wider mb-4">
            {t('portfolio_tag')}
          </span>
          <h2 className="section-title text-3xl md:text-4xl font-extrabold text-dark dark:text-white leading-tight mb-4">
            {t('portfolio_title')}
          </h2>
          <p className="section-subtitle text-gray/80 dark:text-gray/90 text-lg">
            {t('portfolio_subtitle')}
          </p>
        </div>

        {/* Filters */}
        <div className="portfolio-filters flex justify-center gap-3 mb-12 flex-wrap">
          <button 
            className={`filter-btn py-2 px-6 rounded-full text-sm font-bold border transition-all cursor-pointer ${
              activeFilter === 'all' 
                ? 'bg-primary border-primary text-white shadow-md shadow-primary/20' 
                : 'bg-white/40 dark:bg-gray-800/40 border-primary/10 dark:border-primary/5 text-dark dark:text-white hover:border-primary/30'
            }`}
            onClick={() => setActiveFilter('all')}
          >
            {t('port_filter_all')}
          </button>
          <button 
            className={`filter-btn py-2 px-6 rounded-full text-sm font-bold border transition-all cursor-pointer ${
              activeFilter === 'web' 
                ? 'bg-primary border-primary text-white shadow-md shadow-primary/20' 
                : 'bg-white/40 dark:bg-gray-800/40 border-primary/10 dark:border-primary/5 text-dark dark:text-white hover:border-primary/30'
            }`}
            onClick={() => setActiveFilter('web')}
          >
            {t('port_filter_web')}
          </button>
          <button 
            className={`filter-btn py-2 px-6 rounded-full text-sm font-bold border transition-all cursor-pointer ${
              activeFilter === 'system' 
                ? 'bg-primary border-primary text-white shadow-md shadow-primary/20' 
                : 'bg-white/40 dark:bg-gray-800/40 border-primary/10 dark:border-primary/5 text-dark dark:text-white hover:border-primary/30'
            }`}
            onClick={() => setActiveFilter('system')}
          >
            {t('port_filter_sys')}
          </button>
        </div>

        {/* Grid: 4 columns in desktop, responsive in tablets and mobile */}
        <div className="portfolio-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="project-card flex flex-col bg-white dark:bg-gray-800/30 border border-gray-200/50 dark:border-gray-700/50 rounded-2xl overflow-hidden shadow-sm hover:translate-y-[-8px] hover:shadow-xl hover:border-primary/50 transition-all duration-300"
            >
              <div className="project-img-wrapper relative overflow-hidden aspect-16/10 group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="project-overlay absolute inset-0 bg-linear-to-t from-gray-950/80 via-gray-950/20 to-transparent opacity-0 group-hover:opacity-100 flex items-end p-4 transition-opacity duration-300">
                  <span className="project-tag-badge bg-primary text-white text-[11px] font-bold py-1 px-2.5 rounded-full uppercase tracking-wider">
                    {t(project.badge as any)}
                  </span>
                </div>
              </div>
              <div className="project-info p-5 flex-grow flex flex-col">
                <h3 className="text-lg font-bold text-dark dark:text-white mb-2">{project.title}</h3>
                <p className="text-xs md:text-sm text-gray/80 dark:text-gray/90 leading-relaxed mb-4 flex-grow">
                  {t(project.desc as any)}
                </p>
                <div className="project-tech flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="text-[11px] font-semibold text-primary bg-primary/10 py-0.5 px-2 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  target={project.external ? "_blank" : undefined}
                  rel={project.external ? "noreferrer" : undefined}
                  onClick={(e) => handleLinkClick(e, project.link, project.external)}
                  className="project-link inline-flex items-center gap-1.5 text-primary font-bold text-xs md:text-sm no-underline hover:text-primary-dark transition-colors"
                >
                  <span>{t(getProjectLinkKey(project.id))}</span>
                  <i className={`fas ${project.external ? 'fa-external-link-alt' : 'fa-arrow-right'} text-xs`}></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
