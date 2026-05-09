import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Build from './pages/Build'
import About from './pages/About'

function Nav() {
  return (
    <nav>
      <div className="nav-inner">
        <span className="nav-brand">Pulse PM</span>
        <ul className="nav-links">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/build">The Build</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer>
      <div className="container">
        <p className="footer-text">
          Pulse Product Management — Operational Intelligence Under Control
        </p>
        <p className="footer-disclaimer">
          All work documented on this site is conducted independently on personal 
          time using personal accounts and public source documents. Not affiliated 
          with or endorsed by any current or former employer.
        </p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/build" element={<Build />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}
