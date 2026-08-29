import pouchSunset from "@/assets/CALIV_ID_MENU-5-clean.png.asset.json";
import pouchGreen from "@/assets/CALIV_ID_MENU-4-clean.png.asset.json";
import pouchPink from "@/assets/caliv-pouch-pink-hd.png";
import resinFrozen from "@/assets/caliv-resin-1.png.asset.json";
import resinTwo from "@/assets/caliv-resin-2-hd.png";

const sunsetCream = pouchSunset.url;
const blueberryCandy = pouchPink;
const bruceBanner = pouchGreen.url;
const frozenHash = resinOne;
const caliPlate = resinTwo;

export type ProductType = "Fleur" | "Résine";

export type Product = {
  id: string;
  name: string;
  type: ProductType;
  origin: string;
  description: string;
  pricePerGram: number;
  price: number;
  image: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "sunset-cream",
    name: "CALIV - Flower Bag - SUNSET CREAM",
    type: "Fleur",
    origin: "USA",
    description: "Fleur crémeuse et sucrée, cultivée indoor. Profil doux et gourmand.",
    pricePerGram: 9,
    price: 45,
    image: sunsetCream,
  },
  {
    id: "blueberry-candy",
    name: "CALIV - Flower Bag - BLUEBERRY CANDY",
    type: "Fleur",
    origin: "USA",
    description: "Notes de myrtille confite. Têtes compactes aux reflets violets.",
    pricePerGram: 10,
    price: 50,
    image: blueberryCandy,
  },
  {
    id: "bruce-banner",
    name: "CALIV - FLower Bag - BRUCE BANNER",
    type: "Fleur",
    origin: "USA",
    description: "Profil terreux et résineux. Fleur dense, très aromatique.",
    pricePerGram: 12,
    price: 60,
    image: bruceBanner,
  },
  {
    id: "frozen",
    name: "CALIV - FROZEN",
    type: "Résine",
    origin: "Maroc",
    description: "Résine fraîche à la texture souple. Arômes verts et épicés.",
    pricePerGram: 12,
    price: 60,
    image: frozenHash,
  },
  {
    id: "cali-plate",
    name: "CALIV - CALI PLATE",
    type: "Résine",
    origin: "Maroc",
    description: "Plaque blonde, grain fin. Arômes floraux et boisés.",
    pricePerGram: 14,
    price: 70,
    image: caliPlate,
  },
];

export const FREE_SHIPPING_THRESHOLD = 0;
export const SHIPPING_FEE = 0;

export const PROMO_CODES: Record<string, number> = {
  CALIV10: 0.1,
  BIENVENUE: 0.15,
};

export const formatPrice = (value: number) =>
  new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(value);
