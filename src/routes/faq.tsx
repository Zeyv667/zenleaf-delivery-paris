import { createFileRoute } from "@tanstack/react-router";

const ITEMS = [
  { q: "Le CBD est-il légal ?", a: "Oui, conformément à la réglementation française." },
  { q: "Quel est le délai de livraison ?", a: "Selon votre zone géographique." },
  { q: "Comment payer ?", a: "Carte bancaire sécurisée." },
  { q: "Les produits sont-ils testés ?", a: "Oui, chaque lot est contrôlé." },
  { q: "La livraison est-elle offerte ?", a: "Oui, dès 50 € d'achat." },
  { q: "Puis-je commander si j'ai moins de 18 ans ?", a: "Non, la vente est réservée aux majeurs." },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ CBD — Légalité, livraison, paiement | CALIV" },
      {
        name: "description",
        content:
          "Réponses aux questions fréquentes sur la légalité du CBD, les délais de livraison, le paiement sécurisé et les analyses laboratoire.",
      },
      { property: "og:title", content: "FAQ CBD | CALIV" },
      { property: "og:description", content: "Légalité, livraison, paiement et analyses laboratoire." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
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
            <summary className="flex cursor-pointer list-none items-center justify-between text-base">
              {item.q}
              <span className="text-muted-foreground transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-sm text-muted-foreground">{item.a}</p>
          </details>
        ))}
      </div>
    </main>
  );
}
