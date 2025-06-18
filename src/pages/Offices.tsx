import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaBuilding, FaArrowRight, FaStar, FaUserTie, FaShieldAlt, FaRocket } from 'react-icons/fa'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'

const Offices = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const offices = [
    {
      id: 1,
      name: 'Bureau Principal Paris',
      address: '37 rue des maturins à Paris',
      city: 'Paris 8ème',
      phone: '09 53 37 61 41',
      email: 'contact@gregaopendoor.fr',
      hours: {
        'Lun-Ven': '9h00 - 19h00',
        'Samedi': '9h00 - 17h00',
        'Dimanche': 'Sur rendez-vous'
      },
      services: ['Location classique', 'Logement social', 'Gestion locative', 'État des lieux'],
      featured: true
    }
  ];

  const services = [
    {
      icon: <FaBuilding className="w-8 h-8" />,
      title: 'Gestion Premium',
      description: 'Service de gestion locative haut de gamme avec suivi personnalisé'
    },
    {
      icon: <FaUserTie className="w-8 h-8" />,
      title: 'Conseil Expert',
      description: 'Accompagnement par nos conseillers spécialisés en immobilier'
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: 'Sécurité Garantie',
      description: 'Protection complète et assurance pour tous vos projets immobiliers'
    }
  ];

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      
      {/* Hero Section Ultra-Révolutionnaire */}
      <section className="min-h-screen bg-white relative overflow-hidden flex items-center justify-center">
        {/* Background holographique ultra-sophistiqué */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-50/10 via-transparent to-gray-100/10"></div>
          
          {/* Grille ultra-fine */}
          <div 
            className="absolute inset-0 opacity-[0.008] pointer-events-none"
            style={{ 
              backgroundImage: `
                linear-gradient(rgba(0, 0, 0, 0.02) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 0, 0, 0.02) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
          />
          
          {/* Effet de lumière qui suit la souris */}
          <motion.div
            animate={{
              background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 0, 0, 0.04), transparent 70%)`,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute inset-0 pointer-events-none"
          />
          
          {/* Particules de bureaux flottantes */}
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                y: [0, -40, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [0.5, 1.2, 0.5]
              }}
              transition={{ 
                duration: 5 + i * 0.3, 
                repeat: Infinity, 
                delay: i * 0.2 
              }}
              className="absolute w-1 h-1 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full"
              style={{
                left: `${3 + (i * 3.8)}%`,
                top: `${15 + Math.sin(i) * 50}%`
              }}
            />
          ))}
        </div>

        <div className="max-w-5xl mx-auto text-center px-6 relative z-10">
          
          {/* Badge ultra-épuré */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-200/50 bg-gray-50/80 backdrop-blur-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-400/60 mr-3 animate-pulse" />
              <span className="text-gray-600 text-xs font-light tracking-[0.2em] uppercase">
                Nos Bureaux Premium
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-gray-500/60 ml-3 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </motion.div>
          
          {/* Titre principal ultra-sophistiqué */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight text-gray-900 leading-[1.1] tracking-[-0.02em] mb-4">
              Nos{' '}
              <motion.span 
                className="font-normal bg-gradient-to-r from-gray-600 via-gray-800 to-black bg-clip-text text-transparent relative"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                bureaux
                <motion.div
                  animate={{ x: [-100, 300] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 opacity-30"
                />
              </motion.span>
            </h1>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-thin text-gray-700 leading-[1.1] tracking-[-0.01em]">
              à votre service
            </h2>
          </motion.div>
          
          {/* Description premium */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.4, 0, 0.2, 1] }}
            className="mb-12"
          >
            <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
              Découvrez nos espaces dédiés à l'accompagnement immobilier.
              <span className="text-gray-800"> Des lieux d'échange et d'expertise pour concrétiser vos projets.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section Bureaux */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header révolutionnaire */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.6, 0.01, 0.05, 0.95] }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-extralight text-gray-900 mb-6 tracking-tight leading-tight"
              whileHover={{ scale: 1.02 }}
            >
              Nos{' '}
              <motion.span 
                className="font-normal bg-gradient-to-r from-gray-600 via-gray-800 to-black bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                adresses
              </motion.span>
            </motion.h2>
          </motion.div>

          {/* Liste des bureaux */}
          <div className="space-y-12">
            {offices.map((office, index) => (
              <motion.div
                key={office.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div
                  whileHover={{ scale: 1.01, y: -5 }}
                  transition={{ duration: 0.4 }}
                  className="p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-gray-50/80 to-gray-100/60 hover:shadow-2xl transition-all duration-500 border border-gray-200/30 relative overflow-hidden backdrop-blur-sm"
                >
                  {/* Badge featured si applicable */}
                  {office.featured && (
                    <div className="absolute top-6 right-6 bg-gradient-to-r from-gray-600 to-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium">
                      <FaStar className="w-3 h-3 inline mr-2" />
                      Principal
                    </div>
                  )}
                  
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Informations principales */}
                    <div className="lg:col-span-2">
                      <h3 className="text-3xl font-light text-gray-900 mb-4">
                        {office.name}
                      </h3>
                      
                      {/* Adresse */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-200/50 flex items-center justify-center text-gray-700">
                          <FaMapMarkerAlt className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-gray-900 mb-1">Adresse</h4>
                          <p className="text-gray-600">{office.address}</p>
                          <p className="text-gray-600">{office.city}</p>
                        </div>
                      </div>
                      
                      {/* Contact */}
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-200/50 flex items-center justify-center text-gray-700">
                            <FaPhone className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-lg font-medium text-gray-900 mb-1">Téléphone</h4>
                            <p className="text-gray-600">{office.phone}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-200/50 flex items-center justify-center text-gray-700">
                            <FaEnvelope className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-lg font-medium text-gray-900 mb-1">Email</h4>
                            <p className="text-gray-600">{office.email}</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Services */}
                      <div>
                        <h4 className="text-lg font-medium text-gray-900 mb-4">Services disponibles</h4>
                        <div className="flex flex-wrap gap-2">
                          {office.services.map((service, serviceIndex) => (
                            <span 
                              key={serviceIndex}
                              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Horaires */}
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-200/50 flex items-center justify-center text-gray-700">
                          <FaClock className="w-5 h-5" />
                        </div>
                        <h4 className="text-lg font-medium text-gray-900">Horaires</h4>
                      </div>
                      
                      <div className="space-y-3">
                        {Object.entries(office.hours).map(([day, hours]) => (
                          <div key={day} className="flex justify-between items-center">
                            <span className="text-gray-600">{day}</span>
                            <span className="text-gray-900 font-medium">{hours}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* CTA */}
                      <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full mt-8 py-3 px-6 bg-gradient-to-r from-gray-900 to-black text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3"
                      >
                        <span>Prendre rendez-vous</span>
                        <FaArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Services Bureaux */}
      <section className="py-20 bg-gray-50/30 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-6 tracking-tight">
              Services{' '}
              <span className="font-normal bg-gradient-to-r from-gray-600 to-black bg-clip-text text-transparent">
                sur site
              </span>
            </h2>
          </motion.div>

          {/* Grille des services */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotateY: 10 }}
                  transition={{ duration: 0.4 }}
                  className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 flex items-center justify-center text-gray-700 shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                >
                  {service.icon}
                </motion.div>
                
                <h3 className="text-xl font-light text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Offices; 