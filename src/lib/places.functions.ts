import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_maps";

export const autocompleteAddress = createServerFn({ method: "POST" })
  .inputValidator((data) =>
    z.object({ input: z.string().trim().min(3).max(200) }).parse(data),
  )
  .handler(async ({ data }) => {
    const lovableKey = process.env["LOVABLE_API_KEY"];
    const mapsKey = process.env["GOOGLE_MAPS_API_KEY"];
    if (!lovableKey || !mapsKey) return { suggestions: [] as string[] };

    const response = await fetch(`${GATEWAY_URL}/places/v1/places:autocomplete`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": mapsKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        input: data.input,
        includedRegionCodes: ["fr"],
        languageCode: "fr",
        pageSize: 10,
        // Bias: rectangle couvrant toute l'Île-de-France (des Yvelines à la Seine-et-Marne,
        // de l'Oise côté nord au sud de l'Essonne) pour faire remonter les adresses IDF
        // en premier, tout en gardant le reste de la France disponible après.
        locationBias: {
          rectangle: {
            low: { latitude: 48.32, longitude: 1.45 },
            high: { latitude: 49.25, longitude: 3.55 },
          },
        },
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`Places autocomplete failed [${response.status}]: ${errorBody}`);
      return { suggestions: [] as string[] };
    }

    const json = (await response.json()) as {
      suggestions?: Array<{ placePrediction?: { text?: { text?: string } } }>;
    };

    const suggestions = (json.suggestions ?? [])
      .map((s) => s.placePrediction?.text?.text)
      .filter((t): t is string => Boolean(t))
      .slice(0, 5);

    return { suggestions };
  });
