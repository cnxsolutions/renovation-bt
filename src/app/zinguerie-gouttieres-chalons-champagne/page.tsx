import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CTABanner } from "@/components/sections/CTABanner";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL("https://artisan-boisson-teddy.fr"),
  title: "Zingueur couvreur à Châlons : gouttières, abergements",
  description: "Zingueur couvreur à Châlons-en-Champagne pour gouttières et abergements : diagnostic, étanchéité zinc, devis. Nous contacter.",
  alternates: { canonical: "/zinguerie-gouttieres-chalons-champagne" },
  openGraph: {
    title: "Zinguerie à Châlons-en-Champagne : gouttières et abergements",
    description: "Artisan boisson teddy intervient pour gouttières, abergements et finitions zinc autour de Châlons-en-Champagne. Demandez un devis.",
    url: "https://artisan-boisson-teddy.fr/zinguerie-gouttieres-chalons-champagne",
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
    "question": "Comment savoir si une gouttière doit être réparée ou remplacée ?",
    "answer": "Une réparation suffit parfois si la fuite est localisée et si les fixations restent fiables. Le remplacement devient plus cohérent lorsque le zinc est trop déformé, percé à plusieurs endroits ou mal positionné pour évacuer l’eau."
  },
  {
    "question": "Un abergement de cheminée peut-il provoquer une infiltration ?",
    "answer": "Oui, l’abergement fait partie des points sensibles. Si le raccord avec les tuiles ou la cheminée n’est plus étanche, l’eau peut passer sous la couverture. Un contrôle permet de repérer l’origine réelle avant de reprendre le zinc."
  },
  {
    "question": "Faut-il être présent pendant le diagnostic ?",
    "answer": "Votre présence facilite l’accès, l’explication des traces observées à l’intérieur et la validation des zones à contrôler. Si l’accès extérieur est suffisant, les modalités peuvent être convenues lors de la prise de contact."
  },
  {
    "question": "Intervenez-vous aussi hors de Châlons-en-Champagne ?",
    "answer": "Oui, selon la demande et les conditions d’accès, l’intervention peut être étudiée autour de Châlons-en-Champagne, notamment vers Saint-Memmie, Fagnières, Compertrix et Écury-sur-Coole."
  }
];
const schema = [{"@context":"https://schema.org","@type":"HomeAndConstructionBusiness","name":"Artisan boisson teddy","url":"https://artisan-boisson-teddy.fr","areaServed":[{"@type":"City","name":"Châlons-en-Champagne"},{"@type":"AdministrativeArea","name":"Marne"},{"@type":"City","name":"Saint-Memmie"},{"@type":"City","name":"Fagnières"},{"@type":"City","name":"Compertrix"},{"@type":"City","name":"Écury-sur-Coole"}],"geo":{"@type":"GeoCoordinates","addressCountry":"FR"},"makesOffer":{"@type":"Offer","itemOffered":{"@type":"Service","name":"Travaux de zinguerie, gouttières et abergements"}},"sameAs":[]},{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Accueil","item":"https://artisan-boisson-teddy.fr/"},{"@type":"ListItem","position":2,"name":"Zinguerie à Châlons-en-Champagne","item":"https://artisan-boisson-teddy.fr/zinguerie-gouttieres-chalons-champagne"}]},{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Comment savoir si une gouttière doit être réparée ou remplacée ?","acceptedAnswer":{"@type":"Answer","text":"Une réparation suffit parfois si la fuite est localisée et si les fixations restent fiables. Le remplacement devient plus cohérent lorsque le zinc est trop déformé, percé à plusieurs endroits ou mal positionné pour évacuer l’eau."}},{"@type":"Question","name":"Un abergement de cheminée peut-il provoquer une infiltration ?","acceptedAnswer":{"@type":"Answer","text":"Oui, l’abergement fait partie des points sensibles. Si le raccord avec les tuiles ou la cheminée n’est plus étanche, l’eau peut passer sous la couverture. Un contrôle permet de repérer l’origine réelle avant de reprendre le zinc."}},{"@type":"Question","name":"Faut-il être présent pendant le diagnostic ?","acceptedAnswer":{"@type":"Answer","text":"Votre présence facilite l’accès, l’explication des traces observées à l’intérieur et la validation des zones à contrôler. Si l’accès extérieur est suffisant, les modalités peuvent être convenues lors de la prise de contact."}},{"@type":"Question","name":"Intervenez-vous aussi hors de Châlons-en-Champagne ?","acceptedAnswer":{"@type":"Answer","text":"Oui, selon la demande et les conditions d’accès, l’intervention peut être étudiée autour de Châlons-en-Champagne, notamment vers Saint-Memmie, Fagnières, Compertrix et Écury-sur-Coole."}}]}];

export default function ZinguerieGouttieresChalonsChampagnePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Zingueur couvreur à Châlons : gouttières, abergements", url: "/zinguerie-gouttieres-chalons-champagne" },
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
              Zingueur couvreur à Châlons : gouttières, abergements
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Zingueur couvreur à Châlons-en-Champagne pour gouttières et abergements : diagnostic, étanchéité zinc, devis. Nous contacter.
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
            <div dangerouslySetInnerHTML={{ __html: "<p class=\"reponse-directe\">Un zingueur couvreur à Châlons-en-Champagne pour gouttières et abergements vérifie l’écoulement des eaux, l’état du zinc et les raccords d’étanchéité avant de proposer une réparation ou un remplacement. Artisan boisson teddy intervient localement pour diagnostiquer la zinguerie et établir un devis adapté au toit.</p><p><a href=\"/contact\">Nous contacter</a> pour décrire la fuite, l’accès au toit et le type de gouttière visible. Nous vous indiquons la suite possible selon l’état de la couverture, sans annoncer de tarif avant examen.</p>\n<nav class=\"related-pages\" aria-label=\"Pages associées\">\n  <h3>À lire également</h3>\n  <ul>\n    <li><a href=\"https://artisan-boisson-teddy.fr/demoussage-toiture-preventif-chalons-champagne\">Démoussage toiture avec traitement préventif à Châlons</a></li>\n    <li><a href=\"https://artisan-boisson-teddy.fr/reparation-urgence-toiture-chalons-champagne\">Réparation urgente de toiture à Châlons-en-Champagne</a></li>\n    <li><a href=\"https://artisan-boisson-teddy.fr/renovation-complete-toiture-chalons-champagne\">Rénovation complète de toiture à Châlons-en-Champagne</a></li>\n    <li><a href=\"https://artisan-boisson-teddy.fr/couvreur-marne-toiture-chalons-champagne\">Couvreur Marne pour travaux de toiture à Châlons-en-Champagne ?</a></li>\n    <li><a href=\"https://artisan-boisson-teddy.fr/couvreur-en-chalons-champagne\">Comment évaluer un Couvreur Châlons-en-Champagne ?</a></li>\n  </ul>\n</nav>\n<h2>Travaux de zinguerie à Châlons-en-Champagne</h2><p>À Châlons-en-Champagne, une zinguerie exposée au vent, aux feuilles et aux variations de température peut se déformer, se boucher ou perdre son étanchéité aux jonctions. Sur une maison située dans le secteur 51000, le contrôle porte surtout sur les pentes de gouttières, les descentes d’eaux pluviales, les raccords contre mur et les points de soudure ou d’emboîtement.</p><p>Nous regardons aussi la couverture autour des éléments zinc, car une fuite visible en façade peut venir d’une tuile déplacée, d’un solin fatigué ou d’un mauvais rejet d’eau.</p><h2>Gouttières, abergements et finitions zinc</h2><p>Une zinguerie efficace guide l’eau sans stagnation et protège les points sensibles du toit. L’intervention peut concerner la réparation d’une gouttière, la reprise d’un abergement ou l’ajustement d’une finition zinc autour d’un relief de toiture.</p><ul><li>Gouttière percée, décrochée ou mal alignée.</li><li>Descente encombrée ou raccord qui déborde lors des pluies.</li><li>Abergement de cheminée, de fenêtre de toit ou de sortie de ventilation.</li><li>Rive, solin ou jonction zinc à reprendre pour limiter les infiltrations.</li></ul><p>Pour les travaux touchant à l’évacuation des eaux, les règles locales d’urbanisme peuvent aussi orienter certains choix visibles depuis la rue ; la commune donne des informations utiles sur le <a href=\"https://www.chalonsenchampagne.fr\" target=\"_blank\" rel=\"noopener\">site de Châlons-en-Champagne</a>.</p><h2>Quand faire réparer ou remplacer sa zinguerie ?</h2><p>Il faut agir dès que l’eau ne suit plus son chemin normal. Une trace humide sous une gouttière, un débordement répété ou un ruissellement contre la maçonnerie indique qu’un contrôle sur place est préférable.</p><h3>Fuites, corrosion et mauvais écoulement</h3><p>Une petite fuite au niveau d’un raccord peut s’aggraver si l’eau stagne. Selon l’état du métal, la réparation peut être localisée ou nécessiter le remplacement d’un tronçon. Le diagnostic évite de changer inutilement une partie encore saine.</p><h3>Étanchéité autour des cheminées et fenêtres de toit</h3><p>Les abergements protègent les traversées de toiture. Lorsqu’ils se soulèvent, se fissurent ou laissent passer l’eau sur les côtés, l’humidité peut atteindre les bois, l’isolant ou le plafond. Nous contrôlons la liaison entre le zinc, les tuiles et le support.</p><p><a href=\"/services\">Demander une vérification de zinguerie</a> si une auréole, une coulure ou un débordement revient après la pluie.</p><h2>Quelles zones d’intervention autour de Châlons-en-Champagne ?</h2><p>Nous intervenons dans le secteur de Châlons-en-Champagne avec une approche pratique : accès au stationnement, hauteur de façade, présence d’une cour, pente du toit et contraintes de voisinage sont vérifiés avant travaux.</p><p>À Saint-Memmie, les maisons proches des axes passants demandent souvent une préparation soignée de l’accès. À Fagnières, les pavillons avec débords de toit nécessitent un contrôle précis des descentes. À Compertrix, les interventions tiennent compte des abords de jardin et des évacuations. Écury-sur-Coole permet aussi des déplacements pour une zinguerie liée à une toiture existante. Dans la Marne, la prise en charge reste définie après échange et diagnostic.</p><h2>Pourquoi choisir un artisan local ?</h2><p>Un artisan local connaît les toitures du secteur, les matériaux courants et les problèmes fréquents liés aux gouttières anciennes ou aux reprises successives. Artisan boisson teddy privilégie l’observation sur place : état du zinc, fixation, écoulement, raccord avec la couverture et risque d’infiltration.</p><p>Cette méthode permet de distinguer une simple remise en état d’une rénovation de toiture plus large. Pour un besoin portant aussi sur la couverture, vous pouvez consulter notre intervention de <a href=\"/couvreur/chalons-en-champagne\">couvreur à Châlons-en-Champagne</a>.</p><h2>Demander un devis de zinguerie</h2><p>Le devis dépend de l’accès, de la longueur à traiter, du type de zinc, de l’état des supports et des raccords à reprendre. Envoyez une description du problème, l’emplacement de la fuite et, si possible, des photos prises depuis le sol.</p><p>Nous vous répondons avec une suite claire : contrôle, réparation envisageable ou remplacement conseillé après passage. <a href=\"/contact\">Nous contacter</a> pour une demande de devis de zinguerie à Châlons-en-Champagne.</p><h2>Nos engagements</h2><p>Aucun avis Google Business Profile n’a été fourni ici, nous ne publions donc pas de témoignage inventé. Nous nous engageons à décrire les travaux proposés avec des mots simples, à signaler les limites visibles du support et à établir un devis avant intervention.</p><h2>Questions fréquentes sur la zinguerie à Châlons-en-Champagne</h2><h3>Comment savoir si une gouttière doit être réparée ou remplacée ?</h3><p>Une réparation suffit parfois si la fuite est localisée et si les fixations restent fiables. Le remplacement devient plus cohérent lorsque le zinc est trop déformé, percé à plusieurs endroits ou mal positionné pour évacuer l’eau.</p><h3>Un abergement de cheminée peut-il provoquer une infiltration ?</h3><p>Oui, l’abergement fait partie des points sensibles. Si le raccord avec les tuiles ou la cheminée n’est plus étanche, l’eau peut passer sous la couverture. Un contrôle permet de repérer l’origine réelle avant de reprendre le zinc.</p><h3>Faut-il être présent pendant le diagnostic ?</h3><p>Votre présence facilite l’accès, l’explication des traces observées à l’intérieur et la validation des zones à contrôler. Si l’accès extérieur est suffisant, les modalités peuvent être convenues lors de la prise de contact.</p><h3>Intervenez-vous aussi hors de Châlons-en-Champagne ?</h3><p>Oui, selon la demande et les conditions d’accès, l’intervention peut être étudiée autour de Châlons-en-Champagne, notamment vers Saint-Memmie, Fagnières, Compertrix et Écury-sur-Coole.</p><p class=\"external-ref\">Source : <a href=\"https://www.chalonsenchampagne.fr\" target=\"_blank\" rel=\"noopener noreferrer\" title=\"Appuie la mention des informations locales d’urbanisme et de démarches communales pouvant concerner des travaux visibles depuis la rue.\">site de Châlons-en-Champagne</a></p>\n<p class=\"page-auteur\">Publié par Artisan boisson teddy — mis à jour le <time datetime=\"2026-11-03\">3 novembre 2026</time></p><p><strong>Besoin d’un avis sur une gouttière, un abergement ou une fuite en toiture ?</strong> Transmettez votre demande avec l’adresse du chantier et quelques photos. <a href=\"/contact\">Nous contacter</a> pour organiser un diagnostic et obtenir un devis.</p>" }} />
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
