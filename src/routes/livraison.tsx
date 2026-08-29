import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { PaymentMethods } from "@/components/site/PaymentMethods";
import { WHATSAPP_LINK } from "@/lib/utils";


export const Route = createFileRoute("/livraison")({

  head: () => ({
    meta: [
      { title: "Conditions de livraison | CALIV" },
      {
        name: "description",
        content: "Zones desservies, délais et livraison offerte chez CALIV. Commande minimum de 5 g.",
      },
      { property: "og:title", content: "Conditions de livraison | CALIV" },
      { property: "og:description", content: "Zones, délais et livraison offerte. Commande minimum de 5 g." },
      { property: "og:url", content: "/livraison" },
    ],
    links: [{ rel: "canonical", href: "/livraison" }],
  }),
  component: DeliveryPage,
});

function DeliveryPage() {
  return (

    <>
      <LegalPage
        title="Conditions de livraison"
        sections={[
          { heading: "Processus de commande", body: (
            <>
              <p>Pour garantir un traitement rapide de votre commande, merci de transmettre les informations suivantes :</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5">
                <li>Numéro de WhatsApp</li>
                <li>Nom de la variété souhaitée</li>
                <li>Adresse complète de livraison (numéro, rue, code postal, ville)</li>
              </ul>
              <p className="mt-3">Toute information incomplète pourra entraîner un retard dans le traitement de la commande.</p>
            </>
          )},
          { heading: "Frais de livraison", body: "La livraison est offerte pour toute commande validée." },
          { heading: "Montant minimum de commande", body: "Un minimum de 5 g est requis pour passer commande, ce qui correspond à un sachet de 5 g." },
          { heading: "Zone desservie", body: "Nous livrons actuellement PARIS et certaines communes limitrophes d’Île-de-France. Les départements 91 et 92 ne sont pas encore couverts dans leur intégralité. Nous travaillons activement à l’extension de notre zone de livraison." },
          { heading: "Horaires de livraison", body: "Les livraisons sont effectuées selon les créneaux disponibles et l'activité du service." },
          { heading: "Délais de livraison", body: "Les délais communiqués sont indicatifs et peuvent varier en fonction du trafic, des conditions météorologiques ou d'autres circonstances exceptionnelles." },
          { heading: "Vérification de l'âge", body: "La vente est strictement réservée aux personnes majeures. Une pièce d'identité pourra être demandée lors de la livraison." },
          { heading: "Réception de la commande", body: "Le client est tenu de vérifier l’exactitude de sa commande au moment de sa réception et de signaler toute anomalie dans les meilleurs délais." },
          { heading: "Adresse de livraison", body: "Le client doit fournir une adresse complète et accessible. Tout retard ou impossibilité de livraison lié à une information erronée relève de la responsabilité du client." },
          { heading: "Disponibilité des produits", body: "En cas d'indisponibilité exceptionnelle d'un produit, le client sera contacté afin de convenir d'un remplacement ou d'un remboursement." },
        ]}

      />
      <section className="container-x pb-16">
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-base w-full bg-[#759DD2] text-center text-white hover:bg-[#A3B2D6]"
        >
          DELIVERY EXPRESS
        </a>

      </section>
    </>
  );
}
