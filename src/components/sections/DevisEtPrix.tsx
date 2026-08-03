import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ETAPES_APRES_APPEL } from "./accueil-content";
import { DEVIS_ET_DEPLACEMENT } from "./business-facts";

/**
 * PRIX ET DEVIS — la question la plus repetee de tout le cluster.
 *
 * POURQUOI AUCUN MONTANT N'EST RECOPIE ICI. C'est la decision la plus
 * contre-intuitive de cette page, et elle est deliberee.
 *
 * Un « a partir de » affiche est un PLANCHER OPPOSABLE, pas un ordre de
 * grandeur : l'en-tete de `src/app/tarifs/page.tsx` le dit lui-meme. Le jour ou
 * la grille passe de 55 a 60 € le m² et que l'accueil affiche encore 55, la
 * page la plus vue du site contredit la page qui engage — ce qui n'est pas un
 * bug d'affichage mais une contradiction interne au sens de l'article L121-2 du
 * code de la consommation.
 *
 * La seule forme sure est une SOURCE UNIQUE, `src/data/tarifs.ts`, lue par
 * `/tarifs` ET par cette section. Elle n'existe pas encore, et sa creation
 * suppose de modifier `src/app/tarifs/page.tsx`, hors du perimetre de cette
 * refonte. Tant qu'elle n'existe pas, cette section publie donc uniquement :
 *   - ce qui vient de `src/lib/constants.ts` (`LEGAL.pricing`), qui EST la
 *     source de verite du projet ;
 *   - ce qui ne se chiffre pas et ne peut donc pas diverger : la sequence qui
 *     mene au devis ;
 *   - et un lien vers la grille, avec une ancre qui annonce ce qu'on y trouve.
 *
 * A FAIRE DES QUE LE PERIMETRE LE PERMET : extraire `TAUX_HORAIRE_TTC`,
 * `DECOMPTE_DU_TEMPS` et `GROUPES` vers `src/data/tarifs.ts`, renseigner
 * `LEGAL.pricing.hourlyRateTTC` et `timeAccountingTerms` — qui valent encore
 * `null` dans le fichier d'identite — puis faire remonter ici le taux horaire
 * et trois ou quatre prix de depart. C'est le plus gros gain encore disponible
 * sur cette page : un seul site d'artisan du corpus classe publie ses prix.
 *
 * NOTE DE VERIFICATION : le brief annonce « 31 prix publies » sur `/tarifs`.
 * Le fichier en contient 18 (3 + 3 + 5 + 3 + 3 + 1), plus le taux horaire.
 * Aucun compteur n'est donc ecrit dans les ancres ci-dessous.
 */
export function DevisEtPrix() {
  return (
    <section className="bg-white py-16 lg:py-20" id="devis">
      <Container>
        <SectionHeading
          title="Combien coûte un couvreur à Châlons-en-Champagne ?"
          subtitle="Le montant dépend de la surface et de la pente, de la couverture, de l'état de la charpente et de l'accès au chantier. Un prix moyen annoncé avant d'avoir vu le toit se révèle presque toujours faux — voici ce qui le remplace."
        />

        <div className="mx-auto max-w-4xl">
          {/* Le fait tarifaire opposable, et le seul : il vient des constantes. */}
          <p className="rounded-2xl border-2 border-orange-700 bg-orange-50 px-6 py-5 text-center text-lg font-semibold text-orange-800">
            {DEVIS_ET_DEPLACEMENT}
          </p>

          {/*
            « Ce qui se passe apres l'appel » — le bloc qui manquait a toute la
            page. Le devis gratuit etait affirme partout, la sequence n'etait
            decrite nulle part : c'est pourtant elle qui leve la friction « a
            quoi je m'engage en appelant ? ». Aucun delai, aucun fait ajoute.
          */}
          <ol className="mt-10 grid gap-6 sm:grid-cols-2">
            {ETAPES_APRES_APPEL.map((etape, index) => (
              <li
                key={etape.titre}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-orange-700 text-sm font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="mb-2 font-bold text-gray-900">{etape.titre}</h3>
                <p className="text-sm leading-relaxed text-gray-700">{etape.texte}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center sm:gap-8">
            <Link
              href="/tarifs"
              className="inline-flex items-center gap-1.5 py-2 font-semibold text-orange-700 underline-offset-4 hover:underline"
            >
              Nos prix de départ, prestation par prestation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/conseils/tarif-horaire-couvreur"
              className="inline-flex items-center gap-1.5 py-2 font-semibold text-orange-700 underline-offset-4 hover:underline"
            >
              Ce que recouvre vraiment un tarif horaire de couvreur
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
