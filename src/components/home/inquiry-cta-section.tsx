import { Container } from "@/components/ui/container";
import { IconWhatsApp } from "@/components/ui/icons";
import { InquiryForm } from "@/components/home/inquiry-form";
import { getWhatsAppUrl } from "@/lib/site-config";

export function InquiryCtaSection() {
  return (
    <section
      id="plan-trip"
      className="section-padding relative overflow-hidden bg-brand-900"
      aria-labelledby="plan-trip-heading"
    >
      <div
        className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-brand-700/40 blur-3xl"
        aria-hidden
      />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-200">
              Custom itineraries
            </p>
            <h2
              id="plan-trip-heading"
              className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            >
              Get a free custom itinerary within 24 hours
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-100">
              Tell us your dates, interests, and travel style. Our Kathmandu team will
              craft a personalized plan — no obligation, no spam.
            </p>
            <a
              href={getWhatsAppUrl("Hi! I'd like a free custom Nepal itinerary.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:bg-[#1fb855]"
            >
              <IconWhatsApp className="h-5 w-5" />
              Chat on WhatsApp instead
            </a>
          </div>
          <InquiryForm />
        </div>
      </Container>
    </section>
  );
}
