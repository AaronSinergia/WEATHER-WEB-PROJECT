import React, { useState } from 'react'
import { ApiWeather } from '../api/ApiWeather'

const Home = () => {
  const [weatherToday, setWeatherToday] = useState(null)
  return (
    <>
      <header>
        <h1 className='home_title'>EL TIEMPO DE TU CIUDAD HOY</h1>
      </header>
      <ApiWeather weatherToday={weatherToday} setWeatherToday={setWeatherToday}/>
    </>
  )
}

export default Home