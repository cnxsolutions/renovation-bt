import Image from "next/image";
import { CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { BUSINESS } from "@/lib/constants";

const checkmarks = [
  "Devis & déplacement gratuits",
  "Tarifs compétitifs",
  "Travail soigné et garanti",
  "Intervention rapide",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-32 pt-12 lg:pb-40 lg:pt-16">
      {/* Background image */}
      <Image
        src="/images/hero-bg.webp"
        alt="Couvreur professionnel travaillant sur une toiture"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
        quality={85}
      />
      {/* Dark overlay - stronger on left for text */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-transparent" />

      <Container className="relative z-10">
        <div className="relative min-h-[420px] lg:min-h-[460px]">
          {/* Left - Text content */}
          <div className="relative z-10 max-w-xl">
            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
              Couvreur à Châlons-en-Champagne
              <br />
              <span className="text-orange-500">Toiture, Zinguerie, Démoussage</span>
            </h1>
            <p className="mt-2 text-xl font-semibold text-white/80 sm:text-2xl">
              Artisan couvreur dans la Marne (51)
            </p>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {checkmarks.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-white/90"
                >
                  <CheckCircle className="h-4 w-4 text-green-400" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>

            <p className="mt-6 max-w-md text-base leading-relaxed text-gray-200">
              Rénovation BT, artisan couvreur basé à Écury-sur-Coole, intervient rapidement à Châlons-en-Champagne et dans toute la Marne pour vos travaux de toiture, façade et gouttières.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/contact" variant="primary" size="lg" className="shadow-lg shadow-orange-500/25">
                Demander un devis gratuit
              </Button>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/80 bg-white/5 px-6 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white hover:text-gray-900"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Nous appeler
              </a>
            </div>
          </div>

          {/* Right - Van anchored bottom-right, wheels touching bottom */}
          <div className="pointer-events-none absolute bottom-[-2rem] right-[2%] hidden w-[45%] lg:block xl:right-[5%] xl:w-[42%]">
            <Image
              src="/images/van.png"
              alt="Camion Rénovation BT - Artisan couvreur"
              width={600}
              height={370}
              className="w-full drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
