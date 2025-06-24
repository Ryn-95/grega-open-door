import { motion, AnimatePresence } from 'framer-motion'
import { FaHome, FaUsers, FaShieldAlt, FaRocket, FaCheck, FaArrowRight, FaStar, FaGraduationCap, FaUserFriends, FaBuilding, FaKey, FaHandshake, FaLightbulb, FaGlobe, FaPhone, FaEnvelope, FaCalendarAlt, FaChartLine, FaAward, FaClock, FaHeadset, FaMapMarkerAlt, FaFileAlt, FaUserCheck, FaTools, FaHeart, FaThumbsUp, FaComments, FaQuestionCircle, FaTimes } from 'react-icons/fa'
import Footer from '../components/Footer'
import { useState, useEffect, useRef } from 'react'

const Services = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeService, setActiveService] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  const [showComparison, setShowComparison] = useState(false);
  const [selectedServices, setSelectedServices] = useState<number[]>([]);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [showCalendly, setShowCalendly] = useState(false);
  const isProcessingClick = useRef(false);
  
  // Déclaration des testimonials avant les useEffect
  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Étudiante",
      service: "Logement Étudiant",
      rating: 5,
      text: "Service exceptionnel ! J'ai trouvé mon studio idéal en moins de 2 semaines. L'équipe GREGA m'a accompagnée à chaque étape.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Thomas Martin",
      role: "Cadre",
      service: "Logement Classique",
      rating: 5,
      text: "Professionnalisme remarquable. Mon dossier a été optimisé et j'ai obtenu l'appartement de mes rêves dans le 7ème.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Sophie Laurent",
      role: "Investisseuse",
      service: "Investissement Locatif",
      rating: 5,
      text: "ROI de 6.2% sur mon premier investissement grâce aux conseils de GREGA. Une expertise incontournable !",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Rotation automatique des témoignages
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const services = [
    {
      id: 1,
      icon: <FaHome className="w-8 h-8" />,
      title: "Logement Classique",
      subtitle: "Service Premium",
      category: "Résidentiel",
      price: "500€",
      duration: "2-4 semaines",
      description: "Découvrez notre sélection exclusive de biens résidentiels premium avec accompagnement personnalisé de A à Z",
      features: ["Sélection premium", "Visite privée", "Négociation", "Suivi complet", "Garantie satisfaction"],
      process: [
        "Analyse de vos besoins",
        "Sélection personnalisée",
        "Visites accompagnées",
        "Négociation des conditions",
        "Signature sécurisée"
      ],
      benefits: [
        "Accès aux biens exclusifs",
        "Économie de temps",
        "Négociation experte",
        "Accompagnement total"
      ],
      stats: {
        satisfaction: 98,
        tempsGagne: 75,
        biensPresentes: 150
      }
    },
    {
      id: 2,
      icon: <FaUsers className="w-8 h-8" />,
      title: "Logement Social",
      subtitle: "Service Solidaire", 
      category: "Social",
      price: "300€",
      duration: "3-6 semaines",
      description: "Accédez à des logements à loyer modéré avec un accompagnement spécialisé et des solutions adaptées à votre situation",
      features: ["Dossier optimisé", "Démarches simplifiées", "Suivi administratif", "Garanties incluses", "Aide aux démarches"],
      process: [
        "Évaluation de votre situation",
        "Constitution du dossier",
        "Recherche ciblée",
        "Accompagnement administratif",
        "Suivi post-attribution"
      ],
      benefits: [
        "Dossier renforcé",
        "Démarches facilitées",
        "Suivi personnalisé",
        "Solutions adaptées"
      ],
      stats: {
        satisfaction: 96,
        tempsGagne: 80,
        biensPresentes: 85
      }
    },
    {
      id: 3,
      icon: <FaGraduationCap className="w-8 h-8" />,
      title: "Logement Étudiant",
      subtitle: "Service Jeunes",
      category: "Étudiants",
      price: "250€",
      duration: "1-3 semaines",
      description: "Solutions dédiées aux étudiants avec des logements adaptés, des conditions privilégiées et un réseau spécialisé",
      features: ["Résidences étudiantes", "Colocation", "Garants acceptés", "Proximité campus", "Tarifs négociés"],
      process: [
        "Analyse des besoins étudiants",
        "Recherche spécialisée",
        "Solutions de garantie",
        "Visites groupées",
        "Accompagnement déménagement"
      ],
      benefits: [
        "Réseau étudiant exclusif",
        "Conditions privilégiées",
        "Aide aux garants",
        "Proximité campus"
      ],
      stats: {
        satisfaction: 94,
        tempsGagne: 70,
        biensPresentes: 120
      }
    },
    {
      id: 4,
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Constitution Dossier",
      subtitle: "Service Expert",
      category: "Conseil",
      price: "150€",
      duration: "1-2 semaines",
      description: "Optimisation complète de votre dossier de candidature pour maximiser vos chances de succès auprès des propriétaires",
      features: ["Analyse personnalisée", "Optimisation", "Vérification", "Présentation premium", "Conseils stratégiques"],
      process: [
        "Audit du dossier existant",
        "Optimisation des documents",
        "Mise en forme professionnelle",
        "Vérification complète",
        "Présentation stratégique"
      ],
      benefits: [
        "Dossier professionnel",
        "Chances maximisées",
        "Présentation optimale",
        "Conseils d'experts"
      ],
      stats: {
        satisfaction: 99,
        tempsGagne: 90,
        biensPresentes: 200
      }
    },
    {
      id: 5,
      icon: <FaBuilding className="w-8 h-8" />,
      title: "Investissement Locatif",
      subtitle: "Service Investisseur",
      category: "Investissement",
      price: "800€",
      duration: "4-8 semaines",
      description: "Accompagnement complet pour vos projets d'investissement locatif avec analyse de rentabilité et gestion optimisée",
      features: ["Analyse de rentabilité", "Sélection d'investissement", "Montage financier", "Gestion locative", "Suivi performance"],
      process: [
        "Analyse de votre profil",
        "Recherche d'opportunités",
        "Étude de rentabilité",
        "Montage du financement",
        "Gestion et suivi"
      ],
      benefits: [
        "ROI optimisé",
        "Risques maîtrisés",
        "Gestion déléguée",
        "Performance suivie"
      ],
      stats: {
        satisfaction: 97,
        tempsGagne: 85,
        biensPresentes: 75
      }
    },
    {
      id: 6,
      icon: <FaTools className="w-8 h-8" />,
      title: "Services Complémentaires",
      subtitle: "Service Plus",
      category: "Complémentaire",
      price: "200€",
      duration: "Sur mesure",
      description: "Services additionnels pour faciliter votre emménagement : déménagement, assurance, internet, électricité",
      features: ["Déménagement", "Assurance habitation", "Internet & énergie", "État des lieux", "Conciergerie"],
      process: [
        "Évaluation des besoins",
        "Devis personnalisés",
        "Coordination des services",
        "Suivi des interventions",
        "Satisfaction client"
      ],
      benefits: [
        "Gain de temps",
        "Tarifs négociés",
        "Coordination totale",
        "Qualité garantie"
      ],
      stats: {
        satisfaction: 95,
        tempsGagne: 60,
        biensPresentes: 50
      }
    }
  ];

  const faq = [
    {
      question: "Vos services sont-ils vraiment gratuits ?",
      answer: "Oui, nos services de recherche de logement sont 100% gratuits. Nous sommes rémunérés par les propriétaires et partenaires."
    },
    {
      question: "Combien de temps prend une recherche ?",
      answer: "En moyenne 2-4 semaines pour un logement classique, 1-3 semaines pour un logement étudiant selon vos critères."
    },
    {
      question: "Couvrez-vous toute la France ?",
      answer: "Nous couvrons 8 grandes villes : Paris, Lyon, Marseille, Toulouse, Bordeaux, Lille, Nantes et Nice."
    },
    {
      question: "Puis-je changer de service en cours de recherche ?",
      answer: "Absolument ! Nos services sont flexibles et s'adaptent à l'évolution de vos besoins."
    }
  ];

  // Composant Calendly intégré
  const CalendlyWidget = () => (
    <div className="w-full h-[600px]">
      <iframe
        src="https://calendly.com/contact-gregaopendoor/consultation"
        width="100%"
        height="100%"
        frameBorder="0"
        title="Consultation avec GREGA"
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

  // Composant Modal réutilisable
  const Modal = ({ isOpen, onClose, title, children }: any) => {
    if (!isOpen) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-light text-black">{title}</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-black transition-colors"
              >
                <FaTimes className="w-6 h-6" />
              </button>
            </div>
            {children}
          </div>
        </div>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      
      {/* Hero Section Ultra-Épuré */}
      <section className="min-h-screen bg-white relative overflow-hidden flex items-center justify-center">
        <div className="max-w-6xl mx-auto text-center px-6 relative z-10">
          
          {/* Badge ultra-épuré */}
              <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-12"
          >
            <div className="inline-flex items-center px-4 py-2 border border-gray-200 bg-white">
              <span className="text-gray-600 text-xs font-light tracking-wide uppercase">
                Services Premium
              </span>
      </div>
          </motion.div>

          {/* Titre principal ultra-épuré */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-6xl md:text-8xl font-light text-black leading-tight tracking-tight mb-4">
              Services
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-gray-600 leading-tight">
              Immobiliers
            </h2>
          </motion.div>

          {/* Statistiques épurées */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16"
          >
            {[
              { number: "2500+", label: "Clients" },
              { number: "98%", label: "Réussite" },
              { number: "15j", label: "Délai" },
              { number: "6", label: "Services" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="text-center"
            >
                <div className="text-2xl md:text-3xl font-light text-black mb-2">{stat.number}</div>
                <div className="text-gray-500 text-sm font-light">{stat.label}</div>
              </motion.div>
            ))}
              </motion.div>
              
          {/* Description épurée */}
                <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mb-12"
          >
            <p className="text-lg text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
              Une gamme complète de services immobiliers professionnels
            </p>
                </motion.div>
            
          {/* CTA épuré */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => {
                // Protection ultra-simple
                if (showCalendly) return;
                setShowCalendly(true);
              }}
              disabled={showCalendly}
              className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 font-light text-lg hover:bg-gray-800 transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaCalendarAlt className="w-5 h-5" />
              <span>Consultation Gratuite</span>
            </button>

            <a
              href="tel:0953376141"
              className="px-6 py-3 border border-black text-black text-sm font-light hover:bg-black hover:text-white transition-colors text-center"
            >
              09 53 37 61 41
            </a>
          </div>
        </div>
      </section>
          
      {/* Section Services Détaillés - Ultra-Épuré */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header épuré */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-light text-black mb-4">
              Nos Services
            </h2>
            <div className="w-16 h-px bg-black mx-auto mb-6"></div>
            <p className="text-gray-600 font-light max-w-2xl mx-auto">
              6 services spécialisés pour tous vos besoins immobiliers
            </p>
                    </motion.div>
                    
          {/* Grille des services épurée */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 border border-gray-200 hover:border-black transition-colors duration-300 h-full bg-white">
                  {/* Header du service */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 flex items-center justify-center text-black">
                        {service.icon}
                        </div>
                      <div>
                        <div className="text-xs font-light text-gray-500 uppercase tracking-wide">{service.category}</div>
                        <div className="text-lg font-light text-black">{service.title}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-light text-black">{service.price}</div>
                      <div className="text-xs text-gray-500">{service.duration}</div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <p className="text-gray-600 leading-relaxed font-light mb-6 text-sm">
                      {service.description}
                    </p>
                  
                    {/* Features épurées */}
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <div 
                          key={featureIndex}
                          className="flex items-center gap-2"
                      >
                          <div className="w-1 h-1 bg-black rounded-full"></div>
                          <span className="text-gray-700 font-light text-sm">{feature}</span>
                        </div>
                  ))}
                  </div>
                
                    {/* CTA service épuré */}
                    <div className="flex gap-2">
                      <button className="flex-1 py-2 px-3 bg-black text-white text-xs font-light hover:bg-gray-800 transition-colors">
                        Choisir
                      </button>
                      <button className="w-8 h-8 border border-gray-300 flex items-center justify-center hover:border-black transition-colors">
                        <FaHeart className="w-3 h-3 text-gray-400" />
                      </button>
                    </div>
                </div>
              </div>
            </motion.div>
            ))}
          </div>
        </div>
      </section>
      
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

export default Services; 