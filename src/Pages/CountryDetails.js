import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './CountryDetails.css';
import Details from './Details';

const CountryDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { id } = useParams();
  const [singleCountryData, setSingleCountryData] = useState([]);
  useEffect(() => {
    const getDataRequest = async () => {
      setIsLoading(true);
      setIsError(null);
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${id}`
        );
        if (!response.ok) {
          throw new Error(isError);
        }
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

        setSingleCountryData(recevedData);
        setIsLoading(false);
      } catch (error) {
        setIsError(error);
      }
    };
    getDataRequest();
  }, [isError, id]);
  return (
    <div className='details__container'>
      {isLoading && !isError && <div className='spinar'></div>}
      {isError && (
        <div className='error-message'>
          <p>Status 404 Something went Wrong! Please try again.</p>
        </div>
      )}
      <Details countryData={singleCountryData} />
    </div>
  );
};

export default CountryDetails;
