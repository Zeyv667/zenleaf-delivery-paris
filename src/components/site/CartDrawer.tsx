import { useState } from "react";
import { useCart } from "@/lib/cart";
import { FREE_SHIPPING_THRESHOLD, formatPrice } from "@/lib/products";

export function CartDrawer() {
  const cart = useCart();
  const [code, setCode] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - (cart.subtotal - cart.discount));

  return (
    <>
      <div
        onClick={cart.close}
        aria-hidden
        className={`fixed inset-0 z-50 bg-background/70 backdrop-blur-sm transition-opacity duration-300 ${
          cart.isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        aria-label="Panier"
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col border-l border-border bg-card transition-transform duration-300 ease-out ${
          cart.isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <p className="eyebrow">Panier ({cart.count})</p>
          <button onClick={cart.close} className="text-sm text-muted-foreground hover:text-foreground">
            Fermer
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6">
          {cart.lines.length === 0 ? (
            <p className="py-16 text-center text-sm text-muted-foreground">Votre panier est vide.</p>
          ) : (
            <ul className="divide-y divide-border">
              {cart.lines.map(({ product, qty }) => (
                <li key={product.id} className="flex gap-4 py-5">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="h-20 w-20 rounded-sm object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{product.name}</p>
                    <p className="text-xs text-muted-foreground">{product.type} · 5 g</p>
                    <div className="mt-3 flex items-center gap-3">
                      <div className="flex items-center rounded-full border border-border">
                        <button
                          className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground"
                          onClick={() => cart.setQty(product.id, qty - 1)}
                          aria-label="Diminuer"
                        >
                          −
                        </button>
                        <span className="w-6 text-center text-sm tabular-nums">{qty}</span>
                        <button
                          className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground"
                          onClick={() => cart.setQty(product.id, qty + 1)}
                          aria-label="Augmenter"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-sm tabular-nums">{formatPrice(product.price * qty)}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cart.lines.length > 0 && (
          <div className="space-y-4 border-t border-border px-6 py-6">
            <div className="flex gap-2">
              <input
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Code promo"
                className="flex-1 rounded-full border border-border bg-transparent px-4 py-2 text-sm outline-none placeholder:text-muted-foreground focus:border-olive"
              />
              <button className="btn-base btn-ghost px-5 py-2" onClick={() => cart.applyPromo(code)}>
                Appliquer
              </button>
            </div>
            {cart.promoError && <p className="text-xs text-destructive">{cart.promoError}</p>}
            {cart.promo && (
              <p className="text-xs text-olive">Code {cart.promo} appliqué.</p>
            )}

            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-muted-foreground">
                <span>Sous-total</span>
                <span className="tabular-nums">{formatPrice(cart.subtotal)}</span>
              </div>
              {cart.discount > 0 && (
                <div className="flex justify-between text-olive">
                  <span>Remise</span>
                  <span className="tabular-nums">−{formatPrice(cart.discount)}</span>
                </div>
              )}
              <div className="flex justify-between text-muted-foreground">
                <span>Livraison</span>
                <span className="tabular-nums">
                  {cart.shipping === 0 ? "Offerte" : formatPrice(cart.shipping)}
                </span>
              </div>
              <div className="flex justify-between border-t border-border pt-3 text-base font-medium">
                <span>Total</span>
                <span className="tabular-nums">{formatPrice(cart.total)}</span>
              </div>
            </div>

            {remaining > 0 && (
              <p className="text-xs text-muted-foreground">
                Plus que {formatPrice(remaining)} pour la livraison offerte.
              </p>
            )}

            <button
              className="btn-base btn-primary w-full"
              onClick={() => setStatus("Paiement sécurisé en cours d'activation. Réessayez dans un instant.")}
            >
              Payer {formatPrice(cart.total)}
            </button>
            {status && <p className="text-xs text-muted-foreground">{status}</p>}
            <p className="text-center text-[11px] text-muted-foreground">
              Paiement sécurisé · Carte bancaire, Apple Pay, Google Pay
            </p>
          </div>
        )}
      </aside>
    </>
  );
}
