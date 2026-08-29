import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales | CALIV" },
      {
        name: "description",
        content:
          "Mentions légales CALIV : éditeur, SIREN, RCS, TVA, directeur de la publication, hébergeur et propriété intellectuelle.",
      },
      { property: "og:title", content: "Mentions légales | CALIV" },
      { property: "og:description", content: "Éditeur, SIREN, RCS, TVA, hébergeur et propriété intellectuelle." },
      { property: "og:url", content: "https://zenleaf-delivery-paris.lovable.app/mentions-legales" },
    ],
    links: [{ rel: "canonical", href: "https://zenleaf-delivery-paris.lovable.app/mentions-legales" }],
  }),
  component: () => (
    <LegalPage
      title="Mentions légales"
      intro="Mentions obligatoires au titre de la loi n° 2004-575 pour la confiance dans l'économie numérique. Les champs entre crochets doivent être complétés avec les données officielles de la société avant la mise en ligne commerciale du site."
      sections={[
        {
          heading: "Éditeur du site",
          body: "CALIV — [Forme juridique : SAS / SASU / EURL], au capital de [montant] €. Siège social : [adresse complète]. SIREN : [9 chiffres]. SIRET : [14 chiffres]. RCS : [ville] [numéro]. TVA intracommunautaire : FR[numéro]. Code APE : [code]. E-mail : contact@caliv.fr. Téléphone / WhatsApp : +33 6 95 11 04 38.",
        },
        {
          heading: "Directeur de la publication",
          body: "[Nom et prénom du représentant légal], en qualité de [fonction]. Contact : contact@caliv.fr.",
        },
        {
          heading: "Hébergement",
          body: "Le site est hébergé par [nom de l'hébergeur] — [adresse complète] — [téléphone / site web].",
        },
        {
          heading: "Activité réglementée",
          body: "CALIV commercialise des produits à base de chanvre conformes à la réglementation française en vigueur, dont le taux de THC est inférieur au seuil légal. La vente est strictement réservée aux personnes majeures.",
        },
        {
          heading: "Propriété intellectuelle",
          body: "La marque CALIV, le logo, les visuels produits, les photographies, les textes, la charte graphique, la structure et le code du site sont la propriété exclusive de l'éditeur ou font l'objet d'une licence. Toute reproduction, représentation, adaptation, extraction, réutilisation ou diffusion, totale ou partielle, sur quelque support que ce soit et sans autorisation écrite préalable, est interdite et constitue une contrefaçon sanctionnée par les articles L335-2 et L716-4 du code de la propriété intellectuelle.",
        },
        {
          heading: "Liens et contenus tiers",
          body: "Le site peut contenir des liens vers des services tiers (WhatsApp, réseaux sociaux, cartographie). L'éditeur n'exerce aucun contrôle sur ces services et décline toute responsabilité quant à leur contenu et à leurs pratiques en matière de données.",
        },
        {
          heading: "Données personnelles et cookies",
          body: "Le traitement des données personnelles et l'usage des cookies sont décrits dans la politique de confidentialité, accessible depuis toutes les pages du site.",
        },
        {
          heading: "Signalement de contenu",
          body: "Tout contenu illicite peut être signalé à contact@caliv.fr en précisant l'URL concernée et le motif du signalement.",
        },
        {
          heading: "Avertissement",
          body: "Les produits vendus ne sont pas des médicaments. Ils ne sont pas destinés à diagnostiquer, traiter, guérir ou prévenir une maladie et ne font l'objet d'aucune allégation de santé. Produits déconseillés aux femmes enceintes ou allaitantes, à tenir hors de portée des enfants ; ne pas conduire après utilisation. La consommation peut entraîner un résultat positif à un test de dépistage du THC.",
        },
      ]}
    />
  ),
});
