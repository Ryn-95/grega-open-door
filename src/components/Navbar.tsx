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
      {/* NAVBAR RÉVOLUTIONNAIRE ULTRA-FUTURISTE */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.6, 0.01, 0.05, 0.95] }}
        className="fixed w-full z-50 top-0"
      >
        {/* Background révolutionnaire avec effets néon */}
        <div className={`relative transition-all duration-700 ${
          scrolled 
            ? 'bg-black/90 backdrop-blur-2xl border-b-2 border-cyan-400/30' 
            : 'bg-gradient-to-r from-black/80 via-gray-900/85 to-black/80 backdrop-blur-xl'
        }`}>
          
          {/* Effet néon supérieur ultra-révolutionnaire */}
          <motion.div
            animate={{ 
              boxShadow: [
                "0 0 20px rgba(6, 182, 212, 0.3), 0 0 40px rgba(168, 85, 247, 0.2)",
                "0 0 30px rgba(168, 85, 247, 0.4), 0 0 60px rgba(236, 72, 153, 0.3)",
                "0 0 25px rgba(236, 72, 153, 0.3), 0 0 50px rgba(6, 182, 212, 0.2)",
                "0 0 20px rgba(6, 182, 212, 0.3), 0 0 40px rgba(168, 85, 247, 0.2)"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
          />
          
          {/* Grid quantique arrière-plan */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ 
              backgroundImage: `
                linear-gradient(rgba(6, 182, 212, 0.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(6, 182, 212, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '30px 30px'
            }}
          />
          
          {/* Particules flottantes */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 3 + i * 0.3, 
                repeat: Infinity, 
                delay: i * 0.5 
              }}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${10 + i * 12}%`,
                top: `50%`
              }}
            />
          ))}

          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between h-20">
              
              {/* LOGO ULTRA-RÉVOLUTIONNAIRE */}
              <Link to="/" className="flex items-center group relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotateY: 10 }}
                  transition={{ duration: 0.4 }}
                  className="relative"
                >
                  {/* Halo énergétique ÉNORME */}
                  <motion.div
                    animate={{ 
                      boxShadow: [
                        "0 0 30px rgba(6, 182, 212, 0.4), 0 0 60px rgba(168, 85, 247, 0.3)",
                        "0 0 50px rgba(168, 85, 247, 0.6), 0 0 100px rgba(236, 72, 153, 0.4)",
                        "0 0 40px rgba(236, 72, 153, 0.5), 0 0 80px rgba(6, 182, 212, 0.3)",
                        "0 0 30px rgba(6, 182, 212, 0.4), 0 0 60px rgba(168, 85, 247, 0.3)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"
                  />
                  
                  {/* Texte GREGA révolutionnaire */}
                  <motion.div
                    className="relative bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-4xl font-black tracking-wider"
                    animate={{ 
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    style={{ backgroundSize: "200% 200%" }}
                  >
                    GREGA
                  </motion.div>
                  
                  {/* Effet de brillance */}
                  <motion.div
                    animate={{ x: [-100, 200] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 opacity-0 group-hover:opacity-100"
                  />
                  
                  {/* Orbites énergétiques */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                      transition={{ 
                        duration: 8 + i * 2, 
                        repeat: Infinity, 
                        ease: "linear" 
                      }}
                      className={`absolute inset-${i * 2} border border-cyan-400/20 rounded-full`}
                    />
                  ))}
                </motion.div>
              </Link>

              {/* NAVIGATION DESKTOP RÉVOLUTIONNAIRE */}
              <div className="hidden md:flex items-center space-x-2">
                {links.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <Link
                      to={link.path}
                      className="group relative px-6 py-3 mx-1"
                    >
                      {/* Background néon hover */}
                      <motion.div
                        whileHover={{ scale: 1.05, opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-xl opacity-0 transition-all duration-500 backdrop-blur-sm border border-cyan-400/20"
                      />
                      
                      {/* Texte néon */}
                      <motion.span
                        className="relative font-bold text-base tracking-wide text-white/90 group-hover:text-white transition-all duration-300"
                        whileHover={{ 
                          textShadow: "0 0 10px rgba(6, 182, 212, 0.8), 0 0 20px rgba(168, 85, 247, 0.6)" 
                        }}
                      >
                        {link.name}
                      </motion.span>
                      
                      {/* Ligne néon animée */}
                      <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        whileHover={{ width: "100%", opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full"
                        style={{
                          boxShadow: "0 0 10px rgba(6, 182, 212, 0.8)"
                        }}
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* BOUTON HAMBURGER RÉVOLUTIONNAIRE */}
              <motion.button 
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden relative z-50 group menu-toggle"
                aria-label="Menu"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {/* Halo énergétique autour du bouton */}
                <motion.div
                  animate={{ 
                    boxShadow: menuOpen 
                      ? ["0 0 20px rgba(6, 182, 212, 0.6)", "0 0 40px rgba(168, 85, 247, 0.8)", "0 0 20px rgba(6, 182, 212, 0.6)"]
                      : ["0 0 10px rgba(6, 182, 212, 0.3)", "0 0 20px rgba(168, 85, 247, 0.4)", "0 0 10px rgba(6, 182, 212, 0.3)"]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-xl blur-lg"
                />
                
                <div className="relative space-y-2 p-3">
                  <motion.span 
                    animate={menuOpen 
                      ? { rotate: 45, y: 8, backgroundColor: '#06b6d4' } 
                      : { rotate: 0, y: 0, backgroundColor: '#ffffff' }
                    }
                    transition={{ duration: 0.3 }}
                    className="block w-8 h-1 origin-center rounded-full"
                    style={{
                      boxShadow: menuOpen ? "0 0 10px rgba(6, 182, 212, 0.8)" : "none"
                    }}
                  />
                  <motion.span 
                    animate={menuOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="block w-8 h-1 bg-white rounded-full"
                  />
                  <motion.span 
                    animate={menuOpen 
                      ? { rotate: -45, y: -8, backgroundColor: '#06b6d4' } 
                      : { rotate: 0, y: 0, backgroundColor: '#ffffff' }
                    }
                    transition={{ duration: 0.3 }}
                    className="block w-8 h-1 origin-center rounded-full"
                    style={{
                      boxShadow: menuOpen ? "0 0 10px rgba(6, 182, 212, 0.8)" : "none"
                    }}
                  />
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* MENU MOBILE RÉVOLUTIONNAIRE */}
      <AnimatePresence>
        {menuOpen && isMobile && (
          <>
            {/* Overlay quantique */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-xl z-40"
              onClick={() => setMenuOpen(false)}
              style={{
                background: "radial-gradient(circle at center, rgba(6, 182, 212, 0.1), rgba(0, 0, 0, 0.9))"
              }}
            />
            
            {/* Menu révolutionnaire */}
            <motion.div
              initial={{ x: '100%', opacity: 0, scale: 0.8 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: '100%', opacity: 0, scale: 0.8 }}
              transition={{ type: 'spring', damping: 20, stiffness: 150 }}
              className="fixed top-0 right-0 w-full h-full bg-gradient-to-br from-black/95 via-gray-900/95 to-black/95 backdrop-blur-2xl z-40 overflow-hidden mobile-menu"
            >
              {/* Grid quantique background */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{ 
                  backgroundImage: `
                    linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: '50px 50px'
                }}
              />

              {/* Particules arrière-plan ultra-nombreuses */}
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    y: [0, -window.innerHeight * 1.5],
                    opacity: [0, 1, 0],
                    scale: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 4 + i * 0.3, 
                    repeat: Infinity, 
                    delay: i * 0.1 
                  }}
                  className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`
                  }}
                />
              ))}

              {/* Header ultra-révolutionnaire */}
              <div className="relative p-8 border-b border-cyan-400/30">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className="text-center"
                >
                  <motion.div
                    animate={{ 
                      boxShadow: [
                        "0 0 20px rgba(6, 182, 212, 0.6)",
                        "0 0 40px rgba(168, 85, 247, 0.8)",
                        "0 0 20px rgba(6, 182, 212, 0.6)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="inline-block"
                  >
                    <span className="text-6xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-wider">
                      GREGA
                    </span>
                  </motion.div>
                  <p className="text-cyan-400 text-sm mt-2 tracking-[0.3em] uppercase">Interface Quantique</p>
                </motion.div>
              </div>

              {/* Navigation mobile révolutionnaire */}
              <div className="px-8 py-12">
                <nav className="space-y-4">
                  {links.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 100, rotateY: -20 }}
                      animate={{ opacity: 1, x: 0, rotateY: 0 }}
                      transition={{ 
                        delay: index * 0.15, 
                        duration: 0.6,
                        type: "spring",
                        stiffness: 150
                      }}
                    >
                      <Link
                        to={link.path}
                        className="group relative block py-6 px-8 rounded-2xl overflow-hidden"
                        onClick={() => setMenuOpen(false)}
                      >
                        {/* Background hover révolutionnaire */}
                        <motion.div
                          whileHover={{ scale: 1.02, opacity: 1 }}
                          className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 transition-all duration-500 backdrop-blur-sm border border-cyan-400/20 rounded-2xl"
                        />
                        
                        {/* Particules sur hover */}
                        <motion.div
                          whileHover={{ opacity: 1 }}
                          className="absolute inset-0 opacity-0"
                        >
                          {[...Array(8)].map((_, i) => (
                            <motion.div
                              key={i}
                              animate={{ 
                                x: [0, Math.random() * 100 - 50],
                                y: [0, Math.random() * 60 - 30],
                                opacity: [0, 1, 0]
                              }}
                              transition={{ 
                                duration: 2, 
                                repeat: Infinity, 
                                delay: i * 0.2 
                              }}
                              className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                              style={{
                                left: `${20 + i * 10}%`,
                                top: '50%'
                              }}
                            />
                          ))}
                        </motion.div>
                        
                        <motion.span 
                          className="relative text-white text-2xl font-bold group-hover:text-cyan-400 transition-all duration-300"
                          whileHover={{ 
                            x: 12,
                            textShadow: "0 0 15px rgba(6, 182, 212, 0.8)" 
                          }}
                        >
                          {link.name}
                        </motion.span>
                        
                        {/* Ligne néon révolutionnaire */}
                        <motion.div
                          initial={{ width: 0, opacity: 0 }}
                          whileHover={{ width: "80%", opacity: 1 }}
                          transition={{ duration: 0.5 }}
                          className="absolute bottom-3 left-8 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                          style={{
                            boxShadow: "0 0 15px rgba(6, 182, 212, 0.8)"
                          }}
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