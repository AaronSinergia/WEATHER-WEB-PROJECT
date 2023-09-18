import React from 'react'
import {FiveCities} from '../../functions/fiveCities'

const SelectedOneOfFiveCities = ({selectedCity, setSelectedCity}) => {

  const handleListCityChanges = (e) => {
    setSelectedCity(e.target.value);
  }

  return (
    <>
      {selectedCity && (
        <div className='five_cities'>
          <select value={selectedCity} onChange={handleListCityChanges}>
            <option value='' hidden>Consulta el clima en otra ciudad:</option>
              {FiveCities.map((objeto) => (
              <option value={objeto.city} key={objeto.city}>{objeto.city}</option>
              ))}
          </select> 
        </div>
        )}
    </>
  )
}

export default SelectedOneOfFiveCities