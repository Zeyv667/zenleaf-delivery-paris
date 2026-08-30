import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

export const submitOrder = createServerFn({ method: "POST" })
  .inputValidator((data) =>
    z
      .object({
        pseudo: z.string().trim().min(2).max(50),
        numero: z.string().trim().min(8).max(20),
        variete: z.array(z.string().max(120)).min(1).max(20),
        adresse: z.string().trim().min(8).max(300),
        adresseSelected: z.literal(true, {
          errorMap: () => ({
            message: "Veuillez sélectionner une adresse dans la liste Google Maps.",
          }),
        }),
      })
      .parse(data),
  )
  .handler(async ({ data }) => {
    const supabasePublic = createClient<Database>(
      process.env["SUPABASE_URL"]!,
      process.env["SUPABASE_PUBLISHABLE_KEY"]!,
      {
        auth: {
          storage: undefined,
          persistSession: false,
          autoRefreshToken: false,
        },
      },
    );

    const { error } = await supabasePublic.from("commandes").insert({
      pseudo: data.pseudo,
      numero: data.numero,
      variete: data.variete.join(", "),
      details: data.adresse || null,
    });

    if (error) {
      throw new Error("Enregistrement de la commande impossible.");
    }

    return { ok: true as const };
  });
