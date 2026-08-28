import { useCart } from "@/lib/cart";
import { formatPrice, type Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();

  return (
    <article className="group flex flex-col">
      <div className="relative aspect-square overflow-hidden rounded-sm bg-card">
        <img
          src={product.image}
          alt={`${product.name} — ${product.type} CBD`}
          loading="lazy"
          width={1024}
          height={1024}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full border border-border bg-background/70 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
          {product.type}
        </span>
      </div>

      <div className="flex flex-1 flex-col pt-5">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-base font-medium tracking-tight">{product.name}</h3>
          <span className="text-base tabular-nums text-muted-foreground">
            {formatPrice(product.price)}
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
        <p className="mt-1 text-xs text-muted-foreground">Sachet 5 g</p>
        <button className="btn-base btn-light mt-5 w-full" onClick={() => add(product.id)}>
          Ajouter au panier
        </button>
      </div>
    </article>
  );
}
