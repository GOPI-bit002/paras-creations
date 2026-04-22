"use client";

import { motion } from "framer-motion";
import { Briefcase, Car, Heart, Mountain } from "lucide-react";

const reasons = [
  {
    icon: <Mountain className="h-5 w-5" />,
    title: "Himachal Setting",
    text: "Experience the calm, scenic feel of Himachal Pradesh without straying far from the highway.",
  },
  {
    icon: <Car className="h-5 w-5" />,
    title: "Highway Convenience",
    text: "Located right on NH 503 — ideal for travellers passing between Una and Nangal.",
  },
  {
    icon: <Heart className="h-5 w-5" />,
    title: "Family Friendly",
    text: "Thoughtful rooms, safe surroundings and welcoming service for families of all sizes.",
  },
  {
    icon: <Briefcase className="h-5 w-5" />,
    title: "Business Ready",
    text: "Clean rooms, quick check-in and good connectivity for short work trips.",
  },
];

export default function WhyStay() {
  return (
    <section className="section-py bg-cream">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">Why Stay Here</span>
            <h2 className="heading">
              Comfort for every kind of traveller
            </h2>
            <p className="mt-5 max-w-xl text-charcoal/75">
              Hotel TARA is built for travellers who appreciate a simple,
              comfortable stay with real hospitality — whether you are on
              holiday, on business, or somewhere in between.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="card p-6"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold-dark">
                  {r.icon}
                </div>
                <h3 className="mt-4 font-serif text-xl text-charcoal">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm text-charcoal/70">{r.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
