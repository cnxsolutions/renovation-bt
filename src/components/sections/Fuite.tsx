import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { SYMPTOMES } from "./accueil-content";
import { HORAIRES_COMPLETS } from "./business-facts";

/**
 * LA FUITE, DANS LE VOCABULAIRE DU CLIENT.
 *
 * C'est l'intention la plus telephonique du cluster, et la SERP correspondante
 * est tenue par des plombiers et des courtiers de leads faute de bonne reponse
 * de couvreur. L'accueil ne gagnera pas cette requete — elle veut une URL
 * dediee, qui n'existe pas dans ce depot — mais il doit en porter l'entree.
 *
 * CE QUE CETTE SECTION NE FAIT PAS, VOLONTAIREMENT
 *  - Elle n'annonce AUCUN delai. Ni « sous 2h », ni « sous 24h », ni
 *    « intervention rapide ». L'amplitude d'ouverture est un fait de la fiche ;
 *    un delai n'en est pas un, et rien ici ne le mesurerait.
 *  - Elle ne presente aucun symptome comme « le plus frequent » : le depot ne
 *    contient aucune statistique d'appels, et en fabriquer une serait un fait
 *    invente sur l'entreprise.
 *  - Elle ne lie vers aucune page d'urgence : `src/app/` n'en contient pas. On
 *    ne publie pas d'ancre morte. La creation d'une page dediee est la suite
 *    logique la plus rentable, hors perimetre de cette refonte.
 */
export function Fuite() {
  return (
    <section className="bg-gray-900 py-16 lg:py-20" id="fuite">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[3fr_2fr]">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Fuite de toiture à Châlons-en-Champagne : ce qu&apos;on regarde en premier
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-gray-300">
              On ne diagnostique pas une fuite au téléphone. On vient voir. Mais mettre un mot
              sur ce que vous observez fait gagner du temps à tout le monde.
            </p>

            <dl className="mt-8 space-y-6">
              {SYMPTOMES.map((symptome) => (
                <div key={symptome.constat} className="border-l-2 border-orange-500 pl-5">
                  <dt className="font-semibold text-white">{symptome.constat}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-gray-300">
                    {symptome.lecture}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-8">
              <Link
                href="/conseils/toiture-en-mauvais-etat-signes"
                className="inline-flex items-center gap-1.5 py-2 font-semibold text-orange-500 underline-offset-4 hover:underline"
              >
                Reconnaître une toiture qui fuit, signe par signe
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </p>
          </div>

          {/*
            Le point d'appel n° 2 de la page. Il arrive apres la preuve et apres
            le vocabulaire : le visiteur sait maintenant quoi dire au telephone,
            ce qui est precisement ce qui fait decrocher.
          */}
          <div className="self-start rounded-2xl border border-white/15 bg-white/5 p-8">
            <p className="text-lg font-semibold text-white">
              Décrivez ce que vous voyez, on vous dira de vive voix quand on peut passer.
            </p>
            <div className="mt-6">
              <PhoneLink
                variant="white"
                className="w-full justify-center px-6 py-4 text-lg"
              />
            </div>
            <p className="mt-3 text-sm text-gray-300">{HORAIRES_COMPLETS}</p>
            <p className="mt-4 text-sm text-gray-300">
              C&apos;est l&apos;artisan qui décroche, pas un standard.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
