"use client";

import { AiChatTrigger } from "@/components/ai-chat";

export function HeroChatButton() {
  return (
    <AiChatTrigger
      showIcon
      seedMessage="Hello — I'd like help planning a trek in Nepal."
      autoSend
      className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-8 py-3.5 text-base font-semibold text-white shadow-lift transition-all duration-200 hover:bg-brand-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 motion-safe:hover:translate-y-[-2px]"
    >
      Ask our AI planner
    </AiChatTrigger>
  );
}
