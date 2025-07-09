
import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, detectLanguageFromLocation } from '../utils/languages';

interface LanguageContextType {
  currentLanguage: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<string>('hi');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeLanguage = async () => {
      // Check if user has a saved language preference
      const savedLanguage = localStorage.getItem('kisaan-language');
      
      if (savedLanguage) {
        setCurrentLanguage(savedLanguage);
      } else {
        // Try to detect language from geolocation
        const detectedLanguage = await detectLanguageFromLocation();
        setCurrentLanguage(detectedLanguage);
        localStorage.setItem('kisaan-language', detectedLanguage);
      }
      
      setIsLoading(false);
    };

    initializeLanguage();
  }, []);

  const setLanguage = (lang: string) => {
    setCurrentLanguage(lang);
    localStorage.setItem('kisaan-language', lang);
  };

  const t = (key: string): string => {
    const currentTranslations = translations[currentLanguage as keyof typeof translations] || translations.en;
    return currentTranslations[key as keyof typeof currentTranslations] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
