"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  {
    src: "/images/user-photo-2.png",
    alt: "Luxury Sahara Camp Red Carpet Entrance",
    category: "SAHARA",
  },
  {
    src: "/images/dest-chefchaouen.png",
    alt: "Chefchaouen Blue City",
    category: "CHEFCHAOUEN",
  },
  {
    src: "/images/dest-marrakech-modern.png",
    alt: "Marrakech Heritage",
    category: "MARRAKECH",
  },
  {
    src: "/images/tour-marrakech.png",
    alt: "Marrakech Souks & Colors",
    category: "MARRAKECH",
  },
  {
    src: "/images/koutoubia-mosque.png",
    alt: "Koutoubia Mosque at Dusk",
    category: "MARRAKECH",
  },
  {
    src: "/images/dest-fes.png",
    alt: "Fès Medina & Heritage",
    category: "FES",
  },
  {
    src: "/images/dest-merzouga.png",
    alt: "Merzouga Desert Dunes",
    category: "SAHARA",
  },
  {
    src: "/images/tour-desert-camp.png",
    alt: "Desert Camp at Night",
    category: "SAHARA",
  },
  {
    src: "/images/hero-desert.png",
    alt: "Golden Sahara Sunset",
    category: "SAHARA",
  },
  {
    src: "/images/tour-atlas.png",
    alt: "Atlas Mountains Journey",
    category: "SAHARA",
  },
  {
    src: "/images/gallery-marrakech-jemaa.png",
    alt: "Jemaa el-Fnaa Square in Marrakech at sunset",
    category: "MARRAKECH",
  },
  {
    src: "/images/gallery-fes-arch.png",
    alt: "Traditional Moroccan architecture and mosaics in Fes",
    category: "FES",
  },
  {
    src: "/images/gallery-marrakech-souk-rugs.png",
    alt: "Colorful rug souk in Marrakech medina",
    category: "MARRAKECH",
  },
  {
    src: "/images/gallery-marrakech-lanterns.png",
    alt: "Handcrafted Moroccan lanterns in Marrakech market",
    category: "MARRAKECH",
  },
  {
    src: "/images/gallery-fes-tannery.png",
    alt: "Historic Chouara Tannery in Fes",
    category: "FES",
  },
  {
    src: "/images/fes-architecture-1.png",
    alt: "Intricate zellij courtyard architecture in Fes",
    category: "FES",
  },
  {
    src: "/images/fes-architecture-2.png",
    alt: "Traditional wooden gate and facade in Fes",
    category: "FES",
  },
  {
    src: "/images/fes-architecture-3.png",
    alt: "Historic arches and carved details in Fes",
    category: "FES",
  },
  {
    src: "/images/fes-architecture-4.png",
    alt: "Medina doorway with Moroccan craftsmanship in Fes",
    category: "FES",
  },
  {
    src: "/images/chefchaouen-view-1.png",
    alt: "Panoramic mountain view of Chefchaouen",
    category: "CHEFCHAOUEN",
  },
  {
    src: "/images/chefchaouen-cannon-1.png",
    alt: "Historic cannon viewpoint in Chefchaouen",
    category: "CHEFCHAOUEN",
  },
  {
    src: "/images/chefchaouen-tajines-market-1.png",
    alt: "Colorful tagines in Chefchaouen market",
    category: "CHEFCHAOUEN",
  },
  {
    src: "/images/gallery-sahara-camel-caravan.png",
    alt: "Camel caravan crossing the Sahara landscape",
    category: "SAHARA",
  },
  {
    src: "/images/gallery-sahara-camels-rainbow.png",
    alt: "Camels in the Sahara after rain with rainbow",
    category: "SAHARA",
  },
  {
    src: "/images/sahara-camp-drums-1.png",
    alt: "Sahara camp setup with traditional drums and carpets",
    category: "SAHARA",
  },
  {
    src: "/images/gallery-marrakech-atlas-view.png",
    alt: "Atlas mountain viewpoint from Marrakech region",
    category: "MARRAKECH",
  },
  {
    src: "/images/gallery-marrakech-group-atlas.png",
    alt: "Travelers with local guides in the Atlas mountains",
    category: "MARRAKECH",
  },
  {
    src: "/images/ourika-valley-1.png",
    alt: "Traditional riverside seating in Ourika Valley",
    category: "OURIKA VALLEY",
  },
  {
    src: "/images/ourika-valley-2.png",
    alt: "Village and mountain landscape in Ourika Valley",
    category: "OURIKA VALLEY",
  },
  {
    src: "/images/ourika-valley-3.png",
    alt: "Riverside cafes in Ourika Valley",
    category: "OURIKA VALLEY",
  },
  {
    src: "/images/ourika-valley-4.png",
    alt: "Waterfall scenery in Ourika Valley",
    category: "OURIKA VALLEY",
  },
  {
    src: "/images/ourika-valley-5.png",
    alt: "Sunlit river view in Ourika Valley",
    category: "OURIKA VALLEY",
  },
  {
    src: "/images/ait-benhadou-1.png",
    alt: "Panoramic view of Ait Benhadou kasbah",
    category: "AIT BENHADOU",
  },
  {
    src: "/images/ait-benhadou-2.png",
    alt: "Ancient clay architecture of Ait Benhadou",
    category: "AIT BENHADOU",
  },
  {
    src: "/images/ait-benhadou-3.png",
    alt: "Palm-lined kasbah walls in Ait Benhadou",
    category: "AIT BENHADOU",
  },
  {
    src: "/images/ait-benhadou-4.png",
    alt: "Historic earthen fortress in Ait Benhadou",
    category: "AIT BENHADOU",
  },
  {
    src: "/images/food-real-1-moroccan-grill.jpg",
    alt: "Authentic Moroccan grilled platter with traditional sides",
    category: "FOOD",
  },
  {
    src: "/images/food-real-2-moroccan-dining.jpg",
    alt: "Traditional Moroccan dining table with tagine dishes",
    category: "FOOD",
  },
  {
    src: "/images/food-real-3-marrakesh-dish.jpg",
    alt: "Marrakesh-style Moroccan dish with vegetables and spices",
    category: "FOOD",
  },
  {
    src: "/images/food-real-4-moroccan-pastries.jpg",
    alt: "Moroccan pastries prepared in a traditional communal oven",
    category: "FOOD",
  },
  {
    src: "/images/food-real-5-moroccan-mint-tea.jpg",
    alt: "Traditional Moroccan mint tea served in Moroccan glasses",
    category: "FOOD",
  },
  {
    src: "/images/food-tagine.png",
    alt: "Traditional Moroccan Tagine",
    category: "FOOD",
  },
  {
    src: "/images/food-tea.png",
    alt: "Moroccan Mint Tea Ceremony",
    category: "FOOD",
  },
];

const categories = [
  "ALL",
  "MARRAKECH",
  "AIT BENHADOU",
  "OURIKA VALLEY",
  "FES",
  "SAHARA",
  "CHEFCHAOUEN",
  "FOOD",
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const uniqueGalleryImages = galleryImages.filter(
    (img, index, self) => index === self.findIndex((item) => item.src === img.src)
  );

  const filteredImages =
    activeCategory === "ALL"
      ? uniqueGalleryImages
      : uniqueGalleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-[var(--background)] relative overflow-hidden transition-colors duration-500">
      {/* ── AMBIENT LIGHTING ── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[800px] h-[600px] rounded-full bg-[#3B82F6]/[0.05] blur-[120px] dark:bg-[#3B82F6]/[0.02]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-[#6366F1]/[0.05] blur-[120px] dark:bg-[#6366F1]/[0.02]" />
      </div>

      {/* ── HEADER NAVIGATION (BACK HOME) ── */}
      <section className="relative z-10 pt-12 pb-8 px-6 lg:px-12 flex items-center justify-between max-w-[1400px] mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2 text-slate-500 dark:text-white/50 hover:text-[#2E79C7] dark:hover:text-white transition-colors duration-300 group"
        >
          <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="text-sm font-bold tracking-widest uppercase">Back Home</span>
        </Link>
        <span className="text-slate-400 dark:text-white/20 text-xs font-bold tracking-[0.3em] uppercase">Visual Journey</span>
      </section>

      {/* ── FILTER TABS ── */}
      <section className="relative z-10 pt-12 pb-10 px-6 lg:px-12 border-b border-slate-200 dark:border-white/5 bg-white/30 dark:bg-black/10 backdrop-blur-sm mb-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5 md:gap-x-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="flex items-center gap-3 group transition-all duration-300"
              >
                <div
                  className={`w-5 h-5 border-[1.5px] border-slate-400 dark:border-white/30 flex items-center justify-center transition-all duration-300 group-hover:border-[#2E79C7] ${activeCategory === cat ? "bg-slate-800 border-slate-800 dark:bg-white dark:border-white" : "bg-transparent"}`}
                >
                  {activeCategory === cat && (
                    <div className="w-2.5 h-2.5 bg-white dark:bg-slate-800 rounded-[1px]" />
                  )}
                </div>
                <span
                  className={`text-[12px] md:text-[13px] font-bold tracking-[0.15em] md:tracking-[0.2em] uppercase transition-colors duration-300 ${activeCategory === cat ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-white/40 group-hover:text-slate-700 dark:group-hover:text-white/70"}`}
                >
                  {cat}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY GRID (uniform square tiles) ── */}
      <section className="relative z-10 pb-32 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {filteredImages.map((img, idx) => (
              <div
                key={`${img.src}-${idx}`}
                className="gallery-item relative aspect-square w-full min-h-0 overflow-hidden rounded-2xl md:rounded-3xl group shadow-xl shadow-black/5 dark:shadow-black/40 border border-slate-200 dark:border-white/[0.05] transition-all duration-700"
              >
                <div className="absolute inset-0 bg-black/[0.05] dark:bg-black/20 group-hover:bg-black/0 transition-colors duration-700 z-10" />

                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                  priority={idx < 4}
                  quality={80}
                />

                <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 translate-y-4 group-hover:translate-y-0">
                  <span className="text-white font-[var(--font-playfair)] text-xs md:text-sm font-medium tracking-wide line-clamp-2">
                    {img.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="py-32 text-center">
              <p className="text-slate-400 dark:text-white/30 text-lg italic tracking-wider">
                No images available in this collection yet
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
