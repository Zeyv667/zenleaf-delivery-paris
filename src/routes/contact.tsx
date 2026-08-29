import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { WHATSAPP_NUMBER } from "@/lib/utils";
import { PRODUCTS } from "@/lib/products";
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
    .max(20, { message: "Le numéro ne doit pas dépasser 20 caractères." }),
  variete: z
    .string()
    .trim()
    .min(3, { message: "Variété requise." })
    .max(255, { message: "La variété ne doit pas dépasser 255 caractères." }),
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
    formState: { errors, isSubmitting, dirtyFields },
  } = useForm<OrderForm>({
    resolver: zodResolver(orderSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: OrderForm) => {
    const { error } = await supabase.from("commandes").insert({
      pseudo: data.pseudo,
      numero: data.numero,
      variete: data.variete,
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
      `Variété(s) : ${data.variete}`,
      `Quantité(s) :`,
      `Adresse complète de livraison :`,
      data.details ? `\nDétails :\n${data.details}` : "",
      "",
      "Merci de me confirmer la disponibilité ainsi que le délai estimé de livraison.",
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

        <SelectField
          id="variete"
          label="Variété"
          error={errors.variete?.message}
          valid={Boolean(dirtyFields.variete) && !errors.variete}
          selectProps={{
            autoComplete: "off",
            ...register("variete"),
          }}
        >
          <option value="" disabled>
            Choisissez une variété
          </option>
          {PRODUCTS.map((product) => (
            <option key={product.id} value={product.name}>
              {product.name}
            </option>
          ))}
        </SelectField>

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

function SelectField({
  id,
  label,
  error,
  valid,
  selectProps,
  children,
}: {
  id: string;
  label: string;
  error: string | undefined;
  valid: boolean;
  selectProps: React.SelectHTMLAttributes<HTMLSelectElement>;
  children: React.ReactNode;
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
      <select
        id={id}
        aria-invalid={Boolean(error)}
        className={`w-full appearance-none rounded-lg border bg-background px-4 py-3.5 text-base text-foreground outline-none transition focus:ring-2 ${
          error
            ? "border-red-500 focus:border-red-500 focus:ring-red-500/25"
            : valid
              ? "border-green-500/60 focus:border-primary focus:ring-ring/30"
              : "border-border focus:border-primary focus:ring-ring/30"
        }`}
        {...selectProps}
      >
        {children}
      </select>
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}

