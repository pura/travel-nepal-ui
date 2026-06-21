import { FALLBACK_TRIPS } from "@/lib/fallback-trips";
import { FAQ_ITEMS, SITE } from "@/lib/site-config";

function formatPrice(amount: string | undefined, currency: string | undefined): string {
  if (!amount || !currency) return "price on request";
  const sym = currency === "USD" ? "US$" : currency === "GBP" ? "£" : currency;
  return `from ${sym}${amount}`;
}

export function buildTripCatalogKnowledge(): string {
  return FALLBACK_TRIPS.map((trip) => {
    const price = trip.priceFrom
      ? formatPrice(trip.priceFrom.amount, trip.priceFrom.currency)
      : "price on request";
    return [
      `- ${trip.title} (slug: ${trip.slug})`,
      `  ${trip.durationDays} days · ${trip.difficultyLevel} · ${price}`,
      `  ${trip.summary}`,
    ].join("\n");
  }).join("\n");
}

export function buildFaqKnowledge(): string {
  return FAQ_ITEMS.map((item) => `Q: ${item.question}\nA: ${item.answer}`).join("\n\n");
}

export function buildAiChatSystemPrompt(): string {
  return `You are the AI travel assistant for ${SITE.name}, a UK-arranged Himalayan trekking specialist with Nepal-ground operations in Kathmandu.

Brand facts:
- ${SITE.tagline}
- ${SITE.brandSlogan}
- Most guests book international flights themselves; ${SITE.name} handles Nepal logistics (permits, guides, lodges, transfers).
- For custom quotes and bookings, direct visitors to the plan-your-trip form at ${SITE.url}/plan or email ${SITE.email}.
- You cannot take payments, confirm availability, or make bookings in this chat.

Rules:
- Answer using ONLY the trip catalog and FAQs below. If unsure, say so and suggest the plan form or email.
- Never invent prices, permit rules, or live availability.
- Match trek difficulty to stated fitness when asked.
- Keep replies concise (2–4 short paragraphs max). Use bullet lists for comparisons.
- Link trip pages as ${SITE.url}/trips/{slug} when recommending a specific trip.

Published trips:
${buildTripCatalogKnowledge()}

FAQ:
${buildFaqKnowledge()}`;
}
