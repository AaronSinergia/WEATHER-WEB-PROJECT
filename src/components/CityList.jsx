import React from 'react'

const CityList = [
  {
    city: 'Sabadell',
    description: 'NUBES DISPERSAS',
    temp: '-10 ºC',
    humidity: '200',
    visibility: '1',
    wind: '1',
  },
  {
    city: 'Rubí',
    description: 'CLEAR SKY',
    temp: '10 ºC',
    humidity: '20',
    visibility: '10',
    wind: '3',
  },
  {
    city: 'Barcelona',
    description: 'BROKEN CLOUDS',
    temp: '32 ºC',
    humidity: '450',
    visibility: '676',
    wind: '3.34',
  },
  {
    city: 'Badalona',
    description: 'RAIN',
    temp: '40 ºC',
    humidity: '67',
    visibility: '340',
    wind: '2.03',
  },
  {
    city: 'Mataró',
    description: 'THUNDERSTORM',
    temp: '11 ºC',
    humidity: '11111',
    visibility: '1111',
    wind: '1.11',
  },
];

export const CityBucle = () => {
  const createSelect = document.createElement('select')

  for (let i = 0; i < CityList.length; i++) {
    const citysLited = CityList[i].citysLited;

    const createOpt= document.createElement('option')
    createOpt.value = citysLited;
    createOpt.text = citysLited;
    createSelect.appendChild(createOpt)
  }
}



export default CityList