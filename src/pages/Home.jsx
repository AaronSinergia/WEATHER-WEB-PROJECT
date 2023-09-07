import React, {useState} from 'react'
import ApiWeather from '../api/ApiWeather'
import SelectedOneOfFiveCities from '../components/FiveCitiesList/SelectedOneOfFiveCities'
import OneOfFiveCities from '../components/FiveCitiesList/OneOfFiveCities'


const Home = () => {
  const [weatherToday, setWeatherToday] = useState(null)
  const [selectedCity, setSelectedCity] = useState(' ')
  const [weatherData, setWeatherData] = useState(null)

  let renderedComp;
  if (selectedCity === 'Sabadell' || selectedCity === 'Rubí' || selectedCity === 'Barcelona' || selectedCity === 'Badalona' || selectedCity === 'Mataró') 
     {renderedComp = <OneOfFiveCities weatherData={weatherData} setWeatherData={setWeatherData} selectedCity={selectedCity} setSelectedCity={setSelectedCity}/>}
  
  return (
    <>
      <header>
        <h2 className='home_title'>TU CLIMA PARA HOY</h2>
      </header>
        {renderedComp ? renderedComp : <ApiWeather weatherToday={weatherToday} setWeatherToday={setWeatherToday} />}
        <SelectedOneOfFiveCities selectedCity={selectedCity} setSelectedCity={setSelectedCity}/>
        <a href="/">
          🔄 Vuelve a consultar el clima en tu ubicación🔄
        </a>
    </>
  )
}

export default Home