import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Products: React.FC = () => {
  const { t } = useLanguage();

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
    <section className="products py-24 px-6 md:px-12 relative" id="products">
      <div className="container max-w-7xl mx-auto">
        <div className="section-header text-center mb-16 max-w-3xl mx-auto">
          <span className="section-tag inline-block py-1.5 px-4 rounded-full text-xs font-bold border border-primary/20 bg-primary/10 text-primary uppercase tracking-wider mb-4">
            {t('prod_tag')}
          </span>
          <h2 className="section-title text-3xl md:text-4xl font-extrabold text-dark dark:text-white leading-tight mb-4">
            {t('prod_title')}
          </h2>
          <p className="section-subtitle text-gray/80 dark:text-gray/90 text-lg">
            {t('prod_subtitle')}
          </p>
        </div>

        <div className="products-grid grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Screenshot Column */}
          <div className="products-images flex justify-center w-full max-w-xl mx-auto lg:max-w-none">
            <div className="product-image-card w-full aspect-16/10 rounded-2xl overflow-hidden shadow-xl border border-gray-200/10 dark:border-gray-800/10 hover:scale-[1.01] transition-transform duration-500">
              <img src="/images/work/1.png" alt="BIOSHOP" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Content Column */}
          <div className="products-content flex flex-col justify-center">
            <div className="product-card relative overflow-hidden p-8 md:p-10 bg-white dark:bg-gray-800/40 border border-gray-200/50 dark:border-gray-700/50 rounded-3xl shadow-sm">
              <div className="product-card-glow absolute -top-1/2 -right-1/2 w-full h-full bg-radial from-primary/10 dark:from-primary/5 to-transparent pointer-events-none"></div>
              
              <h3 className="text-2xl font-bold text-dark dark:text-white mb-4 relative z-10">
                {t('prod_card_title')}
              </h3>
              <p className="text-base text-gray/80 dark:text-gray/90 leading-relaxed mb-8 relative z-10">
                {t('prod_card_desc')}
              </p>
              
              <ul className="product-features flex flex-col gap-4 list-none p-0 mb-10 relative z-10">
                <li className="flex items-center gap-3.5 text-sm font-semibold text-dark-medium dark:text-gray/90">
                  <i className="fas fa-check-circle text-primary text-base"></i>
                  <span>{t('prod_li1')}</span>
                </li>
                <li className="flex items-center gap-3.5 text-sm font-semibold text-dark-medium dark:text-gray/90">
                  <i className="fas fa-check-circle text-primary text-base"></i>
                  <span>{t('prod_li2')}</span>
                </li>
                <li className="flex items-center gap-3.5 text-sm font-semibold text-dark-medium dark:text-gray/90">
                  <i className="fas fa-check-circle text-primary text-base"></i>
                  <span>{t('prod_li3')}</span>
                </li>
                <li className="flex items-center gap-3.5 text-sm font-semibold text-dark-medium dark:text-gray/90">
                  <i className="fas fa-check-circle text-primary text-base"></i>
                  <span>{t('prod_li4')}</span>
                </li>
                <li className="flex items-center gap-3.5 text-sm font-semibold text-dark-medium dark:text-gray/90">
                  <i className="fas fa-check-circle text-primary text-base"></i>
                  <span>{t('prod_li5')}</span>
                </li>
              </ul>
              
              <a 
                href="#contact" 
                onClick={handleCtaClick}
                className="btn btn-primary inline-block w-full py-4 rounded-2xl text-center font-bold bg-primary hover:bg-primary-dark text-white shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all no-underline relative z-10"
              >
                {t('prod_btn')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
