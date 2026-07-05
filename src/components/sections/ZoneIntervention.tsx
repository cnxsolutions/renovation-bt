import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cities } from "@/data/cities";

export function ZoneIntervention() {
  return (
    <section className="bg-white py-20" id="zone">
      <Container>
        <SectionHeading
          title="Notre zone d'intervention"
          subtitle="Nous intervenons dans toutes les villes et communes du Grand Est."
        />

        <div className="flex flex-wrap justify-center gap-3">
          {cities.map((city) =>
            city.hasPage ? (
              <Link
                key={city.slug}
                href={`/couvreur/${city.slug}`}
                className="inline-block rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-orange-300 hover:text-orange-600"
              >
                {city.name}
              </Link>
            ) : (
              <span
                key={city.slug}
                className="inline-block rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700"
              >
                {city.name}
              </span>
            )
          )}
        </div>

        <p className="mt-8 text-center text-sm font-medium text-gray-500">
          Et toutes les autres communes du Grand Est !
        </p>
      </Container>
    </section>
  );
}
