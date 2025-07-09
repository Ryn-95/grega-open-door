import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { navigateToPage } from '../utils/navigation'

const Footer = () => {
  // Fonction pour gérer la navigation
  const handleNavigation = (path: string) => {
    navigateToPage(path)
  }

  return (
    <footer className="bg-white border-t border-gray-100">
      {/* Contenu principal ultra-épuré */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section principale */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16"
          >
            
            {/* Logo et contact */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
                <h2 className="text-xl font-medium text-gray-900">
                  GREGA OPEN DOOR
                </h2>
              </div>
              <p className="text-gray-600 mb-6 font-light">
                L'immobilier simplifié
              </p>
              
              {/* Contact direct */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaPhone className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-700">09 53 37 61 41</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-700">contact@gregaopendoor.fr</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-700">37 rue des maturins, 75008 Paris</span>
                </div>
              </div>
            </div>

            {/* Navigation épurée */}
            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-6">
                Navigation
              </h4>
              <div className="space-y-3">
                {[
                  { label: "Accueil", url: "/" },
                  { label: "Nos Biens", url: "/biens-a-louer" },
                  { label: "Services", url: "/services" },
                  { label: "Contact", url: "/contact" },
                  { label: "À Propos", url: "/about" }
                ].map((link) => (
                  <div 
                    key={link.label}
                    onClick={() => handleNavigation(link.url)}
                    className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer font-light"
                  >
                    {link.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Illustration */}
            <div className="text-center">
              <h4 className="text-lg font-medium text-gray-900 mb-6">
                Votre nouveau chez-vous
              </h4>
              
              {/* Vraie illustration */}
              <div className="w-full h-[300px] mb-4">
                <img 
                  src="/3D/conception-de-rendu-3d-de-la-maison.jpg"
                  alt="Maison de rêve"
                  className="w-full h-full object-contain"
                />
              </div>
              
              <p className="text-gray-500 text-sm">Trouvez le logement parfait</p>
            </div>
          </motion.div>

          {/* Réseaux sociaux épurés */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-gray-100 pt-8 mb-8"
          >
            <div className="text-center">
              <div className="flex justify-center gap-6">
                {[
                  { Icon: FaInstagram, label: "Instagram" },
                  { Icon: FaTwitter, label: "Twitter" },
                  { Icon: FaLinkedin, label: "LinkedIn" }
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    className="p-3 border border-gray-200 rounded-lg text-gray-600 hover:text-gray-900 hover:border-gray-300 transition-all duration-300"
                  >
                    <social.Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Copyright épuré */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="border-t border-gray-100 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
              <p>
                © {new Date().getFullYear()} GREGA OPEN DOOR. Tous droits réservés.
              </p>
              <div className="flex items-center gap-6">
                <a href="/mentions-legales" className="hover:text-gray-700 transition-colors">
                  Mentions légales
                </a>
                <a href="/confidentialite" className="hover:text-gray-700 transition-colors">
                  Confidentialité
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 