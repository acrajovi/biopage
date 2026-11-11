import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import type { TranslationDict } from '../context/translations';
import { Reveal } from './Reveal';

const FEATURES: Array<{
  icon: string;
  titleKey: keyof TranslationDict;
  descKey: keyof TranslationDict;
}> = [
  { icon: 'fa-lightbulb', titleKey: 'about_feat1_title', descKey: 'about_feat1_desc' },
  { icon: 'fa-award', titleKey: 'about_feat2_title', descKey: 'about_feat2_desc' },
  { icon: 'fa-users', titleKey: 'about_feat3_title', descKey: 'about_feat3_desc' },
];

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      className="about py-24 px-6 md:px-12 relative border-b border-slate-200/50 dark:border-white/[0.06]"
      id="about"
    >
      <div className="container max-w-7xl mx-auto">
        <Reveal className="section-header text-center mb-14 max-w-3xl mx-auto">
          <span className="section-tag inline-block py-1.5 px-4 rounded-full text-xs font-bold border border-primary/20 bg-primary/10 text-primary uppercase tracking-wider mb-4">
            {t('about_tag')}
          </span>
          <h2 className="section-title text-3xl md:text-4xl font-extrabold text-dark dark:text-white leading-tight tracking-tight">
            {t('about_title')}
          </h2>
        </Reveal>

        <div className="about-grid grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="about-content flex flex-col justify-center">
            <Reveal>
              <p className="about-text text-base md:text-lg text-gray/85 dark:text-slate-300 mb-7 leading-relaxed">
                {t('about_desc')}
              </p>
            </Reveal>

            <div className="about-features flex flex-col gap-4">
              {FEATURES.map((feat, idx) => (
                <Reveal key={feat.titleKey} delayMs={idx * 65}>
                  <div className="bio-card flex gap-4 p-5 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/75 dark:border-white/[0.08] rounded-2xl shadow-sm hover:border-primary/40">
                    <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-primary/10 text-primary text-base shrink-0">
                      <i className={`fas ${feat.icon}`} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-dark dark:text-white mb-1">
                        {t(feat.titleKey)}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray/85 dark:text-slate-300 leading-relaxed m-0">
                        {t(feat.descKey)}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delayMs={100} className="relative flex justify-center w-full max-w-lg mx-auto lg:max-w-none">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
              alt="Equipo de desarrollo BIO Soluciones Tecnológicas"
              loading="lazy"
              decoding="async"
              className="w-full aspect-16/10 rounded-2xl object-cover shadow-xl border border-slate-200/50 dark:border-white/[0.08] relative z-10 hover:scale-[1.01] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-primary/15 dark:bg-primary/10 rounded-2xl blur-2xl -z-10 translate-x-3 translate-y-3" />
          </Reveal>
        </div>
      </div>
    </section>
  );
};
