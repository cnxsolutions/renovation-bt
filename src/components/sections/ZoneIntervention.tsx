import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BUSINESS } from "@/lib/constants";
import { COMMUNES_PROCHES } from "./accueil-content";
import { DISTANCE_CENTRE_CHALONS_KM, DISTANCE_PHRASE } from "./business-facts";

/**
 * LE TERRITOIRE — et le seul lien de l'accueil vers la page ville.
 *
 * CE QUI A DISPARU : le mur de 25 pastilles, une par commune ayant une page.
 * Deux raisons, dans cet ordre.
 *
 *  1. C'etait une duplication integrale du pilier `/zone-intervention`, et une
 *     dilution : 25 liens sortants depuis la page la plus forte du site, dont
 *     un seul compte vraiment.
 *  2. Vingt-cinq cibles adjacentes de ~36 px de haut avec `gap-3` sont sous le
 *     seuil tactile. Les cinq liens restants sont a 44 px.
 *
 * C'EST ICI, ET UNE SEULE FOIS, que part le lien vers
 * `/couvreur/chalons-en-champagne`. Son ancre ne recopie PAS la requete :
 * elle nomme ce que la page cible contient et que l'accueil ne dira jamais — le
 * bati a pan de bois, la tuile plate de petit moule, le Site patrimonial
 * remarquable. C'est le dispositif anti-cannibalisation le plus concret de la
 * refonte : deux pages, deux sujets, une ancre qui dit lequel est ou.
 * (« Site patrimonial remarquable » et non « secteur sauvegarde » : c'est le
 * terme exact employe par la page cible, en vigueur depuis 2016.)
 *
 * AUCUN NOMBRE DE COMMUNES N'EST ECRIT. `src/data/cities.ts` en compte 25 avec
 * une page, pas 24 : une ancre « les 24 communes » serait dementie par la page
 * qu'elle designe. Le compte n'apporte rien, et il derive a chaque ajout.
 */
export function ZoneIntervention() {
  return (
    <section className="bg-white py-16 lg:py-20" id="zone">
      <Container>
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            À {DISTANCE_CENTRE_CHALONS_KM} km de Châlons-en-Champagne, et sur les toits du
            Châlonnais
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-700">
            Le siège est {BUSINESS.address.street}, à {BUSINESS.address.city} —{" "}
            {DISTANCE_PHRASE}. Nous nous déplaçons dans un rayon de{" "}
            {BUSINESS.serviceRadius.value} km, ce qui couvre la couronne châlonnaise, Reims,
            Épernay, Vitry-le-François et Sainte-Menehould.
          </p>

          <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-gray-600">
            Les communes limitrophes de Châlons
          </p>
          <ul className="mt-3 flex flex-wrap gap-3">
            {COMMUNES_PROCHES.map((city) => (
              <li key={city.slug}>
                <Link
                  href={`/couvreur/${city.slug}`}
                  className="inline-flex min-h-11 items-center rounded-full border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-800 transition-colors hover:border-orange-700 hover:text-orange-700"
                >
                  {city.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10 space-y-4">
            <p>
              <Link
                href="/couvreur/chalons-en-champagne"
                className="inline-flex items-start gap-1.5 py-2 font-semibold text-orange-700 underline-offset-4 hover:underline"
              >
                Couvreur à Châlons-en-Champagne : bâti à pan de bois, tuile plate de petit
                moule et Site patrimonial remarquable
                <ArrowRight className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
              </Link>
            </p>
            <p>
              <Link
                href="/zone-intervention"
                className="inline-flex items-center gap-1.5 py-2 font-semibold text-orange-700 underline-offset-4 hover:underline"
              >
                Toutes les communes où nous nous déplaçons
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
