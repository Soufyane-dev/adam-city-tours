import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AboutAnimatedCounters from "@/components/about/AboutAnimatedCounters";

export const metadata: Metadata = {
  title: "About Us — Mortours",
  description:
    "Learn about Mortours, our vision, values, and how we craft premium Morocco travel experiences.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Authenticity",
    text: "Every itinerary reveals the real Morocco — medinas, Berber villages, and living traditions far beyond tourist trails.",
    image: "/images/authentic-tea-guests-berber-countryside.png",
    imageAlt: "Mortours guests sharing Berber tea with their guide in the Moroccan countryside",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.25}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
      </svg>
    ),
  },
  {
    title: "Luxury at Heart",
    text: "Curated riads, private transfers, and bespoke glamping — comfort and elegance at every turn of your journey.",
    image: "/images/luxury-riad-lounge-guests-palm-view.png",
    imageAlt: "Guests relaxing in a traditional Moroccan riad lounge with palm oasis view",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.25}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    title: "Human First",
    text: "We design around you — your pace, your style, your story. Each guest is a friend, not a booking number.",
    image: "/images/human-first-guests-guide-atlas-road.png",
    imageAlt: "Two guests and their Mortours guide smiling together on an Atlas mountain road",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.25}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Responsible Travel",
    text: "We invest in local communities and eco-conscious travel so Morocco's magic endures for future generations.",
    image: "/images/responsible-travel-dades-gorges-guests.png",
    imageAlt: "Mortours guests with their guide at Dades Gorges, Morocco",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.25}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5m6.364 1.136l-1.06 1.06M21 12h-1.5m-1.136 6.364l-1.06-1.06M12 19.5V21m-6.364-1.136l1.06-1.06M3 12h1.5m1.136-6.364l1.06 1.06M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
      </svg>
    ),
  },
];

const milestones = [
  { year: "2016", title: "The Spark", text: "Mortours is born in Marrakech — a passion project turned professional, built to share Morocco's soul." },
  { year: "2018", title: "Awarded Excellence", text: "Tripadvisor Certificate of Excellence. Our network grows to 12+ destinations and 300+ itineraries." },
  { year: "2021", title: "Luxury Collection", text: "We launch our premium tier: desert glamping, private camel treks, rooftop dinners under the stars." },
  { year: "2024", title: "Global Reach", text: "2,000+ travelers from 40+ countries. A 4.9-star average and recognition across top travel platforms." },
  { year: "2025", title: "Closer to You", text: "A renewed digital home, live Morocco insights, and an AI travel companion — so planning feels as personal as the trip itself." },
  { year: "2026", title: "Still Small, Still Yours", text: "We keep refining routes, partners, and guest care — fewer handoffs, more face-to-face moments, and Morocco's warmth in every detail." },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FDFBF7] text-slate-800 transition-premium dark:bg-[#08080f] dark:text-[#F5F0E8]">

      {/* Hero — clean full-bleed photo, consistent with the rest of the site */}
      <section className="relative h-[88vh] min-h-[640px] max-h-[920px] overflow-hidden">
        <Image
          src="/images/about-hero-group-dades.jpg"
          alt="Mortours travellers with their local guide in the Dades Valley"
          fill
          priority
          quality={100}
          className="about-hero-drift object-cover object-[center_45%]"
          sizes="100vw"
        />
        {/* Radial darkening focused on the centre — keeps the tagline legible */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 35% at 50% 50%, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 55%, transparent 80%)",
          }}
        />
        {/* Tagline — gold ornament + editorial line, centered */}
        <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
          <div aria-hidden className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C] shadow-[0_0_12px_rgba(201,168,76,0.75)]" />
            <span className="h-2 w-2 rotate-45 bg-[#C9A84C] shadow-[0_0_14px_rgba(201,168,76,0.75)]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C] shadow-[0_0_12px_rgba(201,168,76,0.75)]" />
          </div>
          <p className="mt-5 max-w-3xl font-[var(--font-playfair)] text-2xl italic leading-snug text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.7)] sm:mt-6 sm:text-3xl lg:text-[2.75rem] lg:leading-[1.15]">
            The family behind your journey.
          </p>
        </div>
        {/* Gold hairline at the bottom — editorial finish */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(201,168,76,0.55), transparent)",
          }}
        />
      </section>

      <AboutAnimatedCounters />

      {/* Values */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF8F4] via-white to-[#FDFCF9] py-32 dark:from-[#0c0c14] dark:via-[#09090f] dark:to-[#08080f]">
        <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[min(92%,52rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" aria-hidden />

        <div className="relative mx-auto max-w-6xl px-6 lg:px-12">
          <div className="mb-24 flex flex-col items-center text-center lg:mb-28">
            <div className="max-w-xl">
              <p className="font-[var(--font-inter)] text-[10px] font-semibold uppercase tracking-[0.4em] text-[#C9A84C]">
                What drives us
              </p>
              <h2 className="title-with-gold-glow mt-5 inline-block animate-text-shimmer bg-gradient-to-r from-slate-900 via-[#C9A84C] to-slate-900 bg-clip-text font-[var(--font-playfair)] text-4xl font-bold tracking-tight text-transparent drop-shadow-sm dark:from-white dark:via-[#C9A84C] dark:to-white sm:text-5xl">
                Core values
              </h2>
              <p className="mt-6 font-[var(--font-inter)] text-sm font-light leading-relaxed text-slate-500 dark:text-white/42 sm:text-base">
                Four principles shape every itinerary — from the first conversation to your last night in Morocco.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
            {values.map((value, i) => (
              <article
                key={value.title}
                className="luxury-value-card group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-b from-white to-[#FDFBF7] shadow-[0_18px_50px_-24px_rgba(15,23,42,0.18),inset_0_1px_0_rgba(255,255,255,0.8)] transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-[#C9A84C]/55 hover:shadow-[0_34px_80px_-28px_rgba(201,168,76,0.35),0_0_0_1px_rgba(201,168,76,0.18),inset_0_1px_0_rgba(255,255,255,0.9)] dark:border-white/[0.08] dark:from-[#101019] dark:to-[#0c0c15] dark:shadow-[0_18px_50px_-24px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.04)] dark:hover:border-[#C9A84C]/45 dark:hover:shadow-[0_34px_80px_-22px_rgba(201,168,76,0.25),0_0_0_1px_rgba(201,168,76,0.22),inset_0_1px_0_rgba(255,255,255,0.06)]"
                style={{
                  transitionDelay: `${i * 60}ms`,
                  ["--shine-delay" as string]: `${i * 0.9}s`,
                }}
              >
                {/* Gold top accent line — grows on hover */}
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 z-20 h-[2px] origin-center scale-x-0 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent transition-transform duration-[600ms] ease-out group-hover:scale-x-100"
                />
                {/* Shine sweep — continuous, staggered per card */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 z-[5] overflow-hidden rounded-2xl"
                >
                  <span className="luxury-value-shine absolute -left-1/3 top-0 h-full w-1/3" />
                </span>

                {/* Photo — top of the card */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={value.image}
                    alt={value.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                  />
                  {/* Dark gradient for legibility of the floating number */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"
                  />
                  {/* Gold hairline at the very bottom of the image */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/60 to-transparent"
                  />
                  {/* Floating number */}
                  <span className="absolute left-5 top-4 font-[var(--font-playfair)] text-xs font-medium italic tabular-nums text-white/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {/* Icon orb — floats over the bottom of the image */}
                  <div className="absolute -bottom-7 left-6 z-10">
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 scale-110 rounded-full bg-[#C9A84C]/0 blur-xl transition-all duration-500 group-hover:bg-[#C9A84C]/35"
                    />
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-white to-[#FDF4DC] text-[#C9A84C] shadow-[0_10px_28px_-8px_rgba(201,168,76,0.45),inset_0_1px_0_rgba(255,255,255,0.9)] ring-1 ring-[#C9A84C]/30 transition-all duration-500 group-hover:scale-[1.06] group-hover:ring-[#C9A84C]/70 dark:from-[#1a1a26] dark:to-[#12121c] dark:shadow-[0_10px_28px_-8px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.05)] dark:ring-[#C9A84C]/25">
                      {value.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative flex flex-1 flex-col px-8 pb-8 pt-12">
                  {/* Soft corner gold glow */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-16 top-0 h-40 w-40 rounded-full bg-[#C9A84C]/0 opacity-0 blur-3xl transition-all duration-[700ms] group-hover:bg-[#C9A84C]/25 group-hover:opacity-100"
                  />

                  {/* Title */}
                  <h3 className="relative font-[var(--font-playfair)] text-[1.45rem] font-medium leading-tight tracking-tight text-slate-900 transition-colors duration-500 dark:text-white">
                    {value.title}
                  </h3>

                  {/* Small gold underline */}
                  <span
                    aria-hidden
                    className="mt-4 block h-px w-10 bg-gradient-to-r from-[#C9A84C] via-[#C9A84C]/50 to-transparent transition-all duration-500 group-hover:w-20 group-hover:via-[#C9A84C]"
                  />

                  {/* Body text */}
                  <p className="relative mt-5 flex-1 font-[var(--font-inter)] text-sm font-light leading-relaxed text-slate-600 dark:text-white/55">
                    {value.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section
        id="our-journey"
        aria-labelledby="our-journey-heading"
        className="scroll-mt-28 border-t border-slate-200/70 bg-white pt-32 pb-10 dark:border-white/[0.06] dark:bg-[#0a0a0f] md:pb-12"
      >
        <div className="mx-auto max-w-2xl px-6 lg:px-12">
          <header className="mb-24 text-center">
            <p className="font-[var(--font-inter)] text-[10px] font-semibold uppercase tracking-[0.4em] text-[#C9A84C]">
              Since 2016
            </p>
            <h2
              id="our-journey-heading"
              className="title-with-gold-glow display-inline-block mt-6 font-[var(--font-playfair)] text-4xl font-bold text-transparent drop-shadow-sm sm:text-5xl bg-gradient-to-r from-slate-900 via-[#C9A84C] to-slate-900 bg-clip-text dark:from-white dark:via-[#C9A84C] dark:to-white animate-text-shimmer"
            >
              Our journey
            </h2>
          </header>

          <div className="relative pl-1">
            <div
              className="absolute bottom-0 left-[13px] top-0 w-px bg-gradient-to-b from-[#C9A84C]/60 via-slate-200/90 to-transparent dark:via-white/12"
              aria-hidden
            />

            <ul className="space-y-6">
              {milestones.map((m) => (
                <li key={m.year}>
                  <div className="group relative rounded-2xl border border-slate-200/60 bg-slate-50/30 py-8 pl-12 pr-8 transition-all duration-500 hover:border-[#C9A84C]/25 hover:bg-white hover:shadow-lg hover:shadow-slate-200/40 dark:border-white/[0.06] dark:bg-white/[0.02] dark:hover:border-[#C9A84C]/20 dark:hover:bg-white/[0.04] dark:hover:shadow-black/30 sm:pl-14 sm:pr-10">
                    <div className="absolute left-[13px] top-9 z-10 -translate-x-1/2">
                      <span className="block h-3 w-3 rounded-full border-2 border-white bg-[#C9A84C] shadow-[0_0_0_5px_rgba(201,168,76,0.1)] dark:border-[#0a0a0f]" />
                    </div>
                    <time className="font-[var(--font-inter)] text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C9A84C]">
                      {m.year}
                    </time>
                    <h3 className="mt-2 font-[var(--font-playfair)] text-xl font-medium text-slate-900 dark:text-white sm:text-2xl">
                      {m.title}
                    </h3>
                    <p className="mt-3 font-[var(--font-inter)] text-sm font-light leading-relaxed text-slate-600 dark:text-white/44">
                      {m.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Bottom CTAs — same spot as the former full-width CTA */}
      <section
        aria-label="Plan your trip"
        className="border-t border-slate-200/70 bg-[#FDFBF7] px-6 pt-8 pb-12 dark:border-white/[0.06] dark:bg-[#08080f] sm:pt-10 sm:pb-14 lg:px-12"
      >
        <div className="mx-auto flex max-w-xl flex-col items-stretch justify-center gap-5 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-6">
          <Link
            href="/contact"
            className="luxury-cta luxury-cta--primary min-h-[3.125rem] min-w-[13.5rem] justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A84C]"
          >
            <span className="luxury-cta__label">Book now</span>
            <ArrowRight className="luxury-cta__icon" strokeWidth={2.25} aria-hidden />
          </Link>
          <Link
            href="/tours"
            className="luxury-cta luxury-cta--ghost min-h-[3.125rem] min-w-[13.5rem] justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A84C]"
          >
            <span className="luxury-cta__label">Discover Morocco</span>
            <ArrowRight className="luxury-cta__icon" strokeWidth={2.25} aria-hidden />
          </Link>
        </div>
      </section>
    </main>
  );
}
