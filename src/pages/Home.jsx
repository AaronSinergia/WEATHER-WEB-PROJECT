import React, {lazy, useState} from 'react'
import ApiWeather from '../api/ApiCallWeather'
import SelectedOneOfFiveCities from '../components/SelectList/CompListOfFiveCities'

const OneOfFiveCities = lazy(()=> import('../api/ApiCallListFiveCities'))

const Home = () => {
  const [weatherToday, setWeatherToday] = useState(null)
  const [selectedCity, setSelectedCity] = useState(' ')
  const [weatherData, setWeatherData] = useState(null)

  let renderedComp;
  if (selectedCity === 'Sabadell' || selectedCity === 'Rubí' || selectedCity === 'Barcelona' || selectedCity === 'Badalona' || selectedCity === 'Mataró') 
     {renderedComp = <OneOfFiveCities weatherData={weatherData} setWeatherData={setWeatherData} selectedCity={selectedCity} setSelectedCity={setSelectedCity}/>}
  
  return (
    <>
      <React.Suspense fallback={<h2>Cargando....</h2>}>
        {renderedComp ? renderedComp : <ApiWeather weatherToday={weatherToday} setWeatherToday={setWeatherToday} />}
        <SelectedOneOfFiveCities selectedCity={selectedCity} setSelectedCity={setSelectedCity}/>
        <button>
          <a className='return_to' href="/">
            🔄 Vuelve al clima en tu ubicación 
          </a>
        </button>
      </React.Suspense>
    </>
  )
}

export default Home