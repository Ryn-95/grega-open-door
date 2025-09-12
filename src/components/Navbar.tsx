import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { navigateToPage } from '../utils/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const location = useLocation();

  // Liste des pages réorganisée par importance
  const pages = [
    { path: '/', label: 'ACCUEIL' },
    { path: '/about', label: 'À PROPOS' },
    { path: '/biens-a-louer', label: 'NOS BIENS' },
    { path: '/prix-location-paris', label: '💰 PRIX 2025', highlight: true },
    { path: '/proprietaires', label: 'PROPRIÉTAIRES' },
    { path: '/blog', label: 'BLOG' },
    { path: '/villes', label: 'NOS BUREAUX' },
    { path: '/contact', label: 'CONTACT' },
  ];

  // Fonction pour gérer la navigation
  const handleNavigation = (path: string) => {
    setIsOpen(false);
    navigateToPage(path);
  };

  // Effet de scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Suivi de la souris pour les effets subtils
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Fermer le menu quand on change de page
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      {/* Navbar Ultra-Perfectionnée */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        {/* Fond ultra-sophistiqué avec effet de verre */}
        <motion.div
          animate={{
            backgroundColor: scrolled 
              ? 'rgba(255, 255, 255, 0.95)' 
              : 'rgba(255, 255, 255, 0.90)',
            backdropFilter: scrolled ? 'blur(25px)' : 'blur(15px)',
            borderBottom: scrolled 
              ? '1px solid rgba(0, 0, 0, 0.08)' 
              : '1px solid rgba(0, 0, 0, 0.04)',
            boxShadow: scrolled
              ? '0 8px 32px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.08)'
              : '0 4px 16px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04)'
          }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        />

        {/* Effet de brillance subtile qui suit la souris */}
        <motion.div
          animate={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 0, 0, 0.02), transparent 40%)`,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute inset-0 pointer-events-none"
        />

        <div className="container mx-auto px-8 flex justify-between items-center relative z-10">
          {/* Logo Ultra-Raffiné */}
          <div 
            onClick={() => handleNavigation('/')} 
            className="group relative cursor-pointer"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              <motion.div
                className="text-xl font-light tracking-[0.4em] text-gray-900 relative"
                whileHover={{
                  textShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
                }}
                transition={{ duration: 0.3 }}
              >
                <span className="relative inline-block">
                  <motion.span
                    whileHover={{ y: -1 }}
                    transition={{ duration: 0.2 }}
                    className="inline-block"
                  >
                    G
                  </motion.span>
                  <motion.span
                    className="text-gray-700 font-medium inline-block mx-1"
                    whileHover={{ 
                      y: -2,
                      color: "#374151"
                    }}
                    transition={{ duration: 0.2, delay: 0.05 }}
                  >
                    R
                  </motion.span>
                  <motion.span
                    whileHover={{ y: -1 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                    className="inline-block"
                  >
                    E
                  </motion.span>
                  <motion.span
                    whileHover={{ y: -1 }}
                    transition={{ duration: 0.2, delay: 0.15 }}
                    className="inline-block"
                  >
                    G
                  </motion.span>
                  <motion.span
                    whileHover={{ y: -1 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                    className="inline-block"
                  >
                    A
                  </motion.span>
                  <motion.span
                    className="text-gray-600 font-light inline-block mx-2"
                    whileHover={{ 
                      y: -1,
                      color: "#374151"
                    }}
                    transition={{ duration: 0.2, delay: 0.25 }}
                  >
                    OPEN
                  </motion.span>
                  <motion.span
                    className="text-gray-700 font-medium inline-block"
                    whileHover={{ 
                      y: -1,
                      color: "#374151"
                    }}
                    transition={{ duration: 0.2, delay: 0.3 }}
                  >
                    DOOR
                  </motion.span>
                </span>

                {/* Ligne élégante sous le logo */}
                <motion.div
                  className="absolute -bottom-1 left-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                />

                {/* Points décoratifs subtils */}
                <motion.div
                  className="absolute -top-1 -left-1 w-0.5 h-0.5 bg-gray-400 rounded-full"
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-1 -right-1 w-0.5 h-0.5 bg-gray-400 rounded-full"
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                />
              </motion.div>
                  
              {/* Aura subtile au hover */}
              <motion.div
                className="absolute -inset-2 bg-gray-50 rounded-lg -z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>

          {/* Menu Burger Ultra-Sophistiqué */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-10 h-10 flex items-center justify-center group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Fond au hover */}
            <motion.div
              className="absolute inset-0 bg-gray-100 rounded-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            />

            <div className="relative z-10">
              {/* Lignes ultra-raffinées */}
              <motion.div
                className="w-5 h-px bg-gray-900 rounded-full"
                animate={{
                  rotate: isOpen ? 45 : 0,
                  y: isOpen ? 0 : -3,
                  scaleX: isOpen ? 1.1 : 1
                }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
              <motion.div
                className="w-3 h-px bg-gray-600 rounded-full mt-1.5"
                animate={{
                  opacity: isOpen ? 0 : 1,
                  x: isOpen ? 8 : 0,
                  scaleX: isOpen ? 0.5 : 1
                }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
              <motion.div
                className="w-5 h-px bg-gray-900 rounded-full mt-1.5"
                animate={{
                  rotate: isOpen ? -45 : 0,
                  y: isOpen ? -6 : 0,
                  scaleX: isOpen ? 1.1 : 1
                }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
            </div>

            {/* Indicateur d'état */}
            <motion.div
              className="absolute -bottom-1 left-1/2 w-1 h-1 bg-gray-400 rounded-full"
              animate={{
                scale: isOpen ? [1, 1.5, 0] : [0, 1.2, 1],
                opacity: isOpen ? [1, 1, 0] : [0, 1, 0.7]
              }}
              transition={{ duration: 0.5 }}
              style={{ x: '-50%' }}
            />
          </motion.button>
        </div>

        {/* Indicateur de scroll raffiné */}
        <motion.div
          className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: scrolled ? 1 : 0 }}
          transition={{ duration: 0.6 }}
        />
      </motion.nav>

      {/* Spacer dynamique */}
      <motion.div 
        animate={{ height: scrolled ? '64px' : '80px' }}
        transition={{ duration: 0.6 }}
      />

      {/* Menu Full-Screen Ultra-Sophistiqué */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40"
          >
            {/* Fond avec effet de verre sophistiqué */}
            <motion.div
              initial={{ 
                backdropFilter: 'blur(0px)',
                backgroundColor: 'rgba(255, 255, 255, 0)'
              }}
              animate={{ 
                backdropFilter: 'blur(30px)',
                backgroundColor: 'rgba(255, 255, 255, 0.95)'
              }}
              exit={{
                backdropFilter: 'blur(0px)',
                backgroundColor: 'rgba(255, 255, 255, 0)'
              }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            />

            {/* Grille subtile de fond */}
            <div 
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px'
              }}
            />
            
            {/* Navigation ultra-sophistiquée */}
            <div className="relative z-10 h-full flex items-center justify-center">
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: {
                    transition: { 
                      staggerChildren: 0.1,
                      delayChildren: 0.1
                    }
                  },
                  closed: {
                    transition: { 
                      staggerChildren: 0.05,
                      staggerDirection: -1
                    }
                  }
                }}
                className="text-center space-y-8"
              >
                {pages.map((page, i) => (
                  <motion.div
                    key={page.path}
                    variants={{
                      closed: { 
                        opacity: 0, 
                        y: 30,
                        filter: "blur(4px)"
                      },
                      open: { 
                        opacity: 1, 
                        y: 0,
                        filter: "blur(0px)"
                      }
                    }}
                    transition={{ 
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    className="relative"
                  >
                    <div
                      onClick={() => handleNavigation(page.path)}
                      className="group relative block cursor-pointer"
                    >
                      <motion.span
                        className={`text-2xl md:text-3xl font-light tracking-[0.15em] transition-all duration-500 relative ${
                          location.pathname === page.path
                            ? 'text-gray-900'
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                        whileHover={{ 
                          x: 20,
                          textShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        {page.label}
                        
                        {/* Effet de surlignage */}
                        <motion.div
                          className="absolute inset-0 bg-gray-100 -z-10 rounded-lg"
                          initial={{ opacity: 0, scaleX: 0 }}
                          whileHover={{ opacity: 1, scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.span>

                      {/* Ligne décorative sophistiquée */}
                      <motion.div
                        className="absolute left-0 top-1/2 h-px bg-gradient-to-r from-gray-400 to-transparent"
                        initial={{ width: 0, x: -30, opacity: 0 }}
                        whileHover={{ width: '60px', x: -80, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                      />

                      {/* Indicateur de page active sophistiqué */}
                      {location.pathname === page.path && (
                        <>
                          <motion.div
                            layoutId="activeIndicator"
                            className="absolute -right-8 top-1/2 w-2 h-2 bg-gray-900 rounded-full"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            style={{ y: '-50%' }}
                          />
                          <motion.div
                            className="absolute -right-8 top-1/2 w-4 h-4 border border-gray-300 rounded-full"
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.5, 0.8, 0.5]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                            style={{ y: '-50%' }}
                          />
                        </>
                      )}

                      {/* Numéro de page */}
                      <motion.span
                        className="absolute -left-12 top-1/2 text-gray-300 text-sm font-mono"
                        initial={{ opacity: 0, x: -10 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ y: '-50%' }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </motion.span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Bouton de fermeture sophistiqué */}
            <motion.button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 w-10 h-10 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-all duration-400 group"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0, rotate: 90 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <span className="text-lg font-light">×</span>
              
              {/* Effet au hover */}
              <motion.div
                className="absolute inset-0 bg-gray-200 rounded-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            {/* Signature ultra-raffinée */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
            >
              <div className="text-gray-400 text-xs font-light tracking-[0.3em] mb-2">
                GREGA OPEN DOOR
              </div>
              <motion.div
                className="h-px w-16 bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto"
                animate={{ scaleX: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 