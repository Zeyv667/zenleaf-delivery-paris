import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/livraison")({
  head: () => ({
    meta: [
      { title: "Conditions de livraison | CALIV" },
      {
        name: "description",
        content: "Zones desservies, délais, frais de port et livraison offerte dès 50 € chez CALIV.",
      },
      { property: "og:title", content: "Conditions de livraison | CALIV" },
      { property: "og:description", content: "Zones, délais et frais de port. Livraison offerte dès 50 €." },
      { property: "og:url", content: "/livraison" },
    ],
    links: [{ rel: "canonical", href: "/livraison" }],
  }),
  component: () => (
    <LegalPage
      title="Conditions de livraison"
      sections={[
        { heading: "Zones desservies", body: "Paris et proche banlieue en livraison rapide. Reste de la France en envoi suivi." },
        { heading: "Délais", body: "Les délais varient selon votre zone géographique. Une confirmation vous est envoyée après validation de la commande." },
        { heading: "Frais de port", body: "4,90 €. Livraison offerte à partir de 50 € d'achat." },
        { heading: "Emballage", body: "Colis neutre et discret, sans mention du contenu à l'extérieur." },
        { heading: "Réception", body: "Une pièce d'identité peut être demandée à la remise du colis afin de vérifier la majorité du destinataire." },
      ]}
    />
  ),
});
