import React, { useEffect, useState } from 'react'

const FiveDaysApiLocation = ({fiveDaysLocation, setFiveDaysLocation}) => {
    const WEATHER_API = 'https://api.openweathermap.org/';
    const WEATHER_API_KEY = '89428bf87e63fd4d8d642ac1cb2311a3';
    const [coords, setCoords] = useState({lat: null, lon: null});

    useEffect(() => {
        if (coords.lat !== null && coords.lon !== null) {
          const FORECAST_URL = `${WEATHER_API}data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&appid=${WEATHER_API_KEY}&units=metric&lang=sp`;
    
        fetch(FORECAST_URL)
          .then((response) => {
            if (!response.ok) {
              throw new Error('La consulta sobre el clima de tu ciudad no es válida');
            }
            return response.json();
          })
          .then((data) => {
            setFiveDaysLocation(data);
            console.log(data)
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
            console.error('Error en la geolocalización:', error);
          }
        );
      }, [])
    
  return (
    <>
         {fiveDaysLocation && (
        <div className="weather_data">
          <p className="city_name">
            Estás consultando el clima en tu ubicación: {fiveDaysLocation.city.name}
          </p>

          {fiveDaysLocation.list.slice(0, 5).map((item, index) => (
            <div key={index} className="day_forecast">
              <p className="date">
                Fecha: {new Date(item.dt * 1000).toLocaleDateString('es-ES')}
              </p>
              <p className="weather_status">
                {item.weather[0].description.toUpperCase()}
              </p>
              <img
                className="weather_icon"
                src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                alt="weather_icon"
              />
              <p className="temp">TEMPERATURA: {item.main.temp}ºC</p>
              <p className="humidity">HUMEDAD: {item.main.humidity}%</p>
              <p className="visibility">
                VISIBILIDAD: {item.visibility} metros
              </p>
              <p className="wind">VIENTO: {item.wind.speed} metros/hora</p>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default FiveDaysApiLocation