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
    <section className="border-y border-border bg-background py-10 md:py-14">
      <div className="container-x">
        <div className="mb-6 px-1">
          <p className="eyebrow mb-1">Notre Sélection</p>
          <div className="flex items-center gap-4">
            <h2 className="display flex-shrink-0 text-2xl sm:text-3xl">Fleurs & Résines</h2>
            <div className="h-[1px] w-full bg-border" />
          </div>
        </div>
      </div>

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
