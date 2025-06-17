import { motion, useScroll, useTransform } from 'framer-motion';
import { FaArrowRight, FaBullseye, FaFolder, FaSearch, FaHome, FaHandshake, FaUser, FaPlay } from 'react-icons/fa';
import { useRef, useEffect, useState } from 'react';

const Processus = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  // Détecter la taille d'écran
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Suivre la souris (desktop seulement)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  const etapes = [
    {
      numero: 1,
      titre: "Analyse des Besoins",
      description: isMobile 
        ? "Comprendre tes critères et préférences avec des conseils personnalisés."
        : "On prend le temps de comprendre tes critères et tes préférences. On t'offre des conseils personnalisés pour affiner ton projet.",
      icone: <FaBullseye className="text-white/90" size={isMobile ? 16 : 20} />
    },
    {
      numero: 2,
      titre: "Constitution du Dossier",
      description: isMobile
        ? "Rassembler et vérifier tous les documents nécessaires."
        : "On t'aide à rassembler tous les documents nécessaires et à les vérifier pour que tout soit en ordre.",
      icone: <FaFolder className="text-white/90" size={isMobile ? 16 : 20} />
    },
    {
      numero: 3,
      titre: "Recherche de Biens",
      description: isMobile
        ? "Explorer le marché avec accès à des biens exclusifs."
        : "On explore le marché immobilier pour toi. On t'offre un accès à des biens exclusifs avant tout le monde.",
      icone: <FaSearch className="text-white/90" size={isMobile ? 16 : 20} />
    },
    {
      numero: 4,
      titre: "Sélection et Visites",
      description: isMobile
        ? "Sélection personnalisée et visites privées organisées."
        : "On te présente une sélection de biens correspondant à tes critères. On organise des visites privées personnalisées.",
      icone: <FaHome className="text-white/90" size={isMobile ? 16 : 20} />
    },
    {
      numero: 5,
      titre: "Suivi Post-Emménagement",
      description: isMobile
        ? "Assistance administrative pour une intégration rapide."
        : "On t'assiste dans les démarches administratives liées à ton installation pour une intégration rapide et sans souci.",
      icone: <FaHandshake className="text-white/90" size={isMobile ? 16 : 20} />
    }
  ];

  // Animations variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.1 : 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: isMobile ? 15 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0.6 : 0.8,
        ease: [0.165, 0.84, 0.44, 1]
      }
    }
  };

  const textRevealVariants = {
    hidden: { opacity: 0, y: isMobile ? 30 : 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0.8 : 1.2,
        ease: [0.165, 0.84, 0.44, 1]
      }
    }
  };

  return (
    <motion.section 
      ref={containerRef}
      style={{ opacity: isMobile ? 1 : opacity, scale: isMobile ? 1 : scale }}
      className={`relative ${isMobile ? 'py-20' : 'py-32 lg:py-40'} bg-gradient-to-b from-black via-black/98 to-black overflow-hidden`}
    >
      {/* Background Effects - optimisés pour mobile */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Grille subtile */}
        <div 
          className={`absolute inset-0 opacity-[0.015] pointer-events-none`}
          style={{ 
            backgroundImage: `radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: isMobile ? '40px 40px' : '60px 60px'
          }}
        />
        
        {/* Effet de curseur interactif - desktop seulement */}
        {!isMobile && (
          <div 
            className="absolute inset-0 opacity-20 transition-all duration-1000 ease-out"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(59, 130, 246, 0.06), transparent 50%)`,
            }}
          />
        )}
        
        {/* Lignes décoratives animées */}
        <motion.div 
          initial={{ scaleX: 0 }} 
          whileInView={{ scaleX: 1 }} 
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: true }}
          className={`absolute ${isMobile ? 'top-8' : 'top-16'} left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent origin-left`}
        />
        
        <motion.div 
          initial={{ scaleX: 0 }} 
          whileInView={{ scaleX: 1 }} 
          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}
          className={`absolute ${isMobile ? 'bottom-8' : 'bottom-16'} left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/8 to-transparent origin-right`}
        />
        
        {/* Éléments flottants - réduits sur mobile */}
        <motion.div
          animate={!isMobile ? {
            x: [0, 15, -15, 0],
            y: [0, -15, 15, 0],
            opacity: [0.1, 0.3, 0.1]
          } : {}}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute top-1/4 right-[10%] ${isMobile ? 'w-16 h-16' : 'w-32 h-32'} bg-blue-500/5 rounded-full blur-2xl`}
        />
        
        <motion.div
          animate={!isMobile ? {
            x: [0, -15, 15, 0],
            y: [0, 15, -15, 0],
            opacity: [0.1, 0.2, 0.1]
          } : {}}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className={`absolute bottom-1/4 left-[5%] ${isMobile ? 'w-20 h-20' : 'w-40 h-40'} bg-indigo-500/5 rounded-full blur-3xl`}
        />
      </div>
      
      <div className={`container mx-auto ${isMobile ? 'px-4' : 'px-6 lg:px-8'} relative z-10`}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: isMobile ? "-50px" : "-100px" }}
          className="max-w-7xl mx-auto"
        >
          {/* En-tête épuré et moderne - responsive */}
          <motion.div variants={itemVariants} className={`${isMobile ? 'mb-12 text-center' : 'mb-20 text-center mx-auto'}`}>
            {/* Badge de section */}
            <motion.div 
              variants={itemVariants}
              className={`inline-block ${isMobile ? 'mb-4' : 'mb-6'}`}
            >
              <motion.span 
                className={`inline-flex items-center rounded-full backdrop-blur-md bg-white/5 border border-white/10 ${isMobile ? 'px-3 py-1.5' : 'px-4 py-2'}`}
                whileHover={!isMobile ? { 
                  backgroundColor: "rgba(255, 255, 255, 0.08)", 
                  borderColor: "rgba(255, 255, 255, 0.2)",
                  transition: { duration: 0.2 }
                } : {}}
              >
                <motion.span 
                  className={`${isMobile ? 'w-1.5 h-1.5' : 'w-2 h-2'} rounded-full bg-blue-400/60 ${isMobile ? 'mr-2' : 'mr-3'}`}
                  animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <span className={`${isMobile ? 'text-[10px]' : 'text-xs'} tracking-[0.3em] uppercase text-white/60 font-light`}>
                  {isMobile ? "Processus" : "Notre Processus"}
                </span>
              </motion.span>
            </motion.div>
            
            {/* Titre principal */}
            <div className="w-full flex justify-center mb-6">
              <motion.h2 
                variants={textRevealVariants}
                className={`${isMobile ? 'text-2xl sm:text-3xl' : 'text-3xl md:text-4xl lg:text-5xl xl:text-6xl'} font-extralight text-white tracking-tight leading-tight whitespace-nowrap`}
              >
                Comment nous <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">t'accompagnons</span> ?
              </motion.h2>
            </div>
            
            {/* Sous-titre */}
            <motion.p 
              variants={itemVariants}
              className={`${isMobile ? 'text-sm px-2' : 'text-base md:text-lg'} text-white/60 leading-relaxed max-w-2xl mx-auto font-light`}
            >
              {isMobile 
                ? "5 étapes simples pour trouver ton logement idéal à Paris."
                : "Un processus simple et transparent en 5 étapes pour transformer ta recherche de logement en une expérience fluide et moderne."
              }
            </motion.p>
          </motion.div>

          {/* Layout responsive pour le contenu principal */}
          <div className={`${isMobile ? 'space-y-12' : 'lg:grid lg:grid-cols-5 lg:gap-16 lg:items-start'}`}>
            
            {/* Liste des étapes - responsive */}
            <motion.div 
              variants={containerVariants}
              className={`${isMobile ? 'order-2' : 'lg:col-span-3 lg:order-1'}`}
            >
              <div className={`${isMobile ? 'space-y-6' : 'space-y-8'}`}>
                {etapes.map((etape, index) => (
                  <motion.div 
                    key={etape.numero}
                    variants={itemVariants}
                    className="group relative"
                  >
                    <div className={`flex ${isMobile ? 'gap-4' : 'gap-6'} items-start`}>
                      {/* Numéro et ligne de connexion */}
                      <div className="flex-shrink-0 flex flex-col items-center">
                        <motion.div 
                          whileHover={!isMobile ? { 
                            scale: 1.1, 
                            backgroundColor: "rgba(255, 255, 255, 0.12)",
                            borderColor: "rgba(255, 255, 255, 0.3)"
                          } : {}}
                          transition={{ duration: 0.3 }}
                          className={`${isMobile ? 'w-10 h-10' : 'w-12 h-12'} rounded-full backdrop-blur-xl flex items-center justify-center border border-white/10 bg-white/5 relative overflow-hidden`}
                        >
                          {/* Effet de brillance */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                            initial={{ x: '-100%' }}
                            whileInView={{ x: '100%' }}
                            transition={{ duration: 1.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                          />
                          
                          <motion.div 
                            className="z-10 relative"
                            animate={!isMobile ? { 
                              rotate: etape.numero === 3 ? [0, 10, 0] : undefined,
                              scale: [1, 1.05, 1]
                            } : {}}
                            transition={{ 
                              duration: etape.numero === 3 ? 4 : 3,
                              repeat: Infinity,
                              repeatType: "reverse",
                              delay: index * 0.5
                            }}
                          >
                            {etape.icone}
                          </motion.div>
                        </motion.div>
                        
                        {/* Ligne de connexion */}
                        {index < etapes.length - 1 && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            whileInView={{ height: isMobile ? "32px" : "40px", opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="w-[1px] bg-gradient-to-b from-white/20 via-white/10 to-white/5 mt-3"
                          />
                        )}
                      </div>
                      
                      {/* Contenu de l'étape */}
                      <div className="flex-1 min-w-0">
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                          viewport={{ once: true }}
                          className={`${isMobile ? 'pb-2' : 'pb-3'}`}
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <span className={`${isMobile ? 'text-xs' : 'text-sm'} text-white/40 font-mono`}>
                              {String(etape.numero).padStart(2, '0')}
                            </span>
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: isMobile ? "30px" : "40px" }}
                              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                              viewport={{ once: true }}
                              className="h-[1px] bg-white/20"
                            />
                          </div>
                          
                          <h3 className={`${isMobile ? 'text-base' : 'text-lg md:text-xl'} font-light text-white mb-3 tracking-wide`}>
                            {etape.titre}
                          </h3>
                          
                          <p className={`${isMobile ? 'text-sm' : 'text-base'} text-white/70 leading-relaxed font-light`}>
                            {etape.description}
                          </p>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Section application mobile - responsive */}
            <motion.div 
              variants={itemVariants}
              className={`${isMobile ? 'order-1' : 'lg:col-span-2 lg:order-2'} flex flex-col items-center ${isMobile ? 'mb-8' : 'lg:sticky lg:top-32'}`}
            >
              <div className={`${isMobile ? 'w-full max-w-sm' : 'w-full max-w-xs'} relative`}>
                {/* Mockup smartphone amélioré */}
                <div className={`${isMobile ? 'mb-6' : 'mb-8'} relative`}>
                  {/* Cercles décoratifs de fond */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <motion.div 
                      className={`${isMobile ? 'w-48 h-48' : 'w-64 h-64'} rounded-full border border-white/5`}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div 
                      className={`absolute inset-4 rounded-full border border-white/3`}
                      animate={{ rotate: -360 }}
                      transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                  
                  {/* Smartphone */}
                  <motion.div 
                    className={`relative z-10 ${isMobile ? 'w-36 h-72 mx-auto' : 'w-40 h-80 mx-auto'} rounded-3xl border border-white/20 bg-black/90 overflow-hidden backdrop-blur-xl`}
                    style={{
                      boxShadow: `
                        0 0 50px rgba(255, 255, 255, 0.1),
                        inset 0 0 20px rgba(255, 255, 255, 0.05),
                        0 20px 40px rgba(0, 0, 0, 0.3)
                      `
                    }}
                    initial={{ y: 20, opacity: 0, rotateY: 10 }}
                    whileInView={{ 
                      y: 0, 
                      opacity: 1, 
                      rotateY: 0,
                      transition: { duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }
                    }}
                    whileHover={!isMobile ? {
                      y: -5,
                      rotateY: -2,
                      boxShadow: "0 0 60px rgba(255, 255, 255, 0.15), inset 0 0 25px rgba(255, 255, 255, 0.08), 0 25px 50px rgba(0, 0, 0, 0.4)",
                      transition: { duration: 0.3 }
                    } : {}}
                    viewport={{ once: true }}
                  >
                    {/* Encoche */}
                    <div className={`absolute ${isMobile ? 'top-2' : 'top-3'} left-1/2 transform -translate-x-1/2 ${isMobile ? 'w-12 h-2' : 'w-16 h-3'} rounded-full bg-black/90 border border-white/20`} />
                    
                    {/* Écran */}
                    <div className={`absolute inset-0 ${isMobile ? 'p-2' : 'p-3'}`}>
                      <div className={`w-full h-full rounded-2xl overflow-hidden bg-gradient-to-b from-black/20 to-black/80`}>
                        {/* Header de l'app */}
                        <div className={`${isMobile ? 'h-8' : 'h-10'} flex items-center justify-between px-3 bg-white/5 border-b border-white/10`}>
                          <div className={`text-white ${isMobile ? 'text-[10px]' : 'text-xs'} font-light tracking-wider`}>
                            GREGA
                          </div>
                          <div className="flex items-center space-x-2">
                            <motion.div 
                              className={`${isMobile ? 'w-2 h-2' : 'w-2.5 h-2.5'} rounded-full bg-green-400/80`}
                              animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                            <motion.div 
                              className={`${isMobile ? 'w-4 h-1' : 'w-5 h-1'} rounded-full bg-white/30`}
                              animate={{ scaleX: [1, 0.7, 1] }}
                              transition={{ duration: 3, repeat: Infinity }}
                            />
                          </div>
                        </div>
                        
                        {/* Contenu principal */}
                        <div className={`flex-1 ${isMobile ? 'p-2' : 'p-3'} space-y-3`}>
                          {/* Avatar utilisateur */}
                          <div className="flex items-center justify-center">
                            <motion.div 
                              className={`${isMobile ? 'w-12 h-12' : 'w-16 h-16'} rounded-full bg-white/10 border border-white/20 flex items-center justify-center`}
                              whileHover={{ scale: 1.05 }}
                            >
                              <FaUser className={`text-white/80 ${isMobile ? 'text-sm' : 'text-base'}`} />
                            </motion.div>
                          </div>
                          
                          {/* Étapes de progression */}
                          <div className="space-y-2">
                            {[1, 2, 3].map((step, i) => (
                              <motion.div 
                                key={step}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 + i * 0.2, duration: 0.5 }}
                                className={`flex items-center gap-2 ${isMobile ? 'p-1.5' : 'p-2'} rounded-lg bg-white/5 border border-white/10`}
                              >
                                <motion.div 
                                  className={`${isMobile ? 'w-2 h-2' : 'w-3 h-3'} rounded-full ${i === 1 ? 'bg-blue-400' : 'bg-white/30'}`}
                                  animate={i === 1 ? { scale: [1, 1.2, 1] } : {}}
                                  transition={{ duration: 2, repeat: Infinity }}
                                />
                                <div className={`${isMobile ? 'h-0.5 w-8' : 'h-1 w-10'} rounded-full ${i <= 1 ? 'bg-white/30' : 'bg-white/10'}`} />
                              </motion.div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Navigation bottom */}
                        <div className={`${isMobile ? 'h-6' : 'h-8'} flex justify-around items-center px-3 bg-white/5 border-t border-white/10`}>
                          {[...Array(3)].map((_, i) => (
                            <motion.div 
                              key={i}
                              className={`${isMobile ? 'w-3 h-0.5' : 'w-4 h-1'} rounded-full ${i === 1 ? 'bg-white/40' : 'bg-white/20'}`}
                              whileHover={{ scale: 1.2 }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Description et CTA */}
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <p className={`text-white/80 ${isMobile ? 'text-sm' : 'text-base'} font-light leading-relaxed ${isMobile ? 'mb-6' : 'mb-8'} ${isMobile ? 'px-4' : ''}`}>
                    {isMobile 
                      ? "Une application intuitive pour suivre ton projet"
                      : "Une application intuitive pour suivre toutes les étapes de ton projet"
                    }
                  </p>
                  
                  <motion.button
                    whileHover={!isMobile ? { 
                      scale: 1.05, 
                      backgroundColor: "rgba(255, 255, 255, 0.12)",
                      boxShadow: "0 8px 25px rgba(59, 130, 246, 0.25)"
                    } : {}}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-flex items-center gap-3 border border-white/20 ${isMobile ? 'px-6 py-3' : 'px-8 py-4'} rounded-full bg-white/5 text-white/90 ${isMobile ? 'text-sm' : 'text-base'} font-light tracking-wider backdrop-blur-sm touch-target`}
                  >
                    <FaPlay className={`text-white/60 ${isMobile ? 'text-xs' : 'text-sm'}`} />
                    <span>Démarrer</span>
                    <motion.div
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <FaArrowRight className={`text-white/50 ${isMobile ? 'text-xs' : 'text-sm'}`} />
                    </motion.div>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Processus; 