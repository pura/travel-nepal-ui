import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { IconCalendar, IconWhatsApp, SiteIcon } from "@/components/ui/icons";
import { HeroInquiryBox } from "@/components/home/hero-inquiry-box";
import { getWhatsAppUrl, TRUST_BADGES } from "@/lib/site-config";
import type { IconName } from "@/components/ui/icons";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=85&auto=format&fit=crop";

const badgeIcons = {
  compass: "compass",
  users: "users",
  route: "route",
  headset: "headset",
} as const satisfies Record<(typeof TRUST_BADGES)[number]["icon"], IconName>;

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      <Image
        src={HERO_IMAGE}
        alt="Snow-capped Annapurna range at sunrise behind a trekking ridge in Nepal"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="hero-gradient absolute inset-0" aria-hidden />

      <Container className="relative flex min-h-[92vh] flex-col justify-end pb-12 pt-28 sm:pb-16 lg:pb-20">
        <div className="max-w-3xl animate-fade-in">
          <p className="text-sm font-semibold tracking-wide text-white/90">
            Designed in the UK · Delivered in Nepal
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-[3.25rem] xl:text-[3.5rem]">
            Explore Nepal with People Who Know It Best
          </h1>
          <div className="mt-6 max-w-xl rounded-2xl border border-white/25 bg-white/[0.06] px-5 py-5 shadow-[0_12px_40px_rgba(0,0,0,0.12)] backdrop-blur-md">
            <h2 className="text-lg font-normal leading-relaxed text-white sm:text-xl [text-shadow:0_1px_12px_rgba(0,0,0,0.35)]">
              Handcrafted treks, culture, and wildlife journeys — planned by experts who call these mountains home,
              supported by UK-based team.
            </h2>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 sm:gap-4">
            <ButtonLink href="/plan" variant="primary" size="lg" className="shadow-lift motion-safe:transition-transform motion-safe:hover:translate-y-[-2px]">
              <span className="inline-flex shrink-0 opacity-95" aria-hidden>
                <IconCalendar className="h-5 w-5" />
              </span>
              Plan your trip
            </ButtonLink>
            <ButtonLink
              href={getWhatsAppUrl("Hello — I'd like to speak with a trekking specialist about trekking in Nepal.")}
              variant="whatsapp"
              size="lg"
              className="shadow-lift motion-safe:transition-transform motion-safe:hover:translate-y-[-2px]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWhatsApp className="h-5 w-5 shrink-0" aria-hidden />
              WhatsApp a local expert
            </ButtonLink>
          </div>

          <ul className="mt-11 flex flex-wrap gap-x-5 gap-y-3.5 rounded-3xl border border-white/15 bg-charcoal-950/25 px-4 py-4 backdrop-blur-sm sm:gap-x-7 sm:px-6">
            {TRUST_BADGES.map((badge) => (
              <li key={badge.label} className="flex items-center gap-2.5 text-sm font-medium tracking-tight text-white">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/18 backdrop-blur-sm ring-1 ring-white/25">
                  <SiteIcon name={badgeIcons[badge.icon]} className="h-4 w-4 text-white" />
                </span>
                <span>{badge.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-11 w-full max-w-2xl animate-slide-up lg:mt-14">
          <HeroInquiryBox />
        </div>
      </Container>
    </section>
  );
}
