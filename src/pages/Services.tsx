import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaUsers, FaBuilding, FaGraduationCap, FaPhone, FaEnvelope } from 'react-icons/fa';
import Footer from '../components/Footer';
import { navigateToPage } from '../utils/navigation';

const Services = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extralight text-gray-900 mb-6"
          >
            Nos Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Des solutions immobilières complètes pour tous vos besoins
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaHome className="w-8 h-8" />,
                title: "Logement Particuliers",
                description: "Trouvez votre logement idéal avec notre accompagnement personnalisé",
                action: () => navigateToPage('/biens-a-louer')
              },
              {
                icon: <FaUsers className="w-8 h-8" />,
                title: "Logement Social",
                description: "Accès facilité aux logements à loyer modéré",
                action: () => window.open('tel:0953376141', '_self')
              },
              {
                icon: <FaBuilding className="w-8 h-8" />,
                title: "Solutions Entreprises",
                description: "Relocation et hébergement pour vos collaborateurs",
                action: () => window.open('mailto:contact@gregaopendoor.fr', '_self')
              },
              {
                icon: <FaGraduationCap className="w-8 h-8" />,
                title: "Étudiants",
                description: "Logements adaptés aux étudiants et jeunes actifs",
                action: () => navigateToPage('/biens-a-louer')
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-8 border border-gray-100 rounded-xl hover:border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-gray-900 text-white rounded-lg flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-light text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <button
                    onClick={service.action}
                    className="text-gray-900 font-medium hover:text-gray-700 transition-colors duration-300"
                  >
                    En savoir plus →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-light text-gray-900 mb-8"
          >
            Besoin d'aide ?
          </motion.h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="tel:0953376141"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors duration-300"
            >
              <FaPhone className="w-5 h-5" />
              <span>09 53 37 61 41</span>
            </motion.a>
            <motion.a
              href="mailto:contact@gregaopendoor.fr"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-3 border border-gray-900 text-gray-900 px-8 py-4 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              <FaEnvelope className="w-5 h-5" />
              <span>Nous contacter</span>
            </motion.a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Services; 