import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TripCard } from "@/components/trip-card";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { getTripsForDestination } from "@/lib/destination-trip-matching";
import { SITE, DESTINATIONS, isDestinationSlug } from "@/lib/site-config";
import { getTrips } from "@/lib/symfony-api";

const FEATURED_LIMIT = 12;

export const dynamicParams = false;

export function generateStaticParams() {
  return DESTINATIONS.map((d) => ({ slug: d.slug }));
}

type PageProps = { params: { slug: string } };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const dest = DESTINATIONS.find((d) => d.slug === params.slug);
  if (!dest) return { title: "Destination | " + SITE.name };
  const title = `${dest.name} tours & trips | ${SITE.name}`;
  const description =
    `${dest.tagline}. ` +
    `${dest.description.slice(0, 140)}`.replace(/\s+\S*$/, "") +
    ` — browse trips curated by ${SITE.name}.`;

  return {
    title,
    description,
    openGraph: {
      title: `${dest.name} | ${SITE.name}`,
      description,
      images: [{ url: dest.image, width: 1200, height: 675, alt: dest.name }],
    },
  };
}

export default async function DestinationPage({ params }: PageProps) {
  const { slug } = params;
  if (!isDestinationSlug(slug)) notFound();

  const dest = DESTINATIONS.find((d) => d.slug === slug);
  if (!dest) notFound();

  const { items } = await getTrips();
  const tours = getTripsForDestination(slug, items).slice(0, FEATURED_LIMIT);

  return (
    <>
      <div className="relative h-[42vh] min-h-[260px] w-full bg-charcoal-900 sm:h-[46vh] sm:min-h-[300px]">
        <Image
          src={dest.image}
          alt={`Landscape in ${dest.name}, Nepal`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="hero-gradient absolute inset-0" aria-hidden />
        <div className="absolute inset-x-0 bottom-0 pb-10 pt-20">
          <Container>
            <nav aria-label="Breadcrumb" className="text-xs font-medium text-white/80">
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <li>
                  <Link href="/" className="transition hover:text-white">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href="/#destinations-heading" className="transition hover:text-white">
                    Destinations
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-white">{dest.name}</li>
              </ol>
            </nav>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/85">
              {dest.tagline}
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {dest.name}
            </h1>
          </Container>
        </div>
      </div>

      <div className="section-padding bg-[#faf9f7]">
        <Container>
          <div className="max-w-3xl">
            <p className="text-lg leading-relaxed text-charcoal-700">{dest.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/trips">Browse all trips</ButtonLink>
              <ButtonLink href="/plan" variant="outline" className="border-charcoal-300">
                Plan a custom trip
              </ButtonLink>
            </div>
          </div>

          <section className="mt-16 border-t border-charcoal-200 pt-14" aria-labelledby="destination-trips-heading">
            <h2 id="destination-trips-heading" className="font-display text-2xl font-semibold text-charcoal-900 sm:text-3xl">
              Featured tours & trips in {dest.name}
            </h2>
            <p className="mt-3 max-w-2xl text-charcoal-600">
              Published itineraries where {dest.name} is a highlight or main focus — tap any card for full day-by-day
              detail.
            </p>

            {tours.length > 0 ? (
              <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {tours.map((trip) => (
                  <TripCard key={trip.slug} trip={trip} />
                ))}
              </div>
            ) : (
              <p className="mt-10 max-w-xl rounded-2xl border border-charcoal-200 bg-charcoal-50 px-6 py-8 text-charcoal-600">
                We&apos;re syncing new departures for this region — tell us what you&apos;re looking for and we&apos;ll
                reply with tailored options within 24 hours.
              </p>
            )}
          </section>
        </Container>
      </div>
    </>
  );
}
