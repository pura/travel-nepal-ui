import { TripCard } from "@/components/trip-card";
import {
  TREKKING_REGIONS,
  TRIP_CATALOG_SECTIONS,
  type GroupedTripsCatalog,
  type TrekkingRegionId,
} from "@/lib/trip-catalog";
import type { PublicTrip } from "@/types/trip";

function TripGrid({ trips }: { trips: PublicTrip[] }) {
  if (trips.length === 0) return null;

  return (
    <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {trips.map((trip) => (
        <TripCard key={trip.slug} trip={trip} />
      ))}
    </div>
  );
}

function RegionBlock({
  title,
  trips,
}: {
  title: string;
  trips: PublicTrip[];
}) {
  if (trips.length === 0) return null;

  return (
    <div className="mt-10 first:mt-0">
      <h3 className="font-display text-xl font-semibold tracking-tight text-charcoal-900 sm:text-2xl">
        {title}
      </h3>
      <TripGrid trips={trips} />
    </div>
  );
}

export function TripsCatalog({ catalog }: { catalog: GroupedTripsCatalog }) {
  const trekkingCount =
    catalog.trekking.annapurna.length +
    catalog.trekking.everest.length +
    catalog.trekking.other.length;

  const visibleSections = TRIP_CATALOG_SECTIONS.filter((section) => {
    if (section.id === "trekking") return trekkingCount > 0;
    if (section.id === "tours_experience") return catalog.toursExperience.length > 0;
    return catalog.pilgrimage.length > 0;
  });

  return (
    <div className="mt-14">
      <nav
        aria-label="Trip categories"
        className="flex flex-wrap gap-2 border-b border-charcoal-100 pb-8"
      >
        {visibleSections.map((section) => (
          <a
            key={section.id}
            href={`#${section.anchor}`}
            className="rounded-full border border-charcoal-200 bg-white px-4 py-2 text-sm font-medium text-charcoal-700 transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-800"
          >
            {section.title}
          </a>
        ))}
      </nav>

      {TRIP_CATALOG_SECTIONS.map((section) => {
        if (section.id === "trekking" && trekkingCount === 0) return null;
        if (section.id === "tours_experience" && catalog.toursExperience.length === 0) {
          return null;
        }
        if (section.id === "pilgrimage" && catalog.pilgrimage.length === 0) return null;

        return (
          <section
            key={section.id}
            id={section.anchor}
            className="scroll-mt-24 border-t border-charcoal-100 py-14 first:border-t-0 first:pt-10"
            aria-labelledby={`${section.anchor}-heading`}
          >
            <h2
              id={`${section.anchor}-heading`}
              className="font-display text-2xl font-semibold tracking-tight text-charcoal-900 sm:text-3xl"
            >
              {section.title}
            </h2>
            <p className="mt-3 max-w-2xl text-charcoal-600">{section.description}</p>

            {section.id === "trekking" ? (
              <div className="mt-8">
                {TREKKING_REGIONS.map((region) => (
                  <RegionBlock
                    key={region.id}
                    title={region.title}
                    trips={catalog.trekking[region.id as TrekkingRegionId]}
                  />
                ))}
              </div>
            ) : (
              <TripGrid
                trips={
                  section.id === "pilgrimage"
                    ? catalog.pilgrimage
                    : catalog.toursExperience
                }
              />
            )}
          </section>
        );
      })}
    </div>
  );
}
