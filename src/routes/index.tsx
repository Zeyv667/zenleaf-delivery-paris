import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/caliv-store-hero.png.asset.json";
import wordmark from "@/assets/caliv-wordmark.png.asset.json";
import { useCart } from "@/lib/cart";

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

const DELIVERY = {
  label: "Livraison express",
  hours: "À partir de 10h jusqu'à 21h",
};

function Home() {
  const { open } = useCart();

  return (
    <main>
      {/* HERO */}
      <section className="container-x pt-24">
        <div className="pastel-tile flex items-center justify-center rounded-3xl px-6 py-12 md:py-16">
          <img
            src={wordmark.url}
            alt="CALIV — Premium CBD Paris"
            width={900}
            height={480}
            fetchPriority="high"
            className="w-full max-w-md"
          />
        </div>

        <div className="grid gap-10 py-14 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="eyebrow">CBD premium · Paris & Île-de-France</p>
            <h1 className="display mt-5 text-[3rem] leading-[0.95] md:text-[5rem]">
              Livraison
              <br />
              express.
            </h1>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button className="btn-base btn-primary" onClick={open}>
                DELIVERY EXPRESS
              </button>
              <Link to="/produits" className="btn-base btn-ghost">
                Découvrir nos produits
              </Link>
            </div>

            <ul className="mt-10 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
              {[
                "Livraison rapide",
                "Paiement sécurisé",
                "Produits analysés en laboratoire",
                "THC conforme à la législation française",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-3xl">
          <img
            src={heroImage.url}
            alt="Livraison de CBD premium CALIV à Paris"
            width={1200}
            height={1200}
            className="h-full w-full object-cover"
          />
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


      {/* PRÉCAUTIONS */}
      <section className="container-x pb-20 md:pb-28">
        <div className="rounded-sm border border-border bg-card px-6 py-8 md:px-10 md:py-10">
          <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Précautions
          </h3>
          <ul className="mt-5 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
            <li>Réservé aux personnes majeures (18+).</li>
            <li>Tenir hors de portée des enfants.</li>
            <li>Déconseillé aux femmes enceintes ou allaitantes.</li>
            <li>Peut entraîner un résultat positif au THC.</li>
            <li>Ne pas conduire après utilisation.</li>
            <li>Conserver au sec, au frais et à l’abri de la lumière.</li>
          </ul>
        </div>
      </section>

      {/* SERVICE */}
      <section className="border-y border-border">
        <div className="container-x flex flex-col items-start py-16 md:py-20">
          <h3 className="display text-3xl md:text-5xl">{DELIVERY.label}</h3>
          <p className="mt-3 text-lg text-muted-foreground">{DELIVERY.hours}</p>
          <p className="mt-6 text-lg text-muted-foreground">Paris / IDF (75/93/94)</p>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
            La livraison dans le 91 et le 92 n'est pas encore assurée de manière systématique. Nous travaillons à l'ouverture de ces secteurs. Certaines commandes supérieures à 10 g, à proximité de Paris, peuvent néanmoins être éligibles à la livraison.
          </p>
        </div>
      </section>

      {/* ZONE & QUALITÉ */}
      <section className="bg-primary/10">
        <div className="container-x flex flex-col items-start py-16 md:py-20">
          <h3 className="display text-3xl md:text-5xl">CBD PREMIUM</h3>
          <p className="mt-3 text-lg text-muted-foreground">Fleur cali + Laboratoires en France</p>
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
