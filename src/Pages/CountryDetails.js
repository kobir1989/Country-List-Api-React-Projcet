import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './CountryDetails.css';

import Details from './Details';
const CountryDetails = () => {
  const { id } = useParams();
  const [countryData, setCountryData] = useState([]);
  const getDataRequest = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${id}`);
    const countryData = await response.json();
    const recevedData = countryData.map((item) => {
      return {
        id: Math.floor(Math.random() * 1000),
        flag: item.flags.png,
        maps: item.maps.googleMaps,
        name: item.name.common,
        native: item.name.official,
        coartOfArms: item.coatOfArms.png,
        capital: item.capital,
        region: item.region,
        subRegion: item.subregion,
        population: item.population,
        area: item.area,
        currenci: Object.keys(item.currencies),
        Languae: Object.values(item.languages),
        timezone: item.timezones,
      };
    });
    setCountryData(recevedData);
  };
  useEffect(() => {
    getDataRequest();
  }, []);

  return (
    <div className='details__container'>
      <Details countryData={countryData} />
    </div>
  );
};

export default CountryDetails;
