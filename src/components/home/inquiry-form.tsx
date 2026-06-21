"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import {
  formatDurationLabel,
  INQUIRY_DURATION_BANDS,
  INQUIRY_TRIP_TYPES,
} from "@/lib/inquiry-plan-options";
import { SITE } from "@/lib/site-config";

type InquiryFormProps = {
  initialTripType?: string;
  initialDuration?: string;
};

function InquiryFormFields({
  initialTripType = "",
  initialDuration = "",
}: InquiryFormProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const submitted = searchParams.get("submitted") === "1";

  const [tripType, setTripType] = useState(initialTripType);
  const [duration, setDuration] = useState(initialDuration);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dates, setDates] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setTripType(initialTripType);
    setDuration(initialDuration);
  }, [initialTripType, initialDuration]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tripType: tripType || undefined,
          duration: duration || undefined,
          name,
          email,
          dates: dates || undefined,
          message: message || undefined,
        }),
      });

      const data = (await res.json()) as { ok?: boolean; message?: string };
      if (!res.ok) {
        setError(data.message || "Could not send your inquiry. Please try again.");
        return;
      }

      const params = new URLSearchParams();
      params.set("submitted", "1");
      if (tripType) params.set("trip_type", tripType);
      if (duration) params.set("duration", duration);
      router.replace(`/plan?${params.toString()}`);
    } catch {
      setError("Network error — please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div
        className="rounded-3xl border border-white/10 bg-white p-6 shadow-lift sm:p-8"
        role="status"
        aria-live="polite"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-700">
          Inquiry received
        </p>
        <h3 className="mt-2 font-display text-2xl font-semibold text-charcoal-900">
          Thank you — we&apos;ll be in touch soon.
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-charcoal-600">
          Your trip request has been sent to our team. We aim to reply within one working day with
          ideas tailored to your dates and trekking style.
        </p>
        <a
          href="/plan"
          className="mt-6 inline-flex rounded-full border border-charcoal-200 px-5 py-2.5 text-sm font-semibold text-charcoal-800 transition hover:border-brand-300 hover:text-brand-800"
        >
          Submit another inquiry
        </a>
      </div>
    );
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
      {error ? (
        <p className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={loading}
        className="mt-6 w-full rounded-full bg-brand-700 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-800 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Sending…" : "Request free itinerary"}
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

function InquiryFormFallback() {
  return (
    <div
      className="rounded-3xl border border-white/10 bg-white p-6 shadow-lift sm:p-8"
      aria-hidden
    >
      <div className="h-80 animate-pulse rounded-2xl bg-charcoal-100" />
    </div>
  );
}

export function InquiryForm(props: InquiryFormProps) {
  return (
    <Suspense fallback={<InquiryFormFallback />}>
      <InquiryFormFields {...props} />
    </Suspense>
  );
}
