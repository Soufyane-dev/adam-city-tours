import Image from "next/image";
import Link from "next/link";

const dayTrips = [
  {
    title: "Essaouira day trip",
    image: "/images/essaouira-skala-seagulls.png",
    detailsHref: "/destinations/essaouira",
    quoteHref: "/contact?trip=essaouira-day-trip",
  },
  {
    title: "Ouarzazate & Ait Benhaddou",
    image: "/images/ait-benhadou-1.png",
    detailsHref: "/tours/sahara-desert-adventure",
    quoteHref: "/contact?trip=ouarzazate-ait-benhadou",
  },
  {
    title: "Ourika Valley",
    image: "/images/ourika-valley-1.png",
    detailsHref: "/destinations/marrakech",
    quoteHref: "/contact?trip=ourika-valley",
  },
  {
    title: "City sightseeing",
    image: "/images/gallery-marrakech-jemaa.png",
    detailsHref: "/destinations/marrakech",
    quoteHref: "/contact?trip=marrakech-city-sightseeing",
  },
  {
    title: "Agafay desert",
    image: "/images/fleet-land-cruiser-dune.jpg",
    detailsHref: "/tours/sahara-desert-adventure",
    quoteHref: "/contact?trip=agafay-desert",
  },
  {
    title: "Ouzoud waterfalls",
    image: "/images/ourika-valley-4.png",
    detailsHref: "/contact?trip=ouzoud-waterfalls",
    quoteHref: "/contact?trip=ouzoud-waterfalls",
  },
];

export default function PopularMarrakechDayTrips() {
  return (
    <section
      id="day-trips"
      className="border-b border-slate-100 bg-white py-14 dark:border-white/10 dark:bg-[var(--background)] px-6 lg:px-12 lg:py-16"
      aria-labelledby="popular-day-trips-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center lg:mb-12">
          <h2
            id="popular-day-trips-heading"
            className="title-with-gold-glow display-inline-block font-[var(--font-playfair)] text-4xl font-bold text-transparent drop-shadow-sm lg:text-5xl mb-2 bg-gradient-to-r from-slate-900 via-[#C9A84C] to-slate-900 bg-clip-text dark:from-white dark:via-[#C9A84C] dark:to-white animate-text-shimmer"
          >
            Popular Marrakech Day Trips
          </h2>
          <p className="mx-auto max-w-xl text-sm text-slate-500 dark:text-slate-400">
            Easy escapes from the Red City—each trip can be tailored to your pace, group size, and hotel pickup.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {dayTrips.map((trip) => (
            <article
              key={trip.title}
              className="flex flex-col overflow-hidden rounded-md shadow-[0_8px_28px_-6px_rgba(20,20,30,0.16)] dark:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.45)]"
            >
              <Link href={trip.detailsHref} className="group relative block aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={trip.image}
                  alt={trip.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"
                  aria-hidden
                />
                <p className="absolute inset-x-0 bottom-0 px-4 pb-4 pt-14 text-center font-[var(--font-inter)] text-base font-semibold text-white drop-shadow-md sm:text-lg">
                  {trip.title}
                </p>
              </Link>

              <div className="flex gap-2 border-t border-slate-200/60 bg-[#FAF9F6] px-3 py-3 dark:border-white/5 dark:bg-white/[0.03]">
                <Link
                  href={trip.detailsHref}
                  className="flex-1 rounded-md bg-[#4A7BAF] py-2.5 text-center font-[var(--font-inter)] text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#3d6794] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4A7BAF] dark:bg-[#5B8EC8] dark:hover:bg-[#4A7BAF]"
                >
                  Details
                </Link>
                <Link
                  href={trip.quoteHref}
                  className="flex-1 rounded-md bg-[#C9A84C] py-2.5 text-center font-[var(--font-inter)] text-sm font-semibold text-[#1a1508] shadow-sm transition-all duration-300 hover:bg-[#b59640] hover:shadow-md hover:shadow-[#C9A84C]/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A84C]"
                >
                  Get A Quote
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
