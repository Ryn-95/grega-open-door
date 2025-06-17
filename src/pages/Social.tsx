import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaFileAlt, FaUserFriends, FaCalendarCheck, FaArrowRight, FaStar } from 'react-icons/fa';
import Footer from '../components/Footer';

const Social = () => {
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

  const benefits = [
    {
      icon: <FaBuilding />,
      title: 'Logements adaptés',
      description: 'Accès à des logements correspondant à vos besoins et revenus'
    },
    {
      icon: <FaFileAlt />,
      title: 'Dossier optimisé',
      description: 'Constitution d\'un dossier respectant les critères des bailleurs sociaux'
    },
    {
      icon: <FaUserFriends />,
      title: 'Accompagnement complet',
      description: 'Suivi personnalisé tout au long de votre démarche'
    },
    {
      icon: <FaCalendarCheck />,
      title: 'Suivi régulier',
      description: 'Mise à jour régulière sur l\'état d\'avancement de votre dossier'
    }
  ];

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gradient-to-b from-black to-blue-950 min-h-screen text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div
            className="flex flex-col md:flex-row items-center"
          >
            <div className="md:w-1/2 z-10">
              <motion.h3 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-lg md:text-xl font-extralight tracking-[0.3em] mb-1 text-gray-300"
              >
                GREGA
              </motion.h3>
              <motion.h4
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="text-sm md:text-base font-extralight tracking-[0.4em] mb-6 text-gray-400"
              >
                OPEN DOOR
              </motion.h4>
              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-4xl md:text-6xl font-extralight tracking-wide mb-6"
              >
                <span className="font-extralight">Logement</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400">social</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed"
              >
                Accédez au logement social avec un accompagnement personnalisé
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="text-base text-gray-400 mb-8 max-w-xl leading-relaxed"
              >
                Obtenir un logement social peut être un processus complexe et parfois décourageant. Chez GREGA OPEN DOOR, nous simplifions ce parcours en vous accompagnant à chaque étape de votre demande. De la constitution de votre dossier jusqu'à l'obtention de votre logement, nous sommes à vos côtés pour vous guider et optimiser vos chances.
              </motion.p>
              <motion.button 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="bg-transparent hover:bg-white/10 text-white font-light py-3 px-6 border border-white/30 rounded-full transition duration-300 flex items-center group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="mr-2 uppercase tracking-widest text-sm">Nous contacter</span>
                <FaArrowRight className="transform transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="md:w-1/2 mt-12 md:mt-0"
            >
              <div className="relative">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-3xl opacity-40"></div>
                <img 
                  src="/images/social.jpg" 
            alt="Logement social"
                  className="rounded-xl relative z-10 w-full object-cover h-[400px] shadow-2xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80";
                  }}
                />
                <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-lg text-xs text-white/80 z-20">
                  Service disponible sur toute la France
                </div>
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-lg z-20 flex items-center">
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-xs" />
                    ))}
                  </div>
                  <div className="text-xs text-white/80">
                    <span className="font-medium">Google</span>
                    <br />
                    <span>+700 avis clients</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 md:px-12 bg-black/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-blue-400 text-4xl mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-light mb-2">{benefit.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Social Housing Section */}
      <section className="py-20 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="/images/exemple-social.jpg" 
                alt="Exemple de logement social" 
                className="rounded-xl shadow-2xl w-full h-[400px] object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
                }}
              />
            </motion.div>
            
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
          >
              <h2 className="text-3xl md:text-4xl font-extralight mb-6">
                Qu'est-ce que le <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400">logement social</span> ?
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Le logement social, également appelé habitation à loyer modéré (HLM), est un type de logement destiné aux personnes ou familles dont les revenus sont modestes. Ces logements sont proposés à des loyers inférieurs à ceux du marché privé, permettant ainsi l'accès à un habitat décent pour tous.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Pour bénéficier d'un logement social, les demandeurs doivent respecter certains plafonds de ressources, définis en fonction de la composition du foyer et de la zone géographique concernée. Les dossiers sont ensuite étudiés par une commission d'attribution qui prend en compte divers critères tels que l'urgence de la situation, les conditions actuelles de logement ou encore l'ancienneté de la demande.
              </p>
              <motion.button 
                className="bg-transparent hover:bg-white/10 text-white font-light py-3 px-6 border border-white/30 rounded-full transition duration-300 flex items-center group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="mr-2 uppercase tracking-widest text-sm">Nous contacter</span>
                <FaArrowRight className="transform transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
            </motion.div>
          </div>
            </div>
      </section>

      {/* Access Conditions Section */}
      <section className="py-20 px-4 md:px-12 bg-black/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-extralight mb-6">
                Les conditions d'accès <br />au <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400">logement social</span>
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                L'accès au logement social est soumis à plusieurs conditions essentielles :
              </p>
              <ul className="mb-6 space-y-2 text-gray-300">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 w-1 h-1 rounded-full bg-blue-400"></div>
                  <span>Respect des plafonds de ressources définis par la législation</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 w-1 h-1 rounded-full bg-blue-400"></div>
                  <span>Régularité du séjour sur le territoire français</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 w-1 h-1 rounded-full bg-blue-400"></div>
                  <span>Constitution d'un dossier complet auprès d'un bailleur social</span>
                </li>
              </ul>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Pour obtenir un logement social, vous devez constituer un dossier complet et le soumettre au bailleur social concerné.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Les délais d'obtention peuvent varier considérablement, allant de quelques mois à plusieurs années, selon la tension locative de votre secteur et la composition de votre foyer.
              </p>
              <motion.button 
                className="bg-transparent hover:bg-white/10 text-white font-light py-3 px-6 border border-white/30 rounded-full transition duration-300 flex items-center group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="mr-2 uppercase tracking-widest text-sm">Nous contacter</span>
                <FaArrowRight className="transform transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
            </motion.div>
            
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 md:order-2"
            >
              <img 
                src="/images/conditions-social.jpg" 
                alt="Conditions d'accès au logement social" 
                className="rounded-xl shadow-2xl w-full h-[400px] object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
                }}
              />
                </motion.div>
            </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="/images/services-grega.jpg" 
                alt="Services immobiliers Grega Open Door" 
                className="rounded-xl shadow-2xl w-full h-[400px] object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1553434320-e9f5757e5f1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
                }}
              />
              <div className="mt-4 text-center">
                <p className="text-gray-400 text-sm">Grega Open Door</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-extralight mb-6">
                Pourquoi faire appel à <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400">GREGA OPEN DOOR</span> ?
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Avec GREGA OPEN DOOR, vous bénéficiez d'un accompagnement complet dans votre démarche de demande de logement social :
              </p>
              <ul className="mb-6 space-y-2 text-gray-300">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 w-1 h-1 rounded-full bg-blue-400"></div>
                  <span>Aide à la constitution de votre dossier pour maximiser vos chances</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 w-1 h-1 rounded-full bg-blue-400"></div>
                  <span>Conseils personnalisés sur les démarches à suivre</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 w-1 h-1 rounded-full bg-blue-400"></div>
                  <span>Suivi régulier de l'avancement de votre demande</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 w-1 h-1 rounded-full bg-blue-400"></div>
                  <span>Communication directe avec les bailleurs sociaux</span>
                </li>
              </ul>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Notre objectif est de simplifier votre parcours vers l'obtention d'un logement social, tout en vous offrant un service personnalisé et professionnel.
              </p>
              <motion.button
                className="bg-transparent hover:bg-white/10 text-white font-light py-3 px-6 border border-white/30 rounded-full transition duration-300 flex items-center group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="mr-2 uppercase tracking-widest text-sm">Nous contacter</span>
                <FaArrowRight className="transform transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
            </motion.div>
            </div>
        </div>
      </section>

      {/* Final Section */}
      <section className="py-20 px-4 md:px-12 bg-black/60 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-extralight mb-6">
              Un mot sur le <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400">logement social</span>
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Le logement social en France représente une solution essentielle pour de nombreux ménages aux revenus modestes. Face à la crise du logement, il offre une alternative abordable et de qualité, mais les délais d'attente peuvent parfois être longs en raison de la forte demande.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Nos experts chez GREGA OPEN DOOR sont là pour vous aider à naviguer dans ce système complexe et optimiser vos chances d'obtenir un logement qui correspond à vos besoins. N'hésitez pas à nous contacter pour bénéficier de notre expertise !
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Social; 