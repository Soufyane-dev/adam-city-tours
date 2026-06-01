"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, X, MapPin, Compass } from "lucide-react";
import { tours } from "@/lib/tours";
import { destinations } from "@/lib/destinations";

type Result =
  | {
      kind: "tour";
      id: string;
      title: string;
      subtitle: string;
      href: string;
      image?: string;
    }
  | {
      kind: "destination";
      id: string;
      title: string;
      subtitle: string;
      href: string;
      image?: string;
    };

function buildIndex(): Result[] {
  const tourResults: Result[] = tours.map((t) => ({
    kind: "tour",
    id: t.id,
    title: t.title,
    subtitle: `${t.duration} · From $${t.price}`,
    href: `/tours/${t.id}`,
    image: t.image,
  }));

  const destResults: Result[] = destinations.map((d) => ({
    kind: "destination",
    id: d.slug,
    title: d.name,
    subtitle: d.shortDescription,
    href: `/destinations/${d.slug}`,
    image: d.image,
  }));

  return [...destResults, ...tourResults];
}

function score(q: string, r: Result): number {
  const haystack = `${r.title} ${r.subtitle}`.toLowerCase();
  const needle = q.toLowerCase().trim();
  if (!needle) return 0;
  if (haystack.includes(needle)) {
    if (r.title.toLowerCase().startsWith(needle)) return 3;
    if (r.title.toLowerCase().includes(needle)) return 2;
    return 1;
  }
  return 0;
}

/**
 * Luxury inline search for the navbar.
 * Collapsed state = gold-ringed icon. Open state = elegant input with a
 * dropdown of matching tours & destinations. ESC / outside click close it.
 */
export default function NavSearch({ overlay }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);

  const index = useMemo(buildIndex, []);

  const results = useMemo(() => {
    const q = query.trim();
    if (!q) return [] as Result[];
    return index
      .map((r) => ({ r, s: score(q, r) }))
      .filter((x) => x.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 8)
      .map((x) => x.r);
  }, [index, query]);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 60);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        setQuery("");
      }
    }
    function onClick(e: MouseEvent) {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      {/* Toggle button */}
      <button
        type="button"
        aria-label={open ? "Close search" : "Search tours and destinations"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={
          overlay
            ? "group relative flex h-10 w-10 items-center justify-center rounded-full border border-white/45 bg-white/[0.14] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.28)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FACC15]/70 hover:bg-white/22 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70 dark:border-white/35 dark:bg-white/[0.1] dark:hover:bg-white/18"
            : "group relative flex h-10 w-10 items-center justify-center rounded-full border border-[#C9A84C]/30 bg-white/70 text-[#1a2b48] shadow-[0_6px_20px_-10px_rgba(201,168,76,0.35)] backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C9A84C]/70 hover:shadow-[0_12px_28px_-12px_rgba(201,168,76,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A84C] dark:border-white/15 dark:bg-white/5 dark:text-white"
        }
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 50%, rgba(201,168,76,0.22) 0%, transparent 70%)",
          }}
        />
        <Search className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" aria-hidden />
      </button>

      {/* Mobile backdrop — taps close the panel */}
      <button
        type="button"
        aria-hidden
        tabIndex={-1}
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Dropdown panel — fixed sheet on mobile, anchored flyout on desktop */}
      <div
        className={`fixed inset-x-3 top-[calc(4.75rem+0.75rem)] z-50 origin-top transition-all duration-300 lg:absolute lg:inset-x-auto lg:right-0 lg:top-[calc(100%+0.75rem)] lg:w-[22rem] lg:origin-top-right ${
          open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-2 scale-[0.98] opacity-0"
        }`}
      >
        <div className="overflow-hidden rounded-2xl border border-[#C9A84C]/25 bg-white/95 shadow-[0_24px_60px_-20px_rgba(15,23,42,0.25)] backdrop-blur-xl dark:border-white/10 dark:bg-[#0f172a]/95">
          {/* Input row */}
          <div className="flex items-center gap-3 border-b border-[#C9A84C]/15 px-4 py-3 dark:border-white/10">
            <Search className="h-4 w-4 text-[#C9A84C]" aria-hidden />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search tours, destinations…"
              className="flex-1 bg-transparent text-sm font-medium text-[#1a2b48] placeholder:text-slate-400 focus:outline-none dark:text-white dark:placeholder:text-white/40"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear"
                className="rounded-full p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-white/10 dark:hover:text-white"
              >
                <X className="h-3.5 w-3.5" aria-hidden />
              </button>
            )}
          </div>

          {/* Results / empty state */}
          <div className="max-h-[22rem] overflow-y-auto">
            {query.trim() === "" ? (
              <div className="px-4 py-5">
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C9A84C]">
                  Popular
                </p>
                <ul className="space-y-1">
                  {index.slice(0, 5).map((r) => (
                    <SuggestionRow
                      key={`${r.kind}-${r.id}`}
                      r={r}
                      onClick={() => {
                        setOpen(false);
                        setQuery("");
                      }}
                    />
                  ))}
                </ul>
              </div>
            ) : results.length === 0 ? (
              <div className="px-4 py-8 text-center">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  No results for “{query}”.
                </p>
                <Link
                  href="/tours"
                  onClick={() => {
                    setOpen(false);
                    setQuery("");
                  }}
                  className="mt-3 inline-block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C9A84C] transition-colors hover:text-[#b08f34]"
                >
                  Browse all tours →
                </Link>
              </div>
            ) : (
              <ul className="py-2">
                {results.map((r) => (
                  <SuggestionRow
                    key={`${r.kind}-${r.id}`}
                    r={r}
                    onClick={() => {
                      setOpen(false);
                      setQuery("");
                    }}
                  />
                ))}
              </ul>
            )}
          </div>

          {/* Footer hint */}
          <div className="flex items-center justify-between border-t border-[#C9A84C]/15 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400 dark:border-white/10 dark:text-white/40">
            <span>Adam City Tours · Curated journeys</span>
            <span className="hidden sm:inline">
              <kbd className="rounded border border-slate-300 bg-white px-1.5 py-0.5 font-mono text-[10px] text-slate-600 dark:border-white/15 dark:bg-white/5 dark:text-white/60">
                Esc
              </kbd>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SuggestionRow({
  r,
  onClick,
}: {
  r: Result;
  onClick: () => void;
}) {
  return (
    <li>
      <Link
        href={r.href}
        onClick={onClick}
        className="group flex items-center gap-3 rounded-xl px-4 py-2.5 transition-colors hover:bg-[#C9A84C]/8 dark:hover:bg-white/5"
      >
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-slate-100 ring-1 ring-[#C9A84C]/20 dark:bg-white/5 dark:ring-white/10">
          {r.image ? (
            <Image
              src={r.image}
              alt=""
              fill
              sizes="40px"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-[#C9A84C]">
              {r.kind === "tour" ? (
                <Compass className="h-4 w-4" />
              ) : (
                <MapPin className="h-4 w-4" />
              )}
            </div>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-[#1a2b48] dark:text-white">
            {r.title}
          </p>
          <p className="truncate text-[11px] font-medium text-slate-500 dark:text-slate-400">
            {r.subtitle}
          </p>
        </div>
        <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#C9A84C]">
          {r.kind === "tour" ? "Tour" : "Place"}
        </span>
      </Link>
    </li>
  );
}
