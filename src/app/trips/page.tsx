import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { TripsCatalog } from "@/components/trips/trips-catalog";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { isDestinationSlug } from "@/lib/site-config";
import { groupTripsForCatalog } from "@/lib/trip-catalog";
import { getTrips } from "@/lib/symfony-api";

export const metadata: Metadata = {
  title: "Tours and Trips in Nepal",
  description:
    "Browse trekking routes, cultural tours, and pilgrimage journeys across Nepal—with clear duration and difficulty.",
};

type TripsPageProps = {
  searchParams: Record<string, string | string[] | undefined>;
};

export default async function TripsPage({ searchParams }: TripsPageProps) {
  const rawRegion = searchParams.region;
  const regionParam = typeof rawRegion === "string" ? rawRegion : rawRegion?.[0];
  if (regionParam && isDestinationSlug(regionParam)) {
    redirect(`/destinations/${regionParam}`);
  }

  const { items } = await getTrips();
  const catalog = groupTripsForCatalog(items);

  return (
    <div className="section-padding bg-[#faf9f7]">
      <Container>
        <header id="trips-page-heading">
          <SectionHeading
            as="h1"
            eyebrow="Fixed departures"
            title="Tours and Trips"
            description="Choose a published itinerary, see day-by-day structure, then book. Treks are grouped by region; tours and pilgrimage journeys have their own sections below."
          />
        </header>

        <TripsCatalog catalog={catalog} />
      </Container>
    </div>
  );
}
