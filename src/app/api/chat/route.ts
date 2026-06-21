import { NextResponse } from "next/server";
import { generateChatReply, parseChatRequest, AI_CHAT_UNAVAILABLE_MESSAGE } from "@/lib/ai-chat";
import { checkRateLimit } from "@/lib/ai-chat-rate-limit";
import { getAiChatRateLimitPerHour, isOpenAiConfigured } from "@/lib/env";

function clientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return req.headers.get("x-real-ip") || "unknown";
}

export async function POST(req: Request) {
  if (!isOpenAiConfigured()) {
    return NextResponse.json(
      { ok: false, message: AI_CHAT_UNAVAILABLE_MESSAGE },
      { status: 503 },
    );
  }

  const ip = clientIp(req);
  const limit = getAiChatRateLimitPerHour();
  const rate = checkRateLimit(`chat:${ip}`, limit, 60 * 60 * 1000);
  if (!rate.allowed) {
    return NextResponse.json(
      { ok: false, message: "Too many messages. Please try again later." },
      {
        status: 429,
        headers: rate.retryAfterSec
          ? { "Retry-After": String(rate.retryAfterSec) }
          : undefined,
      },
    );
  }

  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid JSON" }, { status: 400 });
  }

  const parsed = parseChatRequest(json);
  if (!parsed.ok) {
    return NextResponse.json({ ok: false, message: parsed.message }, { status: 400 });
  }

  try {
    const reply = await generateChatReply(parsed.messages);
    return NextResponse.json({ ok: true, reply });
  } catch (error) {
    console.error("AI chat error:", error);
    return NextResponse.json(
      { ok: false, message: AI_CHAT_UNAVAILABLE_MESSAGE },
      { status: 500 },
    );
  }
}
