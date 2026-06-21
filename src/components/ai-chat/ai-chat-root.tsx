"use client";

import { AiChatFab } from "@/components/ai-chat/ai-chat-fab";
import { AiChatPanel } from "@/components/ai-chat/ai-chat-panel";
import { AiChatProvider } from "@/components/ai-chat/ai-chat-provider";

export function AiChatRoot({ children }: { children: React.ReactNode }) {
  return (
    <AiChatProvider>
      {children}
      <AiChatPanel />
      <AiChatFab />
    </AiChatProvider>
  );
}

export { AiChatTrigger } from "@/components/ai-chat/ai-chat-trigger";
export { useAiChat } from "@/components/ai-chat/ai-chat-provider";
