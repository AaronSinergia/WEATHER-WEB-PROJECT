import React, {useState} from 'react'
import {FiveCities} from '../../functions/fiveCities'
import SelectedOneOfFiveCities from '../WeatherChoose/SelectedOneOfFiveCities'
import ApiWeather from '../../api/ApiWeather'


const ChooseWeatherView = () => {
  const [weatherToday, setWeatherToday] = useState(null)
  const [selectedCity, setSelectedCity] = useState('')

  const handleListCityChanges = (e) => {
    setSelectedCity(e.target.value);
  }

let renderedComp;
if (selectedCity === 'Sabadell' || selectedCity === 'Rubí' || selectedCity === 'Barcelona' || selectedCity === 'Badalona' || selectedCity === 'Mataró') {
  renderedComp = <SelectedOneOfFiveCities />
}
  
  return (
    <>
      <header>
        <h2 className='home_title'>TU CLIMA PARA HOY</h2>
      </header>
      {renderedComp ? renderedComp : <ApiWeather weatherToday={weatherToday} setWeatherToday={setWeatherToday} />}
        <div className='five_cities_list'>
            <select value={selectedCity} onChange={handleListCityChanges}>
            <option value="" disabled>Selecciona una opción:</option>
            {FiveCities.map(objeto => (
                <option value={objeto.city}>{objeto.city}</option>
                ))}
            </select> 
        </div>
    </>
  )
}

export default ChooseWeatherView