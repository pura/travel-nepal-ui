import { buildAiChatSystemPrompt } from "@/lib/ai-chat-knowledge";
import { getOpenAiApiKey, getOpenAiModel } from "@/lib/env";

/** Shown when the assistant is unavailable (missing API key, outage, etc.) */
export const AI_CHAT_UNAVAILABLE_MESSAGE =
  "Apologies, this service seems to be on maintenance. Please use our plan your journey form.";

export type ChatRole = "user" | "assistant";

export type ChatMessage = {
  role: ChatRole;
  content: string;
};

const MAX_MESSAGE_LENGTH = 2000;
const MAX_HISTORY_TURNS = 10;

export function parseChatRequest(json: unknown):
  | { ok: true; messages: ChatMessage[] }
  | { ok: false; message: string } {
  if (!json || typeof json !== "object") {
    return { ok: false, message: "Invalid request body" };
  }

  const body = json as Record<string, unknown>;
  if (!Array.isArray(body.messages)) {
    return { ok: false, message: "messages array is required" };
  }

  const messages: ChatMessage[] = [];
  for (const item of body.messages) {
    if (!item || typeof item !== "object") {
      return { ok: false, message: "Invalid message in history" };
    }
    const msg = item as Record<string, unknown>;
    if (msg.role !== "user" && msg.role !== "assistant") {
      return { ok: false, message: "Invalid message role" };
    }
    if (typeof msg.content !== "string") {
      return { ok: false, message: "Message content must be a string" };
    }
    const content = msg.content.trim();
    if (!content) {
      return { ok: false, message: "Message content cannot be empty" };
    }
    if (content.length > MAX_MESSAGE_LENGTH) {
      return { ok: false, message: `Message too long (max ${MAX_MESSAGE_LENGTH} characters)` };
    }
    messages.push({ role: msg.role, content });
  }

  if (messages.length === 0) {
    return { ok: false, message: "At least one message is required" };
  }

  const last = messages[messages.length - 1];
  if (last.role !== "user") {
    return { ok: false, message: "Last message must be from the user" };
  }

  const trimmed = messages.slice(-MAX_HISTORY_TURNS * 2);
  return { ok: true, messages: trimmed };
}

export async function generateChatReply(messages: ChatMessage[]): Promise<string> {
  const apiKey = getOpenAiApiKey();
  if (!apiKey) {
    throw new Error("OPENAI_API_KEY is not configured");
  }

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: getOpenAiModel(),
      temperature: 0.4,
      max_tokens: 800,
      messages: [
        { role: "system", content: buildAiChatSystemPrompt() },
        ...messages.map((m) => ({ role: m.role, content: m.content })),
      ],
    }),
  });

  if (!response.ok) {
    const errText = await response.text().catch(() => "");
    throw new Error(`OpenAI API error (${response.status}): ${errText.slice(0, 200)}`);
  }

  const data = (await response.json()) as {
    choices?: { message?: { content?: string } }[];
  };

  const reply = data.choices?.[0]?.message?.content?.trim();
  if (!reply) {
    throw new Error("Empty response from OpenAI");
  }

  return reply;
}
