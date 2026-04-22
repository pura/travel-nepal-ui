import type {
  BookingRequest,
  BookingResponse,
  PublicTrip,
  TripsListResponse,
} from "@/schema/types";
import { getApiBaseUrl, isMockCatalogEnabled } from "@/lib/env";
import { mockGetTripBySlug, mockListTrips } from "@/lib/mock-catalog";

class ApiError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

async function fetchJson<T>(path: string, init?: RequestInit): Promise<T> {
  const base = getApiBaseUrl();
  if (!base) {
    throw new ApiError("NEXT_PUBLIC_SYMFONY_API_URL is not set", 503);
  }
  const res = await fetch(`${base}${path}`, {
    ...init,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...init?.headers,
    },
    next: init?.method ? undefined : { revalidate: 60 },
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new ApiError(text || res.statusText, res.status);
  }
  return res.json() as Promise<T>;
}

/** Symfony: GET /api/v1/trips → TripsListResponse */
export async function fetchTripsFromSymfony(): Promise<TripsListResponse> {
  return fetchJson<TripsListResponse>("/api/v1/trips");
}

/** Symfony: GET /api/v1/trips/{slug} → PublicTrip */
export async function fetchTripBySlugFromSymfony(slug: string): Promise<PublicTrip> {
  return fetchJson<PublicTrip>(`/api/v1/trips/${encodeURIComponent(slug)}`);
}

/** Symfony: POST /api/v1/bookings → BookingResponse */
export async function createBookingOnSymfony(body: BookingRequest): Promise<BookingResponse> {
  const base = getApiBaseUrl();
  if (!base) {
    throw new ApiError("NEXT_PUBLIC_SYMFONY_API_URL is not set", 503);
  }
  const res = await fetch(`${base}/api/v1/bookings`, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = (await res.json().catch(() => ({}))) as BookingResponse & { error?: string };
  if (!res.ok) {
    throw new ApiError(data.message || data.error || res.statusText, res.status);
  }
  return data;
}

export async function getTrips(): Promise<TripsListResponse> {
  if (isMockCatalogEnabled()) {
    return mockListTrips();
  }
  try {
    const r = await fetchTripsFromSymfony();
    if (!r.items?.length) return mockListTrips();
    return r;
  } catch {
    return mockListTrips();
  }
}

export async function getTripBySlug(slug: string): Promise<PublicTrip | null> {
  if (isMockCatalogEnabled()) {
    return mockGetTripBySlug(slug);
  }
  try {
    return await fetchTripBySlugFromSymfony(slug);
  } catch {
    return mockGetTripBySlug(slug);
  }
}

export { ApiError };
