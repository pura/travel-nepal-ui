import type { Metadata } from "next";
import { TripCard } from "@/components/trip-card";
import { getTrips } from "@/lib/symfony-api";

export const metadata: Metadata = {
  title: "Trips in Nepal",
  description:
    "Browse fixed itineraries — culture, wildlife, trekking — with clear duration and difficulty.",
};

export default async function TripsPage() {
  const { items } = await getTrips();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <header className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-wide text-emerald-800">
          Fixed departures
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
          Tours in Nepal
        </h1>
        <p className="mt-4 text-stone-600">
          Choose a published itinerary, see day-by-day structure, then book. Listings sync
          from your Symfony catalog when API endpoints are live; until then, sample trips
          load automatically.
        </p>
      </header>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((trip) => (
          <TripCard key={trip.slug} trip={trip} />
        ))}
      </div>
    </div>
  );
}
