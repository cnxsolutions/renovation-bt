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
  title: "Couvreur Châlons-en-Champagne | Artisan Toiture, Zinguerie",
  description:
    "Couvreur à Châlons-en-Champagne. Artisan couvreur pour rénovation toiture, zinguerie, démoussage et urgences. Devis gratuit, garantie décennale.",
  keywords: [
    "couvreur chalons en champagne",
    "couvreur Marne",
    "toiture chalons",
    "artisan couvreur Marne",
    "zingueur chalons",
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
