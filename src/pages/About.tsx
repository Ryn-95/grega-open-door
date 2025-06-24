import { motion } from 'framer-motion'
import { FaUsers, FaShieldAlt, FaLightbulb, FaPhone, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa'
import Footer from '../components/Footer'
import React, { useEffect, useState, useRef } from 'react';
import { useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { FaCheck, FaArrowRight, FaUserCheck, FaClock, FaHandshake, FaTimes } from 'react-icons/fa';

const About = () => {
  const [showCalendly, setShowCalendly] = useState(false);

  // Composant Calendly intégré
  const CalendlyWidget = () => (
    <div className="w-full h-[600px]">
      <iframe
        src="https://calendly.com/contact-gregaopendoor/consultation"
        width="100%"
        height="100%"
        frameBorder="0"
        title="Consultation avec GREGA"
      />
      <p className="text-center text-gray-600 mt-4 font-light">
        Si le calendrier ne s'affiche pas, 
        <a 
          href="https://calendly.com/contact-gregaopendoor/consultation" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-black underline hover:no-underline ml-1"
        >
          cliquez ici pour ouvrir dans un nouvel onglet
        </a>
      </p>
    </div>
  );

  // Composant Modal réutilisable
  const Modal = ({ isOpen, onClose, title, children }: any) => (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onClose();
          }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-light text-black">{title}</h2>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onClose();
                  }}
                  className="text-gray-400 hover:text-black transition-colors"
                >
                  <FaTimes className="w-6 h-6" />
                </button>
              </div>
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section Ultra-Épuré */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          
          {/* Badge épuré */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="inline-flex items-center px-4 py-2 border border-gray-200 bg-white">
              <span className="text-gray-600 text-xs font-light tracking-wide uppercase">
                À propos
              </span>
            </div>
          </motion.div>
          
          {/* Titre épuré */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-light text-black leading-tight mb-6">
              GREGA
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-gray-600">
              Immobilier nouvelle génération
            </h2>
          </motion.div>
          
          {/* Description concrète */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <p className="text-lg text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
              Une agence immobilière moderne qui simplifie votre recherche de logement. 
              Nous accompagnons particuliers, étudiants et investisseurs avec des solutions concrètes et efficaces.
            </p>
          </motion.div>
          
          {/* Statistiques simples */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-3 gap-12 max-w-2xl mx-auto"
          >
            {[
              { value: "2500+", label: "Clients" },
              { value: "98%", label: "Réussite" },
              { value: "8", label: "Villes" }
            ].map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-light text-black mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-500 font-light">{metric.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section Notre Mission - Concrète */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light text-black mb-4">
              Notre Mission
            </h2>
            <div className="w-16 h-px bg-black mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <FaUsers className="w-6 h-6" />,
                title: "Accompagnement Personnel",
                description: "Un conseiller dédié pour chaque client, de la recherche à la signature du bail."
              },
              {
                icon: <FaShieldAlt className="w-6 h-6" />,
                title: "Transparence Totale",
                description: "Pas de frais cachés, des prix clairs et des services détaillés dès le premier contact."
              },
              {
                icon: <FaLightbulb className="w-6 h-6" />,
                title: "Solutions Innovantes",
                description: "Outils numériques modernes pour accélérer vos démarches et optimiser vos chances."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-black text-white flex items-center justify-center mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-light text-black mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Notre Histoire - Simple */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light text-black mb-4">
              Notre Histoire
            </h2>
            <div className="w-16 h-px bg-black mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center">
              <h3 className="text-2xl font-light text-black mb-6">
                Fondée en 2020
              </h3>
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                GREGA OPEN DOOR naît de la volonté de moderniser le secteur immobilier. 
                Nous avons identifié les difficultés rencontrées par les locataires : 
                processus longs, manque de transparence, et accompagnement insuffisant.
              </p>
              
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                Notre approche : simplifier, accélérer et personnaliser chaque étape 
                de votre recherche immobilière. Aujourd'hui, nous sommes présents dans 
                8 grandes villes françaises avec une équipe de 15 conseillers experts.
              </p>

              <p className="text-lg text-gray-600 font-light leading-relaxed">
                Plus qu'une agence, nous sommes vos partenaires pour trouver 
                le logement qui vous correspond vraiment.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Nos Bureaux - Pratique */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light text-black mb-4">
              Nos Bureaux
            </h2>
            <div className="w-16 h-px bg-black mx-auto mb-6"></div>
            <p className="text-gray-600 font-light">
              8 villes, 1 seule mission : vous accompagner
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { ville: "Paris", adresse: "15 Rue de Rivoli, 75001", tel: "01 42 33 44 55" },
              { ville: "Lyon", adresse: "25 Place Bellecour, 69002", tel: "04 78 22 33 44" },
              { ville: "Marseille", adresse: "10 Canebière, 13001", tel: "04 91 55 66 77" },
              { ville: "Toulouse", adresse: "8 Place du Capitole, 31000", tel: "05 61 44 55 66" },
              { ville: "Bordeaux", adresse: "12 Cours de l'Intendance, 33000", tel: "05 56 33 44 55" },
              { ville: "Lille", adresse: "20 Grand Place, 59000", tel: "03 20 22 33 44" },
              { ville: "Nantes", adresse: "5 Place Royale, 44000", tel: "02 40 11 22 33" },
              { ville: "Nice", adresse: "30 Promenade des Anglais, 06000", tel: "04 93 44 55 66" }
            ].map((bureau, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 border border-gray-200"
              >
                <h3 className="text-lg font-light text-black mb-4">
                  {bureau.ville}
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-start gap-2">
                    <FaMapMarkerAlt className="w-3 h-3 mt-1 flex-shrink-0" />
                    <span>{bureau.adresse}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaPhone className="w-3 h-3" />
                    <span>{bureau.tel}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Contact - Direct */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-light mb-6">
              Parlons de votre projet
            </h2>
            <p className="text-lg text-gray-300 font-light">
              Une question ? Un projet ? Contactez-nous directement
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (!showCalendly) {
                  setShowCalendly(true);
                }
              }}
              whileHover={{ y: -2 }}
              className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 font-light text-lg hover:bg-gray-800 transition-all duration-300"
            >
              <FaCalendarAlt className="w-5 h-5" />
              <span>Nous Contacter</span>
            </motion.button>
            
            <a
              href="tel:0953376141"
              className="px-6 py-3 border border-white text-white text-sm font-light hover:bg-white hover:text-black transition-colors"
            >
              09 53 37 61 41
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-8 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <FaEnvelope className="w-3 h-3" />
              <span>contact@gregaopendoor.fr</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="w-3 h-3" />
              <span>Lun-Ven 9h-18h</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal Calendly */}
      <Modal
        isOpen={showCalendly}
        onClose={() => setShowCalendly(false)}
        title="Consultation Gratuite"
      >
        <CalendlyWidget />
      </Modal>

      <Footer />
    </main>
  );
};

export default About; 