"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { Award, MapPin, Star, Users, type LucideIcon } from "lucide-react";

const easeOutCubic = (t: number) => 1 - (1 - t) ** 3;

const DURATION_MS = 2400;

function useCountUp(end: number, running: boolean, instant: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!running) return;
    if (instant) {
      setValue(end);
      return;
    }
    setValue(0);
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / DURATION_MS);
      setValue(Math.round(end * easeOutCubic(t)));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setValue(end);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [end, running, instant]);

  return value;
}

/** Shared wrapper for a single stat — the luxury animated frame. */
function StatFrame({
  Icon,
  running,
  delay,
  children,
  label,
}: {
  Icon: LucideIcon;
  running: boolean;
  delay: number;
  children: React.ReactNode;
  label: string;
}) {
  return (
    <div
      className={`luxury-stat-cell group flex min-w-0 flex-col items-center px-1 text-center transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        running
          ? "translate-y-0 opacity-100"
          : "translate-y-6 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Icon orb — floating, with gold glow and shine sweep on hover */}
      <div
        className="luxury-stat-orb relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-white to-[#FDF8EC] shadow-[0_10px_36px_-8px_rgba(26,43,72,0.22)] ring-1 ring-[#C9A84C]/30 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:ring-[#C9A84C]/70 group-hover:shadow-[0_18px_40px_-14px_rgba(201,168,76,0.5)] dark:from-white/[0.08] dark:to-white/[0.03] dark:shadow-black/50 dark:ring-white/10 sm:h-16 sm:w-16"
        style={{ animationDelay: `${delay}ms` }}
      >
        {/* Soft radial gold glow — visible on hover */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 40%, rgba(201,168,76,0.25) 0%, transparent 70%)",
          }}
        />
        {/* Editorial shine sweep */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
        >
          <span className="luxury-stat-shine absolute inset-y-0 -left-1/3 w-1/3" />
        </span>
        <Icon
          className="relative z-10 h-5 w-5 text-[#C9A84C] sm:h-6 sm:w-6"
          strokeWidth={1.35}
          aria-hidden
        />
      </div>

      {/* Number */}
      <p className="mt-4 min-h-[2rem] font-[var(--font-inter)] text-xl font-bold tabular-nums tracking-tight sm:mt-5 sm:min-h-[2.75rem] sm:text-4xl">
        <span
          className="bg-gradient-to-r from-[#0f172a] via-[#C9A84C] to-[#0f172a] bg-clip-text text-transparent dark:from-white dark:via-[#e8c547] dark:to-white"
          style={{
            backgroundSize: "200% auto",
            animation: "text-shimmer 5s linear infinite",
          }}
        >
          {children}
        </span>
      </p>

      {/* Label with gold underline that grows on reveal */}
      <div className="relative mt-2 flex flex-col items-center">
        <p className="max-w-full truncate font-[var(--font-inter)] text-[9px] font-medium uppercase tracking-[0.06em] text-[#7b8fa1] transition-colors duration-500 group-hover:text-[#1a2b48] dark:text-slate-400 dark:group-hover:text-white sm:text-[11px] sm:tracking-[0.32em]">
          {label}
        </p>
        <span
          aria-hidden
          className={`mt-2 block h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent transition-[width,opacity] duration-[900ms] ease-out ${
            running ? "w-10 opacity-70" : "w-0 opacity-0"
          }`}
          style={{ transitionDelay: `${delay + 400}ms` }}
        />
      </div>
    </div>
  );
}

function CountStatCell({
  end,
  suffix,
  label,
  Icon,
  running,
  instant,
  delay,
}: {
  end: number;
  suffix: string;
  label: string;
  Icon: LucideIcon;
  running: boolean;
  instant: boolean;
  delay: number;
}) {
  const n = useCountUp(end, running, instant);
  return (
    <StatFrame Icon={Icon} running={running} delay={delay} label={label}>
      {n.toLocaleString("en-US")}
      {suffix}
    </StatFrame>
  );
}

export default function AboutAnimatedCounters() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-10% 0px -5% 0px",
    amount: 0.2,
  });
  const reduced = useReducedMotion();
  const instant = reduced === true;

  return (
    <section
      ref={ref}
      aria-label="Mortours in numbers"
      className="relative overflow-hidden border-y border-slate-200/70 bg-[#FDFBF7] py-20 dark:border-white/[0.06] dark:bg-[#08080f] sm:py-24"
    >
      {/* Soft gold glow orbs in the corners for a luxe ambience */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#C9A84C]/[0.08] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#C9A84C]/[0.08] blur-3xl"
      />
      {/* Top and bottom gold hairlines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(201,168,76,0.35), transparent)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(201,168,76,0.35), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-12">
        <div className="mb-10 flex flex-col items-center text-center sm:mb-14">
          <span className="text-[10px] font-semibold uppercase tracking-[0.36em] text-[#2E79C7] sm:text-[11px]">
            Mortours in numbers
          </span>
          <div aria-hidden className="mt-4 flex items-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-[#2E79C7]" />
            <span className="h-1.5 w-1.5 rotate-45 bg-[#2E79C7]" />
            <span className="h-1 w-1 rounded-full bg-[#2E79C7]" />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-x-3 sm:gap-x-6 lg:gap-x-8">
          <CountStatCell
            end={4800}
            suffix="+"
            label="Travelers"
            Icon={Users}
            running={inView}
            instant={instant}
            delay={0}
          />
          <CountStatCell
            end={98}
            suffix="%"
            label="Satisfaction"
            Icon={Star}
            running={inView}
            instant={instant}
            delay={140}
          />
          <CountStatCell
            end={120}
            suffix="+"
            label="Destinations"
            Icon={MapPin}
            running={inView}
            instant={instant}
            delay={280}
          />
          <CountStatCell
            end={10}
            suffix="+"
            label="Years"
            Icon={Award}
            running={inView}
            instant={instant}
            delay={420}
          />
        </div>
      </div>
    </section>
  );
}
