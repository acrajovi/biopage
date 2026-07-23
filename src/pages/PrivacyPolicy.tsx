import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const PrivacyPolicy: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-24 pb-16 px-6 max-w-4xl mx-auto min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-dark dark:text-white">{t('legal_privacy_title')}</h1>
      
      <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
        <p className="mb-4">
          {t('legal_privacy_p1')}
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-dark dark:text-white">{t('legal_privacy_h2_1')}</h2>
        <p className="mb-4">
          {t('legal_privacy_p2')}
        </p>
        <p className="mb-4">
          {t('legal_privacy_p3')} <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://policies.google.com/technologies/ads</a>
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>{t('legal_privacy_li1')}</li>
          <li>{t('legal_privacy_li2')}</li>
          <li>{t('legal_privacy_li3')} <a href="https://myadcenter.google.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mi Centro de anuncios</a>.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-dark dark:text-white">{t('legal_privacy_h2_2')}</h2>
        <p className="mb-4">
          {t('legal_privacy_p4')}
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-dark dark:text-white">{t('legal_privacy_h2_3')}</h2>
        <p className="mb-4">
          {t('legal_privacy_p5')}
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-dark dark:text-white">{t('legal_privacy_h2_4')}</h2>
        <p className="mb-4">
          {t('legal_privacy_p6')}
        </p>
      </div>
    </div>
  );
};
