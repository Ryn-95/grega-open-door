import { FaSearch } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 w-full relative z-10 flex flex-col items-center">
        {/* Titre principal */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extralight text-slate-800 leading-tight mb-4 tracking-tight">
            Simplifiez votre recherche
            <span className="block font-normal text-slate-700">immobilière</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-light max-w-2xl mx-auto">
            Trouvez, gérez et louez un bien en moins de 3 clics.
          </p>
        </div>

        {/* Conteneur pour la barre et les illustrations */}
        <div className="relative flex justify-center items-center w-full max-w-5xl mb-20">
          {/* Illustration gauche */}
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            src="/3D/Entonnoir.png"
            alt="Entonnoir 3D"
            className="hidden xl:block absolute -left-32 -bottom-8 w-64 object-contain select-none pointer-events-none"
          />

          {/* Barre de recherche format pill */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
            className="bg-white/90 backdrop-blur-lg shadow-lg rounded-full flex flex-col lg:flex-row items-stretch lg:items-center overflow-hidden w-full max-w-3xl border border-gray-100"
          >
            <div className="flex-[1.2] flex items-center px-8 py-3 gap-3">
              <span className="text-slate-500 text-sm hidden md:inline">Type</span>
              <select className="flex-1 bg-transparent outline-none text-slate-800 font-medium text-sm w-full cursor-pointer">
                <option>Appartement</option>
                <option>Maison</option>
                <option>Studio</option>
              </select>
            </div>
            <span className="hidden lg:block w-px h-6 bg-slate-200 self-center" />
            <div className="flex-[1.5] flex items-center px-8 py-3">
              <input
                type="text"
                placeholder="Localisation"
                className="w-full bg-transparent outline-none text-slate-800 text-sm placeholder:text-slate-400"
              />
            </div>
            <span className="hidden lg:block w-px h-6 bg-slate-200 self-center" />
            <div className="flex-1 flex items-center px-8 py-3">
              <input
                type="text"
                placeholder="Surface min (m²)"
                className="w-full bg-transparent outline-none text-slate-800 text-sm placeholder:text-slate-400"
              />
            </div>
            <button className="flex items-center justify-center gap-2 bg-gradient-to-br from-slate-900 to-slate-800 hover:from-slate-800 text-white p-4 transition-all duration-300">
              <FaSearch className="w-4 h-4" />
              <span className="text-sm font-medium hidden lg:inline">Rechercher</span>
            </button>
          </motion.div>

          {/* Illustration droite */}
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            src="/3D/Cle_devantlaporte.png"
            alt="Clé 3D"
            className="hidden xl:block absolute -right-36 -bottom-16 w-[380px] object-contain select-none pointer-events-none"
          />
        </div>

        {/* Bandeau ultra épuré de liens */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center items-start gap-16"
        >
          {[
            { href: '/biens-a-louer', label: 'Nos biens à louer', img: '/3D/mini_immeuble.png' },
            { href: '/proprietaires', label: 'Vous êtes propriétaire ?', img: '/3D/seragedemaindevantunemaison.png' },
            { href: '/services', label: 'Nos partenaires', img: '/3D/Personnagealaloupe.png' }
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group flex flex-col items-center text-center transition-transform duration-300 ease-out hover:-translate-y-1.5"
            >
              <img src={item.img} alt={item.label} className="h-16 w-16 object-contain mb-4" />
              <span className="text-slate-600 text-sm md:text-base font-medium group-hover:text-slate-900 transition-colors">
                {item.label}
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 