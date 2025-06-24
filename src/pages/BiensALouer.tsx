import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaBed, FaBath, FaRuler, FaHeart, FaShare, FaSearch, FaBuilding, FaParking, FaWifi, FaPaw, FaPhone, FaEnvelope, FaFilter, FaSort, FaEye, FaCalendarAlt, FaDownload, FaPrint, FaExpand, FaCompress, FaTimes } from 'react-icons/fa';
import Footer from '../components/Footer';

const BiensALouer = () => {
  const [filtreType, setFiltreType] = useState('tous');
  const [filtrePrix, setFiltrePrix] = useState('tous');
  const [filtreVille, setFiltreVille] = useState('tous');
  const [recherche, setRecherche] = useState('');
  const [favoris, setFavoris] = useState<number[]>([]);
  const [bienSelectionne, setBienSelectionne] = useState<any>(null);
  const [filtreSurface, setFiltreSurface] = useState('tous');
  const [filtrePieces, setFiltrePieces] = useState('tous');
  const [filtreMeuble, setFiltreMeuble] = useState('tous');
  const [filtreAnimaux, setFiltreAnimaux] = useState('tous');
  const [filtreDPE, setFiltreDPE] = useState('tous');
  const [filtresAvances, setFiltresAvances] = useState(false);
  const [triPar, setTriPar] = useState('prix-croissant');
  const [vueMode, setVueMode] = useState<'grid' | 'list'>('grid');
  const [biensVus, setBiensVus] = useState<number[]>([]);
  const [comparaison, setComparaison] = useState<number[]>([]);
  const [alertesPrix, setAlertesPrix] = useState<{[key: number]: boolean}>({});
  const [filtreRapide, setFiltreRapide] = useState('');
  const [historiqueRecherches, setHistoriqueRecherches] = useState<string[]>([]);
  const [biensRecommandes, setBiensRecommandes] = useState<number[]>([]);
  const [modeComparaison, setModeComparaison] = useState(false);
  const [filtreAvancePrix, setFiltreAvancePrix] = useState({ min: 0, max: 5000 });
  const [filtreSurfaceAvance, setFiltreSurfaceAvance] = useState({ min: 0, max: 200 });
  const [showMap, setShowMap] = useState(false);
  const [savedSearches, setSavedSearches] = useState<any[]>([]);
  const [notifications, setNotifications] = useState<any[]>([]);
  const [showCalendly, setShowCalendly] = useState(false);

  // Base de données des biens immobiliers
  const biens = [
    {
      id: 1,
      titre: "Appartement moderne 3 pièces",
      ville: "Paris",
      arrondissement: "15ème",
      adresse: "Rue de Vaugirard",
      prix: 1850,
      surface: 65,
      pieces: 3,
      chambres: 2,
      sallesBain: 1,
      etage: "4/6",
      type: "appartement",
      images: [
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1560449752-3fd4bdce2b3b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1560448075-cbc16bb4af8e?w=800&h=600&fit=crop"
      ],
      equipements: ["parking", "ascenseur", "balcon", "wifi"],
      description: "Magnifique appartement rénové dans le 15ème arrondissement, proche métro Convention. Lumineux avec vue dégagée.",
      disponible: "Immédiatement",
      charges: 150,
      caution: 3700,
      fraisAgence: 1295,
      dpe: "C",
      ges: "D",
      meuble: false,
      animauxAcceptes: false
    },
    {
      id: 2,
      titre: "Studio cosy centre-ville",
      ville: "Lyon",
      arrondissement: "2ème",
      adresse: "Place Bellecour",
      prix: 750,
      surface: 28,
      pieces: 1,
      chambres: 0,
      sallesBain: 1,
      etage: "2/5",
      type: "studio",
      images: [
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&h=600&fit=crop"
      ],
      equipements: ["wifi", "non-fumeur"],
      description: "Studio parfaitement optimisé au cœur de Lyon, idéal pour étudiant ou jeune actif. Tout équipé.",
      disponible: "01/02/2024",
      charges: 80,
      caution: 1500,
      fraisAgence: 525,
      dpe: "D",
      ges: "E",
      meuble: true,
      animauxAcceptes: false
    },
    {
      id: 3,
      titre: "Maison familiale 5 pièces",
      ville: "Marseille",
      arrondissement: "8ème",
      adresse: "Avenue du Prado",
      prix: 1650,
      surface: 120,
      pieces: 5,
      chambres: 4,
      sallesBain: 2,
      etage: "RDC",
      type: "maison",
      images: [
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop"
      ],
      equipements: ["parking", "jardin", "animaux", "wifi"],
      description: "Belle maison avec jardin proche des plages marseillaises. Parfaite pour une famille, quartier calme et résidentiel.",
      disponible: "15/01/2024",
      charges: 120,
      caution: 3300,
      fraisAgence: 1155,
      dpe: "B",
      ges: "C",
      meuble: false,
      animauxAcceptes: true
    },
    {
      id: 4,
      titre: "Loft industriel 2 pièces",
      ville: "Toulouse",
      arrondissement: "Centre",
      adresse: "Rue Saint-Rome",
      prix: 1200,
      surface: 85,
      pieces: 2,
      chambres: 1,
      sallesBain: 1,
      etage: "1/3",
      type: "loft",
      images: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1560448075-bb485b067938?w=800&h=600&fit=crop"
      ],
      equipements: ["wifi", "ascenseur", "non-fumeur"],
      description: "Loft atypique dans bâtiment industriel rénové. Volumes exceptionnels, caractère unique au centre de Toulouse.",
      disponible: "01/03/2024",
      charges: 90,
      caution: 2400,
      fraisAgence: 840,
      dpe: "C",
      ges: "D",
      meuble: false,
      animauxAcceptes: false
    },
    {
      id: 5,
      titre: "Appartement haussmannien 4 pièces",
      ville: "Paris",
      arrondissement: "7ème",
      adresse: "Avenue de Breteuil",
      prix: 2850,
      surface: 95,
      pieces: 4,
      chambres: 3,
      sallesBain: 2,
      etage: "3/6",
      type: "appartement",
      images: [
        "https://images.unsplash.com/photo-1560448204-e1a5b5c3a95d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1560448075-cbc16bb4af8e?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1560449752-3fd4bdce2b3b?w=800&h=600&fit=crop"
      ],
      equipements: ["ascenseur", "balcon", "parking", "wifi"],
      description: "Superbe appartement haussmannien rénové avec goût. Prestations haut de gamme, proche Tour Eiffel.",
      disponible: "Immédiatement",
      charges: 200,
      caution: 5700,
      fraisAgence: 1995,
      dpe: "B",
      ges: "C",
      meuble: false,
      animauxAcceptes: false
    },
    {
      id: 6,
      titre: "Duplex moderne 3 pièces",
      ville: "Bordeaux",
      arrondissement: "Centre",
      adresse: "Cours de l'Intendance",
      prix: 1450,
      surface: 75,
      pieces: 3,
      chambres: 2,
      sallesBain: 1,
      etage: "5-6/6",
      type: "duplex",
      images: [
        "https://images.unsplash.com/photo-1560448204-61dc36dc98c8?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1560449752-2308c2bc2e0b?w=800&h=600&fit=crop"
      ],
      equipements: ["ascenseur", "balcon", "wifi", "non-fumeur"],
      description: "Duplex contemporain au dernier étage avec terrasse. Vue panoramique sur Bordeaux, prestations modernes.",
      disponible: "01/02/2024",
      charges: 110,
      caution: 2900,
      fraisAgence: 1015,
      dpe: "A",
      ges: "B",
      meuble: false,
      animauxAcceptes: false
    },
    {
      id: 7,
      titre: "Studio étudiant meublé",
      ville: "Lyon",
      arrondissement: "7ème",
      adresse: "Rue Garibaldi",
      prix: 650,
      surface: 22,
      pieces: 1,
      chambres: 0,
      sallesBain: 1,
      etage: "1/4",
      type: "studio",
      images: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&h=600&fit=crop"
      ],
      equipements: ["wifi", "non-fumeur"],
      description: "Studio meublé parfait pour étudiant, proche université Lyon 3. Tout équipé, prêt à vivre.",
      disponible: "01/09/2024",
      charges: 70,
      caution: 1300,
      fraisAgence: 455,
      dpe: "E",
      ges: "F",
      meuble: true,
      animauxAcceptes: false
    },
    {
      id: 8,
      titre: "Appartement T2 avec terrasse",
      ville: "Nice",
      arrondissement: "Centre",
      adresse: "Promenade des Anglais",
      prix: 1350,
      surface: 55,
      pieces: 2,
      chambres: 1,
      sallesBain: 1,
      etage: "3/5",
      type: "appartement",
      images: [
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1560449752-3fd4bdce2b3b?w=800&h=600&fit=crop"
      ],
      equipements: ["balcon", "wifi", "animaux"],
      description: "Magnifique T2 avec terrasse vue mer sur la Promenade des Anglais. Lumineux et climatisé.",
      disponible: "15/03/2024",
      charges: 100,
      caution: 2700,
      fraisAgence: 945,
      dpe: "C",
      ges: "D",
      meuble: false,
      animauxAcceptes: true
    },
    {
      id: 9,
      titre: "Maison de ville 4 pièces",
      ville: "Lille",
      arrondissement: "Vieux-Lille",
      adresse: "Rue de la Monnaie",
      prix: 1100,
      surface: 90,
      pieces: 4,
      chambres: 3,
      sallesBain: 1,
      etage: "RDC+1",
      type: "maison",
      images: [
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop"
      ],
      equipements: ["parking", "jardin", "wifi"],
      description: "Charmante maison de ville dans le Vieux-Lille. Cachet authentique avec tout le confort moderne.",
      disponible: "01/04/2024",
      charges: 80,
      caution: 2200,
      fraisAgence: 770,
      dpe: "D",
      ges: "E",
      meuble: false,
      animauxAcceptes: true
    },
    {
      id: 10,
      titre: "Penthouse 5 pièces",
      ville: "Paris",
      arrondissement: "16ème",
      adresse: "Avenue Foch",
      prix: 4500,
      surface: 140,
      pieces: 5,
      chambres: 4,
      sallesBain: 3,
      etage: "7/7",
      type: "appartement",
      images: [
        "https://images.unsplash.com/photo-1560448204-e1a5b5c3a95d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1560448075-cbc16bb4af8e?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1560449752-3fd4bdce2b3b?w=800&h=600&fit=crop"
      ],
      equipements: ["ascenseur", "balcon", "parking", "wifi"],
      description: "Penthouse d'exception avec terrasse panoramique. Prestations ultra-luxe, vue Tour Eiffel.",
      disponible: "01/06/2024",
      charges: 350,
      caution: 9000,
      fraisAgence: 3150,
      dpe: "A",
      ges: "A",
      meuble: true,
      animauxAcceptes: false
    },
    {
      id: 11,
      titre: "Appartement T3 rénové",
      ville: "Nantes",
      arrondissement: "Centre",
      adresse: "Cours Saint-Pierre",
      prix: 950,
      surface: 70,
      pieces: 3,
      chambres: 2,
      sallesBain: 1,
      etage: "2/4",
      type: "appartement",
      images: [
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1560449752-3fd4bdce2b3b?w=800&h=600&fit=crop"
      ],
      equipements: ["balcon", "wifi", "non-fumeur"],
      description: "T3 entièrement rénové en centre-ville de Nantes. Proche tramway et commerces.",
      disponible: "15/02/2024",
      charges: 90,
      caution: 1900,
      fraisAgence: 665,
      dpe: "B",
      ges: "C",
      meuble: false,
      animauxAcceptes: false
    },
    {
      id: 12,
      titre: "Loft d'artiste avec mezzanine",
      ville: "Marseille",
      arrondissement: "1er",
      adresse: "Cours Julien",
      prix: 1400,
      surface: 95,
      pieces: 2,
      chambres: 1,
      sallesBain: 1,
      etage: "RDC",
      type: "loft",
      images: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1560448075-bb485b067938?w=800&h=600&fit=crop"
      ],
      equipements: ["wifi", "animaux", "non-fumeur"],
      description: "Loft d'artiste unique avec mezzanine et verrière. Quartier branché du Cours Julien.",
      disponible: "01/05/2024",
      charges: 110,
      caution: 2800,
      fraisAgence: 980,
      dpe: "C",
      ges: "D",
      meuble: false,
      animauxAcceptes: true
    }
  ];

  // Fonction pour filtrer les biens
  const biensFiltres = biens.filter(bien => {
    const matchType = filtreType === 'tous' || bien.type === filtreType;
    const matchVille = filtreVille === 'tous' || bien.ville.toLowerCase() === filtreVille.toLowerCase();
    const matchRecherche = bien.titre.toLowerCase().includes(recherche.toLowerCase()) || 
                          bien.ville.toLowerCase().includes(recherche.toLowerCase()) ||
                          bien.adresse.toLowerCase().includes(recherche.toLowerCase());
    
    let matchPrix = true;
    if (filtrePrix === 'moins-800') matchPrix = bien.prix < 800;
    else if (filtrePrix === '800-1500') matchPrix = bien.prix >= 800 && bien.prix <= 1500;
    else if (filtrePrix === '1500-2500') matchPrix = bien.prix >= 1500 && bien.prix <= 2500;
    else if (filtrePrix === 'plus-2500') matchPrix = bien.prix > 2500;

    let matchSurface = true;
    if (filtreSurface === 'moins-30') matchSurface = bien.surface < 30;
    else if (filtreSurface === '30-60') matchSurface = bien.surface >= 30 && bien.surface <= 60;
    else if (filtreSurface === '60-100') matchSurface = bien.surface >= 60 && bien.surface <= 100;
    else if (filtreSurface === 'plus-100') matchSurface = bien.surface > 100;

    const matchPieces = filtrePieces === 'tous' || bien.pieces.toString() === filtrePieces;
    const matchMeuble = filtreMeuble === 'tous' || 
                       (filtreMeuble === 'meuble' && bien.meuble) ||
                       (filtreMeuble === 'non-meuble' && !bien.meuble);
    const matchAnimaux = filtreAnimaux === 'tous' ||
                        (filtreAnimaux === 'acceptes' && bien.animauxAcceptes) ||
                        (filtreAnimaux === 'refuses' && !bien.animauxAcceptes);
    const matchDPE = filtreDPE === 'tous' || bien.dpe === filtreDPE;

    return matchType && matchVille && matchRecherche && matchPrix && matchSurface && 
           matchPieces && matchMeuble && matchAnimaux && matchDPE;
  }).sort((a, b) => {
    switch (triPar) {
      case 'prix-croissant':
        return a.prix - b.prix;
      case 'prix-decroissant':
        return b.prix - a.prix;
      case 'surface-croissante':
        return a.surface - b.surface;
      case 'surface-decroissante':
        return b.surface - a.surface;
      case 'pieces-croissant':
        return a.pieces - b.pieces;
      case 'pieces-decroissant':
        return b.pieces - a.pieces;
      case 'dpe':
        const dpeOrder = { 'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7 };
        return (dpeOrder[a.dpe as keyof typeof dpeOrder] || 8) - (dpeOrder[b.dpe as keyof typeof dpeOrder] || 8);
      default:
        return 0;
    }
  });

  // Fonction pour gérer les favoris
  const toggleFavori = (id: number) => {
    setFavoris(prev => 
      prev.includes(id) 
        ? prev.filter(f => f !== id)
        : [...prev, id]
    );
  };

  // Fonctions utilitaires avancées
  const marquerCommeVu = (id: number) => {
    if (!biensVus.includes(id)) {
      setBiensVus(prev => [...prev, id]);
    }
  };

  const toggleComparaison = (id: number) => {
    setComparaison(prev => {
      if (prev.includes(id)) {
        return prev.filter(c => c !== id);
      } else if (prev.length < 3) {
        return [...prev, id];
      } else {
        alert('Vous ne pouvez comparer que 3 biens maximum');
        return prev;
      }
    });
  };

  const creerAlertePrix = (id: number, prixCible: number) => {
    setAlertesPrix(prev => ({ ...prev, [id]: true }));
    setNotifications(prev => [...prev, {
      id: Date.now(),
      type: 'success',
      message: `Alerte prix créée pour ${prixCible}€/mois`
    }]);
  };

  const sauvegarderRecherche = () => {
    const rechercheCourante = {
      id: Date.now(),
      nom: `Recherche ${new Date().toLocaleDateString()}`,
      filtres: {
        type: filtreType,
        prix: filtrePrix,
        ville: filtreVille,
        surface: filtreSurface,
        pieces: filtrePieces,
        meuble: filtreMeuble,
        animaux: filtreAnimaux,
        dpe: filtreDPE,
        recherche: recherche
      },
      resultats: biensFiltres.length
    };
    setSavedSearches(prev => [...prev, rechercheCourante]);
    setNotifications(prev => [...prev, {
      id: Date.now(),
      type: 'success',
      message: 'Recherche sauvegardée avec succès'
    }]);
  };

  const exporterResultats = (format: 'pdf' | 'excel') => {
    const data = biensFiltres.map(bien => ({
      Titre: bien.titre,
      Ville: bien.ville,
      Prix: `${bien.prix}€`,
      Surface: `${bien.surface}m²`,
      Pièces: bien.pieces,
      Type: bien.type,
      DPE: bien.dpe,
      Disponible: bien.disponible
    }));
    
    if (format === 'excel') {
      // Simulation export Excel
      const csvContent = [
        Object.keys(data[0]).join(','),
        ...data.map(row => Object.values(row).join(','))
      ].join('\n');
      
      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `biens-grega-${new Date().toISOString().split('T')[0]}.csv`;
      a.click();
    }
    
    setNotifications(prev => [...prev, {
      id: Date.now(),
      type: 'success',
      message: `Export ${format.toUpperCase()} généré avec succès`
    }]);
  };

  // Calculs avancés avec useMemo pour les performances
  const statistiques = useMemo(() => {
    if (biensFiltres.length === 0) return null;
    
    const prix = biensFiltres.map(b => b.prix);
    const surfaces = biensFiltres.map(b => b.surface);
    
    return {
      prixMoyen: Math.round(prix.reduce((a, b) => a + b, 0) / prix.length),
      prixMin: Math.min(...prix),
      prixMax: Math.max(...prix),
      surfaceMoyenne: Math.round(surfaces.reduce((a, b) => a + b, 0) / surfaces.length),
      repartitionTypes: biensFiltres.reduce((acc, bien) => {
        acc[bien.type] = (acc[bien.type] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      repartitionVilles: biensFiltres.reduce((acc, bien) => {
        acc[bien.ville] = (acc[bien.ville] || 0) + 1;
        return acc;
      }, {} as Record<string, number>)
    };
  }, [biensFiltres]);

  // Recommandations intelligentes
  useEffect(() => {
    if (favoris.length > 0) {
      const biensAimes = biens.filter(b => favoris.includes(b.id));
      const prixMoyenAime = biensAimes.reduce((acc, b) => acc + b.prix, 0) / biensAimes.length;
      const typesAimes = [...new Set(biensAimes.map(b => b.type))];
      
      const recommandations = biens
        .filter(b => !favoris.includes(b.id))
        .filter(b => typesAimes.includes(b.type))
        .filter(b => Math.abs(b.prix - prixMoyenAime) < 300)
        .slice(0, 3)
        .map(b => b.id);
      
      setBiensRecommandes(recommandations);
    }
  }, [favoris, biens]);

  // Gestion des notifications
  useEffect(() => {
    if (notifications.length > 0) {
      const timer = setTimeout(() => {
        setNotifications(prev => prev.slice(1));
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [notifications]);

  // Fonction pour obtenir l'icône des équipements
  const getEquipementIcon = (equipement: string) => {
    switch (equipement) {
      case 'parking': return <FaParking className="w-4 h-4" />;
      case 'wifi': return <FaWifi className="w-4 h-4" />;
      case 'animaux': return <FaPaw className="w-4 h-4" />;
      case 'non-fumeur': return <span className="w-4 h-4 text-red-500">🚭</span>;
      case 'ascenseur': return <span className="w-4 h-4 text-gray-500">🛗</span>;
      case 'balcon': return <span className="w-4 h-4 text-blue-500">🏠</span>;
      case 'jardin': return <span className="w-4 h-4 text-green-500">🌿</span>;
      default: return null;
    }
  };

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

  return (
    <main className="min-h-screen bg-white">
      
      {/* Notifications */}
      <AnimatePresence>
        {notifications.map((notif) => (
          <motion.div
            key={notif.id}
            initial={{ opacity: 0, y: -50, x: 300 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: -50, x: 300 }}
            className={`fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg ${
              notif.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
            }`}
          >
            {notif.message}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Barre d'outils professionnelle */}
      <div className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-700">
                {biensFiltres.length} biens trouvés
              </span>
              {statistiques && (
                <span className="text-sm text-gray-500">
                  • Prix moyen: {statistiques.prixMoyen}€
                </span>
              )}
              {favoris.length > 0 && (
                <span className="text-sm text-red-500">
                  • {favoris.length} favoris
                </span>
              )}
              {comparaison.length > 0 && (
                <span className="text-sm text-blue-500">
                  • {comparaison.length} en comparaison
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={sauvegarderRecherche}
                className="px-3 py-1 text-xs bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors flex items-center gap-1"
              >
                <FaHeart className="w-3 h-3" />
                Sauvegarder
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => exporterResultats('excel')}
                className="px-3 py-1 text-xs bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors flex items-center gap-1"
              >
                <FaDownload className="w-3 h-3" />
                Export
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setShowMap(!showMap)}
                className="px-3 py-1 text-xs bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors flex items-center gap-1"
              >
                <FaMapMarkerAlt className="w-3 h-3" />
                {showMap ? 'Liste' : 'Carte'}
              </motion.button>

              {comparaison.length > 0 && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setModeComparaison(true)}
                  className="px-3 py-1 text-xs bg-blue-500 text-white hover:bg-blue-600 transition-colors flex items-center gap-1"
                >
                  <FaEye className="w-3 h-3" />
                  Comparer ({comparaison.length})
                </motion.button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-48 pb-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-8xl font-light text-black mb-8 tracking-tight">
              Nos Biens
            </h1>
            <div className="w-24 h-px bg-black mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Découvrez notre sélection premium de biens immobiliers disponibles à la location
            </p>
          </motion.div>

          {/* Statistiques en temps réel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-light text-black mb-2">{biens.length}</div>
              <div className="text-gray-600 font-light text-sm">Biens disponibles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-light text-black mb-2">8</div>
              <div className="text-gray-600 font-light text-sm">Villes couvertes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-light text-black mb-2">24h</div>
              <div className="text-gray-600 font-light text-sm">Réponse garantie</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-light text-black mb-2">100%</div>
              <div className="text-gray-600 font-light text-sm">Service gratuit</div>
            </div>
            {statistiques && (
              <>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-light text-black mb-2">{statistiques.prixMoyen}€</div>
                  <div className="text-gray-600 font-light text-sm">Prix moyen</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-light text-black mb-2">{statistiques.surfaceMoyenne}m²</div>
                  <div className="text-gray-600 font-light text-sm">Surface moyenne</div>
                </div>
              </>
            )}
          </motion.div>

          {/* Filtres rapides */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {[
              { label: 'Moins de 1000€', action: () => { setFiltrePrix('moins-800'); setFiltreRapide('budget'); } },
              { label: 'Studios', action: () => { setFiltreType('studio'); setFiltreRapide('studio'); } },
              { label: 'Meublés', action: () => { setFiltreMeuble('meuble'); setFiltreRapide('meuble'); } },
              { label: 'Animaux OK', action: () => { setFiltreAnimaux('acceptes'); setFiltreRapide('animaux'); } },
              { label: 'Paris', action: () => { setFiltreVille('paris'); setFiltreRapide('paris'); } },
              { label: 'Lyon', action: () => { setFiltreVille('lyon'); setFiltreRapide('lyon'); } }
            ].map((filtre, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={filtre.action}
                className={`px-4 py-2 text-sm border transition-colors ${
                  filtreRapide === filtre.label.toLowerCase().split(' ')[0] 
                    ? 'bg-black text-white border-black' 
                    : 'border-gray-300 text-gray-700 hover:border-black'
                }`}
              >
                {filtre.label}
              </motion.button>
            ))}
            {filtreRapide && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  setFiltreType('tous');
                  setFiltrePrix('tous');
                  setFiltreVille('tous');
                  setFiltreMeuble('tous');
                  setFiltreAnimaux('tous');
                  setFiltreRapide('');
                }}
                className="px-4 py-2 text-sm bg-red-500 text-white hover:bg-red-600 transition-colors"
              >
                Effacer
              </motion.button>
            )}
          </motion.div>

          {/* Barre de recherche et filtres */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white border border-gray-200 p-6 mb-16"
          >
            {/* Recherche */}
            <div className="relative mb-6">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher par ville, adresse ou titre..."
                value={recherche}
                onChange={(e) => setRecherche(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors font-light"
              />
            </div>

            {/* Filtres principaux */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Type de bien</label>
                <select
                  value={filtreType}
                  onChange={(e) => setFiltreType(e.target.value)}
                  className="w-full p-3 border border-gray-300 focus:border-black focus:outline-none transition-colors font-light"
                >
                  <option value="tous">Tous les types</option>
                  <option value="appartement">Appartement</option>
                  <option value="maison">Maison</option>
                  <option value="studio">Studio</option>
                  <option value="loft">Loft</option>
                  <option value="duplex">Duplex</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Prix mensuel</label>
                <select
                  value={filtrePrix}
                  onChange={(e) => setFiltrePrix(e.target.value)}
                  className="w-full p-3 border border-gray-300 focus:border-black focus:outline-none transition-colors font-light"
                >
                  <option value="tous">Tous les prix</option>
                  <option value="moins-800">Moins de 800€</option>
                  <option value="800-1500">800€ - 1500€</option>
                  <option value="1500-2500">1500€ - 2500€</option>
                  <option value="plus-2500">Plus de 2500€</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ville</label>
                <select
                  value={filtreVille}
                  onChange={(e) => setFiltreVille(e.target.value)}
                  className="w-full p-3 border border-gray-300 focus:border-black focus:outline-none transition-colors font-light"
                >
                  <option value="tous">Toutes les villes</option>
                  <option value="paris">Paris</option>
                  <option value="lyon">Lyon</option>
                  <option value="marseille">Marseille</option>
                  <option value="toulouse">Toulouse</option>
                  <option value="bordeaux">Bordeaux</option>
                  <option value="nice">Nice</option>
                  <option value="lille">Lille</option>
                  <option value="nantes">Nantes</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Trier par</label>
                <select
                  value={triPar}
                  onChange={(e) => setTriPar(e.target.value)}
                  className="w-full p-3 border border-gray-300 focus:border-black focus:outline-none transition-colors font-light"
                >
                  <option value="prix-croissant">Prix croissant</option>
                  <option value="prix-decroissant">Prix décroissant</option>
                  <option value="surface-croissante">Surface croissante</option>
                  <option value="surface-decroissante">Surface décroissante</option>
                  <option value="pieces-croissant">Pièces croissant</option>
                  <option value="pieces-decroissant">Pièces décroissant</option>
                  <option value="dpe">Meilleur DPE</option>
                </select>
              </div>
            </div>

            {/* Bouton filtres avancés */}
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => setFiltresAvances(!filtresAvances)}
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors"
              >
                <span>{filtresAvances ? 'Masquer' : 'Afficher'} les filtres avancés</span>
                <span className={`transform transition-transform ${filtresAvances ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>

              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">Affichage :</span>
                <div className="flex border border-gray-300">
                  <button
                    onClick={() => setVueMode('grid')}
                    className={`px-3 py-1 text-sm ${vueMode === 'grid' ? 'bg-black text-white' : 'bg-white text-gray-600'}`}
                  >
                    Grille
                  </button>
                  <button
                    onClick={() => setVueMode('list')}
                    className={`px-3 py-1 text-sm ${vueMode === 'list' ? 'bg-black text-white' : 'bg-white text-gray-600'}`}
                  >
                    Liste
                  </button>
                </div>
              </div>
            </div>

            {/* Filtres avancés */}
            <AnimatePresence>
              {filtresAvances && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="border-t border-gray-200 pt-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Surface</label>
                      <select
                        value={filtreSurface}
                        onChange={(e) => setFiltreSurface(e.target.value)}
                        className="w-full p-3 border border-gray-300 focus:border-black focus:outline-none transition-colors font-light"
                      >
                        <option value="tous">Toutes surfaces</option>
                        <option value="moins-30">Moins de 30m²</option>
                        <option value="30-60">30m² - 60m²</option>
                        <option value="60-100">60m² - 100m²</option>
                        <option value="plus-100">Plus de 100m²</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nombre de pièces</label>
                      <select
                        value={filtrePieces}
                        onChange={(e) => setFiltrePieces(e.target.value)}
                        className="w-full p-3 border border-gray-300 focus:border-black focus:outline-none transition-colors font-light"
                      >
                        <option value="tous">Toutes</option>
                        <option value="1">1 pièce</option>
                        <option value="2">2 pièces</option>
                        <option value="3">3 pièces</option>
                        <option value="4">4 pièces</option>
                        <option value="5">5+ pièces</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Meublé</label>
                      <select
                        value={filtreMeuble}
                        onChange={(e) => setFiltreMeuble(e.target.value)}
                        className="w-full p-3 border border-gray-300 focus:border-black focus:outline-none transition-colors font-light"
                      >
                        <option value="tous">Peu importe</option>
                        <option value="meuble">Meublé</option>
                        <option value="non-meuble">Non meublé</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Animaux</label>
                      <select
                        value={filtreAnimaux}
                        onChange={(e) => setFiltreAnimaux(e.target.value)}
                        className="w-full p-3 border border-gray-300 focus:border-black focus:outline-none transition-colors font-light"
                      >
                        <option value="tous">Peu importe</option>
                        <option value="acceptes">Acceptés</option>
                        <option value="refuses">Refusés</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">DPE</label>
                      <select
                        value={filtreDPE}
                        onChange={(e) => setFiltreDPE(e.target.value)}
                        className="w-full p-3 border border-gray-300 focus:border-black focus:outline-none transition-colors font-light"
                      >
                        <option value="tous">Tous</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
                        <option value="F">F</option>
                        <option value="G">G</option>
                      </select>
                    </div>
                  </div>

                  {/* Bouton reset filtres */}
                  <div className="mt-4 flex justify-end">
                    <button
                      onClick={() => {
                        setFiltreType('tous');
                        setFiltrePrix('tous');
                        setFiltreVille('tous');
                        setFiltreSurface('tous');
                        setFiltrePieces('tous');
                        setFiltreMeuble('tous');
                        setFiltreAnimaux('tous');
                        setFiltreDPE('tous');
                        setRecherche('');
                      }}
                      className="px-4 py-2 text-sm border border-gray-300 text-gray-600 hover:border-black hover:text-black transition-colors"
                    >
                      Réinitialiser tous les filtres
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-4 flex items-center justify-between text-sm text-gray-600 font-light">
              <span>
                {biensFiltres.length} bien{biensFiltres.length > 1 ? 's' : ''} trouvé{biensFiltres.length > 1 ? 's' : ''}
              </span>
              <span>
                Prix moyen : {Math.round(biensFiltres.reduce((acc, bien) => acc + bien.prix, 0) / biensFiltres.length || 0)}€/mois
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Liste des biens */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          {vueMode === 'grid' ? (
            // Vue Grille
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {biensFiltres.map((bien, index) => (
                  <motion.div
                    key={bien.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`bg-white border overflow-hidden group transition-all duration-300 cursor-pointer hover:shadow-xl transform hover:-translate-y-1 ${
                      biensVus.includes(bien.id) ? 'border-gray-300' : 'border-gray-200'
                    } ${
                      comparaison.includes(bien.id) ? 'ring-2 ring-blue-500' : 'hover:border-black'
                    } ${
                      favoris.includes(bien.id) ? 'ring-1 ring-red-200' : ''
                    } ${
                      biensRecommandes.includes(bien.id) ? 'ring-1 ring-green-200' : ''
                    }`}
                    onClick={() => {
                      setBienSelectionne(bien);
                      marquerCommeVu(bien.id);
                    }}
                  >
                    {/* Image principale */}
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img
                        src={bien.images[0]}
                        alt={bien.titre}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Overlay avec actions */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="absolute top-4 right-4 flex gap-2">
                          <motion.button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleFavori(bien.id);
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all backdrop-blur-sm ${
                              favoris.includes(bien.id) 
                                ? 'bg-red-500 text-white shadow-lg' 
                                : 'bg-white/90 text-gray-600 hover:text-red-500 hover:bg-white'
                            }`}
                          >
                            <FaHeart className="w-4 h-4" />
                          </motion.button>
                          
                          <motion.button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleComparaison(bien.id);
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all backdrop-blur-sm ${
                              comparaison.includes(bien.id)
                                ? 'bg-blue-500 text-white shadow-lg'
                                : 'bg-white/90 text-gray-600 hover:text-blue-500 hover:bg-white'
                            }`}
                          >
                            <FaEye className="w-4 h-4" />
                          </motion.button>

                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => {
                              e.stopPropagation();
                              const shareData = {
                                title: bien.titre,
                                text: `${bien.titre} - ${bien.prix}€/mois à ${bien.ville}`,
                                url: window.location.href + `?bien=${bien.id}`
                              };
                              if (navigator.share) {
                                navigator.share(shareData);
                              } else {
                                navigator.clipboard.writeText(`${shareData.title} - ${shareData.url}`);
                                alert('Lien copié dans le presse-papier !');
                              }
                            }}
                            className="w-10 h-10 bg-white/90 text-gray-600 rounded-full flex items-center justify-center hover:text-black hover:bg-white transition-all backdrop-blur-sm"
                          >
                            <FaShare className="w-4 h-4" />
                          </motion.button>
                        </div>

                        {/* Actions rapides en bas */}
                        <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-150">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(`tel:0953376141`, '_self');
                            }}
                            className="px-3 py-1 bg-black/80 text-white text-xs rounded-full backdrop-blur-sm hover:bg-black transition-colors"
                          >
                            <FaPhone className="w-3 h-3 inline mr-1" />
                            Appeler
                          </motion.button>
                          
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(`mailto:contact@gregaopendoor.fr`, '_self');
                            }}
                            className="px-3 py-1 bg-green-500/90 text-white text-xs rounded-full backdrop-blur-sm hover:bg-green-500 transition-colors"
                          >
                            <FaEnvelope className="w-3 h-3 inline mr-1" />
                            Contact
                          </motion.button>
                        </div>
                      </div>

                      {/* Badges multiples */}
                      <div className="absolute bottom-4 left-4 flex flex-col gap-2">
                        <div className="bg-black/90 text-white px-3 py-1 text-sm font-bold backdrop-blur-sm">
                          {bien.prix}€/mois
                        </div>
                        {bien.meuble && (
                          <div className="bg-blue-500/90 text-white px-2 py-1 text-xs font-medium backdrop-blur-sm">
                            Meublé
                          </div>
                        )}
                        {biensRecommandes.includes(bien.id) && (
                          <div className="bg-green-500/90 text-white px-2 py-1 text-xs font-medium backdrop-blur-sm">
                            ⭐ Recommandé
                          </div>
                        )}
                        {alertesPrix[bien.id] && (
                          <div className="bg-orange-500/90 text-white px-2 py-1 text-xs font-medium backdrop-blur-sm">
                            🔔 Alerte prix
                          </div>
                        )}
                      </div>

                      {/* Badge disponibilité */}
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        <div className={`px-3 py-1 text-xs font-medium backdrop-blur-sm ${
                          bien.disponible === 'Immédiatement' 
                            ? 'bg-green-500/90 text-white' 
                            : 'bg-orange-500/90 text-white'
                        }`}>
                          {bien.disponible}
                        </div>
                        {biensVus.includes(bien.id) && (
                          <div className="bg-gray-500/90 text-white px-2 py-1 text-xs backdrop-blur-sm">
                            👁 Vu
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            // Vue Liste
            <div className="space-y-6">
              <AnimatePresence>
                {biensFiltres.map((bien, index) => (
                  <motion.div
                    key={bien.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="bg-white border border-gray-200 overflow-hidden group hover:border-black transition-all duration-300 cursor-pointer hover:shadow-lg"
                    onClick={() => setBienSelectionne(bien)}
                  >
                    <div className="flex">
                      {/* Image */}
                      <div className="relative w-80 h-60 flex-shrink-0 overflow-hidden">
                        <img
                          src={bien.images[0]}
                          alt={bien.titre}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        
                        {/* Badges sur image */}
                        <div className="absolute top-4 left-4 flex flex-col gap-2">
                          <div className="bg-green-500 text-white px-2 py-1 text-xs font-medium">
                            {bien.disponible}
                          </div>
                          {bien.meuble && (
                            <div className="bg-blue-500 text-white px-2 py-1 text-xs font-medium">
                              Meublé
                            </div>
                          )}
                        </div>

                        <div className="absolute top-4 right-4 flex gap-2">
                          <motion.button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleFavori(bien.id);
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                              favoris.includes(bien.id) 
                                ? 'bg-red-500 text-white' 
                                : 'bg-white text-gray-600 hover:text-red-500'
                            }`}
                          >
                            <FaHeart className="w-3 h-3" />
                          </motion.button>
                        </div>

                        <div className="absolute bottom-4 left-4 bg-black text-white px-3 py-1 text-sm font-bold">
                          {bien.prix}€/mois
                        </div>
                      </div>

                      {/* Contenu */}
                      <div className="flex-1 p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-medium text-black group-hover:text-gray-700 transition-colors mb-2">
                              {bien.titre}
                            </h3>
                            <div className="flex items-center text-gray-600 mb-2">
                              <FaMapMarkerAlt className="w-4 h-4 mr-2" />
                              <span className="text-sm font-light">
                                {bien.ville} ({bien.arrondissement}) - {bien.adresse}
                              </span>
                            </div>
                          </div>
                          <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 capitalize">
                            {bien.type}
                          </span>
                        </div>

                        {/* Caractéristiques principales */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <FaRuler className="w-4 h-4" />
                            <span>{bien.surface}m²</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <FaBuilding className="w-4 h-4" />
                            <span>{bien.pieces} pièces</span>
                          </div>
                          {bien.chambres > 0 && (
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <FaBed className="w-4 h-4" />
                              <span>{bien.chambres} chambres</span>
                            </div>
                          )}
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <FaBath className="w-4 h-4" />
                            <span>{bien.sallesBain} SdB</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 text-sm font-light mb-4 line-clamp-2">
                          {bien.description}
                        </p>

                        {/* Équipements et DPE */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex flex-wrap gap-2">
                            {bien.equipements.slice(0, 5).map((equipement, idx) => (
                              <div key={idx} className="flex items-center gap-1 text-xs text-gray-500 bg-gray-50 px-2 py-1">
                                {getEquipementIcon(equipement)}
                                <span className="capitalize">{equipement}</span>
                              </div>
                            ))}
                            {bien.equipements.length > 5 && (
                              <div className="text-xs text-gray-500 bg-gray-50 px-2 py-1">
                                +{bien.equipements.length - 5}
                              </div>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-500">DPE:</span>
                            <span className={`w-8 h-8 rounded-full text-sm font-bold flex items-center justify-center text-white ${
                              bien.dpe === 'A' ? 'bg-green-600' :
                              bien.dpe === 'B' ? 'bg-green-500' :
                              bien.dpe === 'C' ? 'bg-yellow-500' :
                              bien.dpe === 'D' ? 'bg-orange-500' :
                              bien.dpe === 'E' ? 'bg-red-500' :
                              'bg-red-600'
                            }`}>
                              {bien.dpe}
                            </span>
                          </div>
                        </div>

                        {/* Prix et actions */}
                        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                          <div className="flex items-center gap-4">
                            <div>
                              <div className="text-sm text-gray-600">Loyer + charges</div>
                              <div className="text-xl font-medium text-black">
                                {bien.prix + bien.charges}€/mois
                              </div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-600">Caution</div>
                              <div className="text-sm font-medium text-gray-800">
                                {bien.caution}€
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <motion.button
                              whileHover={{ y: -2 }}
                              className="px-4 py-2 border border-black text-black hover:bg-black hover:text-white transition-colors text-sm"
                            >
                              Voir détails
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}

          {/* Message si aucun bien trouvé */}
          {biensFiltres.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🏠</div>
              <h3 className="text-2xl font-light text-black mb-4">Aucun bien trouvé</h3>
              <p className="text-gray-600 font-light mb-6">
                Essayez de modifier vos critères de recherche
              </p>
              <button
                onClick={() => {
                  setFiltreType('tous');
                  setFiltrePrix('tous');
                  setFiltreVille('tous');
                  setFiltreSurface('tous');
                  setFiltrePieces('tous');
                  setFiltreMeuble('tous');
                  setFiltreAnimaux('tous');
                  setFiltreDPE('tous');
                  setRecherche('');
                }}
                className="px-6 py-3 border border-black text-black hover:bg-black hover:text-white transition-colors"
              >
                Réinitialiser les filtres
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Modal détail bien - Version ultra-améliorée */}
      <AnimatePresence>
        {bienSelectionne && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
            onClick={() => setBienSelectionne(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              className="bg-white max-w-6xl w-full max-h-[95vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header amélioré */}
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center z-10 shadow-sm">
                <div className="flex items-center gap-4">
                  <div>
                    <h2 className="text-3xl font-light text-black">{bienSelectionne.titre}</h2>
                    <p className="text-gray-600 mt-1">
                      {bienSelectionne.ville} ({bienSelectionne.arrondissement}) - {bienSelectionne.adresse}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <span className={`px-3 py-1 text-sm font-medium text-white ${
                      bienSelectionne.disponible === 'Immédiatement' ? 'bg-green-500' : 'bg-orange-500'
                    }`}>
                      {bienSelectionne.disponible}
                    </span>
                    {bienSelectionne.meuble && (
                      <span className="px-3 py-1 text-sm font-medium bg-blue-500 text-white">
                        Meublé
                      </span>
                    )}
                    {biensRecommandes.includes(bienSelectionne.id) && (
                      <span className="px-3 py-1 text-sm font-medium bg-green-500 text-white">
                        ⭐ Recommandé
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    onClick={() => toggleFavori(bienSelectionne.id)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                      favoris.includes(bienSelectionne.id) 
                        ? 'bg-red-500 text-white' 
                        : 'bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-500'
                    }`}
                  >
                    <FaHeart className="w-5 h-5" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    onClick={() => toggleComparaison(bienSelectionne.id)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                      comparaison.includes(bienSelectionne.id)
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-500'
                    }`}
                  >
                    <FaEye className="w-5 h-5" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      const shareData = {
                        title: bienSelectionne.titre,
                        text: `${bienSelectionne.titre} - ${bienSelectionne.prix}€/mois à ${bienSelectionne.ville}`,
                        url: window.location.href + `?bien=${bienSelectionne.id}`
                      };
                      if (navigator.share) {
                        navigator.share(shareData);
                      } else {
                        navigator.clipboard.writeText(`${shareData.title} - ${shareData.url}`);
                        alert('Lien copié dans le presse-papier !');
                      }
                    }}
                    className="w-12 h-12 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 flex items-center justify-center transition-colors"
                  >
                    <FaShare className="w-5 h-5" />
                  </motion.button>
                  
                  <button
                    onClick={() => setBienSelectionne(null)}
                    className="w-12 h-12 rounded-full bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-black transition-colors flex items-center justify-center"
                  >
                    <span className="text-2xl">×</span>
                  </button>
                </div>
              </div>

              <div className="p-8">
                {/* Prix en évidence */}
                <div className="bg-gradient-to-r from-black to-gray-800 text-white p-6 mb-8 flex items-center justify-between">
                  <div>
                    <div className="text-4xl font-bold mb-2">
                      {bienSelectionne.prix + bienSelectionne.charges}€<span className="text-xl font-normal">/mois</span>
                    </div>
                    <div className="text-gray-300">
                      Loyer: {bienSelectionne.prix}€ + Charges: {bienSelectionne.charges}€
                    </div>
                    <div className="text-sm text-gray-400 mt-1">
                      Prix/m²: {Math.round((bienSelectionne.prix + bienSelectionne.charges) / bienSelectionne.surface)}€
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-light mb-2">{bienSelectionne.surface}m²</div>
                    <div className="text-gray-300">{bienSelectionne.pieces} pièces • {bienSelectionne.chambres} chambres</div>
                    <div className={`inline-block w-12 h-12 rounded-full text-lg font-bold flex items-center justify-center text-white mt-2 ${
                      bienSelectionne.dpe === 'A' ? 'bg-green-600' :
                      bienSelectionne.dpe === 'B' ? 'bg-green-500' :
                      bienSelectionne.dpe === 'C' ? 'bg-yellow-500' :
                      bienSelectionne.dpe === 'D' ? 'bg-orange-500' :
                      bienSelectionne.dpe === 'E' ? 'bg-red-500' :
                      'bg-red-600'
                    }`}>
                      {bienSelectionne.dpe}
                    </div>
                  </div>
                </div>

                {/* Galerie d'images améliorée */}
                <div className="mb-8">
                  <h3 className="text-2xl font-light text-black mb-6">Galerie photos</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {bienSelectionne.images.map((image: string, index: number) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="relative overflow-hidden aspect-[4/3] cursor-pointer group"
                      >
                        <img
                          src={image}
                          alt={`${bienSelectionne.titre} - Image ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileHover={{ opacity: 1, scale: 1 }}
                            className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black"
                          >
                            <FaExpand className="w-5 h-5" />
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Informations détaillées */}
                  <div className="lg:col-span-2">
                    {/* Description */}
                    <div className="mb-8">
                      <h3 className="text-2xl font-light text-black mb-4">Description</h3>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {bienSelectionne.description}
                      </p>
                    </div>

                    {/* Caractéristiques en grille */}
                    <div className="mb-8">
                      <h3 className="text-2xl font-light text-black mb-6">Caractéristiques</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center p-4 bg-gray-50 border border-gray-200">
                          <FaRuler className="w-8 h-8 mx-auto mb-3 text-gray-600" />
                          <div className="text-2xl font-bold text-black">{bienSelectionne.surface}</div>
                          <div className="text-sm text-gray-600">m² surface</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 border border-gray-200">
                          <FaBuilding className="w-8 h-8 mx-auto mb-3 text-gray-600" />
                          <div className="text-2xl font-bold text-black">{bienSelectionne.pieces}</div>
                          <div className="text-sm text-gray-600">pièces</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 border border-gray-200">
                          <FaBed className="w-8 h-8 mx-auto mb-3 text-gray-600" />
                          <div className="text-2xl font-bold text-black">{bienSelectionne.chambres}</div>
                          <div className="text-sm text-gray-600">chambres</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 border border-gray-200">
                          <FaBath className="w-8 h-8 mx-auto mb-3 text-gray-600" />
                          <div className="text-2xl font-bold text-black">{bienSelectionne.sallesBain}</div>
                          <div className="text-sm text-gray-600">salle(s) de bain</div>
                        </div>
                      </div>
                    </div>

                    {/* Équipements avec icônes */}
                    <div className="mb-8">
                      <h3 className="text-2xl font-light text-black mb-6">Équipements & Services</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {bienSelectionne.equipements.map((equipement: string, index: number) => (
                          <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 border border-gray-200">
                            <div className="text-2xl">
                              {getEquipementIcon(equipement)}
                            </div>
                            <span className="capitalize font-medium text-gray-700">{equipement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Informations détaillées */}
                    <div className="mb-8">
                      <h3 className="text-2xl font-light text-black mb-6">Informations détaillées</h3>
                      <div className="bg-gray-50 p-6 border border-gray-200">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Type de bien</span>
                              <span className="font-medium capitalize">{bienSelectionne.type}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Étage</span>
                              <span className="font-medium">{bienSelectionne.etage}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">DPE</span>
                              <span className="font-medium">{bienSelectionne.dpe}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">GES</span>
                              <span className="font-medium">{bienSelectionne.ges}</span>
                            </div>
                          </div>
                          <div className="space-y-4">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Meublé</span>
                              <span className={`px-3 py-1 text-sm font-medium ${
                                bienSelectionne.meuble ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                              }`}>
                                {bienSelectionne.meuble ? 'Oui' : 'Non'}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Animaux acceptés</span>
                              <span className={`px-3 py-1 text-sm font-medium ${
                                bienSelectionne.animauxAcceptes ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                              }`}>
                                {bienSelectionne.animauxAcceptes ? 'Oui' : 'Non'}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Disponibilité</span>
                              <span className="font-medium text-green-600">{bienSelectionne.disponible}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sidebar contact et actions */}
                  <div className="lg:col-span-1">
                    {/* Informations financières */}
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 border border-gray-200 mb-6">
                      <h3 className="text-xl font-medium text-black mb-4">Détail financier</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Loyer mensuel</span>
                          <span className="text-2xl font-bold text-black">{bienSelectionne.prix}€</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Charges</span>
                          <span className="font-medium">{bienSelectionne.charges}€</span>
                        </div>
                        <div className="border-t border-gray-300 pt-3 flex justify-between">
                          <span className="font-bold text-lg">Total mensuel</span>
                          <span className="text-3xl font-bold text-black">
                            {bienSelectionne.prix + bienSelectionne.charges}€
                          </span>
                        </div>
                        <div className="border-t border-gray-300 pt-3 space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Dépôt de garantie</span>
                            <span className="font-medium">{bienSelectionne.caution}€</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Frais d'agence TTC</span>
                            <span className="font-medium">{bienSelectionne.fraisAgence}€</span>
                          </div>
                          <div className="flex justify-between text-sm font-bold border-t border-gray-300 pt-2">
                            <span className="text-gray-700">Total à prévoir</span>
                            <span className="text-lg">{bienSelectionne.prix + bienSelectionne.charges + bienSelectionne.caution + bienSelectionne.fraisAgence}€</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Actions contact */}
                    <div className="space-y-4 mb-6">
                      <motion.a
                        href="tel:0953376141"
                        whileHover={{ y: -2, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-3 w-full bg-black text-white px-6 py-4 hover:bg-gray-800 transition-all duration-300 shadow-lg"
                      >
                        <FaPhone className="w-5 h-5" />
                        <div>
                          <div className="font-medium">Appeler maintenant</div>
                          <div className="text-sm text-gray-300">09 53 37 61 41</div>
                        </div>
                      </motion.a>
                      
                      <motion.a
                        href="mailto:contact@gregaopendoor.fr"
                        whileHover={{ y: -2, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-3 w-full bg-green-500 text-white px-6 py-4 hover:bg-green-600 transition-all duration-300 shadow-lg"
                      >
                        <FaEnvelope className="w-5 h-5" />
                        <div>
                          <div className="font-medium">Nous contacter</div>
                          <div className="text-sm text-green-100">contact@gregaopendoor.fr</div>
                        </div>
                      </motion.a>

                      <motion.button
                        whileHover={{ y: -2, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          if (!showCalendly) {
                            setShowCalendly(true);
                          }
                        }}
                        className="flex items-center gap-3 w-full bg-green-500 text-white px-6 py-4 hover:bg-green-600 transition-all duration-300 shadow-lg"
                      >
                        <FaCalendarAlt className="w-5 h-5" />
                        <div>
                          <div className="font-medium">Planifier une visite</div>
                          <div className="text-sm text-green-100">Gratuit • 30 min</div>
                        </div>
                      </motion.button>
                    </div>

                    {/* Garanties */}
                    <div className="bg-green-50 border border-green-200 p-4">
                      <h4 className="font-medium text-green-800 mb-3">✅ Nos garanties</h4>
                      <ul className="space-y-2 text-sm text-green-700">
                        <li>• Service 100% gratuit</li>
                        <li>• Réponse sous 24h</li>
                        <li>• Accompagnement personnalisé</li>
                        <li>• Visite virtuelle possible</li>
                        <li>• Dossier simplifié</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal de comparaison professionnel */}
      <AnimatePresence>
        {modeComparaison && comparaison.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setModeComparaison(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white max-w-7xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-light text-black">Comparaison des biens</h2>
                  <p className="text-sm text-gray-600 mt-1">{comparaison.length} biens sélectionnés</p>
                </div>
                <button
                  onClick={() => setModeComparaison(false)}
                  className="text-gray-400 hover:text-black transition-colors"
                >
                  <span className="text-2xl">×</span>
                </button>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {comparaison.map(id => {
                    const bien = biens.find(b => b.id === id);
                    if (!bien) return null;

                    return (
                      <div key={id} className="border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="relative">
                          <img
                            src={bien.images[0]}
                            alt={bien.titre}
                            className="w-full h-48 object-cover"
                          />
                          <button
                            onClick={() => toggleComparaison(bien.id)}
                            className="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                          >
                            ×
                          </button>
                        </div>
                        
                        <div className="p-4">
                          <h3 className="font-semibold text-lg mb-2 line-clamp-1">{bien.titre}</h3>
                          <p className="text-gray-600 text-sm mb-4">
                            {bien.ville} ({bien.arrondissement})
                          </p>

                          <div className="space-y-3 text-sm">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600">Prix total</span>
                              <span className="font-bold text-lg text-black">{bien.prix + bien.charges}€/mois</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Surface</span>
                              <span className="font-medium">{bien.surface}m²</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Prix/m²</span>
                              <span className={`font-medium px-2 py-1 rounded text-xs ${
                                Math.round((bien.prix + bien.charges) / bien.surface) < 25 ? 'bg-green-100 text-green-700' :
                                Math.round((bien.prix + bien.charges) / bien.surface) < 35 ? 'bg-yellow-100 text-yellow-700' :
                                'bg-red-100 text-red-700'
                              }`}>
                                {Math.round((bien.prix + bien.charges) / bien.surface)}€
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Pièces</span>
                              <span className="font-medium">{bien.pieces}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Chambres</span>
                              <span className="font-medium">{bien.chambres}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600">DPE</span>
                              <span className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center text-white ${
                                bien.dpe === 'A' ? 'bg-green-600' :
                                bien.dpe === 'B' ? 'bg-green-500' :
                                bien.dpe === 'C' ? 'bg-yellow-500' :
                                bien.dpe === 'D' ? 'bg-orange-500' :
                                bien.dpe === 'E' ? 'bg-red-500' :
                                'bg-red-600'
                              }`}>
                                {bien.dpe}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Meublé</span>
                              <span className={`px-2 py-1 rounded text-xs font-medium ${
                                bien.meuble ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'
                              }`}>
                                {bien.meuble ? 'Oui' : 'Non'}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Animaux</span>
                              <span className={`px-2 py-1 rounded text-xs font-medium ${
                                bien.animauxAcceptes ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                              }`}>
                                {bien.animauxAcceptes ? 'Acceptés' : 'Refusés'}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Disponible</span>
                              <span className="font-medium text-green-600 text-xs">{bien.disponible}</span>
                            </div>
                          </div>

                          <div className="mt-4 flex gap-2">
                            <motion.button
                              whileHover={{ scale: 1.02 }}
                              onClick={() => {
                                setBienSelectionne(bien);
                                setModeComparaison(false);
                              }}
                              className="flex-1 py-2 text-xs border border-gray-300 text-gray-700 hover:border-black hover:text-black transition-colors"
                            >
                              Voir détails
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.02 }}
                              onClick={() => window.open('mailto:contact@gregaopendoor.fr', '_self')}
                              className="px-3 py-2 text-xs bg-black text-white hover:bg-gray-800 transition-colors"
                            >
                              Contact
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Résumé de comparaison avancé */}
                {comparaison.length > 1 && (
                  <div className="mt-8 bg-gradient-to-r from-gray-50 to-gray-100 p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold mb-6 text-center">Analyse comparative</h3>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600 mb-2">
                          {Math.min(...comparaison.map(id => {
                            const bien = biens.find(b => b.id === id);
                            return bien ? bien.prix + bien.charges : 0;
                          }))}€
                        </div>
                        <div className="text-gray-600 text-sm">Prix le plus bas</div>
                        <div className="text-xs text-gray-500 mt-1">
                          {biens.find(b => b.id === comparaison.find(id => {
                            const bien = biens.find(b => b.id === id);
                            return bien && (bien.prix + bien.charges) === Math.min(...comparaison.map(id => {
                              const bien = biens.find(b => b.id === id);
                              return bien ? bien.prix + bien.charges : 0;
                            }));
                          }))?.titre}
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">
                          {Math.max(...comparaison.map(id => {
                            const bien = biens.find(b => b.id === id);
                            return bien ? bien.surface : 0;
                          }))}m²
                        </div>
                        <div className="text-gray-600 text-sm">Plus grande surface</div>
                        <div className="text-xs text-gray-500 mt-1">
                          {biens.find(b => b.id === comparaison.find(id => {
                            const bien = biens.find(b => b.id === id);
                            return bien && bien.surface === Math.max(...comparaison.map(id => {
                              const bien = biens.find(b => b.id === id);
                              return bien ? bien.surface : 0;
                            }));
                          }))?.titre}
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-600 mb-2">
                          {Math.max(...comparaison.map(id => {
                            const bien = biens.find(b => b.id === id);
                            return bien ? bien.pieces : 0;
                          }))}
                        </div>
                        <div className="text-gray-600 text-sm">Plus de pièces</div>
                        <div className="text-xs text-gray-500 mt-1">
                          {biens.find(b => b.id === comparaison.find(id => {
                            const bien = biens.find(b => b.id === id);
                            return bien && bien.pieces === Math.max(...comparaison.map(id => {
                              const bien = biens.find(b => b.id === id);
                              return bien ? bien.pieces : 0;
                            }));
                          }))?.titre}
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-3xl font-bold text-orange-600 mb-2">
                          {Math.min(...comparaison.map(id => {
                            const bien = biens.find(b => b.id === id);
                            return bien ? Math.round((bien.prix + bien.charges) / bien.surface) : 0;
                          }))}€/m²
                        </div>
                        <div className="text-gray-600 text-sm">Meilleur rapport</div>
                        <div className="text-xs text-gray-500 mt-1">qualité-prix</div>
                      </div>
                    </div>

                    {/* Actions de comparaison */}
                    <div className="flex flex-wrap gap-3 justify-center">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        onClick={() => exporterResultats('excel')}
                        className="px-4 py-2 bg-green-500 text-white hover:bg-green-600 transition-colors text-sm flex items-center gap-2"
                      >
                        <FaDownload className="w-3 h-3" />
                        Exporter la comparaison
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        onClick={() => {
                          setComparaison([]);
                          setModeComparaison(false);
                        }}
                        className="px-4 py-2 border border-gray-300 text-gray-700 hover:border-black hover:text-black transition-colors text-sm"
                      >
                        Vider la comparaison
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        onClick={() => window.open('mailto:contact@gregaopendoor.fr', '_self')}
                        className="px-4 py-2 bg-black text-white hover:bg-gray-800 transition-colors text-sm flex items-center gap-2"
                      >
                        <FaEnvelope className="w-3 h-3" />
                        Nous contacter
                      </motion.button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Section Recommandations intelligentes */}
      {biensRecommandes.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-light text-black mb-4">Recommandations pour vous</h2>
              <p className="text-gray-600 font-light">
                Basé sur vos préférences et vos biens favoris
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {biensRecommandes.slice(0, 3).map((id, index) => {
                const bien = biens.find(b => b.id === id);
                if (!bien) return null;

                return (
                  <motion.div
                    key={id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                    onClick={() => setBienSelectionne(bien)}
                  >
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img
                        src={bien.images[0]}
                        alt={bien.titre}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 text-xs font-medium">
                        ⭐ Recommandé
                      </div>
                      <div className="absolute bottom-4 left-4 bg-black/90 text-white px-3 py-1 text-sm font-bold backdrop-blur-sm">
                        {bien.prix + bien.charges}€/mois
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2">{bien.titre}</h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {bien.ville} ({bien.arrondissement})
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>{bien.surface}m² • {bien.pieces}P</span>
                        <span className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center text-white ${
                          bien.dpe === 'A' ? 'bg-green-600' :
                          bien.dpe === 'B' ? 'bg-green-500' :
                          bien.dpe === 'C' ? 'bg-yellow-500' :
                          bien.dpe === 'D' ? 'bg-orange-500' :
                          bien.dpe === 'E' ? 'bg-red-500' :
                          'bg-red-600'
                        }`}>
                          {bien.dpe}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Section Statistiques avancées */}
      {statistiques && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-light text-black mb-4">Analyse du marché</h2>
              <p className="text-gray-600 font-light">
                Statistiques en temps réel basées sur votre recherche
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">{statistiques.prixMoyen}€</div>
                <div className="text-blue-800 font-medium mb-1">Prix moyen</div>
                <div className="text-xs text-blue-600">
                  {statistiques.prixMin}€ - {statistiques.prixMax}€
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 border border-green-200"
              >
                <div className="text-3xl font-bold text-green-600 mb-2">{statistiques.surfaceMoyenne}m²</div>
                <div className="text-green-800 font-medium mb-1">Surface moyenne</div>
                <div className="text-xs text-green-600">
                  {Math.round(statistiques.prixMoyen / statistiques.surfaceMoyenne)}€/m²
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200"
              >
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {Object.keys(statistiques.repartitionTypes).length}
                </div>
                <div className="text-purple-800 font-medium mb-1">Types de biens</div>
                <div className="text-xs text-purple-600">
                  {Object.keys(statistiques.repartitionTypes)[0]} populaire
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200"
              >
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  {Object.keys(statistiques.repartitionVilles).length}
                </div>
                <div className="text-orange-800 font-medium mb-1">Villes disponibles</div>
                <div className="text-xs text-orange-600">
                  {Object.keys(statistiques.repartitionVilles)[0]} en tête
                </div>
              </motion.div>
            </div>

            {/* Graphiques de répartition */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 border border-gray-200">
                <h3 className="text-xl font-medium text-black mb-6">Répartition par type</h3>
                <div className="space-y-4">
                  {Object.entries(statistiques.repartitionTypes).map(([type, count]) => (
                    <div key={type} className="flex items-center justify-between">
                      <span className="capitalize font-medium">{type}</span>
                      <div className="flex items-center gap-3">
                        <div className="w-32 bg-gray-200 h-2 overflow-hidden">
                          <div 
                            className="h-full bg-blue-500 transition-all duration-1000"
                            style={{ width: `${(count / biensFiltres.length) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600 w-8">{count}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-6 border border-gray-200">
                <h3 className="text-xl font-medium text-black mb-6">Répartition par ville</h3>
                <div className="space-y-4">
                  {Object.entries(statistiques.repartitionVilles).map(([ville, count]) => (
                    <div key={ville} className="flex items-center justify-between">
                      <span className="font-medium">{ville}</span>
                      <div className="flex items-center gap-3">
                        <div className="w-32 bg-gray-200 h-2 overflow-hidden">
                          <div 
                            className="h-full bg-green-500 transition-all duration-1000"
                            style={{ width: `${(count / biensFiltres.length) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600 w-8">{count}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />

      {/* Modal Calendly */}
      <Modal
        isOpen={showCalendly}
        onClose={() => setShowCalendly(false)}
        title="Planifier une visite"
      >
        <CalendlyWidget />
      </Modal>
    </main>
  );
};

export default BiensALouer; 