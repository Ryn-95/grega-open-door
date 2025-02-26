import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'
import { images } from '../data/images'
import Footer from '../components/Footer'

const Offices = () => {
  const offices = [
    {
      name: "Bureau Principal - Paris",
      address: "123 Avenue des Champs-Élysées",
      postal: "75008 Paris",
      phone: "+33 1 23 45 67 89",
      email: "paris@gregaopendoor.fr",
      hours: "Lun-Ven: 9h-18h, Sam: 10h-16h"
    },
    {
      name: "Agence Paris Est",
      address: "45 Rue de la République",
      postal: "75011 Paris",
      phone: "+33 1 23 45 67 90",
      email: "paris-est@gregaopendoor.fr",
      hours: "Lun-Ven: 9h-18h"
    },
    {
      name: "Agence Paris Ouest",
      address: "78 Avenue de la Grande Armée",
      postal: "75016 Paris",
      phone: "+33 1 23 45 67 91",
      email: "paris-ouest@gregaopendoor.fr",
      hours: "Lun-Ven: 9h-18h"
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <div className="absolute inset-0">
          <img
            src={images.modernBuilding}
            alt="Nos Bureaux"
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
                Nos Bureaux
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                Retrouvez-nous dans nos différentes agences à Paris
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offices Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 rounded-2xl p-8 hover:bg-white/10 transition-colors"
              >
                <h2 className="text-2xl font-light mb-6">{office.name}</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <FaMapMarkerAlt className="text-white/60 w-5 h-5 mt-1" />
                    <div>
                      <p className="text-white">{office.address}</p>
                      <p className="text-gray-400">{office.postal}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaPhone className="text-white/60 w-5 h-5" />
                    <p className="text-white">{office.phone}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaEnvelope className="text-white/60 w-5 h-5" />
                    <p className="text-white">{office.email}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaClock className="text-white/60 w-5 h-5" />
                    <p className="text-gray-400">{office.hours}</p>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Nos agences sont facilement accessibles en transport en commun et disposent d'un espace d'accueil confortable pour vous recevoir dans les meilleures conditions.
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

export default Offices 