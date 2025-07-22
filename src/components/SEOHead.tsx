import { Helmet } from 'react-helmet-async'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  ogImage?: string
  ogType?: string
  schemaType?: 'Organization' | 'LocalBusiness' | 'RealEstateAgent' | 'WebPage'
  breadcrumbs?: Array<{ name: string; url: string }>
  faq?: Array<{ question: string; answer: string }>
}

export default function SEOHead({
  title = 'GREGA OPEN DOOR - Agence Immobilière Paris | Location, Achat, Vente',
  description = 'GREGA OPEN DOOR, votre agence immobilière à Paris. Spécialiste en location, achat et vente de biens immobiliers. Services pour propriétaires et locataires. Contactez-nous au 09 53 37 61 41.',
  keywords = 'agence immobilière Paris, location appartement Paris, achat immobilier, vente immobilier, propriétaires, locataires, gestion locative, estimation immobilière',
  canonical,
  ogImage = 'https://www.gregaopendoor.fr/images/og-image.jpg',
  ogType = 'website',
  schemaType = 'RealEstateAgent',
  breadcrumbs = [],
  faq = []
}: SEOHeadProps) {
  
  const currentUrl = canonical || `https://www.gregaopendoor.fr${window.location.pathname}`
  
  // Schema.org Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "GREGA OPEN DOOR",
    "alternateName": "GREGA",
    "description": "Agence immobilière spécialisée en location, achat et vente de biens immobiliers à Paris",
    "url": "https://www.gregaopendoor.fr",
    "logo": "https://www.gregaopendoor.fr/images/logo.png",
    "image": "https://www.gregaopendoor.fr/images/og-image.jpg",
    "telephone": "+33953376141",
    "email": "contact@gregaopendoor.fr",
    "priceRange": "€€€",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "37 rue des Maturins",
      "addressLocality": "Paris",
      "postalCode": "75008",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "48.8738",
      "longitude": "2.3248"
    },
    "openingHours": [
      "Mo-Fr 09:00-18:00"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+33953376141",
      "contactType": "customer service",
      "availableLanguage": ["French"],
      "areaServed": "FR"
    },
    "sameAs": [
      "https://www.facebook.com/gregaopendoor",
      "https://www.linkedin.com/company/gregaopendoor"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services Immobiliers",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Location d'appartements",
            "description": "Service de location d'appartements et maisons à Paris"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Achat immobilier",
            "description": "Accompagnement pour l'achat de biens immobiliers"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Vente immobilière",
            "description": "Service de vente de biens immobiliers"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Gestion locative",
            "description": "Gestion complète de biens locatifs pour propriétaires"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  }

  // Schema.org WebPage
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": currentUrl,
    "inLanguage": "fr-FR",
    "isPartOf": {
      "@type": "WebSite",
      "name": "GREGA OPEN DOOR",
      "url": "https://www.gregaopendoor.fr",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.gregaopendoor.fr/recherche?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    "breadcrumb": breadcrumbs.length > 0 ? {
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": crumb.url
      }))
    } : undefined
  }

  // Schema.org FAQ
  const faqSchema = faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  } : null

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="GREGA OPEN DOOR" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content="GREGA OPEN DOOR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@gregaopendoor" />

      {/* Additional SEO */}
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="application-name" content="GREGA OPEN DOOR" />
      
      {/* Performance & Security */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Preload critical resources */}
      <link rel="preload" href="/fonts/Montserrat-Regular.woff2" as="font" type="font/woff2" crossOrigin="" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//calendly.com" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify(webPageSchema)}
      </script>

      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}

      {/* Hreflang for international */}
      <link rel="alternate" hrefLang="fr" href={currentUrl} />
      <link rel="alternate" hrefLang="x-default" href={currentUrl} />
    </Helmet>
  )
} 