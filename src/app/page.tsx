import Link from "next/link";
import { TripCard } from "@/components/trip-card";
import { getTrips } from "@/lib/symfony-api";

export default async function HomePage() {
  const { items } = await getTrips();
  const featured = items.slice(0, 3);

  return (
    <>
      <section className="border-b border-stone-200 bg-gradient-to-b from-emerald-950 to-emerald-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <p className="text-sm font-medium uppercase tracking-wide text-emerald-300">
            Nepal · small-group style trips
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Plan your journey with itineraries built by local experts
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-emerald-100">
            Browse published routes, compare duration and pace, then book securely. Your
            Symfony admin remains the source of truth for templates, hotels, and pricing
            signals.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/trips"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-900 shadow transition hover:bg-emerald-50"
            >
              See all trips
            </Link>
            <Link
              href="/#how-it-works"
              className="rounded-full border border-emerald-400/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800/50"
            >
              How it works
            </Link>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-stone-900">How it works</h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {[
            {
              step: "1",
              title: "Tell us what fits",
              body: "Filter by days, difficulty, and trip style — same clarity as a package grid.",
            },
            {
              step: "2",
              title: "Review the day plan",
              body: "Open an itinerary to see daily structure before you commit.",
            },
            {
              step: "3",
              title: "Book & pay",
              body: "Submit traveler details; Symfony can return a payment URL or staff follow-up.",
            },
          ].map((s) => (
            <div key={s.step} className="text-center">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-lg font-bold text-emerald-900">
                {s.step}
              </span>
              <h3 className="mt-4 font-semibold text-stone-900">{s.title}</h3>
              <p className="mt-2 text-sm text-stone-600">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-stone-200 bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-2xl font-bold text-stone-900">Featured trips</h2>
              <p className="mt-2 text-stone-600">
                A starter set of listings; replace with live catalog via API.
              </p>
            </div>
            <Link
              href="/trips"
              className="text-sm font-semibold text-emerald-800 hover:text-emerald-950"
            >
              View all →
            </Link>
          </div>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((trip) => (
              <TripCard key={trip.slug} trip={trip} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
