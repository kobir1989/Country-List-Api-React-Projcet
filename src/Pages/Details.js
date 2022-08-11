import React from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';
const Details = (props) => {
  return (
    <>
      {props.countryData.map((item) => {
        return (
          <div className='details__page' key={item.id}>
            <div className='page__img'>
              <div>
                <img className='flag' src={item.flag} alt='flag.png' />
                <p> National Flag</p>
              </div>
              <div>
                <img className='arm' src={item.coartOfArms} alt='arm.png' />
                <p> Coart of Arms</p>
              </div>
            </div>

            <div className='page__text'>
              <h1>
                Common Name <FaArrowAltCircleRight className='arrrow__icon' />{' '}
                {item.name}
              </h1>
              <h3>
                Official Name <FaArrowAltCircleRight className='arrrow__icon' />{' '}
                {item.native}
              </h3>
              <h3>
                Capital <FaArrowAltCircleRight className='arrrow__icon' />{' '}
                {item.capital}
              </h3>
              <h3>
                Region <FaArrowAltCircleRight className='arrrow__icon' />{' '}
                {item.region}
              </h3>
              <h3>
                Sub-Region <FaArrowAltCircleRight className='arrrow__icon' />{' '}
                {item.subRegion}
              </h3>
              <p>
                Area <FaArrowAltCircleRight className='arrrow__icon' />{' '}
                {item.area} <sup>2</sup> Km.
              </p>
              <p>
                Population <FaArrowAltCircleRight className='arrrow__icon' />{' '}
                {item.population}
              </p>
              <p>
                currencies <FaArrowAltCircleRight className='arrrow__icon' />{' '}
                {Object.values(item.currenci)}
              </p>
              <p>
                Languaes <FaArrowAltCircleRight className='arrrow__icon' />{' '}
                {item.Languae[0]}
              </p>
              <p>
                Time Zone <FaArrowAltCircleRight className='arrrow__icon' />{' '}
                {item.timezone}
              </p>
              <a href={item.maps}>Google Maps</a>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Details;
