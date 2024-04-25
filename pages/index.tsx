import CountryCard from "../components/CountryCard";
import { GetStaticProps } from "next";
import { fetchCountries} from '../utils/api';
import styles from '../styles/HomePage.module.scss';

const HomePage = ({ countries }) => {
  return (
    <div className={styles['countries-grid']}>
      {countries.map(country => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </div>
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