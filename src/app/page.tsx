import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustIndicators } from "@/components/sections/TrustIndicators";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { ZoneIntervention } from "@/components/sections/ZoneIntervention";
import { FAQ } from "@/components/sections/FAQ";
import { CTABanner } from "@/components/sections/CTABanner";
import { SeoContent } from "@/components/sections/SeoContent";

export const metadata: Metadata = {
  title: "Couvreur Châlons-en-Champagne | Artisan Toiture, Zingueur Marne",
  description:
    "Couvreur Châlons-en-Champagne - Artisan couvreur Marne pour rénovation toiture, zinguerie, démoussage. Devis gratuit 24h.",
  keywords: [
    "couvreur chalons en champagne",
    "couvreur Marne",
    "artisan couvreur Marne",
  ],
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <SeoContent />
      <TrustIndicators />
      <Services />
      <About />
      <ZoneIntervention />
      <FAQ />
      <CTABanner />
    </>
  );
}
