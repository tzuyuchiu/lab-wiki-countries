import React from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Row, Divider, Button, Card } from 'antd';

function CountriesList({ countries }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5">
          <div className="list-group">
            {countries.map((country) => (
              <div key={country.alpha3Code}>
                <Link to={country.alpha3Code}>
                  <img
                    src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                  />

                  <p> {country.name.common}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountriesList;
