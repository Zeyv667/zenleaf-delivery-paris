import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/caliv-logo.png";

const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/produits", label: "Produits" },
  { to: "/livraison", label: "Livraison" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled || menu ? "border-b border-border bg-background/85 backdrop-blur-xl" : ""
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <button
            onClick={() => setMenu((v) => !v)}
            aria-label={menu ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menu}
            className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
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
            <img src={logo} alt="CALIV Premium CBD Paris" width={40} height={40} className="h-9 w-auto" />
            <span className="display text-lg tracking-[0.14em]">CALIV</span>
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

        <Link
          to="/contact"
          className="btn-base btn-ghost bg-background px-4 py-2 text-[11px] uppercase tracking-[0.2em]"
        >
          Contact
        </Link>
      </div>


      {menu && (
        <nav className="container-x flex flex-col gap-1 pb-6 md:hidden">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMenu(false)}
              className="display border-b border-border py-4 text-2xl"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
