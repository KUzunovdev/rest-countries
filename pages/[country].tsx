import React from 'react';
import { GetServerSideProps } from 'next';
import { fetchCountryDetailsByName } from '../utils/api'; 
import CountryDetail from '../components/CountryDetail';

const CountryDetailPage = ({ country }) => {
  return <CountryDetail country={country} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { country } = context.params;
  const countryDetails = await fetchCountryDetailsByName(country);

  if (!countryDetails) {
    return { notFound: true };
  }

  return { props: { country: countryDetails } };
};
export default CountryDetailPage;
