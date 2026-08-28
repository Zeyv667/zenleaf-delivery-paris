import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero.jpg";
import { ProductCard } from "@/components/site/ProductCard";
import { useCart } from "@/lib/cart";
import { PRODUCTS } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CALIV — Le CBD premium livré chez vous à Paris" },
      {
        name: "description",
        content:
          "Fleurs et résines CBD sélectionnées, livrées en moins de 60 minutes à Paris. Produits analysés en laboratoire, paiement sécurisé.",
      },
      { property: "og:title", content: "CALIV — Le CBD premium livré chez vous" },
      {
        property: "og:description",
        content: "Fleurs et résines sélectionnées. Livraison rapide. Paiement sécurisé.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const GUARANTEES = [
  "Livraison rapide",
  "Paiement sécurisé",
  "Produits analysés en laboratoire",
  "THC conforme à la législation française",
];

const PILLARS = [
  { title: "Qualité", text: "Produits soigneusement sélectionnés." },
  { title: "Livraison", text: "Livraison rapide et discrète." },
  { title: "Confiance", text: "Analyses laboratoire disponibles." },
];

const STEPS = [
  { n: "01", title: "Choisissez votre produit.", text: "Cinq références, rien de superflu." },
  { n: "02", title: "Validez votre commande.", text: "Paiement sécurisé en quelques secondes." },
  { n: "03", title: "Recevez votre livraison.", text: "Emballage neutre et discret." },
];

const REVIEWS = ["Très bonne qualité.", "Livraison rapide.", "Site simple et efficace."];

const FAQ = [
  { q: "Le CBD est-il légal ?", a: "Oui, conformément à la réglementation française." },
  { q: "Quel est le délai de livraison ?", a: "Selon votre zone géographique." },
  { q: "Comment payer ?", a: "Carte bancaire sécurisée." },
  { q: "Les produits sont-ils testés ?", a: "Oui, chaque lot est contrôlé." },
];

function Home() {
  const { open } = useCart();
  const fleurs = PRODUCTS.filter((p) => p.type === "Fleur");
  const resines = PRODUCTS.filter((p) => p.type === "Résine");

  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-[92vh] overflow-hidden">
        <img
          src={heroImage}
          alt="Pot de fleurs de CBD premium CALIV tenu à la main"
          width={1600}
          height={1808}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />

        <div className="container-x relative flex min-h-[92vh] flex-col justify-end pb-20 pt-32">
          <p className="eyebrow fade-up">CBD premium livré en moins de 60 minutes à Paris</p>
          <h1 className="display mt-6 max-w-3xl text-[3rem] leading-[0.95] md:text-[5.5rem] fade-up">
            Le CBD premium
            <br />
            livré chez vous.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground fade-up">
            Fleurs et résines sélectionnées. Livraison rapide. Paiement sécurisé.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row fade-up">
            <button className="btn-base btn-primary" onClick={open}>
              Commander maintenant
            </button>
            <a href="#produits" className="btn-base btn-ghost">
              Découvrir nos produits
            </a>
          </div>

          <ul className="mt-14 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2 lg:grid-cols-4">
            {GUARANTEES.map((g) => (
              <li key={g} className="flex items-center gap-2">
                <span className="text-olive">✓</span>
                {g}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PRODUITS */}
      <section id="produits" className="container-x scroll-mt-20 py-28 md:py-40">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Nos 5 produits</p>
            <h2 className="display mt-4 text-4xl md:text-5xl">Fleurs</h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Sachets de 5 g. Chaque lot est contrôlé en laboratoire.
          </p>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {fleurs.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <h2 className="display mt-28 text-4xl md:text-5xl">Résines</h2>
        <div className="mt-14 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {resines.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* POURQUOI NOUS */}
      <section className="border-y border-border">
        <div className="container-x grid gap-14 py-24 md:grid-cols-3 md:py-32">
          {PILLARS.map((p) => (
            <div key={p.title}>
              <p className="eyebrow">{p.title}</p>
              <p className="mt-4 text-xl tracking-tight md:text-2xl">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMMENT ÇA MARCHE */}
      <section className="container-x py-28 md:py-40">
        <p className="eyebrow">Comment ça marche</p>
        <div className="mt-14 grid gap-12 md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="border-t border-border pt-8">
              <span className="text-sm tabular-nums text-olive">{s.n}</span>
              <h3 className="mt-6 text-xl tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AVIS */}
      <section className="border-y border-border">
        <div className="container-x py-24 md:py-32">
          <div className="flex items-center gap-3">
            <span className="text-olive">★★★★★</span>
            <p className="text-sm text-muted-foreground">Avis clients vérifiés</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {REVIEWS.map((r) => (
              <figure key={r} className="rounded-sm border border-border p-8">
                <span className="text-olive">★★★★★</span>
                <blockquote className="mt-4 text-lg tracking-tight">« {r} »</blockquote>
                <figcaption className="mt-4 text-xs text-muted-foreground">Client vérifié</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x py-28 md:py-40">
        <div className="grid gap-14 md:grid-cols-[0.6fr_1fr]">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="display mt-4 text-4xl">Questions fréquentes</h2>
            <Link to="/faq" className="btn-base btn-ghost mt-8">
              Toutes les réponses
            </Link>
          </div>
          <div className="divide-y divide-border border-t border-border">
            {FAQ.map((item) => (
              <details key={item.q} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between text-base">
                  {item.q}
                  <span className="text-muted-foreground transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-32">
        <div className="rounded-sm border border-border px-8 py-20 text-center">
          <h2 className="display text-4xl md:text-5xl">Commandez en moins de 30 secondes.</h2>
          <p className="mt-4 text-sm text-muted-foreground">Livraison offerte dès 50 €.</p>
          <button className="btn-base btn-primary mt-10" onClick={open}>
            Commander maintenant
          </button>
        </div>
      </section>
    </main>
  );
}
