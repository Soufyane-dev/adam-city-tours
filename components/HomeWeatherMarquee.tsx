"use client";

import { Sun, CloudSun, Cloud, CloudRain, CloudLightning } from "lucide-react";
import type { HomeCityWeatherRow } from "@/lib/weather";

function iconForCode(code: number) {
  if (code === 0 || code === 1)
    return <Sun className="h-6 w-6 text-amber-500 animate-[spin_8s_linear_infinite]" aria-hidden />;
  if (code === 2)
    return <CloudSun className="h-6 w-6 text-[#0F3568]" aria-hidden />;
  if (code === 3)
    return <Cloud className="h-6 w-6 text-slate-500 dark:text-slate-300" aria-hidden />;
  if (code >= 51 && code <= 67)
    return <CloudRain className="h-6 w-6 text-sky-600" aria-hidden />;
  if (code >= 95 && code <= 99)
    return <CloudLightning className="h-6 w-6 text-violet-500" aria-hidden />;
  if (code >= 71 && code <= 77)
    return <Cloud className="h-6 w-6 text-sky-400" aria-hidden />;
  return <CloudSun className="h-6 w-6 text-[#0F3568]" aria-hidden />;
}

function CityPill({ city, index }: { city: HomeCityWeatherRow; index: number }) {
  return (
    <div className="luxury-weather-card group flex w-[7.5rem] shrink-0 flex-col items-center gap-2.5 px-2 text-center sm:w-[8.75rem]">
      <div
        className="luxury-weather-card__orb relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-white to-slate-50 shadow-[0_8px_24px_-10px_rgba(15,23,42,0.18)] ring-1 ring-[#C9A84C]/25 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:shadow-[0_14px_30px_-12px_rgba(201,168,76,0.4)] group-hover:ring-[#C9A84C]/55 dark:from-white/10 dark:to-white/[0.03] dark:ring-white/10 dark:group-hover:ring-[#C9A84C]/60"
        style={{ animationDelay: `${(index % 7) * 0.45}s` }}
      >
        {/* soft inner glow */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 40%, rgba(201,168,76,0.22) 0%, transparent 70%)",
          }}
        />
        {/* editorial shine sweep on hover */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl"
        >
          <span className="luxury-weather-card__shine absolute inset-y-0 -left-1/3 w-1/3" />
        </span>
        <span className="relative z-10">{iconForCode(city.weatherCode)}</span>
      </div>

      <span className="text-[13px] font-semibold tracking-[0.04em] text-slate-800 transition-colors duration-300 group-hover:text-[#1a2b48] dark:text-white/90 dark:group-hover:text-white">
        {city.name}
      </span>

      <span className="font-[var(--font-playfair)] text-[1.7rem] font-bold leading-none tracking-tight">
        <span
          className="bg-gradient-to-r from-slate-900 via-[#C9A84C] to-slate-900 bg-clip-text text-transparent dark:from-white dark:via-[#e8c547] dark:to-white"
          style={{
            backgroundSize: "200% auto",
            animation: "text-shimmer 5s linear infinite",
          }}
        >
          {city.temperatureC}°
        </span>
      </span>

      {/* thin gold hairline between temp and label */}
      <span
        aria-hidden
        className="h-px w-6 bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent"
      />

      <span className="line-clamp-2 min-h-[2.25rem] text-[11px] font-medium leading-snug text-slate-500 transition-colors duration-300 group-hover:text-slate-700 dark:text-slate-400 dark:group-hover:text-slate-300">
        {city.label}
      </span>
    </div>
  );
}

type Props = {
  cities: HomeCityWeatherRow[];
};

/** Infinite horizontal scroll (same idea as “Trusted by” marquee). */
export default function HomeWeatherMarquee({ cities }: Props) {
  if (cities.length === 0) {
    return (
      <p className="mx-auto max-w-7xl py-8 text-center text-sm text-slate-500 dark:text-slate-400">
        Weather data is temporarily unavailable. Please try again later.
      </p>
    );
  }

  const loop = [...cities, ...cities];

  return (
    <div className="relative mt-10 overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-r from-white to-transparent dark:from-[var(--background)]" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-l from-white to-transparent dark:from-[var(--background)]" />

      <div className="weather-cities-track flex w-max items-start gap-12 px-4 sm:gap-16 md:gap-20">
        {loop.map((city, i) => (
          <CityPill key={`${city.name}-${i}`} city={city} index={i} />
        ))}
      </div>
    </div>
  );
}
