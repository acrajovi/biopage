import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Portfolio: React.FC = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'system'>('all');

  const projects = [
    {
      id: 'bioshop',
      title: 'BIOSHOP',
      category: 'system',
      image: '/images/work/1.png',
      badge: 'port_sys_badge',
      desc: 'port_p1_desc',
      tech: ['Web App', 'PostgreSQL', 'Facturación Electrónica'],
      link: '#products',
      external: false
    },
    {
      id: 'ruc',
      title: 'Datos RUC Py',
      category: 'web',
      image: '/images/work/3.jpg',
      badge: 'port_web_badge',
      desc: 'port_p2_desc',
      tech: ['API REST', 'JavaScript', 'Buscador RUC'],
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
      tech: ['Flutter', 'Android & iOS', 'Climatización'],
      link: 'https://calcularbtu.bio.com.py/',
      external: true
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

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

        {/* Grid */}
        <div className="portfolio-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="project-overlay absolute inset-0 bg-linear-to-t from-gray-950/80 via-gray-950/20 to-transparent opacity-0 group-hover:opacity-100 flex items-end p-6 transition-opacity duration-300">
                  <span className="project-tag-badge bg-primary text-white text-xs font-bold py-1 px-3 rounded-full uppercase tracking-wider">
                    {t(project.badge as any)}
                  </span>
                </div>
              </div>
              <div className="project-info p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-dark dark:text-white mb-2">{project.title}</h3>
                <p className="text-sm text-gray/80 dark:text-gray/90 leading-relaxed mb-5 flex-grow">
                  {t(project.desc as any)}
                </p>
                <div className="project-tech flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="text-xs font-semibold text-primary bg-primary/10 py-1 px-2.5 rounded-md"
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
                  className="project-link inline-flex items-center gap-2 text-primary font-bold text-sm no-underline hover:text-primary-dark"
                >
                  <span>{t(project.id === 'bioshop' ? 'port_p1_link' : project.id === 'ruc' ? 'port_p2_link' : 'port_p3_link')}</span>
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
