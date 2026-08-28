import amnesia from "@/assets/amnesia.jpg";
import gelato from "@/assets/gelato.jpg";
import tropical from "@/assets/tropical.jpg";
import staticHash from "@/assets/static-hash.jpg";
import bubbleHash from "@/assets/bubble-hash.jpg";

export type ProductType = "Fleur" | "Résine";

export type Product = {
  id: string;
  name: string;
  type: ProductType;
  description: string;
  price: number;
  image: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "amnesia-indoor",
    name: "Amnesia Indoor",
    type: "Fleur",
    description: "Culture indoor, profil citronné et terreux. Trichomes denses.",
    price: 29,
    image: amnesia,
  },
  {
    id: "gelato-indoor",
    name: "Gelato Indoor",
    type: "Fleur",
    description: "Notes sucrées et boisées. Têtes compactes aux reflets violets.",
    price: 32,
    image: gelato,
  },
  {
    id: "tropical-haze",
    name: "Tropical Haze",
    type: "Fleur",
    description: "Profil fruité et exotique. Fleur aérienne, pistils orangés.",
    price: 27,
    image: tropical,
  },
  {
    id: "static-hash",
    name: "Static Hash",
    type: "Résine",
    description: "Résine pressée à sec. Texture souple, arômes épicés.",
    price: 39,
    image: staticHash,
  },
  {
    id: "bubble-hash",
    name: "Bubble Hash",
    type: "Résine",
    description: "Extraction à l'eau glacée. Grain blond, arômes floraux.",
    price: 45,
    image: bubbleHash,
  },
];

export const FREE_SHIPPING_THRESHOLD = 50;
export const SHIPPING_FEE = 4.9;

export const PROMO_CODES: Record<string, number> = {
  CALIV10: 0.1,
  BIENVENUE: 0.15,
};

export const formatPrice = (value: number) =>
  new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(value);
