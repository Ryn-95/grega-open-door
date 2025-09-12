import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Home from './pages/Home'
import About from './pages/About'
import Offices from './pages/Offices'
import Contact from './pages/Contact'
import Proprietaires from './pages/Proprietaires'
import Villes from './pages/Villes'
import BiensALouer from './pages/BiensALouer'
import Blog from './pages/Blog'
import PrixLocation from './pages/PrixLocation'
import MentionsLegales from './pages/MentionsLegales'
import Confidentialite from './pages/Confidentialite'
import { useEffect, Suspense, lazy } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'

// Lazy loading des pages moins critiques pour améliorer LCP
const LazyAbout = lazy(() => import('./pages/About'))
const LazyOffices = lazy(() => import('./pages/Offices'))
const LazyVilles = lazy(() => import('./pages/Villes'))
const LazyMentionsLegales = lazy(() => import('./pages/MentionsLegales'))
const LazyConfidentialite = lazy(() => import('./pages/Confidentialite'))

// Composant de chargement optimisé
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900"></div>
  </div>
)

// Composant qui réinitialise la position de défilement lors du changement de route
const ScrollToTop = () => {
  const { pathname } = useLocation()
  
  useEffect(() => {
    // Optimisation : scroll instantané pour les changements de page
    window.scrollTo(0, 0)
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
        <Suspense fallback={<PageLoader />}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<LazyAbout />} />
            <Route path="/biens-a-louer" element={<BiensALouer />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/prix-location-paris" element={<PrixLocation />} />
            <Route path="/offices" element={<LazyOffices />} />
            <Route path="/proprietaires" element={<Proprietaires />} />
            <Route path="/villes" element={<LazyVilles />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<LazyMentionsLegales />} />
            <Route path="/confidentialite" element={<LazyConfidentialite />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </div>
  )
}

// Composant principal de l'application avec tous les providers
function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  )
}

export default App
