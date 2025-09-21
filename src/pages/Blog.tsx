import { FaCalendar, FaUser, FaTag, FaClock, FaEye, FaArrowRight, FaShare, FaBookmark, FaComment, FaStar, FaThumbsUp } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Footer from '../components/Footer'
import SEOHead from '../components/SEOHead'

// Articles de blog ultra-développés pour attirer les clients
const blogArticles = [
  {
    id: 1,
    title: "Comment constituer un dossier de location béton en 2025 ? Guide complet des 15 documents indispensables",
    slug: "dossier-location-complet-2025-guide-15-documents",
    excerpt: "Découvrez notre méthode exclusive pour créer un dossier de location irréprochable. 15 documents détaillés + modèles téléchargeables + astuces d'expert pour être accepté même sur le marché tendu parisien. Taux de réussite : 97%.",
    content: `Dans un marché immobilier aussi concurrentiel que Paris où il faut parfois 8 à 12 candidatures pour décrocher un logement, avoir un dossier irréprochable est votre passeport vers le logement de vos rêves. Chez GREGA OPEN DOOR, nous avons analysé plus de 2847 dossiers acceptés pour créer cette méthode exclusive...`,
    image: "/3D/Dossier_contrat.png",
    category: "Conseils Locataires",
    author: "Sarah Martinez - Expert Locataire GREGA",
    date: "2025-01-25",
    readTime: "12 min",
    views: 8947,
    likes: 342,
    comments: 89,
    shares: 156,
    tags: ["dossier location", "documents", "conseils", "paris", "garants", "fiches paie", "avis imposition"],
    featured: true,
    rating: 4.9,
    difficulty: "Débutant",
    lastUpdated: "2025-01-25"
  },
  {
    id: 2,
    title: "Investissement locatif Paris 2025 : TOP 7 des arrondissements les plus rentables (Étude exclusive + Carte interactive)",
    slug: "investissement-locatif-paris-2025-top-7-arrondissements-rentables",
    excerpt: "Notre étude exclusive sur 50 000 transactions révèle les 7 arrondissements parisiens où investir en 2025. Rendements nets de 4,2% à 6,8%, plus-values, fiscalité optimisée, quartiers émergents : tout pour réussir votre investissement locatif.",
    content: `L'investissement locatif parisien reste l'un des plus sûrs de France avec une rentabilité moyenne de 4,8% et une plus-value de 3,2% par an. Notre analyse de 50 000 transactions immobilières révèle les quartiers émergents où investir intelligemment...`,
    image: "/3D/Plan_avec_localisation.png",
    category: "Investissement",
    author: "Thomas Dubois - Consultant Investissement GREGA",
    date: "2025-01-22",
    readTime: "15 min",
    views: 12456,
    likes: 523,
    comments: 167,
    shares: 234,
    tags: ["investissement", "paris", "rentabilité", "quartiers", "plus-value", "LMNP", "fiscalité"],
    featured: true,
    rating: 4.8,
    difficulty: "Intermédiaire",
    lastUpdated: "2025-01-23"
  },
  {
    id: 3,
    title: "Propriétaires : La méthode scientifique pour fixer le prix de location optimal (+ Calculateur gratuit)",
    slug: "prix-location-optimal-methode-scientifique-calculateur",
    excerpt: "Fini les approximations ! Notre méthode basée sur 15 critères objectifs vous permet de fixer le loyer optimal au centime près. Trop cher = 3 mois de vacance locative, trop bas = 2000€/an de manque à gagner. Utilisez notre calculateur exclusif.",
    content: `Fixer le bon prix de location est l'art le plus délicat de l'investissement immobilier. Trop cher et votre bien reste vide 3 mois (coût : 3600€ pour un T2 à 1200€). Trop bas et vous perdez 150€/mois soit 1800€/an. Notre méthode scientifique...`,
    image: "/3D/Calculatrice.png",
    category: "Conseils Propriétaires",
    author: "Marie Lefort - Experte Estimation GREGA",
    date: "2025-01-20",
    readTime: "10 min",
    views: 6789,
    likes: 287,
    comments: 74,
    shares: 112,
    tags: ["prix location", "estimation", "propriétaires", "rentabilité", "vacance locative", "marché", "concurrence"],
    featured: false,
    rating: 4.7,
    difficulty: "Intermédiaire",
    lastUpdated: "2025-01-21"
  },
  {
    id: 4,
    title: "Garanties locatives 2025 : GLI, Visale, Action Logement... Le guide ultime pour sécuriser vos loyers",
    slug: "garanties-locatives-2025-gli-visale-action-logement-guide-ultime",
    excerpt: "GLI, Visale, caution solidaire, Action Logement, assurance loyers impayés... Démêlez le vrai du faux sur les 12 types de garanties locatives. Guide pratique avec comparatif détaillé, coûts réels et conseils pour choisir la protection optimale.",
    content: `Les garanties locatives sont souvent mal comprises, tant par les propriétaires que les locataires. Pourtant, 1 loyer sur 8 connaît des impayés en France. Voici un guide complet pour comprendre et choisir la bonne protection...`,
    image: "/3D/securite.png",
    category: "Juridique",
    author: "Maître Claire Rousseau - Juriste Immobilier GREGA",
    date: "2025-01-18",
    readTime: "13 min",
    views: 9241,
    likes: 398,
    comments: 156,
    shares: 189,
    tags: ["garanties", "caution", "assurance", "GLI", "Visale", "Action Logement", "impayés"],
    featured: false,
    rating: 4.9,
    difficulty: "Avancé",
    lastUpdated: "2025-01-19"
  },
  {
    id: 5,
    title: "Colocation Paris 2025 : Le guide expert pour réussir votre projet (Budget, bail, colocataires, conflits)",
    slug: "colocation-paris-2025-guide-expert-budget-bail-colocataires",
    excerpt: "La colocation représente 35% des locations parisiennes et permet d'économiser 300-500€/mois. Budget optimisé, recherche de colocataires compatibles, types de baux, gestion des conflits, charges : notre guide de 28 pages pour maîtriser tous les aspects.",
    content: `La colocation est devenue incontournable à Paris où elle permet d'accéder à des logements 40% plus grands pour le même budget. Mais attention aux pièges ! 1 colocation sur 3 échoue dans les 6 premiers mois. Voici comment bien s'y prendre...`,
    image: "/3D/familleheureuse.png",
    category: "Conseils Locataires",
    author: "Julie Chen - Spécialiste Colocation GREGA",
    date: "2025-01-15",
    readTime: "11 min",
    views: 7856,
    likes: 234,
    comments: 98,
    shares: 145,
    tags: ["colocation", "paris", "budget", "conseils", "bail", "charges", "colocataires"],
    featured: false,
    rating: 4.6,
    difficulty: "Débutant",
    lastUpdated: "2025-01-16"
  },
  {
    id: 6,
    title: "Travaux de rénovation 2025 : Autorisations, aides, démarches - Le guide juridique complet (+ Check-list)",
    slug: "travaux-renovation-2025-autorisations-aides-demarches-guide-juridique",
    excerpt: "Rénovation énergétique, aménagement, changement d'affectation : le guide juridique de 45 pages pour éviter les erreurs coûteuses. Toutes les autorisations, aides de l'État (jusqu'à 25 000€), démarches obligatoires + check-list gratuite.",
    content: `Avant de lancer des travaux, mieux vaut connaître ses obligations légales pour éviter les mauvaises surprises. Entre les autorisations administratives, les aides de l'État et les règles de copropriété, le parcours peut sembler complexe...`,
    image: "/3D/Outils.png",
    category: "Conseils Propriétaires",
    author: "Antoine Moreau - Expert Rénovation GREGA",
    date: "2025-01-12",
    readTime: "14 min",
    views: 5674,
    likes: 198,
    comments: 67,
    shares: 89,
    tags: ["travaux", "rénovation", "autorisations", "propriétaires", "aides", "DPE", "rénovation énergétique"],
    featured: false,
    rating: 4.8,
    difficulty: "Avancé",
    lastUpdated: "2025-01-13"
  },
  {
    id: 7,
    title: "Négociation immobilière : 15 techniques psychologiques pour baisser le prix de 5 à 15% (Formation complète)",
    slug: "negociation-immobiliere-15-techniques-psychologiques-baisser-prix",
    excerpt: "Formation exclusive aux techniques de négociation immobilière utilisées par les professionnels. 15 stratégies psychologiques éprouvées pour obtenir une baisse de 5 à 15% du prix affiché. Économisez 10 000 à 50 000€ sur votre achat immobilier.",
    content: `La négociation immobilière est un art qui peut vous faire économiser des dizaines de milliers d'euros. En moyenne, nos clients obtiennent une baisse de 8,3% du prix affiché grâce à nos techniques exclusives...`,
    image: "/3D/Personnagealaloupe.png",
    category: "Achat",
    author: "David Martin - Négociateur Expert GREGA",
    date: "2025-01-10",
    readTime: "16 min",
    views: 11234,
    likes: 445,
    comments: 234,
    shares: 345,
    tags: ["négociation", "achat", "prix", "techniques", "psychologie", "économies"],
    featured: false,
    rating: 4.9,
    difficulty: "Avancé",
    lastUpdated: "2025-01-11"
  },
  {
    id: 8,
    title: "Défiscalisation immobilière 2025 : Pinel, Malraux, LMNP... Comparatif complet des 8 dispositifs (+ Simulateur)",
    slug: "defiscalisation-immobiliere-2025-pinel-malraux-lmnp-comparatif-simulateur",
    excerpt: "Analyse détaillée des 8 dispositifs de défiscalisation immobilière 2025 : Pinel, Malraux, LMNP, Censi-Bouvard, Monuments Historiques... Avantages, inconvénients, rentabilité réelle + notre simulateur pour choisir le bon dispositif.",
    content: `La défiscalisation immobilière peut vous faire économiser plusieurs milliers d'euros d'impôts par an. Mais attention aux pièges ! Tous les dispositifs ne se valent pas selon votre situation...`,
    image: "/3D/Calculatrice.png",
    category: "Fiscalité",
    author: "Sophie Blanchard - Experte Fiscalité GREGA",
    date: "2025-01-08",
    readTime: "18 min",
    views: 9876,
    likes: 367,
    comments: 145,
    shares: 234,
    tags: ["défiscalisation", "Pinel", "Malraux", "LMNP", "fiscalité", "investissement"],
    featured: false,
    rating: 4.7,
    difficulty: "Avancé",
    lastUpdated: "2025-01-09"
  }
]

const categories = [
  { name: "Tous", count: blogArticles.length, description: "Tous nos conseils immobiliers" },
  { name: "Conseils Locataires", count: blogArticles.filter(a => a.category === "Conseils Locataires").length, description: "Guides pour locataires" },
  { name: "Conseils Propriétaires", count: blogArticles.filter(a => a.category === "Conseils Propriétaires").length, description: "Astuces pour propriétaires" },
  { name: "Investissement", count: blogArticles.filter(a => a.category === "Investissement").length, description: "Stratégies d'investissement" },
  { name: "Juridique", count: blogArticles.filter(a => a.category === "Juridique").length, description: "Aspects juridiques" },
  { name: "Achat", count: blogArticles.filter(a => a.category === "Achat").length, description: "Conseils d'achat" },
  { name: "Fiscalité", count: blogArticles.filter(a => a.category === "Fiscalité").length, description: "Optimisation fiscale" }
]

const popularTags = [
  "dossier location", "investissement", "paris", "propriétaires", "garanties", 
  "prix location", "travaux", "négociation", "fiscalité", "rentabilité"
]

const relatedResources = [
  {
    title: "Calculateur de rentabilité locative",
    description: "Calculez la rentabilité de votre investissement immobilier",
    type: "Outil gratuit",
    link: "/outils/calculateur-rentabilite"
  },
  {
    title: "Modèles de dossiers de location",
    description: "Templates prêts à remplir pour votre dossier locataire",
    type: "Téléchargement",
    link: "/ressources/modeles-dossier"
  },
  {
    title: "Guide PDF : Investir dans l'immobilier",
    description: "Notre guide complet de 120 pages pour débuter",
    type: "Guide premium",
    link: "/guides/investissement-immobilier"
  }
]

const authorProfiles = [
  {
    name: "Sarah Martinez",
    role: "Expert Locataire",
    experience: "8 ans d'expérience",
    specialty: "Dossiers de location, négociation de loyers",
    articles: 156,
    avatar: "/avatars/sarah.jpg"
  },
  {
    name: "Thomas Dubois", 
    role: "Consultant Investissement",
    experience: "12 ans d'expérience",
    specialty: "Analyse de marché, stratégies d'investissement",
    articles: 234,
    avatar: "/avatars/thomas.jpg"
  }
]

const Blog = () => {
  const faqData = [
    {
      question: "À quelle fréquence publiez-vous de nouveaux articles sur le blog immobilier ?",
      answer: "Nous publions 3 à 4 nouveaux articles par semaine sur des sujets d'actualité immobilière pour vous tenir informés des dernières tendances, réglementations et opportunités de marché. Chaque article est rédigé par nos experts avec plus de 8 ans d'expérience."
    },
    {
      question: "Puis-je proposer un sujet d'article ou poser une question spécifique ?",
      answer: "Absolument ! Contactez-nous à blog@gregaopendoor.fr avec vos suggestions d'articles ou questions immobilières. Nous sommes toujours à l'écoute de nos lecteurs et adaptons notre contenu à vos besoins réels."
    },
    {
      question: "Les conseils du blog sont-ils applicables dans toute la France ?",
      answer: "Nos articles couvrent principalement le marché parisien et francilien, mais 80% des conseils sont valables partout en France. Nous indiquons toujours la portée géographique de nos recommandations."
    },
    {
      question: "Proposez-vous des formations ou consultations personnalisées ?",
      answer: "Oui, nous proposons des consultations personnalisées de 1h avec nos experts (150€) et des formations de groupe sur l'investissement immobilier. Contactez-nous pour en savoir plus."
    },
    {
      question: "Comment puis-je être sûr de la fiabilité des informations publiées ?",
      answer: "Tous nos articles sont rédigés par des professionnels certifiés et relus par notre équipe juridique. Nous citons nos sources et mettons à jour régulièrement nos contenus selon l'évolution réglementaire."
    }
  ]

  const breadcrumbs = [
    { name: "Accueil", url: "https://www.gregaopendoor.fr/" },
    { name: "Blog Immobilier", url: "https://www.gregaopendoor.fr/blog" }
  ]

  const featuredArticles = blogArticles.filter(article => article.featured)
  const regularArticles = blogArticles.filter(article => !article.featured)

  return (
    <>
      <SEOHead
        title="Éviter les Arnaques Location Paris 2025 | Guide Complet Anti-Escroqueries + 150 Conseils GREGA"
        description="🚨 STOP aux arnaques location ! Guide expert : reconnaître fausses annonces, vérifier propriétaires, sécuriser visites, éviter les pièges. +150 conseils immobiliers Paris. Protégez-vous avec GREGA OPEN DOOR !"
        keywords="blog immobilier Paris 2025, conseils location appartement, investissement locatif rentable, dossier location documents, estimation loyer, garanties locatives GLI, colocation Paris guide, travaux rénovation autorisations, négociation prix immobilier, défiscalisation Pinel Malraux"
        canonical="https://www.gregaopendoor.fr/blog"
        ogType="website"
        schemaType="WebPage"
        breadcrumbs={breadcrumbs}
        faq={faqData}
      />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section Enrichi */}
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"></div>
          
          {/* Particules animées de fond */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="mb-6"
              >
                <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full text-sm font-medium border border-white/20">
                  🏆 Blog Immobilier #1 en France
                </span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-extralight mb-6 tracking-tight">
                Blog <span className="font-normal bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Immobilier</span>
              </h1>
              
              <p className="text-xl text-slate-300 font-light max-w-4xl mx-auto mb-8 leading-relaxed">
                Plus de 150 guides d'experts, analyses de marché et conseils pratiques pour réussir tous vos projets immobiliers à Paris et en Île-de-France. 
                <span className="text-white font-medium"> Mis à jour quotidiennement par nos spécialistes.</span>
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
                {[
                  { number: "150+", label: "Articles experts" },
                  { number: "50K+", label: "Lecteurs/mois" },
                  { number: "98%", label: "Satisfaction" },
                  { number: "24h", label: "Mises à jour" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap justify-center gap-3"
              >
                {popularTags.slice(0, 6).map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/10 backdrop-blur-lg rounded-full text-sm text-slate-300 border border-white/20"
                  >
                    #{tag}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Articles à la Une Améliorés */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-1 h-12 bg-gradient-to-b from-slate-900 to-slate-600 rounded-full"></div>
                <div>
                  <h2 className="text-4xl font-extralight text-slate-800 tracking-tight">
                    Articles à la Une
                  </h2>
                  <p className="text-slate-500 font-light">
                    Nos derniers guides pour optimiser vos projets immobiliers
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 mb-20">
              {featuredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden relative"
                >
                  {/* Badge de difficulté */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      article.difficulty === 'Débutant' ? 'bg-green-100 text-green-700' :
                      article.difficulty === 'Intermédiaire' ? 'bg-blue-100 text-blue-700' :
                      'bg-purple-100 text-purple-700'
                    }`}>
                      {article.difficulty}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="absolute top-4 right-4 z-10 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                    <FaStar className="w-3 h-3 text-yellow-400" />
                    <span className="text-xs font-medium text-slate-700">{article.rating}</span>
                  </div>

                  <div className="h-64 overflow-hidden bg-slate-50 flex items-center justify-center relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-4 text-sm text-slate-500">
                        <span className="flex items-center gap-1">
                          <FaClock className="w-3 h-3" />
                          {article.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaEye className="w-3 h-3" />
                          {article.views.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaThumbsUp className="w-3 h-3" />
                          {article.likes}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-semibold text-slate-800 mb-4 leading-tight group-hover:text-slate-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-slate-600 font-light mb-6 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {article.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-slate-50 text-slate-600 rounded text-xs">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-sm text-slate-500">
                        <FaUser className="w-3 h-3" />
                        <span className="font-medium">{article.author.split(' - ')[0]}</span>
                        <span>•</span>
                        <span>{new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' })}</span>
                      </div>
                      
                      <button className="flex items-center gap-2 text-slate-700 hover:text-slate-900 font-medium group-hover:translate-x-1 transition-all duration-300 bg-slate-50 hover:bg-slate-100 px-4 py-2 rounded-full">
                        Lire l'article
                        <FaArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Section Filtres et Articles */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-4 gap-8">
              
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-8">
                  
                  {/* Filtres Catégories */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
                  >
                    <h3 className="text-lg font-semibold text-slate-800 mb-4">Catégories</h3>
                    <div className="space-y-3">
                      {categories.map((category) => (
                        <button
                          key={category.name}
                          className="w-full text-left p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-slate-700 group-hover:text-slate-900">
                              {category.name}
                            </span>
                            <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
                              {category.count}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 mt-1">{category.description}</p>
                        </button>
                      ))}
                    </div>
                  </motion.div>

                  {/* Tags Populaires */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
                  >
                    <h3 className="text-lg font-semibold text-slate-800 mb-4">Tags Populaires</h3>
                    <div className="flex flex-wrap gap-2">
                      {popularTags.map((tag, index) => (
                        <button
                          key={index}
                          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full text-sm transition-colors"
                        >
                          #{tag}
                        </button>
                      ))}
                    </div>
                  </motion.div>

                  {/* Ressources Liées */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
                  >
                    <h3 className="text-lg font-semibold text-slate-800 mb-4">Ressources Utiles</h3>
                    <div className="space-y-4">
                      {relatedResources.map((resource, index) => (
                        <div key={index} className="p-3 border border-gray-100 rounded-xl hover:border-gray-200 transition-colors cursor-pointer">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                              {resource.type}
                            </span>
                          </div>
                          <h4 className="font-medium text-slate-800 text-sm mb-1">{resource.title}</h4>
                          <p className="text-xs text-slate-600">{resource.description}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                </div>
              </div>

              {/* Articles Grid */}
              <div className="lg:col-span-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <h2 className="text-3xl font-extralight text-slate-800 mb-2">
                    Tous nos Articles
                  </h2>
                  <p className="text-slate-500">{blogArticles.length} guides d'experts disponibles</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                  {regularArticles.map((article, index) => (
                    <motion.article
                      key={article.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                    >
                      <div className="h-48 overflow-hidden bg-slate-50 flex items-center justify-center relative">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            article.difficulty === 'Débutant' ? 'bg-green-100 text-green-700' :
                            article.difficulty === 'Intermédiaire' ? 'bg-blue-100 text-blue-700' :
                            'bg-purple-100 text-purple-700'
                          }`}>
                            {article.difficulty}
                          </span>
                        </div>
                        <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                          <FaStar className="w-2.5 h-2.5 text-yellow-400" />
                          <span className="text-xs font-medium text-slate-700">{article.rating}</span>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">
                            {article.category}
                          </span>
                          <div className="flex items-center gap-2 text-xs text-slate-500">
                            <span className="flex items-center gap-1">
                              <FaClock className="w-2.5 h-2.5" />
                              {article.readTime}
                            </span>
                            <span className="flex items-center gap-1">
                              <FaEye className="w-2.5 h-2.5" />
                              {article.views.toLocaleString()}
                            </span>
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-semibold text-slate-800 mb-3 leading-tight group-hover:text-slate-600 transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                        
                        <p className="text-slate-600 font-light text-sm mb-4 leading-relaxed line-clamp-3">
                          {article.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {article.tags.slice(0, 2).map((tag, tagIndex) => (
                            <span key={tagIndex} className="px-2 py-1 bg-slate-50 text-slate-600 rounded text-xs">
                              #{tag}
                            </span>
                          ))}
                        </div>

                        {/* Engagement metrics */}
                        <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                          <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1">
                              <FaThumbsUp className="w-2.5 h-2.5" />
                              {article.likes}
                            </span>
                            <span className="flex items-center gap-1">
                              <FaComment className="w-2.5 h-2.5" />
                              {article.comments}
                            </span>
                            <span className="flex items-center gap-1">
                              <FaShare className="w-2.5 h-2.5" />
                              {article.shares}
                            </span>
                          </div>
                          <span>{new Date(article.date).toLocaleDateString('fr-FR')}</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="text-xs text-slate-500">
                            Par {article.author.split(' - ')[0]}
                          </div>
                          <button className="text-slate-700 hover:text-slate-900 text-sm font-medium group-hover:translate-x-1 transition-all duration-300">
                            Lire →
                          </button>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>


        <Footer />
      </main>
    </>
  )
}

export default Blog 