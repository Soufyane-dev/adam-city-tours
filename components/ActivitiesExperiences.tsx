"use client";

import Image from "next/image";
import { Bath, Landmark, UtensilsCrossed, Compass, Sun, Target, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

type Activity = {
  name: string;
  description: string;
  image: string;
  icon: LucideIcon;
  /** Fine-tune focal point for tall or detail-heavy photos */
  imageClassName?: string;
};

const activities: Activity[] = [
  {
    name: "Culture & History",
    description:
      "Medina souks alive with woven baskets, pulses and spices, olives and herbs—meet the vendors who keep Morocco’s oldest market traditions.",
    image: "/images/culture-moroccan-souk.png",
    icon: Landmark,
    imageClassName: "object-cover object-[center_45%]",
  },
  {
    name: "Local Gastronomy",
    description:
      "Seven-vegetable couscous, tender braised meat, and chickpeas in hand-painted tagines—family-style dining and true Moroccan hospitality.",
    image: "/images/food-couscous-tagine.png",
    icon: UtensilsCrossed,
    imageClassName: "object-cover object-[center_42%]",
  },
  {
    name: "Sports & Adventure",
    description:
      "Golden-hour dunes and wide-open Sahara—quad convoys, camel treks, 4×4 escapes, and starlit evenings after the engines quiet down.",
    image: "/images/activity-sports-quad-desert.png",
    icon: Compass,
    imageClassName: "object-cover object-[center_42%]",
  },
  {
    name: "Golf & Atlas Views",
    description:
      "Championship fairways near Marrakech—palm-lined greens, bunkers, and snow-capped High Atlas peaks between every relaxed round.",
    image: "/images/golf-fairway-vertical.png",
    icon: Target,
    imageClassName: "object-cover object-[center_42%]",
  },
  {
    name: "Beaches / Relaxation",
    description:
      "Cliffside lounges above the Atlantic—kilim rugs, sea breeze, and slow afternoons where the waves meet the rocks.",
    image: "/images/activity-beaches-cliff-lounge.png",
    icon: Sun,
    imageClassName: "object-cover object-[center_45%]",
  },
  {
    name: "Hammam & Spa Rituals",
    description:
      "Zellige-lined steam rooms, heated marble slabs, and rose-scented rituals—slow down in an authentic Moroccan hammam or palace spa.",
    image: "/images/activity-hammam-wellness.png",
    icon: Bath,
    imageClassName: "object-cover object-[center_38%]",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function ActivitiesExperiences() {
  return (
    <section className="relative overflow-hidden bg-[#FAF9F6] py-20 dark:bg-[var(--background)] px-6 lg:px-12">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-20"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(201,168,76,0.12), transparent), radial-gradient(ellipse 60% 40% at 100% 100%, rgba(46,121,199,0.06), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px]">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="title-with-gold-glow mb-4 bg-gradient-to-r from-slate-900 via-[#C9A84C] to-slate-900 bg-clip-text font-[var(--font-playfair)] text-4xl font-bold text-transparent drop-shadow-sm dark:from-white dark:via-[#C9A84C] dark:to-white lg:text-5xl animate-text-shimmer">
            Activities & Experiences
          </h2>
          <p className="leading-relaxed text-slate-600 dark:text-slate-400">
            Immerse yourself in authentic Moroccan culture, thrilling adventures, and serene landscapes
            perfectly tailored to your desires.
          </p>
        </div>

        <motion.ul
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {activities.map((activity) => {
            const Icon = activity.icon;
            const imgClass = activity.imageClassName ?? "object-cover object-center";
            return (
              <motion.li key={activity.name} variants={item} className="h-full min-h-0 list-none">
                <article
                  className="group relative h-[min(560px,82vw)] overflow-hidden rounded-[1.75rem] border border-slate-200/60 bg-slate-900 shadow-[0_24px_60px_-28px_rgba(15,23,42,0.45)] transition-all duration-500 dark:border-white/10 dark:shadow-[0_28px_70px_-28px_rgba(0,0,0,0.75)] sm:h-[520px] sm:min-h-[520px] hover:-translate-y-1 hover:border-[#C9A84C]/40 hover:shadow-[0_32px_60px_-24px_rgba(201,168,76,0.2)]"
                >
                  <Image
                    src={activity.image}
                    alt={activity.name}
                    fill
                    className={`${imgClass} transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={activity.name === "Local Gastronomy"}
                  />
                  {/* Light upper area keeps photos crisp; bottom darkens only for text contrast */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(2,4,8,0.92) 0%, rgba(2,4,8,0.55) 24%, rgba(2,4,8,0.14) 42%, transparent 58%)",
                    }}
                    aria-hidden
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-t from-black/85 to-transparent"
                    aria-hidden
                  />
                  <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/20 text-[#E8D5A8] shadow-lg backdrop-blur-md transition-transform duration-300 group-hover:scale-105 group-hover:border-[#C9A84C]/55">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                    <h3 className="mb-2 font-[var(--font-playfair)] text-xl font-semibold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] md:text-2xl">
                      {activity.name}
                    </h3>
                    <p className="max-w-prose text-sm leading-relaxed text-white/95 drop-shadow-[0_1px_8px_rgba(0,0,0,0.75)] md:text-[0.9375rem]">
                      {activity.description}
                    </p>
                  </div>
                </article>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
