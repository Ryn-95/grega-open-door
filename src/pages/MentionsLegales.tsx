import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const MentionsLegales = () => {
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
            Mentions Légales
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
                <h2 className="text-2xl font-light text-gray-900 mb-4">Éditeur du site</h2>
                <div className="text-gray-600 space-y-2">
                  <p><strong>Raison sociale :</strong> GREGA OPEN DOOR</p>
                  <p><strong>Forme juridique :</strong> SARL</p>
                  <p><strong>Capital social :</strong> 10 000 €</p>
                  <p><strong>Siège social :</strong> 37 rue des Maturins, 75008 Paris</p>
                  <p><strong>RCS :</strong> Paris B 123 456 789</p>
                  <p><strong>SIRET :</strong> 123 456 789 00012</p>
                  <p><strong>TVA intracommunautaire :</strong> FR12 123456789</p>
                  <p><strong>Téléphone :</strong> 09 53 37 61 41</p>
                  <p><strong>Email :</strong> contact@gregaopendoor.fr</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-light text-gray-900 mb-4">Directeur de la publication</h2>
                <p className="text-gray-600">Le directeur de la publication est le représentant légal de GREGA OPEN DOOR.</p>
              </div>

              <div>
                <h2 className="text-2xl font-light text-gray-900 mb-4">Hébergement</h2>
                <div className="text-gray-600 space-y-2">
                  <p><strong>Hébergeur :</strong> Vercel Inc.</p>
                  <p><strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723</p>
                  <p><strong>Site web :</strong> https://vercel.com</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-light text-gray-900 mb-4">Propriété intellectuelle</h2>
                <p className="text-gray-600 mb-4">
                  L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
                  Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
                <p className="text-gray-600">
                  La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite 
                  sauf autorisation expresse du directeur de la publication.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-light text-gray-900 mb-4">Données personnelles</h2>
                <p className="text-gray-600 mb-4">
                  Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), 
                  vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
                </p>
                <p className="text-gray-600">
                  Pour exercer ces droits, vous pouvez nous contacter à l'adresse : contact@gregaopendoor.fr
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-light text-gray-900 mb-4">Cookies</h2>
                <p className="text-gray-600 mb-4">
                  Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. 
                  En continuant à naviguer sur ce site, vous acceptez l'utilisation de cookies.
                </p>
                <p className="text-gray-600">
                  Vous pouvez à tout moment modifier vos préférences de cookies dans les paramètres de votre navigateur.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-light text-gray-900 mb-4">Responsabilité</h2>
                <p className="text-gray-600 mb-4">
                  Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l'année, 
                  mais peut toutefois contenir des inexactitudes ou des omissions.
                </p>
                <p className="text-gray-600">
                  Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, 
                  merci de bien vouloir le signaler par email à contact@gregaopendoor.fr
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-light text-gray-900 mb-4">Droit applicable</h2>
                <p className="text-gray-600">
                  Tout litige en relation avec l'utilisation du site www.gregaopendoor.fr est soumis au droit français. 
                  Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.
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

export default MentionsLegales; 