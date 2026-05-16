import Link from "next/link";
import { FeaturedTripCard } from "@/components/featured-trip-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { PublicTrip } from "@/types/trip";

export function FeaturedToursSection({ trips }: { trips: PublicTrip[] }) {
  return (
    <section className="section-padding bg-[#faf9f7]" aria-labelledby="featured-tours-heading">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div id="featured-tours-heading">
            <SectionHeading
              eyebrow="Curated journeys"
              title="Featured tours"
              description="Handpicked routes with clear day-by-day plans — customize any itinerary to match your group."
            />
          </div>
          <Link
            href="/trips"
            className="shrink-0 text-sm font-semibold text-brand-700 transition hover:text-brand-900"
          >
            View all trips →
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {trips.map((trip) => (
            <FeaturedTripCard key={trip.slug} trip={trip} />
          ))}
        </div>
      </Container>
    </section>
  );
}
