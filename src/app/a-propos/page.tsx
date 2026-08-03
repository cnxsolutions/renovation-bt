import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CTABanner } from "@/components/sections/CTABanner";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { BUSINESS } from "@/lib/constants";

/**
 * Ancien titre : « À propos de Rénovation BT » — 25 caracteres, sous la borne
 * MET-005 (30-60), et il repetait l'enseigne que le gabarit du layout ajoute
 * deja (« | Rénovation BT »). Nouveau titre : 39 caracteres, 55 en pleine
 * longueur, et il porte l'anciennete, qui est le seul argument verifiable de
 * la page (creation au registre le 09/09/2010 — voir BUSINESS.foundingDate).
 *
 * Retire de la description : « Garantie décennale » (LEGAL.decennale est
 * entierement `null`, donc non verifiee) et « dans le Grand Est » (la region
 * s'etend jusqu'a Strasbourg quand BUSINESS.serviceRadius vaut 60 km).
 */
export const metadata: Metadata = {
  title: `À propos : artisan couvreur ${BUSINESS.experience}`,
  description:
    "Artisan couvreur installé à Écury-sur-Coole (51) depuis 2010. Entreprise individuelle, travail soigné, devis gratuit dans la Marne et alentour.",
  alternates: { canonical: "/a-propos" },
};

const values = [
  {
    title: "Expérience",
    /* Verifiable : immatriculation au registre national des entreprises le 09/09/2010. */
    description: `Artisan couvreur ${BUSINESS.experience} dans les métiers de la toiture et de la rénovation.`,
  },
  {
    title: "Travail soigné",
    /*
     * « Des matériaux premium » a ete retire : aucune gamme, aucun fournisseur
     * et aucun label ne vient l'etayer — c'est une affirmation de qualite
     * invérifiable, du type que le moteur seo-guard releve en CNT.
     */
    description: "Un savoir-faire artisanal et des finitions soignées, chantier après chantier.",
  },
  {
    title: "Réactivité",
    description: `Intervention dans la Marne et les départements limitrophes, dans un rayon de ${BUSINESS.serviceRadius.value} km. Devis gratuit et sans engagement.`,
  },
  {
    title: "Transparence",
    description: "Des tarifs affichés, un suivi de chantier régulier et le respect de votre budget.",
  },
];

export default function AProposPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "À propos", url: "/a-propos" },
        ]}
      />
      <section className="bg-gray-50 py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-gray-900">
              À propos de <span className="text-orange-500">Rénovation BT</span>
            </h1>
            <p className="text-lg leading-relaxed text-gray-600">
              Artisan couvreur installé à Écury-sur-Coole dans la Marne (51) {BUSINESS.experience},
              j&apos;interviens à Châlons-en-Champagne et dans un rayon de{" "}
              {BUSINESS.serviceRadius.value} km pour vos travaux de toiture, façade et
              gouttières. Mon engagement : un travail soigné, dans les délais et au juste
              prix.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="rounded-xl bg-white p-8 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-orange-500" aria-hidden="true" />
                  <h2 className="text-xl font-bold text-gray-900">{value.title}</h2>
                </div>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <CTABanner />
    </>
  );
}
