
//fetch all countries
export const fetchCountries = async () => {
  const response = await fetch('https://restcountries.com/v3.1/all');
  if (!response.ok) {
    throw new Error('Failed to fetch countries');
  }
  const countries = await response.json();
  return countries;
};

//fetch countries by countryCode

export const fetchCountryDetailsByName = async (countryName) => {
  const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);
  if (!response.ok) {
    throw new Error('Country not found');
  }
  const countryDetails = await response.json();
  return countryDetails.length > 0 ? countryDetails[0] : null;
};


//fetch all countries and create mapping by names to avoid multiple fetches
export const fetchCountryCodeMapping = async () => {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const countries = await response.json();
  const countryCodeMapping = countries.reduce((acc, country) => {
    acc[country.cca3] = country.name.common;
    return acc;
  }, {});
  return countryCodeMapping;
};