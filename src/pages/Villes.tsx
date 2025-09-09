import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import Footer from '../components/Footer';

const Villes = () => {
  const villes = [
    {
      id: 'paris',
      nom: 'Paris',
      adresse: '37 rue des Maturins, 75008',
      image: '/images/paris-sunset.jpg'
    },
    {
      id: 'lyon',
      nom: 'Lyon',
      adresse: '25 Place Bellecour, 69002',
      image: '/images/modern-building.jpg'
    },
    {
      id: 'marseille',
      nom: 'Marseille',
      adresse: '10 La Canebière, 13001',
      image: '/images/property1.jpg'
    },
    {
      id: 'bordeaux',
      nom: 'Bordeaux',
      adresse: '12 Cours de l\'Intendance, 33000',
      image: '/images/property2.jpg'
    },
    {
      id: 'lille',
      nom: 'Lille',
      adresse: '20 Grand Place, 59000',
      image: '/images/property3.jpg'
    },
    {
      id: 'nice',
      nom: 'Nice',
      adresse: '30 Promenade des Anglais, 06000',
      image: '/images/property4.jpg'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="py-24 bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-5xl md:text-7xl font-extralight text-white mb-6 tracking-tight">
                    Présents <span className="font-normal text-slate-300">partout en France.</span>
                </h1>
                <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto">
                    Découvrez nos agences locales, toujours prêtes à vous accueillir et vous accompagner dans votre projet immobilier.
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.7, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.165, 0.84, 0.44, 1], delay: 0.2 }}
                className="mt-12"
            >
                <img src="/3D/Carte3DdelaFrancE.png" alt="Carte de France" className="w-full h-auto max-w-3xl mx-auto" />
            </motion.div>
        </div>
      </section>

      {/* Liste des Villes */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-extralight text-slate-800 mb-4 tracking-tight">
                    Nos agences locales
                </h2>
                <p className="text-lg text-slate-500 font-light max-w-3xl mx-auto">
                    Proximité, expertise et connaissance du marché local.
                </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {villes.map((ville, index) => (
                    <motion.div
                        key={ville.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-slate-100/80 transition-all duration-300 group"
                    >
                        <div className="relative h-56">
                            <img src={ville.image} alt={`Vue de ${ville.nom}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <h3 className="absolute bottom-4 left-6 text-3xl font-light text-white">{ville.nom}</h3>
                        </div>
                        <div className="p-6 bg-slate-50">
                            <div className="flex items-center gap-4 mb-4">
                                <FaMapMarkerAlt className="w-5 h-5 text-slate-400 flex-shrink-0" />
                                <p className="text-slate-700">{ville.adresse}</p>
                            </div>
                            <div className="flex justify-between gap-4 mt-6">
                                <a href={`mailto:contact-${ville.id}@gregaopendoor.fr`} className="flex-1 text-center bg-slate-800 text-white px-6 py-3 rounded-xl font-medium hover:bg-slate-700 transition-all text-sm">
                                    Contacter
                                </a>
                                <a href={`tel:0953376141`} className="flex-1 text-center bg-white text-slate-800 px-6 py-3 rounded-xl font-medium hover:bg-slate-200 border border-slate-200 transition-all text-sm">
                                    Appeler
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Prochainement */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <img src="/3D/panneauavendre.png" alt="Prochainement" className="w-32 h-32 mx-auto mb-6" />
                <h2 className="text-3xl font-extralight text-slate-800 mb-4">
                    Bientôt près de chez vous
                </h2>
                <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto font-light">
                    Notre réseau s'agrandit ! Nous préparons notre arrivée à <strong>Toulouse</strong> et <strong>Nantes</strong>. Restez connectés pour suivre nos prochaines ouvertures.
                </p>
            </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Villes;