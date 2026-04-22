import { Star } from "lucide-react";

type Season = {
  name: string;
  months: string;
  description: string;
  tempRange: string;
  imageSrc: string;
  imageAlt: string;
  barClass: string;
  photoTint: string;
  recommended?: boolean;
};

/** Agadir bay — daylight / morning mood (no dusk shots). SnapSaga on Unsplash; HTTPS for reliable delivery. */
const AGADIR_SUMMER_PHOTO =
  "https://images.unsplash.com/photo-1710092538995-4af0c11a3f3c?auto=format&fit=crop&w=1600&q=85";

/** English copy — matches site base language (`pageLanguage: en`) so Google Translate can localize. */
const seasons: Season[] = [
  {
    name: "Winter",
    months: "Dec · Jan · Feb",
    description:
      "Mild across the south and coast, crisp in the Atlas. Ideal for Marrakech, the dunes, and medina walks without the heat.",
    tempRange: "12° – 22°",
    imageSrc: "/images/about-group.jpg",
    imageAlt: "Real Mortours moment — guests and guide together on a Morocco tour",
    barClass: "bg-gradient-to-r from-sky-500 to-blue-600",
    photoTint: "from-sky-900/25 to-transparent",
  },
  {
    name: "Spring",
    months: "Mar · Apr · May",
    description:
      "Our signature season: lush valleys, perfect temperatures for treks and scenic drives, and a calmer pace before peak summer.",
    tempRange: "18° – 28°",
    imageSrc: "/images/ourika-valley-2.png",
    imageAlt: "Ourika Valley in spring — green hills and streams",
    barClass: "bg-gradient-to-r from-emerald-500 to-teal-600",
    photoTint: "from-emerald-900/20 to-transparent",
    recommended: true,
  },
  {
    name: "Summer",
    months: "Jun · Jul · Aug",
    description:
      "Warm inland and in the south. We steer you toward Agadir’s long bay — Atlantic swims, the Corniche, and sea breezes that keep summer nights refreshingly mild.",
    tempRange: "22° – 38°",
    imageSrc: AGADIR_SUMMER_PHOTO,
    imageAlt: "Agadir, Morocco — main beach and Atlantic bay in bright daylight (SnapSaga / Unsplash)",
    barClass: "bg-gradient-to-r from-amber-400 to-orange-500",
    photoTint: "from-slate-900/0 to-transparent",
  },
  {
    name: "Autumn",
    months: "Sep · Oct · Nov",
    description:
      "Golden light, local festivals, and gentle warmth almost everywhere. Superb for Fès, Chefchaouen, and the dunes outside high season.",
    tempRange: "20° – 30°",
    imageSrc: "/images/gallery-fes-arch.png",
    imageAlt: "Fès — historic architecture and golden light, ideal in autumn",
    barClass: "bg-gradient-to-r from-orange-500 to-rose-600",
    photoTint: "from-rose-900/25 to-transparent",
  },
];

function SeasonCard({ season }: { season: Season }) {
  return (
    <article className="group flex min-h-0 flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#C9A84C]/10 dark:border-white/10 dark:bg-white/[0.04]">
      <div className="relative isolate aspect-[5/3] min-h-[12rem] w-full shrink-0 overflow-hidden bg-slate-200 dark:bg-slate-800">
        <img
          src={season.imageSrc}
          alt={season.imageAlt}
          width={1200}
          height={720}
          loading={season.name === "Summer" ? "eager" : "lazy"}
          decoding="async"
          referrerPolicy={season.imageSrc.startsWith("http") ? "no-referrer" : undefined}
          className="absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className={`pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t ${season.photoTint}`}
          aria-hidden
        />
      </div>
      <div className={`h-1.5 w-full ${season.barClass}`} aria-hidden />
      <div className="flex flex-1 flex-col p-5 pt-4">
        <div className="mb-1 flex items-center gap-2">
          <h3 className="font-[var(--font-playfair)] text-xl font-bold text-slate-900 dark:text-white">
            {season.name}
          </h3>
          {season.recommended ? (
            <Star
              className="h-5 w-5 shrink-0 fill-[#C9A84C] text-[#C9A84C]"
              aria-label="Especially recommended time to travel"
            />
          ) : null}
        </div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#2E79C7] dark:text-sky-300/90">
          {season.months}
        </p>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {season.description}
        </p>
        <p className="font-[var(--font-playfair)] text-lg font-bold text-slate-900 dark:text-white">
          {season.tempRange}
          <span className="ml-1 text-xs font-normal text-slate-400 dark:text-slate-500">
            (typical averages)
          </span>
        </p>
      </div>
    </article>
  );
}

export default function SeasonPlanner() {
  return (
    <section
      className="border-y border-slate-100 bg-[#FAF9F6] py-16 dark:border-white/10 dark:bg-[#14141f]"
      aria-labelledby="season-planner-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative mx-auto max-w-4xl text-center">
          <h2
            id="season-planner-heading"
            className="title-with-gold-glow mx-auto inline-block max-w-[18ch] bg-gradient-to-r from-slate-900 via-[#C9A84C] via-50% to-slate-900 bg-clip-text text-center font-[var(--font-playfair)] text-[1.75rem] font-semibold leading-[1.12] tracking-[0.04em] text-transparent drop-shadow-sm animate-text-shimmer sm:text-4xl sm:tracking-[0.05em] lg:text-[2.65rem] lg:leading-[1.08] dark:from-white dark:via-[#E8D5A8] dark:via-45% dark:to-white dark:drop-shadow-[0_0_32px_rgba(201,168,76,0.28)]"
          >
            Seasons of Morocco
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-[var(--font-playfair)] text-sm font-normal italic tracking-[0.06em] text-slate-500 dark:text-slate-400 sm:text-base">
            Crafted journeys, timed to perfection
          </p>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          A curated overview to help you pick the right window for Morocco with{" "}
          <span className="notranslate font-semibold text-slate-800 dark:text-slate-200">Mortours</span>
          : mood, crowds, and typical temperatures — separate from the live weather strip above.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {seasons.map((season) => (
            <SeasonCard key={season.name} season={season} />
          ))}
        </div>
      </div>
    </section>
  );
}
