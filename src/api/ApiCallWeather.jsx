import React, {useEffect, useState} from 'react'

const ApiWeather = ({weatherToday, setWeatherToday}) => {
  const WEATHER_API = 'https://api.openweathermap.org/';
  const WEATHER_API_KEY = '89428bf87e63fd4d8d642ac1cb2311a3';
  const [coords, setCoords] = useState({lat: null, lon: null});

  useEffect(() => {
    if (coords.lat !== null && coords.lon !== null) {
      const WEATHER_URL = `${WEATHER_API}data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${WEATHER_API_KEY}&units=metric&lang=sp`;

    fetch(WEATHER_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('La consulta sobre el clima de tu ciudad no es válida');
        }
        return response.json();
      })
      .then((data) => {
        setWeatherToday({ ...data, name: data.name });
      })
      .catch((error) => {
        console.error('Fetch error:', error)
      })
    }
  }, [coords, setCoords]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (error) => {
        alert('Error en los permisos de geolocalización, actívalos en tu navegador')
        console.error('Error en los permisos de geolocalización, actívalos en tu navegador:', error);
      }
    );
  }, [])

  
  return (
    <>
        {weatherToday && (
          <div className='weather_today_data'>
          <p className='city_name'> {weatherToday.name}</p>
          <p className='temp'>{Math.floor(weatherToday.main.temp)}º</p>
          <p className='weather_status'>{weatherToday.weather[0].description.toUpperCase()}</p>
          <img className='weather_icon' src={`http://openweathermap.org/img/w/${weatherToday.weather[0].icon}.png`} alt="weather_icon" />
          <p className='humidity'>HUMEDAD: {weatherToday.main.humidity}%</p>
          <p className='visibility'>VISIBILIDAD: {weatherToday.visibility} metros </p>
          <p className='wind'>VELOCIDAD DEL VIENTO: {weatherToday.wind.speed} metros/hora </p>
        </div>
        )}
    </>
  );
};

export default ApiWeather;