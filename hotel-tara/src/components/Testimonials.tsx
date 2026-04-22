"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const reviews = [
  {
    name: "Amit Sharma",
    role: "Traveller",
    text: "Clean, calm and friendly. We stayed on our way through Himachal and the service was genuinely warm. A comfortable break from the road.",
  },
  {
    name: "Neha Verma",
    role: "Family stay",
    text: "Lovely rooms for the family. The staff were polite and helpful, and the location on the highway made our trip very easy to plan.",
  },
  {
    name: "Rajiv Thakur",
    role: "Business visit",
    text: "Stayed overnight for work. Quiet room, fast check-in and good food on request. Would happily return on my next trip to Una.",
  },
];

export default function Testimonials() {
  return (
    <section className="section-py bg-forest text-cream">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">
            Guest Stories
          </span>
          <h2 className="font-serif text-3xl leading-tight md:text-5xl">
            Kind words from our guests
          </h2>
          <p className="mt-4 text-cream/80">
            Real thoughts from travellers who made Hotel TARA a part of their
            journey.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.blockquote
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-xl2 bg-white/5 p-7 ring-1 ring-white/10 backdrop-blur"
            >
              <Quote className="h-7 w-7 text-gold-light" />
              <p className="mt-4 text-base leading-relaxed text-cream/90">
                “{r.text}”
              </p>
              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                <div>
                  <p className="font-serif text-lg text-cream">{r.name}</p>
                  <p className="text-xs uppercase tracking-widest text-cream/60">
                    {r.role}
                  </p>
                </div>
                <div className="flex items-center gap-0.5 text-gold-light">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-gold-light" />
                  ))}
                </div>
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
