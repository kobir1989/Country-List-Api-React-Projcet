import React from 'react';
import './NavBar.css';
import { GiEarthAfricaEurope } from 'react-icons/gi';
import { BiSearchAlt } from 'react-icons/bi';

const NavBar = ({ onSearchKeyWord, onSelectedFilter, selected }) => {
  return (
    <div className='nav'>
      <div className='nav__Logo'>
        <GiEarthAfricaEurope className='globe-__icon' />
      </div>
      <div className='search'>
        <BiSearchAlt className='search__icon' />
        <form>
          <input
            type='text'
            placeholder='Where to?'
            onChange={onSearchKeyWord}
          />
        </form>
      </div>
      <div className='filter-search'>
        <select value={selected} onChange={onSelectedFilter}>
          <option value='All'>All Region</option>
          <option value='Asia'>Asia</option>
          <option value='Africa'>Africa</option>
          <option value='Europe'>Europe</option>
          <option value='America'>America</option>
          <option value='Oceania'>Oceania</option>
        </select>
        <div className='wish__list-count'></div>
      </div>
    </div>
  );
};

export default NavBar;
