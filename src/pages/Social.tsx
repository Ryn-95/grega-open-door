import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaRulerCombined, FaBed, FaSearch, FaFilter, FaFileAlt, FaCheck } from 'react-icons/fa';
import Footer from '../components/Footer';

const Social = () => {
  const properties = [
    {
      id: 1,
      title: "Studio Social Paris 20",
      description: "Studio lumineux idéal pour étudiant ou jeune actif",
      price: "450€/mois",
      location: "Paris 20ème",
      surface: "25m²",
      rooms: "1",
      image: "/images/property2.jpg",
      features: ["Meublé", "Charges incluses", "APL"]
    },
    {
      id: 2,
      title: "2 Pièces Social Paris 13",
      description: "Appartement rénové proche des transports",
      price: "550€/mois",
      location: "Paris 13ème",
      surface: "45m²",
      rooms: "2",
      image: "/images/property3.jpg",
      features: ["Balcon", "Cave", "APL"]
    },
    {
      id: 3,
      title: "3 Pièces Familial Social",
      description: "Idéal pour famille, proche des écoles",
      price: "650€/mois",
      location: "Paris 19ème",
      surface: "65m²",
      rooms: "3",
      image: "/images/property4.jpg",
      features: ["Ascenseur", "Parking", "APL"]
    }
  ];

  const requirements = [
    {
      title: "Plafond de ressources",
      description: "Vos revenus ne doivent pas dépasser un certain montant"
    },
    {
      title: "Situation régulière",
      description: "Être en situation régulière sur le territoire français"
    },
    {
      title: "Dossier complet",
      description: "Fournir tous les documents nécessaires à la demande"
    }
  ];

  return (
    <main className="min-h-screen bg-black pt-32">
      {/* Hero Section */}
      <section className="relative h-[50vh] mb-16">
        <div className="absolute inset-0">
          <img
            src="/images/property4.jpg"
            alt="Logement social"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 backdrop-blur-sm"></div>
        </div>
        <div className="relative h-full container mx-auto px-4 flex flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extralight mb-6 tracking-wider"
          >
            Logement Social
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl"
          >
            Des solutions de logement adaptées à votre situation
          </motion.p>
        </div>
      </section>

      {/* Section Critères */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-light uppercase tracking-wider mb-4">
                Critères d'éligibilité
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Pour bénéficier d'un logement social, vous devez répondre aux critères suivants
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {requirements.map((req, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl mb-4">
                    <FaCheck />
                  </div>
                  <h3 className="text-xl font-light mb-2">{req.title}</h3>
                  <p className="text-gray-400 text-sm">{req.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Recherche */}
      <section className="py-12 bg-white/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl">
                  <FaFilter />
                </div>
                <div>
                  <h2 className="text-2xl font-light tracking-wide">Rechercher un logement social</h2>
                  <p className="text-gray-400">Trouvez le logement qui correspond à vos besoins</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Nombre de pièces</label>
                  <select className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-xl appearance-none hover:border-white/30 transition-colors focus:outline-none focus:border-white/50">
                    <option>Toutes tailles</option>
                    <option>Studio</option>
                    <option>2 pièces</option>
                    <option>3 pièces</option>
                    <option>4 pièces et +</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Arrondissement</label>
                  <select className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-xl appearance-none hover:border-white/30 transition-colors focus:outline-none focus:border-white/50">
                    <option>Tous les arrondissements</option>
                    <option>Paris 13ème</option>
                    <option>Paris 19ème</option>
                    <option>Paris 20ème</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Surface minimum</label>
                  <select className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-xl appearance-none hover:border-white/30 transition-colors focus:outline-none focus:border-white/50">
                    <option>Toutes surfaces</option>
                    <option>20m²</option>
                    <option>30m²</option>
                    <option>40m²</option>
                    <option>50m²+</option>
                  </select>
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-8 bg-gradient-to-r from-white to-gray-200 text-black py-4 rounded-xl font-medium transition-all flex items-center justify-center gap-2 hover:opacity-90"
              >
                <FaSearch />
                Rechercher
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Biens Disponibles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-light uppercase tracking-wider mb-4">
              Logements Sociaux Disponibles
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Découvrez nos logements sociaux actuellement disponibles
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/10 transition-colors">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-sm font-medium">{property.price}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-light mb-2">{property.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{property.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <p className="text-gray-400 flex items-center gap-2">
                        <FaMapMarkerAlt className="text-white/50" />
                        {property.location}
                      </p>
                      <p className="text-gray-400 flex items-center gap-2">
                        <FaRulerCombined className="text-white/50" />
                        {property.surface}
                      </p>
                      <p className="text-gray-400 flex items-center gap-2">
                        <FaBed className="text-white/50" />
                        {property.rooms} pièce{property.rooms > 1 ? 's' : ''}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {property.features.map((feature, i) => (
                        <span
                          key={i}
                          className="bg-white/10 px-3 py-1 rounded-full text-sm hover:bg-white/20 transition-colors"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl font-light tracking-wide transition-colors flex items-center justify-center gap-2"
                    >
                      <FaFileAlt className="text-white/70" />
                      Déposer un dossier
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Social; 