"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useAiChat } from "@/components/ai-chat/ai-chat-provider";
import { IconSparkles } from "@/components/ui/icons";
import { AI_CHAT_UNAVAILABLE_MESSAGE } from "@/lib/ai-chat";
import { SITE } from "@/lib/site-config";

export function AiChatPanel() {
  const { isOpen, messages, isLoading, error, closeChat, sendMessage } = useAiChat();
  const [input, setInput] = useState("");
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, isLoading, isOpen]);

  if (!isOpen) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const value = input.trim();
    if (!value) return;
    setInput("");
    await sendMessage(value);
  }

  return (
    <>
      <button
        type="button"
        className="fixed inset-0 z-[60] bg-charcoal-950/40 backdrop-blur-[2px]"
        aria-label="Close chat"
        onClick={closeChat}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="ai-chat-title"
        className="fixed bottom-0 right-0 z-[70] flex h-[min(85dvh,640px)] w-full flex-col overflow-hidden rounded-t-3xl border border-charcoal-200 bg-white shadow-2xl sm:bottom-24 sm:right-6 sm:h-[min(70dvh,560px)] sm:w-[min(100%,400px)] sm:rounded-3xl"
      >
        <header className="flex items-center justify-between border-b border-charcoal-100 bg-brand-50/80 px-4 py-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-700 text-white">
              <IconSparkles className="h-4 w-4" />
            </span>
            <div>
              <h2 id="ai-chat-title" className="text-sm font-semibold text-charcoal-900">
                AI travel assistant
              </h2>
              <p className="text-xs text-charcoal-500">Nepal trekking &amp; tour guidance</p>
            </div>
          </div>
          <button
            type="button"
            onClick={closeChat}
            className="rounded-lg px-2 py-1 text-sm font-medium text-charcoal-500 transition hover:bg-charcoal-100 hover:text-charcoal-800"
          >
            Close
          </button>
        </header>

        <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
          {messages.length === 0 ? (
            <div className="rounded-2xl bg-charcoal-50 px-4 py-3 text-sm leading-relaxed text-charcoal-600">
              <p>Ask about treks, difficulty, seasons, or which itinerary might suit you.</p>
              <p className="mt-2 text-xs text-charcoal-500">
                For custom quotes, use our plan form — I can&apos;t book or confirm availability here.
              </p>
            </div>
          ) : null}
          {messages.map((msg, i) => (
            <div
              key={`${msg.role}-${i}`}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-brand-700 text-white"
                    : "bg-charcoal-100 text-charcoal-800"
                }`}
              >
                {msg.content.split("\n").map((line, lineIndex) => (
                  <p key={lineIndex} className={lineIndex > 0 ? "mt-2" : undefined}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
          {isLoading ? (
            <div className="flex justify-start">
              <div className="rounded-2xl bg-charcoal-100 px-3.5 py-2.5 text-sm text-charcoal-500">
                Thinking…
              </div>
            </div>
          ) : null}
          {error ? (
            <div
              className="rounded-xl border border-amber-200 bg-amber-50 px-3 py-2.5 text-xs leading-relaxed text-amber-950"
              role="alert"
            >
              <p>{error}</p>
              {error === AI_CHAT_UNAVAILABLE_MESSAGE ? (
                <Link href="/plan" className="mt-2 inline-block font-semibold text-brand-700 hover:underline">
                  Plan your trip →
                </Link>
              ) : null}
            </div>
          ) : null}
        </div>

        <form onSubmit={handleSubmit} className="border-t border-charcoal-100 p-3">
          <div className="flex gap-2">
            <textarea
              ref={inputRef}
              rows={2}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  void handleSubmit(e);
                }
              }}
              placeholder="Ask about treks, seasons, fitness…"
              disabled={isLoading}
              className="min-h-[2.75rem] flex-1 resize-none rounded-xl border border-charcoal-200 px-3 py-2 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="self-end rounded-xl bg-brand-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              Send
            </button>
          </div>
        </form>

        <footer className="flex flex-wrap items-center justify-between gap-2 border-t border-charcoal-100 bg-charcoal-50/80 px-4 py-2.5 text-xs">
          <Link href="/plan" className="font-semibold text-brand-700 hover:underline">
            Request free itinerary
          </Link>
          <a href={`mailto:${SITE.email}`} className="text-charcoal-600 hover:text-charcoal-900">
            Email us
          </a>
        </footer>
      </div>
    </>
  );
}
