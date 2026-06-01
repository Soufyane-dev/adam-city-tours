import { SITE_URL } from "@/lib/site";
import { BRAND_OG_IMAGE_PATH } from "@/lib/brand-logo";

const brandImageUrl = `${SITE_URL}${BRAND_OG_IMAGE_PATH}`;

function buildGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        "@id": `${SITE_URL}/#business`,
        name: "Adam City Tours",
        url: SITE_URL,
        description:
          "Premium guided tours and luxury travel experiences across Morocco — desert camps, imperial cities, Atlas mountains, and tailored private journeys.",
        image: brandImageUrl,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Douar Sidi Moussa, Magasin N°2, Tasseltant, Saada, N°351",
          addressLocality: "Marrakech",
          postalCode: "40000",
          addressCountry: "MA",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 31.6295,
          longitude: -7.9811,
        },
        telephone: "+212666453540",
        email: "adamcitytours274@gmail.com",
        sameAs: [
          "https://www.facebook.com/adamcitytours",
          "https://www.instagram.com/adamcitytours/",
        ],
        areaServed: {
          "@type": "Country",
          name: "Morocco",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Adam City Tours",
        inLanguage: "en-US",
        publisher: { "@id": `${SITE_URL}/#business` },
      },
    ],
  };
}

/** Organization + WebSite JSON-LD for rich results and knowledge panels. */
export default function SiteJsonLd() {
  const graph = buildGraph();
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
