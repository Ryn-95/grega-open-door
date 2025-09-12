import React from 'react';
import SEOHead from '../components/SEOHead';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrixLocation = () => {
  const prixData = [
    { arrondissement: "1er - Louvre", studio: "1 800€", t2: "3 200€", t3: "4 500€", evolution: "+12%" },
    { arrondissement: "2e - Bourse", studio: "1 600€", t2: "2 800€", t3: "4 000€", evolution: "+8%" },
    { arrondissement: "3e - Temple", studio: "1 700€", t2: "2 900€", t3: "4 200€", evolution: "+10%" },
    { arrondissement: "4e - Hôtel de Ville", studio: "1 900€", t2: "3 400€", t3: "4 800€", evolution: "+15%" },
    { arrondissement: "5e - Panthéon", studio: "1 500€", t2: "2 600€", t3: "3 800€", evolution: "+7%" },
    { arrondissement: "6e - Luxembourg", studio: "2 100€", t2: "3 800€", t3: "5 500€", evolution: "+18%" },
    { arrondissement: "7e - Palais Bourbon", studio: "2 000€", t2: "3 600€", t3: "5 200€", evolution: "+16%" },
    { arrondissement: "8e - Élysée", studio: "1 900€", t2: "3 300€", t3: "4 900€", evolution: "+13%" },
    { arrondissement: "9e - Opéra", studio: "1 700€", t2: "3 000€", t3: "4 300€", evolution: "+11%" },
    { arrondissement: "10e - Enclos St-Laurent", studio: "1 400€", t2: "2 400€", t3: "3 500€", evolution: "+9%" },
    { arrondissement: "11e - Popincourt", studio: "1 500€", t2: "2 500€", t3: "3 600€", evolution: "+8%" },
    { arrondissement: "12e - Reuilly", studio: "1 300€", t2: "2 200€", t3: "3 200€", evolution: "+6%" },
    { arrondissement: "13e - Gobelins", studio: "1 200€", t2: "2 000€", t3: "2 900€", evolution: "+5%" },
    { arrondissement: "14e - Observatoire", studio: "1 300€", t2: "2 100€", t3: "3 100€", evolution: "+7%" },
    { arrondissement: "15e - Vaugirard", studio: "1 400€", t2: "2 300€", t3: "3 300€", evolution: "+8%" },
    { arrondissement: "16e - Passy", studio: "1 800€", t2: "3 200€", t3: "4 700€", evolution: "+14%" },
    { arrondissement: "17e - Batignolles", studio: "1 600€", t2: "2 700€", t3: "3 900€", evolution: "+9%" },
    { arrondissement: "18e - Butte Montmartre", studio: "1 400€", t2: "2 300€", t3: "3 300€", evolution: "+6%" },
    { arrondissement: "19e - Buttes Chaumont", studio: "1 200€", t2: "2 000€", t3: "2 800€", evolution: "+4%" },
    { arrondissement: "20e - Ménilmontant", studio: "1 300€", t2: "2 100€", t3: "3 000€", evolution: "+5%" }
  ];

  const banlieuePrix = [
    { ville: "Boulogne-Billancourt", studio: "1 100€", t2: "1 900€", t3: "2 700€", evolution: "+12%" },
    { ville: "Neuilly-sur-Seine", studio: "1 600€", t2: "2 800€", t3: "4 200€", evolution: "+15%" },
    { ville: "Levallois-Perret", studio: "1 300€", t2: "2 200€", t3: "3 200€", evolution: "+10%" },
    { ville: "Issy-les-Moulineaux", studio: "1 200€", t2: "2 000€", t3: "2 900€", evolution: "+8%" },
    { ville: "Courbevoie", studio: "1 100€", t2: "1 800€", t3: "2 600€", evolution: "+7%" },
    { ville: "Montreuil", studio: "900€", t2: "1 500€", t3: "2 100€", evolution: "+6%" },
    { ville: "Vincennes", studio: "1 000€", t2: "1 700€", t3: "2 400€", evolution: "+8%" },
    { ville: "Saint-Denis", studio: "800€", t2: "1 300€", t3: "1 800€", evolution: "+4%" }
  ];

  const faqData = [
    {
      question: "Pourquoi les prix de location à Paris augmentent-ils autant en 2025 ?",
      answer: "L'augmentation est due à plusieurs facteurs : pénurie de logements disponibles, inflation, rénovations énergétiques obligatoires, et forte demande post-JO 2024. Le marché reste très tendu avec moins de 2% de taux de vacance."
    },
    {
      question: "Dans quels arrondissements trouve-t-on les meilleures opportunités ?",
      answer: "Les 13e, 19e et 20e arrondissements offrent le meilleur rapport qualité-prix. Pour la banlieue, Montreuil et Saint-Denis restent accessibles avec de bonnes connexions transport."
    },
    {
      question: "Comment négocier le prix d'un loyer à Paris ?",
      answer: "Avec GREGA OPEN DOOR, nous négocions pour vous ! Arguments clés : dossier solide, engagement long terme, travaux à prévoir. En moyenne, nous obtenons -5% à -8% par rapport au prix affiché."
    },
    {
      question: "Faut-il s'attendre à une baisse des prix en 2025 ?",
      answer: "Les experts prévoient une stabilisation plutôt qu'une baisse. Les prix devraient augmenter de +3% à +5% en 2025, contre +10% en 2024. L'offre reste insuffisante face à la demande."
    }
  ];

  const breadcrumbs = [
    { name: "Accueil", url: "https://www.gregaopendoor.fr/" },
    { name: "Prix Location Paris 2025", url: "https://www.gregaopendoor.fr/prix-location-paris" }
  ];

  return (
    <>
      <SEOHead
        title="Prix Location Paris 2025 : Tarifs Réels par Arrondissement | Studio, T2, T3 - GREGA"
        description="💰 PRIX RÉELS location Paris 2025 ! Tarifs par arrondissement : studios 1200-2100€, T2 2000-3800€, T3 2900-5500€. Évolutions +4% à +18%. Banlieue 800-1600€. Négociation incluse avec GREGA !"
        keywords="prix location Paris 2025, tarif loyer arrondissement, studio T2 T3 prix, location pas cher Paris, négociation loyer, évolution prix immobilier, banlieue parisienne tarifs"
        canonical="https://www.gregaopendoor.fr/prix-location-paris"
        ogType="webpage"
        schemaType="WebPage"
        breadcrumbs={breadcrumbs}
        faq={faqData}
      />
      
      <div className="bg-white">
        <Navbar />
        
        {/* Hero avec chiffres chocs */}
        <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Prix Location Paris 2025
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              💰 Tarifs RÉELS par arrondissement • Évolutions choc • Négociation incluse
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-red-600">+12%</div>
                <div className="text-gray-600">Hausse moyenne 2024</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-blue-600">1 750€</div>
                <div className="text-gray-600">Studio moyen Paris</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-green-600">2 900€</div>
                <div className="text-gray-600">T2 moyen Paris</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-purple-600">4 100€</div>
                <div className="text-gray-600">T3 moyen Paris</div>
              </div>
            </div>
          </div>
        </section>

        {/* Tableau prix Paris */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              🏢 Prix par Arrondissement Parisien
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
                <thead className="bg-gray-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Arrondissement</th>
                    <th className="px-6 py-4 text-center">Studio</th>
                    <th className="px-6 py-4 text-center">T2</th>
                    <th className="px-6 py-4 text-center">T3</th>
                    <th className="px-6 py-4 text-center">Évolution 2024</th>
                  </tr>
                </thead>
                <tbody>
                  {prixData.map((prix, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-medium">{prix.arrondissement}</td>
                      <td className="px-6 py-4 text-center font-bold text-blue-600">{prix.studio}</td>
                      <td className="px-6 py-4 text-center font-bold text-green-600">{prix.t2}</td>
                      <td className="px-6 py-4 text-center font-bold text-purple-600">{prix.t3}</td>
                      <td className="px-6 py-4 text-center">
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">
                          {prix.evolution}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Tableau banlieue */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              🚇 Banlieue Parisienne - Alternatives Abordables
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Ville</th>
                    <th className="px-6 py-4 text-center">Studio</th>
                    <th className="px-6 py-4 text-center">T2</th>
                    <th className="px-6 py-4 text-center">T3</th>
                    <th className="px-6 py-4 text-center">Évolution 2024</th>
                  </tr>
                </thead>
                <tbody>
                  {banlieuePrix.map((prix, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-medium">{prix.ville}</td>
                      <td className="px-6 py-4 text-center font-bold text-blue-600">{prix.studio}</td>
                      <td className="px-6 py-4 text-center font-bold text-green-600">{prix.t2}</td>
                      <td className="px-6 py-4 text-center font-bold text-purple-600">{prix.t3}</td>
                      <td className="px-6 py-4 text-center">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                          {prix.evolution}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Action */}
        <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">
              💪 On Négocie Votre Loyer !
            </h2>
            <p className="text-xl mb-8">
              Nos experts obtiennent en moyenne -5% à -8% sur le prix affiché
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="tel:0953376141" className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
                📞 09 53 37 61 41
              </a>
              <a href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-red-600 transition">
                💬 Négociation Gratuite
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              ❓ Questions Fréquentes sur les Prix
            </h2>
            
            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-gray-900">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default PrixLocation;
