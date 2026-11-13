import React, { createContext, useContext, useState, useEffect } from 'react';

// Import translations
import enCommon from '../locales/en/common.json';
import enHome from '../locales/en/home.json';
import enServices from '../locales/en/services.json';
import enContact from '../locales/en/contact.json';
import enPages from '../locales/en/pages.json';

import asCommon from '../locales/as/common.json';
import asHome from '../locales/as/home.json';
import asServices from '../locales/as/services.json';
import asContact from '../locales/as/contact.json';
import asPages from '../locales/as/pages.json';

export type Language = 'en' | 'as';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  common: typeof enCommon;
  home: typeof enHome;
  services: typeof enServices;
  contact: typeof enContact;
  pages: typeof enPages;
}

const translations = {
  en: {
    common: enCommon,
    home: enHome,
    services: enServices,
    contact: enContact,
    pages: enPages,
  },
  as: {
    common: asCommon,
    home: asHome,
    services: asServices,
    contact: asContact,
    pages: asPages,
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('cars_energy_lang');
      if (saved === 'en' || saved === 'as') return saved;
    } catch {
      // Fallback
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('cars_energy_lang', lang);
    } catch {
      // Ignore
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'as' : 'en');
  };

  useEffect(() => {
    document.documentElement.lang = language === 'as' ? 'as' : 'en';
  }, [language]);

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    common: translations[language].common,
    home: translations[language].home,
    services: translations[language].services,
    contact: translations[language].contact,
    pages: translations[language].pages,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
