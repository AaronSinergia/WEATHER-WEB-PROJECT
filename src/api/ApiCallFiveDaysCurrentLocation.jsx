import React, { useEffect, useState } from 'react'
import { getSomething } from '../apiFunction';

const FiveDaysApiLocation = ({ fiveDaysLocation, setFiveDaysLocation }) => {
    const WEATHER_API = 'https://api.openweathermap.org/';
    const WEATHER_API_KEY = '89428bf87e63fd4d8d642ac1cb2311a3';
    const [coords, setCoords] = useState({lat: null, lon: null});

    useEffect(() => {
        if (coords.lat !== null && coords.lon !== null) {
          const FORECAST_URL = `${WEATHER_API}data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&appid=${WEATHER_API_KEY}&units=metric&lang=sp`;
    
          getSomething(FORECAST_URL, setFiveDaysLocation);
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
      {fiveDaysLocation && (
        <div className="weather_forecast_data">
          <p className="city_name">{fiveDaysLocation.city.name}</p>
          <div className='forecast_info_box'>
            {fiveDaysLocation.list.slice(0, 5).map((item, index) => (
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

export default FiveDaysApiLocation