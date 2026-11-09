import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CTABanner } from "@/components/sections/CTABanner";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL("https://artisan-boisson-teddy.fr"),
  title: "Devis couvreur gratuit à Châlons-en-Champagne",
  description: "Devis couvreur gratuit à Châlons-en-Champagne pour toiture, fuite, zinguerie ou démoussage. Demandez une estimation locale.",
  alternates: { canonical: "/devis-gratuit-couvreur-chalons-champagne" },
  openGraph: {
    title: "Devis couvreur gratuit à Châlons-en-Champagne",
    description: "Artisan boisson teddy chiffre vos travaux de toiture à Châlons-en-Champagne : rénovation, réparation, nettoyage et zinguerie.",
    url: "https://artisan-boisson-teddy.fr/devis-gratuit-couvreur-chalons-champagne",
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
    "question": "Le devis couvreur est-il gratuit à Châlons-en-Champagne ?",
    "answer": "Oui, la demande de devis est gratuite et sans engagement. Le chiffrage dépend des informations transmises et, si nécessaire, d’un contrôle de la toiture sur place."
  },
  {
    "question": "Faut-il être présent pendant le passage du couvreur ?",
    "answer": "Votre présence facilite l’accès, l’explication du problème et la vérification des zones intérieures touchées par une infiltration. Lorsque l’accès extérieur suffit, l’organisation peut être adaptée."
  },
  {
    "question": "Une fuite de toiture peut-elle être chiffrée rapidement ?",
    "answer": "Une fuite doit être décrite avec précision : emplacement, moment d’apparition, pièces touchées, photos. Ces éléments aident à prioriser la demande et à préparer une intervention cohérente."
  },
  {
    "question": "Intervenez-vous aussi dans les communes voisines ?",
    "answer": "Oui, les demandes peuvent être étudiées autour de Châlons-en-Champagne, notamment vers Saint-Memmie, Fagnières, Recy, Écury-sur-Coole et Compertrix, selon le type de travaux."
  }
];
const schema = [{"@context":"https://schema.org","@type":"HomeAndConstructionBusiness","name":"Artisan boisson teddy","url":"https://artisan-boisson-teddy.fr","description":"Couvreur intervenant pour devis de toiture, réparation, rénovation, nettoyage, démoussage et zinguerie à Châlons-en-Champagne et autour.","areaServed":[{"@type":"City","name":"Châlons-en-Champagne"},{"@type":"AdministrativeArea","name":"Marne"},{"@type":"City","name":"Saint-Memmie"},{"@type":"City","name":"Fagnières"},{"@type":"City","name":"Recy"},{"@type":"City","name":"Écury-sur-Coole"},{"@type":"City","name":"Compertrix"}],"sameAs":["https://artisan-boisson-teddy.fr"]},{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Accueil","item":"https://artisan-boisson-teddy.fr"},{"@type":"ListItem","position":2,"name":"Devis couvreur gratuit à Châlons-en-Champagne","item":"https://artisan-boisson-teddy.fr/devis-gratuit-couvreur-chalons-champagne"}]},{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Le devis couvreur est-il gratuit à Châlons-en-Champagne ?","acceptedAnswer":{"@type":"Answer","text":"Oui, la demande de devis est gratuite et sans engagement. Le chiffrage dépend des informations transmises et, si nécessaire, d’un contrôle de la toiture sur place."}},{"@type":"Question","name":"Faut-il être présent pendant le passage du couvreur ?","acceptedAnswer":{"@type":"Answer","text":"Votre présence facilite l’accès, l’explication du problème et la vérification des zones intérieures touchées par une infiltration. Lorsque l’accès extérieur suffit, l’organisation peut être adaptée."}},{"@type":"Question","name":"Une fuite de toiture peut-elle être chiffrée rapidement ?","acceptedAnswer":{"@type":"Answer","text":"Une fuite doit être décrite avec précision : emplacement, moment d’apparition, pièces touchées, photos. Ces éléments aident à prioriser la demande et à préparer une intervention cohérente."}},{"@type":"Question","name":"Intervenez-vous aussi dans les communes voisines ?","acceptedAnswer":{"@type":"Answer","text":"Oui, les demandes peuvent être étudiées autour de Châlons-en-Champagne, notamment vers Saint-Memmie, Fagnières, Recy, Écury-sur-Coole et Compertrix, selon le type de travaux."}}]}];

export default function DevisGratuitCouvreurChalonsChampagnePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Devis couvreur gratuit à Châlons-en-Champagne", url: "/devis-gratuit-couvreur-chalons-champagne" },
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
              Devis couvreur gratuit à Châlons-en-Champagne
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Devis couvreur gratuit à Châlons-en-Champagne pour toiture, fuite, zinguerie ou démoussage. Demandez une estimation locale.
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
            <div dangerouslySetInnerHTML={{ __html: "<p class=\"reponse-directe\">Un devis couvreur gratuit à Châlons-en-Champagne permet de faire évaluer vos travaux de toiture sans engagement : réparation de fuite, rénovation, nettoyage, démoussage ou zinguerie. Artisan boisson teddy étudie votre demande, vérifie les points utiles sur place si nécessaire, puis vous indique une estimation adaptée.</p><p><a class=\"cta\" href=\"/contact\">Demander un devis</a></p><section class=\"hero\"><h2>Demander un devis couvreur à Châlons-en-Champagne</h2><p>Pour une toiture située à Châlons-en-Champagne, la demande commence par les informations visibles depuis le sol : type de couverture, traces d’humidité, tuiles déplacées, gouttière abîmée, mousse installée. Dans le secteur 51000, les écarts de météo et les vents dégagés autour des zones pavillonnaires peuvent accélérer l’usure des éléments exposés.</p></section><section class=\"services\"><h2>Quels travaux peuvent être chiffrés ?</h2><p>Un chiffrage peut porter sur une intervention ponctuelle ou sur une remise en état plus complète. Le devis précise les postes utiles, sans grille toute faite, car une toiture ne se juge pas seulement à sa surface.</p><h3>Rénovation, réparation, nettoyage et zinguerie</h3><p>Les demandes les plus fréquentes concernent la rénovation de toiture à Châlons-en-Champagne, la réparation après infiltration, le nettoyage de couverture, le démoussage et les travaux de zinguerie. Une estimation sérieuse tient compte de l’accès, de l’état des supports, des raccords, des noues, des rives et de l’évacuation des eaux pluviales.</p><ul><li>Repérage des défauts visibles et des zones à contrôler.</li><li>Définition du type d’intervention adapté au support.</li><li>Estimation personnalisée selon l’état réel de la toiture.</li></ul><h3>Urgences et interventions rapides</h3><p>Après un coup de vent ou une infiltration active, l’objectif est de limiter l’aggravation. La réponse dépend de la situation, de l’accessibilité et des conditions de sécurité. Pour comprendre les prestations proposées, vous pouvez consulter les <a href=\"/services\">travaux de couverture</a> avant de décrire votre besoin.</p><p><a class=\"cta\" href=\"/contact\">Envoyer votre demande</a></p></section><section class=\"local_info\"><h2>Comment se déroule un devis gratuit ?</h2><p>La demande est simple : vous décrivez le problème, vous indiquez la commune et vous ajoutez, si possible, des photos nettes de la zone concernée. Nous vérifions ensuite si un passage est nécessaire pour confirmer l’état de la couverture, l’accès au toit et les travaux à prévoir.</p><p>Pour certains travaux modifiant l’aspect extérieur, <a href=\"https://www.service-public.fr/\" target=\"_blank\" rel=\"noopener noreferrer\" title=\"Appuie le conseil de vérifier les démarches administratives possibles lorsque des travaux modifient l’aspect extérieur d’une toiture.\">les démarches d’urbanisme</a> peuvent être à vérifier auprès de la mairie ou sur <a href=\"https://www.service-public.fr/\" target=\"_blank\" rel=\"noopener\">les démarches d’urbanisme</a>. Le devis reste centré sur la solution technique adaptée à votre toiture.</p></section><section class=\"local_info\"><h2>Quels éléments influencent le prix ?</h2><p>Le prix dépend surtout de l’état de la couverture, de la facilité d’accès, des matériaux à déposer ou à remplacer, des raccords de zinguerie et du niveau de sécurité nécessaire. Une tuile cassée ne se chiffre pas comme une reprise d’étanchéité autour d’une souche ou une rénovation plus large.</p><p>Une estimation fiable évite les réponses trop rapides données sans contexte. Pour préparer votre demande, vous pouvez indiquer si le problème apparaît sous la pluie, près d’une gouttière, dans les combles ou autour d’un point singulier.</p></section><section class=\"areas_served\"><h2>Zones d’intervention autour de Châlons-en-Champagne</h2><p>À Saint-Memmie, les interventions concernent souvent des maisons proches de Châlons-en-Champagne, avec un accès rapide aux toitures de lotissement. À Fagnières, l’examen de l’évacuation des eaux est important lorsque les gouttières bordent une terrasse ou une extension.</p><p>À Recy, la prise en compte du vent aide à vérifier les rives et les éléments de finition. À Écury-sur-Coole, les demandes portent aussi sur la réparation locale et le suivi de toiture ancienne. À Compertrix, l’accès au chantier guide la préparation du devis. Retrouvez aussi la <a href=\"/zone-intervention\">zone d’intervention</a> détaillée.</p></section><section class=\"testimonials\"><h2>Avis clients et prise de contact</h2><p>Aucun avis vérifié n’est fourni ici, donc aucun témoignage n’est ajouté. Notre engagement est de vous demander les bonnes informations, de distinguer une réparation utile d’une rénovation plus lourde et de vous orienter vers un devis clair, adapté à votre toiture.</p><p>Pour les retours disponibles sur le site, consultez la rubrique <a href=\"/avis\">avis clients</a>.</p></section><section class=\"faq\"><h2>Questions fréquentes avant de demander un devis</h2><h3>Le devis couvreur est-il gratuit à Châlons-en-Champagne ?</h3><p>Oui, la demande de devis est gratuite et sans engagement. Le chiffrage dépend des informations transmises et, si nécessaire, d’un contrôle de la toiture sur place.</p><h3>Faut-il être présent pendant le passage du couvreur ?</h3><p>Votre présence facilite l’accès, l’explication du problème et la vérification des zones intérieures touchées par une infiltration. Lorsque l’accès extérieur suffit, l’organisation peut être adaptée.</p><h3>Une fuite de toiture peut-elle être chiffrée rapidement ?</h3><p>Une fuite doit être décrite avec précision : emplacement, moment d’apparition, pièces touchées, photos. Ces éléments aident à prioriser la demande et à préparer une intervention cohérente.</p><h3>Intervenez-vous aussi dans les communes voisines ?</h3><p>Oui, les demandes peuvent être étudiées autour de Châlons-en-Champagne, notamment vers Saint-Memmie, Fagnières, Recy, Écury-sur-Coole et Compertrix, selon le type de travaux.</p></section><p class=\"page-auteur\">Publié par Artisan boisson teddy — mis à jour le <time datetime=\"2026-11-09\">9 novembre 2026</time></p>\n<nav class=\"related-pages\" aria-label=\"Pages associées\">\n  <h3>À lire également</h3>\n  <ul>\n    <li><a href=\"https://artisan-boisson-teddy.fr/urgence-fuite-toiture-chalons-champagne\">Urgence fuite de toiture à Châlons-en-Champagne</a></li>\n    <li><a href=\"https://artisan-boisson-teddy.fr/zinguerie-gouttieres-chalons-champagne\">Zingueur couvreur à Châlons : gouttières, abergements</a></li>\n    <li><a href=\"https://artisan-boisson-teddy.fr/demoussage-toiture-preventif-chalons-champagne\">Démoussage toiture avec traitement préventif à Châlons</a></li>\n    <li><a href=\"https://artisan-boisson-teddy.fr/reparation-urgence-toiture-chalons-champagne\">Réparation urgente de toiture à Châlons-en-Champagne</a></li>\n    <li><a href=\"https://artisan-boisson-teddy.fr/renovation-complete-toiture-chalons-champagne\">Rénovation complète de toiture à Châlons-en-Champagne</a></li>\n  </ul>\n</nav>\n<section class=\"cta\"><h2>Demander votre estimation de toiture</h2><p>Décrivez votre toiture, le problème constaté et votre secteur. Une demande claire permet d’orienter le devis et d’éviter les travaux mal cadrés dès le départ.</p><p><a class=\"cta\" href=\"/contact\">Nous contacter</a></p></section>" }} />
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
