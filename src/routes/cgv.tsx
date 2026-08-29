import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/cgv")({
  head: () => ({
    meta: [
      { title: "Conditions générales de vente | CALIV" },
      {
        name: "description",
        content: "Conditions générales de vente CALIV : commandes, prix, paiement, livraison et rétractation.",
      },
      { property: "og:title", content: "Conditions générales de vente | CALIV" },
      { property: "og:description", content: "Commandes, prix, paiement, livraison et rétractation." },
      { property: "og:url", content: "https://zenleaf-delivery-paris.lovable.app/cgv" },
    ],
    links: [{ rel: "canonical", href: "https://zenleaf-delivery-paris.lovable.app/cgv" }],
  }),
  component: () => (
    <LegalPage
      title="Conditions générales de vente"
      intro="Les présentes conditions régissent les ventes conclues sur le site CALIV. Elles doivent être complétées par les informations propres à votre société avant mise en ligne."
      sections={[
        {
          heading: "1. Objet",
          body: "Les présentes CGV définissent les droits et obligations des parties dans le cadre de la vente en ligne de produits à base de chanvre proposés par CALIV.",
        },
        {
          heading: "2. Produits",
          body: "Les produits proposés contiennent un taux de THC inférieur à 0,3 %, conformément à la réglementation française en vigueur. Ils ne sont pas destinés à un usage médical et aucune allégation thérapeutique n'est formulée.",
        },
        {
          heading: "3. Majorité",
          body: "La vente est strictement réservée aux personnes majeures. Une vérification de l'âge est demandée à l'entrée du site et peut être exigée à la livraison.",
        },
        {
          heading: "4. Prix et paiement",
          body: "Les prix sont indiqués en euros toutes taxes comprises. Le paiement s'effectue par carte bancaire, Apple Pay ou Google Pay via un prestataire de paiement sécurisé.",
        },
          {
            heading: "5. Livraison",
            body: "La livraison est offerte pour toute commande. Un montant minimum de 5 g s'applique (soit un sachet de 5 g). Les délais varient selon la zone géographique.",
          },
        {
          heading: "6. Rétractation",
          body: "Conformément au code de la consommation, le droit de rétractation de 14 jours s'applique aux produits non descellés. Les produits alimentaires ou d'hygiène descellés ne peuvent être repris.",
        },
        {
          heading: "7. Réclamations",
          body: "Toute réclamation peut être adressée à contact@caliv.fr. En cas de litige non résolu, le consommateur peut recourir à un médiateur de la consommation.",
        },
      ]}
    />
  ),
});
