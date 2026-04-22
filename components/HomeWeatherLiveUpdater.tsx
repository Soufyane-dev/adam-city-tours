"use client";

import { useCallback, useEffect, useState } from "react";
import type { HomeCityWeatherRow } from "@/lib/weather";
import HomeWeatherMarquee from "@/components/HomeWeatherMarquee";

/** Client-side refresh so conditions update while the tab stays open (Open-Meteo). */
const POLL_MS = 5 * 60 * 1000;

type Props = {
  initialCities: HomeCityWeatherRow[];
};

export default function HomeWeatherLiveUpdater({ initialCities }: Props) {
  const [cities, setCities] = useState(initialCities);

  const refresh = useCallback(async () => {
    try {
      const res = await fetch("/api/weather/home", { cache: "no-store" });
      if (!res.ok) return;
      const data = (await res.json()) as { cities?: HomeCityWeatherRow[] };
      if (Array.isArray(data.cities) && data.cities.length > 0) {
        setCities(data.cities);
      }
    } catch {
      /* keep last good snapshot */
    }
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      void refresh();
    }, POLL_MS);
    return () => window.clearInterval(id);
  }, [refresh]);

  useEffect(() => {
    const onVis = () => {
      if (document.visibilityState === "visible") void refresh();
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, [refresh]);

  return <HomeWeatherMarquee cities={cities} />;
}
