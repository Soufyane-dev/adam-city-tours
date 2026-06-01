"use client";

import { useEffect, useState } from "react";

/** Full-bleed hero photos — simple crossfade only (no motion library). */
const SLIDES = [
  "/images/hero-home-desert-camp.png",
  "/images/hero-home-chefchaouen.png",
  "/images/hero-home-riad.png",
  "/images/hero-home-rabat.png",
] as const;

const DISPLAY_MS = 3600;
const FADE_MS = 650;

export default function HeroBackground() {
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReducedMotion(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (reducedMotion || SLIDES.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, DISPLAY_MS);
    return () => window.clearInterval(id);
  }, [reducedMotion]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0a1628]" aria-hidden>
      {/* Base: photography (native <img> avoids rare Next/Image + mobile layout quirk = “empty” blue) */}
      <div className="absolute inset-0 z-0">
        {SLIDES.map((src, i) => {
          const active = !reducedMotion ? i === index : i === 0;
          return (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity ease-in-out motion-reduce:transition-none ${
                active ? "z-[2]" : "z-[1]"
              }`}
              style={{
                opacity: active ? 1 : 0,
                transitionDuration: `${FADE_MS}ms`,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt=""
                fetchPriority={i === 0 ? "high" : "low"}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-center"
                style={{ filter: "contrast(1.08) saturate(1.18) brightness(1.04)" }}
              />
            </div>
          );
        })}
      </div>

      {/* Readability overlays — kept light to preserve photo quality */}
      <div
        className="pointer-events-none absolute inset-0 z-[3] bg-gradient-to-br from-[#071f3d]/20 via-[#0f3568]/12 to-[#082445]/20"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[4] opacity-70 bg-[radial-gradient(ellipse_120%_80%_at_50%_100%,rgba(201,168,76,0.10),transparent_50%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[4] bg-gradient-to-t from-black/35 via-transparent to-black/15"
        aria-hidden
      />
    </div>
  );
}
