import { motion, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion'
import { FaCheck, FaArrowRight, FaUserFriends, FaBuilding, FaGraduationCap, FaStar, FaRegLightbulb } from 'react-icons/fa'
import Footer from '../components/Footer'
import { useEffect, useState, useRef } from 'react'

const Services = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  // Mouse tracking avec spring pour fluidité ultra-douce
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springMouseX = useSpring(mouseX, { stiffness: 150, damping: 30 });
  const springMouseY = useSpring(mouseY, { stiffness: 150, damping: 30 });
  
  // Transformations scroll ultra-fluides
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);
  const backgroundScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.05]);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile && sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        
        setMousePosition({ x, y });
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    if (!isMobile) {
    window.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile, mouseX, mouseY]);

  // Liste des fonctionnalités avec style quantique révolutionnaire
  const serviceFeatures = [
    "Architecture quantique de recherche avec IA neuronale avancée",
    "Optimisation holistique et révolutionnaire de votre dossier locatif",
    "Chasseur locatif dédié avec intelligence artificielle prédictive",
    "Réseau exclusif d'algorithmes immobiliers et partenaires premium",
    "Planification intelligente ultra-optimisée avec trajets quantiques",
    "Négociations automatisées via IA comportementale avancée",
    "Accompagnement complet avec signature digitale révolutionnaire"
  ];

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* Curseur custom ultra-révolutionnaire */}
      {!isMobile && (
        <motion.div
          className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-[9999] mix-blend-difference"
          style={{ 
            x: springMouseX,
            y: springMouseY,
            translateX: "-50%",
            translateY: "-50%"
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-400/80 via-violet-400/60 to-pink-400/80 backdrop-blur-sm" />
          <div className="absolute inset-1 rounded-full bg-white/20 animate-pulse" />
          <div className="absolute inset-2 rounded-full bg-white/10 animate-ping" />
        </motion.div>
      )}

      {/* Section principale ultra-révolutionnaire */}
      <motion.section 
        ref={sectionRef} 
        className="relative py-40 bg-black overflow-hidden"
        style={{
          opacity: backgroundOpacity,
          scale: backgroundScale
          }}
      >
        {/* Background quantique ultra-sophistiqué avec layers multiples */}
        <div className="absolute inset-0">
          {/* Grille fractale tri-dimensionnelle */}
          <div 
            className="absolute inset-0 opacity-[0.002] pointer-events-none"
            style={{ 
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.05) 0.5px, transparent 0.5px),
                linear-gradient(90deg, rgba(147, 51, 234, 0.03) 0.5px, transparent 0.5px),
                linear-gradient(45deg, rgba(236, 72, 153, 0.02) 0.25px, transparent 0.25px)
              `,
              backgroundSize: '60px 60px, 60px 60px, 30px 30px'
            }}
          />
        
          {/* Grille quantique micro-détaillée */}
          <div 
            className="absolute inset-0 opacity-[0.0008] pointer-events-none"
            style={{ 
              backgroundImage: `
                radial-gradient(circle, rgba(255, 255, 255, 0.15) 0.5px, transparent 0.5px),
                radial-gradient(circle, rgba(59, 130, 246, 0.1) 0.25px, transparent 0.25px)
              `,
              backgroundSize: '12px 12px, 8px 8px'
            }}
          />
          
          {/* Effet holographique triple-couche révolutionnaire */}
          {!isMobile && (
            <>
              <motion.div 
                className="absolute inset-0 opacity-[0.08] pointer-events-none"
                style={{
                  background: `
                    radial-gradient(1400px circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
                    rgba(59, 130, 246, 0.04), rgba(147, 51, 234, 0.02), transparent 75%)
                  `,
                  transition: 'background 5s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              />
              
              <motion.div 
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{
                  background: `
                    radial-gradient(1000px circle at ${(1-mousePosition.x) * 100}% ${(1-mousePosition.y) * 100}%, 
                    rgba(147, 51, 234, 0.035), rgba(236, 72, 153, 0.02), transparent 65%)
                  `,
                  transition: 'background 4s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              />
              
              <motion.div 
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
                  background: `
                    radial-gradient(800px circle at ${mousePosition.x * 50 + 25}% ${mousePosition.y * 50 + 25}%, 
                    rgba(236, 72, 153, 0.03), rgba(59, 130, 246, 0.015), transparent 55%)
                  `,
                  transition: 'background 3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              />
            </>
          )}
          
          {/* Champ énergétique quantique */}
          <div className="absolute top-10 left-1/5 w-[600px] h-[600px] bg-blue-500/[0.008] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-1/5 w-[500px] h-[500px] bg-violet-500/[0.012] rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-pink-500/[0.008] rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-white/[0.003] to-transparent rounded-full blur-3xl"></div>
      </div>

        {/* Ligne décorative supérieure quantique avec pulsation */}
        <motion.div 
          initial={{ scaleX: 0, opacity: 0 }} 
          whileInView={{ scaleX: 1, opacity: 1 }} 
          transition={{ duration: 3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute top-0 left-0 right-0 h-[0.5px] bg-gradient-to-r from-transparent via-blue-400/30 via-violet-400/40 via-pink-400/30 to-transparent"
        />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          {/* Header ultra-révolutionnaire */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-150px" }}
            className="text-center mb-32"
          >
            {/* Badge quantique avec effet de respiration */}
            <motion.div 
              className="inline-flex items-center gap-4 px-8 py-3 border border-white/[0.12] text-white/70 rounded-full text-xs tracking-[0.25em] uppercase mb-12 backdrop-blur-3xl bg-gradient-to-r from-white/[0.03] to-white/[0.008] relative overflow-hidden group"
              whileHover={{ 
                borderColor: "rgba(255, 255, 255, 0.25)",
                scale: 1.05
              }}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(59, 130, 246, 0)",
                  "0 0 30px rgba(59, 130, 246, 0.1)",
                  "0 0 20px rgba(147, 51, 234, 0.1)",
                  "0 0 30px rgba(236, 72, 153, 0.1)",
                  "0 0 20px rgba(59, 130, 246, 0)"
                ]
              }}
              transition={{ 
                boxShadow: { duration: 8, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/8 via-violet-500/6 to-pink-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-1500"></div>
              <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full animate-pulse"></div>
              <span className="relative z-10 font-thin">Services • Immobiliers • Révolutionnaires</span>
              <div className="w-1.5 h-1.5 bg-gradient-to-r from-violet-400 to-pink-400 rounded-full animate-pulse delay-1000"></div>
            </motion.div>
            
            {/* Titre ultra-révolutionnaire avec effet holographique */}
            <div className="relative">
              {/* Effet holographique continu sur le titre */}
              <motion.div
                className="absolute inset-0 text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-thin tracking-[-0.04em] leading-tight"
              style={{
                  background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.12), rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.08))',
                WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'blur(2px)'
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: 'linear'
              }}
            >
                <div className="block leading-tight">Nos</div>
                <div className="block leading-tight">Services</div>
              </motion.div>
              
              {/* Titre principal avec animations échelonnées */}
              <h1 className="relative text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-thin tracking-[-0.04em] mb-12 leading-tight">
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.4 }}
                  className="block text-white/95 leading-tight"
                  viewport={{ once: true }}
                >
                  Nos
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.8 }}
                  className="block bg-gradient-to-r from-blue-300 via-violet-300 to-pink-300 bg-clip-text text-transparent leading-tight"
                  viewport={{ once: true }}
                >
                  Services
                </motion.div>
              </h1>
              </div>
            
            {/* Description ultra-épurée avec effet de typing */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-xl md:text-2xl text-white/60 font-thin max-w-5xl mx-auto leading-relaxed"
              viewport={{ once: true }}
            >
              Découvrez nos{' '}
              <span className="bg-gradient-to-r from-blue-400/80 to-violet-400/80 bg-clip-text text-transparent">
                solutions immobilières quantiques
              </span>{' '}
              sur mesure, conçues pour répondre à tous vos besoins{' '}
              <span className="text-white/40"> avec un service premium et une intelligence artificielle révolutionnaire</span>
            </motion.p>
            
            {/* Ligne de séparation quantique animée */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "70%" }}
              transition={{ duration: 3, delay: 1.6 }}
              viewport={{ once: true }}
              className="h-[0.5px] bg-gradient-to-r from-transparent via-white/30 to-transparent mt-12 mx-auto"
            />
            </motion.div>
          
          {/* Grille des services ultra-révolutionnaire */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-40">
            {/* Service Logement Classique - Design révolutionnaire */}
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.9, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              transition={{ 
                duration: 1.8, 
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1]
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative"
              onHoverStart={() => setActiveCard(0)}
              onHoverEnd={() => setActiveCard(null)}
            >
              {/* Halo énergétique externe */}
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-r from-blue-500/[0.15] via-blue-600/[0.08] to-blue-500/[0.15] rounded-3xl blur-2xl opacity-0 group-hover:opacity-100"
                transition={{ duration: 1.5 }}
              />
              
              {/* Carte principale ultra-sophistiquée */}
              <div className="relative rounded-3xl overflow-hidden backdrop-blur-3xl border border-white/[0.06] bg-gradient-to-br from-slate-900/70 via-slate-800/50 to-slate-900/70 hover:border-blue-400/[0.25] transition-all duration-1500 hover:shadow-2xl group-hover:shadow-blue-500/20">
                
                {/* Effet holographique multicouche */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.12] via-blue-600/[0.06] to-blue-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-1800 rounded-3xl"></div>
                
                {/* Effet de scan quantique révolutionnaire */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/[0.08] via-white/[0.03] via-blue-400/[0.08] to-transparent -translate-x-full"
                  whileHover={{ translateX: "200%" }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                />
                
                {/* Particules flottantes internes */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <div className="absolute top-6 right-8 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
                  <div className="absolute bottom-8 left-6 w-0.5 h-0.5 bg-white/60 rounded-full animate-pulse delay-700"></div>
                  <div className="absolute top-1/3 right-1/4 w-0.5 h-0.5 bg-blue-300 rounded-full animate-pulse delay-1000"></div>
                </div>
                
                {/* Contenu ultra-raffiné */}
                <div className="relative z-10 p-10 lg:p-14">
                  {/* Header du service révolutionnaire */}
                  <div className="flex items-center gap-6 mb-10">
                    <motion.div 
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="relative flex-shrink-0"
                    >
                      <div className="w-18 h-18 rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/[0.12] flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-all duration-1000 shadow-2xl backdrop-blur-xl">
                        {/* Halo quantique multiple */}
                        <div className="absolute inset-0 bg-blue-400/15 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                        <div className="absolute inset-0 bg-blue-300/10 blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-800 scale-125"></div>
                        <div className="relative z-10 text-blue-400 group-hover:text-blue-300 transition-colors duration-700">
                          <FaBuilding className="w-7 h-7" />
                        </div>
                        
                        {/* Système de particules orbitales */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-1000">
                          <motion.div 
                            className="absolute top-2 right-2 w-1.5 h-1.5 bg-white rounded-full"
                            animate={{ opacity: [0.6, 1, 0.6] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          <motion.div 
                            className="absolute bottom-3 left-3 w-1 h-1 bg-blue-300/70 rounded-full"
                            animate={{ opacity: [0.4, 0.9, 0.4] }}
                            transition={{ duration: 2.5, repeat: Infinity, delay: 0.8 }}
                          />
                        </div>
                      </div>
                    </motion.div>
                    
                    <div>
                      <div className="text-white/50 text-sm font-thin tracking-[0.25em] uppercase mb-2">Service Premium</div>
                      <h3 className="text-3xl lg:text-4xl font-thin text-white/95 group-hover:text-white transition-colors duration-700 tracking-tight leading-tight">
                        Logement Classique
                      </h3>
                    </div>
                  </div>
                  
                  {/* Description évoluée */}
                  <p className="text-white/70 font-thin text-xl leading-relaxed mb-10 group-hover:text-white/85 transition-colors duration-700">
                    Découvrez notre sélection{' '}
                    <span className="bg-gradient-to-r from-blue-400/80 to-blue-300/80 bg-clip-text text-transparent">
                      premium quantique
                    </span>{' '}
                    de biens résidentiels avec un accompagnement IA révolutionnaire
                  </p>
                  
                  {/* Ligne de séparation quantique évoluée */}
                  <div className="w-full h-[0.5px] bg-gradient-to-r from-white/8 via-white/25 to-white/8 mb-10 group-hover:from-blue-400/30 group-hover:via-blue-400/60 group-hover:to-blue-400/30 transition-all duration-1500" />
                  
                  {/* Fonctionnalités avec animations sophistiquées */}
                  <div className="space-y-5 mb-12">
                    {serviceFeatures.slice(0, 4).map((feature, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.15 }}
                  viewport={{ once: true }}
                        className="flex items-start gap-4 text-white/60 font-thin text-base group/item"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="mt-1"
                    >
                          <FaCheck className="text-blue-400/70 w-4 h-4 flex-shrink-0 transition-colors duration-500 group-hover/item:text-blue-400" />
                        </motion.div>
                        <span className="transition-colors duration-500 group-hover/item:text-white/80">{feature}</span>
                      </motion.div>
                  ))}
                  </div>
                
                  {/* CTA révolutionnaire */}
                  <motion.button
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group/btn relative px-10 py-5 bg-gradient-to-r from-white/[0.05] to-white/[0.02] border border-white/[0.12] text-white font-thin rounded-3xl backdrop-blur-xl hover:border-blue-400/[0.3] transition-all duration-700 overflow-hidden w-full"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/[0.15] via-blue-400/[0.08] to-blue-500/[0.15] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-700"
                    />
                    <span className="relative z-10 flex items-center justify-center gap-4 text-lg">
                      Découvrir l'Innovation
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <FaArrowRight className="w-5 h-5" />
                      </motion.div>
                    </span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
            
            {/* Service Logement Social - Design révolutionnaire */}
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.9, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              transition={{ 
                duration: 1.8, 
                delay: 0.6,
                ease: [0.22, 1, 0.36, 1]
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative"
              onHoverStart={() => setActiveCard(1)}
              onHoverEnd={() => setActiveCard(null)}
            >
              {/* Halo énergétique externe */}
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-r from-violet-500/[0.15] via-purple-600/[0.08] to-violet-500/[0.15] rounded-3xl blur-2xl opacity-0 group-hover:opacity-100"
                transition={{ duration: 1.5 }}
              />
              
              {/* Carte principale ultra-sophistiquée */}
              <div className="relative rounded-3xl overflow-hidden backdrop-blur-3xl border border-white/[0.06] bg-gradient-to-br from-slate-900/70 via-slate-800/50 to-slate-900/70 hover:border-violet-400/[0.25] transition-all duration-1500 hover:shadow-2xl group-hover:shadow-violet-500/20">
                
                {/* Effet holographique multicouche */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.12] via-purple-600/[0.06] to-violet-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-1800 rounded-3xl"></div>
                
                {/* Effet de scan quantique révolutionnaire */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-400/[0.08] via-white/[0.03] via-violet-400/[0.08] to-transparent -translate-x-full"
                  whileHover={{ translateX: "200%" }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                />
                
                {/* Particules flottantes internes */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <div className="absolute top-6 right-8 w-1 h-1 bg-violet-400 rounded-full animate-ping"></div>
                  <div className="absolute bottom-8 left-6 w-0.5 h-0.5 bg-white/60 rounded-full animate-pulse delay-700"></div>
                  <div className="absolute top-1/3 right-1/4 w-0.5 h-0.5 bg-violet-300 rounded-full animate-pulse delay-1000"></div>
                </div>
                
                {/* Contenu ultra-raffiné */}
                <div className="relative z-10 p-10 lg:p-14">
                  {/* Header du service révolutionnaire */}
                  <div className="flex items-center gap-6 mb-10">
                    <motion.div 
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="relative flex-shrink-0"
                    >
                      <div className="w-18 h-18 rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/[0.12] flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-all duration-1000 shadow-2xl backdrop-blur-xl">
                        {/* Halo quantique multiple */}
                        <div className="absolute inset-0 bg-violet-400/15 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                        <div className="absolute inset-0 bg-violet-300/10 blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-800 scale-125"></div>
                        <div className="relative z-10 text-violet-400 group-hover:text-violet-300 transition-colors duration-700">
                          <FaUserFriends className="w-7 h-7" />
                        </div>
                        
                        {/* Système de particules orbitales */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-1000">
                          <motion.div 
                            className="absolute top-2 right-2 w-1.5 h-1.5 bg-white rounded-full"
                            animate={{ opacity: [0.6, 1, 0.6] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          <motion.div 
                            className="absolute bottom-3 left-3 w-1 h-1 bg-violet-300/70 rounded-full"
                            animate={{ opacity: [0.4, 0.9, 0.4] }}
                            transition={{ duration: 2.5, repeat: Infinity, delay: 0.8 }}
                          />
                        </div>
                      </div>
                    </motion.div>
                    
                    <div>
                      <div className="text-white/50 text-sm font-thin tracking-[0.25em] uppercase mb-2">Service Innovant</div>
                      <h3 className="text-3xl lg:text-4xl font-thin text-white/95 group-hover:text-white transition-colors duration-700 tracking-tight leading-tight">
                        Logement Social
                      </h3>
                    </div>
                  </div>
                  
                  {/* Description évoluée */}
                  <p className="text-white/70 font-thin text-xl leading-relaxed mb-10 group-hover:text-white/85 transition-colors duration-700">
                    Accédez à des logements{' '}
                    <span className="bg-gradient-to-r from-violet-400/80 to-violet-300/80 bg-clip-text text-transparent">
                      sociaux révolutionnaires
                    </span>{' '}
                    avec un accompagnement personnalisé et une approche quantique
                  </p>
                  
                  {/* Ligne de séparation quantique évoluée */}
                  <div className="w-full h-[0.5px] bg-gradient-to-r from-white/8 via-white/25 to-white/8 mb-10 group-hover:from-violet-400/30 group-hover:via-violet-400/60 group-hover:to-violet-400/30 transition-all duration-1500" />
                  
                  {/* Fonctionnalités avec animations sophistiquées */}
                  <div className="space-y-5 mb-12">
                    {serviceFeatures.slice(3, 7).map((feature, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.15 }}
                  viewport={{ once: true }}
                        className="flex items-start gap-4 text-white/60 font-thin text-base group/item"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="mt-1"
                    >
                          <FaCheck className="text-violet-400/70 w-4 h-4 flex-shrink-0 transition-colors duration-500 group-hover/item:text-violet-400" />
                        </motion.div>
                        <span className="transition-colors duration-500 group-hover/item:text-white/80">{feature}</span>
                      </motion.div>
                  ))}
                  </div>
                
                  {/* CTA révolutionnaire */}
                  <motion.button
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group/btn relative px-10 py-5 bg-gradient-to-r from-white/[0.05] to-white/[0.02] border border-white/[0.12] text-white font-thin rounded-3xl backdrop-blur-xl hover:border-violet-400/[0.3] transition-all duration-700 overflow-hidden w-full"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-violet-500/[0.15] via-violet-400/[0.08] to-violet-500/[0.15] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-700"
                    />
                    <span className="relative z-10 flex items-center justify-center gap-4 text-lg">
                      Découvrir l'Innovation
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <FaArrowRight className="w-5 h-5" />
                      </motion.div>
                    </span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Transition finale ultra-épurée */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-24"
          >
            <p className="text-4xl md:text-5xl lg:text-6xl font-thin text-white/95 leading-relaxed">
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
                L'avenir de l'immobilier
              </span>
              <br />
              <span className="text-white/70">commence ici</span>
            </p>
          </motion.div>
        </div>
        
        {/* Particules quantiques ultra-avancées */}
        {!isMobile && (
          <>
            <motion.div
              className="absolute top-[15%] left-[8%] w-24 h-24 rounded-full border border-white/[0.006] bg-white/[0.001]"
              animate={{ 
                y: [0, -20, 0],
                opacity: [0.08, 0.25, 0.08],
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.div
              className="absolute bottom-[20%] right-[10%] w-18 h-18 rounded-full border border-white/[0.008] bg-white/[0.002]"
              animate={{ 
                y: [0, 15, 0],
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.15, 1],
                rotate: [360, 180, 0]
              }}
              transition={{ 
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
            
            <motion.div
              className="absolute top-[60%] left-[5%] w-12 h-12 rounded-full border border-white/[0.01] bg-white/[0.003]"
              animate={{ 
                y: [0, -10, 0],
                opacity: [0.15, 0.4, 0.15],
                scale: [1, 1.2, 1],
                rotate: [0, 360, 0]
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </>
        )}
      </motion.section>
      
      <Footer />
    </div>
  );
};

export default Services; 