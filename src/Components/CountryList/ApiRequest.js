import React, { useState, useEffect } from 'react';
import CountryList from './CountryList';
import NavBar from '../NavBar/NavBar';
import './ApiRequest.css';
const ApiRequest = () => {
  const [countries, setCountries] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [keyWord, setKeyWord] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');

  const getRequest = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    console.log(response.status);
    const data = await response.json();
    setIsLoading(!isLoading);
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
  };

  // // //Filter Search
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
  useEffect(() => {
    getRequest();
  }, []);

  return (
    <>
      <NavBar
        onSearchKeyWord={handleChange}
        onSelectedFilter={selectRegionHandler}
        selectded={selectedRegion}
      />
      {isLoading && <div className='spinar'></div>}
      <CountryList country={filterSelected} />
    </>
  );
};
export default ApiRequest;
