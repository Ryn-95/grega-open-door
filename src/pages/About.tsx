import { motion } from 'framer-motion'
import { images } from '../data/images'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <div className="absolute inset-0">
          <img
            src={images.aboutBg}
            alt="À propos"
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
              <h1 className="text-5xl md:text-7xl font-light text-white uppercase tracking-wider mb-8">
                Notre Histoire
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Histoire Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl text-gray-900 uppercase tracking-wider font-light mb-8">
              Notre Passion
            </h2>
            <p className="text-gray-600 mb-12">
              Depuis notre création, nous nous efforçons de créer des expériences uniques 
              et mémorables. Notre passion pour l'excellence et l'attention aux détails 
              nous ont permis de devenir un leader dans notre domaine.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Équipe Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl text-gray-900 uppercase tracking-wider font-light mb-8">
              Notre Équipe
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                image: images.team1,
                name: "Sophie Martin",
                role: "Directrice Générale"
              },
              {
                image: images.team2,
                name: "Thomas Bernard",
                role: "Chef des Opérations"
              },
              {
                image: images.team3,
                name: "Lucas Dubois",
                role: "Directeur Artistique"
              },
              {
                image: images.team4,
                name: "Marie Laurent",
                role: "Responsable Événementiel"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl text-gray-900 font-light mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About 