import { Banknote, CreditCard, Smartphone } from "lucide-react";

const METHODS = [
  {
    icon: CreditCard,
    label: "Cartes",
    hint: "Visa, Mastercard, CB",
  },
  {
    icon: Smartphone,
    label: "Google Pay",
    hint: "Paiement sans contact",
  },
  {
    icon: Banknote,
    label: "Espèce",
    hint: "Paiement au livreur",
  },
];

export function PaymentMethods({
  className = "",
  minimal = false,
}: {
  className?: string;
  minimal?: boolean;
}) {
  return (
    <div className={`grid gap-3 sm:grid-cols-3 ${className}`}>
      {METHODS.map(({ icon: Icon, label, hint }) => (
        <div
          key={label}
          className={`flex items-center gap-3 ${
            minimal
              ? ""
              : "rounded-sm border border-[#FBD9DF] bg-[#FBD9DF]/40 px-4 py-3"
          }`}
        >
          <span
            className={`inline-flex shrink-0 items-center justify-center rounded-full bg-[#759DD2] text-white ${
              minimal ? "h-8 w-8" : "h-9 w-9"
            }`}
          >
            <Icon size={minimal ? 16 : 18} strokeWidth={1.8} />
          </span>
          <div>
            <p className={`font-medium text-foreground ${minimal ? "text-xs" : "text-sm"}`}>
              {label}
            </p>
            <p className={`text-muted-foreground ${minimal ? "text-[10px]" : "text-xs"}`}>
              {hint}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
