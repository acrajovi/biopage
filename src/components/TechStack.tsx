import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from './Reveal';

const TECHNOLOGIES = [
  { name: 'React & Next.js', icon: 'fab fa-react' },
  { name: 'Node.js & NestJS', icon: 'fab fa-node-js' },
  { name: 'TypeScript', icon: 'fas fa-code' },
  { name: 'Flutter', icon: 'fas fa-mobile-alt' },
  { name: 'PostgreSQL', icon: 'fas fa-database' },
  { name: 'Docker', icon: 'fab fa-docker' },
  { name: 'Cloud VPS / AWS', icon: 'fab fa-aws' },
  { name: 'Python', icon: 'fab fa-python' },
];

export const TechStack: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      className="tech-stack py-20 px-6 md:px-12 relative border-b border-slate-200/50 dark:border-white/[0.06]"
      id="tech-stack"
    >
      <div className="container max-w-7xl mx-auto">
        <Reveal className="section-header text-center mb-12 max-w-3xl mx-auto">
          <span className="section-tag inline-block py-1.5 px-4 rounded-full text-xs font-bold border border-primary/20 bg-primary/10 text-primary uppercase tracking-wider mb-4">
            {t('tech_tag')}
          </span>
          <h2 className="section-title text-3xl md:text-4xl font-extrabold text-dark dark:text-white leading-tight mb-3 tracking-tight">
            {t('tech_title')}
          </h2>
          <p className="section-subtitle text-gray/85 dark:text-slate-400 text-base md:text-lg">
            {t('tech_subtitle')}
          </p>
        </Reveal>

        <div className="tech-grid grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
          {TECHNOLOGIES.map((tech, idx) => (
            <Reveal key={tech.name} delayMs={idx * 40}>
              <div className="bio-card p-5 flex flex-col items-center justify-center gap-3 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/75 dark:border-white/[0.08] rounded-2xl shadow-sm hover:border-primary/45 hover:shadow-lg">
                <i className={`${tech.icon} text-3xl bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent`} />
                <span className="text-xs sm:text-sm font-semibold text-dark dark:text-slate-200">
                  {tech.name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
