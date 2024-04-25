import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/SearchBar.module.scss';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <div className={styles['search-bar']}> 
    <FontAwesomeIcon icon={faSearch} className={styles['search-icon']} />
    <input
      type="text"
      placeholder="Search for a country..."
      onChange={(e) => onSearch(e.target.value)}
      className={styles['search-input']} 
    />
  </div>
  );
};

export default SearchBar;
