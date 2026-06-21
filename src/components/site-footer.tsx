import Link from "next/link";
import { AiChatTrigger } from "@/components/ai-chat";
import { DESTINATIONS, SITE } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-charcoal-200 bg-charcoal-950 text-charcoal-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-charcoal-900/40 px-6 py-8 sm:px-10 sm:py-10">
          <div className="grid gap-10 lg:grid-cols-[1fr,1fr,auto] lg:gap-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-300">United Kingdom desk</p>
              <p className="mt-3 text-sm leading-relaxed text-charcoal-200">
                {SITE.ukRegistrationNote}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-300">Nepal ground operations</p>
              <p className="mt-3 text-sm leading-relaxed text-charcoal-200">
                {SITE.address}: trekking permits, lodges, transfers, briefing hosts, audited partner coordination for
                active departures—with senior Sherpa-led guide teams translating route reality daily.
              </p>
              <ul className="mt-5 space-y-1.5 text-sm">
                <li>
                  <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="font-medium hover:text-white">
                    {SITE.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${SITE.email}`} className="hover:text-white">
                    {SITE.email}
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:max-w-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-charcoal-500">Booking note</p>
              <p className="mt-3 text-xs leading-relaxed text-charcoal-400">
                {SITE.atolTransparencyLine}
              </p>
              <div className="mt-8 flex flex-wrap gap-6">
                <div>
                  <p className="font-display text-lg font-semibold text-white">{SITE.name}</p>
                  <p className="mt-1 text-[0.9375rem] font-medium leading-snug text-charcoal-200">{SITE.brandSlogan}</p>
                  <p className="mt-5 text-[0.9375rem] leading-relaxed text-charcoal-200">{SITE.tagline}</p>
                </div>
                <AiChatTrigger
                  showIcon
                  className="flex h-fit items-center gap-2 self-start rounded-full bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-800"
                >
                  Ask our AI assistant
                </AiChatTrigger>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-white">Confidence statement</p>
            <blockquote className="mt-5 border-l-4 border-brand-500 pl-5 text-[0.9375rem] leading-relaxed text-charcoal-100">
              {SITE.tagline}{" "}
              We combine disciplined UK-trip coordination with on-the-ground execution in Kathmandu: transparent itineraries,
              senior Sherpa-led guides, and partners we vet continuously for safety culture and fairness.
            </blockquote>
          </div>

          <div className="lg:col-span-1">
            <p className="text-sm font-semibold uppercase tracking-wider text-white">Destinations</p>
            <ul className="mt-5 space-y-2.5 text-sm">
              {DESTINATIONS.map((d) => (
                <li key={d.slug}>
                  <Link href={`/destinations/${d.slug}`} className="transition hover:text-white">
                    {d.name} region
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white">Navigation</p>
            <ul className="mt-5 space-y-2.5 text-sm">
              <li>
                <Link href="/trips" className="transition hover:text-white">
                  All trekking routes
                </Link>
              </li>
              <li>
                <Link href="/plan" className="transition hover:text-white">
                  Plan your trip
                </Link>
              </li>
              <li>
                <Link href="/#faq-heading" className="transition hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/#uk-nepal-trust-heading" className="transition hover:text-white">
                  UK &amp; Nepal model
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white">Newsletter pulse</p>
            <form className="mt-5" action="#" aria-label="Newsletter signup">
              <label htmlFor="newsletter-email" className="text-xs uppercase tracking-[0.2em] text-charcoal-500">
                Himalayan field notes — occasional
              </label>
              <div className="mt-3 flex gap-2">
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="name@yourdomain.uk"
                  className="min-w-0 flex-1 rounded-xl border border-charcoal-700 bg-charcoal-900 px-4 py-2.5 text-sm text-white placeholder:text-charcoal-500 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-xl bg-brand-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-600"
                >
                  Join
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-charcoal-800 pt-10 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p className="text-charcoal-500">
            © {new Date().getFullYear()} {SITE.name}. UK-arranged Himalayan expeditions coordinating Nepal-ground specialists.
          </p>
          <div className="flex flex-wrap gap-5">
            <Link href="/" className="text-charcoal-400 hover:text-white">
              Privacy
            </Link>
            <Link href="/" className="text-charcoal-400 hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
