import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AllCountry.css';
import Card from '../Layout/Card';
const AllCountry = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <Card>
        <div className='country__card'>
          <img src={props.flag} alt='flag.png' />
          <h2> {props.name}</h2>
          <h3>Capital: {props.capital}</h3>
          <h3>Region: {props.region}</h3>
          <p>Population: {props.population} </p>
          <p>
            Area: {props.area}
            <sup>2</sup> Km
          </p>
          <button
            className='btn'
            onClick={() => {
              navigate(`/country-details/${props.name}`);
            }}
          >
            Learn More
          </button>
        </div>
      </Card>
    </>
  );
};

export default AllCountry;
