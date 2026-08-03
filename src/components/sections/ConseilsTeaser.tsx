import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CONSEILS_ACCUEIL } from "./accueil-content";

/**
 * LE CLUSTER EDITORIAL.
 *
 * Neuf articles existent, sources, et l'accueil n'y renvoyait pas une seule
 * fois. C'est la distribution d'autorite interne la moins chere du projet, et
 * c'est aussi une posture qu'aucun concurrent du corpus ne tient : on donne au
 * visiteur de quoi verifier par lui-meme AVANT d'appeler.
 *
 * Les intitules sont les QUESTIONS reelles portees par les articles, telles
 * qu'elles figurent dans `src/app/conseils/page.tsx`. Une ancre qui promet
 * autre chose que ce que la cible contient est une ancre qui ment, et le
 * visiteur le constate en un clic.
 *
 * Aucun compteur d'articles dans l'ancre du pilier : le cluster grandira.
 */
export function ConseilsTeaser() {
  return (
    <section className="bg-white py-16 lg:py-20" id="conseils">
      <Container>
        <SectionHeading
          title="Avant de faire refaire votre toiture : prix, signes d'usure, choix de l'artisan"
          subtitle="Trois vérifications que vous pouvez mener vous-même, sans nous appeler."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {CONSEILS_ACCUEIL.map((article) => (
            <article
              key={article.href}
              className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              {/* H3 : la section porte le H2. */}
              <h3 className="mb-3 text-lg font-bold text-gray-900">
                <Link
                  href={article.href}
                  className="underline-offset-4 hover:text-orange-700 hover:underline"
                >
                  {article.question}
                </Link>
              </h3>
              <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-700">
                {article.resume}
              </p>
              <Link
                href={article.href}
                className="inline-flex items-center gap-1.5 py-2 text-sm font-semibold text-orange-700 underline-offset-4 hover:underline"
                aria-label={`Lire l'article : ${article.question}`}
              >
                Lire l&apos;article
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center">
          <Link
            href="/conseils"
            className="inline-flex items-center gap-1.5 py-2 font-semibold text-orange-700 underline-offset-4 hover:underline"
          >
            Tous nos conseils sur la toiture
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </p>
      </Container>
    </section>
  );
}
