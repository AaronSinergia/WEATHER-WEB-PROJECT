import React, { useEffect } from 'react'

const OneOfFiveCities = ({selectedCity, weatherData, setWeatherData}) => {
  const WEATHER_API = 'https://api.openweathermap.org/';
  const WEATHER_API_KEY = '89428bf87e63fd4d8d642ac1cb2311a3';

  useEffect(() => {
    if (selectedCity) {
      const WEATHER_FIVE_CITIES_URL = `${WEATHER_API}data/2.5/weather?q=${selectedCity}&appid=${WEATHER_API_KEY}&units=metric&lang=sp`;
  
    fetch(WEATHER_FIVE_CITIES_URL)
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
      <div className='weather_today_data'>
  <p className='city_name'>Clima de la ciudad seleccionada: {weatherData.name}</p>
        <p className='weather_status'>{weatherData.weather[0].description.toUpperCase()}</p>
        <img className='weather_icon' src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="weather_icon" />
        <p className='temp'>TEMPERATURA: {weatherData.main.temp}ºC</p>
        <p className='humidity'>HUMEDAD: {weatherData.main.humidity}%</p>
        <p className='visibility'>VISIBILIDAD PARA HOY: {weatherData.visibility} metros </p>
        <p className='wind'>VELOCIDAD DEL VIENTO: {weatherData.wind.speed} metros/hora </p>
      </div>
      )}
    </>
  )
}

export default OneOfFiveCities