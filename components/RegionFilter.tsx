import React from 'react';

interface RegionFilterProps {
  onFilter: (region: string) => void;
}

const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']; 

const RegionFilter: React.FC<RegionFilterProps> = ({ onFilter }) => {
  return (
    <select onChange={(e) => onFilter(e.target.value)} defaultValue="">
      <option value="">Filter by Region</option>
      {regions.map((region) => (
        <option key={region} value={region}>
          {region}
        </option>
      ))}
    </select>
  );
};

export default RegionFilter;
