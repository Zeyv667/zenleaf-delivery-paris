import { Link } from "@tanstack/react-router";

const LINKS = [
  { to: "/", label: "Accueil" },
  { to: "/produits", label: "Produits" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
  { to: "/cgv", label: "CGV" },
  { to: "/mentions-legales", label: "Mentions légales" },
  { to: "/confidentialite", label: "Politique de confidentialité" },
  { to: "/livraison", label: "Conditions de livraison" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-sm font-semibold tracking-[0.34em]">CALIV</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            CBD premium livré en moins de 60 minutes à Paris.
          </p>
        </div>

        <nav className="flex flex-col gap-3">
          {LINKS.slice(0, 4).map((l) => (
            <Link key={l.to} to={l.to} className="text-sm text-muted-foreground hover:text-foreground">
              {l.label}
            </Link>
          ))}
        </nav>

        <nav className="flex flex-col gap-3">
          {LINKS.slice(4).map((l) => (
            <Link key={l.to} to={l.to} className="text-sm text-muted-foreground hover:text-foreground">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="container-x flex flex-col gap-4 border-t border-border py-8 md:flex-row md:items-center md:justify-between">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} CALIV — Produits contenant moins de 0,3 % de THC, conformes à la
          législation française. Vente interdite aux mineurs.
        </p>
        <div className="flex gap-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer noopener"
            className="text-xs text-muted-foreground hover:text-foreground"
          >
            Instagram
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noreferrer noopener"
            className="text-xs text-muted-foreground hover:text-foreground"
          >
            TikTok
          </a>
        </div>
      </div>
    </footer>
  );
}
