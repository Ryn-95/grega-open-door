import { FaSearch, FaPhone, FaCalendar } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { PopupModal } from "react-calendly"
import { useState } from "react"

const Hero = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false)

  return (
    <>
    <section className="relative min-h-[100dvh] flex items-center bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full relative z-10 flex flex-col items-center">
        {/* Titre principal */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-[2rem] leading-[1.2] md:text-4xl lg:text-5xl xl:text-6xl font-extralight text-slate-800 tracking-tight mb-3 md:mb-4 px-3 md:px-0">
            Simplifiez votre recherche
            <span className="block font-normal text-slate-700 mt-1">immobilière</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-slate-500 font-light max-w-2xl mx-auto px-3 md:px-4">
            Trouvez, gérez et louez un bien en moins de 3 clics.
          </p>
        </div>

        {/* Conteneur pour la barre et les illustrations */}
        <div className="relative flex justify-center items-center w-full max-w-5xl mb-8 md:mb-12">
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
            className="bg-white/90 backdrop-blur-lg shadow-lg rounded-2xl md:rounded-full flex flex-col md:flex-row items-stretch md:items-center overflow-hidden w-full max-w-3xl border border-gray-100"
          >
            <div className="flex-1 md:flex-[1.2] flex items-center px-4 md:px-8 py-4 gap-3 border-b md:border-b-0 md:border-r border-gray-100">
              <span className="text-slate-500 text-sm hidden md:inline">Type</span>
              <select className="flex-1 bg-transparent outline-none text-slate-800 font-medium text-sm w-full cursor-pointer">
                <option>Appartement</option>
                <option>Maison</option>
                <option>Studio</option>
              </select>
            </div>
            <div className="flex-1 md:flex-[1.5] flex items-center px-4 md:px-8 py-4 border-b md:border-b-0 md:border-r border-gray-100">
              <input
                type="text"
                placeholder="Localisation"
                className="w-full bg-transparent outline-none text-slate-800 text-sm placeholder:text-slate-400"
              />
            </div>
            <div className="flex-1 flex items-center px-4 md:px-8 py-4">
              <input
                type="text"
                placeholder="Surface min (m²)"
                className="w-full bg-transparent outline-none text-slate-800 text-sm placeholder:text-slate-400"
              />
            </div>
            <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-gradient-to-br from-slate-900 to-slate-800 hover:from-slate-800 text-white p-4 transition-all duration-300">
              <FaSearch className="w-4 h-4" />
              <span className="text-sm font-medium">Rechercher</span>
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

        {/* Boutons d'appel à l'action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center items-stretch md:items-center w-full md:w-auto px-4 mb-8 md:mb-16"
        >
          <a
            href="tel:0953376141"
            className="flex items-center justify-center gap-3 px-6 md:px-8 py-4 bg-white text-slate-800 rounded-xl hover:bg-slate-50 transition-all duration-300 border border-slate-200 shadow-sm hover:shadow-md group w-full md:w-auto"
          >
            <FaPhone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            <span className="font-medium">09 53 37 61 41</span>
          </a>
          <button
            onClick={() => setIsCalendlyOpen(true)}
            className="flex items-center justify-center gap-3 px-6 md:px-8 py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl group w-full md:w-auto"
          >
            <FaCalendar className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            <span className="font-medium">Prendre rendez-vous</span>
          </button>
        </motion.div>

        {/* Barre de navigation */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="bg-[#2A3942] text-white py-4 shadow-lg mb-8 w-screen -mx-4 md:-mx-6"
        >
          <div className="flex justify-center items-center">
            <div className="flex gap-4 md:gap-8 lg:gap-16 flex-wrap justify-center">
              <a href="/biens-a-louer" className="hover:text-gray-300 transition-colors text-sm md:text-base">
                NOS BIENS À LOUER
              </a>
              <a href="/prix-loyers-paris" className="hover:text-gray-300 transition-colors text-sm md:text-base bg-red-600 px-3 py-1 rounded-md font-semibold">
                🔥 PRIX LOYERS 2025
              </a>
              <a href="/proprietaires" className="hover:text-gray-300 transition-colors text-sm md:text-base">
                VOUS ÊTES PROPRIÉTAIRE ?
              </a>
              <a href="/partenaires" className="hover:text-gray-300 transition-colors text-sm md:text-base">
                NOS PARTENAIRES
              </a>
            </div>
          </div>
        </motion.nav>

        {/* Calendly Modal */}
        <PopupModal
          url="https://calendly.com/contact-gregaopendoor/consultation"
          onModalClose={() => setIsCalendlyOpen(false)}
          open={isCalendlyOpen}
          rootElement={document.getElementById("root")!}
          styles={{
            height: '100%',
            width: '100%',
            position: 'fixed',
            zIndex: 50,
          }}
        />


      </div>
    </section>
    </>
  )
}

export default Hero 