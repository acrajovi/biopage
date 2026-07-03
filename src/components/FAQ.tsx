import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const FAQ: React.FC = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(prev => prev === index ? null : index);
  };

  const faqItems = [
    { q: 'faq_q1', a: 'faq_a1' },
    { q: 'faq_q2', a: 'faq_a2' },
    { q: 'faq_q3', a: 'faq_a3' },
    { q: 'faq_q4', a: 'faq_a4' }
  ];

  return (
    <section className="faq py-24 px-6 md:px-12 relative" id="faq">
      <div className="container max-w-7xl mx-auto">
        <div className="section-header text-center mb-16 max-w-3xl mx-auto">
          <span className="section-tag inline-block py-1.5 px-4 rounded-full text-xs font-bold border border-primary/20 bg-primary/10 text-primary uppercase tracking-wider mb-4">
            {t('faq_tag')}
          </span>
          <h2 className="section-title text-3xl md:text-4xl font-extrabold text-dark dark:text-white leading-tight mb-4">
            {t('faq_title')}
          </h2>
          <p className="section-subtitle text-gray/80 dark:text-gray/90 text-lg">
            {t('faq_subtitle')}
          </p>
        </div>

        <div className="faq-container max-w-3xl mx-auto flex flex-col gap-4">
          {faqItems.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={index} 
                className="accordion-item bg-white dark:bg-gray-800/40 border border-gray-200/50 dark:border-gray-700/50 rounded-2xl overflow-hidden shadow-sm transition-all"
              >
                <button 
                  onClick={() => toggleAccordion(index)}
                  className="accordion-header w-full flex justify-between items-center p-6 bg-transparent border-none text-left cursor-pointer text-base font-bold text-dark dark:text-white"
                >
                  <span>{t(item.q as any)}</span>
                  <i className={`fas fa-chevron-down text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
                </button>
                <div 
                  className={`accordion-content transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="accordion-content-inner px-6 pb-6 text-sm leading-relaxed text-gray/80 dark:text-gray/90">
                    {t(item.a as any)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
