"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { useAiChat, type OpenChatOptions } from "@/components/ai-chat/ai-chat-provider";
import { IconSparkles } from "@/components/ui/icons";

type AiChatTriggerProps = {
  children: ReactNode;
  className?: string;
  seedMessage?: string;
  autoSend?: boolean;
  showIcon?: boolean;
  onOpen?: () => void;
} & Omit<ComponentPropsWithoutRef<"button">, "onClick" | "children">;

export function AiChatTrigger({
  children,
  className,
  seedMessage,
  autoSend = false,
  showIcon = true,
  onOpen,
  ...props
}: AiChatTriggerProps) {
  const { openChat } = useAiChat();

  function handleClick() {
    const options: OpenChatOptions = {};
    if (seedMessage) {
      options.seedMessage = seedMessage;
      options.autoSend = autoSend;
    }
    openChat(options);
    onOpen?.();
  }

  return (
    <button type="button" className={className} onClick={handleClick} {...props}>
      {showIcon ? <IconSparkles className="h-5 w-5 shrink-0" aria-hidden /> : null}
      {children}
    </button>
  );
}
