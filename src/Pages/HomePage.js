import React from 'react';
import ApiRequest from '../Components/CountryList/ApiRequest';
import './HomePage.css';
const HomePage = () => {
  return (
    <div className='container__main'>
      <ApiRequest />
      <div className='footer'>
        <p>©Copyright 2022 | Kabir Hossain</p>
      </div>
    </div>
  );
};

export default HomePage;
