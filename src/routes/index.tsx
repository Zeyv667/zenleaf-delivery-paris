import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/caliv-store-hero-hd.webp";
import wordmarkAsset from "@/assets/caliv-cbd-premium-3.png.asset.json";
import { ProductCard } from "@/components/site/ProductCard";
import { PaymentMethods } from "@/components/site/PaymentMethods";
import { PRODUCTS } from "@/lib/products";
import { WHATSAPP_LINK } from "@/lib/utils";



export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CALIV — Livraison de CBD premium à PARIS & Île-de-France" },
      {
        name: "description",
        content:
          "Service de livraison de CBD premium à PARIS et en Île-de-France. Fleurs et résines sélectionnées, esprit dispensary californien, lots analysés en laboratoire.",
      },
      { property: "og:title", content: "CALIV — Livraison de CBD premium à PARIS & Île-de-France" },
      {
        property: "og:description",
        content: "Fleurs et résines sélectionnées, livrées à PARIS et en Île-de-France.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: wordmarkAsset.url, fetchpriority: "high" },
      { rel: "preload", as: "image", href: heroImage, fetchpriority: "high" },
    ],
  }),
  component: Home,
});

const MARQUEE = ["PARIS & Île-de-France", "Analysé en laboratoire", "THC < 0,3 %"];

const DELIVERY = {
  label: "Livraison express",
  hours: "À partir de 10h jusqu'à 21h",
};

function Home() {
  return (

    <main>
      {/* HERO */}
      <section className="container-x pt-20 md:pt-24">
        <div className="flex items-center justify-center">
          <img
            src={wordmarkAsset.url}
            alt="CALIV — Premium CBD PARIS"
            width={900}
            height={480}
            fetchPriority="high"
            className="w-full max-w-[19rem] sm:max-w-md"
          />
        </div>

        <div className="grid gap-8 py-10 md:gap-10 md:py-14 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="eyebrow">CBD premium · PARIS & Île-de-France</p>
            <h1 className="display mt-4 text-[2.5rem] leading-[0.95] sm:text-[3rem] md:text-[5rem]">
              Livraison
              <br />
              express.
            </h1>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-primary w-full text-center sm:w-auto"
              >
                DELIVERY EXPRESS
              </a>

              <Link to="/produits" className="btn-base btn-ghost w-full sm:w-auto">
                NOS VARIETES
              </Link>
            </div>

            <ul className="mt-8 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
              {[
                "Livraison rapide",
                "Paiement en espèces ou carte",
                "Nos variétés analysées en laboratoire",
                "THC conforme à la législation française",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  {f}
                </li>
              ))}
            </ul>

          </div>

          <div className="overflow-hidden rounded-2xl md:rounded-3xl">
          <img
            src={heroImage}
            alt="Livraison de CBD premium CALIV à PARIS"
            width={1200}
            height={1200}
            loading="lazy"
            className="aspect-square h-full w-full object-cover md:aspect-auto"
          />
          </div>
        </div>
      </section>

      {/* PAIEMENT */}
      <section className="container-x pb-10 md:pb-14">
        <p className="eyebrow mb-4">Paiement</p>
        <PaymentMethods />
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


      {/* VARIETES */}
      <section className="container-x py-14 md:py-28">
        <h3 className="display text-2xl">Fleurs</h3>
        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-8 sm:gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.filter((p) => p.type === "Fleur").map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <h3 className="display mt-12 text-2xl md:mt-16">Résines</h3>
        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-8 sm:gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.filter((p) => p.type === "Résine").map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>


      {/* SERVICE */}
      <section className="border-y border-border">
        <div className="container-x flex flex-col items-start py-12 md:py-20">
          <h3 className="display text-[1.75rem] sm:text-3xl md:text-5xl">{DELIVERY.label}</h3>
          <p className="mt-3 text-base text-muted-foreground md:text-lg">{DELIVERY.hours}</p>
          <p className="mt-6 text-base text-muted-foreground md:text-lg">Paris / IDF (75/93/94)</p>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
            La livraison dans le 91 et le 92 n'est pas encore assurée de manière systématique. Nous travaillons à l'ouverture de ces secteurs. Certaines commandes supérieures à 10 g, à proximité de PARIS, peuvent néanmoins être éligibles à la livraison.
          </p>
        </div>
      </section>

      {/* ZONE & QUALITÉ */}
      <section className="bg-primary/10">
        <div className="container-x flex flex-col items-start py-12 md:py-20">
          <h3 className="display text-[1.75rem] sm:text-3xl md:text-5xl">CBD PREMIUM</h3>
          <p className="mt-3 text-base text-muted-foreground md:text-lg">Nos variétés sont analysées en laboratoire français — COA disponible pour chaque variété.</p>
        </div>
      </section>

      {/* CBD EN BREF */}
      <section className="container-x py-14 md:py-28">
        <div className="grid gap-8 md:grid-cols-[1fr_0.9fr] md:items-end">
          <div>
            <p className="eyebrow">Le CBD, en bref</p>
            <h2 className="display mt-4 max-w-xl text-[2rem] sm:text-4xl md:text-5xl">
              Élaborée à partir de Cannabis sativa L.
            </h2>
          </div>
          <div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Nos variétés contiennent moins de 0,3 % de THC, conformément à la législation française.
              Fleur ou résine, chaque lot est analysé avant livraison.
            </p>
            <Link to="/cbd" className="btn-base btn-ghost mt-6 w-full sm:w-auto">
              En savoir plus
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
