import { motion, AnimatePresence } from 'framer-motion'
import { FaHome, FaUsers, FaShieldAlt, FaRocket, FaCheck, FaArrowRight, FaStar, FaGraduationCap, FaUserFriends, FaBuilding, FaKey, FaHandshake, FaLightbulb, FaGlobe } from 'react-icons/fa'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'

const Services = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeService, setActiveService] = useState(0);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    {
      icon: <FaHome className="w-8 h-8" />,
      title: "Logement Classique",
      subtitle: "Service Premium",
      description: "Découvrez notre sélection exclusive de biens résidentiels premium avec accompagnement personnalisé",
      features: ["Sélection premium", "Visite privée", "Négociation", "Suivi complet"]
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Logement Social",
      subtitle: "Service Solidaire", 
      description: "Accédez à des logements à loyer modéré avec un accompagnement spécialisé et des solutions adaptées",
      features: ["Dossier optimisé", "Démarches simplifiées", "Suivi administratif", "Garanties incluses"]
    },
    {
      icon: <FaGraduationCap className="w-8 h-8" />,
      title: "Logement Étudiant",
      subtitle: "Service Jeunes",
      description: "Solutions dédiées aux étudiants avec des logements adaptés et des conditions privilégiées",
      features: ["Résidences étudiantes", "Colocation", "Garants acceptés", "Proximité campus"]
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Constitution Dossier",
      subtitle: "Service Expert",
      description: "Optimisation complète de votre dossier de candidature pour maximiser vos chances de succès",
      features: ["Analyse personnalisée", "Optimisation", "Vérification", "Présentation premium"]
    }
  ];

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      
      {/* Hero Section Ultra-Révolutionnaire */}
      <section className="min-h-screen bg-white relative overflow-hidden flex items-center justify-center">
        {/* Background holographique ultra-sophistiqué */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-50/10 via-transparent to-gray-100/10"></div>
          
          {/* Grille ultra-fine */}
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
          
          {/* Effet de lumière qui suit la souris */}
          <motion.div
            animate={{
              background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 0, 0, 0.04), transparent 70%)`,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute inset-0 pointer-events-none"
          />
          
          {/* Constellation de particules dynamiques */}
          {[...Array(25)].map((_, i) => (
              <motion.div 
              key={i}
              animate={{ 
                y: [0, -40, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [0.5, 1.2, 0.5]
              }}
              transition={{ 
                duration: 5 + i * 0.3, 
                repeat: Infinity, 
                delay: i * 0.2 
              }}
              className="absolute w-1 h-1 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full"
                style={{
                left: `${3 + (i * 3.8)}%`,
                top: `${15 + Math.sin(i) * 50}%`
              }}
            />
          ))}
        </div>

        <div className="max-w-5xl mx-auto text-center px-6 relative z-10">
          
          {/* Badge ultra-épuré */}
              <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-200/50 bg-gray-50/80 backdrop-blur-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-400/60 mr-3 animate-pulse" />
              <span className="text-gray-600 text-xs font-light tracking-[0.2em] uppercase">
                Nos Services Premium
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-gray-500/60 ml-3 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </motion.div>
          
          {/* Titre principal ultra-sophistiqué */}
              <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight text-gray-900 leading-[1.1] tracking-[-0.02em] mb-4">
              L'excellence{' '}
              <motion.span 
                className="font-normal bg-gradient-to-r from-gray-600 via-gray-800 to-black bg-clip-text text-transparent relative"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                immobilière
                <motion.div
                  animate={{ x: [-100, 350] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 opacity-30"
                />
              </motion.span>
            </h1>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-thin text-gray-700 leading-[1.1] tracking-[-0.01em]">
              redéfinie pour vous
            </h2>
          </motion.div>
          
          {/* Description premium */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.4, 0, 0.2, 1] }}
            className="mb-12"
          >
            <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
              Découvrez notre gamme complète de services immobiliers premium.
              <span className="text-gray-800"> De la recherche à la signature, une expérience révolutionnaire vous attend.</span>
            </p>
          </motion.div>
          
          {/* Navigation services interactive */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {services.map((service, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveService(index)}
                className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                  activeService === index 
                    ? 'bg-gray-900 text-white border-gray-900' 
                    : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-gray-300'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2 text-sm font-medium">
                  {service.icon}
                  {service.title}
                </span>
              </motion.button>
            ))}
            </motion.div>
            
          {/* CTA élégant */}
              <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <motion.button
              className="group relative px-8 py-4 bg-gradient-to-r from-gray-900 to-black text-white rounded-full text-lg font-medium overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-3">
                Explorer nos services
                <motion.div 
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <FaArrowRight className="w-4 h-4" />
                </motion.div>
              </span>
                <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
            </motion.button>
                </motion.div>
              </div>
            
        {/* Indicateur de scroll épuré */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-0.5 h-12 bg-gradient-to-b from-gray-400 to-transparent mb-2"
            />
            <div className="text-gray-400 text-xs font-light tracking-wide uppercase">
              Scroll
            </div>
          </div>
            </motion.div>
      </section>

      {/* Section Services Détaillés - Style révolutionnaire */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background holographique */}
        <div className="absolute inset-0 pointer-events-none">
            <motion.div
            animate={{ 
              background: [
                "radial-gradient(circle at 20% 30%, rgba(0, 0, 0, 0.03) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 70%, rgba(0, 0, 0, 0.03) 0%, transparent 50%)",
                "radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.03) 0%, transparent 50%)"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header révolutionnaire */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.6, 0.01, 0.05, 0.95] }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-extralight text-gray-900 mb-6 tracking-tight leading-tight relative"
              whileHover={{ scale: 1.02 }}
            >
              Services{' '}
              <motion.span 
                className="font-normal bg-gradient-to-r from-gray-600 via-gray-800 to-black bg-clip-text text-transparent relative"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                sur mesure
                <motion.div
                  animate={{ x: [-100, 300] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 opacity-30"
                />
              </motion.span>
            </motion.h2>
                    <motion.div 
              className="w-24 h-0.5 bg-gradient-to-r from-gray-600 to-black mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
                    </motion.div>
                    
          {/* Grille des services ultra-sophistiquée */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
                      <motion.div 
                        key={index}
                initial={{ opacity: 0, y: 40, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.6, 0.01, 0.05, 0.95] }}
                  viewport={{ once: true }}
                className="group perspective-1000"
                      >
                        <motion.div
                  whileHover={{ scale: 1.02, rotateY: 2, z: 20 }}
                  transition={{ duration: 0.4 }}
                  className="p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-gray-50/80 to-gray-100/60 hover:shadow-2xl transition-all duration-500 border border-gray-200/30 relative overflow-hidden backdrop-blur-sm"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Effet de lueur holographique */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-100/10 via-gray-200/5 to-gray-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-800 rounded-3xl"></div>
                  
                  {/* Particules flottantes spécialisées */}
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ 
                        y: [0, -20, 0],
                        opacity: [0.3, 0.8, 0.3],
                        scale: [0.5, 1, 0.5]
                      }}
                      transition={{ 
                        duration: 4 + i * 0.2, 
                        repeat: Infinity, 
                        delay: i * 0.3 
                      }}
                      className="absolute w-1 h-1 rounded-full bg-gray-400"
                      style={{
                        left: `${10 + (i * 7)}%`,
                        top: `${20 + Math.sin(i) * 30}%`
                      }}
                    />
                  ))}

                  {/* Badge premium */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="inline-flex items-center gap-2 bg-gray-50/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-gray-700 border border-gray-200/30">
                      {service.icon}
                      <span>{service.subtitle}</span>
                </div>
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center"
                    >
                      <FaStar className="w-3 h-3 text-gray-600" />
                    </motion.div>
                  </div>
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4 tracking-wide">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-light text-lg mb-8">
                      {service.description}
                    </p>
                    
                    {/* Features premium */}
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                      <motion.div 
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 + featureIndex * 0.1 }}
                  viewport={{ once: true }}
                          className="flex items-center gap-3"
                      >
                        <motion.div
                            whileHover={{ scale: 1.2, rotate: 90 }}
                            transition={{ duration: 0.3 }}
                            className="w-5 h-5 rounded-full flex items-center justify-center bg-gray-50/80 border-gray-200/30 border"
                          >
                            <FaCheck className="w-2 h-2 text-gray-700" />
                          </motion.div>
                          <span className="text-gray-700 font-light">{feature}</span>
                      </motion.div>
                  ))}
                  </div>
                
                    {/* CTA service */}
                  <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                      className="w-full py-4 px-6 bg-gradient-to-r from-gray-900 to-black text-white rounded-2xl font-medium hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group"
                    >
                      <span>Découvrir ce service</span>
                      <motion.div
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <FaArrowRight className="w-4 h-4" />
                      </motion.div>
                  </motion.button>
                </div>
                </motion.div>
            </motion.div>
            ))}
          </div>
        </div>
      </section>
          
      {/* Section Processus Ultra-Moderne */}
      <section className="py-20 bg-gray-50/30 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-6 tracking-tight">
              Notre{' '}
              <span className="font-normal bg-gradient-to-r from-gray-600 to-black bg-clip-text text-transparent">
                méthode
              </span>
            </h2>
            <motion.div 
              className="w-20 h-0.5 bg-gradient-to-r from-gray-600 to-black mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </motion.div>

          {/* Étapes du processus ultra-sophistiquées */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                step: "01",
                title: "Analyse & Conseil",
                description: "Étude approfondie de vos besoins et conseils personnalisés pour optimiser votre recherche",
                icon: <FaLightbulb className="w-6 h-6" />
              },
              {
                step: "02", 
                title: "Recherche Active",
                description: "Prospection ciblée et présentation d'une sélection premium de biens correspondant à vos critères",
                icon: <FaGlobe className="w-6 h-6" />
              },
              {
                step: "03",
                title: "Signature & Suivi",
                description: "Accompagnement jusqu'à la signature et suivi post-emménagement pour votre satisfaction",
                icon: <FaHandshake className="w-6 h-6" />
              }
            ].map((etape, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Ligne de connexion */}
                {index < 2 && (
            <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.8 + index * 0.2 }}
                    viewport={{ once: true }}
                    className="hidden md:block absolute top-6 -right-6 w-12 h-0.5 bg-gradient-to-r from-gray-300 to-transparent origin-left"
                  />
                )}
                
                <div className="text-center">
                  {/* Numéro d'étape holographique */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotateY: 180 }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-gray-300/50 flex items-center justify-center text-gray-700 font-bold text-lg shadow-lg relative overflow-hidden group-hover:shadow-xl transition-shadow duration-300"
                  >
                    {etape.step}
                    {/* Effet de brillance */}
            <motion.div
                      animate={{ x: [-100, 100] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                    />
                  </motion.div>
                  
                  {/* Icône flottante */}
            <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    className="w-8 h-8 mx-auto mb-4 text-gray-600"
                  >
                    {etape.icon}
                  </motion.div>
                  
                  <h3 className="text-xl font-light text-gray-900 mb-4">
                    {etape.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-light">
                    {etape.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Services; 