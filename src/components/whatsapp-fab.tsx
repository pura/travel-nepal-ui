"use client";

import { IconWhatsApp } from "@/components/ui/icons";
import { getWhatsAppUrl } from "@/lib/site-config";

export function WhatsAppFab() {
  return (
    <a
      href={getWhatsAppUrl("Hi! I'd like help planning a trip to Nepal.")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition hover:scale-105 hover:bg-[#1fb855] sm:bottom-6 sm:right-6 md:bottom-8"
      aria-label="Chat on WhatsApp"
    >
      <IconWhatsApp className="h-7 w-7" />
    </a>
  );
}
