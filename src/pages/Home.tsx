import { useState } from 'react'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import Processus from '../components/Processus'
import Brands from '../components/Brands'
import Footer from '../components/Footer'
import SEOHead from '../components/SEOHead'

const Home = () => {
  const faqData = [
    {
      question: "Comment puis-je louer un appartement via GREGA OPEN DOOR ?",
      answer: "Contactez-nous au 09 53 37 61 41 ou via notre formulaire en ligne. Notre équipe vous accompagnera dans votre recherche et vous présentera les biens correspondant à vos critères."
    },
    {
      question: "Quels sont vos secteurs d'intervention ?",
      answer: "Nous intervenons principalement à Paris et en région parisienne. Notre expertise couvre tous les arrondissements parisiens et les principales villes d'Île-de-France."
    },
    {
      question: "Proposez-vous des services pour les propriétaires ?",
      answer: "Oui, nous proposons des services complets pour les propriétaires : estimation gratuite, gestion locative, recherche de locataires qualifiés, et accompagnement juridique."
    },
    {
      question: "Comment prendre rendez-vous pour une visite ?",
      answer: "Vous pouvez prendre rendez-vous directement via notre système Calendly en ligne, nous appeler au 09 53 37 61 41, ou nous envoyer un email à contact@gregaopendoor.fr"
    }
  ]

  const breadcrumbs = [
    { name: "Accueil", url: "https://www.gregaopendoor.fr/" }
  ]

  return (
    <>
      <SEOHead
        title="GREGA OPEN DOOR - Agence Immobilière Paris | Location, Achat, Vente"
        description="GREGA OPEN DOOR, votre agence immobilière de confiance à Paris. Spécialiste en location, achat et vente de biens immobiliers. Services personnalisés pour propriétaires et locataires. Contactez-nous au 09 53 37 61 41."
        keywords="agence immobilière Paris, location appartement Paris, achat immobilier Paris, vente immobilier, propriétaires, locataires, gestion locative, estimation immobilière, 75001, 75002, 75003, 75004, 75005, 75006, 75007, 75008"
        canonical="https://www.gregaopendoor.fr/"
        ogType="website"
        schemaType="RealEstateAgent"
        breadcrumbs={breadcrumbs}
        faq={faqData}
      />
      <main>
        <Hero />
        <Categories />
        <Processus />
        <Brands />
        <Footer />
      </main>
    </>
  )
}

export default Home