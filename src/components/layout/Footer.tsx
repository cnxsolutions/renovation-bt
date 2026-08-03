import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock, Globe, Star } from "lucide-react";
import { BUSINESS, LEGAL } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

/**
 * Nom de domaine affiche a l'ecran : derive de BUSINESS.website, jamais ecrit
 * en dur. Un domaine code en dur a deja survecu a un changement de domaine
 * dans ce depot, et il a survecu FAUX.
 */
const displayDomain = BUSINESS.website.replace(/^https?:\/\//, "").replace(/\/$/, "");

/**
 * Les libelles de la colonne « Services » pointaient TOUS vers `/services`
 * sans ancre : sept liens internes identiques diluent la cible au lieu de la
 * renforcer. `/services` n'expose que trois sections (#toitures, #facades,
 * #gouttieres) — la liste est donc alignee sur ce qui existe reellement.
 */
const footerLinks = {
  liens: [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Tarifs", href: "/tarifs" },
    { label: "Zone d'intervention", href: "/zone-intervention" },
    { label: "Réalisations", href: "/realisations" },
    /* Pilier du cluster d'articles : c'est la page qui distribue les neuf
       conseils, donc la seule qui ait besoin d'un lien global sur le site. */
    { label: "Conseils toiture", href: "/conseils" },
    { label: "Avis clients", href: "/avis" },
    { label: "À propos", href: "/a-propos" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Toiture & couverture", href: "/services#toitures" },
    { label: "Démoussage & hydrofuge", href: "/services#toitures" },
    { label: "Ravalement de façade", href: "/services#facades" },
    { label: "Gouttières & zinguerie", href: "/services#gouttieres" },
    { label: "Urgence toiture", href: "/contact" },
  ],
  /**
   * Une seule page ville subsiste : /couvreur/chalons-en-champagne.
   * Les huit autres liens de cette colonne (Reims, Epernay, Vitry-le-Francois,
   * Saint-Memmie, Fagnieres, Mourmelon, Courtisols...) pointaient vers des URL
   * declarees en redirection 301 permanente dans next.config.ts
   * (COMMUNES_SANS_PAGE -> /zone-intervention). Garder des liens internes vers
   * des 301 gaspille le budget d'exploration et dilue le signal : on pointe
   * directement vers la destination.
   */
  zones: [
    { label: "Couvreur Châlons-en-Champagne", href: "/couvreur/chalons-en-champagne" },
    { label: "Toute la zone d'intervention", href: "/zone-intervention" },
  ],
};

/** Departements reellement desservis, affiches sous la colonne « Zones ». */
const servedDepartments = BUSINESS.departments;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 pt-16 pb-8 text-gray-300">
      <Container>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            {/*
              `displayName` : `BUSINESS.name` porte maintenant la chaine exacte
              de la fiche Google (« BOISSON Teddy | RENOVATIONBT »), destinee au
              JSON-LD. A l'ecran, c'est l'enseigne qui se lit.
            */}
            <div className="mb-3 flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt={`Logo ${BUSINESS.displayName} - Artisan couvreur dans la Marne`}
                width={44}
                height={44}
                className="h-11 w-11 object-contain"
              />
              <span className="text-xl font-bold uppercase text-white">
                {BUSINESS.displayName}
              </span>
            </div>
            {/*
              L'artisan est nomme. La fiche Google porte deja son nom ; un site
              qui ne parle que d'une enseigne laisse le visiteur face a une
              entite abstraite, et le rapprochement fiche/site perd un signal.
            */}
            <p className="mb-4 text-sm font-semibold text-orange-300">
              {BUSINESS.operatorName}, artisan couvreur
            </p>
            <p className="mb-6 text-sm leading-relaxed text-gray-400">
              Votre artisan couvreur à {BUSINESS.address.city}, intervenant à
              Châlons-en-Champagne et dans toute la Marne (51). Devis et déplacement gratuits.
            </p>
            {/*
              Aucune icone reseau social : les trois profils affiches ici
              auparavant ont ete verifies et etaient faux ou inexistants.
              BUSINESS.sameAs est volontairement vide. Le seul profil externe
              verifie est la fiche d'etablissement Google.
            */}
            <a
              href={BUSINESS.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-700 px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:border-orange-400 hover:text-orange-300"
            >
              <Star className="h-4 w-4 text-orange-400" aria-hidden="true" />
              Voir notre fiche Google
            </a>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold text-white">Liens utiles</h3>
            <ul className="space-y-3">
              {footerLinks.liens.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-orange-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold text-white">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-orange-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold text-white">Zone d&apos;intervention</h3>
            <ul className="space-y-3">
              {footerLinks.zones.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-orange-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              {servedDepartments.join(" · ")}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-orange-400" aria-hidden="true" />
                <a href={BUSINESS.phoneHref} className="text-sm hover:text-orange-300">
                  {BUSINESS.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" aria-hidden="true" />
                <span className="text-sm not-italic">
                  {BUSINESS.address.street}
                  <br />
                  {BUSINESS.address.postalCode} {BUSINESS.address.city}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-orange-400" aria-hidden="true" />
                <span className="text-sm">{BUSINESS.hours}</span>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="h-4 w-4 shrink-0 text-orange-400" aria-hidden="true" />
                <span className="text-sm">{displayDomain}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} {BUSINESS.displayName} – {BUSINESS.legalName}, SIREN{" "}
              {LEGAL.siren} – Tous droits réservés
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
              <Link href="/mentions-legales" className="hover:text-white">
                Mentions légales
              </Link>
              <span aria-hidden="true">|</span>
              <Link href="/politique-confidentialite" className="hover:text-white">
                Politique de confidentialité
              </Link>
              <span aria-hidden="true">|</span>
              {/*
                « Plan du site » etait un <span> inerte, et les deux URL
                candidates (/plan-du-site, /sitemap) renvoyaient 404. Le seul
                plan du site qui existe reellement est /sitemap.xml, genere par
                src/app/sitemap.ts.
              */}
              <a href="/sitemap.xml" className="hover:text-white">
                Plan du site
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
