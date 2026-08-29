import { WHATSAPP_LINK } from "@/lib/utils";

export function ExpressDeliveryBlock() {
  return (
    <section className="relative mt-8 overflow-hidden rounded-2xl bg-express-bg p-6 shadow-2xl sm:p-8 md:rounded-3xl">
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-express-accent/20 blur-[70px]" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-express-accent/10 blur-[70px]" />

      <div className="relative flex flex-col items-center text-center">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-express-accent/20 bg-express-accent-soft px-3 py-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-express-accent/75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-express-accent" />
          </span>
          <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-express-accent">
            Service Actif
          </span>
        </div>

        <h2 className="display text-3xl text-background sm:text-4xl md:text-5xl">
          Express <span className="text-express-accent">Delivery</span>
        </h2>
        <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-express-muted">
          PARIS & Île-de-France
        </p>

        <div className="mt-8 w-full max-w-md space-y-3">
          <div className="flex items-center gap-4 rounded-2xl border border-background/10 bg-express-bg-soft p-4 text-left">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-express-accent/20">
              <svg className="h-5 w-5 text-express-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-background">Livraison express</p>
              <p className="text-xs text-express-muted">À partir de 10h jusqu'à 21h</p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-background/10 bg-express-bg-soft p-4 text-left">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-express-accent/20">
              <svg className="h-5 w-5 text-express-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-background">Discrétion totale</p>
              <p className="text-xs text-express-muted">Colis neutre, sans odeur</p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-background/10 bg-express-bg-soft p-4 text-left">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-express-accent/20">
              <svg className="h-5 w-5 text-express-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-background">Paiement flexible</p>
              <p className="text-xs text-express-muted">Cartes, Google Pay ou espèce</p>
            </div>
          </div>
        </div>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer noopener"
          className="group relative mt-8 inline-flex w-full max-w-md items-center justify-center overflow-hidden rounded-2xl bg-express-accent px-6 py-4 text-center font-extrabold text-sm uppercase tracking-widest text-express-bg shadow-[0_0_30px_rgba(16,185,129,0.25)] transition-transform active:scale-[0.98] sm:w-auto"
        >
          <span className="absolute inset-0 translate-y-full bg-background/20 transition-transform duration-300 group-hover:translate-y-0" />
          <span className="relative">Commander maintenant</span>
        </a>

        <p className="mt-5 text-[10px] uppercase tracking-tighter text-express-muted">
          CBD premium &bull; Analyses laboratoire &bull; Minimum 5 g
        </p>
      </div>
    </section>
  );
}
