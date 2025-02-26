import { motion } from 'framer-motion'
import { useState } from 'react'

const services = [
  {
    name: 'Location Classique',
    image: '/images/gigi.jpg',
    description: 'Trouvez votre logement idéal parmi notre sélection de biens premium'
  },
  {
    name: 'Logement Social',
    image: '/images/girafe.jpg',
    description: 'Accompagnement personnalisé dans vos démarches de logement social'
  },
  {
    name: 'Constitution de Dossier',
    image: '/images/beaucoco.jpg',
    description: 'Optimisation et suivi de votre dossier pour maximiser vos chances'
  },
  {
    name: 'État des Lieux',
    image: '/images/mun.jpg',
    description: 'Service professionnel d\'état des lieux d\'entrée et de sortie'
  }
]

const Brands = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)
  }

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
            Nos Services Immobiliers
          </h2>
          <p className="section-text">
            GREGA OPEN DOOR vous propose une gamme complète de services immobiliers pour faciliter votre recherche de logement. Notre équipe d'experts vous accompagne à chaque étape, de la recherche à l'emménagement, en passant par la constitution de votre dossier.
          </p>
          <button className="btn-outline-white mt-8">
            Découvrir nos services
          </button>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {services.map((service) => (
                <div 
                  key={service.name}
                  className="w-full flex-shrink-0"
                >
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
                      <h3 className="text-white text-5xl uppercase tracking-wider font-light mb-4">
                        {service.name}
                      </h3>
                      <p className="text-white/80 text-xl max-w-2xl">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white"
          >
            <svg
              className="w-12 h-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white"
          >
            <svg
              className="w-12 h-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Brands 