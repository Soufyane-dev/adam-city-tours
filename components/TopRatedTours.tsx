"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { MapPin, CalendarDays, Users, ArrowRight } from "lucide-react";
import { tours, type Tour } from "@/lib/tours";

/**
 * Route label displayed under the tour title on the card (e.g. "Marrakech • Zagora").
 * Mapped by tour id so we don't mutate the shared data model.
 */
const ROUTE_BY_TOUR_ID: Record<string, string> = {
  "beautiful-morocco-20-days": "Marrakech • Sahara • Fes • Casablanca",
  "casa-to-casa-essaouira-10-days": "Casablanca • Chefchaouen • Fes • Essaouira",
  "authentic-morocco-desert-5-days": "Marrakech • Ouzina • Erg Chebbi • Dades",
  "sahara-desert-retreat-6-days": "Marrakech • Dades • Erg Chebbi • Agdz",
  "fes-to-marrakech-desert-3-days": "Fes • Merzouga • Dades • Marrakech",
  "marrakech-imperial": "Marrakech • Atlas",
  "sahara-desert-adventure": "Marrakech • Merzouga",
  "blue-city-chefchaouen": "Chefchaouen • Rif",
  "atlas-mountains-trek": "Imlil • Mt. Toubkal",
  "coastal-essaouira": "Marrakech • Essaouira",
  "grand-morocco-tour": "Marrakech • Fes • Sahara",
};

/** Percent discount shown as a ribbon, keyed by tour id. Omit the entry to hide the ribbon. */
const DISCOUNT_BY_TOUR_ID: Record<string, number> = {
  "beautiful-morocco-20-days": 15,
  "casa-to-casa-essaouira-10-days": 12,
  "authentic-morocco-desert-5-days": 20,
  "sahara-desert-retreat-6-days": 15,
  "fes-to-marrakech-desert-3-days": 25,
  "marrakech-imperial": 15,
  "sahara-desert-adventure": 20,
  "grand-morocco-tour": 10,
};

interface Props {
  /** Maximum number of cards to render (default 6). */
  limit?: number;
  /** Override heading id for in-page anchors. */
  anchorId?: string;
}

export default function TopRatedTours({ limit = 6, anchorId = "top-rated-tours" }: Props) {
  const featured = useMemo<Tour[]>(() => tours.slice(0, limit), [limit]);

  return (
    <section
      id={anchorId}
      aria-labelledby={`${anchorId}-heading`}
      className="relative overflow-hidden border-y border-slate-200/70 bg-gradient-to-b from-[#FDFBF7] via-white to-[#F7F4EC] py-20 dark:border-white/[0.06] dark:from-[#0b0d12] dark:via-[#0c1016] dark:to-[#0a0c10] sm:py-24"
    >
      {/* Subtle gold glow accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#C9A84C]/10 blur-3xl dark:bg-[#C9A84C]/[0.08]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#C9A84C]/8 blur-3xl dark:bg-[#C9A84C]/[0.06]"
      />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* ── Header ── */}
        <div className="mx-auto mb-14 flex max-w-5xl flex-col items-center text-center">
          <h2
            id={`${anchorId}-heading`}
            className="title-with-gold-glow mb-5 bg-gradient-to-r from-slate-900 via-[#C9A84C] to-slate-900 bg-clip-text font-[var(--font-playfair)] text-4xl font-bold tracking-tight text-transparent drop-shadow-sm dark:from-white dark:via-[#C9A84C] dark:to-white sm:text-5xl lg:text-[3.25rem]"
          >
            Top-rated Tours
          </h2>
        </div>

        {/* ── Grid ── */}
        <ul
          role="list"
          className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {featured.map((tour, idx) => {
            const route = ROUTE_BY_TOUR_ID[tour.id] ?? "Morocco";
            const discount = DISCOUNT_BY_TOUR_ID[tour.id];
            return (
              <li key={tour.id}>
                <TourPackageCard tour={tour} route={route} discount={discount} priority={idx < 3} />
              </li>
            );
          })}
        </ul>

        {/* ── Bottom CTA ── */}
        <div className="mt-14 flex justify-center">
          <Link
            href="/tours"
            className="luxury-cta luxury-cta--primary inline-flex items-center gap-2.5 rounded-full px-9 py-4 font-[var(--font-inter)] text-sm font-semibold uppercase tracking-[0.28em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A84C]"
          >
            <span className="luxury-cta__label">Explore more tours</span>
            <ArrowRight
              className="luxury-cta__icon"
              strokeWidth={2.25}
              aria-hidden
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*                           Card sub-component                        */
/* ------------------------------------------------------------------ */

interface CardProps {
  tour: Tour;
  route: string;
  discount?: number;
  priority?: boolean;
}

function TourPackageCard({ tour, route, discount, priority = false }: CardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-slate-200/80 bg-white shadow-[0_10px_40px_-18px_rgba(20,53,88,0.25)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#2E79C7]/50 hover:shadow-[0_24px_60px_-20px_rgba(46,121,199,0.4)] dark:border-white/10 dark:bg-[#12161d] dark:shadow-[0_14px_44px_-18px_rgba(0,0,0,0.55)] dark:hover:border-[#2E79C7]/60">
      {/* Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
        />
        {/* Soft bottom gradient for legibility of badges */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/35 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Top-left "Top Tour" gold ribbon */}
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#d4b863] to-[#b08f34] px-3 py-1 font-[var(--font-inter)] text-[10px] font-bold uppercase tracking-[0.22em] text-white shadow-[0_6px_18px_-4px_rgba(176,143,52,0.6)]">
          <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor" aria-hidden>
            <path d="M12 2l2.6 6.3 6.8.5-5.2 4.5 1.6 6.7L12 16.9 6.2 20l1.6-6.7L2.6 8.8l6.8-.5L12 2z" />
          </svg>
          Top Tour
        </span>

        {/* Top-right discount pill */}
        {discount ? (
          <span className="absolute right-4 top-4 inline-flex items-center rounded-full bg-[#1a2b48] px-3 py-1 font-[var(--font-inter)] text-[10px] font-bold uppercase tracking-[0.22em] text-white shadow-[0_6px_18px_-6px_rgba(0,0,0,0.45)] dark:bg-white dark:text-[#1a2b48]">
            Save {discount}%
          </span>
        ) : null}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6 pt-5 font-[var(--font-inter)]">
        <h3 className="mb-1.5 line-clamp-2 font-[var(--font-playfair)] text-[22px] font-bold leading-snug tracking-tight text-[#1a2b48] transition-colors duration-300 group-hover:text-[#2E79C7] dark:text-white dark:group-hover:text-[#7ab2e8]">
          {tour.title}
        </h3>

        {/* Route */}
        <p className="mb-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-slate-500 dark:text-slate-400">
          <MapPin className="h-4 w-4 text-[#C9A84C]" strokeWidth={1.75} aria-hidden />
          <span>{route}</span>
        </p>

        {/* Meta row (duration / group size) */}
        <div className="mb-6 flex items-center gap-5 border-t border-dashed border-slate-200 pt-4 text-[12.5px] text-slate-500 dark:border-white/10 dark:text-slate-400">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-4 w-4 text-[#C9A84C]" strokeWidth={1.75} aria-hidden />
            <span>{tour.duration}</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Users className="h-4 w-4 text-[#C9A84C]" strokeWidth={1.75} aria-hidden />
            <span>{tour.groupSize} guests</span>
          </span>
        </div>

        {/* Footer: price + CTAs */}
        <div className="mt-auto">
          <div className="mb-4">
            <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400 dark:text-slate-500">
              From
            </p>
            <p className="flex items-baseline gap-1">
              <span className="luxury-price text-[28px]">
                <span className="luxury-price__currency">$</span>
                {tour.price}
              </span>
              <span className="text-xs font-normal text-slate-400 dark:text-slate-500">
                /person
              </span>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            <Link
              href={`/tours/${tour.id}`}
              aria-label={`See details for ${tour.title}`}
              className="luxury-pill-blue inline-flex items-center justify-center rounded-full border border-[#2E79C7]/50 bg-white px-3 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#2E79C7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2E79C7] dark:border-[#2E79C7]/60 dark:bg-transparent dark:text-[#7ab2e8]"
            >
              <span className="relative z-10">Details</span>
            </Link>
            <Link
              href={`/contact?tour=${tour.id}`}
              aria-label={`Book ${tour.title}`}
              className="luxury-pill-blue is-filled inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#2E79C7] to-[#2261A1] px-3 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_8px_22px_-8px_rgba(46,121,199,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2E79C7]"
            >
              <span className="relative z-10">Book Now</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Chefchaouen-blue accent on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] scale-x-0 bg-gradient-to-r from-transparent via-[#2E79C7] to-transparent transition-transform duration-500 group-hover:scale-x-100"
      />
    </article>
  );
}
