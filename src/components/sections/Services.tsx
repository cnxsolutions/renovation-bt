import Link from "next/link";
import { ArrowRight, Hammer, Search, Wrench } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { INTERVENTIONS } from "./accueil-content";

/**
 * PRESTATIONS — la section qui aligne le site sur la fiche d'etablissement.
 *
 * La fiche declare trois services : Roof inspection, Roof installation, Roof
 * repair — des ACTIONS. Le site vendait « Toitures / Facades / Gouttieres » —
 * des OBJETS. Les deux taxonomies ne se recouvraient nulle part, alors que la
 * pertinence est le premier des trois facteurs de classement local cites par
 * Google. Cette section est la traduction francaise, mot pour mot, des trois
 * services de la fiche ; `src/data/services.ts` porte les memes verbes dans ses
 * `features`, et c'est cette liste-la qui alimente les pages ville.
 *
 * La zinguerie, le demoussage et la facade deviennent des sous-entrees et non
 * des piliers de rang egal : c'est la structure des concurrents qui sont, eux,
 * dans le Local Pack.
 */
const ICONES = {
  diagnostic: Search,
  reparation: Wrench,
  refection: Hammer,
} as const;

export function Services() {
  return (
    <section className="bg-white py-16 lg:py-20" id="services">
      <Container>
        <SectionHeading
          title="Diagnostic, réparation, réfection : les trois moments d'une toiture à Châlons"
          subtitle="Trois interventions distinctes, qui n'engagent ni le même travail ni le même budget."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {INTERVENTIONS.map((intervention) => {
            const Icone = ICONES[intervention.id as keyof typeof ICONES];
            return (
              <Card key={intervention.id} className="flex flex-col">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50">
                  <Icone className="h-7 w-7 text-orange-700" aria-hidden="true" />
                </div>
                {/* H3 : la section porte le H2. */}
                <h3 className="mb-3 text-xl font-bold text-gray-900">{intervention.titre}</h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-700">
                  {intervention.texte}
                </p>
                {/*
                  Aucune ancre ne porte « nos services » : chaque libelle nomme
                  ce que la page de destination contient reellement.
                */}
                <Link
                  href={intervention.href}
                  className="inline-flex items-center gap-1.5 py-2 text-sm font-semibold text-orange-700 underline-offset-4 transition-colors hover:text-orange-800 hover:underline"
                >
                  {intervention.ancre}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Card>
            );
          })}
        </div>

        <p className="mt-10 text-center text-base text-gray-700">
          Démoussage et traitement hydrofuge, nettoyage de couverture, ravalement de façade&nbsp;:{" "}
          <Link
            href="/services"
            className="font-semibold text-orange-700 underline-offset-4 hover:underline"
          >
            toutes nos prestations, du diagnostic au ravalement
          </Link>
          .
        </p>
      </Container>
    </section>
  );
}
