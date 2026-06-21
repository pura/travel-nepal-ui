"use client";

import Link from "next/link";
import { AiChatTrigger } from "@/components/ai-chat";

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-charcoal-200 bg-white/95 p-3 backdrop-blur-md sm:hidden">
      <div className="flex gap-2">
        <Link
          href="/plan"
          className="flex-1 rounded-full bg-brand-700 py-3 text-center text-sm font-semibold text-white"
        >
          Plan your trip
        </Link>
        <AiChatTrigger
          showIcon={false}
          className="flex-1 rounded-full border border-brand-200 bg-brand-50 py-3 text-center text-sm font-semibold text-brand-800"
        >
          Ask AI
        </AiChatTrigger>
      </div>
    </div>
  );
}
