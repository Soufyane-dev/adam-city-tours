import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery — Morocco Travel Photography",
  description:
    "Photo gallery from Mortours journeys: Sahara camps, Chefchaouen, Marrakech, Atlas roads, and curated luxury Morocco experiences.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Mortours Gallery",
    description: "Moments from our Morocco tours — desert, cities, and mountain roads.",
    url: "/gallery",
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
