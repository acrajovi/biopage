import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import type { TranslationDict } from '../context/translations';
import { Reveal } from './Reveal';

const FAQ_ITEMS: Array<{ q: keyof TranslationDict; a: keyof TranslationDict }> = [
  { q: 'faq_q1', a: 'faq_a1' },
  { q: 'faq_q2', a: 'faq_a2' },
  { q: 'faq_q3', a: 'faq_a3' },
  { q: 'faq_q4', a: 'faq_a4' },
];

export const FAQ: React.FC = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      className="faq py-24 px-6 md:px-12 relative border-b border-slate-200/50 dark:border-white/[0.06]"
      id="faq"
    >
      <div className="container max-w-7xl mx-auto">
        <Reveal className="section-header text-center mb-12 max-w-3xl mx-auto">
          <span className="section-tag inline-block py-1.5 px-4 rounded-full text-xs font-bold border border-primary/20 bg-primary/10 text-primary uppercase tracking-wider mb-4">
            {t('faq_tag')}
          </span>
          <h2 className="section-title text-3xl md:text-4xl font-extrabold text-dark dark:text-white leading-tight mb-3 tracking-tight">
            {t('faq_title')}
          </h2>
          <p className="section-subtitle text-gray/85 dark:text-slate-400 text-base md:text-lg">
            {t('faq_subtitle')}
          </p>
        </Reveal>

        <div className="faq-container max-w-3xl mx-auto flex flex-col gap-3.5">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <Reveal key={item.q} delayMs={index * 50}>
                <div className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/75 dark:border-white/[0.08] rounded-2xl overflow-hidden shadow-xs transition-colors hover:border-primary/35">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex justify-between items-center p-5 sm:p-6 bg-transparent border-none text-left cursor-pointer text-sm sm:text-base font-bold text-dark dark:text-white"
                  >
                    <span className="pr-4">{t(item.q)}</span>
                    <i className={`fas fa-chevron-down text-primary text-xs transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm leading-relaxed text-gray/85 dark:text-slate-300">
                      {t(item.a)}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
