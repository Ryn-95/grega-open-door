import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight, FaCheckCircle } from 'react-icons/fa'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    // Vérifier si le formulaire a été soumis avec succès
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      setIsSubmitted(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/xyzjdrre', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Réinitialiser le formulaire
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de l\'envoi du message. Veuillez réessayer ou nous appeler directement.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section Ultra Épuré */}
      <section className="pt-48 pb-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-8xl font-light text-black mb-8 tracking-tight">
              Contact
            </h1>
            <div className="w-24 h-px bg-black mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
              Une question ? Contactez-nous directement
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section Contact Simple */}
      <section className="py-32 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Informations de contact épurées */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-light text-black mb-12">
                Nos coordonnées
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <FaPhone className="w-4 h-4 text-gray-400" />
                  <div>
                    <p className="text-gray-600 text-sm font-light">Téléphone</p>
                    <a href="tel:0953376141" className="text-lg text-black font-light hover:underline">
                      09 53 37 61 41
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <FaEnvelope className="w-4 h-4 text-gray-400" />
                  <div>
                    <p className="text-gray-600 text-sm font-light">Email</p>
                    <a href="mailto:contact@gregaopendoor.fr" className="text-lg text-black font-light hover:underline">
                      contact@gregaopendoor.fr
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="w-4 h-4 text-gray-400" />
                  <div>
                    <p className="text-gray-600 text-sm font-light">Adresse</p>
                    <p className="text-lg text-black font-light">
                      37 rue des Maturins, 75008 Paris
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Horaires simples */}
              <div className="pt-8 border-t border-gray-200">
                <p className="text-gray-600 text-sm font-light mb-4">Horaires</p>
                <div className="space-y-2 text-black font-light">
                  <div className="flex justify-between">
                    <span>Lun - Ven</span>
                    <span>9h - 19h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi</span>
                    <span>9h - 17h</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Formulaire épuré */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-light text-black mb-12">
                Écrivez-nous
              </h2>
              
              {isSubmitted ? (
                // Message de succès épuré
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-center py-16 border border-gray-200"
                >
                  <FaCheckCircle className="w-12 h-12 text-green-500 mx-auto mb-6" />
                  <h3 className="text-xl font-light text-black mb-4">
                    Message envoyé
                  </h3>
                  <p className="text-gray-600 font-light mb-8">
                    Nous vous répondrons sous 24h
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-black font-light hover:underline"
                  >
                    Envoyer un autre message
                  </button>
                </motion.div>
              ) : (
                // Formulaire épuré
                <form 
                  onSubmit={handleSubmit} 
                  action="https://formspree.io/f/xyzjdrre"
                  method="POST"
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-600 text-sm font-light mb-2">
                        Nom *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 text-black font-light focus:border-black focus:outline-none transition-colors"
                        placeholder="Votre nom"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-600 text-sm font-light mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 text-black font-light focus:border-black focus:outline-none transition-colors"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-600 text-sm font-light mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 text-black font-light focus:border-black focus:outline-none transition-colors"
                      placeholder="Votre numéro"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-600 text-sm font-light mb-2">
                      Sujet *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 text-black font-light focus:border-black focus:outline-none transition-colors"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="location">Location</option>
                      <option value="gestion">Gestion locative</option>
                      <option value="etat-lieux">État des lieux</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-600 text-sm font-light mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-200 text-black font-light focus:border-black focus:outline-none transition-colors resize-none"
                      placeholder="Votre message..."
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    whileHover={{ y: -2 }}
                    className="w-full py-4 bg-black text-white font-light hover:bg-gray-800 transition-colors flex items-center justify-center gap-3"
                  >
                    Envoyer le message
                    <FaArrowRight className="w-4 h-4" />
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact; 