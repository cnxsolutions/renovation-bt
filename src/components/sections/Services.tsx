import { Home, PaintBucket, Droplets, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { services } from "@/data/services";

const iconMap = {
  roof: Home,
  facade: PaintBucket,
  gutter: Droplets,
} as const;

export function Services() {
  return (
    <section className="bg-white py-20" id="services">
      <Container>
        <SectionHeading
          title="Nos services"
          subtitle="Des prestations complètes pour protéger et valoriser votre habitat."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <Card key={service.id} className="flex flex-col">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50">
                  <Icon className="h-7 w-7 text-orange-500" aria-hidden="true" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">{service.title}</h3>
                <ul className="mb-6 flex-1 space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-sm text-gray-600">
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-orange-500 transition-colors hover:text-orange-600"
                >
                  En savoir
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
