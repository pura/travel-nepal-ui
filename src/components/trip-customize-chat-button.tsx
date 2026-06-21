"use client";

import { AiChatTrigger } from "@/components/ai-chat";

export function TripCustomizeChatButton({ tripTitle }: { tripTitle: string }) {
  return (
    <AiChatTrigger
      showIcon={false}
      seedMessage={`I'm interested in customizing: ${tripTitle}`}
      autoSend
      className="rounded-full bg-brand-700 px-3 py-2.5 text-center text-xs font-semibold text-white transition hover:bg-brand-800 sm:text-sm"
    >
      Customize tour
    </AiChatTrigger>
  );
}
