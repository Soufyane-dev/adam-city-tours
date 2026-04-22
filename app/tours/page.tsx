import type { Metadata } from "next";
import Link from "next/link";
import TourCard from "@/components/TourCard";
import { filterToursByDeparture, tours } from "@/lib/tours";

export const metadata: Metadata = {
  title: "All Tours",
  description:
    "Browse our complete collection of Morocco tours. Desert adventures, imperial city tours, mountain treks, coastal escapes and more — all with expert local guides.",
  alternates: { canonical: "/tours" },
};

const FROM_LABELS: Record<string, string> = {
  marrakech: "Tours from Marrakech",
  fes: "Tours from Fes",
  casablanca: "Tours from Casablanca",
};

type Props = {
  searchParams: Promise<{ from?: string }>;
};

export default async function ToursPage({ searchParams }: Props) {
  const params = await searchParams;
  const fromRaw = typeof params.from === "string" ? params.from : undefined;
  const fromKey = fromRaw?.trim().toLowerCase();
  const filtered = filterToursByDeparture(tours, fromKey);
  const headingSub =
    fromKey && FROM_LABELS[fromKey] ? FROM_LABELS[fromKey] : "All Tours";

  return (
    <>
      <section className="bg-gradient-to-b from-[#F0E8DA] to-[#FAF6F0] px-6 pb-16 pt-36 text-center dark:from-[#1A1A2E] dark:to-[var(--background)]">
        <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.3em] text-[#FACC15]">
          Discover Morocco
        </span>
        <h1 className="title-with-gold-glow title-with-gold-glow--wide mb-4 font-[var(--font-playfair)] text-5xl font-bold text-[#2C2C2C] dark:text-white lg:text-6xl">
          {headingSub}
        </h1>
        <p className="mx-auto max-w-xl text-lg leading-relaxed text-[#6B6B6B] dark:text-gray-400">
          {fromKey
            ? "Itineraries that highlight this hub in the route or story — refine anytime with our team."
            : "From golden Sahara dunes to ancient medinas — find your perfect Morocco experience."}
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-[#6B6B6B] dark:text-gray-400">
            Showing{" "}
            <span className="font-semibold text-[#2C2C2C] dark:text-white">{filtered.length}</span>{" "}
            {filtered.length === 1 ? "tour" : "tours"}
            {fromKey ? ` · filtered by departure` : " available"}
          </p>
          <div className="flex items-center gap-2 text-sm text-[#6B6B6B] dark:text-gray-400">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            All tours include professional guides
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="rounded-2xl border border-slate-200 bg-white/80 py-12 text-center text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
            No tours match this filter yet.{" "}
            <Link href="/tours" className="font-semibold text-[#2E79C7] underline-offset-2 hover:underline">
              View all tours
            </Link>
            .
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((tour, i) => (
              <TourCard key={tour.id} tour={tour} index={i} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
