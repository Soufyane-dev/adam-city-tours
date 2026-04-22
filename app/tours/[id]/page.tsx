import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getTourById, tours } from "@/lib/tours";

const ContactForm = dynamic(() => import("@/components/ContactForm"), {
  loading: () => (
    <div className="space-y-3 animate-pulse" aria-hidden>
      <div className="h-10 rounded-xl bg-[#F0E8DA]/80 dark:bg-white/10" />
      <div className="h-10 rounded-xl bg-[#F0E8DA]/80 dark:bg-white/10" />
      <div className="h-24 rounded-xl bg-[#F0E8DA]/80 dark:bg-white/10" />
    </div>
  ),
});

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const tour = getTourById(id);
  if (!tour) return { title: "Tour Not Found" };
  return {
    title: tour.title,
    description: tour.shortDescription,
    alternates: { canonical: `/tours/${id}` },
    openGraph: {
      title: tour.title,
      description: tour.shortDescription,
      url: `/tours/${id}`,
      type: "website",
      images: [{ url: tour.image, alt: tour.title }],
    },
  };
}

export function generateStaticParams() {
  return tours.map((t) => ({ id: t.id }));
}

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-[#FACC15]" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default async function TourDetailPage({ params }: Props) {
  const { id } = await params;
  const tour = getTourById(id);
  if (!tour) notFound();

  const difficultyColor: Record<string, string> = {
    Easy: "bg-green-100 text-green-700",
    Moderate: "bg-amber-100 text-amber-700",
    Challenging: "bg-red-100 text-red-700",
  };

  return (
    <>
      {/* HERO */}
      <div className="relative h-[88vh] min-h-[640px] max-h-[920px] flex items-end overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          priority
          className="object-cover object-center scale-[1.02] tour-hero-kenburns"
          sizes="100vw"
        />
        {/* Subtle gradient — clear image at top, soft darkening only near the title */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
        {/* Vignette for a cinematic, luxe finish */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 80% at 50% 30%, transparent 55%, rgba(0,0,0,0.35) 100%)",
          }}
        />
        {/* Editorial gold hairline at the bottom edge */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.55) 50%, transparent 100%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-24 lg:pb-28 w-full">
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-5 transition-colors duration-300"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Tours
          </Link>
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="bg-[#2E79C7] text-white text-xs font-semibold px-3 py-1 rounded-full tracking-wide">
              {tour.duration}
            </span>
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${difficultyColor[tour.difficulty] ?? "bg-gray-100 text-gray-700"}`}>
              {tour.difficulty}
            </span>
          </div>
          <h1 className="title-with-gold-glow title-with-gold-glow--on-dark title-with-gold-glow--wide font-[var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            {tour.title}
          </h1>
          <StarRating count={5} />
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <div>
              <h2 className="title-with-gold-glow font-[var(--font-playfair)] text-3xl lg:text-4xl font-bold text-transparent drop-shadow-sm bg-gradient-to-r from-slate-900 via-[#C9A84C] to-slate-900 bg-clip-text dark:from-white dark:via-[#C9A84C] dark:to-white animate-text-shimmer text-center mb-4">
                Tour Overview
              </h2>
              <p className="text-[#6B6B6B] dark:text-gray-400 leading-relaxed text-base">{tour.fullDescription}</p>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="title-with-gold-glow font-[var(--font-playfair)] text-2xl lg:text-3xl font-bold text-transparent drop-shadow-sm bg-gradient-to-r from-slate-900 via-[#C9A84C] to-slate-900 bg-clip-text dark:from-white dark:via-[#C9A84C] dark:to-white animate-text-shimmer text-center mb-5">
                Tour Highlights
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tour.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#2E79C7]/15 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-[#FACC15]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[#2C2C2C] dark:text-white text-sm font-medium">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Day-by-Day Program */}
            <div>
              <h2 className="title-with-gold-glow font-[var(--font-playfair)] text-2xl lg:text-3xl font-bold text-transparent drop-shadow-sm bg-gradient-to-r from-slate-900 via-[#C9A84C] to-slate-900 bg-clip-text dark:from-white dark:via-[#C9A84C] dark:to-white animate-text-shimmer text-center mb-6">
                Day-by-Day Itinerary
              </h2>
              <div className="space-y-4">
                {tour.program.map((day, idx) => (
                  <details
                    key={day.day}
                    className="group bg-white dark:bg-[#1A1A2E] border border-[#E8D5B7]/60 dark:border-white/10 rounded-2xl overflow-hidden shadow-sm"
                    open={idx === 0}
                  >
                    <summary className="flex items-center gap-4 p-5 cursor-pointer list-none hover:bg-[#FAF6F0] dark:hover:bg-white/5 transition-colors duration-300">
                      <div className="w-10 h-10 rounded-full bg-[#2E79C7] text-white flex items-center justify-center font-bold text-sm shrink-0">
                        {day.day}
                      </div>
                      <div className="flex-1">
                        <span className="text-xs text-[#FACC15] font-semibold tracking-wide uppercase">Day {day.day}</span>
                        <h3 className="text-[#2C2C2C] dark:text-white font-semibold">{day.title}</h3>
                      </div>
                      <svg className="w-5 h-5 text-[#9A9A9A] transition-transform duration-300 group-open:rotate-180 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-5 pb-5 pl-[4.5rem]">
                      <p className="text-[#6B6B6B] dark:text-gray-400 text-sm leading-relaxed border-l-2 border-[#E8D5B7] dark:border-[#FACC15]/50 pl-4">
                        {day.description}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>

            {/* Gallery */}
            {tour.gallery.length > 1 && (
              <div>
                <h2 className="title-with-gold-glow font-[var(--font-playfair)] text-2xl lg:text-3xl font-bold text-transparent drop-shadow-sm bg-gradient-to-r from-slate-900 via-[#C9A84C] to-slate-900 bg-clip-text dark:from-white dark:via-[#C9A84C] dark:to-white animate-text-shimmer text-center mb-5">
                  Photo Gallery
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {tour.gallery.map((img, i) => (
                    <div key={i} className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                      <Image
                        src={img}
                        alt={`${tour.title} gallery photo ${i + 1}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-2xl" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column — Booking Sidebar */}
          <div id="book" className="lg:col-span-1 scroll-mt-24">
            <div className="sticky top-24 space-y-6">
              {/* Price card */}
              <div className="bg-white dark:bg-white/5 border border-[#E8D5B7]/60 dark:border-white/10 rounded-3xl p-7 shadow-lg shadow-black/5 dark:shadow-black/50">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="luxury-price text-5xl">
                    <span className="luxury-price__currency">$</span>
                    {tour.price}
                  </span>
                  <span className="text-[#9A9A9A] text-sm">per person</span>
                </div>
                <StarRating count={5} />
                <div className="text-xs text-[#9A9A9A] mt-1 mb-6">Excellent · Verified reviews</div>

                <div className="space-y-3 mb-6">
                  {[
                    { label: "Duration", value: tour.duration },
                    { label: "Group size", value: `${tour.groupSize} people` },
                    { label: "Difficulty", value: tour.difficulty },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-center py-2 border-b border-[#F0E8DA] dark:border-white/10">
                      <span className="text-[#9A9A9A] text-sm">{item.label}</span>
                      <span className="text-[#2C2C2C] dark:text-white text-sm font-semibold">{item.value}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={`https://wa.me/212600000000?text=Hi%20Mortours!%20I%27d%20like%20to%20book%20the%20${encodeURIComponent(tour.title)}%20tour.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`tour-detail-book-${tour.id}`}
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold tracking-wider uppercase text-sm py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-green-400/30 hover:-translate-y-px"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Book via WhatsApp
                </a>

                <p className="text-xs text-[#9A9A9A] text-center mt-3">
                  Free cancellation up to 48h before
                </p>
              </div>

              {/* Quick contact */}
              <div className="bg-white dark:bg-white/5 border border-[#E8D5B7]/60 dark:border-white/10 rounded-3xl p-6 shadow-sm">
                <h3 className="title-with-gold-glow title-with-gold-glow--left font-[var(--font-playfair)] font-bold text-[#2C2C2C] dark:text-white text-lg mb-4">
                  Quick Enquiry
                </h3>
                <ContactForm compact />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
