import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { FaCheck, FaDownload, FaPhone, FaEnvelope, FaMapMarkerAlt, FaShieldAlt, FaUserCheck, FaClock, FaHandshake, FaArrowRight, FaTimes, FaKey, FaStar, FaBuilding } from 'react-icons/fa';
import Footer from '../components/Footer';

const Proprietaires = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  // Mouse tracking avec spring pour fluidité
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springMouseX = useSpring(mouseX, { stiffness: 150, damping: 30 });
  const springMouseY = useSpring(mouseY, { stiffness: 150, damping: 30 });
  
  // Transformations scroll ultra-fluides
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.98]);
  const heroBlur = useTransform(scrollYProgress, [0, 0.15], [0, 4]);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile && heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        
        setMousePosition({ x, y });
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }
    };
    const handleScroll = () => setScrollY(window.scrollY);

    checkMobile();
    window.addEventListener('resize', checkMobile);
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile, mouseX, mouseY]);

  const problemes = [
    {
      title: "Candidats sans dossier",
      description: "Contacté en permanence par des candidats locataires sans dossier recevable",
      icon: "📱"
    },
    {
      title: "Honoraires coûteux", 
      description: "Devoir payer des honoraires pour trouver un bon locataire",
      icon: "💰"
    },
    {
      title: "Appels incessants",
      description: "Recevoir des appels pendant plusieurs semaines après avoir trouvé un locataire",
      icon: "📞"
    },
    {
      title: "Manque de liberté",
      description: "Ne pas avoir une totale liberté dans la gestion de votre location",
      icon: "🔒"
    }
  ];

  const services = [
    {
      icon: <FaUserCheck />,
      title: "Contrôle rigoureux",
      description: "Vérification approfondie de chaque candidat",
      gradient: "from-blue-500/10 via-indigo-500/5 to-blue-500/10"
    },
    {
      icon: <FaClock />,
      title: "Gain de temps",
      description: "Nous gérons tout le processus de sélection",
      gradient: "from-indigo-500/10 via-purple-500/5 to-indigo-500/10"
    },
    {
      icon: <FaShieldAlt />,
      title: "Sécurité garantie",
      description: "Éligibilité GLI et pass GRL vérifiée",
      gradient: "from-purple-500/10 via-pink-500/5 to-purple-500/10"
    },
    {
      icon: <FaHandshake />,
      title: "Accompagnement",
      description: "Support complet jusqu'à la signature",
      gradient: "from-pink-500/10 via-blue-500/5 to-pink-500/10"
    }
  ];

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* Curseur custom minimaliste */}
      {!isMobile && (
        <motion.div
          className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-[9999] mix-blend-difference"
          style={{
            x: springMouseX,
            y: springMouseY,
            translateX: "-50%",
            translateY: "-50%"
          }}
        >
          <div className="w-full h-full rounded-full bg-white/60 backdrop-blur-sm" />
          <div className="absolute inset-1 rounded-full bg-white/10 animate-pulse" />
        </motion.div>
      )}

      {/* Hero Section Ultra-Épuré */}
      <motion.section 
        ref={heroRef}
        className="relative h-screen w-full overflow-hidden flex items-center justify-center"
        style={{ 
          opacity: heroOpacity,
          scale: heroScale,
          filter: `blur(${heroBlur}px)`
        }}
      >
        {/* Background ultra-subtil */}
        <div className="absolute inset-0">
          {/* Grille ultra-fine */}
          <div 
            className="absolute inset-0 opacity-[0.003] pointer-events-none"
            style={{ 
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.015) 0.5px, transparent 0.5px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.015) 0.5px, transparent 0.5px)
              `,
              backgroundSize: '40px 40px'
            }}
          />
          
          {/* Effet de lumière ultra-subtil */}
          {!isMobile && (
            <motion.div 
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                background: `radial-gradient(1400px circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(59, 130, 246, 0.02), transparent 80%)`,
                transition: 'background 4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            />
          )}
          
          {/* Éléments géométriques minimalistes */}
          <motion.div 
            className="absolute top-[15%] right-[8%] w-[0.5px] h-24 bg-gradient-to-b from-transparent via-white/[0.04] to-transparent"
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 2, delay: 2, ease: [0.4, 0, 0.2, 1] }}
          />
          
          <motion.div 
            className="absolute bottom-[20%] left-[8%] w-16 h-[0.5px] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 2, delay: 2.5, ease: [0.4, 0, 0.2, 1] }}
          />
        </div>

        {/* Contenu Hero centré et équilibré */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          
          {/* Badge ultra-épuré */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/[0.05] bg-white/[0.01] backdrop-blur-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400/40 mr-3 animate-pulse" />
              <span className="text-white/40 text-xs font-light tracking-[0.2em] uppercase">
                Service Propriétaires Premium
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-violet-400/40 ml-3 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </motion.div>
          
          {/* Titre principal épuré */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight text-white leading-[1.1] tracking-[-0.02em] mb-4">
              Propriétaires
            </h1>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-thin bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent leading-[1.1] tracking-[-0.01em]">
              Nouvelle Ère
            </h2>
          </motion.div>
          
          {/* Description équilibrée */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.4, 0, 0.2, 1] }}
            className="mb-10"
          >
            <p className="text-lg md:text-xl text-white/50 font-light leading-relaxed max-w-3xl mx-auto">
              Révolutionnez votre expérience de propriétaire avec notre plateforme d'intelligence artificielle 
              <span className="text-white/70"> dédiée à la sélection de candidats premium</span>
            </p>
          </motion.div>
          
          {/* CTA élégant */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3, ease: [0.4, 0, 0.2, 1] }}
            className="mb-12"
          >
            <motion.button
              className="group relative px-8 py-3 bg-gradient-to-r from-blue-500/10 via-violet-500/10 to-pink-500/10 border border-white/10 rounded-full text-white font-light backdrop-blur-sm overflow-hidden"
              whileHover={{ 
                scale: 1.02,
                borderColor: "rgba(255, 255, 255, 0.15)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/15 via-violet-500/15 to-pink-500/15 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 flex items-center gap-2 text-sm">
                Découvrir l'expérience
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <FaArrowRight className="w-3 h-3" />
                </motion.div>
              </span>
            </motion.button>
          </motion.div>
          
          {/* Métadonnées ultra-épurées */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/25"
          >
            <div className="flex items-center gap-2 text-xs font-light tracking-wide">
              <div className="w-1 h-1 rounded-full bg-blue-400/30" />
              100% Gratuit
            </div>
            <div className="hidden sm:block w-6 h-[0.5px] bg-white/10" />
            <div className="flex items-center gap-2 text-xs font-light tracking-wide">
              <div className="w-1 h-1 rounded-full bg-violet-400/30" />
              Intelligence Artificielle
            </div>
            <div className="hidden sm:block w-6 h-[0.5px] bg-white/10" />
            <div className="flex items-center gap-2 text-xs font-light tracking-wide">
              <div className="w-1 h-1 rounded-full bg-pink-400/30" />
              Service Premium
            </div>
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
              className="w-[0.5px] h-12 bg-gradient-to-b from-white/20 to-transparent mb-2"
            />
            <div className="text-white/20 text-xs font-light tracking-wide uppercase">
              Scroll
            </div>
          </div>
        </motion.div>
        
        {/* Particules ultra-subtiles */}
        {!isMobile && (
          <>
            <motion.div
              className="absolute top-[25%] left-[15%] w-16 h-16 rounded-full border border-white/[0.005] bg-white/[0.001]"
              animate={{ 
                y: [0, -12, 0],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.div
              className="absolute bottom-[30%] right-[10%] w-12 h-12 rounded-full border border-white/[0.008] bg-white/[0.002]"
              animate={{ 
                y: [0, 8, 0],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
          </>
        )}
      </motion.section>

      {/* Section Problèmes - Design Quantique */}
      <section className="py-32 bg-black relative overflow-hidden">
        {/* Background quantique */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/[0.02] via-violet-900/[0.01] to-pink-900/[0.02]" />
          <motion.div 
            className="absolute inset-0 opacity-[0.008]"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}
            animate={{
              backgroundPosition: ['0px 0px', '40px 40px']
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <motion.div 
              className="inline-block mb-6 text-[10px] font-extralight tracking-[0.5em] text-white/30 uppercase relative"
            >
              <span className="absolute -left-12 top-1/2 w-8 h-[0.5px] bg-gradient-to-r from-transparent to-white/15" />
              Problématiques Identifiées
              <span className="absolute -right-12 top-1/2 w-8 h-[0.5px] bg-gradient-to-l from-transparent to-white/15" />
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-thin text-white mb-8 tracking-[-0.02em] leading-tight">
              Fini les{' '}
              <span className="bg-gradient-to-r from-red-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                complications
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/30 font-extralight max-w-4xl mx-auto leading-relaxed">
              Notre intelligence artificielle élimine les frictions traditionnelles
            </p>
          </motion.div>

          {/* Grid des problèmes ultra-moderne */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto mb-24">
            {[
              {
                title: "Candidats non qualifiés",
                description: "Élimination automatique des dossiers incomplets grâce à notre IA de présélection",
                icon: "🎯",
                gradient: "from-red-500/[0.05] via-pink-500/[0.02] to-red-500/[0.05]"
              },
              {
                title: "Frais cachés",
                description: "Transparence totale avec notre modèle économique révolutionnaire 100% gratuit",
                icon: "💎",
                gradient: "from-blue-500/[0.05] via-violet-500/[0.02] to-blue-500/[0.05]"
              },
              {
                title: "Sollicitations incessantes",
                description: "Filtrage intelligent qui ne vous présente que les candidats premium validés",
                icon: "🛡️",
                gradient: "from-violet-500/[0.05] via-purple-500/[0.02] to-violet-500/[0.05]"
              },
              {
                title: "Contraintes administratives",
                description: "Automatisation complète du processus de vérification et de validation",
                icon: "⚡",
                gradient: "from-emerald-500/[0.05] via-teal-500/[0.02] to-emerald-500/[0.05]"
              }
            ].map((probleme, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative rounded-3xl overflow-hidden backdrop-blur-2xl border border-white/[0.03] bg-gradient-to-r from-white/[0.01] via-white/[0.005] to-white/[0.01] hover:border-white/[0.08] transition-all duration-1000">
                  
                  {/* Effet de lueur quantique */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${probleme.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-3xl`} />
                  
                  {/* Effet de scan */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent -translate-x-full"
                    whileHover={{ translateX: "200%" }}
                    transition={{ duration: 1.5 }}
                  />
                  
                  <div className="relative z-10 p-8 md:p-12">
                    <div className="text-4xl md:text-5xl mb-8">{probleme.icon}</div>
                    <h3 className="text-2xl md:text-3xl font-extralight text-white mb-6 leading-tight">
                      {probleme.title}
                    </h3>
                    <p className="text-white/50 leading-relaxed font-light text-lg">
                      {probleme.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Transition élégante */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-3xl md:text-4xl font-extralight text-white leading-relaxed">
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
                Notre révolution
              </span>{' '}
              transforme tout
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section Services - Design ultra-cohérent */}
      <section className="py-36 bg-black relative overflow-hidden">
        {/* Ligne décorative supérieure */}
        <motion.div 
          initial={{ scaleX: 0 }} 
          whileInView={{ scaleX: 1 }} 
          transition={{ duration: 1.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent"
        />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <motion.div 
              className="inline-block mb-4 text-[11px] font-light tracking-[0.2em] text-white/40 uppercase relative"
            >
              <span className="absolute -left-8 top-1/2 w-6 h-[1px] bg-gradient-to-r from-transparent to-white/20"></span>
              NOTRE EXPERTISE
              <span className="absolute -right-8 top-1/2 w-6 h-[1px] bg-gradient-to-l from-transparent to-white/20"></span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white mb-6 tracking-[-0.01em]">
              Service <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-300 bg-clip-text text-transparent">Premium</span>
            </h2>
            <p className="text-lg md:text-xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
              Un accompagnement complet pour une location sereine et profitable
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden backdrop-blur-xl border border-white/[0.06] bg-gradient-to-r from-slate-900/80 via-slate-800/60 to-slate-900/50 hover:border-white/15 transition-all duration-700 hover:shadow-2xl hover:shadow-black/20">
                  
                  {/* Effet de lueur colorée */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-800 rounded-2xl sm:rounded-3xl`}></div>
                  
                  {/* Effet de brillance ondulante */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200 rounded-2xl sm:rounded-3xl"></div>
                  
                  <div className="relative z-10 p-6 sm:p-8">
                    <motion.div
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/8 to-white/[0.02] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    >
                      <div className="text-white/80 text-lg sm:text-xl">{service.icon}</div>
                    </motion.div>
                    
                    <h3 className="text-lg sm:text-xl font-extralight text-white mb-3 group-hover:text-blue-300 transition-colors leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed font-light text-sm sm:text-base">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Contact - Design ultra-épuré */}
      <section className="py-36 bg-black relative overflow-hidden">
        {/* Ligne décorative supérieure */}
        <motion.div 
          initial={{ scaleX: 0 }} 
          whileInView={{ scaleX: 1 }} 
          transition={{ duration: 1.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent"
        />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <motion.div 
              className="inline-block mb-4 text-[11px] font-light tracking-[0.2em] text-white/40 uppercase relative"
            >
              <span className="absolute -left-8 top-1/2 w-6 h-[1px] bg-gradient-to-r from-transparent to-white/20"></span>
              CONTACTEZ-NOUS
              <span className="absolute -right-8 top-1/2 w-6 h-[1px] bg-gradient-to-l from-transparent to-white/20"></span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white mb-6 tracking-[-0.01em]">
              Parlons de votre <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-300 bg-clip-text text-transparent">projet</span>
            </h2>
            <p className="text-lg md:text-xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
              Choisissez le moyen de contact qui vous convient le mieux
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Formulaire Digital */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2 group"
            >
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden backdrop-blur-xl border border-white/[0.06] bg-gradient-to-r from-slate-900/80 via-slate-800/60 to-slate-900/50 hover:border-white/15 transition-all duration-700 hover:shadow-2xl hover:shadow-black/20">
                
                {/* Effet de lueur */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/5 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-800 rounded-2xl sm:rounded-3xl"></div>
                
                <div className="relative z-10 p-8 sm:p-10 lg:p-12">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/8 to-white/[0.02] border border-white/10 flex items-center justify-center">
                      <FaDownload className="text-white/80 text-lg sm:text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extralight text-white">Formulaire Digital</h3>
                      <p className="text-white/60 font-light">Le plus simple et rapide</p>
                    </div>
                  </div>
                  
                  <p className="text-white/70 mb-8 leading-relaxed font-light">
                    Téléchargez notre formulaire optimisé, remplissez-le en quelques minutes et renvoyez-le nous par email. 
                    Nous vous recontactons sous 24h.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 text-white rounded-xl font-light shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
                    >
                      <FaDownload className="inline mr-2" />
                      Télécharger le formulaire
                    </motion.button>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <span className="text-white/50 text-sm font-light">proprietaires@gregaopendoor.com</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Direct */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Téléphone */}
              <div className="group">
                <div className="relative rounded-2xl overflow-hidden backdrop-blur-xl border border-white/[0.06] bg-gradient-to-r from-slate-900/80 via-slate-800/60 to-slate-900/50 hover:border-white/15 transition-all duration-700 hover:shadow-2xl hover:shadow-black/20">
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-800 rounded-2xl"></div>
                  
                  <div className="relative z-10 p-6 sm:p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-white/8 to-white/[0.02] border border-white/10 flex items-center justify-center">
                        <FaPhone className="text-white/80" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-extralight text-white">Téléphone</h3>
                    </div>
                    <p className="text-white/70 mb-4 font-light text-sm sm:text-base">Discussion directe avec nos experts</p>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      className="w-full px-4 py-3 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 text-white rounded-xl font-light hover:shadow-lg transition-all duration-300 backdrop-blur-sm"
                    >
                      01 23 45 67 89
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Bureau */}
              <div className="group">
                <div className="relative rounded-2xl overflow-hidden backdrop-blur-xl border border-white/[0.06] bg-gradient-to-r from-slate-900/80 via-slate-800/60 to-slate-900/50 hover:border-white/15 transition-all duration-700 hover:shadow-2xl hover:shadow-black/20">
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-purple-500/5 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-800 rounded-2xl"></div>
                  
                  <div className="relative z-10 p-6 sm:p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-white/8 to-white/[0.02] border border-white/10 flex items-center justify-center">
                        <FaMapMarkerAlt className="text-white/80" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-extralight text-white">Notre Bureau</h3>
                    </div>
                    <p className="text-white/70 mb-4 font-light text-sm sm:text-base">123 rue de Paris<br />75001 Paris</p>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      className="w-full px-4 py-3 bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 text-white rounded-xl font-light hover:shadow-lg transition-all duration-300 backdrop-blur-sm"
                    >
                      Prendre RDV
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section CTA Final - Ultra épuré */}
      <section className="py-36 bg-black relative overflow-hidden">
        {/* Ligne décorative supérieure */}
        <motion.div 
          initial={{ scaleX: 0 }} 
          whileInView={{ scaleX: 1 }} 
          transition={{ duration: 1.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent"
        />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div 
              className="inline-block mb-4 text-[11px] font-light tracking-[0.2em] text-white/40 uppercase relative"
            >
              <span className="absolute -left-8 top-1/2 w-6 h-[1px] bg-gradient-to-r from-transparent to-white/20"></span>
              DÉMARRER MAINTENANT
              <span className="absolute -right-8 top-1/2 w-6 h-[1px] bg-gradient-to-l from-transparent to-white/20"></span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white mb-8 tracking-[-0.01em] leading-tight">
              Prêt à <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-300 bg-clip-text text-transparent">simplifier</span> vos locations ?
            </h2>
            <p className="text-lg md:text-xl text-white/60 font-light mb-12 leading-relaxed">
              Rejoignez des centaines de propriétaires qui nous font déjà confiance
            </p>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 text-white rounded-2xl font-light text-lg shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-sm mb-12"
            >
              <FaCheck className="text-lg" />
              <span>Démarrer maintenant</span>
              <FaArrowRight className="text-lg" />
            </motion.button>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-white/50 font-light">
              <div className="flex items-center gap-2">
                <FaCheck className="text-blue-400 text-sm" />
                <span className="text-sm">100% Gratuit</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheck className="text-blue-400 text-sm" />
                <span className="text-sm">Sans engagement</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheck className="text-blue-400 text-sm" />
                <span className="text-sm">Support 7j/7</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Proprietaires;