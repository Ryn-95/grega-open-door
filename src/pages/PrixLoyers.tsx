import React from 'react';
import SEOHead from '../components/SEOHead';

const PrixLoyers = () => {
  const prixData = [
    { arrondissement: "1er - Louvre", studio: "1200-1500€", t2: "2000-2800€", t3: "3000-4500€", evolution: "+8%" },
    { arrondissement: "2ème - Bourse", studio: "1100-1400€", t2: "1800-2600€", t3: "2800-4200€", evolution: "+7%" },
    { arrondissement: "3ème - Temple", studio: "1200-1600€", t2: "2000-2900€", t3: "3200-4800€", evolution: "+9%" },
    { arrondissement: "4ème - Hôtel de Ville", studio: "1300-1700€", t2: "2200-3200€", t3: "3500-5200€", evolution: "+10%" },
    { arrondissement: "5ème - Panthéon", studio: "1000-1300€", t2: "1700-2400€", t3: "2600-3800€", evolution: "+6%" },
    { arrondissement: "6ème - Luxembourg", studio: "1400-1800€", t2: "2400-3500€", t3: "3800-5800€", evolution: "+11%" },
    { arrondissement: "7ème - Palais Bourbon", studio: "1500-2000€", t2: "2600-3800€", t3: "4000-6500€", evolution: "+12%" },
    { arrondissement: "8ème - Élysée", studio: "1400-1900€", t2: "2500-3600€", t3: "3800-5500€", evolution: "+10%" },
    { arrondissement: "9ème - Opéra", studio: "1200-1600€", t2: "2000-2900€", t3: "3000-4500€", evolution: "+8%" },
    { arrondissement: "10ème - Enclos", studio: "1000-1400€", t2: "1600-2300€", t3: "2400-3500€", evolution: "+7%" },
    { arrondissement: "11ème - Popincourt", studio: "1100-1500€", t2: "1700-2500€", t3: "2600-3800€", evolution: "+8%" },
    { arrondissement: "12ème - Reuilly", studio: "950-1300€", t2: "1500-2200€", t3: "2200-3200€", evolution: "+6%" },
    { arrondissement: "13ème - Gobelins", studio: "900-1200€", t2: "1400-2000€", t3: "2000-3000€", evolution: "+5%" },
    { arrondissement: "14ème - Observatoire", studio: "950-1300€", t2: "1500-2200€", t3: "2200-3200€", evolution: "+6%" },
    { arrondissement: "15ème - Vaugirard", studio: "1000-1400€", t2: "1600-2400€", t3: "2400-3600€", evolution: "+7%" },
    { arrondissement: "16ème - Passy", studio: "1300-1800€", t2: "2200-3200€", t3: "3400-5200€", evolution: "+9%" },
    { arrondissement: "17ème - Batignolles", studio: "1100-1500€", t2: "1800-2600€", t3: "2700-4000€", evolution: "+7%" },
    { arrondissement: "18ème - Butte Montmartre", studio: "950-1350€", t2: "1500-2200€", t3: "2200-3300€", evolution: "+6%" },
    { arrondissement: "19ème - Buttes Chaumont", studio: "900-1250€", t2: "1400-2000€", t3: "2000-2900€", evolution: "+5%" },
    { arrondissement: "20ème - Ménilmontant", studio: "950-1300€", t2: "1500-2200€", t3: "2200-3200€", evolution: "+6%" }
  ];

  const banlieuePrix = [
    { ville: "Boulogne-Billancourt", studio: "1100-1500€", t2: "1800-2600€", t3: "2600-3800€", transport: "Métro 9", temps: "15min" },
    { ville: "Neuilly-sur-Seine", studio: "1200-1700€", t2: "2000-3000€", t3: "3000-4500€", transport: "Métro 1", temps: "12min" },
    { ville: "Vincennes", studio: "1000-1400€", t2: "1600-2300€", t3: "2300-3400€", transport: "Métro 1", temps: "20min" },
    { ville: "Saint-Ouen", studio: "900-1200€", t2: "1400-2000€", t3: "2000-2800€", transport: "Métro 13", temps: "18min" },
    { ville: "Montreuil", studio: "850-1150€", t2: "1300-1900€", t3: "1900-2700€", transport: "Métro 9", temps: "22min" },
    { ville: "Issy-les-Moulineaux", studio: "1050-1450€", t2: "1700-2500€", t3: "2500-3600€", transport: "Métro 12", temps: "16min" }
  ];

  const faqData = [
    {
      question: "Quel est le prix moyen d'un studio à Paris en 2025 ?",
      answer: "Le prix moyen d'un studio à Paris varie de 900€ à 2000€/mois selon l'arrondissement. Les plus chers sont les 6ème, 7ème et 8ème (1400-2000€), les plus abordables sont les 13ème, 19ème et 20ème (900-1350€)."
    },
    {
      question: "Dans quels arrondissements trouve-t-on les loyers les moins chers ?",
      answer: "Les arrondissements les plus abordables sont : 13ème (900-1200€ studio), 19ème (900-1250€), 20ème (950-1300€), 12ème (950-1300€) et 18ème (950-1350€). Ces quartiers offrent un excellent rapport qualité-prix."
    },
    {
      question: "Pourquoi les prix ont-ils augmenté en 2025 ?",
      answer: "L'augmentation des loyers (+5% à +12%) s'explique par : forte demande post-JO 2024, rénovations urbaines, nouvelle attractivité de certains quartiers, et inflation générale. Les arrondissements centraux sont les plus impactés."
    },
    {
      question: "Comment négocier son loyer à Paris ?",
      answer: "Avec GREGA OPEN DOOR, nous vous aidons à négocier : analyse comparative du marché, mise en avant de votre profil solide, négociation professionnelle avec le propriétaire. En moyenne, nous obtenons 5-8% de réduction sur le loyer initial."
    }
  ];

  const breadcrumbs = [
    { name: "Accueil", url: "https://www.gregaopendoor.fr/" },
    { name: "Prix Loyers Paris 2025", url: "https://www.gregaopendoor.fr/prix-loyers-paris" }
  ];

  return (
    <>
      <SEOHead
        title="Prix Loyers Paris 2025 : Guide Complet par Arrondissement | Studio, T2, T3 - GREGA"
        description="🏠 Prix loyers Paris 2025 OFFICIELS ! Guide complet : studios 900-2000€, T2 1400-3800€, T3 2000-6500€. Évolution +5% à +12%. Négociation gratuite avec GREGA OPEN DOOR !"
        keywords="prix loyer Paris 2025, loyer studio Paris, prix location appartement, loyer T2 T3 Paris, arrondissement moins cher Paris, évolution prix immobilier, négociation loyer, banlieue Paris prix"
        canonical="https://www.gregaopendoor.fr/prix-loyers-paris"
        ogType="article"
        schemaType="Article"
        breadcrumbs={breadcrumbs}
        faq={faqData}
      />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Prix Loyers Paris 2025 📊
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Guide complet et actualisé • Tous arrondissements • Négociation incluse
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold">900-2000€</div>
                  <div className="text-sm opacity-80">Studios Paris</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">1400-3800€</div>
                  <div className="text-sm opacity-80">Appartements T2</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">+5% à +12%</div>
                  <div className="text-sm opacity-80">Évolution 2025</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prix par Arrondissement */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Prix par Arrondissement</h2>
            
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Arrondissement</th>
                      <th className="px-6 py-4 text-center">Studio</th>
                      <th className="px-6 py-4 text-center">T2</th>
                      <th className="px-6 py-4 text-center">T3+</th>
                      <th className="px-6 py-4 text-center">Évolution 2025</th>
                    </tr>
                  </thead>
                  <tbody>
                    {prixData.map((prix, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        <td className="px-6 py-4 font-medium">{prix.arrondissement}</td>
                        <td className="px-6 py-4 text-center font-bold text-blue-600">{prix.studio}</td>
                        <td className="px-6 py-4 text-center font-bold text-purple-600">{prix.t2}</td>
                        <td className="px-6 py-4 text-center font-bold text-green-600">{prix.t3}</td>
                        <td className="px-6 py-4 text-center">
                          <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                            {prix.evolution}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Prix Banlieue */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Prix Banlieue Proche</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {banlieuePrix.map((ville, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 border">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">{ville.ville}</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Studio :</span>
                      <span className="font-bold text-blue-600">{ville.studio}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>T2 :</span>
                      <span className="font-bold text-purple-600">{ville.t2}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>T3 :</span>
                      <span className="font-bold text-green-600">{ville.t3}</span>
                    </div>
                    <div className="border-t pt-3 mt-3">
                      <div className="flex justify-between text-sm">
                        <span>Transport :</span>
                        <span className="font-medium">{ville.transport}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Vers Paris :</span>
                        <span className="font-medium">{ville.temps}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Négociez votre loyer avec GREGA OPEN DOOR 🎯
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Notre expertise vous fait économiser en moyenne 5-8% sur votre loyer !
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
              <a href="tel:0953376141" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors">
                📞 09 53 37 61 41
              </a>
              <a href="/contact" className="inline-block bg-white/20 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/30 transition-colors">
                ✉️ Contact Gratuit
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Questions Fréquentes</h2>
            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PrixLoyers;
