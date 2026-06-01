"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Users, Briefcase, Snowflake, Wifi, ShieldCheck } from "lucide-react";

/** A single vehicle in the Adam City Tours fleet. */
type Vehicle = {
  id: string;
  name: string;
  category: string;
  tagline: string;
  /** Accent gradient applied to the card's glow and badge. */
  accent: string;
  /** Tailwind text-color class for the vehicle illustration. */
  illustrationTone: string;
  /** Capacity (e.g. `7`, `4x4`). Used inside the stat pills. */
  seats: string;
  luggage: string;
  features: string[];
  /** SVG silhouette rendered inside the card. */
  silhouette: React.ReactNode;
  /** Optional real photo — when provided, shown instead of the silhouette. */
  photo?: { src: string; alt: string; position?: string };
};

const vehicles: Vehicle[] = [
  {
    id: "v-class",
    name: "Mercedes-Benz V-Class",
    category: "Private luxury minivan",
    tagline:
      "Whisper-quiet cabin, captain's chairs, and a gold-thread finish. Our signature ride for families and small groups.",
    accent: "from-[#C9A84C] via-[#e8c547] to-[#a7842c]",
    illustrationTone: "text-[#1a2b48]",
    seats: "1–7 pax",
    luggage: "7 cases",
    features: ["Climate", "Wi-Fi", "Private driver"],
    photo: {
      src: "/images/fleet-vclass-lineup.jpg",
      alt: "Adam City Tours Mercedes-Benz V-Class fleet lined up at a private estate",
      position: "center",
    },
    silhouette: (
      <svg
        viewBox="0 0 260 110"
        className="h-full w-full"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M18 82 L18 58 Q22 44 40 42 L90 40 Q108 26 138 24 L198 24 Q224 26 236 46 L248 60 L248 82" />
        <path d="M90 40 Q108 26 138 24 L168 24 L172 42 L92 42 Z" fill="currentColor" fillOpacity="0.08" />
        <path d="M172 24 L198 24 Q214 26 224 38 L224 42 L176 42 Z" fill="currentColor" fillOpacity="0.05" />
        <path d="M18 82 L248 82" />
        <circle cx="70" cy="84" r="14" fill="currentColor" fillOpacity="0.9" />
        <circle cx="70" cy="84" r="5" fill="#FDFBF7" />
        <circle cx="206" cy="84" r="14" fill="currentColor" fillOpacity="0.9" />
        <circle cx="206" cy="84" r="5" fill="#FDFBF7" />
        <path d="M32 56 L56 54" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: "land-cruiser",
    name: "Toyota Land Cruiser",
    category: "Sahara-ready 4×4",
    tagline:
      "Built for dunes, mountain passes, and Berber tracks. Reinforced suspension, refined interior — limitless in reach.",
    accent: "from-[#b8722a] via-[#d89551] to-[#7a4918]",
    illustrationTone: "text-[#2b1d10]",
    seats: "1–4 pax",
    luggage: "4 cases",
    features: ["4×4", "Off-road", "Desert spec"],
    photo: {
      src: "/images/fleet-land-cruiser-dune.jpg",
      alt: "Adam City Tours Toyota Land Cruiser drifting over Sahara dunes",
      position: "center",
    },
    silhouette: (
      <svg
        viewBox="0 0 260 110"
        className="h-full w-full"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M14 82 L14 58 L38 54 L70 32 L188 32 L214 54 L246 58 L246 82" />
        <path d="M70 32 L188 32 L188 54 L70 54 Z" fill="currentColor" fillOpacity="0.08" />
        <path d="M110 32 L110 54 M150 32 L150 54" opacity="0.5" />
        <path d="M14 82 L246 82" />
        <circle cx="68" cy="84" r="16" fill="currentColor" fillOpacity="0.9" />
        <circle cx="68" cy="84" r="6" fill="#FDFBF7" />
        <circle cx="198" cy="84" r="16" fill="currentColor" fillOpacity="0.9" />
        <circle cx="198" cy="84" r="6" fill="#FDFBF7" />
        <path d="M26 64 L52 62" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: "sprinter",
    name: "Mercedes-Benz Sprinter",
    category: "Grand minibus",
    tagline:
      "For larger parties and multi-city expeditions — editorial leather seating, generous luggage bay, panoramic windows.",
    accent: "from-[#0F3568] via-[#3D7AB8] to-[#061E38]",
    illustrationTone: "text-[#0f2340]",
    seats: "1–16 pax",
    luggage: "16 cases",
    features: ["Panorama", "Wi-Fi", "Refreshments"],
    photo: {
      src: "/images/fleet-sprinter-coastal.jpg",
      alt: "Adam City Tours Mercedes-Benz Sprinter fleet lined up on a coastal road",
      position: "center",
    },
    silhouette: (
      <svg
        viewBox="0 0 260 110"
        className="h-full w-full"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M14 82 L14 42 Q14 30 26 28 L214 22 Q236 22 244 38 L248 58 L248 82" />
        <path d="M40 34 L218 28 L218 54 L40 54 Z" fill="currentColor" fillOpacity="0.08" />
        <path d="M80 34 L80 54 M120 34 L120 54 M160 34 L160 54 M200 34 L200 54" opacity="0.45" />
        <path d="M14 82 L248 82" />
        <circle cx="62" cy="84" r="14" fill="currentColor" fillOpacity="0.9" />
        <circle cx="62" cy="84" r="5" fill="#FDFBF7" />
        <circle cx="210" cy="84" r="14" fill="currentColor" fillOpacity="0.9" />
        <circle cx="210" cy="84" r="5" fill="#FDFBF7" />
      </svg>
    ),
  },
];

const FeatureIcon = ({ label }: { label: string }) => {
  const common = "h-3.5 w-3.5";
  const lower = label.toLowerCase();
  if (lower.includes("climate") || lower.includes("air")) return <Snowflake className={common} />;
  if (lower.includes("wi")) return <Wifi className={common} />;
  return <ShieldCheck className={common} />;
};

export default function OurFleet() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -5% 0px", amount: 0.15 });
  const reduced = useReducedMotion();

  return (
    <section
      ref={ref}
      id="fleet"
      aria-label="Our vehicles"
      className="relative overflow-hidden bg-[#FDFBF7] py-24 dark:bg-[#08080f] sm:py-28"
    >
      {/* Ambient gold glow orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#C9A84C]/[0.08] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#0F3568]/[0.06] blur-3xl"
      />
      {/* Top gold hairline */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(201,168,76,0.35), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Heading */}
        <div className="mb-14 flex flex-col items-center text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[#C9A84C]">
            Private fleet · Since 2016
          </span>
          <div aria-hidden className="mt-4 flex items-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-[#C9A84C]" />
            <span className="h-1.5 w-1.5 rotate-45 bg-[#C9A84C]" />
            <span className="h-1 w-1 rounded-full bg-[#C9A84C]" />
          </div>
          <h2 className="title-with-gold-glow mt-5 bg-gradient-to-r from-slate-900 via-[#C9A84C] to-slate-900 bg-clip-text font-[var(--font-playfair)] text-4xl font-bold tracking-tight text-transparent drop-shadow-sm dark:from-white dark:via-[#C9A84C] dark:to-white animate-text-shimmer sm:text-5xl lg:text-[3.25rem]">
            Our Vehicles
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-slate-500 dark:text-slate-400">
            Every Adam City Tours journey travels in a privately-chartered vehicle with a vetted
            local driver. Editorial interiors, climate comfort, and road-safety standards
            worthy of a modern luxury house.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {vehicles.map((v, i) => (
            <motion.article
              key={v.id}
              initial={reduced ? false : { opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }}
              className="fleet-card group relative overflow-hidden rounded-[28px] border border-slate-200/70 bg-white shadow-[0_24px_60px_-28px_rgba(15,23,42,0.18)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_40px_80px_-32px_rgba(15,23,42,0.28)] dark:border-white/10 dark:bg-white/[0.04] dark:shadow-black/40 dark:hover:shadow-black/60"
            >
              {/* Top gradient accent rail */}
              <div
                aria-hidden
                className={`pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${v.accent}`}
              />
              {/* Soft radial glow on hover */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(60% 55% at 50% 0%, rgba(201,168,76,0.10) 0%, transparent 70%)",
                }}
              />
              {/* Editorial shine sweep */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 overflow-hidden rounded-[28px]"
              >
                <span className="fleet-card__shine absolute inset-y-0 -left-1/2 w-1/2" />
              </span>

              {/* Vehicle illustration — real photo when provided, otherwise silhouette */}
              <div className="relative flex h-48 items-end justify-center overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 px-6 pb-4 pt-6 dark:from-white/[0.03] dark:via-white/[0.02] dark:to-white/[0.04] sm:h-52">
                {v.photo ? (
                  <>
                    <Image
                      src={v.photo.src}
                      alt={v.photo.alt}
                      fill
                      sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 92vw"
                      quality={90}
                      className="fleet-card__silhouette absolute inset-0 object-cover"
                      style={{ objectPosition: v.photo.position ?? "center" }}
                    />
                    {/* Subtle vignette at the bottom to blend into the card body */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white via-white/30 to-transparent dark:from-[#08080f] dark:via-[#08080f]/40"
                    />
                  </>
                ) : (
                  <>
                    {/* Dotted road pattern */}
                    <div
                      aria-hidden
                      className="absolute inset-x-6 bottom-3 h-px"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, rgba(201,168,76,0.55) 50%, transparent 0%)",
                        backgroundSize: "14px 1px",
                        backgroundRepeat: "repeat-x",
                      }}
                    />
                    {/* Floor gradient */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-10"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(201,168,76,0.08), transparent)",
                      }}
                    />
                    {/* Silhouette */}
                    <div
                      className={`fleet-card__silhouette relative z-10 flex h-full w-full items-end justify-center ${v.illustrationTone} dark:text-white/90`}
                    >
                      {v.silhouette}
                    </div>
                  </>
                )}
              </div>

              {/* Content */}
              <div className="relative px-7 pb-7 pt-5">
                {/* Category kicker — moved below the photo for a cleaner image */}
                <div className="mb-2 inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
                  <span
                    aria-hidden
                    className={`h-1.5 w-1.5 rounded-full bg-gradient-to-br ${v.accent}`}
                  />
                  {v.category}
                </div>
                <h3 className="font-[var(--font-playfair)] text-[1.4rem] font-semibold leading-tight tracking-tight text-slate-900 dark:text-white">
                  {v.name}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-slate-500 dark:text-slate-400">
                  {v.tagline}
                </p>

                {/* Stat row */}
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 rounded-2xl border border-slate-200/70 bg-slate-50/70 px-3 py-2.5 dark:border-white/10 dark:bg-white/[0.03]">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#C9A84C]/15 text-[#C9A84C]">
                      <Users className="h-3.5 w-3.5" />
                    </span>
                    <div className="leading-tight">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
                        Capacity
                      </div>
                      <div className="text-[13px] font-semibold text-slate-800 dark:text-white">
                        {v.seats}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-2xl border border-slate-200/70 bg-slate-50/70 px-3 py-2.5 dark:border-white/10 dark:bg-white/[0.03]">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#C9A84C]/15 text-[#C9A84C]">
                      <Briefcase className="h-3.5 w-3.5" />
                    </span>
                    <div className="leading-tight">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
                        Luggage
                      </div>
                      <div className="text-[13px] font-semibold text-slate-800 dark:text-white">
                        {v.luggage}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {v.features.map((f) => (
                    <li
                      key={f}
                      className="inline-flex items-center gap-1.5 rounded-full border border-[#C9A84C]/25 bg-[#C9A84C]/[0.06] px-3 py-1 text-[11px] font-medium text-slate-700 dark:text-slate-200"
                    >
                      <span className="text-[#C9A84C]">
                        <FeatureIcon label={f} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Bottom gold hairline */}
                <div
                  aria-hidden
                  className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent"
                />
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-400 dark:text-slate-500">
                    Included in every journey
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-[#C9A84C]">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Insured
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
