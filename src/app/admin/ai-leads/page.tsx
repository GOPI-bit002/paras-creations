// /admin/ai-leads — demo dashboard for AI-captured enquiries.
//
// SECURITY NOTE (V1):
// - Reads only mock data from src/lib/mock-ai-leads.ts. No DB call.
// - Already nested inside the AdminAuthGate via src/app/admin/layout.tsx.
//   FUTURE: replace AdminAuthGate with real session-based auth + RBAC
//   (only "admin" / "sales" roles should see PII).
// - FUTURE additions:
//   * Pagination + server-side filtering once data is real.
//   * Status update mutation -> POST /api/ai-leads/:id with audit log.
//   * Resend email alert on "New" inserts.
//   * Rate limiting on the public widget that creates these.

import AdminHeader from "@/components/admin/AdminHeader";
import StatCard from "@/components/admin/StatCard";
import { mockAILeads } from "@/lib/mock-ai-leads";
import { formatDate } from "@/lib/utils";
import type { AILeadStatus } from "@/types/ai";

export const metadata = { title: "AI Leads — Paras Creations Admin" };

const STATUS_STYLES: Record<AILeadStatus, string> = {
  New: "bg-amber-100 text-amber-800 border border-amber-200",
  Contacted: "bg-blue-100 text-blue-800 border border-blue-200",
  "Site Visit": "bg-violet-100 text-violet-800 border border-violet-200",
  Quoted: "bg-indigo-100 text-indigo-800 border border-indigo-200",
  Won: "bg-emerald-100 text-emerald-800 border border-emerald-200",
  Lost: "bg-gray-100 text-gray-600 border border-gray-200"
};

export default function AILeadsPage() {
  const leads = [...mockAILeads].sort(
    (a, b) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  const total = leads.length;
  const newCount = leads.filter((l) => l.status === "New").length;
  const siteVisits = leads.filter((l) => l.status === "Site Visit").length;
  const quotesPending = leads.filter(
    (l) => l.status === "Contacted" || l.status === "Site Visit"
  ).length;

  return (
    <div>
      <AdminHeader
        title="AI Enquiries"
        description="Leads captured by Paras AI Assistant. V1 shows demo data only — no real customer PII is stored."
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard
          label="Total AI Enquiries"
          value={total}
          icon="🤖"
          accent="gold"
          hint="All-time (mock)"
        />
        <StatCard
          label="New Enquiries"
          value={newCount}
          icon="✦"
          accent="red"
          hint="Awaiting first contact"
        />
        <StatCard
          label="Site Visits Requested"
          value={siteVisits}
          icon="📍"
          accent="black"
        />
        <StatCard
          label="Quotes Pending"
          value={quotesPending}
          icon="📝"
          accent="blue"
          hint="Contacted + Site Visit"
        />
      </div>

      <div className="mt-8 card p-0 overflow-hidden">
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <div>
            <h3 className="font-display font-bold text-lg text-brand-black">
              All AI Enquiries
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">
              Showing {leads.length} demo enquiries · sorted by newest first.
            </p>
          </div>
          <span className="chip bg-brand-gold/15 text-brand-black border border-brand-gold/30">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
            Mock data
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-[11px] uppercase tracking-wider text-gray-500 bg-gray-50 border-b border-gray-100">
                <th className="px-5 py-3 font-semibold">Name</th>
                <th className="px-5 py-3 font-semibold">Phone</th>
                <th className="px-5 py-3 font-semibold">Project Type</th>
                <th className="px-5 py-3 font-semibold">Location</th>
                <th className="px-5 py-3 font-semibold">Budget</th>
                <th className="px-5 py-3 font-semibold">Timeline</th>
                <th className="px-5 py-3 font-semibold">Status</th>
                <th className="px-5 py-3 font-semibold">Created</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr
                  key={lead.id}
                  className="border-b border-gray-50 hover:bg-brand-soft/60 transition-colors"
                >
                  <td className="px-5 py-3.5">
                    <div className="font-semibold text-brand-black">
                      {lead.fullName}
                    </div>
                    <div className="text-[11px] text-gray-400 mt-0.5">
                      {lead.id}
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-gray-700 font-mono text-xs">
                    {lead.phone}
                  </td>
                  <td className="px-5 py-3.5 text-gray-700">
                    {lead.projectType}
                  </td>
                  <td className="px-5 py-3.5 text-gray-700">{lead.location}</td>
                  <td className="px-5 py-3.5 text-gray-700">{lead.budget}</td>
                  <td className="px-5 py-3.5 text-gray-700">{lead.timeline}</td>
                  <td className="px-5 py-3.5">
                    <span
                      className={`chip ${STATUS_STYLES[lead.status]}`}
                    >
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-gray-500 text-xs">
                    {formatDate(lead.createdAt)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50/60 p-4 text-xs text-amber-900 leading-relaxed">
        <strong className="font-semibold">Security reminder (V1):</strong> the
        AI Assistant operates with mock replies only. Quotations shared via the
        widget are indicative — final quotes require team review and a site
        visit. Government tender eligibility is never confirmed by the
        assistant.
      </div>
    </div>
  );
}
