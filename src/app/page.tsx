import { HomeJsonLd } from "@/components/home/home-json-ld";
import { DestinationsSection } from "@/components/home/destinations-section";
import { FaqSection } from "@/components/home/faq-section";
import { FeaturedToursSection } from "@/components/home/featured-tours-section";
import { HeroSection } from "@/components/home/hero-section";
import { InquiryCtaSection } from "@/components/home/inquiry-cta-section";
import { PartnersSection } from "@/components/home/partners-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { WhyBookSection } from "@/components/home/why-book-section";
import { getFeaturedTrips } from "@/lib/trip-catalog";
import { getTrips } from "@/lib/symfony-api";

export default async function HomePage() {
  const { items } = await getTrips();
  const featured = getFeaturedTrips(items, 6);

  return (
    <>
      <HomeJsonLd />
      <HeroSection />
      <FeaturedToursSection trips={featured} />
      <WhyBookSection />
      <DestinationsSection />
      <InquiryCtaSection />
      <PartnersSection />
      <TestimonialsSection />
      <FaqSection />
    </>
  );
}
