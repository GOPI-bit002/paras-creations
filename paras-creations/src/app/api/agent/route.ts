import { NextRequest, NextResponse } from "next/server";
import { generateText, tool, stepCountIs } from "ai";
import { anthropic } from "@ai-sdk/anthropic";
import { z } from "zod";
import {
  getSupabaseAdmin,
  logAgentAction,
  saveConversationTurn
} from "@/lib/supabase";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SYSTEM_PROMPT = `You are the virtual assistant for Paras Creations, a construction company in India.

Services you can talk about:
- residential construction (house building)
- commercial construction (offices, shops)
- renovation
- interior work
- civil work
- repair and maintenance
- contractor services
- site visit and project consultation

Strict rules:
- Never invent or quote exact construction prices or per-sq-ft rates.
- Never guarantee final project cost, completion dates, or engineer/contractor availability.
- Never say a project is "confirmed" — only the team can confirm.
- If the visitor asks about price, acknowledge it depends on many factors and offer to collect details so the team can share a proper estimate.
- Always collect a phone number before creating a serious lead or project inquiry.
- Keep replies short, friendly, professional. 2–4 sentences max unless the user asks for more.
- Ask one or two questions at a time, don't overwhelm.

Information to collect when the visitor shows real interest:
name, phone, email (if available), location / site address, project type, residential or commercial,
new construction or renovation, approximate area (sq ft), budget (if available), timeline,
whether a site visit is required.

Tool usage:
- Call createLead once you have at least name and phone.
- Call createProjectInquiry once you have project details + phone number.
- Call notifyTeam after creating a lead or inquiry so the team is alerted.
- Call sendCustomerConfirmation after a lead or inquiry is created, to confirm to the customer.
- Call scheduleFollowUp if the customer asks for a callback or site visit at a later time.
- Call updateLeadStatus if the conversation reveals the lead is hot/cold/not-interested.
- Do NOT mention tool names to the user. Speak naturally.

If a tool fails, apologize briefly and tell the user the team will reach out manually.`;

type Lead = {
  id?: string;
  session_id: string;
  name?: string | null;
  phone?: string | null;
  email?: string | null;
  location?: string | null;
  status?: string | null;
};

async function postWebhook(url: string | undefined, payload: unknown) {
  if (!url) return { ok: false, skipped: true };
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload)
    });
    return { ok: res.ok, status: res.status };
  } catch (e: any) {
    return { ok: false, error: e?.message ?? "webhook failed" };
  }
}

function buildTools(sessionId: string) {
  return {
    createLead: tool({
      description:
        "Create a new lead in Supabase once we have at least the visitor's name and phone number.",
      inputSchema: z.object({
        name: z.string().min(1),
        phone: z.string().min(5),
        email: z.string().email().optional(),
        location: z.string().optional(),
        source: z.string().optional()
      }),
      execute: async (input) => {
        const sb = getSupabaseAdmin();
        if (!sb) {
          await logAgentAction(
            sessionId,
            "createLead",
            input,
            "error",
            "supabase not configured"
          );
          return { ok: false, error: "backend not configured" };
        }
        const { data, error } = await sb
          .from("leads")
          .insert({
            session_id: sessionId,
            name: input.name,
            phone: input.phone,
            email: input.email ?? null,
            location: input.location ?? null,
            source: input.source ?? "chat_widget",
            status: "new"
          })
          .select("id")
          .single();
        if (error) {
          await logAgentAction(sessionId, "createLead", input, "error", error.message);
          return { ok: false, error: error.message };
        }
        await logAgentAction(sessionId, "createLead", { ...input, leadId: data.id });
        return { ok: true, leadId: data.id };
      }
    }),

    createProjectInquiry: tool({
      description:
        "Create a project inquiry with the construction project details collected from the visitor.",
      inputSchema: z.object({
        leadId: z.string().optional(),
        projectType: z.string(),
        category: z.enum(["residential", "commercial", "other"]).optional(),
        workType: z.enum(["new_construction", "renovation", "interior", "repair", "other"]).optional(),
        location: z.string().optional(),
        approxAreaSqft: z.number().optional(),
        budget: z.string().optional(),
        timeline: z.string().optional(),
        siteVisitRequested: z.boolean().optional(),
        notes: z.string().optional()
      }),
      execute: async (input) => {
        const sb = getSupabaseAdmin();
        if (!sb) {
          await logAgentAction(
            sessionId,
            "createProjectInquiry",
            input,
            "error",
            "supabase not configured"
          );
          return { ok: false, error: "backend not configured" };
        }
        const { data, error } = await sb
          .from("project_inquiries")
          .insert({
            session_id: sessionId,
            lead_id: input.leadId ?? null,
            project_type: input.projectType,
            category: input.category ?? null,
            work_type: input.workType ?? null,
            location: input.location ?? null,
            approx_area_sqft: input.approxAreaSqft ?? null,
            budget: input.budget ?? null,
            timeline: input.timeline ?? null,
            site_visit_requested: input.siteVisitRequested ?? false,
            notes: input.notes ?? null,
            status: "new"
          })
          .select("id")
          .single();
        if (error) {
          await logAgentAction(sessionId, "createProjectInquiry", input, "error", error.message);
          return { ok: false, error: error.message };
        }
        await logAgentAction(sessionId, "createProjectInquiry", {
          ...input,
          inquiryId: data.id
        });
        return { ok: true, inquiryId: data.id };
      }
    }),

    notifyTeam: tool({
      description:
        "Notify the internal team about a new lead or project inquiry via n8n webhook.",
      inputSchema: z.object({
        leadId: z.string().optional(),
        inquiryId: z.string().optional(),
        summary: z.string()
      }),
      execute: async (input) => {
        const res = await postWebhook(process.env.N8N_NEW_LEAD_WEBHOOK, {
          sessionId,
          ...input,
          at: new Date().toISOString()
        });
        await logAgentAction(
          sessionId,
          "notifyTeam",
          { ...input, webhook: res },
          res.ok ? "success" : "error",
          res.ok ? undefined : "webhook not ok"
        );
        return { ok: res.ok };
      }
    }),

    sendCustomerConfirmation: tool({
      description:
        "Send a confirmation message to the customer (SMS/WhatsApp/email via n8n) that we received their enquiry.",
      inputSchema: z.object({
        name: z.string().optional(),
        phone: z.string().optional(),
        email: z.string().email().optional(),
        message: z.string()
      }),
      execute: async (input) => {
        const res = await postWebhook(
          process.env.N8N_CUSTOMER_CONFIRMATION_WEBHOOK,
          { sessionId, ...input, at: new Date().toISOString() }
        );
        await logAgentAction(
          sessionId,
          "sendCustomerConfirmation",
          { ...input, webhook: res },
          res.ok ? "success" : "error",
          res.ok ? undefined : "webhook not ok"
        );
        return { ok: res.ok };
      }
    }),

    scheduleFollowUp: tool({
      description:
        "Schedule a follow-up (callback or site visit) for the lead/customer.",
      inputSchema: z.object({
        leadId: z.string().optional(),
        inquiryId: z.string().optional(),
        followUpAt: z.string().describe("ISO datetime for the follow-up"),
        channel: z.enum(["call", "whatsapp", "email", "site_visit"]).optional(),
        notes: z.string().optional()
      }),
      execute: async (input) => {
        const sb = getSupabaseAdmin();
        if (!sb) {
          await logAgentAction(sessionId, "scheduleFollowUp", input, "error", "supabase not configured");
          return { ok: false, error: "backend not configured" };
        }
        const { data, error } = await sb
          .from("followups")
          .insert({
            session_id: sessionId,
            lead_id: input.leadId ?? null,
            inquiry_id: input.inquiryId ?? null,
            follow_up_at: input.followUpAt,
            channel: input.channel ?? "call",
            notes: input.notes ?? null,
            status: "pending"
          })
          .select("id")
          .single();
        if (error) {
          await logAgentAction(sessionId, "scheduleFollowUp", input, "error", error.message);
          return { ok: false, error: error.message };
        }
        await logAgentAction(sessionId, "scheduleFollowUp", { ...input, followupId: data.id });
        return { ok: true, followupId: data.id };
      }
    }),

    updateLeadStatus: tool({
      description:
        "Update the status of an existing lead (e.g., hot, warm, cold, not_interested, converted).",
      inputSchema: z.object({
        leadId: z.string(),
        status: z.enum(["new", "hot", "warm", "cold", "not_interested", "converted"]),
        notes: z.string().optional()
      }),
      execute: async (input) => {
        const sb = getSupabaseAdmin();
        if (!sb) {
          await logAgentAction(sessionId, "updateLeadStatus", input, "error", "supabase not configured");
          return { ok: false, error: "backend not configured" };
        }
        const { error } = await sb
          .from("leads")
          .update({
            status: input.status,
            notes: input.notes ?? null,
            updated_at: new Date().toISOString()
          })
          .eq("id", input.leadId);
        if (error) {
          await logAgentAction(sessionId, "updateLeadStatus", input, "error", error.message);
          return { ok: false, error: error.message };
        }
        await logAgentAction(sessionId, "updateLeadStatus", input);
        return { ok: true };
      }
    })
  };
}

async function getHistory(sessionId: string) {
  const sb = getSupabaseAdmin();
  if (!sb) return [];
  const { data, error } = await sb
    .from("conversations")
    .select("role, content")
    .eq("session_id", sessionId)
    .order("created_at", { ascending: true })
    .limit(30);
  if (error || !data) return [];
  return data.map((row: any) => ({
    role: row.role as "user" | "assistant",
    content: row.content as string
  }));
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);
    if (!body || typeof body.message !== "string" || typeof body.sessionId !== "string") {
      return NextResponse.json(
        { error: "Expected { message: string, sessionId: string }" },
        { status: 400 }
      );
    }
    const { message, sessionId } = body as { message: string; sessionId: string };

    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        {
          reply:
            "Thanks for reaching out! Our chat assistant is offline right now. Please call us or use the contact form and the team will get back to you shortly."
        },
        { status: 200 }
      );
    }

    const history = await getHistory(sessionId);
    await saveConversationTurn(sessionId, "user", message);

    const modelId = process.env.ANTHROPIC_MODEL || "claude-haiku-4-5-20251001";

    const result = await generateText({
      model: anthropic(modelId),
      system: SYSTEM_PROMPT,
      messages: [
        ...history.map((m) => ({ role: m.role, content: m.content })),
        { role: "user" as const, content: message }
      ],
      tools: buildTools(sessionId),
      stopWhen: stepCountIs(8)
    });

    const reply =
      result.text?.trim() ||
      "Thanks! Someone from our team will reach out shortly.";

    await saveConversationTurn(sessionId, "assistant", reply);

    return NextResponse.json({ reply });
  } catch (err: any) {
    console.error("/api/agent error:", err);
    return NextResponse.json(
      {
        reply:
          "Sorry, something went wrong on our side. Please share your phone number and we will call you back."
      },
      { status: 200 }
    );
  }
}
