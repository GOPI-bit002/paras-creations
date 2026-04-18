// ----------------------------------------------------------
// Projects demo data — edit entries to add/remove projects
// ----------------------------------------------------------
// Public Projects page and admin Projects page both read this.

import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "PRJ-001",
    name: "District Administrative Complex",
    clientType: "Government",
    status: "Ongoing",
    location: "Ludhiana, Punjab",
    startDate: "2025-08-10",
    description:
      "Construction of a 4-storey district administrative complex with underground parking and landscaped plaza.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
    progress: 65,
    budget: "₹ 8.5 Cr",
    siteManager: "Er. Rajeev Kumar"
  },
  {
    id: "PRJ-002",
    name: "PWD Rural Road Upgrade",
    clientType: "Government",
    status: "Ongoing",
    location: "Hoshiarpur, Punjab",
    startDate: "2025-11-02",
    description:
      "Upgrade of 14 km rural road with bituminous surfacing, culverts, and roadside drainage works.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
    progress: 40,
    budget: "₹ 3.2 Cr",
    siteManager: "Er. Sandeep Singh"
  },
  {
    id: "PRJ-003",
    name: "Sharma Residency — Luxury Villa",
    clientType: "Private",
    status: "Ongoing",
    location: "Chandigarh",
    startDate: "2026-01-05",
    description:
      "Turnkey construction of a 6,200 sq ft luxury villa with premium Italian marble finishing and smart-home wiring.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    progress: 25,
    budget: "₹ 2.1 Cr",
    siteManager: "Er. Harpreet Kaur"
  },
  {
    id: "PRJ-004",
    name: "Government Primary School Block",
    clientType: "Government",
    status: "Completed",
    location: "Jalandhar, Punjab",
    startDate: "2024-03-12",
    endDate: "2025-02-20",
    description:
      "Construction of a new school block with 12 classrooms, staff rooms, and sanitary facilities delivered on schedule.",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
    progress: 100,
    budget: "₹ 4.6 Cr"
  },
  {
    id: "PRJ-005",
    name: "Sai Commercial Plaza",
    clientType: "Private",
    status: "Completed",
    location: "Amritsar, Punjab",
    startDate: "2023-07-01",
    endDate: "2024-11-18",
    description:
      "Mixed-use commercial plaza with 3 basement levels, retail floors, and rooftop amenities.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    progress: 100,
    budget: "₹ 11.8 Cr"
  },
  {
    id: "PRJ-006",
    name: "Municipal Water Tank & Pumping Station",
    clientType: "Government",
    status: "Completed",
    location: "Mohali, Punjab",
    startDate: "2024-05-20",
    endDate: "2025-06-10",
    description:
      "RCC overhead water tank of 3 lakh litre capacity with attached pumping station and electrical room.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    progress: 100,
    budget: "₹ 2.9 Cr"
  },
  {
    id: "PRJ-007",
    name: "Malhotra Banquet Hall",
    clientType: "Private",
    status: "Ongoing",
    location: "Patiala, Punjab",
    startDate: "2025-12-12",
    description:
      "Banquet and event hall with capacity of 600 guests, premium interiors, and dedicated parking block.",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
    progress: 55,
    budget: "₹ 3.8 Cr",
    siteManager: "Er. Amit Bansal"
  },
  {
    id: "PRJ-008",
    name: "Greenfield Warehouse Complex",
    clientType: "Private",
    status: "Completed",
    location: "Bathinda, Punjab",
    startDate: "2023-10-02",
    endDate: "2024-08-30",
    description:
      "Industrial warehouse complex spanning 42,000 sq ft with pre-engineered steel structure and loading bays.",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80",
    progress: 100,
    budget: "₹ 6.2 Cr"
  }
];
