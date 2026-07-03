import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="about py-24 px-6 md:px-12 relative" id="about">
      <div className="container max-w-7xl mx-auto">
        <div className="section-header text-center mb-16 max-w-3xl mx-auto">
          <span className="section-tag inline-block py-1.5 px-4 rounded-full text-xs font-bold border border-primary/20 bg-primary/10 text-primary uppercase tracking-wider mb-4">
            {t('about_tag')}
          </span>
          <h2 className="section-title text-3xl md:text-4xl font-extrabold text-dark dark:text-white leading-tight">
            {t('about_title')}
          </h2>
        </div>
        
        <div className="about-grid grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="about-content flex flex-col justify-center">
            <p className="about-text text-lg text-gray/80 dark:text-gray/90 mb-8 leading-relaxed">
              {t('about_desc')}
            </p>
            
            <div className="about-features flex flex-col gap-6">
              {/* Feature 1 */}
              <div className="about-feature flex gap-5 p-6 bg-white dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <div className="about-feature-icon w-12 h-12 flex items-center justify-center rounded-xl bg-primary text-white text-lg flex-shrink-0">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <div>
                  <h4 className="text-base font-bold text-dark dark:text-white mb-1">
                    {t('about_feat1_title')}
                  </h4>
                  <p className="text-sm text-gray/80 dark:text-gray/90 leading-relaxed">
                    {t('about_feat1_desc')}
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="about-feature flex gap-5 p-6 bg-white dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <div className="about-feature-icon w-12 h-12 flex items-center justify-center rounded-xl bg-primary text-white text-lg flex-shrink-0">
                  <i className="fas fa-award"></i>
                </div>
                <div>
                  <h4 className="text-base font-bold text-dark dark:text-white mb-1">
                    {t('about_feat2_title')}
                  </h4>
                  <p className="text-sm text-gray/80 dark:text-gray/90 leading-relaxed">
                    {t('about_feat2_desc')}
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="about-feature flex gap-5 p-6 bg-white dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <div className="about-feature-icon w-12 h-12 flex items-center justify-center rounded-xl bg-primary text-white text-lg flex-shrink-0">
                  <i className="fas fa-users"></i>
                </div>
                <div>
                  <h4 className="text-base font-bold text-dark dark:text-white mb-1">
                    {t('about_feat3_title')}
                  </h4>
                  <p className="text-sm text-gray/80 dark:text-gray/90 leading-relaxed">
                    {t('about_feat3_desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image side */}
          <div className="about-image-wrapper relative flex justify-center w-full max-w-lg mx-auto lg:max-w-none">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
              alt="Equipo BIO" 
              className="about-image w-full aspect-16/10 rounded-2xl object-cover shadow-xl border border-gray-200/10 dark:border-gray-800/10 relative z-10 hover:scale-[1.01] transition-transform duration-500" 
            />
            <div className="about-image-glow absolute inset-0 bg-primary/20 dark:bg-primary/10 rounded-2xl blur-2xl -z-10 translate-x-4 translate-y-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
