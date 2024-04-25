import React from 'react';
import { Country } from '../interfaces/index';
import styles from '../styles/CountryDetails.module.scss';
import Link from 'next/link';

  interface CountryDetailsProps {
    country: Country;
    countryCodeMapping: { [key: string]: string };
  }


const CountryDetails: React.FC<CountryDetailsProps> = ({ country, countryCodeMapping  }) => {
 
const { name, flags, population, region, subregion, capital, tld, currencies, languages, borders } = country;





const formatCurrencies = (currencies: { name: string }[]) => {
    return Object.values(currencies).map((currency) => currency.name).join(', ');
};

const formatLanguages = (languages) => {
    return Object.values(languages).join(', ');
};

  return (
    <div>
      <img src={flags.svg} alt={`Flag of ${name.common}`} />
      <h1>{name.common}</h1>
    <div>
        <p>Native Name: {(Object.values(name.nativeName)[0] as any).common}</p>
        <p>Population: {population.toLocaleString()}</p>
        <p>Region: {region}</p>
        <p>Sub Region: {subregion}</p>
        <p>Capital: {capital.join(', ')}</p>
        <p>Top Level Domain: {tld.join(', ')}</p>
        <p>Currencies: {formatCurrencies(Object.values(currencies))}</p>
        <p>Languages: {formatLanguages(languages)}</p>
    </div>
      {borders && (
        <div>
          <h3>Border Countries:</h3>
          {borders && (
        <div className={styles.borderCountries}>
          <h3>Border Countries:</h3>
          <div className={styles.bordersList}>
          {borders.map((borderCode) => {
              const borderName = countryCodeMapping[borderCode]; 
              return (
                <Link key={borderCode} href={`/${borderName.replace(/ /g, '%20')}`} passHref>
                  <button className={styles.borderCountry}>{borderName}</button>
                </Link>
              );
            })}
          </div>
        </div>
      )}
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
