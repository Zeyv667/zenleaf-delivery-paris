import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero.jpg";
import { ProductCard } from "@/components/site/ProductCard";
import { useCart } from "@/lib/cart";
import { PRODUCTS } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CALIV — Livraison de CBD premium à Paris & Île-de-France" },
      {
        name: "description",
        content:
          "Service de livraison de CBD premium à Paris et en Île-de-France. Fleurs et résines sélectionnées, esprit dispensary californien, lots analysés en laboratoire.",
      },
      { property: "og:title", content: "CALIV — Livraison de CBD premium à Paris & Île-de-France" },
      {
        property: "og:description",
        content: "Fleurs et résines sélectionnées, livrées à Paris et en Île-de-France.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const MARQUEE = ["Paris & Île-de-France", "West coast quality", "Analysé en laboratoire", "THC < 0,3 %"];

const STEPS = [
  { n: "01", t: "Choisissez", p: "Cinq références, rien de superflu." },
  { n: "02", t: "Commandez", p: "Deux minutes, paiement sécurisé." },
  { n: "03", t: "On livre", p: "Paris et Île-de-France, emballage neutre." },
];

function Home() {
  const { open } = useCart();

  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-[88vh] overflow-hidden">
        <img
          src={heroImage}
          alt="Livraison de CBD premium CALIV, ambiance californienne"
          width={1600}
          height={1200}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-transparent" />

        <div className="container-x relative flex min-h-[88vh] flex-col justify-end pb-16 pt-32">
          <p className="eyebrow fade-up">Paris · Île-de-France · Delivery only</p>
          <h1 className="display mt-5 max-w-4xl text-[3.4rem] md:text-[7rem] fade-up">
            California
            <br />
            grade delivery.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground fade-up">
            Fleurs et résines CBD sélectionnées à la manière des dispensaries californiens. Livrées chez
            vous, à Paris et en Île-de-France.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row fade-up">
            <button className="btn-base btn-primary" onClick={open}>
              Commander
            </button>
            <Link to="/produits" className="btn-base btn-ghost">
              Voir les produits
            </Link>
          </div>
        </div>
      </section>

      {/* BANDEAU */}
      <div className="overflow-hidden border-y border-border bg-primary py-3">
        <div className="container-x flex flex-wrap items-center justify-center gap-x-8 gap-y-1 text-center">
          {MARQUEE.map((m) => (
            <span
              key={m}
              className="text-[11px] uppercase tracking-[0.24em] text-primary-foreground"
            >
              {m}
            </span>
          ))}
        </div>
      </div>

      {/* PRODUITS */}
      <section className="container-x py-20 md:py-28">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="display text-4xl md:text-6xl">La sélection</h2>
          <p className="max-w-xs text-sm text-muted-foreground">
            Cinq références en sachet 5 g. Trois fleurs, deux résines.
          </p>
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* SERVICE */}
      <section className="border-y border-border">
        <div className="container-x grid gap-10 py-16 md:grid-cols-3 md:py-20">
          {STEPS.map((s) => (
            <div key={s.n}>
              <span className="text-xs tabular-nums text-accent">{s.n}</span>
              <h3 className="display mt-3 text-2xl">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CBD EN BREF */}
      <section className="container-x py-20 md:py-28">
        <div className="grid gap-8 md:grid-cols-[1fr_0.9fr] md:items-end">
          <div>
            <p className="eyebrow">Le CBD, en bref</p>
            <h2 className="display mt-4 max-w-xl text-4xl md:text-5xl">
              Une molécule du chanvre, sans effet planant.
            </h2>
          </div>
          <div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Nos produits contiennent moins de 0,3 % de THC, conformément à la législation française.
              Fleur ou résine, chaque lot est analysé avant livraison.
            </p>
            <Link to="/cbd" className="btn-base btn-ghost mt-6">
              En savoir plus
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-24">
        <div className="rounded-sm border border-border bg-card px-6 py-16 text-center">
          <h2 className="display text-4xl md:text-6xl">On livre aujourd'hui.</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Livraison offerte dès 50 € · Paris & Île-de-France
          </p>
          <button className="btn-base btn-primary mt-8" onClick={open}>
            Commander
          </button>
        </div>
      </section>
    </main>
  );
}
