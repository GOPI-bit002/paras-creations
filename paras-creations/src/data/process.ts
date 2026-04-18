// ------------------------------------------
// How we work — edit process steps here
// ------------------------------------------

export interface ProcessStep {
  id: string;
  step: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: "p1",
    step: "01",
    title: "Consultation & Site Survey",
    description:
      "We visit your site, understand scope, budget, and timeline, and prepare an initial feasibility report."
  },
  {
    id: "p2",
    step: "02",
    title: "Design & Estimation",
    description:
      "Detailed drawings, BOQ, material plan, and a fully transparent itemised estimate — nothing hidden."
  },
  {
    id: "p3",
    step: "03",
    title: "Execution & Supervision",
    description:
      "Qualified site engineers, daily progress tracking, and strict quality control at every stage of construction."
  },
  {
    id: "p4",
    step: "04",
    title: "Handover & Support",
    description:
      "Final inspection, snag-list clearance, documentation, and post-handover support for peace of mind."
  }
];

export const industries = [
  "Government Tenders",
  "PWD Projects",
  "Municipal Works",
  "Residential Villas",
  "Commercial Plazas",
  "Warehousing",
  "Educational Institutes",
  "Renovations"
];
