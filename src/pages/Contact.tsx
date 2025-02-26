import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { images } from '../data/images'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <div className="absolute inset-0">
          <img
            src={images.contactBg}
            alt="Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <h1 className="text-5xl md:text-7xl font-light uppercase tracking-wider mb-8">
                Contactez-nous
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                Notre équipe est à votre disposition pour répondre à toutes vos questions
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <FaPhone className="w-8 h-8" />,
                title: "Téléphone",
                info: ["+33 1 23 45 67 89", "+33 1 23 45 67 90"],
                description: "Du lundi au vendredi, 9h-18h"
              },
              {
                icon: <FaEnvelope className="w-8 h-8" />,
                title: "Email",
                info: ["contact@gregaopendoor.fr", "support@gregaopendoor.fr"],
                description: "Réponse sous 24h"
              },
              {
                icon: <FaMapMarkerAlt className="w-8 h-8" />,
                title: "Adresse",
                info: ["123 Avenue des Champs-Élysées", "75008 Paris, France"],
                description: "Métro : Charles de Gaulle - Étoile"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 rounded-2xl p-8 hover:bg-white/10 transition-colors"
              >
                <div className="text-white/60 mb-6">{item.icon}</div>
                <h3 className="text-xl font-light uppercase tracking-wider mb-4">
                  {item.title}
                </h3>
                {item.info.map((line, i) => (
                  <p key={i} className="text-white mb-2">{line}</p>
                ))}
                <p className="text-gray-400 mt-4">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Formulaire de Contact */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-light uppercase tracking-wider mb-8">
                Envoyez-nous un message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm uppercase tracking-wider text-gray-400 mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-white/30 transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm uppercase tracking-wider text-gray-400 mb-2">
                      Prénom
                    </label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-white/30 transition-colors"
                      placeholder="Votre prénom"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm uppercase tracking-wider text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm uppercase tracking-wider text-gray-400 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="+33 6 XX XX XX XX"
                  />
                </div>

                <div>
                  <label className="block text-sm uppercase tracking-wider text-gray-400 mb-2">
                    Sujet
                  </label>
                  <select className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-white/30 transition-colors">
                    <option value="">Sélectionnez un sujet</option>
                    <option value="location">Location</option>
                    <option value="social">Logement Social</option>
                    <option value="dossier">Constitution de Dossier</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm uppercase tracking-wider text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="Votre message..."
                  ></textarea>
                </div>

                <button type="submit" className="w-full bg-white text-black px-8 py-4 rounded-lg hover:bg-white/90 transition-all">
                  Envoyer le message
                </button>
              </form>
            </motion.div>

            {/* Informations Complémentaires */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl font-light uppercase tracking-wider mb-8">
                  Horaires d'ouverture
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-gray-300">Lundi - Vendredi</span>
                    <span className="text-white">9h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-gray-300">Samedi</span>
                    <span className="text-white">10h00 - 16h00</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-gray-300">Dimanche</span>
                    <span className="text-white">Fermé</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-light uppercase tracking-wider mb-8">
                  Suivez-nous
                </h2>
                <div className="flex space-x-6">
                  <a href="#" className="text-white/60 hover:text-white transition-colors">
                    <FaInstagram className="w-8 h-8" />
                  </a>
                  <a href="#" className="text-white/60 hover:text-white transition-colors">
                    <FaLinkedin className="w-8 h-8" />
                  </a>
                  <a href="#" className="text-white/60 hover:text-white transition-colors">
                    <FaWhatsapp className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-4xl uppercase tracking-wider font-light mb-8">
              Nous Trouver
            </h2>
            <p className="text-gray-300">
              Nos bureaux sont situés en plein cœur de Paris, facilement accessibles en transport en commun.
            </p>
          </motion.div>
          
          <div className="h-[400px] rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.2168256289745!2d2.3002657156740614!3d48.87248397928882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc7f85bf1ef%3A0x608b9f0242d8d9d5!2s30%20Rue%20de%20Berri%2C%2075008%20Paris%2C%20France!5e0!3m2!1sen!2s!4v1645789123456!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="grayscale contrast-125"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Contact 