import React, { useState, useEffect } from 'react';
import CountryList from './CountryList';
import NavBar from '../NavBar/NavBar';
import './ApiRequest.css';
const ApiRequest = () => {
  const [countries, setCountries] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [keyWord, setKeyWord] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');

  const getRequest = async () => {
    setIsLoading(true);
    setIsError(null);
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      if (!response.ok) {
        throw new Error(isError);
      }
      const data = await response.json();
      const recevedData = data.map((item) => {
        return {
          id: item.name.common,
          flag: item.flags.png,
          name: item.name.common,
          capital: item.capital,
          region: item.region,
          population: item.population,
          area: item.area,
        };
      });

      setCountries(recevedData);
      setFilteredData(recevedData);
    } catch (error) {
      setIsError(error);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    getRequest();
  }, []);

  // //Filter Search

  const handleChange = (event) => {
    setKeyWord(event.target.value);
    const filterSearch = countries.filter((country) => {
      return country.name.toLowerCase().search(keyWord.toLowerCase()) !== -1;
    });
    setFilteredData(filterSearch);
  };

  //Filter Region

  const selectRegionHandler = (event) => {
    setSelectedRegion(event.target.value);
  };
  const filterSelected = filteredData.filter((country) => {
    return selectedRegion === 'All'
      ? country.region.includes(country.region)
      : country.region.includes(selectedRegion);
  });

  return (
    <>
      <NavBar
        onSearchKeyWord={handleChange}
        onSelectedFilter={selectRegionHandler}
        selectded={selectedRegion}
      />
      {isLoading && !isError && <div className='spinar'></div>}

      {isError && (
        <div className='error-message'>
          <p>Status 404 Something went Wrong, Please try again!</p>
        </div>
      )}

      <CountryList country={filterSelected} />
    </>
  );
};
export default ApiRequest;
