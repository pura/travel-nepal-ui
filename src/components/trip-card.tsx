import Image from "next/image";
import Link from "next/link";
import type { PublicTrip } from "@/types/trip";

function formatPrice(p: PublicTrip["priceFrom"]) {
  if (!p) return "Price on request";
  const sym = p.currency === "USD" ? "US$" : p.currency === "GBP" ? "£" : p.currency;
  return `From ${sym}${p.amount}`;
}

const difficultyLabel: Record<string, string> = {
  easy: "Easy",
  moderate: "Moderate",
  challenging: "Challenging",
};

export function TripCard({ trip }: { trip: PublicTrip }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:border-emerald-200 hover:shadow-md">
      <Link href={`/trips/${trip.slug}`} className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
        {trip.imageUrl ? (
          <Image
            src={trip.imageUrl}
            alt={trip.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width:768px) 100vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-stone-400">
            Photo coming soon
          </div>
        )}
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-0.5 text-xs font-medium text-stone-800 shadow">
          {trip.durationDays} days
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <Link href={`/trips/${trip.slug}`}>
          <h2 className="text-lg font-semibold text-stone-900 transition group-hover:text-emerald-800">
            {trip.title}
          </h2>
        </Link>
        <p className="mt-2 line-clamp-2 flex-1 text-sm text-stone-600">{trip.summary}</p>
        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-stone-500">
          <span className="rounded-md bg-stone-100 px-2 py-0.5">
            {difficultyLabel[trip.difficultyLevel] ?? trip.difficultyLevel}
          </span>
          {trip.startingRegion?.name ? (
            <span className="rounded-md bg-stone-100 px-2 py-0.5">
              Starts {trip.startingRegion.name}
            </span>
          ) : null}
        </div>
        <div className="mt-5 flex items-center justify-between border-t border-stone-100 pt-4">
          <p className="text-sm font-semibold text-emerald-900">{formatPrice(trip.priceFrom)}</p>
          <Link
            href={`/trips/${trip.slug}`}
            className="text-sm font-medium text-emerald-700 hover:text-emerald-900"
          >
            View trip →
          </Link>
        </div>
      </div>
    </article>
  );
}
