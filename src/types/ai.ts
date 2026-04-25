// AI Assistant types — Paras AI Assistant V1
// Note: V1 is mock-only. No real AI/database/PII storage yet.

export type AIRole = "user" | "assistant" | "system";

export interface AIMessage {
  id: string;
  role: AIRole;
  content: string;
  createdAt: string;
}

export type AILeadStatus =
  | "New"
  | "Contacted"
  | "Site Visit"
  | "Quoted"
  | "Won"
  | "Lost";

export type AIProjectType =
  | "Government Project"
  | "Private Building"
  | "Renovation"
  | "Interior Work"
  | "Commercial"
  | "Other";

export interface AILead {
  id: string;
  fullName: string;
  phone: string;
  projectType: AIProjectType | string;
  location: string;
  budget: string;
  timeline: string;
  message: string;
  status: AILeadStatus;
  createdAt: string;
  // Future:
  // - source channel (web/whatsapp/etc.)
  // - assignedTo (admin user id)
  // - audit fields (createdBy, updatedBy, ipHash) once auth + audit logs land
}

export type AIQuickActionId =
  | "quote"
  | "government"
  | "private"
  | "completed"
  | "talk";

export interface AIQuickAction {
  id: AIQuickActionId;
  label: string;
  prompt: string;
}

// Stages for the in-chat lead capture flow.
export type AILeadStage =
  | "idle"
  | "fullName"
  | "phone"
  | "projectType"
  | "location"
  | "budget"
  | "timeline"
  | "message"
  | "submitted";

export interface AILeadDraft {
  fullName?: string;
  phone?: string;
  projectType?: string;
  location?: string;
  budget?: string;
  timeline?: string;
  message?: string;
}
