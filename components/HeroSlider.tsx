import dynamic from "next/dynamic";
import HeroBackground from "@/components/HeroBackground";

const TrustStats = dynamic(() => import("@/components/TrustStats"), {
  loading: () => (
    <div
      className="relative z-20 w-full border-y border-white/55 bg-gradient-to-r from-[#FAF9F6]/90 via-white/[0.35] to-[#E8EEF5]/90 py-12 dark:border-white/10"
      aria-hidden
    />
  ),
});

export default function HeroSlider() {
  return (
    <section id="hero" className="flex flex-col gap-0 leading-none">
      <div className="relative min-h-[26rem] w-full shrink-0 overflow-hidden bg-black max-md:h-[90svh] md:h-screen md:min-h-[28rem]">
        <HeroBackground />

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
          <h1
            className="title-with-gold-glow title-with-gold-glow--on-dark title-with-gold-glow--wide font-[var(--font-inter)] mx-auto mb-6 max-w-4xl text-2xl font-black uppercase leading-tight tracking-[0.12em] text-white drop-shadow-[0_4px_28px_rgba(0,0,0,0.5)] sm:text-3xl sm:tracking-[0.13em] md:text-4xl md:tracking-[0.14em] lg:text-[2.85rem] xl:text-[3.05rem]"
          >
            DISCOVER THE SOUL OF MOROCCO
          </h1>

          <p
            className="mx-auto max-w-4xl px-2 text-center text-xl font-semibold italic leading-relaxed tracking-wide text-white sm:text-2xl md:text-3xl md:tracking-[0.045em] lg:text-[1.85rem] xl:text-[2.05rem] 2xl:text-[2.15rem]"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.65), 0 1px 2px rgba(0,0,0,0.9)" }}
          >
            Where every journey becomes a story
          </p>

          <a
            href="#top-rated-tours"
            className="pointer-events-auto mt-10 flex flex-col items-center gap-1 text-white/80 transition hover:text-white md:hidden"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.28em]">Scroll</span>
            <svg className="h-5 w-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>

      <TrustStats />
    </section>
  );
}
