import { FaSearch, FaFileSignature, FaKey } from 'react-icons/fa'

const Services = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une approche complète et personnalisée pour votre recherche de logement
          </p>
        </div>

        {/* Services détaillés */}
        <div className="space-y-20">
          {/* Service 1 */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="text-blue-600 text-5xl mb-6">
                <FaSearch />
              </div>
              <h2 className="text-2xl font-bold mb-4">Recherche personnalisée</h2>
              <p className="text-gray-600 mb-4">
                Nous analysons vos besoins et votre budget pour vous proposer une sélection
                de biens correspondant exactement à vos critères. Notre connaissance
                approfondie du marché immobilier nous permet de vous faire gagner un temps précieux.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Analyse de vos critères</li>
                <li>• Sélection rigoureuse des biens</li>
                <li>• Visites accompagnées</li>
              </ul>
            </div>
            <div className="md:w-1/2 bg-gray-100 rounded-lg p-8">
              <img src="/images/search.jpg" alt="Recherche" className="rounded-lg shadow-lg" />
            </div>
          </div>

          {/* Service 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <div className="text-blue-600 text-5xl mb-6">
                <FaFileSignature />
              </div>
              <h2 className="text-2xl font-bold mb-4">Constitution de dossier</h2>
              <p className="text-gray-600 mb-4">
                Un dossier bien préparé est la clé d'une candidature réussie. Nous vous
                accompagnons dans la préparation de votre dossier pour maximiser vos chances
                d'obtenir le logement de vos rêves.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Vérification des documents</li>
                <li>• Optimisation de la présentation</li>
                <li>• Conseils personnalisés</li>
              </ul>
            </div>
            <div className="md:w-1/2 bg-gray-100 rounded-lg p-8">
              <img src="/images/documents.jpg" alt="Documents" className="rounded-lg shadow-lg" />
            </div>
          </div>

          {/* Service 3 */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="text-blue-600 text-5xl mb-6">
                <FaKey />
              </div>
              <h2 className="text-2xl font-bold mb-4">Accompagnement complet</h2>
              <p className="text-gray-600 mb-4">
                De la recherche à la remise des clés, nous sommes à vos côtés. Notre équipe
                s'occupe de toutes les démarches administratives pour vous faciliter la vie.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Suivi des dossiers</li>
                <li>• Coordination avec les propriétaires</li>
                <li>• État des lieux assisté</li>
              </ul>
            </div>
            <div className="md:w-1/2 bg-gray-100 rounded-lg p-8">
              <img src="/images/keys.jpg" alt="Clés" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services 