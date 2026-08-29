import { createFileRoute } from "@tanstack/react-router";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect, useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { MapPin, Loader2 } from "lucide-react";
import { autocompleteAddress } from "@/lib/places.functions";
import { WHATSAPP_NUMBER } from "@/lib/utils";
import { PRODUCTS, formatPrice } from "@/lib/products";
import { supabase } from "@/integrations/supabase/client";

const orderSchema = z.object({
  pseudo: z
    .string()
    .trim()
    .min(2, { message: "Pseudo requis (min. 2 caractères)." })
    .max(50, { message: "Le pseudo ne doit pas dépasser 50 caractères." }),
  numero: z
    .string()
    .trim()
    .min(8, { message: "Numéro requis." })
    .max(20, { message: "Le numéro ne doit pas dépasser 20 caractères." })
    .refine(
      (v) =>
        /^(?:(?:\+|00)33[\s\.]?0?|0)[1-9](?:[\s\.]?\d{2}){4}$/.test(
          v.replace(/\s/g, ""),
        ),
      {
        message:
          "Numéro invalide. Exemple : 06 00 00 00 00 ou +33 6 00 00 00 00.",
      },
    ),

  variete: z
    .array(z.string())
    .min(1, { message: "Sélectionnez au moins une variété." }),
  adresse: z
    .string()
    .trim()
    .min(8, { message: "Adresse complète requise (numéro, rue, code postal, ville)." })
    .max(300, { message: "L'adresse ne doit pas dépasser 300 caractères." }),
  adresseSelected: z.boolean().refine((v) => v === true, {
    message: "Veuillez sélectionner une adresse dans la liste Google Maps.",
  }),
  majeur: z.boolean().refine((v) => v === true, {
    message: "Vous devez certifier être majeur (18 ans ou plus).",
  }),
  cgv: z.boolean().refine((v) => v === true, {
    message: "Vous devez accepter les conditions générales de vente.",
  }),
  rgpd: z.boolean().refine((v) => v === true, {
    message: "Vous devez accepter la politique de confidentialité.",
  }),
});



type OrderForm = z.infer<typeof orderSchema>;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "EXPRESS DELIVERY — CALIV" },
      {
        name: "description",
        content:
          "Commandez CALIV en EXPRESS DELIVERY à PARIS. Contactez-nous par WhatsApp.",
      },
      { property: "og:title", content: "EXPRESS DELIVERY — CALIV" },
      {
        property: "og:description",
        content: "Commande express de CBD premium à PARIS. Formulaire de contact rapide par WhatsApp.",
      },
      { property: "og:url", content: "https://zenleaf-delivery-paris.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://zenleaf-delivery-paris.lovable.app/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors, isSubmitting, dirtyFields },
  } = useForm<OrderForm>({
    resolver: zodResolver(orderSchema),
    defaultValues: { variete: [], adresse: "", adresseSelected: false },
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const selectedVarieties = watch("variete") ?? [];

  const onSubmit = async (data: OrderForm) => {
    const varietiesText = data.variete.join(", ");

    const { error } = await supabase.from("commandes").insert({
      pseudo: data.pseudo,
      numero: data.numero,
      variete: varietiesText,
      details: data.adresse || null,
    });
    if (error) {
      console.error("Enregistrement de la commande impossible", error.message);
    }

    const message = [
      "Bonjour,",
      "",
      "Je souhaite passer une commande chez Caliv. Êtes-vous disponible pour une livraison ?",
      "",
      `Variété(s) : ${varietiesText}`,
      `Adresse complète de livraison : ${data.adresse}`,
      "",
      "Merci de me confirmer la disponibilité ainsi que le délai estimée de livraison.",
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="container-x pb-24 pt-28 md:pb-32 md:pt-36">
      <p className="eyebrow">EXPRESS DELIVERY</p>
      <h1 className="display mt-4 max-w-2xl text-[2.25rem] sm:text-4xl md:text-6xl">
        CONTACTEZ NOUS
      </h1>
      <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#FBD9DF]/50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-foreground">
        <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
        Réponse rapide (10 min max)
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 grid max-w-xl gap-4 sm:gap-5"
        noValidate
      >
        <Field
          id="pseudo"
          label="Pseudo"
          error={errors.pseudo?.message}
          valid={Boolean(dirtyFields.pseudo) && !errors.pseudo}
          inputProps={{
            type: "text",
            placeholder: "REYMYSTERIO619",
            autoComplete: "nickname",
            autoCapitalize: "characters",
            enterKeyHint: "next",
            ...register("pseudo"),
          }}
        />

        <Field
          id="numero"
          label="Numéro"
          error={errors.numero?.message}
          valid={Boolean(dirtyFields.numero) && !errors.numero}
          inputProps={{
            type: "tel",
            inputMode: "tel",
            placeholder: "+336 00 00 00 00",
            autoComplete: "tel",
            enterKeyHint: "next",
            ...register("numero"),
          }}
        />

        <Controller
          name="variete"
          control={control}
          render={({ field }) => (
            <MultiSelectField
              id="variete"
              label="Variété(s)"
              error={errors.variete?.message}
              valid={Boolean(dirtyFields.variete) && !errors.variete}
              options={PRODUCTS.flatMap((p) =>
                p.variants
                  ? p.variants
                      .filter((v) => v.label !== "2G")
                      .map((v) => ({
                        value: `${p.name} — ${v.label}`,
                        label: `${p.name} — ${v.label} ${formatPrice(v.price)}`,
                      }))
                  : [{ value: p.name, label: `${p.name} ${formatPrice(p.price)}` }],
              )}
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
            />
          )}
        />

        <Controller
          name="adresse"
          control={control}
          render={({ field }) => (
            <AddressField
              value={field.value ?? ""}
              onChange={(value) => {
                field.onChange(value);
                setValue("adresseSelected", false, { shouldValidate: false });
              }}
              onBlur={field.onBlur}
              onSelect={(value) => {
                field.onChange(value);
                setValue("adresseSelected", true, { shouldValidate: true });
              }}
              error={errors.adresse?.message ?? errors.adresseSelected?.message}
              valid={Boolean(dirtyFields.adresse) && !errors.adresse && !errors.adresseSelected}
            />
          )}
        />

        <div className="sticky bottom-[max(1rem,env(safe-area-inset-bottom))] z-10 sm:static">
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-base btn-primary w-full text-center uppercase tracking-wide shadow-lg shadow-primary/25 sm:w-auto sm:shadow-none"
          >
            {isSubmitting ? "ENVOI..." : "EXPRESS DELIVERY"}
          </button>
        </div>
      </form>

      <section className="mt-16 max-w-2xl border-t border-border pt-10">
        <h2 className="display text-2xl md:text-3xl">Conditions de livraison</h2>

        <div className="mt-8 space-y-8">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Processus de commande
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Pour garantir un traitement rapide de votre commande, merci de transmettre les
              informations suivantes :
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              <li>WhatsApp</li>
              <li>Nom de la variété souhaitée</li>
              <li>Adresse complète de livraison (numéro, rue, code postal, ville)</li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Toute information incomplète pourra entraîner un retard dans le traitement de la
              commande.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Frais de livraison
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              La livraison est offerte pour toute commande validée.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Montant minimum de commande
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Un minimum de 5 g est requis pour passer commande, ce qui correspond à un sachet de
              5 g.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Modes de paiement
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Règlement simple et flexible au moment de la livraison :
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">Cartes</span> — Visa, Mastercard,
                CB
              </li>
              <li>
                <span className="font-medium text-foreground">Google Pay</span> — Paiement sans
                contact
              </li>
              <li>
                <span className="font-medium text-foreground">Espèce</span> — Paiement au livreur
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Zone desservie
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Nous livrons actuellement PARIS et certaines communes limitrophes d’Île-de-France.
              Les départements 91 et 92 ne sont pas encore couverts dans leur intégralité. Nous
              travaillons activement à l’extension de notre zone de livraison.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Horaires de livraison
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Les livraisons sont effectuées selon les créneaux disponibles et l'activité du
              service.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Délais de livraison
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Les délais communiqués sont indicatifs et peuvent varier en fonction du trafic, des
              conditions météorologiques ou d'autres circonstances exceptionnelles.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Vérification de l'âge
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              La vente est strictement réservée aux personnes majeures. Une pièce d'identité pourra
              être demandée lors de la livraison.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Réception de la commande
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Le client est tenu de vérifier l’exactitude de sa commande au moment de sa réception
              et de signaler toute anomalie dans les meilleurs délais.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Les produits sont livrés sous emballage scellé. Une fois l’emballage ouvert, le produit
              est considéré comme utilisé et ne peut faire l’objet d’un retour. Caliv ne saurait
              être tenue responsable de l’utilisation faite des produits après ouverture de
              l’emballage.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Adresse de livraison
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Le client doit fournir une adresse complète et accessible. Tout retard ou
              impossibilité de livraison lié à une information erronée relève de la responsabilité
              du client.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Disponibilité des produits
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              En cas d'indisponibilité exceptionnelle d'un produit, le client sera contacté afin
              de convenir d'un remplacement ou d'un remboursement.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function Field({
  id,
  label,
  error,
  valid,
  inputProps,
}: {
  id: string;
  label: string;
  error: string | undefined;
  valid: boolean;
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
}) {
  return (
    <div className="grid gap-1.5">
      <label
        htmlFor={id}
        className="flex items-center justify-between text-xs font-medium uppercase tracking-wider text-muted-foreground"
      >
        {label}
        {valid && (
          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-green-600">
            <span aria-hidden>✓</span> OK
          </span>
        )}
      </label>
      <input
        id={id}
        aria-invalid={Boolean(error)}
        className={`w-full rounded-lg border bg-background px-4 py-3.5 text-base text-foreground placeholder:text-muted-foreground/60 outline-none transition focus:ring-2 ${
          error
            ? "border-red-500 focus:border-red-500 focus:ring-red-500/25"
            : valid
              ? "border-green-500/60 focus:border-primary focus:ring-ring/30"
              : "border-border focus:border-primary focus:ring-ring/30"
        }`}
        {...inputProps}
      />
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}

function MultiSelectField({
  id,
  label,
  error,
  valid,
  options,
  value,
  onChange,
  onBlur,
}: {
  id: string;
  label: string;
  error: string | undefined;
  valid: boolean;
  options: { value: string; label: string }[];
  value: string[];
  onChange: (value: string[]) => void;
  onBlur: () => void;
}) {
  const toggle = (optionValue: string) => {
    const next = value.includes(optionValue)
      ? value.filter((v) => v !== optionValue)
      : [...value, optionValue];
    onChange(next);
  };

  return (
    <div className="grid gap-1.5" onBlur={onBlur}>
      <label
        htmlFor={id}
        className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground"
      >
        {label}
        {valid && (
          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-green-600">
            <span aria-hidden>✓</span> OK
          </span>
        )}
      </label>
      <div
        id={id}
        role="listbox"
        aria-multiselectable="true"
        aria-invalid={Boolean(error)}
        className={`max-h-64 overflow-y-auto rounded-lg border bg-background p-2 outline-none transition focus-within:ring-2 ${
          error
            ? "border-red-500 focus-within:border-red-500 focus-within:ring-red-500/25"
            : valid
              ? "border-green-500/60 focus-within:border-primary focus-within:ring-ring/30"
              : "border-border focus-within:border-primary focus-within:ring-ring/30"
        }`}
      >
        <div className="grid gap-1.5">
          {options.map((option) => {
            const checked = value.includes(option.value);
            return (
              <label
                key={option.value}
                role="option"
                aria-selected={checked}
                className={`flex cursor-pointer items-center gap-3 rounded-md px-3 py-2.5 text-sm transition ${
                  checked
                    ? "bg-primary/10 font-medium text-foreground"
                    : "text-foreground hover:bg-muted/50"
                }`}
              >
                <span
                  className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border transition ${
                    checked
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background"
                  }`}
                >
                  {checked && (
                    <svg
                      className="h-3.5 w-3.5"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="2 7 6 11 12 3" />
                    </svg>
                  )}
                </span>
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={checked}
                  onChange={() => toggle(option.value)}
                />
                <span className="leading-tight">{option.label}</span>
              </label>
            );
          })}
        </div>
      </div>
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}


function AddressField({
  value,
  onChange,
  onBlur,
  onSelect,
  error,
  valid,
}: {
  value: string;
  onChange: (v: string) => void;
  onBlur: () => void;
  onSelect: (v: string) => void;
  error?: string | undefined;
  valid?: boolean | undefined;
}) {
  const fetchSuggestions = useServerFn(autocompleteAddress);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const pickedRef = useRef(false);

  useEffect(() => {
    if (pickedRef.current) {
      pickedRef.current = false;
      return;
    }
    if (value.trim().length < 4) {
      setSuggestions([]);
      return;
    }
    let cancelled = false;
    setLoading(true);
    const timer = setTimeout(async () => {
      try {
        const res = await fetchSuggestions({ data: { input: value.trim() } });
        if (!cancelled) {
          setSuggestions(res.suggestions);
          setOpen(res.suggestions.length > 0);
        }
      } catch {
        if (!cancelled) setSuggestions([]);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }, 350);
    return () => {
      cancelled = true;
      clearTimeout(timer);
      setLoading(false);
    };
  }, [value, fetchSuggestions]);

  return (
    <div className="grid gap-1.5">
      <div className="flex items-center justify-between gap-2">
        <label
          htmlFor="adresse"
          className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
        >
          Adresse complète
        </label>
        {valid && (
          <span className="text-[11px] font-semibold text-green-600">✓ OK</span>
        )}
      </div>
      <div className="relative">
        <MapPin className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          id="adresse"
          type="text"
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            setOpen(true);
          }}
          onBlur={() => {
            onBlur();
            setTimeout(() => setOpen(false), 150);
          }}
          placeholder="12 rue de Rivoli, 75004 Paris"
          autoComplete="street-address"
          enterKeyHint="done"
          className={`w-full rounded-lg border bg-background py-3 pl-9 pr-9 text-base text-foreground placeholder:text-muted-foreground/60 outline-none transition focus:ring-2 focus:ring-ring/30 ${
            error
              ? "border-red-500"
              : valid
                ? "border-green-500"
                : "border-border focus:border-primary"
          }`}
        />
        {loading && (
          <Loader2 className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 animate-spin text-muted-foreground" />
        )}
        {open && suggestions.length > 0 && (
          <ul className="absolute z-20 mt-1 w-full overflow-hidden rounded-lg border border-border bg-background shadow-lg">
            {suggestions.map((s) => (
              <li key={s}>
                <button
                  type="button"
                  className="block w-full px-4 py-2.5 text-left text-sm text-foreground transition hover:bg-muted"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => {
                    pickedRef.current = true;
                    onSelect(s);
                    setSuggestions([]);
                    setOpen(false);
                  }}
                >
                  {s}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}

