import React, { useEffect } from 'react'

const SelectFiveDaysApi = ({selectedCity, weatherData, setWeatherData}) => {
  const WEATHER_API = 'https://api.openweathermap.org/';
  const WEATHER_API_KEY = '89428bf87e63fd4d8d642ac1cb2311a3';

  useEffect(() => {
    if (selectedCity) {
      const FORECAST_URL = `${WEATHER_API}data/2.5/forecast?q=${selectedCity}&appid=${WEATHER_API_KEY}&units=metric&lang=sp`;
  
    fetch(FORECAST_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('La consulta sobre el clima de la ciudad escogida no es válida');
        }
        return response.json();
      })
      .then((data) => {
        setWeatherData(data);
        console.log(data)
      })
      .catch((error) => {
        console.error('Fetch error:', error)
      })
    }
  }, [selectedCity]);

  return (
    <>
    
      {weatherData && (
        <div className='weather_forecast_data'>
          <p className='city_name'>{weatherData.city.name}</p>

          <div className='forecast_info_box'>
            {weatherData.list.slice(0, 5).map((item, index) => (
              <div key={index} className="day_forecast">
                <p className="date">
                  Fecha: {new Date(item.dt * 1000).toLocaleDateString('es-ES')}
                </p>
                <p className="temp_forecast">{Math.floor(item.main.temp)}º</p>
                <p className="weather_forecast_status">
                  {item.weather[0].description.toUpperCase()}
                </p>
                <img
                  className="weather_forecast_icon"
                  src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                  alt="weather_icon"
                />  
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default SelectFiveDaysApi