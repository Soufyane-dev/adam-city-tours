"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PremiumPromoCard() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-[#FAF9F6] dark:bg-[var(--background)] flex items-center justify-center overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-[1240px] bg-white shadow-[0_30px_100px_rgba(0,0,0,0.08)] flex flex-col group"
      >
        {/* Top Part - Cinematic Image */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-[#0A192F]">
          <Image
            src="/images/promo-card.png"
            alt="Moroccan Autumn Travel Experience"
            fill
            className="object-cover transform transition-transform duration-[2s] ease-[0.25,1,0.5,1] group-hover:scale-[1.03]"
            sizes="(max-width: 1200px) 100vw, 1240px"
            priority
          />
          {/* Subtle cinematic gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 mix-blend-overlay pointer-events-none" />
          <div className="absolute inset-0 bg-[#0A192F]/5 pointer-events-none" />
          
          <div className="absolute top-6 left-6 md:top-8 md:left-8">
            <span className="text-white text-[9px] md:text-[10px] font-sans font-semibold tracking-[0.4em] uppercase">
              Vogue Travel / Morocco
            </span>
          </div>

          <div className="absolute top-6 right-6 md:top-8 md:right-8">
             <div className="flex gap-2">
                <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full"></span>
                <span className="w-1.5 h-1.5 bg-white/50 rounded-full"></span>
             </div>
          </div>
        </div>

        {/* Bottom Part - Minimal Off-White Editorial Section */}
        <div className="bg-[#FCFCFA] p-10 md:p-16 lg:p-24 flex flex-col items-center text-center relative border-b-[6px] border-[#0A192F]">
          
          <h2 className="title-with-gold-glow text-[#0A192F] font-[var(--font-playfair)] font-medium text-3xl md:text-5xl lg:text-6xl mb-6 tracking-tight leading-[1.1]">
            Golden Autumn 
            <span className="block italic text-[#8B4513] mt-2">Escapes</span>
          </h2>
          
          <p className="text-[#4E565F] text-sm md:text-base font-sans tracking-[0.03em] leading-[1.8] max-w-[600px] mx-auto mb-12 font-light">
            <span className="text-[#C9A84C] font-medium tracking-[0.2em] uppercase text-xs mb-4 block">Sept • Oct • Nov</span>
            Experience the legendary Moroccan golden natural light, mild temperatures, and vibrant local cultural festivals. 
            The supreme time to discover Fès, Chefchaouen, and the deep Sahara dunes in complete serenity, away from the crowds.
          </p>

          <button className="text-[#0A192F] border border-[#0A192F]/15 hover:border-[#0A192F] hover:bg-[#0A192F] hover:text-white px-10 py-4 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] transition-all duration-500 ease-[0.22,1,0.36,1]">
            Explore Curated Journeys
          </button>
        </div>
      </motion.div>
    </section>
  );
}
