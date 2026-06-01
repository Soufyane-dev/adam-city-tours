import Link from "next/link";
import BrandWordmark from "@/components/BrandWordmark";

type SocialLink = {
  label: string;
  href: string;
  /** Inline gradient used on hover (paints the disc with the brand identity). */
  hoverGradient: string;
  /** Outer glow color used on hover. */
  glow: string;
  /** Rest-state icon color (and hover color for white-on-brand). */
  iconColor: string;
  icon: React.ReactNode;
};

const socialLinks: SocialLink[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/adamcitytours",
    hoverGradient: "linear-gradient(135deg, #1877F2 0%, #0a4fb5 100%)",
    glow: "rgba(24,119,242,0.55)",
    iconColor: "#1877F2",
    icon: (
      <svg className="w-[15px] h-[15px]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/adamcitytours/",
    hoverGradient:
      "linear-gradient(135deg, #f58529 0%, #dd2a7b 40%, #8134af 75%, #515bd4 100%)",
    glow: "rgba(221,42,123,0.55)",
    iconColor: "#E1306C",
    icon: (
      <svg className="w-[15px] h-[15px]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.2 0 3.58.012 4.85.07 3.25.148 4.77 1.691 4.92 4.919.058 1.265.068 1.645.068 4.848 0 3.204-.01 3.584-.068 4.849-.15 3.225-1.67 4.771-4.92 4.919-1.27.058-1.65.069-4.85.069-3.2 0-3.58-.011-4.85-.069-3.26-.149-4.77-1.699-4.92-4.919C2.175 15.584 2.163 15.204 2.163 12c0-3.203.012-3.583.07-4.848.149-3.228 1.663-4.771 4.919-4.919C8.42 2.175 8.8 2.163 12 2.163zm0 3.675A6.163 6.163 0 1012 18.163 6.163 6.163 0 0012 5.838zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.41-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
      </svg>
    ),
  },
  {
    label: "Tripadvisor",
    href: "https://tripadvisor.com",
    hoverGradient: "linear-gradient(135deg, #34E0A1 0%, #0ea67a 100%)",
    glow: "rgba(52,224,161,0.55)",
    iconColor: "#0ea67a",
    icon: (
      <svg className="w-[17px] h-[17px]" viewBox="0 0 24 24" fill="none">
        <circle cx="7.5" cy="12" r="4.25" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="16.5" cy="12" r="4.25" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="7.5" cy="12" r="1.3" fill="currentColor" />
        <circle cx="16.5" cy="12" r="1.3" fill="currentColor" />
        <path d="M5.5 8.6h13M12 9.5v2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-[#C9A84C]/45 bg-[#050b14] text-white shadow-[inset_0_1px_0_rgba(201,168,76,0.12)]">
      {/* Subtle depth below brand navy — contrasts with logo & gold type */}
      <div
        className="pointer-events-none absolute inset-0 opacity-100 bg-[radial-gradient(ellipse_140%_80%_at_50%_-20%,rgba(15,53,104,0.34),transparent_52%)]"
        aria-hidden
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.1fr_1fr_1.1fr_1fr] gap-8 items-start">

          {/* Column 1 — Brand */}
          <div className="flex flex-col items-start gap-3">
            <Link
              href="/"
              className="inline-flex bg-transparent p-0 outline-none ring-0 transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A84C]"
              aria-label="Adam City Tours — Home"
            >
              <BrandWordmark variant="footer" />
            </Link>

            {/* Social icons — luxury circles, brand-colored icons */}
            <div className="flex gap-3 mt-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={
                    {
                      ["--social-grad" as string]: s.hoverGradient,
                      ["--social-glow" as string]: s.glow,
                      ["--social-color" as string]: s.iconColor,
                    } as React.CSSProperties
                  }
                  className="footer-social group relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/90 shadow-[0_6px_18px_-10px_rgba(15,23,42,0.35)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A84C]"
                >
                  {/* Brand gradient reveal on hover */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: "var(--social-grad)" }}
                  />
                  {/* Soft inner shine on hover */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(60% 60% at 50% 35%, rgba(255,255,255,0.35) 0%, transparent 70%)",
                    }}
                  />
                  {/* Icon — brand color at rest, white on hover */}
                  <span
                    className="relative z-10 transition-colors duration-500 group-hover:text-white"
                    style={{ color: "var(--social-color)" }}
                  >
                    {s.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Locations */}
          <div>
            <h3 className="text-[#C9A84C] font-semibold text-base font-[var(--font-playfair)] mb-3">
              Locations
            </h3>
            <ul className="space-y-1.5 text-sm text-white">
              <li className="flex items-start gap-1.5">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/70 shrink-0" />
                <Link href="/destinations/essaouira" className="hover:text-[#C9A84C] transition-colors">About Essaouira</Link>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/70 shrink-0" />
                <Link href="/destinations/chefchaouen" className="hover:text-[#C9A84C] transition-colors">About Chefchaouen</Link>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/70 shrink-0" />
                <Link href="/destinations/fes" className="hover:text-[#C9A84C] transition-colors">About Fes</Link>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/70 shrink-0" />
                <Link href="/destinations/casablanca" className="hover:text-[#C9A84C] transition-colors">About Casablanca</Link>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/70 shrink-0" />
                <Link href="/destinations/merzouga" className="hover:text-[#C9A84C] transition-colors">About Merzouga</Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — TripAdvisor badge */}
          <div>
            <h3 className="text-[#C9A84C] font-semibold text-base font-[var(--font-playfair)] mb-3">
              We are Tripadvisor
            </h3>
            <a
              href="https://www.tripadvisor.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TripAdvisor profile"
              className="inline-flex items-center justify-center w-[110px] h-[110px] border-[5px] border-[#00AA6C] bg-[#34E0A1] text-white rounded-full relative shadow-[inset_0_0_0_4px_#00C47D] hover:brightness-110 transition-all duration-300"
            >
              <div className="text-center leading-tight">
                <div className="text-[8px] font-bold uppercase tracking-wide mb-1 text-[#003d28]">Tripadvisor Rentals</div>
                <svg className="w-8 h-8 mx-auto mb-1 text-[#003d28]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="7.5" cy="12" r="4.25" strokeWidth="1.9" />
                  <circle cx="16.5" cy="12" r="4.25" strokeWidth="1.9" />
                  <circle cx="7.5" cy="12" r="1.45" fill="currentColor" stroke="none" />
                  <circle cx="16.5" cy="12" r="1.45" fill="currentColor" stroke="none" />
                  <path d="M5.5 8.6h13M12 9.5v2" strokeWidth="1.9" strokeLinecap="round" />
                </svg>
                <div className="text-[8px] font-black uppercase tracking-wide text-[#003d28]">Premium Partner</div>
              </div>
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[68px] h-3 bg-[#00AA6C]" />
            </a>
          </div>

          {/* Column 5 — Trust points */}
          <div className="space-y-4">
            <div>
              <p className="text-white text-sm font-semibold leading-snug">100% trusted reviews</p>
              <p className="text-white/75 text-sm leading-snug">Excellency is our motto</p>
            </div>
            <div>
              <p className="text-white text-sm font-semibold leading-snug">24/7 support</p>
              <p className="text-white/75 text-sm leading-snug">anytime and anywhere</p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
