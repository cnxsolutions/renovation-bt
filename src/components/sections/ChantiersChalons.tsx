import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AvantApres, SingleImage } from "@/components/ui/AvantApres";
import { BUSINESS } from "@/lib/constants";
import { CHANTIERS } from "./accueil-content";

/**
 * LA PREUVE, EN POSITION 2.
 *
 * Cinq chantiers reels, tous a Chalons-en-Champagne, avec leurs photos
 * reellement presentes dans `public/images/`. C'est le seul actif du projet
 * qu'aucun annuaire, aucun courtier de leads et aucune entreprise remoise ne
 * peut copier — et il etait invisible depuis l'accueil.
 *
 * POURQUOI LE TITRE NE DIT PAS « CINQ AVANT/APRES »
 * Trois chantiers disposent d'une paire avant/apres ; les deux derniers n'ont
 * qu'une photo finale. Annoncer cinq comparaisons pour en montrer trois, c'est
 * publier une chaine que la section elle-meme dement au premier coup d'oeil.
 * Chaque carte annonce donc ce qu'elle contient, et rien de plus.
 *
 * DETTE TECHNIQUE ASSUMEE, HORS PERIMETRE DE CETTE REFONTE
 * `src/components/ui/AvantApres.tsx` sert des `<img>` bruts : les deux images
 * d'une paire sont dans le DOM, donc toutes deux telechargees, sans passer par
 * l'optimiseur de Next. Les huit fichiers de cette section pesent environ
 * 3,1 Mo a la source. Ils sont TOUS en `loading="lazy"` et sous la ligne de
 * flottaison, et leur hauteur est reservee par `aspect-[4/3]` — donc aucun
 * effet sur le LCP ni sur le CLS. Le passage a `next/image`, les cibles
 * tactiles a 44 px et l'ouverture par defaut sur « Après » sont a faire dans ce
 * composant, qui n'est pas dans le perimetre d'ecriture de cette refonte.
 */
export function ChantiersChalons() {
  return (
    <section className="bg-gray-50 py-16 lg:py-20" id="chantiers">
      <Container>
        <SectionHeading
          title="Réfection de toiture et zinguerie à Châlons-en-Champagne : cinq chantiers en photos"
          subtitle="Des toits de Châlons, photographiés avant et après notre passage. Ce sont nos chantiers, pas des images d'illustration."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CHANTIERS.map((chantier) => {
            const legende = `${chantier.titre} — ${chantier.ville}`;

            return (
              <article
                key={chantier.id}
                className="overflow-hidden rounded-xl bg-white shadow-sm"
              >
                {/*
                  `role="group"` + `aria-label` : sans eux, un lecteur d'ecran
                  annonce « Avant, activé » sans jamais dire de quel chantier il
                  s'agit. Le libelle nomme le chantier ET la commune.
                */}
                {chantier.avant ? (
                  <div role="group" aria-label={`Comparaison avant et après — ${legende}`}>
                    <AvantApres
                      avantSrc={chantier.avant}
                      apresSrc={chantier.apres}
                      alt={legende}
                    />
                  </div>
                ) : (
                  <SingleImage src={chantier.apres} alt={`${legende} — après travaux`} />
                )}

                <div className="p-4">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-orange-50 px-3 py-0.5 text-xs font-semibold text-orange-700">
                      {chantier.metier}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-gray-600">
                      <MapPin className="h-3 w-3" aria-hidden="true" />
                      {chantier.ville}
                    </span>
                    <span className="text-xs text-gray-500">
                      {chantier.avant ? "Avant / après" : "Après travaux"}
                    </span>
                  </div>
                  {/* H3 : la section porte le H2, chaque chantier porte un H3. */}
                  <h3 className="text-sm font-semibold text-gray-900">{chantier.titre}</h3>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center sm:gap-8">
          <Link
            href="/realisations"
            className="inline-flex items-center gap-1.5 py-2 font-semibold text-orange-700 underline-offset-4 hover:underline"
          >
            Voir les cinq chantiers, tous à Châlons-en-Champagne
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>

          {/*
            LE RENVOI VERS LA FICHE, PLACE TOT — au moment ou le visiteur vient
            de regarder le travail et se demande ce que les autres en ont pense.
            Aucune note, aucun compteur, aucune capture d'ecran : republier ses
            propres avis est un avis auto-servi, et une note recopiee devient
            fausse en quelques semaines. On tend le lien, c'est tout.
          */}
          <a
            href={BUSINESS.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 py-2 font-semibold text-orange-700 underline-offset-4 hover:underline"
          >
            Lire les avis de nos clients sur Google
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </Container>
    </section>
  );
}
