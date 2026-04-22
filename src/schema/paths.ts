/** Versioned public HTTP API (mock implemented in Next; Symfony should mirror). */
export const API_V1_PREFIX = "/api/v1" as const;

export const ApiV1Paths = {
  trips: `${API_V1_PREFIX}/trips`,
  trip: (slug: string) => `${API_V1_PREFIX}/trips/${encodeURIComponent(slug)}`,
  bookings: `${API_V1_PREFIX}/bookings`,
} as const;
