import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaArrowRight, FaStar, FaShieldAlt, FaRocket } from 'react-icons/fa'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'

const Contact = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: 'Téléphone',
      value: '09 53 37 61 41',
      description: 'Lun-Ven: 9h-19h, Sam: 9h-17h'
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: 'Email',
      value: 'contact@gregaopendoor.fr',
      description: 'Réponse sous 24h'
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: 'Adresse',
      value: '37 rue des maturins à Paris',
      description: 'Paris 8ème arrondissement'
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
          
          {/* Particules de contact flottantes */}
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
                Contact Premium
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
              Contactez{' '}
              <motion.span 
                className="font-normal bg-gradient-to-r from-gray-600 via-gray-800 to-black bg-clip-text text-transparent relative"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                nos experts
                <motion.div
                  animate={{ x: [-100, 400] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 opacity-30"
                />
              </motion.span>
            </h1>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-thin text-gray-700 leading-[1.1] tracking-[-0.01em]">
              dédiés à votre projet
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
              Notre équipe d'experts est à votre disposition pour vous accompagner.
              <span className="text-gray-800"> Une réponse personnalisée à chacune de vos questions.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section Contact Info & Formulaire */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Informations de contact */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-extralight text-gray-900 mb-8 tracking-tight"
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
                  coordonnées
                </motion.span>
              </motion.h2>
              
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group flex items-start gap-6 p-6 rounded-2xl bg-gradient-to-br from-gray-50/80 to-gray-100/60 hover:shadow-lg transition-all duration-300 border border-gray-200/30"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-200/50 flex items-center justify-center text-gray-700 group-hover:shadow-md transition-shadow duration-300"
                    >
                      {info.icon}
                    </motion.div>
                    
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        {info.title}
                      </h3>
                      <p className="text-gray-800 font-medium mb-1">
                        {info.value}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Horaires d'ouverture */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <FaClock className="w-6 h-6" />
                    <h3 className="text-xl font-light">Horaires d'ouverture</h3>
                  </div>
                  
                  <div className="space-y-3 text-gray-300">
                    <div className="flex justify-between">
                      <span>Lundi - Vendredi</span>
                      <span className="text-white">9h00 - 19h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Samedi</span>
                      <span className="text-white">9h00 - 17h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Dimanche</span>
                      <span className="text-white">Sur rendez-vous</span>
                    </div>
                  </div>
                </div>
                
                {/* Effet holographique */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800/20 via-gray-700/10 to-gray-800/20 opacity-50"></div>
              </motion.div>
            </motion.div>
            
            {/* Formulaire de contact */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-extralight text-gray-900 mb-8 tracking-tight"
                whileHover={{ scale: 1.02 }}
              >
                Écrivez{' '}
                <motion.span 
                  className="font-normal bg-gradient-to-r from-gray-600 via-gray-800 to-black bg-clip-text text-transparent"
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  nous
                </motion.span>
              </motion.h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50/80 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500/20 focus:border-gray-500/50 transition-all duration-300"
                      placeholder="Votre nom complet"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50/80 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500/20 focus:border-gray-500/50 transition-all duration-300"
                      placeholder="votre@email.com"
                    />
                  </motion.div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50/80 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500/20 focus:border-gray-500/50 transition-all duration-300"
                    placeholder="Votre numéro de téléphone"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Sujet *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50/80 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500/20 focus:border-gray-500/50 transition-all duration-300"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="location">Location classique</option>
                    <option value="logement-social">Logement social</option>
                    <option value="gestion">Gestion locative</option>
                    <option value="etat-lieux">État des lieux</option>
                    <option value="autre">Autre</option>
                  </select>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-50/80 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500/20 focus:border-gray-500/50 transition-all duration-300 resize-none"
                    placeholder="Décrivez votre projet ou votre demande..."
                  />
                </motion.div>
                
                <motion.button
                  type="submit"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="group relative w-full py-4 px-6 bg-gradient-to-r from-gray-900 to-black text-white rounded-xl text-lg font-medium overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Envoyer le message
                    <motion.div
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <FaArrowRight className="w-4 h-4" />
                    </motion.div>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact; 