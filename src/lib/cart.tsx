import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import {
  FREE_SHIPPING_THRESHOLD,
  PROMO_CODES,
  PRODUCTS,
  SHIPPING_FEE,
  type Product,
} from "./products";

type CartLine = { id: string; qty: number };

type CartContextValue = {
  lines: Array<CartLine & { product: Product }>;
  count: number;
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  promo: string | null;
  promoError: string | null;
  isOpen: boolean;
  open: () => void;
  close: () => void;
  add: (id: string, qty?: number) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  applyPromo: (code: string) => void;
  clearPromo: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "caliv.cart.v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [raw, setRaw] = useState<CartLine[]>([]);
  const [promo, setPromo] = useState<string | null>(null);
  const [promoError, setPromoError] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as { lines?: CartLine[]; promo?: string | null };
        setRaw(parsed.lines ?? []);
        setPromo(parsed.promo ?? null);
      }
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ lines: raw, promo }));
    } catch {
      /* ignore */
    }
  }, [raw, promo]);

  const value = useMemo<CartContextValue>(() => {
    const lines = raw
      .map((line) => {
        const product = PRODUCTS.find((p) => p.id === line.id);
        return product ? { ...line, product } : null;
      })
      .filter(Boolean) as Array<CartLine & { product: Product }>;

    const subtotal = lines.reduce((sum, l) => sum + l.product.price * l.qty, 0);
    const rate = promo ? (PROMO_CODES[promo] ?? 0) : 0;
    const discount = subtotal * rate;
    const net = subtotal - discount;
    const shipping = net === 0 || net >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;

    return {
      lines,
      count: lines.reduce((sum, l) => sum + l.qty, 0),
      subtotal,
      discount,
      shipping,
      total: net + shipping,
      promo,
      promoError,
      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      add: (id, qty = 1) => {
        setRaw((prev) => {
          const existing = prev.find((l) => l.id === id);
          if (existing) return prev.map((l) => (l.id === id ? { ...l, qty: l.qty + qty } : l));
          return [...prev, { id, qty }];
        });
        setIsOpen(true);
      },
      setQty: (id, qty) =>
        setRaw((prev) =>
          qty <= 0 ? prev.filter((l) => l.id !== id) : prev.map((l) => (l.id === id ? { ...l, qty } : l)),
        ),
      remove: (id) => setRaw((prev) => prev.filter((l) => l.id !== id)),
      applyPromo: (code) => {
        const normalized = code.trim().toUpperCase();
        if (PROMO_CODES[normalized]) {
          setPromo(normalized);
          setPromoError(null);
        } else {
          setPromo(null);
          setPromoError("Code promo invalide.");
        }
      },
      clearPromo: () => {
        setPromo(null);
        setPromoError(null);
      },
    };
  }, [raw, promo, promoError, isOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
