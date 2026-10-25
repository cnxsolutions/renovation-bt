import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CTABanner } from "@/components/sections/CTABanner";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL("https://artisan-boisson-teddy.fr"),
  title: "Réparation urgente de toiture à Châlons-en-Champagne",
  description: "Réparation urgente de toiture à Châlons-en-Champagne : sécurisation, diagnostic et reprise ciblée. Contactez un couvreur local.",
  alternates: { canonical: "/reparation-urgence-toiture-chalons-champagne" },
  openGraph: {
    title: "Réparation urgente de toiture à Châlons-en-Champagne",
    description: "Fuite, tuile déplacée, zinguerie abîmée : demandez une intervention de couvreur à Châlons-en-Champagne et autour.",
    url: "https://artisan-boisson-teddy.fr/reparation-urgence-toiture-chalons-champagne",
    type: "website",
  },
};

const values = [
  {
    title: "Expérience",
    description: `Artisan couvreur ${BUSINESS.experience} dans les métiers de la toiture et de la rénovation.`,
  },
  {
    title: "Travail soigné",
    description: "Un savoir-faire artisanal et des finitions soignées, chantier après chantier.",
  },
  {
    title: "Réactivité",
    description: `Intervention autour d'Écury-sur-Coole, dans un rayon de ${BUSINESS.serviceRadius.value} km. Devis gratuit et sans engagement.`,
  },
  {
    title: "Transparence",
    description: "Des tarifs affichés, un suivi de chantier régulier et le respect de votre budget.",
  },
];

const faqItems: Array<{ question: string; answer: string }> = [
  {
    "question": "Quand faut-il appeler un couvreur pour une fuite de toiture ?",
    "answer": "Appelez dès qu’une infiltration apparaît dans les combles, sur un plafond ou près d’un conduit. Plus l’origine est contrôlée tôt, plus il est facile de limiter les dégâts sur l’isolant et les finitions."
  },
  {
    "question": "Une réparation provisoire est-elle toujours possible ?",
    "answer": "Elle dépend de l’accès, de la météo et de l’état de la couverture. Le couvreur peut parfois sécuriser une zone avant une reprise durable, mais il ne doit pas intervenir si les conditions rendent le toit dangereux."
  },
  {
    "question": "Intervenez-vous aussi pour le nettoyage et le démoussage ?",
    "answer": "Oui, lorsque l’état de la couverture le permet. Un nettoyage de toiture à Châlons-en-Champagne ou un démoussage peut être proposé après diagnostic, notamment si les mousses favorisent la stagnation d’eau."
  },
  {
    "question": "Comment demander un devis de couvreur à Châlons-en-Champagne ?",
    "answer": "Décrivez le problème, la localisation de la fuite et le type de toiture si vous le connaissez. Une photo prise depuis le sol aide à préparer le diagnostic."
  }
];
const schema = [{"@context":"https://schema.org","@type":"HomeAndConstructionBusiness","name":"Artisan boisson teddy","url":"https://artisan-boisson-teddy.fr","areaServed":[{"@type":"City","name":"Châlons-en-Champagne"},{"@type":"City","name":"Saint-Memmie"},{"@type":"City","name":"Fagnières"},{"@type":"City","name":"Sarry"},{"@type":"City","name":"Compertrix"},{"@type":"City","name":"Recy"},{"@type":"City","name":"Coolus"}],"makesOffer":[{"@type":"Offer","itemOffered":{"@type":"Service","name":"Réparation de toiture"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Zinguerie"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Nettoyage et démoussage de toiture"}}]},{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Accueil","item":"https://artisan-boisson-teddy.fr"},{"@type":"ListItem","position":2,"name":"Couvreur à Châlons-en-Champagne","item":"https://artisan-boisson-teddy.fr/couvreur/chalons-en-champagne"},{"@type":"ListItem","position":3,"name":"Réparation urgente de toiture à Châlons-en-Champagne","item":"https://artisan-boisson-teddy.fr/reparation-urgence-toiture-chalons-champagne"}]},{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Quand faut-il appeler un couvreur pour une fuite de toiture ?","acceptedAnswer":{"@type":"Answer","text":"Appelez dès qu’une infiltration apparaît dans les combles, sur un plafond ou près d’un conduit. Plus l’origine est contrôlée tôt, plus il est facile de limiter les dégâts sur l’isolant et les finitions."}},{"@type":"Question","name":"Une réparation provisoire est-elle toujours possible ?","acceptedAnswer":{"@type":"Answer","text":"Elle dépend de l’accès, de la météo et de l’état de la couverture. Le couvreur peut parfois sécuriser une zone avant une reprise durable, mais il ne doit pas intervenir si les conditions rendent le toit dangereux."}},{"@type":"Question","name":"Intervenez-vous aussi pour le nettoyage et le démoussage ?","acceptedAnswer":{"@type":"Answer","text":"Oui, lorsque l’état de la couverture le permet. Un nettoyage de toiture à Châlons-en-Champagne ou un démoussage peut être proposé après diagnostic, notamment si les mousses favorisent la stagnation d’eau."}},{"@type":"Question","name":"Comment demander un devis de couvreur à Châlons-en-Champagne ?","acceptedAnswer":{"@type":"Answer","text":"Décrivez le problème, la localisation de la fuite et le type de toiture si vous le connaissez. Une photo prise depuis le sol aide à préparer le diagnostic."}}]}];

export default function ReparationUrgenceToitureChalonsChampagnePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Réparation urgente de toiture à Châlons-en-Champagne", url: "/reparation-urgence-toiture-chalons-champagne" },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {faqItems.length > 0 ? <FaqJsonLd items={faqItems} /> : null}

      <section className="bg-gray-50 py-16">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary">
              Rénovation BT
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Réparation urgente de toiture à Châlons-en-Champagne
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Réparation urgente de toiture à Châlons-en-Champagne : sécurisation, diagnostic et reprise ciblée. Contactez un couvreur local.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
              >
                <CheckCircle className="mb-4 h-8 w-8 text-primary" aria-hidden="true" />
                <h2 className="mb-3 text-xl font-semibold text-gray-900">{value.title}</h2>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <div className="prose prose-lg mx-auto max-w-4xl prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-primary prose-strong:text-gray-900">
            <div dangerouslySetInnerHTML={{ __html: "<p class=\"reponse-directe\">Pour une réparation urgente de toiture à Châlons-en-Champagne, Artisan boisson teddy évalue la fuite, sécurise la zone accessible et propose une reprise adaptée : tuile déplacée, ardoise cassée, faîtage, solin, gouttière ou élément de zinguerie. La demande se fait par contact direct pour organiser l’intervention selon la situation sur place.</p><section class=\"hero\"><p>Une infiltration ne se traite pas comme un chantier prévu longtemps à l’avance. Le premier objectif est de limiter l’entrée d’eau, puis d’identifier l’origine réelle du problème. Pour expliquer votre situation, utilisez le formulaire de <a href=\"/contact\">contact</a> et joignez, si possible, une photo prise depuis un endroit sûr.</p><p><a class=\"cta\" href=\"/contact\">Nous contacter</a></p></section><section class=\"local_info\"><h2>Réparation de toiture en urgence à Châlons-en-Champagne</h2><p>À Châlons-en-Champagne, les toitures peuvent subir des déplacements de tuiles, des raccords de zinguerie fatigués ou des infiltrations près d’une cheminée. En secteur 51000, la circulation, le stationnement et l’accès à la couverture influencent la préparation de l’intervention. Nous commençons par comprendre où l’eau apparaît dans le logement, puis nous vérifions les points sensibles accessibles sans prise de risque inutile.</p></section><section class=\"services\"><h2>Quels signes imposent une intervention immédiate ?</h2><p>Une intervention rapide devient nécessaire quand l’eau entre dans les combles, marque un plafond ou ruisselle près d’un mur. Une tuile manquante, une ardoise cassée ou une gouttière arrachée peut aussi exposer l’isolant et la charpente.</p><ul><li>Trace humide qui s’agrandit après une pluie ou un coup de vent.</li><li>Élément de couverture visible au sol ou déplacé sur le toit.</li><li>Débordement anormal d’une gouttière ou naissance bouchée.</li><li>Solin, noue ou rive qui laisse passer l’eau.</li></ul><p>Selon le diagnostic, la prestation peut porter sur une réparation de toiture à Châlons-en-Champagne, une reprise de zinguerie, un nettoyage localisé ou une protection provisoire avant travaux plus complets. Pour une rénovation plus large, consultez aussi la <a href=\"/renovation-complete-toiture-chalons-champagne\">rénovation complète de toiture à Châlons-en-Champagne</a>.</p><p><a class=\"cta\" href=\"/contact\">Nous contacter</a></p></section><section class=\"areas_served\"><h2>Zones desservies rapidement autour de Châlons-en-Champagne</h2><p>Les demandes sont organisées selon la nature du problème, l’accès au toit et les conditions météo. Chaque commune voisine présente ses contraintes : stationnement, hauteur de bâtiment, accès par cour ou présence de dépendances.</p><h3>Saint-Memmie, Fagnières, Sarry</h3><p>À Saint-Memmie, les interventions concernent souvent des maisons proches de Châlons-en-Champagne, avec accès rapide depuis les axes urbains. À Fagnières, les couvertures pavillonnaires demandent une vérification attentive des rives et gouttières. À Sarry, l’exposition au vent peut révéler des tuiles mal tenues.</p><h3>Compertrix, Recy, Coolus</h3><p>À Compertrix, l’approche dépend souvent de l’accès aux façades. À Recy, les raccords de zinguerie et évacuations d’eau méritent une observation précise. À Coolus, les dépendances et extensions imposent parfois de contrôler plusieurs pans de toiture.</p></section><section class=\"local_info\"><h2>Comment sécuriser la toiture avant l’arrivée du couvreur ?</h2><p>Restez à l’intérieur ou au sol : monter sur une couverture mouillée expose à une chute. Déplacez les objets sous la fuite, placez un récipient si l’eau goutte et coupez l’alimentation électrique de la zone concernée en cas de doute. <a href=\"https://www.service-public.fr\" target=\"_blank\" rel=\"noopener noreferrer\" title=\"Source officielle pour orienter le lecteur vers les informations administratives générales liées aux travaux sur un bâtiment.\">Les démarches administratives liées à certains travaux extérieurs</a> peuvent varier ; les informations générales sont disponibles sur <a href=\"https://www.service-public.fr\" target=\"_blank\" rel=\"noopener\">les démarches administratives liées à certains travaux extérieurs</a>.</p></section><section class=\"testimonials\"><h2>Avis, disponibilité et prise de rendez-vous rapide</h2><p>Aucun avis Google vérifié n’a été fourni pour être cité ici. Nos engagements restent simples : répondre avec des informations exploitables, expliquer ce qui peut être réparé immédiatement et distinguer une reprise ponctuelle d’un chantier de rénovation. Vous pouvez consulter la page <a href=\"/avis\">avis</a> si elle est disponible sur le site.</p></section><section class=\"faq\"><h2>FAQ sur les réparations d’urgence</h2><h3>Quand faut-il appeler un couvreur pour une fuite de toiture ?</h3><p>Appelez dès qu’une infiltration apparaît dans les combles, sur un plafond ou près d’un conduit. Plus l’origine est contrôlée tôt, plus il est facile de limiter les dégâts sur l’isolant et les finitions.</p><h3>Une réparation provisoire est-elle toujours possible ?</h3><p>Elle dépend de l’accès, de la météo et de l’état de la couverture. Le couvreur peut parfois sécuriser une zone avant une reprise durable, mais il ne doit pas intervenir si les conditions rendent le toit dangereux.</p><h3>Intervenez-vous aussi pour le nettoyage et le démoussage ?</h3><p>Oui, lorsque l’état de la couverture le permet. Un nettoyage de toiture à Châlons-en-Champagne ou un démoussage peut être proposé après diagnostic, notamment si les mousses favorisent la stagnation d’eau.</p><h3>Comment demander un devis de couvreur à Châlons-en-Champagne ?</h3><p>Décrivez le problème, la localisation de la fuite et le type de toiture si vous le connaissez. Une photo prise depuis le sol aide à préparer le diagnostic. Vous pouvez aussi consulter la page <a href=\"/couvreur/chalons-en-champagne\">couvreur à Châlons-en-Champagne</a>.</p></section><p class=\"page-auteur\">Publié par Artisan boisson teddy — mis à jour le <time datetime=\"2026-10-25\">25 octobre 2026</time></p>\n<nav class=\"related-pages\" aria-label=\"Pages associées\">\n  <h3>À lire également</h3>\n  <ul>\n    <li><a href=\"https://artisan-boisson-teddy.fr/renovation-complete-toiture-chalons-champagne\">Rénovation complète de toiture à Châlons-en-Champagne</a></li>\n    <li><a href=\"https://artisan-boisson-teddy.fr/couvreur-marne-toiture-chalons-champagne\">Couvreur Marne pour travaux de toiture à Châlons-en-Champagne ?</a></li>\n    <li><a href=\"https://artisan-boisson-teddy.fr/couvreur-en-chalons-champagne\">Comment évaluer un Couvreur Châlons-en-Champagne ?</a></li>\n    <li><a href=\"https://artisan-boisson-teddy.fr/en-demoussage-toiture-chalons-champagne\">Comment faire un démoussage de toiture à Châlons-en-Champagne ?</a></li>\n    <li><a href=\"https://artisan-boisson-teddy.fr/entretien-nettoyage-toiture-chalons-champagne\">Entretien et nettoyage de toiture à Châlons-en-Champagne ?</a></li>\n  </ul>\n</nav>\n<section class=\"cta\"><h2>Demander une intervention de couvreur</h2><p>Pour une fuite, une tuile déplacée ou une zinguerie abîmée, transmettez votre demande avec les informations utiles. Nous vous répondons selon la situation décrite, l’accès et la zone d’intervention.</p><p><a class=\"cta\" href=\"/contact\">Nous contacter</a></p></section>" }} />
          </div>
        </Container>
      </section>

      {faqItems.length > 0 ? (
        <section className="bg-gray-50 py-16">
          <Container>
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-3xl font-bold tracking-tight text-gray-900">
                Questions fréquentes
              </h2>
              <div className="space-y-4">
                {faqItems.map((item) => (
                  <div key={item.question} className="rounded-lg bg-white p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>
                    <p className="mt-3 text-gray-600">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      ) : null}

      <CTABanner />
    </>
  );
}
