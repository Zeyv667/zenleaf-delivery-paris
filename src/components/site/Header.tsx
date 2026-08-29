import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Logo } from "@/components/site/Logo";

const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/produits", label: "NOS VARIETES" },
  { to: "/contact", label: "EXPRESS DELIVERY" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (!menu) return;
    // Verrou de scroll compatible Safari iOS (préserve la position)
    const y = window.scrollY;
    const { body } = document;
    body.style.position = "fixed";
    body.style.top = `-${y}px`;
    body.style.width = "100%";
    body.style.overflow = "hidden";
    return () => {
      body.style.position = "";
      body.style.top = "";
      body.style.width = "";
      body.style.overflow = "";
      window.scrollTo(0, y);
    };
  }, [menu]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 pt-[env(safe-area-inset-top)] transition-colors duration-300 [transform:translateZ(0)] ${
        scrolled || menu ? "border-b border-border bg-background/85 backdrop-blur-xl" : ""
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-3">
        <div className="flex items-center gap-3 sm:gap-6">
          <button
            onClick={() => setMenu((v) => !v)}
            aria-label={menu ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menu}
            className="-ml-2 flex h-11 w-11 flex-col items-center justify-center gap-[5px] md:hidden"
          >
            <span
              className={`h-px w-5 bg-foreground transition-transform ${menu ? "translate-y-[3px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-5 bg-foreground transition-transform ${menu ? "-translate-y-[3px] -rotate-45" : ""}`}
            />
          </button>

          <Link
            to="/"
            className="flex items-center gap-2"
            aria-label="CALIV — accueil"
            onClick={() => setMenu(false)}
          >
            <Logo height={36} priority />
            <span className="display text-lg tracking-[0.14em] text-[#FBD9DF]">CALIV</span>
          </Link>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-[11px] uppercase tracking-[0.2em] text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

      </div>


      {menu && (
        <nav className="container-x flex max-h-[calc(100dvh-4rem)] flex-col gap-1 overflow-y-auto overscroll-contain pb-[max(2rem,env(safe-area-inset-bottom))] md:hidden">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMenu(false)}
              className={`display flex min-h-[56px] items-center border-b border-border py-5 text-2xl ${
                item.label === "EXPRESS DELIVERY" ? "text-[#759DD2]" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
