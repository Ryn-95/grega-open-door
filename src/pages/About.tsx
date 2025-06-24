import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUsers, FaAward, FaClock } from 'react-icons/fa';
import Footer from '../components/Footer';

const About = () => {
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
            À Propos de GREGA
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Votre partenaire de confiance pour tous vos projets immobiliers
          </motion.p>
        </div>
      </section>

      {/* Notre Mission */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-light text-gray-900 mb-6">Notre Mission</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                GREGA OPEN DOOR révolutionne l'expérience immobilière en France. 
                Nous croyons que trouver un logement ne devrait pas être un parcours du combattant.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Grâce à notre expertise, notre réseau et notre technologie, nous accompagnons 
                chaque client vers la réussite de son projet immobilier, qu'il s'agisse de 
                trouver un logement, d'investir ou de gérer un patrimoine.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: <FaUsers className="w-6 h-6" />, number: "2500+", label: "Clients satisfaits" },
                { icon: <FaAward className="w-6 h-6" />, number: "98%", label: "Taux de réussite" },
                { icon: <FaClock className="w-6 h-6" />, number: "15", label: "Jours en moyenne" },
                { icon: <FaMapMarkerAlt className="w-6 h-6" />, number: "8", label: "Villes couvertes" }
              ].map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-light text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-light text-gray-900 mb-6">Nos Valeurs</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident notre action au quotidien
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description: "Nous visons l'excellence dans chaque interaction, chaque conseil, chaque service proposé à nos clients."
              },
              {
                title: "Transparence", 
                description: "Honnêteté et clarté dans tous nos échanges. Nos clients connaissent toujours les enjeux et les coûts."
              },
              {
                title: "Innovation",
                description: "Nous intégrons les dernières technologies pour améliorer constamment l'expérience de nos clients."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-white rounded-xl border border-gray-100"
              >
                <h3 className="text-xl font-light text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-light text-gray-900 mb-8"
          >
            Parlons de votre projet
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

export default About; 