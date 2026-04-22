import { NextResponse } from "next/server";
import { mockListTrips } from "@/lib/mock-catalog";

/** GET /api/v1/trips — see src/schema/openapi.yaml */
export async function GET() {
  return NextResponse.json(mockListTrips());
}
