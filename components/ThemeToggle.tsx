import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { dark, toggleDark } = useTheme();

  return (
    <button
    aria-label='Toggle Dark Mode'
    onClick={toggleDark}>
      {dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
