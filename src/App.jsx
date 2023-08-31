import './App.css'
import {NavLink, Outlet} from 'react-router-dom'
import { Footer } from './components/Footer'


function App() {
  return (
    <div className='App'>
      <div className='navbar'>
        <nav className='nav_title'>
          <NavLink to="">INICIO</NavLink>
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
