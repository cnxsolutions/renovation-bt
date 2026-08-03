import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/sections/CTABanner";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { serializeJsonLd } from "@/components/seo/serializeJsonLd";
import { BUSINESS, SEO } from "@/lib/constants";

/**
 * Ancien titre : « Services » — 8 caracteres, tres en dessous de la borne
 * MET-005 (30-60 sur le titre propre a la page). Il ne disait ni le metier ni
 * les prestations, et rendait « Services | Rénovation BT » dans les resultats.
 * Nouveau titre : 44 caracteres, 60 avec le gabarit du layout, et il nomme les
 * trois familles de prestations reellement decrites sur la page.
 *
 * La description ne mentionne plus la garantie decennale : LEGAL.decennale
 * (assureur, numero de police, etendue) est entierement a `null`, donc la
 * mention n'est adossee a aucune donnee verifiee. Elle reviendra le jour ou
 * l'attestation sera renseignee.
 */
export const metadata: Metadata = {
  title: "Nos services : toiture, façade et gouttières",
  description:
    "Réfection de toiture, ravalement de façade, pose et entretien de gouttières, démoussage et zinguerie. Artisan couvreur à Écury-sur-Coole (51), devis gratuit.",
  alternates: { canonical: "/services" },
};

const serviceDetails = [
  {
    id: "toitures",
    title: "Toitures",
    description:
      "Nous intervenons sur tous types de toitures pour assurer l'étanchéité et la durabilité de votre couverture.",
    features: [
      "Réfection complète ou partielle de toiture",
      "Remplacement de tuiles et ardoises",
      "Traitement hydrofuge et imperméabilisant",
      "Démoussage et nettoyage haute pression",
      "Isolation par l'extérieur (sarking)",
      "Pose de velux et fenêtres de toit",
    ],
  },
  {
    id: "facades",
    title: "Façades",
    description:
      "Redonnez un coup de neuf à votre façade grâce à nos prestations de ravalement et de nettoyage.",
    features: [
      "Ravalement de façade complet",
      "Nettoyage haute pression",
      "Peinture extérieure",
      "Crépi et enduit décoratif",
      "Traitement anti-mousse",
      "Imperméabilisation",
    ],
  },
  {
    id: "gouttieres",
    title: "Gouttières",
    description:
      "Installation, réparation et entretien de vos gouttières pour une évacuation optimale des eaux de pluie.",
    features: [
      "Pose de gouttières PVC et aluminium",
      "Habillage de débord de toit (bandeau, dessous de toit)",
      "Réparation et remplacement de descentes",
      "Nettoyage et débouchage",
      "Pose de crapaudines et grilles",
      "Zinguerie sur mesure",
    ],
  },
];

/**
 * `areaServed` etait un noeud `State` « Grand Est ». Revendiquer une region qui
 * s'etend jusqu'a Strasbourg (plus de 300 km) alors que
 * `BUSINESS.serviceRadius` vaut 60 km etait contradictoire dans le meme
 * document, et une zone invraisemblable dilue la pertinence locale au lieu de
 * l'elargir. La zone est desormais DERIVEE de `BUSINESS.departments`, comme
 * dans le JSON-LD du layout : une seule source, donc pas de derive possible.
 */
function ServiceSchemaJsonLd() {
  const areaServed = BUSINESS.departments.map((department) => ({
    "@type": "AdministrativeArea",
    // « Marne (51) » est une etiquette d'interface, pas un nom de territoire.
    name: department.replace(/\s*\(\d+\)\s*$/, ""),
  }));

  const schemas = serviceDetails.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    provider: { "@id": `${SEO.siteUrl}/#business` },
    areaServed,
    description: service.description,
    name: `${service.title} - Rénovation BT`,
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(schemas) }}
    />
  );
}

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Services", url: "/services" },
        ]}
      />
      <ServiceSchemaJsonLd />
      <section className="bg-gray-50 py-16">
        <Container>
          <SectionHeading
            title="Nos services"
            subtitle="Des prestations complètes pour protéger et valoriser votre habitat."
            as="h1"
          />

          <div className="space-y-16">
            {serviceDetails.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24 rounded-2xl bg-white p-8 shadow-sm lg:p-12"
              >
                <h2 className="mb-4 text-2xl font-bold text-gray-900">{service.title}</h2>
                <p className="mb-8 max-w-2xl text-gray-600">{service.description}</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 shrink-0 text-orange-500" aria-hidden="true" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <CTABanner />
    </>
  );
}
