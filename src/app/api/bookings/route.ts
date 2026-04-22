import { NextResponse } from "next/server";
import { createBookingOnSymfony } from "@/lib/symfony-api";
import { getApiBaseUrl, isMockCatalogEnabled } from "@/lib/env";
import { mockCreateBooking, parseBookingRequest } from "@/lib/mock-catalog";

/**
 * BFF: validates body, then Symfony `POST /api/v1/bookings` or in-process mock.
 * Browser should call this route; `/api/v1/bookings` is the contract surface for Symfony/tools.
 */
export async function POST(req: Request) {
  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid JSON" }, { status: 400 });
  }
  const parsed = parseBookingRequest(json);
  if (!parsed.ok) {
    return NextResponse.json({ ok: false, message: parsed.message }, { status: 400 });
  }

  const base = getApiBaseUrl();
  if (base && !isMockCatalogEnabled()) {
    try {
      const r = await createBookingOnSymfony(parsed.data);
      return NextResponse.json(r);
    } catch (e) {
      console.error("Symfony booking error:", e);
    }
  }

  return NextResponse.json(mockCreateBooking(parsed.data));
}
