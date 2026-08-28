import { formatPrice, type Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col">
      <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-2xl border border-[#FBD9DF] bg-[#FBD9DF] p-8 md:p-10 transition-all hover:shadow-[0_8px_30px_rgba(251,217,223,0.45)] active:scale-[0.98]">
        <div className={`relative ${product.type === "Fleur" ? "h-[78%] w-[78%]" : "h-[62%] w-[62%]"}`}>
          <img
            src={product.image}
            alt={`${product.name} — ${product.type} CBD`}
            loading="lazy"
            width={800}
            height={800}
            className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col pt-5">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-base font-medium tracking-tight">{product.name}</h3>
          <span className="text-base tabular-nums text-muted-foreground">
            {product.pricePerGram} €/g
          </span>
        </div>
        <p className="mt-1 text-xs text-muted-foreground">
          {product.origin} · Sachet 5 g — {formatPrice(product.price)}
        </p>
      </div>
    </article>
  );
}
