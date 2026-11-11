import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import type { TranslationDict } from '../context/translations';
import { Reveal } from './Reveal';

const STEPS: Array<{
  num: string;
  icon: string;
  titleKey: keyof TranslationDict;
  descKey: keyof TranslationDict;
}> = [
  { num: '01', icon: 'fa-clipboard-list', titleKey: 'process_step1_title', descKey: 'process_step1_desc' },
  { num: '02', icon: 'fa-pencil-ruler', titleKey: 'process_step2_title', descKey: 'process_step2_desc' },
  { num: '03', icon: 'fa-code', titleKey: 'process_step3_title', descKey: 'process_step3_desc' },
  { num: '04', icon: 'fa-rocket', titleKey: 'process_step4_title', descKey: 'process_step4_desc' },
];

export const Process: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      className="process py-24 px-6 md:px-12 relative border-b border-slate-200/50 dark:border-white/[0.06]"
      id="process"
    >
      <div className="container max-w-7xl mx-auto">
        <Reveal className="section-header text-center mb-14 max-w-3xl mx-auto">
          <span className="section-tag inline-block py-1.5 px-4 rounded-full text-xs font-bold border border-primary/20 bg-primary/10 text-primary uppercase tracking-wider mb-4">
            {t('process_tag')}
          </span>
          <h2 className="section-title text-3xl md:text-4xl font-extrabold text-dark dark:text-white leading-tight mb-3 tracking-tight">
            {t('process_title')}
          </h2>
          <p className="section-subtitle text-gray/85 dark:text-slate-400 text-base md:text-lg">
            {t('process_subtitle')}
          </p>
        </Reveal>

        <div className="process-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, idx) => (
            <Reveal key={step.num} delayMs={idx * 65}>
              <div className="bio-card relative h-full p-7 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/75 dark:border-white/[0.08] rounded-2xl shadow-sm hover:border-primary/45 flex flex-col items-center text-center">
                <div className="absolute top-4 right-5 text-3xl font-extrabold text-primary/12 dark:text-primary/15 select-none">
                  {step.num}
                </div>
                <div className="w-13 h-13 flex items-center justify-center rounded-2xl bg-primary/10 text-primary text-lg mb-5">
                  <i className={`fas ${step.icon}`} />
                </div>
                <h3 className="text-lg font-bold text-dark dark:text-white mb-2">
                  {t(step.titleKey)}
                </h3>
                <p className="text-xs sm:text-sm text-gray/85 dark:text-slate-300 leading-relaxed m-0">
                  {t(step.descKey)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
