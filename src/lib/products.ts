import pouchSunset from "@/assets/product-sunset-cream.webp";
import pouchPink from "@/assets/product-blueberry-candy.webp";
import pouchGreen from "@/assets/product-bruce-banner.webp";
import resinFrozen from "@/assets/product-frozen.webp";
import resinTwo from "@/assets/product-cali-plate.webp";

const sunsetCream = pouchSunset;
const blueberryCandy = pouchPink;
const bruceBanner = pouchGreen;
const frozenHash = resinFrozen;
const caliPlate = resinTwo;

export type ProductType = "Fleur" | "Résine";

export type ProductVariant = {
  label: string;
  price: number;
};

export type Product = {
  id: string;
  name: string;
  type: ProductType;
  origin: string;
  description: string;
  pricePerGram: number;
  price: number;
  image: string;
  variants?: ProductVariant[];
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
    name: "CALIV - Frozen",
    type: "Résine",
    origin: "Maroc",
    description: "Résine fraîche à la texture souple. Arômes verts et épicés.",
    pricePerGram: 12,
    price: 24,
    image: frozenHash,
    variants: [
      { label: "2G", price: 24 },
      { label: "5G", price: 50 },
    ],
  },
  {
    id: "cali-plate",
    name: "CALIV - CALI PLATE",
    type: "Résine",
    origin: "Maroc",
    description: "Plaque blonde, grain fin. Arômes floraux et boisés.",
    pricePerGram: 14,
    price: 28,
    image: caliPlate,
    variants: [
      { label: "2G", price: 28 },
      { label: "5G", price: 60 },
    ],
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
