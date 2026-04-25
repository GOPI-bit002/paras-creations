"use client";

import { useEffect, useRef, useState } from "react";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const QUICK_REPLIES = [
  "Build a house",
  "Renovation",
  "Interior work",
  "Site visit"
];

const WELCOME: ChatMessage = {
  role: "assistant",
  content:
    "Hi! Welcome to Paras Creations. Tell me about your construction project — new house, renovation, interiors, or a site visit, and I'll guide you."
};

function makeId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `s_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

export default function ConstructionChatWidget() {
  const [open, setOpen] = useState(false);
  const [sessionId, setSessionId] = useState<string>("");
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let id = "";
    try {
      id = localStorage.getItem("pc_chat_session") || "";
      if (!id) {
        id = makeId();
        localStorage.setItem("pc_chat_session", id);
      }
    } catch {
      id = makeId();
    }
    setSessionId(id);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth"
    });
  }, [messages, open, loading]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading || !sessionId) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", content: trimmed }]);
    setLoading(true);
    try {
      const res = await fetch("/api/agent", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ message: trimmed, sessionId })
      });
      const data = await res.json().catch(() => ({}));
      const reply =
        (data && typeof data.reply === "string" && data.reply) ||
        "Thanks! Our team will get back to you shortly.";
      setMessages((m) => [...m, { role: "assistant", content: reply }]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content:
            "Sorry, I couldn't reach the server. Please share your phone number and we'll call you back."
        }
      ]);
    } finally {
      setLoading(false);
    }
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    send(input);
  }

  return (
    <>
      {!open && (
        <button
          type="button"
          aria-label="Open chat"
          onClick={() => setOpen(true)}
          style={{
            position: "fixed",
            right: 20,
            bottom: 20,
            zIndex: 9999,
            background: "#111827",
            color: "#fff",
            borderRadius: 9999,
            padding: "14px 18px",
            border: "none",
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            cursor: "pointer",
            fontWeight: 600,
            fontSize: 14,
            display: "flex",
            alignItems: "center",
            gap: 8
          }}
        >
          <span aria-hidden style={{ fontSize: 18 }}>💬</span>
          Chat with us
        </button>
      )}

      {open && (
        <div
          role="dialog"
          aria-label="Paras Creations chat"
          style={{
            position: "fixed",
            right: 16,
            bottom: 16,
            zIndex: 9999,
            width: "min(380px, calc(100vw - 32px))",
            height: "min(560px, calc(100vh - 32px))",
            background: "#fff",
            borderRadius: 16,
            boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            border: "1px solid rgba(0,0,0,0.08)",
            fontFamily:
              "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
          }}
        >
          <div
            style={{
              background: "#111827",
              color: "#fff",
              padding: "12px 14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
              <strong style={{ fontSize: 14 }}>Paras Creations</strong>
              <span style={{ fontSize: 11, opacity: 0.8 }}>
                We usually reply in a few minutes
              </span>
            </div>
            <button
              type="button"
              aria-label="Close chat"
              onClick={() => setOpen(false)}
              style={{
                background: "transparent",
                color: "#fff",
                border: "none",
                fontSize: 20,
                cursor: "pointer",
                lineHeight: 1,
                padding: 4
              }}
            >
              ×
            </button>
          </div>

          <div
            ref={scrollRef}
            style={{
              flex: 1,
              overflowY: "auto",
              padding: 14,
              background: "#f9fafb",
              display: "flex",
              flexDirection: "column",
              gap: 8
            }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  alignSelf: m.role === "user" ? "flex-end" : "flex-start",
                  background: m.role === "user" ? "#111827" : "#ffffff",
                  color: m.role === "user" ? "#fff" : "#111827",
                  padding: "9px 12px",
                  borderRadius: 12,
                  maxWidth: "85%",
                  fontSize: 14,
                  lineHeight: 1.4,
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                  border:
                    m.role === "assistant"
                      ? "1px solid rgba(0,0,0,0.06)"
                      : "none",
                  boxShadow:
                    m.role === "assistant"
                      ? "0 1px 2px rgba(0,0,0,0.04)"
                      : "none"
                }}
              >
                {m.content}
              </div>
            ))}
            {loading && (
              <div
                style={{
                  alignSelf: "flex-start",
                  background: "#fff",
                  color: "#6b7280",
                  padding: "9px 12px",
                  borderRadius: 12,
                  fontSize: 14,
                  border: "1px solid rgba(0,0,0,0.06)"
                }}
              >
                <span>typing</span>
                <span className="pc-dots" aria-hidden>
                  …
                </span>
              </div>
            )}
          </div>

          {messages.length <= 1 && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 6,
                padding: "8px 10px",
                borderTop: "1px solid rgba(0,0,0,0.06)",
                background: "#fff"
              }}
            >
              {QUICK_REPLIES.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => send(q)}
                  disabled={loading}
                  style={{
                    background: "#f3f4f6",
                    color: "#111827",
                    border: "1px solid rgba(0,0,0,0.08)",
                    borderRadius: 9999,
                    padding: "6px 10px",
                    fontSize: 12,
                    cursor: loading ? "not-allowed" : "pointer"
                  }}
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          <form
            onSubmit={onSubmit}
            style={{
              display: "flex",
              gap: 6,
              padding: 10,
              background: "#fff",
              borderTop: "1px solid rgba(0,0,0,0.08)"
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message…"
              disabled={loading}
              style={{
                flex: 1,
                padding: "10px 12px",
                borderRadius: 9999,
                border: "1px solid rgba(0,0,0,0.12)",
                fontSize: 14,
                outline: "none",
                background: "#f9fafb"
              }}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              style={{
                background: "#111827",
                color: "#fff",
                border: "none",
                borderRadius: 9999,
                padding: "0 16px",
                fontSize: 14,
                fontWeight: 600,
                cursor: loading || !input.trim() ? "not-allowed" : "pointer",
                opacity: loading || !input.trim() ? 0.6 : 1
              }}
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}
