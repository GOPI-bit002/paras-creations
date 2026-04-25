// Mock AI reply engine for Paras AI Assistant V1.
//
// SECURITY NOTE (V1):
// - All replies are produced by local pattern-matching. No external AI API call.
// - This intentionally avoids leaking employee, inventory, or private project data.
// - Never confirm contracts, final pricing, or government-tender eligibility from here.
// - Legal / payment / complaint / contract topics are routed to a human-handover reply.
//
// Future (do NOT enable in V1):
// - Replace replyTo() with a server-side route at /api/ai-agent that calls a real model
//   with strict system prompt, allow-listed knowledge, and rate limiting.
// - Pipe user input through a server-side validator (zod) and sanitizer before model use.
// - Add audit logging of every prompt/response with PII redaction.

import type { AIQuickAction } from "@/types/ai";

export const QUICK_ACTIONS: AIQuickAction[] = [
  {
    id: "quote",
    label: "Request construction quote",
    prompt: "I'd like to request a construction quote."
  },
  {
    id: "government",
    label: "Government project enquiry",
    prompt: "I have a government project enquiry."
  },
  {
    id: "private",
    label: "Private construction enquiry",
    prompt: "I want to discuss a private construction project."
  },
  {
    id: "completed",
    label: "View completed projects",
    prompt: "Can you tell me about your completed projects?"
  },
  {
    id: "talk",
    label: "Talk to team",
    prompt: "I'd like to talk to your team."
  }
];

export const WELCOME_MESSAGE =
  "Hello, I'm Paras AI Assistant. I can help you with construction enquiries, project quotations, services, and contact requests.";

export const HUMAN_HANDOVER =
  "This is best handled by our team directly. Please share your name and phone number and a Paras Creations representative will call you back within working hours.";

const SAFETY_DISCLAIMER =
  "Note: any quotation shared here is indicative only — the final quote requires a site visit and review by our team.";

type Intent =
  | "greeting"
  | "services"
  | "government"
  | "private"
  | "process"
  | "site_visit"
  | "contact"
  | "quotation"
  | "completed_projects"
  | "pricing_pressure"
  | "legal_payment"
  | "thanks"
  | "unknown";

function detectIntent(text: string): Intent {
  const t = text.toLowerCase().trim();

  if (/^(hi|hello|hey|namaste|good (morning|afternoon|evening))/.test(t))
    return "greeting";

  if (/(thank|thanks|shukriya|dhanyavad)/.test(t)) return "thanks";

  if (
    /(legal|lawyer|court|contract|agreement|payment dispute|refund|complaint|fraud|scam)/.test(
      t
    )
  )
    return "legal_payment";

  if (
    /(exact price|final price|guarantee|guaranteed|lowest price|cheapest|fix(ed)? rate)/.test(
      t
    )
  )
    return "pricing_pressure";

  if (/(government|govt|tender|psu|municipal|pwd)/.test(t)) return "government";

  if (
    /(private|house|home|villa|bungalow|apartment|flat|builder floor|interior|renovation|repair)/.test(
      t
    )
  )
    return "private";

  if (/(site visit|visit (the )?site|come (and )?(see|visit))/.test(t))
    return "site_visit";

  if (/(quote|quotation|estimate|cost|budget|price)/.test(t))
    return "quotation";

  if (/(completed|portfolio|past project|finished project|done project)/.test(t))
    return "completed_projects";

  if (/(contact|phone|whatsapp|email|reach|call)/.test(t)) return "contact";

  if (/(service|what do you (do|build|offer)|capabilities)/.test(t))
    return "services";

  if (/(process|how (do|does) (it|you) work|step|flow)/.test(t)) return "process";

  return "unknown";
}

const REPLIES: Record<Intent, string> = {
  greeting:
    "Hello! I'm Paras AI Assistant. Are you looking at a government project, a private build, a renovation, or interior work? I can guide you to the right next step.",

  services:
    "Paras Creations works on:\n• Government civil & infrastructure projects\n• Private residential construction (houses, villas, apartments)\n• Commercial construction\n• Renovation & repair work\n• Interior fit-out\n\nWhich of these is closest to what you're planning?",

  government:
    "For government project enquiries we'll need a few details:\n• Department / tender reference (if any)\n• Project location\n• Scope of work\n• Expected timeline\n\nShare what you have and I'll create an enquiry. Note: our eligibility for any specific tender is reviewed case-by-case by our team — I can't confirm tender eligibility from here.",

  private:
    "Great. For a private construction enquiry I usually capture: project type, location, approx budget, timeline, and a short brief. Would you like me to start a quick enquiry form?",

  process:
    "Our typical enquiry process:\n1. You share project details with me here\n2. Our team reviews and contacts you within working hours\n3. We schedule a site visit\n4. We share an indicative quotation after the visit\n5. Once finalised in writing, work is scheduled\n\nWant me to start step 1 now?",

  site_visit:
    "Sure — I can request a site visit on your behalf. I'll just need your name, phone number, project type, and site location. Shall we begin?",

  contact:
    "You can reach Paras Creations through the Contact page on this site, or I can take your details here and have the team call you back. Which do you prefer?",

  quotation: `For a quotation I'll collect: full name, phone, project type, project location, approx budget range, expected timeline, and a short brief. ${SAFETY_DISCLAIMER} Ready to start?`,

  completed_projects:
    "You can view our completed projects on the Projects page of this site. I can also create an enquiry referencing a similar past project if you tell me which one interests you.",

  pricing_pressure: `I can't promise an exact or final price from here — every project depends on site, scope, and material. ${SAFETY_DISCLAIMER} I can start an enquiry so our team gives you a proper indicative figure after a site visit.`,

  legal_payment: HUMAN_HANDOVER,

  thanks:
    "You're welcome. If you'd like me to create an enquiry now, just say 'start enquiry' and I'll collect the details.",

  unknown:
    "I can help with construction services, government and private projects, the enquiry process, site visit requests, and quotations. Could you rephrase, or pick one of the quick actions below?"
};

// Trigger phrases that start the structured lead-capture flow.
const ENQUIRY_TRIGGERS = [
  "start enquiry",
  "start the enquiry",
  "begin enquiry",
  "create enquiry",
  "create an enquiry",
  "yes start",
  "yes please",
  "yes",
  "ok start",
  "ok",
  "sure",
  "go ahead"
];

export function shouldStartLeadFlow(text: string): boolean {
  const t = text.toLowerCase().trim();
  if (!t) return false;
  if (ENQUIRY_TRIGGERS.some((p) => t === p || t.startsWith(p + " "))) return true;
  // Also offer the form whenever a quote/site visit intent is detected.
  const intent = detectIntent(t);
  return intent === "quotation" || intent === "site_visit" || intent === "private";
}

export function replyTo(text: string): string {
  const intent = detectIntent(text);
  return REPLIES[intent];
}

// Lightweight, defensive validators used by the lead capture flow.
// We do NOT persist this data anywhere in V1.
export function validatePhone(raw: string): string | null {
  const digits = raw.replace(/[^\d]/g, "");
  if (digits.length < 10 || digits.length > 13) return null;
  return digits;
}

export function validateName(raw: string): string | null {
  const trimmed = raw.trim();
  if (trimmed.length < 2 || trimmed.length > 80) return null;
  // Block obvious injection / URL attempts in a free-text name.
  if (/[<>\\{}|]/.test(trimmed)) return null;
  if (/https?:\/\//i.test(trimmed)) return null;
  return trimmed;
}

export function validateShortText(raw: string, max = 200): string | null {
  const trimmed = raw.trim();
  if (trimmed.length < 1 || trimmed.length > max) return null;
  if (/<script/i.test(trimmed)) return null;
  return trimmed;
}
