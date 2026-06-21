"use client";

import { useAiChat } from "@/components/ai-chat/ai-chat-provider";
import { IconSparkles } from "@/components/ui/icons";

export function AiChatFab() {
  const { isOpen, openChat } = useAiChat();

  if (isOpen) return null;

  return (
    <button
      type="button"
      onClick={() => openChat()}
      className="fixed bottom-20 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand-700 text-white shadow-lift transition hover:scale-105 hover:bg-brand-800 sm:bottom-6 sm:right-6 md:bottom-8"
      aria-label="Open AI travel assistant"
    >
      <IconSparkles className="h-7 w-7" />
    </button>
  );
}
