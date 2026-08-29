import { Link } from "@tanstack/react-router";
import logo from "@/assets/caliv-logo.png";
import { PaymentMethods } from "@/components/site/PaymentMethods";

const LINKS = [
  { to: "/produits", label: "NOS VARIETES" },
  { to: "/cbd", label: "Le CBD" },
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
      <div className="container-x grid gap-8 py-12 md:grid-cols-2 md:gap-12 md:py-16">
        <div>
          <img src={logo} alt="CALIV Premium CBD PARIS" width={56} height={56} className="h-12 w-auto" />
          <p className="display mt-4 text-2xl tracking-[0.12em]">CALIV</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Livraison de CBD premium à PARIS et en Île-de-France. California grade.
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end md:justify-end">
          <p className="display text-lg">Paiement Sécurisé</p>
          <PaymentMethods minimal className="mt-4 w-full md:max-w-sm" />
        </div>
      </div>

      <div className="container-x grid grid-cols-2 gap-8 border-t border-border pb-[calc(2rem+env(safe-area-inset-bottom))] pt-8 md:grid-cols-[1fr_1fr] md:gap-12">
        <nav className="flex flex-col gap-3">
          {LINKS.slice(0, 4).map((l) => (
            <Link key={l.to} to={l.to} className="py-2 text-sm text-muted-foreground hover:text-foreground md:py-1">
              {l.label}
            </Link>
          ))}
        </nav>

        <nav className="flex flex-col gap-3">
          {LINKS.slice(4).map((l) => (
            <Link key={l.to} to={l.to} className="py-2 text-sm text-muted-foreground hover:text-foreground md:py-1">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="container-x flex flex-col gap-4 border-t border-border pb-[calc(2rem+env(safe-area-inset-bottom))] pt-8 md:flex-row md:items-center md:justify-between">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} CALIV — Nos variétés contiennent moins de 0,3 % de THC, conformes à la
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
