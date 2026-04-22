"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const galleryData = [
  {
    id: "marrakech",
    title: "MARRAKECH",
    subtitle: "Imperial City - Morocco",
    imageUrl: "/images/dest-marrakech-modern.png",
  },
  {
    id: "merzouga",
    title: "MERZOUGA",
    subtitle: "Sahara Desert - Morocco",
    imageUrl: "/images/hero-desert.png",
  },
  {
    id: "fes",
    title: "FES",
    subtitle: "Ancient Medina - Morocco",
    imageUrl: "/images/dest-fes.png",
  },
  {
    id: "chefchaouen",
    title: "CHEFCHAOUEN",
    subtitle: "Blue Pearl - Morocco",
    imageUrl: "/images/dest-chefchaouen.png",
  },
  {
    id: "essaouira",
    title: "ESSAOUIRA",
    subtitle: "Wind City - Morocco",
    imageUrl: "/images/dest-essaouira.png",
  },
];

export default function InteractiveGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % galleryData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + galleryData.length) % galleryData.length);
  };

  const activeDestination = galleryData[activeIndex];

  return (
    <section id="gallery" className="relative w-full min-h-[90vh] flex items-center bg-[#0A0A0F] overflow-hidden py-24">
      {/* Dynamic Blurred Background */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeDestination.id}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={activeDestination.imageUrl}
              alt="background"
              fill
              className="object-cover blur-[60px] opacity-40 brightness-[0.3]"
              priority
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-end lg:items-center justify-between gap-12 lg:gap-8 h-full">
        
        {/* LEFT SIDE: Typography & Controls */}
        <div className="w-full lg:w-5/12 flex flex-col justify-end lg:justify-center pt-24 lg:pt-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDestination.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-[2px] bg-white" />
                <span className="text-white text-lg tracking-wider font-light">
                  {activeDestination.subtitle}
                </span>
              </div>
              
              <h2 className="title-with-gold-glow title-with-gold-glow--on-dark title-with-gold-glow--wide title-with-gold-glow--left font-[var(--font-bebas)] text-[5rem] sm:text-[7rem] lg:text-[8rem] xl:text-[9rem] leading-[0.85] text-white tracking-widest drop-shadow-2xl">
                {activeDestination.title}
              </h2>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="mt-16 flex items-center gap-8 w-full">
            <div className="flex gap-4">
              <button
                onClick={handlePrev}
                className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#FACC15] hover:text-[#FACC15] hover:bg-white/5 transition-all duration-300 backdrop-blur-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>
              <button
                onClick={handleNext}
                className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#FACC15] hover:text-[#FACC15] hover:bg-white/5 transition-all duration-300 backdrop-blur-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </div>

            <div className="flex-1 flex items-center gap-6">
              <div className="relative h-[2px] bg-white/20 w-full overflow-hidden">
                <motion.div 
                  className="absolute left-0 top-0 bottom-0 bg-[#FACC15]"
                  initial={false}
                  animate={{ 
                    width: `${((activeIndex + 1) / galleryData.length) * 100}%` 
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </div>
              <span className="text-white text-2xl font-[var(--font-bebas)] tracking-wider">
                {activeIndex + 1}
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Cards Carousel */}
        <div 
          className="w-full lg:w-7/12 relative h-[450px] sm:h-[550px] flex items-center overflow-hidden" 
          ref={containerRef}
        >
          {galleryData.map((item, idx) => {
            // Determine relative position to active index
            // To create an infinite loop feel, or a continuous queue
            let position = idx - activeIndex;

            // Handle wrap-around math if it's less than actively possible to show something nice on the left
            if (position < -2) position += galleryData.length;
            if (position > galleryData.length - 2) position -= galleryData.length;

            const isActive = position === 0;
            const isVisible = position >= -1 && position <= 3; // Keep memory low

            if (!isVisible) return null;

            // Compute styling and parallax transforms based on distance from 0
            const xOffset = position * 320; // Each card is ~280px + 40px gap
            const scale = isActive ? 1 : 0.85;
            const zIndex = isActive ? 10 : 5 - Math.abs(position);
            const opacity = isActive ? 1 : 0.6 - (Math.abs(position) * 0.2);

            // Parallax image movement: inner image offsets depending on its position relative to center
            const parallaxX = position * -50; 

            return (
              <motion.div
                key={item.id}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-[280px] sm:w-[320px] h-[400px] sm:h-[480px] rounded-[24px] overflow-hidden cursor-pointer shadow-2xl"
                initial={false}
                animate={{
                  x: xOffset,
                  scale: scale,
                  zIndex: zIndex,
                  opacity: opacity,
                }}
                transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                onClick={() => setActiveIndex(idx)}
              >
                <div className="relative w-full h-full overflow-hidden">
                  {/* Inner parllax image */}
                  <motion.div
                    className="absolute top-0 bottom-0 -left-10 -right-10" // Extra width for parallax room
                    initial={false}
                    animate={{ x: parallaxX }}
                    transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                  >
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  
                  {/* Card Gradients & Text */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                  
                  <div className={`absolute left-0 right-0 bottom-0 p-8 transition-opacity duration-500 delay-100 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="w-6 h-[2px] bg-[#FACC15] mb-3" />
                    <span className="text-white/80 text-xs tracking-widest uppercase block mb-1">
                      {item.subtitle}
                    </span>
                    <h3 className="text-white text-2xl font-bold font-[var(--font-playfair)] leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
