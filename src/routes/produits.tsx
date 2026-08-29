import { createFileRoute } from "@tanstack/react-router";
import { ProductCard } from "@/components/site/ProductCard";
import { PRODUCTS } from "@/lib/products";


export const Route = createFileRoute("/produits")({
  head: () => ({
    meta: [
      { title: "Nos variétés CBD — Fleurs et résines | CALIV" },
      {
        name: "description",
        content:
          "Trois fleurs indoor et deux résines CBD en sachet 5 g. Lots analysés en laboratoire, livraison rapide à PARIS.",
      },
      { property: "og:title", content: "Nos variétés CBD — Fleurs et résines | CALIV" },
      { property: "og:description", content: "Fleurs et résines CBD sélectionnées, sachets 5 g." },
      { property: "og:url", content: "/produits" },
    ],
    links: [{ rel: "canonical", href: "/produits" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (

    <main className="container-x pb-24 pt-28 md:pb-32 md:pt-36">
      <h2 className="display text-2xl sm:text-3xl">Fleurs</h2>
      <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-8 sm:gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.filter((p) => p.type === "Fleur").map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <h2 className="display mt-14 text-2xl sm:text-3xl md:mt-20">Résines</h2>
      <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-8 sm:gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
      {PRODUCTS.filter((p) => p.type === "Résine").map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <section className="mt-14 rounded-sm border border-border bg-card px-5 py-5 md:px-10 md:py-6">
        <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Qualité contrôlée
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Nos variétés sont analysées en laboratoire français. Un certificat d'analyse (COA) est disponible pour chaque variété.
        </p>
      </section>

      {/* INFORMATIONS LÉGALES */}
      <section className="mt-6">
        <div className="rounded-sm border border-border bg-card px-5 py-7 md:px-10 md:py-10">
          <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Informations légales
          </h3>
          <div className="mt-6 grid gap-6 text-sm text-muted-foreground sm:grid-cols-2">
            <div>
              <h4 className="font-semibold text-foreground">Réservé aux adultes</h4>
              <p className="mt-1">La vente de nos produits est strictement réservée aux personnes âgées de 18 ans et plus.</p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground">Conformité réglementaire</h4>
              <p className="mt-1">Tous les produits proposés par Caliv sont issus de variétés de Cannabis sativa L. autorisées et conformes à la réglementation française et européenne en vigueur.</p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground">Certificats d'analyse</h4>
              <p className="mt-1">Chaque variété commercialisée dispose d'un certificat d'analyse (COA) réalisé par un laboratoire indépendant garantissant sa traçabilité et sa conformité.</p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground">Produits non médicaux</h4>
              <ul className="mt-1 list-disc space-y-1 pl-4">
                <li>Les produits commercialisés par Caliv ne sont pas des médicaments.</li>
                <li>Les informations présentes sur ce site sont fournies à titre informatif uniquement et ne constituent ni un avis médical, ni un diagnostic, ni une recommandation thérapeutique.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground">Aucune allégation thérapeutique</h4>
              <p className="mt-1">Caliv ne formule aucune allégation médicale concernant ses produits. Nos produits ne sont pas destinés à diagnostiquer, traiter, guérir ou prévenir une maladie.</p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground">Précautions d'utilisation</h4>
              <ul className="mt-1 list-disc space-y-1 pl-4">
                <li>Tenir hors de portée des enfants.</li>
                <li>Déconseillé aux femmes enceintes ou allaitantes.</li>
                <li>En cas de traitement médical, demander l'avis d'un professionnel de santé.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground">Conduite et vigilance</h4>
              <p className="mt-1">Par mesure de précaution, il est recommandé d'éviter la consommation de produits à base de chanvre avant toute activité nécessitant une vigilance particulière.</p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground">Responsabilité</h4>
              <p className="mt-1">Le client est seul responsable de l'utilisation des produits après leur achat et s'engage à respecter la législation applicable dans son pays de résidence.</p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
