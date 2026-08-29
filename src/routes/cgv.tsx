import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/cgv")({
  head: () => ({
    meta: [
      { title: "Conditions générales de vente | CALIV" },
      {
        name: "description",
        content:
          "CGV CALIV : commande, paiement, livraison, rétractation, garanties légales, médiation de la consommation et droit applicable.",
      },
      { property: "og:title", content: "Conditions générales de vente | CALIV" },
      { property: "og:description", content: "Commande, paiement, livraison, rétractation, garanties et litiges." },
      { property: "og:url", content: "https://zenleaf-delivery-paris.lovable.app/cgv" },
    ],
    links: [{ rel: "canonical", href: "https://zenleaf-delivery-paris.lovable.app/cgv" }],
  }),
  component: () => (
    <LegalPage
      title="Conditions générales de vente"
      intro="Les présentes conditions générales de vente (CGV) régissent l'ensemble des commandes passées auprès de CALIV. Toute commande implique l'acceptation pleine et entière des présentes CGV. Les informations propres à la société (dénomination, SIREN, RCS, TVA, adresse) figurent dans les mentions légales et doivent être complétées par l'éditeur avant mise en ligne."
      sections={[
        {
          heading: "1. Objet et champ d'application",
          body: "Les présentes CGV définissent les droits et obligations des parties dans le cadre de la vente de produits à base de chanvre (CBD) proposés par CALIV à des consommateurs majeurs, livrés à Paris et en Île-de-France. Elles prévalent sur tout autre document. CALIV se réserve le droit de les modifier à tout moment ; les CGV applicables sont celles en vigueur à la date de la commande.",
        },
        {
          heading: "2. Produits et conformité",
          body: "Les produits commercialisés sont conformes à la réglementation applicable en France et contiennent un taux de THC inférieur au seuil légal en vigueur. Les produits ne sont pas des médicaments : ils ne sont pas destinés à diagnostiquer, traiter, guérir ou prévenir une maladie. Les informations publiées sur le site sont fournies à titre informatif uniquement et ne constituent ni un avis médical, ni une allégation de santé. Les photographies et descriptifs sont non contractuels ; des variations naturelles d'aspect, de couleur ou de parfum peuvent exister.",
        },
        {
          heading: "3. Majorité — vente réservée aux plus de 18 ans",
          body: "La vente est strictement réservée aux personnes majeures. L'accès au site est conditionné à une confirmation de majorité. Une pièce d'identité pourra être exigée lors de la livraison. En cas de refus de justifier de sa majorité, la commande sera annulée sans indemnité.",
        },
        {
          heading: "4. Processus de commande",
          body: "La commande est passée via le formulaire du site puis confirmée par échange sur WhatsApp. Le client doit fournir un pseudo, un numéro de téléphone valide, la ou les variétés souhaitées et une adresse de livraison complète sélectionnée via l'outil d'adresses. Le client est seul responsable de l'exactitude des informations transmises. La commande n'est ferme qu'après confirmation expresse de disponibilité par CALIV.",
        },
        {
          heading: "5. Validation et refus de commande",
          body: "CALIV se réserve le droit de refuser, suspendre ou annuler toute commande : information incomplète ou manifestement erronée, adresse hors zone desservie, doute sur la majorité du client, litige antérieur non résolu, quantité anormale ou suspicion de revente, comportement abusif, injurieux ou menaçant, ou soupçon de fraude. Ce refus ne peut donner lieu à aucune indemnité.",
        },
        {
          heading: "6. Lutte contre la fraude et les impayés",
          body: "En cas de suspicion de fraude, d'usurpation d'identité ou de risque de paiement, CALIV pourra suspendre la commande, demander un justificatif d'identité et de majorité, exiger un règlement en espèces à la livraison, ou annuler la commande. Toute contestation de paiement (chargeback) manifestement infondée pourra faire l'objet d'un recouvrement et, le cas échéant, d'une action judiciaire. Les données strictement nécessaires à la lutte contre la fraude sont traitées conformément à la politique de confidentialité.",
        },
        {
          heading: "7. Prix et paiement",
          body: "Les prix sont indiqués en euros toutes taxes comprises et s'entendent hors éventuels frais spécifiques indiqués avant validation. Le règlement s'effectue au moment de la livraison, par carte bancaire (Visa, Mastercard, CB), paiement sans contact (Google Pay / Apple Pay) ou en espèces auprès du livreur. Le livreur peut ne pas disposer de monnaie pour les grosses coupures. Les produits restent la propriété de CALIV jusqu'au paiement intégral.",
        },
        {
          heading: "8. Livraison, délais et emballage",
          body: "La livraison est offerte pour toute commande validée, avec un minimum de commande de 5 g. Zone desservie : Paris et certaines communes limitrophes d'Île-de-France (les départements 91 et 92 ne sont pas intégralement couverts). Les créneaux annoncés (à partir de 10h jusqu'à 21h) et les délais communiqués sont strictement indicatifs et peuvent varier selon le trafic, la météo, l'affluence ou toute circonstance exceptionnelle ; aucun retard ne peut donner lieu à indemnité. Toutes les commandes sont préparées dans un emballage discret, sécurisé et scellé avant expédition.",
        },
        {
          heading: "9. Réception de la commande",
          body: "Le client doit fournir une adresse complète et accessible et être joignable au numéro communiqué. En cas d'absence, d'adresse erronée ou d'impossibilité de livrer du fait du client, la commande pourra être annulée et une nouvelle livraison facturée. Le client vérifie l'exactitude et l'état de sa commande au moment de la remise et signale toute anomalie immédiatement, et au plus tard dans les 24 heures, par WhatsApp. Les produits étant livrés sous emballage scellé, ils sont réputés utilisés dès ouverture ; aucune réclamation portant sur la nature ou la quantité ne pourra être admise après descellement.",
        },
        {
          heading: "10. Droit de rétractation",
          body: "Conformément aux articles L221-18 et suivants du code de la consommation, le consommateur dispose d'un délai de 14 jours pour se rétracter. Conformément à l'article L221-28, ce droit ne peut être exercé pour les biens descellés ne pouvant être renvoyés pour des raisons d'hygiène ou de protection de la santé, ni pour les biens susceptibles de se détériorer ou de se périmer rapidement. Les produits livrés scellés et ouverts par le client sont donc exclus du droit de rétractation. La demande de rétractation s'exerce par écrit à contact@caliv.fr ; les produits doivent être retournés intacts, scellés et non utilisés, aux frais du client.",
        },
        {
          heading: "11. Retours et remboursements",
          body: "Tout retour doit faire l'objet d'un accord préalable écrit de CALIV. Les remboursements acceptés sont effectués dans un délai de 14 jours à compter de la réception du produit retourné, par le même moyen de paiement ou, en cas de règlement en espèces, par virement. Aucun remboursement ne pourra intervenir pour un produit descellé, utilisé, endommagé par le client ou retourné incomplet.",
        },
        {
          heading: "12. Réclamations et service client",
          body: "Toute réclamation est adressée par WhatsApp au +33 6 95 11 04 38 ou par e-mail à contact@caliv.fr, en précisant le pseudo, la date de commande et l'objet de la réclamation. CALIV s'engage à répondre dans les meilleurs délais.",
        },
        {
          heading: "13. Garanties légales",
          body: "Le client bénéficie de la garantie légale de conformité (articles L217-3 et suivants du code de la consommation) et de la garantie contre les vices cachés (articles 1641 et suivants du code civil), indépendamment de toute garantie commerciale. Ces garanties ne couvrent pas les dommages résultant d'un stockage inadapté, d'une utilisation non conforme ou d'une altération du produit après livraison.",
        },
        {
          heading: "14. Indisponibilité",
          body: "En cas d'indisponibilité exceptionnelle d'un produit, le client est contacté afin de convenir d'un remplacement de valeur équivalente, d'un report ou d'un remboursement. L'indisponibilité ne peut donner lieu à aucune indemnité complémentaire.",
        },
        {
          heading: "15. Force majeure",
          body: "La responsabilité de CALIV ne saurait être engagée en cas d'inexécution due à un cas de force majeure au sens de l'article 1218 du code civil : intempéries, grèves, blocages routiers, pannes, coupures de réseau, décisions administratives, épidémies ou tout événement échappant à son contrôle raisonnable.",
        },
        {
          heading: "16. Limitation de responsabilité",
          body: "CALIV est tenue d'une obligation de moyens. Sa responsabilité est limitée, dans la limite autorisée par la loi, au montant de la commande concernée. Elle ne saurait être tenue responsable des dommages indirects, ni des conséquences d'un usage non conforme des produits, d'une utilisation par un mineur, d'une consommation avant la conduite d'un véhicule, d'un usage par une femme enceinte ou allaitante, ou d'un résultat positif à un test de dépistage du THC. Il appartient au client de s'informer de la réglementation applicable en cas de déplacement à l'étranger.",
        },
        {
          heading: "17. Données personnelles",
          body: "Les données collectées lors de la commande sont traitées conformément à la politique de confidentialité du site, accessible depuis toutes les pages, dans le respect du RGPD.",
        },
        {
          heading: "18. Propriété intellectuelle",
          body: "L'ensemble des éléments du site (marque CALIV, logo, visuels produits, photographies, textes, mise en page, code) est protégé par le droit de la propriété intellectuelle. Toute reproduction, représentation, extraction ou réutilisation, totale ou partielle, sans autorisation écrite préalable est interdite et pourra faire l'objet de poursuites.",
        },
        {
          heading: "19. Médiation de la consommation",
          body: "Conformément à l'article L612-1 du code de la consommation, le client peut recourir gratuitement à un médiateur de la consommation en vue de la résolution amiable d'un litige, après avoir adressé une réclamation écrite préalable à CALIV. Les coordonnées du médiateur retenu par la société doivent être complétées ici par l'éditeur. Le consommateur peut également utiliser la plateforme européenne de règlement en ligne des litiges.",
        },
        {
          heading: "20. Droit applicable et juridiction compétente",
          body: "Les présentes CGV sont soumises au droit français. À défaut de résolution amiable, le litige sera porté devant les juridictions françaises compétentes selon les règles de droit commun ; le consommateur peut saisir la juridiction du lieu de son domicile ou du lieu de livraison. La nullité éventuelle d'une clause n'affecte pas la validité des autres clauses.",
        },
        {
          heading: "21. Acceptation",
          body: "Le client déclare avoir pris connaissance des présentes CGV et de la politique de confidentialité et les accepter expressément, en cochant les cases prévues à cet effet, avant toute validation de commande. Cette acceptation est enregistrée avec la date et l'heure.",
        },
      ]}
    />
  ),
});
