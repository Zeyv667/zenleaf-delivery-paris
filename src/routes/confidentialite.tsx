import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/confidentialite")({
  head: () => ({
    meta: [
      { title: "Politique de confidentialité & cookies | CALIV" },
      {
        name: "description",
        content:
          "RGPD : données collectées, finalités, bases légales, durées de conservation, cookies, consentement et droits des utilisateurs CALIV.",
      },
      { property: "og:title", content: "Politique de confidentialité & cookies | CALIV" },
      { property: "og:description", content: "Données personnelles, cookies, consentement et droits RGPD." },
      { property: "og:url", content: "https://zenleaf-delivery-paris.lovable.app/confidentialite" },
    ],
    links: [{ rel: "canonical", href: "https://zenleaf-delivery-paris.lovable.app/confidentialite" }],
  }),
  component: () => (
    <LegalPage
      title="Politique de confidentialité & cookies"
      intro="CALIV traite vos données personnelles conformément au Règlement (UE) 2016/679 (RGPD) et à la loi Informatique et Libertés. Cette politique décrit les données collectées, leur usage, leur durée de conservation et vos droits."
      sections={[
        {
          heading: "Responsable de traitement",
          body: "Le responsable de traitement est la société éditrice du site CALIV, dont les coordonnées complètes figurent dans les mentions légales. Contact pour toute question relative aux données : contact@caliv.fr.",
        },
        {
          heading: "Données collectées",
          body: "Formulaire de commande : pseudo, numéro de téléphone (WhatsApp), variété(s) souhaitée(s), adresse complète de livraison, date et heure d'acceptation des CGV et de la présente politique. Navigation : données techniques (adresse IP tronquée, type d'appareil, pages consultées) uniquement en cas de consentement aux cookies de mesure d'audience. Aucune donnée bancaire n'est collectée ni stockée par le site : le règlement s'effectue à la livraison.",
        },
        {
          heading: "Finalités et bases légales",
          body: "Traitement et livraison des commandes, service client et suivi des réclamations : exécution du contrat. Vérification de la majorité et prévention de la fraude, des impayés et des abus : intérêt légitime. Obligations comptables et fiscales : obligation légale. Mesure d'audience et statistiques : consentement. Aucune décision entièrement automatisée ni profilage n'est mis en œuvre.",
        },
        {
          heading: "Destinataires",
          body: "Les données sont destinées au personnel habilité de CALIV et à ses sous-traitants strictement nécessaires : hébergeur du site, prestataire de base de données, service de messagerie WhatsApp (Meta) et service d'autocomplétion d'adresses (Google Maps). Ces prestataires agissent selon nos instructions. Aucune donnée n'est vendue ni cédée à des tiers à des fins commerciales.",
        },
        {
          heading: "Transferts hors Union européenne",
          body: "Certains prestataires (Meta, Google) peuvent traiter des données hors de l'Union européenne. Ces transferts sont encadrés par les clauses contractuelles types de la Commission européenne ou par une décision d'adéquation.",
        },
        {
          heading: "Durées de conservation",
          body: "Données de commande : 3 ans à compter du dernier contact. Pièces comptables et factures : 10 ans (obligation légale). Preuve du consentement (CGV, confidentialité, majorité, cookies) : 3 ans. Données de mesure d'audience : 13 mois maximum. Au-delà, les données sont supprimées ou anonymisées.",
        },
        {
          heading: "Cookies et traceurs",
          body: "Le site dépose des cookies strictement nécessaires à son fonctionnement (sécurité, mémorisation de la vérification d'âge et du choix cookies), qui ne requièrent pas de consentement. Les cookies de mesure d'audience et de marketing (par exemple Google Analytics, Meta Pixel) ne sont déposés qu'après votre consentement exprès via le bandeau affiché à la première visite.",
        },
        {
          heading: "Gestion du consentement",
          body: "Vous pouvez accepter ou refuser les cookies non essentiels dès votre première visite, sans que le refus n'entrave l'accès au site. Votre choix est conservé 6 mois maximum et peut être modifié à tout moment en supprimant les données de site de votre navigateur ou en nous écrivant à contact@caliv.fr. Le paramétrage de votre navigateur permet également de bloquer ou supprimer les cookies.",
        },
        {
          heading: "Sécurité",
          body: "Le site est servi en HTTPS. Les données sont hébergées sur une infrastructure sécurisée, l'accès est restreint aux personnes habilitées et les enregistrements de commande ne sont ni consultables ni modifiables depuis le site public.",
        },
        {
          heading: "Mineurs",
          body: "Le site est interdit aux mineurs. Aucune donnée n'est sciemment collectée auprès d'une personne de moins de 18 ans ; toute donnée identifiée comme telle est supprimée sans délai.",
        },
        {
          heading: "Vos droits",
          body: "Vous disposez des droits d'accès, de rectification, d'effacement, de limitation, d'opposition, de portabilité et du droit de définir des directives post-mortem. Exercez-les à contact@caliv.fr, en justifiant si nécessaire de votre identité ; une réponse vous est apportée dans un délai d'un mois. Vous pouvez introduire une réclamation auprès de la CNIL (3 place de Fontenoy, 75007 Paris — cnil.fr).",
        },
        {
          heading: "Mise à jour",
          body: "La présente politique peut être modifiée pour tenir compte des évolutions légales ou techniques. La version applicable est celle publiée sur cette page.",
        },
      ]}
    />
  ),
});
