"use client";

import { useState } from "react";

interface ContactFormProps {
  compact?: boolean;
}

export default function ContactForm({ compact = false }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    tour: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 800));
    setStatus("success");
    setFormData({ name: "", email: "", phone: "", message: "", tour: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  const inputClass =
    "w-full bg-white/70 dark:bg-black/20 border border-[#E8D5B7] dark:border-white/10 rounded-xl px-4 py-3 text-sm text-[#2C2C2C] dark:text-white placeholder-[#9A9A9A] focus:outline-none focus:ring-2 focus:ring-[#FACC15]/40 focus:border-[#FACC15] dark:focus:border-[#FACC15] transition-all duration-300";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={`grid gap-4 ${compact ? "grid-cols-1" : "sm:grid-cols-2"}`}>
        <div>
          <label htmlFor="contact-name" className="block text-xs font-semibold text-[#6B6B6B] dark:text-gray-400 tracking-wide uppercase mb-1.5">
            Full Name *
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-xs font-semibold text-[#6B6B6B] dark:text-gray-400 tracking-wide uppercase mb-1.5">
            Email Address *
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className={`grid gap-4 ${compact ? "grid-cols-1" : "sm:grid-cols-2"}`}>
        <div>
          <label htmlFor="contact-phone" className="block text-xs font-semibold text-[#6B6B6B] dark:text-gray-400 tracking-wide uppercase mb-1.5">
            Phone / WhatsApp
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 234 567 890"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="contact-tour" className="block text-xs font-semibold text-[#6B6B6B] dark:text-gray-400 tracking-wide uppercase mb-1.5">
            Interested Tour
          </label>
          <select
            id="contact-tour"
            name="tour"
            value={formData.tour}
            onChange={handleChange}
            className={`${inputClass} dark:text-white dark:[&>option]:text-black`}
          >
            <option value="">Select a tour...</option>
            <option value="marrakech">Imperial Marrakech</option>
            <option value="sahara">Sahara Desert Adventure</option>
            <option value="chefchaouen">Blue City Chefchaouen</option>
            <option value="atlas">Atlas Mountains Trek</option>
            <option value="essaouira">Coastal Essaouira</option>
            <option value="grand">Grand Morocco Tour</option>
            <option value="custom">Custom Tour</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-xs font-semibold text-[#6B6B6B] dark:text-gray-400 tracking-wide uppercase mb-1.5">
          Message *
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={compact ? 3 : 5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your dream Morocco experience..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "success" && (
        <div className="flex items-center gap-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-500/30 rounded-xl px-4 py-3 text-green-700 dark:text-green-400 text-sm">
          <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Thank you! We&apos;ll get back to you in under 15 minutes.
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <button
          id="contact-submit-btn"
          type="submit"
          disabled={status === "success"}
          className="flex-1 bg-[#2E79C7] hover:bg-[#2261A1] text-white font-semibold tracking-wider uppercase text-sm px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#2E79C7]/30 hover:-translate-y-px disabled:opacity-60"
        >
          Send Message
        </button>
        <a
          href="https://wa.me/212600000000?text=Hello%20Mortours!%20I%27m%20interested%20in%20booking%20a%20tour."
          target="_blank"
          rel="noopener noreferrer"
          id="whatsapp-btn"
          className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold tracking-wider uppercase text-sm px-6 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-green-400/30 hover:-translate-y-px"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          WhatsApp
        </a>
      </div>
    </form>
  );
}
