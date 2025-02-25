import { motion } from 'framer-motion'
import { FaClock, FaUsers, FaHandshake, FaHistory, FaCheck, FaRegLightbulb, FaRegSmile, FaSearch, FaHome, FaRegBuilding, FaMapMarkedAlt } from 'react-icons/fa'
import { images } from '../data/images'

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative min-h-screen w-full bg-gradient-to-br from-white to-blue-50 overflow-hidden">
        {/* Points de décoration */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-orange-400"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{
                duration: 3,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mb-8"
              >
                <span className="badge badge-primary inline-block mb-4">
                  TROUVEZ VOTRE CHEZ-VOUS
                </span>
                <h1 className="text-[3.5rem] leading-tight font-bold text-[#1a237e] mb-6">
                  On te trouve <br />
                  <span className="text-[#1a237e] relative">
                    Ze Appart !
                    <motion.svg
                      className="absolute -right-12 -top-8 w-10 h-10 text-orange-400"
                      animate={{ rotate: [0, 15, -15, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </motion.svg>
                  </span>
                </h1>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl text-gray-600 mb-4"
              >
                À la recherche de l'appartement idéal ?
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-gray-600 mb-8 max-w-xl"
              >
                Chez Ze Appart, on te guide à chaque étape : 
                de la constitution de ton dossier jusqu'à l'état des lieux.
                Notre équipe s'engage à trouver le logement parfait pour toi.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn btn-primary"
                >
                  DÉCOUVRE NOS SERVICES →
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn btn-outline"
                >
                  PRENDRE RENDEZ-VOUS
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="mt-12 flex items-center gap-8"
              >
                <div className="flex -space-x-4">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-full border-2 border-white bg-gray-200"
                    />
                  ))}
                </div>
                <p className="text-gray-600">
                  <span className="text-[#1a237e] font-semibold">+200</span> personnes
                  <br />nous font confiance
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <motion.div
                  className="absolute -left-20 top-1/2 transform -translate-y-1/2 bg-white rounded-2xl p-6 shadow-lg"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <FaCheck className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Dossier validé</p>
                      <p className="text-[#1a237e] font-semibold">En 24h chrono</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.img
                  src={images.modernBuilding}
                  alt="Immeuble moderne"
                  className="w-full max-w-2xl mx-auto object-cover rounded-2xl shadow-2xl"
                  animate={{ y: [-20, 20, -20] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                <motion.div
                  className="absolute -right-10 bottom-20 bg-white rounded-2xl p-6 shadow-lg"
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <FaRegSmile className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Satisfaction</p>
                      <p className="text-[#1a237e] font-semibold">98% clients satisfaits</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Vague décorative */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="#F8FAFC"/>
          </svg>
        </div>
      </div>

      {/* Nouvelle Section - Recherche Rapide */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-[#1a237e]">
                Trouve ton logement idéal
              </h3>
              <p className="text-gray-600 mt-2">
                Utilise notre outil de recherche intelligent
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a237e] focus:ring-2 focus:ring-[#1a237e] focus:ring-opacity-20 transition-all appearance-none">
                  <option>Type de bien</option>
                  <option>Appartement</option>
                  <option>Maison</option>
                  <option>Studio</option>
                </select>
                <FaHome className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <div className="relative">
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a237e] focus:ring-2 focus:ring-[#1a237e] focus:ring-opacity-20 transition-all appearance-none">
                  <option>Budget max</option>
                  <option>500€ - 800€</option>
                  <option>800€ - 1200€</option>
                  <option>1200€ - 1500€</option>
                  <option>1500€ +</option>
                </select>
                <FaRegBuilding className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <div className="relative">
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a237e] focus:ring-2 focus:ring-[#1a237e] focus:ring-opacity-20 transition-all appearance-none">
                  <option>Localisation</option>
                  <option>Paris</option>
                  <option>Lyon</option>
                  <option>Marseille</option>
                  <option>Bordeaux</option>
                </select>
                <FaMapMarkedAlt className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-6 bg-[#1a237e] text-white py-4 rounded-xl font-medium hover:bg-[#283593] transition-all flex items-center justify-center gap-2"
            >
              <FaSearch className="w-5 h-5" />
              Rechercher
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Nouvelle Section - Derniers Biens */}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="badge badge-primary">
              DERNIERS BIENS
            </span>
            <h2 className="heading-2 mt-6 mb-4">
              Découvrez nos dernières opportunités
            </h2>
            <p className="subtitle max-w-3xl mx-auto">
              Des biens sélectionnés avec soin pour répondre à vos critères
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: images.apartment1,
                title: "Studio Moderne",
                price: "750€/mois",
                location: "Paris 11ème",
                features: ["35m²", "Meublé", "Métro"]
              },
              {
                image: images.apartment2,
                title: "2 Pièces Lumineux",
                price: "1100€/mois",
                location: "Paris 15ème",
                features: ["45m²", "Balcon", "Parking"]
              },
              {
                image: images.apartment3,
                title: "3 Pièces Rénové",
                price: "1450€/mois",
                location: "Paris 17ème",
                features: ["65m²", "Vue Dégagée", "Cave"]
              }
            ].map((property, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full font-semibold text-[#1a237e]">
                    {property.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1a237e] mb-2">
                    {property.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex items-center gap-2">
                    <FaMapMarkedAlt className="text-gray-400" />
                    {property.location}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {property.features.map((feature, i) => (
                      <span
                        key={i}
                        className="bg-blue-50 text-[#1a237e] px-3 py-1 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Nouvelle Section - Témoignages */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="badge badge-primary">
              TÉMOIGNAGES
            </span>
            <h2 className="heading-2 mt-6 mb-4">
              Ce que nos clients disent de nous
            </h2>
            <p className="subtitle max-w-3xl mx-auto">
              Découvrez les expériences de ceux qui nous ont fait confiance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sophie M.",
                role: "Étudiante",
                image: images.testimonial1,
                text: "Ze Appart m'a permis de trouver mon studio en moins d'une semaine. Leur équipe est vraiment à l'écoute et efficace !"
              },
              {
                name: "Thomas L.",
                role: "Jeune actif",
                image: images.testimonial2,
                text: "Un service au top ! J'ai pu constituer mon dossier rapidement et obtenir mon appartement dans un quartier que j'adore."
              },
              {
                name: "Marie C.",
                role: "En couple",
                image: images.testimonial3,
                text: "Grâce à Ze Appart, nous avons trouvé notre appartement idéal. Le processus était simple et transparent."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-[#1a237e]">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Section Avantages */}
      <div className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="badge badge-primary">
              POURQUOI NOUS CHOISIR
            </span>
            <h2 className="heading-2 mt-6 mb-4">
              Une approche différente de l'immobilier
            </h2>
            <p className="subtitle max-w-3xl mx-auto">
              Nous révolutionnons la recherche de logement avec un processus 
              entièrement digitalisé et personnalisé.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaRegLightbulb className="w-8 h-8" />,
                title: "Processus Simplifié",
                description: "Un accompagnement sur-mesure et des démarches simplifiées pour une expérience sans stress."
              },
              {
                icon: <FaHandshake className="w-8 h-8" />,
                title: "Suivi Personnalisé",
                description: "Un conseiller dédié qui comprend vos besoins et vous accompagne à chaque étape."
              },
              {
                icon: <FaRegSmile className="w-8 h-8" />,
                title: "Satisfaction Garantie",
                description: "Nous nous engageons à trouver le logement qui correspond parfaitement à vos attentes."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-[#1a237e] mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1a237e] mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Section Statistiques */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaClock className="w-8 h-8" />,
                number: "120",
                label: "heures de recherche"
              },
              {
                icon: <FaUsers className="w-8 h-8" />,
                number: "200",
                label: "personnes logées"
              },
              {
                icon: <FaHandshake className="w-8 h-8" />,
                number: "30",
                label: "partenaires"
              },
              {
                icon: <FaHistory className="w-8 h-8" />,
                number: "4",
                label: "ans d'expérience"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-8 text-center group-hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-[#1a237e] mx-auto mb-6">
                    {stat.icon}
                  </div>
                  <motion.h3
                    initial={{ scale: 1 }}
                    whileInView={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-[#1a237e] mb-2"
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-gray-600">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Section CTA */}
      <div className="relative py-24 bg-gradient-to-br from-[#1a237e] to-[#283593] overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-white/10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{
                duration: 3,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Prêt à trouver ton futur chez-toi ?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-12">
              Commence l'aventure dès maintenant et laisse-nous t'accompagner 
              dans ta recherche de logement.
            </p>
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-[#1a237e] px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-50 transition-all"
            >
              COMMENCE TON PROJET →
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Home 