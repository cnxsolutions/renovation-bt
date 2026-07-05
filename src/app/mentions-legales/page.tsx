import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { BUSINESS } from "@/lib/constants";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Rénovation BT.",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: false, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Mentions légales", url: "/mentions-legales" },
        ]}
      />
    <section className="bg-white py-16">
      <Container>
        <div className="prose prose-gray mx-auto max-w-3xl">
          <h1>Mentions légales</h1>

          <h2>Éditeur du site</h2>
          <p>
            <strong>{BUSINESS.name}</strong>
            <br />
            Artisan couvreur
            <br />
            {BUSINESS.address.city}, {BUSINESS.address.postalCode}
            <br />
            Téléphone : {BUSINESS.phone}
            <br />
            Email : {BUSINESS.email}
          </p>

          <h2>Hébergement</h2>
          <p>
            Ce site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble du contenu de ce site (textes, images, logo) est la propriété exclusive de {BUSINESS.name} et est protégé par le droit d&apos;auteur.
            Toute reproduction, même partielle, est interdite sans autorisation préalable.
          </p>

          <h2>Données personnelles</h2>
          <p>
            Les informations recueillies via le formulaire de contact sont destinées uniquement à {BUSINESS.name} pour le traitement de votre demande.
            Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données.
            Pour exercer ce droit, contactez-nous par email.
          </p>

          <h2>Cookies</h2>
          <p>
            Ce site utilise uniquement des cookies techniques nécessaires à son fonctionnement.
            Aucun cookie publicitaire ou de suivi n&apos;est utilisé.
          </p>
        </div>
      </Container>
    </section>
    </>
  );
}
