import { useState, useRef, type MouseEvent, type TouchEvent } from "react";
import { formatPrice, type Product } from "@/lib/products";

function ZoomImage({ src, alt, type }: { src: string; alt: string; type: Product["type"] }) {
  const [zoom, setZoom] = useState(false);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const ref = useRef<HTMLDivElement>(null);

  const updatePos = (clientX: number, clientY: number) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;
    setPos({ x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) });
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!zoom) return;
    updatePos(e.clientX, e.clientY);
  };

  const handleMouseEnter = () => setZoom(true);
  const handleMouseLeave = () => {
    setZoom(false);
    setPos({ x: 50, y: 50 });
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
    setZoom((z) => !z);
    if (e.touches[0]) {
      updatePos(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!zoom) return;
    e.preventDefault();
    if (e.touches[0]) {
      updatePos(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const sizeClass = type === "Fleur" ? "h-[78%] w-[78%]" : "h-[62%] w-[62%]";

  return (
    <div
      ref={ref}
      className={`relative ${sizeClass} cursor-zoom-in overflow-hidden`}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        width={800}
        height={800}
        className="h-full w-full object-contain transition-transform duration-500 ease-out will-change-transform"
        style={{
          transform: zoom ? `scale(2)` : "scale(1)",
          transformOrigin: `${pos.x}% ${pos.y}%`,
        }}
      />
    </div>
  );
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col">
      <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-2xl border border-border/60 bg-white p-4 sm:p-8 md:p-10 transition-all hover:shadow-[0_8px_30px_rgba(117,157,210,0.18)] active:scale-[0.98]">
        <ZoomImage src={product.image} alt={`${product.name} — ${product.type} CBD`} type={product.type} />
      </div>

      <div className="flex flex-1 flex-col pt-3 sm:pt-5">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
          <h3 className="text-sm font-medium leading-snug tracking-tight sm:text-base">{product.name}</h3>
          <span className="text-sm tabular-nums text-muted-foreground sm:text-base">
            {product.pricePerGram} €/g
          </span>
        </div>
        <p className="mt-1 text-[11px] leading-snug text-muted-foreground sm:text-xs">
          {product.variants
            ? `${product.origin} · ${product.variants.map((v) => `${v.label} ${formatPrice(v.price)}`).join(" · ")}`
            : `${product.origin} · Sachet 5 g — ${formatPrice(product.price)}`}
        </p>
      </div>
    </article>
  );
}
