import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/caliv-store-hero-hd.webp";
import blueLogo from "@/assets/caliv-logo-original.png";
import { ProductMarquee } from "@/components/site/ProductMarquee";




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
      { property: "og:url", content: "https://zenleaf-delivery-paris.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://zenleaf-delivery-paris.lovable.app/" },
      { rel: "preload", as: "image", href: blueLogo },
    ],
  }),
  component: Home,
});



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
            decoding="sync"
            loading="eager"
            className="w-full max-w-[19rem] sm:max-w-md"
          />
        </div>

        <div className="grid gap-8 pt-10 pb-6 md:gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center md:pt-14 md:pb-8">
          <div>
            <p className="eyebrow">CBD+ · PARIS & Île-de-France</p>
            <h1 className="display mt-4 text-center text-[2.5rem] leading-[0.95] sm:text-[3rem] md:text-[5rem]">
              LIVRAISON EXPRESS
            </h1>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="btn-base btn-primary w-full text-center sm:w-auto"
              >
                EXPRESS DELIVERY
              </Link>

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
            decoding="async"
            sizes="(max-width: 768px) 100vw, 45vw"
            className="aspect-square h-full w-full object-cover md:aspect-auto"
          />
          </div>
        </div>
      </section>

      {/* VARIETES */}
      <ProductMarquee />

      {/* SERVICE */}
      <section>
        <div className="container-x flex flex-col items-start py-12 md:py-20">
          <h3 className="display text-[1.75rem] sm:text-3xl md:text-5xl">{DELIVERY.label}</h3>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {DELIVERY.hours}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Paris / IDF (75/93/94)
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            La livraison dans le 91 et le 92 n'est pas encore assurée de manière systématique. Nous travaillons à l'ouverture de ces secteurs. Certaines commandes supérieures à 10 g, à proximité de PARIS, peuvent néanmoins être éligibles à la livraison.
          </p>
        </div>
      </section>

      {/* ZONE & QUALITÉ */}
      <section className="bg-primary/10">
        <div className="container-x flex flex-col items-start py-12 md:py-20">
          <h3 className="display text-[1.75rem] sm:text-3xl md:text-5xl">CBD+</h3>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Nos variétés sont analysées en laboratoire français — COA disponible pour chaque variété.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            CBD+ : concentration ++ en cannabidiol (15 % à 25 %), sélectionnée pour les amateurs de profils riches en cannabinoïdes et d'une expérience plus intense que les variétés classiques.
          </p>
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
            <Link to="/cbd" className="btn-base btn-ghost w-full sm:w-auto">
              En savoir plus
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
