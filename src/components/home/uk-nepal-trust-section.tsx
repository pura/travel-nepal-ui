import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { IconShieldCheck } from "@/components/ui/icons";
import { SITE } from "@/lib/site-config";

const SPLIT_IMAGE =
  "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=85&auto=format&fit=crop";

export function UkNepalTrustSection() {
  return (
    <section
      id="uk-nepal-trust-heading"
      className="section-padding scroll-mt-28 bg-charcoal-950 text-white [&_h2]:text-white [&_.text-charcoal-600]:text-charcoal-200 [&_.text-brand-600]:text-brand-300 [&_.text-charcoal-900]:text-white"
      aria-labelledby="uk-nepal-heading"
    >
      <Container>
        <div id="uk-nepal-heading">
          <SectionHeading
            eyebrow="How we operate"
            title="UK certainty with Himalayan delivery"
            description={`${SITE.brandSlogan}. Straight answers on fees, cancellations, pacing, lodging, safety—and trekking leaders who genuinely read Nepal’s alpine weather.`}
            align="center"
            as="h2"
          />
        </div>

        <div className="mt-14 overflow-hidden rounded-4xl border border-white/10 bg-charcoal-900/50 shadow-lift lg:grid lg:grid-cols-2 lg:gap-0 lg:rounded-4xl">
          <div className="relative min-h-[280px] lg:min-h-[480px]">
            <Image
              src={SPLIT_IMAGE}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
              aria-hidden
            />
          </div>

          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-200">
              <IconShieldCheck className="h-4 w-4 text-brand-200" />
              Trust-first model
            </div>

            <p className="mt-5 font-display text-xl font-semibold leading-snug text-white sm:text-2xl lg:text-[1.35rem]">
              British booking standards—with Kathmandu teams guiding every logistical edge case on the trek.
            </p>

            <ul className="mt-10 space-y-8 text-sm leading-relaxed text-charcoal-200 sm:text-[0.9375rem]">
              <li className="border-l-2 border-brand-500 pl-6">
                <p className="font-semibold text-white">Trusted UK trekking company</p>
                <p className="mt-2">
                  You receive clarity on quotes, confirmations, amendments, cancellations, payment schedules, briefing
                  documents, and proactive notice if anything shifts—handled from the UK side you already trust.
                </p>
              </li>
              <li className="border-l-2 border-white/20 pl-6">
                <p className="font-semibold text-white">Operational execution via Nepal specialists</p>
                <p className="mt-2">
                  Our Kathmandu-ground partners secure permits, lodges, jeep transfers, guide pairings, safety briefings,
                  and contingency nights—matching route difficulty to your pacing and adjusting when weather demands.
                </p>
              </li>
              <li className="border-l-2 border-white/20 pl-6">
                <p className="font-semibold text-white">Experts you trek alongside</p>
                <p className="mt-2">
                  Sherpa-leading teams with seasoned altitude judgement—not rotating temps. Fluent English where you
                  need it, ruthless attention to pacing, hydration, nightly checks where itineraries warrant.
                </p>
              </li>
              <li className="border-l-2 border-white/20 pl-6">
                <p className="font-semibold text-white">Flights versus Nepal ground—we stay in our lane</p>
                <p className="mt-2">
                  Most climbers book flights themselves for flexibility—we engineer every moving part beyond immigration
                  in Kathmandu toward your Himalayan objective.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
