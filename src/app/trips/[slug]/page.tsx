import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookingForm } from "@/components/booking-form";
import { getTripBySlug, getTrips } from "@/lib/symfony-api";
import type { PublicTrip, PublicTripDay } from "@/types/trip";

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

function currencySymbol(currency: string) {
  if (currency === "USD") return "US$";
  if (currency === "GBP") return "£";
  if (currency === "EUR") return "€";
  if (currency === "NPR") return "Rs ";
  return `${currency} `;
}

function formatPriceFrom(trip: PublicTrip) {
  if (!trip.priceFrom) return "Price on request";
  const p = trip.priceFrom;
  return `From ${currencySymbol(p.currency)}${p.amount} per person (indicative)`;
}

function hasGlanceFacts(trip: PublicTrip) {
  return (
    trip.totalDistanceKm != null ||
    trip.altitudeMaxM != null ||
    trip.altitudeMinM != null ||
    (trip.routeGrades && trip.routeGrades.length > 0) ||
    (trip.fitnessNotes && trip.fitnessNotes.length > 0) ||
    (trip.recommendedSeasons && trip.recommendedSeasons.length > 0)
  );
}

function DayStats({ day }: { day: PublicTripDay }) {
  const bits: { label: string; value: string }[] = [];
  if (day.distanceKm != null) bits.push({ label: "Distance", value: `${day.distanceKm} km` });
  if (day.altitudeMaxM != null && day.altitudeMinM != null) {
    bits.push({
      label: "Altitude",
      value: `(↑) ${day.altitudeMaxM} m · (↓) ${day.altitudeMinM} m`,
    });
  }
  if (day.durationHours != null) {
    bits.push({
      label: "Duration",
      value: `${day.durationHours} h`,
    });
  }
  if (day.accommodation) bits.push({ label: "Stay", value: day.accommodation });
  if (bits.length === 0) return null;
  return (
    <ul className="mt-3 flex flex-wrap gap-2">
      {bits.map((b) => (
        <li
          key={`${day.dayNumber}-${b.label}`}
          className="rounded-lg border border-stone-200 bg-stone-50 px-2.5 py-1 text-xs text-stone-700"
        >
          <span className="font-semibold text-stone-900">{b.label}: </span>
          {b.value}
        </li>
      ))}
    </ul>
  );
}

export default async function TripDetailPage({ params }: Props) {
  const trip = await getTripBySlug(params.slug);
  if (!trip) notFound();

  const glance = hasGlanceFacts(trip);

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
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <p className="text-base font-semibold text-white">{formatPriceFrom(trip)}</p>
            {trip.recommendedSeasons && trip.recommendedSeasons.length > 0 ? (
              <p className="text-sm text-emerald-100/90">
                Best seasons: {trip.recommendedSeasons.join(" · ")}
              </p>
            ) : null}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-10">
          {glance ? (
            <section className="rounded-2xl border border-emerald-900/15 bg-gradient-to-br from-emerald-50/90 to-stone-50 p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-stone-900">At a glance</h2>
              <dl className="mt-5 grid gap-4 sm:grid-cols-2">
                {trip.totalDistanceKm != null ? (
                  <div className="rounded-xl border border-white/60 bg-white/80 px-4 py-3 shadow-sm">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-emerald-900/80">
                      Distance
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-stone-900">
                      {trip.totalDistanceKm} km
                    </dd>
                  </div>
                ) : null}
                {trip.altitudeMaxM != null && trip.altitudeMinM != null ? (
                  <div className="rounded-xl border border-white/60 bg-white/80 px-4 py-3 shadow-sm">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-emerald-900/80">
                      Altitude (max · min)
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-stone-900">
                      (↑) {trip.altitudeMaxM} m · (↓) {trip.altitudeMinM} m
                    </dd>
                  </div>
                ) : null}
                <div className="rounded-xl border border-white/60 bg-white/80 px-4 py-3 shadow-sm">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-emerald-900/80">
                    Days
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-stone-900">{trip.durationDays}</dd>
                </div>
                {trip.routeGrades && trip.routeGrades.length > 0 ? (
                  <div className="rounded-xl border border-white/60 bg-white/80 px-4 py-3 shadow-sm">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-emerald-900/80">
                      Route grade
                    </dt>
                    <dd className="mt-1 text-sm text-stone-900">{trip.routeGrades.join(" · ")}</dd>
                  </div>
                ) : null}
                {trip.fitnessNotes && trip.fitnessNotes.length > 0 ? (
                  <div className="rounded-xl border border-white/60 bg-white/80 px-4 py-3 shadow-sm sm:col-span-2">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-emerald-900/80">
                      Fitness
                    </dt>
                    <dd className="mt-1 text-sm text-stone-900">{trip.fitnessNotes.join(" · ")}</dd>
                  </div>
                ) : null}
              </dl>
            </section>
          ) : null}

          {trip.galleryImageUrls && trip.galleryImageUrls.length > 0 ? (
            <section>
              <h2 className="text-xl font-semibold text-stone-900">Gallery</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {trip.galleryImageUrls.map((src, i) => (
                  <figure
                    key={`${src}-${i}`}
                    className="relative aspect-[4/3] overflow-hidden rounded-xl border border-stone-200 bg-stone-100"
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </figure>
                ))}
              </div>
            </section>
          ) : null}

          {trip.mapImageUrl ? (
            <section className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
              <h2 className="text-xl font-semibold text-stone-900">Route map</h2>
              <p className="mt-2 text-sm text-stone-600">
                Overview of the trekking corridor (illustrative—not a substitute for navigation).
              </p>
              <div className="relative mt-4 aspect-[16/10] w-full overflow-hidden rounded-lg border border-stone-100 bg-stone-50">
                <Image
                  src={trip.mapImageUrl}
                  alt={`${trip.title} route map`}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 1024px) 100vw, 800px"
                />
              </div>
            </section>
          ) : null}

          {trip.description ? (
            <section className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
              <h2 className="text-xl font-semibold text-stone-900">Trip overview</h2>
              <div className="mt-4 space-y-3 text-sm leading-6 text-stone-700">
                {trip.description.split("\n\n").map((paragraph, index) => (
                  <p key={`overview-${index}`}>{paragraph}</p>
                ))}
              </div>
            </section>
          ) : null}

          {trip.priceTable && trip.priceTable.rows.length > 0 ? (
            <section className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
              <h2 className="text-xl font-semibold text-stone-900">Indicative pricing</h2>
              <p className="mt-2 text-sm text-stone-600">
                Per-person rates for the listed group sizes.{" "}
                {trip.priceTable.supplementaryChargePercent != null ? (
                  <>
                    For each traveller beyond the quoted group size, a supplementary charge of{" "}
                    {trip.priceTable.supplementaryChargePercent}% may apply.
                  </>
                ) : null}
              </p>
              <div className="mt-4 overflow-x-auto rounded-lg border border-stone-200">
                <table className="w-full min-w-[320px] text-left text-sm">
                  <thead className="bg-stone-100 text-stone-900">
                    <tr>
                      <th className="px-3 py-2 font-semibold">Option</th>
                      {trip.priceTable.columns.map((c) => (
                        <th key={c.key} className="px-3 py-2 font-semibold">
                          {c.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {trip.priceTable.rows.map((row) => (
                      <tr key={row.label} className="border-t border-stone-200">
                        <td className="px-3 py-2 font-medium text-stone-900">{row.label}</td>
                        {trip.priceTable!.columns.map((col) => (
                          <td key={col.key} className="px-3 py-2 text-stone-700">
                            {currencySymbol(trip.priceTable!.currency)}
                            {row.prices[col.key] ?? "—"}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {trip.priceTable.footnote ? (
                <p className="mt-3 text-xs text-stone-500">{trip.priceTable.footnote}</p>
              ) : null}
            </section>
          ) : null}

          {trip.services ? (
            <section className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
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

          {trip.bookingFeeItems && trip.bookingFeeItems.length > 0 ? (
            <section className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
              <h2 className="text-xl font-semibold text-stone-900">Fees, bookings & tickets</h2>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-stone-700">
                {trip.bookingFeeItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {trip.gearChecklist && trip.gearChecklist.length > 0 ? (
            <section className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
              <h2 className="text-xl font-semibold text-stone-900">Gear & equipment</h2>
              <ul className="mt-4 columns-1 gap-x-8 text-sm text-stone-700 sm:columns-2">
                {trip.gearChecklist.map((item) => (
                  <li key={item} className="break-inside-avoid py-0.5">
                    <span className="text-emerald-700">·</span> {item}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {trip.trekkingGradeNotes ? (
            <section className="rounded-xl border border-amber-100 bg-amber-50/80 p-5">
              <h2 className="text-xl font-semibold text-stone-900">Trekking grade</h2>
              <p className="mt-3 text-sm leading-6 text-stone-700">{trip.trekkingGradeNotes}</p>
            </section>
          ) : null}

          {trip.faq && trip.faq.length > 0 ? (
            <section>
              <h2 className="text-xl font-semibold text-stone-900">Good to know</h2>
              <div className="mt-4 space-y-4">
                {trip.faq.map((item) => (
                  <div
                    key={item.question}
                    className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm"
                  >
                    <h3 className="font-medium text-stone-900">{item.question}</h3>
                    <p className="mt-2 text-sm leading-6 text-stone-600">{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          <section>
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
                  <div className="min-w-0 flex-1">
                    <h3 className="font-medium text-stone-900">{d.title}</h3>
                    {d.destinationName ? (
                      <p className="text-xs font-medium uppercase tracking-wide text-emerald-800">
                        {d.destinationName}
                      </p>
                    ) : null}
                    <p className="mt-1 text-sm text-stone-600">{d.description}</p>
                    <DayStats day={d} />
                  </div>
                </li>
              ))}
            </ol>
            {(!trip.days || trip.days.length === 0) && (
              <p className="mt-4 text-sm text-stone-500">
                Day-by-day detail will appear when your API includes nested template days.
              </p>
            )}
          </section>

          {trip.days?.some((d) => d.details) ? (
            <section className="mt-12">
              <h2 className="text-xl font-semibold text-stone-900">Detailed itinerary</h2>
              <div className="mt-6 space-y-8">
                {trip.days.map((d) => (
                  <article
                    key={`detail-${d.dayNumber}`}
                    id={`day-${d.dayNumber}-details`}
                    className="scroll-mt-24 rounded-xl border border-stone-200 bg-white p-5 shadow-sm"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800">
                      Day {d.dayNumber}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-stone-900">{d.title}</h3>
                    <p className="mt-1 text-sm text-stone-600">{d.description}</p>
                    <DayStats day={d} />
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

          {trip.reviewSnippets && trip.reviewSnippets.length > 0 ? (
            <section>
              <h2 className="text-xl font-semibold text-stone-900">Traveler notes</h2>
              <p className="mt-2 text-sm text-stone-600">
                Shortlisted guests who have travelled with partner operators (illustrative).
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {trip.reviewSnippets.map((r) => (
                  <li
                    key={`${r.name}-${r.date}`}
                    className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs text-stone-700 shadow-sm"
                  >
                    <span className="font-medium text-stone-900">{r.name}</span>
                    {r.location ? ` · ${r.location}` : ""}
                    {r.date ? ` · ${r.date}` : ""}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {trip.sourceReferenceUrl ? (
            <p className="text-sm text-stone-500">
              Detail inspiration:{" "}
              <a
                href={trip.sourceReferenceUrl}
                className="font-medium text-emerald-800 underline-offset-2 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {trip.sourceReferenceUrl}
              </a>
            </p>
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
