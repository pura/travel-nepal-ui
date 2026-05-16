import { SITE, getWhatsAppUrl } from "@/lib/site-config";

export function HomeJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: SITE.name,
    url: SITE.url,
    description:
      "Premium Nepal tours and treks — custom itineraries crafted by local experts.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kathmandu",
      addressCountry: "NP",
      streetAddress: SITE.address,
    },
    telephone: SITE.phone,
    email: SITE.email,
    sameAs: [getWhatsAppUrl()],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "120",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
