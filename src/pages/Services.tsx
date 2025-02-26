import { motion } from 'framer-motion'
import { FaHome, FaFileAlt, FaHandshake, FaSearchLocation } from 'react-icons/fa'
import { images } from '../data/images'
import Footer from '../components/Footer'

const Services = () => {
  const services = [
    {
      icon: <FaHome className="w-12 h-12" />,
      title: "Location Classique",
      description: "Notre service de location classique comprend :",
      features: [
        "Recherche personnalisée de biens",
        "Visites accompagnées",
        "Négociation des conditions",
        "Assistance administrative"
      ]
    },
    {
      icon: <FaFileAlt className="w-12 h-12" />,
      title: "Logement Social",
      description: "Notre accompagnement en logement social inclut :",
      features: [
        "Évaluation de l'éligibilité",
        "Constitution du dossier",
        "Suivi des demandes",
        "Relations avec les bailleurs sociaux"
      ]
    },
    {
      icon: <FaHandshake className="w-12 h-12" />,
      title: "Gestion de Dossier",
      description: "Notre service de gestion de dossier comprend :",
      features: [
        "Collecte des documents",
        "Vérification de conformité",
        "Optimisation du dossier",
        "Suivi personnalisé"
      ]
    },
    {
      icon: <FaSearchLocation className="w-12 h-12" />,
      title: "État des Lieux",
      description: "Notre service d'état des lieux inclut :",
      features: [
        "Inspection détaillée",
        "Photos et documentation",
        "Rapport professionnel",
        "Assistance à la remise des clés"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <div className="absolute inset-0">
          <img
            src={images.serviceBg}
            alt="Services"
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
                Nos Services
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                Des solutions complètes pour votre recherche de logement
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Détaillés */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 rounded-2xl p-8 hover:bg-white/10 transition-colors"
              >
                <div className="text-white/80 mb-6">{service.icon}</div>
                <h2 className="text-2xl uppercase tracking-wider font-light mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-white/20 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Engagement */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl uppercase tracking-wider font-light mb-8">
              Notre Engagement
            </h2>
            <p className="text-gray-300 mb-12">
              Chez GREGA OPEN DOOR, nous nous engageons à vous offrir un service personnalisé et professionnel. Notre équipe d'experts est à votre disposition pour vous accompagner dans toutes les étapes de votre recherche de logement.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  number: "98%",
                  label: "Taux de satisfaction"
                },
                {
                  number: "24h",
                  label: "Délai de réponse moyen"
                },
                {
                  number: "100%",
                  label: "Accompagnement personnalisé"
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl font-light mb-2">{stat.number}</div>
                  <div className="text-gray-400 uppercase tracking-wider text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Services 