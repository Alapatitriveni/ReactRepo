import React, { useEffect, useState } from 'react';

function Fetch() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => setCountries(data))
      .catch(error => console.error('Error fetching countries:', error));
  }, []);

  return (
    <div>
      <h1>Country Names</h1>
      <table >
        <thead>
          <tr>
            <th>Official Name</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country, index) => (
            <tr key={index}>
              <td>{country.name.official}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Fetch;