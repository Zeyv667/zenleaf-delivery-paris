import { createFileRoute, Link } from "@tanstack/react-router";
import { DeliveryCTA } from "@/components/site/DeliveryCTA";

export const Route = createFileRoute("/cbd")({
  head: () => ({
    meta: [
      { title: "Le CBD, en bref — comprendre nos fleurs et résines | CALIV" },
      {
        name: "description",
        content:
          "Qu'est-ce que le CBD, comment il est cultivé, ce que dit la loi française et comment choisir entre fleur et résine. L'essentiel en trois minutes.",
      },
      { property: "og:title", content: "Le CBD, en bref | CALIV" },
      {
        property: "og:description",
        content: "L'essentiel sur le CBD : origine, légalité, fleurs et résines.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/cbd" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/cbd" }],
  }),
  component: CbdPage,
});

const BLOCKS = [
  {
    t: "Qu'est-ce que le CBD ?",
    p: "Le cannabidiol est une molécule naturellement présente dans le chanvre. Contrairement au THC, il n'est pas classé comme stupéfiant et n'a pas d'effet planant.",
  },
  {
    t: "Fleur ou résine ?",
    p: "La fleur est le bouton séché de la plante, apprécié pour ses arômes. La résine est un concentré de trichomes, plus dense et plus intense en parfum.",
  },
  {
    t: "Ce que dit la loi",
    p: "En France, la vente est autorisée pour des produits issus de variétés de chanvre autorisées, avec un taux de THC inférieur à 0,3 %. Vente interdite aux mineurs.",
  },
  {
    t: "Notre sélection",
    p: "Culture indoor, séchage lent, tri à la main. Chaque lot est analysé en laboratoire avant d'être proposé à la livraison.",
  },
];

function CbdPage() {
  return (
    <main className="container-x pb-32 pt-36">
      <p className="eyebrow">Le CBD, en bref</p>
      <h1 className="display mt-4 max-w-3xl text-5xl md:text-7xl">Comprendre avant de choisir.</h1>

      <div className="mt-16 grid max-w-4xl gap-x-12 gap-y-12 md:grid-cols-2">
        {BLOCKS.map((b) => (
          <section key={b.t} className="border-t border-border pt-6">
            <h2 className="text-base font-medium tracking-tight">{b.t}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.p}</p>
          </section>
        ))}
      </div>

      <p className="mt-16 max-w-2xl text-xs leading-relaxed text-muted-foreground">
        Ces informations sont fournies à titre général et ne constituent ni un conseil médical ni une
        promesse d'effet thérapeutique.
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link to="/produits" className="btn-base btn-primary">
          Voir les produits
        </Link>
        <Link to="/faq" className="btn-base btn-ghost">
          Questions fréquentes
        </Link>
      </div>
    </main>
  );
}
