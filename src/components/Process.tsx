import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Process: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="process py-24 px-6 md:px-12 relative" id="process">
      <div className="container max-w-7xl mx-auto">
        <div className="section-header text-center mb-16 max-w-3xl mx-auto">
          <span className="section-tag inline-block py-1.5 px-4 rounded-full text-xs font-bold border border-primary/20 bg-primary/10 text-primary uppercase tracking-wider mb-4">
            {t('process_tag')}
          </span>
          <h2 className="section-title text-3xl md:text-4xl font-extrabold text-dark dark:text-white leading-tight mb-4">
            {t('process_title')}
          </h2>
          <p className="section-subtitle text-gray/80 dark:text-gray/90 text-lg">
            {t('process_subtitle')}
          </p>
        </div>

        <div className="process-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="process-step relative p-8 bg-white dark:bg-gray-800/40 border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center">
            <div className="step-number absolute top-4 right-6 text-4xl font-extrabold text-primary/10 dark:text-primary/5">01</div>
            <div className="step-icon w-14 h-14 flex items-center justify-center rounded-2xl bg-primary text-white text-xl mb-6 shadow-md shadow-primary/20">
              <i className="fas fa-clipboard-list"></i>
            </div>
            <h3 className="text-lg font-bold text-dark dark:text-white mb-3">
              {t('process_step1_title')}
            </h3>
            <p className="text-sm text-gray/85 dark:text-gray/95 leading-relaxed">
              {t('process_step1_desc')}
            </p>
          </div>

          {/* Step 2 */}
          <div className="process-step relative p-8 bg-white dark:bg-gray-800/40 border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center">
            <div className="step-number absolute top-4 right-6 text-4xl font-extrabold text-primary/10 dark:text-primary/5">02</div>
            <div className="step-icon w-14 h-14 flex items-center justify-center rounded-2xl bg-primary text-white text-xl mb-6 shadow-md shadow-primary/20">
              <i className="fas fa-pencil-ruler"></i>
            </div>
            <h3 className="text-lg font-bold text-dark dark:text-white mb-3">
              {t('process_step2_title')}
            </h3>
            <p className="text-sm text-gray/85 dark:text-gray/95 leading-relaxed">
              {t('process_step2_desc')}
            </p>
          </div>

          {/* Step 3 */}
          <div className="process-step relative p-8 bg-white dark:bg-gray-800/40 border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center">
            <div className="step-number absolute top-4 right-6 text-4xl font-extrabold text-primary/10 dark:text-primary/5">03</div>
            <div className="step-icon w-14 h-14 flex items-center justify-center rounded-2xl bg-primary text-white text-xl mb-6 shadow-md shadow-primary/20">
              <i className="fas fa-code"></i>
            </div>
            <h3 className="text-lg font-bold text-dark dark:text-white mb-3">
              {t('process_step3_title')}
            </h3>
            <p className="text-sm text-gray/85 dark:text-gray/95 leading-relaxed">
              {t('process_step3_desc')}
            </p>
          </div>

          {/* Step 4 */}
          <div className="process-step relative p-8 bg-white dark:bg-gray-800/40 border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center">
            <div className="step-number absolute top-4 right-6 text-4xl font-extrabold text-primary/10 dark:text-primary/5">04</div>
            <div className="step-icon w-14 h-14 flex items-center justify-center rounded-2xl bg-primary text-white text-xl mb-6 shadow-md shadow-primary/20">
              <i className="fas fa-rocket"></i>
            </div>
            <h3 className="text-lg font-bold text-dark dark:text-white mb-3">
              {t('process_step4_title')}
            </h3>
            <p className="text-sm text-gray/85 dark:text-gray/95 leading-relaxed">
              {t('process_step4_desc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
