import { createFileRoute } from "@tanstack/react-router";
import { ProductCard } from "@/components/site/ProductCard";
import { PRODUCTS } from "@/lib/products";

export const Route = createFileRoute("/produits")({
  head: () => ({
    meta: [
      { title: "Produits CBD — Fleurs et résines | CALIV" },
      {
        name: "description",
        content:
          "Trois fleurs indoor et deux résines CBD en sachet 5 g. Lots analysés en laboratoire, livraison rapide à Paris.",
      },
      { property: "og:title", content: "Produits CBD — Fleurs et résines | CALIV" },
      { property: "og:description", content: "Fleurs et résines CBD sélectionnées, sachets 5 g." },
      { property: "og:url", content: "/produits" },
    ],
    links: [{ rel: "canonical", href: "/produits" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <main className="container-x pb-32 pt-36">
      <h2 className="display text-3xl">Fleurs</h2>
      <div className="mt-6 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.filter((p) => p.type === "Fleur").map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <h2 className="display mt-20 text-3xl">Résines</h2>
      <div className="mt-6 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.filter((p) => p.type === "Résine").map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  );
}
