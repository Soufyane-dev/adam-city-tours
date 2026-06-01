import Image from "next/image";
import Link from "next/link";
import type { Destination } from "@/lib/destinations";
import { destinations } from "@/lib/destinations";
import type { DestinationCurrentWeather } from "@/lib/weather";
import DestinationClimateCard from "@/components/DestinationClimateCard";
import DestinationTimeline from "@/components/DestinationTimeline";
import { ArrowRight, ChevronRight } from "lucide-react";

type Props = {
  dest: Destination;
  weather: DestinationCurrentWeather | null;
};

const navLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#highlights", label: "Highlights" },
  { href: "#climate", label: "Climate" },
  { href: "#journey", label: "Journey" },
] as const;

export default function DestinationDetailLayout({ dest, weather }: Props) {
  const others = destinations.filter((d) => d.slug !== dest.slug).slice(0, 4);
  const hasTimeline = (dest.timeline?.length ?? 0) > 0;
  const sectionNav = hasTimeline
    ? navLinks
    : navLinks.filter((n) => n.href !== "#journey");

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#0D1B2A] dark:bg-[#08080f] dark:text-[#F5F0E8]">
      {/* ── Hero: extra height on desktop + optional “zoom out” inset so tall subjects (minarets) breathe; stronger type contrast ── */}
      <section className="relative min-h-[88svh] w-full overflow-hidden bg-[#1c1916] sm:min-h-[90svh] lg:min-h-[94svh] xl:min-h-[96svh] 2xl:min-h-[100svh]">
        <div className="absolute inset-0">
          <div className="absolute -inset-[5%] sm:-inset-[7%] lg:-inset-[9%] xl:-inset-[11%] 2xl:-inset-[13%]">
            <Image
              src={dest.image}
              alt={dest.name}
              fill
              className="object-cover object-[center_50%] sm:object-center lg:object-[center_32%] xl:object-[center_28%]"
              priority
              sizes="100vw"
              
            />
          </div>
        </div>
        {/* Legibility: soft base gradient + center vignette */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-black/25"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_85%_70%_at_50%_45%,rgba(8,8,15,0.5)_0%,rgba(8,8,15,0.18)_55%,transparent_100%)] dark:bg-[radial-gradient(ellipse_85%_70%_at_50%_45%,rgba(5,5,8,0.55)_0%,rgba(5,5,8,0.2)_55%,transparent_100%)]"
          aria-hidden
        />

        <div className="relative z-10 mx-auto flex min-h-[88svh] max-w-5xl flex-col justify-center px-6 py-24 text-center sm:min-h-[90svh] sm:py-28 lg:min-h-[94svh] lg:px-12 lg:py-32 xl:min-h-[96svh] xl:py-36 2xl:min-h-[100svh] 2xl:py-40">
          <h1
            className="title-with-gold-glow title-with-gold-glow--on-dark title-with-gold-glow--wide font-[var(--font-playfair)] text-[2.5rem] font-semibold leading-[1.08] tracking-tight text-white drop-shadow-[0_4px_32px_rgba(0,0,0,0.85)] sm:text-[2.75rem] md:text-5xl lg:text-[4rem] xl:text-[4.35rem] 2xl:text-[4.5rem] [&+span]:mt-0"
          >
            {dest.name}
          </h1>
        </div>
      </section>

      {/* ── Breadcrumb + in-page nav ── */}
      <div className="sticky top-0 z-30 border-b border-slate-200/80 bg-[#FDFBF7]/90 backdrop-blur-md dark:border-white/10 dark:bg-[#08080f]/90">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-12">
          <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
            <Link href="/" className="transition hover:text-[#0F3568] dark:hover:text-[#C9A84C]">
              Home
            </Link>
            <ChevronRight className="inline h-3.5 w-3.5 shrink-0 opacity-50" aria-hidden />
            <span className="font-medium text-slate-800 dark:text-white">{dest.name}</span>
          </nav>
          <nav
            className="-mx-1 flex flex-nowrap gap-2 overflow-x-auto px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:px-0"
            aria-label="On this page"
          >
            {sectionNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="luxury-pill shrink-0 rounded-full border border-slate-200/90 bg-white/80 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* ── Overview + highlights (editorial grid) ── */}
      <section
        id="overview"
        className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-28"
      >
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            {/* ── Editorial luxury card ── */}
            <article className="relative overflow-hidden rounded-[2rem] border border-[#C9A84C]/25 bg-gradient-to-br from-white via-[#fdfbf4] to-white px-8 py-10 shadow-[0_30px_80px_-30px_rgba(13,27,42,0.18)] dark:border-[#C9A84C]/20 dark:from-[#0f0f18] dark:via-[#121220] dark:to-[#0f0f18] dark:shadow-black/40 sm:px-10 md:px-14 md:py-14">
              {/* Top hair-line gold accent */}
              <span
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/80 to-transparent"
                aria-hidden
              />
              {/* Soft gold glows */}
              <span
                className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.18),transparent_70%)]"
                aria-hidden
              />
              <span
                className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.12),transparent_70%)]"
                aria-hidden
              />

              {/* Gold corner ornaments */}
              <span
                className="pointer-events-none absolute left-5 top-5 h-6 w-6 rounded-tl-lg border-l border-t border-[#C9A84C]/50"
                aria-hidden
              />
              <span
                className="pointer-events-none absolute right-5 top-5 h-6 w-6 rounded-tr-lg border-r border-t border-[#C9A84C]/50"
                aria-hidden
              />
              <span
                className="pointer-events-none absolute bottom-5 left-5 h-6 w-6 rounded-bl-lg border-b border-l border-[#C9A84C]/50"
                aria-hidden
              />
              <span
                className="pointer-events-none absolute bottom-5 right-5 h-6 w-6 rounded-br-lg border-b border-r border-[#C9A84C]/50"
                aria-hidden
              />

              <div className="relative">
                {/* Kicker — centered */}
                <div className="mb-4 flex items-center justify-center gap-3">
                  <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#C9A84C]" />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#C9A84C]">
                    The experience
                  </p>
                  <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#C9A84C]" />
                </div>

                <h2 className="title-with-gold-glow font-[var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-transparent drop-shadow-sm bg-gradient-to-r from-slate-900 via-[#C9A84C] to-slate-900 bg-clip-text dark:from-white dark:via-[#C9A84C] dark:to-white animate-text-shimmer text-center">
                  Crafted for discerning travelers
                </h2>

                {/* Ornate divider — centered */}
                <div className="mt-6 flex items-center justify-center gap-3" aria-hidden>
                  <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9A84C]" />
                  <span className="h-1.5 w-1.5 rotate-45 bg-[#C9A84C]" />
                  <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9A84C]" />
                </div>

                {/* Body copy with crimson drop cap on first paragraph */}
                <div className="mt-8 space-y-6 text-base leading-[1.85] text-slate-600 dark:text-slate-400 md:text-lg">
                  {dest.fullDescription.split(/\n\n+/).map((para, i) => (
                    <p key={i} className={i === 0 ? "luxury-dropcap" : undefined}>
                      {para}
                    </p>
                  ))}
                </div>

                {/* Luxury CTAs */}
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <Link href="/contact" className="luxury-cta luxury-cta--primary">
                    <span className="luxury-cta__label">Plan this destination</span>
                    <ArrowRight
                      className="luxury-cta__icon"
                      strokeWidth={2.25}
                      aria-hidden
                    />
                  </Link>
                  <Link href="/tours" className="luxury-cta luxury-cta--ghost">
                    <span className="luxury-cta__label">Browse tours</span>
                    <ArrowRight
                      className="luxury-cta__icon"
                      strokeWidth={2.25}
                      aria-hidden
                    />
                  </Link>
                </div>
              </div>
            </article>
          </div>

          <aside
            id="highlights"
            className="lg:col-span-5 lg:sticky lg:top-36 lg:self-start"
          >
            <div className="rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-[0_24px_80px_-24px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[#101018] dark:shadow-black/40 md:p-10">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#C9A84C]">
                Signature moments
              </p>
              <h3 className="title-with-gold-glow title-with-gold-glow--left font-[var(--font-playfair)] text-2xl font-semibold text-slate-900 dark:text-white">
                Highlights
              </h3>
              <ul className="mt-8 space-y-4">
                {dest.highlights.map((item, i) => (
                  <li
                    key={item}
                    className="group flex gap-4 rounded-2xl border border-slate-100 bg-slate-50/80 p-4 transition hover:border-[#C9A84C]/35 hover:bg-white dark:border-white/5 dark:bg-white/[0.03] dark:hover:border-[#C9A84C]/25 dark:hover:bg-white/[0.06]"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0D1B2A] font-[var(--font-playfair)] text-sm font-semibold text-[#C9A84C] dark:bg-[#C9A84C]/15 dark:text-[#C9A84C]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="pt-1.5 text-sm font-medium leading-snug text-slate-800 dark:text-slate-200 md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-2xl border border-[#C9A84C]/25 bg-gradient-to-br from-[#C9A84C]/[0.08] to-transparent p-6 dark:from-[#C9A84C]/10">
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  <span className="font-semibold text-slate-900 dark:text-white">Adam City Tours</span>{" "}
                  combines private transport, vetted riads, and expert local guides for every{" "}
                  {dest.name} itinerary.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ── Climate ── */}
      <section
        id="climate"
        className="border-y border-slate-200/80 bg-[#FAF9F6] py-20 dark:border-white/10 dark:bg-[#0c0c14] lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-12 flex flex-col items-center text-center">
            <h2 className="title-with-gold-glow font-[var(--font-playfair)] text-4xl lg:text-5xl font-bold text-transparent drop-shadow-sm bg-gradient-to-r from-slate-900 via-[#C9A84C] to-slate-900 bg-clip-text dark:from-white dark:via-[#C9A84C] dark:to-white animate-text-shimmer">
              When to visit {dest.name}
            </h2>
          </div>
          <DestinationClimateCard
            destinationName={dest.name}
            weather={weather}
            climate={dest.climate}
          />
        </div>
      </section>

      {/* ── Journey timeline (only when destination has milestones) ── */}
      {hasTimeline && (
        <section
          id="journey"
          className="border-t border-slate-200/80 bg-white py-12 dark:border-white/10 dark:bg-[#0a0a12]"
        >
          <DestinationTimeline timeline={dest.timeline!} />
        </section>
      )}

      {/* ── More destinations ── */}
      <section className="border-t border-slate-200/80 bg-white py-20 dark:border-white/10 dark:bg-[#0a0a12] lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-10 flex flex-col items-center text-center">
            <h2 className="title-with-gold-glow font-[var(--font-playfair)] text-4xl lg:text-5xl font-bold text-transparent drop-shadow-sm bg-gradient-to-r from-slate-900 via-[#C9A84C] to-slate-900 bg-clip-text dark:from-white dark:via-[#C9A84C] dark:to-white animate-text-shimmer">
              More destinations
            </h2>
          </div>
          {/* "Back to home" — sits on the left, just above the destination grid */}
          <div className="mb-6 flex">
            <Link
              href="/"
              className="text-xs font-bold uppercase tracking-[0.2em] text-[#0F3568] transition hover:text-[#C9A84C] dark:text-[#C9A84C] dark:hover:text-white"
            >
              ← Back to home
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {others.map((other) => (
              <Link
                key={other.slug}
                href={`/destinations/${other.slug}`}
                className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-slate-200/80 shadow-md dark:border-white/10 dark:shadow-black/50"
              >
                <Image
                  src={other.image}
                  alt={other.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  
                  {...(!other.image.startsWith("/") ? { quality: 100 as const } : {})}
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-95 transition group-hover:opacity-90" />
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <span className="font-[var(--font-playfair)] text-lg font-semibold text-white md:text-xl">
                    {other.name}
                  </span>
                  <span className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-[#C9A84C] opacity-0 transition group-hover:opacity-100">
                    View
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
