import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const TermsAndConditions: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-24 pb-16 px-6 max-w-4xl mx-auto min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-dark dark:text-white">{t('legal_terms_title')}</h1>
      
      <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
        <p className="mb-4">
          {t('legal_terms_p1')}
        </p>
        <p className="mb-4">
          {t('legal_terms_p2')}
        </p>
        <p className="mb-4">
          {t('legal_terms_p3')}
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-dark dark:text-white">{t('legal_terms_h2_1')}</h2>
        <p className="mb-4">
          {t('legal_terms_p4')}
        </p>
        <p className="mb-4">
          {t('legal_terms_p5')}
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-dark dark:text-white">{t('legal_terms_h2_2')}</h2>
        <p className="mb-4">
          {t('legal_terms_p6')}
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>{t('legal_terms_li1')}</li>
          <li>{t('legal_terms_li2')}</li>
          <li>{t('legal_terms_li3')}</li>
          <li>{t('legal_terms_li4')}</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-dark dark:text-white">{t('legal_terms_h2_3')}</h2>
        <p className="mb-4">
          {t('legal_terms_p7')}
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-dark dark:text-white">{t('legal_terms_h2_4')}</h2>
        <p className="mb-4">
          {t('legal_terms_p8')}
        </p>
      </div>
    </div>
  );
};
