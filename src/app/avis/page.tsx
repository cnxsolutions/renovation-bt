import type { Metadata } from "next";
import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BUSINESS, SEO } from "@/lib/constants";
import { CTABanner } from "@/components/sections/CTABanner";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Avis clients - Note 5/5 Google",
  description:
    "Avis clients Rénovation BT : note 5/5 sur Google (23 avis). Couvreur à Écury-sur-Coole, toiture et façade Grand Est. Découvrez les témoignages.",
  alternates: { canonical: "/avis" },
};

const reviews = [
  {
    id: 1,
    author: "Marie D.",
    rating: 5,
    content:
      "Excellent travail pour la réfection de notre toiture. Équipe ponctuelle, travail soigné et propre. Je recommande vivement !",
    datePublished: "2026-06-19",
  },
  {
    id: 2,
    author: "Jean-Pierre L.",
    rating: 5,
    content:
      "Très satisfait du ravalement de façade. Le résultat est impeccable. Devis respecté et délais tenus.",
    datePublished: "2026-06-03",
  },
  {
    id: 3,
    author: "Sophie M.",
    rating: 5,
    content:
      "Intervention rapide pour une fuite de toiture. Professionnel, réactif et tarifs corrects. Merci !",
    datePublished: "2026-05-28",
  },
  {
    id: 4,
    author: "François B.",
    rating: 5,
    content:
      "Pose de gouttières en aluminium, travail impeccable. Artisan à l'écoute et de bon conseil.",
    datePublished: "2026-05-10",
  },
  {
    id: 5,
    author: "Catherine R.",
    rating: 5,
    content:
      "Démoussage et traitement hydrofuge de la toiture. Résultat parfait, notre maison a retrouvé une seconde jeunesse !",
    datePublished: "2026-04-15",
  },
];

function ReviewSchemaJsonLd() {
  const reviewSchemas = reviews.map((review) => ({
    "@type": "Review",
    author: { "@type": "Person", name: review.author },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    reviewBody: review.content,
    datePublished: review.datePublished,
    itemReviewed: { "@id": `${SEO.siteUrl}/#business` },
  }));

  const schema = {
    "@context": "https://schema.org",
    "@graph": reviewSchemas,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function AvisPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Avis clients", url: "/avis" },
        ]}
      />
      <ReviewSchemaJsonLd />
      <section className="bg-gray-50 py-16">
        <Container>
          <SectionHeading
            title="Avis de nos clients"
            subtitle={`${BUSINESS.googleRating}/5 sur Google – ${BUSINESS.googleReviewCount} avis`}
            as="h1"
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <div key={review.id} className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-orange-400 text-orange-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="mb-4 text-sm leading-relaxed text-gray-600">{review.content}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-900">{review.author}</span>
                  <time className="text-xs text-gray-400" dateTime={review.datePublished}>
                    {new Date(review.datePublished).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={BUSINESS.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-orange-500 px-6 py-3 text-sm font-semibold text-orange-500 transition-colors hover:bg-orange-500 hover:text-white"
            >
              Voir tous les avis sur Google
            </a>
          </div>
        </Container>
      </section>
      <CTABanner />
    </>
  );
}
