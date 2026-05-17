import type { Metadata } from "next";
import { PlanTripInquirySection } from "@/components/home/plan-trip-inquiry-section";
import { parseDurationParam, parseTripTypeParam } from "@/lib/inquiry-plan-options";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Plan your trip | ${SITE.name}`,
  description: `Request a free custom Nepal itinerary from ${SITE.name}. Tell us your travel style and dates — we'll reply within 24 hours.`,
};

function firstQueryValue(v: string | string[] | undefined): string | null {
  if (v === undefined) return null;
  if (Array.isArray(v)) return v[0] ?? null;
  return v;
}

type PlanPageProps = {
  searchParams: Record<string, string | string[] | undefined>;
};

export default function PlanPage({ searchParams }: PlanPageProps) {
  const tripRaw = firstQueryValue(searchParams.trip_type);
  const durationRaw = firstQueryValue(searchParams.duration);

  return (
    <PlanTripInquirySection
      prefilledTripType={parseTripTypeParam(tripRaw)}
      prefilledDuration={parseDurationParam(durationRaw)}
    />
  );
}
