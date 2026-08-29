import { Banknote, CreditCard, Smartphone } from "lucide-react";

const METHODS = [
  {
    icon: CreditCard,
    label: "CARTES",
    hint: "Visa, Mastercard, CB",
  },
  {
    icon: Smartphone,
    label: "GOOGLE PAY",
    hint: "Paiement sans contact",
  },
  {
    icon: Banknote,
    label: "ESPÈCE",
    hint: "Paiement au livreur",
  },
];

export function PaymentMethods({ className = "" }: { className?: string }) {
  return (
    <div className={`grid gap-3 sm:grid-cols-3 ${className}`}>
      {METHODS.map(({ icon: Icon, label, hint }) => (
        <div
          key={label}
          className="flex items-center gap-3 rounded-sm border border-[#FBD9DF] bg-[#FBD9DF]/40 px-4 py-3"
        >
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#759DD2] text-white">
            <Icon size={18} strokeWidth={1.8} />
          </span>
          <div>
            <p className="text-sm font-medium text-foreground">{label}</p>
            <p className="text-xs text-muted-foreground">{hint}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
