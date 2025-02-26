import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const categories = [
  {
    title: 'Location',
    image: '/images/location.jpg',
    link: '/location',
    description: 'Découvrez nos biens disponibles à la location'
  },
  {
    title: 'Social',
    image: '/images/social.jpg',
    link: '/social',
    description: 'Accédez à nos logements sociaux'
  }
]

const Categories = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="section-title">
            Votre partenaire immobilier de confiance
          </h2>
          <p className="section-text">
            Chez GREGA OPEN DOOR, nous comprenons que chaque projet immobilier est unique. Notre mission est de vous accompagner à chaque étape, de la recherche à l'emménagement. Nous prenons en charge l'intégralité de votre dossier pour vous offrir une expérience sereine et professionnelle, que ce soit pour une location classique ou un logement social.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link 
                to={category.link} 
                className="block group relative aspect-video overflow-hidden rounded-2xl"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h3 className="text-white text-4xl uppercase tracking-wider font-light mb-4">
                    {category.title}
                  </h3>
                  <p className="text-white/80 text-center max-w-xs">
                    {category.description}
                  </p>
                </div>
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <span className="text-white uppercase text-sm tracking-wider px-6 py-2 border border-white/30 rounded-full hover:bg-white/10 transition-colors">
                    Découvrir
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories 