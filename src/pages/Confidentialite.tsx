import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const Confidentialite = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extralight text-gray-900 mb-6"
          >
            Politique de Confidentialité
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div className="space-y-8">
              
              <div>
                <h2 className="text-2xl font-light text-gray-900 mb-4">Introduction</h2>
                <p className="text-gray-600">
                  GREGA OPEN DOOR s'engage à protéger la confidentialité de vos données personnelles. 
                  Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations 
                  lorsque vous utilisez notre site web et nos services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-light text-gray-900 mb-4">Données collectées</h2>
                <p className="text-gray-600 mb-4">Nous collectons les types de données suivantes :</p>
                <ul className="text-gray-600 space-y-2 list-disc list-inside">
                  <li><strong>Données d'identification :</strong> nom, prénom, adresse email, numéro de téléphone</li>
                  <li><strong>Données de navigation :</strong> adresse IP, type de navigateur, pages visitées</li>
                  <li><strong>Données de recherche :</strong> critères de recherche immobilière, préférences</li>
                  <li><strong>Données de contact :</strong> messages envoyés via nos formulaires</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-light text-gray-900 mb-4">Finalités du traitement</h2>
                <p className="text-gray-600 mb-4">Vos données sont utilisées pour :</p>
                <ul className="text-gray-600 space-y-2 list-disc list-inside">
                  <li>Vous fournir nos services de recherche immobilière</li>
                  <li>Répondre à vos demandes et vous contacter</li>
                  <li>Améliorer nos services et notre site web</li>
                  <li>Vous envoyer des informations sur nos services (avec votre consentement)</li>
                  <li>Respecter nos obligations légales</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-light text-gray-900 mb-4">Base légale</h2>
                <p className="text-gray-600 mb-4">Le traitement de vos données repose sur :</p>
                <ul className="text-gray-600 space-y-2 list-disc list-inside">
                  <li><strong>L'exécution du contrat :</strong> pour vous fournir nos services</li>
                  <li><strong>L'intérêt légitime :</strong> pour améliorer nos services et assurer la sécurité</li>
                  <li><strong>Le consentement :</strong> pour les communications marketing</li>
                  <li><strong>L'obligation légale :</strong> pour respecter la réglementation</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-light text-gray-900 mb-4">Conservation des données</h2>
                <p className="text-gray-600">
                  Nous conservons vos données personnelles uniquement pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées :
                </p>
                <ul className="text-gray-600 space-y-2 list-disc list-inside mt-4">
                  <li>Données clients : 3 ans après la fin de la relation commerciale</li>
                  <li>Données de navigation : 13 mois maximum</li>
                  <li>Données de contact : 3 ans après le dernier contact</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-light text-gray-900 mb-4">Partage des données</h2>
                <p className="text-gray-600 mb-4">
                  Nous ne vendons jamais vos données personnelles. Nous pouvons les partager avec :
                </p>
                <ul className="text-gray-600 space-y-2 list-disc list-inside">
                  <li>Nos partenaires immobiliers pour vous proposer des biens</li>
                  <li>Nos prestataires techniques (hébergement, analytics)</li>
                  <li>Les autorités compétentes si la loi l'exige</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-light text-gray-900 mb-4">Vos droits</h2>
                <p className="text-gray-600 mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
                <ul className="text-gray-600 space-y-2 list-disc list-inside">
                  <li><strong>Droit d'accès :</strong> obtenir une copie de vos données</li>
                  <li><strong>Droit de rectification :</strong> corriger vos données inexactes</li>
                  <li><strong>Droit d'effacement :</strong> demander la suppression de vos données</li>
                  <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                  <li><strong>Droit à la portabilité :</strong> récupérer vos données dans un format structuré</li>
                  <li><strong>Droit de limitation :</strong> demander la limitation du traitement</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  Pour exercer ces droits, contactez-nous à : contact@gregaopendoor.fr
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-light text-gray-900 mb-4">Cookies</h2>
                <p className="text-gray-600 mb-4">
                  Notre site utilise des cookies pour améliorer votre expérience. Nous utilisons :
                </p>
                <ul className="text-gray-600 space-y-2 list-disc list-inside">
                  <li><strong>Cookies essentiels :</strong> nécessaires au fonctionnement du site</li>
                  <li><strong>Cookies analytiques :</strong> pour comprendre l'utilisation du site</li>
                  <li><strong>Cookies de préférences :</strong> pour mémoriser vos choix</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-light text-gray-900 mb-4">Sécurité</h2>
                <p className="text-gray-600">
                  Nous mettons en place des mesures techniques et organisationnelles appropriées pour protéger vos données contre 
                  la perte, l'utilisation abusive, l'accès non autorisé, la divulgation, l'altération ou la destruction.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-light text-gray-900 mb-4">Modifications</h2>
                <p className="text-gray-600">
                  Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
                  Les modifications seront publiées sur cette page avec la date de mise à jour.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-light text-gray-900 mb-4">Contact</h2>
                <p className="text-gray-600">
                  Pour toute question concernant cette politique de confidentialité ou le traitement de vos données, 
                  contactez-nous à :
                </p>
                <div className="text-gray-600 mt-4 space-y-1">
                  <p><strong>Email :</strong> contact@gregaopendoor.fr</p>
                  <p><strong>Téléphone :</strong> 09 53 37 61 41</p>
                  <p><strong>Adresse :</strong> 37 rue des Maturins, 75008 Paris</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <p className="text-gray-500 text-sm">
                  Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Confidentialite; 