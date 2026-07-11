import { BUSINESS, SEO } from "@/lib/constants";

export function JsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SEO.siteUrl}/#website`,
        url: SEO.siteUrl,
        name: BUSINESS.name,
        description: SEO.defaultDescription,
        publisher: { "@id": `${SEO.siteUrl}/#business` },
        inLanguage: "fr-FR",
      },
      {
        "@type": ["RoofingContractor", "HomeAndConstructionBusiness"],
        "@id": `${SEO.siteUrl}/#business`,
        name: BUSINESS.name,
        alternateName: BUSINESS.legalName,
        url: SEO.siteUrl,
        telephone: BUSINESS.phoneInternational,
        email: BUSINESS.email,
        description: SEO.defaultDescription,
        slogan: BUSINESS.slogan,
        image: `${SEO.siteUrl}/og-image.jpg`,
        logo: { "@id": `${SEO.siteUrl}/#logo` },
        sameAs: BUSINESS.sameAs,
        hasMap: BUSINESS.hasMap,
        address: {
          "@type": "PostalAddress",
          streetAddress: "43 Rue de Châlons-sur-Marne",
          addressLocality: BUSINESS.address.city,
          postalCode: BUSINESS.address.postalCode,
          addressRegion: BUSINESS.address.region,
          addressCountry: BUSINESS.address.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: BUSINESS.geo.latitude,
          longitude: BUSINESS.geo.longitude,
        },
        areaServed: [
          {
            "@type": "GeoCircle",
            geoMidpoint: {
              "@type": "GeoCoordinates",
              latitude: BUSINESS.geo.latitude,
              longitude: BUSINESS.geo.longitude,
            },
            geoRadius: "150000",
          },
          { "@type": "AdministrativeArea", name: "Marne" },
          { "@type": "AdministrativeArea", name: "Aube" },
          { "@type": "AdministrativeArea", name: "Haute-Marne" },
          { "@type": "AdministrativeArea", name: "Meuse" },
          { "@type": "AdministrativeArea", name: "Ardennes" },
          { "@type": "AdministrativeArea", name: "Bas-Rhin" },
          { "@type": "AdministrativeArea", name: "Haut-Rhin" },
          { "@type": "AdministrativeArea", name: "Moselle" },
          { "@type": "AdministrativeArea", name: "Meurthe-et-Moselle" },
          { "@type": "AdministrativeArea", name: "Vosges" },
          {
            "@type": "State",
            name: "Grand Est",
            sameAs: "https://www.wikidata.org/wiki/Q18677983",
          },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: BUSINESS.googleRating.toString(),
          reviewCount: BUSINESS.googleReviewCount.toString(),
          bestRating: "5",
          worstRating: "1",
        },
        priceRange: "$$",
        currenciesAccepted: "EUR",
        paymentAccepted: "Cash, Credit Card, Bank Transfer",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services de couverture et rénovation",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Toiture",
                description:
                  "Couverture, zinguerie, nettoyage hydrofuge, démoussage, réfection complète",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Façade",
                description:
                  "Peinture extérieure, nettoyage, décapage, ravalement, crépi et enduit",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Gouttières",
                description:
                  "Habillage PVC/Alu, nettoyage, réparation, remplacement, pose neuve",
              },
            },
          ],
        },
        knowsAbout: BUSINESS.knowsAbout,
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Garantie décennale",
          name: "Assurance garantie décennale",
        },
        additionalType: "https://www.wikidata.org/wiki/Q11470729",
      },
      {
        "@type": "ImageObject",
        "@id": `${SEO.siteUrl}/#logo`,
        url: `${SEO.siteUrl}/icon.svg`,
        contentUrl: `${SEO.siteUrl}/icon.svg`,
        caption: BUSINESS.name,
        width: 200,
        height: 200,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
