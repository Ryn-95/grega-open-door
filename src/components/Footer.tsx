import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaTwitter, FaLinkedin, FaArrowUp, FaClock, FaGlobe, FaHeart } from 'react-icons/fa'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const footerRef = useRef<HTMLElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 0.9, 1])

  // Horloge temps réel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    
    return () => clearInterval(timer)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.footer 
      ref={footerRef}
      className="relative bg-white border-t border-gray-100 overflow-hidden"
      style={{ opacity }}
    >
      {/* Grille subtile pour cohérence */}
      <div 
        className="absolute inset-0 opacity-[0.004] pointer-events-none"
        style={{ 
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Contenu principal ultra-minimaliste */}
      <div className="relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Section principale ultra-compacte */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"
          >
            
            {/* Logo et tagline */}
            <div className="md:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: [0.6, 0.01, 0.05, 0.95] }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-semibold tracking-wider text-gray-900 mb-3">
                  GREGA
                </h2>
                <p className="text-sm text-gray-600 font-light tracking-wide leading-relaxed">
                  L'immobilier réinventé
                </p>
                
                {/* Horloge temps réel minimaliste */}
                <div className="flex items-center space-x-2 mt-6">
                  <FaClock className="text-gray-400" size={12} />
                  <motion.span 
                    className="text-xs text-gray-500 font-mono"
                    key={currentTime.toLocaleTimeString()}
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {currentTime.toLocaleTimeString('fr-FR', { 
                      hour: '2-digit', 
                      minute: '2-digit'
                    })}
                  </motion.span>
                  <span className="text-gray-300 text-xs">•</span>
                  <FaGlobe className="text-gray-400" size={10} />
                  <span className="text-xs text-gray-500">Paris</span>
                </div>
              </motion.div>
            </div>

            {/* Navigation compacte */}
            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  title: "Navigation", 
                  links: [
                    { label: "Accueil", url: "/" },
                    { label: "Services", url: "/services" },
                    { label: "Contact", url: "/contact" }
                  ]
                },
                { 
                  title: "Solutions", 
                  links: [
                    { label: "Logement Classique", url: "/logement-classique" },
                    { label: "Logement Social", url: "/logement-social" },
                    { label: "Dossier Express", url: "/dossier" }
                  ]
                },
                { 
                  title: "Ressources", 
                  links: [
                    { label: "Quartiers", url: "/quartiers" },
                    { label: "Conseils", url: "/conseils" },
                    { label: "FAQ", url: "/faq" }
                  ]
                }
              ].map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.6, 0.01, 0.05, 0.95] }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <h4 className="text-sm font-medium text-gray-900 tracking-wide">
                    {section.title}
                  </h4>
                  <div className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <motion.div
                        key={link.label}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + linkIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <Link 
                          to={link.url}
                          className="block text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm font-light"
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Info Premium */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.6, 0.01, 0.05, 0.95] }}
            viewport={{ once: true }}
            className="border-t border-gray-100 pt-8 mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <FaPhone className="w-4 h-4" />,
                  label: "Téléphone",
                  value: "+33 1 23 45 67 89",
                  link: "tel:+33123456789"
                },
                {
                  icon: <FaEnvelope className="w-4 h-4" />,
                  label: "Email",
                  value: "hello@grega.paris",
                  link: "mailto:hello@grega.paris"
                },
                {
                  icon: <FaMapMarkerAlt className="w-4 h-4" />,
                  label: "Adresse",
                  value: "75008 Paris",
                  link: "#"
                }
              ].map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.link}
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2 }}
                  className="group flex items-center gap-3 p-4 rounded-xl border border-gray-100 hover:border-gray-200 bg-gray-50/50 hover:bg-gray-50 transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-gray-900 text-white rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    {contact.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">{contact.label}</p>
                    <p className="text-sm text-gray-900 font-medium">{contact.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Ligne de séparation finale */}
          <div className="w-full h-px bg-gray-100 mb-8"></div>

          {/* Footer final ultra-minimaliste */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>© 2024 GREGA OPEN DOOR</span>
              <span>•</span>
              <span>Immobilier</span>
              <span>•</span>
              <span>Innovation</span>
              <span>•</span>
              <span>Excellence</span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-6">
              {/* Links légaux */}
              <div className="flex items-center gap-4">
                <Link 
                  to="/mentions-legales" 
                  className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200"
                >
                  Mentions légales
                </Link>
                <span className="text-gray-300">•</span>
                <Link 
                  to="/confidentialite" 
                  className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200"
                >
                  Confidentialité
                </Link>
              </div>

              {/* Scroll to top */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <FaArrowUp className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>

          {/* Message final avec cœur */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-8 pt-6 border-t border-gray-50"
          >
            <p className="text-xs text-gray-400 flex items-center justify-center gap-2">
              <span>Fait avec</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaHeart className="text-red-400 w-3 h-3" />
              </motion.div>
              <span>à Paris</span>
            </p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer; 