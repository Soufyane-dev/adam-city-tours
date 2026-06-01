"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Star, MapPin, Headphones } from "lucide-react";

function CountUp({ end, suffix = "", duration = 2.5 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(ease * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { id: 1, value: 4800, suffix: "+", label: "Travelers", icon: Users },
  { id: 2, value: 98, suffix: "%", label: "Satisfaction", icon: Star },
  { id: 3, value: 120, suffix: "+", label: "Destinations", icon: MapPin },
  { id: 4, value: 24, suffix: "/7", label: "Support", icon: Headphones },
] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.11, delayChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 36,
    scale: 0.88,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      stiffness: 380,
      damping: 22,
      mass: 0.85,
    },
  },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.3, rotate: -25 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring" as const, stiffness: 400, damping: 15 },
  },
};

export default function TrustStats() {
  return (
    <section
      className="relative z-20 w-full min-w-0 max-w-none px-0 pt-0 pb-6 md:pb-8 mb-12 md:mb-20"
      aria-label="Key statistics"
    >
      {/* 100% 3ard sff l-page (ma max-width) */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }}
        className="relative isolate w-full min-w-0 max-w-none overflow-hidden rounded-none border-x-0 border-y border-white/55 bg-gradient-to-r from-[#FAF9F6]/90 via-white/[0.35] to-[#E8EEF5]/90 shadow-[0_8px_40px_rgba(0,0,0,0.08),0_1px_0_rgba(255,255,255,0.65)_inset] backdrop-blur-3xl [-webkit-backdrop-filter:blur(40px)] dark:border-white/10 dark:from-[#141C2C]/50 dark:via-white/[0.08] dark:to-[#0d1426]/50 dark:shadow-[0_12px_48px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.08)]"
      >
        {/* Reflet verre + halos doux */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-transparent opacity-70 dark:from-white/[0.07] dark:opacity-100" />
        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#0F3568]/15 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#C9A84C]/15 blur-[80px]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#C9A84C]/[0.08] via-transparent to-[#0F3568]/[0.06]" />

        <motion.div
          className="relative grid min-w-0 grid-cols-2 gap-px bg-gradient-to-b from-white/25 to-white/10 p-px md:grid-cols-4 dark:from-white/[0.08] dark:to-white/[0.03]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              className="group flex min-w-0 flex-col items-center justify-center border border-white/0 bg-white/[0.18] px-2 py-6 backdrop-blur-md transition-colors duration-500 [-webkit-backdrop-filter:blur(14px)] hover:bg-white/[0.28] sm:px-4 sm:py-7 md:px-6 md:py-8 dark:bg-white/[0.04] dark:backdrop-blur-md dark:hover:bg-white/[0.08]"
            >
              <motion.div
                variants={iconVariants}
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/50 bg-white/35 text-[#C9A84C] shadow-[0_4px_16px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-sm transition-all duration-500 [-webkit-backdrop-filter:blur(12px)] group-hover:border-[#C9A84C]/40 group-hover:bg-[#C9A84C]/90 group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#C9A84C]/30 dark:border-white/15 dark:bg-white/[0.08] dark:shadow-none md:mb-5 md:h-14 md:w-14"
              >
                <stat.icon
                  strokeWidth={1.75}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-5 shrink-0 md:size-6"
                />
              </motion.div>

              <div className="mb-1.5 flex items-baseline text-lg font-bold tracking-tight text-slate-800 dark:text-white sm:text-2xl md:text-3xl lg:text-[2.35rem] font-[var(--font-playfair)]">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>

              <div className="text-center text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-500 transition-colors duration-300 group-hover:text-[#C9A84C] dark:text-slate-400 sm:tracking-[0.18em] sm:text-[10px] md:text-xs">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
