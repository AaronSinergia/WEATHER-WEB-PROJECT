import React, { useState } from 'react'
import FiveDaysApiLocation from '../components/FiveDaysForecast/FiveDaysApiLocation'

const FiveDaysForecast = () => {
  const [fiveDaysLocation, setFiveDaysLocation] = useState(null)

  return (
    <>
      <header className='five_days_forecast'>
        CONSULTA DEL CLIMA A CINCO DIAS VISTA
      </header>
      <FiveDaysApiLocation fiveDaysLocation={fiveDaysLocation} setFiveDaysLocation={setFiveDaysLocation}/>
      <a href="/five_days_forecast">
          🔄 Vuelve a consultar el clima en tu ubicación🔄
        </a>
    </>
  )
}

export default FiveDaysForecast