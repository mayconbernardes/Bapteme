import React, { createContext, useContext, useState, useCallback } from 'react';

type Lang = 'fr' | 'pt';

interface LanguageContextType {
  lang: Lang;
  toggle: () => void;
  t: (fr: string, pt: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>('fr');

  const toggle = useCallback(() => {
    setLang(prev => prev === 'fr' ? 'pt' : 'fr');
  }, []);

  const t = useCallback((fr: string, pt: string) => {
    return lang === 'fr' ? fr : pt;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
};
