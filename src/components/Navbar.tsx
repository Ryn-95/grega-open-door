import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { name: "Accueil", path: "/" },
    { name: "À propos", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Galerie", path: "/gallery" },
    { name: "Nos Bureaux", path: "/offices" },
    { name: "Contact", path: "/contact" }
  ]

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

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <span className="text-white text-xl font-bold tracking-wider">GREGA OPEN DOOR</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="nav-link"
              >
                {link.name}
              </Link>
            ))}
            <div className="relative group">
              <button className="nav-link">
                FR
              </button>
            </div>
          </div>

          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white"
          >
            <div className="space-y-2">
              <span className="block w-8 h-0.5 bg-white"></span>
              <span className="block w-8 h-0.5 bg-white"></span>
              <span className="block w-8 h-0.5 bg-white"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/90 backdrop-blur-sm overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block py-2 nav-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button className="block py-2 nav-link text-left">
                FR
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar 