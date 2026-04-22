import { SITE_URL } from "@/lib/site";

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TravelAgency",
      "@id": `${SITE_URL}/#business`,
      name: "Mortours",
      alternateName: "MorTours",
      url: SITE_URL,
      description:
        "Premium guided tours and luxury travel experiences across Morocco — desert camps, imperial cities, Atlas mountains, and tailored private journeys.",
      image: `${SITE_URL}/images/hero-desert.png`,
      logo: `${SITE_URL}/logo.png`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Marrakesh",
        postalCode: "40000",
        addressCountry: "MA",
      },
      telephone: "+212664096436",
      email: "berbersurfguide@gmail.com",
      sameAs: ["https://www.instagram.com/mortoursx"],
      areaServed: {
        "@type": "Country",
        name: "Morocco",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Mortours",
      inLanguage: "en-US",
      publisher: { "@id": `${SITE_URL}/#business` },
    },
  ],
};

/** Organization + WebSite JSON-LD for rich results and knowledge panels. */
export default function SiteJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
