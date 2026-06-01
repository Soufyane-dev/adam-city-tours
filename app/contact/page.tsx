"use client";

import { useEffect, useState } from "react";

type ContactItem = {
  label: string;
  value: string;
  icon: React.ReactElement;
  href?: string;
  secondary?: string;
};

const infoItems: ContactItem[] = [
  {
    label: "Address",
    value: "Douar Sidi Moussa, Saada, Marrakech",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 21s6-6.01 6-10a6 6 0 10-12 0c0 3.99 6 10 6 10z" />
        <circle cx="12" cy="11" r="2.2" strokeWidth={1.8} />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "06 66 45 35 40",
    href: "tel:+212666453540",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2.25 6.338c0-.414.336-.75.75-.75h2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75H3a.75.75 0 01-.75-.75V6.338zm0 0C2.25 14.618 9.382 21.75 17.662 21.75h2.25a.75.75 0 00.75-.75v-2.25a.75.75 0 00-.75-.75h-2.25a.75.75 0 00-.75.75v.75a12.75 12.75 0 01-12.75-12.75h.75A.75.75 0 006 6V3.75a.75.75 0 00-.75-.75H3a.75.75 0 00-.75.75v2.588z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "adamcitytours274@gmail.com",
    href: "mailto:adamcitytours274@gmail.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.75 7.5l8.25 6 8.25-6M4.5 6h15A1.5 1.5 0 0121 7.5v9a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 16.5v-9A1.5 1.5 0 014.5 6z" />
      </svg>
    ),
  },
  {
    label: "Business Hours",
    value: "Mon – Sun · 7:00 AM – 9:00 PM",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="8.5" strokeWidth={1.8} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 7.5v5l3 2.25" />
      </svg>
    ),
  },

];

const inputClass =
  "w-full bg-white border border-[#dde0e6] rounded-xl px-4 py-3 text-sm text-[#1a1a1f] placeholder-[#9a9ba4] focus:outline-none focus:ring-2 focus:ring-[#0F3568]/30 focus:border-[#0F3568] transition-all duration-200";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    tour: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  useEffect(() => {
    const q = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
    if (!q || q.get("tour") !== "airport-transfer") return;
    setFormData((prev) => (prev.tour ? prev : { ...prev, tour: "airport-transfer" }));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", phone: "", email: "", tour: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("idle");
        alert("Une erreur s'est produite. Veuillez réessayer.");
      }
    } catch {
      setStatus("idle");
      alert("Une erreur s'est produite. Veuillez réessayer.");
    }
  };

  return (
    <main className="relative min-h-screen pt-32 pb-20 px-6 lg:px-12 bg-[#f4f5f7] overflow-hidden">
      {/* Decorative circles */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-40 -left-36 w-[520px] h-[520px] rounded-full border border-[#dde0e6]" />
        <div className="absolute top-36 left-[38%] w-[460px] h-[460px] rounded-full border border-[#dde0e6]" />
        <div className="absolute -bottom-48 right-[18%] w-[620px] h-[620px] rounded-full border border-[#dde0e6]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-10">

        {/* ── TOP SECTION: sidebar + form ─────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 items-start">

          {/* LEFT — Contact Info Card */}
          <aside className="bg-white border border-[#e4e5ea] rounded-2xl shadow-sm p-6 space-y-0">
            {infoItems.map((item, index) => (
              <div key={item.label}>
                <div className={`flex items-start gap-3 ${index !== 0 ? "pt-5" : ""}`}>
                  <span className="shrink-0 mt-0.5 w-9 h-9 rounded-lg bg-[#0F3568]/10 text-[#0F3568] flex items-center justify-center">
                    {item.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-[#7a7b84] uppercase tracking-widest mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-medium text-[#1a1a1f] hover:text-[#0F3568] transition-colors break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-[#1a1a1f]">{item.value}</p>
                    )}
                    {item.secondary && (
                      <p className="text-sm text-[#0F3568] break-all mt-0.5">{item.secondary}</p>
                    )}
                  </div>
                </div>
                {index < infoItems.length - 1 && (
                  <div className="mt-5 h-px bg-[#eaebef]" />
                )}
              </div>
            ))}

            {/* WhatsApp CTA */}
            <div className="pt-6 mt-6 border-t border-[#eaebef]">
              <a
                href="https://wa.me/212667313222"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1ebe57] text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-all duration-200 hover:shadow-md hover:shadow-green-300/30"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </aside>

          {/* RIGHT — Form */}
          <div className="bg-white border border-[#e4e5ea] rounded-2xl shadow-sm p-8">
            <h1 className="title-with-gold-glow title-with-gold-glow--left text-3xl md:text-4xl font-bold text-[#101114] leading-tight">
              Send us a message
            </h1>
            <p className="mt-2 text-sm text-[#5a5b63] leading-relaxed max-w-xl">
              We&apos;d love to hear from you! Whether you have questions about our tours, need
              help planning your trip, or simply want to learn more — our team is here to
              assist you.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-4">
              {/* Row 1: Name + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="c-name" className="block text-xs font-semibold text-[#6b6c75] uppercase tracking-wide mb-1.5">
                    Full Name *
                  </label>
                  <input
                    id="c-name"
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
                  <label htmlFor="c-phone" className="block text-xs font-semibold text-[#6b6c75] uppercase tracking-wide mb-1.5">
                    Phone / WhatsApp
                  </label>
                  <input
                    id="c-phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+212 665 138 697"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Row 2: Email + Tour */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="c-email" className="block text-xs font-semibold text-[#6b6c75] uppercase tracking-wide mb-1.5">
                    Email Address *
                  </label>
                  <input
                    id="c-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="c-tour" className="block text-xs font-semibold text-[#6b6c75] uppercase tracking-wide mb-1.5">
                    Interested Tour
                  </label>
                  <select
                    id="c-tour"
                    name="tour"
                    value={formData.tour}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select a tour...</option>
                    <option value="airport-transfer">Marrakech airport transfer (RAK)</option>
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

              {/* Message */}
              <div>
                <label htmlFor="c-message" className="block text-xs font-semibold text-[#6b6c75] uppercase tracking-wide mb-1.5">
                  Message *
                </label>
                <textarea
                  id="c-message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your dream Morocco experience..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Success message */}
              {status === "success" && (
                <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl px-4 py-3 text-green-700 text-sm">
                  <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Thank you! We&apos;ll get back to you within 15 minutes.
                </div>
              )}

              {/* Submit */}
              <div className="pt-1">
                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={status === "sending" || status === "success"}
                  className="w-full sm:w-auto bg-[#0F3568] hover:bg-[#082A52] text-white font-semibold text-sm tracking-wider uppercase px-10 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#0F3568]/30 hover:-translate-y-px disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* ── BOTTOM SECTION: Map ─────────────────────────────── */}
        <div className="bg-white border border-[#e4e5ea] rounded-2xl shadow-sm p-6">
          <h2 className="title-with-gold-glow title-with-gold-glow--left text-xl font-semibold text-[#101114] mb-1">Localisation</h2>
          <p className="text-sm text-[#5a5b63] mb-4">Find us easily in Marrakech.</p>

          <div className="w-full overflow-hidden rounded-xl border border-[#e4e5ea]">
            <iframe
              title="Adam City Tours location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.2!2d-7.9811!3d31.6295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8d96179e51%3A0x5950b6534f87adb8!2sAdam%20city%20tours!5e0!3m2!1sfr!2sma!4v1716159000000"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[300px] border-0"
            />
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-[#f8f9fb] border border-[#e4e5ea] rounded-xl p-4">
              <p className="text-xs text-[#6a6b71] uppercase tracking-wide font-semibold mb-0.5">Address</p>
              <a
                href="https://maps.app.goo.gl/zLKn96LAzi6sVYE4A"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[#0F3568] hover:underline"
              >
                Douar Sidi Moussa, Saada, Marrakech
              </a>
            </div>
            <a
              href="https://wa.me/212667313222"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#f8f9fb] border border-[#e4e5ea] rounded-xl p-4 hover:border-[#25D366] hover:bg-green-50/50 transition-colors"
            >
              <p className="text-xs text-[#6a6b71] uppercase tracking-wide font-semibold mb-0.5">WhatsApp</p>
              <p className="text-sm font-medium text-[#17181b]">06 67 31 32 22</p>
            </a>
            <a
              href="tel:+212666453540"
              className="bg-[#f8f9fb] border border-[#e4e5ea] rounded-xl p-4 hover:border-[#0F3568] hover:bg-[#0F3568]/[0.06] transition-colors"
            >
              <p className="text-xs text-[#6a6b71] uppercase tracking-wide font-semibold mb-0.5">Phone</p>
              <p className="text-sm font-medium text-[#17181b]">06 66 45 35 40</p>
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
