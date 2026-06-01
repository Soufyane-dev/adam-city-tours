import {
  BRAND_LOCKUP_HEIGHT,
  BRAND_LOCKUP_PATH,
  BRAND_LOCKUP_WIDTH,
} from "@/lib/brand-logo";

/**
 * Official lockup — transparent SVG (`<img>`: Next/Image often skips/breaks local SVG optimisation).
 */
export type BrandWordmarkVariant = "nav-overlay" | "nav-solid" | "footer";

const frame: Record<BrandWordmarkVariant, string> = {
  "nav-overlay": "drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]",
  "nav-solid": "",
  footer:
    "rounded-2xl bg-white/96 p-2.5 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.5)] ring-1 ring-white/30",
};

const imgClass: Record<BrandWordmarkVariant, string> = {
  "nav-overlay":
    "block h-[4.6rem] w-auto max-h-[4.9rem] max-w-[min(20rem,60vw)] sm:max-w-[22rem] sm:h-[4.9rem] sm:max-h-[5.2rem] object-contain object-left select-none [mix-blend-mode:multiply] dark:[mix-blend-mode:screen]",
  "nav-solid":
    "block h-[4.6rem] w-auto max-h-[4.9rem] max-w-[min(20rem,60vw)] sm:max-w-[22rem] sm:h-[4.9rem] sm:max-h-[5.2rem] object-contain object-left select-none [mix-blend-mode:multiply] dark:[mix-blend-mode:screen]",
  footer:
    "block h-[4.5rem] w-auto max-h-[5rem] max-w-[16rem] sm:max-w-[18rem] sm:h-[5.25rem] sm:max-h-[5.75rem] object-contain object-left select-none",
};

export default function BrandWordmark({
  variant,
  className = "",
  priority = false,
}: {
  variant: BrandWordmarkVariant;
  className?: string;
  priority?: boolean;
}) {
  return (
    <span className={`inline-flex ${className}`}>
      <span
        className={`inline-flex shrink-0 items-center justify-center ${frame[variant]}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- SVG lockup: next/image does not render local SVG reliably */}
        <img
          src={BRAND_LOCKUP_PATH}
          alt=""
          width={BRAND_LOCKUP_WIDTH}
          height={BRAND_LOCKUP_HEIGHT}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          className={imgClass[variant]}
          draggable={false}
        />
      </span>
    </span>
  );
}
