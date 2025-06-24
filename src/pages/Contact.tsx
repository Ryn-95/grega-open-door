import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt, FaPaperPlane } from 'react-icons/fa';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Création du lien mailto avec les données du formulaire
    const subject = encodeURIComponent(formData.sujet || 'Contact depuis le site GREGA');
    const body = encodeURIComponent(`
Nom: ${formData.nom}
Email: ${formData.email}
Téléphone: ${formData.telephone}

Message:
${formData.message}
    `);
    
    window.open(`mailto:contact@gregaopendoor.fr?subject=${subject}&body=${body}`, '_self');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
            Contactez-nous
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Notre équipe est là pour vous accompagner dans votre projet immobilier
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Informations de contact */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-light text-gray-900 mb-8">Parlons de votre projet</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-gray-900 mb-2">Téléphone</h3>
                    <a href="tel:0953376141" className="text-gray-600 hover:text-gray-900 transition-colors">
                      09 53 37 61 41
                    </a>
                    <p className="text-gray-500 text-sm mt-1">Lun-Ven 9h-18h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-gray-900 mb-2">Email</h3>
                    <a href="mailto:contact@gregaopendoor.fr" className="text-gray-600 hover:text-gray-900 transition-colors">
                      contact@gregaopendoor.fr
                    </a>
                    <p className="text-gray-500 text-sm mt-1">Réponse sous 24h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaCalendarAlt className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-gray-900 mb-2">Consultation</h3>
                    <button
                      onClick={() => window.open('https://calendly.com/contact-gregaopendoor/consultation', '_blank')}
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Réserver un créneau
                    </button>
                    <p className="text-gray-500 text-sm mt-1">Gratuit et sans engagement</p>
                  </div>
                </div>
              </div>

              {/* Horaires */}
              <div className="mt-12 p-6 bg-gray-50 rounded-xl">
                <h3 className="text-xl font-light text-gray-900 mb-4">Horaires d'ouverture</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span>9h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi</span>
                    <span>9h00 - 13h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche</span>
                    <span>Fermé</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Formulaire de contact */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-light text-gray-900 mb-6">Envoyez-nous un message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Nom *
                      </label>
                      <input
                        type="text"
                        name="nom"
                        required
                        value={formData.nom}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-gray-900 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-gray-900 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-gray-900 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Sujet
                      </label>
                      <select
                        name="sujet"
                        value={formData.sujet}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-gray-900 focus:outline-none transition-colors"
                      >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="Recherche de logement">Recherche de logement</option>
                        <option value="Logement social">Logement social</option>
                        <option value="Services entreprises">Services entreprises</option>
                        <option value="Autre">Autre</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Décrivez-nous votre projet..."
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-gray-900 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gray-900 text-white py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center gap-3"
                  >
                    <FaPaperPlane className="w-4 h-4" />
                    <span>Envoyer le message</span>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-light text-gray-900 mb-8"
          >
            Besoin d'une réponse immédiate ?
          </motion.h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="tel:0953376141"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors duration-300"
            >
              <FaPhone className="w-5 h-5" />
              <span>Appelez maintenant</span>
            </motion.a>
            <motion.button
              onClick={() => window.open('https://calendly.com/contact-gregaopendoor/consultation', '_blank')}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-3 border border-gray-900 text-gray-900 px-8 py-4 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              <FaCalendarAlt className="w-5 h-5" />
              <span>Réserver un créneau</span>
            </motion.button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact; 