import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { WHATSAPP_LINK, WHATSAPP_NUMBER } from "@/lib/utils";

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
  email: z
    .string()
    .trim()
    .email({ message: "Adresse e-mail invalide." })
    .max(255, { message: "L'e-mail ne doit pas dépasser 255 caractères." }),
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
      { title: "Contactez-nous — CALIV" },
      {
        name: "description",
        content:
          "Contactez CALIV par WhatsApp, téléphone ou e-mail. Service client 7j/7.",
      },
      { property: "og:title", content: "Contactez-nous — CALIV" },
      {
        property: "og:description",
        content: "Formulaire de contact rapide par WhatsApp.",
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
    formState: { errors, isSubmitting },
  } = useForm<OrderForm>({
    resolver: zodResolver(orderSchema),
  });

  const onSubmit = (data: OrderForm) => {
    const message = [
      "Bonjour CALIV, je souhaite passer une commande.",
      "",
      `Pseudo : ${data.pseudo}`,
      `Numéro : ${data.numero}`,
      `E-mail : ${data.email}`,
      data.details ? `\nDétails :\n${data.details}` : "",
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="container-x pb-24 pt-28 md:pb-32 md:pt-36">
      <p className="eyebrow">Contact</p>
      <h1 className="display mt-4 max-w-2xl text-[2.25rem] sm:text-4xl md:text-6xl">
        CONTACTEZ NOUS
      </h1>
      <p className="mt-6 max-w-md text-sm text-muted-foreground">
        Remplissez le formulaire ci-dessous. Votre demande part directement sur WhatsApp.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-10 grid max-w-xl gap-6"
        noValidate
      >
        <Field
          id="pseudo"
          label="Pseudo"
          error={errors.pseudo?.message}
          inputProps={{
            type: "text",
            placeholder: "REYMYSTERIO",
            autoComplete: "nickname",
            ...register("pseudo"),
          }}
        />

        <Field
          id="numero"
          label="Numéro"
          error={errors.numero?.message}
          inputProps={{
            type: "tel",
            placeholder: "+336 00 00 00 00",
            autoComplete: "tel",
            ...register("numero"),
          }}
        />

        <Field
          id="email"
          label="Mail"
          error={errors.email?.message}
          inputProps={{
            type: "email",
            placeholder: "reymysterio619@caliv.fr",
            autoComplete: "email",
            ...register("email"),
          }}
        />

        <div className="grid gap-2">
          <label
            htmlFor="details"
            className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
          >
            Détails de la commande
          </label>
          <textarea
            id="details"
            rows={4}
            placeholder="Variété souhaitée, quantité, adresse complète..."
            className="w-full resize-none rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
            {...register("details")}
          />
          {errors.details?.message && (
            <p className="text-sm text-red-600">{errors.details.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-base btn-primary w-full text-center uppercase tracking-wide sm:w-auto"
        >
          Envoyer la commande
        </button>
      </form>

      <section className="py-12 md:py-20">
        <DeliveryExpressButton />
      </section>
    </main>
  );
}

function Field({
  id,
  label,
  error,
  inputProps,
}: {
  id: string;
  label: string;
  error: string | undefined;
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
}) {
  return (
    <div className="grid gap-2">
      <label
        htmlFor={id}
        className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={id}
        className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
        {...inputProps}
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}

function DeliveryExpressButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-base btn-primary w-full text-center active:scale-[0.98] sm:w-auto"
    >
      DELIVERY EXPRESS
    </a>
  );
}
