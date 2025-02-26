#!/bin/bash

# Créer le dossier images s'il n'existe pas
mkdir -p public/images

# Télécharger les images principales
curl -o public/images/paris-sunset.jpg "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1600&q=80"
curl -o public/images/modern-building.jpg "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&q=80"

# Télécharger les images d'appartements
curl -o public/images/apartment1.jpg "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80"
curl -o public/images/apartment2.jpg "https://images.unsplash.com/photo-1502005097973-6a7082348e28?w=800&q=80"
curl -o public/images/apartment3.jpg "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&q=80"
curl -o public/images/apartment4.jpg "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80"

# Télécharger les images de témoignages
curl -o public/images/testimonial1.jpg "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
curl -o public/images/testimonial2.jpg "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
curl -o public/images/testimonial3.jpg "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80"

# Télécharger les images de services
curl -o public/images/service1.jpg "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80"
curl -o public/images/service2.jpg "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
curl -o public/images/service3.jpg "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80"

# Télécharger les images de fond
curl -o public/images/history-bg.jpg "https://images.unsplash.com/photo-1621252179027-94459d278660?w=1600&q=80"
curl -o public/images/contact-bg.jpg "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1600&q=80"
curl -o public/images/service-bg.jpg "https://images.unsplash.com/photo-1621886292650-520f76c747d6?w=1600&q=80"
curl -o public/images/about-bg.jpg "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?w=1600&q=80"

# Télécharger les images d'équipe
curl -o public/images/team1.jpg "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80"
curl -o public/images/team2.jpg "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&q=80"
curl -o public/images/team3.jpg "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&q=80"
curl -o public/images/team4.jpg "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"

# Télécharger les images de galerie
curl -o public/images/gallery1.jpg "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
curl -o public/images/gallery2.jpg "https://images.unsplash.com/photo-1600573472591-ee6c8e695581?w=800&q=80"
curl -o public/images/gallery3.jpg "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80"
curl -o public/images/gallery4.jpg "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"

# Télécharger les images de catégories
curl -o public/images/tables.jpg "https://images.unsplash.com/photo-1592861956120-e524fc739696?w=800&q=80"
curl -o public/images/hotels.jpg "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80"
curl -o public/images/clubs.jpg "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=800&q=80"
curl -o public/images/events.jpg "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80"

# Télécharger les images de marques
curl -o public/images/gigi.jpg "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80"
curl -o public/images/girafe.jpg "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80"
curl -o public/images/beaucoco.jpg "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
curl -o public/images/mun.jpg "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800&q=80"

echo "Toutes les images ont été téléchargées avec succès !" 