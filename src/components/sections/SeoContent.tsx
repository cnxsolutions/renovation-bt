import { Container } from "@/components/ui/Container";
import { CheckCircle, MapPin, Clock, Shield, Award, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { BUSINESS } from "@/lib/constants";

const whyChalons = {
  title: "Votre couvreur à Châlons-en-Champagne",
  paragraphs: [
    "Basé à Écury-sur-Coole, à quelques minutes de Châlons-en-Champagne, Rénovation BT est votre artisan couvreur de confiance dans la Marne. Spécialiste couvreur chalons en champagne, nous intervenons rapidement pour tous vos projets.",
    "En tant que couvreur à Châlons-en-Champagne, nous connaissons parfaitement les spécificités climatiques de notre région : hivers rigoureux, étés orageux, variations de température qui sollicitent vos toitures.",
    "Notre entreprise de couverture à Châlons-en-Champagne a accompagné des centaines de propriétaires pour la rénovation, l'entretien ou la réparation de leur toiture.",
  ],
};

const services = [
  { name: "Couverture", desc: "Rénovation, réfection, remplacement de tuiles, ardoises, bac acier" },
  { name: "Zinguerie", desc: "Gouttières, solins, chéneaux, noues, habillage de rive" },
  { name: "Démoussage", desc: "Nettoyage haute pression, traitement anti-mousse, hydrofuge" },
  { name: "Charpente", desc: "Traitement préventif et curatif, renforcement, rénovation" },
  { name: "Velux", desc: "Pose et remplacement de fenêtres de toit, étanchéité garantie" },
  { name: "Urgence", desc: "Intervention rapide 24h/24 pour fuites et infiltrations" },
];

const reasons = [
  { icon: MapPin, title: "Proximité", desc: "Basés à Écury-sur-Coole, intervention sous 2h à Châlons" },
  { icon: Award, title: "+10 ans d'expérience", desc: "Une expertise solide dans la Marne" },
  { icon: Shield, title: "Garantie décennale", desc: "Tous nos travaux sont garantis 10 ans" },
  { icon: Clock, title: "Devis sous 24h", desc: "Étude gratuite et détaillée" },
];

export function SeoContent() {
  return (
    <section className="bg-white py-16">
      <Container>
        {/* Introduction */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">
            {whyChalons.title}
          </h2>
          {whyChalons.paragraphs.map((p, i) => (
            <p key={i} className="mb-4 text-lg leading-relaxed text-gray-600">
              {p}
            </p>
          ))}
          <div className="mt-8">
            <Button href="/contact" variant="primary" size="lg">
              Demander un devis gratuit
            </Button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <h3 className="mb-8 text-center text-xl font-semibold text-gray-900">
            Nos prestations de couvreur à Châlons-en-Champagne
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.name}
                className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-orange-300 hover:shadow-lg"
              >
                <h4 className="mb-2 font-bold text-gray-900">{service.name}</h4>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="rounded-2xl bg-gradient-to-br from-gray-50 to-orange-50 p-8 md:p-12">
          <h3 className="mb-8 text-center text-xl font-semibold text-gray-900">
            Pourquoi choisir Rénovation BT ?
          </h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => (
              <div key={reason.title} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange-100">
                  <reason.icon className="h-7 w-7 text-orange-500" />
                </div>
                <h4 className="mb-2 font-bold text-gray-900">{reason.title}</h4>
                <p className="text-sm text-gray-600">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl bg-orange-500 p-8 text-center text-white">
          <h3 className="mb-4 text-2xl font-bold">
            Besoin d&apos;un couvreur à Châlons-en-Champagne ?
          </h3>
          <p className="mb-6 text-white/90">
            Contactez-nous pour un devis gratuit et sans engagement
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-bold text-orange-600 transition-colors hover:bg-gray-100"
            >
              <Phone className="h-5 w-5" />
              {BUSINESS.phone}
            </a>
            <Button href="/contact" variant="secondary" size="lg" className="bg-orange-600 text-white hover:bg-orange-700">
              Formulaire de contact
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
