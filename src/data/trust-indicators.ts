import { BUSINESS, LEGAL } from "@/lib/constants";

/**
 * Bandeau de reassurance affiche sous le hero.
 *
 * REGLE : chaque badge doit renvoyer a un fait qu'un visiteur peut verifier
 * lui-meme (registre national des entreprises, fiche Google, texte de loi).
 * Un badge est la premiere chose que l'on croit et la derniere que l'on
 * verifie : c'est exactement pour cela qu'il ne doit rien affirmer d'invente.
 *
 * Supprime le 2026-08-03 :
 *  - « Garantie / decennale ». L'entreprise est bien soumise a l'obligation
 *    d'assurance (C. assur. art. L241-1), mais AUCUN element du site ne la
 *    documente : `LEGAL.decennale` (assureur, numero de contrat, etendue) est
 *    entierement a null. Un badge « garantie decennale » sans assureur nomme
 *    laisse croire a une garantie documentee ici, ce qu'elle n'est pas. Le
 *    badge pourra revenir le jour ou `LEGAL.decennale` sera renseigne a partir
 *    de l'attestation reelle.
 *  - « sous 24h » accole au devis : delai garanti que rien ne mesure ni
 *    n'engage. Une allegation de delai non tenue est une pratique commerciale
 *    trompeuse (C. conso. art. L121-2, 2°, b et e).
 *
 * Conserve, parce que VRAI : l'anciennete. L'entreprise est immatriculee
 * depuis le 09/09/2010 (verifie a l'INSEE, cf. `BUSINESS.foundingDate`).
 * « depuis 2010 » est plus fort que « +10 ans » : c'est une date opposable.
 */
export const trustIndicators = [
  {
    icon: "users" as const,
    title: "Artisan couvreur",
    description: BUSINESS.experience,
  },
  {
    icon: "shield" as const,
    title: "Entreprise immatriculée",
    description: `SIREN ${LEGAL.siren}`,
  },
  {
    icon: "file-text" as const,
    title: "Devis gratuit",
    description: "écrit et sans engagement",
  },
  {
    icon: "map-pin" as const,
    title: "Intervention en",
    description: "Marne (51)",
  },
] as const;
