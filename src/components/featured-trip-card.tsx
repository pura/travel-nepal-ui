import Image from "next/image";
import Link from "next/link";
import type { PublicTrip } from "@/types/trip";
import { TripCustomizeChatButton } from "@/components/trip-customize-chat-button";
import { TRIP_FEATURE_TAGS } from "@/lib/site-config";

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

export function FeaturedTripCard({ trip }: { trip: PublicTrip }) {
  const tags = TRIP_FEATURE_TAGS[trip.slug] ?? ["Private Tour"];

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-charcoal-100 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-card">
      <Link
        href={`/trips/${trip.slug}`}
        className="relative aspect-[4/3] w-full overflow-hidden bg-charcoal-100"
      >
        {trip.imageUrl ? (
          <Image
            src={trip.imageUrl}
            alt={trip.title}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
            sizes="(max-width:768px) 100vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-charcoal-400">
            Photo coming soon
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/50 via-transparent to-transparent opacity-60" />
        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-charcoal-900 shadow-sm">
          {trip.durationDays} days
        </span>
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/90 px-2.5 py-0.5 text-xs font-medium text-brand-800 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <Link href={`/trips/${trip.slug}`}>
          <h3 className="font-display text-xl font-semibold text-charcoal-900 transition group-hover:text-brand-700">
            {trip.title}
          </h3>
        </Link>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-charcoal-600">
          {trip.summary}
        </p>
        <div className="mt-3 flex flex-wrap gap-2 text-xs text-charcoal-500">
          <span className="rounded-md bg-charcoal-50 px-2 py-0.5">
            {difficultyLabel[trip.difficultyLevel] ?? trip.difficultyLevel}
          </span>
          {trip.startingRegion?.name ? (
            <span className="rounded-md bg-charcoal-50 px-2 py-0.5">
              {trip.startingRegion.name}
            </span>
          ) : null}
        </div>

        <div className="mt-6 flex items-end justify-between gap-4 border-t border-charcoal-100 pt-5">
          <div>
            <p className="text-xs text-charcoal-500">Starting from</p>
            <p className="font-display text-2xl font-semibold text-brand-800">
              {formatPrice(trip.priceFrom)}
            </p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <Link
            href={`/trips/${trip.slug}`}
            className="rounded-full border border-brand-200 bg-brand-50 px-3 py-2.5 text-center text-xs font-semibold text-brand-800 transition hover:bg-brand-100 sm:text-sm"
          >
            Get Itinerary
          </Link>
          <TripCustomizeChatButton tripTitle={trip.title} />
        </div>
      </div>
    </article>
  );
}
