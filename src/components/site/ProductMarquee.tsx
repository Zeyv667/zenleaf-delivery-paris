import { PRODUCTS } from "@/lib/products";

function MarqueeCard({ product }: { product: (typeof PRODUCTS)[number] }) {
  return (
    <div className="relative w-44 shrink-0 overflow-hidden rounded-lg border border-[#FBD9DF] bg-[#FBD9DF] shadow-sm">
      <div className="aspect-[4/5] w-full bg-[#FBD9DF]">
        <img
          src={product.image}
          alt={product.name}
          width={220}
          height={275}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-contain p-3"
        />
      </div>
      <div className="px-2 pb-3 pt-1 text-center">
        <p className="line-clamp-2 text-[10px] font-semibold uppercase leading-tight tracking-wide text-[#759DD2]">
          {product.name}
        </p>
      </div>
      <div className="absolute left-3 top-3">
        <span className="rounded bg-[#e6eefb] px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-[#759DD2]">
          {product.type}
        </span>
      </div>
    </div>
  );
}

export function ProductMarquee() {
  const items = [...PRODUCTS, ...PRODUCTS];

  return (
    <section className="border-b border-border bg-background py-6 md:py-8">
      <div className="relative flex overflow-x-hidden">
        <div className="marquee-track gap-3 px-1.5">
          {items.map((product, idx) => (
            <MarqueeCard key={`${product.id}-${idx}`} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
