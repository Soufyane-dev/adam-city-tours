"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

const KarimGuide = dynamic(() => import("./KarimGuide"), {
  ssr: false,
  loading: () => null,
});

export default function KarimGuideDynamic() {
  const [loadWidget, setLoadWidget] = useState(false);

  if (!loadWidget) {
    return (
      <div className="pointer-events-auto fixed bottom-[15rem] right-6 z-50 group">
        <button
          type="button"
          onClick={() => setLoadWidget(true)}
          aria-label="Ask AI guide"
          className="relative w-[56px] h-[56px] rounded-full bg-white shadow-[0_4px_14px_0_rgba(0,0,0,0.18)] flex items-center justify-center hover:scale-105 transition-transform duration-300 border border-[#C9A84C]/25 animate-in fade-in zoom-in-95"
        >
          <span
            aria-hidden
            className="absolute inset-0 rounded-full bg-[#C9A84C]/30 animate-ping pointer-events-none"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={26}
            height={26}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.3}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="relative z-10 text-[#0F3568]"
          >
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
          </svg>
        </button>
        <span className="absolute right-full top-1/2 -translate-y-1/2 mr-4 bg-white/95 dark:bg-black/90 text-neutral-800 dark:text-neutral-100 text-xs font-semibold px-3 py-1.5 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Ask AI guide
        </span>
      </div>
    );
  }

  return <KarimGuide initialOpen />;
}
