import { createFileRoute } from "@tanstack/react-router";
import { DeliveryCTA } from "@/components/site/DeliveryCTA";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/confidentialite")({
  head: () => ({
    meta: [
      { title: "Politique de confidentialité | CALIV" },
      {
        name: "description",
        content: "Traitement des données personnelles, cookies et droits RGPD des clients CALIV.",
      },
      { property: "og:title", content: "Politique de confidentialité | CALIV" },
      { property: "og:description", content: "Données personnelles, cookies et droits RGPD." },
      { property: "og:url", content: "/confidentialite" },
    ],
    links: [{ rel: "canonical", href: "/confidentialite" }],
  }),
  component: () => (
    <LegalPage
      title="Politique de confidentialité"
      intro="CALIV traite vos données personnelles conformément au RGPD et à la loi Informatique et Libertés."
      sections={[
        {
          heading: "Données collectées",
          body: "Nom, adresse de livraison, e-mail, téléphone et informations de commande. Les données de paiement sont traitées directement par notre prestataire de paiement.",
        },
        {
          heading: "Finalités",
          body: "Traitement des commandes, livraison, service client, obligations comptables et, avec votre consentement, mesure d'audience.",
        },
        {
          heading: "Cookies",
          body: "Les cookies de mesure d'audience (Google Analytics, Meta Pixel) ne sont déposés qu'après votre consentement via le bandeau cookies. Vous pouvez modifier votre choix à tout moment.",
        },
        { heading: "Durée de conservation", body: "Les données de commande sont conservées 3 ans après le dernier contact, et 10 ans pour les pièces comptables." },
        {
          heading: "Vos droits",
          body: "Accès, rectification, effacement, opposition, limitation et portabilité. Écrivez à contact@caliv.fr. Vous pouvez également saisir la CNIL.",
        },
      ]}
    />
  ),
});
