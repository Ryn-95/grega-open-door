import { motion } from 'framer-motion'
import { FaSearch, FaHome, FaMapMarkerAlt, FaRegBuilding, FaCheck, FaUsers } from 'react-icons/fa'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import Brands from '../components/Brands'
import Footer from '../components/Footer'
import { images } from '../data/images'

const Home = () => {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Categories />
      <Brands />

      {/* Section Recherche */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-light uppercase tracking-wider mb-4">
                Rechercher votre logement
              </h2>
              <p className="text-gray-400">
                Trouvez le logement qui correspond à vos critères
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <select className="w-full bg-white/5 border border-white/20 text-white px-4 py-3 rounded-xl appearance-none">
                  <option>Type de bien</option>
                  <option>Appartement</option>
                  <option>Studio</option>
                  <option>Maison</option>
                </select>
                <FaHome className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/50" />
              </div>
              
              <div className="relative">
                <select className="w-full bg-white/5 border border-white/20 text-white px-4 py-3 rounded-xl appearance-none">
                  <option>Arrondissement</option>
                  <option>Paris 1er</option>
                  <option>Paris 2ème</option>
                  <option>Paris 3ème</option>
                </select>
                <FaMapMarkerAlt className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/50" />
              </div>
              
              <div className="relative">
                <select className="w-full bg-white/5 border border-white/20 text-white px-4 py-3 rounded-xl appearance-none">
                  <option>Budget max</option>
                  <option>500€ - 800€</option>
                  <option>800€ - 1200€</option>
                  <option>1200€ +</option>
                </select>
                <FaRegBuilding className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/50" />
              </div>
            </div>
            
            <button className="w-full mt-6 bg-white text-black py-4 rounded-xl font-medium hover:bg-white/90 transition-all flex items-center justify-center gap-2">
              <FaSearch />
              Lancer la recherche
            </button>
          </motion.div>
        </div>
      </section>

      {/* Section Derniers Biens */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-light uppercase tracking-wider mb-4">
              Nos derniers biens disponibles
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Découvrez notre sélection de logements récemment mis en location
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/images/property1.jpg",
                title: "Studio Lumineux",
                location: "Paris 11ème",
                price: "750€/mois",
                features: ["25m²", "Meublé", "Calme"]
              },
              {
                image: "/images/property2.jpg",
                title: "2 Pièces Moderne",
                location: "Paris 15ème",
                price: "1 100€/mois",
                features: ["45m²", "Balcon", "Parking"]
              },
              {
                image: "/images/property3.jpg",
                title: "3 Pièces Familial",
                location: "Paris 20ème",
                price: "1 400€/mois",
                features: ["65m²", "Rénové", "Cave"]
              }
            ].map((property, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 rounded-2xl overflow-hidden group"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-black/80 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium">{property.price}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-2">{property.title}</h3>
                  <p className="text-gray-400 mb-4 flex items-center gap-2">
                    <FaMapMarkerAlt />
                    {property.location}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {property.features.map((feature, i) => (
                      <span
                        key={i}
                        className="bg-white/10 px-3 py-1 rounded-full text-sm"
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
      </section>

      {/* Section Statistiques */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <FaCheck className="w-8 h-8" />,
                number: "200+",
                label: "Logements disponibles"
              },
              {
                icon: <FaUsers className="w-8 h-8" />,
                number: "500+",
                label: "Clients satisfaits"
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
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center text-white/80">
                  {stat.icon}
                </div>
                <div className="text-3xl font-light mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-properties.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-light uppercase tracking-wider mb-6">
              Prêt à trouver votre logement idéal ?
            </h2>
            <p className="text-gray-300 mb-8">
              Contactez-nous dès maintenant pour être accompagné dans votre recherche
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-full hover:bg-white/90 transition-all">
              Nous contacter
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default Home 