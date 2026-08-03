/**
 * MENTIONS LEGALES — etat du droit verifie au 2026-08-03.
 *
 * Base legale des mentions rendues ici : ARTICLE 1-1 de la loi n° 2004-575 du
 * 21 juin 2004 (LCEN), dans sa redaction issue de la loi n° 2024-449 du
 * 21 mai 2024 (SREN). L'ancien article 6 III N'EXISTE PLUS — ne jamais le
 * citer, meme si des sources en ligne le font encore. Sanction : art. 1-2
 * (1 an d'emprisonnement, 75 000 € d'amende).
 *
 * INTERDITS SUR CETTE PAGE, car ce seraient des mentions FAUSSES :
 *  - toute mention « RCS » : l'art. R123-237 C. com. ne vise que les personnes
 *    immatriculees au RCS. Un entrepreneur individuel prestataire de services
 *    ne l'est pas.
 *  - toute mention « RM n° » ou « Repertoire des metiers » : ce registre a ete
 *    supprime le 01/01/2023 et remplace par le RNE.
 *  - toute reference a la norme NF Z74-501 : annulee depuis 2018.
 *  - tout lien vers la plateforme europeenne ODR (ec.europa.eu/consumers/odr) :
 *    reglement (UE) 2024/3228, fermeture definitive le 20/07/2025. Le lien
 *    pointerait vers une page morte.
 *
 * Le bloc « assurance decennale » est volontairement CONDITIONNEL et ne
 * s'affiche pas tant que LEGAL.decennale est a null. L'affichage n'est pas
 * obligatoire ici (l'art. L132-1 du code de l'artisanat exclut en son second
 * alinea les personnes soumises a l'art. L241-1 du code des assurances, donc
 * les couvreurs ; leur regime est l'attestation jointe au devis et a la
 * facture, C. assur. art. L243-2). Mais une assurance annoncee sans assureur
 * nommable est une allegation commerciale exposee a l'art. L121-2 C. conso. :
 * on n'affiche donc rien plutot qu'une approximation.
 *
 * La page reste en noindex : c'est un choix legitime, elle demeure accessible.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { BUSINESS, LEGAL } from "@/lib/constants";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site Rénovation BT : éditeur, hébergeur, identifiants d'entreprise, médiation de la consommation.",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: false, follow: true },
};

/**
 * Marqueur d'information manquante. Volontairement VISIBLE : une donnee
 * juridique absente doit se voir, jamais se deviner. Ne remplacer par une
 * valeur qu'apres verification par le gerant.
 */
function ACompleter({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded bg-amber-100 px-1.5 py-0.5 font-medium text-amber-900">
      [À COMPLÉTER : {children}]
    </span>
  );
}

const H2 = "mt-10 mb-3 text-2xl font-bold text-gray-900";
const P = "mb-4 leading-relaxed text-gray-700";
const UL = "mb-4 list-disc space-y-2 pl-6 leading-relaxed text-gray-700";

export default function MentionsLegalesPage() {
  const { mediator, decennale, host } = LEGAL;
  const hasDecennale = Boolean(decennale.insurer && decennale.policyNumber);
  const hasMediator = Boolean(mediator.name && mediator.address && mediator.website);

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
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-3 text-4xl font-bold text-gray-900">Mentions légales</h1>
            <p className="mb-8 text-sm text-gray-500">
              Informations publiées en application de l&apos;article 1-1 de la loi n° 2004-575 du
              21 juin 2004 pour la confiance dans l&apos;économie numérique, dans sa rédaction
              issue de la loi n° 2024-449 du 21 mai 2024. Dernière mise à jour : 3 août 2026.
            </p>

            {/* ------------------------------------------------ ÉDITEUR */}
            <h2 className={H2}>Éditeur du site</h2>
            <p className={P}>
              Le présent site est édité par une personne physique exerçant à titre
              professionnel.
            </p>
            <ul className={UL}>
              <li>
                <strong>Prénom et nom :</strong> {LEGAL.publicationDirector}
              </li>
              <li>
                <strong>Dénomination au registre :</strong> {BUSINESS.legalName}
              </li>
              <li>
                <strong>Forme juridique :</strong> {LEGAL.companyForm}
              </li>
              <li>
                <strong>Domicile / siège :</strong> {BUSINESS.address.street},{" "}
                {BUSINESS.address.postalCode} {BUSINESS.address.city}, France
              </li>
              <li>
                <strong>Téléphone :</strong>{" "}
                <a href={BUSINESS.phoneHref} className="text-orange-600 hover:underline">
                  {BUSINESS.phone}
                </a>
              </li>
              <li>
                <strong>Adresse électronique :</strong>{" "}
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="text-orange-600 hover:underline"
                >
                  {BUSINESS.email}
                </a>
              </li>
              <li>
                <strong>SIREN :</strong> {LEGAL.siren}
              </li>
              <li>
                <strong>SIRET (siège) :</strong> {LEGAL.siret}
              </li>
              <li>
                <strong>Immatriculation :</strong> {LEGAL.registry}
              </li>
              <li>
                <strong>Date de création :</strong> 9 septembre 2010
              </li>
              <li>
                <strong>Numéro de TVA intracommunautaire :</strong>{" "}
                {LEGAL.vatNumber ?? (
                  <ACompleter>
                    numéro de TVA intracommunautaire si l&apos;entreprise est assujettie ; si
                    elle relève de la franchise en base, indiquer à la place « TVA non
                    applicable, article 293 B du CGI »
                  </ACompleter>
                )}
              </li>
              <li>
                <strong>Directeur de la publication :</strong> {LEGAL.publicationDirector}
              </li>
            </ul>
            <p className={P}>
              L&apos;entreprise étant exploitée sous la forme d&apos;une entreprise
              individuelle, elle n&apos;est pas immatriculée au registre du commerce et des
              sociétés : l&apos;identifiant à retenir est le numéro SIREN ci-dessus.
            </p>
            <p className={P}>
              Le site est exploité sous l&apos;appellation « {BUSINESS.displayName} ». Cette
              appellation ne figure à ce jour dans aucun registre —{" "}
              <ACompleter>
                soit déclarer « {BUSINESS.displayName} » comme nom commercial ou enseigne auprès de
                l&apos;INPI / de l&apos;INSEE, soit exploiter le site sous la dénomination
                légale
              </ACompleter>
            </p>

            {/* ------------------------------------------------ HÉBERGEUR */}
            <h2 className={H2}>Hébergeur</h2>
            <ul className={UL}>
              <li>
                <strong>Dénomination :</strong> {host.name}
              </li>
              <li>
                <strong>Adresse :</strong> {host.address}
              </li>
              <li>
                <strong>Téléphone :</strong>{" "}
                {host.phone ?? (
                  <ACompleter>
                    numéro de téléphone de l&apos;hébergeur, exigé par l&apos;article 1-1 de la
                    LCEN ; à demander à Vercel Inc. ou à relever sur le contrat
                    d&apos;hébergement
                  </ACompleter>
                )}
              </li>
            </ul>

            {/* ------------------------------------------------ MÉDIATION */}
            <h2 className={H2}>Médiation de la consommation</h2>
            <p className={P}>
              Conformément aux articles L616-1 et R616-1 du code de la consommation, tout
              consommateur a le droit de recourir gratuitement à un médiateur de la
              consommation en vue de la résolution amiable d&apos;un litige qui
              l&apos;oppose à un professionnel, après avoir tenté de le résoudre directement
              auprès de ce dernier par une réclamation écrite.
            </p>
            {hasMediator ? (
              <ul className={UL}>
                <li>
                  <strong>Médiateur :</strong> {mediator.name}
                </li>
                <li>
                  <strong>Adresse :</strong> {mediator.address}
                </li>
                <li>
                  <strong>Site internet :</strong>{" "}
                  <a
                    href={mediator.website ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:underline"
                  >
                    {mediator.website}
                  </a>
                </li>
              </ul>
            ) : (
              <>
                <ul className={UL}>
                  <li>
                    <strong>Médiateur :</strong>{" "}
                    <ACompleter>nom du médiateur de la consommation</ACompleter>
                  </li>
                  <li>
                    <strong>Adresse postale :</strong>{" "}
                    <ACompleter>adresse postale du médiateur</ACompleter>
                  </li>
                  <li>
                    <strong>Site internet :</strong>{" "}
                    <ACompleter>adresse du site internet du médiateur</ACompleter>
                  </li>
                </ul>
                <p className="mb-4 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-900">
                  <strong>Note à l&apos;attention de l&apos;exploitant du site.</strong> Ces
                  trois informations ne peuvent pas être renseignées tant que
                  l&apos;entreprise n&apos;a pas adhéré à un dispositif de médiation de la
                  consommation agréé par la Commission d&apos;évaluation et de contrôle de la
                  médiation de la consommation (CECMC). Cette adhésion est obligatoire pour
                  tout professionnel en relation avec des consommateurs. L&apos;article R616-1
                  du code de la consommation impose de faire figurer ces coordonnées, ainsi
                  que l&apos;adresse du site du médiateur, « de manière visible et lisible sur
                  son site internet » : le site est donc le support expressément visé.
                  L&apos;absence de communication est sanctionnée d&apos;une amende
                  administrative pouvant atteindre 3 000 € (article L641-1 du code de la
                  consommation).
                </p>
              </>
            )}

            {/* ------------------------------ ASSURANCE (conditionnel, masqué si null) */}
            {hasDecennale && (
              <>
                <h2 className={H2}>Assurance de responsabilité décennale</h2>
                <ul className={UL}>
                  <li>
                    <strong>Assureur :</strong> {decennale.insurer}
                  </li>
                  <li>
                    <strong>Numéro de contrat :</strong> {decennale.policyNumber}
                  </li>
                  {decennale.coverage && (
                    <li>
                      <strong>Couverture géographique :</strong> {decennale.coverage}
                    </li>
                  )}
                </ul>
                <p className={P}>
                  Une attestation d&apos;assurance est jointe à chaque devis et à chaque
                  facture, conformément à l&apos;article L243-2 du code des assurances.
                </p>
              </>
            )}

            {/* ------------------------------------------------ TARIFS */}
            <h2 className={H2}>Prix des prestations</h2>
            <p className={P}>
              Les informations relatives aux prix des prestations de dépannage, de réparation
              et d&apos;entretien sont publiées sur la page{" "}
              <Link href="/tarifs" className="text-orange-600 hover:underline">
                Tarifs
              </Link>
              , en application de l&apos;arrêté du 24 janvier 2017 relatif à la publicité des
              prix des prestations de dépannage, réparation et entretien dans le secteur du
              bâtiment.
            </p>

            {/* ------------------------------------------------ FRANCE RÉNOV' */}
            <h2 className={H2}>Rénovation énergétique — service public d&apos;information</h2>
            <p className={P}>
              En application de l&apos;article L122-26 du code de la consommation, ce site
              renvoie vers le service public de la performance énergétique de l&apos;habitat
              (SPPEH), qui informe gratuitement et de manière indépendante sur les travaux de
              rénovation énergétique et les aides mobilisables :
            </p>
            <p className={P}>
              <a
                href="https://france-renov.gouv.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-orange-500 px-5 py-3 font-semibold text-white transition-colors hover:bg-orange-600"
              >
                France Rénov&apos; — france-renov.gouv.fr
              </a>
            </p>

            {/* ------------------------------------------------ PROPRIÉTÉ INTELLECTUELLE */}
            <h2 className={H2}>Propriété intellectuelle</h2>
            <p className={P}>
              L&apos;ensemble des contenus de ce site (textes, photographies, illustrations,
              logo, mise en page) est protégé par le droit d&apos;auteur. Toute reproduction,
              représentation, adaptation ou exploitation, même partielle, est interdite sans
              autorisation écrite préalable de l&apos;éditeur.
            </p>

            {/* ------------------------------------------------ DONNÉES PERSONNELLES */}
            <h2 className={H2}>Données personnelles et cookies</h2>
            <p className={P}>
              Le traitement des données personnelles collectées via le formulaire de contact,
              les durées de conservation, les destinataires ainsi que les modalités
              d&apos;exercice de vos droits sont détaillés dans la{" "}
              <Link
                href="/politique-confidentialite"
                className="text-orange-600 hover:underline"
              >
                politique de confidentialité
              </Link>
              , qui décrit également les cookies et traceurs utilisés.
            </p>

            {/* ------------------------------------------------ DROIT APPLICABLE */}
            <h2 className={H2}>Droit applicable</h2>
            <p className={P}>Le présent site est soumis au droit français.</p>
          </div>
        </Container>
      </section>
    </>
  );
}
