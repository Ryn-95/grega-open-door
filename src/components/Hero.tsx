import { motion } from 'framer-motion'
import { FaPhone, FaArrowRight } from 'react-icons/fa'
import logoGrega from '/images/logo_grega.jpeg'

const Hero = () => {
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
      <div className="max-w-5xl mx-auto text-center px-6 relative z-10 py-20">
        
        {/* Logo + Nom */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.6, 0.01, 0.05, 0.95] }}
          className="mb-10"
        >
          <motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="inline-block mb-4"
          >
            <img 
              src={logoGrega} 
              alt="Grega" 
              className="w-16 h-16 rounded-xl object-cover mx-auto shadow-lg border border-gray-100"
            />
          </motion.div>
          <h1 className="text-2xl font-semibold text-gray-900 tracking-wider">
            GREGA
          </h1>
        </motion.div>
        
        {/* Message Principal Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.6, 0.01, 0.05, 0.95] }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-gray-900 mb-4 leading-tight tracking-tight">
            Trouvez votre logement
            <br />
            <span className="font-medium bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              partout en France
            </span>
          </h2>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Agence de chasse locative premium.
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
          className="mb-12"
        >
          <div className="flex justify-center items-center gap-8 md:gap-12 text-gray-400">
            <motion.div 
              className="text-center group"
              whileHover={{ y: -1 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xs font-medium shadow-sm group-hover:shadow-md transition-shadow duration-200"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                1
              </motion.div>
              <p className="text-xs font-medium text-gray-700">Recherche</p>
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
                className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xs font-medium shadow-sm group-hover:shadow-md transition-shadow duration-200"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                2
              </motion.div>
              <p className="text-xs font-medium text-gray-700">Dossier</p>
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
                className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xs font-medium shadow-sm group-hover:shadow-md transition-shadow duration-200"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                3
              </motion.div>
              <p className="text-xs font-medium text-gray-700">Signature</p>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }}
          className="space-y-6"
        >
          {/* Bouton Principal Optimisé */}
          <motion.button
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="group bg-gray-900 text-white px-8 py-3 rounded-full text-base font-medium hover:bg-gray-800 transition-all duration-300 flex items-center gap-3 mx-auto shadow-lg hover:shadow-xl"
          >
            <FaPhone className="w-3 h-3" />
            <span>Nous contacter</span>
            <motion.div
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaArrowRight className="w-3 h-3" />
            </motion.div>
          </motion.button>
          
          {/* Numéro Compact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <p className="text-3xl font-extralight text-gray-900 mb-1 tracking-wider">
              01 XX XX XX XX
            </p>
            <p className="text-gray-500 text-xs font-medium tracking-wide">
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
            <span className="text-orange-700 text-xs font-medium">
              Marché tendu • Agissez rapidement
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero; 