import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaClock, FaClipboardCheck, FaCamera, FaStar, FaArrowRight, FaUserTie, FaRegThumbsUp } from 'react-icons/fa';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const EtatDesLieux = () => {
  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };

  // État des lieux benefits
  const benefits = [
    {
      icon: <FaClipboardCheck />,
      title: 'Documentation complète',
      description: 'Nous documentons minutieusement chaque détail du logement pour une référence précise.'
    },
    {
      icon: <FaCamera />,
      title: 'Photos de qualité',
      description: 'Documentation photographique professionnelle pour éviter toute contestation future.'
    },
    {
      icon: <FaClock />,
      title: 'Service rapide',
      description: 'Réalisation efficace et professionnelle pour ne pas vous faire perdre de temps.'
    },
    {
      icon: <FaUserTie />,
      title: 'Expertise immobilière',
      description: 'Nos experts connaissent parfaitement les critères d\'évaluation d\'un logement.'
    }
  ];

  // Process steps
  const processSteps = [
    {
      number: '01',
      title: 'Prise de rendez-vous',
      description: 'Contactez-nous pour programmer votre état des lieux à une date qui vous convient.'
    },
    {
      number: '02',
      title: 'Visite & inspection',
      description: 'Notre expert inspecte minutieusement le logement et documente son état.'
    },
    {
      number: '03',
      title: 'Documentation',
      description: 'Création d\'un rapport détaillé avec photos et descriptions de chaque pièce.'
    },
    {
      number: '04',
      title: 'Validation',
      description: 'Le document est signé par toutes les parties et des copies sont remises.'
    }
  ];

  // FAQ items with toggle state
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const faqItems = [
    {
      question: 'Combien de temps dure un état des lieux ?',
      answer: 'La durée d\'un état des lieux dépend de la taille et de la complexité du logement. En moyenne, comptez entre 1h et 2h pour un logement standard. Notre objectif est d\'être à la fois rigoureux et efficace pour respecter votre emploi du temps.'
    },
    {
      question: 'Que faire en cas de désaccord sur l\'état des lieux ?',
      answer: 'En cas de désaccord, vous pouvez faire des observations directement sur le document d\'état des lieux. Si le désaccord persiste, il est possible de faire appel à un huissier dans les 10 jours suivant l\'établissement du document pour réaliser un état des lieux contradictoire.'
    },
    {
      question: 'Quels éléments sont vérifiés lors d\'un état des lieux ?',
      answer: 'Nous vérifions l\'ensemble des éléments du logement : murs, sols, plafonds, menuiseries, équipements sanitaires, électriques, systèmes de chauffage, ventilation, ainsi que tous les équipements fournis avec le logement (électroménager, mobilier si meublé, etc.).'
    },
    {
      question: 'L\'état des lieux est-il obligatoire ?',
      answer: 'Oui, l\'état des lieux est obligatoire, tant à l\'entrée qu\'à la sortie du locataire. Il permet de comparer l\'état du logement au début et à la fin de la location, et de déterminer les éventuelles réparations à la charge du locataire.'
    }
  ];

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gradient-to-b from-black to-blue-950 min-h-screen text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center"
          >
            <div className="md:w-1/2 z-10">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-6xl font-extralight tracking-wide mb-6"
              >
                <span className="font-extralight">ÉTATS</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400">DES LIEUX</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed"
              >
                Un service professionnel d'état des lieux d'entrée et de sortie réalisé par nos experts immobiliers pour votre tranquillité d'esprit.
              </motion.p>
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-transparent hover:bg-white/10 text-white font-light py-3 px-6 border border-white/30 rounded-full transition duration-300 flex items-center group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="mr-2 uppercase tracking-widest text-sm">Nous contacter</span>
                <FaArrowRight className="transform transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="md:w-1/2 mt-12 md:mt-0"
            >
              <div className="relative">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-3xl opacity-40"></div>
                <img 
                  src="/images/etat-des-lieux.jpg" 
                  alt="État des lieux professionnel" 
                  className="rounded-xl relative z-10 w-full object-cover h-[400px] shadow-2xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80";
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Benefits */}
      <section className="py-20 px-4 md:px-12 bg-black/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-extralight uppercase tracking-widest mb-4">
              Pourquoi <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400">nous choisir</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-400 max-w-2xl mx-auto">
              Notre service d'état des lieux se distingue par sa rigueur, sa précision et son professionnalisme.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="text-blue-400 text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-light mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-extralight uppercase tracking-widest mb-4">
              Notre <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400">processus</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-400 max-w-2xl mx-auto">
              Une approche structurée pour un service d'état des lieux sans faille
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="relative"
              >
                <div className="absolute -top-4 -left-4 text-6xl font-extralight text-white/10">
                  {step.number}
                </div>
                <div className="bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm p-6 rounded-xl border border-white/10 relative z-10">
                  <h3 className="text-xl font-light mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 md:px-12 bg-black/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-extralight uppercase tracking-widest mb-4">
              Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400">tarifs</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-400 max-w-2xl mx-auto">
              Des forfaits adaptés à tous vos besoins d'état des lieux
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="flex flex-col md:flex-row gap-8 justify-center"
          >
            {/* Standard Plan */}
            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 md:w-1/3"
            >
              <h3 className="text-2xl font-light mb-2">STANDARD</h3>
              <div className="text-3xl md:text-4xl font-light mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400">149€</span>
                <span className="text-sm text-gray-400"> / logement</span>
              </div>
              <p className="text-gray-400 mb-6">Idéal pour les studios et T1 jusqu'à 40m²</p>
              <ul className="mb-8 space-y-3">
                {["Inspection complète", "Photos détaillées", "Document numérique", "Signatures électroniques"].map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <FaCheck className="text-blue-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-transparent hover:bg-white/10 text-white font-light py-3 px-6 border border-white/30 rounded-full transition duration-300 flex items-center justify-center group">
                <span className="mr-2 uppercase tracking-widest text-sm">Sélectionner</span>
                <FaArrowRight className="transform transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </motion.div>

            {/* Premium Plan */}
            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-b from-blue-900/20 to-transparent backdrop-blur-sm p-8 rounded-xl border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 md:w-1/3 relative"
            >
              <div className="absolute -top-4 right-4 bg-blue-500 text-black text-xs py-1 px-3 rounded-full uppercase tracking-wider font-medium">
                Recommandé
              </div>
              <h3 className="text-2xl font-light mb-2">PREMIUM</h3>
              <div className="text-3xl md:text-4xl font-light mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400">249€</span>
                <span className="text-sm text-gray-400"> / logement</span>
              </div>
              <p className="text-gray-400 mb-6">Pour les T2, T3 et T4 jusqu'à 100m²</p>
              <ul className="mb-8 space-y-3">
                {[
                  "Inspection approfondie", 
                  "Photos haute qualité", 
                  "Document numérique détaillé", 
                  "Signatures électroniques",
                  "Assistance post-état des lieux"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <FaCheck className="text-blue-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-black font-medium py-3 px-6 rounded-full transition duration-300 flex items-center justify-center group">
                <span className="mr-2 uppercase tracking-widest text-sm">Sélectionner</span>
                <FaArrowRight className="transform transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8 text-gray-400"
          >
            <p>Pour les maisons et grands appartements, contactez-nous pour un devis personnalisé</p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 md:px-12">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-extralight uppercase tracking-widest mb-4">
              Questions <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400">fréquentes</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-400 max-w-2xl mx-auto">
              Tout ce que vous devez savoir sur notre service d'état des lieux
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="space-y-4"
          >
            {faqItems.map((item, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="border border-white/10 rounded-xl overflow-hidden"
              >
                <button 
                  onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
                  className="w-full text-left p-5 flex justify-between items-center hover:bg-white/5 transition-colors duration-300"
                >
                  <span className="text-lg font-light">{item.question}</span>
                  <span className={`transform transition-transform duration-300 ${activeQuestion === index ? 'rotate-45' : ''}`}>+</span>
                </button>
                <AnimatePresence>
                  {activeQuestion === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 pb-5"
                    >
                      <p className="text-gray-400">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-12 bg-black/60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-extralight uppercase tracking-widest mb-6">
              Prêt à <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400">commencer</span> ?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui pour bénéficier de notre service d'état des lieux professionnel et mettre toutes les chances de votre côté.
            </p>
            <button className="bg-transparent hover:bg-white/10 text-white font-light py-3 px-8 border border-white/30 rounded-full transition duration-300 flex items-center mx-auto group">
              <span className="mr-2 uppercase tracking-widest text-sm">Prendre rendez-vous</span>
              <FaArrowRight className="transform transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EtatDesLieux; 