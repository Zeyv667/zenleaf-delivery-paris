import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart";
import logo from "@/assets/caliv-logo.png";

const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/produits", label: "Produits" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const { count, open } = useCart();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-xl" : ""
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3" aria-label="CALIV — accueil">
          <img src={logo} alt="CALIV Premium CBD Paris" width={40} height={40} className="h-9 w-auto" />
          <span className="text-sm font-semibold tracking-[0.34em]">CALIV</span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-[13px] text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={open}
          aria-label="Ouvrir le panier"
          className="btn-base btn-ghost px-4 py-2 text-[13px]"
        >
          Panier
          <span className="tabular-nums text-olive">{count}</span>
        </button>
      </div>
    </header>
  );
}
