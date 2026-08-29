import { formatPrice, type Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col">
      <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-2xl border border-[#FBD9DF] bg-[#FBD9DF] p-4 sm:p-8 md:p-10 transition-all hover:shadow-[0_8px_30px_rgba(251,217,223,0.45)] active:scale-[0.98]">
        <div className={`relative ${product.type === "Fleur" ? "h-[78%] w-[78%]" : "h-[62%] w-[62%]"}`}>
          <img
            src={product.image}
            alt={`${product.name} — ${product.type} CBD`}
            loading="lazy"
            decoding="async"
            width={800}
            height={800}
            className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col pt-3 sm:pt-5">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
          <h3 className="text-sm font-medium leading-snug tracking-tight sm:text-base">{product.name}</h3>
          <span className="text-sm tabular-nums text-muted-foreground sm:text-base">
            {product.pricePerGram} €/g
          </span>
        </div>
        <p className="mt-1 text-[11px] leading-snug text-muted-foreground sm:text-xs">
          {product.origin} · Sachet 5 g — {formatPrice(product.price)}
        </p>
      </div>
    </article>
  );
}
