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

const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

  return (
    <div className={styles['country-detail-container']}> 
      <img src={flags.svg} alt={`Flag of ${name.common}`} className={styles['country-flag']} />
      
    <div className={styles['country-info']}>
      <h1>{name.common}</h1>
        <div className={styles['country-info-wrapper']}>

          <div>
            <p><strong className={styles['strong']}>Native Name:</strong> {(Object.values(name.nativeName)[0] as any).common}</p>
            <p><strong className={styles['strong']}>Population:</strong> {formatNumber(population)}</p>
            <p><strong className={styles['strong']}>Region:</strong> {region}</p>
            <p><strong className={styles['strong']}>Sub Region:</strong> {subregion}</p>
            <p><strong className={styles['strong']}>Capital:</strong> {capital.join(', ')}</p>
          </div>
          <div>
            <p><strong className={styles['strong']}>Top Level Domain:</strong> {tld.join(', ')}</p>
            <p><strong className={styles['strong']}>Currencies:</strong> {formatCurrencies(Object.values(currencies))}</p>
            <p><strong className={styles['strong']}>Languages:</strong> {formatLanguages(languages)}</p>
          </div>
        </div>
      {borders && (
        <div>
          {borders && (
        <div className={styles['border-countries']}>
          <h3><strong className={styles['strong']}>Border Countries:</strong></h3>
          <div className={styles['border-list']}>
          {borders.map((borderCode) => {
              const borderName = countryCodeMapping[borderCode]; 
              return (
                <Link key={borderCode} href={`/${borderName.replace(/ /g, '%20')}`} passHref>
                  <button className={styles['border-country']}>{borderName}</button>
                </Link>
              );
            })}
          </div>
        </div>
      )}
        </div>
      )}
      </div>
    </div>
  );
};

export default CountryDetails;
