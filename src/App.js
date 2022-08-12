import './App.css';
import HomePage from './Pages/HomePage';
import CountryDetails from './Pages/CountryDetails';
import { Route, Routes, Navigate } from 'react-router-dom';
import React from 'react';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/country-details' element={<CountryDetails />}>
          <Route path=':id' element={<CountryDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
