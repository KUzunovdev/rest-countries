import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import styles from '../styles/ThemeToggle.module.scss';


const ThemeToggle = () => {
  const { dark, toggleDark } = useTheme();

  return (
    <button
    aria-label={dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    onClick={toggleDark}
    className={styles['theme-toggle']}
  >
    <FontAwesomeIcon icon={dark ? faSun : faMoon} className={styles.icon} />
    <span className={styles.text}>{dark ? 'Light Mode' : 'Dark Mode'}</span>
  </button>
);
};

export default ThemeToggle;
