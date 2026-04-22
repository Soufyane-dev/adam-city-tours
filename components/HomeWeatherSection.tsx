import HomeWeatherLiveUpdater from "@/components/HomeWeatherLiveUpdater";
import type { HomeCityWeatherRow } from "@/lib/weather";

type Props = {
  cities: HomeCityWeatherRow[];
};

/** “Trusted by”–style heading + animated live weather row. */
export default function HomeWeatherSection({ cities }: Props) {
  return (
    <section
      className="border-y border-slate-100 bg-white py-10 dark:border-white/10 dark:bg-[var(--background)]"
      aria-labelledby="home-weather-heading"
    >
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2
          id="home-weather-heading"
          className="title-with-gold-glow display-inline-block font-[var(--font-playfair)] text-4xl font-bold text-transparent drop-shadow-sm lg:text-5xl mb-2 bg-gradient-to-r from-slate-900 via-[#C9A84C] to-slate-900 bg-clip-text dark:from-white dark:via-[#C9A84C] dark:to-white animate-text-shimmer"
        >
          Live weather
        </h2>
        <p className="mx-auto max-w-lg text-sm text-slate-500 dark:text-slate-400">
          Current conditions across Morocco (Open-Meteo). The strip updates about every five
          minutes while you stay on the page, and when you return to this tab.
        </p>
      </div>

      <HomeWeatherLiveUpdater initialCities={cities} />
    </section>
  );
}
