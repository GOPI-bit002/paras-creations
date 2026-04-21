import { createClient, SupabaseClient } from "@supabase/supabase-js";

let cached: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) return null;
  if (cached) return cached;
  cached = createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false }
  });
  return cached;
}

export async function logAgentAction(
  sessionId: string,
  action: string,
  payload: unknown,
  status: "success" | "error" = "success",
  errorMessage?: string
) {
  const sb = getSupabaseAdmin();
  if (!sb) return;
  try {
    await sb.from("agent_actions").insert({
      session_id: sessionId,
      action,
      payload,
      status,
      error_message: errorMessage ?? null
    });
  } catch {
    // swallow: logging should never break the flow
  }
}

export async function saveConversationTurn(
  sessionId: string,
  role: "user" | "assistant",
  content: string
) {
  const sb = getSupabaseAdmin();
  if (!sb) return;
  try {
    await sb.from("conversations").insert({
      session_id: sessionId,
      role,
      content
    });
  } catch {
    // ignore
  }
}
