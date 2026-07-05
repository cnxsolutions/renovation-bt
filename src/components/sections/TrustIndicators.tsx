import { Users, Shield, FileText, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { trustIndicators } from "@/data/trust-indicators";

const iconMap = {
  users: Users,
  shield: Shield,
  "file-text": FileText,
  "map-pin": MapPin,
} as const;

export function TrustIndicators() {
  return (
    <section className="relative z-10 -mt-16">
      <Container>
        <div className="rounded-2xl border border-gray-100 bg-white px-6 py-8 shadow-lg lg:px-12">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {trustIndicators.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <div key={item.title} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-50">
                    <Icon className="h-6 w-6 text-orange-500" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-base font-bold text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
