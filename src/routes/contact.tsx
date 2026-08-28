import { createFileRoute } from "@tanstack/react-router";
import { useCart } from "@/lib/cart";


export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Service client CALIV" },
      {
        name: "description",
        content: "Contactez CALIV par WhatsApp, téléphone ou e-mail pour toute question sur votre commande.",
      },
      { property: "og:title", content: "Contact — Service client CALIV" },
      { property: "og:description", content: "WhatsApp, téléphone ou e-mail, 7j/7." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="container-x pb-32 pt-36">
      <p className="eyebrow">Contact</p>
      <h1 className="display mt-4 max-w-2xl text-4xl md:text-6xl">Une question ?</h1>
      <p className="mt-6 max-w-md text-sm text-muted-foreground">
        Notre équipe répond du lundi au dimanche, de 10h à 23h.
      </p>

      <div className="mt-16 grid max-w-3xl gap-8 md:grid-cols-3">
        <a href="https://wa.me/33600000000" className="rounded-sm border border-border p-8 hover:bg-secondary">
          <p className="eyebrow">WhatsApp</p>
          <p className="mt-3 text-lg tracking-tight">+33 6 00 00 00 00</p>
        </a>
        <a href="tel:+33600000000" className="rounded-sm border border-border p-8 hover:bg-secondary">
          <p className="eyebrow">Téléphone</p>
          <p className="mt-3 text-lg tracking-tight">+33 6 00 00 00 00</p>
        </a>
        <a href="mailto:contact@caliv.fr" className="rounded-sm border border-border p-8 hover:bg-secondary">
          <p className="eyebrow">E-mail</p>
          <p className="mt-3 text-lg tracking-tight">contact@caliv.fr</p>
        </a>
      </div>
      <section className="container-x py-16 md:py-20">
        <DeliveryExpressButton />
      </section>

    </main>
  );
}
