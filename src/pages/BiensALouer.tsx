import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaBed, FaBath, FaRuler, FaHeart, FaSearch, FaChevronDown, FaList, FaTh, FaTimes, FaCheck } from 'react-icons/fa';
import { biensData } from '../data/biens';
import Footer from '../components/Footer';

// Types (à extraire si le projet grandit)
type Bien = typeof biensData[0];

const BiensALouer = () => {
  const [biens, setBiens] = useState<Bien[]>(biensData);
  const [recherche, setRecherche] = useState('');
  const [ville, setVille] = useState('tous');
  const [type, setType] = useState('tous');
  const [prixMax, setPrixMax] = useState(5000);
  const [favoris, setFavoris] = useState<number[]>([]);
  const [bienSelectionne, setBienSelectionne] = useState<Bien | null>(null);
  const [vueMode, setVueMode] = useState<'grid' | 'list'>('grid');

  const villesUniques = useMemo(() => ['tous', ...new Set(biensData.map(b => b.ville))], []);
  const typesUniques = useMemo(() => ['tous', ...new Set(biensData.map(b => b.type))], []);

  const biensFiltres = useMemo(() => {
    return biens
      .filter(bien => 
        (ville === 'tous' || bien.ville === ville) &&
        (type === 'tous' || bien.type === type) &&
        (bien.prix <= prixMax) &&
        (bien.titre.toLowerCase().includes(recherche.toLowerCase()) || 
         bien.description.toLowerCase().includes(recherche.toLowerCase()))
      );
  }, [biens, ville, type, prixMax, recherche]);

  const toggleFavori = (id: number) => {
    setFavoris(prev => 
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
    );
  };
  
  const howItWorksSteps = [
    {
        icon: "/3D/Personnagealaloupe.png",
        title: "Explorez",
        description: "Utilisez nos filtres pour trouver le bien qui correspond à vos critères."
    },
    {
        icon: "/3D/calendrier.png",
        title: "Visitez",
        description: "Planifiez une visite en ligne, physique ou virtuelle, selon vos disponibilités."
    },
    {
        icon: "/3D/Remisedescls .png",
        title: "Emménagez",
        description: "Signez votre bail électroniquement et recevez les clés de votre nouveau chez-vous."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1 className="text-5xl md:text-7xl font-extralight text-slate-900 mb-6 tracking-tight">
                    Votre <span className="font-normal text-slate-700">futur chez-vous</span> vous attend.
            </h1>
                <p className="text-xl text-slate-600 font-light max-w-xl leading-relaxed">
                    Découvrez notre sélection de biens à louer. Des appartements modernes aux maisons familiales, trouvez la perle rare avec GREGA.
            </p>
          </motion.div>
          <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.165, 0.84, 0.44, 1] }}
                className="hidden md:block"
            >
                <img src="/3D/Cle_devantlaporte.png" alt="Clé de maison" className="w-full h-auto max-w-md mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Barre de recherche */}
      <section className="py-12 bg-white sticky top-[64px] z-30 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
            <div className="bg-white p-4 rounded-2xl shadow-lg border border-slate-100 grid md:grid-cols-4 gap-4 items-center">
                <div className="relative md:col-span-2">
                    <FaSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                        placeholder="Rechercher par mot-clé (ex: 'moderne', 'jardin'...)"
                value={recherche}
                onChange={(e) => setRecherche(e.target.value)}
                        className="w-full h-12 pl-12 pr-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800 transition-all"
              />
            </div>
                {/* Selectors more stylish */}
                <div className="relative">
                    <select value={ville} onChange={e => setVille(e.target.value)} className="w-full h-12 px-4 appearance-none bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800 transition-all">
                        {villesUniques.map(v => <option key={v} value={v}>{v === 'tous' ? 'Toutes les villes' : v}</option>)}
                </select>
                    <FaChevronDown className="absolute top-1/2 right-4 transform -translate-y-1/2 text-slate-400 pointer-events-none"/>
              </div>
                <div className="relative">
                    <select value={type} onChange={e => setType(e.target.value)} className="w-full h-12 px-4 appearance-none bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800 transition-all">
                        {typesUniques.map(t => <option key={t} value={t}>{t === 'tous' ? 'Tous les types' : t.charAt(0).toUpperCase() + t.slice(1)}</option>)}
                </select>
                    <FaChevronDown className="absolute top-1/2 right-4 transform -translate-y-1/2 text-slate-400 pointer-events-none"/>
              </div>
              </div>
        </div>
      </section>

      {/* "Comment ça marche ?" */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
              >
                  <h2 className="text-4xl md:text-5xl font-extralight text-slate-800 mb-4 tracking-tight">
                      La location, en toute simplicité
                  </h2>
                  <p className="text-lg text-slate-500 font-light max-w-3xl mx-auto">
                      Suivez ces trois étapes pour trouver votre nouveau foyer avec nous.
                  </p>
                  </motion.div>
              <div className="grid md:grid-cols-3 gap-10">
                  {howItWorksSteps.map((step, index) => (
                      <motion.div
                        key={index}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.15 }}
                          viewport={{ once: true }}
                          className="text-center p-8 flex flex-col items-center"
                      >
                          <img src={step.icon} alt={step.title} className="h-28 w-28 object-contain mb-6" />
                          <h3 className="text-xl font-semibold text-slate-800 mb-3">{step.title}</h3>
                          <p className="text-slate-500 font-light leading-relaxed text-sm">{step.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
      </section>

      {/* Liste des biens */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-light text-slate-800">{biensFiltres.length} bien{biensFiltres.length > 1 ? 's' : ''} trouvé{biensFiltres.length > 1 ? 's' : ''}</h3>
              <div className="flex items-center gap-2">
                  <button onClick={() => setVueMode('list')} className={`p-2 rounded-lg ${vueMode === 'list' ? 'bg-slate-800 text-white' : 'bg-white text-slate-600'}`}><FaList/></button>
                  <button onClick={() => setVueMode('grid')} className={`p-2 rounded-lg ${vueMode === 'grid' ? 'bg-slate-800 text-white' : 'bg-white text-slate-600'}`}><FaTh/></button>
                    </div>
                        </div>
          <div className={`grid gap-8 ${vueMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
      <AnimatePresence>
              {biensFiltres.map(bien => (
          <motion.div
                  key={bien.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="relative">
                    <img src={bien.images[0]} alt={bien.titre} className="w-full h-56 object-cover" />
                    <button onClick={() => toggleFavori(bien.id)} className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full text-slate-800 hover:text-red-500 transition-colors">
                        <FaHeart className={favoris.includes(bien.id) ? 'text-red-500' : ''}/>
                </button>
                    {bien.meuble && <span className="absolute top-4 left-4 bg-slate-900 text-white text-xs font-semibold px-3 py-1 rounded-full">Meublé</span>}
              </div>
              <div className="p-6">
                    <p className="text-sm text-slate-500 flex items-center gap-2 mb-2"><FaMapMarkerAlt/> {bien.ville}, {bien.arrondissement}</p>
                    <h4 className="text-xl font-semibold text-slate-900 mb-3 truncate">{bien.titre}</h4>
                    <p className="text-2xl font-light text-slate-800 mb-4">{bien.prix} € <span className="text-base font-normal text-slate-500">/ mois</span></p>
                    <div className="flex justify-between text-slate-600 border-t border-slate-100 pt-4">
                        <span className="flex items-center gap-2"><FaBed/> {bien.chambres}</span>
                        <span className="flex items-center gap-2"><FaBath/> {bien.sallesBain}</span>
                        <span className="flex items-center gap-2"><FaRuler/> {bien.surface} m²</span>
                        </div>
              </div>
            </motion.div>
              ))}
      </AnimatePresence>
                      </div>
          {biensFiltres.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
                className="text-center py-20"
              >
                  <img src="/3D/antonoiravecdesmaisons.png" alt="Aucun bien trouvé" className="w-40 h-40 mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold text-slate-800">Aucun bien ne correspond</h3>
                  <p className="text-slate-500 mt-2">Essayez d'ajuster vos critères de recherche.</p>
            </motion.div>
          )}
          </div>
        </section>

      <Footer />
    </main>
  );
};

export default BiensALouer; 