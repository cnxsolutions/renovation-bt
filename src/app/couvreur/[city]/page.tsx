/**
 * Pages ville — composant de rendu UNIQUEMENT.
 *
 * Ce fichier ne contient plus une seule phrase destinee au visiteur. Tout le
 * texte vit dans `src/data/city-content/<slug>.ts`, un fichier par commune :
 * c'est ce qui permet a plusieurs redacteurs d'ecrire en parallele sans se
 * marcher dessus, et ce qui empeche un gabarit de se reinstaller ici.
 *
 * Une commune n'a de page que si DEUX conditions sont reunies : `hasPage` dans
 * `src/data/cities.ts` et un fichier dans le registre `city-content`. Sinon,
 * la route rend un 404.
 *
 * Les blocs dont les donnees sont vides ne sont pas rendus : un fichier
 * commune encore en cours de redaction ne produit ni titre orphelin ni
 * paragraphe vide.
 */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  Phone,
  MapPin,
  Clock,
  FileText,
  Building2,
  ArrowRight,
  Compass,
  ShieldCheck,
  Hammer,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { CTABanner } from "@/components/sections/CTABanner";
import { cities, citiesWithPages, type City } from "@/data/cities";
import { services } from "@/data/services";
import { getCityContent, type CityContent } from "@/data/city-content";
import { BUSINESS, SEO } from "@/lib/constants";

interface CityPageProps {
  params: Promise<{ city: string }>;
}

const hasText = (value: string) => value.trim().length > 0;

/** Genere les communes qui ont A LA FOIS `hasPage` et un fichier de contenu. */
export function generateStaticParams() {
  return citiesWithPages
    .filter((city) => getCityContent(city.slug) !== undefined)
    .map((city) => ({ city: city.slug }));
}

function resolveCity(slug: string): { city: City; content: CityContent } | null {
  const city = cities.find((c) => c.slug === slug);
  const content = getCityContent(slug);
  if (!city || !city.hasPage || !content) return null;
  return { city, content };
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city: slug } = await params;
  const resolved = resolveCity(slug);
  if (!resolved) return {};

  const { city, content } = resolved;
  const url = `/couvreur/${city.slug}`;
  const description = hasText(content.metaDescription)
    ? content.metaDescription
    : undefined;

  return {
    title: content.metaTitle,
    description,
    alternates: { canonical: url },
    /*
     * La fusion des metadonnees de Next est SUPERFICIELLE : cet objet remplace
     * entierement l'`openGraph` du layout racine. Tout ce qui n'est pas repete
     * ici est perdu — type, locale, siteName et l'image par defaut. On les
     * redeclare donc, comme le fait /zone-intervention.
     */
    openGraph: {
      type: "website",
      locale: "fr_FR",
      siteName: BUSINESS.displayName,
      title: `${content.metaTitle} | ${BUSINESS.displayName}`,
      description,
      url,
      images: [{ url: SEO.ogImage, width: 1200, height: 630 }],
    },
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const { city: slug } = await params;
  const resolved = resolveCity(slug);
  if (!resolved) notFound();

  const { city, content } = resolved;
  const pageUrl = `/couvreur/${city.slug}`;

  const [chapeau, ...introSuite] = content.intro.filter(hasText);
  const sections = content.sections.filter(
    (section) => hasText(section.titre) || section.paragraphes.some(hasText)
  );
  const bati = content.batiEtCouverture;
  const showBati =
    hasText(bati.titre) || bati.paragraphes.some(hasText) || bati.materiaux.length > 0;
  const contraintes = content.contraintes.filter((c) => hasText(c.titre) && hasText(c.texte));
  const faq = content.faq.filter((item) => hasText(item.question) && hasText(item.reponse));

  /* Les slugs voisins inconnus, ou dont la page n'existe pas, sont ignores. */
  const voisines = content.communesVoisines
    .map((voisin) => cities.find((c) => c.slug === voisin))
    .filter(
      (c): c is City =>
        c !== undefined && c.hasPage && c.slug !== city.slug && getCityContent(c.slug) !== undefined
    );

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Zone d'intervention", url: "/zone-intervention" },
          { name: content.h1, url: pageUrl },
        ]}
      />
      {faq.length > 0 && (
        <FaqJsonLd
          pageUrl={pageUrl}
          items={faq.map((item) => ({ question: item.question, answer: item.reponse }))}
        />
      )}
      {/*
        AUCUN noeud RoofingContractor ici, deliberement : l'unique entite
        entreprise du site est celle du layout, d'identifiant `/#business`,
        deja presente dans le <head> de cette page. Declarer un etablissement
        par commune fabriquerait 24 entreprises pour un seul artisan.
      */}

      {/* EN-TETE + NAP */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 text-white">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/hero-bg.webp"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
            /* `priority` seul ne suffit pas sur Next 16 : il retire bien le
               lazy-loading et emet un <link rel="preload">, mais n'ajoute
               `fetchpriority="high"` ni sur la balise ni sur le preload.
               Chrome laisse alors la requete en priorite « Low » jusqu'a ce
               que la mise en page confirme que l'image est visible. */
            fetchPriority="high"
          />
        </div>
        <Container>
          <div className="relative z-10 mx-auto max-w-5xl">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-orange-700 px-4 py-1.5 text-sm font-medium">
                <MapPin className="h-4 w-4" aria-hidden="true" /> {city.department} (
                {city.departmentCode})
              </span>
              {content.distanceKm > 0 && (
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur">
                  <Compass className="h-4 w-4 text-orange-400" aria-hidden="true" />
                  À {content.distanceKm} km de notre siège d&apos;{BUSINESS.address.city}
                </span>
              )}
            </div>

            <h1 className="mb-4 text-4xl font-extrabold sm:text-5xl lg:text-6xl">{content.h1}</h1>

            {chapeau && (
              <p className="mb-8 max-w-3xl text-lg leading-relaxed text-gray-200">{chapeau}</p>
            )}

            {/* NAP. Adresse REELLE et invariable : jamais recomposee avec le
                code postal de la commune consultee. */}
            <div className="mb-8 grid gap-4 rounded-xl bg-white/10 p-4 backdrop-blur sm:grid-cols-3">
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" aria-hidden="true" />
                <div>
                  <div className="text-xs text-white/70">Téléphone</div>
                  <a href={BUSINESS.phoneHref} className="font-semibold hover:text-orange-300">
                    {BUSINESS.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" aria-hidden="true" />
                <div>
                  <div className="text-xs text-white/70">Siège</div>
                  <address className="font-semibold not-italic">
                    {BUSINESS.address.street}
                    <br />
                    {BUSINESS.address.postalCode} {BUSINESS.address.city}
                  </address>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" aria-hidden="true" />
                <div>
                  <div className="text-xs text-white/70">Horaires</div>
                  <div className="font-semibold">{BUSINESS.hours}</div>
                  <div className="text-xs text-white/70">Fermé le dimanche</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button href="/contact" size="lg" className="shadow-lg shadow-orange-900/40">
                <FileText className="mr-2 h-5 w-5" aria-hidden="true" /> Demander un devis gratuit
              </Button>
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-8 py-4 font-semibold backdrop-blur transition-colors hover:bg-white hover:text-gray-900"
              >
                <Phone className="h-5 w-5" aria-hidden="true" /> {BUSINESS.phone}
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* BANDEAU DE REASSURANCE — faits verifiables uniquement */}
      <section className="border-b border-gray-200 bg-white py-6">
        <Container>
          <ul className="mx-auto grid max-w-5xl gap-4 text-sm text-gray-700 sm:grid-cols-3">
            <li className="flex items-center justify-center gap-2">
              <Hammer className="h-5 w-5 shrink-0 text-orange-700" aria-hidden="true" />
              Artisan couvreur depuis 2010
            </li>
            <li className="flex items-center justify-center gap-2">
              <FileText className="h-5 w-5 shrink-0 text-orange-700" aria-hidden="true" />
              Devis et déplacement gratuits
            </li>
            <li className="flex items-center justify-center gap-2">
              <ShieldCheck className="h-5 w-5 shrink-0 text-orange-700" aria-hidden="true" />
              Assurance décennale
            </li>
          </ul>
        </Container>
      </section>

      {/* OUVERTURE */}
      {introSuite.length > 0 && (
        <section className={sections.length > 0 ? "bg-white pt-14" : "bg-white py-14"}>
          <Container>
            <div className="mx-auto max-w-3xl space-y-5 text-lg leading-relaxed text-gray-700">
              {introSuite.map((paragraphe, index) => (
                <p key={`intro-${index}`}>{paragraphe}</p>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* CORPS REDIGE */}
      {sections.length > 0 && (
        <section className="bg-white py-14">
          <Container>
            <div className="mx-auto max-w-3xl divide-y divide-gray-200">
              {sections.map((section, index) => (
                <article key={`section-${index}`} className="py-8 first:pt-0 last:pb-0">
                  {hasText(section.titre) && (
                    <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
                      {section.titre}
                    </h2>
                  )}
                  <div className="space-y-4 text-gray-700">
                    {section.paragraphes.filter(hasText).map((paragraphe, i) => (
                      <p key={`section-${index}-p-${i}`} className="leading-relaxed">
                        {paragraphe}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* BATI ET COUVERTURE */}
      {showBati && (
        <section className="bg-gray-50 py-16">
          <Container>
            <div className="mx-auto max-w-3xl">
              {hasText(bati.titre) && (
                <h2 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl">{bati.titre}</h2>
              )}
              <div className="space-y-4 text-gray-700">
                {bati.paragraphes.filter(hasText).map((paragraphe, index) => (
                  <p key={`bati-${index}`} className="leading-relaxed">
                    {paragraphe}
                  </p>
                ))}
              </div>
            </div>

            {bati.materiaux.length > 0 && (
              <ul className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {bati.materiaux.map((materiau) => (
                  <li
                    key={materiau.nom}
                    className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                  >
                    <h3 className="mb-2 font-bold text-gray-900">{materiau.nom}</h3>
                    <p className="text-sm leading-relaxed text-gray-600">{materiau.texte}</p>
                  </li>
                ))}
              </ul>
            )}
          </Container>
        </section>
      )}

      {/* CONTRAINTES DE CHANTIER */}
      {contraintes.length > 0 && (
        <section className="bg-white py-16">
          <Container>
            <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 sm:text-3xl">
              Ce qu&apos;un chantier de couverture demande à {city.name}
            </h2>
            <ul className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2">
              {contraintes.map((contrainte) => (
                <li
                  key={contrainte.titre}
                  className="rounded-xl border-l-4 border-orange-700 bg-gray-50 p-6"
                >
                  <h3 className="mb-2 font-bold text-gray-900">{contrainte.titre}</h3>
                  <p className="text-sm leading-relaxed text-gray-700">{contrainte.texte}</p>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {/* PRESTATIONS — source unique : src/data/services.ts */}
      <section className="bg-gray-50 py-16">
        <Container>
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 sm:text-3xl">
            Nos prestations à {city.name}
          </h2>
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-3">
            {services.map((service) => (
              <div key={service.id} className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="mb-3 font-bold text-gray-900">{service.title}</h3>
                <ul className="mb-4 space-y-1">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 shrink-0 text-orange-700" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-orange-700 hover:text-orange-800"
                >
                  Détail de la prestation
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ PROPRE A LA COMMUNE */}
      {faq.length > 0 && (
        <section className="bg-white py-16">
          <Container>
            <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 sm:text-3xl">
              Questions fréquentes à {city.name}
            </h2>
            <div className="mx-auto max-w-3xl space-y-4">
              {faq.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-xl border border-gray-200 bg-white shadow-sm"
                >
                  <summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-left font-semibold text-gray-900 transition-colors hover:text-orange-700 [&::-webkit-details-marker]:hidden">
                    <span>{item.question}</span>
                    <span
                      className="ml-4 shrink-0 text-orange-700 transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <div className="border-t border-gray-100 px-6 pb-5 pt-4">
                    <p className="leading-relaxed text-gray-700">{item.reponse}</p>
                  </div>
                </details>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-gray-500">
              Les questions de prix, de devis et de déroulement d&apos;un chantier sont traitées
              sur la{" "}
              <Link href="/#faq" className="font-semibold text-orange-700 hover:text-orange-800">
                foire aux questions
              </Link>{" "}
              et sur la page{" "}
              <Link href="/tarifs" className="font-semibold text-orange-700 hover:text-orange-800">
                tarifs
              </Link>
              .
            </p>
          </Container>
        </section>
      )}

      {/* ADRESSE */}
      <section className="bg-gray-50 py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              Nous contacter depuis {city.name}
            </h2>
            <address className="mb-2 text-lg not-italic text-gray-800">
              <strong className="block font-bold">{BUSINESS.displayName}</strong>
              {BUSINESS.address.street}
              <br />
              {BUSINESS.address.postalCode} {BUSINESS.address.city}
            </address>
            <p className="mb-6 text-gray-600">{BUSINESS.hours} — fermé le dimanche.</p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={BUSINESS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-gray-300 px-6 py-3 font-semibold text-gray-800 transition-colors hover:border-orange-400 hover:text-orange-700"
              >
                <MapPin className="h-5 w-5" aria-hidden="true" /> Ouvrir dans Google Maps
              </a>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-gray-800"
              >
                <Phone className="h-5 w-5" aria-hidden="true" /> {BUSINESS.phone}
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* MAILLAGE */}
      <section className="bg-white py-12">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-xl font-bold text-gray-900">
              Couvreur autour de {city.name}
            </h2>
            <p className="mb-6 text-gray-600">
              Nous intervenons dans un rayon de {BUSINESS.serviceRadius.value} km autour d&apos;
              {BUSINESS.address.city}, dans la Marne et les départements limitrophes.
            </p>
            {voisines.length > 0 && (
              <ul className="mb-6 flex flex-wrap items-center justify-center gap-3">
                {voisines.map((voisine) => (
                  <li key={voisine.slug}>
                    <Link
                      href={`/couvreur/${voisine.slug}`}
                      className="inline-block rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-orange-400 hover:text-orange-700"
                    >
                      Couvreur à {voisine.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            <Button href="/zone-intervention" variant="outline">
              Voir toute la zone d&apos;intervention
            </Button>
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
