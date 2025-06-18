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
      {/* NAVBAR ULTRA-VISIBLE ET RÉVOLUTIONNAIRE */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }}
        className="fixed w-full z-50 top-0"
      >
        {/* Background ULTRA-VISIBLE */}
        <div className={`relative transition-all duration-500 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-xl border-b-2 border-gray-900/10 shadow-xl' 
            : 'bg-white/90 backdrop-blur-lg border-b border-gray-900/5 shadow-lg'
        }`}>
          
          {/* Barre décorative supérieure VISIBLE */}
          <motion.div
            animate={{ 
              background: [
                "linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #ef4444 100%)",
                "linear-gradient(90deg, #ef4444 0%, #3b82f6 50%, #8b5cf6 100%)",
                "linear-gradient(90deg, #8b5cf6 0%, #ef4444 50%, #3b82f6 100%)",
                "linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #ef4444 100%)"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 right-0 h-1"
          />

          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between h-20">
              
              {/* LOGO GREGA ULTRA-VISIBLE */}
              <Link to="/" className="flex items-center group relative z-10">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  {/* Background pour contraste */}
                  <motion.div
                    animate={{ 
                      boxShadow: [
                        "0 0 20px rgba(59, 130, 246, 0.2)",
                        "0 0 30px rgba(139, 92, 246, 0.3)",
                        "0 0 25px rgba(239, 68, 68, 0.2)",
                        "0 0 20px rgba(59, 130, 246, 0.2)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -inset-2 bg-gray-900/5 rounded-xl"
                  />
                  
                  {/* Texte GREGA ULTRA-VISIBLE */}
                  <motion.span
                    className="relative text-3xl font-black tracking-wider bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent"
                    whileHover={{ scale: 1.02 }}
                  >
                    GREGA
                  </motion.span>
                  
                  {/* Effet de brillance visible */}
                  <motion.div
                    animate={{ x: [-50, 150] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12 opacity-0 group-hover:opacity-100"
                  />
                </motion.div>
              </Link>

              {/* NAVIGATION DESKTOP ULTRA-VISIBLE */}
              <div className="hidden md:flex items-center space-x-1">
                {links.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <Link
                      to={link.path}
                      className="group relative px-5 py-3 mx-1 rounded-lg"
                    >
                      {/* Background hover VISIBLE */}
                      <motion.div
                        whileHover={{ scale: 1.02, opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg opacity-0 transition-all duration-300 border border-blue-100"
                      />
                      
                      {/* Texte ULTRA-VISIBLE */}
                      <motion.span
                        className="relative font-semibold text-base text-gray-900 group-hover:text-blue-600 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                      >
                        {link.name}
                      </motion.span>
                      
                      {/* Ligne indicatrice VISIBLE */}
                      <motion.div
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* BOUTON HAMBURGER ULTRA-VISIBLE */}
              <motion.button 
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden relative z-50 group menu-toggle p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                aria-label="Menu"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Effet de focus visible */}
                <motion.div
                  animate={{ 
                    boxShadow: menuOpen 
                      ? ["0 0 0 3px rgba(59, 130, 246, 0.3)"]
                      : ["0 0 0 0px rgba(59, 130, 246, 0)"]
                  }}
                  className="absolute inset-0 rounded-lg"
                />
                
                <div className="relative space-y-1.5 w-6 h-6 flex flex-col justify-center">
                  <motion.span 
                    animate={menuOpen 
                      ? { rotate: 45, y: 6, backgroundColor: '#1f2937' } 
                      : { rotate: 0, y: 0, backgroundColor: '#1f2937' }
                    }
                    transition={{ duration: 0.3 }}
                    className="block w-6 h-0.5 origin-center rounded-full"
                  />
                  <motion.span 
                    animate={menuOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="block w-6 h-0.5 bg-gray-900 rounded-full"
                  />
                  <motion.span 
                    animate={menuOpen 
                      ? { rotate: -45, y: -6, backgroundColor: '#1f2937' } 
                      : { rotate: 0, y: 0, backgroundColor: '#1f2937' }
                    }
                    transition={{ duration: 0.3 }}
                    className="block w-6 h-0.5 origin-center rounded-full"
                  />
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* MENU MOBILE ULTRA-VISIBLE */}
      <AnimatePresence>
        {menuOpen && isMobile && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setMenuOpen(false)}
            />
            
            {/* Menu mobile ULTRA-VISIBLE */}
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-80 h-full bg-white shadow-2xl z-40 overflow-hidden mobile-menu"
            >
              {/* Header menu VISIBLE */}
              <div className="relative p-6 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-purple-50">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  className="text-center"
                >
                  <span className="text-2xl font-black bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent tracking-wider">
                    GREGA
                  </span>
                  <p className="text-gray-600 text-sm mt-1">Menu Navigation</p>
                </motion.div>
              </div>

              {/* Navigation mobile VISIBLE */}
              <div className="p-6">
                <nav className="space-y-2">
                  {links.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: index * 0.1, 
                        duration: 0.4,
                        type: "spring",
                        stiffness: 200
                      }}
                    >
                      <Link
                        to={link.path}
                        className="group relative block py-4 px-6 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 border border-transparent hover:border-blue-100"
                        onClick={() => setMenuOpen(false)}
                      >
                        <motion.span 
                          className="relative text-gray-900 text-lg font-semibold group-hover:text-blue-600 transition-colors duration-300"
                          whileHover={{ x: 4 }}
                        >
                          {link.name}
                        </motion.span>
                        
                        {/* Ligne indicatrice */}
                        <motion.div
                          initial={{ width: 0 }}
                          whileHover={{ width: "60%" }}
                          transition={{ duration: 0.3 }}
                          className="absolute bottom-2 left-6 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        />
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Call to action dans le menu */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100"
                >
                  <p className="text-sm text-gray-600 mb-3">Besoin d'aide ?</p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Nous contacter
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar 