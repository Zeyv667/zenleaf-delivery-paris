import { createFileRoute } from "@tanstack/react-router";
import { WHATSAPP_LINK } from "@/lib/utils";



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
    <main className="container-x pb-24 pt-28 md:pb-32 md:pt-36">
      <p className="eyebrow">Contact</p>
      <h1 className="display mt-4 max-w-2xl text-[2.25rem] sm:text-4xl md:text-6xl">Une question ?</h1>
      <p className="mt-6 max-w-md text-sm text-muted-foreground">
        Notre équipe répond du lundi au dimanche, de 10h à 23h.
      </p>

      <div className="mt-10 grid max-w-3xl gap-4 sm:gap-8 md:mt-16 md:grid-cols-3">
        <a href="https://wa.me/33600000000" className="block rounded-sm border border-border p-6 hover:bg-secondary md:p-8">
          <p className="eyebrow">WhatsApp</p>
          <p className="mt-3 text-lg tracking-tight">+33 6 00 00 00 00</p>
        </a>
        <a href="tel:+33600000000" className="block rounded-sm border border-border p-6 hover:bg-secondary md:p-8">
          <p className="eyebrow">Téléphone</p>
          <p className="mt-3 text-lg tracking-tight">+33 6 00 00 00 00</p>
        </a>
        <a href="mailto:contact@caliv.fr" className="block rounded-sm border border-border p-6 hover:bg-secondary md:p-8">
          <p className="eyebrow">E-mail</p>
          <p className="mt-3 text-lg tracking-tight">contact@caliv.fr</p>
        </a>
      </div>
      <section className="py-12 md:py-20">
        <DeliveryExpressButton />
      </section>

    </main>
  );
}

function DeliveryExpressButton() {
  const { open } = useCart();
  return (
    <button
      className="btn-base btn-primary w-full active:scale-[0.98] sm:w-auto"
      onClick={open}
    >
      DELIVERY EXPRESS
    </button>
  );
}

