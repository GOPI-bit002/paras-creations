// -------------------------------------------------------
// Client testimonials — edit to add or change quotes
// -------------------------------------------------------

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Rajbir Singh",
    role: "Private Client · Luxury Villa, Chandigarh",
    quote:
      "Paras Creations delivered our villa exactly on time and the finishing quality exceeded what we expected. Manoj sir personally oversaw every milestone.",
    initials: "RS"
  },
  {
    id: "t2",
    name: "Municipal Engineer",
    role: "Government Department, Punjab",
    quote:
      "Professional documentation, timely billing, and flawless execution on our water-tank project. A dependable government contractor.",
    initials: "ME"
  },
  {
    id: "t3",
    name: "Anita Malhotra",
    role: "Commercial Client · Banquet Hall",
    quote:
      "From design coordination to handover, the team managed everything transparently. Pricing was fair and quality was genuinely premium.",
    initials: "AM"
  }
];
