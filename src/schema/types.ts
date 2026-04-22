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
