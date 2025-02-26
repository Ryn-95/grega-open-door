import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/paris-sunset.jpg"
          alt="Paris Sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-light uppercase tracking-wider mb-8">
              Trouver, Visitez, Emménagez
            </h1>
            <button className="btn-outline-white">
              Découvrir nos biens
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-[1px] h-16 bg-white/50 mx-auto" />
      </motion.div>
    </section>
  )
}

export default Hero 