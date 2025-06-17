import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaBolt, FaLock, FaHandshake, FaArrowRight, FaStar } from 'react-icons/fa';
import Footer from '../components/Footer';

const Location = () => {
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
      icon: <FaHome />,
      title: 'Biens exclusifs',
      description: 'Accès à des biens immobiliers en exclusivité'
    },
    {
      icon: <FaBolt />,
      title: 'Service rapide',
      description: 'Traitement accéléré de votre dossier de location'
    },
    {
      icon: <FaLock />,
      title: 'Dossier sécurisé',
      description: 'Protection optimale de vos données personnelles'
    },
    {
      icon: <FaHandshake />,
      title: 'Accompagnement personnalisé',
      description: 'Suivi sur mesure tout au long de votre recherche'
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
                <span className="font-extralight">Location</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400">classique</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed"
              >
                Obtenez un logement avec GREGA OPEN DOOR avec facilité et sérénité
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="text-base text-gray-400 mb-8 max-w-xl leading-relaxed"
              >
                La recherche d'un logement peut sembler compliquée, mais avec notre aide, vous n'aurez plus à vous en soucier ! De la définition de vos critères à la signature de votre bail, nous vous accompagnons à chaque étape pour rendre ce parcours plus simple et rapide. Vous pouvez compter sur nous pour vous guider et vous alléger des démarches administratives.
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
                  src="/images/location.jpg" 
                  alt="Appartement en location classique" 
                  className="rounded-xl relative z-10 w-full object-cover h-[400px] shadow-2xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";
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

      {/* What is Location Classique Section */}
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
                src="/images/exemple-location.jpg" 
                alt="Exemple de logement en location classique" 
                className="rounded-xl shadow-2xl w-full h-[400px] object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1527359443443-84a48aec73d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
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
                Qu'est-ce que la <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400">location classique</span> ?
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                La location classique consiste à louer un logement auprès d'un propriétaire privé ou d'une agence immobilière. Elle s'adresse à toute personne souhaitant trouver un bien correspondant à ses besoins et à son budget. Pour obtenir une location, il est nécessaire de constituer un dossier solide comprenant divers justificatifs (revenus, garanties, etc.).
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Chez GREGA OPEN DOOR, nous vous accompagnons à chaque étape de votre recherche, afin de maximiser vos chances de succès et vous simplifier la vie. De plus, nous disposons de biens immobiliers qui nous sont confiés en exclusivité, ce qui signifie que vous aurez accès à des logements que personne d'autre ne peut voir sur le marché classique.
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
                Les conditions d'accès <br />à une <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400">location</span>
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                L'accès à une location repose sur plusieurs critères :
              </p>
              <ul className="mb-6 space-y-2 text-gray-300">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 w-1 h-1 rounded-full bg-blue-400"></div>
                  <span>Vos revenus</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 w-1 h-1 rounded-full bg-blue-400"></div>
                  <span>La composition de votre foyer</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 w-1 h-1 rounded-full bg-blue-400"></div>
                  <span>Votre situation professionnelle</span>
                </li>
              </ul>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Pour obtenir un logement, vous devez constituer un dossier complet et le soumettre au propriétaire ou à l'agence immobilière concernée.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Les délais d'obtention peuvent varier en fonction de la demande et de la tension locative dans votre secteur.
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
                src="/images/preparation-dossier.jpg" 
                alt="Préparation d'un dossier de location" 
                className="rounded-xl shadow-2xl w-full h-[400px] object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
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
                  target.src = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
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
              <p className="text-gray-300 mb-8 leading-relaxed">
                Avec GREGA OPEN DOOR, vous bénéficiez d'un accompagnement complet. Nous nous occupons de la constitution de votre dossier, vous aidons à rassembler les documents indispensables et assurons un suivi régulier de l'avancement de votre demande, pour que vous n'ayez rien à gérer seul.
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
              Un mot sur la <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400">location classique</span>
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              La location classique en France permet d'accéder à un logement dans le parc privé, mais face à une demande élevée, il peut être difficile de trouver rapidement un bien correspondant à ses attentes. Un dossier bien préparé et une approche structurée sont essentiels pour maximiser vos chances.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Nos experts chez GREGA OPEN DOOR sont là pour vous guider et gérer votre recherche de manière personnalisée. Faites-nous confiance pour vous offrir un accompagnement sur mesure et efficace !
            </p>
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
              Contactez-nous dès aujourd'hui pour bénéficier de notre accompagnement personnalisé et trouvez votre logement idéal.
            </p>
            <button className="bg-transparent hover:bg-white/10 text-white font-light py-3 px-8 border border-white/30 rounded-full transition duration-300 flex items-center mx-auto group">
              <span className="mr-2 uppercase tracking-widest text-sm">Prendre rendez-vous</span>
              <FaArrowRight className="transform transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Location; 