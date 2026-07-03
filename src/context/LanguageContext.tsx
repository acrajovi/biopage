import React, { createContext, useContext, useState } from 'react';
import { translations } from './translations';
import type { SupportedLanguages, TranslationDict } from './translations';

interface LanguageContextProps {
  language: SupportedLanguages;
  setLanguage: (lang: SupportedLanguages) => void;
  t: (key: keyof TranslationDict) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<SupportedLanguages>(() => {
    try {
      const saved = localStorage.getItem('lang');
      if (saved === 'es' || saved === 'en' || saved === 'pt') {
        return saved;
      }
    } catch (e) {
      // safe fallback if localStorage fails or is disabled (like under Safari file:// rules)
    }
    return 'es';
  });

  const setLanguage = (lang: SupportedLanguages) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('lang', lang);
    } catch (e) {
      // safe fallback
    }
  };

  const t = (key: keyof TranslationDict): string => {
    return translations[language][key] || translations['es'][key] || String(key);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
