import Link from "next/link";
import { IconWhatsApp } from "@/components/ui/icons";
import { DESTINATIONS, getWhatsAppUrl, SITE } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-charcoal-200 bg-charcoal-950 text-charcoal-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <p className="font-display text-xl font-semibold text-white">{SITE.name}</p>
            <p className="mt-2 text-sm leading-relaxed">{SITE.tagline}</p>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1fb855]"
            >
              <IconWhatsApp className="h-5 w-5" />
              WhatsApp us
            </a>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white">
              Destinations
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {DESTINATIONS.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={`/trips?region=${d.slug}`}
                    className="transition hover:text-white"
                  >
                    {d.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white">
              Explore
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/trips" className="transition hover:text-white">
                  All tours
                </Link>
              </li>
              <li>
                <Link href="/#plan-trip" className="transition hover:text-white">
                  Custom itinerary
                </Link>
              </li>
              <li>
                <Link href="/#faq-heading" className="transition hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>{SITE.address}</li>
              <li>
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="hover:text-white">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-white">
                  {SITE.email}
                </a>
              </li>
            </ul>
            <form className="mt-6" action="#" aria-label="Newsletter signup">
              <label htmlFor="newsletter-email" className="text-sm font-medium text-white">
                Newsletter
              </label>
              <div className="mt-2 flex gap-2">
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Your email"
                  className="min-w-0 flex-1 rounded-lg border border-charcoal-700 bg-charcoal-900 px-3 py-2 text-sm text-white placeholder:text-charcoal-500 focus:border-brand-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-lg bg-brand-700 px-3 py-2 text-sm font-semibold text-white hover:bg-brand-600"
                >
                  Join
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-charcoal-800 pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/" className="hover:text-white">
              Terms
            </Link>
            <a
              href="https://www.tripadvisor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              TripAdvisor
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
