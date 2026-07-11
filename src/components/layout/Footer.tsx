import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock, Globe } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

const footerLinks = {
  liens: [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Réalisations", href: "/realisations" },
    { label: "Avis clients", href: "/avis" },
    { label: "À propos", href: "/a-propos" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Zingueur", href: "/services" },
    { label: "Démoussage toiture", href: "/services" },
    { label: "Nettoyage toiture", href: "/services" },
    { label: "Gouttières", href: "/services" },
    { label: "Charpente", href: "/services" },
    { label: "Velux & Fenêtres", href: "/services" },
    { label: "Urgence toiture", href: "/contact" },
    { label: "Hydrofuge", href: "/services" },
  ],
  zones: [
    { label: "Couvreur Châlons-en-Champagne", href: "/couvreur/chalons-en-champagne" },
    { label: "Couvreur Reims", href: "/couvreur/reims" },
    { label: "Couvreur Épernay", href: "/couvreur/epernay" },
    { label: "Couvreur Vitry-le-François", href: "/couvreur/vitry-le-francois" },
    { label: "Couvreur Saint-Memmie", href: "/couvreur/saint-memmie" },
    { label: "Couvreur Fagnières", href: "/couvreur/fagnieres" },
    { label: "Couvreur Mourmelon", href: "/couvreur/mourmelon-le-grand" },
    { label: "Couvreur Courtisols", href: "/couvreur/courtisols" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-900 pt-16 pb-8 text-gray-300">
      <Container>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Logo Rénovation BT - Artisan couvreur Grand Est"
                width={44}
                height={44}
                className="h-11 w-11 object-contain"
              />
              <span className="text-xl font-bold uppercase text-white">Renovation BT</span>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-gray-400">
              Votre artisan couvreur à Écury-sur-Coole, intervenant à Châlons-en-Champagne et dans toute la Marne (51). Devis et déplacement gratuits.
            </p>
            <div className="flex gap-4">
              <a
                href={BUSINESS.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-orange-500 hover:text-white"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href={BUSINESS.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-orange-500 hover:text-white"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={BUSINESS.social.google}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-orange-500 hover:text-white"
                aria-label="Google Business"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold text-white">Liens utiles</h3>
            <ul className="space-y-3">
              {footerLinks.liens.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-orange-400"
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
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-orange-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold text-white">Zones</h3>
            <ul className="space-y-3">
              {footerLinks.zones.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-orange-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-orange-400" aria-hidden="true" />
                <a href={BUSINESS.phoneHref} className="text-sm hover:text-orange-400">
                  {BUSINESS.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-orange-400" aria-hidden="true" />
                <span className="text-sm">
                  {BUSINESS.address.city}, {BUSINESS.address.postalCode}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-orange-400" aria-hidden="true" />
                <span className="text-sm">{BUSINESS.hours}</span>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="h-4 w-4 shrink-0 text-orange-400" aria-hidden="true" />
                <span className="text-sm">artisan-boisson-teddy.fr</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-sm text-gray-500">
              &copy; 2025 Rénovation BT – Tous droits réservés
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <Link href="/mentions-legales" className="hover:text-gray-300">
                Mentions légales
              </Link>
              <span aria-hidden="true">|</span>
              <Link href="/politique-confidentialite" className="hover:text-gray-300">
                Politique de confidentialité
              </Link>
              <span aria-hidden="true">|</span>
              <span>Plan du site</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
