export type InquiryRequest = {
  tripType?: string;
  duration?: string;
  name: string;
  email: string;
  dates?: string;
  message?: string;
};

type ParseResult =
  | { ok: true; data: InquiryRequest }
  | { ok: false; message: string };

function asTrimmedString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export function parseInquiryRequest(json: unknown): ParseResult {
  if (!json || typeof json !== "object") {
    return { ok: false, message: "Invalid request body" };
  }

  const body = json as Record<string, unknown>;
  const name = asTrimmedString(body.name);
  const email = asTrimmedString(body.email);

  if (!name) {
    return { ok: false, message: "Name is required" };
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, message: "A valid email is required" };
  }

  return {
    ok: true,
    data: {
      tripType: asTrimmedString(body.tripType) || undefined,
      duration: asTrimmedString(body.duration) || undefined,
      name,
      email,
      dates: asTrimmedString(body.dates) || undefined,
      message: asTrimmedString(body.message) || undefined,
    },
  };
}
