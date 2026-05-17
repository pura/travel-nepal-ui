import { SITE, SITE_SLOGAN, getWhatsAppUrl } from "@/lib/site-config";

export function HomeJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": `${SITE.url}#agency`,
    name: SITE.name,
    slogan: SITE_SLOGAN,
    url: SITE.url,
    description:
      "UK-arranged Himalayan trekking specialist coordinating Everest-region, Annapurna, Langtang, Mustang treks—and bespoke Nepal trekking holidays via trusted Kathmandu-ground partners.",
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "United Kingdom",
        containedInPlace: { "@type": "Country", name: "United Kingdom" },
      },
      {
        "@type": "Country",
        name: "Nepal",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kathmandu",
      addressCountry: "NP",
      streetAddress: SITE.address.replace(/^Operations:\s*/i, ""),
    },
    email: SITE.email,
    telephone: SITE.phone,

    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "120",
    },
    sameAs: [getWhatsAppUrl()],
    knowsAbout: [
      "Everest Base Camp trekking",
      "Annapurna trekking",
      "Nepal trekking company UK",
      "Nepal adventure travel",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
