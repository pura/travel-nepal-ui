import { NextResponse } from "next/server";
import { mockCreateBooking, parseBookingRequest } from "@/lib/mock-catalog";

/** POST /api/v1/bookings — see src/schema/openapi.yaml */
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
  const result = mockCreateBooking(parsed.data);
  if (!result.ok) {
    return NextResponse.json(result, { status: 400 });
  }
  return NextResponse.json(result);
}
