import { createFileRoute } from "@tanstack/react-router";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Package } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/utils";
import { PRODUCTS } from "@/lib/products";
import { supabase } from "@/integrations/supabase/client";



const QUANTITIES = ["5 g", "10 g", "15 g", "20 g", "25 g", "30 g", "50 g", "100 g"];

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
    .max(20, { message: "Le numéro ne doit pas dépasser 20 caractères." }),
  variete: z
    .array(z.string())
    .min(1, { message: "Sélectionnez au moins une variété." }),
  quantite: z
    .string()
    .min(1, { message: "Quantité requise." }),
  details: z
    .string()
    .trim()
    .max(1000, { message: "Les détails ne doivent pas dépasser 1000 caractères." })
    .optional(),
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
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting, dirtyFields },
  } = useForm<OrderForm>({
    resolver: zodResolver(orderSchema),
    defaultValues: { variete: [], quantite: "5 g" },
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
      quantite: data.quantite,
      details: data.details ?? null,
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
      `Quantité(s) : ${data.quantite}`,
      `Adresse complète de livraison :`,
      data.details ? `\nDétails :\n${data.details}` : "",
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
            placeholder: "REYMYSTERIO",
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
              options={PRODUCTS.map((p) => ({ value: p.name, label: p.name }))}
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              quantitySlot={
                <Controller
                  name="quantite"
                  control={control}
                  render={({ field: qField }) => (
                    <label className="flex items-center gap-1.5">
                      <Package className="h-3.5 w-3.5 text-muted-foreground" />
                      <select
                        aria-label="Quantité"
                        className="h-7 cursor-pointer appearance-none rounded-md border border-border bg-background px-2 py-0.5 pr-6 text-xs font-medium text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
                        value={qField.value}
                        onChange={(e) => qField.onChange(e.target.value)}
                        onBlur={qField.onBlur}
                      >
                        {QUANTITIES.map((q) => (
                          <option key={q} value={q}>
                            {q}
                          </option>
                        ))}
                      </select>
                    </label>
                  )}
                />
              }
            />
          )}
        />

        <div className="grid gap-1.5">
          <label
            htmlFor="details"
            className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
          >
            Détails de la commande
          </label>
          <textarea
            id="details"
            rows={3}
            placeholder="Quantité, adresse complète, créneau..."
            enterKeyHint="done"
            className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/60 outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
            {...register("details")}
          />
          {errors.details?.message && (
            <p className="text-sm text-red-600">{errors.details.message}</p>
          )}
        </div>

        <div className="sticky bottom-4 z-10 sm:static">
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
  quantitySlot,
}: {
  id: string;
  label: string;
  error: string | undefined;
  valid: boolean;
  options: { value: string; label: string }[];
  value: string[];
  onChange: (value: string[]) => void;
  onBlur: () => void;
  quantitySlot?: React.ReactNode;
}) {
  const toggle = (optionValue: string) => {
    const next = value.includes(optionValue)
      ? value.filter((v) => v !== optionValue)
      : [...value, optionValue];
    onChange(next);
  };

  return (
    <div className="grid gap-1.5" onBlur={onBlur}>
      <div className="flex items-center justify-between">
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
        {quantitySlot}
      </div>
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

