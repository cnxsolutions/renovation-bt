/**
 * POLITIQUE DE CONFIDENTIALITE — RGPD art. 12 a 14, etat verifie au 2026-08-03.
 *
 * Le contenu ci-dessous decrit le traitement REELLEMENT implemente, releve dans
 * le code et non suppose :
 *  - champs collectes : src/components/forms/ContactForm.tsx (lastName,
 *    firstName, email, phone, service, city, message) ;
 *  - champs obligatoires : la validation de src/app/api/contact/route.ts rejette
 *    la requete sans firstName, lastName, email, phone, message. `service` et
 *    `city` sont donc les seuls champs facultatifs ;
 *  - destination : table `contact_submissions` d'un projet Supabase
 *    (src/lib/supabase/server.ts) ;
 *  - hebergement du site : Vercel Inc. (Etats-Unis).
 *
 * TRACEURS : verifie par recherche sur tout src/ — aucune bibliotheque de mesure
 * d'audience, aucun pixel, aucun gestionnaire de balises, aucun @vercel/analytics
 * dans package.json, et PLUS AUCUNE iframe : l'unique appel tiers du site etait
 * l'iframe google.com/maps/embed des pages ville, qui deposait des traceurs
 * Google et transmettait l'IP du visiteur des l'affichage, sans consentement
 * (art. 82 de la loi n° 78-17 du 6 janvier 1978). Elle a ete remplacee par un
 * simple lien vers la fiche d'etablissement.
 *
 * CONSEQUENCE : le site ne charge plus rien depuis un serveur tiers, donc il n'a
 * PAS besoin de banniere de consentement — elle n'aurait rien a demander. Si un
 * jour une carte integree, une video, une police distante ou un outil de mesure
 * revient, le consentement prealable redevient obligatoire et ce bloc doit etre
 * reecrit AVANT la mise en ligne.
 *
 * Base legale du formulaire : art. 6.1.b du RGPD — mesures precontractuelles
 * prises A LA DEMANDE de la personne concernee. Ce n'est ni le consentement ni
 * l'interet legitime : c'est la demande de devis elle-meme qui fonde le
 * traitement.
 *
 * Duree de conservation : 3 ans a compter du dernier contact pour un prospect,
 * conformement au referentiel CNIL « gestion des activites commerciales ».
 *
 * La page reste en noindex : choix legitime, elle demeure accessible.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { BUSINESS, LEGAL } from "@/lib/constants";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Traitement des données personnelles collectées via le formulaire de contact : finalités, base légale, durées de conservation, destinataires et exercice de vos droits.",
  alternates: { canonical: "/politique-confidentialite" },
  robots: { index: false, follow: true },
};

/** Marqueur d'information manquante — volontairement visible. */
function ACompleter({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded bg-amber-100 px-1.5 py-0.5 font-medium text-amber-900">
      [À COMPLÉTER : {children}]
    </span>
  );
}

const H2 = "mt-10 mb-3 text-2xl font-bold text-gray-900";
const H3 = "mt-6 mb-2 text-lg font-semibold text-gray-900";
const P = "mb-4 leading-relaxed text-gray-700";
const UL = "mb-4 list-disc space-y-2 pl-6 leading-relaxed text-gray-700";

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
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-3 text-4xl font-bold text-gray-900">
              Politique de confidentialité
            </h1>
            <p className="mb-8 text-sm text-gray-500">
              Information délivrée en application des articles 12 à 14 du règlement (UE)
              2016/679 (RGPD) et de la loi n° 78-17 du 6 janvier 1978 modifiée. Dernière mise
              à jour : 3 août 2026.
            </p>

            {/* ------------------------------------------ RESPONSABLE */}
            <h2 className={H2}>Responsable du traitement</h2>
            <p className={P}>
              Le responsable du traitement est {LEGAL.publicationDirector},{" "}
              {LEGAL.companyForm.toLowerCase()} exerçant sous l&apos;appellation «{" "}
              {BUSINESS.displayName} », SIREN {LEGAL.siren}, dont le siège est situé{" "}
              {BUSINESS.address.street}, {BUSINESS.address.postalCode}{" "}
              {BUSINESS.address.city}.
            </p>
            <p className={P}>
              Contact :{" "}
              <a href={`mailto:${BUSINESS.email}`} className="text-orange-600 hover:underline">
                {BUSINESS.email}
              </a>{" "}
              —{" "}
              <a href={BUSINESS.phoneHref} className="text-orange-600 hover:underline">
                {BUSINESS.phone}
              </a>
              . Les mentions d&apos;identification complètes figurent dans les{" "}
              <Link href="/mentions-legales" className="text-orange-600 hover:underline">
                mentions légales
              </Link>
              .
            </p>

            {/* ------------------------------------------ DONNÉES COLLECTÉES */}
            <h2 className={H2}>Données collectées</h2>
            <p className={P}>
              Les seules données personnelles traitées sont celles que vous saisissez
              vous-même dans le formulaire de contact. Aucune donnée n&apos;est collectée à
              votre insu, et aucune donnée n&apos;est achetée ou obtenue auprès de tiers.
            </p>
            <h3 className={H3}>Champs obligatoires</h3>
            <p className={P}>
              Nom, prénom, adresse électronique, numéro de téléphone et message. Sans eux, la
              demande ne peut pas être enregistrée ni traitée.
            </p>
            <h3 className={H3}>Champs facultatifs</h3>
            <p className={P}>
              Type de prestation souhaitée et commune du chantier. Ils servent uniquement à
              préparer une réponse plus précise ; ne pas les renseigner est sans conséquence
              sur le traitement de votre demande.
            </p>
            <p className={P}>
              Aucune donnée sensible au sens de l&apos;article 9 du RGPD n&apos;est demandée.
              Merci de ne pas en faire figurer dans le champ « message ».
            </p>

            {/* ------------------------------------------ FINALITÉS / BASE LÉGALE */}
            <h2 className={H2}>Finalités et base légale</h2>
            <ul className={UL}>
              <li>
                <strong>Répondre à votre demande et établir un devis.</strong> Base légale :
                exécution de mesures précontractuelles prises à votre demande — article 6.1.b
                du RGPD. Ce traitement ne repose pas sur votre consentement : il découle de la
                demande que vous formulez.
              </li>
              <li>
                <strong>Exécuter et suivre le chantier</strong> si votre demande aboutit à une
                commande. Base légale : exécution du contrat — article 6.1.b du RGPD.
              </li>
            </ul>
            <p className={P}>
              Vos données ne sont utilisées à aucune fin de prospection commerciale, ne sont
              ni vendues ni louées, et ne font l&apos;objet d&apos;aucune décision
              automatisée ni d&apos;aucun profilage.
            </p>

            {/* ------------------------------------------ CONSERVATION */}
            <h2 className={H2}>Durées de conservation</h2>
            <ul className={UL}>
              <li>
                <strong>Demande sans suite (prospect) :</strong> 3 ans à compter du dernier
                contact de votre part, conformément au référentiel de la CNIL relatif à la
                gestion des activités commerciales. Les données sont ensuite supprimées.
              </li>
              <li>
                <strong>Demande ayant abouti à un devis accepté ou à des travaux :</strong>{" "}
                pendant la durée de la relation contractuelle, puis pendant les délais légaux
                de conservation et de prescription applicables aux documents contractuels et
                comptables.
              </li>
            </ul>

            {/* ------------------------------------------ DESTINATAIRES */}
            <h2 className={H2}>Destinataires et sous-traitants</h2>
            <p className={P}>
              Vos données sont destinées au seul responsable du traitement. Elles sont
              hébergées et traitées techniquement par les prestataires suivants, qui agissent
              en qualité de sous-traitants au sens de l&apos;article 28 du RGPD et
              n&apos;utilisent ces données que pour fournir leur service :
            </p>
            <ul className={UL}>
              <li>
                <strong>{LEGAL.host.name}</strong> — hébergement du site internet.{" "}
                {LEGAL.host.address}
              </li>
              <li>
                <strong>Supabase</strong> — hébergement de la base de données dans laquelle
                les demandes de contact sont enregistrées. Région d&apos;hébergement :{" "}
                <ACompleter>
                  région du projet Supabase, lisible dans la console Supabase, rubrique
                  Project Settings puis General
                </ACompleter>
              </li>
            </ul>

            <h3 className={H3}>Transferts hors de l&apos;Union européenne</h3>
            <p className={P}>
              L&apos;hébergeur du site, {LEGAL.host.name}, est une société établie aux
              États-Unis ; la base de données peut également être hébergée hors de
              l&apos;Union européenne selon la région retenue. Encadrement juridique de ces
              transferts :{" "}
              <ACompleter>
                mécanisme de transfert retenu pour chaque prestataire — clauses
                contractuelles types de la Commission européenne, ou décision
                d&apos;adéquation applicable — à relever dans l&apos;accord de sous-traitance
                (DPA) signé avec Vercel Inc. et avec Supabase
              </ACompleter>
            </p>

            {/* ------------------------------------------ COOKIES */}
            <h2 className={H2}>Cookies et traceurs</h2>
            <p className={P}>
              Ce site n&apos;utilise <strong>aucun outil de mesure d&apos;audience</strong>,
              aucune régie publicitaire, aucun pixel de réseau social et aucun gestionnaire de
              balises. Aucun traceur n&apos;est déposé par le site lui-même pour vous
              identifier, vous suivre d&apos;une page à l&apos;autre ou analyser votre
              navigation. Seuls peuvent être déposés, le cas échéant, des cookies strictement
              nécessaires au fonctionnement et à la sécurité du service, qui sont dispensés de
              consentement en application de l&apos;article 82 de la loi n° 78-17 du 6 janvier
              1978.
            </p>
            <h3 className={H3}>Contenus tiers</h3>
            <p className={P}>
              <strong>Aucune page de ce site ne charge de contenu tiers.</strong> Les liens
              vers la fiche d&apos;établissement Google sont de simples liens : rien
              n&apos;est chargé depuis un autre serveur tant que vous ne cliquez pas, et
              aucune donnée n&apos;est transmise à un tiers du seul fait de votre visite.
              Par conséquent, ce site n&apos;a pas de bandeau de consentement : il
              n&apos;aurait rien à vous demander.
            </p>

            {/* ------------------------------------------ SÉCURITÉ */}
            <h2 className={H2}>Sécurité</h2>
            <p className={P}>
              Les échanges entre votre navigateur et le site sont chiffrés (HTTPS). L&apos;accès
              aux demandes enregistrées est restreint au responsable du traitement. Des
              mesures techniques et organisationnelles appropriées sont mises en œuvre pour
              protéger vos données contre la perte, l&apos;altération, la divulgation et
              l&apos;accès non autorisé.
            </p>

            {/* ------------------------------------------ DROITS */}
            <h2 className={H2}>Vos droits</h2>
            <p className={P}>
              Vous disposez, dans les conditions prévues par le RGPD, des droits suivants sur
              vos données :
            </p>
            <ul className={UL}>
              <li>droit d&apos;accès (article 15) ;</li>
              <li>droit de rectification (article 16) ;</li>
              <li>droit à l&apos;effacement (article 17) ;</li>
              <li>droit à la limitation du traitement (article 18) ;</li>
              <li>droit à la portabilité de vos données (article 20) ;</li>
              <li>
                droit de définir des directives relatives au sort de vos données après votre
                décès (article 85 de la loi n° 78-17 du 6 janvier 1978).
              </li>
            </ul>
            <p className={P}>
              Le droit d&apos;opposition de l&apos;article 21 du RGPD ne s&apos;applique pas
              aux traitements fondés sur l&apos;article 6.1.b ; vous pouvez toutefois demander
              à tout moment l&apos;effacement de votre demande de contact.
            </p>
            <h3 className={H3}>Comment les exercer</h3>
            <p className={P}>
              Adressez votre demande à{" "}
              <a href={`mailto:${BUSINESS.email}`} className="text-orange-600 hover:underline">
                {BUSINESS.email}
              </a>{" "}
              ou par courrier à {BUSINESS.address.street}, {BUSINESS.address.postalCode}{" "}
              {BUSINESS.address.city}. Une réponse vous sera apportée dans un délai d&apos;un
              mois à compter de la réception de la demande, délai qui peut être prolongé de
              deux mois en cas de demande complexe. Une preuve d&apos;identité peut vous être
              demandée en cas de doute raisonnable sur votre identité.
            </p>
            <h3 className={H3}>Réclamation</h3>
            <p className={P}>
              Si vous estimez, après nous avoir contactés, que vos droits ne sont pas
              respectés, vous pouvez introduire une réclamation auprès de la Commission
              nationale de l&apos;informatique et des libertés (CNIL) :{" "}
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline"
              >
                www.cnil.fr
              </a>
              .
            </p>

            {/* ------------------------------------------ MODIFICATIONS */}
            <h2 className={H2}>Modification de la présente politique</h2>
            <p className={P}>
              La présente politique peut être mise à jour pour tenir compte de
              l&apos;évolution du site ou de la réglementation. La date de dernière mise à
              jour figure en tête de page.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
