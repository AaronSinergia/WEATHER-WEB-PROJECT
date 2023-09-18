import React, { lazy, useState } from 'react'
import SelectedOneOfFiveCities from '../components/SelectList/CompListOfFiveCities';

const FiveDaysApiLocation = lazy(()=> import('../api/ApiCallFiveDaysCurrentLocation'))
const SelectFiveDaysApi = lazy(()=> import('../api/ApiCallListForFiveDays'))

const FiveDaysForecast = () => {
  const [fiveDaysLocation, setFiveDaysLocation] = useState(null)
  const [selectedCity, setSelectedCity] = useState(' ')
  const [weatherData, setWeatherData] = useState(null)

  let renderedComp;
  if (selectedCity === 'Sabadell' || selectedCity === 'Rubí' || selectedCity === 'Barcelona' || selectedCity === 'Badalona' || selectedCity === 'Mataró') 
     {renderedComp = <SelectFiveDaysApi weatherData={weatherData} setWeatherData={setWeatherData} selectedCity={selectedCity} setSelectedCity={setSelectedCity}/>}

  return (
    <>
      <header className='five_days_forecast'>
        CONSULTA DEL CLIMA A 5 DIAS VISTA
      </header>
      <React.Suspense fallback={<h2>Cargando...</h2>}>
        {renderedComp ? renderedComp : <FiveDaysApiLocation fiveDaysLocation={fiveDaysLocation} setFiveDaysLocation={setFiveDaysLocation}/>}
        <SelectedOneOfFiveCities selectedCity={selectedCity} setSelectedCity={setSelectedCity}/>
        <a href="/five_days_forecast">
            🔄 Vuelve a consultar el clima 5 días vista, en tu ubicación🔄
        </a>
      </React.Suspense>
    </>
  )
}

export default FiveDaysForecast