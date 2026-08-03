"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu } from "lucide-react";
import { navigation } from "@/data/navigation";
import { BUSINESS } from "@/lib/constants";
import { MobileNav } from "./MobileNav";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6 lg:px-8">
        {/* Logo */}
        {/*
          `displayName` et non `name` dans tout ce bloc : `BUSINESS.name` porte
          desormais la chaine exacte de la fiche Google, pipe compris, qui est
          faite pour le JSON-LD et illisible dans un logo ou un texte alternatif.
        */}
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label={`Accueil ${BUSINESS.displayName}`}
        >
          {/*
            `priority` : le logo est au-dessus de la ligne de flottaison sur
            TOUTES les pages. Il etait en loading="lazy", donc decouvert tard.
          */}
          <Image
            src="/images/logo.png"
            alt={`Logo ${BUSINESS.displayName} - Artisan couvreur à ${BUSINESS.address.city}, Marne`}
            width={50}
            height={50}
            className="h-12 w-12 object-contain"
            priority
          />
          <div className="hidden sm:block">
            <span className="block text-base font-extrabold uppercase tracking-tight text-gray-900">
              {BUSINESS.displayName}
            </span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600">
              {BUSINESS.tagline}
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 xl:flex" aria-label="Navigation principale">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-orange-50 hover:text-orange-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA phone */}
        <div className="flex items-center gap-3">
          <a
            href={BUSINESS.phoneHref}
            className="hidden items-center gap-2 rounded-full bg-orange-700 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-orange-700/20 transition-all hover:bg-orange-800 hover:shadow-lg hover:shadow-orange-700/30 sm:inline-flex"
            aria-label={`Appeler au ${BUSINESS.phone}`}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {BUSINESS.phone}
          </a>

          {/* Mobile phone icon */}
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center justify-center rounded-full bg-orange-700 p-2.5 text-white sm:hidden"
            aria-label={`Appeler au ${BUSINESS.phone}`}
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
          </a>

          {/* Hamburger */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 xl:hidden"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
}
