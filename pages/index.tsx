import CountryCard from "../components/CountryCard";
import { GetStaticProps } from "next";
import { fetchCountries} from '../utils/api';
import styles from '../styles/HomePage.module.scss';
import SearchBar from '../components/SearchBar';
import RegionFilter from '../components/RegionFilter';
import { useState } from "react";
import Layout from "../components/Layout";

const HomePage = ({ countries }) => {

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  
  const filteredCountries = countries.filter((country) =>
    (selectedRegion ? country.region === selectedRegion : true) &&
    country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
  );



  return (

    <Layout title="Rest Countries">
      <div className={styles['countries-filter']}>
        <SearchBar onSearch={setSearchQuery} />
        <RegionFilter onFilter={setSelectedRegion} />
      </div>

      <div className={styles['countries-grid']}>
      {filteredCountries.length > 0 ? (
            filteredCountries.map((country) => (
              <CountryCard key={country.cca3} country={country} />
            ))
          ) : (
            <p>No countries found.</p>
          )}
      </div>
    </Layout>
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