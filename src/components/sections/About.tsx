import { CheckCircle, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BUSINESS } from "@/lib/constants";

const advantages = [
  "Conseils personnalisés",
  "Matériaux de qualité",
  "Respect des délais et du budget",
  "Travail propre et soigné",
];

export function About() {
  return (
    <section className="bg-gray-50 py-20" id="a-propos">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-3">
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-gray-200">
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-orange-200 to-orange-100">
                <div className="text-center text-gray-500">
                  <div className="mx-auto mb-2 h-16 w-16 rounded-full bg-orange-300" />
                  <p className="text-sm font-medium">Photo artisan</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">
              À propos de <span className="text-orange-500">Rénovation BT</span>
            </h2>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Artisan couvreur basé à Écury-sur-Coole (51240), j&apos;interviens rapidement chez
              vous pour tous vos travaux de toiture, façade et gouttières.
            </p>
            <p className="mb-6 text-gray-600 leading-relaxed">
              Un seul objectif : votre satisfaction et la durabilité de votre habitat.
            </p>
            <ul className="space-y-3">
              {advantages.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-orange-500" aria-hidden="true" />
                  <span className="text-sm font-medium text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
              <div className="mb-3 flex items-center justify-center gap-2">
                <svg className="h-8 w-8" viewBox="0 0 24 24" aria-label="Google">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                <span className="text-lg font-bold text-gray-700">Google</span>
              </div>
              <p className="text-4xl font-bold text-gray-900">{BUSINESS.googleRating}/5</p>
              <div className="my-2 flex justify-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-orange-400 text-orange-400"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="mb-4 text-sm text-gray-500">{BUSINESS.googleReviewCount} avis</p>
              <a
                href={BUSINESS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg border-2 border-orange-500 px-6 py-2 text-sm font-semibold text-orange-500 transition-colors hover:bg-orange-500 hover:text-white"
              >
                Voir les avis
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
