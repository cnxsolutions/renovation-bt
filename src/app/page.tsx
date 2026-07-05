import { Hero } from "@/components/sections/Hero";
import { TrustIndicators } from "@/components/sections/TrustIndicators";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { ZoneIntervention } from "@/components/sections/ZoneIntervention";
import { FAQ } from "@/components/sections/FAQ";
import { CTABanner } from "@/components/sections/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustIndicators />
      <Services />
      <About />
      <ZoneIntervention />
      <FAQ />
      <CTABanner />
    </>
  );
}
