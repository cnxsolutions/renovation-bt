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
  title: "Couvreur chalons en champagne | Artisan Toiture, Zingueur Marne",
  description:
    "couvreur chalons en champagne - Artisan couvreur Marne. Rénovation toiture, zinguerie, démoussage, urgence. Devis gratuit 24h.",
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
