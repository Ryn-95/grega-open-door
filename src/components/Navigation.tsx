import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaHome, FaBuilding, FaInfoCircle, FaCog, FaMapMarkerAlt, FaEnvelope, FaArrowRight } from 'react-icons/fa';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: '/', label: 'Accueil', icon: <FaHome />, description: 'Retour à l\'accueil' },
    { path: '/properties', label: 'Nos Biens', icon: <FaBuilding />, description: 'Découvrez nos propriétés' },
    { path: '/about', label: 'À Propos', icon: <FaInfoCircle />, description: 'Notre histoire' },
    { path: '/services', label: 'Services', icon: <FaCog />, description: 'Nos prestations' },
    { path: '/offices', label: 'Agences', icon: <FaMapMarkerAlt />, description: 'Nos emplacements' },
    { path: '/contact', label: 'Contact', icon: <FaEnvelope />, description: 'Contactez-nous' }
  ];

  const containerVariants = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.3
      }
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.3
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-lg"></div>
        <div className="container mx-auto px-6 relative">
          <div className="flex items-center justify-between h-24">
            <Link 
              to="/" 
              className="text-2xl font-thin tracking-[0.25em] hover:text-white/90 transition-all"
            >
              GREGA
            </Link>
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="w-14 h-14 rounded-full bg-white/5 backdrop-blur-lg flex items-center justify-center text-lg hover:bg-white/10 transition-all focus:outline-none border border-white/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <FaTimes /> : <FaBars />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40"
          >
            <motion.div 
              className="absolute inset-0 bg-black/95 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            />
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="relative h-full flex items-center justify-center px-6 py-24"
            >
              <div className="w-full max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {menuItems.map((item) => (
                    <motion.div
                      key={item.path}
                      variants={itemVariants}
                      className="group"
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`block p-6 rounded-2xl transition-all ${
                          location.pathname === item.path 
                            ? 'bg-white/10 backdrop-blur-lg' 
                            : 'bg-transparent hover:bg-white/5'
                        }`}
                      >
                        <div className="flex items-center gap-6">
                          <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-2xl transition-all ${
                            location.pathname === item.path
                              ? 'bg-white/20 text-white'
                              : 'bg-white/5 text-white/70 group-hover:bg-white/10 group-hover:text-white'
                          }`}>
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="text-2xl font-extralight tracking-wide">
                                {item.label}
                              </h3>
                              <FaArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                            </div>
                            <p className="text-sm text-white/50 group-hover:text-white/70 transition-colors mt-1">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation; 