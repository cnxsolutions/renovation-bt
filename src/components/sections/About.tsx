import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { TrustIndicators } from "@/components/sections/TrustIndicators";
import { BUSINESS, LEGAL } from "@/lib/constants";
import { DISTANCE_PHRASE, HORAIRES_COMPLETS } from "./business-facts";

/**
 * L'ARTISAN.
 *
 * Une seule phrase porte cette section, et c'est la seule de tout le corpus
 * concurrent qu'aucun annuaire, aucun courtier de leads et aucune entreprise
 * remoise ne peut ecrire : l'entreprise n'a AUCUN SALARIE au registre, donc
 * celui qui repond au telephone est celui qui monte sur le toit.
 *
 * CE QUI A ETE SUPPRIME
 *  - Le placeholder gris « Photo artisan ». Un trou visible dans la page est
 *    pire que pas de bloc. La colonne image disparait ; le jour ou le gerant
 *    fournit une vraie photo — c'est l'actif unique le plus rentable a lui
 *    demander, pour une entreprise d'un seul homme — elle se remet ici, en
 *    haut de la colonne de gauche.
 *  - `text-orange-600` sur fond clair (3,56:1) au profit de `orange-700`
 *    (5,18:1), conformement a la palette du projet.
 *  - « J'interviens rapidement chez vous » : promesse de delai que rien ne
 *    mesure. Remplacee par l'amplitude d'ouverture, qui est un fait de la fiche.
 *
 * CE QUI N'Y EST PAS
 *  - Aucune note, aucun compteur d'avis, aucune capture d'ecran de la fiche.
 *    Republier ses propres avis est un avis auto-servi ; une note recopiee dans
 *    le HTML devient fausse en quelques semaines. On lie, on ne recopie pas.
 *  - Aucune mention d'assurance dans les ancres : `LEGAL.decennale` est
 *    entierement `null`, et `/a-propos` ne documente aucun assureur. Une ancre
 *    qui promet « ses assurances » promettrait la seule chose que le projet
 *    s'interdit d'affirmer.
 */

/**
 * Date de creation FORMATEE depuis `BUSINESS.foundingDate` (« 2010-09-09 »), et
 * non recopiee : c'est un fait du registre, il n'a qu'une seule source.
 */
const DATE_IMMATRICULATION = new Intl.DateTimeFormat("fr-FR", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
}).format(new Date(BUSINESS.foundingDate));

export function About() {
  return (
    <section className="bg-gray-50 py-16 lg:py-20" id="a-propos">
      <Container>
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            L&apos;artisan qui répond au téléphone est celui qui monte sur le toit
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-800">
            <strong className="font-semibold">{BUSINESS.operatorName}</strong> exploite{" "}
            {BUSINESS.displayName} sous le statut d&apos;{LEGAL.companyForm.toLowerCase()},
            immatriculé sous le SIREN {LEGAL.siren} depuis le {DATE_IMMATRICULATION}.
            L&apos;entreprise ne compte aucun salarié : le premier appel, la visite, le devis,
            le chantier et la réception, c&apos;est le même interlocuteur.
          </p>

          <p className="mt-4 leading-relaxed text-gray-700">
            Le siège est {BUSINESS.address.street}, {BUSINESS.address.postalCode}{" "}
            {BUSINESS.address.city} — {DISTANCE_PHRASE}. Le téléphone est ouvert largement :{" "}
            {HORAIRES_COMPLETS}.
          </p>

          {/* Les quatre faits verifiables, a l'endroit ou le doute surgit. */}
          <div className="mt-10">
            <TrustIndicators />
          </div>

          {/* ---------------------------------------------------------------- */}
          {/*  AVIS — un H3, deux phrases, un lien sortant. Aucun chiffre.      */}
          {/* ---------------------------------------------------------------- */}
          <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-8">
            <h3 className="text-xl font-bold text-gray-900">
              Les avis de nos clients, sur notre fiche Google
            </h3>
            <p className="mt-3 leading-relaxed text-gray-700">
              Nos clients laissent leurs avis directement sur notre fiche d&apos;établissement
              Google, là où nous ne pouvons ni les trier ni les modifier.
            </p>
            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
              <a
                href={BUSINESS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-orange-700 px-6 py-3 font-semibold text-orange-700 transition-colors hover:bg-orange-700 hover:text-white"
              >
                Lire les avis de nos clients sur Google
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
              <Link
                href="/avis"
                className="inline-flex items-center gap-1.5 py-2 font-semibold text-orange-700 underline-offset-4 hover:underline"
              >
                Comment nous recueillons les avis
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <p className="mt-8">
            <Link
              href="/a-propos"
              className="inline-flex items-center gap-1.5 py-2 font-semibold text-orange-700 underline-offset-4 hover:underline"
            >
              L&apos;histoire de l&apos;entreprise, depuis 2010
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
