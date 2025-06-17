import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const links = [
    { name: "Accueil", path: "/" },
    { name: "À propos", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Galerie", path: "/gallery" },
    { name: "Nos Bureaux", path: "/offices" },
    { name: "Contact", path: "/contact" }
  ]

  // Détecter la taille d'écran
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  // Fermer le menu mobile quand on clique à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuOpen && isMobile) {
        const target = event.target as Element
        if (!target.closest('.mobile-menu') && !target.closest('.menu-toggle')) {
          setMenuOpen(false)
        }
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [menuOpen, isMobile])

  // Empêcher le scroll quand le menu mobile est ouvert
  useEffect(() => {
    if (menuOpen && isMobile) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [menuOpen, isMobile])

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.6, 0.01, 0.05, 0.95] }}
        className="fixed w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-gray-100/50"
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="text-gray-900 font-semibold text-xl tracking-wider">
                GREGA
              </span>
            </Link>

            {/* Navigation desktop */}
            <div className="hidden md:flex items-center space-x-8">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-300 font-medium text-sm tracking-wide"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Bouton menu hamburger mobile */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-gray-900 relative z-50"
              aria-label="Menu"
            >
              <div className="space-y-1.5">
                <motion.span 
                  animate={menuOpen ? { rotate: 45, y: 4.5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="block w-5 h-0.5 bg-gray-900 origin-center"
                />
                <motion.span 
                  animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="block w-5 h-0.5 bg-gray-900"
                />
                <motion.span 
                  animate={menuOpen ? { rotate: -45, y: -4.5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="block w-5 h-0.5 bg-gray-900 origin-center"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Menu mobile */}
      <AnimatePresence>
        {menuOpen && isMobile && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setMenuOpen(false)}
            />
            
            {/* Menu mobile */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
              className="fixed top-0 right-0 w-72 h-full bg-white/95 backdrop-blur-xl border-l border-gray-100 z-40"
            >
              {/* Header du menu mobile */}
              <div className="p-6 border-b border-gray-100">
                <span className="text-gray-900 text-lg font-semibold tracking-wider">
                  GREGA
                </span>
              </div>

              {/* Navigation mobile */}
              <div className="px-6 py-8">
                <nav className="space-y-4">
                  {links.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        to={link.path}
                        className="block py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                        onClick={() => setMenuOpen(false)}
                      >
                        <span className="text-gray-700 text-lg font-medium">
                          {link.name}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar 