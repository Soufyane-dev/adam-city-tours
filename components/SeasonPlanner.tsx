import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Globe2, MapPin, Star } from "lucide-react";

type Season = {
  name: string;
  months: string;
  description: string;
  tempRange: string;
  imageSrc: string;
  imageAlt: string;
  recommended?: boolean;
};

/** English copy — matches site base language (`pageLanguage: en`) so Google Translate can localize. */
const seasons: Season[] = [
  {
    name: "Winter",
    months: "Dec · Jan · Feb",
    description:
      "Mild across the south and coast, crisp in the Atlas. Ideal for Marrakech, the dunes, and medina walks without the heat.",
    tempRange: "12° – 22°",
    imageSrc: "/images/season-winter-atlas-berber-village.png",
    imageAlt:
      "Snow-covered Berber village on a mountainside in the High Atlas — Morocco in winter",
  },
  {
    name: "Spring",
    months: "Mar · Apr · May",
    description:
      "Our signature season: lush valleys, perfect temperatures for treks and scenic drives, and a calmer pace before peak summer.",
    tempRange: "18° – 28°",
    imageSrc: "/images/ourika-valley-2.png",
    imageAlt: "Ourika Valley in spring — green hills and streams",
    recommended: true,
  },
  {
    name: "Summer",
    months: "Jun · Jul · Aug",
    description:
      "Warm inland and in the south — turquoise pools in rocky gorges, Agadir’s long bay for Atlantic swims, and sea breezes that keep summer nights refreshingly mild.",
    tempRange: "22° – 38°",
    imageSrc: "/images/season-summer-oasis-canyon.png",
    imageAlt:
      "Turquoise plunge pool in a red-rock canyon — Morocco summer swim in cool mountain water",
  },
  {
    name: "Autumn",
    months: "Sep · Oct · Nov",
    description:
      "Golden light, local festivals, and gentle warmth almost everywhere. Superb for Fès, Aït Benhaddou, Chefchaouen, and the dunes outside high season.",
    tempRange: "20° – 30°",
    imageSrc: "/images/season-autumn-ait-ben-haddou.png",
    imageAlt:
      "Aït Benhaddou — UNESCO ksar of rammed-earth towers and palms under a bright Moroccan sky",
  },
];

function SeasonCard({ season, priority }: { season: Season; priority: boolean }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-slate-200/80 bg-white shadow-[0_10px_40px_-18px_rgba(6,24,46,0.25)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#0F3568]/50 hover:shadow-[0_24px_60px_-20px_rgba(15,53,104,0.4)] dark:border-white/10 dark:bg-[#12161d] dark:shadow-[0_14px_44px_-18px_rgba(0,0,0,0.55)] dark:hover:border-[#0F3568]/60">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
        <Image
          src={season.imageSrc}
          alt={season.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          priority={priority}
          
          {...(!season.imageSrc.startsWith("/") ? { quality: 100 as const } : {})}
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/35 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#d4b863] to-[#b08f34] px-3 py-1 font-[var(--font-inter)] text-[10px] font-bold uppercase tracking-[0.22em] text-white shadow-[0_6px_18px_-4px_rgba(176,143,52,0.6)]">
          {season.recommended ? (
            <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor" aria-hidden>
              <path d="M12 2l2.6 6.3 6.8.5-5.2 4.5 1.6 6.7L12 16.9 6.2 20l1.6-6.7L2.6 8.8l6.8-.5L12 2z" />
            </svg>
          ) : null}
          {season.recommended ? "Signature" : "Season"}
        </span>

        <span className="absolute right-4 top-4 inline-flex items-center rounded-full bg-[#1a2b48] px-3 py-1 font-[var(--font-inter)] text-[10px] font-bold uppercase tracking-[0.22em] text-white shadow-[0_6px_18px_-6px_rgba(0,0,0,0.45)] dark:bg-white dark:text-[#1a2b48]">
          {season.tempRange}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 pt-5 font-[var(--font-inter)]">
        <h3 className="mb-1.5 line-clamp-2 font-[var(--font-playfair)] text-[22px] font-bold leading-snug tracking-tight text-[#1a2b48] transition-colors duration-300 group-hover:text-[#0F3568] dark:text-white dark:group-hover:text-[#90B8E4]">
          {season.name}
          {season.recommended ? (
            <Star
              className="mb-0.5 ml-1.5 inline h-[1.1em] w-[1.1em] align-middle fill-[#C9A84C] text-[#C9A84C]"
              aria-label="Especially recommended time to travel"
            />
          ) : null}
        </h3>

        <p className="mb-5 inline-flex items-start gap-1.5 text-[13px] font-medium leading-snug text-slate-500 dark:text-slate-400">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A84C]" strokeWidth={1.75} aria-hidden />
          <span className="line-clamp-2">{season.description}</span>
        </p>

        <div className="mb-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-dashed border-slate-200 pt-4 text-[12.5px] text-slate-500 dark:border-white/10 dark:text-slate-400">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-4 w-4 text-[#C9A84C]" strokeWidth={1.75} aria-hidden />
            <span>{season.months}</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Globe2 className="h-4 w-4 text-[#C9A84C]" strokeWidth={1.75} aria-hidden />
            <span>Morocco</span>
          </span>
        </div>

        <div className="mt-auto">
          <div className="mb-4">
            <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400 dark:text-slate-500">
              Typical range
            </p>
            <p className="flex items-baseline gap-1 font-[var(--font-playfair)] text-[28px] font-bold tracking-tight text-[#1a2b48] dark:text-white">
              {season.tempRange}
              <span className="text-xs font-normal font-[var(--font-inter)] text-slate-400 dark:text-slate-500">
                avg.
              </span>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            <Link
              href="/tours"
              className="luxury-pill-blue inline-flex items-center justify-center rounded-full border border-[#0F3568]/50 bg-white px-3 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0F3568] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F3568] dark:border-[#0F3568]/60 dark:bg-transparent dark:text-[#90B8E4]"
            >
              <span className="relative z-10">Tours</span>
            </Link>
            <Link
              href="/contact"
              className="luxury-pill-blue is-filled inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#0F3568] to-[#082A52] px-3 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_8px_22px_-8px_rgba(15,53,104,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F3568]"
            >
              <span className="relative z-10">Contact</span>
            </Link>
          </div>
        </div>
      </div>

      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] scale-x-0 bg-gradient-to-r from-transparent via-[#0F3568] to-transparent transition-transform duration-500 group-hover:scale-x-100"
      />
    </article>
  );
}

export default function SeasonPlanner() {
  return (
    <section
      className="relative overflow-hidden border-y border-slate-200/70 bg-gradient-to-b from-[#FDFBF7] via-white to-[#F7F4EC] py-20 dark:border-white/[0.06] dark:from-[#0b0d12] dark:via-[#0c1016] dark:to-[#0a0c10] sm:py-24"
      aria-labelledby="season-planner-heading"
    >
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#C9A84C]/10 blur-3xl dark:bg-[#C9A84C]/[0.08] max-sm:hidden" aria-hidden />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#C9A84C]/8 blur-3xl dark:bg-[#C9A84C]/[0.06] max-sm:hidden" aria-hidden />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="relative mx-auto max-w-5xl text-center">
          <h2
            id="season-planner-heading"
            className="title-with-gold-glow mb-5 bg-gradient-to-r from-slate-900 via-[#C9A84C] to-slate-900 bg-clip-text font-[var(--font-playfair)] text-4xl font-bold tracking-tight text-transparent drop-shadow-sm dark:from-white dark:via-[#C9A84C] dark:to-white sm:text-5xl lg:text-[3.25rem]"
          >
            Seasons of Morocco
          </h2>
          <p className="mx-auto font-[var(--font-playfair)] text-sm font-normal italic tracking-[0.06em] text-slate-500 dark:text-slate-400 sm:text-base">
            Crafted journeys, timed to perfection
          </p>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          A curated overview to help you pick the right window for Morocco with{" "}
          <span className="notranslate font-semibold text-slate-800 dark:text-slate-200">Adam City Tours</span>
          : mood, crowds, and typical temperatures — separate from the live weather strip above.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {seasons.map((season, idx) => (
            <SeasonCard key={season.name} season={season} priority={idx < 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
