import type { Metadata } from "next";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import HeroSlider from "@/components/HeroSlider";
import HomeLiveWeather from "@/components/HomeLiveWeather";
import DestinationCard from "@/components/DestinationCard";
import { destinations } from "@/lib/destinations";

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
const TRIPADVISOR_WORDMARK =
  "https://www.tripadvisor.com/img/cdsi/img2/branding/v2/Tripadvisor_lockup_horizontal_secondary_registered-11900-2.svg";

export const metadata: Metadata = {
  title: "Mortours — Discover Morocco in Style",
  description:
    "Explore Morocco with Mortours. Breathtaking desert adventures, imperial city tours, mountain treks, and coastal escapes, all crafted for premium travel experiences.",
  alternates: { canonical: "/" },
};

const trustedPartners = [
  {
    name: "TripCook",
    multiline: true,
    tone: "text-[#c0380a]",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" aria-hidden="true">
        <rect x="2" y="2" width="28" height="28" rx="6" fill="#c0380a" />
        <path d="M8 10 Q16 6 24 10 L22 22 Q16 26 10 22 Z" fill="#e8591a" />
        <circle cx="16" cy="15" r="4" fill="#fff" opacity="0.9" />
        <path d="M14 13 L18 13 M16 11 L16 19" stroke="#c0380a" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "viator.",
    tone: "text-[#1a2f3a]",
    icon: null,
  },
  {
    name: "Tripadvisor",
    tone: "text-[#111111]",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 28 28" aria-hidden="true">
        <circle cx="14" cy="14" r="13" fill="#34E0A1" />
        <circle cx="9.8" cy="14" r="3.8" fill="#111" />
        <circle cx="18.2" cy="14" r="3.8" fill="#111" />
        <circle cx="9.8" cy="14" r="1.4" fill="#fff" />
        <circle cx="18.2" cy="14" r="1.4" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "Google Maps",
    tone: "text-[#5F6368]",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 28 28" aria-hidden="true">
        <path d="M14 3c-4.4 0-8 3.6-8 8 0 5.6 8 15 8 15s8-9.4 8-15c0-4.4-3.6-8-8-8z" fill="#EA4335" />
        <path d="M14 3c-4.4 0-8 3.6-8 8 0 2 1 4.4 2.4 6.8l5.6-5.6V3z" fill="#FBBC05" />
        <path d="M14 3v11.2l5.6 5.6C21 17.4 22 15 22 11c0-4.4-3.6-8-8-8z" fill="#4285F4" />
        <circle cx="14" cy="11" r="3.2" fill="#34A853" />
      </svg>
    ),
  },
  {
    name: "GET YOUR GUIDE",
    tone: "text-[#FF5B00]",
    icon: null,
  },
  {
    name: "airbnb",
    tone: "text-[#FF385C]",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 28 28" aria-hidden="true">
        <path d="M14 6.5c2.8 0 4.9 2.3 5.9 4.6 1.2 2.6 2 5 3.2 7.2.5.9.1 2-.8 2.4-2.3 1.1-4.8-.3-6.5-2.1-1 .9-2.3 1.5-3.8 1.5s-2.8-.6-3.8-1.5c-1.7 1.8-4.2 3.2-6.5 2.1-.9-.4-1.3-1.5-.8-2.4 1.2-2.2 2-4.6 3.2-7.2 1-2.3 3.1-4.6 5.9-4.6z" fill="none" stroke="#FF385C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="14" cy="14.5" r="2.4" fill="none" stroke="#FF385C" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: "civitatis",
    tone: "text-[#003594]",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 28 28" aria-hidden="true">
        <circle cx="14" cy="14" r="11" fill="#003594" />
        <path d="M19 9.5a6.5 6.5 0 10.2 9" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Expedia",
    tone: "text-[#003580]",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="14" fill="#003580" />
        <circle cx="16" cy="16" r="10" fill="#fff" />
        <path d="M11 16 Q16 9 21 16 Q16 23 11 16Z" fill="#FFC72C" />
        <circle cx="16" cy="16" r="3" fill="#003580" />
      </svg>
    ),
  },
  {
    name: "klook",
    tone: "text-[#FF5722]",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 28 28" aria-hidden="true">
        <circle cx="7" cy="10" r="4.5" fill="#FF5722" />
        <circle cx="7" cy="10" r="4.5" fill="none" stroke="#FF9800" strokeWidth="1.5" />
        <circle cx="15" cy="7" r="3.5" fill="#4CAF50" />
        <circle cx="21" cy="12" r="3" fill="#2196F3" />
        <circle cx="18" cy="20" r="3.5" fill="#9C27B0" />
        <circle cx="10" cy="22" r="3" fill="#FF9800" />
      </svg>
    ),
  },
  {
    name: "musement",
    tone: "text-[#4a4a4a]",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3C9 3 7 5 7 8c0 2 1.5 3.5 2.5 4.5L12 15l2.5-2.5C15.5 11.5 17 10 17 8c0-3-2-5-5-5z" fill="#E91E63" />
        <circle cx="12" cy="8" r="2" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "peekPRO",
    tone: "text-[#111111]",
    customRender: true,
    icon: null,
  },
  {
    name: "tourradar",
    tone: "",
    customRender: true,
    icon: null,
  },
  {
    name: "headout",
    tone: "text-[#7B2FBE]",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" aria-hidden="true">
        <ellipse cx="12" cy="10" rx="7" ry="5" fill="#7B2FBE" />
        <path d="M5 10 Q5 18 12 18 Q19 18 19 10" fill="#7B2FBE" />
        <circle cx="9" cy="10" r="1.5" fill="#fff" />
        <circle cx="15" cy="10" r="1.5" fill="#fff" />
      </svg>
    ),
  },
];

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
  /** Optional: path under `/public`, e.g. `/images/testimonials/elena.jpg` — only with the guest’s permission. */
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
    text: "Mortours took us beyond the typical tourist paths. Our guide Karim was brilliant, and the riads they selected for us in Fes and Marrakech were breathtaking. Truly a premium service.",
    stars: 5,
  },
  {
    name: "The Harrison Family",
    country: "USA",
    tour: "Atlas Mountains Retreat",
    text: "Traveling in Morocco was a breeze thanks to Mortours. Perfect pacing, excellent vehicle comfort, and a wonderful balance of culture and relaxation. Fully recommended!",
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
      {/* ── HERO (video + stats en dessous, sans chevauchement) ── */}
      <HeroSlider />

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

      {/* ── TRUSTED BY ── */}
      <section className="py-10 bg-white dark:bg-[var(--background)] border-y border-slate-100 dark:border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="title-with-gold-glow display-inline-block font-[var(--font-playfair)] text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-[#C9A84C] to-slate-900 dark:from-white dark:via-[#C9A84C] dark:to-white animate-text-shimmer mb-8 drop-shadow-sm">
            Trusted by
          </h2>
        </div>

        {/* Marquee container */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-[#1A1A2E] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-[#1A1A2E] to-transparent z-10 pointer-events-none" />

          <div className="trusted-by-track flex w-max items-center gap-14 px-8">
            {[...trustedPartners, ...trustedPartners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className={`flex items-center gap-2.5 whitespace-nowrap select-none ${partner.tone}`}
              >
                {partner.icon}
                {partner.multiline ? (
                  <span className="text-2xl font-extrabold leading-none">
                    <span className="block">Trip</span>
                    <span className="block">Cook</span>
                  </span>
                ) : partner.name === "peekPRO" ? (
                  <span className="text-2xl font-bold tracking-tight">
                    <span className="text-[#111]">peek</span>
                    <span className="text-[#111] font-black">PRO</span>
                  </span>
                ) : partner.name === "tourradar" ? (
                  <span className="text-2xl font-bold tracking-tight">
                    <span className="text-[#00B5E2]">tour</span>
                    <span className="text-[#F47B20]">radar</span>
                  </span>
                ) : (
                  <span className={`font-bold tracking-tight ${
                    partner.name === "viator." ? "text-3xl font-black" :
                    partner.name === "GET YOUR GUIDE" ? "text-sm font-extrabold tracking-widest" :
                    "text-2xl"
                  }`}>
                    {partner.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOP-RATED TOURS (packages showcase) ── */}
      <TopRatedTours />

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

          <div className="flex items-center justify-center gap-2 mb-10">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.tripadvisor.com/Attraction_Review-g293734-d32975170-Reviews-Mortours_Adventure-Marrakech_Marrakech_Safi.html"
              className="inline-flex items-center gap-2 bg-[#00AA6C]/10 text-[#00AA6C] hover:bg-[#00AA6C]/20 border border-[#00AA6C]/30 px-6 py-2.5 rounded-full transition-colors font-semibold"
            >
              <Image
                src={TRIPADVISOR_WORDMARK}
                alt="TripAdvisor"
                width={160}
                height={28}
                className="h-5 w-auto"
                loading="lazy"
                unoptimized
              />
              <span className="text-sm">Read all our reviews</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white dark:bg-white/5 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:shadow-[#C9A84C]/10 dark:hover:shadow-black/50 transition-all duration-500 hover:-translate-y-2 relative border border-slate-200 dark:border-white/10 group overflow-hidden"
              >
                {/* Gold glow top right */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#C9A84C]/10 rounded-full blur-2xl group-hover:bg-[#C9A84C]/20 transition-colors" />

                {/* Quote icon */}
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
                    <div className="w-12 h-12 shrink-0 rounded-full bg-[#1A1A2E] dark:bg-white/10 border-2 border-[#C9A84C]/50 flex items-center justify-center overflow-hidden">
                      {t.avatar ? (
                        <Image
                          src={t.avatar}
                          alt={t.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                          unoptimized={t.avatar.startsWith('http')}
                        />
                      ) : (
                        <span className="text-[#C9A84C] font-bold text-lg font-[var(--font-playfair)]">
                          {t.name.charAt(0)}
                        </span>
                      )}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800 dark:text-white text-sm whitespace-nowrap overflow-hidden text-ellipsis w-[150px]">{t.name}</div>
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