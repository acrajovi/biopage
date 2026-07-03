import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Services: React.FC = () => {
  const { t } = useLanguage();

  const servicesData = [
    {
      icon: 'fa-desktop',
      title: 'services_sys_title',
      desc: 'services_sys_desc',
      list: ['services_sys_li1', 'services_sys_li2', 'services_sys_li3']
    },
    {
      icon: 'fa-globe',
      title: 'services_web_title',
      desc: 'services_web_desc',
      list: ['services_web_li1', 'services_web_li2', 'services_web_li3']
    },
    {
      icon: 'fa-mobile-alt',
      title: 'services_app_title',
      desc: 'services_app_desc',
      list: ['services_app_li1', 'services_app_li2', 'services_app_li3']
    },
    {
      icon: 'fa-headset',
      title: 'services_sup_title',
      desc: 'services_sup_desc',
      list: ['services_sup_li1', 'services_sup_li2', 'services_sup_li3']
    },
    {
      icon: 'fa-video',
      title: 'services_cctv_title',
      desc: 'services_cctv_desc',
      list: ['services_cctv_li1', 'services_cctv_li2', 'services_cctv_li3']
    }
  ];

  return (
    <section className="services py-24 px-6 md:px-12 relative" id="services">
      <div className="container max-w-7xl mx-auto">
        <div className="section-header text-center mb-16 max-w-3xl mx-auto">
          <span className="section-tag inline-block py-1.5 px-4 rounded-full text-xs font-bold border border-primary/20 bg-primary/10 text-primary uppercase tracking-wider mb-4">
            {t('services_tag')}
          </span>
          <h2 className="section-title text-3xl md:text-4xl font-extrabold text-dark dark:text-white leading-tight mb-4">
            {t('services_title')}
          </h2>
          <p className="section-subtitle text-gray/80 dark:text-gray/90 text-lg">
            {t('services_subtitle')}
          </p>
        </div>

        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {servicesData.map((service, index) => (
            <div 
              key={index}
              className={`service-card p-[1px] rounded-2xl bg-gray-200/50 dark:bg-gray-800/50 hover:bg-linear-to-br hover:from-primary hover:to-accent transition-all duration-300 hover:translate-y-[-8px] hover:shadow-xl ${
                index === 3 || index === 4 ? 'lg:col-span-1 md:max-lg:col-span-2' : ''
              }`}
            >
              <div className="service-card-inner h-full p-8 bg-white dark:bg-gray-900 rounded-2xl flex flex-col">
                <div className="service-icon w-14 h-14 flex items-center justify-center rounded-xl bg-primary text-white text-xl mb-6">
                  <i className={`fas ${service.icon}`}></i>
                </div>
                <h3 className="text-xl font-bold text-dark dark:text-white mb-3">
                  {t(service.title as any)}
                </h3>
                <p className="text-sm text-gray/80 dark:text-gray/90 leading-relaxed mb-6 flex-grow">
                  {t(service.desc as any)}
                </p>
                <ul className="service-list flex flex-col gap-3 list-none p-0 m-0 border-t border-gray-100 dark:border-gray-800/80 pt-5">
                  {service.list.map((item, key) => (
                    <li key={key} className="flex items-center gap-3 text-sm text-dark-medium dark:text-gray/90 font-medium">
                      <i className="fas fa-check text-xs text-primary bg-primary/10 w-5 h-5 flex items-center justify-center rounded-full"></i>
                      <span>{t(item as any)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
