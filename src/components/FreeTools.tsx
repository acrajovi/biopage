import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const FreeTools: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="free-tools py-24 px-6 md:px-12 relative overflow-hidden bg-gray-50/50 dark:bg-gray-900/30" id="tools">
      <div className="container max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="section-header text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full text-xs font-bold border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-4 shadow-xs">
            <i className="fas fa-toolbox text-xs"></i>
            <span>{t('tools_tag')}</span>
          </div>
          <h2 className="section-title text-3xl md:text-5xl font-extrabold text-dark dark:text-white leading-tight mb-4 tracking-tight">
            {t('tools_title')}
          </h2>
          <p className="section-subtitle text-gray/80 dark:text-gray/90 text-lg md:text-xl leading-relaxed">
            {t('tools_subtitle')}
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Tool Card 1: Datos RUC Py */}
          <div className="tool-card rounded-2xl bg-white dark:bg-gray-800/60 border border-primary/20 dark:border-primary/10 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all duration-300 p-8 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-id-card"></i>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <i className="fas fa-bolt text-[10px]"></i>
                  {t('tools_badge_free')}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-dark dark:text-white mb-2 tracking-tight group-hover:text-primary transition-colors">
                {t('tools_ruc_title')}
              </h3>
              <p className="text-sm font-semibold text-primary dark:text-primary-light mb-4">
                {t('tools_ruc_subtitle')}
              </p>

              <p className="text-gray/80 dark:text-gray/90 text-base leading-relaxed mb-6">
                {t('tools_ruc_desc')}
              </p>

              {/* Feature Points */}
              <ul className="space-y-3 mb-8 text-sm text-gray/90 dark:text-gray/80">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs shrink-0">
                    <i className="fas fa-check"></i>
                  </div>
                  <span>{t('tools_ruc_feat1')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs shrink-0">
                    <i className="fas fa-check"></i>
                  </div>
                  <span>{t('tools_ruc_feat2')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs shrink-0">
                    <i className="fas fa-check"></i>
                  </div>
                  <span>{t('tools_ruc_feat3')}</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-gray-100 dark:border-gray-700/50">
              <a
                href="https://datosruc.bio.com.py/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-white bg-linear-to-r from-primary to-accent hover:opacity-95 shadow-md hover:shadow-lg transition-all text-sm no-underline"
              >
                <span>{t('tools_btn_launch')}</span>
                <i className="fas fa-arrow-up-right-from-square text-xs"></i>
              </a>
            </div>
          </div>

          {/* Tool Card 2: Calcular BTU */}
          <div className="tool-card rounded-2xl bg-white dark:bg-gray-800/60 border border-secondary/20 dark:border-secondary/10 shadow-lg hover:shadow-xl hover:border-secondary/40 transition-all duration-300 p-8 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-snowflake"></i>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <i className="fas fa-bolt text-[10px]"></i>
                  {t('tools_badge_free')}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-dark dark:text-white mb-2 tracking-tight group-hover:text-secondary transition-colors">
                {t('tools_btu_title')}
              </h3>
              <p className="text-sm font-semibold text-secondary mb-4">
                {t('tools_btu_subtitle')}
              </p>

              <p className="text-gray/80 dark:text-gray/90 text-base leading-relaxed mb-6">
                {t('tools_btu_desc')}
              </p>

              {/* Feature Points */}
              <ul className="space-y-3 mb-8 text-sm text-gray/90 dark:text-gray/80">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs shrink-0">
                    <i className="fas fa-check"></i>
                  </div>
                  <span>{t('tools_btu_feat1')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs shrink-0">
                    <i className="fas fa-check"></i>
                  </div>
                  <span>{t('tools_btu_feat2')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs shrink-0">
                    <i className="fas fa-check"></i>
                  </div>
                  <span>{t('tools_btu_feat3')}</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-gray-100 dark:border-gray-700/50">
              <a
                href="https://calcularbtu.bio.com.py/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-white bg-linear-to-r from-secondary to-accent hover:opacity-95 shadow-md hover:shadow-lg transition-all text-sm no-underline"
              >
                <span>{t('tools_btn_launch')}</span>
                <i className="fas fa-arrow-up-right-from-square text-xs"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
