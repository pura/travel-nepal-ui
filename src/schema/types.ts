/**
 * Canonical TypeScript types for the public catalog + booking API.
 * JSON Schema + OpenAPI in this folder describe the same contract for Symfony.
 */

export type TripType =
  | "cultural_heritage"
  | "trekking_hiking"
  | "adventure"
  | "wildlife_jungle"
  | "spiritual_pilgrimage"
  | "luxury_leisure"
  | "family";

export type Money = {
  amount: string;
  currency: "USD" | "EUR" | "GBP" | "NPR";
};

export type PublicTripDay = {
  dayNumber: number;
  title: string;
  description: string;
  details?: string;
  meals?: string;
  destinationSlug?: string | null;
  destinationName?: string | null;
  /** Optional day stats (e.g. trekking fact boxes) */
  distanceKm?: number;
  altitudeMaxM?: number;
  altitudeMinM?: number;
  durationHours?: number;
  accommodation?: string;
  /** Optional photo for significant stops in the detailed itinerary */
  imageUrl?: string | null;
};

export type TripPriceTableColumn = {
  key: string;
  label: string;
};

export type TripPriceTableRow = {
  label: string;
  /** Amount as decimal string, keyed by column key (e.g. "2", "4", "8") */
  prices: Record<string, string>;
};

export type TripPriceTable = {
  currency: Money["currency"];
  footnote?: string;
  supplementaryChargePercent?: number;
  columns: TripPriceTableColumn[];
  rows: TripPriceTableRow[];
};

export type TripFaqItem = {
  question: string;
  answer: string;
};

export type TripReviewSnippet = {
  name: string;
  location?: string;
  date?: string;
};

export type TripServices = {
  included: string[];
  excluded: string[];
  optional: string[];
};

export type PublicTrip = {
  id: number;
  slug: string;
  title: string;
  summary: string;
  description?: string;
  durationDays: number;
  tripType: TripType;
  budgetLevel: "budget" | "mid_range" | "premium";
  comfortLevel: "basic" | "standard" | "premium";
  difficultyLevel: "easy" | "moderate" | "challenging";
  interestTags: string[];
  priceFrom?: Money | null;
  imageUrl?: string | null;
  startingRegion?: { slug: string; name: string } | null;
  services?: TripServices;
  days?: PublicTripDay[];
  /** Route-wide facts */
  totalDistanceKm?: number;
  altitudeMaxM?: number;
  altitudeMinM?: number;
  routeGrades?: string[];
  fitnessNotes?: string[];
  recommendedSeasons?: string[];
  /** Extra imagery */
  mapImageUrl?: string | null;
  galleryImageUrls?: string[];
  /** Optional richer pricing (group tiers); `priceFrom` remains the primary “from” hint */
  priceTable?: TripPriceTable | null;
  bookingFeeItems?: string[];
  gearChecklist?: string[];
  trekkingGradeNotes?: string | null;
  faq?: TripFaqItem[];
  reviewSnippets?: TripReviewSnippet[];
  /** Credit / canonical detail page when content is adapted */
  sourceReferenceUrl?: string | null;
};

export type TripsListResponse = {
  items: PublicTrip[];
};

export type TripDetailResponse = PublicTrip;

export type BookingRequest = {
  tripSlug: string;
  tripId: number;
  travelers: number;
  startDate: string;
  email: string;
  fullName: string;
  notes?: string;
};

/** @deprecated alias — use BookingRequest */
export type CheckoutPayload = BookingRequest;

export type BookingResponse = {
  ok: boolean;
  bookingReference?: string;
  paymentUrl?: string | null;
  message?: string;
};

/** @deprecated alias — use BookingResponse */
export type CheckoutResult = BookingResponse;
