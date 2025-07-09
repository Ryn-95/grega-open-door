import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaShieldAlt, FaLightbulb, FaHeart } from 'react-icons/fa';
import Footer from '../components/Footer';

const About = () => {
  const values = [
    {
      icon: <FaShieldAlt className="w-8 h-8 text-slate-700" />,
      title: "Confiance & Sécurité",
      description: "Chaque dossier est vérifié, chaque étape est transparente. Votre sérénité est notre priorité absolue.",
      image: "/3D/securite.png"
    },
    {
      icon: <FaLightbulb className="w-8 h-8 text-slate-700" />,
      title: "Innovation & Simplicité",
      description: "Nous utilisons la technologie pour rendre la location plus simple, plus rapide et plus intelligente pour tous.",
      image: "/3D/Personnagealaloupe.png"
    },
    {
      icon: <FaHeart className="w-8 h-8 text-slate-700" />,
      title: "L'Humain au Centre",
      description: "Derrière la technologie, il y a notre équipe. Nous sommes à votre écoute pour vous accompagner personnellement.",
      image: "/3D/familleheureuse.png"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-7xl font-extralight text-slate-900 mb-6 tracking-tight">
                Notre mission : <span className="font-normal text-slate-700">simplifier l'immobilier.</span>
              </h1>
              <p className="text-xl text-slate-600 font-light max-w-xl leading-relaxed">
                Chez GREGA, nous croyons que l'accès au logement doit être une expérience juste, transparente et efficace. Nous mettons la technologie et notre expertise au service de votre projet.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.165, 0.84, 0.44, 1] }}
            >
              <img src="/3D/scenedequipeautourdunplanholographique.png" alt="Notre équipe travaillant sur un projet immobilier" className="w-full h-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
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
              Guidés par nos valeurs
            </h2>
            <p className="text-lg text-slate-500 font-light max-w-3xl mx-auto">
              Les principes qui animent chacune de nos décisions.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-slate-50/70 rounded-3xl p-8 text-center flex flex-col items-center border border-slate-100 hover:shadow-xl hover:border-slate-200 transition-all duration-300"
              >
                <div className="relative mb-6">
                  <img src={value.image} alt={value.title} className="h-28 w-28 object-contain" />
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    className="absolute -top-2 -right-2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-slate-100">
                    {value.icon}
                  </motion.div>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{value.title}</h3>
                <p className="text-slate-500 font-light leading-relaxed text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section "Notre Approche" */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="md:order-last"
            >
              <img src="/3D/Graphiquedecroissance.png" alt="Croissance et performance" className="w-full h-auto" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:order-first"
            >
              <h2 className="text-4xl font-extralight mb-6 tracking-tight">Une approche axée sur la performance</h2>
              <p className="text-slate-300 mb-6 leading-relaxed font-light">
                Nous combinons une connaissance approfondie du marché avec des outils d'analyse de données pour maximiser vos chances de succès. Que vous soyez locataire ou propriétaire, notre objectif est d'atteindre le vôtre, rapidement et efficacement.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                  <div className="p-4 bg-slate-800/60 rounded-lg">
                      <p className="text-2xl font-semibold text-white">98%</p>
                      <p className="text-sm text-slate-400">Taux de réussite</p>
                  </div>
                  <div className="p-4 bg-slate-800/60 rounded-lg">
                      <p className="text-2xl font-semibold text-white">15 jours</p>
                      <p className="text-sm text-slate-400">Location moyenne</p>
                  </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src="/3D/Agentimmobiliersouriant.png" alt="Contactez notre équipe" className="w-32 h-32 mx-auto mb-6" />
            <h2 className="text-3xl font-extralight text-slate-800 mb-4">
              Parlons de votre projet
            </h2>
            <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto font-light">
              Notre équipe est prête à vous écouter et à vous proposer des solutions sur mesure.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="tel:0953376141"
              className="inline-flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-3 rounded-xl font-medium hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <FaPhone />
              <span>09 53 37 61 41</span>
            </a>
            <a
              href="mailto:contact@gregaopendoor.fr"
              className="inline-flex items-center justify-center gap-3 border border-slate-300 text-slate-800 px-8 py-3 rounded-xl font-medium hover:bg-slate-100 hover:border-slate-400 transition-all duration-300"
            >
              <FaEnvelope />
              <span>Nous contacter par e-mail</span>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About; 