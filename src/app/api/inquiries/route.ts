import { NextResponse } from "next/server";
import { sendInquiryEmail } from "@/lib/inquiry-email";
import { isSmtpConfigured } from "@/lib/env";
import { parseInquiryRequest } from "@/lib/inquiry-request";

export async function POST(req: Request) {
  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid JSON" }, { status: 400 });
  }

  const parsed = parseInquiryRequest(json);
  if (!parsed.ok) {
    return NextResponse.json({ ok: false, message: parsed.message }, { status: 400 });
  }

  if (!isSmtpConfigured()) {
    console.error("Inquiry email failed: SMTP is not configured");
    return NextResponse.json(
      {
        ok: false,
        message:
          "Inquiry email is not configured yet. Please set SMTP_HOST, SMTP_USER, and SMTP_PASS.",
      },
      { status: 503 },
    );
  }

  try {
    await sendInquiryEmail(parsed.data);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Inquiry email failed:", error);
    return NextResponse.json(
      { ok: false, message: "Could not send your inquiry. Please try again or contact us directly." },
      { status: 500 },
    );
  }
}
