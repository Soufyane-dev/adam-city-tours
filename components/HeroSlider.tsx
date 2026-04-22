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
      <div className="relative h-screen min-h-[28rem] w-full shrink-0 overflow-hidden bg-black">
        <HeroBackground />

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 pb-12 text-center">
          <h1
            className="title-with-gold-glow title-with-gold-glow--on-dark title-with-gold-glow--wide font-[var(--font-inter)] mb-3 max-w-4xl text-xl font-black uppercase leading-tight tracking-[0.15em] text-white sm:text-2xl md:text-3xl lg:text-[2.5rem]"
            style={{ textShadow: "0 2px 16px rgba(0,0,0,0.7)" }}
          >
            DISCOVER THE SOUL OF MOROCCO
          </h1>

          <p
            className="max-w-xl text-center text-sm font-medium italic tracking-wider text-white/90 md:text-base"
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.8)" }}
          >
            Where every journey becomes a story
          </p>
        </div>
      </div>

      {/* Stats directement sous la vidéo */}
      <TrustStats />
    </section>
  );
}
