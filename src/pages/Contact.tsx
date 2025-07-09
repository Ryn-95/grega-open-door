import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaCalendarAlt, FaPaperPlane, FaClock, FaMapPin, FaRegBuilding } from 'react-icons/fa';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: 'Je souhaite louer un bien',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.sujet || 'Contact depuis le site GREGA');
    const body = encodeURIComponent(`
Nom: ${formData.nom}
Email: ${formData.email}
Téléphone: ${formData.telephone}

Message:
${formData.message}
    `);
    
    window.open(`mailto:contact@gregaopendoor.fr?subject=${subject}&body=${body}`, '_self');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: <FaPhone className="w-6 h-6 text-slate-100" />,
      title: "Par téléphone",
      content: "09 53 37 61 41",
      link: "tel:0953376141",
      details: "Lun-Ven, 9h-18h"
    },
    {
      icon: <FaEnvelope className="w-6 h-6 text-slate-100" />,
      title: "Par e-mail",
      content: "contact@gregaopendoor.fr",
      link: "mailto:contact@gregaopendoor.fr",
      details: "Réponse sous 24h"
    },
    {
      icon: <FaCalendarAlt className="w-6 h-6 text-slate-100" />,
      title: "Planifier un RDV",
      content: "Prendre rendez-vous",
      link: "https://calendly.com/contact-gregaopendoor/consultation",
      details: "Via Calendly"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <img src="/3D/Serviceclient .png" alt="Service client GREGA" className="w-48 h-48 mx-auto" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extralight text-slate-900 mb-6 tracking-tight"
          >
            Parlons de votre projet
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-slate-600 font-light max-w-2xl mx-auto"
          >
            Que ce soit pour une question, un projet de location ou une estimation, notre équipe est à votre entière disposition.
          </motion.p>
        </div>
      </section>

      {/* Méthodes de contact */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-900 text-white p-8 rounded-3xl flex flex-col items-center shadow-2xl"
              >
                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-6">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                <a href={method.link} target={method.link.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" className="text-lg text-slate-300 hover:text-white transition-colors">
                  {method.content}
                </a>
                <p className="text-sm text-slate-400 mt-2">{method.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire et Image */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Formulaire de contact */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white border border-slate-200/80 rounded-3xl p-8 lg:p-12 shadow-lg">
                <h3 className="text-3xl font-light text-slate-800 mb-2">Envoyez-nous un message</h3>
                <p className="text-slate-500 mb-8 font-light">Nous vous répondrons dans les plus brefs délais.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-slate-700 text-sm font-medium mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="nom"
                      required
                      value={formData.nom}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-slate-800 focus:ring-slate-800 focus:outline-none transition-colors"
                      placeholder="ex: Jean Dupont"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 text-sm font-medium mb-2">
                      Adresse e-mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-slate-800 focus:ring-slate-800 focus:outline-none transition-colors"
                      placeholder="ex: jean.dupont@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-slate-700 text-sm font-medium mb-2">
                      Sujet
                    </label>
                    <select
                      name="sujet"
                      value={formData.sujet}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-slate-800 focus:ring-slate-800 focus:outline-none transition-colors"
                    >
                      <option>Je souhaite louer un bien</option>
                      <option>Je suis propriétaire</option>
                      <option>Question générale</option>
                      <option>Partenariat</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-700 text-sm font-medium mb-2">
                      Votre message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-slate-800 focus:ring-slate-800 focus:outline-none transition-colors"
                      placeholder="Bonjour, je vous contacte concernant..."
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-slate-900 text-white px-8 py-4 font-semibold rounded-xl hover:bg-slate-800 transition-colors shadow-lg flex items-center justify-center gap-2"
                  >
                    <FaPaperPlane />
                    Envoyer le message
                  </motion.button>
                </form>
              </div>
            </motion.div>
            
            {/* Informations */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="hidden lg:block text-center"
            >
              <img src="/3D/Plan_avec_localisation.png" alt="Nos bureaux" className="max-w-sm mx-auto mb-10" />
              <h3 className="text-3xl font-light text-slate-800 mb-4">Retrouvez-nous</h3>
              <p className="text-slate-500 font-light max-w-md mx-auto">
                Bien que nous soyons une entreprise digitale, nous avons des points de présence dans plusieurs villes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact; 