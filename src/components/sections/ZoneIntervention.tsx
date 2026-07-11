import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cities, citiesWithPages, mainCities } from "@/data/cities";

export function ZoneIntervention() {
  // Trier : villes principales d'abord, puis les autres par ordre alphabétique
  const sortedCities = [...citiesWithPages].sort((a, b) => {
    const aIndex = mainCities.indexOf(a.slug);
    const bIndex = mainCities.indexOf(b.slug);
    if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
    if (aIndex !== -1) return -1;
    if (bIndex !== -1) return 1;
    return a.name.localeCompare(b.name);
  });

  return (
    <section className="bg-white py-20" id="zone">
      <Container>
        <SectionHeading
          title="Notre zone d'intervention"
          subtitle="Nous intervenons rapidement à Châlons-en-Champagne et dans toute la Marne (51)."
        />

        <div className="mb-6 flex flex-wrap justify-center gap-3">
          {/* Villes principales - plus visibles */}
          {sortedCities.map((city) => (
            <Link
              key={city.slug}
              href={`/couvreur/${city.slug}`}
              className={`inline-block rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                city.isPrimary
                  ? "border-2 border-orange-500 bg-orange-50 text-orange-700"
                  : "border border-gray-200 bg-white text-gray-700 hover:border-orange-300 hover:text-orange-600"
              }`}
            >
              {city.name}
            </Link>
          ))}
        </div>

        <p className="mt-8 text-center text-sm font-medium text-gray-500">
          Et toutes les communes environnantes de la Marne !
        </p>
      </Container>
    </section>
  );
}
