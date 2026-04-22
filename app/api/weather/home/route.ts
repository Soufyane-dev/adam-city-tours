import { NextResponse } from "next/server";
import { fetchHomepageCitiesWeather } from "@/lib/weather";

/** Align with Open-Meteo fetch revalidate in `fetchHomepageCitiesWeather("cached")`. */
export const revalidate = 300;

export async function GET() {
  const cities = await fetchHomepageCitiesWeather("cached");
  return NextResponse.json(
    { cities },
    {
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    }
  );
}
