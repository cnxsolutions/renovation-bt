import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { BUSINESS } from "@/lib/constants";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité du site Rénovation BT.",
  alternates: { canonical: "/politique-confidentialite" },
  robots: { index: false, follow: true },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Politique de confidentialité", url: "/politique-confidentialite" },
        ]}
      />
    <section className="bg-white py-16">
      <Container>
        <div className="prose prose-gray mx-auto max-w-3xl">
          <h1>Politique de confidentialité</h1>

          <h2>Collecte des données</h2>
          <p>
            Nous collectons les données personnelles que vous nous transmettez volontairement via notre formulaire de contact :
            nom, prénom, email, téléphone, ville et message.
          </p>

          <h2>Utilisation des données</h2>
          <p>
            Vos données sont utilisées exclusivement pour :
          </p>
          <ul>
            <li>Répondre à votre demande de devis ou d&apos;information</li>
            <li>Vous recontacter par téléphone ou email</li>
            <li>Établir un devis personnalisé</li>
          </ul>

          <h2>Conservation des données</h2>
          <p>
            Vos données sont conservées pendant une durée maximale de 3 ans à compter de votre dernière demande,
            conformément à la réglementation en vigueur.
          </p>

          <h2>Partage des données</h2>
          <p>
            Vos données ne sont jamais vendues, louées ou partagées avec des tiers à des fins commerciales.
          </p>

          <h2>Vos droits</h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
          </p>
          <ul>
            <li>Droit d&apos;accès à vos données</li>
            <li>Droit de rectification</li>
            <li>Droit à l&apos;effacement</li>
            <li>Droit à la portabilité</li>
            <li>Droit d&apos;opposition au traitement</li>
          </ul>
          <p>
            Pour exercer ces droits, contactez-nous à : {BUSINESS.email}
          </p>

          <h2>Sécurité</h2>
          <p>
            Nous mettons en œuvre les mesures techniques et organisationnelles appropriées pour protéger vos données
            contre tout accès non autorisé, modification, divulgation ou destruction.
          </p>
        </div>
      </Container>
    </section>
    </>
  );
}
