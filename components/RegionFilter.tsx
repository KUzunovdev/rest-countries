import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/RegionFilter.module.scss';


interface RegionFilterProps {
  onFilter: (region: string) => void;
}

const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']; 

const RegionFilter: React.FC<RegionFilterProps> = ({ onFilter }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('Filter by Region');
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelectRegion = (region) => {
    setSelectedRegion(region);
    onFilter(region);
    setIsOpen(false);
  };

  return (
    <div className={styles['region-filter']} ref={dropdownRef}>
      <div className={styles['selected-region']} onClick={() => setIsOpen(!isOpen)}>
        {selectedRegion}
        <span className={styles['arrow']}>{isOpen ? '⌃' : '⌵'}</span>
      </div>
      {isOpen && (
        <div className={styles['region-list']}>
          {regions.map((region) => (
            <div
              key={region}
              className={styles['region-item']}
              onClick={() => handleSelectRegion(region)}
            >
              {region}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RegionFilter;
