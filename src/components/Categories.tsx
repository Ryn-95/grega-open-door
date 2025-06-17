import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaHome, FaUsers } from 'react-icons/fa';
import { useRef, useEffect, useState } from 'react';

// Import direct des images
import logementClassiqueImg from '/images/location.jpg';
import logementSocialImg from '/images/social.jpg';

// Les catégories de services (uniquement Logement Classique et Logement Social)
const categories = [
  {
    title: 'Logement Classique',
    image: '/images/location.jpg',
    link: '/logement-classique',
    description: 'Découvrez notre sélection premium de biens résidentiels disponibles à la location',
    icon: <FaHome className="text-white/90" size={20} />
  },
  {
    title: 'Logement Social',
    image: '/images/social.jpg',
    link: '/logement-social',
    description: 'Accédez à des logements à loyer modéré avec un accompagnement personnalisé',
    icon: <FaUsers className="text-white/90" size={20} />
  }
];

const Categories = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Détecter la taille d'écran
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        setMousePosition({
          x: e.clientX,
          y: e.clientY
        });
      }
    };
    
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  // Variantes d'animation pour les éléments
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.1 : 0.2
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
    hidden: { opacity: 0, y: isMobile ? 50 : 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0.8 : 1,
        ease: [0.165, 0.84, 0.44, 1]
      }
    }
  };
  
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: isMobile ? 1 : 1.5
      }
    }
  };

  return (
    <motion.section 
      ref={containerRef}
      style={{ opacity: isMobile ? 1 : opacity, scale: isMobile ? 1 : scale }}
      className={`${isMobile ? 'py-20' : 'py-40'} relative overflow-hidden bg-gradient-to-b from-black via-black/95 to-black/90 z-10`}
    >
      {/* Effet de grain subtil en arrière-plan - réduit sur mobile */}
      {!isMobile && (
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/noise.png')] bg-repeat opacity-20"></div>
        </div>
      )}
      
      {/* Effets de parallaxe dynamique - desktop seulement */}
      {!isMobile && (
        <div 
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(100, 100, 255, 0.1) 0%, transparent 60%)`,
          }}
        />
      )}
      
      {/* Lignes décoratives stylisées - adaptées mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: isMobile ? 0.1 : 0.2, scale: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          className={`absolute ${isMobile ? 'w-[150px] h-[150px] -top-[75px] -left-[75px]' : 'w-[300px] h-[300px] -top-[150px] -left-[150px]'} rounded-full border border-white/5`}
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: isMobile ? 0.15 : 0.3, scale: 1.1 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
          className={`absolute ${isMobile ? 'w-[200px] h-[200px] -bottom-[100px] -right-[100px]' : 'w-[500px] h-[500px] -bottom-[250px] -right-[250px]'} rounded-full border border-white/3`}
        />
        
        <motion.div 
          initial={{ scaleX: 0 }} 
          whileInView={{ scaleX: 1 }} 
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className={`absolute ${isMobile ? 'top-10' : 'top-20'} left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent origin-left`}
        />
        <motion.div 
          initial={{ scaleX: 0 }} 
          whileInView={{ scaleX: 1 }} 
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className={`absolute ${isMobile ? 'bottom-10' : 'bottom-20'} left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent origin-right`}
        />
        
        {/* Cercles décoratifs dynamiques - réduits sur mobile */}
        <motion.div
          animate={!isMobile ? {
            x: [0, 10, -10, 0],
            y: [0, -10, 10, 0],
            opacity: [0.1, 0.3, 0.1]
          } : {}}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute top-1/4 right-[10%] ${isMobile ? 'w-20 h-20' : 'w-40 h-40'} bg-blue-500/5 rounded-full blur-2xl`}
        />
        <motion.div
          animate={!isMobile ? {
            x: [0, -10, 10, 0],
            y: [0, 10, -10, 0],
            opacity: [0.1, 0.2, 0.1]
          } : {}}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className={`absolute bottom-1/4 left-[5%] ${isMobile ? 'w-24 h-24' : 'w-60 h-60'} bg-indigo-500/5 rounded-full blur-2xl`}
        />
      </div>
      
      <div className={`container mx-auto ${isMobile ? 'px-4' : 'px-6'} relative z-10`}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: isMobile ? "-50px" : "-100px" }}
          className="max-w-6xl mx-auto"
        >
          {/* En-tête de section modernisée et améliorée - responsive */}
          <motion.div variants={itemVariants} className={`${isMobile ? 'mb-16' : 'mb-32'} max-w-4xl mx-auto text-center`}>
            <motion.div 
              variants={itemVariants}
              className={`inline-block ${isMobile ? 'mb-4' : 'mb-6'}`}
            >
              <motion.span 
                className={`inline-flex items-center rounded-full backdrop-blur-md bg-white/5 border border-white/10 ${isMobile ? 'px-2.5 py-1' : 'px-3 py-1'}`}
                whileHover={!isMobile ? { 
                  backgroundColor: "rgba(255, 255, 255, 0.08)", 
                  borderColor: "rgba(255, 255, 255, 0.2)",
                  transition: { duration: 0.2 }
                } : {}}
              >
                <motion.span 
                  className={`${isMobile ? 'w-1.5 h-1.5' : 'w-2 h-2'} rounded-full bg-blue-400/60 ${isMobile ? 'mr-1.5' : 'mr-2'}`}
                  animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                ></motion.span>
                <span className={`${isMobile ? 'text-[10px]' : 'text-xs'} tracking-[0.3em] uppercase text-white/60 font-light`}>
                  Services Immobiliers
                </span>
              </motion.span>
            </motion.div>
            
            <div className="overflow-hidden mb-4">
              <motion.h2 
                variants={textRevealVariants}
                className={`${isMobile ? 'text-3xl sm:text-4xl' : 'text-4xl md:text-5xl lg:text-6xl'} font-extralight text-white tracking-tight leading-tight`}
              >
                Nos <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Services</span>
              </motion.h2>
            </div>
            
            <motion.p 
              variants={fadeInVariants}
              className={`${isMobile ? 'text-sm' : 'text-base md:text-lg'} text-white/60 leading-relaxed max-w-2xl mx-auto font-light`}
            >
              {isMobile 
                ? "Découvrez nos solutions immobilières adaptées à vos besoins."
                : "Découvrez nos solutions immobilières sur mesure, conçues pour répondre à tous vos besoins de logement avec un service premium et personnalisé."
              }
            </motion.p>
          </motion.div>

          {/* Grille des catégories - layout responsive */}
          <motion.div 
            variants={containerVariants}
            className={`grid ${isMobile ? 'grid-cols-1 gap-6' : 'grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12'}`}
          >
            {categories.map((category, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <Link to={category.link} className="block">
                  <motion.div 
                    className={`relative overflow-hidden ${isMobile ? 'rounded-2xl' : 'rounded-3xl'} bg-gradient-to-br from-gray-900/50 to-black/70 backdrop-blur-xl border border-white/10 group-hover:border-white/20 transition-all duration-700`}
                    whileHover={!isMobile ? { 
                      y: -8,
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
                    } : {}}
                    style={{
                      background: `linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.8) 100%)`,
                    }}
                  >
                    {/* Image de fond avec overlay */}
                    <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700">
                      <img 
                        src={category.image} 
                        alt={category.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                    </div>
                    
                    {/* Contenu de la carte - responsive */}
                    <div className={`relative z-10 ${isMobile ? 'p-6' : 'p-8 lg:p-10'} flex flex-col justify-between ${isMobile ? 'h-64' : 'h-80'}`}>
                      <div>
                        {/* Icône et catégorie */}
                        <motion.div 
                          className={`flex items-center ${isMobile ? 'mb-4' : 'mb-6'}`}
                          whileHover={!isMobile ? { x: 5 } : {}}
                          transition={{ duration: 0.3 }}
                        >
                          <div className={`${isMobile ? 'w-8 h-8' : 'w-10 h-10'} rounded-full bg-white/10 flex items-center justify-center ${isMobile ? 'mr-3' : 'mr-4'} backdrop-blur-sm border border-white/20`}>
                            {category.icon}
                          </div>
                          <span className={`${isMobile ? 'text-xs' : 'text-sm'} text-white/60 uppercase tracking-wider font-light`}>
                            Service
                          </span>
                        </motion.div>

                        {/* Titre */}
                        <h3 className={`${isMobile ? 'text-xl' : 'text-2xl lg:text-3xl'} font-light text-white mb-4 leading-tight group-hover:text-white/95 transition-colors duration-300`}>
                          {category.title}
                        </h3>

                        {/* Description */}
                        <p className={`${isMobile ? 'text-sm' : 'text-base'} text-white/70 leading-relaxed group-hover:text-white/80 transition-colors duration-300 font-light`}>
                          {isMobile 
                            ? category.description.length > 80 
                              ? category.description.substring(0, 80) + "..."
                              : category.description
                            : category.description
                          }
                        </p>
                      </div>

                      {/* Bouton d'action - responsive */}
                      <motion.div 
                        className="flex items-center justify-between pt-6"
                        whileHover={!isMobile ? { x: 5 } : {}}
                        transition={{ duration: 0.3 }}
                      >
                        <span className={`${isMobile ? 'text-sm' : 'text-base'} text-white/80 font-light group-hover:text-white transition-colors duration-300`}>
                          Découvrir
                        </span>
                        <motion.div
                          className={`${isMobile ? 'w-8 h-8' : 'w-10 h-10'} rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center backdrop-blur-sm border border-white/20 group-hover:border-white/30 transition-all duration-300`}
                          whileHover={!isMobile ? { scale: 1.1, rotate: 45 } : {}}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaArrowRight className={`${isMobile ? 'text-sm' : 'text-base'} text-white/80 group-hover:text-white transition-colors duration-300`} />
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Effet de brillance au survol - desktop seulement */}
                    {!isMobile && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)`
                        }}
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                      />
                    )}
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Categories; 