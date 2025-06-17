import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaBuilding, FaInfoCircle, FaCog, FaMapMarkerAlt, FaEnvelope, FaArrowRight, FaClipboardCheck, FaInstagram, FaLinkedin, FaKey } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Détection du défilement
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Bloquer le défilement quand le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Fermer le menu lors des changements de route
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  
  // Suivi de la position de la souris pour effets interactifs
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Liste des liens du menu
  const menuItems = [
    { path: '/', label: 'Accueil', icon: <FaHome />, description: 'Retour à l\'accueil' },
    { path: '/about', label: 'À Propos', icon: <FaInfoCircle />, description: 'Notre histoire' },
    { path: '/services', label: 'Services', icon: <FaCog />, description: 'Nos prestations' },
    { path: '/proprietaires', label: 'Propriétaires', icon: <FaKey />, description: 'Services pour propriétaires' },
    { path: '/contact', label: 'Contact', icon: <FaEnvelope />, description: 'Contactez-nous' }
  ];

  const menuVariants = {
    initial: {
      opacity: 0,
      scale: 0.95,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const itemVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const footerVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <>
      {/* Barre de navigation ultra-moderne */}
      <header 
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: scrolled ? "rgba(0, 0, 0, 0.85)" : "rgba(0, 0, 0, 0)",
          backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
          boxShadow: scrolled ? "0 10px 40px -10px rgba(0, 0, 0, 0.3)" : "none",
          height: scrolled ? "70px" : "90px",
          borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid rgba(255, 255, 255, 0)",
          transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)"
        }}
      >
        <div className="container mx-auto px-6 relative">
          <div className="flex items-center justify-between h-full">
            {/* Logo ultra-moderne */}
            <Link 
              to="/" 
              className="relative z-50 py-6 group"
            >
              <div className="overflow-hidden relative">
                <span 
                  className="text-2xl font-extralight tracking-[0.5em] text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 inline-block"
                  style={{
                    transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                    letterSpacing: scrolled ? "0.45em" : "0.5em",
                    transform: `scale(${scrolled ? 0.95 : 1})`
                  }}
                >
                  GREGA
                </span>
                <div 
                  className="h-[1px] w-full bg-gradient-to-r from-white/40 to-transparent origin-left"
                  style={{
                    transform: 'scaleX(0)',
                    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scaleX(1)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scaleX(0)'}
                />
              </div>
            </Link>
            
            {/* Bouton burger ultra-moderne avec animation avancée */}
            <div className="relative">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="relative z-50 w-14 h-14 flex flex-col justify-center items-center focus:outline-none group cursor-pointer overflow-hidden"
                aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              >
                {/* Fond lumineux avec transition élégante */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  {/* Fond de base */}
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-lg transition-all duration-500"></div>
                  
                  {/* Effet de lumière au survol */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)`,
                    }}
                  ></div>
                  
                  {/* Bordure fine et lumineuse */}
                  <div className="absolute inset-0 rounded-full border border-white/10 group-hover:border-white/20 transition-all duration-300"></div>
                </div>
                
                {/* Lignes du burger avec animation sophistiquée */}
                <div className="relative flex flex-col items-center justify-center w-6 h-5">
                  {/* Ligne supérieure */}
                  <span 
                    className={`absolute top-0 block w-6 h-[1px] bg-white/90 transition-all duration-500 ease-out
                      ${isOpen ? 'rotate-45 top-[10px]' : 'rotate-0'}
                    `}
                  ></span>
                  
                  {/* Ligne du milieu - gauche */}
                  <span 
                    className={`absolute block h-[1px] bg-white/90 transition-all duration-500 ease-out
                      ${isOpen 
                        ? 'w-0 opacity-0 left-3' 
                        : 'w-6 opacity-100 left-0 top-[10px]'}
                    `}
                  ></span>
                  
                  {/* Ligne inférieure */}
                  <span 
                    className={`absolute block w-6 h-[1px] bg-white/90 transition-all duration-500 ease-out
                      ${isOpen 
                        ? '-rotate-45 top-[10px]' 
                        : 'rotate-0 top-[20px]'}
                    `}
                  ></span>
                </div>
                
                {/* Texte d'indication avec animation raffinée */}
                <div className="absolute -bottom-6 text-[10px] uppercase tracking-wider text-white/40 transition-all duration-500 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                  {isOpen ? 'Fermer' : 'Menu'}
                </div>
              </button>
              
              {/* Indicateur d'état en arrière-plan */}
              <div 
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-700 
                  ${isOpen ? 'bg-white/10 w-5 h-5 backdrop-blur-md' : 'bg-white/0 w-0 h-0'}
                `}
              ></div>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div 
            className="fixed inset-0 z-40"
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.95)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)'
            }}
          >
            <div className="min-h-screen flex flex-col">
              {/* Arrière-plan dynamique et immersif */}
              <motion.div 
                className="absolute inset-0 pointer-events-none overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {/* Texture subtile améliorée */}
                <div 
                  className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: '200px 200px'
                  }}
                ></div>
                
                {/* Effet de grille moderne */}
                <div 
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                  }}
                ></div>
                
                {/* Effet de lumière dynamique */}
                <div 
                  className="absolute w-[800px] h-[800px] rounded-full blur-[80px] opacity-[0.07] pointer-events-none transition-all duration-1000"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(120, 119, 198, 0.3), rgba(0, 0, 0, 0))',
                    left: `${mousePosition.x - 400}px`,
                    top: `${mousePosition.y - 400}px`,
                    transform: 'translate3d(0, 0, 0)'
                  }}
                ></div>
              </motion.div>
              
              <div className="container mx-auto px-6 pt-32 pb-16 flex-grow flex flex-col relative">
                <div className="max-w-7xl mx-auto w-full">
                  {/* En-tête du menu avec animation */}
                  <motion.div 
                    className="mb-20"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <motion.div 
                        className="w-8 h-[1px] bg-gradient-to-r from-white/40 to-transparent"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                      ></motion.div>
                      <motion.div 
                        className="text-[11px] uppercase tracking-[0.3em] text-white/60 font-light"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                      >
                        Navigation
                      </motion.div>
                    </div>
                  </motion.div>
                  
                  {/* Grille des liens avec animations */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {menuItems.map((item, index) => (
                      <motion.div
                        key={item.path}
                        variants={itemVariants}
                        custom={index}
                      >
                        <Link
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          onMouseEnter={() => setHoveredItem(index)}
                          onMouseLeave={() => setHoveredItem(null)}
                          className="group relative px-8 py-8 rounded-lg border border-white/[0.03] hover:border-white/[0.08] transition-all duration-500 overflow-hidden backdrop-blur-sm block"
                          style={{
                            background: hoveredItem === index ? 'linear-gradient(110deg, rgba(255,255,255,0.02), rgba(255,255,255,0)' : 'transparent',
                            transform: hoveredItem === index ? 'scale(1.02)' : 'scale(1)',
                            transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                          }}
                        >
                          {/* Effet de brillance au survol */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] to-transparent"></div>
                          </div>
                          
                          {/* Ligne brillante qui traverse au survol */}
                          <div 
                            className="absolute h-[1px] bg-gradient-to-r from-white/0 via-white/20 to-white/0 w-full top-0 left-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000"
                          ></div>
                          
                          <div className="relative flex items-start z-10">
                            <div 
                              className="mr-6 text-white/40 text-2xl transform transition-all duration-500 group-hover:text-white/90 group-hover:scale-110"
                              style={{
                                filter: hoveredItem === index ? 'drop-shadow(0 0 10px rgba(255,255,255,0.2))' : 'none'
                              }}
                            >
                              {item.icon}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <div>
                                  <h3 
                                    className="text-xl font-extralight tracking-wide text-white/80 group-hover:text-white transition-colors duration-500"
                                    style={{
                                      letterSpacing: hoveredItem === index ? '0.05em' : 'normal'
                                    }}
                                  >
                                    {item.label}
                                  </h3>
                                  <div className="h-[1px] w-0 group-hover:w-full bg-gradient-to-r from-white/40 to-transparent transition-all duration-700 mt-2"></div>
                                </div>
                                
                                <div 
                                  className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-500 overflow-hidden"
                                  style={{
                                    transform: hoveredItem === index ? 'translateX(0) scale(1)' : 'translateX(-10px) scale(0.8)',
                                    opacity: hoveredItem === index ? 1 : 0
                                  }}
                                >
                                  <FaArrowRight className="text-white/60 text-sm transform group-hover:translate-x-1 transition-transform duration-300" />
                                </div>
                              </div>
                              
                              <p 
                                className="text-sm mt-4 text-white/40 group-hover:text-white/70 transition-all duration-500 font-extralight"
                                style={{
                                  maxWidth: '90%',
                                  transform: hoveredItem === index ? 'translateY(0)' : 'translateY(5px)',
                                  opacity: hoveredItem === index ? 1 : 0.6
                                }}
                              >
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Pied de page avec animation */}
                  <motion.div 
                    className="mt-auto pt-24"
                    variants={footerVariants}
                    initial="initial"
                    animate="animate"
                  >
                    <div className="w-full h-[1px] bg-gradient-to-r from-white/10 to-transparent mb-12"></div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">
                      <div>
                        <h4 className="text-white/40 uppercase text-xs tracking-wider mb-6 flex items-center">
                          <span className="w-5 h-[1px] bg-white/20 mr-3"></span>
                          Contact
                        </h4>
                        <p className="text-white/60 hover:text-white/90 transition-colors duration-300 tracking-wide font-extralight">
                          info@grega-open-door.fr
                        </p>
                        <p className="text-white/60 hover:text-white/90 transition-colors duration-300 tracking-wide font-extralight mt-2">
                          +33 1 23 45 67 89
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-white/40 uppercase text-xs tracking-wider mb-6 flex items-center">
                          <span className="w-5 h-[1px] bg-white/20 mr-3"></span>
                          Adresse
                        </h4>
                        <p className="text-white/60 tracking-wide font-extralight">
                          123 Avenue des Champs-Élysées<br />75008 Paris, France
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-white/40 uppercase text-xs tracking-wider mb-6 flex items-center">
                          <span className="w-5 h-[1px] bg-white/20 mr-3"></span>
                          Réseaux
                        </h4>
                        <div className="flex space-x-6">
                          <a 
                            href="#" 
                            className="text-white/50 hover:text-white transition-colors duration-300 flex items-center group"
                          >
                            <FaInstagram className="mr-2 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
                            <span className="font-extralight tracking-wide">Instagram</span>
                          </a>
                          <a 
                            href="#" 
                            className="text-white/50 hover:text-white transition-colors duration-300 flex items-center group"
                          >
                            <FaLinkedin className="mr-2 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
                            <span className="font-extralight tracking-wide">LinkedIn</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    {/* Signature moderne */}
                    <div className="mt-12 flex justify-between items-center text-white/20">
                      <div className="text-[10px] uppercase tracking-[0.4em] font-extralight">
                        © GREGA {new Date().getFullYear()}
                      </div>
                      <div className="text-[10px] uppercase tracking-[0.2em] font-extralight">
                        — Tous droits réservés
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;

// CSS à ajouter dans votre fichier global CSS si ce n'est pas déjà fait
/*
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-fadeIn {
  animation: fadeIn 0.5s ease-out forwards;
}
*/ 