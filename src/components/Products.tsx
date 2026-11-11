import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from './Reveal';
import { scrollToSection } from '../utils/scroll';

export const Products: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'erp' | 'catalog'>('erp');

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToSection('contact');
  };

  return (
    <section
      className="products py-24 px-6 md:px-12 relative overflow-hidden border-b border-slate-200/50 dark:border-white/[0.06]"
      id="products"
    >
      <div className="container max-w-7xl mx-auto relative z-10">
        <Reveal className="section-header text-center mb-14 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full text-xs font-bold border border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300 uppercase tracking-wider mb-4 shadow-xs">
            <i className="fas fa-crown text-[11px]" />
            <span>{t('apps_section_premium')} · {t('prod_tag')}</span>
          </div>
          <h2 className="section-title text-3xl md:text-5xl font-extrabold text-dark dark:text-white leading-tight mb-4 tracking-tight">
            {t('prod_title')}
            <span className="text-primary block md:inline md:ml-3 text-2xl md:text-3xl font-semibold opacity-90">
              SaaS
            </span>
          </h2>
          <p className="section-subtitle text-gray/85 dark:text-slate-300 text-base md:text-lg leading-relaxed">
            {t('prod_subtitle')}
          </p>
        </Reveal>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          <Reveal delayMs={0}>
            <div className="bio-card h-full p-6 rounded-2xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/75 dark:border-white/[0.08] shadow-sm hover:border-primary/45 flex flex-col">
              <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-lg mb-4">
                <i className="fas fa-cash-register" />
              </div>
              <span className="text-[11px] font-bold text-primary uppercase tracking-wider mb-1">Pilar 1</span>
              <h3 className="text-lg font-bold text-dark dark:text-white mb-2">{t('prod_pillar1_title')}</h3>
              <p className="text-sm text-gray/85 dark:text-slate-300 leading-relaxed flex-grow">
                {t('prod_pillar1_desc')}
              </p>
            </div>
          </Reveal>

          <Reveal delayMs={70}>
            <div className="bio-card h-full p-6 rounded-2xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/75 dark:border-white/[0.08] shadow-sm hover:border-secondary/45 flex flex-col">
              <div className="w-11 h-11 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center text-lg mb-4">
                <i className="fas fa-globe" />
              </div>
              <span className="text-[11px] font-bold text-secondary uppercase tracking-wider mb-1">Pilar 2</span>
              <h3 className="text-lg font-bold text-dark dark:text-white mb-2">{t('prod_pillar2_title')}</h3>
              <p className="text-sm text-gray/85 dark:text-slate-300 leading-relaxed flex-grow">
                {t('prod_pillar2_desc')}
              </p>
            </div>
          </Reveal>

          <Reveal delayMs={140}>
            <div className="bio-card h-full p-6 rounded-2xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/75 dark:border-white/[0.08] shadow-sm hover:border-emerald-500/45 flex flex-col">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-lg mb-4">
                <i className="fas fa-shopping-cart" />
              </div>
              <span className="text-[11px] font-bold text-emerald-500 uppercase tracking-wider mb-1">Pilar 3</span>
              <h3 className="text-lg font-bold text-dark dark:text-white mb-2">{t('prod_pillar3_title')}</h3>
              <p className="text-sm text-gray/85 dark:text-slate-300 leading-relaxed flex-grow">
                {t('prod_pillar3_desc')}
              </p>
            </div>
          </Reveal>
        </div>

        {/* Showcase */}
        <div className="products-grid grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-7 min-w-0 flex flex-col">
            <div className="flex flex-wrap sm:inline-flex items-center gap-1.5 mb-4 p-1.5 bg-slate-100/85 dark:bg-slate-800/70 rounded-xl w-full sm:w-auto sm:self-start border border-slate-200/70 dark:border-white/[0.08]">
              <button
                type="button"
                onClick={() => setActiveTab('erp')}
                className={`flex-1 sm:flex-initial justify-center py-2 px-3 sm:px-4 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === 'erp'
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-gray/85 dark:text-slate-300 hover:text-dark dark:hover:text-white'
                }`}
              >
                <i className="fas fa-desktop text-xs shrink-0" />
                <span>Sistema ERP &amp; Inventario</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('catalog')}
                className={`flex-1 sm:flex-initial justify-center py-2 px-3 sm:px-4 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === 'catalog'
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-gray/85 dark:text-slate-300 hover:text-dark dark:hover:text-white'
                }`}
              >
                <i className="fas fa-store text-xs shrink-0" />
                <span>Tienda Online &amp; Catálogo</span>
              </button>
            </div>

            <div className="product-image-card w-full aspect-16/10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200/60 dark:border-white/[0.08] bg-slate-900 relative">
              <img
                src={activeTab === 'erp' ? '/images/work/1.png' : '/images/work/bioshop-catalog.jpg'}
                alt={activeTab === 'erp' ? 'BIOSHOP ERP - Sistema de gestión y facturación' : 'BIOSHOP Catálogo E-Commerce'}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-slate-950/80 backdrop-blur-md text-white text-[11px] sm:text-xs py-1 sm:py-1.5 px-3 rounded-full border border-white/10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{activeTab === 'erp' ? 'Vista ERP en Producción' : 'Vista Catálogo E-Commerce'}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 min-w-0 flex flex-col justify-center">
            <div className="relative overflow-hidden p-5 sm:p-7 md:p-9 bg-white/85 dark:bg-slate-900/65 backdrop-blur-md border border-slate-200/75 dark:border-white/[0.08] rounded-2xl sm:rounded-3xl shadow-sm">
              <div className="inline-block px-3 py-1 rounded-md bg-primary/10 text-primary dark:text-indigo-300 font-bold text-xs uppercase tracking-wider mb-3">
                {t('prod_saas_badge')}
              </div>

              <h3 className="text-2xl font-bold text-dark dark:text-white mb-3 leading-snug">
                {t('prod_card_title')}
              </h3>
              <p className="text-sm md:text-base text-gray/85 dark:text-slate-300 leading-relaxed mb-5">
                {t('prod_card_desc')}
              </p>

              <ul className="flex flex-col gap-3 list-none p-0 mb-7">
                {(['prod_li1', 'prod_li2', 'prod_li3', 'prod_li4', 'prod_li5'] as const).map((key) => (
                  <li key={key} className="flex items-start gap-2.5 text-sm font-medium text-dark-medium dark:text-slate-200">
                    <i className="fas fa-check-circle text-primary text-base mt-0.5 shrink-0" />
                    <span>{t(key)}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                onClick={handleCtaClick}
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl text-center font-bold bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/20 hover:shadow-xl transition-all no-underline text-sm md:text-base"
              >
                <span>{t('prod_btn')}</span>
                <i className="fas fa-arrow-right text-sm" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
