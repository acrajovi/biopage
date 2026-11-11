import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import type { TranslationDict } from '../context/translations';
import { Reveal } from './Reveal';

const SERVICES: Array<{
  icon: string;
  titleKey: keyof TranslationDict;
  descKey: keyof TranslationDict;
  listKeys: Array<keyof TranslationDict>;
}> = [
  {
    icon: 'fa-desktop',
    titleKey: 'services_sys_title',
    descKey: 'services_sys_desc',
    listKeys: ['services_sys_li1', 'services_sys_li2', 'services_sys_li3'],
  },
  {
    icon: 'fa-globe',
    titleKey: 'services_web_title',
    descKey: 'services_web_desc',
    listKeys: ['services_web_li1', 'services_web_li2', 'services_web_li3'],
  },
  {
    icon: 'fa-mobile-alt',
    titleKey: 'services_app_title',
    descKey: 'services_app_desc',
    listKeys: ['services_app_li1', 'services_app_li2', 'services_app_li3'],
  },
  {
    icon: 'fa-headset',
    titleKey: 'services_sup_title',
    descKey: 'services_sup_desc',
    listKeys: ['services_sup_li1', 'services_sup_li2', 'services_sup_li3'],
  },
  {
    icon: 'fa-video',
    titleKey: 'services_cctv_title',
    descKey: 'services_cctv_desc',
    listKeys: ['services_cctv_li1', 'services_cctv_li2', 'services_cctv_li3'],
  },
];

export const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      className="services py-24 px-6 md:px-12 relative border-b border-slate-200/50 dark:border-white/[0.06]"
      id="services"
    >
      <div className="container max-w-7xl mx-auto">
        <Reveal className="section-header text-center mb-14 max-w-3xl mx-auto">
          <span className="section-tag inline-block py-1.5 px-4 rounded-full text-xs font-bold border border-primary/20 bg-primary/10 text-primary uppercase tracking-wider mb-4">
            {t('services_tag')}
          </span>
          <h2 className="section-title text-3xl md:text-4xl font-extrabold text-dark dark:text-white leading-tight mb-3 tracking-tight">
            {t('services_title')}
          </h2>
          <p className="section-subtitle text-gray/85 dark:text-slate-400 text-base md:text-lg">
            {t('services_subtitle')}
          </p>
        </Reveal>

        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {SERVICES.map((service, index) => (
            <Reveal
              key={service.titleKey}
              delayMs={index * 60}
              className={index === 3 || index === 4 ? 'lg:col-span-1 md:max-lg:col-span-2' : ''}
            >
              <div className="bio-card h-full p-7 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/75 dark:border-white/[0.08] hover:border-primary/45 rounded-2xl shadow-sm hover:shadow-xl flex flex-col">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary text-lg mb-5">
                  <i className={`fas ${service.icon}`} />
                </div>
                <h3 className="text-xl font-bold text-dark dark:text-white mb-2.5">
                  {t(service.titleKey)}
                </h3>
                <p className="text-xs sm:text-sm text-gray/85 dark:text-slate-300 leading-relaxed mb-5 flex-grow">
                  {t(service.descKey)}
                </p>
                <ul className="flex flex-col gap-2.5 list-none p-0 m-0 border-t border-slate-200/70 dark:border-white/[0.06] pt-4">
                  {service.listKeys.map((itemKey) => (
                    <li key={itemKey} className="flex items-center gap-2.5 text-xs sm:text-sm text-dark-medium dark:text-slate-300 font-medium">
                      <i className="fas fa-check text-[10px] text-primary bg-primary/10 w-5 h-5 flex items-center justify-center rounded-full shrink-0" />
                      <span>{t(itemKey)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
