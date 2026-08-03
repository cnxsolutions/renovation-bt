import type { Metadata } from "next";
import { ExternalLink, MessageSquare, PenLine } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BUSINESS } from "@/lib/constants";
import { CTABanner } from "@/components/sections/CTABanner";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

/**
 * Page « Avis clients ».
 *
 * CE QUI A ETE SUPPRIME LE 2026-08-03, ET POURQUOI IL NE FAUT PAS LE REMETTRE
 * ---------------------------------------------------------------------------
 * Cette page portait cinq temoignages ecrits en dur dans le code (« Marie D. »,
 * « Jean-Pierre L. », « Sophie M. », « Francois B. », « Catherine R. »), avec
 * des dates de publication inventees, republies en JSON-LD `Review`, sous un
 * titre annoncant une note et un nombre d'avis.
 *
 * Aucun de ces avis ne correspondait a un client reel. Publier de faux avis de
 * consommateurs est une pratique commerciale REPUTEE TROMPEUSE EN TOUTES
 * CIRCONSTANCES : C. conso. art. L121-4, 27° (se presenter faussement en
 * consommateur) et 28° (publier de faux avis ou de fausses recommandations).
 * « Reputee en toutes circonstances » signifie qu'aucune appreciation au cas
 * par cas n'est possible : ni le caractere « representatif » du propos, ni
 * l'accord verbal d'un client, ni une reformulation plus prudente n'en sortent.
 * Commise par un service de communication au public en ligne, l'infraction est
 * punie de 5 ans d'emprisonnement et 750 000 € d'amende (art. L132-2, dernier
 * alinea).
 *
 * S'y ajoutait l'art. L111-7-2 : aucune information n'etait donnee sur les
 * modalites de collecte, de controle et de datation des avis, ni sur les
 * motifs de refus (sanction jusqu'a 75 000 €, art. L131-4).
 *
 * La fiche Google de l'entreprise, elle, porte de vrais avis, recents et
 * verifiables. Le renvoi vers cette fiche est donc a la fois le contenu le
 * plus honnete et le plus convaincant disponible.
 *
 * SI DES AVIS SONT UN JOUR PUBLIES SUR CE SITE
 * ---------------------------------------------------------------------------
 * Aucun bloc d'avis n'est prevu ici, et c'est volontaire : ne rien publier est
 * parfaitement conforme, et une page qui renvoie vers la fiche Google n'a
 * aucune mention a porter. Le jour ou l'on publiera des avis reellement
 * collectes aupres de clients reels, et seulement ce jour-la, six mentions
 * deviendront obligatoires — decret n° 2017-1436, articles D111-10 et D111-11
 * du code de la consommation (renumerotes par le decret n° 2024-753 du
 * 07/07/2024) :
 *
 *   1. l'existence ou non d'une procedure de controle des avis (« ces
 *      temoignages ne font l'objet d'aucun controle » est une reponse
 *      conforme : l'obligation est de DIRE s'il y a un controle, pas d'en
 *      instaurer un) ;
 *   2. pour chaque avis, sa date de publication ET la date de l'experience de
 *      consommation ;
 *   3. les criteres de classement des avis, dont le classement chronologique ;
 *   4. l'existence ou non d'une contrepartie fournie en echange d'un avis ;
 *   5. le delai maximal de publication et de conservation d'un avis ;
 *   6. les motifs justifiant un refus de publication.
 *
 * Ces six mentions sont a rediger par le gerant a partir de sa pratique reelle.
 * Tant qu'elles ne sont pas ecrites, aucun avis ne doit etre publie ici.
 *
 * NE JAMAIS remettre ici : une note, un compteur d'avis, un `aggregateRating`
 * ou un noeud `Review` qui ne serait pas la reproduction fidele d'un avis
 * reellement recu, avec son auteur et sa date reels.
 */

export const metadata: Metadata = {
  title: "Avis clients : consulter nos avis Google",
  description:
    "Les avis clients de Rénovation BT sont publiés sur sa fiche Google, où chacun peut les lire et vérifier leur date. Couvreur à Écury-sur-Coole (51).",
  alternates: { canonical: "/avis" },
};

export default function AvisPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Avis clients", url: "/avis" },
        ]}
      />

      <section className="bg-gray-50 py-16">
        <Container>
          <SectionHeading
            title="Avis clients"
            subtitle="Nos avis sont publiés sur notre fiche Google, à l'endroit exact où ils ont été déposés."
            as="h1"
          />

          <div className="mx-auto max-w-3xl">
            <div className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8">
              <h2 className="text-lg font-semibold text-gray-900">
                Pourquoi aucun témoignage n&apos;est recopié sur ce site
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Un avis recopié sur le site d&apos;une entreprise n&apos;est vérifiable par
                personne : ni son auteur, ni sa date, ni même son existence. Sur notre fiche
                Google, chaque avis reste attaché au compte qui l&apos;a écrit et à sa date de
                publication, et nous n&apos;avons aucun moyen de le modifier ni de le
                supprimer. C&apos;est donc là que nous vous invitons à les lire.
              </p>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {/* Lire les avis */}
              <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-orange-50">
                  <MessageSquare className="h-5 w-5 text-orange-500" aria-hidden="true" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">Lire les avis</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                  Tous les avis reçus par {BUSINESS.displayName} sont consultables sur la fiche
                  Google de l&apos;entreprise, avec leur date et leur auteur.
                </p>
                <a
                  href={BUSINESS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
                >
                  Voir les avis sur Google
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>

              {/* Laisser un avis */}
              <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-orange-50">
                  <PenLine className="h-5 w-5 text-orange-500" aria-hidden="true" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">Laisser un avis</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                  Nous avons travaillé chez vous ? Ouvrez notre fiche Google, puis cliquez sur
                  « Rédiger un avis ». Un compte Google suffit. Aucune contrepartie
                  n&apos;est proposée en échange d&apos;un avis, et les avis critiques sont
                  les bienvenus : ce sont eux qui nous font progresser.
                </p>
                <a
                  href={BUSINESS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg border-2 border-orange-500 px-5 py-3 text-sm font-semibold text-orange-500 transition-colors hover:bg-orange-500 hover:text-white"
                >
                  Ouvrir notre fiche Google
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            <p className="mt-6 text-center text-xs leading-relaxed text-gray-500">
              Ce site ne publie aucun avis client et n&apos;affiche donc ni note ni nombre
              d&apos;avis. Les avis visibles sur Google sont collectés, datés et modérés par
              Google, en dehors de tout contrôle de {BUSINESS.displayName}.
            </p>
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
