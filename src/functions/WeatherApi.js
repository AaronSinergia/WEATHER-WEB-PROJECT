import { useState, useEffect } from 'react';

const WeatherAPI = ({ url, setData }) => {
  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('La consulta sobre el clima no es válida');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
  }, [url, setData]);

  return null;
};

export default WeatherAPI;
