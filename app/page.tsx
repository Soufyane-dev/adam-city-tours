import type { Metadata } from "next";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import HeroSlider from "@/components/HeroSlider";
import HomeLiveWeather from "@/components/HomeLiveWeather";
import DestinationCard from "@/components/DestinationCard";
import { destinations } from "@/lib/destinations";
import { SITE_URL } from "@/lib/site";

const SeasonPlanner = dynamic(() => import("@/components/SeasonPlanner"), {
  loading: () => (
    <div className="border-y border-slate-100 bg-white py-16 dark:border-white/10 dark:bg-[var(--background)]">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mx-auto h-9 max-w-sm animate-pulse rounded-lg bg-slate-200 dark:bg-white/10" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="h-44 animate-pulse rounded-2xl bg-slate-100 dark:bg-white/5" />
          <div className="h-44 animate-pulse rounded-2xl bg-slate-100 dark:bg-white/5" />
        </div>
      </div>
    </div>
  ),
});

const ActivitiesExperiences = dynamic(() => import("@/components/ActivitiesExperiences"), {
  loading: () => (
    <div
      className="min-h-[22rem] bg-gradient-to-b from-[#FDFBF7] to-white dark:from-[#0c0c14] dark:to-[#08080f]"
      aria-hidden
    />
  ),
});

const TopRatedTours = dynamic(() => import("@/components/TopRatedTours"), {
  loading: () => (
    <div className="min-h-[18rem] bg-[#FAF9F6] dark:bg-[var(--background)]" aria-hidden />
  ),
});

const OurFleet = dynamic(() => import("@/components/OurFleet"), {
  loading: () => <div className="min-h-[16rem] bg-white dark:bg-[#0a0a0f]" aria-hidden />,
});

export const metadata: Metadata = {
  title: "Adam City Tours — Discover Morocco in Style",
  description:
    "Explore Morocco with Adam City Tours. Breathtaking desert adventures, imperial city tours, mountain treks, and coastal escapes, all crafted for premium travel experiences.",
  alternates: { canonical: SITE_URL },
};

const StarRating = ({ count }: { count: number }) => {
  return (
    <div className="flex gap-1.5">
      {[...Array(count)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-[#FACC15] drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
};

type HomeTestimonial = {
  name: string;
  country: string;
  tour: string;
  text: string;
  stars: number;
  avatar?: string;
};

const testimonials: HomeTestimonial[] = [
  {
    name: "Sarah & David M.",
    country: "United Kingdom",
    tour: "Luxury Desert Camp",
    text: "An absolutely unforgettable experience. From the private transport to the majestic dunes of Merzouga, every detail was handled with pure luxury. The sunset tee is a memory we'll cherish forever.",
    stars: 5,
  },
  {
    name: "Elena G.",
    country: "Spain",
    tour: "Imperial Cities Tour",
    text: "Adam City Tours took us beyond the typical tourist paths. Our guide Adam was brilliant, and the riads they selected for us in Fes and Marrakech were breathtaking. Truly a premium service.",
    stars: 5,
  },
  {
    name: "The Harrison Family",
    country: "USA",
    tour: "Atlas Mountains Retreat",
    text: "Traveling in Morocco was a breeze thanks to Adam City Tours. Perfect pacing, excellent vehicle comfort, and a wonderful balance of culture and relaxation. Fully recommended!",
    stars: 5,
  },
  {
    name: "Jürgen W.",
    country: "Germany",
    tour: "Custom Coastal Journey",
    text: "Flawless organization from start to finish. The attention to detail and personal touch made all the difference. We felt deeply connected to the Moroccan culture.",
    stars: 5,
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO (gradient + centred title + stats) ── */}
      <HeroSlider />

      <TopRatedTours />

      {/* ── DESTINATIONS ── */}
      <section id="destinations" className="pt-12 pb-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="title-with-gold-glow font-[var(--font-playfair)] text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-[#C9A84C] to-slate-900 dark:from-white dark:via-[#C9A84C] dark:to-white animate-text-shimmer mb-4 drop-shadow-sm">
            Explore Our Majestic Destinations
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto leading-relaxed">
            From the golden dunes of the Sahara to the cobalt streets of the North, 
            discover the most enchanting locations in the Kingdom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {destinations.map((dest, index) => (
            <DestinationCard
              key={dest.slug}
              slug={dest.slug}
              name={dest.name}
              image={dest.image}
              priority={index < 3}
            />
          ))}
        </div>
      </section>

      <Suspense
        fallback={
          <section
            className="border-y border-slate-100 bg-white py-10 dark:border-white/10 dark:bg-[var(--background)]"
            aria-hidden
          >
            <div className="mx-auto max-w-7xl px-6 text-center">
              <div className="mx-auto mb-2 h-10 max-w-xs animate-pulse rounded-lg bg-slate-200 dark:bg-white/10" />
              <div className="mx-auto h-4 max-w-md animate-pulse rounded bg-slate-100 dark:bg-white/5" />
            </div>
            <div className="mx-auto mt-10 flex max-w-7xl flex-wrap justify-center gap-10 px-6">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="flex w-24 flex-col items-center gap-2"
                >
                  <div className="h-14 w-14 animate-pulse rounded-2xl bg-slate-100 dark:bg-white/10" />
                  <div className="h-3 w-16 animate-pulse rounded bg-slate-100 dark:bg-white/10" />
                  <div className="h-6 w-10 animate-pulse rounded bg-slate-100 dark:bg-white/10" />
                </div>
              ))}
            </div>
          </section>
        }
      >
        <HomeLiveWeather />
      </Suspense>

      <SeasonPlanner />

      <ActivitiesExperiences />

      {/* ── OUR VEHICLES ── */}
      <OurFleet />

      {/* ── TESTIMONIALS ── */}
      <section id="testimonials" className="py-24 px-6 lg:px-12 bg-[#FAF9F6] dark:bg-[var(--background)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="title-with-gold-glow font-[var(--font-playfair)] text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-[#C9A84C] to-slate-900 dark:from-white dark:via-[#C9A84C] dark:to-white animate-text-shimmer mb-4 drop-shadow-sm">
              Real Guest Reviews
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto leading-relaxed">
              Guest feedback in their own words — read more on our TripAdvisor page. Photos appear only when
              travelers choose to share them; otherwise we show initials.
            </p>
          </div>

          <div className="flex items-center justify-center mb-10">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.tripadvisor.com/Attraction_Review-g293734-d20363595-Reviews-Adamcitytours-Marrakech_Marrakech_Safi.html"
              className="inline-flex items-center gap-3 bg-[#00AA6C]/10 text-[#00AA6C] hover:bg-[#00AA6C]/20 border border-[#00AA6C]/30 px-6 py-2.5 rounded-full transition-colors font-semibold text-sm"
            >
              <Image
                src="https://www.tripadvisor.com/img/cdsi/img2/branding/v2/Tripadvisor_lockup_horizontal_secondary_registered-11900-2.svg"
                alt="TripAdvisor"
                width={120}
                height={22}
                className="h-5 w-auto"
                loading="lazy"
                unoptimized
              />
              <span>Read all our reviews</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white dark:bg-white/5 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:shadow-[#C9A84C]/10 dark:hover:shadow-black/50 transition-all duration-500 hover:-translate-y-2 relative border border-slate-200 dark:border-white/10 group overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#C9A84C]/10 rounded-full blur-2xl group-hover:bg-[#C9A84C]/20 transition-colors" />

                <div className="absolute top-6 right-6 text-[#C9A84C]/30 group-hover:text-[#C9A84C]/50 transition-colors">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <div className="relative z-10">
                  <StarRating count={t.stars} />

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mt-5 mb-8 min-h-[100px]">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  <div className="flex items-center gap-4 border-t border-slate-200 dark:border-white/10 pt-5">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-[#141C2C] dark:bg-white/10 border-2 border-[#C9A84C]/50 flex items-center justify-center overflow-hidden">
                      {t.avatar ? (
                        <Image
                          src={t.avatar}
                          alt={t.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                          unoptimized={t.avatar.startsWith("http")}
                        />
                      ) : (
                        <span className="text-[#C9A84C] font-bold text-lg font-[var(--font-playfair)]">
                          {t.name.charAt(0)}
                        </span>
                      )}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800 dark:text-white text-sm whitespace-nowrap overflow-hidden text-ellipsis w-[150px]">
                        {t.name}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">{t.country}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}