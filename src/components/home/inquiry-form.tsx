"use client";

import { useEffect, useState } from "react";
import {
  formatDurationLabel,
  INQUIRY_DURATION_BANDS,
  INQUIRY_TRIP_TYPES,
} from "@/lib/inquiry-plan-options";
import { getWhatsAppUrl, SITE } from "@/lib/site-config";

type InquiryFormProps = {
  initialTripType?: string;
  initialDuration?: string;
};

export function InquiryForm({ initialTripType = "", initialDuration = "" }: InquiryFormProps) {
  const [tripType, setTripType] = useState(initialTripType);
  const [duration, setDuration] = useState(initialDuration);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dates, setDates] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setTripType(initialTripType);
    setDuration(initialDuration);
  }, [initialTripType, initialDuration]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = [
      "Hi! I'd like a free custom Nepal itinerary.",
      tripType && `Trip type: ${tripType}`,
      duration && `Duration: ${formatDurationLabel(duration)}`,
      name && `Name: ${name}`,
      email && `Email: ${email}`,
      dates && `Travel dates: ${dates}`,
      message && `Notes: ${message}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(getWhatsAppUrl(body), "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-white/10 bg-white p-6 shadow-lift sm:p-8"
      aria-label="Custom trip inquiry form"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block sm:col-span-1">
          <span className="text-sm font-medium text-charcoal-700">Trip type</span>
          <select
            value={tripType}
            onChange={(e) => setTripType(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-charcoal-200 bg-white px-3 py-2.5 text-sm text-charcoal-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
          >
            <option value="">Select trip type</option>
            {INQUIRY_TRIP_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
        <label className="block sm:col-span-1">
          <span className="text-sm font-medium text-charcoal-700">Trip length</span>
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-charcoal-200 bg-white px-3 py-2.5 text-sm text-charcoal-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
          >
            <option value="">Select duration</option>
            {INQUIRY_DURATION_BANDS.map((d) => (
              <option key={d} value={d}>
                {formatDurationLabel(d)}
              </option>
            ))}
          </select>
        </label>
        <label className="block sm:col-span-1">
          <span className="text-sm font-medium text-charcoal-700">Your name</span>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-charcoal-200 px-3 py-2.5 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
            autoComplete="name"
          />
        </label>
        <label className="block sm:col-span-1">
          <span className="text-sm font-medium text-charcoal-700">Email</span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-charcoal-200 px-3 py-2.5 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
            autoComplete="email"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-sm font-medium text-charcoal-700">Preferred travel dates</span>
          <input
            type="text"
            placeholder="e.g. October 2026, flexible"
            value={dates}
            onChange={(e) => setDates(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-charcoal-200 px-3 py-2.5 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-sm font-medium text-charcoal-700">Anything else we should know?</span>
          <textarea
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Must-sees, fitness level, family needs, approximate budget…"
            className="mt-1.5 w-full resize-none rounded-xl border border-charcoal-200 px-3 py-2.5 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
          />
        </label>
      </div>
      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-brand-700 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-800"
      >
        Request free itinerary
      </button>
      <p className="mt-3 text-center text-xs text-charcoal-500">
        Or email us at{" "}
        <a href={`mailto:${SITE.email}`} className="text-brand-700 hover:underline">
          {SITE.email}
        </a>
      </p>
    </form>
  );
}
