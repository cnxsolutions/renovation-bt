import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { BUSINESS, LEGAL } from "@/lib/constants";
import { IMAGE_LCP } from "./accueil-content";
import {
  DEVIS_ET_DEPLACEMENT,
  DISTANCE_PHRASE,
  HORAIRES_COMPLETS,
} from "./business-facts";

/**
 * HERO — le seul <h1> du site sur cette page.
 *
 * CE QUI A ETE RETIRE, ET POURQUOI IL NE FAUT PAS LE REMETTRE
 *
 *  1. Le FOND PHOTOGRAPHIQUE (`hero-bg.webp`, 275 Ko) et son degrade
 *     `from-gray-900/95 via-gray-900/80 to-transparent`. Deux defauts en un :
 *     l'image LCP de la page etait un decor et non une preuve, et sur 412 px le
 *     tiers droit du bloc restait en photo quasi nue sous du texte blanc, donc
 *     avec un contraste non mesurable. Le fond est desormais un panneau OPAQUE
 *     (`bg-gray-900`) : le contraste du texte blanc y est de 17,8:1, quelle que
 *     soit la photo, et la priorite de chargement revient a un vrai chantier.
 *
 *  2. `van.png` (241 Ko, `loading="eager"`, masque sous 1024 px). Il consommait
 *     de la bande passante en concurrence directe avec l'element LCP pour une
 *     illustration que le visiteur mobile ne voyait meme pas.
 *
 *  3. Les quatre allegations « Devis & deplacement gratuits / Tarifs
 *     competitifs / Travail soigne et garanti / Intervention rapide ». La
 *     premiere est vraie et attestee par la fiche : elle reste. Les trois autres
 *     sont invérifiables, et « Intervention rapide » est une promesse de delai
 *     que rien ne mesure ni n'engage.
 *
 *  4. Le sur-titre « ARTISAN COUVREUR MARNE (51) », qui redisait le H1, et le
 *     paragraphe de 230 caracteres, qui repoussait les appels a l'action
 *     au-dela de la ligne de flottaison.
 *
 * CE QUI N'Y EST PAS, ET QUI ATTEND UN ARBITRAGE DU GERANT
 *
 *     « Ni tarif de nuit, ni majoration du samedi, ni supplement d'urgence »,
 *     ecrit sur `/tarifs`, est le meilleur argument anti-friction du dossier —
 *     et l'en-tete de `src/app/tarifs/page.tsx` demande explicitement que le
 *     gerant VALIDE cet engagement un par un. Tant que ce n'est pas fait, la
 *     phrase ne monte pas sur la page la plus vue du site.
 */

/** Ordre du DOM = ordre de lecture = ordre de decision. Rien ne passe devant le numero. */
export function Hero() {
  return (
    <section className="bg-gray-900 pb-12 pt-8 lg:pb-16 lg:pt-12">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* ---------------------------------------------------------------- */}
          {/*  TEXTE + APPELS A L'ACTION                                        */}
          {/* ---------------------------------------------------------------- */}
          <div>
            {/*
              LE H1 NE PORTE QUE LE SUJET DE LA PAGE — 31 caracteres.

              La signature de l'artisan vivait a l'interieur du <h1>, dans un
              <span class="block>. Le rendu etait le bon, mais le titre de
              niveau 1 pesait alors 66 caracteres et melangeait deux choses de
              nature differente : le SUJET de la page (« couvreur a
              Chalons-en-Champagne ») et l'IDENTITE de celui qui l'exerce. Un
              h1 repond a « de quoi parle cette page », pas a « qui l'ecrit ».

              La ligne d'identite est donc redevenue un paragraphe, place
              immediatement apres et strictement identique a l'oeil : memes
              classes, meme rythme vertical. Ce qu'aucun annuaire ni courtier
              de leads ne peut ecrire — le nom de la personne qui monte sur le
              toit — reste au-dessus de la ligne de flottaison.
            */}
            <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Couvreur à Châlons-en-Champagne
            </h1>
            <p className="mt-3 text-lg font-semibold text-orange-500 sm:text-xl">
              {BUSINESS.operatorName}, artisan {BUSINESS.experience}
            </p>

            {/*
              Le visiteur en detresse decide en deux secondes si la page est
              pour lui. Le symptome vient donc avant l'identite de l'entreprise.
            */}
            <p className="mt-5 max-w-lg text-base leading-relaxed text-gray-200 sm:text-lg">
              Une tache au plafond, une tuile envolée, une gouttière qui déborde&nbsp;?{" "}
              <strong className="font-semibold text-white">
                Celui qui décroche est celui qui monte sur le toit.
              </strong>
            </p>

            {/* Trois faits, tous opposables : la fiche Google, le registre, l'adresse. */}
            <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-300">
              <li>{DEVIS_ET_DEPLACEMENT}</li>
              <li aria-hidden="true">·</li>
              <li>
                {LEGAL.companyForm} immatriculé {BUSINESS.experience}
              </li>
              <li aria-hidden="true">·</li>
              <li>Établi {DISTANCE_PHRASE}</li>
            </ul>

            {/*
              CTA 1 — le numero EN CHIFFRES, pas « Nous appeler ».
              Un numero ecrit s'auto-explique, se recopie, se dicte, et il
              fonctionne sur un poste fixe ou `tel:` ne fait rien.
              `variant="white"` : orange-700 sur blanc, 5,18:1, garanti par le
              composant et non par un pari sur le fond.
            */}
            <div className="mt-7">
              <PhoneLink
                variant="white"
                className="w-full justify-center px-8 py-4 text-lg sm:w-auto"
              />
              <p className="mt-2 text-sm text-gray-300">{HORAIRES_COMPLETS}</p>
            </div>

            {/*
              CTA 2 — « Décrire mon problème par écrit » et non « Demander un
              devis ». Un devis suppose que la decision d'achat est prise ;
              decrire un probleme ne suppose rien. Blanc sur gray-900 : 17,8:1.
            */}
            <div className="mt-5">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-lg border-2 border-white/80 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 sm:w-auto"
              >
                Décrire mon problème par écrit
              </Link>
            </div>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/*  IMAGE LCP — un chantier reel, legende, hauteur reservee          */}
          {/* ---------------------------------------------------------------- */}
          <figure className="lg:justify-self-end">
            {/*
              `priority` retire le lazy-loading et emet un preload, mais Next 16
              n'ajoute PAS `fetchpriority="high"` tout seul : sans lui, Chrome
              garde la requete en priorite « Low » jusqu'a la mise en page, ce
              qui est exactement le delai de decouverte du LCP.
              Dimensions LUES dans le fichier (1536 x 1024, ratio 3:2) et
              reservees par `aspect-[3/2]`, donc aucun decalage de mise en page.
            */}
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl bg-gray-800">
              <Image
                src={IMAGE_LCP.src}
                alt={`Couvreur à Châlons-en-Champagne : réfection de toiture menée par ${BUSINESS.operatorName}`}
                width={IMAGE_LCP.width}
                height={IMAGE_LCP.height}
                priority
                fetchPriority="high"
                sizes="(min-width: 1024px) 44vw, 100vw"
                quality={80}
                className="h-full w-full object-cover"
              />
            </div>
            <figcaption className="mt-3 text-sm text-gray-300">{IMAGE_LCP.legende}</figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
