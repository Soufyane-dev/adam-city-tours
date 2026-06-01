import Image from "next/image";
import Link from "next/link";
import { Tour } from "@/lib/tours";

interface TourCardProps {
  tour: Tour;
  index?: number;
}

/** Tour tile styled like the home “Featured tours” mockup: white card, blue accents, clear meta row. */
export default function TourCard({ tour, index = 0 }: TourCardProps) {
  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-[18px] border border-slate-200/90 bg-white shadow-[0_10px_40px_-12px_rgba(6,24,46,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_48px_-14px_rgba(6,24,46,0.28)] dark:border-white/10 dark:bg-[#1a2230] dark:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.45)] dark:hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.55)]"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-1 flex-col p-6 pt-5 font-[var(--font-inter)]">
        <h3 className="mb-2 text-xl font-bold leading-snug tracking-tight text-[#143558] dark:text-white">
          {tour.title}
        </h3>

        <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-500 line-clamp-3 dark:text-slate-400">
          {tour.shortDescription}
        </p>

        <div className="mb-5 flex items-center gap-5 border-t border-slate-200 pt-4 text-xs text-slate-500 dark:border-white/10 dark:text-slate-400">
          <span className="flex items-center gap-1.5">
            <svg className="h-4 w-4 shrink-0 text-[#0F3568]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>
              {tour.groupSize} people
            </span>
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="h-4 w-4 shrink-0 text-[#0F3568]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{tour.duration}</span>
          </span>
        </div>

        <div className="mt-auto flex flex-col gap-4">
          <div>
            <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
              From
            </p>
            <p className="flex flex-wrap items-baseline gap-1">
              <span className="luxury-price text-3xl">
                <span className="luxury-price__currency">$</span>
                {tour.price}
              </span>
              <span className="text-sm font-normal text-slate-400 dark:text-slate-500">/person</span>
            </p>
          </div>
          <div className="flex items-center gap-2.5">
            <Link
              href={`/tours/${tour.id}`}
              id={`tour-card-${tour.id}`}
              className="luxury-pill-blue inline-flex flex-1 items-center justify-center rounded-full border border-[#0F3568]/30 bg-white px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0F3568] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F3568] dark:border-white/15 dark:bg-white/5 dark:text-[#8eb9e0]"
            >
              Details
            </Link>
            <Link
              href={`/tours/${tour.id}#book`}
              className="luxury-pill-blue is-filled inline-flex flex-1 items-center justify-center rounded-full bg-[#0F3568] px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white shadow-[0_10px_30px_-12px_rgba(15,53,104,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F3568]"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
