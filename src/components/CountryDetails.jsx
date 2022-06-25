import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const CountryDetails = ({ countries }) => {
  // We want to get the id from the URL parameters
  const params = useParams();
  const country = countries.find((country) => {
    return country.alpha3Code === params.id;
  });

  return (
    <div className="col-7">
      <h1>
        {country.name.common}
        <img
          src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
        />
      </h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {`${country.area} km`}
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {/* <li>{country.borders}</li> */}
                {country.borders.map((country) => (
                  <div key={country.alpha3Code}>
                    <li className="border-country"> {country}</li>
                  </div>
                ))}
                {/* <li>
                  <a href="/AND">Andorra</a>
                </li>
                <li>
                  <a href="/BEL">Belgium</a>
                </li>
                <li>
                  <a href="/DEU">Germany</a>
                </li>
                <li>
                  <a href="/ITA">Italy</a>
                </li>
                <li>
                  <a href="/LUX">Luxembourg</a>
                </li>
                <li>
                  <a href="/MCO">Monaco</a>
                </li>
                <li>
                  <a href="/ESP">Spain</a>
                </li>
                <li>
                  <a href="/CHE">Switzerland</a>
                </li> */}
              </ul>
            </td>
            <td>
              <ul></ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
