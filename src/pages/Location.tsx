import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaRulerCombined, FaBed, FaSearch, FaFilter } from 'react-icons/fa';
import Footer from '../components/Footer';

const Location = () => {
  const properties = [
    {
      id: 1,
      title: "Villa Moderne à Paris",
      description: "Magnifique villa contemporaine avec jardin paysager",
      price: "850,000 €",
      location: "Paris 16ème",
      surface: "180m²",
      rooms: "5",
      image: "/images/property1.jpg",
      features: ["Jardin", "Parking", "Cave"]
    },
    {
      id: 2,
      title: "Appartement Haussmannien",
      description: "Appartement de caractère avec moulures et parquet",
      price: "650,000 €",
      location: "Paris 8ème",
      surface: "120m²",
      rooms: "3",
      image: "/images/property2.jpg",
      features: ["Balcon", "Ascenseur", "Parquet"]
    },
    {
      id: 3,
      title: "Maison avec Jardin",
      description: "Belle maison familiale avec piscine chauffée",
      price: "450,000 €",
      location: "Neuilly-sur-Seine",
      surface: "150m²",
      rooms: "4",
      image: "/images/property3.jpg",
      features: ["Terrasse", "Garage", "Piscine"]
    }
  ];

  return (
    <main className="min-h-screen bg-black pt-32">
      {/* Hero Section */}
      <section className="relative h-[50vh] mb-16">
        <div className="absolute inset-0">
          <img
            src="/images/property1.jpg"
            alt="Location immobilière"
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
            Location Immobilière
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl"
          >
            Découvrez notre sélection de biens d'exception pour votre location
          </motion.p>
        </div>
      </section>

      {/* Section Filtres */}
      <section className="py-12">
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
                  <h2 className="text-2xl font-light tracking-wide">Filtrer les biens</h2>
                  <p className="text-gray-400">Trouvez le bien qui correspond à vos critères</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Type de bien</label>
                  <select className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-xl appearance-none hover:border-white/30 transition-colors focus:outline-none focus:border-white/50">
                    <option>Tous les types</option>
                    <option>Appartement</option>
                    <option>Maison</option>
                    <option>Villa</option>
                    <option>Studio</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Budget maximum</label>
                  <select className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-xl appearance-none hover:border-white/30 transition-colors focus:outline-none focus:border-white/50">
                    <option>Sans limite</option>
                    <option>1000 €/mois</option>
                    <option>1500 €/mois</option>
                    <option>2000 €/mois</option>
                    <option>2500 €/mois</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Surface minimum</label>
                  <select className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-xl appearance-none hover:border-white/30 transition-colors focus:outline-none focus:border-white/50">
                    <option>Toutes surfaces</option>
                    <option>30m²</option>
                    <option>50m²</option>
                    <option>70m²</option>
                    <option>90m²</option>
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

      {/* Section Biens */}
      <section className="py-16">
        <div className="container mx-auto px-4">
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
                        {property.rooms} pièces
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
                      Voir le bien
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

export default Location; 