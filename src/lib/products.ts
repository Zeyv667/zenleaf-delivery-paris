import pouchSunset from "@/assets/CALIV_ID_MENU.png.asset.json";
import pouchGreen from "@/assets/CALIV_ID_MENU-2.png.asset.json";
import pouchPink from "@/assets/CALIV_ID_MENU-3.png.asset.json";

const sunsetCream = pouchSunset.url;
const blueberryCandy = pouchPink.url;
const bruceBanner = pouchGreen.url;
const frozenHash = pouchGreen.url;
const caliPlate = pouchPink.url;

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
    name: "Sunset Cream",
    type: "Fleur",
    origin: "USA",
    description: "Fleur crémeuse et sucrée, cultivée indoor. Profil doux et gourmand.",
    pricePerGram: 9,
    price: 45,
    image: sunsetCream,
  },
  {
    id: "blueberry-candy",
    name: "Blueberry Candy",
    type: "Fleur",
    origin: "USA",
    description: "Notes de myrtille confite. Têtes compactes aux reflets violets.",
    pricePerGram: 10,
    price: 50,
    image: blueberryCandy,
  },
  {
    id: "bruce-banner",
    name: "Bruce Banner",
    type: "Fleur",
    origin: "USA",
    description: "Profil terreux et résineux. Fleur dense, très aromatique.",
    pricePerGram: 12,
    price: 60,
    image: bruceBanner,
  },
  {
    id: "frozen",
    name: "Frozen",
    type: "Résine",
    origin: "Maroc",
    description: "Résine fraîche à la texture souple. Arômes verts et épicés.",
    pricePerGram: 12,
    price: 60,
    image: frozenHash,
  },
  {
    id: "cali-plate",
    name: "Cali Plate",
    type: "Résine",
    origin: "Maroc",
    description: "Plaque blonde, grain fin. Arômes floraux et boisés.",
    pricePerGram: 14,
    price: 70,
    image: caliPlate,
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
