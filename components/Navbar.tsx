"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ThemeToggle from "@/components/ThemeToggle";
import NavSearch from "@/components/NavSearch";
import { destinations } from "@/lib/destinations";

/** A single tour suggestion inside a city flyout. */
type TourFlyoutItem = { href: string; label: string };

/** Grouping: a starting city + the individual tour suggestions. */
type TourCityGroup = {
  /** Stable id used for active-accordion state on mobile. */
  id: string;
  label: string;
  /** Shortcut link to the filtered tour list page ("See all from X"). */
  allHref: string;
  items: TourFlyoutItem[];
};

const tourCityGroups: TourCityGroup[] = [
  {
    id: "from-marrakech",
    label: "Tours from Marrakech",
    allHref: "/tours?from=marrakech",
    items: [
      { href: "/tours/coastal-essaouira", label: "2 Days — Coastal Essaouira" },
      { href: "/tours/marrakech-imperial", label: "3 Days — Imperial Marrakech" },
      { href: "/tours/sahara-desert-adventure", label: "4 Days — Sahara Desert Adventure" },
      { href: "/tours/authentic-morocco-desert-5-days", label: "5 Days — Authentic Morocco Desert" },
      { href: "/tours/atlas-mountains-trek", label: "5 Days — Atlas Mountains Trek" },
      { href: "/tours/sahara-desert-retreat-6-days", label: "6 Days — Sahara Desert Retreat" },
      { href: "/tours/beautiful-morocco-20-days", label: "20 Days — Beautiful Morocco" },
    ],
  },
  {
    id: "from-fes",
    label: "Tours from Fes",
    allHref: "/tours?from=fes",
    items: [
      { href: "/tours/fes-to-marrakech-desert-3-days", label: "3 Days — Fes to Marrakech Desert" },
    ],
  },
  {
    id: "from-casablanca",
    label: "Tours from Casablanca",
    allHref: "/tours?from=casablanca",
    items: [
      { href: "/tours/grand-morocco-tour", label: "10 Days — Grand Morocco Tour" },
      { href: "/tours/casa-to-casa-essaouira-10-days", label: "10 Days — Casa to Casa via Essaouira" },
    ],
  },
  {
    id: "from-chefchaouen",
    label: "Tours from Chefchaouen",
    allHref: "/tours?from=chefchaouen",
    items: [
      { href: "/tours/blue-city-chefchaouen", label: "3 Days — Blue City of Chefchaouen" },
    ],
  },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#destinations", label: "Trips" },
  { href: "/about", label: "Story" },
  { href: "/tours", label: "Tours" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  /** Which mobile accordion section is open: null | "Trips" | "Tours". */
  const [mobileSection, setMobileSection] = useState<"Trips" | "Tours" | null>(null);
  /** Which nested Tours-city accordion is open on mobile (id of the group). */
  const [mobileToursCity, setMobileToursCity] = useState<string | null>(null);
  const pathname = usePathname() ?? "/";

  /** Whether a given nav entry corresponds to the currently-active route. */
  const isActive = (link: { href: string; label: string }) => {
    if (link.label === "Home") return pathname === "/";
    if (link.label === "Trips") return pathname.startsWith("/destinations/");
    if (link.label === "Tours") return pathname === "/tours" || pathname.startsWith("/tours/");
    const path = link.href.split("#")[0].split("?")[0];
    if (!path || path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <header className="z-50">
      <nav
        className={`fixed top-0 left-[50%] -translate-x-[50%] w-[95%] max-w-7xl h-20 px-6 sm:px-10 flex items-center gap-4 rounded-[50px] border border-white/20 bg-white/60 dark:bg-black/40 backdrop-blur-xl shadow-2xl transition-all duration-500 pointer-events-auto z-[60]`}
      >
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="Mortours"
            width={44}
            height={44}
            className="rounded-full object-cover"
            priority
          />
          <span className="hidden sm:inline font-[var(--font-playfair)] text-xl font-bold tracking-wide">
            <span className="text-[#2C2C2C] dark:text-white">Mor</span>
            <span className="text-[#2E79C7] dark:text-[#FACC15]">tours</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex flex-1 justify-center items-center gap-5 xl:gap-8 min-w-0">
            {navLinks.map((link) => {
              const active = isActive(link);
              const activeText = "text-[#2E79C7] dark:text-[#FACC15]";
              const idleText =
                "text-[#2C2C2C] dark:text-white/80 group-hover:text-[#2E79C7] dark:group-hover:text-[#FACC15]";
              return (
              <li key={link.label} className="relative group">
                {link.label === "Trips" ? (
                  <>
                    <div className={`relative flex cursor-pointer items-center gap-1 text-[13px] font-bold uppercase tracking-widest transition-all duration-300 ${active ? activeText : idleText}`}>
                      {link.label}
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:rotate-180"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#2E79C7] dark:bg-[#FACC15] transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"}`} />
                    </div>
                    {/* Dropdown Menu */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 w-48 z-50">
                      <div className="bg-white dark:bg-[#1A1A2E] rounded-2xl shadow-xl dark:shadow-black/50 border border-neutral-100 dark:border-neutral-800 p-2 flex flex-col gap-1">
                        {destinations.map(dest => {
                          const destActive = pathname === `/destinations/${dest.slug}`;
                          return (
                          <Link
                            key={dest.slug}
                            href={`/destinations/${dest.slug}`}
                            className={`rounded-xl px-4 py-2.5 text-left text-sm font-semibold transition-colors ${
                              destActive
                                ? "bg-[#2E79C7]/10 text-[#2E79C7] dark:bg-[#FACC15]/10 dark:text-[#FACC15]"
                                : "text-slate-700 hover:bg-neutral-50 hover:text-[#2E79C7] dark:text-slate-200 dark:hover:bg-white/5 dark:hover:text-[#FACC15]"
                            }`}
                          >
                            {dest.name}
                          </Link>
                        );
                        })}
                      </div>
                    </div>
                  </>
                ) : link.label === "Tours" ? (
                  <>
                    <div className={`relative flex cursor-pointer items-center gap-1 text-[13px] font-bold uppercase tracking-widest transition-all duration-300 ${active ? activeText : idleText}`}>
                      {link.label}
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:rotate-180"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#2E79C7] dark:bg-[#FACC15] transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"}`} />
                    </div>
                    {/* Primary dropdown: "All tours" + per-city groups (each with a side-flyout on hover) */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 w-[17rem] z-50">
                      <div className="flex flex-col gap-1 rounded-2xl border border-neutral-100 bg-white p-2 shadow-xl dark:border-neutral-800 dark:bg-[#1A1A2E] dark:shadow-black/50">
                        <Link
                          href="/tours"
                          className={`mb-1 rounded-xl border-b border-neutral-200 px-4 py-2.5 pb-2.5 text-left text-sm font-semibold text-slate-700 transition-colors hover:bg-neutral-50 hover:text-[#2E79C7] dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/5 dark:hover:text-[#FACC15]`}
                        >
                          All tours
                        </Link>
                        {tourCityGroups.map((grp) => (
                          <div
                            key={grp.id}
                            className="group/city relative"
                          >
                            <Link
                              href={grp.allHref}
                              className="flex items-center justify-between rounded-xl px-4 py-2.5 text-left text-sm font-semibold text-slate-700 transition-colors hover:bg-neutral-50 hover:text-[#2E79C7] dark:text-slate-200 dark:hover:bg-white/5 dark:hover:text-[#FACC15]"
                            >
                              <span>{grp.label}</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="ml-3 shrink-0 text-[#C9A84C]"
                                aria-hidden
                              >
                                <polyline points="9 18 15 12 9 6" />
                              </svg>
                            </Link>
                            {/* Side flyout: opens to the right on hover */}
                            <div className="absolute left-full top-0 -ml-1 pl-3 opacity-0 pointer-events-none group-hover/city:opacity-100 group-hover/city:pointer-events-auto transition-all duration-300 w-[min(90vw,19rem)]">
                              <div className="flex flex-col gap-1 rounded-2xl border border-neutral-100 bg-white p-2 shadow-xl dark:border-neutral-800 dark:bg-[#1A1A2E] dark:shadow-black/50">
                                <span className="px-4 pb-2 pt-1 text-[10px] font-bold uppercase tracking-[0.24em] text-[#C9A84C]">
                                  {grp.label.replace(/^Tours /, "")}
                                </span>
                                {grp.items.map((item) => {
                                  const itemActive = pathname === item.href;
                                  return (
                                    <Link
                                      key={item.href}
                                      href={item.href}
                                      className={`rounded-xl px-4 py-2.5 text-left text-sm font-medium transition-colors ${
                                        itemActive
                                          ? "bg-[#2E79C7]/10 text-[#2E79C7] dark:bg-[#FACC15]/10 dark:text-[#FACC15]"
                                          : "text-slate-700 hover:bg-neutral-50 hover:text-[#2E79C7] dark:text-slate-200 dark:hover:bg-white/5 dark:hover:text-[#FACC15]"
                                      }`}
                                    >
                                      {item.label}
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative text-[13px] font-bold uppercase tracking-widest transition-all duration-300 ${
                      active
                        ? "text-[#2E79C7] dark:text-[#FACC15]"
                        : "text-[#2C2C2C] hover:text-[#2E79C7] dark:text-white/80 dark:hover:text-[#FACC15]"
                    }`}
                  >
                    {link.label}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#2E79C7] dark:bg-[#FACC15] transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"}`} />
                  </Link>
                )}
              </li>
              );
            })}
        </ul>

        {/* Desktop CTA / Toggle */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-4 shrink-0">
          <ThemeToggle />
          <LanguageSwitcher scrolled={true} />
          <NavSearch />
        </div>

        {/* Mobile: search + hamburger */}
        <div className="lg:hidden ml-auto flex items-center gap-2">
          <NavSearch />
          <button
            id="mobile-menu-btn"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 p-2 text-[#2C2C2C] dark:text-white"
          >
          <span
            className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>


      {/* Mobile Menu */}
      <div
        className={`fixed top-[90px] left-[50%] -translate-x-[50%] w-[95%] max-w-7xl lg:hidden transition-all duration-400 overflow-hidden rounded-[2.5rem] bg-white/95 dark:bg-[#1A1A2E]/95 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-2xl z-[60] ${
          menuOpen ? "max-h-[calc(100vh-110px)] opacity-100 py-8 px-8 pointer-events-auto" : "max-h-0 opacity-0 py-0 px-8 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col px-6 gap-4 max-h-[calc(100vh-160px)] overflow-y-auto overscroll-contain w-full pb-4">
          {navLinks.map((link) => {
            const active = isActive(link);
            return (
            <li key={link.label}>
              {link.label === "Trips" ? (
                <div className="py-1">
                  <button
                    type="button"
                    onClick={() =>
                      setMobileSection((s) => (s === "Trips" ? null : "Trips"))
                    }
                    aria-expanded={mobileSection === "Trips"}
                    aria-controls="mobile-trips-panel"
                    className={`flex w-full items-center justify-between py-2 text-sm font-medium uppercase tracking-wide transition-colors ${
                      active
                        ? "text-[#2E79C7] dark:text-[#FACC15]"
                        : "text-[#2C2C2C] dark:text-white"
                    }`}
                  >
                    <span>{link.label}</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-transform duration-300 ${
                        mobileSection === "Trips" ? "rotate-180" : ""
                      }`}
                      aria-hidden
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  <div
                    id="mobile-trips-panel"
                    className={`grid overflow-hidden transition-all duration-300 ${
                      mobileSection === "Trips"
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0">
                      <div className="mt-2 flex flex-col gap-2 border-l-2 border-[#2E79C7]/20 pl-4">
                        {destinations.map((dest) => {
                          const destActive =
                            pathname === `/destinations/${dest.slug}`;
                          return (
                            <Link
                              key={dest.slug}
                              href={`/destinations/${dest.slug}`}
                              onClick={() => setMenuOpen(false)}
                              aria-current={destActive ? "page" : undefined}
                              className={`py-1.5 text-[13px] font-medium transition-colors ${
                                destActive
                                  ? "text-[#2E79C7] dark:text-[#FACC15]"
                                  : "text-slate-600 hover:text-[#2E79C7] dark:text-slate-400 dark:hover:text-[#FACC15]"
                              }`}
                            >
                              {dest.name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              ) : link.label === "Tours" ? (
                <div className="py-1">
                  <button
                    type="button"
                    onClick={() =>
                      setMobileSection((s) => (s === "Tours" ? null : "Tours"))
                    }
                    aria-expanded={mobileSection === "Tours"}
                    aria-controls="mobile-tours-panel"
                    className={`flex w-full items-center justify-between py-2 text-sm font-medium uppercase tracking-wide transition-colors ${
                      active
                        ? "text-[#2E79C7] dark:text-[#FACC15]"
                        : "text-[#2C2C2C] dark:text-white"
                    }`}
                  >
                    <span>{link.label}</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-transform duration-300 ${
                        mobileSection === "Tours" ? "rotate-180" : ""
                      }`}
                      aria-hidden
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  <div
                    id="mobile-tours-panel"
                    className={`grid overflow-hidden transition-all duration-300 ${
                      mobileSection === "Tours"
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0">
                      <div className="mt-2 flex flex-col gap-1 border-l-2 border-[#2E79C7]/20 pl-4">
                        <Link
                          href="/tours"
                          onClick={() => setMenuOpen(false)}
                          className="py-1.5 text-[13px] font-semibold text-[#2E79C7] transition-colors hover:text-[#2261A1] dark:text-[#FACC15] dark:hover:text-white"
                        >
                          All tours
                        </Link>
                        {tourCityGroups.map((grp) => {
                          const open = mobileToursCity === grp.id;
                          return (
                            <div key={grp.id} className="py-0.5">
                              <button
                                type="button"
                                onClick={() =>
                                  setMobileToursCity((c) => (c === grp.id ? null : grp.id))
                                }
                                aria-expanded={open}
                                aria-controls={`mobile-${grp.id}-panel`}
                                className="flex w-full items-center justify-between py-1.5 text-[13px] font-medium text-slate-600 transition-colors hover:text-[#2E79C7] dark:text-slate-400 dark:hover:text-[#FACC15]"
                              >
                                <span>{grp.label}</span>
                                <svg
                                  width="14"
                                  height="14"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className={`shrink-0 text-[#C9A84C] transition-transform duration-300 ${
                                    open ? "rotate-180" : ""
                                  }`}
                                  aria-hidden
                                >
                                  <polyline points="6 9 12 15 18 9" />
                                </svg>
                              </button>
                              <div
                                id={`mobile-${grp.id}-panel`}
                                className={`grid overflow-hidden transition-all duration-300 ${
                                  open
                                    ? "grid-rows-[1fr] opacity-100"
                                    : "grid-rows-[0fr] opacity-0"
                                }`}
                              >
                                <div className="min-h-0">
                                  <div className="mt-1 flex flex-col gap-1 border-l border-[#C9A84C]/30 pl-3">
                                    {grp.items.map((item) => {
                                      const itemActive = pathname === item.href;
                                      return (
                                        <Link
                                          key={item.href}
                                          href={item.href}
                                          onClick={() => setMenuOpen(false)}
                                          aria-current={itemActive ? "page" : undefined}
                                          className={`py-1 text-[12.5px] font-medium transition-colors ${
                                            itemActive
                                              ? "text-[#2E79C7] dark:text-[#FACC15]"
                                              : "text-slate-500 hover:text-[#2E79C7] dark:text-slate-500 dark:hover:text-[#FACC15]"
                                          }`}
                                        >
                                          {item.label}
                                        </Link>
                                      );
                                    })}
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`block py-2 text-sm font-medium uppercase tracking-wide transition-colors duration-300 ${
                    active
                      ? "text-[#2E79C7] dark:text-[#FACC15]"
                      : "text-[#2C2C2C] hover:text-[#2E79C7] dark:text-white dark:hover:text-[#FACC15]"
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </li>
            );
          })}
          <li className="pt-2 flex items-center justify-between border-t border-[#E8D5B7]/50 dark:border-[#FACC15]/20">
            <span className="text-sm font-medium uppercase tracking-wide text-[#6B6B6B] dark:text-white/60">Theme</span>
            <ThemeToggle />
          </li>
          <li className="pt-2 flex items-center justify-between border-t border-[#E8D5B7]/50 dark:border-[#FACC15]/20">
            <span className="text-sm font-medium uppercase tracking-wide text-[#6B6B6B] dark:text-white/60">Language</span>
            <div className="bg-neutral-800 text-white rounded-full"><LanguageSwitcher /></div>
          </li>

        </ul>
      </div>
    </header>
  );
}
