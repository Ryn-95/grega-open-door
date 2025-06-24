import { motion, AnimatePresence } from 'framer-motion'
import { FaPhone, FaArrowRight, FaCalendarAlt, FaTimes } from 'react-icons/fa'
import logoGrega from '/images/logo_grega.jpeg'
import { useState } from 'react'

const Hero = () => {
  const [showCalendly, setShowCalendly] = useState(false);

  // Composant Calendly intégré
  const CalendlyWidget = () => (
    <div className="w-full h-[600px]">
      <iframe
        src="https://calendly.com/contact-gregaopendoor/consultation"
        width="100%"
        height="100%"
        frameBorder="0"
        title="Consultation avec GREGA"
      />
      <p className="text-center text-gray-600 mt-4 font-light">
        Si le calendrier ne s'affiche pas, 
        <a 
          href="https://calendly.com/contact-gregaopendoor/consultation" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-black underline hover:no-underline ml-1"
        >
          cliquez ici pour ouvrir dans un nouvel onglet
        </a>
      </p>
    </div>
  );

  // Composant Modal réutilisable
  const Modal = ({ isOpen, onClose, title, children }: any) => (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onClose();
          }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-light text-black">{title}</h2>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onClose();
                  }}
                  className="text-gray-400 hover:text-black transition-colors"
                >
                  <FaTimes className="w-6 h-6" />
                </button>
              </div>
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="h-screen bg-white overflow-hidden flex items-center justify-center relative">
      
      {/* Grille subtile pour la profondeur */}
      <div 
        className="absolute inset-0 opacity-[0.008] pointer-events-none"
        style={{ 
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Hero Content Ultra-Optimisé */}
      <div className="max-w-5xl mx-auto text-center px-6 relative z-10">
        
        {/* Logo + Nom */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.6, 0.01, 0.05, 0.95] }}
          className="mb-6"
        >
          <motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="inline-block"
          >
            <img 
              src={logoGrega} 
              alt="Grega" 
              className="w-24 h-24 rounded-full object-cover mx-auto shadow-lg border border-gray-100"
            />
          </motion.div>
        </motion.div>
        
        {/* Message Principal Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.6, 0.01, 0.05, 0.95] }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-gray-900 mb-3 leading-tight tracking-tight">
            Trouvez votre logement
            <br />
            <span className="font-medium bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              partout en France
            </span>
          </h2>
          
          <motion.p 
            className="text-base text-gray-600 max-w-2xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Agence de Broker Real Estate.
            <br />
            <span className="text-gray-500">
              Nous trouvons, préparons votre dossier et négocions pour vous.
            </span>
          </motion.p>
        </motion.div>

        {/* Process Compact */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.6, 0.01, 0.05, 0.95] }}
          className="mb-8"
        >
          <div className="flex justify-center items-center gap-6 md:gap-10 text-gray-400">
            <motion.div 
              className="text-center group"
              whileHover={{ y: -1 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-medium shadow-sm group-hover:shadow-md transition-shadow duration-200"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                1
              </motion.div>
              <p className="text-sm font-medium text-gray-700">Recherche</p>
            </motion.div>
            
            <motion.div 
              className="w-8 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            />
            
            <motion.div 
              className="text-center group"
              whileHover={{ y: -1 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-medium shadow-sm group-hover:shadow-md transition-shadow duration-200"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                2
              </motion.div>
              <p className="text-sm font-medium text-gray-700">Dossier</p>
            </motion.div>
            
            <motion.div 
              className="w-8 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.7, duration: 0.4 }}
            />
            
            <motion.div 
              className="text-center group"
              whileHover={{ y: -1 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-medium shadow-sm group-hover:shadow-md transition-shadow duration-200"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                3
              </motion.div>
              <p className="text-sm font-medium text-gray-700">Signature</p>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }}
          className="space-y-5"
        >
          {/* Boutons Principaux Optimisés */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="tel:0953376141"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-gray-900 text-white px-6 py-2.5 rounded-full text-base font-medium hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              <FaPhone className="w-4 h-4" />
              <span>Nous contacter</span>
              <motion.div
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaArrowRight className="w-4 h-4" />
              </motion.div>
            </motion.a>

            <motion.button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (!showCalendly) {
                  setShowCalendly(true);
                }
              }}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="group border border-gray-900 text-gray-900 px-6 py-2.5 rounded-full text-base font-medium hover:bg-gray-900 hover:text-white transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              <FaCalendarAlt className="w-4 h-4" />
              <span>Consultation Gratuite</span>
            </motion.button>
          </div>
          
          {/* Numéro Compact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <p className="text-3xl font-extralight text-gray-900 mb-1 tracking-wider">
              09 53 37 61 41
            </p>
            <p className="text-gray-500 text-sm font-medium tracking-wide">
              GRATUIT • IMMÉDIAT • SANS ENGAGEMENT
            </p>
          </motion.div>
          
          {/* Message d'urgence compact */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.3 }}
            className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-4 py-2 hover:bg-orange-75 transition-colors duration-200"
          >
            <motion.div 
              className="w-1.5 h-1.5 bg-orange-400 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="text-orange-700 text-sm font-medium">
              Marché tendu • Agissez rapidement
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Modal Calendly */}
      <Modal
        isOpen={showCalendly}
        onClose={() => setShowCalendly(false)}
        title="Consultation Gratuite"
      >
        <CalendlyWidget />
      </Modal>
    </div>
  );
};

export default Hero; 