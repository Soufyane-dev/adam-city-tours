/** Open-Meteo WMO weather code → short English label for UI */
export function wmoWeatherLabel(code: number): string {
  if (code === 0) return "Ciel dégagé";
  if (code === 1) return "Dégagé";
  if (code === 2) return "Peu nuageux";
  if (code === 3) return "Couvert";
  if (code === 45 || code === 48) return "Brouillard";
  if (code >= 51 && code <= 55) return "Bruine";
  if (code >= 56 && code <= 57) return "Bruine givrante";
  if (code >= 61 && code <= 67) return "Pluie";
  if (code >= 71 && code <= 77) return "Neige";
  if (code >= 80 && code <= 82) return "Averses";
  if (code === 85 || code === 86) return "Averses de neige";
  if (code >= 95 && code <= 99) return "Orage";
  return "Variable";
}

export type DestinationCurrentWeather = {
  temperatureC: number;
  weatherCode: number;
  label: string;
  humidityPct: number | null;
  windKmh: number | null;
};

/** Short label for compact UI (e.g. ticker). */
export function shortWeatherLabel(code: number): string {
  const full = wmoWeatherLabel(code);
  if (full.length <= 14) return full;
  return `${full.slice(0, 12)}…`;
}

export type HomeCityWeatherSpot = {
  name: string;
  lat: number;
  lon: number;
};

/** Cities shown on the home page live weather strip (Open-Meteo). */
export const HOME_WEATHER_CITIES: HomeCityWeatherSpot[] = [
  { name: "Marrakech", lat: 31.6295, lon: -7.9811 },
  { name: "Fès", lat: 34.0331, lon: -5.0003 },
  { name: "Rabat", lat: 34.0209, lon: -6.8416 },
  { name: "Meknès", lat: 33.895, lon: -5.5547 },
  { name: "Casablanca", lat: 33.5731, lon: -7.5898 },
  { name: "Tanger", lat: 35.7595, lon: -5.834 },
  { name: "Chefchaouen", lat: 35.1714, lon: -5.2636 },
  { name: "Tétouan", lat: 35.5784, lon: -5.3683 },
  { name: "Agadir", lat: 30.4278, lon: -9.5981 },
  { name: "Essaouira", lat: 31.5085, lon: -9.7595 },
  { name: "Ouarzazate", lat: 30.9196, lon: -6.8934 },
  { name: "Merzouga", lat: 31.1042, lon: -4.0088 },
  { name: "Zagora", lat: 30.3324, lon: -5.8384 },
  { name: "Errachidia", lat: 31.9314, lon: -4.4244 },
  { name: "Ifrane", lat: 33.5228, lon: -5.1103 },
  { name: "Oujda", lat: 34.6867, lon: -1.9114 },
  { name: "Nador", lat: 35.1744, lon: -2.9287 },
  { name: "Safi", lat: 32.2994, lon: -9.2372 },
  { name: "El Jadida", lat: 33.2549, lon: -8.506 },
  { name: "Tiznit", lat: 29.6974, lon: -9.7316 },
  { name: "Dakhla", lat: 23.6848, lon: -15.958 },
];

export type HomeCityWeatherRow = {
  name: string;
  temperatureC: number;
  label: string;
  weatherCode: number;
};

/** `live` = always hit Open-Meteo (for client polling). `cached` = Next ISR (~5 min). */
export type HomepageWeatherFetchMode = "live" | "cached";

export async function fetchHomepageCitiesWeather(
  mode: HomepageWeatherFetchMode = "cached"
): Promise<HomeCityWeatherRow[]> {
  const results = await Promise.all(
    HOME_WEATHER_CITIES.map(async (spot) => {
      const w =
        mode === "live"
          ? await fetchOpenMeteoCurrent(spot.lat, spot.lon, "no-store")
          : await fetchOpenMeteoCurrent(spot.lat, spot.lon, "next", 300);
      if (!w) return null;
      return {
        name: spot.name,
        temperatureC: w.temperatureC,
        label: shortWeatherLabel(w.weatherCode),
        weatherCode: w.weatherCode,
      } satisfies HomeCityWeatherRow;
    })
  );
  return results.filter((r): r is HomeCityWeatherRow => r !== null);
}

function openMeteoFetchInit(
  cache: "no-store" | "next",
  revalidateSeconds: number
): RequestInit {
  if (cache === "no-store") return { cache: "no-store" };
  return { next: { revalidate: revalidateSeconds } };
}

/**
 * @param cache `no-store` for live client refreshes; `next` for ISR.
 * @param revalidateSeconds used only when cache is `next` (default 300 for homepage feel).
 */
export async function fetchOpenMeteoCurrent(
  lat: number,
  lon: number,
  cache: "no-store" | "next" = "next",
  revalidateSeconds: number = 300
): Promise<DestinationCurrentWeather | null> {
  try {
    const url = new URL("https://api.open-meteo.com/v1/forecast");
    url.searchParams.set("latitude", String(lat));
    url.searchParams.set("longitude", String(lon));
    url.searchParams.set("current", "temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m");
    url.searchParams.set("timezone", "Africa/Casablanca");
    const res = await fetch(
      url.toString(),
      openMeteoFetchInit(cache, revalidateSeconds)
    );
    if (!res.ok) return null;
    const data = (await res.json()) as {
      current?: {
        temperature_2m?: number;
        weather_code?: number;
        relative_humidity_2m?: number;
        wind_speed_10m?: number;
      };
    };
    const c = data.current;
    if (
      c?.temperature_2m === undefined ||
      c?.weather_code === undefined
    ) {
      return null;
    }
    return {
      temperatureC: Math.round(c.temperature_2m),
      weatherCode: c.weather_code,
      label: wmoWeatherLabel(c.weather_code),
      humidityPct:
        typeof c.relative_humidity_2m === "number"
          ? Math.round(c.relative_humidity_2m)
          : null,
      windKmh:
        typeof c.wind_speed_10m === "number"
          ? Math.round(c.wind_speed_10m)
          : null,
    };
  } catch {
    return null;
  }
}

/** Current calendar month (1–12) in Morocco (Casablanca timezone). */
export function currentMonthInMorocco(): number {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Africa/Casablanca",
    month: "numeric",
  }).formatToParts(new Date());
  const m = parts.find((p) => p.type === "month")?.value;
  return m ? parseInt(m, 10) : new Date().getMonth() + 1;
}

export type VisitSeasonBadge = "ideal" | "good" | "other";

export function visitSeasonStatus(
  month: number,
  idealMonths: number[],
  goodMonths: number[]
): VisitSeasonBadge {
  if (idealMonths.includes(month)) return "ideal";
  if (goodMonths.includes(month)) return "good";
  return "other";
}
