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

const DEFAULT_INQUIRY_EMAIL_TO = "codoo.puraskar@gmail.com";

/** Recipient for plan-your-trip inquiry submissions */
export function getInquiryEmailTo(): string {
  return process.env.INQUIRY_EMAIL_TO?.trim() || DEFAULT_INQUIRY_EMAIL_TO;
}

/** From address for inquiry notification emails */
export function getInquiryEmailFrom(): string {
  return (
    process.env.INQUIRY_EMAIL_FROM?.trim() ||
    process.env.SMTP_FROM?.trim() ||
    `Easy Travel Nepal <${getInquiryEmailTo()}>`
  );
}

export type SmtpConfig = {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
};

export function isSmtpConfigured(): boolean {
  const { host, user, pass } = getSmtpConfig();
  return Boolean(host && user && pass);
}

export function getSmtpConfig(): SmtpConfig {
  const port = Number(process.env.SMTP_PORT ?? "587");
  return {
    host: process.env.SMTP_HOST?.trim() ?? "",
    port: Number.isFinite(port) ? port : 587,
    secure: process.env.SMTP_SECURE === "true",
    user: process.env.SMTP_USER?.trim() ?? "",
    pass: process.env.SMTP_PASS ?? "",
  };
}

const DEFAULT_OPENAI_MODEL = "gpt-4o-mini";
const DEFAULT_AI_CHAT_RATE_LIMIT = 30;

export function getOpenAiApiKey(): string {
  return process.env.OPENAI_API_KEY?.trim() ?? "";
}

export function getOpenAiModel(): string {
  return process.env.OPENAI_MODEL?.trim() || DEFAULT_OPENAI_MODEL;
}

export function isOpenAiConfigured(): boolean {
  return Boolean(getOpenAiApiKey());
}

export function getAiChatRateLimitPerHour(): number {
  const n = Number(process.env.AI_CHAT_RATE_LIMIT_PER_HOUR ?? DEFAULT_AI_CHAT_RATE_LIMIT);
  return Number.isFinite(n) && n > 0 ? n : DEFAULT_AI_CHAT_RATE_LIMIT;
}
