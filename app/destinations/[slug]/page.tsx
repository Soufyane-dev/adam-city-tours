import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDestinationBySlug, destinations } from "@/lib/destinations";
import DestinationDetailLayout from "@/components/DestinationDetailLayout";
import { fetchOpenMeteoCurrent } from "@/lib/weather";

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const dest = getDestinationBySlug(resolvedParams.slug);
  if (!dest) return { title: "Destination Not Found" };

  return {
    title: `${dest.name} | MorTours Majestic Destinations`,
    description: dest.shortDescription,
    alternates: { canonical: `/destinations/${resolvedParams.slug}` },
    openGraph: {
      title: `${dest.name} | Mortours`,
      description: dest.shortDescription,
      url: `/destinations/${resolvedParams.slug}`,
      images: [{ url: dest.image, alt: dest.name }],
    },
  };
}

export default async function DestinationPage({ params }: Props) {
  const resolvedParams = await params;
  const dest = getDestinationBySlug(resolvedParams.slug);

  if (!dest) {
    notFound();
  }

  const weather = await fetchOpenMeteoCurrent(
    dest.coordinates.lat,
    dest.coordinates.lon,
    "next",
    1800
  );

  return <DestinationDetailLayout dest={dest} weather={weather} />;
}
