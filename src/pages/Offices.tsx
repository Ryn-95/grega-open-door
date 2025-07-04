import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaCalendarAlt, FaTimes } from 'react-icons/fa'
import Footer from '../components/Footer'

const Offices = () => {
  const [showCalendly, setShowCalendly] = useState(false);

  const offices = [
    {
      id: 1,
      name: 'Paris',
      address: '37 rue des Maturins, 75008',
      phone: '09 53 37 61 41',
      email: 'paris@gregaopendoor.fr'
    },
    {
      id: 2,
      name: 'Lyon',
      address: '25 Place Bellecour, 69002',
      phone: '04 78 22 33 44',
      email: 'lyon@gregaopendoor.fr'
    },
    {
      id: 3,
      name: 'Marseille',
      address: '10 La Canebière, 13001',
      phone: '04 91 55 66 77',
      email: 'marseille@gregaopendoor.fr'
    },
    {
      id: 4,
      name: 'Toulouse',
      address: '8 Place du Capitole, 31000',
      phone: '05 61 44 55 66',
      email: 'toulouse@gregaopendoor.fr'
    },
    {
      id: 5,
      name: 'Bordeaux',
      address: '12 Cours de l\'Intendance, 33000',
      phone: '05 56 33 44 55',
      email: 'bordeaux@gregaopendoor.fr'
    },
    {
      id: 6,
      name: 'Lille',
      address: '20 Grand Place, 59000',
      phone: '03 20 22 33 44',
      email: 'lille@gregaopendoor.fr'
    },
    {
      id: 7,
      name: 'Nantes',
      address: '5 Place Royale, 44000',
      phone: '02 40 11 22 33',
      email: 'nantes@gregaopendoor.fr'
    },
    {
      id: 8,
      name: 'Nice',
      address: '30 Promenade des Anglais, 06000',
      phone: '04 93 44 55 66',
      email: 'nice@gregaopendoor.fr'
    }
  ];

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
        <div className="max-w-3xl mx-auto text-center px-6">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="text-6xl md:text-7xl font-light text-black leading-tight mb-8">
              Bureaux
            </h1>
            <p className="text-lg text-gray-600 font-light">
              8 villes • 15 conseillers • Lun-Ven 9h-18h
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section Liste Ultra-Épurée */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="space-y-12">
            {offices.map((office, index) => (
              <motion.div
                key={office.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="py-8 border-b border-gray-100 hover:border-gray-300 transition-colors duration-300">
                  <div className="grid md:grid-cols-4 gap-6 items-center">
                    
                    {/* Ville */}
                    <div>
                      <h3 className="text-2xl font-light text-black">
                        {office.name}
                      </h3>
                    </div>

                    {/* Adresse */}
                    <div className="flex items-center gap-3">
                      <FaMapMarkerAlt className="w-3 h-3 text-gray-400" />
                      <span className="text-sm text-gray-600 font-light">
                        {office.address}
                      </span>
                    </div>

                    {/* Téléphone */}
                    <div className="flex items-center gap-3">
                      <FaPhone className="w-3 h-3 text-gray-400" />
                      <a 
                        href={`tel:${office.phone.replace(/\s/g, '')}`}
                        className="text-sm text-gray-600 font-light hover:text-black transition-colors"
                      >
                        {office.phone}
                      </a>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-3">
                      <FaEnvelope className="w-3 h-3 text-gray-400" />
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
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Contact Final - Ultra Simple */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center px-6">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-light text-black mb-8">
              Une question ?
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:contact@gregaopendoor.fr"
                whileHover={{ y: -2 }}
                className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 font-light text-lg hover:bg-gray-800 transition-all duration-300"
              >
                <FaEnvelope className="w-5 h-5" />
                <span>Nous Contacter</span>
              </motion.a>
              
              <a
                href="tel:0953376141"
                className="px-8 py-3 border border-black text-black font-light hover:bg-black hover:text-white transition-colors"
              >
                09 53 37 61 41
              </a>
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

export default Offices; 