// Demo / mock AI enquiry leads for the admin dashboard.
//
// SECURITY NOTE (V1):
// - This is fake data. No real customer PII is stored here.
// - Future:
//   - Replace with Neon/Prisma-backed query, server-side only.
//   - Gate /admin/ai-leads behind real authentication + role-based access.
//   - Add rate limiting on the public widget that creates leads.
//   - Add audit logs for status changes.
//   - Send Resend email alert on new lead.

import type { AILead } from "@/types/ai";

export const mockAILeads: AILead[] = [
  {
    id: "ai-001",
    fullName: "Rohit Mehta",
    phone: "98xxxxxx21",
    projectType: "Private Building",
    location: "Jaipur, Rajasthan",
    budget: "₹45–60 L",
    timeline: "6–8 months",
    message: "Want to build a 3BHK independent house on a 200 sq yd plot.",
    status: "New",
    createdAt: "2026-04-23T09:14:00.000Z"
  },
  {
    id: "ai-002",
    fullName: "Sunita Verma",
    phone: "97xxxxxx08",
    projectType: "Renovation",
    location: "Sikar, Rajasthan",
    budget: "₹8–12 L",
    timeline: "2 months",
    message: "Old house renovation, kitchen and 2 bathrooms, plaster + tiles.",
    status: "Contacted",
    createdAt: "2026-04-22T11:42:00.000Z"
  },
  {
    id: "ai-003",
    fullName: "PWD — Tehsil Office",
    phone: "01xxxxxxxx",
    projectType: "Government Project",
    location: "Ajmer District",
    budget: "Tender — ref TBD",
    timeline: "FY 2026–27",
    message: "Boundary wall + access road tender enquiry.",
    status: "Site Visit",
    createdAt: "2026-04-20T08:05:00.000Z"
  },
  {
    id: "ai-004",
    fullName: "Anil Kapoor",
    phone: "99xxxxxx55",
    projectType: "Interior Work",
    location: "Jodhpur, Rajasthan",
    budget: "₹15–20 L",
    timeline: "3 months",
    message: "Full interior fit-out for newly built 4BHK villa.",
    status: "Quoted",
    createdAt: "2026-04-18T14:22:00.000Z"
  },
  {
    id: "ai-005",
    fullName: "Kavita Joshi",
    phone: "96xxxxxx14",
    projectType: "Private Building",
    location: "Udaipur, Rajasthan",
    budget: "₹70 L+",
    timeline: "10–12 months",
    message: "Twin-villa construction project, hill-side plot.",
    status: "Won",
    createdAt: "2026-04-10T10:00:00.000Z"
  },
  {
    id: "ai-006",
    fullName: "Manish Saxena",
    phone: "95xxxxxx77",
    projectType: "Commercial",
    location: "Kota, Rajasthan",
    budget: "₹30–40 L",
    timeline: "4 months",
    message: "Commercial showroom shell + facade.",
    status: "Lost",
    createdAt: "2026-04-05T13:30:00.000Z"
  },
  {
    id: "ai-007",
    fullName: "Deepak Singh",
    phone: "94xxxxxx02",
    projectType: "Private Building",
    location: "Bikaner, Rajasthan",
    budget: "₹25–35 L",
    timeline: "6 months",
    message: "Ground-floor construction over existing plinth.",
    status: "New",
    createdAt: "2026-04-24T16:45:00.000Z"
  },
  {
    id: "ai-008",
    fullName: "Nagar Palika — Site Office",
    phone: "01xxxxxxxx",
    projectType: "Government Project",
    location: "Pali, Rajasthan",
    budget: "Tender — ref TBD",
    timeline: "FY 2026–27",
    message: "Drainage line repair + footpath relaying.",
    status: "Site Visit",
    createdAt: "2026-04-21T09:30:00.000Z"
  }
];
