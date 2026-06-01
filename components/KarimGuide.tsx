"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  role: "user" | "model";
  parts: { text: string }[];
};

type KarimGuideProps = {
  /** When true (e.g. after lazy load), open the panel immediately. */
  initialOpen?: boolean;
};

export default function KarimGuide({ initialOpen = false }: KarimGuideProps) {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "model",
      parts: [{ text: "Hello! I am Adam from Adam City Tours, your luxury Moroccan tour guide. How can I help you plan your journey?" }]
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput("");
    
    const newMessages: Message[] = [
      ...messages,
      { role: "user", parts: [{ text: userMsg }] }
    ];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const historyPayload = newMessages.slice(1, -1).map(m => ({ role: m.role, parts: m.parts }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMsg,
          history: historyPayload
        })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to fetch response");
      }

      setMessages(prev => [
        ...prev,
        { role: "model", parts: [{ text: data.response }] }
      ]);
    } catch (err: unknown) {
      const text = err instanceof Error ? err.message : "Something went wrong.";
      setMessages(prev => [
        ...prev,
        { role: "model", parts: [{ text }] }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div ref={widgetRef} className="pointer-events-none">
      {/* Expanded Chat Box — anchored to bottom-right */}
      {isOpen && (
        <div className="pointer-events-auto fixed bottom-6 right-6 z-[60] w-[min(92vw,360px)] h-[min(70vh,480px)] bg-white/80 dark:bg-[#141C2C]/80 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-2xl rounded-2xl flex flex-col overflow-hidden origin-bottom-right animate-in fade-in zoom-in-95 duration-300">
          {/* Header */}
          <div className="bg-white/40 dark:bg-black/20 backdrop-blur-md px-5 py-3 border-b border-white/20 dark:border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-[#2C2C2C] dark:text-white font-bold tracking-wide flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0F3568] dark:text-[#FACC15]">
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
                </svg>
                Adam
              </span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-[#2C2C2C]/60 dark:text-white/60 hover:text-[#2C2C2C] dark:hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] p-3.5 rounded-2xl text-[14.5px] leading-relaxed relative ${
                  msg.role === "user"
                    ? "bg-[#0F3568] text-white rounded-br-sm"
                    : "bg-white/90 dark:bg-black/50 text-[#2C2C2C] dark:text-white border border-white/50 dark:border-white/10 rounded-bl-sm shadow-sm"
                }`}>
                  {msg.parts[0].text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] px-4 py-3 rounded-2xl bg-white/90 dark:bg-black/50 border border-white/50 dark:border-white/10 rounded-bl-sm shadow-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F3568] dark:bg-[#FACC15] animate-bounce"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F3568] dark:bg-[#FACC15] animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F3568] dark:bg-[#FACC15] animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
             <div ref={endOfMessagesRef} />
          </div>

          {/* Input */}
          <form onSubmit={sendMessage} className="p-3 bg-white/40 dark:bg-black/20 backdrop-blur-md border-t border-white/20 dark:border-white/5">
            <div className="flex items-center gap-2 relative">
              <input 
                type="text" 
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Message Adam..."
                className="flex-1 bg-white/80 dark:bg-black/50 border border-white/60 dark:border-white/10 rounded-full px-4 py-2.5 text-[15px] text-[#2C2C2C] dark:text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#0F3568]/50"
              />
              <button 
                type="submit" 
                disabled={isLoading || !input.trim()}
                className="absolute right-1 w-8 h-8 flex items-center justify-center rounded-full bg-[#0F3568] text-white hover:bg-[#082A52] transition-colors disabled:opacity-50"
              >
                 <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="rotate-45 ml-[-2px] mt-[-2px]"><path d="M22 2L11 13"></path><path d="M22 2l-7 20-4-9-9-4 20-7z"></path></svg>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Floating Button — compact icon stacked above the contact menu on the right */}
      {!isOpen && (
        <div className="pointer-events-auto fixed bottom-[15rem] right-6 z-50 group">
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Ask AI guide"
            className="relative w-[56px] h-[56px] rounded-full bg-white shadow-[0_4px_14px_0_rgba(0,0,0,0.18)] flex items-center justify-center hover:scale-105 transition-transform duration-300 border border-[#C9A84C]/25 animate-in fade-in zoom-in-95"
          >
            {/* Soft gold pulse ring to distinguish it from the other icons */}
            <span
              aria-hidden
              className="absolute inset-0 rounded-full bg-[#C9A84C]/30 animate-ping pointer-events-none"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.3"
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
      )}
    </div>
  );
}
