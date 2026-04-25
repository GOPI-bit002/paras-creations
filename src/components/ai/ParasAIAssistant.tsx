"use client";

// Paras AI Assistant — V1 (mock-only).
//
// Security posture for V1:
// - All replies come from src/lib/mock-ai.ts. There is NO real AI API call,
//   NO database write, and NO server route in this version.
// - The lead-capture flow assembles a draft IN-MEMORY only and simulates
//   submission. Nothing is sent to a backend.
// - Inputs are length-capped client-side. Real validation, rate limiting,
//   audit logging, PII redaction, and Resend email alerts will be added
//   when /api/ai-agent and the Neon/Prisma data layer land. See markers
//   tagged "FUTURE:" below.

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import {
  HUMAN_HANDOVER,
  QUICK_ACTIONS,
  WELCOME_MESSAGE,
  replyTo,
  shouldStartLeadFlow,
  validateName,
  validatePhone,
  validateShortText
} from "@/lib/mock-ai";
import type {
  AILeadDraft,
  AILeadStage,
  AIMessage,
  AIQuickAction
} from "@/types/ai";
import ChatMessage from "./ChatMessage";
import QuickActions from "./QuickActions";

function makeId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `m_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

function msg(role: AIMessage["role"], content: string): AIMessage {
  return { id: makeId(), role, content, createdAt: new Date().toISOString() };
}

// Prompts shown by the assistant during the structured lead flow.
const STAGE_PROMPTS: Record<Exclude<AILeadStage, "idle" | "submitted">, string> =
  {
    fullName: "Sure — let's create your enquiry. What's your full name?",
    phone: "Thanks. What's the best phone number to reach you on?",
    projectType:
      "What type of project is this? (e.g. Government Project, Private Building, Renovation, Interior Work, Commercial)",
    location: "Where is the site located? (city / area)",
    budget:
      "Approximate budget range? You can give a range — e.g. ₹15–20 L. (Indicative only, the final quote needs a site visit.)",
    timeline: "Expected timeline? (e.g. 3 months, 6 months, FY 2026–27)",
    message: "Lastly, a short message about the project (under 200 chars)."
  };

const stageOrder: Exclude<AILeadStage, "idle" | "submitted">[] = [
  "fullName",
  "phone",
  "projectType",
  "location",
  "budget",
  "timeline",
  "message"
];

export default function ParasAIAssistant() {
  const pathname = usePathname();
  // Public widget only — never render on the admin panel.
  const hidden = pathname?.startsWith("/admin") ?? false;

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<AIMessage[]>([
    msg("assistant", WELCOME_MESSAGE)
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const [stage, setStage] = useState<AILeadStage>("idle");
  const [draft, setDraft] = useState<AILeadDraft>({});

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth"
    });
  }, [messages, open, typing]);

  useEffect(() => {
    if (open) {
      // Small delay so the panel mount animation doesn't fight focus.
      const t = setTimeout(() => inputRef.current?.focus(), 250);
      return () => clearTimeout(t);
    }
  }, [open]);

  const showQuickActions = useMemo(
    () => stage === "idle" && messages.filter((m) => m.role === "user").length === 0,
    [stage, messages]
  );

  function pushAssistant(text: string) {
    setMessages((prev) => [...prev, msg("assistant", text)]);
  }

  function pushUser(text: string) {
    setMessages((prev) => [...prev, msg("user", text)]);
  }

  // Simulate a tiny "thinking" delay so the UX feels considered, not instant.
  function withTyping(fn: () => void, delay = 450) {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      fn();
    }, delay);
  }

  function startLeadFlow() {
    setStage("fullName");
    withTyping(() => pushAssistant(STAGE_PROMPTS.fullName));
  }

  function advanceLeadFlow(rawInput: string) {
    // Each stage validates + stores its own field, then asks the next question.
    // FUTURE: replace this client-side flow with a server endpoint that
    // validates with zod and writes to the DB (Neon/Prisma) atomically.
    const value = rawInput.trim();

    switch (stage) {
      case "fullName": {
        const name = validateName(value);
        if (!name) {
          withTyping(() =>
            pushAssistant(
              "That name looks off — please share a real full name (2–80 chars)."
            )
          );
          return;
        }
        setDraft((d) => ({ ...d, fullName: name }));
        setStage("phone");
        withTyping(() => pushAssistant(STAGE_PROMPTS.phone));
        return;
      }
      case "phone": {
        const phone = validatePhone(value);
        if (!phone) {
          withTyping(() =>
            pushAssistant(
              "That phone number doesn't look valid. Please enter a 10-digit mobile number."
            )
          );
          return;
        }
        setDraft((d) => ({ ...d, phone }));
        setStage("projectType");
        withTyping(() => pushAssistant(STAGE_PROMPTS.projectType));
        return;
      }
      case "projectType": {
        const v = validateShortText(value, 60);
        if (!v) {
          withTyping(() =>
            pushAssistant("Please share a short project type (under 60 chars).")
          );
          return;
        }
        setDraft((d) => ({ ...d, projectType: v }));
        setStage("location");
        withTyping(() => pushAssistant(STAGE_PROMPTS.location));
        return;
      }
      case "location": {
        const v = validateShortText(value, 80);
        if (!v) {
          withTyping(() =>
            pushAssistant("Please share a valid location (under 80 chars).")
          );
          return;
        }
        setDraft((d) => ({ ...d, location: v }));
        setStage("budget");
        withTyping(() => pushAssistant(STAGE_PROMPTS.budget));
        return;
      }
      case "budget": {
        const v = validateShortText(value, 40);
        if (!v) {
          withTyping(() =>
            pushAssistant("Please share a budget range (under 40 chars).")
          );
          return;
        }
        setDraft((d) => ({ ...d, budget: v }));
        setStage("timeline");
        withTyping(() => pushAssistant(STAGE_PROMPTS.timeline));
        return;
      }
      case "timeline": {
        const v = validateShortText(value, 40);
        if (!v) {
          withTyping(() =>
            pushAssistant("Please share a timeline (under 40 chars).")
          );
          return;
        }
        setDraft((d) => ({ ...d, timeline: v }));
        setStage("message");
        withTyping(() => pushAssistant(STAGE_PROMPTS.message));
        return;
      }
      case "message": {
        const v = validateShortText(value, 200);
        if (!v) {
          withTyping(() =>
            pushAssistant("Please keep the message under 200 characters.")
          );
          return;
        }
        setDraft((d) => ({ ...d, message: v }));
        setStage("submitted");
        // FUTURE: POST /api/ai-leads here; on success show this same message.
        // For V1, we never persist or transmit the draft.
        withTyping(
          () =>
            pushAssistant(
              "Your enquiry has been created. Paras Creations team will contact you shortly."
            ),
          700
        );
        return;
      }
      default:
        return;
    }
  }

  function handleQuickAction(a: AIQuickAction) {
    if (typing) return;
    pushUser(a.label);

    // "Talk to team" jumps straight to lead capture (we want a phone number).
    // "View completed projects" is informational — no flow needed.
    if (a.id === "talk" || a.id === "quote" || a.id === "government" || a.id === "private") {
      withTyping(() => pushAssistant(replyTo(a.prompt)));
      // Kick the structured flow shortly after the conversational reply.
      setTimeout(() => startLeadFlow(), 900);
      return;
    }

    withTyping(() => pushAssistant(replyTo(a.prompt)));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || typing) return;

    // Hard cap to avoid pathological input even in V1 mock mode.
    const safe = trimmed.slice(0, 500);
    setInput("");
    pushUser(safe);

    // If we're inside the lead flow, route to the stage handler.
    if (stage !== "idle" && stage !== "submitted") {
      advanceLeadFlow(safe);
      return;
    }

    // Legal/payment/contract intents always escalate to human handover —
    // they should not be answered by V1 mock logic.
    const reply = replyTo(safe);
    withTyping(() => pushAssistant(reply));

    if (reply !== HUMAN_HANDOVER && shouldStartLeadFlow(safe)) {
      setTimeout(() => startLeadFlow(), 900);
    }
  }

  function resetConversation() {
    setMessages([msg("assistant", WELCOME_MESSAGE)]);
    setStage("idle");
    setDraft({});
    setInput("");
  }

  if (hidden) return null;

  // Stage label shown in the header chip (when the form is mid-flow).
  const stageLabel =
    stage !== "idle" && stage !== "submitted"
      ? `Step ${stageOrder.indexOf(stage) + 1} of ${stageOrder.length}`
      : null;

  return (
    <>
      {/* Floating launcher */}
      {!open && (
        <button
          type="button"
          aria-label="Open Paras AI Assistant"
          onClick={() => setOpen(true)}
          className="fixed bottom-5 right-5 z-[9999] group"
        >
          <span className="absolute inset-0 rounded-full bg-brand-gold/40 blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />
          <span className="relative flex items-center gap-2 bg-gradient-to-br from-brand-black to-brand-gray text-white pl-3 pr-4 py-3 rounded-full border border-brand-gold/40 shadow-gold hover:-translate-y-0.5 transition-transform">
            <span className="h-8 w-8 rounded-full bg-gradient-to-br from-brand-gold to-brand-goldlight flex items-center justify-center text-brand-black font-extrabold text-sm">
              P
            </span>
            <span className="flex flex-col items-start leading-tight">
              <span className="text-[10px] uppercase tracking-[0.18em] text-brand-gold font-semibold">
                Paras AI
              </span>
              <span className="text-xs font-semibold">Ask about your project</span>
            </span>
          </span>
        </button>
      )}

      {/* Chat panel */}
      {open && (
        <div
          role="dialog"
          aria-label="Paras AI Assistant"
          className="fixed z-[9999] right-3 bottom-3 sm:right-5 sm:bottom-5 w-[calc(100vw-24px)] sm:w-[400px] max-w-[400px] h-[min(620px,calc(100vh-24px))] flex flex-col rounded-2xl overflow-hidden border border-brand-gold/25 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] bg-gradient-to-b from-[#0c0c0c] via-[#111111] to-[#0a0a0a] animate-fade-up"
        >
          {/* Header */}
          <div className="relative px-4 py-3 border-b border-white/10 bg-gradient-to-r from-brand-black via-brand-gray to-brand-black">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 min-w-0">
                <div className="relative h-9 w-9 rounded-lg bg-gradient-to-br from-brand-gold to-brand-goldlight flex items-center justify-center text-brand-black font-extrabold shadow-gold">
                  P
                  <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-brand-black animate-pulse" />
                </div>
                <div className="min-w-0">
                  <div className="font-display text-sm text-white tracking-wide truncate">
                    Paras AI Assistant
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-brand-gold/90 font-semibold">
                    {stageLabel ?? "Online · Construction Helpdesk"}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={resetConversation}
                  aria-label="Reset conversation"
                  className="text-white/60 hover:text-brand-gold p-1.5 rounded-md hover:bg-white/5 transition-colors"
                  title="Restart"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v6h6M20 20v-6h-6M5 19a9 9 0 0014.95-3.5M19 5a9 9 0 00-14.95 3.5"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close chat"
                  className="text-white/60 hover:text-white p-1.5 rounded-md hover:bg-white/5 transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto px-3.5 py-4 space-y-3 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.06),_transparent_60%)]"
          >
            {messages.map((m) => (
              <ChatMessage key={m.id} message={m} />
            ))}
            {typing && (
              <div className="flex items-center gap-2">
                <div className="flex-shrink-0 h-7 w-7 rounded-full bg-gradient-to-br from-brand-gold to-brand-goldlight flex items-center justify-center text-brand-black font-extrabold text-[11px]">
                  P
                </div>
                <div className="rounded-2xl rounded-tl-sm bg-white/[0.06] border border-white/10 px-3.5 py-2.5 text-sm text-white/70">
                  <span className="inline-flex gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-gold animate-bounce" />
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-brand-gold animate-bounce"
                      style={{ animationDelay: "0.15s" }}
                    />
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-brand-gold animate-bounce"
                      style={{ animationDelay: "0.3s" }}
                    />
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Quick actions (only at start) */}
          {showQuickActions && (
            <div className="border-t border-white/10 bg-black/40">
              <QuickActions
                actions={QUICK_ACTIONS}
                onPick={handleQuickAction}
                disabled={typing}
              />
            </div>
          )}

          {/* Submitted state — show a tidy summary chip instead of the form */}
          {stage === "submitted" && (
            <div className="border-t border-brand-gold/20 bg-brand-gold/[0.06] px-3.5 py-2.5 text-[11px] text-brand-goldlight">
              Enquiry recorded locally · our team will reach out · indicative only
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 p-2.5 bg-black/60 border-t border-white/10"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={
                stage === "submitted"
                  ? "Ask anything else…"
                  : stage !== "idle"
                  ? "Type your answer…"
                  : "Ask about your project…"
              }
              maxLength={500}
              disabled={typing}
              className="flex-1 bg-white/[0.06] border border-white/10 focus:border-brand-gold/60 text-white placeholder:text-white/40 text-sm rounded-full px-4 py-2.5 outline-none focus:ring-2 focus:ring-brand-gold/30 transition-colors"
            />
            <button
              type="submit"
              disabled={typing || !input.trim()}
              aria-label="Send"
              className="h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-br from-brand-gold to-brand-goldlight text-brand-black shadow-gold disabled:opacity-40 disabled:cursor-not-allowed hover:-translate-y-0.5 transition-transform"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.4}
                  d="M5 12h14m0 0l-6-6m6 6l-6 6"
                />
              </svg>
            </button>
          </form>

          <div className="px-3.5 pb-2 pt-1 bg-black/60 text-[10px] text-white/40 leading-relaxed">
            Mock assistant · indicative info only · no contracts confirmed here.
          </div>
        </div>
      )}
    </>
  );
}
