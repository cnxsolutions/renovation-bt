import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { HORAIRES_COMPLETS } from "./business-facts";

interface CTABannerProps {
  /** Titre du bloc. Rendu en `<h2>`. */
  title?: string;
  /** Ligne sous le titre. */
  subtitle?: string;
}

/**
 * Appel a l'action de bas de page, monte sur onze pages du site.
 *
 * DEUX CORRECTIONS DE FOND, QUI PROFITENT AUX ONZE PAGES
 *
 *  1. « Contactez-nous des maintenant, nous vous repondons RAPIDEMENT ! »
 *     disparait. C'est une promesse de delai deguisee, que rien ne mesure ni
 *     n'engage — exactement ce que le reste du site s'interdit. Elle est
 *     remplacee par un fait : l'amplitude d'ouverture, et la porte de sortie du
 *     dimanche.
 *  2. Le lien telephone reimplemente a la main laisse la place a
 *     `ui/PhoneLink`, qui porte deja le bon `aria-label`, le bon contraste
 *     (orange-700 sur blanc, 5,18:1) et le bon anneau de focus.
 *
 * Les props sont FACULTATIVES : sans elles, le composant rend le meme bloc
 * qu'avant sur `/realisations`, `/conseils`, `/services`, les pages ville et le
 * reste du site. Seule la page d'accueil passe son propre titre, pour que son
 * H2 porte une decision et non un intitule de rubrique.
 *
 * PAS DE « nous vous rappelons des lundi » : ce serait, a nouveau, un delai
 * garanti.
 */
export function CTABanner({ title, subtitle }: CTABannerProps) {
  return (
    <section className="py-12">
      <Container>
        <div className="rounded-2xl bg-gradient-to-r from-orange-700 to-orange-800 px-8 py-12 text-center shadow-lg sm:px-16">
          <h2 className="mb-2 text-2xl font-bold text-white sm:text-3xl">
            {title ?? "Besoin d'un devis ou d'une intervention ?"}
          </h2>
          <p className="mb-8 text-orange-50">
            {subtitle ??
              "Décrivez votre toiture au téléphone, ou laissez votre demande par écrit."}
          </p>

          {/* Le numero en chiffres, en premier et en grand. */}
          <div className="flex justify-center">
            <PhoneLink variant="white" className="px-8 py-4 text-lg" />
          </div>

          <p className="mt-4 text-sm text-orange-50">{HORAIRES_COMPLETS}</p>

          <p className="mt-6 text-sm text-orange-50">
            Le dimanche, l&apos;entreprise est fermée :{" "}
            <Link
              href="/contact"
              className="font-semibold text-white underline underline-offset-4 hover:no-underline"
            >
              laissez votre demande par le formulaire
            </Link>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}
