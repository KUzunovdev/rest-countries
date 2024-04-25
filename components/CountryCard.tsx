import React from "react";
import styles from "../styles/CountryCard.module.scss";
import { useState, useEffect } from "react";
import Link from "next/link";


interface CountryCardProps {
    country: {
      flags: { svg: string };
      name: { common: string };
      population: number;
      region: string;
      capital: [string];
    };
  }


  


const CountryCard: React.FC<CountryCardProps> = ({ country }) => {


    const [formattedPopulation, setFormattedPopulation] = useState('');

    useEffect(() => {
      setFormattedPopulation(country.population.toLocaleString());
    }, [country.population]);



    return (
      <Link href={`/${country.name.common}`} passHref>
      <div className={styles['country-card']}>
        <img className={styles['country-flag']} src={country.flags.svg} alt={`Flag of ${country.name.common}`} />
        <h3 className={styles['country-name']}>{country.name.common}</h3>
        <p className={styles['country-detail']}>Population: {formattedPopulation}</p>
        <p className={styles['country-detail']}>Region: {country.region}</p>
        <p className={styles['country-detail']}>Capital: {country.capital}</p>
      </div>
      </Link>
    );
  };
  
  export default CountryCard;
  