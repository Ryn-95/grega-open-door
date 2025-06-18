import { motion, AnimatePresence } from 'framer-motion'
import { FaUsers, FaShieldAlt, FaLightbulb, FaRocket, FaStar, FaGlobe, FaHeart, FaArrowRight, FaCheck, FaBuilding, FaUserFriends, FaGraduationCap } from 'react-icons/fa'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
          
          {/* Particules flottantes */}
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 4 + i * 0.2, 
                repeat: Infinity, 
                delay: i * 0.3 
              }}
              className="absolute w-1 h-1 bg-gray-400/30 rounded-full"
              style={{
                left: `${5 + (i * 4.5)}%`,
                top: `${10 + Math.sin(i) * 60}%`
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
                À propos de nous
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
              L'innovation au{' '}
              <motion.span 
                className="font-normal bg-gradient-to-r from-gray-600 via-gray-800 to-black bg-clip-text text-transparent relative"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                service
                <motion.div
                  animate={{ x: [-100, 300] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 opacity-30"
                />
              </motion.span>
            </h1>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-thin text-gray-700 leading-[1.1] tracking-[-0.01em]">
              de l'immobilier premium
            </h2>
          </motion.div>
          
          {/* Description équilibrée */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.4, 0, 0.2, 1] }}
            className="mb-12"
          >
            <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
              Révolutionnez votre expérience immobilière avec GREGA OPEN DOOR.
              <span className="text-gray-800"> Une agence nouvelle génération qui redéfinit les standards du secteur.</span>
            </p>
          </motion.div>
          
          {/* Métriques premium */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12"
          >
            {[
              { value: "500+", label: "Clients satisfaits" },
              { value: "98%", label: "Taux de réussite" },
              { value: "24h", label: "Temps de réponse" }
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.5 + index * 0.1 }}
                className="text-center"
              >
                <motion.div 
                  className="text-3xl md:text-4xl font-light text-gray-900 mb-2"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {metric.value}
                </motion.div>
                <div className="text-sm text-gray-600 font-light">{metric.label}</div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* CTA élégant */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
          >
            <motion.button
              className="group relative px-8 py-4 bg-gradient-to-r from-gray-900 to-black text-white rounded-full text-lg font-medium overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-3">
                Découvrir notre histoire
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

      {/* Section Valeurs - Style révolutionnaire */}
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

        <div className="max-w-6xl mx-auto px-6 relative z-10">
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
              Nos{' '}
              <motion.span 
                className="font-normal bg-gradient-to-r from-gray-600 via-gray-800 to-black bg-clip-text text-transparent relative"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                valeurs fondamentales
                <motion.div
                  animate={{ x: [-100, 400] }}
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

          {/* Grille des valeurs ultra-sophistiquées */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              {
                icon: <FaUsers className="w-8 h-8" />,
                title: "Proximité Client",
                description: "Accompagnement personnalisé et écoute attentive de vos besoins spécifiques"
              },
              {
                icon: <FaShieldAlt className="w-8 h-8" />,
                title: "Confiance Absolue", 
                description: "Transparence totale et intégrité dans toutes nos relations professionnelles"
              },
              {
                icon: <FaLightbulb className="w-8 h-8" />,
                title: "Innovation Continue",
                description: "Technologies de pointe et méthodes révolutionnaires pour votre succès"
              },
              {
                icon: <FaRocket className="w-8 h-8" />,
                title: "Excellence Opérationnelle",
                description: "Performance maximale et résultats exceptionnels à chaque mission"
              }
            ].map((valeur, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.6, 0.01, 0.05, 0.95] }}
                viewport={{ once: true }}
                className="group text-center perspective-1000"
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: 5, z: 50 }}
                  transition={{ duration: 0.4 }}
                  className="p-8 rounded-3xl bg-gradient-to-br from-gray-50/80 to-gray-100/60 hover:from-gray-100/90 hover:to-gray-200/70 transition-all duration-500 border border-gray-200/30 hover:border-gray-300/50 relative overflow-hidden shadow-xl hover:shadow-2xl backdrop-blur-sm"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Particules flottantes */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ 
                        y: [0, -15, 0],
                        opacity: [0.3, 0.8, 0.3],
                        scale: [0.5, 1, 0.5]
                      }}
                      transition={{ 
                        duration: 3 + i * 0.2, 
                        repeat: Infinity, 
                        delay: i * 0.2 
                      }}
                      className="absolute w-1 h-1 bg-gray-400 rounded-full"
                      style={{
                        left: `${15 + (i * 10)}%`,
                        top: `${20 + Math.sin(i) * 25}%`
                      }}
                    />
                  ))}

                  {/* Icône holographique */}
                  <div className="relative mb-6">
                    <motion.div
                      animate={{ rotateY: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="w-16 h-16 mx-auto relative"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <motion.div
                        animate={{ 
                          boxShadow: [
                            "0 0 20px rgba(0, 0, 0, 0.3)",
                            "0 0 40px rgba(0, 0, 0, 0.6)",
                            "0 0 20px rgba(0, 0, 0, 0.3)"
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-full h-full rounded-2xl bg-gradient-to-br from-gray-100/20 to-gray-300/40 border-2 border-gray-300/50 flex items-center justify-center text-gray-700 relative overflow-hidden backdrop-blur-sm group-hover:scale-110 transition-transform duration-300"
                      >
                        {valeur.icon}
                        {/* Anneaux orbitaux */}
                        {[...Array(2)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                            transition={{ 
                              duration: 4 + i * 2, 
                              repeat: Infinity, 
                              ease: "linear" 
                            }}
                            className={`absolute inset-${i * 1} border border-gray-400/20 rounded-2xl`}
                          />
                        ))}
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  <h3 className="text-xl font-light text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                    {valeur.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-light text-sm">
                    {valeur.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Histoire - Design ultra-premium */}
      <section className="py-20 bg-gray-50/30 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
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
                histoire
              </span>
            </h2>
            <motion.div 
              className="w-20 h-0.5 bg-gradient-to-r from-gray-600 to-black mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="prose prose-lg mx-auto text-gray-600 leading-relaxed"
          >
            <p className="text-lg mb-6 font-light">
              <strong className="text-gray-900 font-medium">GREGA OPEN DOOR</strong> est née d'une vision révolutionnaire : 
              transformer radicalement l'expérience immobilière en plaçant l'innovation et l'excellence au cœur de chaque interaction.
            </p>
            
            <p className="mb-6 font-light">
              Fondée par une équipe d'experts passionnés, notre agence repense entièrement les codes traditionnels 
              de l'immobilier en intégrant les technologies les plus avancées et une approche humaine exceptionnelle.
            </p>
            
            <p className="font-light">
              Aujourd'hui, nous accompagnons des centaines de clients dans leurs projets immobiliers les plus ambitieux, 
              en leur offrant un service premium inégalé et des résultats qui dépassent constamment leurs attentes.
            </p>
          </motion.div>

          {/* Statistiques impressionnantes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: "2024", label: "Année de création" },
              { number: "500+", label: "Clients accompagnés" },
              { number: "98%", label: "Satisfaction client" },
              { number: "24h", label: "Temps de réponse" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div 
                  className="text-3xl md:text-4xl font-light text-gray-900 mb-2"
                  whileHover={{ scale: 1.1, color: "#374151" }}
                  transition={{ duration: 0.3 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-gray-600 font-light">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About; 