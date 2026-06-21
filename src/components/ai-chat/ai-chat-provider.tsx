"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type { ChatMessage } from "@/lib/ai-chat";

export type OpenChatOptions = {
  seedMessage?: string;
  autoSend?: boolean;
};

type AiChatContextValue = {
  isOpen: boolean;
  messages: ChatMessage[];
  isLoading: boolean;
  error: string | null;
  openChat: (options?: OpenChatOptions) => void;
  closeChat: () => void;
  sendMessage: (content: string) => Promise<void>;
};

const AiChatContext = createContext<AiChatContextValue | null>(null);

export function useAiChat(): AiChatContextValue {
  const ctx = useContext(AiChatContext);
  if (!ctx) {
    throw new Error("useAiChat must be used within AiChatProvider");
  }
  return ctx;
}

async function fetchReply(messages: ChatMessage[]): Promise<string> {
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages }),
  });
  const data = (await res.json()) as { ok?: boolean; reply?: string; message?: string };
  if (!res.ok) {
    throw new Error(data.message || "Could not get a reply");
  }
  return data.reply ?? "";
}

export function AiChatProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const messagesRef = useRef<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  messagesRef.current = messages;

  const sendMessage = useCallback(async (content: string) => {
    const trimmed = content.trim();
    if (!trimmed || isLoading) return;

    const userMessage: ChatMessage = { role: "user", content: trimmed };
    const nextMessages = [...messagesRef.current, userMessage];
    setMessages(nextMessages);
    setIsLoading(true);
    setError(null);

    try {
      const reply = await fetchReply(nextMessages);
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setMessages((prev) => prev.slice(0, -1));
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);

  const openChat = useCallback(
    (options?: OpenChatOptions) => {
      setIsOpen(true);
      setError(null);
      if (options?.seedMessage?.trim()) {
        if (options.autoSend) {
          void sendMessage(options.seedMessage.trim());
        }
      }
    },
    [sendMessage],
  );

  const closeChat = useCallback(() => {
    setIsOpen(false);
  }, []);

  const value = useMemo(
    () => ({
      isOpen,
      messages,
      isLoading,
      error,
      openChat,
      closeChat,
      sendMessage,
    }),
    [isOpen, messages, isLoading, error, openChat, closeChat, sendMessage],
  );

  return <AiChatContext.Provider value={value}>{children}</AiChatContext.Provider>;
}
