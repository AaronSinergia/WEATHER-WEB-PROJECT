import React, { useState } from 'react'
import ApiWeather from '../api/ApiWeather'

const Home = () => {
  const [weatherToday, setWeatherToday] = useState(null)

  return (
    <>
      <header>
        <h2 className='home_title'>CONSULTA EL CLIMA PARA EL DIA DE HOY</h2>
      </header>
      <ApiWeather weatherToday={weatherToday} setWeatherToday={setWeatherToday}/>
    </>
  )
}

export default Home