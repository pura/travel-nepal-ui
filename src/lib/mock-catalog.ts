import { randomUUID } from "crypto";
import type {
  BookingRequest,
  BookingResponse,
  PublicTrip,
  TripsListResponse,
} from "@/schema/types";
import { FALLBACK_TRIPS } from "@/lib/fallback-trips";

export function mockListTrips(): TripsListResponse {
  return { items: FALLBACK_TRIPS.map((t) => ({ ...t })) };
}

export function mockGetTripBySlug(slug: string): PublicTrip | null {
  const t = FALLBACK_TRIPS.find((x) => x.slug === slug);
  return t ? { ...t } : null;
}

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

/** Validates booking request shape (mirrors JSON Schema rules loosely). */
export function parseBookingRequest(body: unknown): { ok: true; data: BookingRequest } | { ok: false; message: string } {
  if (!body || typeof body !== "object") {
    return { ok: false, message: "Body must be a JSON object" };
  }
  const o = body as Record<string, unknown>;
  if (!isNonEmptyString(o.tripSlug)) return { ok: false, message: "tripSlug is required" };
  if (typeof o.tripId !== "number" || !Number.isInteger(o.tripId)) {
    return { ok: false, message: "tripId must be an integer" };
  }
  if (typeof o.travelers !== "number" || o.travelers < 1 || o.travelers > 20) {
    return { ok: false, message: "travelers must be between 1 and 20" };
  }
  if (!isNonEmptyString(o.startDate)) return { ok: false, message: "startDate is required" };
  if (!isNonEmptyString(o.email)) return { ok: false, message: "email is required" };
  if (!isNonEmptyString(o.fullName)) return { ok: false, message: "fullName is required" };
  const notes = o.notes;
  if (notes !== undefined && notes !== null && typeof notes !== "string") {
    return { ok: false, message: "notes must be a string when provided" };
  }
  return {
    ok: true,
    data: {
      tripSlug: o.tripSlug,
      tripId: o.tripId,
      travelers: o.travelers,
      startDate: o.startDate,
      email: o.email,
      fullName: o.fullName,
      notes: typeof notes === "string" ? notes : undefined,
    },
  };
}

export function mockCreateBooking(payload: BookingRequest): BookingResponse {
  const trip = FALLBACK_TRIPS.find((t) => t.slug === payload.tripSlug && t.id === payload.tripId);
  if (!trip) {
    return { ok: false, message: "No published trip matches tripSlug and tripId" };
  }
  const bookingReference = `MOCK-${randomUUID().replace(/-/g, "").slice(0, 12).toUpperCase()}`;
  return {
    ok: true,
    bookingReference,
    paymentUrl: null,
    message:
      "Mock booking stored in-process only. Symfony should persist and return paymentUrl when integrated.",
  };
}
