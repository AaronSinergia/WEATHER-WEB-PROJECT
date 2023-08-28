import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Home from "../src/pages/Home.jsx"
import SelectWeather from "../src/pages/SelectWeather.jsx"
import NotFound from "../src/pages/SelectWeather.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<Home/>} />
          <Route path='select_weather' element={<SelectWeather/>} />
          <Route path='*' element={<NotFound/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
