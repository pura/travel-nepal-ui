import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { IconCalendar, IconWhatsApp, SiteIcon } from "@/components/ui/icons";
import { HeroInquiryBox } from "@/components/home/hero-inquiry-box";
import { getWhatsAppUrl, TRUST_BADGES } from "@/lib/site-config";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=85&auto=format&fit=crop";

const badgeIcons = {
  compass: "compass",
  users: "users",
  map: "map",
  headset: "headset",
} as const;

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      <Image
        src={HERO_IMAGE}
        alt="Himalayan peaks at sunrise in Nepal"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="hero-gradient absolute inset-0" aria-hidden />

      <Container className="relative flex min-h-[92vh] flex-col justify-end pb-12 pt-28 sm:pb-16 lg:pb-20">
        <div className="max-w-3xl animate-fade-in">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
            Nepal · curated by locals
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[3.75rem]">
            Explore Nepal Beyond the Guidebooks
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl">
            Handcrafted treks, culture, and wildlife journeys — planned by experts who
            call these mountains home.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
            <ButtonLink href="/plan" variant="primary" size="lg" className="shadow-soft">
              <span className="inline-flex shrink-0 opacity-95" aria-hidden>
                <IconCalendar className="h-5 w-5" />
              </span>
              Plan your trip
            </ButtonLink>
            <ButtonLink
              href={getWhatsAppUrl("Hi! I'd like help planning a trip to Nepal.")}
              variant="whatsapp"
              size="lg"
              className="shadow-soft"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWhatsApp className="h-5 w-5 shrink-0" />
              Chat on WhatsApp
            </ButtonLink>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 sm:gap-x-8">
            {TRUST_BADGES.map((badge) => (
              <li key={badge.label} className="flex items-center gap-2 text-sm text-white/90">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
                  <SiteIcon
                    name={badgeIcons[badge.icon]}
                    className="h-4 w-4 text-white"
                  />
                </span>
                {badge.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 w-full max-w-2xl animate-slide-up lg:mt-14">
          <HeroInquiryBox />
        </div>
      </Container>
    </section>
  );
}
