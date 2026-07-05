import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CTABanner } from "@/components/sections/CTABanner";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "À propos de Rénovation BT",
  description:
    "Artisan couvreur avec +10 ans d'expérience à Écury-sur-Coole (51). Garantie décennale, travail soigné, intervention rapide dans le Grand Est.",
  alternates: { canonical: "/a-propos" },
};

const values = [
  {
    title: "Expertise",
    description: "Plus de 10 ans d'expérience dans les métiers de la toiture et de la rénovation.",
  },
  {
    title: "Qualité",
    description: "Des matériaux premium et un savoir-faire artisanal pour des résultats durables.",
  },
  {
    title: "Réactivité",
    description: "Intervention rapide dans tout le Grand Est, devis gratuit sous 24h.",
  },
  {
    title: "Transparence",
    description: "Des tarifs clairs, un suivi de chantier régulier et le respect de votre budget.",
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
              Artisan couvreur passionné, installé à Écury-sur-Coole dans la Marne (51),
              j&apos;interviens sur l&apos;ensemble du Grand Est pour vos travaux de toiture,
              façade et gouttières. Mon engagement : un travail de qualité, dans les délais
              et au juste prix.
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
