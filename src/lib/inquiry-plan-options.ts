export const INQUIRY_TRIP_TYPES = [
  "Trekking",
  "Culture & heritage",
  "Wildlife",
  "Family trip",
  "Custom itinerary",
] as const;

/** Value stored / sent — matches dropdown option values (shown as "`{band}` days" in UI). */
export const INQUIRY_DURATION_BANDS = ["5–7", "8–12", "13–18", "19+"] as const;

export type InquiryTripType = (typeof INQUIRY_TRIP_TYPES)[number];
export type InquiryDurationBand = (typeof INQUIRY_DURATION_BANDS)[number];

export function parseTripTypeParam(raw: string | null): "" | InquiryTripType {
  if (!raw) return "";
  const decoded = raw.trim();
  return (INQUIRY_TRIP_TYPES as readonly string[]).includes(decoded)
    ? (decoded as InquiryTripType)
    : "";
}

export function parseDurationParam(raw: string | null): "" | InquiryDurationBand {
  if (!raw) return "";
  const decoded = raw.trim();
  return (INQUIRY_DURATION_BANDS as readonly string[]).includes(decoded)
    ? (decoded as InquiryDurationBand)
    : "";
}

export function formatDurationLabel(band: string): string {
  return band ? `${band} days` : "";
}
