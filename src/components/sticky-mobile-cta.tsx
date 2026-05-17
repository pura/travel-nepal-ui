"use client";

import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/site-config";

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-charcoal-200 bg-white/95 p-3 backdrop-blur-md sm:hidden">
      <div className="flex gap-2">
        <Link
          href="/plan"
          className="flex-1 rounded-full bg-brand-700 py-3 text-center text-sm font-semibold text-white"
        >
          Plan Your Trip
        </Link>
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 rounded-full border border-[#25D366] bg-[#25D366]/10 py-3 text-center text-sm font-semibold text-[#128C7E]"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
