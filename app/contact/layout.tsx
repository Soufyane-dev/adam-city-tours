import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Book Your Morocco Trip",
  description:
    "Reach Adam City Tours to plan a private Morocco tour, request a quote, or ask about desert camps, riads, and custom itineraries. Phone, email, and Marrakesh base.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Adam City Tours",
    description:
      "Plan your Morocco journey with our team — bespoke tours, luxury stays, and trusted local guides.",
    url: "/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
