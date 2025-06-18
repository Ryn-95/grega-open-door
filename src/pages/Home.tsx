import { motion, AnimatePresence } from 'framer-motion'
import { FaCheck, FaUsers, FaHome, FaArrowRight, FaMapMarkerAlt, FaUserFriends, FaBuilding, FaGraduationCap, FaPhone, FaStar, FaShieldAlt, FaRocket, FaMobileAlt, FaCheckCircle, FaPlay, FaLightbulb, FaHeadset } from 'react-icons/fa'
import Hero from '../components/Hero'
import AgenceSection from '../components/AgenceSection'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Processus from '../components/Processus'
import { images } from '../data/images'
import { useEffect, useState } from 'react'

const Home = () => {
  useEffect(() => {
    console.log('Home component mounted')
    console.log('Categories imported:', !!Categories)
  }, [])
  
  // État pour gérer l'accordéon de la FAQ
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  
  // Questions fréquemment posées
  const faqItems = [
    {
      question: "Comment fonctionne le processus de location avec GREGA OPEN DOOR ?",
      answer: "Notre processus de location est simple et transparent. Après avoir sélectionné un bien qui vous intéresse, nous organisons une visite. Si le logement vous convient, nous vous aidons à constituer un dossier solide que nous présentons au propriétaire. Une fois votre candidature acceptée, nous nous occupons de toutes les formalités administratives jusqu'à la remise des clés."
    },
    {
      question: "Quels sont les documents nécessaires pour constituer un dossier de location ?",
      answer: "Pour un dossier complet, vous aurez besoin de pièces d'identité, justificatifs de revenus (fiches de paie, avis d'imposition), attestation d'employeur, quittances de loyer ou attestation d'hébergement, et éventuellement des documents du garant si nécessaire. Notre équipe vous guidera précisément selon votre situation personnelle."
    },
    {
      question: "Proposez-vous des biens meublés et non meublés ?",
      answer: "Oui, notre agence propose à la fois des logements meublés et non meublés pour répondre à tous les besoins. Les biens meublés sont particulièrement adaptés aux étudiants et aux professionnels en mobilité, tandis que les non meublés conviennent davantage aux locations de longue durée."
    },
    {
      question: "Comment se déroule un état des lieux avec votre agence ?",
      answer: "Nos états des lieux sont réalisés par des professionnels qui documentent méticuleusement l'état du logement à l'entrée et à la sortie. Le rapport inclut des photographies détaillées et une description précise de chaque pièce. Ce document protège à la fois le locataire et le propriétaire en cas de litige sur l'état du bien."
    },
    {
      question: "Quel est le délai moyen pour trouver un logement avec GREGA OPEN DOOR ?",
      answer: "Le délai varie selon vos critères et votre budget, mais grâce à notre connaissance approfondie du marché parisien et à notre réseau de propriétaires, nos clients trouvent généralement un logement adapté en 2 à 4 semaines. Pour les demandes plus spécifiques, cela peut prendre un peu plus de temps."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Hero />

      {/* Section Avantages - Style Ultra-Épuré RÉVOLUTIONNAIRE */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background holographique */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/10 via-transparent to-purple-50/10"></div>
          <motion.div
            animate={{ 
              background: [
                "radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 70%, rgba(34, 197, 94, 0.05) 0%, transparent 50%)",
                "radial-gradient(circle at 50% 50%, rgba(249, 115, 22, 0.05) 0%, transparent 50%)"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0"
          />
      </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Header Révolutionnaire */}
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
              Pourquoi choisir{' '}
              <motion.span 
                className="font-normal bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent relative"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                GREGA
                {/* Effet de brillance */}
                <motion.div
                  animate={{ x: [-100, 300] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 opacity-30"
                />
              </motion.span>
            </motion.h2>
            <motion.div 
              className="w-24 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </motion.div>

          {/* Grille Ultra-Révolutionnaire */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* EFFICACITÉ - Hologramme Temporel */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.6, 0.01, 0.05, 0.95] }}
              viewport={{ once: true }}
              className="group text-center perspective-1000"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5, z: 50 }}
                transition={{ duration: 0.4 }}
                className="p-8 rounded-3xl bg-gradient-to-br from-blue-50/80 to-blue-100/60 hover:from-blue-100/90 hover:to-blue-200/70 transition-all duration-500 border border-blue-200/30 hover:border-blue-300/50 relative overflow-hidden shadow-xl hover:shadow-2xl backdrop-blur-sm"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Particules flottantes */}
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      y: [0, -20, 0],
                      opacity: [0.3, 0.8, 0.3],
                      scale: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                      duration: 3 + i * 0.2, 
                      repeat: Infinity, 
                      delay: i * 0.3 
                    }}
                    className="absolute w-1 h-1 bg-blue-400 rounded-full"
                    style={{
                      left: `${10 + (i * 7)}%`,
                      top: `${20 + Math.sin(i) * 30}%`
                    }}
                  />
                ))}

                {/* Hologramme Temporel Ultra-Avancé */}
                <div className="relative mb-8">
                  <motion.div
                    animate={{ rotateY: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="w-24 h-24 mx-auto relative"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Sphère temporelle */}
                    <motion.div
                      animate={{ 
                        boxShadow: [
                          "0 0 20px rgba(59, 130, 246, 0.3), inset 0 0 20px rgba(59, 130, 246, 0.1)",
                          "0 0 40px rgba(59, 130, 246, 0.6), inset 0 0 30px rgba(59, 130, 246, 0.3)",
                          "0 0 20px rgba(59, 130, 246, 0.3), inset 0 0 20px rgba(59, 130, 246, 0.1)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-full h-full rounded-full bg-gradient-to-br from-blue-400/20 to-blue-600/40 border-2 border-blue-300/50 relative overflow-hidden backdrop-blur-sm"
                    >
                      {/* Anneaux orbitaux */}
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                          transition={{ 
                            duration: 4 + i * 2, 
                            repeat: Infinity, 
                            ease: "linear" 
                          }}
                          className={`absolute inset-${i * 2} border border-blue-400/30 rounded-full`}
                        />
                      ))}
                      
                      {/* Centre énergétique */}
                      <motion.div
                        animate={{ 
                          scale: [0.8, 1.2, 0.8],
                          rotate: [0, 180, 360]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg"
                      >
                        3x
                      </motion.div>
                    </motion.div>
                  </motion.div>
                  
                  {/* Compteur temps réel */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
                    className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border-2 border-white"
                  >
                    <motion.span
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      TURBO
                    </motion.span>
                  </motion.div>
        </div>

                <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-wide">
                  Efficacité Quantique
                </h3>
                <p className="text-gray-700 font-light text-base leading-relaxed mb-6">
                  IA prédictive révolutionnaire : trouvez votre logement 3x plus rapidement
                </p>
                
                {/* Barre de performance holographique */}
                <div className="relative">
                  <div className="w-full bg-gradient-to-r from-gray-200 to-gray-300 rounded-full h-3 mb-3 overflow-hidden">
        <motion.div 
                      initial={{ width: 0, x: -100 }}
                      whileInView={{ width: "100%", x: 0 }}
                      transition={{ duration: 2.5, delay: 0.8, ease: "easeOut" }}
                      className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 h-full rounded-full relative overflow-hidden"
                    >
                      <motion.div
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      />
                    </motion.div>
                  </div>
                  <motion.p 
                    className="text-sm text-blue-700 font-medium text-center"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Performance dépassant toute concurrence
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>

            {/* SÉCURITÉ - Bouclier Quantique */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotateY: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.6, 0.01, 0.05, 0.95] }}
          viewport={{ once: true }}
              className="group text-center perspective-1000"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateY: -5, z: 50 }}
                transition={{ duration: 0.4 }}
                className="p-8 rounded-3xl bg-gradient-to-br from-green-50/80 to-emerald-100/60 hover:from-green-100/90 hover:to-emerald-200/70 transition-all duration-500 border border-green-200/30 hover:border-emerald-300/50 relative overflow-hidden shadow-xl hover:shadow-2xl backdrop-blur-sm"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Matrice de sécurité */}
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      delay: i * 0.1 
                    }}
                    className="absolute w-0.5 h-0.5 bg-green-400 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`
                    }}
                  />
                ))}

                {/* Bouclier Quantique */}
                <div className="relative mb-8">
          <motion.div
                    whileHover={{ scale: 1.15, rotateZ: 10 }}
                    className="w-24 h-24 mx-auto relative"
                  >
                    {/* Bouclier principal avec effet holographique */}
                    <motion.div
                      animate={{ 
                        boxShadow: [
                          "0 0 30px rgba(34, 197, 94, 0.4), 0 0 60px rgba(34, 197, 94, 0.2)",
                          "0 0 50px rgba(34, 197, 94, 0.8), 0 0 100px rgba(34, 197, 94, 0.4)",
                          "0 0 30px rgba(34, 197, 94, 0.4), 0 0 60px rgba(34, 197, 94, 0.2)"
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="w-full h-full bg-gradient-to-br from-green-300/30 to-emerald-600/50 rounded-2xl border-2 border-green-400/60 relative overflow-hidden backdrop-blur-sm transform rotate-45"
                    >
                      {/* Lignes de scan multiples */}
                      <motion.div
                        animate={{ y: ["-100%", "200%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-300 to-transparent opacity-70"
                      />
                      <motion.div
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
                        className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-emerald-300 to-transparent opacity-70"
                      />
                      
                      {/* Centre sécurisé */}
                      <motion.div
                        animate={{ 
                          rotate: [0, 360],
                          scale: [0.8, 1.2, 0.8]
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white shadow-lg"
                      >
                        <FaShieldAlt className="w-5 h-5" />
                      </motion.div>
                    </motion.div>
                    
                    {/* Particules de protection orbitales */}
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ 
                          rotate: [0, 360],
                          scale: [0.5, 1, 0.5]
                        }}
                        transition={{ 
                          duration: 3 + i * 0.5, 
                          repeat: Infinity, 
                          delay: i * 0.2 
                        }}
                        className="absolute w-2 h-2 bg-green-400 rounded-full"
                        style={{
                          top: "50%",
                          left: "50%",
                          transform: `translate(-50%, -50%) rotate(${i * 60}deg) translateY(-40px) rotate(-${i * 60}deg)`
                        }}
                      />
                    ))}
                  </motion.div>
                  
                  {/* Badge certification */}
                  <motion.div
                    initial={{ scale: 0, rotate: 180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
                    className="absolute -top-3 -right-3 bg-gradient-to-r from-green-600 to-emerald-800 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border-2 border-white"
                  >
                    <motion.span
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      100% IA
                    </motion.span>
                  </motion.div>
            </div>

                <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-wide">
                  Sécurité Absolue
                </h3>
                <p className="text-gray-700 font-light text-base leading-relaxed mb-6">
                  Blockchain & IA : protection maximale de vos données et dossiers
                </p>
                
                {/* Indicateur de sécurité avancé */}
                <div className="flex items-center justify-center gap-3">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.3, 1],
                      boxShadow: [
                        "0 0 10px rgba(34, 197, 94, 0.5)",
                        "0 0 20px rgba(34, 197, 94, 0.8)",
                        "0 0 10px rgba(34, 197, 94, 0.5)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                  />
                  <motion.p 
                    className="text-sm text-green-700 font-medium"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Cryptage militaire actif
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>

            {/* EXCELLENCE - Constellation Premium */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.6, 0.01, 0.05, 0.95] }}
              viewport={{ once: true }}
              className="group text-center perspective-1000"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5, z: 50 }}
                transition={{ duration: 0.4 }}
                className="p-8 rounded-3xl bg-gradient-to-br from-amber-50/80 to-orange-100/60 hover:from-amber-100/90 hover:to-orange-200/70 transition-all duration-500 border border-amber-200/30 hover:border-orange-300/50 relative overflow-hidden shadow-xl hover:shadow-2xl backdrop-blur-sm"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Poussière d'étoiles */}
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      y: [0, -30, 0],
                      opacity: [0.2, 1, 0.2],
                      rotate: [0, 360]
                    }}
                    transition={{ 
                      duration: 4 + i * 0.3, 
                      repeat: Infinity, 
                      delay: i * 0.2 
                    }}
                    className="absolute"
                    style={{
                      left: `${15 + (i * 5)}%`,
                      top: `${10 + Math.sin(i) * 40}%`
                    }}
                  >
                    <FaStar className="w-1 h-1 text-amber-400" />
                  </motion.div>
                ))}

                {/* Constellation Premium */}
                <div className="relative mb-8">
                  <motion.div
                    animate={{ rotateZ: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-24 h-24 mx-auto relative"
                  >
                    {/* Étoiles constellation */}
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: 0 }}
                        whileInView={{ scale: 1, rotate: 360 }}
                        transition={{ 
                          duration: 1.5, 
                          delay: i * 0.2,
                          type: "spring",
                          stiffness: 200
                        }}
                        className="absolute"
                        style={{
                          top: "50%",
                          left: "50%",
                          transform: `translate(-50%, -50%) rotate(${i * 72}deg) translateY(-35px) rotate(-${i * 72}deg)`
                        }}
                      >
                        <motion.div
                          animate={{ 
                            scale: [1, 1.5, 1],
                            rotate: [0, 180, 360],
                            boxShadow: [
                              "0 0 10px rgba(245, 158, 11, 0.5)",
                              "0 0 25px rgba(245, 158, 11, 0.8)",
                              "0 0 10px rgba(245, 158, 11, 0.5)"
                            ]
                          }}
                          transition={{ 
                            duration: 3, 
                            repeat: Infinity, 
                            delay: i * 0.3 
                          }}
                          className="w-4 h-4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center"
                        >
                          <FaStar className="w-2 h-2 text-white" />
                        </motion.div>
                      </motion.div>
                    ))}
                    
                    {/* Étoile centrale premium */}
                    <motion.div
                      animate={{ 
                        scale: [1, 1.3, 1],
                        rotate: [0, 360],
                        boxShadow: [
                          "0 0 20px rgba(251, 191, 36, 0.6)",
                          "0 0 40px rgba(251, 191, 36, 0.9)",
                          "0 0 20px rgba(251, 191, 36, 0.6)"
                        ]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white shadow-lg"
                    >
                      <FaStar className="w-4 h-4" />
                    </motion.div>

                    {/* Anneaux de prestige */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                        transition={{ 
                          duration: 8 + i * 2, 
                          repeat: Infinity, 
                          ease: "linear" 
                        }}
                        className={`absolute inset-${i * 3} border border-amber-300/40 rounded-full`}
                      />
                    ))}
                  </motion.div>
                  
                  {/* Badge excellence */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.7, type: "spring" }}
                    className="absolute -top-3 -right-3 bg-gradient-to-r from-amber-600 to-orange-800 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border-2 border-white"
                  >
                    4.9★
                  </motion.div>
                </div>

                <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-wide">
                  Excellence Premium
                </h3>
                <p className="text-gray-700 font-light text-base leading-relaxed mb-6">
                  Service white-glove personnalisé avec accompagnement VIP
                </p>
                
                {/* Compteur clients premium */}
                <div className="flex items-center justify-center gap-3">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1, delay: 0.8, type: "spring" }}
                    className="flex items-center gap-2"
                  >
                    <motion.div
                      animate={{ 
                        rotate: [0, 360],
                        scale: [0.8, 1.2, 0.8]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center"
                    >
                      <span className="text-white text-xs font-bold">+</span>
                    </motion.div>
              <motion.span 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 2, delay: 1 }}
                      className="text-lg font-bold text-orange-700"
                    >
                      500
              </motion.span>
              <motion.span 
                      className="text-sm text-orange-600 font-medium"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      clients VIP satisfaits
                    </motion.span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Section Bonus Ultra-Futuriste : Tableau de Bord Quantique */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <motion.div
              whileHover={{ scale: 1.02, rotateX: 2 }}
              className="bg-gradient-to-r from-gray-900/95 via-gray-800/95 to-gray-900/95 rounded-3xl p-8 border border-gray-700/50 shadow-2xl backdrop-blur-sm relative overflow-hidden"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Effet matrix background */}
              <div className="absolute inset-0 opacity-10">
                {[...Array(50)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, 100, 0] }}
                    transition={{ 
                      duration: 2 + Math.random() * 3, 
                      repeat: Infinity, 
                      delay: Math.random() * 2 
                    }}
                    className="absolute w-px h-4 bg-green-400"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`
                    }}
                  />
                ))}
              </div>

              <div className="text-center mb-8 relative z-10">
                <motion.h3 
                  className="text-3xl font-light text-white mb-3"
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Command Center Quantique
                </motion.h3>
                <div className="flex items-center justify-center gap-3">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.5, 1],
                      boxShadow: [
                        "0 0 10px rgba(34, 197, 94, 0.5)",
                        "0 0 25px rgba(34, 197, 94, 1)",
                        "0 0 10px rgba(34, 197, 94, 0.5)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 bg-green-400 rounded-full"
                  />
                  <span className="text-green-400 text-sm font-medium">SYSTÈME OPÉRATIONNEL</span>
                </div>
              </div>
              
              {/* Dashboard futuriste */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
                {[
                  { label: "Recherches IA actives", value: "127", icon: "🔍", color: "blue" },
                  { label: "Visites VR planifiées", value: "43", icon: "🥽", color: "purple" },
                  { label: "Dossiers blockchain", value: "89", icon: "⛓️", color: "green" },
                  { label: "Contrats smart signés", value: "31", icon: "📜", color: "orange" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30, rotateY: -20 }}
                    whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 1 }}
                    className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-700/30 rounded-2xl border border-gray-600/30 shadow-lg backdrop-blur-sm relative overflow-hidden"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Effet de scan */}
                    <motion.div
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        delay: index * 0.5 + 2 
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                    />
                    
                    <div className="text-3xl mb-3">{stat.icon}</div>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 1, delay: index * 0.2 + 1.5, type: "spring" }}
                      className={`text-3xl font-light text-${stat.color}-400 mb-2`}
                    >
                      <motion.span
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      >
                        {stat.value}
                      </motion.span>
                    </motion.div>
                    <p className="text-gray-300 text-xs font-light">{stat.label}</p>
                    
                    {/* Indicateur activité */}
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
                      className={`absolute top-2 right-2 w-2 h-2 bg-${stat.color}-400 rounded-full`}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section Statistiques Temps Réel Ultra-Innovante */}
      <section className="py-20 bg-gradient-to-b from-gray-50/30 to-gray-100/20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Header Stats */}
          <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.6, 0.01, 0.05, 0.95] }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extralight text-gray-900 mb-4 tracking-tight leading-tight">
              GREGA en{' '}
              <span className="font-normal">Temps Réel</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Nos performances live
            </p>
            <div className="w-16 h-px bg-gray-900 mx-auto mt-6"></div>
          </motion.div>

          {/* Statistiques Animées */}
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: 847, label: "Clients satisfaits", suffix: "+", color: "blue" },
              { number: 2156, label: "Biens analysés", suffix: "", color: "green" },
              { number: 94, label: "Taux de réussite", suffix: "%", color: "purple" },
              { number: 12, label: "Jours moyens", suffix: "", color: "orange" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-white rounded-xl border border-gray-100 hover:border-gray-200 transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                    className={`text-3xl md:text-4xl font-light text-${stat.color}-600 mb-2`}
                  >
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 2, delay: index * 0.1 + 0.5 }}
                    >
                      {stat.number}{stat.suffix}
              </motion.span>
                  </motion.div>
                  <p className="text-gray-600 font-light text-sm">{stat.label}</p>
                  
                  {/* Indicateur live */}
                  <div className="flex items-center justify-center gap-2 mt-3">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2 h-2 bg-green-500 rounded-full"
                    />
                    <span className="text-xs text-gray-500">Live</span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Processus Ultra-Design */}
      <section className="py-20 bg-gradient-to-b from-gray-50/30 to-white relative overflow-hidden">
        {/* Background minimaliste */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gray-100/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gray-200/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header Processus Ultra-Clean */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.6, 0.01, 0.05, 0.95] }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-4 leading-tight tracking-tight">
              Notre Processus
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Comment nous vous accompagnons ?
            </p>
            <div className="w-20 h-px bg-gray-900 mx-auto mt-6"></div>
          </motion.div>

          {/* Layout Smartphone + Étapes */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Smartphone Ultra-Premium */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }}
              viewport={{ once: true }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Halo lumineux */}
                <div className="absolute -inset-6 bg-gradient-to-r from-gray-100/30 to-gray-200/20 rounded-3xl blur-2xl opacity-40"></div>
                
                {/* Frame iPhone */}
                        <motion.div 
                  whileHover={{ scale: 1.02, rotateY: 1 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-72 h-[580px] bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 rounded-[3rem] p-2.5 shadow-2xl"
                >
                  {/* Écran */}
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                    {/* Barre de statut */}
                    <div className="flex justify-between items-center px-6 py-3 text-sm font-medium text-gray-900">
                      <span>9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-4 h-2 bg-gray-900 rounded-sm"></div>
                        <div className="w-4 h-2 bg-gray-900 rounded-sm"></div>
                        <div className="w-4 h-2 bg-gray-400 rounded-sm"></div>
                      </div>
                            </div>
                            
                    {/* Header app */}
                    <div className="px-6 py-4 border-b border-gray-100">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-gray-900">GREGA</h3>
                        <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                          <FaPhone className="w-3 h-3 text-white" />
                        </div>
                            </div>
                          </div>
                    
                    {/* Contenu app */}
                    <div className="p-6 space-y-4">
                      {/* Progress bar premium */}
                      <div className="mb-6">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-600">Progression</span>
                          <span className="text-sm font-bold text-gray-900">3/5</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div 
                            className="bg-gradient-to-r from-gray-900 to-gray-700 h-2 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: "60%" }}
                            transition={{ duration: 1.5, delay: 0.6 }}
                          ></motion.div>
                        </div>
                      </div>
                      
                      {/* Étape actuelle premium */}
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        className="bg-gray-50 rounded-2xl p-4"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 bg-gray-900 text-white rounded-lg flex items-center justify-center text-sm font-bold">
                            03
                          </div>
                          <h4 className="font-semibold text-gray-900">Recherche active</h4>
                        </div>
                        <p className="text-gray-600 mb-3 text-sm">
                          Nous explorons le marché pour vous
                        </p>
                        <div className="space-y-2">
                          {[
                            "15 biens analysés",
                            "4 visites planifiées", 
                            "2 dossiers préparés"
                          ].map((item, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -15 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: 1.3 + index * 0.1 }}
                              className="flex items-center gap-2 text-xs text-gray-700"
                            >
                              <FaCheckCircle className="w-3 h-3 text-green-500" />
                              {item}
                            </motion.div>
                          ))}
                      </div>
                      </motion.div>
                      
                      {/* Boutons d'action premium */}
                      <div className="space-y-3 pt-4">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full bg-gray-900 text-white py-3 rounded-xl text-sm font-medium"
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 1.6 }}
                        >
                          Voir les biens trouvés
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full border border-gray-200 text-gray-700 py-3 rounded-xl text-sm font-medium"
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 1.7 }}
                        >
                          Modifier mes critères
                        </motion.button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Indicateur home */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full opacity-70"></div>
                </motion.div>
              </div>
            </motion.div>

            {/* Étapes Ultra-Clean */}
            <div className="space-y-8">
              {[
                {
                  number: "01",
                  title: "Analyse des Besoins",
                  description: "Nous prenons le temps de comprendre vos critères et préférences. Conseils personnalisés pour affiner votre projet.",
                  color: "blue"
                },
                {
                  number: "02", 
                  title: "Constitution du Dossier",
                  description: "Accompagnement complet pour rassembler et vérifier tous les documents nécessaires à votre candidature.",
                  color: "green"
                },
                {
                  number: "03",
                  title: "Recherche de Biens", 
                  description: "Exploration du marché immobilier avec accès privilégié à des biens exclusifs avant leur mise sur le marché.",
                  color: "purple"
                },
                {
                  number: "04",
                  title: "Sélection et Visites",
                  description: "Présentation d'une sélection premium correspondant à vos critères. Organisation de visites privées personnalisées.",
                  color: "orange"
                },
                {
                  number: "05",
                  title: "Suivi Complet", 
                  description: "Assistance complète dans toutes les démarches administratives pour une intégration rapide et sans souci.",
                  color: "red"
              }
              ].map((step, index) => (
              <motion.div
                key={index}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.6, 0.01, 0.05, 0.95] }}
                  viewport={{ once: true }}
                className="group relative"
              >
                  {/* Ligne de connexion */}
                  {index < 4 && (
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                      className="absolute left-6 top-16 w-px h-16 bg-gradient-to-b from-gray-300 to-transparent origin-top"
                    />
                  )}
                  
                  <div className="flex items-start gap-6">
                    {/* Numéro premium */}
                        <motion.div 
                      className="relative w-12 h-12 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center text-sm font-bold text-gray-900 shadow-sm group-hover:border-gray-300 transition-all duration-300 flex-shrink-0 z-10"
                      whileHover={{ scale: 1.1, rotate: 2 }}
                          transition={{ duration: 0.3 }}
                    >
                      {step.number}
                      <div className={`absolute inset-0 bg-${step.color}-500 rounded-xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    </motion.div>
                            
                    {/* Contenu */}
                    <div className="flex-1 pt-2">
                      <h3 className="text-lg md:text-xl font-light text-gray-900 mb-3 tracking-wide group-hover:text-gray-700 transition-colors duration-200">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 font-light leading-relaxed text-base">
                        {step.description}
                      </p>
                            </div>
                          </div>
                        </motion.div>
              ))}
            </div>
          </div>
                        
          {/* Call to Action Ultra-Premium */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <div className="inline-flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-full px-6 py-3 mb-8">
              <FaMobileAlt className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">
                Une application intuitive pour suivre toutes les étapes
              </span>
                        </div>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Démarrer maintenant
            </motion.button>
          </motion.div>
                      </div>
      </section>

      {/* Section Services Ultra-Premium */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Header Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.6, 0.01, 0.05, 0.95] }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-4 leading-tight tracking-tight">
              Nos services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Nos Solutions
            </p>
            <div className="w-20 h-px bg-gray-900 mx-auto mt-6"></div>
          </motion.div>

          {/* Services Premium Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Logement Classique",
                subtitle: "Service",
                description: "Découvrez notre sélection premium de biens résidentiels disponibles à la location",
                cta: "Découvrir",
                gradient: "from-blue-50 to-blue-100",
                icon: <FaHome className="w-6 h-6" />
              },
              {
                title: "Logement Social", 
                subtitle: "Service",
                description: "Accédez à des logements à loyer modèré avec un accompagnement personnalisé",
                cta: "Découvrir",
                gradient: "from-green-50 to-green-100",
                icon: <FaUsers className="w-6 h-6" />
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: [0.6, 0.01, 0.05, 0.95] }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.4 }}
                  className={`bg-gradient-to-br ${service.gradient} rounded-2xl p-8 border border-gray-100 hover:border-gray-200 transition-all duration-500 relative overflow-hidden group-hover:shadow-xl`}
                >
                  {/* Badge Service Premium */}
                  <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 text-sm font-medium text-gray-700 border border-gray-200/50">
                    {service.icon}
                    <span>{service.subtitle}</span>
                      </div>
                      
                  <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-wide group-hover:text-gray-800 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed mb-8 text-lg">
                    {service.description}
                  </p>
                  
                        <motion.button
                    whileHover={{ scale: 1.05, x: 4 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:gap-4"
                  >
                    <span>{service.cta}</span>
                    <FaArrowRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section MacBook Interface GREGA Ultra-Innovante */}
      <section className="py-20 bg-gradient-to-b from-gray-50/30 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header MacBook */}
                          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.6, 0.01, 0.05, 0.95] }}
          viewport={{ once: true }}
            className="text-center mb-16"
                          >
            <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-4 leading-tight tracking-tight">
              Interface{' '}
              <span className="font-normal">Professionnelle</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Plateforme de recherche intelligente
            </p>
            <div className="w-20 h-px bg-gray-900 mx-auto mt-6"></div>
                          </motion.div>

          {/* MacBook avec Interface GREGA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.6, 0.01, 0.05, 0.95] }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Halo lumineux */}
              <div className="absolute -inset-8 bg-gradient-to-r from-gray-100/30 to-gray-200/20 rounded-3xl blur-3xl opacity-40"></div>
              
              {/* MacBook Frame */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative w-[900px] h-[560px] bg-gradient-to-b from-gray-300 via-gray-200 to-gray-300 rounded-[1.5rem] p-4 shadow-2xl"
              >
                {/* Écran MacBook */}
                <div className="w-full h-full bg-black rounded-[1rem] overflow-hidden relative">
                  {/* Barre de menu macOS */}
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                    <div className="text-sm font-medium text-gray-700">GREGA - Plateforme Immobilière</div>
                    <div className="w-16"></div>
                  </div>
                  
                  {/* Interface GREGA */}
                  <div className="bg-white h-full p-6">
                    {/* Header Interface */}
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                      <div className="flex items-center gap-4">
                        <div className="text-2xl font-semibold text-gray-900">GREGA</div>
                        <div className="text-sm text-gray-500">Dashboard Professionnel</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-sm text-gray-600">En ligne</span>
                    </div>
                  </div>
                  
                    {/* Recherche en cours */}
                    <div className="grid grid-cols-3 gap-6">
                      {/* Colonne gauche - Filtres */}
                      <div className="space-y-4">
                        <h3 className="font-semibold text-gray-900 mb-4">Critères de recherche</h3>
                        <div className="space-y-3">
                          <div className="p-3 bg-gray-50 rounded-lg">
                            <div className="text-sm text-gray-600">Budget</div>
                            <div className="font-medium">1 200 - 1 800 €</div>
                          </div>
                          <div className="p-3 bg-gray-50 rounded-lg">
                            <div className="text-sm text-gray-600">Zone</div>
                            <div className="font-medium">Paris 11ème</div>
                          </div>
                          <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                            <div className="text-sm text-blue-600">Type</div>
                            <div className="font-medium text-blue-900">2 pièces</div>
                          </div>
                        </div>
                </div>
                
                      {/* Colonne centre - Résultats */}
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-gray-900">Résultats</h3>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full"
                          />
                        </div>
                        
                        {/* Biens trouvés */}
                        <div className="space-y-3">
                          {[
                            { addr: "Rue de la Roquette", price: "1 450 €", status: "Nouveau" },
                            { addr: "Boulevard Voltaire", price: "1 650 €", status: "Visite prévue" },
                            { addr: "Rue Oberkampf", price: "1 380 €", status: "Dossier envoyé" }
                          ].map((bien, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.2 + 1 }}
                              className="p-3 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
                            >
                              <div className="flex justify-between items-start">
                                <div>
                                  <div className="font-medium text-sm">{bien.addr}</div>
                                  <div className="text-lg font-semibold text-gray-900">{bien.price}</div>
                                </div>
                                <div className={`text-xs px-2 py-1 rounded-full ${
                                  bien.status === "Nouveau" ? "bg-green-100 text-green-700" :
                                  bien.status === "Visite prévue" ? "bg-blue-100 text-blue-700" :
                                  "bg-orange-100 text-orange-700"
                                }`}>
                                  {bien.status}
                                </div>
                              </div>
              </motion.div>
            ))}
          </div>
        </div>
        
                      {/* Colonne droite - Actions */}
                      <div className="space-y-4">
                        <h3 className="font-semibold text-gray-900">Actions rapides</h3>
                        <div className="space-y-3">
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            className="w-full p-3 bg-gray-900 text-white rounded-lg text-sm font-medium"
                          >
                            Planifier visite
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            className="w-full p-3 border border-gray-200 text-gray-700 rounded-lg text-sm font-medium"
                          >
                            Affiner recherche
                          </motion.button>
                          
                          {/* Notifications temps réel */}
                          <div className="mt-6 space-y-2">
                            <div className="text-sm font-medium text-gray-900 mb-3">Notifications</div>
                            {[
                              "3 nouveaux biens",
                              "Visite confirmée",
                              "Dossier accepté"
                            ].map((notif, index) => (
        <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.3 + 2 }}
                                className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg text-sm"
                              >
                                <motion.div
                                  animate={{ scale: [1, 1.2, 1] }}
                                  transition={{ duration: 1, repeat: Infinity, delay: index * 0.3 }}
                                  className="w-2 h-2 bg-blue-500 rounded-full"
                                />
                                <span className="text-blue-900">{notif}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Base MacBook */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-64 h-4 bg-gradient-to-b from-gray-300 to-gray-400 rounded-b-xl"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Profils Ultra-Design */}
      <section className="py-20 bg-gradient-to-b from-gray-50/30 to-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Header Profils */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.6, 0.01, 0.05, 0.95] }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-4 leading-tight tracking-tight">
              À qui s'adressent nos services ?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Solutions adaptées à tous profils
            </p>
            <div className="w-20 h-px bg-gray-900 mx-auto mt-6"></div>
          </motion.div>

          {/* Profils Premium Cards */}
          <div className="space-y-12">
            {[
              {
                icon: <FaUserFriends className="w-6 h-6" />,
                title: "Particuliers",
                description: "Intelligence artificielle dédiée à votre recherche personnalisée",
                details: "Que vous soyez en CDI, étudiant, indépendant ou retraité, notre IA s'adapte à votre profil unique pour optimiser votre recherche de logement à Paris.",
                cta: "Démarrer ma recherche",
                gradient: "from-blue-50 to-indigo-50",
                color: "blue"
              },
              {
                icon: <FaBuilding className="w-6 h-6" />,
                title: "Entreprises", 
                description: "Révolutionnez votre marque employeur avec notre solution RH",
                details: "Transformez l'expérience d'intégration de vos talents avec notre service de relocation intelligent. Une solution révolutionnaire pour attirer et fidéliser.",
                cta: "Découvrir l'innovation",
                gradient: "from-purple-50 to-violet-50",
                color: "purple"
              },
              {
                icon: <FaGraduationCap className="w-6 h-6" />,
                title: "Écoles & Universités",
                description: "Innovation pédagogique : intégrez l'IA dans l'accompagnement étudiant",
                details: "Révolutionnez l'accueil de vos étudiants avec notre plateforme intelligente. Une approche disruptive pour l'enseignement supérieur moderne.",
                cta: "Innovation académique",
                gradient: "from-green-50 to-emerald-50",
                color: "green"
              }
            ].map((profile, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: [0.6, 0.01, 0.05, 0.95] }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.4 }}
                  className={`bg-gradient-to-br ${profile.gradient} rounded-2xl p-8 md:p-10 border border-gray-100 hover:border-gray-200 transition-all duration-500 relative overflow-hidden group-hover:shadow-xl`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                    {/* Section gauche */}
                    <div className="flex items-start gap-6 flex-1">
                      {/* Icône Premium */}
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className={`w-14 h-14 bg-gradient-to-br from-${profile.color}-500 to-${profile.color}-600 text-white rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 flex-shrink-0`}
                      >
                        {profile.icon}
                      </motion.div>
                      
                      {/* Contenu */}
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 tracking-wide group-hover:text-gray-800 transition-colors duration-300">
                          {profile.title}
                        </h3>
                        <p className="text-gray-700 font-medium text-lg mb-4 leading-relaxed">
                          {profile.description}
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed">
                          {profile.details}
                        </p>
                </div>
                    </div>
                    
                    {/* Section droite - CTA */}
                    <div className="flex-shrink-0">
                      <motion.button
                        whileHover={{ scale: 1.05, x: 4 }}
                        whileTap={{ scale: 0.95 }}
                        className="group/btn bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl"
                      >
                        <span>{profile.cta}</span>
                        <motion.div
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <FaArrowRight className="w-4 h-4" />
                        </motion.div>
                      </motion.button>
                    </div>
                </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Témoignages Clients Ultra-Innovante avec Notifications Mobiles */}
      <section className="py-20 bg-gradient-to-b from-gray-50/30 to-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Header Témoignages */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.6, 0.01, 0.05, 0.95] }}
          viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-4 leading-tight tracking-tight">
              Ils nous font{' '}
              <span className="font-normal">Confiance</span>
              </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Témoignages en temps réel
            </p>
            <div className="w-20 h-px bg-gray-900 mx-auto mt-6"></div>
          </motion.div>

          {/* Zone de notifications flottantes */}
          <div className="relative h-96 overflow-hidden">
            {/* Notifications flottantes animées */}
            {[
              {
                name: "Sarah M.",
                message: "Appartement trouvé en 8 jours ! Service exceptionnel 🏠",
                avatar: "SM",
                color: "blue",
                delay: 0
              },
              {
                name: "Thomas L.", 
                message: "Dossier accepté du premier coup grâce à GREGA ✨",
                avatar: "TL",
                color: "green", 
                delay: 2
              },
              {
                name: "Julie R.",
                message: "Interface super intuitive, j'ai adoré l'expérience 💫",
                avatar: "JR", 
                color: "purple",
                delay: 4
              },
              {
                name: "Marc D.",
                message: "Équipe réactive, visites organisées rapidement 🚀",
                avatar: "MD",
                color: "orange",
                delay: 6
              },
              {
                name: "Emma K.",
                message: "Logement social obtenu en 3 semaines, merci ! 🙏",
                avatar: "EK",
                color: "pink",
                delay: 8
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, x: -50 }}
                whileInView={{ 
                  opacity: [0, 1, 1, 0],
                  y: [100, 20, -20, -100],
                  x: [-50, 0, 0, 50]
                }}
                transition={{
                  duration: 8,
                  delay: testimonial.delay,
                  repeat: Infinity,
                  repeatDelay: 10,
                  ease: "easeInOut"
                }}
                viewport={{ once: false }}
                className={`absolute ${
                  index % 2 === 0 ? 'left-4' : 'right-4'
                } ${
                  index === 0 ? 'top-8' :
                  index === 1 ? 'top-20' :
                  index === 2 ? 'top-32' :
                  index === 3 ? 'top-44' :
                  'top-56'
                }`}
                style={{ zIndex: 10 + index }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`bg-white rounded-2xl p-4 shadow-lg border border-gray-100 max-w-xs ${
                    index % 2 === 0 ? 'ml-0' : 'mr-0'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 bg-gradient-to-br from-${testimonial.color}-500 to-${testimonial.color}-600 rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0`}>
                      {testimonial.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-gray-900 text-sm">{testimonial.name}</span>
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: testimonial.delay }}
                          className="w-2 h-2 bg-green-500 rounded-full"
                        />
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{testimonial.message}</p>
                      <div className="flex items-center gap-1 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: testimonial.delay + 0.5 + i * 0.1 }}
                          >
                            <FaStar className="w-3 h-3 text-yellow-400" />
                          </motion.div>
                        ))}
                      </div>
                    </div>
            </div>
                  
                  {/* Indicateur "nouveau message" */}
          <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ delay: testimonial.delay + 0.2 }}
                    className={`absolute -top-2 -right-2 w-6 h-6 bg-${testimonial.color}-500 rounded-full flex items-center justify-center`}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-2 h-2 bg-white rounded-full"
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
            
            {/* Message central fixe */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: true }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-xl">
                <h3 className="text-2xl font-light text-gray-900 mb-2">+500 clients satisfaits</h3>
                <p className="text-gray-600 font-light">Note moyenne : 4.9/5</p>
                <div className="flex justify-center gap-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                  ))}
              </div>
            </div>
            </motion.div>
          </div>
        </div>
      </section>
            
      {/* Section Ultra-Originale SIMPLE : Grille de Services Animée */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Simple et Élégant */}
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-gray-900 mb-4 leading-tight tracking-tight">
              Nos{' '}
              <span className="font-normal bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Innovations
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Découvrez ce qui nous rend unique
            </p>
            <div className="w-20 h-px bg-gray-900 mx-auto mt-6"></div>
          </motion.div>

          {/* Grille de Services Ultra-Clean */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: <FaRocket className="w-6 h-6" />,
                title: "IA Prédictive",
                description: "Notre intelligence artificielle analyse le marché pour vous proposer les meilleures opportunités avant tout le monde.",
                color: "blue",
                delay: 0
              },
              {
                icon: <FaLightbulb className="w-6 h-6" />,
                title: "Interface Intuitive",
                description: "Une plateforme simple et moderne qui rend la recherche de logement aussi facile qu'un jeu.",
                color: "purple",
                delay: 0.1
              },
              {
                icon: <FaShieldAlt className="w-6 h-6" />,
                title: "Sécurité Maximale",
                description: "Tous vos documents et données sont protégés par les dernières technologies de sécurité.",
                color: "green",
                delay: 0.2
              },
              {
                icon: <FaStar className="w-6 h-6" />,
                title: "Service Premium",
                description: "Un accompagnement personnalisé de A à Z avec des conseillers dédiés disponibles 7j/7.",
                color: "orange",
                delay: 0.3
              },
              {
                icon: <FaHeadset className="w-6 h-6" />,
                title: "Support 24/7",
                description: "Une équipe disponible à tout moment pour répondre à vos questions et vous accompagner.",
                color: "pink",
                delay: 0.4
              },
              {
                icon: <FaCheckCircle className="w-6 h-6" />,
                title: "Garantie Résultat",
                description: "Si nous ne trouvons pas votre logement en 30 jours, nous vous remboursons intégralement.",
                color: "cyan",
                delay: 0.5
              }
            ].map((service, index) => (
                <motion.div 
                  key={index}
                initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: service.delay }}
                viewport={{ once: true }}
                className="group"
                  >
                      <motion.div 
                  whileHover={{ y: -5, scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 hover:border-gray-200 transition-all duration-300 shadow-sm hover:shadow-lg h-full"
                      >
                  {/* Icône avec animation */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-12 h-12 bg-gradient-to-br from-${service.color}-500 to-${service.color}-600 rounded-xl flex items-center justify-center text-white mb-4 group-hover:shadow-lg transition-all duration-300`}
                  >
                    {service.icon}
                      </motion.div>
                  
                  {/* Contenu */}
                  <h3 className="text-xl font-light text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed text-sm lg:text-base">
                    {service.description}
                  </p>
                  
                  {/* Ligne d'accent */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: service.delay + 0.3 }}
                    className={`h-0.5 bg-gradient-to-r from-${service.color}-500 to-${service.color}-600 mt-4 rounded-full`}
                  />
                </motion.div>
                </motion.div>
              ))}
          </div>

          {/* CTA Simple et Efficace */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-lg transition-all duration-300"
            >
              Découvrir nos services
            </motion.button>
            </motion.div>
        </div>
      </section>
            
      {/* Section FAQ Ultra-Design */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          {/* Header FAQ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.6, 0.01, 0.05, 0.95] }}
              viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-4 leading-tight tracking-tight">
              Questions Fréquentes
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Réponses intelligentes
            </p>
            <div className="w-20 h-px bg-gray-900 mx-auto mt-6"></div>
          </motion.div>

          {/* Questions FAQ Premium */}
          <div className="space-y-6">
              {faqItems.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05, ease: [0.6, 0.01, 0.05, 0.95] }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-lg"
                >
                  
                  {/* Bouton question */}
              <motion.button
                    onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
                    className="w-full p-6 md:p-8 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors duration-200"
                  >
                    <h3 className="text-lg md:text-xl font-light text-gray-900 leading-relaxed pr-6 flex-1">
                      {item.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: activeQuestion === index ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 w-8 h-8 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                    >
                      <svg fill="currentColor" viewBox="0 0 20 20" className="w-full h-full">
                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
              </motion.button>
                  
                  {/* Réponse avec animation */}
                  <AnimatePresence>
                    {activeQuestion === index && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.6, 0.01, 0.05, 0.95] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 md:px-8 pb-6 md:pb-8">
                          <div className="w-full h-px bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 mb-6"></div>
                          <p className="text-gray-600 leading-relaxed font-light">
                            {item.answer}
                          </p>
                        </div>
            </motion.div>
                    )}
                  </AnimatePresence>
          </motion.div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Home;