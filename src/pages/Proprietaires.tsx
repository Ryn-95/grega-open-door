import SEOHead from '../components/SEOHead'
import Footer from '../components/Footer'

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
        title="Propriétaires : Trouvez des Locataires en 48h | Service 100% GRATUIT + Garanties GREGA"
        description="🏠 Propriétaires Paris : trouvez locataires solvables en 48h ! Service 100% GRATUIT : vérification dossiers, garantie loyers impayés, gestion complète. 0 commission ! ☎️ 09 53 37 61 41"
        keywords="service propriétaire gratuit, trouver locataire, garantie loyer impayé, dossier locataire, vérification solvabilité, gestion locative Paris, propriétaire bailleur"
        canonical="https://www.gregaopendoor.fr/proprietaires"
        ogType="webpage"
        schemaType="LocalBusiness"
        breadcrumbs={breadcrumbs}
        faq={faqData}
      />
      <div className="min-h-screen bg-white">
        {/* Contenu Principal */}
        <div className="max-w-4xl mx-auto px-4 pt-12 pb-12">
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
                GREGA OPEN DOOR vous propose le service qu'il vous faut !
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
                Téléchargez, imprimez, remplissez, signez et renvoyez le formulaire ci-dessous par Email à contact@gregaopendoor.fr ou contactez nous directement au 09 53 37 61 41.
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
      </div>
      <Footer />
    </>
  )
}