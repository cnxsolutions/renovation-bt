import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

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
