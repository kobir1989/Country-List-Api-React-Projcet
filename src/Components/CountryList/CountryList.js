import React from 'react';
import AllCountry from './AllCountry';
import './CountryList.css';
const CountryList = (props) => {
  return (
    <div className='body__container'>
      {props.country.map((item) => {
        return (
          <AllCountry
            key={item.id}
            flag={item.flag}
            name={item.name}
            capital={item.capital}
            region={item.region}
            population={item.population}
            area={item.area}
          />
        );
      })}
    </div>
  );
};

export default CountryList;
