import type { Metadata } from "next";
import { TripsCatalog } from "@/components/trips/trips-catalog";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { groupTripsForCatalog } from "@/lib/trip-catalog";
import { getTrips } from "@/lib/symfony-api";

export const metadata: Metadata = {
  title: "Tours and Trips in Nepal",
  description:
    "Browse trekking routes, cultural tours, and pilgrimage journeys across Nepal—with clear duration and difficulty.",
};

export default async function TripsPage() {
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
