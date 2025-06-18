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
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-lg shadow-gray-900/5' 
            : 'bg-gradient-to-b from-black/20 to-transparent backdrop-blur-sm'
        }`}
      >
        {/* Barre lumineuse animée */}
        <motion.div
          animate={{ 
            background: [
              "linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.3) 50%, transparent 100%)",
              "linear-gradient(90deg, transparent 0%, rgba(34, 197, 94, 0.3) 50%, transparent 100%)",
              "linear-gradient(90deg, transparent 0%, rgba(168, 85, 247, 0.3) 50%, transparent 100%)",
              "linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.3) 50%, transparent 100%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-full h-0.5"
        />
        
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo révolutionnaire */}
            <Link to="/" className="flex items-center group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                {/* Halo énergétique autour du logo */}
                <motion.div
                  animate={{ 
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-green-400/20 rounded-lg blur-lg"
                />
                
                <motion.span 
                  className={`relative text-2xl font-bold tracking-wider transition-all duration-300 ${
                    scrolled 
                      ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent' 
                      : 'text-white drop-shadow-lg'
                  }`}
                  whileHover={{ scale: 1.02 }}
                >
                  GREGA
                </motion.span>
                
                {/* Particules autour du logo */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      y: [0, -10, 0],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      delay: i * 0.5 
                    }}
                    className="absolute w-1 h-1 bg-blue-400 rounded-full"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${10 + Math.sin(i) * 20}%`
                    }}
                  />
                ))}
              </motion.div>
            </Link>

            {/* Navigation desktop ultra-moderne */}
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
                    className="group relative px-4 py-2 mx-1"
                  >
                    {/* Background hover avec effet holographique */}
                    <motion.div
                      whileHover={{ scale: 1, opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10 rounded-xl opacity-0 transition-opacity duration-300 backdrop-blur-sm"
                    />
                    
                    {/* Texte avec effet lumineux */}
                    <motion.span
                      className={`relative font-medium text-sm tracking-wide transition-all duration-300 ${
                        scrolled 
                          ? 'text-gray-700 group-hover:text-gray-900' 
                          : 'text-white/90 group-hover:text-white'
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {link.name}
                    </motion.span>
                    
                    {/* Ligne animée sous le texte */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full"
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Bouton menu hamburger révolutionnaire */}
            <motion.button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden relative z-50 group"
              aria-label="Menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Halo énergétique autour du bouton */}
              <motion.div
                animate={{ 
                  opacity: menuOpen ? [0.5, 1, 0.5] : [0.2, 0.4, 0.2],
                  scale: menuOpen ? [1, 1.3, 1] : [1, 1.1, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -inset-3 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-lg blur-md"
              />
              
              <div className="relative space-y-2 p-2">
                <motion.span 
                  animate={menuOpen ? { rotate: 45, y: 8, backgroundColor: scrolled ? '#1f2937' : '#ffffff' } : { rotate: 0, y: 0, backgroundColor: scrolled ? '#1f2937' : '#ffffff' }}
                  transition={{ duration: 0.3 }}
                  className="block w-6 h-0.5 origin-center rounded-full"
                />
                <motion.span 
                  animate={menuOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`block w-6 h-0.5 rounded-full ${scrolled ? 'bg-gray-900' : 'bg-white'}`}
                />
                <motion.span 
                  animate={menuOpen ? { rotate: -45, y: -8, backgroundColor: scrolled ? '#1f2937' : '#ffffff' } : { rotate: 0, y: 0, backgroundColor: scrolled ? '#1f2937' : '#ffffff' }}
                  transition={{ duration: 0.3 }}
                  className="block w-6 h-0.5 origin-center rounded-full"
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Menu mobile révolutionnaire */}
      <AnimatePresence>
        {menuOpen && isMobile && (
          <>
            {/* Overlay holographique */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-gradient-to-br from-black/40 via-blue-900/20 to-purple-900/20 backdrop-blur-lg z-40"
              onClick={() => setMenuOpen(false)}
            />
            
            {/* Menu mobile ultra-futuriste */}
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-80 h-full bg-gradient-to-br from-white/95 via-blue-50/90 to-purple-50/90 backdrop-blur-xl border-l border-gradient-to-b from-blue-200/50 to-purple-200/50 z-40 overflow-hidden"
            >
              {/* Particules animées en arrière-plan */}
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    y: [0, -window.innerHeight],
                    opacity: [0, 1, 0]
                  }}
                  transition={{ 
                    duration: 3 + i * 0.5, 
                    repeat: Infinity, 
                    delay: i * 0.2 
                  }}
                  className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`
                  }}
                />
              ))}

              {/* Header du menu avec effet holographique */}
              <div className="relative p-6 border-b border-gradient-to-r from-blue-200/30 to-purple-200/30">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="relative"
                >
                  <motion.div
                    animate={{ 
                      opacity: [0.3, 0.8, 0.3],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-lg blur-lg"
                  />
                  <span className="relative text-gray-900 text-xl font-bold tracking-wider bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    GREGA
                  </span>
                </motion.div>
              </div>

              {/* Navigation mobile avec effets révolutionnaires */}
              <div className="px-6 py-8">
                <nav className="space-y-2">
                  {links.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 50, scale: 0.8 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{ 
                        delay: index * 0.1, 
                        duration: 0.4,
                        type: "spring",
                        stiffness: 200
                      }}
                    >
                      <Link
                        to={link.path}
                        className="group relative block py-4 px-6 rounded-xl overflow-hidden"
                        onClick={() => setMenuOpen(false)}
                      >
                        {/* Background hover holographique */}
                        <motion.div
                          whileHover={{ scale: 1.02, opacity: 1 }}
                          className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10 opacity-0 transition-all duration-300 backdrop-blur-sm"
                        />
                        
                        {/* Particules sur hover */}
                        <motion.div
                          whileHover={{ opacity: 1 }}
                          className="absolute inset-0 opacity-0"
                        >
                          {[...Array(6)].map((_, i) => (
                            <motion.div
                              key={i}
                              animate={{ 
                                x: [0, Math.random() * 50 - 25],
                                y: [0, Math.random() * 30 - 15],
                                opacity: [0, 1, 0]
                              }}
                              transition={{ 
                                duration: 1.5, 
                                repeat: Infinity, 
                                delay: i * 0.2 
                              }}
                              className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                              style={{
                                left: `${20 + i * 12}%`,
                                top: '50%'
                              }}
                            />
                          ))}
                        </motion.div>
                        
                        <motion.span 
                          className="relative text-gray-700 text-lg font-medium group-hover:text-gray-900 transition-colors duration-300"
                          whileHover={{ x: 8 }}
                        >
                          {link.name}
                        </motion.span>
                        
                        {/* Ligne animée */}
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
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar 