function required(name: string, fallback?: string): string {
  const v = process.env[name] ?? fallback;
  if (!v && fallback === undefined) return "";
  return v ?? "";
}

/** Base URL for Symfony JSON API (no trailing slash). */
export function getApiBaseUrl(): string {
  return required("NEXT_PUBLIC_SYMFONY_API_URL", "").replace(/\/$/, "");
}

/** @deprecated use `isMockCatalogEnabled()` */
export function tripMocksEnabled(): boolean {
  return process.env.NEXT_PUBLIC_USE_TRIP_MOCKS === "true";
}

/**
 * When true, catalog + booking use in-process / mock HTTP (`/api/v1/*`) behaviour.
 * - `NEXT_PUBLIC_USE_MOCK_API=true` → always mock (even if Symfony URL is set).
 * - `NEXT_PUBLIC_USE_MOCK_API=false` → use Symfony when `NEXT_PUBLIC_SYMFONY_API_URL` is set.
 * - unset → mock if no Symfony URL, or if legacy `NEXT_PUBLIC_USE_TRIP_MOCKS=true`.
 */
export function isMockCatalogEnabled(): boolean {
  const explicit = process.env.NEXT_PUBLIC_USE_MOCK_API;
  if (explicit === "true") return true;
  if (explicit === "false") return false;
  if (tripMocksEnabled()) return true;
  return !getApiBaseUrl();
}
