import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Offices from './pages/Offices'
import Contact from './pages/Contact'
import Properties from './pages/Properties'
import Location from './pages/Location'
import Social from './pages/Social'

function App() {
  return (
    <Router>
      <div className="text-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/offices" element={<Offices />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/location" element={<Location />} />
          <Route path="/social" element={<Social />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
