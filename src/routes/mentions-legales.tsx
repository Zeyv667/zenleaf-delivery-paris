import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales | CALIV" },
      {
        name: "description",
        content: "Mentions légales du site CALIV : éditeur, hébergeur et propriété intellectuelle.",
      },
      { property: "og:title", content: "Mentions légales | CALIV" },
      { property: "og:description", content: "Éditeur, hébergeur et propriété intellectuelle." },
      { property: "og:url", content: "https://zenleaf-delivery-paris.lovable.app/mentions-legales" },
    ],
    links: [{ rel: "canonical", href: "https://zenleaf-delivery-paris.lovable.app/mentions-legales" }],
  }),
  component: () => (
    <LegalPage
      title="Mentions légales"
      intro="Informations à compléter avec les données officielles de votre société avant la mise en ligne."
      sections={[
        {
          heading: "Éditeur du site",
          body: "CALIV — [Forme juridique], au capital de [montant] €. Siège social : [adresse]. RCS [ville] [numéro]. TVA intracommunautaire : [numéro]. E-mail : contact@caliv.fr.",
        },
        { heading: "Directeur de la publication", body: "[Nom du représentant légal]." },
        { heading: "Hébergement", body: "[Nom de l'hébergeur] — [adresse] — [téléphone]." },
        {
          heading: "Propriété intellectuelle",
          body: "L'ensemble des contenus du site (textes, visuels, logos) est protégé. Toute reproduction sans autorisation est interdite.",
        },
        {
          heading: "Avertissement",
          body: "Les produits vendus contiennent moins de 0,3 % de THC. Ils ne constituent pas des médicaments et ne font l'objet d'aucune allégation de santé.",
        },
      ]}
    />
  ),
});
