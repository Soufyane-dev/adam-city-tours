import { fetchHomepageCitiesWeather } from "@/lib/weather";
import HomeWeatherSection from "@/components/HomeWeatherSection";

export default async function HomeLiveWeather() {
  /** Cached Open-Meteo (~5 min) so the home shell stays fast; client still refreshes on a timer. */
  const cities = await fetchHomepageCitiesWeather("cached");
  return <HomeWeatherSection cities={cities} />;
}
