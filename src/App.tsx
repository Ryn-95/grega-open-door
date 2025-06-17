import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Offices from './pages/Offices'
import Contact from './pages/Contact'
import Properties from './pages/Properties'
import Proprietaires from './pages/Proprietaires'
import Location from './pages/Location'
import Social from './pages/Social'
import EtatDesLieux from './pages/EtatDesLieux'
import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'

// Composant qui réinitialise la position de défilement lors du changement de route
const ScrollToTop = () => {
  const { pathname } = useLocation()
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [pathname])
  
  return null
}

// Composant d'application principal avec routes
const AppContent = () => {
  const location = useLocation()
  
  return (
    <div className="text-white">
      <Navigation />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/offices" element={<Offices />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/proprietaires" element={<Proprietaires />} />
          <Route path="/location" element={<Location />} />
          <Route path="/logement-classique" element={<Location />} />
          <Route path="/social" element={<Social />} />
          <Route path="/logement-social" element={<Social />} />
          <Route path="/etat-des-lieux" element={<EtatDesLieux />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
