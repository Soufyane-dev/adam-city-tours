"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useSyncExternalStore } from "react";

const languages = [
  { code: "en", name: "English", countryCode: "us" },
  { code: "fr", name: "Français", countryCode: "fr" },
  { code: "es", name: "Español", countryCode: "es" },
  { code: "de", name: "Deutsch", countryCode: "de" },
  { code: "it", name: "Italiano", countryCode: "it" },
  { code: "ar", name: "العربية", countryCode: "ma" },
  { code: "pt", name: "Português", countryCode: "pt" },
  { code: "zh-CN", name: "中文", countryCode: "cn" },
];

const emptySubscribe = () => () => {};

function getLanguageCodeFromCookie(): string {
  const match = document.cookie.match(/(^|;) ?googtrans=([^;]*)(;|$)/);
  if (!match) return languages[0].code;
  const currentLangCode = match[2].split("/")[2];
  return languages.some((l) => l.code === currentLangCode)
    ? currentLangCode
    : languages[0].code;
}

export default function LanguageSwitcher({ scrolled }: { scrolled?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [langCodeToApply, setLangCodeToApply] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedCode = useSyncExternalStore(
    emptySubscribe,
    getLanguageCodeFromCookie,
    () => languages[0].code
  );
  const selectedLang = languages.find((l) => l.code === selectedCode) ?? languages[0];

  // Load Google Translate (cookie-based). Mount target must stay off-DOM-flow — otherwise
  // Google’s <select> can render as a visible gray box above the navbar logo.
  useEffect(() => {
    if (document.getElementById("google-translate-script")) return;

    let mount = document.getElementById("google_translate_element");
    if (!mount) {
      mount = document.createElement("div");
      mount.id = "google_translate_element";
      mount.setAttribute("aria-hidden", "true");
      mount.className = "google-translate-offscreen";
      document.body.appendChild(mount);
    }

    window.googleTranslateElementInit = () => {
      const Ctor = window.google?.translate?.TranslateElement;
      if (!Ctor) return;
      new Ctor(
        {
          pageLanguage: "en",
          includedLanguages: "en,fr,es,de,it,ar,pt,zh-CN",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    if (!langCodeToApply) return;
    const hostname = window.location.hostname;
    document.cookie = `googtrans=/auto/${langCodeToApply}; path=/; domain=${hostname}`;
    document.cookie = `googtrans=/auto/${langCodeToApply}; path=/; domain=.${hostname}`;
    window.location.reload();
  }, [langCodeToApply]);

  const handleLanguageChange = (lang: (typeof languages)[0]) => {
    setIsOpen(false);
    setLangCodeToApply(lang.code);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* google_translate_element is appended to document.body in useEffect (off-screen) */}

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .skiptranslate iframe,
        .VIpgJd-ZVi9od-ORHb-OEVmcd,
        .goog-te-banner-frame {
          display: none !important;
        }
        body {
          top: 0px !important;
        }
      `,
        }}
      />

      {/* Language Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 p-2 rounded-full transition-colors duration-300 ${
          scrolled
            ? "hover:bg-neutral-100 dark:hover:bg-neutral-800 text-[#2C2C2C] dark:text-white"
            : "hover:bg-white/10 text-white"
        }`}
        aria-label="Select Language"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
        <span className="text-[16px] font-bold uppercase tracking-wider hidden sm:block">
          {selectedLang.code}
        </span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-52 bg-white dark:bg-[#141C2C] rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] dark:shadow-black/50 border border-neutral-100 dark:border-neutral-800 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang)}
              className={`w-full text-left px-5 py-2.5 text-[17px] flex items-center justify-between hover:bg-neutral-50 dark:hover:bg-white/5 hover:text-[#0F3568] dark:hover:text-[#0F3568] transition-colors ${
                selectedLang.code === lang.code
                  ? "text-[#0F3568] font-semibold bg-neutral-50 dark:bg-white/5"
                  : "text-[#111] dark:text-neutral-200 font-medium"
              }`}
            >
              <span className="flex items-center gap-4">
                <Image
                  src={`https://flagcdn.com/w40/${lang.countryCode}.png`}
                  alt=""
                  width={26}
                  height={20}
                  className="rounded-[2px] shadow-sm shadow-black/10 h-5 w-auto"
                  unoptimized
                />
                <span className="tracking-wide">{lang.name}</span>
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

type GoogleTranslateOptions = {
  pageLanguage: string;
  includedLanguages: string;
  autoDisplay: boolean;
};

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google?: {
      translate?: {
        TranslateElement: new (options: GoogleTranslateOptions, elementId: string) => unknown;
      };
    };
  }
}
