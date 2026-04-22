"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import type { TimelineEvent } from "@/lib/destinations";

interface Props {
  timeline: TimelineEvent[];
}

export default function DestinationTimeline({ timeline }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="relative w-full max-w-6xl mx-auto py-20 px-6 lg:px-12" ref={containerRef}>
      <div className="mb-20 flex flex-col items-center text-center">
        <h2 className="title-with-gold-glow font-[var(--font-playfair)] text-4xl lg:text-5xl font-bold text-transparent drop-shadow-sm mb-4 bg-gradient-to-r from-slate-900 via-[#C9A84C] to-slate-900 bg-clip-text dark:from-white dark:via-[#C9A84C] dark:to-white animate-text-shimmer">
          A Walk Through Time
        </h2>
        <p className="max-w-md text-sm text-slate-600 dark:text-slate-400">
          Five moments that shape the city — from Almohad heritage to its modern luxury chapter.
        </p>
      </div>

      <div className="relative">
        {/* Background line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-white/10 -translate-x-1/2 rounded-full" />

        {/* Animated gold line — fills as you scroll */}
        <motion.div
          className="absolute left-6 md:left-1/2 top-0 w-1 bg-[#C9A84C] -translate-x-1/2 rounded-full shadow-[0_0_18px_rgba(201,168,76,0.45)] z-0"
          style={{ height: lineHeight, originY: 0 }}
        />

        <div className="space-y-24 md:space-y-32">
          {timeline.map((event, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={event.id}
                className="relative flex flex-col md:flex-row items-center w-full"
              >
                {/* Center node dot */}
                <div className="absolute left-6 md:left-1/2 w-5 h-5 rounded-full border-4 border-white bg-[#C9A84C] -translate-x-1/2 z-10 shadow-[0_0_12px_rgba(201,168,76,0.75)] dark:border-[#08080f]" />

                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50, y: 30 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`w-full md:w-1/2 pl-16 md:pl-0 ${
                    isEven ? "md:pr-16 md:text-right" : "md:pl-16 md:ml-auto"
                  }`}
                >
                  <div className="bg-white dark:bg-[#1A1A2E]/80 backdrop-blur-md rounded-3xl p-6 shadow-xl dark:shadow-black/50 border border-slate-100 dark:border-white/5 relative group hover:-translate-y-2 transition-transform duration-500">
                    <div className="relative w-full h-[250px] rounded-2xl overflow-hidden mb-6">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 45vw"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    </div>

                    <h3 className="title-with-gold-glow title-with-gold-glow--left font-[var(--font-playfair)] text-2xl font-bold text-slate-800 dark:text-white mb-3">
                      {event.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                      {event.description}
                    </p>

                    <div
                      className={`bg-[#C9A84C]/10 border border-[#C9A84C]/25 p-4 rounded-xl relative overflow-hidden ${
                        isEven ? "md:text-right" : "text-left"
                      }`}
                    >
                      <div className="absolute top-0 right-0 p-4 opacity-10">
                        <svg
                          className="w-12 h-12 text-[#C9A84C]"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm1 14h-2v-2h2zm0-4h-2a3 3 0 011.66-2.6A3.49 3.49 0 0013 7.5a1 1 0 00-2 0 1.5 1.5 0 01-3 0 3 3 0 016 0 5.48 5.48 0 01-2.4 4.5A1 1 0 0013 12z" />
                        </svg>
                      </div>
                      <span className="block text-xs font-bold text-[#C9A84C] uppercase tracking-widest mb-1">
                        Did you know?
                      </span>
                      <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                        {event.fact}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
