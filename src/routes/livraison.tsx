import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { useCart } from "@/lib/cart";

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
  component: DeliveryPage,
});

function DeliveryPage() {
  const { open } = useCart();
  return (
    <>
      <LegalPage
        title="Conditions de livraison"
        sections={[
          { heading: "Zone desservie", body: "Nous livrons actuellement PARIS et certaines communes limitrophes d’Île-de-France. Les départements 91 et 92 ne sont pas encore couverts dans leur intégralité. Nous travaillons activement à l’extension de notre zone de livraison." },
          { heading: "Horaires de livraison", body: "Les livraisons sont effectuées selon les créneaux disponibles affichés lors de la commande." },
          { heading: "Montant minimum de commande", body: "Un montant minimum peut être requis selon la zone de livraison." },
          { heading: "Délais de livraison", body: "Les délais communiqués sont indicatifs et peuvent varier en fonction du trafic, des conditions météorologiques ou d'autres circonstances exceptionnelles." },
          { heading: "Vérification de l’âge", body: "La vente est strictement réservée aux personnes majeures. Une pièce d’identité pourra être demandée lors de la livraison." },
          { heading: "Réception de la commande", body: "Le client est tenu de vérifier l’exactitude de sa commande au moment de sa réception et de signaler toute anomalie dans les meilleurs délais." },
          { heading: "Adresse de livraison", body: "Le client doit fournir une adresse complète et accessible. Tout retard ou impossibilité de livraison lié à une information erronée relève de la responsabilité du client." },
          { heading: "Disponibilité des produits", body: "En cas d’indisponibilité exceptionnelle d’un produit, le client sera contacté afin de convenir d’un remplacement ou d’un remboursement." },
        ]}
      />
      <section className="container-x pb-16">
        <button className="btn-base w-full bg-[#FBD9DF] text-[#0F172A] hover:bg-[#A3B2D6]" onClick={open}>
          DELIVERY EXPRESS
        </button>
      </section>
    </>
  );
}
});
