'use client';
import React, { createContext, useState, useContext, useEffect } from "react";
import SettingsContext from "./Ejercicio7";
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const {settings} = useContext(SettingsContext);
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  //Ej7
  useEffect( () =>{
    console.log('darkMode changed:');
    if(settings.darkmode){
      console.log(settings.darkMode);
      setTheme('dark');
    }else{
      console.log(settings.darkMode);
      setTheme('light');
    }
  }, [settings.darkmode]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export default ThemeContext;