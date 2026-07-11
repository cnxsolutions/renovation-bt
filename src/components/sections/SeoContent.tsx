import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckCircle } from "lucide-react";

const seoContent = {
  whyChalons: {
    title: "couvreur chalons en champagne : votre artisan local",
    paragraphs: [
      "Vous cherchez un couvreur chalons en champagne fiable pour votre projet de toiture ? Basé à Écury-sur-Coole, à quelques minutes de Châlons-en-Champagne, Rénovation BT est votre artisan couvreur de confiance dans la Marne.",
      "En tant que couvreur chalons en champagne, nous connaissons parfaitement les spécificités climatiques de notre région : hivers rigoureux, étés orageux, variations de température qui sollicitent vos toitures. Cette expertise locale nous permet de vous proposer des solutions adaptées.",
      "Notre entreprise de couverture à Châlons-en-Champagne a accompagné des centaines de propriétaires pour la rénovation, l'entretien ou la réparation de leur toiture. Appelez notre couvreur chalons en champagne pour un diagnostic gratuit.",
    ],
  },
  services: {
    title: "Prestations couvreur chalons en champagne",
    items: [
      "Rénovation complète de toiture en tuiles, ardoises ou bac acier",
      "Pose et réparation de zinguerie : gouttières, solins, chéneaux",
      "Nettoyage et démoussage de toiture avec traitement hydrofuge",
      "Traitement et renforcement de charpente",
      "Pose de Velux et fenêtres de toit",
      "Intervention d'urgence pour fuite de toiture 24h/24",
    ],
  },
  whyUs: {
    title: "Pourquoi choisir notre couvreur chalons en champagne ?",
    reasons: [
      { title: "Proximité", desc: "Basés à Écury-sur-Coole, nous intervenons sous 2h à Châlons" },
      { title: "Expérience", desc: "+10 ans d'expérience en couverture dans la Marne" },
      { title: "Garantie", desc: "Garantie décennale sur tous nos travaux" },
      { title: "Devis gratuit", desc: "Étude gratuite et devis détaillé sous 24h" },
    ],
  },
};

export function SeoContent() {
  return (
    <section className="bg-white py-16">
      <Container>
        {/* Why Châlons */}
        <div className="mx-auto mb-16 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            {seoContent.whyChalons.title}
          </h2>
          {seoContent.whyChalons.paragraphs.map((p, i) => (
            <p key={i} className="mb-4 leading-relaxed text-gray-600">
              {p}
            </p>
          ))}
        </div>

        {/* Services List */}
        <div className="mx-auto mb-16 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            {seoContent.services.title}
          </h2>
          <p className="mb-6 leading-relaxed text-gray-600">
            En tant que couvreur à Châlons-en-Champagne, nous vous proposons une gamme complète de
            services pour votre toiture :
          </p>
          <ul className="space-y-3">
            {seoContent.services.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Why Choose Us */}
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">
            {seoContent.whyUs.title}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {seoContent.whyUs.reasons.map((reason) => (
              <div key={reason.title} className="rounded-xl bg-gray-50 p-6 text-center">
                <h3 className="mb-2 font-bold text-orange-600">{reason.title}</h3>
                <p className="text-sm text-gray-600">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
