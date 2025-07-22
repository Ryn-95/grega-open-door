import SEOHead from '../components/SEOHead'

export default function Proprietaires() {
  const faqData = [
    {
      question: "Le service pour propriétaires est-il vraiment gratuit ?",
      answer: "Oui, notre service de recherche de locataires pour propriétaires est entièrement gratuit. Nous ne prenons aucune commission sur vos loyers."
    },
    {
      question: "Comment vérifiez-vous la solvabilité des candidats locataires ?",
      answer: "Nous effectuons un contrôle rigoureux des dossiers : vérification des revenus, des garanties, de l'éligibilité au GLI (Garantie Loyer Impayé) et au pass GRL."
    },
    {
      question: "Combien de temps faut-il pour trouver un locataire ?",
      answer: "En moyenne, nous trouvons un locataire qualifié en 2 à 4 semaines, grâce à notre réseau de candidats pré-qualifiés."
    },
    {
      question: "Que comprend l'assurance loyer impayé ?",
      answer: "L'assurance couvre les loyers impayés, la carence locative, les détériorations immobilières et offre une protection juridique complète."
    }
  ]

  const breadcrumbs = [
    { name: "Accueil", url: "https://www.gregaopendoor.fr/" },
    { name: "Services Propriétaires", url: "https://www.gregaopendoor.fr/proprietaires" }
  ]

  return (
    <>
      <SEOHead
        title="Services Propriétaires Gratuits | GREGA OPEN DOOR - Trouvez des Locataires Qualifiés"
        description="Service gratuit pour propriétaires : trouvez des locataires solvables avec garanties. Vérification complète des dossiers, assurance loyer impayé. Contactez GREGA OPEN DOOR."
        keywords="service propriétaire gratuit, trouver locataire, garantie loyer impayé, dossier locataire, vérification solvabilité, gestion locative Paris, propriétaire bailleur"
        canonical="https://www.gregaopendoor.fr/proprietaires"
        ogType="webpage"
        schemaType="LocalBusiness"
        breadcrumbs={breadcrumbs}
        faq={faqData}
      />
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="bg-[#2A3942] text-white py-4">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
            <div className="flex gap-16">
              <a href="/biens-a-louer" className="hover:text-gray-300 transition-colors">
                NOS BIENS À LOUER
              </a>
              <a href="/proprietaires" className="hover:text-gray-300 transition-colors">
                VOUS ÊTES PROPRIÉTAIRE ?
              </a>
              <a href="/partenaires" className="hover:text-gray-300 transition-colors">
                NOS PARTENAIRES
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Image */}
        <div className="relative h-[300px] overflow-hidden">
          <img
            src="/images/appartement-luxe.jpg"
            alt="Appartement de luxe"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Contenu Principal */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-[#8B0000] text-2xl mb-8 text-center italic">
            Vous êtes propriétaire ?
          </h1>

          <div className="space-y-6 text-[#333] leading-relaxed">
            <p>
              De nombreux propriétaires nous ont fait confiance pour leur trouver des locataires avec des garanties recevables, rejoignez les!
            </p>

            <p className="text-[#8B0000] font-semibold">
              Ce service est gratuit .
            </p>

            <p>
              Vous êtes propriétaire d'un ou plusieurs logements que vous voulez louer.
            </p>

            <div>
              <p className="text-[#8B0000] font-semibold mb-4">
                Allo location vous propose le service qu'il vous faut !
              </p>

              <p className="mb-4">Si vous en avez assez :</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>d'être contacté toute la journée par des candidats locataires sans un dossier recevable !</li>
                <li>de devoir régler des honoraires pour trouver un bon locataire</li>
                <li>de continuer à recevoir des appels pendant plusieurs semaines après avoir loué votre bien</li>
                <li>de ne pas avoir une totale liberté sur la location de votre appartement</li>
              </ul>
            </div>

            <p>
              N'hésitez plus, contactez nous !
            </p>

            <p>
              Nos services assurent un contrôle sérieux des garanties de votre futur locataire, pour un gain de temps évident ! En effet nous recevons au préalable tous les candidats pour une étude sérieuse de la solvabilité de leur dossier et de leur éligibilité au GLI (garantie loyer impayé), au pass GRL ...
            </p>

            <p>
              Notre service vous accompagnera dans votre démarche en vous apportant sérieux et conseil
            </p>

            <p>
              Assurance loyer : loyer impayé, carence locative, détérioration immobilière et protection juridique.
            </p>

            <div>
              <h2 className="text-[#8B0000] text-xl font-semibold mb-4">
                Proposez votre bien à la location
              </h2>

              <p>
                Téléchargez, imprimez, remplissez, signez et renvoyez le formulaire ci-dessous par Email à allolocation@sfr.fr ou par courrier à l'adresse : 21, rue Cheroy 75017 PARIS ou contactez nous directement au 01 45 22 45 22.
              </p>

              <div className="mt-4">
                <a 
                  href="/formulaire-proprietaire.pdf" 
                  className="text-[#8B0000] hover:underline"
                >
                  - Téléchargez le formulaire
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-[#8B0000] text-white py-4">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
            <span>Allo Location</span>
            <a href="/contact" className="hover:underline">NOUS CONTACTER</a>
            <a href="/mentions-legales" className="hover:underline">MENTIONS LEGALES</a>
            <div className="flex items-center gap-2">
              <span>Site réalisé par</span>
              <a href="https://cosmosoft.fr" className="text-[#FFA07A] hover:underline">Cosmosoft</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}