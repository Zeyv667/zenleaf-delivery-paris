import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/cbd")({
  head: () => ({
    meta: [
      { title: "Informations légales sur le CBD — CALIV" },
      {
        name: "description",
        content:
          "Informations légales sur le CBD : définition, conformité réglementaire, précautions d'utilisation et réservé aux adultes.",
      },
      { property: "og:title", content: "Informations légales sur le CBD — CALIV" },
      {
        property: "og:description",
        content: "Tout savoir sur le CBD, sa légalité et les précautions d'utilisation.",
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
    p: "Le cannabidiol (CBD) est un cannabinoïde naturellement présent dans le chanvre (Cannabis Sativa L.). Contrairement au THC, le CBD n'est pas recherché pour ses effets psychotropes.",
  },
  {
    t: "Conformité réglementaire",
    p: "L'ensemble des produits proposés par Caliv provient de variétés de chanvre autorisées et respecte la réglementation française et européenne en vigueur. Les produits commercialisés présentent un taux de THC inférieur aux seuils légaux applicables.",
  },
  {
    t: "Analyses en laboratoire",
    p: "Nos variétés sont analysées en laboratoire français. Un certificat d'analyse (COA) est disponible pour chaque variété.",
  },
  {
    t: "Réservé aux adultes",
    p: "La vente de nos produits est strictement réservée aux personnes majeures de 18 ans et plus.",
  },
  {
    t: "Précautions d'utilisation",
    p: "Tenir hors de portée des enfants. Déconseillé aux femmes enceintes ou allaitantes. En cas de traitement médical ou de doute, demandez conseil à un professionnel de santé. Ne pas utiliser comme substitut à un traitement médical.",
  },
  {
    t: "Conduite et contrôles routiers",
    p: "La consommation de produits à base de chanvre peut, dans certains cas, entraîner un résultat positif lors d'un contrôle routier. Il est recommandé de faire preuve de prudence avant toute activité nécessitant une vigilance particulière.",
  },
  {
    t: "Informations importantes",
    p: "Les produits commercialisés par Caliv ne sont pas des médicaments. Les informations présentes sur ce site sont fournies à titre informatif uniquement et ne constituent en aucun cas un avis médical, un diagnostic ou une recommandation thérapeutique.",
  },
  {
    t: "Évolution de la réglementation",
    p: "La réglementation applicable aux produits à base de chanvre et de CBD est susceptible d'évoluer. Caliv veille en permanence à la conformité de ses produits avec la législation française et européenne en vigueur.",
  },
];

function CbdPage() {
  return (
    <main className="container-x pb-24 pt-28 md:pb-32 md:pt-36">
      <p className="eyebrow">Informations légales</p>
      <h1 className="display mt-4 max-w-3xl text-4xl md:text-6xl">
        Informations légales sur le CBD
      </h1>

      <div className="mt-16 grid max-w-4xl gap-x-12 gap-y-12 md:grid-cols-2">
        {BLOCKS.map((b) => (
          <section key={b.t} className="border-t border-border pt-6">
            <h2 className="text-base font-medium tracking-tight">{b.t}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.p}</p>
          </section>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link to="/produits" className="btn-base btn-primary">
          Voir nos variétés
        </Link>
        <Link to="/faq" className="btn-base btn-ghost">
          Questions fréquentes
        </Link>
      </div>
    </main>
  );
}
