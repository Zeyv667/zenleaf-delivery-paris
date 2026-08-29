import { WHATSAPP_LINK } from "@/lib/utils";

export function DeliveryCTA() {
  return (
    <section className="container-x py-12 md:py-20">
      <div className="flex flex-col items-start rounded-sm border border-[#FBD9DF] bg-[#FBD9DF] px-5 py-10 md:px-10 md:py-16">
        <h2 className="display text-[1.75rem] sm:text-3xl md:text-5xl">On livre aujourd'hui.</h2>
        <p className="mt-3 text-sm text-muted-foreground">Livraison offerte dès 50 € · PARIS & Île-de-France</p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-base btn-primary mt-8 w-full active:scale-[0.98] sm:w-auto"
        >
          EXPRESS DELIVERY
        </a>
      </div>
    </section>
  );
}

