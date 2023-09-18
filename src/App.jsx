import './App.css'
import {NavLink, Outlet} from 'react-router-dom'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className='App'>
      <div className='navbar'>
        <nav className='nav_title'>
          <button className='btn_ini'>
           <NavLink to='/'>INICIO</NavLink>
          </button>
          <button className='btn_prev'>
          <NavLink to='/five_days_forecast'>PREVISION A 5 DIAS VISTA</NavLink>
          </button>
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
