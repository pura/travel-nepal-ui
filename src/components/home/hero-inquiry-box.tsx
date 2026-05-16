"use client";

import { useState } from "react";
import { getWhatsAppUrl } from "@/lib/site-config";

const TRIP_TYPES = [
  "Trekking",
  "Culture & heritage",
  "Wildlife",
  "Family trip",
  "Custom itinerary",
];

export function HeroInquiryBox() {
  const [tripType, setTripType] = useState("");
  const [duration, setDuration] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parts = [
      "Hi! I'd like help planning a trip to Nepal.",
      tripType && `Trip type: ${tripType}`,
      duration && `Duration: ${duration} days`,
    ].filter(Boolean);
    window.open(getWhatsAppUrl(parts.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/20 bg-white/95 p-4 shadow-lift backdrop-blur-md sm:p-5"
      aria-label="Quick trip inquiry"
    >
      <p className="text-sm font-semibold text-charcoal-900">Start planning in minutes</p>
      <p className="mt-0.5 text-xs text-charcoal-500">
        Tell us your style — we&apos;ll reply with ideas within 24 hours
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <label className="block sm:col-span-1">
          <span className="sr-only">Trip type</span>
          <select
            value={tripType}
            onChange={(e) => setTripType(e.target.value)}
            className="w-full rounded-xl border border-charcoal-200 bg-white px-3 py-2.5 text-sm text-charcoal-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
          >
            <option value="">Trip type</option>
            {TRIP_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
        <label className="block sm:col-span-1">
          <span className="sr-only">Duration in days</span>
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full rounded-xl border border-charcoal-200 bg-white px-3 py-2.5 text-sm text-charcoal-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
          >
            <option value="">Duration</option>
            {["5–7", "8–12", "13–18", "19+"].map((d) => (
              <option key={d} value={d}>
                {d} days
              </option>
            ))}
          </select>
        </label>
        <button
          type="submit"
          className="rounded-xl bg-brand-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-800 sm:col-span-1"
        >
          Get free ideas →
        </button>
      </div>
    </form>
  );
}
