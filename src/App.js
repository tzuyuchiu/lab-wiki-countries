import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import countriesJson from './countries.json';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import axios from 'axios';

function App() {
  const [countrydData, setcountryData] = useState(countriesJson);
  // console.log(countrydData);
  useEffect(() => {
    let config = {
      method: 'get',
      url: 'https://ih-countries-api.herokuapp.com/countries',
    };

    axios(config)
      .then((response) => {
        setcountryData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="country-container">
        <div>
          <Routes>
            <Route
              path="/:id"
              element={<CountryDetails countries={countrydData} />}
            />
          </Routes>
        </div>

        <div className="container">
          <CountriesList countries={countrydData} />

          {/* React-Router Route rendering the CountryDetails should go here */}
        </div>
      </div>
    </div>
  );
}

export default App;
