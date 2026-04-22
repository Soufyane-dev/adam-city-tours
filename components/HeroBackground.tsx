"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/** Web-optimized hero (720p H.264, fast start). Regenerate: `npm run compress:hero` */
const VIDEO_SRC = "/videos/hero-morocco.mp4";
/** Only used when the user prefers reduced motion (no autoplay video). */
const STATIC_HERO = "/images/hero-desert.png";

/**
 * Home hero: **video only** — no `poster` image (that always flashes a still before playback).
 * Brief black underlay until the first decoded frame. Reduced-motion users get a static image.
 */
export default function HeroBackground() {
  const [motionOk, setMotionOk] = useState(true);

  useEffect(() => {
    setMotionOk(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  if (!motionOk) {
    return (
      <div className="absolute inset-0 bg-black">
        <Image
          src={STATIC_HERO}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden
        />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 bg-black">
      <video
        src={VIDEO_SRC}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        aria-hidden
        className="absolute inset-0 block h-full w-full object-cover object-center"
      />
    </div>
  );
}
