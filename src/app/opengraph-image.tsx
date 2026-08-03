import { ImageResponse } from "next/og";
import { BUSINESS } from "@/lib/constants";

/**
 * Image Open Graph du site, servie sur /opengraph-image — c'est la valeur de
 * SEO.ogImage. L'ancienne valeur, /og-image.jpg, ne correspondait a aucun
 * fichier et renvoyait 404 : toutes les previsualisations de partage etaient
 * vides.
 *
 * Les textes ci-dessous ont ete alignes sur src/lib/constants.ts :
 *  - « Grand Est » remplace par la Marne. La region s'etend jusqu'a
 *    Strasbourg, alors que BUSINESS.serviceRadius vaut 60 km.
 *  - « Garantie décennale » retire : LEGAL.decennale est entierement `null`.
 *  - le numero de telephone vient de BUSINESS.phone, il n'est plus recopie.
 */
export const runtime = "edge";
export const alt =
  "Rénovation BT - Artisan couvreur à Écury-sur-Coole, Châlons-en-Champagne et Marne (51)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Inter, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "8px",
            background: "#f97316",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              background: "#f97316",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "32px",
              fontWeight: "bold",
            }}
          >
            RBT
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: "42px",
                fontWeight: "bold",
                color: "white",
                letterSpacing: "-1px",
              }}
            >
              RÉNOVATION BT
            </span>
            <span
              style={{
                fontSize: "18px",
                color: "#9ca3af",
                textTransform: "uppercase",
                letterSpacing: "3px",
              }}
            >
              {BUSINESS.tagline}
            </span>
          </div>
        </div>

        <div
          style={{
            fontSize: "28px",
            color: "#f97316",
            fontWeight: "600",
            marginBottom: "16px",
          }}
        >
          Couvreur à Châlons-en-Champagne et dans la Marne
        </div>

        <div
          style={{
            fontSize: "20px",
            color: "#d1d5db",
            marginBottom: "40px",
          }}
        >
          Toiture • Façade • Gouttières
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            background: "#f97316",
            padding: "16px 32px",
            borderRadius: "12px",
          }}
        >
          <span style={{ fontSize: "24px", fontWeight: "bold", color: "white" }}>
            {BUSINESS.phone}
          </span>
        </div>

        {/*
          Une SEULE expression, pas du texte entrecoupe d'accolades : satori
          exige `display: flex` des qu'un <div> a plusieurs noeuds enfants.
        */}
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            fontSize: "16px",
            color: "#6b7280",
          }}
        >
          {`${BUSINESS.address.city} (${BUSINESS.address.postalCode}) • Devis gratuit • ${BUSINESS.experience}`}
        </div>
      </div>
    ),
    { ...size }
  );
}
