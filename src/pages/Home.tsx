import { motion, AnimatePresence } from 'framer-motion'
import { FaCheck, FaUsers, FaHome, FaArrowRight, FaMapMarkerAlt, FaUserFriends, FaBuilding, FaGraduationCap, FaPhone, FaStar, FaShieldAlt, FaRocket, FaMobileAlt, FaCheckCircle, FaPlay, FaLightbulb, FaHeadset } from 'react-icons/fa'
import Hero from '../components/Hero'
import AgenceSection from '../components/AgenceSection'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Processus from '../components/Processus'
import { images } from '../data/images'
import { useEffect, useState } from 'react'
import { navigateToPage } from '../utils/navigation'

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
      question: "Comment fonctionne le processus de location avec GREGA ONE COMPANY ?",
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
      question: "Quel est le délai moyen pour trouver un logement avec GREGA ONE COMPANY ?",
      answer: "Le délai varie selon vos critères et votre budget, mais grâce à notre connaissance approfondie du marché parisien et à notre réseau de propriétaires, nos clients trouvent généralement un logement adapté en 2 à 4 semaines. Pour les demandes plus spécifiques, cela peut prendre un peu plus de temps."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Hero />

      {/* Section Processus Ultra-Design - MOBILE OPTIMISÉ */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50/30 to-white relative overflow-hidden">
        {/* Background minimaliste */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-gray-100/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-40 md:w-80 h-40 md:h-80 bg-gray-200/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          {/* Header Processus Ultra-Clean - MOBILE OPTIMISÉ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.6, 0.01, 0.05, 0.95] }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-extralight text-gray-900 mb-3 md:mb-4 leading-tight tracking-tight">
              Notre Processus
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed px-4">
              Comment nous vous accompagnons ?
            </p>
            <div className="w-16 md:w-20 h-px bg-gray-900 mx-auto mt-4 md:mt-6"></div>
          </motion.div>

          {/* Layout Smartphone + Étapes - MOBILE OPTIMISÉ */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            
            {/* Smartphone Ultra-Premium - MOBILE OPTIMISÉ */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }}
              viewport={{ once: true }}
              className="relative flex justify-center lg:justify-end order-2 lg:order-1"
            >
              <div className="relative">
                {/* Halo lumineux statique */}
                <div className="absolute -inset-3 md:-inset-6 bg-gradient-to-r from-gray-100/20 to-gray-200/15 rounded-3xl blur-2xl opacity-30"></div>
                
                {/* Frame iPhone - MOBILE OPTIMISÉ */}
                <div className="relative w-56 md:w-72 h-[450px] md:h-[580px] bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 rounded-[2.5rem] md:rounded-[3rem] p-2 md:p-2.5 shadow-2xl">
                  {/* Écran */}
                  <div className="w-full h-full bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden relative">
                    {/* Barre de statut - MOBILE OPTIMISÉ */}
                    <div className="flex justify-between items-center px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm font-medium text-gray-900">
                      <span>9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-3 md:w-4 h-1.5 md:h-2 bg-gray-900 rounded-sm"></div>
                        <div className="w-3 md:w-4 h-1.5 md:h-2 bg-gray-900 rounded-sm"></div>
                        <div className="w-3 md:w-4 h-1.5 md:h-2 bg-gray-400 rounded-sm"></div>
                      </div>
                    </div>
                            
                    {/* Header app - MOBILE OPTIMISÉ */}
                    <div className="px-4 md:px-6 py-3 md:py-4 border-b border-gray-100">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg md:text-xl font-semibold text-gray-900">GREGA ONE COMPANY</h3>
                        <div className="w-6 md:w-8 h-6 md:h-8 bg-gray-900 rounded-full flex items-center justify-center">
                          <FaPhone className="w-2.5 md:w-3 h-2.5 md:h-3 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Contenu app - MOBILE OPTIMISÉ */}
                    <div className="p-4 md:p-6 space-y-3 md:space-y-4">
                      {/* Progress bar premium */}
                      <div className="mb-4 md:mb-6">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs md:text-sm font-medium text-gray-600">Progression</span>
                          <span className="text-xs md:text-sm font-bold text-gray-900">3/5</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 md:h-2">
                          <div className="bg-gradient-to-r from-gray-900 to-gray-700 h-1.5 md:h-2 rounded-full w-3/5"></div>
                        </div>
                      </div>
                      
                      {/* Étape actuelle premium - MOBILE OPTIMISÉ */}
                      <div className="bg-gray-50 rounded-xl md:rounded-2xl p-3 md:p-4">
                        <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                          <div className="w-6 md:w-8 h-6 md:h-8 bg-gray-900 text-white rounded-md md:rounded-lg flex items-center justify-center text-xs md:text-sm font-bold">
                            03
                          </div>
                          <h4 className="text-sm md:text-base font-semibold text-gray-900">Recherche active</h4>
                        </div>
                        <p className="text-gray-600 mb-2 md:mb-3 text-xs md:text-sm">
                          Nous explorons le marché pour vous
                        </p>
                        <div className="space-y-1.5 md:space-y-2">
                          <div className="flex items-center gap-2 text-xs text-gray-700">
                            <FaCheckCircle className="w-2.5 md:w-3 h-2.5 md:h-3 text-green-500" />
                            15 biens analysés
                          </div>
                          <div className="flex items-center gap-2 text-xs text-gray-700">
                            <FaCheckCircle className="w-2.5 md:w-3 h-2.5 md:h-3 text-green-500" />
                            4 visites planifiées
                          </div>
                          <div className="flex items-center gap-2 text-xs text-gray-700">
                            <FaCheckCircle className="w-2.5 md:w-3 h-2.5 md:h-3 text-green-500" />
                            2 dossiers préparés
                          </div>
                        </div>
                      </div>
                      
                      {/* Boutons d'action premium - MOBILE OPTIMISÉ */}
                      <div className="space-y-2 md:space-y-3 pt-3 md:pt-4">
                        <button 
                          onClick={() => navigateToPage('/biens-a-louer')}
                          className="w-full bg-gray-900 text-white py-2.5 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm font-medium hover:bg-gray-800 transition-colors duration-300"
                        >
                          Voir les biens trouvés
                        </button>
                        <button 
                          onClick={() => window.open('tel:0953376141', '_self')}
                          className="w-full border border-gray-200 text-gray-700 py-2.5 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm font-medium hover:border-gray-900 hover:text-gray-900 transition-colors duration-300"
                        >
                          Modifier mes critères
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Indicateur home - MOBILE OPTIMISÉ */}
                  <div className="absolute bottom-1.5 md:bottom-2 left-1/2 transform -translate-x-1/2 w-24 md:w-32 h-0.5 md:h-1 bg-white rounded-full opacity-70"></div>
                </div>
              </div>
            </motion.div>

            {/* Étapes Ultra-Clean - MOBILE OPTIMISÉ */}
            <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
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
                  {/* Ligne de connexion - MOBILE OPTIMISÉ */}
                  {index < 4 && (
                    <div className="absolute left-4 md:left-6 top-12 md:top-16 w-px h-12 md:h-16 bg-gradient-to-b from-gray-300 to-transparent"></div>
                  )}
                  
                  <div className="flex items-start gap-4 md:gap-6">
                    {/* Numéro premium - MOBILE OPTIMISÉ */}
                    <div className="relative w-8 md:w-12 h-8 md:h-12 bg-white border-2 border-gray-200 rounded-lg md:rounded-xl flex items-center justify-center text-xs md:text-sm font-bold text-gray-900 shadow-sm flex-shrink-0 z-10">
                      {step.number}
                    </div>
                            
                    {/* Contenu - MOBILE OPTIMISÉ */}
                    <div className="flex-1 pt-1 md:pt-2">
                      <h3 className="text-base md:text-lg lg:text-xl font-light text-gray-900 mb-2 md:mb-3 tracking-wide">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 font-light leading-relaxed text-sm md:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
                        
          {/* Call to Action Ultra-Premium - MOBILE OPTIMISÉ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12 md:mt-20"
          >
            <div className="inline-flex items-center gap-2 md:gap-3 bg-gray-50 border border-gray-200 rounded-full px-4 md:px-6 py-2 md:py-3 mb-6 md:mb-8">
              <FaMobileAlt className="w-3 md:w-4 h-3 md:h-4 text-gray-600" />
              <span className="text-xs md:text-sm font-medium text-gray-700">
                Une application intuitive pour suivre toutes les étapes
              </span>
            </div>
            <button 
              onClick={() => navigateToPage('/biens-a-louer')}
              className="bg-gray-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-medium hover:bg-gray-800 transition-colors duration-300 shadow-lg"
            >
              Démarrer maintenant
            </button>
          </motion.div>
        </div>
      </section>

      {/* Section Services Ultra-Premium - MOBILE OPTIMISÉ - DÉPLACÉE APRÈS PROCESSUS */}
      <section className="py-12 md:py-20 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
          {/* Header Services - MOBILE OPTIMISÉ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.6, 0.01, 0.05, 0.95] }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-16"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-extralight text-gray-900 mb-3 md:mb-4 leading-tight tracking-tight">
              Nos services
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed px-4">
              Nos Solutions
            </p>
            <div className="w-16 md:w-20 h-px bg-gray-900 mx-auto mt-4 md:mt-6"></div>
          </motion.div>

          {/* Services Premium Grid - MOBILE OPTIMISÉ */}
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            {[
              {
                title: "Logement Classique",
                subtitle: "Service",
                description: "Découvrez notre sélection premium de biens résidentiels disponibles à la location",
                cta: "Découvrir",
                gradient: "from-blue-50 to-blue-100",
                icon: <FaHome className="w-5 md:w-6 h-5 md:h-6" />,
                action: () => navigateToPage('/biens-a-louer')
              },
              {
                title: "Logement Social", 
                subtitle: "Service",
                description: "Accédez à des logements à loyer modèré avec un accompagnement personnalisé",
                cta: "Découvrir",
                gradient: "from-green-50 to-green-100",
                icon: <FaUsers className="w-5 md:w-6 h-5 md:h-6" />,
                action: () => window.open('tel:0953376141', '_self')
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
                  className={`bg-gradient-to-br ${service.gradient} rounded-xl md:rounded-2xl p-6 md:p-8 border border-gray-100 hover:border-gray-200 transition-all duration-500 relative overflow-hidden group-hover:shadow-xl`}
                >
                  {/* Badge Service Premium - MOBILE OPTIMISÉ */}
                  <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-3 md:px-4 py-1.5 md:py-2 mb-4 md:mb-6 text-xs md:text-sm font-medium text-gray-700 border border-gray-200/50">
                    {service.icon}
                    <span>{service.subtitle}</span>
                  </div>
                      
                  <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-3 md:mb-4 tracking-wide group-hover:text-gray-800 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed mb-6 md:mb-8 text-sm md:text-lg">
                    {service.description}
                  </p>
                  
                  <motion.button
                    whileHover={{ scale: 1.05, x: 4 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={service.action}
                    className="inline-flex items-center gap-2 md:gap-3 bg-gray-900 text-white px-5 md:px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:gap-4"
                  >
                    <span>{service.cta}</span>
                    <FaArrowRight className="w-3 md:w-4 h-3 md:h-4" />
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Avantages Ultra-Révolutionnaire - MOBILE OPTIMISÉ */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50/30 to-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-32 md:w-64 h-32 md:h-64 bg-blue-100/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/3 w-40 md:w-80 h-40 md:h-80 bg-purple-100/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
          {/* Header Avantages Ultra-Clean - MOBILE OPTIMISÉ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.6, 0.01, 0.05, 0.95] }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-16"
          >
            <motion.h2 
              className="text-2xl md:text-4xl lg:text-5xl font-extralight text-gray-900 mb-3 md:mb-4 leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }}
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
                GREGA ONE COMPANY ?
              </motion.span>
            </motion.h2>
            <motion.div 
              className="w-16 md:w-24 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </motion.div>

          {/* Grille Ultra-Révolutionnaire - MOBILE OPTIMISÉ */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            
            {/* EFFICACITÉ - Version Simple - MOBILE OPTIMISÉ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="p-6 md:p-8 rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200/30 hover:shadow-lg transition-shadow duration-300">
                
                {/* Icône Simple - MOBILE OPTIMISÉ */}
                <div className="w-12 md:w-16 h-12 md:h-16 mx-auto mb-4 md:mb-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg md:text-2xl font-bold">3x</span>
        </div>

                <h3 className="text-lg md:text-2xl font-light text-gray-900 mb-3 md:mb-4">
                  Efficacité Maximale
                </h3>
                <p className="text-gray-700 font-light text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                  IA prédictive : trouvez votre logement 3x plus rapidement
                </p>
                
                <div className="text-xs md:text-sm text-blue-700 font-medium">
                  Performance optimisée
                  </div>
                </div>
            </motion.div>

            {/* SÉCURITÉ - Version Simple - MOBILE OPTIMISÉ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
              className="text-center"
            >
              <div className="p-6 md:p-8 rounded-xl md:rounded-2xl bg-gradient-to-br from-green-50 to-emerald-100 border border-green-200/30 hover:shadow-lg transition-shadow duration-300">
                
                {/* Icône Simple - MOBILE OPTIMISÉ */}
                <div className="w-12 md:w-16 h-12 md:h-16 mx-auto mb-4 md:mb-6 bg-green-500 rounded-full flex items-center justify-center">
                  <FaShieldAlt className="w-6 md:w-8 h-6 md:h-8 text-white" />
            </div>

                <h3 className="text-lg md:text-2xl font-light text-gray-900 mb-3 md:mb-4">
                  Sécurité Absolue
                </h3>
                <p className="text-gray-700 font-light text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                  Protection maximale de vos données et dossiers
                </p>
                
                <div className="text-xs md:text-sm text-green-700 font-medium">
                  Sécurité garantie
                </div>
                </div>
            </motion.div>

            {/* EXCELLENCE - Version Simple - MOBILE OPTIMISÉ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center md:col-span-2 lg:col-span-1"
            >
              <div className="p-6 md:p-8 rounded-xl md:rounded-2xl bg-gradient-to-br from-amber-50 to-orange-100 border border-amber-200/30 hover:shadow-lg transition-shadow duration-300">
                
                {/* Icône Simple - MOBILE OPTIMISÉ */}
                <div className="w-12 md:w-16 h-12 md:h-16 mx-auto mb-4 md:mb-6 bg-amber-500 rounded-full flex items-center justify-center">
                  <FaStar className="w-6 md:w-8 h-6 md:h-8 text-white" />
                </div>

                <h3 className="text-lg md:text-2xl font-light text-gray-900 mb-3 md:mb-4">
                  Excellence Premium
                </h3>
                <p className="text-gray-700 font-light text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                  Service personnalisé avec accompagnement VIP
                </p>
                
                <div className="text-xs md:text-sm text-orange-700 font-medium">
                  +500 clients satisfaits
                </div>
                </div>
            </motion.div>
          </div>

          {/* Section Bonus Simplifiée - MOBILE OPTIMISÉ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 md:mt-20"
          >
            <div className="bg-gray-900 rounded-xl md:rounded-2xl p-6 md:p-8 text-center text-white">
              <h3 className="text-lg md:text-2xl font-light mb-3 md:mb-4">Command Center</h3>
              <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base">Système opérationnel</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
                {[
                  { label: "Recherches actives", value: "127", icon: "🔍" },
                  { label: "Visites planifiées", value: "43", icon: "🏠" },
                  { label: "Dossiers traités", value: "89", icon: "📋" },
                  { label: "Contrats signés", value: "31", icon: "✅" }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-3 md:p-4 bg-gray-800 rounded-lg md:rounded-xl">
                    <div className="text-lg md:text-2xl mb-1 md:mb-2">{stat.icon}</div>
                    <div className="text-lg md:text-2xl font-light text-white mb-1">{stat.value}</div>
                    <p className="text-gray-400 text-xs leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>
              </div>
          </motion.div>
        </div>
      </section>

      {/* Section Statistiques Temps Réel Ultra-Innovante - MOBILE OPTIMISÉ */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50/30 to-gray-100/20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
          {/* Header Stats - MOBILE OPTIMISÉ */}
          <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.6, 0.01, 0.05, 0.95] }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extralight text-gray-900 mb-3 md:mb-4 tracking-tight leading-tight">
              GREGA ONE COMPANY en{' '}
              <span className="font-normal">Temps Réel</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed px-4">
              Nos performances live
            </p>
            <div className="w-12 md:w-16 h-px bg-gray-900 mx-auto mt-4 md:mt-6"></div>
          </motion.div>

          {/* Statistiques Animées - MOBILE OPTIMISÉ */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
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
                  className="p-4 md:p-6 bg-white rounded-lg md:rounded-xl border border-gray-100 hover:border-gray-200 transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                    className={`text-2xl md:text-3xl lg:text-4xl font-light text-${stat.color}-600 mb-1 md:mb-2`}
                  >
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 2, delay: index * 0.1 + 0.5 }}
                    >
                      {stat.number}{stat.suffix}
              </motion.span>
                  </motion.div>
                  <p className="text-gray-600 font-light text-xs md:text-sm leading-tight">{stat.label}</p>
                  
                  {/* Indicateur live - MOBILE OPTIMISÉ */}
                  <div className="flex items-center justify-center gap-1 md:gap-2 mt-2 md:mt-3">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-1.5 md:w-2 h-1.5 md:h-2 bg-green-500 rounded-full"
                    />
                    <span className="text-xs text-gray-500">Live</span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section MacBook Interface GREGA Ultra-Innovante - MOBILE OPTIMISÉ */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50/30 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          {/* Header MacBook - MOBILE OPTIMISÉ */}
                          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.6, 0.01, 0.05, 0.95] }}
          viewport={{ once: true }}
            className="text-center mb-10 md:mb-16"
                          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-extralight text-gray-900 mb-3 md:mb-4 leading-tight tracking-tight">
              Interface{' '}
              <span className="font-normal">Professionnelle</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed px-4">
              Plateforme de recherche intelligente
            </p>
            <div className="w-16 md:w-20 h-px bg-gray-900 mx-auto mt-4 md:mt-6"></div>
                          </motion.div>

          {/* MacBook avec Interface GREGA - MOBILE OPTIMISÉ */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.6, 0.01, 0.05, 0.95] }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            {/* VERSION DESKTOP - MacBook complet - SANS HOVER */}
            <div className="relative hidden lg:block">
              {/* Halo lumineux statique */}
              <div className="absolute -inset-8 bg-gradient-to-r from-gray-100/20 to-gray-200/15 rounded-3xl blur-3xl opacity-30"></div>
              
              {/* MacBook Frame - SANS HOVER */}
              <div className="relative w-[900px] h-[560px] bg-gradient-to-b from-gray-300 via-gray-200 to-gray-300 rounded-[1.5rem] p-4 shadow-2xl">
                {/* Écran MacBook */}
                <div className="w-full h-full bg-black rounded-[1rem] overflow-hidden relative">
                  {/* Barre de menu macOS */}
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                    <div className="text-sm font-medium text-gray-700">GREGA ONE COMPANY - Plateforme Immobilière</div>
                    <div className="w-16"></div>
                  </div>
                  
                  {/* Interface GREGA */}
                  <div className="bg-white h-full p-6">
                    {/* Header Interface */}
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                      <div className="flex items-center gap-4">
                        <div className="text-2xl font-semibold text-gray-900">GREGA ONE COMPANY</div>
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
                          <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                        
                        {/* Biens trouvés */}
                        <div className="space-y-3">
                          <div className="p-3 border border-gray-200 rounded-lg">
                              <div className="flex justify-between items-start">
                                <div>
                                <div className="font-medium text-sm">Rue de la Roquette</div>
                                <div className="text-lg font-semibold text-gray-900">1 450 €</div>
                                </div>
                              <div className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700">
                                Nouveau
                                </div>
                              </div>
                          </div>
                          <div className="p-3 border border-gray-200 rounded-lg">
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="font-medium text-sm">Boulevard Voltaire</div>
                                <div className="text-lg font-semibold text-gray-900">1 650 €</div>
                              </div>
                              <div className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700">
                                Visite prévue
                              </div>
                            </div>
                          </div>
                          <div className="p-3 border border-gray-200 rounded-lg">
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="font-medium text-sm">Rue Oberkampf</div>
                                <div className="text-lg font-semibold text-gray-900">1 380 €</div>
                              </div>
                              <div className="text-xs px-2 py-1 rounded-full bg-orange-100 text-orange-700">
                                Dossier envoyé
                              </div>
                            </div>
                          </div>
          </div>
        </div>
        
                      {/* Colonne droite - Actions */}
                      <div className="space-y-4">
                        <h3 className="font-semibold text-gray-900">Actions rapides</h3>
                        <div className="space-y-3">
                          <button 
                            onClick={() => window.open('https://calendly.com/contact-gregaonecompany/consultation', '_blank')}
                            className="w-full p-3 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors duration-300"
                          >
                            Planifier visite
                          </button>
                          <button 
                            onClick={() => navigateToPage('/biens-a-louer')}
                            className="w-full p-3 border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:border-gray-900 hover:text-gray-900 transition-colors duration-300"
                          >
                            Affiner recherche
                          </button>
                          
                          {/* Notifications temps réel */}
                          <div className="mt-6 space-y-2">
                            <div className="text-sm font-medium text-gray-900 mb-3">Notifications</div>
                            <div className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg text-sm">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <span className="text-blue-900">3 nouveaux biens</span>
                          </div>
                            <div className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg text-sm">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <span className="text-blue-900">Visite confirmée</span>
                            </div>
                            <div className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg text-sm">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <span className="text-blue-900">Dossier accepté</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Base MacBook */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-64 h-4 bg-gradient-to-b from-gray-300 to-gray-400 rounded-b-xl"></div>
              </div>
            </div>

            {/* VERSION MOBILE - Interface simplifiée - MOBILE OPTIMISÉ */}
            <div className="lg:hidden w-full max-w-xs mx-auto">
              {/* Téléphone Frame - MOBILE OPTIMISÉ */}
              <div className="relative bg-gradient-to-b from-gray-800 via-gray-700 to-gray-800 rounded-[1.5rem] md:rounded-[2rem] p-1.5 md:p-2 shadow-2xl">
                {/* Écran téléphone */}
                <div className="w-full bg-black rounded-[1.25rem] md:rounded-[1.5rem] overflow-hidden relative">
                  {/* Barre de statut mobile - MOBILE OPTIMISÉ */}
                  <div className="flex items-center justify-between px-3 md:px-4 py-1.5 md:py-2 bg-gray-900 text-white">
                    <div className="text-xs">9:41</div>
                    <div className="text-xs font-medium">GREGA ONE COMPANY</div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 md:w-4 h-1.5 md:h-2 border border-white rounded-sm">
                        <div className="w-2 md:w-3 h-0.5 md:h-1 bg-green-500 rounded-sm"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Interface GREGA Mobile - MOBILE OPTIMISÉ */}
                  <div className="bg-white p-3 md:p-4 space-y-3 md:space-y-4" style={{ minHeight: '400px' }}>
                    {/* Header Mobile - MOBILE OPTIMISÉ */}
                    <div className="flex items-center justify-between pb-2 md:pb-3 border-b border-gray-100">
                      <div>
                        <div className="text-base md:text-lg font-semibold text-gray-900">GREGA ONE COMPANY</div>
                        <div className="text-xs text-gray-500">Dashboard</div>
                      </div>
                      <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-green-500 rounded-full"></div>
                    </div>
                    
                    {/* Critères Mobile - MOBILE OPTIMISÉ */}
                    <div className="space-y-2 md:space-y-3">
                      <h3 className="text-xs md:text-sm font-semibold text-gray-900">Critères</h3>
                      <div className="grid grid-cols-2 gap-1.5 md:gap-2">
                        <div className="p-1.5 md:p-2 bg-gray-50 rounded-md md:rounded-lg">
                          <div className="text-xs text-gray-600">Budget</div>
                          <div className="text-xs md:text-sm font-medium">1 200-1 800€</div>
                        </div>
                        <div className="p-1.5 md:p-2 bg-blue-50 rounded-md md:rounded-lg border border-blue-200">
                          <div className="text-xs text-blue-600">Type</div>
                          <div className="text-xs md:text-sm font-medium text-blue-900">2 pièces</div>
                        </div>
                      </div>
                      <div className="p-1.5 md:p-2 bg-gray-50 rounded-md md:rounded-lg">
                        <div className="text-xs text-gray-600">Zone</div>
                        <div className="text-xs md:text-sm font-medium">Paris 11ème</div>
                      </div>
                    </div>
                    
                    {/* Résultats Mobile - MOBILE OPTIMISÉ */}
                    <div className="space-y-2 md:space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xs md:text-sm font-semibold text-gray-900">Résultats</h3>
                        <div className="w-2.5 md:w-3 h-2.5 md:h-3 border border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                      </div>
                      
                      {/* Biens Mobile - MOBILE OPTIMISÉ */}
                      <div className="space-y-1.5 md:space-y-2">
                        <div className="p-1.5 md:p-2 border border-gray-200 rounded-md md:rounded-lg">
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="text-xs font-medium">Rue de la Roquette</div>
                              <div className="text-sm font-semibold text-gray-900">1 450€</div>
                            </div>
                            <div className="text-xs px-1.5 py-0.5 rounded-full bg-green-100 text-green-700">
                              Nouveau
                            </div>
                          </div>
                        </div>
                        <div className="p-1.5 md:p-2 border border-gray-200 rounded-md md:rounded-lg">
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="text-xs font-medium">Boulevard Voltaire</div>
                              <div className="text-sm font-semibold text-gray-900">1 650€</div>
                            </div>
                            <div className="text-xs px-1.5 py-0.5 rounded-full bg-blue-100 text-blue-700">
                              Visite prévue
                            </div>
                          </div>
                        </div>
                        <div className="p-1.5 md:p-2 border border-gray-200 rounded-md md:rounded-lg">
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="text-xs font-medium">Rue Oberkampf</div>
                              <div className="text-sm font-semibold text-gray-900">1 380€</div>
                            </div>
                            <div className="text-xs px-1.5 py-0.5 rounded-full bg-orange-100 text-orange-700">
                              Dossier envoyé
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Actions Mobile - MOBILE OPTIMISÉ */}
                    <div className="space-y-1.5 md:space-y-2">
                      <h3 className="text-xs md:text-sm font-semibold text-gray-900">Actions</h3>
                      <div className="grid grid-cols-2 gap-1.5 md:gap-2">
                        <button 
                          onClick={() => window.open('https://calendly.com/contact-gregaonecompany/consultation', '_blank')}
                          className="p-1.5 md:p-2 bg-gray-900 text-white rounded-md md:rounded-lg text-xs font-medium hover:bg-gray-800 transition-colors duration-300"
                        >
                          Planifier visite
                        </button>
                        <button 
                          onClick={() => navigateToPage('/biens-a-louer')}
                          className="p-1.5 md:p-2 border border-gray-200 text-gray-700 rounded-md md:rounded-lg text-xs font-medium hover:border-gray-900 hover:text-gray-900 transition-colors duration-300"
                        >
                          Affiner recherche
                        </button>
                      </div>
                    </div>
                    
                    {/* Notifications Mobile - MOBILE OPTIMISÉ */}
                    <div className="space-y-1.5 md:space-y-2">
                      <div className="text-xs md:text-sm font-medium text-gray-900">Notifications</div>
                      <div className="flex items-center gap-1.5 md:gap-2 p-1.5 md:p-2 bg-blue-50 rounded-md md:rounded-lg">
                        <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-blue-500 rounded-full"></div>
                        <span className="text-xs text-blue-900">3 nouveaux biens</span>
                      </div>
                      <div className="flex items-center gap-1.5 md:gap-2 p-1.5 md:p-2 bg-blue-50 rounded-md md:rounded-lg">
                        <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-blue-500 rounded-full"></div>
                        <span className="text-xs text-blue-900">Visite confirmée</span>
                      </div>
                      <div className="flex items-center gap-1.5 md:gap-2 p-1.5 md:p-2 bg-blue-50 rounded-md md:rounded-lg">
                        <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-blue-500 rounded-full"></div>
                        <span className="text-xs text-blue-900">Dossier accepté</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Profils Ultra-Originale avec Tablettes Interactives */}
      <section className="py-32 bg-gradient-to-b from-gray-50/30 to-white relative overflow-hidden">
        {/* Background épuré avec particules subtiles OPTIMISÉES */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gray-100/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gray-200/10 rounded-full blur-3xl"></div>
          
          {/* Particules flottantes réduites et simplifiées */}
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gray-300/20 rounded-full"
              style={{
                left: `${30 + i * 20}%`,
                top: `${40 + (i % 2) * 20}%`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header Ultra-Clean */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-6 leading-tight tracking-tight">
              À qui s'adressent{' '}
              <span className="font-normal">nos services</span>
              <span className="text-gray-900"> ?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Solutions adaptées à tous profils
            </p>
            <div className="w-24 h-px bg-gray-900 mx-auto mt-8"></div>
          </motion.div>

          {/* Tablettes Interactives Ultra-Originales */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {[
              {
                title: "Particuliers",
                subtitle: "IA Personnalisée",
                description: "Notre intelligence artificielle s'adapte à votre profil unique",
                features: ["Recherche automatisée", "Dossier optimisé", "Suivi 24/7"],
                cta: "Démarrer",
                color: "blue",
                icon: "👤",
                stats: "2.4k users",
                action: () => navigateToPage('/biens-a-louer')
              },
              {
                title: "Entreprises", 
                subtitle: "Solution RH",
                description: "Révolutionnez l'intégration de vos talents",
                features: ["Relocation express", "Marque employeur", "Support dédié"],
                cta: "Découvrir",
                color: "purple",
                icon: "🏢",
                stats: "150+ entreprises",
                action: () => window.open('mailto:contact@gregaonecompany.fr', '_self')
              },
              {
                title: "Écoles & Universités",
                subtitle: "Innovation Académique",
                description: "Plateforme intelligente pour vos étudiants",
                features: ["Accueil automatisé", "Intégration rapide", "Suivi personnalisé"],
                cta: "Innover",
                color: "green",
                icon: "🎓",
                stats: "30+ établissements",
                action: () => window.open('tel:0953376141', '_self')
              }
            ].map((profile, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2, ease: [0.6, 0.01, 0.05, 0.95] }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Tablette Frame - OPTIMISÉE SANS HOVER */}
                <div className="relative">
                  {/* Halo lumineux statique */}
                  <div className={`absolute -inset-6 bg-gradient-to-r rounded-3xl blur-2xl opacity-20 ${
                    profile.color === 'blue' ? 'from-blue-100/20 to-blue-200/20' :
                    profile.color === 'purple' ? 'from-purple-100/20 to-purple-200/20' :
                    'from-green-100/20 to-green-200/20'
                  }`} />
                  
                  {/* Tablette principale - STATIQUE */}
                  <div className="relative w-full h-[600px] bg-gradient-to-b from-gray-800 via-gray-700 to-gray-800 rounded-[2rem] p-3 shadow-2xl">
                    {/* Écran tactile */}
                    <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden relative flex flex-col">
                      {/* Barre de statut simplifiée */}
                      <div className="flex items-center justify-between px-6 py-3 bg-gray-50 border-b border-gray-100 flex-shrink-0">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full" />
                          <span className="text-sm font-medium text-gray-700">GREGA ONE COMPANY</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500">Interface Pro</span>
                          <div className={`w-2 h-2 rounded-full ${
                            profile.color === 'blue' ? 'bg-blue-500' :
                            profile.color === 'purple' ? 'bg-purple-500' :
                            'bg-green-500'
                          }`} />
                        </div>
                      </div>
                      
                      {/* Contenu de l'interface */}
                      <div className="p-6 flex-1 flex flex-col">
                        {/* Header avec icône et stats */}
                        <div className="text-center mb-6">
                          <div className="text-4xl mb-3">
                        {profile.icon}
                          </div>
                          <h3 className="text-xl font-light text-gray-900">{profile.title}</h3>
                          <p className={`text-sm font-medium mt-1 ${
                            profile.color === 'blue' ? 'text-blue-600' :
                            profile.color === 'purple' ? 'text-purple-600' :
                            'text-green-600'
                          }`}>
                            {profile.subtitle}
                          </p>
                          {/* Stats statiques */}
                          <div className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium ${
                            profile.color === 'blue' ? 'bg-blue-50 text-blue-700' :
                            profile.color === 'purple' ? 'bg-purple-50 text-purple-700' :
                            'bg-green-50 text-green-700'
                          }`}>
                            {profile.stats}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 text-sm leading-relaxed mb-6 text-center">
                          {profile.description}
                        </p>

                        {/* Features simplifiées */}
                        <div className="space-y-3 mb-6 flex-1">
                          {profile.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl"
                            >
                              <div className={`w-2 h-2 rounded-full ${
                                profile.color === 'blue' ? 'bg-blue-500' :
                                profile.color === 'purple' ? 'bg-purple-500' :
                                'bg-green-500'
                              }`} />
                              <span className="text-sm text-gray-700">
                                {feature}
                              </span>
                </div>
                          ))}
                    </div>
                    
                        {/* Bouton CTA simplifié */}
                        <div className="mt-auto">
                          <button 
                            onClick={profile.action}
                            className={`w-full py-4 rounded-xl text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 ${
                              profile.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700' :
                              profile.color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700' :
                              'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700'
                            }`}
                          >
                            {profile.cta}
                          </button>

                          {/* Indicateur de progression statique */}
                          <div className="mt-4 text-center">
                            <div className="flex justify-center gap-1">
                              {[...Array(3)].map((_, dotIndex) => (
                                <div
                                  key={dotIndex}
                                  className={`w-2 h-2 rounded-full ${
                                    dotIndex === index 
                                      ? (profile.color === 'blue' ? 'bg-blue-500' :
                                         profile.color === 'purple' ? 'bg-purple-500' :
                                         'bg-green-500')
                                      : 'bg-gray-300'
                                  }`}
                                />
                              ))}
                    </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Reflets statiques */}
                  <div className="absolute inset-3 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-[1.5rem] pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Message de fermeture épuré */}
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-600 font-light">
              Une technologie adaptée à chaque profil
            </p>
            <motion.div
              className="w-16 h-px bg-gray-400 mx-auto mt-4"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              transition={{ duration: 1, delay: 1.2 }}
            />
          </motion.div>
        </div>

        {/* CSS pour la perspective */}
        <style jsx>{`
          .perspective-1000 {
            perspective: 1000px;
          }
        `}</style>
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
                message: "Dossier accepté du premier coup grâce à GREGA ONE COMPANY ✨",
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
                <h3 className="text-2xl font-light mb-2">+500 clients satisfaits</h3>
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