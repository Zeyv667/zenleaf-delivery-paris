import { formatPrice, type Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col">
      <div className="pastel-tile relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-2xl p-8 md:p-10">
        <div className="relative h-[62%] w-[62%]">
          <img
            src={product.image}
            alt={`${product.name} — ${product.type} CBD`}
            loading="lazy"
            width={800}
            height={800}
            className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>
        <span className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-foreground backdrop-blur">
          {product.type}
        </span>
      </div>

      <div className="flex flex-1 flex-col pt-5">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-base font-medium tracking-tight">{product.name}</h3>
          <span className="text-base tabular-nums text-muted-foreground">
            {product.pricePerGram} €/g
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
        <p className="mt-1 text-xs text-muted-foreground">
          {product.origin} · Sachet 5 g — {formatPrice(product.price)}
        </p>
      </div>
    </article>
  );
}
