import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo et description */}
          <div>
            <h3 className="text-xl font-bold mb-4">GREGA OPEN DOOR</h3>
            <p className="text-gray-400">
              Votre partenaire de confiance pour tous vos projets immobiliers.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaPhone className="text-blue-400" />
                <span className="text-gray-400">+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-400" />
                <span className="text-gray-400">contact@gregaopendoor.fr</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-blue-400" />
                <span className="text-gray-400">123 Avenue des Champs-Élysées, Paris</span>
              </div>
            </div>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="text-xl font-bold mb-4">Horaires d'ouverture</h3>
            <div className="text-gray-400 space-y-2">
              <p>Lundi - Vendredi : 9h00 - 18h00</p>
              <p>Samedi : 10h00 - 16h00</p>
              <p>Dimanche : Fermé</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2024 GREGA OPEN DOOR. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 