import React from 'react';
import { GetServerSideProps } from 'next';
import { fetchCountryDetailsByName, fetchCountryCodeMapping } from '../utils/api'; 
import CountryDetail from '../components/CountryDetail';
import { Country } from '../interfaces/index';
import Layout from '../components/Layout';
import BackButton from '../components/BackButton';


interface CountryDetailPageProps {
  country: Country;
  countryCodeMapping: { [key: string]: string };
}



const CountryDetailPage: React.FC<CountryDetailPageProps> = ({ country, countryCodeMapping }) => {
  return (
  <Layout title={`${country.name.common} | Rest Countries`}>
    <BackButton />
    <CountryDetail country={country} countryCodeMapping={countryCodeMapping} />;
  </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { country } = context.params;
  const countryDetails = await fetchCountryDetailsByName(country as string);
  const countryCodeMapping = await fetchCountryCodeMapping();

  if (!countryDetails) {
    return { notFound: true };
  }

  return {
    props: {
      country: countryDetails,
      countryCodeMapping,
    },
  };
};


export default CountryDetailPage;
