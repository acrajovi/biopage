import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const TechStack: React.FC = () => {
  const { t } = useLanguage();

  const technologies = [
    { name: 'React', icon: 'fab fa-react' },
    { name: 'Node.js', icon: 'fab fa-node-js' },
    { name: 'TypeScript', icon: 'fab fa-js-square' },
    { name: 'Flutter', icon: 'fas fa-mobile-alt' },
    { name: 'PostgreSQL', icon: 'fas fa-database' },
    { name: 'Docker', icon: 'fab fa-docker' },
    { name: 'AWS', icon: 'fab fa-aws' },
    { name: 'Python', icon: 'fab fa-python' }
  ];

  return (
    <section className="tech-stack py-24 px-6 md:px-12 relative border-b border-gray-200/20 dark:border-gray-800/20" id="tech-stack">
      <div className="container max-w-7xl mx-auto">
        <div className="section-header text-center mb-16 max-w-3xl mx-auto">
          <span className="section-tag inline-block py-1.5 px-4 rounded-full text-xs font-bold border border-primary/20 bg-primary/10 text-primary uppercase tracking-wider mb-4">
            {t('tech_tag')}
          </span>
          <h2 className="section-title text-3xl md:text-4xl font-extrabold text-dark dark:text-white leading-tight mb-4">
            {t('tech_title')}
          </h2>
          <p className="section-subtitle text-gray/80 dark:text-gray/90 text-lg">
            {t('tech_subtitle')}
          </p>
        </div>

        <div className="tech-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="tech-card p-6 flex flex-col items-center justify-center gap-4 bg-white dark:bg-gray-800/40 border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-sm hover:translate-y-[-5px] hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <i className={`${tech.icon} text-4xl bg-linear-to-r from-primary to-accent bg-clip-text text-transparent`}></i>
              <span className="text-sm font-semibold text-dark dark:text-white">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
