import React from "react";
import styles from "../styles/CountryCard.module.scss";
import Link from "next/link";


interface CountryCardProps {
    country: {
      flags: { svg: string };
      name: { common: string };
      population: number;
      region: string;
      capital: string | string[];
    };
  }


  


const CountryCard: React.FC<CountryCardProps> = ({ country }) => {


  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }


     // Function to get the capital if it's an array or a string
      const getCapital = (capital: string | string[]): string => {
        if (Array.isArray(capital)) { 
          return capital[0];
        }
        return capital;
      };



    return (
      <Link href={`/${country.name.common}`} passHref className={styles['link']}>
      <div className={styles['country-card']}>
        <div className={styles['country-flag-container']}>
          <img className={styles['country-flag']} src={country.flags.svg} alt={`Flag of ${country.name.common}`} />
        </div>
        <div className={styles['country-info-container']}>
          <h3 className={styles['country-name']}>{country.name.common}</h3>
          <p className={styles['country-detail']}><strong className={styles['strong']}>Population:</strong>{formatNumber(country.population)}</p>
          <p className={styles['country-detail']}><strong className={styles['strong']}>Region:</strong>{country.region}</p>
          <p className={styles['country-detail']}><strong className={styles['strong']}>Capital:</strong>{getCapital(country.capital)}</p>
        </div>
      </div>
    </Link>
    
    );
  };
  
  export default CountryCard;
  