import CountryCard from "../components/CountryCard";
import { GetStaticProps } from "next";
import { fetchCountries} from '../utils/api';
import styles from '../styles/HomePage.module.scss';
import SearchBar from '../components/SearchBar';
import {RegionFilter} from '../components/RegionFilter';
import { useState } from "react";

const HomePage = ({ countries }) => {

  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
  );



  return (

    <>
    <div className="header">
      <h1>Where in the world</h1>
      <p>Dark mode toggle</p>
    </div>

    <div className="filters">
    <SearchBar onSearch={setSearchQuery} />
      <RegionFilter />
    </div>

    <div className={styles['countries-grid']}>
    {filteredCountries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
    </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const countries = await fetchCountries();
    return { props: { countries } };
  } catch (error) {
    // Handle errors
    return { props: { countries: [] } };
  }
};

export default HomePage;