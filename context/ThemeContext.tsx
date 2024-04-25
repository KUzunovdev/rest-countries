import React, { createContext, useContext, useState, useEffect } from 'react';

const defaultState = {
  dark: false,
  toggleDark: () => {},
};

const ThemeContext = createContext(defaultState);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false); 

  
  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark';
    setDark(isDark);
  }, []);


  const toggleDark = () => {
    const isDark = !dark;
    localStorage.setItem('theme', isDark ? 'dark' : 'light'); 
    setDark(isDark);
  };

  return (
    <ThemeContext.Provider value={{ dark, toggleDark }}>
      <div data-theme={dark ? 'dark' : 'light'}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
