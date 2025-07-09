import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaPhone, FaEnvelope, FaMapMarkerAlt, FaShieldAlt, FaUserCheck, FaClock, FaHandshake, FaArrowRight, FaTimes, FaFileAlt, FaHeart, FaUsers, FaBrain, FaCamera, FaCalendarAlt, FaEye, FaRocket, FaStar } from 'react-icons/fa';
import Footer from '../components/Footer';

const Proprietaires = () => {
  const [showCalendly, setShowCalendly] = useState(false);

  const problemes = [
    { title: 'Annonces inefficaces', description: 'Visibilité limitée, photos de mauvaise qualité, descriptions vagues.', imageUrl: '/3D/Plan_2.png' },
    { title: 'Visites interminables', description: 'Coordonner les agendas, gérer les annulations et les curieux.', imageUrl: '/3D/calendrier.png' },
    { title: 'Dossiers incomplets', description: 'Vérifier manuellement des dizaines de documents et relancer les candidats.', imageUrl: '/3D/Livraison_carton.png' },
    { title: 'Risques d\'impayés', description: 'Incertitude sur la solvabilité des locataires et stress des retards de paiement.', imageUrl: '/3D/securite.png' },
  ];

  const services = [
    { icon: <FaCamera size={24} className="text-slate-700" />, title: "Shooting photo professionnel", description: "Photos HDR, visite virtuelle 360°, et plans 2D/3D pour sublimer votre bien." },
    { icon: <FaRocket size={24} className="text-slate-700" />, title: "Diffusion massive", description: "Annonces sur +30 portails, réseaux sociaux, et notre base de +10k candidats qualifiés." },
    { icon: <FaBrain size={24} className="text-slate-700" />, title: "Sélection par IA", description: "Matching des candidats, vérification automatique des dossiers et scoring de solvabilité." },
    { icon: <FaUserCheck size={24} className="text-slate-700" />, title: "Gestion des visites", description: "Prise de RDV en ligne, qualification des visiteurs et rappels automatiques pour optimiser votre temps." }
  ];

  const CalendlyWidget = () => (
    <div className="w-full h-[600px] bg-white rounded-2xl overflow-hidden shadow-2xl">
      <iframe
        src="https://calendly.com/contact-gregaopendoor/consultation"
        width="100%"
        height="100%"
        frameBorder="0"
        title="Prendre rendez-vous avec GREGA"
      />
        </div>
  );

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 border border-green-500 text-green-600 px-4 py-1.5 rounded-full text-sm font-medium mb-6 bg-green-50">
              <FaCheck />
              <span>SERVICE 100% GRATUIT</span>
            </span>
            <h1 className="text-5xl md:text-7xl font-extralight text-slate-900 mb-6 tracking-tight">
              Louez votre bien, <span className="font-normal text-slate-700">l'esprit tranquille.</span>
            </h1>
            <p className="text-xl text-slate-600 font-light max-w-xl leading-relaxed mb-10">
              Notre service premium pour propriétaires exigeants vous garantit une location rapide et sécurisée, sans frais cachés ni commission.
            </p>
            <motion.button
              onClick={() => setShowCalendly(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-slate-900 text-white px-10 py-4 font-medium text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Estimer mon bien
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.165, 0.84, 0.44, 1] }}
            className="hidden md:block"
          >
            <img src="/3D/seragedemaindevantunemaison.png" alt="Gestion immobilière" className="w-full h-auto object-contain" />
          </motion.div>
        </div>
      </section>

      {/* Section "Fini les complications" */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
              className="text-center mb-16"
          >
              <h2 className="text-4xl md:text-5xl font-extralight text-slate-800 mb-4 tracking-tight">
              Fini les complications
            </h2>
              <p className="text-lg text-slate-500 font-light max-w-3xl mx-auto">
                Notre technologie et notre expertise éliminent les frictions traditionnelles de la location immobilière.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {problemes.map((probleme, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-3xl p-8 text-center flex flex-col items-center border border-slate-100"
              >
                <img src={probleme.imageUrl} alt={probleme.title} className="h-24 w-24 object-contain mb-6" />
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                      {probleme.title}
                    </h3>
                <p className="text-slate-500 font-light leading-relaxed text-sm">
                      {probleme.description}
                    </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section "Notre Service Premium" */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extralight mb-4 tracking-tight">
              Un service premium, de A à Z
            </h2>
            <p className="text-lg text-slate-300 font-light max-w-3xl mx-auto">
              Un accompagnement complet pour une location sereine et profitable.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-6 p-6 bg-slate-800/50 rounded-2xl"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
                  <p className="text-slate-300 font-light leading-relaxed">
                      {service.description}
                    </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Calendly */}
      {showCalendly && (
        <section className="py-32 bg-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto px-6 text-center"
          >
            <h2 className="text-4xl font-light text-slate-800 mb-4 tracking-tight">Prendre rendez-vous</h2>
            <p className="text-lg text-slate-500 mb-12">Choisissez un créneau pour une estimation gratuite et sans engagement.</p>
            <CalendlyWidget />
          </motion.div>
      </section>
      )}

      <Footer />
    </main>
  );
};

export default Proprietaires;