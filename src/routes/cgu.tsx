import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/cgu")({
  head: () => ({
    meta: [
      { title: "Conditions générales d'utilisation | CALIV" },
      {
        name: "description",
        content:
          "CGU CALIV : accès au site, majorité obligatoire, comportements interdits, propriété intellectuelle et responsabilités.",
      },
      { property: "og:title", content: "Conditions générales d'utilisation | CALIV" },
      { property: "og:description", content: "Accès au site, responsabilités et propriété intellectuelle." },
      { property: "og:url", content: "https://zenleaf-delivery-paris.lovable.app/cgu" },
    ],
    links: [{ rel: "canonical", href: "https://zenleaf-delivery-paris.lovable.app/cgu" }],
  }),
  component: () => (
    <LegalPage
      title="Conditions générales d'utilisation"
      intro="Les présentes CGU régissent l'accès et l'utilisation du site CALIV. Toute navigation sur le site vaut acceptation sans réserve des présentes conditions."
      sections={[
        {
          heading: "1. Accès au site",
          body: "Le site est accessible gratuitement, 24h/24, sous réserve des interruptions nécessaires à la maintenance, aux mises à jour ou dues à un cas de force majeure. L'accès est strictement réservé aux personnes majeures : une confirmation de majorité est requise à l'entrée et l'accès est bloqué en l'absence de validation.",
        },
        {
          heading: "2. Utilisation conforme",
          body: "L'utilisateur s'engage à utiliser le site conformément à la loi, à l'ordre public et aux présentes CGU, et à fournir des informations exactes, complètes et à jour lors de toute prise de contact ou commande.",
        },
        {
          heading: "3. Comportements interdits",
          body: "Sont notamment interdits : la fausse déclaration de majorité, l'usurpation d'identité, la transmission d'informations erronées, toute tentative d'accès non autorisé, l'extraction automatisée de contenus (scraping), l'introduction de code malveillant, la surcharge des services, la revente ou la fourniture des produits à des mineurs, les propos injurieux, menaçants ou discriminatoires envers l'équipe ou les livreurs, ainsi que tout usage commercial ou concurrentiel des contenus du site.",
        },
        {
          heading: "4. Sanctions",
          body: "En cas de manquement, CALIV pourra, sans préavis ni indemnité, refuser toute commande, restreindre ou bloquer l'accès au site et engager toute action utile devant les juridictions compétentes.",
        },
        {
          heading: "5. Propriété intellectuelle",
          body: "La marque CALIV, le logo, les visuels produits, les photographies, les textes, la charte graphique et le code du site sont protégés. Toute reproduction, représentation, adaptation ou réutilisation, totale ou partielle, sans autorisation écrite préalable est interdite.",
        },
        {
          heading: "6. Responsabilité",
          body: "Les informations publiées sont fournies à titre informatif et ne constituent ni un conseil médical, ni un engagement contractuel. CALIV ne garantit pas l'absence d'erreurs ou d'interruptions et ne saurait être tenue responsable des dommages résultant de l'utilisation du site ou de l'impossibilité d'y accéder, ni du contenu des services tiers accessibles par lien.",
        },
        {
          heading: "7. Données personnelles",
          body: "Les traitements de données et l'usage des cookies sont décrits dans la politique de confidentialité.",
        },
        {
          heading: "8. Modification et droit applicable",
          body: "CALIV peut modifier les présentes CGU à tout moment ; la version applicable est celle publiée sur cette page. Les CGU sont soumises au droit français, les juridictions françaises étant compétentes.",
        },
      ]}
    />
  ),
});
