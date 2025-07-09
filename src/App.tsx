import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Offices from './pages/Offices'
import Contact from './pages/Contact'
import Proprietaires from './pages/Proprietaires'
import Villes from './pages/Villes'
import BiensALouer from './pages/BiensALouer'
import MentionsLegales from './pages/MentionsLegales'
import Confidentialite from './pages/Confidentialite'
import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'

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
    <div className="min-h-screen bg-white">
      <Navbar />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/biens-a-louer" element={<BiensALouer />} />
          <Route path="/offices" element={<Offices />} />
          <Route path="/proprietaires" element={<Proprietaires />} />
          <Route path="/villes" element={<Villes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/confidentialite" element={<Confidentialite />} />
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
