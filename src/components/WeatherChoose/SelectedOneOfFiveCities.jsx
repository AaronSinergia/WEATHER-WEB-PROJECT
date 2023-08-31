import React from 'react'
import {FiveCities} from '../../functions/fiveCities'

const SelectedOneOfFiveCities = () => {
  return (
    <>
        <div className='weather_today_data'>
            <p className='city_name'>Estás consultando el clima en tu ciudad: {FiveCities.city}</p>
            <p className='weather_status'>{FiveCities.description}</p>
            <img className='weather_icon' src='' alt="weather_icon" />
            <p className='temp'>TEMPERATURA: {FiveCities.temp} ºC</p>
            <p className='humidity'>HUMEDAD: {FiveCities.humidity} %</p>
            <p className='visibility'>VISIBILIDAD PARA HOY: {FiveCities.visibility} metros </p>
            <p className='wind'>VELOCIDAD DEL VIENTO: {FiveCities.wind} metros/hora </p>
        </div>
    </>
  )
}

export default SelectedOneOfFiveCities