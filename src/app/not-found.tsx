import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/**
 * Page 404.
 *
 * Titre volontairement court (16 caracteres) et SANS `alternates.canonical` :
 * la page est servie en `index: false`, elle n'a donc aucune version de
 * reference a designer, et les bornes de longueur de titre ne s'appliquent
 * qu'aux pages destinees a etre indexees. `follow: true` est conserve pour que
 * les liens du menu et du pied de page restent explores depuis une 404.
 */
export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center justify-center bg-gray-50 py-24">
      <Container className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-orange-500">404</h1>
        <h2 className="mb-4 text-2xl font-bold text-gray-900">Page introuvable</h2>
        <p className="mb-8 text-gray-600">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Button href="/" variant="primary" size="lg">
          Retour à l&apos;accueil
        </Button>
      </Container>
    </section>
  );
}
