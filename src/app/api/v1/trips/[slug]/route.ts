import { NextResponse } from "next/server";
import { mockGetTripBySlug } from "@/lib/mock-catalog";

type Ctx = { params: { slug: string } };

/** GET /api/v1/trips/{slug} — see src/schema/openapi.yaml */
export async function GET(_req: Request, { params }: Ctx) {
  const trip = mockGetTripBySlug(params.slug);
  if (!trip) {
    return NextResponse.json(
      { ok: false, message: "Trip not found" },
      { status: 404 },
    );
  }
  return NextResponse.json(trip);
}
