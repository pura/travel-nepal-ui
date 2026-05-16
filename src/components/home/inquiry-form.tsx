"use client";

import { useState } from "react";
import { getWhatsAppUrl, SITE } from "@/lib/site-config";

export function InquiryForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dates, setDates] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = [
      "Hi! I'd like a free custom Nepal itinerary.",
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
          <span className="text-sm font-medium text-charcoal-700">What are you dreaming of?</span>
          <textarea
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Trekking, family trip, culture, wildlife…"
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
