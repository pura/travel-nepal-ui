import type { Metadata } from "next";
import { HomeJsonLd } from "@/components/home/home-json-ld";
import { DestinationsSection } from "@/components/home/destinations-section";
import { FaqSection } from "@/components/home/faq-section";
import { FeaturedToursSection } from "@/components/home/featured-tours-section";
import { HeroSection } from "@/components/home/hero-section";
import { InquiryCtaSection } from "@/components/home/inquiry-cta-section";
import { PartnersSection } from "@/components/home/partners-section";
import { UkNepalTrustSection } from "@/components/home/uk-nepal-trust-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { WhyBookSection } from "@/components/home/why-book-section";
import { SITE } from "@/lib/site-config";
import { getFeaturedTrips } from "@/lib/trip-catalog";
import { getTrips } from "@/lib/symfony-api";

const pageTitle = "Nepal trekking company UK | Everest & Annapurna specialists";
const pageDescription =
  `${SITE.name} — UK-based Nepal trekking company organising Everest Base Camp trekking, Annapurna trekking routes, customised Nepal trekking tours & adventure travel—with trusted Kathmandu partners, transparent pricing & UK-side accountability before you depart.`;

export const metadata: Metadata = {
  title: {
    absolute: `${pageTitle} | ${SITE.name}`,
  },
  description: pageDescription,
  alternates: { canonical: "/" },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: SITE.url,
  },
  keywords: [
    "Nepal trekking company UK",
    "UK based Nepal trekking",
    "Nepal trekking tours",
    "Everest Base Camp trek UK",
    "Annapurna trekking Nepal",
    "Nepal adventure travel",
    "trek Nepal with UK operator",
    "Nepal hiking holidays",
    "Nepal trekking specialist",
    "Nepal trekking small group",
    "Nepal customised trek",
  ],
};

export default async function HomePage() {
  const { items } = await getTrips();
  const featured = getFeaturedTrips(items, 6);

  return (
    <>
      <HomeJsonLd />
      <HeroSection />
      <FeaturedToursSection trips={featured} />
      <WhyBookSection />
      <UkNepalTrustSection />
      <DestinationsSection />
      <InquiryCtaSection />
      <PartnersSection />
      <TestimonialsSection />
      <FaqSection />
    </>
  );
}
