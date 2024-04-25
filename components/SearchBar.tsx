import React from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search for a country..."
      onChange={(e) => onSearch(e.target.value)}
      className="search-input"
    />
  );
};

export default SearchBar;
