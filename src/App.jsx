import './App.css'
import {NavLink, Outlet} from 'react-router-dom'
import { Footer } from './components/Footer'
import { CityBucle } from './components/cityList'


function App() {
  return (
    <div className='App'>
      <div className='navbar'>
        <nav className='nav_title'>
          <NavLink to="">HOME</NavLink>
          <CityBucle />
          {/* <select className="select_weather">
            <option disabled selected>SELECT OTHER CITY</option>
            <option value=''>Sabadell</option>
            <option value=''>Rubí</option>
            <option value=''>Barcelona</option>
            <option value=''>Badalona</option>
            <option value=''>Mataró</option>
          </select> */}
        </nav>
      </div>
      <main className='outlet'>
        <Outlet />
      </main>

      <Footer />

    </div>
  )
}

export default App
