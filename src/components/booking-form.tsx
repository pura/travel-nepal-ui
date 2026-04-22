"use client";

import { useState } from "react";
import type { CheckoutPayload, PublicTrip } from "@/types/trip";

type Props = { trip: PublicTrip };

export function BookingForm({ trip }: Props) {
  const [travelers, setTravelers] = useState(2);
  const [startDate, setStartDate] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ ref?: string; err?: string; payUrl?: string }>(
    {},
  );

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setResult({});
    const payload: CheckoutPayload = {
      tripSlug: trip.slug,
      tripId: trip.id,
      travelers,
      startDate,
      email,
      fullName,
      notes: notes || undefined,
    };
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as {
        ok?: boolean;
        bookingReference?: string;
        paymentUrl?: string | null;
        message?: string;
      };
      if (!res.ok) {
        setResult({ err: data.message || "Booking failed" });
        return;
      }
      if (data.paymentUrl) {
        window.location.href = data.paymentUrl;
        return;
      }
      setResult({ ref: data.bookingReference, payUrl: data.paymentUrl ?? undefined });
    } catch {
      setResult({ err: "Network error — try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-stone-700" htmlFor="fullName">
          Full name
        </label>
        <input
          id="fullName"
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-900 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-stone-700" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-900 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-stone-700" htmlFor="travelers">
            Travelers
          </label>
          <input
            id="travelers"
            type="number"
            min={1}
            max={20}
            required
            value={travelers}
            onChange={(e) => setTravelers(Number(e.target.value))}
            className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-900 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-stone-700" htmlFor="start">
            Preferred start
          </label>
          <input
            id="start"
            type="date"
            required
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-900 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-stone-700" htmlFor="notes">
          Notes (optional)
        </label>
        <textarea
          id="notes"
          rows={3}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-900 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
          placeholder="Dietary needs, flight arrival time, rooming…"
        />
      </div>
      {result.err ? (
        <p className="text-sm text-red-700" role="alert">
          {result.err}
        </p>
      ) : null}
      {result.ref ? (
        <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
          <p className="font-semibold">Booking received</p>
          <p className="mt-1">
            Reference: <span className="font-mono">{result.ref}</span>
          </p>
          <p className="mt-2 text-emerald-800">
            Your team will confirm availability and payment. When Symfony returns a
            payment URL, customers are redirected automatically.
          </p>
        </div>
      ) : null}
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-emerald-700 py-3 text-sm font-semibold text-white shadow transition hover:bg-emerald-800 disabled:opacity-60"
      >
        {loading ? "Submitting…" : "Pay & confirm (deposit)"}
      </button>
    </form>
  );
}
