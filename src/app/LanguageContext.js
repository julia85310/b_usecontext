'use client';

import { createContext, useState } from "react";


const LanguageContext = createContext();

export function LanguageProvider({children}){
    const [language, setLanguageUS] = useState('es');

    const setLanguage = (language) => {
        setLanguageUS(language);
    };
    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
          {children}
        </LanguageContext.Provider>
      );

}
export default LanguageContext;