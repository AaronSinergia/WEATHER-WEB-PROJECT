import './App.css'
import {NavLink, Outlet} from 'react-router-dom'


function App() {
  return (
    <div className='App'>
      <div className='navbar'>
        <nav className='nav_title'>
          <NavLink to="">HOME</NavLink>
          <NavLink to="/select_weather">SELECT OTHER CITY</NavLink>
        </nav>
      </div>
      <main className='outlet'>
        <Outlet />
      </main>
      <footer className="footer">© Created by Aaron Carrasco for RockTheCode</footer>
    </div>
  )
}

export default App
