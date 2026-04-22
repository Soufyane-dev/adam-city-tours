import type { DestinationClimate } from "@/lib/destinations";
import type { DestinationCurrentWeather } from "@/lib/weather";
import {
  currentMonthInMorocco,
  type VisitSeasonBadge,
  visitSeasonStatus,
} from "@/lib/weather";

type Props = {
  destinationName: string;
  weather: DestinationCurrentWeather | null;
  climate: DestinationClimate;
};

const seasonBadge: Record<
  VisitSeasonBadge,
  { label: string; className: string }
> = {
  ideal: {
    label: "Great time to visit",
    className:
      "bg-emerald-500/15 text-emerald-800 dark:text-emerald-200 border-emerald-500/30",
  },
  good: {
    label: "Good / shoulder season",
    className:
      "bg-amber-500/15 text-amber-900 dark:text-amber-100 border-amber-500/30",
  },
  other: {
    label: "Off-peak or tougher conditions",
    className:
      "bg-slate-500/15 text-slate-700 dark:text-slate-200 border-slate-400/25",
  },
};

export default function DestinationClimateCard({
  destinationName,
  weather,
  climate,
}: Props) {
  const month = currentMonthInMorocco();
  const status = visitSeasonStatus(month, climate.idealMonths, climate.goodMonths);
  const badge = seasonBadge[status];

  return (
    <article className="relative overflow-hidden rounded-[2rem] border border-[#C9A84C]/25 bg-gradient-to-br from-white via-[#fdfbf4] to-white px-8 py-10 shadow-[0_30px_80px_-30px_rgba(13,27,42,0.18)] dark:border-[#C9A84C]/20 dark:from-[#0f0f18] dark:via-[#121220] dark:to-[#0f0f18] dark:shadow-black/40 sm:px-10 md:px-14 md:py-14">
      {/* Top hair-line gold accent */}
      <span
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/80 to-transparent"
        aria-hidden
      />
      {/* Soft gold glows */}
      <span
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.18),transparent_70%)]"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.12),transparent_70%)]"
        aria-hidden
      />
      {/* Gold corner ornaments */}
      <span
        className="pointer-events-none absolute left-5 top-5 h-6 w-6 rounded-tl-lg border-l border-t border-[#C9A84C]/50"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute right-5 top-5 h-6 w-6 rounded-tr-lg border-r border-t border-[#C9A84C]/50"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute bottom-5 left-5 h-6 w-6 rounded-bl-lg border-b border-l border-[#C9A84C]/50"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute bottom-5 right-5 h-6 w-6 rounded-br-lg border-b border-r border-[#C9A84C]/50"
        aria-hidden
      />

      <div className="relative">
        {/* Season status badge — centered */}
        <div className="flex justify-center">
          <span
            className={`inline-flex items-center rounded-full border px-5 py-2 text-[11px] font-bold uppercase tracking-[0.22em] ${badge.className}`}
          >
            {badge.label}
          </span>
        </div>

        {/* Ornate divider */}
        <div className="mt-6 flex items-center justify-center gap-3" aria-hidden>
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9A84C]" />
          <span className="h-1.5 w-1.5 rotate-45 bg-[#C9A84C]" />
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9A84C]" />
        </div>

        {/* Two-column data */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Now (live weather) */}
          <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-6 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.04]">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C9A84C]">
              Now in {destinationName}
            </p>
            {weather ? (
              <>
                <p className="font-[var(--font-playfair)] text-5xl font-bold text-slate-900 dark:text-white">
                  {weather.temperatureC}°C
                </p>
                <p className="mt-1 text-slate-600 dark:text-slate-300">
                  {weather.label}
                </p>
                <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-500 dark:text-slate-400">
                  {weather.humidityPct !== null && (
                    <div>
                      <dt className="inline font-medium text-slate-600 dark:text-slate-300">
                        Humidity{" "}
                      </dt>
                      <dd className="inline">{weather.humidityPct}%</dd>
                    </div>
                  )}
                  {weather.windKmh !== null && (
                    <div>
                      <dt className="inline font-medium text-slate-600 dark:text-slate-300">
                        Wind{" "}
                      </dt>
                      <dd className="inline">{weather.windKmh} km/h</dd>
                    </div>
                  )}
                </dl>
              </>
            ) : (
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Weather unavailable — try again in a moment.
              </p>
            )}
          </div>

          {/* Best time to visit */}
          <div className="rounded-2xl border border-[#C9A84C]/30 bg-gradient-to-br from-[#C9A84C]/[0.08] to-transparent p-6 dark:from-[#C9A84C]/10">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C9A84C]">
              Best time to visit
            </p>
            <p className="font-[var(--font-playfair)] text-xl font-bold text-slate-900 dark:text-white">
              {climate.bestTimeRange}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {climate.summary}
            </p>
            {climate.avoidHint ? (
              <p className="mt-3 border-t border-[#C9A84C]/20 pt-3 text-xs text-slate-500 dark:text-slate-400">
                {climate.avoidHint}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
