// --------------------------------------------------------------
// Demo enquiry submissions — admin-side dashboard data.
// When a real backend is added, replace with a DB query.
// --------------------------------------------------------------

import type { Enquiry } from "@/types";

export const enquiries: Enquiry[] = [
  {
    id: "ENQ-301",
    name: "Rakesh Malhotra",
    mobile: "9812345601",
    projectType: "Private Villa",
    location: "Mohali",
    message:
      "Looking for a turnkey contractor to build a 3,500 sq ft villa on a 1 kanal plot. Need a quotation.",
    status: "New",
    createdAt: "2026-04-16"
  },
  {
    id: "ENQ-302",
    name: "Simran Kaur",
    mobile: "9812345602",
    projectType: "Commercial",
    location: "Ludhiana",
    message:
      "Planning a 3-storey showroom on main road. Please share past commercial project references.",
    status: "Contacted",
    createdAt: "2026-04-14"
  },
  {
    id: "ENQ-303",
    name: "Punjab Municipal Board",
    mobile: "1722456789",
    projectType: "Government Tender",
    location: "Patiala",
    message: "Seeking bid for municipal road upgrade. Tender documents attached separately.",
    status: "Contacted",
    createdAt: "2026-04-10"
  },
  {
    id: "ENQ-304",
    name: "Amanjot Singh",
    mobile: "9812345604",
    projectType: "Renovation",
    location: "Jalandhar",
    message: "Renovation of a 20-year-old house including modular kitchen and new flooring.",
    status: "Closed",
    createdAt: "2026-04-05"
  },
  {
    id: "ENQ-305",
    name: "Dr. Anjali Gupta",
    mobile: "9812345605",
    projectType: "Clinic Construction",
    location: "Chandigarh",
    message: "Need to build a 2-floor clinic with basement parking. Site already finalised.",
    status: "New",
    createdAt: "2026-04-17"
  }
];
