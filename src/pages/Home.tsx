import { FaMapMarkerAlt, FaEye, FaShieldAlt, FaClock, FaHome, FaMobile, FaTruck, FaCalendarAlt, FaArrowRight } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import SEOHead from '../components/SEOHead'

// Données pour les biens
const featuredProperties = [
  {
    id: 1,
    title: 'Studio moderne 25m²',
    city: 'Paris 11ème',
    address: 'Rue de Bretagne',
    price: '895',
    surface: 25,
    pieces: 1,
    type: 'Studio',
    imageUrl: '/3D/mini_immeuble.png',
  },
  {
    id: 2,
    title: 'Appartement T2 45m²',
    city: 'Boulogne-Billancourt',
    address: 'Avenue J-B Clément',
    price: '1250',
    surface: 45,
    pieces: 2,
    type: 'Appartement',
    imageUrl: '/3D/maison.png',
  },
  {
    id: 3,
    title: 'Maison avec jardin',
    city: 'Neuilly-sur-Seine',
    address: 'Rue du Château',
    price: '2100',
    surface: 85,
    pieces: 4,
    type: 'Maison',
    imageUrl: '/3D/maison copy.png',
  }
];

const PropertyList = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extralight text-slate-800 mb-4 tracking-tight">
            Nos biens sélectionnés
          </h2>
          <p className="text-xl text-slate-500 font-light">
            {featuredProperties.length} logements d'exception prêts à vous accueillir.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="bg-gray-50 h-56 flex items-center justify-center p-4">
                <
                  img
                  src={property.imageUrl}
                  alt={property.title}
                  className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm font-medium text-slate-500 mb-1">{property.type}</p>
                <h3 className="text-xl font-semibold text-slate-800 mb-2 leading-tight">
                  {property.title}
                </h3>
                <p className="text-sm text-slate-400 flex items-center mb-4">
                  <FaMapMarkerAlt className="w-3 h-3 mr-2" />
                  {property.address}, {property.city}
                </p>
                
                <div className="mt-auto flex justify-between items-center">
                  <div className="text-2xl font-bold text-slate-900">
                    {property.price}€
                    <span className="text-sm text-slate-500 font-light">/mois</span>
                  </div>
                  <a href="#" className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-slate-800 hover:text-white transition-all duration-300">
                    <FaEye className="w-3.5 h-3.5" />
                    <span>Voir</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
          <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
          <h2 className="text-4xl font-light text-gray-900 mb-6">
            Nos services
            </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Une approche personnalisée pour votre recherche immobilière
            </p>
          </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Service 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
            className="text-center"
          >
            <div className="h-48 mb-6 flex items-center justify-center">
              <img 
                src="/3D/Plan_avec_localisation.png"
                alt="Localisation"
                className="w-full h-full object-contain"
              />
                  </div>
            <h3 className="text-xl font-medium text-gray-900 mb-4">Recherche ciblée</h3>
            <p className="text-gray-600 font-light">Trouvez le bien idéal selon vos critères précis et votre budget</p>
                </motion.div>

          {/* Service 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="h-48 mb-6 flex items-center justify-center">
              <img 
                src="/3D/Cle_devantlaporte.png"
                alt="Clés"
                className="w-full h-full object-contain"
              />
                            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-4">Visites express</h3>
            <p className="text-gray-600 font-light">Organisation de visites sous 24h avec nos agents qualifiés</p>
                        </motion.div>
                        
          {/* Service 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="h-48 mb-6 flex items-center justify-center">
              <img 
                src="/3D/securite.png"
                alt="Sécurité"
                className="w-full h-full object-contain"
              />
                        </div>
            <h3 className="text-xl font-medium text-gray-900 mb-4">Sécurité totale</h3>
            <p className="text-gray-600 font-light">Tous nos biens sont vérifiés et sécurisés pour votre tranquillité</p>
          </motion.div>
        </div>
                      </div>
      </section>
  );
}

const MovingSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
                          <motion.div  
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          viewport={{ once: true }}
                          >
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Déménagement facilité
            </h2>
            <p className="text-xl text-gray-600 font-light mb-8">
              Nous vous accompagnons dans toutes les étapes de votre installation
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <FaTruck className="w-5 h-5 text-gray-700" />
                      </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Transport sécurisé</h4>
                  <p className="text-gray-600 font-light">Service de déménagement professionnel inclus</p>
                  </div>
                      </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <FaHome className="w-5 h-5 text-gray-700" />
                        </div>
                                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Installation complète</h4>
                  <p className="text-gray-600 font-light">Aide à l'aménagement de votre nouveau logement</p>
                                </div>
                                </div>
                              </div>
              </motion.div>

        <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="/3D/seragedemaindevantunemaison.png"
              alt="Déménagement"
              className="w-full h-[400px] object-contain"
            />
            <img 
              src="/3D/camionlivraison.png"
              alt="Camion"
              className="absolute -bottom-8 -right-8 w-28 h-28 object-contain"
            />
                              </motion.div>
                          </div>
        </div>
      </section>
  );
}

const ProcessSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
          <h2 className="text-4xl font-light text-gray-900 mb-6">
            Comment ça marche ?
            </h2>
          <p className="text-xl text-gray-600 font-light">
            Un processus simple en 3 étapes
            </p>
          </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            {[
              {
                icon: FaMapMarkerAlt, 
                title: "1. Recherchez", 
                desc: "Utilisez notre moteur de recherche avancé pour trouver votre bien idéal" 
              },
              { 
                icon: FaCalendarAlt, 
                title: "2. Visitez", 
                desc: "Planifiez vos visites en quelques clics avec nos agents experts" 
              },
              { 
                icon: FaHome, 
                title: "3. Emménagez", 
                desc: "Nous vous accompagnons jusqu'à votre installation complète" 
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start gap-6"
              >
                <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <step.icon className="w-7 h-7 text-gray-700" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-900 mb-3">{step.title}</h4>
                  <p className="text-gray-600 font-light text-lg">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="relative">
            <img 
              src="/3D/mini_immeuble.png"
              alt="Immeuble"
              className="w-full h-[450px] object-contain"
            />
            <img 
              src="/3D/calendrier.png"
              alt="Calendrier"
              className="absolute -bottom-8 -right-8 w-32 h-32 object-contain"
            />
            <img 
              src="/3D/Plan_2.png"
              alt="Plan"
              className="absolute top-8 -left-8 w-24 h-24 object-contain"
            />
              </div>
          </div>
        </div>
      </section>
  );
}

const AppSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
              viewport={{ once: true }}
          >
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Notre application mobile
            </h2>
            <p className="text-xl text-gray-600 font-light mb-8">
              Gérez votre recherche immobilière depuis votre smartphone
            </p>
            
            <div className="space-y-6 mb-8">
              {[
                { icon: FaMobile, text: "Recherche en temps réel" },
                { icon: FaClock, text: "Notifications instantanées" },
                { icon: FaCalendarAlt, text: "Prise de rendez-vous facilitée" },
                { icon: FaMapMarkerAlt, text: "Géolocalisation des biens" }
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-gray-700" />
                  </div>
                  <span className="text-gray-700 font-light">{feature.text}</span>
                </div>
              ))}
          </div>

            <button className="bg-gray-900 text-white px-8 py-4 rounded-xl font-medium">
              Télécharger l'app
            </button>
            </motion.div>
            
            <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="/3D/Application.png"
              alt="Application mobile"
              className="w-full h-[450px] object-contain"
            />
            <img 
              src="/3D/Livraison_carton.png"
              alt="Livraison"
              className="absolute -bottom-8 -right-8 w-32 h-32 object-contain"
            />
          </motion.div>
          </div>
        </div>
      </section>
  );
}

const Home = () => {
  const faqData = [
    {
      question: "Comment puis-je louer un appartement via GREGA OPEN DOOR ?",
      answer: "Contactez-nous au 09 53 37 61 41 ou via notre formulaire en ligne. Notre équipe vous accompagnera dans votre recherche et vous présentera les biens correspondant à vos critères."
    },
    {
      question: "Quels sont vos secteurs d'intervention ?",
      answer: "Nous intervenons principalement à Paris et en région parisienne. Notre expertise couvre tous les arrondissements parisiens et les principales villes d'Île-de-France."
    },
    {
      question: "Proposez-vous des services pour les propriétaires ?",
      answer: "Oui, nous proposons des services complets pour les propriétaires : estimation gratuite, gestion locative, recherche de locataires qualifiés, et accompagnement juridique."
    },
    {
      question: "Comment prendre rendez-vous pour une visite ?",
      answer: "Vous pouvez prendre rendez-vous directement via notre système Calendly en ligne, nous appeler au 09 53 37 61 41, ou nous envoyer un email à contact@gregaopendoor.fr"
    }
  ]

  const breadcrumbs = [
    { name: "Accueil", url: "https://www.gregaopendoor.fr/" }
  ]

  return (
    <>
      <SEOHead
        title="GREGA OPEN DOOR - Agence Immobilière Paris | Location, Achat, Vente"
        description="GREGA OPEN DOOR, votre agence immobilière de confiance à Paris. Spécialiste en location, achat et vente de biens immobiliers. Services personnalisés pour propriétaires et locataires. Contactez-nous au 09 53 37 61 41."
        keywords="agence immobilière Paris, location appartement Paris, achat immobilier Paris, vente immobilier, propriétaires, locataires, gestion locative, estimation immobilière, 75001, 75002, 75003, 75004, 75005, 75006, 75007, 75008"
        canonical="https://www.gregaopendoor.fr/"
        ogType="website"
        schemaType="RealEstateAgent"
        breadcrumbs={breadcrumbs}
        faq={faqData}
      />
      <div className="bg-white">
        <Hero />
        <PropertyList />
        <ServicesSection />
        <MovingSection />
        <ProcessSection />
        <AppSection />
        <Footer />
      </div>
    </>
  )
}

export default Home;