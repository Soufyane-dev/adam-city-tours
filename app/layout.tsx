import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import FloatingContact from "@/components/FloatingContact";
import KarimGuideDynamic from "@/components/KarimGuideDynamic";
import SiteJsonLd from "@/components/SiteJsonLd";
import { SITE_URL } from "@/lib/site";
import {
  BRAND_ICON_PATH,
  BRAND_OG_HEIGHT,
  BRAND_OG_IMAGE_PATH,
  BRAND_OG_WIDTH,
} from "@/lib/brand-logo";

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0F3568" },
    { media: "(prefers-color-scheme: dark)", color: "#141C2C" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Adam City Tours — Discover Morocco",
    template: "%s | Adam City Tours",
  },
  description:
    "Agence de transport touristique au Maroc. Circuits premium, désert, Marrakech, montagnes et séjours sur mesure avec chauffeur-guide.",
  keywords: [
    "Morocco tours",
    "Marrakech tours",
    "Chefchaouen tours",
    "Fes Morocco",
    "Essaouira travel",
    "Merzouga desert tours",
    "Atlas mountains Morocco",
    "Sahara desert",
    "luxury Morocco",
    "private Morocco tours",
  ],
  openGraph: {
    title: "Adam City Tours — Discover Morocco",
    description:
      "Agence de transport touristique au Maroc. Tours privés, confort et accompagnement local.",
    siteName: "Adam City Tours",
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    images: [
      {
        url: BRAND_OG_IMAGE_PATH,
        width: BRAND_OG_WIDTH,
        height: BRAND_OG_HEIGHT,
        alt: "Adam City Tours — Discover Morocco — coastal Morocco",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adam City Tours — Discover Morocco",
    description:
      "Premium Morocco tours with private transport, trusted local guides, and elegant stays.",
    images: [BRAND_OG_IMAGE_PATH],
  },
  icons: {
    icon: BRAND_ICON_PATH,
    apple: BRAND_ICON_PATH,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
};

export default async function RootLayout({
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
