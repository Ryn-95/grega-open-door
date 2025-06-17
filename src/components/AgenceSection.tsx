import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const AgenceSection = () => {
  const [isMobile, setIsMobile] = useState(false)

  // Détecter la taille d'écran
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.165, 0.84, 0.44, 1]
      }
    }
  }

  return (
    <section className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden scroll-snap-align-start">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Grille subtile */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: isMobile ? '40px 40px' : '60px 60px'
          }}
        />
        
        {/* Gradient lumineux subtil */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/[0.01] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-white/[0.005] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Image centrée uniquement */}
        <motion.div 
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex justify-center"
        >
          <div className="relative group max-w-4xl w-full">
            {/* Effet de halo lumineux */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-3xl blur-2xl scale-105 opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
            
            {/* Container de l'image avec effets */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
              <img 
                src="/images/grega-section.png"
                alt="GREGA" 
                className={`w-full ${isMobile ? 'h-64 sm:h-80' : 'h-96 lg:h-[500px] xl:h-[600px]'} object-cover transition-transform duration-700 group-hover:scale-105`}
                onError={(e) => {
                  console.log('Erreur lors du chargement de l\'image');
                  // Fallback vers une image par défaut
                  e.currentTarget.src = "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";
                }}
              />
              
              {/* Overlay gradient subtil */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
            
            {/* Éléments décoratifs flottants */}
            <motion.div
              animate={{ y: [0, -10, 0], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-8 h-8 rounded-full border border-emerald-400/30 bg-emerald-400/10"
            />
            <motion.div
              animate={{ y: [0, 10, 0], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full border border-blue-400/20 bg-blue-400/5"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AgenceSection 