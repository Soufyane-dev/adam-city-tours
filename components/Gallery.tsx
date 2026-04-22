"use client";

import Image from "next/image";
import Link from "next/link";

const galleryPreviewImages = [
  { src: "/images/dest-chefchaouen.png", alt: "Chefchaouen Blue City", span: "col-span-2 row-span-2" },
  { src: "/images/dest-marrakech-modern.png", alt: "Marrakech Heritage", span: "col-span-1 row-span-1" },
  { src: "/images/tour-desert-camp.png", alt: "Desert Camp at Night", span: "col-span-1 row-span-1" },
  { src: "/images/dest-merzouga.png", alt: "Merzouga Desert Dunes", span: "col-span-1 row-span-2" },
  { src: "/images/dest-essaouira.png", alt: "Essaouira Coast", span: "col-span-1 row-span-1" },
  { src: "/images/tour-atlas.png", alt: "Travelers on Saharan dunes with local guide", span: "col-span-1 row-span-1" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 lg:px-12 bg-[#0D0D1A] relative overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/30 to-transparent" />
      <div className="absolute -top-60 -right-60 w-[600px] h-[600px] rounded-full bg-[#3B82F6]/[0.04] blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-[#6366F1]/[0.04] blur-3xl pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#3B82F6] text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">
            Visual Journey
          </span>
          <h2 className="title-with-gold-glow title-with-gold-glow--on-dark font-[var(--font-playfair)] text-4xl lg:text-5xl font-bold text-white mb-4 italic">
            Moments in Morocco
          </h2>
          <p className="text-white/40 max-w-lg mx-auto leading-relaxed">
            Get inspired by the vibrant colors, majestic landscapes, and timeless
            architecture. Your adventure awaits.
          </p>
        </div>

        {/* Bento Grid Preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {galleryPreviewImages.map((img, idx) => (
            <Link
              href="/gallery"
              key={idx}
              className={`relative overflow-hidden rounded-2xl md:rounded-3xl group shadow-lg shadow-black/30 border border-white/[0.06] block transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#3B82F6]/10 hover:border-white/10 ${img.span}`}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700 z-10" />

              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Hover caption layer */}
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 translate-y-4 group-hover:translate-y-0">
                <span className="text-white font-[var(--font-playfair)] text-base md:text-lg font-medium tracking-wide">
                  {img.alt}
                </span>
              </div>

              {/* Pulsing "explore" indicator on hover */}
              <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-14">
          <Link
            href="/gallery"
            id="gallery-view-all-btn"
            className="group inline-flex items-center gap-3 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#3B82F6]/40 text-white font-semibold tracking-wider uppercase px-10 py-4 rounded-full transition-all duration-500 hover:shadow-lg hover:shadow-[#3B82F6]/10 hover:-translate-y-0.5"
          >
            <span className="text-sm">View Full Gallery</span>
            <svg
              className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
