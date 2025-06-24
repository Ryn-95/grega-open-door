import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { FaCheck, FaDownload, FaPhone, FaEnvelope, FaMapMarkerAlt, FaShieldAlt, FaUserCheck, FaClock, FaHandshake, FaArrowRight, FaTimes, FaFileAlt, FaHeart, FaUsers, FaBrain, FaCamera, FaCalendarAlt, FaEye, FaRocket, FaStar } from 'react-icons/fa';
import Footer from '../components/Footer';
import { navigateToPage } from '../utils/navigation';

const Proprietaires = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  // Mouse tracking avec spring pour fluidité
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springMouseX = useSpring(mouseX, { stiffness: 150, damping: 30 });
  const springMouseY = useSpring(mouseY, { stiffness: 150, damping: 30 });
  
  // Transformations scroll ultra-fluides
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.98]);
  const heroBlur = useTransform(scrollYProgress, [0, 0.15], [0, 4]);

  const [showCTADetails, setShowCTADetails] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [showCalendly, setShowCalendly] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile && heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        
        setMousePosition({ x, y });
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }
    };
    const handleScroll = () => setScrollY(window.scrollY);

    checkMobile();
    window.addEventListener('resize', checkMobile);
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile, mouseX, mouseY]);

  const problemes = [
    {
      title: "Candidats non qualifiés",
      description: "Élimination automatique des dossiers incomplets grâce à notre IA de présélection",
      icon: "🎯"
    },
    {
      title: "Frais cachés",
      description: "Transparence totale avec notre modèle économique révolutionnaire 100% gratuit",
      icon: "💎"
    },
    {
      title: "Sollicitations incessantes",
      description: "Filtrage intelligent qui ne vous présente que les candidats premium validés",
      icon: "🛡️"
    },
    {
      title: "Contraintes administratives",
      description: "Automatisation complète du processus de vérification et de validation",
      icon: "⚡"
    }
  ];

  const services = [
    {
      icon: <FaUserCheck />,
      title: "Contrôle rigoureux",
      description: "Vérification approfondie de chaque candidat"
    },
    {
      icon: <FaClock />,
      title: "Gain de temps",
      description: "Nous gérons tout le processus de sélection"
    },
    {
      icon: <FaShieldAlt />,
      title: "Sécurité garantie",
      description: "Éligibilité GLI et pass GRL vérifiée"
    },
    {
      icon: <FaHandshake />,
      title: "Accompagnement",
      description: "Support complet jusqu'à la signature"
    }
  ];

  // Fonction pour créer et télécharger le formulaire Word
  const downloadWordForm = () => {
    // Créer le contenu HTML formaté pour Word
    const wordContent = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head>
      <meta charset='utf-8'>
      <title>Formulaire Propriétaire GREGA</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
        .header { text-align: center; background-color: #f8f9fa; padding: 20px; border: 2px solid #28a745; margin-bottom: 30px; }
        .section { margin-bottom: 25px; }
        .section-title { background-color: #343a40; color: white; padding: 10px; font-weight: bold; font-size: 14px; }
        .form-row { margin: 10px 0; }
        .form-field { display: inline-block; width: 200px; border-bottom: 1px solid #000; margin-right: 20px; }
        .checkbox { margin-right: 10px; }
        .footer { background-color: #28a745; color: white; padding: 15px; text-align: center; margin-top: 30px; }
        table { width: 100%; border-collapse: collapse; }
        td { padding: 8px; vertical-align: top; }
      </style>
    </head>
    <body>
      <div class='header'>
        <h1>FORMULAIRE PROPRIÉTAIRE GREGA</h1>
        <h2 style='color: #28a745; margin: 0;'>SERVICE 100% GRATUIT - SANS ENGAGEMENT</h2>
        <p style='margin: 10px 0 0 0;'>Remplissez ce formulaire et renvoyez-le à contact@gregaopendoor.fr</p>
      </div>

      <div class='section'>
        <div class='section-title'>📋 INFORMATIONS PERSONNELLES</div>
        <table>
          <tr>
            <td width='50%'>Nom : <span class='form-field'></span></td>
            <td width='50%'>Prénom : <span class='form-field'></span></td>
          </tr>
          <tr>
            <td>Téléphone : <span class='form-field'></span></td>
            <td>Email : <span class='form-field'></span></td>
          </tr>
        </table>
      </div>

      <div class='section'>
        <div class='section-title'>🏠 INFORMATIONS DU BIEN</div>
        <div class='form-row'>
          Type de bien : 
          <span class='checkbox'>☐ Appartement</span>
          <span class='checkbox'>☐ Maison</span>
          <span class='checkbox'>☐ Studio</span>
          <span class='checkbox'>☐ Loft</span>
          <span class='checkbox'>☐ Autre : ________</span>
        </div>
        <div class='form-row'>Adresse complète : <span class='form-field' style='width: 400px;'></span></div>
        <table>
          <tr>
            <td>Superficie : <span class='form-field'></span> m²</td>
            <td>Nombre de pièces : <span class='form-field'></span></td>
          </tr>
          <tr>
            <td>Loyer souhaité : <span class='form-field'></span> €/mois</td>
            <td>Charges : <span class='form-field'></span> €/mois</td>
          </tr>
        </table>
      </div>

      <div class='section'>
        <div class='section-title'>⚙️ ÉQUIPEMENTS & COMMODITÉS</div>
        <table>
          <tr>
            <td width='50%'>
              <span class='checkbox'>☐ Meublé</span><br>
              <span class='checkbox'>☐ Parking/Garage</span><br>
              <span class='checkbox'>☐ Cave</span><br>
              <span class='checkbox'>☐ Balcon</span><br>
            </td>
            <td width='50%'>
              <span class='checkbox'>☐ Terrasse</span><br>
              <span class='checkbox'>☐ Ascenseur</span><br>
              <span class='checkbox'>☐ Gardien</span><br>
              <span class='checkbox'>☐ Interphone</span><br>
            </td>
          </tr>
        </table>
      </div>

      <div class='section'>
        <div class='section-title'>👥 CRITÈRES LOCATAIRES SOUHAITÉS</div>
        <div class='form-row'>Revenus minimum souhaités : <span class='form-field'></span> €/mois (conseillé : 3x le loyer)</div>
        <div class='form-row'>
          Situation professionnelle acceptée :<br>
          <span class='checkbox'>☐ CDI uniquement</span>
          <span class='checkbox'>☐ Accepte CDD</span>
          <span class='checkbox'>☐ Accepte étudiants</span>
          <span class='checkbox'>☐ Accepte professions libérales</span>
        </div>
        <div class='form-row'>
          <span class='checkbox'>☐ Accepte les animaux</span>
          <span class='checkbox'>☐ Non fumeur uniquement</span>
          <span class='checkbox'>☐ Couple accepté</span>
          <span class='checkbox'>☐ Colocation acceptée</span>
        </div>
      </div>

      <div class='section'>
        <div class='section-title'>📅 DISPONIBILITÉ & PRÉFÉRENCES</div>
        <table>
          <tr>
            <td>Date de disponibilité : <span class='form-field'></span></td>
            <td>Durée minimum souhaitée : <span class='form-field'></span></td>
          </tr>
        </table>
        <div class='form-row'>Horaires de visite préférés : <span class='form-field' style='width: 300px;'></span></div>
      </div>

      <div class='section'>
        <div class='section-title'>💬 COMMENTAIRES & DEMANDES SPÉCIALES</div>
        <div style='border: 1px solid #ccc; height: 80px; padding: 10px; margin-top: 10px;'></div>
      </div>

      <div class='footer'>
        <h3>🎯 ENGAGEMENT GREGA - VOTRE TRANQUILLITÉ ASSURÉE</h3>
        <table style='color: white;'>
          <tr>
            <td width='50%'>
              ✅ Service 100% GRATUIT pour les propriétaires<br>
              ✅ Présélection par intelligence artificielle<br>
              ✅ Candidats vérifiés et qualifiés uniquement<br>
            </td>
            <td width='50%'>
              ✅ Support complet jusqu'à la signature<br>
              ✅ Réponse sous 24h maximum<br>
              ✅ Accompagnement personnalisé 7j/7<br>
            </td>
          </tr>
        </table>
        <hr style='margin: 15px 0; border-color: white;'>
        <p><strong>📧 À retourner par email à : contact@gregaopendoor.fr</strong></p>
        <p><strong>📞 Ou par téléphone au : 09 53 37 61 41</strong></p>
        <p style='font-size: 12px; margin-top: 15px;'>© 2024 GREGA OPEN DOOR - Tous droits réservés</p>
      </div>
    </body>
    </html>`;

    // Créer et télécharger le fichier Word
    const blob = new Blob([wordContent], { 
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' 
    });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Formulaire_Proprietaire_GREGA.doc';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const ctaSteps = [
    {
      title: "Étape 1 : Évaluation gratuite",
      description: "Nous analysons votre bien et définissons ensemble la stratégie optimale",
      icon: <FaFileAlt />,
      action: "Commencer l'évaluation",
      modalKey: "evaluation"
    },
    {
      title: "Étape 2 : Mise en ligne",
      description: "Publication sur nos plateformes premium avec photos professionnelles",
      icon: <FaUsers />,
      action: "Voir les plateformes",
      modalKey: "plateformes"
    },
    {
      title: "Étape 3 : Sélection IA",
      description: "Notre intelligence artificielle présélectionne les meilleurs candidats",
      icon: <FaHeart />,
      action: "Découvrir l'IA",
      modalKey: "ia"
    }
  ];

  // Composant Modal réutilisable
  const Modal = ({ isOpen, onClose, title, children }: any) => (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onClose();
          }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-light text-black">{title}</h2>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onClose();
                  }}
                  className="text-gray-400 hover:text-black transition-colors"
                >
                  <FaTimes className="w-6 h-6" />
                </button>
              </div>
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Composant Calendly intégré
  const CalendlyWidget = () => (
    <div className="w-full h-[600px]">
      <iframe
        src="https://calendly.com/contact-gregaopendoor/consultation"
        width="100%"
        height="100%"
        frameBorder="0"
        title="Prendre rendez-vous avec GREGA"
      />
      <p className="text-center text-gray-600 mt-4 font-light">
        Si le calendrier ne s'affiche pas, 
        <a 
          href="https://calendly.com/contact-gregaopendoor/consultation" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-black underline hover:no-underline ml-1"
        >
          cliquez ici pour ouvrir dans un nouvel onglet
        </a>
      </p>
    </div>
  );

  return (
    <main className="min-h-screen bg-white">
          
      {/* Hero Ultra Épuré avec mention gratuit */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Badge gratuit en première position */}
          <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 border border-green-500 text-green-600 px-6 py-2 font-light mb-8 bg-green-50"
          >
              <FaCheck className="w-4 h-4" />
              <span className="text-sm font-medium">SERVICE 100% GRATUIT</span>
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-light text-black mb-8 tracking-tight">
              Propriétaires
            </h1>
            <div className="w-24 h-px bg-black mx-auto mb-12"></div>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed mb-12">
              Service premium pour propriétaires exigeants
              <span className="block text-lg text-green-600 font-medium mt-2">
                Sans frais cachés, sans commission
              </span>
            </p>

            {/* Bouton Calendly Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
            >
              <motion.button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (!showCalendly) {
                    setShowCalendly(true);
                  }
                }}
                whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 font-light text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg"
              >
                <FaCalendarAlt className="w-5 h-5" />
                <span>Consultation Gratuite</span>
              </motion.button>
              
              <motion.button
                onClick={downloadWordForm}
                whileHover={{ y: -2 }}
                className="inline-flex items-center gap-3 border border-black text-black px-8 py-4 font-light text-lg hover:bg-black hover:text-white transition-all duration-300"
                >
                <FaDownload className="w-5 h-5" />
                <span>Télécharger le formulaire</span>
            </motion.button>
          </motion.div>
          
            {/* Informations supplémentaires */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-500 font-light"
          >
              <div className="flex items-center gap-2">
                <FaClock className="w-4 h-4" />
                <span className="text-sm">Consultation 30min</span>
            </div>
              <div className="flex items-center gap-2">
                <FaPhone className="w-4 h-4" />
                <span className="text-sm">Par téléphone ou visio</span>
            </div>
              <div className="flex items-center gap-2">
                <FaCheck className="w-4 h-4 text-green-500" />
                <span className="text-sm">100% gratuit</span>
            </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section Problèmes Épurée */}
      <section className="pb-32">
        <div className="max-w-6xl mx-auto px-6">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-6xl font-light text-black mb-12">
              Fini les complications
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-3xl mx-auto">
              Notre intelligence artificielle élimine les frictions traditionnelles
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {problemes.map((probleme, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-gray-200 p-8 hover:border-black transition-all duration-300"
              >
                <div className="text-3xl mb-6">{probleme.icon}</div>
                <h3 className="text-xl font-light text-black mb-4">
                      {probleme.title}
                    </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                      {probleme.description}
                    </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Services Épurée */}
      <section className="border-t border-gray-200 py-32">
        <div className="max-w-6xl mx-auto px-6">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-6xl font-light text-black mb-12">
              Service Premium
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-3xl mx-auto">
              Un accompagnement complet pour une location sereine et profitable
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-12 h-12 mx-auto mb-6 text-gray-400 flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-lg font-light text-black mb-4">
                      {service.title}
                    </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                      {service.description}
                    </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Contact Épurée avec vrai formulaire Word */}
      <section className="border-t border-gray-200 py-32">
        <div className="max-w-6xl mx-auto px-6">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-6xl font-light text-black mb-12">
              Parlons de votre projet
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-3xl mx-auto">
              Choisissez le moyen de contact qui vous convient le mieux
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Formulaire Word Amélioré */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2 border border-gray-200 p-8 hover:border-black transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <FaDownload className="w-5 h-5 text-gray-400" />
                    <div>
                  <h3 className="text-xl font-light text-black">Formulaire Digital</h3>
                  <p className="text-gray-600 font-light">Le plus simple et rapide</p>
                    </div>
                  </div>
                  
              <p className="text-gray-600 font-light mb-6 leading-relaxed">
                Téléchargez notre formulaire professionnel au format Word, remplissez-le confortablement et renvoyez-le nous par email. 
                <strong className="text-black"> Nous vous recontactons sous 24h.</strong>
                  </p>
                  
              {/* Détails du formulaire Word */}
              <div className="bg-gray-50 p-6 mb-6 border border-gray-100">
                <h4 className="font-medium text-black mb-4">📝 Formulaire Word professionnel contenant :</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <FaCheck className="w-3 h-3 text-green-500" />
                    <span>Informations personnelles</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheck className="w-3 h-3 text-green-500" />
                    <span>Détails complets du bien</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheck className="w-3 h-3 text-green-500" />
                    <span>Équipements & commodités</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheck className="w-3 h-3 text-green-500" />
                    <span>Critères locataires souhaités</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheck className="w-3 h-3 text-green-500" />
                    <span>Disponibilités & préférences</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheck className="w-3 h-3 text-green-500" />
                    <span>Format professionnel Word</span>
                  </div>
                </div>
              </div>
              
              <motion.button
                whileHover={{ y: -2 }}
                onClick={downloadWordForm}
                className="w-full border border-black text-black px-6 py-4 font-light hover:bg-black hover:text-white transition-all duration-300 mb-4"
              >
                <FaDownload className="inline mr-2" />
                Télécharger le formulaire Word (.doc)
              </motion.button>
              
              <div className="text-center">
                <span className="text-gray-500 text-sm font-light">
                  À retourner à : <strong className="text-black">contact@gregaopendoor.fr</strong>
                </span>
              </div>
            </motion.div>

            {/* Contact Direct avec Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Téléphone */}
              <div className="border border-gray-200 p-6 hover:border-black transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                  <FaPhone className="w-4 h-4 text-gray-400" />
                  <h3 className="text-lg font-light text-black">Téléphone</h3>
                </div>
                <p className="text-gray-600 font-light mb-4">Discussion directe avec nos experts</p>
                <motion.a
                  href="tel:0953376141"
                  whileHover={{ y: -2 }}
                  className="block w-full border border-gray-300 text-black px-4 py-3 font-light hover:border-black transition-all duration-300 text-center"
                >
                  09 53 37 61 41
                </motion.a>
              </div>

              {/* Bureau avec Calendly */}
              <div className="border border-gray-200 p-6 hover:border-black transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <FaMapMarkerAlt className="w-4 h-4 text-gray-400" />
                  <h3 className="text-lg font-light text-black">Bureau</h3>
                </div>
                <p className="text-gray-600 font-light mb-4">Rendez-vous sur place ou par visio</p>
                <motion.button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (!showCalendly) {
                      setShowCalendly(true);
                    }
                  }}
                  whileHover={{ y: -2 }}
                  className="block w-full border border-gray-300 text-black px-4 py-3 font-light hover:border-black transition-all duration-300 text-center"
                >
                  Prendre rendez-vous
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section CTA Final Développée */}
      <section className="border-t border-gray-200 py-32">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
            >
            <h2 className="text-4xl md:text-6xl font-light text-black mb-8">
              Prêt à simplifier vos locations ?
            </h2>
            <p className="text-lg text-gray-600 font-light mb-12 leading-relaxed max-w-3xl mx-auto">
              Rejoignez des centaines de propriétaires qui nous font déjà confiance pour gérer leurs biens immobiliers 
              sans stress et sans frais cachés.
            </p>
            
            <motion.button
              whileHover={{ y: -2 }}
              onClick={() => setShowCTADetails(!showCTADetails)}
              className="inline-flex items-center gap-3 border border-black text-black px-8 py-4 font-light text-lg hover:bg-black hover:text-white transition-all duration-300 mb-12"
            >
              <span>Démarrer maintenant</span>
              <FaArrowRight className={`transition-transform duration-300 ${showCTADetails ? 'rotate-90' : ''}`} />
            </motion.button>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-500 font-light mb-12">
              <div className="flex items-center gap-2">
                <FaCheck className="text-green-500 text-sm" />
                <span className="text-sm">100% Gratuit</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheck className="text-green-500 text-sm" />
                <span className="text-sm">Sans engagement</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheck className="text-green-500 text-sm" />
                <span className="text-sm">Support 7j/7</span>
              </div>
            </div>
          </motion.div>

          {/* Étapes détaillées développées */}
          <AnimatePresence>
            {showCTADetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.6 }}
                className="overflow-hidden"
              >
                <div className="border-t border-gray-200 pt-16">
                  <h3 className="text-2xl font-light text-black text-center mb-12">
                    Comment ça marche ?
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {ctaSteps.map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="text-center border border-gray-200 p-8 hover:border-black transition-all duration-300"
                      >
                        <div className="w-16 h-16 mx-auto mb-6 text-gray-400 flex items-center justify-center text-2xl">
                          {step.icon}
                        </div>
                        <h4 className="text-lg font-light text-black mb-4">
                          {step.title}
                        </h4>
                        <p className="text-gray-600 font-light mb-6 leading-relaxed">
                          {step.description}
                        </p>
                        <motion.button
                          whileHover={{ y: -2 }}
                          onClick={() => setActiveModal(step.modalKey)}
                          className="border border-gray-300 text-black px-6 py-2 font-light hover:border-black transition-all duration-300"
                        >
                          {step.action}
                        </motion.button>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="text-center mt-12">
                    <motion.button
                      whileHover={{ y: -2 }}
                      onClick={() => setShowCTADetails(false)}
                      className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors duration-300"
                    >
                      <FaTimes className="w-4 h-4" />
                      <span className="font-light">Fermer</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Modal Évaluation */}
      <Modal
        isOpen={activeModal === 'evaluation'}
        onClose={() => setActiveModal(null)}
        title="Évaluation Gratuite de Votre Bien"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-light text-black mb-6">🎯 Notre méthode d'évaluation</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaEye className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <h4 className="font-medium text-black">Analyse du marché local</h4>
                  <p className="text-gray-600 font-light">Étude comparative des biens similaires dans votre secteur</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaRocket className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <h4 className="font-medium text-black">Optimisation du loyer</h4>
                  <p className="text-gray-600 font-light">Définition du prix optimal pour maximiser vos revenus</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaStar className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <h4 className="font-medium text-black">Conseils personnalisés</h4>
                  <p className="text-gray-600 font-light">Recommandations pour valoriser votre bien</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-light text-black mb-6">📋 Ce que vous recevez</h3>
            <div className="bg-gray-50 p-6 border border-gray-200">
              <ul className="space-y-3 text-gray-600 font-light">
                <li className="flex items-center gap-2">
                  <FaCheck className="w-4 h-4 text-green-500" />
                  <span>Rapport d'évaluation détaillé</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="w-4 h-4 text-green-500" />
                  <span>Fourchette de loyer recommandée</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="w-4 h-4 text-green-500" />
                  <span>Analyse de la concurrence</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="w-4 h-4 text-green-500" />
                  <span>Conseils d'amélioration</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="w-4 h-4 text-green-500" />
                  <span>Stratégie de mise en location</span>
                </li>
              </ul>
            </div>
            <motion.button
              whileHover={{ y: -2 }}
              onClick={downloadWordForm}
              className="w-full mt-6 border border-black text-black px-6 py-3 font-light hover:bg-black hover:text-white transition-all duration-300"
            >
              Commencer mon évaluation
            </motion.button>
          </div>
        </div>
      </Modal>

      {/* Modal Plateformes */}
      <Modal
        isOpen={activeModal === 'plateformes'}
        onClose={() => setActiveModal(null)}
        title="Nos Plateformes Premium"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "SeLoger", desc: "Leader français de l'immobilier", icon: "🏠" },
            { name: "Leboncoin", desc: "Plateforme n°1 en France", icon: "🔍" },
            { name: "PAP", desc: "Spécialiste particulier à particulier", icon: "🤝" },
            { name: "Logic-Immo", desc: "Réseau professionnel premium", icon: "🏢" },
            { name: "Bien'ici", desc: "Innovation et proximité", icon: "📍" },
            { name: "Orpi", desc: "Réseau d'agences immobilières", icon: "🏪" }
          ].map((platform, index) => (
            <div key={index} className="border border-gray-200 p-6 text-center hover:border-black transition-all duration-300">
              <div className="text-3xl mb-4">{platform.icon}</div>
              <h4 className="font-medium text-black mb-2">{platform.name}</h4>
              <p className="text-gray-600 font-light text-sm">{platform.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 p-6 bg-green-50 border border-green-200">
          <div className="flex items-center gap-3 mb-4">
            <FaCamera className="w-5 h-5 text-green-600" />
            <h3 className="text-lg font-medium text-black">Service photo professionnel inclus</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <FaCheck className="w-3 h-3 text-green-500" />
              <span>Photographe professionnel</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="w-3 h-3 text-green-500" />
              <span>Retouches et optimisation</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="w-3 h-3 text-green-500" />
              <span>Mise en valeur du bien</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="w-3 h-3 text-green-500" />
              <span>Format adapté aux plateformes</span>
            </div>
          </div>
        </div>
      </Modal>

      {/* Modal IA */}
      <Modal
        isOpen={activeModal === 'ia'}
        onClose={() => setActiveModal(null)}
        title="Notre Intelligence Artificielle"
      >
        <div className="space-y-8">
          <div className="text-center">
            <FaBrain className="w-16 h-16 mx-auto text-gray-400 mb-6" />
            <h3 className="text-2xl font-light text-black mb-4">IA de Présélection Avancée</h3>
            <p className="text-gray-600 font-light max-w-2xl mx-auto">
              Notre intelligence artificielle analyse automatiquement chaque candidature selon vos critères 
              et ne vous présente que les profils les plus qualifiés.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-medium text-black mb-4">🔍 Critères analysés</h4>
              <div className="space-y-3">
                {[
                  "Revenus et stabilité financière",
                  "Historique de location",
                  "Situation professionnelle",
                  "Références précédentes",
                  "Compatibilité avec vos exigences"
                ].map((critere, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <FaCheck className="w-4 h-4 text-green-500" />
                    <span className="text-gray-600 font-light">{critere}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-black mb-4">⚡ Avantages</h4>
              <div className="space-y-3">
                {[
                  "Gain de temps considérable",
                  "Réduction des risques d'impayés",
                  "Candidats pré-qualifiés uniquement",
                  "Processus 100% automatisé",
                  "Disponible 24h/24, 7j/7"
                ].map((avantage, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <FaCheck className="w-4 h-4 text-green-500" />
                    <span className="text-gray-600 font-light">{avantage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 border border-gray-200 text-center">
            <h4 className="font-medium text-black mb-2">🎯 Taux de réussite</h4>
            <div className="text-3xl font-light text-black mb-2">94%</div>
            <p className="text-gray-600 font-light">de nos propriétaires trouvent le locataire idéal en moins de 15 jours</p>
          </div>
        </div>
      </Modal>

      {/* Modal Calendly */}
      <Modal
        isOpen={showCalendly}
        onClose={() => setShowCalendly(false)}
        title="Consultation Gratuite"
      >
        <CalendlyWidget />
      </Modal>

      <Footer />
    </main>
  );
};

export default Proprietaires;