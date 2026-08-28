import { useEffect, useState } from "react";
import ageLogo from "@/assets/caliv-gorilla-logo.png.asset.json";

export function AgeGate() {
  const [ready, setReady] = useState(false);
  const [verified, setVerified] = useState(true);

  useEffect(() => {
    const stored = window.localStorage.getItem("caliv.age");
    setVerified(stored === "ok");
    setReady(true);
  }, []);

  if (!ready || verified) return null;

  return (
    <div className="fixed inset-0 z-[70] flex flex-col items-center justify-center bg-background px-6 text-center">
      <div className="w-full max-w-md fade-up">
        <p className="eyebrow">Paris · Île-de-France</p>
        <img
          src={ageLogo.url}
          alt="CALIV"
          width={900}
          height={900}
          className="mx-auto mt-6 w-full max-w-[16rem] md:max-w-[18rem]"
        />
        <div className="mx-auto mt-8 h-px w-16 bg-accent" />
        <p className="mt-8 text-sm text-muted-foreground">
          Service de livraison réservé aux personnes majeures.
          <br />
          Avez-vous 18 ans ou plus ?
        </p>
        <div className="mt-8 flex flex-col gap-3">
          <button
            className="btn-base btn-primary w-full"
            onClick={() => {
              window.localStorage.setItem("caliv.age", "ok");
              setVerified(true);
            }}
          >
            Oui, j'ai 18 ans ou plus
          </button>
          <a href="https://www.google.com" className="btn-base btn-ghost w-full">
            Non, je quitte le site
          </a>
        </div>
        <p className="mt-8 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          CALIV — Premium CBD delivery
        </p>
      </div>
    </div>
  );
}


export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(!window.localStorage.getItem("caliv.cookies"));
  }, []);

  const decide = (value: string) => {
    window.localStorage.setItem("caliv.cookies", value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-border bg-card/95 backdrop-blur-xl">
      <div className="container-x flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between">
        <p className="text-xs leading-relaxed text-muted-foreground md:max-w-xl">
          Nous utilisons des cookies pour mesurer l'audience et améliorer votre expérience. Vous pouvez
          accepter ou refuser les cookies de mesure.
        </p>
        <div className="flex gap-3">
          <button className="btn-base btn-ghost px-5 py-2" onClick={() => decide("refused")}>
            Refuser
          </button>
          <button className="btn-base btn-primary px-5 py-2" onClick={() => decide("accepted")}>
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col gap-3">
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Instagram CALIV"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-foreground shadow-lg transition-transform hover:scale-105"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
          <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.8.25 2.2.42.6.22 1 .49 1.4.9.4.4.68.8.9 1.4.17.4.36 1 .42 2.2.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.25 1.8-.42 2.2-.22.6-.5 1-.9 1.4-.4.4-.8.68-1.4.9-.4.17-1 .36-2.2.42-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-1.8-.25-2.2-.42-.6-.22-1-.5-1.4-.9-.4-.4-.68-.8-.9-1.4-.17-.4-.36-1-.42-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-1.8.42-2.2.22-.6.5-1 .9-1.4.4-.4.8-.68 1.4-.9.4-.17 1-.36 2.2-.42C8.4 2.2 8.8 2.2 12 2.2Zm0 3.5a6.3 6.3 0 1 0 0 12.6 6.3 6.3 0 0 0 0-12.6Zm0 2.2a4.1 4.1 0 1 1 0 8.2 4.1 4.1 0 0 1 0-8.2Zm6.5-2.9a1.45 1.45 0 1 1 0 2.9 1.45 1.45 0 0 1 0-2.9Z" />
        </svg>
      </a>
      <a

        href="https://wa.me/33600000000"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Contacter par WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-olive text-background shadow-lg transition-transform hover:scale-105"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.91-4.45 9.91-9.92C21.96 6.45 17.5 2 12.04 2Zm5.8 14.03c-.24.68-1.4 1.3-1.94 1.35-.5.05-1.13.07-1.82-.11-.42-.11-.96-.29-1.65-.58-2.9-1.25-4.8-4.17-4.94-4.37-.14-.2-1.18-1.57-1.18-3s.75-2.13 1.02-2.42c.27-.29.58-.36.78-.36h.56c.18 0 .42-.07.66.5.24.58.82 2 .89 2.15.07.14.12.31.02.5-.1.2-.15.32-.29.49-.14.17-.3.38-.43.51-.14.14-.29.3-.13.58.17.29.74 1.22 1.59 1.98 1.09.97 2.01 1.27 2.3 1.41.29.15.46.12.63-.07.17-.2.72-.84.91-1.13.19-.29.39-.24.65-.15.27.1 1.68.79 1.97.94.29.14.48.22.55.34.07.12.07.68-.17 1.36Z" />
        </svg>
      </a>
      <a
        href="tel:+33600000000"
        aria-label="Nous appeler"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-lg transition-transform hover:scale-105"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
          <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.2 1l-2.2 2.2Z" />
        </svg>
      </a>
    </div>
  );
}
