"use client";

import { useState, useRef, useEffect } from "react";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(true);
  const widgetRef = useRef<HTMLDivElement>(null);
  
  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const whatsappNumber = "212667313222";
  const phoneNumber = "212666453540";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello! I would like more information about your tours.")}`;
  
  const openWhatsAppDirect = () => {
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const handleMainClick = () => {
    setIsOpen(true);
    openWhatsAppDirect();
  };

  return (
    <div ref={widgetRef} className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* Expanded Chat Box */}
      <div 
        className={`bg-[var(--background)] border border-neutral-200 dark:border-neutral-800 shadow-2xl rounded-2xl w-[340px] mb-3 overflow-hidden origin-bottom-right transition-all duration-300 ease-out flex flex-col ${
          isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-50 opacity-0 translate-y-10 pointer-events-none absolute bottom-16"
        }`}
      >
        {/* Header */}
        <div className="bg-[#25D366] px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-white/80 text-xs font-medium">Powered by</span>
            <span className="text-white font-bold text-sm tracking-wide">Adam City Tours</span>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white hover:bg-white/20 p-1.5 rounded-full transition-colors"
            aria-label="Close Chat"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Chat Body */}
        <div className="p-5 bg-stone-100 dark:bg-neutral-900 h-[180px] flex flex-col justify-center">
          <div className="bg-white dark:bg-neutral-800 dark:text-white p-3 px-4 rounded-b-xl rounded-tr-xl rounded-tl-sm shadow-sm max-w-[85%] relative self-start border border-neutral-100 dark:border-neutral-700">
             {/* Chat tail */}
            <div className="absolute top-0 -left-2 w-0 h-0 border-t-[8px] border-t-white dark:border-t-neutral-800 border-l-[8px] border-l-transparent border-b-[8px] border-b-transparent"></div>
            
            <p className="text-[15px] font-medium text-neutral-800 dark:text-neutral-100">Hello</p>
            <p className="text-[15px] text-neutral-700 dark:text-neutral-200 mt-1">Can we help you?</p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-4 bg-white dark:bg-neutral-950 flex justify-center border-t border-neutral-100 dark:border-neutral-800">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1ebe57] text-white py-2.5 px-6 rounded-full font-semibold transition-all duration-200 shadow-md shadow-[#25D366]/20 hover:shadow-lg hover:shadow-[#25D366]/30 group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="rotate-45 -mr-1 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300">
              <path d="M22 2L11 13"></path>
              <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
            </svg>
            <span className="tracking-wide">Open chat</span>
          </a>
        </div>
      </div>

      <button
        onClick={handleMainClick}
        className="inline-flex items-center gap-2 bg-white/95 dark:bg-neutral-900/95 text-neutral-800 dark:text-neutral-100 rounded-full pr-5 pl-1.5 py-1.5 shadow-[0_8px_25px_rgba(0,0,0,0.18)] border border-neutral-200/80 dark:border-neutral-700 hover:scale-[1.02] transition-transform duration-300"
        aria-label="Questions? Chat with Us!"
      >
        <span className="w-[42px] h-[42px] bg-[#25D366] text-white rounded-full flex items-center justify-center">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.88-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
          </svg>
        </span>
        <span className="text-[37px] leading-none text-neutral-300 -mr-1">|</span>
        <span className="text-[36px] leading-none text-neutral-300 -mr-1">|</span>
        <span className="text-[31px] leading-none text-neutral-300 -mr-1">›</span>
        <span className="font-medium text-[17px]">Questions? Chat with Us!</span>
      </button>

      <div className="flex flex-col items-center gap-3 sr-only">
        <a
          href={`tel:+${phoneNumber}`}
          className="w-[50px] h-[50px] bg-white border border-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 text-[#2C2C2C] dark:text-white rounded-full shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] flex items-center justify-center"
          aria-label="Call Us"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </a>
      </div>
    </div>
  );
}
