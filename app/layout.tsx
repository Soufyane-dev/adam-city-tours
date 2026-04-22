import type { Metadata } from "next";
import { Playfair_Display, Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import FloatingContact from "@/components/FloatingContact";
import KarimGuideDynamic from "@/components/KarimGuideDynamic";
import SiteJsonLd from "@/components/SiteJsonLd";
import { SITE_URL } from "@/lib/site";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bebas = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mortours — Discover Morocco in Style",
    template: "%s | Mortours",
  },
  description:
    "Experience the magic of Morocco with Mortours. Premium guided tours, luxury desert camps, and unforgettable cultural journeys tailored to you.",
  keywords: [
    "Morocco tours",
    "Marrakech tours",
    "Sahara desert",
    "Morocco travel",
    "guided tours Morocco",
    "luxury travel Morocco",
  ],
  openGraph: {
    title: "Mortours — Discover Morocco in Style",
    description:
      "Experience the magic of Morocco with Mortours. Premium guided tours, luxury desert camps, and unforgettable cultural journeys tailored to you.",
    siteName: "Mortours",
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    images: [
      {
        url: "/images/hero-desert.png",
        width: 1200,
        height: 630,
        alt: "Mortours luxury travel in Morocco",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mortours — Discover Morocco in Style",
    description:
      "Premium Morocco tours with private transport, trusted local guides, and elegant stays.",
    images: ["/images/hero-desert.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${playfair.variable} ${inter.variable} ${bebas.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)] transition-colors duration-500 font-[var(--font-inter)] antialiased">
        <SiteJsonLd />
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingContact />
          <KarimGuideDynamic />
        </ThemeProvider>
      </body>
    </html>
  );
}
