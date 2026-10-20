import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Products: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'erp' | 'catalog'>('erp');

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const header = document.querySelector('.header') as HTMLElement;
      const headerHeight = header ? header.offsetHeight : 70;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="products py-24 px-6 md:px-12 relative overflow-hidden" id="products">
      <div className="container max-w-7xl mx-auto relative z-10">
        {/* Header with SaaS Badge */}
        <div className="section-header text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full text-xs font-bold border border-primary/30 bg-primary/10 text-primary dark:text-primary-light uppercase tracking-wider mb-4 shadow-xs">
            <i className="fas fa-cubes text-xs"></i>
            <span>{t('prod_tag')}</span>
          </div>
          <h2 className="section-title text-3xl md:text-5xl font-extrabold text-dark dark:text-white leading-tight mb-4 tracking-tight">
            {t('prod_title')}
            <span className="text-primary block md:inline md:ml-3 text-2xl md:text-3xl font-semibold opacity-90">
              SaaS
            </span>
          </h2>
          <p className="section-subtitle text-gray/80 dark:text-gray/90 text-lg md:text-xl leading-relaxed">
            {t('prod_subtitle')}
          </p>
        </div>

        {/* 3 Pillars of the SaaS Plan */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="pillar-card p-6 rounded-2xl bg-white/70 dark:bg-gray-800/40 border border-primary/20 dark:border-primary/10 shadow-sm hover:border-primary/40 transition-all flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl mb-4">
              <i className="fas fa-cash-register"></i>
            </div>
            <span className="text-[11px] font-bold text-primary uppercase tracking-wider mb-1">Pilar 1</span>
            <h4 className="text-lg font-bold text-dark dark:text-white mb-2">{t('prod_pillar1_title')}</h4>
            <p className="text-sm text-gray/80 dark:text-gray/90 leading-relaxed flex-grow">
              {t('prod_pillar1_desc')}
            </p>
          </div>

          <div className="pillar-card p-6 rounded-2xl bg-white/70 dark:bg-gray-800/40 border border-secondary/20 dark:border-secondary/10 shadow-sm hover:border-secondary/40 transition-all flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center text-xl mb-4">
              <i className="fas fa-globe"></i>
            </div>
            <span className="text-[11px] font-bold text-secondary uppercase tracking-wider mb-1">Pilar 2</span>
            <h4 className="text-lg font-bold text-dark dark:text-white mb-2">{t('prod_pillar2_title')}</h4>
            <p className="text-sm text-gray/80 dark:text-gray/90 leading-relaxed flex-grow">
              {t('prod_pillar2_desc')}
            </p>
          </div>

          <div className="pillar-card p-6 rounded-2xl bg-white/70 dark:bg-gray-800/40 border border-emerald-500/20 dark:border-emerald-500/10 shadow-sm hover:border-emerald-500/40 transition-all flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-xl mb-4">
              <i className="fas fa-shopping-cart"></i>
            </div>
            <span className="text-[11px] font-bold text-emerald-500 uppercase tracking-wider mb-1">Pilar 3</span>
            <h4 className="text-lg font-bold text-dark dark:text-white mb-2">{t('prod_pillar3_title')}</h4>
            <p className="text-sm text-gray/80 dark:text-gray/90 leading-relaxed flex-grow">
              {t('prod_pillar3_desc')}
            </p>
          </div>
        </div>

        {/* Detailed Showcase Section */}
        <div className="products-grid grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Interactive Screen Preview */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-2 mb-4 p-1.5 bg-gray-100/80 dark:bg-gray-800/60 rounded-xl self-start border border-gray-200/50 dark:border-gray-700/50">
              <button
                type="button"
                onClick={() => setActiveTab('erp')}
                className={`py-2 px-4 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === 'erp'
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-gray/80 dark:text-gray/90 hover:text-dark dark:hover:text-white'
                }`}
              >
                <i className="fas fa-desktop text-xs"></i>
                <span>Sistema ERP & Inventario</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('catalog')}
                className={`py-2 px-4 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === 'catalog'
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-gray/80 dark:text-gray/90 hover:text-dark dark:hover:text-white'
                }`}
              >
                <i className="fas fa-store text-xs"></i>
                <span>Tienda Online & Catálogo</span>
              </button>
            </div>

            <div className="product-image-card w-full aspect-16/10 rounded-3xl overflow-hidden shadow-2xl border border-gray-200/40 dark:border-gray-700/40 bg-gray-900 group relative">
              <img
                src={activeTab === 'erp' ? '/images/work/1.png' : '/images/work/bioshop-catalog.png'}
                alt={activeTab === 'erp' ? 'BIOSHOP ERP' : 'BIOSHOP Catálogo'}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute bottom-4 right-4 bg-gray-950/80 backdrop-blur-md text-white text-xs py-1.5 px-3.5 rounded-full border border-white/10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>{activeTab === 'erp' ? 'Vista ERP en Producción' : 'Vista Catálogo E-Commerce'}</span>
              </div>
            </div>
          </div>

          {/* SaaS Details & Subscription Card */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="product-card relative overflow-hidden p-8 md:p-10 bg-white dark:bg-gray-800/40 border border-gray-200/50 dark:border-gray-700/50 rounded-3xl shadow-sm">
              <div className="product-card-glow absolute -top-1/2 -right-1/2 w-full h-full bg-radial from-primary/10 dark:from-primary/5 to-transparent pointer-events-none"></div>

              <div className="inline-block px-3 py-1 rounded-md bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider mb-3">
                {t('prod_saas_badge')}
              </div>

              <h3 className="text-2xl font-bold text-dark dark:text-white mb-4 relative z-10 leading-snug">
                {t('prod_card_title')}
              </h3>
              <p className="text-sm md:text-base text-gray/80 dark:text-gray/90 leading-relaxed mb-6 relative z-10">
                {t('prod_card_desc')}
              </p>

              <ul className="product-features flex flex-col gap-3.5 list-none p-0 mb-8 relative z-10">
                <li className="flex items-start gap-3 text-sm font-semibold text-dark-medium dark:text-gray/90">
                  <i className="fas fa-check-circle text-primary text-base mt-0.5"></i>
                  <span>{t('prod_li1')}</span>
                </li>
                <li className="flex items-start gap-3 text-sm font-semibold text-dark-medium dark:text-gray/90">
                  <i className="fas fa-check-circle text-primary text-base mt-0.5"></i>
                  <span>{t('prod_li2')}</span>
                </li>
                <li className="flex items-start gap-3 text-sm font-semibold text-dark-medium dark:text-gray/90">
                  <i className="fas fa-check-circle text-primary text-base mt-0.5"></i>
                  <span>{t('prod_li3')}</span>
                </li>
                <li className="flex items-start gap-3 text-sm font-semibold text-dark-medium dark:text-gray/90">
                  <i className="fas fa-check-circle text-primary text-base mt-0.5"></i>
                  <span>{t('prod_li4')}</span>
                </li>
                <li className="flex items-start gap-3 text-sm font-semibold text-dark-medium dark:text-gray/90">
                  <i className="fas fa-check-circle text-primary text-base mt-0.5"></i>
                  <span>{t('prod_li5')}</span>
                </li>
              </ul>

              <div className="bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-2xl p-4 mb-8 text-xs text-gray/80 dark:text-gray/90 leading-relaxed relative z-10">
                <i className="fas fa-info-circle text-primary mr-2"></i>
                <strong>Modelo SaaS:</strong> Todo centralizado en la nube, con mantenimiento, copias de seguridad continuas y soporte técnico permanente incluidos en tu cuota mensual.
              </div>

              <a
                href="#contact"
                onClick={handleCtaClick}
                className="btn btn-primary inline-flex items-center justify-center gap-2 w-full py-4 rounded-2xl text-center font-bold bg-primary hover:bg-primary-dark text-white shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all no-underline relative z-10 text-base"
              >
                <span>{t('prod_btn')}</span>
                <i className="fas fa-arrow-right text-sm"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

