import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookingForm } from "@/components/booking-form";
import { getTripBySlug, getTrips } from "@/lib/symfony-api";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  const { items } = await getTrips();
  return items.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const trip = await getTripBySlug(params.slug);
  if (!trip) return { title: "Trip not found" };
  return {
    title: `${trip.title} | Travel Nepal`,
    description: trip.summary,
  };
}

function formatPrice(trip: Awaited<ReturnType<typeof getTripBySlug>>) {
  if (!trip?.priceFrom) return "Price on request";
  const p = trip.priceFrom;
  const sym = p.currency === "USD" ? "US$" : p.currency === "GBP" ? "£" : p.currency;
  return `From ${sym}${p.amount} per person (indicative)`;
}

export default async function TripDetailPage({ params }: Props) {
  const trip = await getTripBySlug(params.slug);
  if (!trip) notFound();

  return (
    <article className="pb-20">
      <div className="relative h-[min(52vh,420px)] w-full bg-stone-900">
        {trip.imageUrl ? (
          <Image
            src={trip.imageUrl}
            alt={trip.title}
            fill
            priority
            className="object-cover opacity-90"
            sizes="100vw"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-6xl px-4 pb-10 sm:px-6">
          <p className="text-sm font-medium text-emerald-300">
            {trip.durationDays} days · {trip.difficultyLevel}
          </p>
          <h1 className="mt-2 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {trip.title}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-stone-200">{trip.summary}</p>
          <p className="mt-4 text-base font-semibold text-white">{formatPrice(trip)}</p>
        </div>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl gap-12 px-4 lg:grid-cols-3 sm:px-6">
        <div className="lg:col-span-2">
          {trip.description ? (
            <section className="mb-10 rounded-xl border border-stone-200 bg-white p-5">
              <h2 className="text-xl font-semibold text-stone-900">Trip Overview</h2>
              <div className="mt-4 space-y-3 text-sm leading-6 text-stone-700">
                {trip.description.split("\n\n").map((paragraph, index) => (
                  <p key={`overview-${index}`}>{paragraph}</p>
                ))}
              </div>
            </section>
          ) : null}

          {trip.services ? (
            <section className="mb-10 rounded-xl border border-stone-200 bg-white p-5">
              <h2 className="text-xl font-semibold text-stone-900">Services</h2>
              <div className="mt-5 grid gap-6 sm:grid-cols-3">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-800">
                    Included
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-stone-700">
                    {trip.services.included.map((item) => (
                      <li key={`included-${item}`} className="flex gap-2">
                        <span className="mt-[1px] text-emerald-700">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-amber-800">
                    Excluded
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-stone-700">
                    {trip.services.excluded.map((item) => (
                      <li key={`excluded-${item}`} className="flex gap-2">
                        <span className="mt-[1px] text-amber-700">-</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-800">
                    Optional
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-stone-700">
                    {trip.services.optional.map((item) => (
                      <li key={`optional-${item}`} className="flex gap-2">
                        <span className="mt-[1px] text-blue-700">+</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          ) : null}

          <h2 className="text-xl font-semibold text-stone-900">Itinerary</h2>
          <ol className="mt-6 space-y-6">
            {(trip.days ?? []).map((d) => (
              <li
                key={d.dayNumber}
                className="flex gap-4 border-b border-stone-100 pb-6 last:border-0"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-900">
                  {d.dayNumber}
                </span>
                <div>
                  <h3 className="flex items-center gap-2 font-medium text-stone-900">
                    <span>{d.title}</span>
                    {d.details ? (
                      <a
                        href={`#day-${d.dayNumber}-details`}
                        className="text-xs text-emerald-700 hover:text-emerald-900"
                        aria-label={`Jump to detailed itinerary for day ${d.dayNumber}`}
                        title={`View details for day ${d.dayNumber}`}
                      >
                        🔎
                      </a>
                    ) : null}
                  </h3>
                  {d.destinationName ? (
                    <p className="text-xs font-medium uppercase tracking-wide text-emerald-800">
                      {d.destinationName}
                    </p>
                  ) : null}
                  <p className="mt-1 text-sm text-stone-600">{d.description}</p>
                </div>
              </li>
            ))}
          </ol>
          {(!trip.days || trip.days.length === 0) && (
            <p className="mt-4 text-sm text-stone-500">
              Day-by-day detail will appear when your API includes nested template days.
            </p>
          )}
          {trip.days?.some((d) => d.details) ? (
            <section className="mt-12">
              <h2 className="text-xl font-semibold text-stone-900">Detailed Itinerary</h2>
              <div className="mt-6 space-y-8">
                {trip.days.map((d) => (
                  <article
                    key={`detail-${d.dayNumber}`}
                    id={`day-${d.dayNumber}-details`}
                    className="scroll-mt-24 rounded-xl border border-stone-200 bg-white p-5"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800">
                      Day {d.dayNumber}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-stone-900">{d.description}</h3>
                    <p className="mt-1 text-sm text-stone-600">{d.title}</p>
                    {d.details ? (
                      <div className="mt-4 space-y-3 text-sm leading-6 text-stone-700">
                        {d.details.split("\n\n").map((paragraph, index) => (
                          <p key={`${d.dayNumber}-${index}`}>{paragraph}</p>
                        ))}
                      </div>
                    ) : null}
                    {d.meals ? (
                      <p className="mt-4 text-sm font-medium text-stone-900">{d.meals}</p>
                    ) : null}
                  </article>
                ))}
              </div>
            </section>
          ) : null}
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-24 rounded-2xl border border-stone-200 bg-stone-50 p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-stone-900">Book this trip</h2>
            <p className="mt-2 text-sm text-stone-600">
              Submit details to create a booking. Payment can be a redirect URL from Symfony
              (Stripe Checkout, etc.) or handled offline.
            </p>
            <div className="mt-6">
              <BookingForm trip={trip} />
            </div>
            <Link
              href="/trips"
              className="mt-6 inline-block text-sm font-medium text-emerald-800 hover:text-emerald-950"
            >
              ← All trips
            </Link>
          </div>
        </aside>
      </div>
    </article>
  );
}
