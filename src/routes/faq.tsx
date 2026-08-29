import { createFileRoute } from "@tanstack/react-router";

const ITEMS = [
  {
    q: "Les produits sont-ils légaux ?",
    a: "Oui. Nos variétés sont conformes à la réglementation française applicable et présentent un taux de THC inférieur au seuil légal. Elles ne sont pas des médicaments et ne font l'objet d'aucune allégation thérapeutique.",
  },
  {
    q: "Qui peut commander ?",
    a: "Uniquement les personnes majeures (18 ans et plus) résidant dans notre zone de livraison à Paris et en Île-de-France. Une pièce d'identité peut être demandée à la livraison.",
  },
  {
    q: "Les colis sont-ils discrets ?",
    a: "Oui. Toutes les commandes sont préparées dans un emballage discret, sécurisé et scellé avant expédition. Aucune mention du contenu n'apparaît à l'extérieur.",
  },
  {
    q: "L'emballage est-il scellé ?",
    a: "Oui, chaque produit est livré scellé. Une fois l'emballage ouvert, le produit est considéré comme utilisé : il ne peut plus être repris et notre responsabilité ne peut plus être engagée après ouverture.",
  },
  {
    q: "Comment exercer le droit de rétractation ?",
    a: "Adressez votre demande à contact@caliv.fr dans les 14 jours suivant la livraison. Conformément à l'article L221-28 du code de la consommation, les produits descellés ne peuvent être repris pour des raisons d'hygiène et de santé. Seuls les produits intacts et scellés peuvent être retournés.",
  },
  {
    q: "Comment demander un remboursement ?",
    a: "Contactez le service client par WhatsApp ou à contact@caliv.fr avec votre pseudo et la date de commande. Après accord écrit et réception du produit retourné intact et scellé, le remboursement est effectué sous 14 jours.",
  },
  {
    q: "Comment contacter le service client ?",
    a: "Par WhatsApp au +33 6 95 11 04 38 (réponse en 10 minutes maximum en général) ou par e-mail à contact@caliv.fr.",
  },
  {
    q: "Quels sont les délais de livraison ?",
    a: "Les livraisons ont lieu à partir de 10h jusqu'à 21h selon les créneaux disponibles. Les délais annoncés sont indicatifs et peuvent varier selon le trafic ou la météo.",
  },
  {
    q: "Comment payer ?",
    a: "Au moment de la livraison : carte bancaire (Visa, Mastercard, CB), paiement sans contact (Google Pay / Apple Pay) ou espèces auprès du livreur.",
  },
  {
    q: "Les produits sont-ils testés ?",
    a: "Oui, chaque variété est analysée en laboratoire français et un certificat d'analyse (COA) est disponible sur demande.",
  },
  {
    q: "La livraison est-elle offerte ?",
    a: "Oui, la livraison est offerte. La commande minimum est de 5 g (un sachet de 5 g).",
  },
  {
    q: "Une commande peut-elle être refusée ?",
    a: "Oui. Nous pouvons refuser ou suspendre toute commande incomplète, hors zone, suspecte, en cas de doute sur la majorité du client ou de risque de fraude, sans indemnité.",
  },
  {
    q: "Comment sont traitées mes données ?",
    a: "Vos données servent uniquement au traitement de la commande, au service client et à nos obligations légales. Consultez notre politique de confidentialité pour connaître les durées de conservation et vos droits RGPD.",
  },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ CBD — Légalité, livraison, rétractation | CALIV" },
      {
        name: "description",
        content:
          "Réponses aux questions fréquentes : légalité du CBD, majorité requise, colis discrets et scellés, rétractation, remboursement, paiement et service client.",
      },
      { property: "og:title", content: "FAQ CBD | CALIV" },
      { property: "og:description", content: "Légalité, livraison discrète, rétractation, remboursement et paiement." },
      { property: "og:url", content: "https://zenleaf-delivery-paris.lovable.app/faq" },
    ],
    links: [{ rel: "canonical", href: "https://zenleaf-delivery-paris.lovable.app/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: ITEMS.map((i) => ({
            "@type": "Question",
            name: i.q,
            acceptedAnswer: { "@type": "Answer", text: i.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <main className="container-x pb-24 pt-28 md:pb-32 md:pt-36">
      <p className="eyebrow">FAQ</p>
      <h1 className="display mt-4 max-w-2xl text-[2.25rem] sm:text-4xl md:text-6xl">Questions fréquentes</h1>

      <div className="mt-16 max-w-2xl divide-y divide-border border-t border-border">
        {ITEMS.map((item) => (
          <details key={item.q} className="group py-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base">
              {item.q}
              <span className="text-muted-foreground transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
          </details>
        ))}
      </div>
    </main>
  );
}
