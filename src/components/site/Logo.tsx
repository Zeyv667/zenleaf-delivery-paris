import logo128 from "@/assets/caliv-logo-128.png";
import logo256 from "@/assets/caliv-logo-256.png";
import logo384 from "@/assets/caliv-logo-384.png";
import logo512 from "@/assets/caliv-logo-512.png";
import logo128w from "@/assets/caliv-logo-128.webp";
import logo256w from "@/assets/caliv-logo-256.webp";
import logo384w from "@/assets/caliv-logo-384.webp";
import logo512w from "@/assets/caliv-logo-512.webp";

/** Ratio natif du logo : 256 x 253 */
const RATIO = 256 / 253;

type LogoProps = {
  /** Hauteur d'affichage en px (CSS). La largeur suit le ratio original. */
  height: number;
  className?: string;
  priority?: boolean;
};

export function Logo({ height, className = "", priority = false }: LogoProps) {
  const width = Math.round(height * RATIO);

  return (
    <picture>
      <source
        type="image/webp"
        srcSet={`${logo128w} 128w, ${logo256w} 256w, ${logo384w} 384w, ${logo512w} 512w`}
        sizes={`${width}px`}
      />
      <img
        src={logo256}
        srcSet={`${logo128} 128w, ${logo256} 256w, ${logo384} 384w, ${logo512} 512w`}
        sizes={`${width}px`}
        width={width}
        height={height}
        alt="CALIV Premium CBD PARIS"
        decoding={priority ? "sync" : "async"}
        loading={priority ? "eager" : "lazy"}
        draggable={false}
        className={`block h-full w-auto select-none object-contain ${className}`}
        style={{ aspectRatio: `${256} / ${253}` }}
      />
    </picture>
  );
}
