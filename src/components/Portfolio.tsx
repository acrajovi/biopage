import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import type { TranslationDict } from '../context/translations';
import { Reveal } from './Reveal';
import { scrollToSection } from '../utils/scroll';

interface PortfolioProject {
  id: string;
  title: string;
  category: 'system' | 'web';
  tier: 'premium' | 'free';
  image: string;
  badgeKey: keyof TranslationDict;
  descKey: keyof TranslationDict;
  linkKey: keyof TranslationDict;
  tech: string[];
  link: string;
  external: boolean;
}

const PROJECTS: PortfolioProject[] = [
  {
    id: 'bioshop',
    title: 'BIOSHOP ERP',
    category: 'system',
    tier: 'premium',
    image: '/images/work/1.png',
    badgeKey: 'port_sys_badge',
    descKey: 'port_p1_desc',
    linkKey: 'port_p1_link',
    tech: ['SaaS', 'ERP & SIFEN', 'Multi-sucursal'],
    link: '#products',
    external: false,
  },
  {
    id: 'bioshop-catalog',
    title: 'BIOSHOP Catálogo',
    category: 'web',
    tier: 'premium',
    image: '/images/work/bioshop-catalog.jpg',
    badgeKey: 'port_web_badge',
    descKey: 'port_p4_desc',
    linkKey: 'port_p4_link',
    tech: ['E-Commerce', 'Tienda Virtual', 'Sync ERP'],
    link: 'https://bioshop-demo.bio.com.py/catalog',
    external: true,
  },
  {
    id: 'ruc',
    title: 'Datos RUC Py',
    category: 'web',
    tier: 'free',
    image: '/images/work/3.jpg',
    badgeKey: 'port_web_badge',
    descKey: 'port_p2_desc',
    linkKey: 'port_p2_link',
    tech: ['PWA', 'DNIT / RUC', 'API REST'],
    link: 'https://datosruc.bio.com.py/',
    external: true,
  },
  {
    id: 'btu',
    title: 'Calcular BTU',
    category: 'web',
    tier: 'free',
    image: '/images/work/2.png',
    badgeKey: 'port_web_badge',
    descKey: 'port_p3_desc',
    linkKey: 'port_p3_link',
    tech: ['PWA', 'Next.js', 'Climatización'],
    link: 'https://calcularbtu.bio.com.py/',
    external: true,
  },
  {
    id: 'qr-links',
    title: 'QR & Links',
    category: 'web',
    tier: 'free',
    image: '/images/work/qr-links.jpg',
    badgeKey: 'port_web_badge',
    descKey: 'port_p5_desc',
    linkKey: 'port_p5_link',
    tech: ['PWA', 'QR Permanentes', 'wa.me'],
    link: 'https://qr.bio.com.py/',
    external: true,
  },
];

export const Portfolio: React.FC = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'system'>('all');

  const filteredProjects =
    activeFilter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === activeFilter);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: string,
    external: boolean
  ) => {
    if (!external) {
      e.preventDefault();
      scrollToSection(link);
    }
  };

  return (
    <section
      className="portfolio py-24 px-6 md:px-12 relative border-b border-slate-200/50 dark:border-white/[0.06]"
      id="portfolio"
    >
      <div className="container max-w-7xl mx-auto">
        <Reveal className="section-header text-center mb-12 max-w-3xl mx-auto">
          <span className="section-tag inline-block py-1.5 px-4 rounded-full text-xs font-bold border border-primary/20 bg-primary/10 text-primary uppercase tracking-wider mb-4">
            {t('portfolio_tag')}
          </span>
          <h2 className="section-title text-3xl md:text-4xl font-extrabold text-dark dark:text-white leading-tight mb-3 tracking-tight">
            {t('portfolio_title')}
          </h2>
          <p className="section-subtitle text-gray/80 dark:text-slate-400 text-base md:text-lg">
            {t('portfolio_subtitle')}
          </p>
        </Reveal>

        {/* Filters */}
        <div className="portfolio-filters flex justify-center gap-2.5 mb-10 flex-wrap">
          {(
            [
              { key: 'all', label: t('port_filter_all') },
              { key: 'web', label: t('port_filter_web') },
              { key: 'system', label: t('port_filter_sys') },
            ] as const
          ).map((tab) => (
            <button
              key={tab.key}
              type="button"
              className={`py-2 px-5 rounded-full text-xs md:text-sm font-bold border transition-all cursor-pointer ${
                activeFilter === tab.key
                  ? 'bg-primary border-primary text-white shadow-md shadow-primary/20'
                  : 'bg-white/70 dark:bg-slate-900/50 border-slate-200/80 dark:border-white/[0.08] text-dark dark:text-slate-200 hover:border-primary/40'
              }`}
              onClick={() => setActiveFilter(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="portfolio-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <Reveal key={project.id} delayMs={idx * 60}>
              <article className="bio-card h-full flex flex-col bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/70 dark:border-white/[0.08] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/45">
                <div className="relative overflow-hidden aspect-16/10 group bg-slate-100 dark:bg-slate-800">
                  <img
                    src={project.image}
                    alt={`${project.title} - BIO Soluciones Tecnológicas`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 flex items-center gap-1.5">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-md border shadow-xs ${
                        project.tier === 'premium'
                          ? 'bg-amber-500/90 text-white border-amber-300/40'
                          : 'bg-emerald-600/90 text-white border-emerald-300/40'
                      }`}
                    >
                      {t(project.tier === 'premium' ? 'port_badge_premium' : 'port_badge_free')}
                    </span>
                  </div>
                  <div className="project-overlay absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/15 to-transparent opacity-0 group-hover:opacity-100 flex items-end p-4 transition-opacity duration-300">
                    <span className="bg-primary/90 text-white text-[11px] font-bold py-1 px-2.5 rounded-full uppercase tracking-wider">
                      {t(project.badgeKey)}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-grow flex flex-col">
                  <h3 className="text-lg font-bold text-dark dark:text-white mb-2 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray/85 dark:text-slate-300 leading-relaxed mb-4 flex-grow">
                    {t(project.descKey)}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-semibold text-primary dark:text-indigo-300 bg-primary/10 dark:bg-primary/15 py-0.5 px-2 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target={project.external ? '_blank' : undefined}
                    rel={project.external ? 'noopener noreferrer' : undefined}
                    onClick={(e) => handleLinkClick(e, project.link, project.external)}
                    className="inline-flex items-center gap-1.5 text-primary dark:text-indigo-400 font-bold text-xs md:text-sm no-underline hover:text-primary-dark transition-colors"
                  >
                    <span>{t(project.linkKey)}</span>
                    <i className={`fas ${project.external ? 'fa-arrow-up-right-from-square' : 'fa-arrow-right'} text-xs`} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
