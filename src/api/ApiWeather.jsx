import React from 'react'

export const ApiWeather = ({weatherToday, setWeatherToday}) => {
  const WEATHER_API = 'https://api.openweathermap.org/';
  const WEATHER_API_KEY = '44073e2f8bbf82aa11a32e49771e5c2a';
  const WEATHER_URL = `${WEATHER_API}data/2.5/weather?lat={lat}&lon={lon}&appid=${WEATHER_API_KEY}`;

  fetch(WEATHER_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error('La consulta sobre el clima de tu ciudad no es válida');
      }
      return response.json();
    })
    .then((data) => {
      setWeatherToday(data);
    })
    .catch((error) => {
      console.error('Fetch error:', error)
    })

  return (
    <>
      {weatherToday && (
      <div className='weather_today_data'>
        <p className='city_name'>{weatherToday.name}</p>
        <p className='visibility'>La visibilidad hoy es de: {weatherToday.visibility}</p>
      </div>
      )}
    </>
  )
}
